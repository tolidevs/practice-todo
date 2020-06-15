import React from 'react';
import Friend from './Friend'

const FriendsList = ({friends, changePage}) => {

    const showFriends = (friends) => {
        return friends.map(friend => (
            <Friend friend={friend} key={friend.id}/>
        ))
    }

    return (
        <div>
            <ul>{showFriends(friends)}</ul>
            <button onClick={changePage}>Show More</button>
        </div>
    );
}

export default FriendsList