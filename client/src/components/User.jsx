import React from 'react'

import "./User.css"

const User = (props) => {

    const {username, email, gender, birthday, phone, address} = props;

    return (
        <div className='user'>
            <div className='user-label'>
                <label className='lab'>Username</label>
                <label className='prop'>{username}</label><br/>
            </div>

            <div className='user-label'>
                <label className='lab'>Email Address</label>
                <label className='prop'>{email}</label><br/>
            </div>

            <div className='user-label'>
                <label className='lab'>Gender</label>
                <label className='prop'>{gender}</label><br/>
            </div>

            <div className='user-label'>
                <label className='lab'>Birthday</label>
                <label className='prop'>{birthday}</label><br/>
            </div>

            <div className='user-label'>
                <label className='lab'>Phone Number</label>
                <label className='prop'>{phone}</label><br/>
            </div>

            <div className='user-label'>
                <label className='lab'>Address</label>
                <label className='prop'>{address}</label><br/>
            </div>
        </div>
    )
}

export default User