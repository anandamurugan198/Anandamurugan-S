
export const metadata = {
  title: 'Sports Academy',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
   // <div style={{ color: 'green', height: '100%',overflow: 'auto', display: 'flex', flexDirection:'column-reverse'
  //}}>
    <>  
      < Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
   // </div>

    
  )
}

