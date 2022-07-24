import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Script from "next/script";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../src/theme";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache'

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
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
            <Component {...pageProps} />
          </ThemeProvider>
        </ThirdwebWeb3Provider>
      </CacheProvider>
    </>
  );
}

export default MyApp;


// import "../styles/globals.css";


// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { CacheProvider } from '@emotion/react';
// import theme from '../src/theme';
// import createEmotionCache from '../src/createEmotionCache'
// import Head from 'next/head';

// const supportedChainIds = [4];
// const connectors = {
//   injected: {},
// };

// const clientSideEmotionCache = createEmotionCache();
// function MyApp(props) {
//   const { Component, emotionCache = 
//     clientSideEmotionCache, pageProps } = props;
//   return (
//     <CacheProvider value={emotionCache}>
//     <Head>
//         <meta name="viewport" 
//             content="initial-scale=1, width=device-width" />
//     </Head>
          
//         {/* CssBaseline kickstart an elegant, 
//         consistent, and simple baseline to
//       build upon. */}
          
//     <ThirdwebWeb3Provider
//       supportedChainIds={supportedChainIds}
//       connectors={connectors}
//     >
//       <ThemeProvider theme={theme}>
//           <CssBaseline />
//     <Component {...pageProps} />
//     </ThemeProvider>
//     </ThirdwebWeb3Provider>
//         </CacheProvider>


//   );
// }

// export default MyApp;