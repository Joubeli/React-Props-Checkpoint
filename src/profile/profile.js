import React from 'react'
import {Button } from 'react-bootstrap'
import PropTypes from 'prop-types'


const Profile = ({profile, children, alertName }) => {
    return (
        <>
        <div className='cimg'>
        
        <img className='img' src={profile[0].img} alt='image1'></img>
        <Button  onClick={()=>alertName(profile[0].Name)}>Join Me On Instagram</Button>{' '}
        </div>
        <div className='profile'>
            <h1>{profile[0].Name}</h1>
            <p style={{textAlign:'center'}}>{profile[0].bio}</p>
            <p className='profession'>{profile[0].profession}</p>
            <div>
                {children}
            </div>

        </div>
        </>
    )
}

Profile.propTypes = {
     alertName: PropTypes.func.isRequired,
  };


export default Profile
