import React from "react";


 export default function FriendCard(props) {

  const { friend } = props;

  return(
  <div className="FriendCard">
      <h3>{friend.name}</h3>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
  </div>
  );
}
