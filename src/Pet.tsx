import React, { FunctionComponent } from "react";
import { Photo } from "@frontendmasters/pet";
import { Link } from "@reach/router";

interface Props {
  id: number,
  name: string,
  animal: string,
  breed: string,
  media: Photo[],
  location: string
}

const Pet: FunctionComponent<Props> = ({ id, name, animal, breed, media, location }) => {
  let thumbnail = "http://placecorgi.com/300/300";

  if (media.length) {
    thumbnail = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
