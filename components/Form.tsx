"use client";

import React, { useState, useCallback } from "react";
import FadeIn from "./ui/FadeIn";
import Offices from "./ui/Offices";
import Border from "./ui/Border";
import Link from "next/link";
import SocialMedia from "./ui/SocialMedia";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  city: string;
  qualification: string;
  service: string;
};

const ContactPage: React.FC = () => {
  // State to store form input values
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    qualification: "",
    service: "",
  });

  // State to manage the submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes and update state
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch("https://formspree.io/f/mzzpqgrw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log("Form Data Submitted:", formData);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            city: "",
            qualification: "",
            service: "",
          });
          setIsSubmitted(true); // Set the submission status to true
        } else {
          console.error("Form submission error:", response.statusText);
          setIsSubmitted(false); // Ensure the status is false if there's an error
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitted(false); // Ensure the status is false if there's an exception
      }
    },
    [formData]
  );

  return (
    <div>
      <FadeIn>
        <section className="contact-section mt-8 grid grid-cols-1 gap-8 md:grid-cols-2" id="contact">
          <div>
            <section>
              <h2 className="font-display text-base font-semibold uppercase text-neutral-300">Our office</h2>
              <p className="mt-6 text-base text-neutral-400">
                Prefer doing things in person? We don’t but we have to list our addresses here for legal reasons.
              </p>
              <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
            </section>

            <Border className="mt-8">
              <h2 className="font-display text-base font-semibold text-neutral-300">Email us</h2>
              <dl className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                {[
                  ["Email", "vjcbangalore@gmail.com"],
                  ["Press", "vjcoverseas@gmail.com"],
                ].map(([label, email]) => (
                  <div key={email}>
                    <dt className="font-semibold text-neutral-300">{label}</dt>
                    <dd>
                      <Link
                        href={`mailto:${email}`}
                        className="text-neutral-600 hover:text-neutral-300"
                      >
                        {email}
                      </Link>
                    </dd>
                  </div>
                ))}
              </dl>
            </Border>

            <Border className="mt-4">
              <h2 className="font-display text-base font-semibold text-neutral-300">Follow us</h2>
              <SocialMedia className="mt-4 mb-6 gap-3" />
            </Border>
          </div>
          <div>
            <FadeIn>
              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-neutral-300">Work inquiries</h2>
                <form
                  className="isolate mt-4 space-y-4 rounded-2xl bg-white p-6 max-w-[50rem]" // Form width updated
                  onSubmit={handleSubmit}
                >
                  {/* First Row: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div className="border-r border-neutral-400 pr-4">
                    <TextInput
                      label="Name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
                      required
                    />
                    </div>
                    <TextInput
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
                      required
                    />
                  </div>


                  {/* Second Row: Phone and City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="border-r border-neutral-400 pr-4">
                    <TextInput
                      label="Phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9\s\-\(\)]*" // Allows numbers, spaces, hyphens, and parentheses
                      inputMode="numeric"
                      className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
                      required
                      maxLength={10}
                      minLength={10}
                    />
                    
                      </div>
                    <TextInput
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
                      required
                    />
                    
                  </div>


                  {/* Third Row: Qualification and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-r border-neutral-400 pr-4"> {/* Added border-right */}
                      <label className="block text-sm font-medium text-neutral-600">Education</label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
                        required
                      >
                        <option value="">Select your qualification</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="bachelors">Bachelors Degree</option>
                        <option value="masters">Masters</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-600">Services</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="PR">PR Visa</option>
                        <option value="student">Student Visa</option>
                        <option value="jobSeeker">Job Seeker Visa</option>
                      </select>
                    </div>
                  </div>

                  {/* Fourth Row: Message */}
                  <TextInput
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
                    required
                  />
                  <Button type="submit" className="mt-4">Let’s work together</Button>
                </form>
                {isSubmitted && (
                  <p className="mt-4 text-gradient">Form successfully submitted</p>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default ContactPage;
