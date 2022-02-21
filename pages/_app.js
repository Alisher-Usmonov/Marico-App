import { NextSeo } from 'next-seo';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title='Marico'
        titleTemplate='Marico App'
        description="Marico Website in Next.js & Vercel"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;