import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionConfig,
} from "framer-motion";
import { useRef } from "react";

import CodingBoy from "../assets/Images/coding_boy.png";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimelineSection from "../components/core/HomePage/TimelineSection";

import {
  fadeUp,
  fadeUpScale,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../utils/motion";


// Small helper for buttons — consistent hover/tap "juice"
const buttonHover = {
  whileHover: { scale: 1.06, y: -2 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

// Thin gradient bar fixed to the top of the viewport.
// Fills left → right as the user scrolls down the whole page.
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  // Smooth out the raw scroll value so the bar doesn't feel jumpy
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100] bg-gradient-to-r from-[#12D8FA] via-[#1FA2FF] to-[#12D8FA]"
    />
  );
}

function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: hero image drifts up & fades slightly as you scroll past it
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-richblack-900 overflow-x-hidden">
      <ScrollProgressBar />

      {/* Section 1 */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white"
      >
        {/* Typing Animation Badge */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.04, borderColor: "#12D8FA" }}
          className="mx-auto mt-16 w-fit rounded-full bg-richblack-800 border border-richblack-700 px-6 py-2 text-sm font-medium text-richblack-200 transition-colors cursor-default"
        >
          I want to learn{" "}
          <TypeAnimation
            sequence={[
              "React ⚛️",
              2000,
              "Python 🐍",
              2000,
              "DSA 🧠",
              2000,
              "Node.js 🟢",
              2000,
              "Machine Learning 🤖",
              2000,
              "JavaScript ⚡",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#12D8FA] font-bold"
          />
        </motion.div>

        {/* Heading */}
        <motion.div variants={fadeInLeft} className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </motion.div>

        {/* Sub Heading */}
        <motion.div
          variants={fadeInRight}
          className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300"
        >
          Learn from industry experts, build real projects, and fast-track your
          career — all at your own pace, from anywhere in the world.
          <p>Start your learning journey today and unlock endless opportunities for tomorrow. </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="mt-5 flex flex-row gap-7 relative z-10">
          <motion.div {...buttonHover}>
            <CTAButton active={true} linkto={"/signup"}>
              Start Learning Today
            </CTAButton>
          </motion.div>
          <motion.div {...buttonHover}>
            <CTAButton active={false} linkto={"/login"}>
              Book a Demo
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Hero Illustration with scroll parallax */}
        <motion.div
          ref={heroRef}
          variants={fadeUp}
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative mx-3 my-7 w-full max-w-[600px] flex items-center justify-center"
        >
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full bg-[#12D8FA]/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.img
            src={CodingBoy}
            alt="Start coding with SkillRise"
            className="relative z-10 w-[500px] drop-shadow-[0_0_30px_rgba(18,216,250,0.3)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7, ease: "easeOut" },
              scale: { duration: 0.7, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
            }}
          />

          <motion.div
            className="absolute top-6 right-16 bg-richblack-800 border border-richblack-700 rounded-xl px-3 py-2 text-xs font-mono text-yellow-400 shadow-lg z-20 cursor-default"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            whileHover={{ scale: 1.15, rotate: -4 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Python 🐍
          </motion.div>
          <motion.div
            className="absolute top-6 left-16 bg-richblack-800 border border-richblack-700 rounded-xl px-3 py-2 text-xs font-mono text-blue-400 shadow-lg z-20 cursor-default"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            whileHover={{ scale: 1.15, rotate: 4 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            React ⚛️
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 bg-richblack-800 border border-richblack-700 rounded-xl px-3 py-2 text-xs font-mono text-green-400 shadow-lg z-20 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            whileHover={{ scale: 1.15, rotate: -4 }}
            transition={{
              opacity: { duration: 0.5, delay: 1 },
              y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Node.js 🟢
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-10 bg-richblack-800 border border-richblack-700 rounded-xl px-3 py-2 text-xs font-mono text-orange-400 shadow-lg z-20 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            whileHover={{ scale: 1.15, rotate: 4 }}
            transition={{
              opacity: { duration: 0.5, delay: 1.2 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            JS ⚡
          </motion.div>
        </motion.div>

        {/* Code Section 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
        >
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
              "Our courses are designed and taught by industry experts with years of real-world experience — passionate about helping you grow from zero to job-ready."
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
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>SkillRise</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>Start building today.</p>\n  <button onclick="learn()">Get Started</button>\n</body>\n</html>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </motion.div>

        {/* Code Section 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
        >
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "No setup. No confusion. Just open a lesson and start writing real code from day one — our hands-on environment does the rest."
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
            codeblock={`import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() =>\n        setCount(count + 1)}>\n        Click me!\n      </button>\n    </div>\n  );\n}`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </motion.div>
        {/* Explore Section */}
          <ExploreMore />
          </motion.div>
      

      {/* Section 2 */}
      <div className="bg-richblack-900 text-richblack-25">
        <div className="h-[320px] bg-gradient-to-b from-[#1FA2FF]/10 to-transparent">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="flex flex-row gap-7 text-white lg:mt-8"
            >
              <motion.div {...buttonHover}>
                <CTAButton active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </div>
                </CTAButton>
              </motion.div>
              <motion.div {...buttonHover}>
                <CTAButton active={false} linkto={"/login"}>
                  Learn More
                </CTAButton>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          {/* Job that is in Demand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0"
          >
            <motion.div
              variants={fadeInLeft}
              className="text-4xl font-semibold lg:w-[45%] text-richblack-25"
            >
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </motion.div>
            <motion.div variants={fadeInRight} className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px] text-richblack-300">
                The tech industry moves fast. SkillRise keeps you ahead — with
                up-to-date courses, real projects, and a community of learners
                and mentors who've been where you want to go.
              </div>
              <motion.div {...buttonHover}>
                <CTAButton active={true} linkto={"/signup"}>
                  <div>Learn More</div>
                </CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="w-full"
          >
            <TimelineSection />
          </motion.div>

          {/* Learning Language Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpScale}
            className="w-full"
          >
            <LearningLanguageSection />
          </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto mt-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="w-full"
        >
          <InstructorSection />
        </motion.div>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="text-center text-4xl font-semibold mt-20"
        >
          Experiences shared by <HighlightText text={"learners"} />
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto mt-[1px] max-w-3xl text-lg text-richblack-300"
        >
          Real stories from our amazing community of learners who are
          growing every day with us.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="w-full mt-2"
        >
          <ReviewSlider />
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </MotionConfig>
  );
}

export default Home;

