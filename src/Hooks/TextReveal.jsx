import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextReveal({
  children,
  animateOnScroll = true,
  delay = 0,
}) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    splitRef.current = [];
    elementRef.current = [];
    lines.current = [];

    let elements = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children);
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRef.current.push(element);

      const split = new SplitText(element, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      splitRef.current.push(split);

      const computedStyle = window.getComputedStyle(element);
      const textIndent = computedStyle.textIndent;

      if (textIndent && textIndent == "0px") {
        if (split.lines.length > 0) {
          split.lines[0].style.paddingLeft = textIndent;
        }
        element.style.textIndent = "0";
      }
      lines.current.push(...split.lines);
    });

    gsap.set(lines.current, { y: "100%" });

    const animationProps = {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: delay,
    };

    if (animateOnScroll) {
      gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });
    } else {
      gsap.to(lines.current, animationProps);
    }

    return () => {
      splitRef.current.forEach((split) => {
        if (split) {
          split.revert();
        }
      });
    };
  }, [animateOnScroll, delay]);

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}

// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { SplitText, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(SplitText, ScrollTrigger);

// export default function TextReveal({
//   children,
//   animateOnScroll = true,
//   delay = 0,
//   scrub = true, // <--- added scrub toggle
// }) {
//   const containerRef = useRef(null);
//   const elementRef = useRef([]);
//   const splitRef = useRef([]);
//   const lines = useRef([]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     splitRef.current = [];
//     elementRef.current = [];
//     lines.current = [];

//     let elements = [];
//     if (containerRef.current.hasAttribute("data-copy-wrapper")) {
//       elements = Array.from(containerRef.current.children);
//     } else {
//       elements = [containerRef.current];
//     }

//     elements.forEach((element) => {
//       elementRef.current.push(element);

//       const split = new SplitText(element, {
//         type: "lines",
//         mask: "lines",
//         linesClass: "line++",
//       });

//       splitRef.current.push(split);

//       const computedStyle = window.getComputedStyle(element);
//       const textIndent = computedStyle.textIndent;

//       if (textIndent && textIndent == "0px") {
//         if (split.lines.length > 0) {
//           split.lines[0].style.paddingLeft = textIndent;
//         }
//         element.style.textIndent = "0";
//       }
//       lines.current.push(...split.lines);
//     });

//     // Initial state
//     gsap.set(lines.current, { y: "100%" });

//     const animationProps = {
//       y: "0%",
//       duration: 1,
//       stagger: 0.1,
//       ease: "power4.out",
//       delay: delay,
//     };

//     if (animateOnScroll) {
//       gsap.to(lines.current, {
//         ...animationProps,
//         duration: 0.5, // makes animation smoother with scrub
//         ease: "none", // disables easing for smoother scrub feel
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//           end: "bottom 80%", // <-- now it has an end point
//           scrub: scrub ? true : false, // <-- enables scroll-based control
//           once: !scrub, // play once only if not scrubbing
//         },
//       });
//     } else {
//       gsap.to(lines.current, animationProps);
//     }

//     return () => {
//       splitRef.current.forEach((split) => {
//         if (split) split.revert();
//       });
//     };
//   }, [animateOnScroll, delay, scrub]);

//   if (React.Children.count(children) === 1) {
//     return React.cloneElement(children, { ref: containerRef });
//   }

//   return (
//     <div ref={containerRef} data-copy-wrapper="true">
//       {children}
//     </div>
//   );
// }
