import React, { useState, useEffect } from 'react';
import { SearchFilters, SearchResults, searchService } from '../../services/searchService';
import { Article } from '../../types/Article';

export const AdvancedSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResults | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    category: '',
    tags: [],
    author: '',
    status: 'published'
  });
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length >= 2) {
        const results = await searchService.getSuggestions(searchQuery);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const searchResults = await searchService.searchArticles(searchQuery, filters);
      setResults(searchResults);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = async () => {
    if (!results?.lastDoc) return;

    try {
      const nextResults = await searchService.searchArticles(searchQuery, filters, 10, results.lastDoc);
      setResults({
        articles: [...(results?.articles || []), ...(nextResults?.articles || [])],
        hasMore: nextResults.hasMore,
        lastDoc: nextResults.lastDoc
      });
    } catch (error) {
      console.error('Erreur lors du chargement de plus de résultats:', error);
    }
  };

  const renderArticleCard = (article: Article) => {
    const highlightedTitle = searchService.highlightSearchTerms(article.title, searchQuery);
    const highlightedDescription = article.description
      ? searchService.highlightSearchTerms(article.description, searchQuery)
      : '';

    return (
      <div key={article.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
        {article.description && (
          <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
        )}
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Rechercher..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setSuggestions([]);
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Filtres</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Catégorie
            </label>
            <select
              value={filters.category}
              onChange={e => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Toutes les catégories</option>
              <option value="tech">Technologie</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Auteur
            </label>
            <input
              type="text"
              value={filters.author || ''}
              onChange={e => setFilters(prev => ({ ...prev, author: e.target.value }))}
              placeholder="Nom de l'auteur"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {filters.tags?.map(tag => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    tags: prev.tags?.filter(t => t !== tag) || []
                  }))}
                  className="text-blue-800 hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? 'Recherche en cours...' : 'Rechercher'}
        </button>
      </div>

      {results && (
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              {results.articles.length} résultat(s) trouvé(s)
            </h2>
          </div>

          <div className="space-y-4">
            {results.articles.map(renderArticleCard)}
          </div>

          {results.hasMore && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium"
              >
                Charger plus
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
