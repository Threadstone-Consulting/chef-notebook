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
      < IngredientListButton/>
    </div>
    </section>
  );
};

export default Hero;
