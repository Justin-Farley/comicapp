import React from 'react';
import { characters } from '../data'; 

const BrowseCharacters = () => {
  return (
    <div className="browse-characters">
      <h1>Browse Characters</h1>
      <div className="character-list">
        {characters.map(character => (
          <div key={character.id} className="character-card">
            <img src={character.imageUrl} alt={character.name} className="character-image" />
            <h2 className="character-name">{character.name}</h2>
            <p className="character-description">{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCharacters;
