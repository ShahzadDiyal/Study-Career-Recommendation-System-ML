import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import Main from '../components/Home';
import RecommendationFormPage from '../pages/RecommendationFormPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';


const appRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/recommendation-form" element={<RecommendationFormPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default appRoutes