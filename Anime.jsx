import React, { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    anime({
      targets: boxRef.current,
      translateX: 250,
      duration: 1000,
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "red",
      }}
    ></div>
  );
};

export default AnimatedBox;
