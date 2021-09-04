import { Parallax } from 'react-scroll-parallax';
import { Planet } from 'react-ionicons'
import { Earth } from 'react-ionicons'
import { Sunny } from 'react-ionicons'
import { Moon } from 'react-ionicons'
import PageWrapper from './PageWrapper';


export default function Space() {
  return (
    <PageWrapper extraClasses="relative bg-black" >
      <div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2">
          <Parallax x={[2, -2]}>
            <Sunny
              color={'#FF0'}
              height="100vh"
              width="100vh"
            />
          </Parallax>
        </div>

        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2">
          <Parallax x={[230, 215]}>
            <Planet
              color={'#F0F'}
              height="40vw"
              width="40vw"
            />
          </Parallax>
        </div>



        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2">
          <Parallax x={[200, 400]}>
            <Earth
              color={'#00F'}
              height="15vw"
              width="15vw"
            />
            <div className="absolute transform -translate-x-1/2 -translate-y-moon top-1/2">
              <Parallax x={[200, 0]}>
                <Moon
                  color={'#777'}
                  height="7vw"
                  width="7vw"
                />
              </Parallax>
            </div>
          </Parallax>
        </div>

        <div className="absolute transform">
          <h1 className="text-4xl text-white">
            from space???
          </h1>
        </div>

      </div>
    </PageWrapper>
  );
}

