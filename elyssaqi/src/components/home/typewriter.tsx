import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypewriterComponent: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello! ", "你好! ", "Bonjour! ", "Ciao!", "こんにちは! ", "안녕하세요! ", "ನಮಸ್ಕಾರ! ", "नमस्ते! "],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      cursorChar: "|", // Customize the cursor
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <h5 style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}>
      <span style={{ color: "white", fontWeight: "bold" }} ref={el} />
    </h5>
  );
};

export default TypewriterComponent;