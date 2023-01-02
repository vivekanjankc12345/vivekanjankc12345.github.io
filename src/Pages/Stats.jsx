import React from "react";
//import styled from "styled-components";
import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div>
      <div 
       height={{
      base: '40%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '25%', // 80em+
    }}
   
   
    width={[
      '40%', // 0-30em
      '50%', // 30em-48em
      '25%', // 48em-62em
      '15%', // 62em+
    ]}>
    
        <a href="https://github.com/vivekanjankc12345">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vivekanjankc12345"
            alt="vivekanjankc12345"
          />
        </a>
      </div>
 
        <div  
        // style={{
        //   width: "60%",
        //   height: "250px",
        //   display: "flex",
        //   margin: "auto",
         
        // }}
      >
        <a href="https://github.com/vivekanjankc12345">  
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivekanjankc12345" 
            alt="vivekanjankc12345" //launguages
          />
        </a>
        <a href="https://github.com/vivekanjankc12345">
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