import React from "react";
import PropTypes from 'prop-types';

function BlurBlob({ position, size }) {
  // Destructuring position and size
  const { left, top } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        left: left,
        top: top,
        width: width,
        height: height,
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl blob"></div>
    </div>
  );
}

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};



export default BlurBlob;
