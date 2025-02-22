"use client";
import React, { useState } from 'react';

const GenerateText: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const handleGenerate = () => {
    setShowText(true);
  };

  return (
    <div className="flex flex-col gap-[20px] items-center justify-center min-h-screen">
      <div className="join">
        <input
          className="input input-bordered join-item w-[600px]"
          placeholder="Enter Recipe URL"
        />
        <button
          onClick={handleGenerate}
          className="btn join-item rounded-r-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Generate
        </button>
      </div>
      {showText && (
        <p className="mt-4 text-lg text-gray-700">
          Ingredients: <br/> 
          -Eggs <br/> {/* How to incease the space between each listed ingreadient and also how to style font? */}
          -Etc <br/>

        
        </p>
      )}
    </div>
  );
};

export default GenerateText;
