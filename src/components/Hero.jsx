import { useRef } from "react";
import Heading from "../ui/Heading";

const Hero = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  return (
    <section id="home" className="bg-white-100 h-dvh w-screen">
      <div className="flex justify-between pt-20 pb-8 px-10 h-full">
        <div className="relative home-left font-robert-regular self-end">
          <p>18+ &nbsp; &nbsp;years</p>
          <p>700+ &nbsp; prjects</p>
          <p>2 &nbsp; days w/o incident</p>
          <p>0 &nbsp; &nbsp; scrubs</p>
        </div>

        <div className="relative home-mid flex flex-col h-full justify-between">
          <div className="head-top">
            <Heading containerClass="text-[10rem]">Clarity First</Heading>
          </div>

          <div className="cards">
            <div
              id="card"
              ref={videoContainerRef}
              className="absolute top-30 left-70 bg-black w-[18vw] h-[50vh] z-10 -rotate-10"
            >
              <video
                src="videos/video-1.mp4"
                ref={videoRef}
                loop
                autoPlay
                muted
                className="mask-video object-cover object-center relative h-full"
              />
            </div>

            <div className="absolute top-30 left-70 bg-pink-card w-[18vw] h-[50vh] z-7"></div>

            <div className="absolute top-30 left-70 bg-violet-card w-[18vw] h-[50vh] z-4 rotate-6"></div>
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
    </section>
  );
};

export default Hero;
