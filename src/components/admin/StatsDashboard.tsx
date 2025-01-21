import { useState, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { ArticleStats, DailyStats, statsService } from '../../services/statsService';
import { articleService } from '../../services/articleService';

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

interface ArticleWithStats extends ArticleStats {
  title?: string;
}

export default function StatsDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(30);
  const [topArticles, setTopArticles] = useState<ArticleWithStats[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadStats();
  }, [selectedPeriod]);

  const loadStats = async () => {
    try {
      setLoading(true);

      // Charger les articles les plus vus
      const mostViewed = await statsService.getMostViewedArticles(5);
      const articlesWithTitles = await Promise.all(
        mostViewed.map(async (stats) => {
          try {
            const article = await articleService.getArticle(stats.articleId);
            return {
              ...stats,
              title: article?.title || 'Article supprimé'
            };
          } catch (err) {
            return {
              ...stats,
              title: 'Article non trouvé'
            };
          }
        })
      );
      setTopArticles(articlesWithTitles);

      // Charger les statistiques journalières du premier article
      if (articlesWithTitles.length > 0) {
        const stats = await statsService.getDailyStats(articlesWithTitles[0].articleId, selectedPeriod);
        setDailyStats(stats);
      }
    } catch (err) {
      setError('Erreur lors du chargement des statistiques');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const viewsData = {
    labels: dailyStats.map(stat => stat.date),
    datasets: [
      {
        label: 'Vues',
        data: dailyStats.map(stat => stat.views),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4
      },
      {
        label: 'Visiteurs uniques',
        data: dailyStats.map(stat => stat.uniqueVisitors),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.4
      }
    ]
  };

  const deviceData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [{
      data: topArticles.length > 0 ? [
        topArticles[0].deviceStats.mobile,
        topArticles[0].deviceStats.desktop,
        topArticles[0].deviceStats.tablet
      ] : [],
      backgroundColor: [
        'rgba(59, 130, 246, 0.5)',
        'rgba(16, 185, 129, 0.5)',
        'rgba(251, 191, 36, 0.5)'
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(251, 191, 36)'
      ],
      borderWidth: 1
    }]
  };

  const sharesData = {
    labels: ['Facebook', 'Twitter', 'LinkedIn', 'Email'],
    datasets: [{
      data: topArticles.length > 0 ? [
        topArticles[0].shares.facebook,
        topArticles[0].shares.twitter,
        topArticles[0].shares.linkedin,
        topArticles[0].shares.email
      ] : [],
      backgroundColor: [
        'rgba(66, 103, 178, 0.5)',
        'rgba(29, 161, 242, 0.5)',
        'rgba(0, 119, 181, 0.5)',
        'rgba(234, 67, 53, 0.5)'
      ],
      borderColor: [
        'rgb(66, 103, 178)',
        'rgb(29, 161, 242)',
        'rgb(0, 119, 181)',
        'rgb(234, 67, 53)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Statistiques des articles
        </h1>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(Number(e.target.value))}
          className="ml-4 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value={7}>7 jours</option>
          <option value={30}>30 jours</option>
          <option value={90}>90 jours</option>
        </select>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Articles les plus vus */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Articles les plus vus
          </h2>
          <div className="space-y-4">
            {topArticles.map((article, index) => (
              <div key={article.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-500 w-8">
                    #{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {statsService.formatNumber(article.views)} vues
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {statsService.formatNumber(article.uniqueVisitors)} visiteurs
                  </p>
                  <p className="text-sm text-gray-500">
                    {Math.round((article.uniqueVisitors / article.views) * 100)}% uniques
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Graphique des vues */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Évolution des vues
          </h2>
          <div className="h-64">
            <Line
              data={viewsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Répartition par appareil */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Répartition par appareil
          </h2>
          <div className="h-64">
            <Pie
              data={deviceData}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Partages sociaux */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Partages sociaux
          </h2>
          <div className="h-64">
            <Bar
              data={sharesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-25 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}
