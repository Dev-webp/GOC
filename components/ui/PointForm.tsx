"use client";

import React, { useState, useCallback } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

type FormData = {
  workExperience: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  qualification: string;
  maritalStatus: string;
  age: string; // New field for Age
  englishProficiency: string; // New field for English Proficiency
  message: string;
};

// Updated Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfwDN-_PIXgKl77MxbMLuG51cMJmg-4GJm29wAurxdaOEd0wg/formResponse";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    maritalStatus: "",
    age: "", // Initialize Age
    englishProficiency: "", // Initialize English Proficiency
    workExperience: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const formBody = new URLSearchParams({
        "entry.1642545115": encodeURIComponent(formData.name),
        "entry.1236892299": encodeURIComponent(formData.email),
        "entry.1431943453": encodeURIComponent(formData.phone),
        "entry.988033036": encodeURIComponent(formData.city),
        "entry.1036873680": encodeURIComponent(formData.qualification),
        "entry.981719167": encodeURIComponent(formData.maritalStatus),
        "entry.408899124": encodeURIComponent(formData.age), // New entry for Age
        "entry.1914497726": encodeURIComponent(formData.englishProficiency), // New entry for English Proficiency
        "entry.1377078637": encodeURIComponent(formData.workExperience),
        "entry.1905941527": encodeURIComponent(formData.message),
      });

      try {
        const response = await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          qualification: "",
          maritalStatus: "",
          age: "", // Reset Age
          englishProficiency: "", // Reset English Proficiency
          workExperience: "",
          message: "",
        });
        setIsSubmitted(true);
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitted(false);
      }
    },
    [formData]
  );

  return (
    <form
      className="isolate mt-4 space-y-8 rounded-2xl bg-white p-6 max-w-[50rem] mb-24 ml-6"
      onSubmit={handleSubmit}
    >
      {/* First Row: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            pattern="[0-9\s\-\(\)]*"
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

      {/* Third Row: Qualification, Marital Status, Age, and English Proficiency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-r border-neutral-400 pr-0 sm:pr-4">
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
            required
          >
            <option value="">Education</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        <div>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
            required
          >
            <option value="">Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
      </div>

      {/* New fields for Age and English Proficiency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-r border-neutral-400 pr-0 sm:pr-4">
        <TextInput
          label="Age"
          name="age"
          type="number" // Optional: Change to 'number' type for better UX
          value={formData.age}
          onChange={handleChange}
          className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
          required
        />
        </div>
        
          <select
            name="englishProficiency"
            value={formData.englishProficiency}
            onChange={handleChange}
            className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
            required
          >
            <option value="">English Proficiency</option>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        
      </div>


      {/* 4th Row: Message */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-r border-neutral-400 pr-4">
           <select
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 pt-6 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
            required
          >
            <option value="">Work Experience</option>
            <option value="none">None</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-5 years">2-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
          
        </div>

        <TextInput
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
          required
        />
      </div>

      <Button type="submit" className="mt-4 ml-52 w-50 mx-auto uppercase">Check now</Button>

      {isSubmitted && <p className="mt-4 text-gradient">Form successfully submitted</p>}
    </form>
  );
};

export default ContactForm;
