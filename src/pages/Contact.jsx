import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";

import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>MY CONTRACT</title>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      >
        <ContactForm />
        <ContactDetails />
      </motion.div>
    </>
  );
};

export default Contact;
