import React from 'react';

const Thumbnail = ({imgSrc, handleClick, index}) => {

    return (
      <div style={thumbStyle}>
        <img src={imgSrc.imgSrc} alt="tiny" 
        style={{width: '100%', height: '100%', cursor: 'pointer'}} 
        onClick={handleClick} 
        data-index={index}
        id={index}
        />
        <div style={{position: 'absolute', bottom: '10px', right: '20px', color: 'white'}}>{imgSrc.title}</div>
      </div> 
    )
  }


  const thumbStyle = {
    background: 'purple',
    height: '100%',
    flex: '1',
    position: 'relative'
  }

  export default Thumbnail