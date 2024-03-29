import { useEffect, useRef } from "react";
export const FadeOnVisibleLeft = ({children}) => {
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
        { rootMargin: "-100px" }
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