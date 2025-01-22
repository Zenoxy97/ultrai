import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export interface MediaFile {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  created_at: string;
  updated_at: string;
  article_id?: string;
  user_id: string;
  path: string;
}

class MediaService {
  private readonly bucket = 'media';

  async getFiles(folder?: string): Promise<MediaFile[]> {
    const path = folder ? `${folder}/` : '';
    const { data, error } = await supabase.storage
      .from(this.bucket)
      .list(path);

    if (error) throw error;

    return data.map(file => ({
      id: file.id,
      name: file.name,
      url: this.getPublicUrl(file.name, folder),
      size: file.metadata.size,
      type: file.metadata.mimetype,
      created_at: file.created_at,
      updated_at: file.updated_at,
      path: folder ? `${folder}/${file.name}` : file.name,
      user_id: file.metadata.user_id,
    }));
  }

  async uploadFile(file: File, folder?: string): Promise<MediaFile> {
    const path = folder ? `${folder}/` : '';
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${path}${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(this.bucket)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from(this.bucket)
      .getPublicUrl(filePath);

    const mediaFile: MediaFile = {
      id: uuidv4(),
      name: file.name,
      url: publicUrl,
      size: file.size,
      type: file.type,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      user_id: (await supabase.auth.getUser()).data.user?.id || '',
      path: filePath,
    };

    return mediaFile;
  }

  async deleteFile(path: string): Promise<void> {
    const { error } = await supabase.storage
      .from(this.bucket)
      .remove([path]);

    if (error) throw error;
  }

  getPublicUrl(fileName: string, folder?: string): string {
    const path = folder ? `${folder}/${fileName}` : fileName;
    const { data: { publicUrl } } = supabase.storage
      .from(this.bucket)
      .getPublicUrl(path);

    return publicUrl;
  }

  async moveFile(oldPath: string, newPath: string): Promise<void> {
    const { error: moveError } = await supabase.storage
      .from(this.bucket)
      .move(oldPath, newPath);

    if (moveError) throw moveError;
  }

  async copyFile(sourcePath: string, destinationPath: string): Promise<void> {
    const { error: copyError } = await supabase.storage
      .from(this.bucket)
      .copy(sourcePath, destinationPath);

    if (copyError) throw copyError;
  }

  generateThumbnail(url: string, width: number = 200, height: number = 200): string {
    const { data: { publicUrl } } = supabase.storage
      .from(this.bucket)
      .getPublicUrl(url, {
        transform: {
          width,
          height,
          resize: 'cover'
        }
      });

    return publicUrl;
  }
}

export const mediaService = new MediaService();
