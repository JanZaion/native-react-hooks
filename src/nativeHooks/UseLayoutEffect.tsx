import { useLayoutEffect, useRef, useState } from "react";

// Like useEffect, but before the browser paints.
export const UseLayoutEffect = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        setScrollPosition(divRef.current.scrollTop);
      }
    };

    const div = divRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          padding: "10px",
          marginTop: "20px",
          height: "300px",
          overflowY: "scroll",
          backgroundColor: "hotpink",
        }}
      >
        <div style={{ height: "800px" }}>
          <h1>Scroll this div to see the scroll position update.</h1>
        </div>
      </div>
      <p>
        The scroll position of the above div is: {scrollPosition}px
      </p>
    </div>
  );
};
