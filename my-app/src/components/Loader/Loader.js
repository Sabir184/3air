import React from 'react';
import { motion } from 'framer-motion';
import './LoaderStyles.scss';

function Loader() {
  const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' };

  return (
    <>
      <div className="loaderWrapper">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 136.34 132.77"
          className="airLogo"
        >
          <motion.path
            d="M60.9,107.07A32.92,32.92,0,0,1,31.31,88.38a5.88,5.88,0,1,1,10.62-5,21,21,0,0,0,38-.19,5.88,5.88,0,1,1,10.67,5A32.87,32.87,0,0,1,60.9,107.07Z"
            fill="#E71463"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M111.44,62.27h-.15A5.87,5.87,0,0,0,105.42,68l-.15,6.18v.15a44.36,44.36,0,0,1-88.59,3.42A8.82,8.82,0,1,0,4.9,78,56.13,56.13,0,0,0,117,74.4l.15-6.11A5.88,5.88,0,0,0,111.44,62.27Z"
            fill="#E71463"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="M132.78,63.73,81.38,11.1a8,8,0,0,0,.06-1,8.82,8.82,0,1,0-8.92,8.82l42.3,43.31H67.4a8.82,8.82,0,1,0,0,11.81h61a6.17,6.17,0,0,0,4.38-10.32Z"
            fill="#E71463"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
    </>
  );
}

export default Loader;
