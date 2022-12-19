import React from "react";
//import styled from "styled-components";
import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/vivekanjankc12345">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vivekanjankc12345"
            alt="vivekanjankc12345"
          />
        </a>
      </div>
 
      <div
        style={{
          width: "60%",
          height: "400px",
          display: "flex",
          margin: "auto",
         
        }}
      >
        <a href="https://github.com/vivekanjankc12345">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivekanjankc12345" 
            alt="vivekanjankc12345" //launguages
          />
        </a>
        <a href="https://github.com/saurabh0413">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=vivekanjankc12345&count_private=true&show_icons=true" 
            alt="vivekanjankc12345"//stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;