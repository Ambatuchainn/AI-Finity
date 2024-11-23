import React, { useState } from 'react';

const GeneratorForm = ({ onGenerate }) => {
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('Digital Art'); // Default to 'Digital Art'

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(description, style);
  };

  // Handle style box click
  const handleStyleSelect = (style) => {
    setStyle(style); // Update the style when a box is clicked
  };

  return (
    <div className="generator-container">
      <h2 className="form-title">Describe Your Ideas and Generate</h2>
      <p className="form-description">
        Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking NFTs.
      </p>

      <form className="generator-form" onSubmit={handleSubmit}>
        {/* Input field for description */}
        <input
          type="text"
          placeholder="Describe your image..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}  // Updates description as the user types
          className="form-input"
        />

        {/* Custom Select (Map of Boxes) for Style */}
        <div className="custom-select">
          <div
            className={style === 'Digital Art' ? 'selected' : ''}
            onClick={() => handleStyleSelect('Digital Art')}
          >
            Digital Art
          </div>
          <div
            className={style === 'Abstract' ? 'selected' : ''}
            onClick={() => handleStyleSelect('Abstract')}
          >
            Abstract
          </div>
          <div
            className={style === 'Oil Painting' ? 'selected' : ''}
            onClick={() => handleStyleSelect('Oil Painting')}
          >
            Oil Painting
          </div>
          <div
            className={style === 'Watercolor' ? 'selected' : ''}
            onClick={() => handleStyleSelect('Watercolor')}
          >
            Watercolor
          </div>
        </div>

        <button type="submit" className="submit-button">Generate</button>
      </form>
    </div>
  );
};

export default GeneratorForm;