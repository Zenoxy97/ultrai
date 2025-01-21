import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Article, articleService } from '../../services/articleService';
import ArticlePreview from './ArticlePreview';
import MediaManager from './MediaManager';

const INITIAL_ARTICLE: Omit<Article, 'id'> = {
  title: '',
  content: '',
  slug: '',
  published: false,
  date: new Date(),
  tags: [],
  category: ''
};

const CATEGORIES = [
  'Intelligence Artificielle',
  'Développement Web',
  'Business',
  'Innovation',
  'Technologie'
];

export default function ArticleEditor() {
  const [article, setArticle] = useState<Partial<Article>>(INITIAL_ARTICLE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tagInput, setTagInput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [showMediaManager, setShowMediaManager] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadArticle(id);
    }
  }, [id]);

  const loadArticle = async (articleId: string) => {
    try {
      setLoading(true);
      const articles = await articleService.getAllArticles();
      const foundArticle = articles.find(a => a.id === articleId);
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        setError('Article non trouvé');
      }
    } catch (err) {
      setError('Erreur lors du chargement de l\'article');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleTagAdd = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!article.tags?.includes(tagInput.trim())) {
        setArticle(prev => ({
          ...prev,
          tags: [...(prev.tags || []), tagInput.trim()]
        }));
      }
      setTagInput('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setArticle(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!article.title) {
        setError('Le titre est requis');
        return;
      }

      // Générer le slug si nécessaire
      if (!article.slug) {
        article.slug = articleService.generateSlug(article.title);
      }

      // Upload de l'image si présente
      if (imageFile) {
        const imageUrl = await articleService.uploadImage(
          imageFile,
          `${article.slug}/${imageFile.name}`
        );
        article.imageUrl = imageUrl;
      }

      if (id) {
        await articleService.updateArticle(id, article);
      } else {
        await articleService.createArticle(article as Omit<Article, 'id'>);
      }

      navigate('/admin/dashboard');
    } catch (err) {
      setError('Erreur lors de la sauvegarde de l\'article');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMediaSelect = (url: string) => {
    // Insérer l'URL de l'image dans l'éditeur
    const editor = (document.querySelector('.ql-editor') as HTMLElement);
    if (editor) {
      const img = document.createElement('img');
      img.src = url;
      img.style.maxWidth = '100%';
      editor.appendChild(img);
    }
    setShowMediaManager(false);
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: () => setShowMediaManager(true)
      }
    }
  }), []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {id ? 'Modifier l\'article' : 'Nouvel article'}
            </h1>
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Prévisualiser
            </button>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {/* Titre */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                id="title"
                value={article.title}
                onChange={(e) => setArticle({ ...article, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image de couverture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full"
              />
              {article.imageUrl && (
                <img
                  src={article.imageUrl}
                  alt="Preview"
                  className="mt-2 h-32 w-auto object-cover rounded"
                />
              )}
            </div>

            {/* Catégorie */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Catégorie
              </label>
              <select
                id="category"
                value={article.category}
                onChange={(e) => setArticle({ ...article, category: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Sélectionner une catégorie</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagAdd}
                  placeholder="Appuyez sur Entrée pour ajouter un tag"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {article.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="ml-1 inline-flex items-center p-0.5 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Éditeur de contenu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenu
              </label>
              <div className="prose max-w-none">
                <ReactQuill
                  theme="snow"
                  value={article.content}
                  onChange={(content) => setArticle({ ...article, content })}
                  modules={modules}
                  className="h-96 mb-12"
                />
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/admin/dashboard')}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => setArticle({ ...article, published: false })}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enregistrer comme brouillon
              </button>
              <button
                type="button"
                onClick={() => {
                  setArticle({ ...article, published: true });
                  handleSave();
                }}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Publier
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMediaManager && (
        <MediaManager
          onSelect={handleMediaSelect}
          onClose={() => setShowMediaManager(false)}
        />
      )}
      {showPreview && (
        <ArticlePreview
          article={article}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}
