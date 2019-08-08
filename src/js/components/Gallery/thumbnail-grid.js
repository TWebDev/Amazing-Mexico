import React from 'react';
import Thumbnail from './thumbnail'

const ThumbnailGrid = ({thumbnails, handleClick}) => {

    return (
      <div style={gridStyle}>
        {
          thumbnails.map((thumbnail, i) => {          
            return ( 
              <Thumbnail key={thumbnail.imgSrc} imgSrc={thumbnail} handleClick={handleClick} index={i}/>
              )
          }
          )
        }
      </div>
    )
  }

  const gridStyle = {
    background: 'blue',
    height: '40%',
    width: '100%',
    display: 'flex',
  }

  export default ThumbnailGrid