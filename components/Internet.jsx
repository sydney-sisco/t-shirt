import { Parallax } from 'react-scroll-parallax';
import { Shirt } from 'react-ionicons'
import PageWrapper from './PageWrapper';

export default function Internet() {
    return (
      <PageWrapper extraClasses="relative bg-internet bg-contain bg-center bg-no-repeat flex justify-center items-center">

        <Parallax className="absolute grid justify-center content-center" x={[0, 400]} tagOuter="figure">
          <Shirt
            color={'#F0F'}
            title={''}
            height="23vh"
            width="23vh"
          />
        </Parallax>

        <Parallax className="absolute grid justify-center content-center" x={[0, -400]} tagOuter="figure2">
          <Shirt
            color={'#F0F'}
            title={''}
            height="23vh"
            width="23vh"
          />
        </Parallax>

        <Parallax className="absolute grid justify-center content-center" x={[0, 400]} y={[0, -400]} tagOuter="figure">
          <Shirt
            color={'#F0F'}
            title={''}
            height="23vh"
            width="23vh"
          />
        </Parallax>

        <Parallax className="absolute grid justify-center content-center" x={[0, -400]} y={[0, -400]} tagOuter="figure2">
          <Shirt
            color={'#F0F'}
            title={''}
            height="23vh"
            width="23vh"
          />
        </Parallax>
        
        <div>
          <h1 className="text-center text-black text-4xl font-bold">They come from the Internet!</h1>
          <h1 className="text-center text-black text-4xl font-bold">Buy now!</h1>
        </div>

      </PageWrapper>
    )
}
