// import React from "react";
// import { motion } from "framer-motion";

// import FoundingStory from "../assets/Images/FoundingStory.png";
// import BannerImage1 from "../assets/Images/aboutus1.webp";
// import BannerImage2 from "../assets/Images/aboutus2.webp";
// import BannerImage3 from "../assets/Images/aboutus3.webp";
// import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
// import LearningGrid from "../components/core/AboutPage/LearningGrid";
// import Quote from "../components/core/AboutPage/Quote";
// import StatsComponent from "../components/core/AboutPage/Stats";
// import HighlightText from "../components/core/HomePage/HighlightText";
// import ReviewSlider from "../components/common/ReviewSlider";
// import Footer from "../components/common/Footer";

// import {
//   fadeUp,
//   fadeDown,
//   fadeUpScale,
//   fadeInLeft,
//   fadeInRight,
//   staggerContainer,
// } from "../utils/motion";

// // Shared viewport setting — animate once, trigger a bit before fully in view
// const viewportOnce = { once: true, amount: 0.2 };

// const About = () => {
//   return (
//     <div>
//       {/* Hero Section — plays on page load, not scroll-triggered */}
//       <section className="bg-richblack-700">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white"
//         >
//           {/* Heading — drops down from top */}
//           <motion.div
//             variants={fadeDown}
//             className="mx-auto pt-20 text-4xl font-semibold lg:w-[70%]"
//           >
//             Driving Innovation in Online Education for a
//             <HighlightText text={"Brighter Future"} />
//           </motion.div>

//           {/* Sub Heading — rises up from bottom */}
//           <motion.div
//             variants={fadeUp}
//             className="mx-auto pb-20 text-center text-base font-inter text-richblack-300 lg:w-[95%]"
//           >
//             From a developer's desk to thousands of learners worldwide —
//             SkillRise is redefining how coding is taught, learned, and
//             applied. We believe the best way to learn is by building, and
//             we've designed every course with that in mind.
//           </motion.div>
//           <div className="sm:h-[70px] lg:h-[150px]"></div>
//           <motion.div
//             variants={staggerContainer}
//             className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5"
//           >
//             <motion.img
//               variants={fadeUp}
//               whileHover={{ scale: 1.04 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               src={BannerImage1}
//               alt=""
//               className="rounded-xl object-cover h-[250px] w-full"
//             />
//             <motion.img
//               variants={fadeUp}
//               whileHover={{ scale: 1.04 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               src={BannerImage2}
//               alt=""
//               className="rounded-xl object-cover h-[250px] w-full"
//             />
//             <motion.img
//               variants={fadeUp}
//               whileHover={{ scale: 1.04 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               src={BannerImage3}
//               alt=""
//               className="rounded-xl object-cover h-[250px] w-full"
//             />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Quote Section */}
//       <section className="border-b border-richblack-700">
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="h-[100px] "></div>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             variants={fadeUp}
//           >
//             <Quote />
//           </motion.div>
//         </div>
//       </section>

//       {/* Founding Story / Vision / Mission */}
//       <section>
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
//           <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//               variants={fadeInLeft}
//               className="my-24 flex lg:w-[50%] flex-col gap-10"
//             >
//               <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Founding Story
//               </h1>
//               <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
//                 SkillRise started with a question I kept asking myself — why is
//                 learning to code still so hard to access, so expensive, and so
//                 disconnected from what the industry actually needs? I built
//                 SkillRise to answer that question.
//               </p>
//               <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
//                 As a developer and learner myself, I experienced firsthand how
//                 hard it is to find structured, practical, and affordable
//                 learning. So I created a platform where anyone with ambition and
//                 an internet connection can learn real skills, build real
//                 projects, and unlock real opportunities.
//               </p>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//               variants={fadeInRight}
//               whileHover={{ scale: 1.02 }}
//               className="lg:w-[40%] w-full"
//             >
//               <img
//                 src={FoundingStory}
//                 alt=""
//                 className="shadow-[0_0_20px_0] shadow-[#FC6767] w-full h-auto rounded-lg"
//               />
//             </motion.div>
//           </div>

//           <div className="flex flex-col lg:items-start lg:gap-10 lg:flex-row justify-between">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//               variants={fadeInLeft}
//               className="py-10 flex lg:w-[40%] flex-col gap-10"
//             >
//               <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
//                 Our Vision
//               </h1>
//               <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
//                 With this vision in mind, I set out to build a platform that
//                 would revolutionize the way people learn. SkillRise feels less
//                 like a classroom and more like a launchpad. Every course is
//                 designed around one question: will this actually help someone
//                 get hired, build something, or level up their career?
//               </p>
//               <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
//                 I wanted SkillRise to be the platform I wish I had when I was
//                 starting out — structured, practical and built for real
//                 world. Not just theory, but also projects that you can
//                 actually show to employers.
//               </p>
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//               variants={fadeInRight}
//               className="py-9 flex lg:w-[40%] flex-col gap-10"
//             >
//               <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
//                 Our Mission
//               </h1>
//               <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
//                 My mission is simple — build a space where learning never stops.
//                 Not just courses, but a community where learners connect, share,
//                 and grow together. Because learning alone is hard. Learning
//                 together is unstoppable. My goal is to help learners build confidence and prepare for successful careers in technology.
//               </p>
//               <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
//                 Every feature on SkillRise exists for one reason — to help you
//                 go from where you are to where you want to be. Faster, smarter,
//                 and with a community that has your back every step of the way.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats — count-up style component, animate its container in */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={viewportOnce}
//         variants={fadeUp}
//       >
//         <StatsComponent />
//       </motion.div>

//       <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportOnce}
//           variants={fadeUp}
//         >
//           <LearningGrid />
//         </motion.div>
//         {/* Contact Form — no animation, keeps its natural width/layout */}
//         <ContactFormSection />
//       </section>

//       <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Reviews from Other Learner */}
//         <motion.h1
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportOnce}
//           variants={fadeUpScale}
//           className="text-center text-4xl font-semibold mt-8"
//         >
//           Reviews from other learners
//         </motion.h1>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportOnce}
//           variants={fadeUp}
//           className="w-full"
//         >
//           <ReviewSlider />
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default About;







import React from "react";
import { motion } from "framer-motion";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponent from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";

import {
  fadeUp,
  fadeDown,
  fadeUpScale,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../utils/motion";

// Shared viewport setting — animate once, trigger a bit before fully in view
const viewportOnce = { once: true, amount: 0.2 };

const About = () => {
  return (
    <div>
      {/* Hero Section — plays on page load, not scroll-triggered */}
      <section className="bg-richblack-700">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white"
        >
          {/* Heading — drops down from top */}
          <motion.div
            variants={fadeDown}
            className="mx-auto pt-20 text-4xl font-semibold lg:w-[70%]"
          >
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
          </motion.div>

          {/* Sub Heading — rises up from bottom */}
          <motion.div
            variants={fadeUp}
            className="mx-auto pb-20 text-center text-base font-inter text-richblack-300 lg:w-[95%]"
          >
            From a developer's desk to thousands of learners worldwide —
            SkillRise is redefining how coding is taught, learned, and
            applied. We believe the best way to learn is by building, and
            we've designed every course with that in mind.
          </motion.div>
          <div className="h-[70px] sm:h-[90px] lg:h-[150px]"></div>
          <motion.div
            variants={staggerContainer}
            className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5"
          >
            <motion.img
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              src={BannerImage1}
              alt=""
              className="rounded-xl object-cover h-[140px] sm:h-[180px] lg:h-[250px] w-full"
            />
            <motion.img
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              src={BannerImage2}
              alt=""
              className="rounded-xl object-cover h-[140px] sm:h-[180px] lg:h-[250px] w-full"
            />
            <motion.img
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              src={BannerImage3}
              alt=""
              className="rounded-xl object-cover h-[140px] sm:h-[180px] lg:h-[250px] w-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <Quote />
          </motion.div>
        </div>
      </section>

      {/* Founding Story / Vision / Mission */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInLeft}
              className="my-24 flex lg:w-[50%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
                SkillRise started with a question I kept asking myself — why is
                learning to code still so hard to access, so expensive, and so
                disconnected from what the industry actually needs? I built
                SkillRise to answer that question.
              </p>
              <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
                As a developer and learner myself, I experienced firsthand how
                hard it is to find structured, practical, and affordable
                learning. So I created a platform where anyone with ambition and
                an internet connection can learn real skills, build real
                projects, and unlock real opportunities.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
              className="lg:w-[40%] w-full"
            >
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767] w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>

          <div className="flex flex-col lg:items-start lg:gap-10 lg:flex-row justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInLeft}
              className="py-10 flex lg:w-[40%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
                With this vision in mind, I set out to build a platform that
                would revolutionize the way people learn. SkillRise feels less
                like a classroom and more like a launchpad. Every course is
                designed around one question: will this actually help someone
                get hired, build something, or level up their career?
              </p>
              <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
                I wanted SkillRise to be the platform I wish I had when I was
                starting out — structured, practical and built for real
                world. Not just theory, but also projects that you can
                actually show to employers.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInRight}
              className="py-9 flex lg:w-[40%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
                My mission is simple — build a space where learning never stops.
                Not just courses, but a community where learners connect, share,
                and grow together. Because learning alone is hard. Learning
                together is unstoppable. My goal is to help learners build confidence and prepare for successful careers in technology.
              </p>
              <p className="text-base font-medium text-richblack-200 lg:w-[95%] leading-7">
                Every feature on SkillRise exists for one reason — to help you
                go from where you are to where you want to be. Faster, smarter,
                and with a community that has your back every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — count-up style component, animate its container in */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <StatsComponent />
      </motion.div>

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <LearningGrid />
        </motion.div>
        {/* Contact Form — no animation, keeps its natural width/layout */}
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviews from Other Learner */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpScale}
          className="text-center text-4xl font-semibold mt-8"
        >
          Reviews from other learners
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="w-full"
        >
          <ReviewSlider />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default About;