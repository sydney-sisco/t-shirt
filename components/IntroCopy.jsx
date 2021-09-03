import { Parallax } from 'react-scroll-parallax';
import { ArrowDown } from 'react-ionicons'

const COPY = 't-shirts'
.split('')
.map((letter, i) => 
  <Parallax
    key={`copy-${i}`}
    x={[0, 100 * (i - 4)]}
    className={''}
  >
    {letter}
  </Parallax>
);

export default function IntroCopy() {

  return (
    <>
      <div className="bg-blue-500 text-6xl h-screen w-screen flex justify-center items-center">
        {COPY}
        <ArrowDown
          color={'#00000'} 
          height="75px"
          width="75px"
          className="absolute bottom-24 animate-bounce"
        />
      </div>

    </>
  );
}
