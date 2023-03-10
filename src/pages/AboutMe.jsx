import AboutMeBio from "../components/about/AboutMeBio";
// import AboutCounter from "../components/about/AboutCounter";
// import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>ABOUT ME</title>
        <meta
          name="description"
          content="This is a website that gathers Thanachit's works and talents."
        />
        <meta
          name="google-site-verification"
          content="2HSSIHsakNFao9y4Sywcx-siP9G1a1ccev9hdetKkak"
        />
        <meta
          name="keywords"
          content="thanachit sengsalee, sengsalee, thanachit portfolio, thanachit, benz, ธนชิต เส็งสาลี, ธนชิต, เส็งสาลี, benz thanachit, benz sengsalee, sengsalee family"
        />
      </Helmet>
      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="container mx-auto"
        >
          <AboutMeBio />
        </motion.div>

        {/** Counter without paddings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full">
            <div className="w-full flex justify-center text-xl my-4">
              MY GITHUB{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/6010110455"
                className="cursor-pointer hover:underline"
              >
                (View the Project on GitHub)
              </a>
            </div>
            <div className="w-full flex justify-center my-4">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=6010110455&layout=compact&langs_count=9&theme=dracula"
                alt="mildronize"
              />
              &nbsp;
            </div>

            <div className="w-full flex justify-center my-4">
              <img
                src="https://github-readme-stats.vercel.app/api?username=6010110455&show_icons=true&count_private=true&theme=dracula"
                alt="mildronize"
              />
            </div>
          </div>

          {/* <AboutCounter /> */}
        </motion.div>
        {/* 
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div> */}
      </AboutMeProvider>
    </>
  );
};

export default About;
