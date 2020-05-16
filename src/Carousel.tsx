import React from "react";
import { Photo } from "@frontendmasters/pet";

interface Props {
  media: Photo[]
}

interface State {
  photos: string[],
  active: number
}

class Carousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps({ media }: Props) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick(index: number) {
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
                key={photo + index}
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
