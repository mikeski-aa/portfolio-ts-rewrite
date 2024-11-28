import { RefObject, useEffect, useState } from "react";

// this hook will check if the element is in view.
// Element ref is passed into the function

export const useInView = (
  element: RefObject<HTMLDivElement>,
  rootMargin: string
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    current && observer?.observe(current);

    return () => {
      if (current) {
        current && observer.unobserve(current);
      }
    };
  }, []);

  return isVisible;
};
