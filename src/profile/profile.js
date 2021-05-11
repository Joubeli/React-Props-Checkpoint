import React from 'react'

const Profile = ({ profile, children }) => {
    return (
        <div>
            <h1>{profile[0].Name}</h1>
            <h2>{profile[0].bio}</h2>
            <p>{profile[0].profession}</p>
            <div>
                <span>Children</span>
                {children}
            </div>

        </div>
    )
}

export default Profile
