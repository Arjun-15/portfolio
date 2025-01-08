import React from "react";
import { Image } from "../../components/Image/Image";

export const Banner: React.FC = () => {
  const src = "https://nlp.v2.letsachieve.co/images/login-left-banner.svg";
  const alt = "";
  const className = "img-responsive";
  return (
    <>
      <Image src={src} alt={alt} className={className} style={{}} />
    </>
  );
};
