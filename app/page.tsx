import Hero from '@/components/home/hero'
import Services from '@/components/home/services'
import About from '@/components/home/about'
import Stats from '@/components/home/stats'
import Testimonials from '@/components/home/testimonials'
import CallToAction from '@/components/home/call-to-action'
import BlogPreview from '@/components/home/blog-preview'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <CallToAction />
    </div>
  );
}