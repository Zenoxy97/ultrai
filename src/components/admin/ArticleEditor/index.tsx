import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '@/types/Article';
import { articleService } from '@/services/articleService';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArticleForm } from './ArticleForm';
import { Markdown } from '@/components/ui/markdown';

function ArticleEditor() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Partial<Article> | undefined>();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');

  useEffect(() => {
    if (id) {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const data = await articleService.getArticle(id!);
      setArticle(data);
    } catch (error) {
      console.error('Error loading article:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: Partial<Article>) => {
    try {
      setSaving(true);
      const input = {
        ...data,
        title: data.title!,
        content: data.content!,
        status: data.status || 'draft',
        tags: data.tags || [],
      };

      if (id) {
        await articleService.updateArticle(id, input);
      } else {
        await articleService.createArticle(input);
      }
      // Redirect to articles list or show success message
    } catch (error) {
      console.error('Error saving article:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'write' | 'preview')}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              {id ? 'Edit Article' : 'New Article'}
            </h1>
            <TabsList>
              <TabsTrigger value="write">Write</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="write">
            <ArticleForm
              article={article}
              onSubmit={handleSubmit}
              isLoading={saving}
            />
          </TabsContent>

          <TabsContent value="preview">
            {article ? (
              <article className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                {article.excerpt && (
                  <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>
                )}
                <Markdown content={article.content || ''} />
              </article>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No content to preview
              </div>
            )}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

export default ArticleEditor;
