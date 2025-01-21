import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Hero } from "./components/sections/Hero";
import { LatestArticles } from "./components/sections/LatestArticles";
import { Territories } from "./components/sections/Territories";
import { Testimonials } from "./components/sections/Testimonials";
import { RecommendedTools } from "./components/sections/RecommendedTools";
import Services from "./components/sections/Services";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton';
import Offre from './pages/offre';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import ArticleEditor from './components/admin/ArticleEditor';
import ProtectedRoute from './components/admin/ProtectedRoute';
import CategoryManager from './components/admin/CategoryManager';
import CommentModeration from './components/admin/CommentModeration';
import StatsDashboard from './components/admin/StatsDashboard';
import { AdvancedSearch } from './components/search/AdvancedSearch';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/admin/login';
import ArticlesPage from './pages/admin/articles';
import AdminLayout from './components/admin/AdminLayout';
import DashboardPage from './pages/admin/dashboard';

function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <Services />
      <section id="articles">
        <LatestArticles />
      </section>
      <section id="territories">
        <Territories />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="tools">
        <RecommendedTools />
      </section>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/offre" element={<Offre />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/articles" element={<ArticlesPage />} />
                    </Routes>
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/articles/new"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/articles/:id/edit"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <ProtectedRoute>
                  <CategoryManager />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/comments"
              element={
                <ProtectedRoute>
                  <CommentModeration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/stats"
              element={
                <ProtectedRoute>
                  <StatsDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/search" element={<AdvancedSearch />} />
          </Route>
        </Routes>
        <FloatingWhatsAppButton />
      </Router>
    </AuthProvider>
  );
}

export default App;