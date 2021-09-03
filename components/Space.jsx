import { Parallax } from 'react-scroll-parallax';
import { Planet } from 'react-ionicons'
import { Earth } from 'react-ionicons'
import { Sunny } from 'react-ionicons'
import PageWrapper from './PageWrapper';


export default function Space() {
  return (
    <PageWrapper>
      <Planet
        color={'#00000'}
        height="250px"
        width="250px"
      />

      <Earth
        color={'#00000'} 
        height="250px"
        width="250px"
      />

      <Sunny
        color={'#00000'} 
        height="250px"
        width="250px"
      />
    </PageWrapper>
  );
}

