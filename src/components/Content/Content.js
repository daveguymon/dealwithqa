import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

export default class Content extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      features: [

          {
          id: 'first',
          img: './images/brooks_content_1.jpg',
          heading: 'Run don\'t walk sale',
          script: 'Up to 40% off + free shipping on end-of-season footwear, sports bras, and apparel.',
          link: '/products'
        },


          {
          id: 'second',
          img:'./images/brooks_content_2.jpg',
          heading: 'A shoe for every run.',
          script: 'Follow your body. Find your run. Let our shoe finder help you chose the right shoe for you.',
          link: '/products'
        },

          {
          id: 'third',
          img:'./images/brooks_content_3.jpg',
          heading: 'Ultra soft Glycerin 15',
          script: 'Super DNA cushioning provides 25% more adaptable cushioning than our standard DNA midsole.',
          link: '/product'
        }

      ]
    }
  }

  render() {


        function handleClick(e){
          e.preventDefault();
          console.log("Oh, snap! This shouldn't be here.")
        }


        const featureStories = this.state.features.map((story, i) => {
          return (
            <div key={i} className="indivStory">
            <Link to={story.link}>
            <img onClick={handleClick} src={story.img} />
            </Link>
            <h4 className="storyh4">{story.heading}</h4>
            <div className="scriptTextContainer">
            <p>{story.script}</p>
            </div>
            </div>
          )
        })

  return (
    <div className="contentContainer">
    <Link to="/products">
    <img className="headerImg" src="./images/new_ghost_banner.jpg" />
    </Link>
    <div className="featured">
    {featureStories}
    </div>
    </div>
  )
}
}
