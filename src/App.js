import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import News from './pages/News';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Header from './components/Header';
import Footer from './components/Footer';

// ScrollToTop コンポーネントを追加
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
    <ScrollToTop />
    <div className="App flex flex-col min-h-screen w-full relative">
      <Header />
      <main className="flex-grow w-full "> {/* ヘッダーの高さ分のパディングを追加 */}
        <div className="max-w-full mx-auto">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/news" element={<News />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/recruit" element={<Recruit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;