import { ref, uploadBytes, getDownloadURL, listAll, deleteObject, getMetadata } from 'firebase/storage';
import { storage } from '../config/firebase';

export interface MediaFile {
  name: string;
  url: string;
  path: string;
  type: string;
  size: number;
  uploadedAt: Date;
}

export const mediaService = {
  // Upload un fichier
  async uploadFile(file: File, path: string): Promise<MediaFile> {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    return {
      name: file.name,
      url,
      path,
      type: file.type,
      size: file.size,
      uploadedAt: new Date()
    };
  },

  // Récupérer tous les fichiers d'un dossier
  async getFiles(folder: string): Promise<MediaFile[]> {
    const folderRef = ref(storage, folder);
    const result = await listAll(folderRef);
    
    const files = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);
        
        return {
          name: itemRef.name,
          url,
          path: itemRef.fullPath,
          type: metadata.contentType || '',
          size: metadata.size || 0,
          uploadedAt: new Date(metadata.timeCreated)
        };
      })
    );

    return files;
  },

  // Supprimer un fichier
  async deleteFile(path: string): Promise<void> {
    const fileRef = ref(storage, path);
    await deleteObject(fileRef);
  },

  // Générer un nom de fichier unique
  generateFileName(file: File): string {
    const extension = file.name.split('.').pop();
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomString}.${extension}`;
  },

  // Vérifier si un fichier est une image
  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  },

  // Formater la taille du fichier
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }
};
