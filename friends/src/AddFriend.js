import React, { useState } from "react";

 export default function AddFriend(props) {
  const defaultState = {
    name: "",
    age: "",
    email: ""
  };
  const [friend, setFriend] = useState(props.friend || defaultState);

   const handleChange = e =>
    setFriend({ ...friend, [e.target.name]: e.target.value });

   const handleSubmit = e => {
    props.addFriend(e, friend);
  };

   return (
    <form onSubmit={e => handleSubmit(e)} className="Form">
      <input
        type="text"
        name="name"
        value={friend.name}
        placeholder="Name"
        onChange={handleChange}
        className="Input"
      />
      
      <input
        type="number"
        name="age"
        value={friend.age}
        placeholder="Age"
        onChange={handleChange}
        className="Input"
      />

      <input
        type="email"
        name="email"
        value={friend.email}
        placeholder="Email"
        onChange={handleChange}
        className="Input"
      />

      <button type="submit" className="Button">Add friend</button>
    </form>
  );
}