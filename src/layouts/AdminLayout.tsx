import { Outlet, Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function AdminLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Articles', href: '/admin/articles' },
    // Ajoutez d'autres liens de navigation ici
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/admin" className="text-xl font-bold text-gray-900">
                  Administration
                </Link>
              </div>
              <div className="ml-6 flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      location.pathname.startsWith(item.href)
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <Outlet />
      </main>
    </div>
  );
}
