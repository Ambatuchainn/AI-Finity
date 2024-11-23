import React from 'react';
import './NftPreview.css';

const NftPreview = ({ previewImage }) => {
  return (
    <div className="nft-preview">
      <img src={previewImage} alt="NFT Preview" className="nft-image" />
    </div>
  );
};

export default NftPreview;