import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick(index) {
    this.setState({
      active: index
    });
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="Animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              // eslint-disable-next-line
              <img
                key={photo}
                onClick={() => this.handleIndexClick(index)}
                src={photo}
                alt="Animal small thumb"
                className={index === active ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
