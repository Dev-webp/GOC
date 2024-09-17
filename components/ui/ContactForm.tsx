// "use client";

// import React, { useState, useCallback } from "react";
// import TextInput from "./TextInput";
// import Button from "./Button";

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   city: string;
//   qualification: string;
//   service: string;
// };

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     city: "",
//     qualification: "",
//     service: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//       setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     },
//     []
//   );

//   const handleSubmit = useCallback(
//     async (e: React.FormEvent) => {
//       e.preventDefault();
//       try {
//         const response = await fetch("https://formspree.io/f/mzzpqgrw", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
//         if (response.ok) {
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             message: "",
//             city: "",
//             qualification: "",
//             service: "",
//           });
//           setIsSubmitted(true);
//         } else {
//           console.error("Form submission error:", response.statusText);
//           setIsSubmitted(false);
//         }
//       } catch (error) {
//         console.error("Form submission error:", error);
//         setIsSubmitted(false);
//       }
//     },
//     [formData]
//   );

//   return (
//     <form
//         className="isolate mt-4 space-y-4 rounded-2xl bg-white p-6 mx-auto max-w-[70rem] min-h-[500px] flex flex-col justify-between" // Centered form with flex layout and height adjustment
//         onSubmit={handleSubmit}
//         >
//         {/* First Row: Name and Email */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
//             <div className="border-r border-neutral-400 pr-4 h-full">
//             <TextInput
//                 label="Name"
//                 name="name"
//                 autoComplete="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
//                 required
//             />
//             </div>
//             <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
//             required
//             />
//         </div>

//         {/* Second Row: Phone and City */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
//             <div className="border-r border-neutral-400 pr-4 h-full">
//             <TextInput
//                 label="Phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 pattern="[0-9\s\-\(\)]*"
//                 inputMode="numeric"
//                 className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
//                 required
//                 maxLength={10}
//                 minLength={10}
//             />
//             </div>
//             <TextInput
//             label="City"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
//             required
//             />
//         </div>

//         {/* Third Row: Qualification and Service */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
//             <div className="border-r border-neutral-400 pr-4 h-full">
//             <label className="block text-sm font-medium text-neutral-600">Select Qualification</label>
//             <select
//                 name="qualification"
//                 value={formData.qualification}
//                 onChange={handleChange}
//                 className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
//                 required
//             >
//                 <option value="">Select your qualification</option>
//                 <option value="10th">10th</option>
//                 <option value="12th">12th</option>
//                 <option value="bachelors">Bachelors Degree</option>
//                 <option value="masters">Masters</option>
//                 <option value="phd">PhD</option>
//             </select>
//             </div>
//             <div className="h-full">
//             <label className="block text-sm font-medium text-neutral-600">Select Service</label>
//             <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="block w-full border-b border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-0"
//                 required
//             >
//                 <option value="">Select a service</option>
//                 <option value="PR">PR Visa</option>
//                 <option value="student">Student Visa</option>
//                 <option value="jobSeeker">Job Seeker Visa</option>
//             </select>
//             </div>
//         </div>

//         {/* Fourth Row: Message */}
//         <TextInput
//             label="Message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0 h-full"
//             required
//         />

//         <Button 
//         type="submit" 
//         className="mt-4 w-50 mx-auto" // Smaller width and centered
//         >
//         Let’s work together
//         </Button>

//         {isSubmitted && <p className="mt-4 text-gradient">Form successfully submitted</p>}
//         </form>

//   );
// };

// export default ContactForm;
"use client";

import React, { useState, useCallback } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  city: string;
  qualification: string;
  service: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    qualification: "",
    service: "",
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
      try {
        const response = await fetch("https://formspree.io/f/mzzpqgrw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            city: "",
            qualification: "",
            service: "",
          });
          setIsSubmitted(true);
        } else {
          console.error("Form submission error:", response.statusText);
          setIsSubmitted(false);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitted(false);
      }
    },
    [formData]
  );

  return (
    <form
      className="isolate mt-4 space-y-4 rounded-2xl bg-white p-6 max-w-[50rem] mb-24 ml-6"
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
        <div className="border-r border-neutral-400 pr-4">
          <label className="block text-sm font-medium text-neutral-600">Select Qualification</label>
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
          <label className="block text-sm font-medium text-neutral-600">Select Service</label>
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

      <Button type="submit" className="mt-4 ml-36 w-50 mx-auto">Let’s work together</Button>
      

      {isSubmitted && <p className="mt-4 text-gradient">Form successfully submitted</p>}
    </form>
  );
};

export default ContactForm;
