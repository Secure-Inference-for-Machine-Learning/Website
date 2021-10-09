import gsap from "gsap";

gsap.registerPlugin(ScrambleTextPlugin);

const tl = gsap.timeline();

export const animateIntro = (el) => {
  gsap.to("canvas.webgl", { opacity: 0, duration: 0 });
  gsap.to(".app__container__title", { opacity: 0, duration: 0 });

  tl.to(".app__container__intro", {
    duration: 4,
    scrambleText: { text: "Alexandruuuuu presents", chars: "01010101011" },
  });

  tl.to(".app__container__intro", {
    opacity: 0,
    duration: 3,
  });

  tl.to(".app__container__intro", {
    opacity: 1,
    duration: 4,
    scrambleText: {
      text: "Secure Inference for Machine Learning",
      chars: "01010101011",
    },
  });

  tl.to(".app__container__intro", {
    opacity: 0,
    duration: 3,
  });

  tl.to(
    "canvas.webgl",
    {
      opacity: 1,
      duration: 3,
      onComplete: () => {
        gsap.to(".app__container__intro", {
          display: "none",
        });
      },
    },
    "contentIn"
  );

  tl.to(
    ".app__container__title",
    {
      opacity: 1,
      duration: 3,
    },
    "contentIn"
  );
};
