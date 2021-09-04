import { Parallax } from 'react-scroll-parallax';
import { Shirt } from 'react-ionicons'
import PageWrapper from "./PageWrapper";


export default function Where() {
  return (
    <PageWrapper extraClasses={'bg-yellow-300 flex justify-around items-center relative'}>
      <div className="absolute flex justify-around items-center w-screen">
        <Parallax x={[-100, 100]}>
          <Shirt
            color={'#FFF'}
            title={''}
            height="250px"
            width="250px"
            className="transform -translate-y-1/2 -translate-x-1/2 left-1/2"
          />
        </Parallax>

        <Parallax x={[-100, 100]}>
          <Shirt
            color={'#FFF'}
            title={''}
            height="250px"
            width="250px"
            className="transform -translate-y-1/2 -translate-x-1/2 left-1/2"
          />
        </Parallax>

        <Parallax x={[-100, 100]}>
          <Shirt
            color={'#FFF'}
            title={''}
            height="250px"
            width="250px"
            className="transform -translate-y-1/2 -translate-x-1/2 left-1/2"
          />
        </Parallax>
      </div>
      <div className="relative">
        <Parallax y={[-575, 575]}>
          <H1>But where</H1>
        </Parallax>
      </div>
        
      <div className="relative">
        <H1>do they</H1>
      </div>

      <div className="relative">
        <Parallax y={[575, -575]}>
          <H1>come from?</H1>
        </Parallax>
      </div>


    </PageWrapper>
  )
};

const H1 = ({ children }) => {
  return <h1 className="text-2xl font-bold text-center static z-10">{children}</h1>
  // return <h1 className="text-2xl font-bold text-center static z-10 text-yellow-300">{children}</h1>
};
