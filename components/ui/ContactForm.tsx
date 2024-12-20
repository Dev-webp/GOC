"use client";

import React, { useState, useCallback } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  qualification: string;
  maritalStatus: string;
  message: string;
};

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdXavQXlwKjP9dYvkYpHOg6-QLWHeI2J2tLNDhYYAsQpw7ofw/formResponse";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    maritalStatus: "",
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
        "entry.1510645988": encodeURIComponent(formData.name),           // Name field
        "entry.938203700": encodeURIComponent(formData.email),          // Email field
        "entry.1549808739": encodeURIComponent(formData.phone),         // Phone field
        "entry.1578212786": encodeURIComponent(formData.city),          // City field
        "entry.505635382": encodeURIComponent(formData.qualification),      // Service field
        "entry.17107752": encodeURIComponent(formData.maritalStatus),        // Branch field
        "entry.1610243820": encodeURIComponent(formData.message),        // Message field
      });

      try {
        const response = await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors", // Google Forms submission
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        });

        // Google Forms does not provide a reliable success response with "no-cors" mode
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          qualification: "",
          maritalStatus: "",
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

      {/* Third Row: Qualification and Service */}
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



      {/* 4th Row: Message */}
      <TextInput
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
        required
      />

      <Button type="submit" className="mt-4 ml-36 w-50 mx-auto">Let’s work together</Button>

      {isSubmitted && <p className="mt-4 text-gradient">Form successfully submitted</p>}
    </form>
  );
};

export default ContactForm;
