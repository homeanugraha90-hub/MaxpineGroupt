// 📂 src/components/ScrollToTop.jsx
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function UpArrow() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-[#7575a3] text-white shadow-lg hover:bg-[#9292c1] transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
