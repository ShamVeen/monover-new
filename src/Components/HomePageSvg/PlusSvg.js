import React from 'react';
import '../../style.css'

function PlusSvg() {
  return (
    // <l class="profile-pic-label d-flex justify-content-center align-items-center" for="profilePic">

    <span class="profile-pic-plus-icon">
    <svg
      className="me-3"
      width="13"
      height="14"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
        fill="white"
      />
    </svg>
    </span>

  );
}

export default PlusSvg;
