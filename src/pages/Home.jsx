import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";

const Home = () => {
  return (
    <>
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
      <div className="container mx-auto">
        <AppBanner></AppBanner>

        <ProjectsProvider>
          <ProjectsGrid></ProjectsGrid>
        </ProjectsProvider>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            to="/projects"
            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            aria-label="More Projects"
          >
            <Button title="More Projects" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
