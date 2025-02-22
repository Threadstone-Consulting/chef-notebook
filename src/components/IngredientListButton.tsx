'use client';
import React, { useState } from 'react';

const GenerateText: React.FC = () => {
  const [showText, setShowText] = useState(false);

  const [ingredients, setIngredients] = useState(['eggs', 'milk', 'flour']);

  const handleGenerate = () => {
    setShowText(true);
  };

  return (
    <div className="flex flex-col gap-[20px] min-h-screen">
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
        <div>
          <p className="flex mt-4 text-lg text-gray-700">
            Ingredients: <br />
          </p>
          <div className="flex px-10">
            <ul className="list-decimal">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <p className="flex mt-4 text-lg text-gray-700">
            Instructions: <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default GenerateText;
