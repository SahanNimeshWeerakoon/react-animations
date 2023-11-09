"use client"

import { useRef } from 'react';
import Image from 'next/image';
import moon from '../images/moon.png';
import land from '../images/land.png';
import cat from '../images/cat.gif';

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

function App() {
  const ref = useRef<IParallax>(null);

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url('/images/moon.png')`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url('/images/land.png')`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <Image src={cat} alt='cat' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current ? ref.current.scrollTo(3) : ""}
        >
          <h2 style={{ fontSize: '10rem', textAlign: 'center' }}>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current ? ref.current.scrollTo(0) : ""}
        >
          <h2 style={{ fontSize: '10rem', textAlign: 'center' }}>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
