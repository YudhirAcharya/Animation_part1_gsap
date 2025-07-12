import gsap from "gsap";
import { useEffect, useRef } from "react";
// import {ScrollTrigger, SplitText} from "gsap/all";
// gsap.registerPlugin(ScrollTrigger, SplitText)
import React from "react";

import image1FullBox from "./assets/image11.png";
import image2FullBox from "./assets/image21.png";

const App = () => {
  const box1Ref = useRef(null);
  const fullImage1Ref = useRef(null);
  const box2Ref = useRef(null);
  const fullImage2Ref = useRef(null);

  useEffect(() => {
    gsap.set(fullImage1Ref.current, { opacity: 0 });
    gsap.set(fullImage2Ref.current, { opacity: 0 });
  });

  useEffect(() => {
    gsap.to(".character", {
      y: 8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  const handleHoverIn1 = () => {
    gsap.to(box1Ref.current, {
      x: -30,
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.to(fullImage1Ref.current, {
      opacity: 1,
      duration: 0.5,
      delay: 0.2,
    });
  };

  const handleHoverOut1 = () => {
    gsap.to(fullImage1Ref.current, {
      opacity: 0,
      duration: 0.5,
    });

    gsap.to(box1Ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
    });
  };

  const handleHoverIn2 = () => {
    gsap.to(box2Ref.current, {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(fullImage2Ref.current, {
      opacity: 1,
      duration: 0.5,
    });
  };

  const handleHoverOut2 = () => {
    gsap.to(fullImage2Ref.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(box2Ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
    });
  };

  return (
    <div className=" ">
      <header className="py-12 text-left pl-10">
        <h1 className="text-2xl  mb-4">Your SkillShikshya Journey</h1>
        <p className="text-3xl font-bold ">
          <span className="font-bold text-green-600"> Step </span> In.
          <span className="font-bold text-green-600">Skill</span> Up.
          <span className="font-bold text-green-600">Stand </span> Out. 🚀
        </p>
      </header>

      <main
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="max-w-6xl mx-auto px-4 pb-20 gap-y-12 "
      >
        <div className="grid gap-8 grid-cols-2 mb-8">
          <div
            className="relative w-full h-[260px] cursor-pointer"
            onMouseEnter={handleHoverIn1}
            onMouseLeave={handleHoverOut1}
          >
            <img
              ref={fullImage1Ref}
              src={image1FullBox}
              className="absolute w-full h-full object-cover rounded-xl"
            />
            <div
              ref={box1Ref}
              style={{ backgroundColor: "#F45B5B" }}
              className=" absolute inset-0 text-white rounded-xl p-6 flex items-center"
            >
              <div>
                <img
                  src="src/assets/image1.png"
                  className="character absolute -bottom-16 -left-16 w-[14rem]"
                />

                <div className="pl-36 ">
                  <h3 className="text-2xl font-bold mb-2">
                    Start with clarity
                  </h3>
                  <p className="mb-4 text-xl">
                    Step into better learning path.
                  </p>
                  <p>
                    Overwhelmed by too many learning options? SkillShikshya
                    provides a clear, curated roadmap from the start. Whether
                    you're a beginner or upskilling, we have a path tailored to
                    your growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div style={{ backgroundColor: "#5492A0" }} className="relative text-white rounded-xl p-6 flexitems-center">
                        <img src="src/assets/image2.png" className="character absolute -bottom-20 left-90 w-[11rem]" />
                        <div className="pr-36 ">
                        <h3 className="text-2xl font-bold mb-2">Learn by Doing</h3>
                        <p className="mb-4 text-xl">Practical skills, real projects</p>
                        <p>Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
                        
                        </div>
                        
                        </div> */}

          <div
            className="relative w-full h-[260px] cursor-pointer"
            onMouseEnter={handleHoverIn2}
            onMouseLeave={handleHoverOut2}
          >
            <div
              ref={box2Ref}
              style={{ backgroundColor: "#5492A0" }}
              className=" absolute inset-0 text-white rounded-xl p-6 flex items-center"
            >
              <img
                src="src/assets/image2.png"
                className="character absolute -bottom-20 left-90 w-[11rem]"
              />

              <div className="pr-36 ">
                <h3 className="text-2xl font-bold mb-2">Learn by Doing</h3>
                <p className="mb-4 text-xl">Practical skills, real projects</p>
                <p>
                  Theory is great, but action is better. At SkillShikshya, you
                  learn by doing. Hands-on projects and real-world scenarios
                  help you build, break, and create—leading to true mastery.
                </p>
              </div>
            </div>
            <img
              ref={fullImage2Ref}
              src={image2FullBox}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
          <div
            style={{ backgroundColor: "#6C64A8" }}
            className=" relative text-white rounded-xl p-6 flexitems-center"
          >
            <img
              src="src/assets/image3.png"
              className=" character absolute -bottom-14 -left-16 w-[17rem]"
            />
            <div className="pl-38 ">
              <h3 className="text-2xl font-bold mb-2">
                Get Mentored & Supported
              </h3>
              <p className="mb-4 text-xl">You are not learning alone</p>
              <p>
                Stuck or need feedback? SkillShikshya’s community of mentors and
                learners has your back with live support, interactive
                discussions, and expert insights. You’re never on your own.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#A88964" }}
            className="relative text-white rounded-xl p-6 flexitems-center"
          >
            <img
              src="src/assets/image4.png"
              className="character absolute -bottom-14 left-80  w-[15rem] character"
            />
            <div className="pr-36 ">
              <h3 className="text-2xl font-bold mb-2">Achieve & Showcase</h3>
              <p className="mb-4 text-xl">Build your portfolio, get jobready</p>
              <p>
                Your journey ends with achievement. Each completed project
                builds a portfolio showcasing your skills and job readiness,
                bringing you closer to that dream job, promotion, or your own
                venture.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
