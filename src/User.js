import React from "react";

const User = (props) => {
  console.log(props.data.name);
  return (
    <div>
      <h1>My name is {props.data.name}</h1>
    </div>
  );
};

export default User;
