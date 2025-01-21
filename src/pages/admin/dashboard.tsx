import { useState, useEffect } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Card } from '@/components/ui/card';
import { FileText, Users, Eye, Calendar } from 'lucide-react';

interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalViews: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    totalViews: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const articlesRef = collection(db, 'articles');
        
        // Total articles
        const totalSnapshot = await getDocs(articlesRef);
        const total = totalSnapshot.size;

        // Published articles
        const publishedQuery = query(articlesRef, where('status', '==', 'published'));
        const publishedSnapshot = await getDocs(publishedQuery);
        const published = publishedSnapshot.size;

        setStats({
          totalArticles: total,
          publishedArticles: published,
          draftArticles: total - published,
          totalViews: publishedSnapshot.docs.reduce((acc, doc) => acc + (doc.data().views || 0), 0),
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Articles</p>
              <p className="text-2xl font-semibold">{stats.totalArticles}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Articles Publiés</p>
              <p className="text-2xl font-semibold">{stats.publishedArticles}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Brouillons</p>
              <p className="text-2xl font-semibold">{stats.draftArticles}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <Eye className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Vues</p>
              <p className="text-2xl font-semibold">{stats.totalViews}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Articles Récents</h2>
          {/* Liste des articles récents à implémenter */}
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Activité Récente</h2>
          {/* Liste des activités récentes à implémenter */}
        </Card>
      </div>
    </div>
  );
}
