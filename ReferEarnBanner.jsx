import React from 'react';
import bannerImage from './file_00000000b0988211a3fa91e58cce0996.png';

export default function ReferEarnBanner() {
  return (
    <article style={{ width: '100%', overflow: 'hidden' }}>
      <img
        src={bannerImage}
        alt="VELOOP Rewards - Refer and Earn"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto'
        }}
      />
    </article>
  );
}
