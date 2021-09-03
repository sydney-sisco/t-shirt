import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { Man } from 'react-ionicons'
import { Shirt } from 'react-ionicons'


import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function HeroShirt() {

  const {height, width} = useWindowDimensions();
  const [parallax, setParallax] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {

      if (-currPos.y > height)
        setParallax(true);
      else 
        setParallax(false);
   
    },
    [setParallax]
  )

  return (
    <div className="relative bg-green-200 h-screen w-screen flex justify-center items-center">

      
      <div className="absolute bottom-22">
        <Man
          color={'#000000'} 
          title={''}
          height="500px"
          width="500px"
        />
      </div>

      <Parallax className="absolute grid justify-center content-center" x={[250, -250]} disabled={parallax} tagOuter="figure">
        <Shirt
          color={'#FFF'} 
          title={''}
          height="250px"
          width="250px"
        />
      </Parallax>

        <Parallax className="absolute grid justify-center content-center" x={[-250, 250]} disabled={parallax}tagOuter="figure2">
        <Shirt
          color={'#FFF'} 
          title={''}
          height="250px"
          width="250px"
        />
      </Parallax>

      <h1 className="absolute text-center" >Everyone<br />needs<br />them</h1>
    </div>
  )
}
