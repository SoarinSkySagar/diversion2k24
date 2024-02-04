import React from 'react';

const ReviewCards = ({ name, description, imageLink }) => {
  return (
    <div className="review w-11/12 h-auto mx-auto border-[3px] border-red-500 rounded-lg bor shadow-md p-4">
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-2">
        <img
          src={imageLink}
          alt={`${name}`}
          className="w-full h-full object-cover "
        />
      </div>
      <h2 className="text-3xl font-bold text-center text-red-500">{name}</h2>
      <p className="text-lg text-center mt-1 text-white">&ldquo;{description}&rdquo;</p>
    </div>
  );
};

export default ReviewCards;