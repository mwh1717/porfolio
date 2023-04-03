import React from "react";
import data from "../../public/story.json";

function StoryBlock() {

  return (
    <div>
      <ul>
        {data.map((data, index) => (
          <li key={index}> {data.para} </li>
        ))}
      </ul>
    </div>
  )
}

export default StoryBlock;