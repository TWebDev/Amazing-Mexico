import React from 'react';

const ActiveThumbnail = ({activeImg}) => {

    return (
      <div style={activeStyle}>
        <div style={thumbStyle}> 
          <img className="main-img" 
            src={activeImg.imgSrc} 
            alt={activeImg.title} 
          />
          </div>
        <div style={descriptStyle}>
          <h2>{activeImg.title}</h2>
          <p>{activeImg.text}</p>
        </div>
      </div>
    )
  }

  const activeStyle = {
    height: '60%',
    width: '100%',
    display: 'flex'
  }
  const thumbStyle = {
    background: 'rgba(0,0,0,0)',
    height: '100%',
    width: '60%',
    position: 'relative'
  }
  const descriptStyle = {
    background: 'rgba(0,0,0,0)',
    height: '100%',
    width: '40%',
  }

  export default ActiveThumbnail

