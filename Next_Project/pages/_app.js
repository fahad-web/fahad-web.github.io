import '../styles/globals.css';
import MainLayout from './home_header_fotter_content/layout'

export default function App({ Component, pageProps}) {
  return (
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
  )
}
