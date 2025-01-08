import React from "react";
import { Image } from "../../components/Image/Image";

export const BrandLogo: React.FC = () => {
  return (
    <div className="brand-logo">
      <Image
        src="https://cdn-icons-png.flaticon.com/128/1527/1527105.png"
        alt="Pocket Shop"
        className="img-fluid"
        style={{ maxWidth: "300px", height: "auto", margin:'-1rem', width:'15%'}}
      />
      <h3 style={{ marginLeft: "2rem", marginTop: "1rem", color:'white'}}>Pocket Shop</h3>
    </div>
  );
};
export const CompanyLogo: React.FC = () => {
  return (
    <div className="company-logo">
      <span> Pocket Shop</span>
    </div>
  );
};
