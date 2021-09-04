import { Parallax } from 'react-scroll-parallax';
import { Fish } from 'react-ionicons'
import PageWrapper from './PageWrapper';


export default function Ocean() {
  return (
    <PageWrapper extraClasses="relative bg-blue-900">

      <div className="absolute transform">
        <h1 className="text-4xl text-black">
          from the bottom of the ocean???
        </h1>
      </div>
      
      <Parallax x={[-20, 20]}>
        <Fish
          color={'#F92'}
          height="80vh"
          width="80vh"
        />
      </Parallax>

    </PageWrapper>
  );
}
