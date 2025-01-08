import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../../components/Image/Image";

interface SignInWith_Props {
  link?: { type: string; className: string; to: string };
  div?: { className: string };
  img?: { src: string; alt: string };
}
export const SignInWith_: React.FC<SignInWith_Props> = ({ link, div, img }) => {
  return (
    <Link type={link?.type} className={link?.className} to={link?.to || '#'}>
      <div className={div?.className}>
        <Image src={img?.src || ''} alt={img?.alt} />
        Log in with Google
      </div>
    </Link>
  );
};
