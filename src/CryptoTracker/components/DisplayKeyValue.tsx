import React from "react";

interface IDisplayKeyValue {
  keys: string;
  value: string | number;
}
export const DisplayKeyValue: React.FC<IDisplayKeyValue> = ({ keys, value }) => {
  return (
    <div className="row">
      <span className="text-left key col-5">{keys}</span>
      <span className="value col-7 text-right">{value}</span>
    </div>
  );
};
