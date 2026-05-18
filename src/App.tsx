import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./i18n/I18nProvider";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Quote } from "./pages/Quote";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { CaseStudies } from "./pages/CaseStudies";
import { Technology } from "./pages/Technology";
import { FAQ } from "./pages/FAQ";
import "./i18n/config";

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cases" element={<CaseStudies />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Redirect other routes to home for now as they are placeholders */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </I18nProvider>
  );
}
