"use client";

import React, { useState, useCallback } from "react";
import FadeIn from "./ui/FadeIn";
import Offices from "./ui/Offices";
import Border from "./ui/Border";
import Link from "next/link";
import SocialMedia from "./ui/SocialMedia";
import PointForm from "./ui/PointForm";

const ContactPage: React.FC = () => {
  return (
    <div>
      <FadeIn>
        <section className="contact-section mt-8 grid grid-cols-1 gap-8 md:grid-cols-2" >
          <div>
            <h2 className="font-display mt-5 text-base font-semibold uppercase text-neutral-300">Our office</h2>
            <p className="mt-6 text-base text-neutral-300">
              Prefer doing things in person? We don’t but we have to list our addresses here for legal reasons.
            </p>
            <Offices className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2" />

            <Border className="mt-12">
              {/* <h2 className="font-display text-base font-semibold text-neutral-300">Email us</h2> */}
              <dl className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                {[
                  ["Email", "info@vjcoverseas.com"],
                  ["Email", "vjcbangalore@gmail.com"],
                  
                ].map(([label, email]) => (
                  <div key={email}>
                    <dt className="font-semibold text-neutral-300">{label}</dt>
                    <dd>
                      <Link href={`mailto:${email}`} className="text-neutral-300 hover:text-neutral-100">
                        {email}
                      </Link>
                    </dd>
                  </div>
                ))}
              </dl>
            </Border>

            <Border className="mt-12">
              <h2 className="font-display text-base font-semibold text-neutral-300">Follow us</h2>
              <SocialMedia className="mt-4 mb-6 gap-3" />
            </Border>
          </div>
          <div id="contact" className="scroll-mt-14 md:scroll-m-12 sm:scroll-mt-24">
            <PointForm />
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default ContactPage;
