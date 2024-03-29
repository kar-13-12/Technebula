import { useEffect, useRef } from "react";
export const FadeOnVisibleRight = ({children}) => {
    const ref = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting;
          if(ref.current !== null){
          if(isIntersecting)
          ref.current.classList.add("fade-right");
         else
         ref.current.classList.remove("fade-right")
        }
    },
        { rootMargin: "-50px" }
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