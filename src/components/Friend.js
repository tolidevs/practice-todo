import React from 'react';

const Friend = ({ friend }) => {
    
    const { avatar, first_name, last_name } = friend

    return (
        <li>
            <img src={avatar} alt="profile pic" loading="lazy" />
            {first_name} {last_name}
        </li>
    )
}

export default Friend