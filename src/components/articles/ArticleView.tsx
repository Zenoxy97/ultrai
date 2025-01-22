import { Article } from '@/types/Article';
import { formatDate } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  isLoading?: boolean;
  isPreview?: boolean;
}

export default function ArticleView({ article, isLoading, isPreview }: ArticleViewProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Article non trouvé</p>
      </div>
    );
  }

  return (
    <article className="container mx-auto py-8 space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{article.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {article.cover_image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={article.cover_image}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            {article.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          <Separator orientation="vertical" className="h-4" />

          {isPreview ? (
            <></>
          ) : (
            <time dateTime={article.published_at || article.created_at}>
              {formatDate(article.published_at || article.created_at)}
            </time>
          )}
        </div>
      </header>

      {article.excerpt && (
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground">{article.excerpt}</p>
        </div>
      )}

      <Separator />

      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

      <footer className="pt-8">
        <Card className="p-6">
          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </footer>
    </article>
  );
}
