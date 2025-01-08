import React from "react";

interface LabelInputProps{
  div?:{className:string}
  input?:{type:string,className:string,name:string,placeholder:string,value:any};
  propsInput?:{};
  icon?:{className:string}
  label?:{name:string,className:string}
}
export const LabelInput: React.FC<LabelInputProps> = ({div,input,propsInput,icon,label}) => {
  return (
    <div className={div?.className||''}>
      <input
        type={input?.type || "text"}
        className={` ${input?.className}`}
        name={input?.name || "Email"}
        placeholder={input?.placeholder || "Your email Id"}
        value={input?.value || ""}
        {...propsInput} // Spread the remaining attributes
      />
      {!icon?.className ? null : (
        <i className={`fa ${icon.className}`} style={{ margin: " 20px -2rem" }}></i>
      )}
      <label htmlFor={input?.name || "Email"} className={label?.className || ''}>{label?.name || "Label"}</label>
    </div>
  );
};
