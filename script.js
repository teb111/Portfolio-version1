const tl = gsap.timeline({defaults: { ease: "power1.out" }});
tl.to('.slide1', {y: "100%", duration: 0.5});
tl.to('.slide2', {y: "100%", duration: 0.5});
tl.to('.slide3', {y: "100%", duration: 0.5});
tl.to('.slide4', {y: "100%", duration: 0.5});
tl.to('.slide5', {y: "100%", duration: 0.5});
tl.to('.slider', {x: "-100%", duration: 0.5});
tl.to('.text', {y: "0%", duration: 2, stagger: 0.25});
tl.to('.intro', {y:"100%", duration: 1});
tl.fromTo('.menu-wrap', {opacity: 0}, {opacity: 1, duration: 2});
tl.fromTo('.about', {y: "-130%"}, {y: "0", duration: 2}, "-=1");
tl.fromTo('.links', {opacity: 0}, {opacity: 1, duration: 2}, "-=1");
tl.fromTo('.about-me', {opacity: 0}, {opacity: 1, duration: 2},);


