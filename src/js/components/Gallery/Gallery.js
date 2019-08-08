import React from 'react';
import ActiveThumbnail from './active-thumbnail'
import ThumbnailGrid from './thumbnail-grid'
import Items from './items-array'

export default class Gallery extends React.Component {
  state = {
    thumbnails: Items,
    index: 0
  }


  renderThumbnails = () => {
    const { thumbnails, index } = this.state
    if(thumbnails.length) {
      return (
        <ActiveThumbnail activeImg={thumbnails[index]}/>
      )
    }

  }

  handleClick = (e) => {
    const newActive = e.target.getAttribute('data-index')
    this.setState({index: newActive})
  }

  render() {
    const { thumbnails } = this.state

    return (
      <div className="gallery-desktop-only" style={galleryStyle} id="destinations">
        <ThumbnailGrid thumbnails={thumbnails} handleClick={this.handleClick} />
        {this.renderThumbnails()}
      </div>
    )
  }
}

const galleryStyle = {
  height: '600px',
  width: '90%',
  margin: '20px auto',
  padding: '20px',
  color: 'white'
}