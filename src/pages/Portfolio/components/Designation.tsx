import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
];
const typingSpeed = 200;
const erasingSpeed = 100;

export const Designation = () => {
  const [text, setText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timer: any;
    if (!isErasing && text === roles[currentRole]) {
      timer = setTimeout(() => setIsErasing(true), 1000);
    } else if (isErasing && text === "") {
      setIsErasing(false);
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    } else {
      const timeout = isErasing ? erasingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setText((prevText) =>
          isErasing
            ? roles[currentRole].substring(0, prevText.length - 1)
            : roles[currentRole].substring(0, prevText.length + 1)
        );
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [text, isErasing, currentRole]);

  return <span>{text}</span>;
};
