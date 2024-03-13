// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import Web from "../assets/Images/web.jpg";
import Student from "../assets/Images/student.jpg";
import Teacher from "../assets/Images/teacher.jpg";
// Component Imports
import Footer from "../components/Common/Footer2"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Disclaimer */}

      <div className="flex mx-auto text-[#FF0000]">This app is under maintainance. Some of the features might not be working properly.</div>

      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-4 text-white">

      <div className="mt-12 text-richblack-800 lg:text-4xl sm:text-3xl">
      Ready to embark on your learning journey?
      </div>
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-2 w-fit rounded-full bg-[#236fb1] p-1 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblue-800 group-hover:scale-98">
              <p>Become an Instructor / Student</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        {/* <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div> */}

        {/* Sub Heading */}
        {/* <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblue-400">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div> */}

        {/* CTA Buttons */}
        {/* <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div> */}  

        {/* Video */}
        <div className="mx-3 my-7">
          <video
            className="h-[400px]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <div className="text-[#236fb1] text-3xl">
        "Learn. Grow. Succeed. Repeat."
        </div>

        <div className="text-sm text-richblack-800 max-w-[800px] text-center">
        Experience a continuous cycle of learning, growth, and success on our platform. With every achievement, you'll find yourself motivated to embark on the next step of your educational journey.
        </div>

        {/* Code Section 1  */}
        {/* <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div> */}

        {/* Code Section 2 */}
        {/* <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div> */}

        <div className="flex flex-col mt-[100px] justify-center items-center sm:flex-row">
          <div className="flex flex-col max-w-[45%] gap-4">
              <div className="text-2xl text-richblack-800 font-bold text-center">
              "Unlock Your Potential with Our Courses"
              </div>
              <div className="text-richblack-800 text-center">
              "Explore our curated selection of courses designed to equip you with the skills and knowledge you need to thrive in today's ever-evolving world. From in-demand technical skills to personal development strategies, each course offers a pathway to achieving your goals and unlocking new opportunities."
              </div>
              <div>
              <Link to={"/signup"}>
                <div className="group mx-auto mt-2 w-fit rounded-full bg-[#236fb1] p-1 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                  <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblue-800 group-hover:scale-98">
                    <p>Become an Instructor / Student</p>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
              </div>
          </div>

          <div>
            <img src={Web} className='h-[400px]'/>
          </div>


        </div>

        <div className="flex flex-col-reverse mt-[100px] justify-between items-center sm:flex-row-reverse">
          <div className="flex flex-col lg:max-w-[45%] gap-4">
              <div className="sm:text-2xl text-xl text-richblack-800 font-bold text-center sm:text-left">
              Become an Instructor
              </div>
              <div className="text-richblack-800 sm:text-xl text-md text-center sm:text-left">
              Embark on a journey of lifelong learning as a student on our platform
              </div>

              <div className="">
              <Link to={"/signup"}>
                <div className="group sm:mx-0 mx-auto mt-2 w-fit rounded-full bg-[#236fb1] p-1 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                  <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblue-800 group-hover:scale-98">
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                  </div> 
                </div>
              </Link>
              </div>
          </div>

          <div className="md:w-[45%]">
            <img src={Teacher}/>
          </div>


        </div>

        <div className="flex flex-col-reverse mt-[100px] mb-[50px] justify-between items-center sm:flex-row">
          <div className="flex flex-col lg:max-w-[45%] gap-4">
              <div className="sm:text-2xl text-xl text-richblack-800 font-bold text-center sm:text-left">
              Become a Student
              </div>
              <div className="text-richblack-800 sm:text-xl text-md text-center sm:text-left">
              Embark on a journey of lifelong learning as a student on our platform
              </div>

              <div className="">
              <Link to={"/signup"}>
                <div className="group sm:mx-0 mx-auto mt-2 w-fit rounded-full bg-[#236fb1] p-1 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                  <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblue-800 group-hover:scale-98">
                    <p>Become a Student</p>
                    <FaArrowRight />
                  </div> 
                </div>
              </Link>
              </div>
          </div>

          <div className="md:w-[50%]">
            <img src={Student}/>
          </div>
        </div>
      </div>

    
      <Footer />
    </div>
  )
}

export default Home
