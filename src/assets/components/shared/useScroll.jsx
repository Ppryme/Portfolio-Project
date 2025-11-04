import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function ScrollToTopButton({darkMode}) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const backToTop = () => {
    const start = window.scrollY;
    const duration = 1000; // 1 second scroll
    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for natural motion
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };


  

  return (
    <button
      onClick={backToTop}
      style={{
        position: "fixed",
        right: 30,
        bottom: 30,
        border: "none",
       
        color: darkMode ? "white" : "black",
        borderRadius: "50%",
        width: 55,
        height: 55,
        display: showButton ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <FiChevronUp  size={32} />
    </button>
  );
}
