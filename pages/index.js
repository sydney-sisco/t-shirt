import { Parallax } from 'react-scroll-parallax';
import Head from 'next/head'
import IntroCopy from '../components/IntroCopy';
import HeroShirt from '../components/HeroShirt';
import Where from '../components/Where';
import Space from '../components/Space';
import Ocean from '../components/Ocean';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IntroCopy />
      <HeroShirt />
      <Where />
      <Space />
      <Ocean />

      <TestDiv />
      <TestDiv />
      <TestDiv />

    </div>
  )
}


const TestDiv = () => {

  return (
    <div className="bg-gray-500 h-screen w-screen grid justify-center content-center">
      <Parallax className="grid justify-center content-center" x={[-250, 250]} tagOuter="figure">
        <h1 className="bg-white text-xl">HELLO</h1>
      </Parallax>
    </div>
  )
}
