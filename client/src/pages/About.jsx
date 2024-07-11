import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Amar Sharma</h1>
      <p className='mb-4 text-slate-700'>
        Hello, I'm Amar Sharma, an MCA student at VIT Bhopal with a deep passion for technology and development. 
        I specialize in web development using the MERN stack, and I have a diverse skill set that includes Java, C, C++, Python, JavaScript, Typescript, HTML, Angular, Node.js, Material-UI, Express, MongoDB, SQL, Firebase, React, Tailwind, Bootstrap, Git, GitHub, VS Code, Android Studio, and Machine Learning.
      </p>
      <p className='mb-4 text-slate-700'>
        I believe in continuous learning and strive to stay updated with the latest technologies to provide innovative solutions. I am passionate about solving complex problems and delivering high-quality products.
      </p>
      <h2 className='text-2xl font-bold mb-2 text-slate-800'>Connect with Me</h2>
      <ul className='mb-4 text-slate-700'>
        <li className='mb-2'>
          <a href='https://www.linkedin.com/in/amarsharma30/' className='flex items-center text-blue-500 hover:underline'>
            <FaLinkedin className='mr-2' /> LinkedIn
          </a>
        </li>
        <li className='mb-2'>
          <a href='hhttps://github.com/thexsharma30' className='flex items-center text-blue-500 hover:underline'>
            <FaGithub className='mr-2' /> GitHub
          </a>
        </li>
        <li className='mb-2'>
          <a href='https://x.com/thexsharma_30?t=aW15tXlTCPhTQeX-kqRoYA&s=09' className='flex items-center text-blue-500 hover:underline'>
            <FaTwitter className='mr-2' /> Twitter
          </a>
        </li>
        <li className='mb-2'>
          <a href='https://www.instagram.com/thexsharma_30/' className='flex items-center text-blue-500 hover:underline'>
            <FaInstagram className='mr-2' /> Instagram
          </a>
        </li>
      </ul>
      <p className='mb-4 text-slate-700'>
        Feel free to connect with me on social media to stay updated with my latest projects and endeavors.
      </p>
    </div>
  );
}
