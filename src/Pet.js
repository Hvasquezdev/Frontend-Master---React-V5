import React from "react";

const Pet = ({ id, name, animal, breed, media, location }) => {
  let thumbnail = "http://placecorgi.com/300/300";

  if (media.length) {
    thumbnail = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
