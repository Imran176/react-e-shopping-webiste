import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, key, pic, size, linkUrl, match, history }) => {
  
  return (
    <div className={`menu-item ${size}`} 
    key={key}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${pic})`,
        }}
      >
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
