import { Parallax } from 'react-scroll-parallax';
import Head from 'next/head'
import IntroCopy from '../components/IntroCopy';
import HeroShirt from '../components/HeroShirt';
import Where from '../components/Where';
import Space from '../components/Space';
import Ocean from '../components/Ocean';
import Internet from '../components/Internet';

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
      <Internet />
    </div>
  )
}
