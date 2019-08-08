import React from 'react';

const SliderGlider = () => {
  const heroSlides = ['Save.', 'Travel.', 'Relax.']

  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-body">
          <div className="glide">
            <div className="glide__track" data-glide-el='track'>
              <ul className="glide__slides">
                {heroSlides.map((item) => 
                  <div className="glide__slide" key={item}>
                    <div className="container">
                      <h1 className="title is-size-0 has-text-white has-text-shadow">
                        <span>{item.charAt(0)}</span>{item.substring(1)}
                      </h1>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SliderGlider;