"use client";
import React, { useState } from 'react';
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import IngredientListButton from "@/components/IngredientListButton"


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-8 py-8 lg:py-16">


      <div className="flex flex-col gap-10 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start">
      <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
      Chef's Notebook
      </h1>
      <p className="text-lg opacity-80 leading-relaxed">
        The app that saves your recipes and transcribes your instagram reels
      </p>
      {/* how to get rid of massive gap between text above and search bar? */}
      < IngredientListButton/>
      {/* <div className="flex justify-center"></div>
      <div className="join">
  <input className="input input-bordered join-item w-[600px]" placeholder="Enter Recipe URL" />
  <button className="btn join-item rounded-r-full bg-blue-500 text-white hover:bg-blue-600">Generate</button>
  </div> */}
      {/* <button className="btn btn-primary btn-wide">
        Get Chef's Notebook
      </button> */}
      {/* <TestimonialsAvatars priority={true} /> */}
      
  </div>
      {/* <div className="lg:w-full">
      <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Product Demo"
        className="w-full"
        priority={true}
        width={500}
        height={500}
      />
      </div> */}
     
    </section>
  );
};

export default Hero;
