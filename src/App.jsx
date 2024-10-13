import { useEffect} from 'react'
import Lenis from 'lenis'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all'

function App() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  })

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline()

      let xTransform = gsap.utils.random(-100, 100);

      tl
        .set(image, {
          transformOrigin: `${xTransform > 0 ? 0 : "100%"}`,
        }, "start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }, "start")
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
    })
  })

  return (
    <>
      <div className='w-full bg-zinc-900'>
        <div className='grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden' >
          <div className=' elem col-span-1 row-span-1' style={{"--r": 1, "--c": 3}}><img src="/img/image1.jpg" alt="Image 1" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 1, "--c": 7}}><img src="/img/image2.jpg" alt="Image 2" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 2, "--c": 2}}><img src="/img/image3.jpg" alt="Image 3" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 2, "--c": 6}}><img src="/img/image4.jpg" alt="Image 4" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 3, "--c": 4}}><img src="/img/image5.jpg" alt="Image 5" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 3, "--c": 8}}><img src="/img/image19.jpg" alt="Image 6" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 4, "--c": 1}}><img src="/img/image7.jpg" alt="Image 7" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 4, "--c": 5}}><img src="/img/image10.jpg" alt="Image 8" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 5, "--c": 2}}><img src="/img/image9.jpg" alt="Image 9" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 5, "--c": 7}}><img src="/img/image8.jpg" alt="Image 10" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 6, "--c": 5}}><img src="/img/image11.jpg" alt="Image 11" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 6, "--c": 8}}><img src="/img/image12.jpg" alt="Image 12" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 7, "--c": 3}}><img src="/img/image13.jpg" alt="Image 13" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 7, "--c": 6}}><img src="/img/image14.jpg" alt="Image 14" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 8, "--c": 2}}><img src="/img/image15.jpg" alt="Image 15" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 8, "--c": 7}}><img src="/img/image16.jpg" alt="Image 16" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 9, "--c": 3}}><img src="/img/image17.jpg" alt="Image 17" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 9, "--c": 6}}><img src="/img/image18.jpg" alt="Image 18" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 10, "--c": 2}}><img src="/img/image21.jpg" alt="Image 19" /></div>
          <div className=' elem col-span-1 row-span-1' style={{"--r": 10, "--c": 5}}><img src="/img/image20.jpg" alt="Image 20" /></div>
        </div>
        <div className='fixed top-0 left-0 font-[Helvetica_Now_Display] w-full h-full flex flex-col items-center justify-center text-zinc-300'>
          <h1 className='text-9xl uppercase mb-4'>Thomas Vance
          <sup>®</sup>          
          </h1>
          <h2 className='text-4xl'>並外れたファッション</h2>
        </div>
        <div className='w-full h-screen bg-[#D1D1D1] flex items-center justify-center mx-auto py-[96] relative z-[999] text-center'>
          <p className='text-black text-4xl w-3/4 leading-[3.2rem] font-regular text-left'>Unlock your personal style with our vibrant and eclectic clothing brand. Inspired by the beauty of the dawn, our collections feature bold prints, bright colors, and innovative textures. From flowy maxi dresses to edgy denim jackets, our pieces are designed to make a statement. With a focus on individuality and self-expression, Aurora empowers you to shine bright and own your unique sense of style®</p>
        </div>
      </div>
  
    </>
  )
}

export default App
