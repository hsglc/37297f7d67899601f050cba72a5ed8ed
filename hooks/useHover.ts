import { useState, useEffect, useRef } from "react";

function useHover<T extends HTMLElement = HTMLElement>() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref.current]);

  return [ref, isHovered] as const;
}

export default useHover;
