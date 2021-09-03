import { ParallaxProvider } from 'react-scroll-parallax';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
       <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp
