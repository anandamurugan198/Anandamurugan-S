'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '@/public/images/front.jpg';
import Image2 from '@/public/images/cricket.png';
import Image3 from '@/public/images/gym.png';
import MobileMenu from '@/components/ui/mobile-menu';


const images = [Image1, Image2, Image3];


export default function hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="container" style={{ height: '100vh', position: 'relative' }}>
      {/* Header */}
   

      {/* Full-page background image */}
      <div
        className="full-page-image"
        style={{
          position: 'absolute',
          top: 100,
          left : 55,
          width: '100%',
          height: '90%',
          backgroundImage: `url(${images[currentImageIndex].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease',
        }}
      />

      <center><h2 className="h2 mb-4" style={{ marginTop: '100px' }}>SPORTS ACADEMY</h2></center>
      <MobileMenu />
    </div>
  );
}
