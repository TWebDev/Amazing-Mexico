import React from 'react';
import Card from '../Elements/Card';
import couple from '../../resources/images/pictures/couple.jpg';
import jimmy from '../../resources/images/pictures/jimmy.jpg';
import malecon from '../../resources/images/pictures/malecon.JPG';
import mango from '../../resources/images/pictures/mango.jpg';
import massage from '../../resources/images/pictures/massage.jpg';
import wedding from '../../resources/images/pictures/wedding.JPG';

const Popper = () => {
  window.addEventListener('scroll', () => {
    var popper = document.getElementById('popper'),
        bounding = popper.getBoundingClientRect().top;
    if (bounding === 0) {
      console.log('estoy en vista');
    } 
  })

  let cards = 
  [{
    Ratio: '1by1',
    Source: couple,
    Alt: 'ByThePool',
    children: <h1 className='title has-text-centered  has-text-white'><span>R</span>elax by the <span>p</span>ool</h1>
  },
  {
    Ratio: '9by16',
    Source: jimmy,
    Alt: 'Running',
    children: <h1 className='title has-text-centered has-text-white'><span>G</span>o for a <span>r</span>un</h1>
  },
  {
    Ratio: '1by1',
    Source: malecon,
    Alt: 'malecon',
    children: <h1 className='title has-text-centered has-text-white'><span>C</span>hill at the <span>m</span>alecon</h1>
  },
  {
    Ratio: '1by2',
    Source: mango,
    Alt: 'mango',
    children: <h1 className='title has-text-centered has-text-white'><span>T</span>aste a <span>m</span>ango</h1>
  },
  {
    Ratio: '1by1',
    Source: massage,
    Alt: 'massage-bed',
    children: <h1 className='title has-text-centered has-text-white'><span>G</span>et a <span>m</span>assage</h1>
  },
  { 
    Ratio: '4by3',
    Source: wedding,
    Alt: 'marriage-proposal',
    children: <h1 className='title has-text-centered has-text-white'><span>B</span>eing proposed <span>m</span>arriage</h1>
  }]
  
  return ( 
    <React.Fragment>
      <div className="container"  id='popper'>
        <div className="section">
          <h1 className={"title has-text-white is-size-1 has-text-90s"}><span>Y</span>ou could maybe...</h1>
        </div>
        <div className="is-flex" id='gallery'>
            {
              cards.map((item, index) => 
                <Card
                  key={index}
                  Ratio={item.Ratio}
                  Source={item.Source}
                  Alt={item.Alt}
                >
                  {item.children}
                </Card>)
            }
        </div>
      </div>
    </React.Fragment>
  );
}
 
export default Popper;