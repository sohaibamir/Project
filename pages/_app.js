import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Script from "next/script";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../src/theme";
import { useEffect, useState } from "react";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache'
import NextNProgress from "nextjs-progressbar";
import {Toaster} from "react-hot-toast"
import AlertState from "../src/Context/alert/AlertState";
import Navbar from "../components/HomePage/Navbar";
import { useRouter } from "next/router";


const supportedChainIds = [4];
const connectors = {
  injected: {},
};

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
    
  }, []);
  const router= useRouter()
  
 
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else{
  return (
    <>
    <AlertState>
      <CacheProvider value={emotionCache}>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        ></Script>
        <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Toaster position='top-center' reverseOrder={false}/>
            {!(router.pathname==="/Dashboard" || router.pathname==="/userNews" || router.pathname==="/coins/[coinid]") && <Navbar title={"CRYFTS"}/>}
            <NextNProgress height={2} color="#9f1313"/>
            <Component {...pageProps} />
          </ThemeProvider>
        </ThirdwebWeb3Provider>
      </CacheProvider>
      </AlertState>
    </>
  );}
}

export default MyApp;
