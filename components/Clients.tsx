"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import FadeIn from "./ui/FadeIn";

const Clients = () => {
  return (
    <section id="testimonials" className="py-24">
      <FadeIn>
      <h1 className="heading uppercase">
        Job Opportunities and Salaries with the <br/>
        <span className="text-gradient"> Germany Opportunity Card</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      </FadeIn>
    </section>
  );
};

export default Clients;
