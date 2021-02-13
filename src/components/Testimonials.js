import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data from 'assets/data/recommendation';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        style={{marginBottom: '200px'}}
      >
          {
              data.length && data.map((person) => {
                  return (
                    <div>
                    <img src={person.image} />
                    <div className="myCarousel">
                      <h3>{person.author}</h3>
                      <h4>{`${person.designation}, ${person.organization}`}</h4>
                      <p>
                        {
                            person.text
                        }
                      </p>
                    </div>
                  </div>
                  );
              })
          }
      </Carousel>
    );
  }
}