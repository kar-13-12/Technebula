import { useEffect, useRef } from "react";
export const FadeOnVisible = ({children}) => {
    const ref = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting;
          if(ref.current !== null){
          if(isIntersecting)
          ref.current.classList.add("fade-in");
         else
         ref.current.classList.remove("fade-in")
        }
    },
        { rootMargin: "-5px" }
      );
  
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}