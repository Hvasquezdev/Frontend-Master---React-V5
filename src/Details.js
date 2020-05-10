import React from "react";
import { navigate } from "@reach/router";
import Pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// Lazy loaded
const Modal = React.lazy(() => import("./Modal"));

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false,
      showModal: false,
    };
  }

  componentDidMount() {
    Pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          breed: animal.breeds.primary,
          description: animal.description,
          media: animal.photos,
          isLoading: false,
          hasError: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          hasError: true,
        });
        throw error;
      });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  adoptPet() {
    navigate(this.state.url);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error fetching the data</h1>;
    }

    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    const {
      name,
      animal,
      location,
      breed,
      description,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />

        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>

          <button onClick={() => this.toggleModal()}>Adopt {name}</button>

          <p>{description}</p>

          {showModal ? (
            <Modal>
              <h1>Would you like to adop {name}?</h1>
              <div className="buttons">
                <button onClick={() => this.adoptPet()}>Yes</button>
                <button onClick={() => this.toggleModal()}>
                  No, I am a monster!
                </button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
