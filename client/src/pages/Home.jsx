import { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import NewsLetter from "../components/NewsLetter";
import Chatbot from "./Chatbot";

const AnimatedSection = ({ children, animation, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 2026 Optimization: Trigger immediately if the section is visible on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      // Small timeout ensures the browser has painted the initial state before animating
      setTimeout(() => el.classList.add("in-view"), 50);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`section-base ${animation} ${className}`}>
      {children}
    </section>
  );
};

const Home = () => {
  return (
    <main className="w-full relative overflow-x-hidden min-h-screen m-0 p-0">
      
      {/* Hero Entrance: Using a custom high-performance animation */}
      <AnimatedSection animation="slide-y">
        <Hero />
      </AnimatedSection>

      <AnimatedSection animation="slide-y" className="max-w-7xl mx-auto px-2 py-2">
        <Category />
      </AnimatedSection>

      <AnimatedSection animation="slide-y" className="max-w-7xl mx-auto px-2 py-2">
        <BestSeller />
      </AnimatedSection>

      <AnimatedSection animation="slide-y">
        <NewsLetter />
      </AnimatedSection>

      <div className="fixed bottom-0 right-0 z-100">
        <Chatbot/>
      </div>

      <style>{`
        :root { scrollbar-gutter: stable; }
        ::-webkit-scrollbar { width: 0px; background: transparent; }

        .section-base { 
          opacity: 0; 
          will-change: transform, opacity, filter;
        }

      

        /* Standard Section Slide: Fast start, slow settle */
        .slide-y { 
          transform: translateY(60px); 
          transition: 
            transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .in-view { 
          opacity: 1; 
          transform: translate(0, 0) scale(1) !important; 
          filter: blur(0px) !important;
        }

        html, body {
          scroll-behavior: smooth;
          overflow-x: hidden;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </main>
  );
};

export default Home;