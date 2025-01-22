import { createBrowserRouter } from 'react-router-dom';
import ArticleList from '@/components/admin/ArticleList';
import { ArticleEditor } from '@/components/admin/ArticleEditor';
import AdminLayout from '@/layouts/AdminLayout';

export const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'articles',
        element: <ArticleList />,
      },
      {
        path: 'articles/new',
        element: <ArticleEditor />,
      },
      {
        path: 'articles/:id/edit',
        element: <ArticleEditor />,
      },
    ],
  },
]);
