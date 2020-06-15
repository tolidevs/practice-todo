import React, { useEffect, useState } from 'react';
import API from '../API'
import FriendsList from './FriendsList'

const User = () => {

    const [user, setUser] = useState(null)
    const [page, setPage] = useState(1)
    const [friends, setFriends] = useState(null)
    const [showFriends, setShowFriends] = useState(false)

    // get user from API and set user in state
    const getUser = (id) => {
        API.get(`/users/${id}`)
            .then(resp => setUser(resp.data))
            .catch(error => console.log(error))
    }

    // when page loads call API to get user
    useEffect(() => {
        getUser(Math.floor(Math.random() * (12 - 1 + 1 )) + 1 )
    }, [])

    // when page number changes (when click next page button) call get friends again
    useEffect(() => { getFriends(page) }, [page])

    // get friends list from API using current page in state
    const getFriends = (page) => {
        API.get(`/users?page=${page}`)
            .then(response => setFriends(response.data))
            .catch(error => console.log(error))
    }

    const toggleShowFriends = () => {
        setShowFriends(!showFriends)
    }

    const changePage = (page) => {
        if (page === 1) setPage(2)
        if (page === 2) setPage(1)
    }

    return (
        <div>
            <div>
            <p>Hello {user && user.first_name}</p>
            <img src={user && user.avatar} alt="avatar" />
            </div>
            <button
            onClick={() => {
                toggleShowFriends();
                // getFriends(page)
            }}
            >
            See Friends
            </button>
            {showFriends && (
            <FriendsList friends={friends} changePage={() => changePage(page)} />
            )}
        </div>
    );
}

export default User