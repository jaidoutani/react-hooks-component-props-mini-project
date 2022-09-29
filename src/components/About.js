import React from "react";

const About = ({image, about}) => {
//   console.log(about)
  return (
    <aside>
      {image ? (
        <img src={image} alt="blog logo" />
      ) : (
        <img src="https://via.placeholder.com/215" alt="blog logo" />
      )}
      <p>{about}</p>
    </aside>
  );
};

export default About;
