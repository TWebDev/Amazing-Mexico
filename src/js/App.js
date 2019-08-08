import React from 'react';
import Navbar from './components/Navbar';
//import logo from '../media/logos/logo.svg';
import Mimg from '../media/images/main.jpg';
import Mimgmob from '../media/images/main-mobile.png';
import Gallery from './components/Gallery/Gallery'
import Items from './components/Gallery/items-array'
import HeroForm from './components/Form/HeroForm'
import '../css/App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {text: "Heading"};
  }

  changeHeading = (text) => {this.setState({text: text});}

  render() {
    


    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="App">
          <div style={{position: 'relative'}} >
            <div className="main-img-container-desktop">
              <img src={Mimg} className="main-img" alt="beach" />
            </div>
            <div className="main-img-container-mobile">
              <img src={Mimgmob} className="main-img" alt="beach" />
            </div>
            <div className="main-img-tb">
              <a href="#form"><h1>Find out how <span className="brand-decoration">Amazing Mexico</span> is</h1></a>
            </div>
          </div>
          <Gallery />
          <div className="gallery-mobile-only">
            {
              Items.map((obj) => {
                return(
                  <>
                    <div className="img-mobile">
                      <img className="main-img" src={obj.imgSrc} alt={obj.title} />
                    </div>
                    <div className="img-mobile-desc">
                      <h1>{obj.title}</h1>
                      <p>{obj.text}</p>
                    </div>
                  </>
                  )
              })
            }
          </div>
          <div className="column" id="form">
            <div className="section">
              <h1 className="title has-text-white has-text-shadow">An agent will contact with you ASAP!</h1>
              <HeroForm />
            </div>
          </div>
        <footer className="App-footer">Amazing Mexico</footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
