import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";

import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>MY PROJECTS</title>
        <meta
          name="description"
          content="This is a website that gathers Thanachit's works and talents."
        />
        <meta
          name="keywords"
          content="thanachit sengsalee, sengsalee, thanachit portfolio, thanachit, benz, ธนชิต เส็งสาลี, ธนชิต, เส็งสาลี, benz thanachit, benz sengsalee, sengsalee family"
        />
        <meta
          name="google-site-verification"
          content="2HSSIHsakNFao9y4Sywcx-siP9G1a1ccev9hdetKkak"
        />
      </Helmet>
      <ProjectsProvider>
        <div className="container mx-auto">
          <ProjectsGrid />
        </div>
      </ProjectsProvider>
    </>
  );
};

export default Projects;
