import React from 'react'
import '../css/Profile.css'
import camera from '../icons/camera.png';
import sampleProfile from '../icons/profile.jpg';

export const Profile = () => {
  return (
    <div className='profileContainer'>
      <span className='profileHeader'>Account Settings</span>
      <div className='profileInfo'>
        <div style={{ position: 'relative', display: 'inline-block', width: '5.5em', overflow: 'hidden' }}>
          <img className='profilePic' src={sampleProfile} alt='None' />
          <span><img className='cameraIcon' src={camera} alt='None' /></span>
        </div>
        <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '4vw' }}>
          <div style={{ fontWeight: 'bolder' }}>Marry Doe</div>
          <div style={{ fontSize: '0.9em' }}>Marry@Gmail.Com</div>
        </div>
      </div>
      <div style={{
        paddingLeft: '6vw',
        paddingRight: '6vw',
        paddingBottom: '2vh',
        marginTop: '-1vh',
        borderBottomStyle: 'dashed',
        borderBottomWidth: '1px',
        borderBottomColor: 'grey'
      }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, dolore corrupti magnam sit hic sint nesciunt possimus.
      </div>
      <div style={{
        height: '3vh',
        width: '100%',
        position: 'absolute',
        bottom: '-56vh',
        borderBottomStyle: 'dashed',
        borderBottomWidth: '1px',
        borderBottomColor: 'grey'
      }}>
      </div>
    </div>
  )
}
