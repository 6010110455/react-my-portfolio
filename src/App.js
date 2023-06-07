import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";

const About = lazy(() => import("./pages/AboutMe"));
const Galleries = lazy(() => import("./pages/Galleries"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>THANACHIT</title>
        <meta
          name="description"
          content="This is a website that gathers Thanachit's projects and skills."
        />
        <meta
          name="keywords"
          content="thanachit sengsalee, sengsalee, thanachit portfolio, thanachit, benz, ธนชิต เส็งสาลี, ธนชิต, เส็งสาลี, benz thanachit, benz sengsalee, sengsalee family"
        />
        {/* Facebook meta tags below */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="benz.sengsalee.com" />
        <meta
          property="og:title"
          content="My portfolio - Hi, i am Thanachit Sengsalee."
        />
        <meta
          property="og:description"
          content="This is a website that gathers Thanachit's projects and skills."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/mydev_eonlineshop/others/thumbnails/1676697057106_1024x1024.png"
        />
        <meta
          name="google-site-verification"
          content="2HSSIHsakNFao9y4Sywcx-siP9G1a1ccev9hdetKkak"
        />
      </Helmet>

      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Router>
            <ScrollToTop />
            <AppHeader />
            <Suspense fallback={""}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route
                  path="projects/single-project"
                  element={<ProjectSingle />}
                />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Galleries />} />
                <Route
                  path="*"
                  element={<div>Error 404 Page not found!</div>}
                />
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
