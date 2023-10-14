import styles from '@/styles/global.module.css'
import { Layout } from 'antd';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon } from 'wagmi/chains'
import Footer from '@/components/Footer';

const theme = {
  maxWidth: '1500px',
  primary: '#0000FF',
  darkGrey: '#292929',
  grey: '#AAAAAA',
  spaceGrey: '#EFEFEF',
  white: '#FFFFFF',
  primaryDark: '#d15e43',
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()],
)
 
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <WagmiConfig config={config}>
      \
  <ThemeProvider theme={theme}>
  <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <head>
          <title>Derpfi</title>
          <link rel="icon" href="/favicon.ico" />
      </head>

      <Navbar />
      <Component {...pageProps} />
      <Footer/>
  </Layout>
</ThemeProvider>
</WagmiConfig>
)
}
