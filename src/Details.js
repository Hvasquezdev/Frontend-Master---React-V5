import React from "react";
import Pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false
    };
  }

  componentDidMount() {
    Pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          breed: animal.breeds.primary,
          description: animal.description,
          media: animal.photos,
          isLoading: false,
          hasError: false
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          hasError: true
        })
        throw(error);
      });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error fetching the data</h1>;
    }

    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    const { name, animal, location, breed, description, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />

        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>

          <button>Adopt {name}</button>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
