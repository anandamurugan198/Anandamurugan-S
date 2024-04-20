export const metadata = {
  title: 'Sports Academy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

export default function Home() {
  return (
   // <div style={{ color: 'green', height: '100%',overflow: 'auto', display: 'flex', flexDirection:'column-reverse'
  //}}>
    <>  
      <PageIllustration />
      <Header/>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
   // </div>    
  )
}

