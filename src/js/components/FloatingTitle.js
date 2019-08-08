import React from 'react';

const FloatingTitle = () => {
  return (
    <React.Fragment>
      <div className="container" data-depth='0.5'>
        <h1 className="title is-size-1 has-text-90s has-text-white"><span>Y</span>our <span>v</span>acations</h1>
        <h2 className="subtitle is-size-3 has-text-90s has-text-white">...like you've never experienced before</h2>
      </div>
    </React.Fragment>
  )
}

export default FloatingTitle;