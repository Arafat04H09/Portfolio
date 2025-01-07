import React from 'react';
import ProfilePicture from '/arafat.png';

const AvatarDisplay: React.FC = () => {
  return (
    <div
      className="avatar-display"
      style={{
        position: 'relative',
        width: '153px',
        height: '153px',
      }}
    >
      <img
        src={ProfilePicture}
        alt="User Avatar"
        className="rounded-full w-32 h-32"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default AvatarDisplay;
