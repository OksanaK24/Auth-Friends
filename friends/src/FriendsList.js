import React, { useState, useEffect } from "react";
import api from "./utils/api";
import FriendCard from "./FriendCard";
import AddFriend from "./AddFriend";

function FriendsList() {
	const [friends, setFriends] = useState([])

	useEffect(() => {
		api()
		  .get("/api/friends")
		  .then(response => {
			setFriends(response.data);
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }, []);

	const addFriend = (e, friend) => {
	e.preventDefault();
	api()
		.post("/api/friends", friend)
		.then(response => {
			setFriends(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	};

	return (
		<div>
            <h3>My friends</h3>
			<div className="FriendsList">
				{friends &&
					friends.map(friend => (
						<FriendCard key={friend.id} friend={friend}/>
				))}
			</div>
			<AddFriend addFriend={addFriend}/>
        </div>
	)
}

export default FriendsList;
