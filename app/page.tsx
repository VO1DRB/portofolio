import Image from "next/image";
import RotatingText from "./components/RotatingText/RotatingText";
import Lanyard from "./components/Lanyard/Lanyard";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import Particles from "./components/Particles/Particles";
import StarBorder from "./components/StarBorder/StarBorder";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";


import { SiLaravel, SiReact, SiTailwindcss, SiFigma, SiNextdotjs, SiVuedotjs, SiGithub, SiLinkedin } from 'react-icons/si';
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const items = [
  { icon: <SiLaravel />, color: 'red', label: 'Laravel' },
  { icon: <SiGithub />, color: 'orange', label: 'GitHub' },
  { icon: <SiTailwindcss />, color: 'yellow', label: 'Tailwind' },
  { icon: <SiVuedotjs />, color: 'green', label: 'Vue' },
  { icon: <SiLinkedin />, color: 'blue', label: 'LinkedIn' },
  { icon: <SiReact />, color: 'indigo', label: 'React' },
  { icon: <SiFigma />, color: 'purple', label: 'Figma' },
  { icon: <SiNextdotjs />, color: 'grey', label: 'Next.js' },
];


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar/>
      
      <div className="absolute right-0 top-0 left-0 bottom-0 h-full w-full">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div
        id="home"
        className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8 pt-[6rem] pb-16 sm:pt-[8rem] sm:pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 lg:gap-10 text-center sm:text-left items-center sm:items-start lg:pl-16">
            {/* Rotating Headline */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white">
                I'm Ready for Job in
              </h1>
              <RotatingText
                texts={['Web Design', 'Frontend Dev', 'UI/UX', 'React Dev']}
                mainClassName="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg text-base xs:text-lg sm:text-xl font-semibold"
                staggerFrom="last"
                staggerDuration={0.025}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              <SplitText
                text="Hello, I'm Michael"
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: 'translate3d(0,50px,0)',
                }}
                animationTo={{
                  opacity: 1,
                  transform: 'translate3d(0,0,0)',
                }}
              />
              <SplitText
                text="Web Designer & Frontend Dev"
                className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-cyan-400 font-semibold"
                delay={75}
                animationFrom={{
                  opacity: 0,
                  transform: 'translate3d(0,50px,0)',
                }}
                animationTo={{
                  opacity: 1,
                  transform: 'translate3d(0,0,0)',
                }}
              />
            </div>

            {/* Description */}
            <BlurText
              text="I'm a fresh graduate passionate about crafting elegant, responsive web designs. I've worked on multiple projects and freelanced to deliver user-friendly digital experiences. Let's build something impactful together!"
              delay={75}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed"
            />

            {/* View CV */}
            <div className="pt-2 sm:pt-4">
              <a
                href="/E-Certificate Program Kenal Kampus Mahasiswa Baru (PKKMB) UNS 2023  - Michael Jamie Aditya (V3423051) Peserta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <StarBorder className="custom-class scale-90 sm:scale-100" color="cyan" speed="5s">
                  View CV
                </StarBorder>
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:col-span-6 flex justify-center items-center hidden sm:flex">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      {/* Section Tambahan - Skills */}
      <section id="portofolio" className="bg-black text-white py-16 px-4 md:px-12 ">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
             Skills & Tools
            </ScrollFloat>
          </div>

          <Zoom cascade damping={0.3} triggerOnce>
            <div className="flex justify-center">
              <GlassIcons items={items} />
            </div>
          </Zoom>
        </div>
      </section>

      <section id="projects" className="bg-black text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              My Projects
            </ScrollFloat>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/assets/projects/project1.png"
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">CMS Galeri Foto & Video</h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of your project. What it does, what technologies you used, and what problem it solves.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="http://kizarukaede.indonesiacentral.cloudapp.azure.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium
                        hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/assets/projects/project2.png"
                  alt="Project 2"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PKKMB SV UNS 2024</h3>
                  <p className="text-gray-300 mb-4">
                    Another amazing project description. Highlight the key features and technologies used in this project.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://pkkmb-sv-uns.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium
                        hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/assets/projects/project3.png"
                  alt="Project 2"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bootcamp Sistem</h3>
                  <p className="text-gray-300 mb-4">
                    Another amazing project description. Highlight the key features and technologies used in this project.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://sistemfinalproject-michael.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium
                        hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/assets/projects/project4.png"
                  alt="Project 2"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Perpustakaan Online</h3>
                  <p className="text-gray-300 mb-4">
                    Another amazing project description. Highlight the key features and technologies used in this project.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/WageAriel/sipukon-laravel.git "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium
                        hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
