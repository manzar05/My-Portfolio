import React from 'react'
import Button from '../ui/Button'
import HomeImage from "../../assets/images/home-image.png"
import StarRating from '../ui/StarRating'
import SkillsCard from '../ui/SkillsCard'
import MySQLImage from '../../assets/images/skills/mysql.png'
import MsSQLImage from '../../assets/images/skills/mssql.png'
import CssImage from '../../assets/images/skills/css.png'
import HtmlImage from '../../assets/images/skills/html.png'
import DjangoImage from '../../assets/images/skills/django.png'
import PythonImage from '../../assets/images/skills/python.png'
import JsImage from '../../assets/images/skills/js.png'
import JqueryImage from '../../assets/images/skills/jquery.png'
import ReactImage from '../../assets/images/skills/react.png'
import RestapiImage from '../../assets/images/skills/restapi.png'
import UbuntuImage from '../../assets/images/skills/ubuntu.png'
import StripeImage from '../../assets/images/skills/stripe.png'
import RedisImage from '../../assets/images/skills/redis.png'
import FastAPIImage from '../../assets/images/skills/fastapi.png'
import './swiper.css';
import MyCarousel from "../ui/Carousel"
import ServicesCard from '../ui/ServicesCard'
import { Link } from 'react-router-dom'
import DigitalClock from '../ui/DigitalClock'
import ProjectCard from '../ui/ProjectCard'




const extraskills = [
    { title: 'Stripe Payment', rating: 4, image: `${StripeImage}`, description: "Web developer skilled in secure Stripe payment integration for e-commerce and subscription platforms.", link: "/extra-skills" },
    { title: 'Task Scheduling', rating: 4, image: `${RedisImage}`, description: "Web developer skilled in efficient task scheduling, automating workflows for optimized performance and productivity.", link: "/extra-skills" },
    { title: 'Fast API', rating: 4, image: `${FastAPIImage}`, description: "Web developer specializing in building high-performance APIs with FastAPI for efficient, scalable applications.", link: "/extra-skills" },
]

const servicesdata = [
    { 
        id:1,
        title: 'Fullstack Web Development', 
        description: "I offer comprehensive fullstack web development services, covering both frontend and backend. From creating stunning, responsive user interfaces to setting up powerful, scalable backends, I deliver solutions that meet your exact needs. Technologies include:", 
        link: "/services" 
    },
    { 
        id:2,
        title: 'Custom REST API Development', 
        description: "I design and develop robust RESTful APIs that enable seamless communication between your frontend, backend, and external services. With Django and Python, I ensure that your API is secure, scalable, and optimized for performance.", 
        link: "/services" 
    },
    { 
        id:3,
        title: 'Responsive UI/UX Development', 
        description: "With expertise in HTML, CSS, and ReactJS, I build responsive, modern, and user-friendly interfaces. Whether it's a new website or a redesign, I create UIs that are intuitive, mobile-friendly, and visually appealing.", 
        link: "/services" 
    },
    { 
        id:4,
        title: 'Third-Party API Integration', 
        description: "I specialize in integrating third-party services and APIs (like payment gateways, authentication services, and data providers) into your existing systems to expand functionality without sacrificing performance or security.", 
        link: "/services" 
    },
    { 
        id:5,
        title: 'E-Commerce Development', 
        description: "I can help you build a secure, scalable e-commerce platform or add e-commerce functionality to your existing website. From payment gateway integration to product management, I can help you create a seamless buying experience.", 
        link: "/services" 
    },
    { 
        id:6,
        title: 'Code Auditing and Refactoring', 
        description: "If you already have an existing project that needs optimization, I offer in-depth code auditing and refactoring services to improve code efficiency, security, and maintainability. This ensures your codebase is future-proof and scalable.", 
        link: "/services" 
    },
]


const Menu = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] text-[#171717]'>
        <div className={`col-span-4 sm:col-span-2 row-span-1 sm:row-span-2 px-4 py-2 sm:py-5 animate-fadeIn z-1`}>
            <div className="flex flex-col items-center justify-center gap-2 py-[4rem] relative pb-0">
                <p className="text-md font-semibold uppercase text-[#ff963c] tracking-widest absolute top-[2.5rem] sm:left-[11rem] animate-fadeIn">Hello!</p>
                <p className="text-medium text-2xl text-[#6D6D6D]">I'M</p>
                <p className="text-medium text-xl sm:text-3xl uppercase font-black">Manzar <span className='text-[#6D6D6D]'>Imam</span></p>
                <p className="text-medium text-xl sm:text-3xl uppercase font-black text-[#ff963c]">Fullstack <span className='text-[#171717]'>Developer</span></p>
                <p className="text-medium text-xs sm:text-lg font-medium tracking-wider text-center">Django | ReactJS | REST API |  Python | JavaScript | jQuery</p>
            </div>
            <div className="flex items-center justify-center my-6">
                <Link to="/contact">
                    <Button props={{title:"Contact",color:"#ff963c"}} />
                </Link>
            </div>
        </div>
        <div className={`col-span-4 sm:col-span-2 row-span-1 sm:row-span-2 flex justify-center items-center relative`}>
            <img src={HomeImage} alt="" className='w-[85%] sm:w-[60%] absolute bottom-[-4.5rem] left-50 overflow-hidden'/>
            <div className="flex flex-col items-center justify-center absolute -top-[3rem] right-[0rem]  sm:top-[10rem] sm:-left-[28rem] animate-fadeIn">
                <StarRating rating={parseInt(3)}/>
                <h1 className="text-sm sm:text-2xl font-semibold tracking-wider mt-1">1.6 <span className='font-semibold text-[#ff963c] uppercase '>Years</span></h1>
                <h1 className="text-sm sm:text-xl font-semibold tracking-wider uppercase text-[#6D6D6D]">Experience</h1>
            </div>
            <div className='z-0 -bottom-2 -right-0 absolute sm:top-0 sm:right-4'>
                <DigitalClock/>
            </div>
        </div>
        <div className={`col-span-4 row-span-1 border flex flex-col items-center justify-start gap-4 flex-wrap bg-[#6D6D6D] p-4 rounded-md`}>
            <h1 className="text-3xl text-center uppercase text-white font-bold tracking-wider">Skills</h1>
            <div className='flex items-center justify-start gap-4 flex-wrap'>
                <SkillsCard props={{title:'Django', rating: 4,image:`${DjangoImage}`}}/>
                <SkillsCard props={{title:'React JS', rating: 4,image:`${ReactImage}`}}/>
                <SkillsCard props={{title:'REST API', rating: 4,image:`${RestapiImage}`}}/>
                <SkillsCard props={{title:'Python', rating: 4,image:`${PythonImage}`}}/>
                <SkillsCard props={{title:'JavaScript', rating: 4,image:`${JsImage}`}}/>
                <SkillsCard props={{title:'JQuery', rating: 3,image:`${JqueryImage}`}}/>
                <SkillsCard props={{title:'Ubuntu', rating: 3,image:`${UbuntuImage}`}}/>
                <SkillsCard props={{title:'MySQL', rating: 3,image:`${MySQLImage}`}}/>
                <SkillsCard props={{title:'MSSQL', rating: 3,image:`${MsSQLImage}`}}/>
                <SkillsCard props={{title:'HTML', rating: 4,image:`${HtmlImage}`}}/>
                <SkillsCard props={{title:'CSS', rating: 4,image:`${CssImage}`}}/>
            </div>
        </div>
        <div className="col-span-4 row-span-1 flex flex-col items-center justify-center gap-4 p-4 rounded-md py-[1.5rem]">
            <h1 className="text-xl sm:text-3xl text-center uppercase text-[#ff963c] font-bold tracking-wider py-[1rem]">
                Extra Skills
            </h1>
            <div className="w-full overflow-hidden relative">
                    <MyCarousel mainprops={extraskills}/>
            </div>
        </div>

        <div className={`col-span-4 row-span-2 flex flex-col items-center justify-start gap-4 flex-wrap p-4 rounded-md pt-[2rem]`}>
            <h1 className="text-xl sm:text-3xl text-center uppercase text-[#171717] font-bold tracking-wider py-[1rem]">Services</h1>
            <div className='flex items-center justify-start gap-10 flex-wrap'>
                <ServicesCard props={servicesdata} />
            </div>
        </div>
        <div className={`col-span-4 row-span-2 flex flex-col items-center justify-start gap-4 flex-wrap p-4 -mt-[3rem] rounded-md`}>
            <h1 className="text-xl sm:text-3xl text-center uppercase text-[#171717] font-bold tracking-wider py-[1rem]">Projects</h1>
            <div className='flex items-center justify-start gap-10 flex-wrap'>
                <ProjectCard props={{title:'Scan Application Admin Dashboard',tech: "Django | ReactJS | MySQL | REST API", year: 2024}} />
                <ProjectCard props={{title:'Rider Tracking and Order Management System',tech: "Django | ReactJS | MySQL | Redis | Celery", year: 2024}} />
                <ProjectCard props={{title:'RegentsIQ Education Platform',tech: "Django | Django Templates | MySQL | Stripe API", year: 2024}} />
                <ProjectCard props={{title:'Warehouse Management System',tech: "Django | ReactJS | MySQL | REST API", year: 2024}} />
                <ProjectCard props={{title:'Windows Application for Video Data Collection',tech: "Django | Python | MySQL | REST API | PyQT6", year: 2023}} />
                <ProjectCard props={{title:'Data Collection Website',tech: "Django | ReactJS | MySQL | REST API", year: 2023}} />
            </div>
        </div>
    </div>
  )
}

export default Menu