import React, { useState } from 'react';
import './App.css'; // General Styles
import './Header.css'; // Header Styles
import './Footer.css'; // Footer Styles
import './NftPreview.css'; // NFT Generator Section Styles
import './GeneratorForm.css'; // Form Styles
import './Elements.css'; // Button, Inputs, and Other Elements
import logo from './logo1.png'; // Adjust the path based on your file structure
import GeneratorForm from './GeneratorForm'; // Import the GeneratorForm component

function App() {
  const [nftImage, setNftImage] = useState(null);

  // Simulate NFT generation
  const handleGenerate = (description, style) => {
    console.log(`Generating NFT with description: "${description}" and style: "${style}"`);
    setTimeout(() => {
      setNftImage('https://via.placeholder.com/600'); // Placeholder image; replace with API response URL
    }, 2000);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Site Logo" className="site-logo" />
        <div className="header-text">
          <h1>AI NFT Generator</h1>
          <p>Create and mint your NFT in a minute</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        <div className="nft-generator-container">
          <GeneratorForm onGenerate={handleGenerate} />
          {nftImage && (
            <div className="nft-image-container">
              <img
                src={nftImage}
                alt="Generated NFT"
                className="nft-image"
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Developed with ❤️ by Ambachain</p>
        <p>Powered by ICP</p>
      </footer>
    </div>
  );
}

export default App;