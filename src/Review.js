import React from "react";

function Review(props) {
  return (
    <ul>
      {props.review.map((item, index) => (
        <li key={index}>
          <div>{index + 1}</div>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.review}</div>
          <div>{item.year}</div>
        </li>
      ))}
    </ul>
  );
}
export default Review;
