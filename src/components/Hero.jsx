import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Heading from "../ui/Heading";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1,6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[300vh] w-screen bg-white-100"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <div className="flex justify-between pt-20 pb-8 px-10 h-full">
          <div className="relative home-left font-robert-regular self-end">
            <p>18+ &nbsp; &nbsp;years</p>
            <p>700+ &nbsp; projects</p>
            <p>2 &nbsp; days w/o incident</p>
            <p>0 &nbsp; &nbsp; scrubs</p>
          </div>

          <div className="relative home-mid flex flex-col h-full justify-between">
            <div className="head-top">
              <Heading containerClass="text-[10rem]">Clarity First</Heading>
            </div>

            {/* 4. The Animated Video Card */}
            <div className="cards flex items-center justify-center">
              <motion.div
                style={{ scale, rotate, zIndex: 50 }}
                className="absolute w-[18vw] h-[50vh] overflow-hidden"
              >
                <video
                  src="videos/video-1.mp4"
                  loop
                  autoPlay
                  muted
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <div className="absolute bg-pink-card w-[18vw] h-[50vh] z-7"></div>
              <div className="absolute bg-violet-card w-[18vw] h-[50vh] z-4 rotate-6"></div>
            </div>

            <div className="head-bottom">
              <Heading containerClass="text-[10rem]">Impact Forever</Heading>
            </div>
          </div>

          <div className="relative home-right w-64 self-end">
            <p className="text-center">
              Vault Shark is a strategic design partner helping brands win new
              customers, engage users, and{" "}
              <em className="font-bold">infuriate</em> their competition.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
