import React from "react";
import { Link } from "react-router-dom";

export const Connection: React.FC = () => {
  return (
    <div className="d-flex banner-links" style={{textAlign:'right'}}>
      <Link
        to="https://leetcode.com/u/as506347/"
        className=""
        // style={{ marginRight: -40 }}
      >
        <img
          alt="Leetcode"
          src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
          style={{ width: "40%" }}
        />
      </Link>
      <Link
        to="https://stackoverflow.com/users/14514939/the-arjun-sharma"
        className="mr-3"
      >
        <img
          alt="Stack Overflow"
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
        />
      </Link>
      <Link to="https://www.instagram.com/mr.arjun.sharma.ji/" className="mr-3">
        <img
          alt="Instagram"
          src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
        />
      </Link>
      <Link to="https://github.com/Arjun-15" className="mr-3">
        <img
          alt="GitHub"
          src="https://img.icons8.com/doodle/40/000000/github--v1.png"
        />
      </Link>
      <Link
        to="https://www.linkedin.com/in/arjun-sharma-69aa87175/"
        className="mr-3"
      >
        <img
          alt="LinkedIn"
          src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
        />
      </Link>
    </div>
  );
};
