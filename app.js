import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const showBackground = true;
const background = (
  <img className='background' src='/images/ocean.jpg' alt='ocean'/>
)

const displayFact = e => {
  let name = e.target.alt;
  let animal = animals[name];
  let randomFact = animal['facts'][
    Math.floor(Math.random() * animal['facts'].length)
  ];
  document.getElementById('fact').innerHTML = randomFact;
}

const images = [];
for(let i in animals){
  images.push(<img key={i} className='animal' src={animals[i].image} alt={i} aria-label={i} role='button' onClick={displayFact} />)
}
const animalFacts = (
  <div>
  {showBackground && background}
  <p id='fact'></p>
  <div className='animals'>
  {images[0]}
  {images[1]}
  {images[2]}
  </div>
  <h1> 
  {!title ? 'Click an animal for a fun fact': ''}
  </h1>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'))
