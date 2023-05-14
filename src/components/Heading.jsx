import React from "react";

const Heading = () => {
  const currentTime = new Date().getHours();

  let greeting;
  let color;

  if (currentTime < 12) {
    greeting = "Good Morning";
    color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    color = "green";
  } else {
    greeting = "Good Night";
    color = "blue";
  }

  return (
    <h1 className="heading" style={{ color: color }}>
      {greeting}
    </h1>
  );
};

export default Heading;
