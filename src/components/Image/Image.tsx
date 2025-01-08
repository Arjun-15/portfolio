import React from "react";

interface IImage {
  src: string;
  alt?: string;
  className?: string;
  style?:any
}
export const Image: React.FC<IImage> = ({ src, alt, className ,style}) => {
  return (
    <>
      <img src={src} alt={alt} className={className} style={style}/>
    </>
  );
};
