import React, { useRef } from "react";
import styles from "./Calculator.module.css";

export const Calculator: React.FC = () => {
  const buttons = [
    "C",
    "MR",
    "M+",
    "M-",
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  const inputRef = useRef<HTMLInputElement>(null);
  const MRef = useRef<HTMLInputElement>(null);
  const convertFloat = (val:string)=>{
    const result = parseFloat(val);
    // debugger;
    if(isNaN(result)) return 0;
    return result;
  }

  const Calculation = (key: string) => {
    console.log(key);
    
    if (key === "C" && inputRef.current) {
        inputRef.current.value = '';
    }
    else if (key === "=" && inputRef.current) {
      try {
        // Evaluate the expression using the `eval` function (Note: be cautious with `eval` as it can be a security risk)
        inputRef.current.value = eval(inputRef.current.value).toString();
      } catch (error) {
        inputRef.current.value = "Error";
      }
    }
    else if ((key === "MR" || key === 'M+' || key === 'M-') && MRef.current && inputRef.current) {
        switch(key){
            case "MR": MRef.current.value = ''; break;
            case "M+": MRef.current.value = eval(inputRef.current.value) + convertFloat(MRef.current.value) + ''; break;
            case "M-": MRef.current.value = eval(inputRef.current.value) - convertFloat(MRef.current.value) + ''; break;
            default: break;
        }
    } else if (buttons.includes(key) && inputRef.current) {
      inputRef.current.value += key;
    } else if (inputRef.current) {
      inputRef.current.value = key;
    }
  };

  return (
    <div className={styles.calculator}>
      <input
        ref={inputRef}
        className={styles.display}
        type="text"
        onChange={(e) => Calculation(e.target.value)}
      />
      <input type="text" disabled ref={MRef} className={styles.display}/>
      <div className={styles.buttonsContainer}>
        {buttons.map((key, i) => (
          <button
            key={i}
            className={styles.button}
            onClick={() => Calculation(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};
