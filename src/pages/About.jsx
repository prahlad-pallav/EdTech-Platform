import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer2"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import logo from "../assets/Logo/logo.png";
import baby_about from "../assets/Images/baby_about.jpg";

const About = () => {
  return (
    <div>
      <section className="flex flex-col mx-auto items-center w-11/12 max-w-maxContent text-center text-richblue-800 gap-5 py-10 ">

        <div>
          <img src={logo} className="sm:w-[200px] w-[100px]"/>
        </div>
        <div className="sm:text-[34px] text-[24px]">
        Welcome to Arya Academy
        </div>

        <div className="sm:text-[18px] text-[14px]">
        Here we believe in the transformative power of education. Our mission is to empower learners of all ages and backgrounds to achieve their full potential through accessible, innovative, and personalized learning experiences. At Arya Academy, we envision a future where education transcends boundaries, enabling individuals to thrive in a rapidly changing world.
        </div>
      </section>

      <section className="flex mx-auto items-center  text-center bg-richblue-800 text-white gap-10 py-10">
                 
          <div className="w-10/12 mx-auto max-w-maxContent">
          <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
            <div className="sm:w-[40%]">
              <img src={baby_about}/>
            </div>

            <div className="flex flex-col sm:items-start gap-4 sm:w-[45%]">
            <div className="sm:text-3xl text-xl font-semibold text-yellow-50">
              Our Story
            </div>
            <div className="sm:text-[16px] text-[14px] text-white sm:text-start">
            Arya Academy was founded in 2024 by a team of passionate educators and technologists who shared a common vision: to revolutionize education through the seamless integration of technology and pedagogy. Since our inception, we have been committed to providing high-quality, engaging, and effective learning solutions to students around the globe. Over the years, we have reached significant milestones, expanding our course offerings, enhancing our platform, and positively impacting the lives of thousands of learners.
            </div>
            </div>

            </div>
          </div>


      </section>




      <section className="bg-richblue-800">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Arya Academy leads the charge in revolutionizing online education. Our fervor lies in sculpting a brighter tomorrow through pioneering courses, harnessing state-of-the-art technologies, and cultivating an energetic learning ecosystem.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white mb-20">
        {/* <LearningGrid /> */}
        <ContactFormSection />
      </section>
      <StatsComponenet />

      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
        {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1> */}
        {/* <ReviewSlider /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default About
