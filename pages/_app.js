import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Component {...pageProps} key={router.asPath} router={router} />
    </>
  );
}

export default MyApp;
