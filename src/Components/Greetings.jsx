import React from "react";
import ReactDOM from "react-dom";
import { PiCloudSunDuotone } from "react-icons/pi";

function Greetings() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    fontSize: 23,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#D90000";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#333000";
    styles.fontSize = "20px";
  } else {
    timeOfDay = "night";
    styles.color = "#04756F";
  }

  return <h1 className=" flex gap-3 mt-[-2rem] font-bold" style={styles}> Good {timeOfDay} <span className=" text-4xl text-yellow-500"><PiCloudSunDuotone/></span></h1>;
}

// ReactDOM.render(<Greetings />, document.getElementById("root"));

export default Greetings;
