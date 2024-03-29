import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import sdg from '../public/dev-ed-wave.png';
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';
export default function Home() {

  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode?'dark' : ""}>
      <Head>
        <title>Srinjay Das Gupta Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-4 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen flex justify-center items-center flex-col '>
          <nav className='w-full justify-between py-10 mb-12 flex  gap-16 place-items-center md:items-end'>
            <h1 className=' text-xl font-burtons dark:text-white'>EnderDev</h1>
            <ul className=' flex items-center' >
              <li> <BsFillMoonStarsFill onClick={()=> setdarkMode(!darkMode)} className=' cursor-pointer text-2xl dark:text-white'/> </li>
              <li><a className="   bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-4" href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className='text-4xl py-2 text-teal-500 font-medium md:text-6xl'>Srinjay Das Gupta</h2>
            <h3 className='text-2xl py-2 md:text-3xl max-w-lg mx-auto dark:text-stone-400 '>Beginner Developer and Competative Programmer</h3>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200'>
            <a href='https://twitter.com/SrinjayDasGupta' target="_blank"><AiFillTwitterCircle /></a>
            <a href='https://www.linkedin.com/in/srinjay-das-gupta-441841214/' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/SRINJAYDASGUPTA-Git/' target="_blank"><AiFillGithub/></a>

          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-[280px]  h-[280px] mt-12  overflow-hidden md:h-96 md:w-96 flex items-center justify-center' >
            <Image src={sdg}  fill ></Image>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-stone-400'>About Me</h3>
            <h4 className=' text-md py-2 leading-8 text-gray-600 dark:text-stone-400'>
              I am currently a student at <span className='text-teal-500'>Narula Institute of Technology</span> pursuing a <span className='text-teal-500'>Bachelor of Technology Degree in Computer Science and Engeneering</span>.<br />
               I am an <span className='text-teal-500'>coding enthusiast</span> and like to try various things.</h4>
          </div>
          <div className='lg:flex gap-10 '>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:shadow-cyan-300 shadow-xl'>
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-stone-400">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-stone-400">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Coding Platforms I know</h4>
              <p className="text-gray-800 py-1 dark:text-stone-200">React</p>
              <p className="text-gray-800 py-1 dark:text-stone-200">Node.Js</p>
              <p className="text-gray-800 py-1 dark:text-stone-200">JavaScript</p>
              <p className="text-gray-800 py-1 dark:text-stone-200">TailwindCSS</p>
            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:shadow-cyan-300 shadow-lg'>
              <Image className='mx-auto' src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-stone-400">
                Consult for any problems and doubts!
              </h3>
              <p className="py-2 dark:text-stone-400">
                Do you have any doubts while coding? Ask away!
              </p>
              <h4 className="py-4 text-teal-600 text-lg font-medium">Ways to reach me</h4>
              <p className="text-gray-800 py-1 dark:text-stone-400">E-mail: <span className='text-blue-400'>dasguptasrinjay2004@gmail.com</span></p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-stone-400'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-stone-400'>  
              I am a Beginner Developer and a Competative Programmer. I am proficient in various programming languages like <span className="text-teal-500 text-xl">Java, C, C++, Python</span>. I am also
              familiar with the recent Web Development tools like <span className="text-teal-500 text-xl">React, React Native, TailwindCSS, NextJS, NodeJS</span> and many more.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive "></Image></div>
            <div className='basis-1/3 flex-1'><Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive "></Image></div>
            <div className='basis-1/3 flex-1'><Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive "></Image></div>
            <div className='basis-1/3 flex-1'><Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive "></Image></div>
            <div className='basis-1/3 flex-1'><Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive "></Image></div>
            <div className='basis-1/3 flex-1'><Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive "></Image></div>
          </div>
        </section>
      </main>
      </div>
  )
}
