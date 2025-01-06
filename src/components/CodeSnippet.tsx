import React from "react";

interface CodeSnip {
  data: any;
  title: any;
}
const CodeSnippet: React.FC<CodeSnip> = ({ data, title }) => {
    console.log(data,title)
  return (
    <div>
      <h3>{title}</h3>
      <pre style={{background:'gray'}}>
        <code >
          {`${data}
          `}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
