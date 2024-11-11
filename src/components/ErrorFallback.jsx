// import React from 'react';

// const ErrorFallback = ({ message }) => (
//   <div className='text-center text-red-500 p-4 bg-red-100 border border-red-200 rounded-lg'>
//     <h2 className='text-lg font-semibold'>Something went wrong</h2>
//     <p>{message || 'An unexpected error occurred. Please try again later.'}</p>
//   </div>
// );

// export default ErrorFallback;

// src/components/ErrorFallback.js
import React from 'react';

const ErrorFallback = ({ message }) => (
  <div className='text-center text-gray-700 p-4 bg-yellow-100 border border-yellow-300 rounded-lg'>
    <p>{message || 'An unexpected error occurred. Please try again later.'}</p>
  </div>
);

export default ErrorFallback;
