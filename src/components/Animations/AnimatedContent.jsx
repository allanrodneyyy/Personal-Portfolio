import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.2,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget = container || document.getElementById('snap-main-container') || null;

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      x: direction === "horizontal" ? offset : 0,
      y: direction === "vertical" ? offset : 0,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: "visible",
    });


    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget,
      start: `top ${startPct}%`,
      end: "bottom 20%",

      onEnter: () => {
        gsap.to(el, {
          [axis]: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease,
          overwrite: "auto"
        });
      },

      onLeave: () => {
        gsap.to(el, {
          [axis]: reverse ? distance : -distance,
          opacity: initialOpacity,
          scale,
          duration: disappearDuration,
          ease: disappearEase,
          overwrite: "auto"
        });
      },

      onEnterBack: () => {
        gsap.to(el, {
          [axis]: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease,
          overwrite: "auto"
        });
      },

      onLeaveBack: () => {
        gsap.to(el, {
          [axis]: offset,
          opacity: initialOpacity,
          scale,
          duration: disappearDuration,
          ease: disappearEase,
          overwrite: "auto"
        });
      }
    });

    return () => {
      st.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  return (
    <div ref={ref} className={className} style={{ visibility: 'visible' }} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
