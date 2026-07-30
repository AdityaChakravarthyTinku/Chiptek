import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import PageTransition from "./components/layout/PageTransition.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { services } from "./content/services.js";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {services.map((service) => (
              <Route
                key={service.slug}
                path={`/services/${service.slug}`}
                element={<ServiceDetailPage slug={service.slug} />}
              />
            ))}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
