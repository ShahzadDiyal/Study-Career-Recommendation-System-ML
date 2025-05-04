import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import RecommendationFormPage from '../pages/RecommendationFormPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import ForBetterRecommendationsPage from '../pages/ForBetterRecommendationsPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import SupportPage from '../pages/SupportPage';
import GetRecommendation from '../components/GetRecommendation';
import HowItWorksPage from '../pages/HowItWorksPage';

const appRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/recommendation-form" element={<RecommendationFormPage />} />
                <Route path="/get-recommendation" element={<GetRecommendation />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/get-better-recommendation" element={<ForBetterRecommendationsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default appRoutes