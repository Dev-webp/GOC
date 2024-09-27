import React from 'react';
import { FaPassport, FaClipboardCheck, FaFileContract, FaLanguage, FaDollarSign, FaUserTie, FaHeart, FaHome, FaEnvelope } from 'react-icons/fa';
import FadeLeftList from './ui/FadeLeftList'; // Import the new fade effect
import FadeIn from './ui/FadeIn';

const CheckList: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white py-32">
      <FadeIn>
      <h1 className="heading text-3xl font-bold text-center uppercase">
        Document Checklist for the
        <br />
        <span className="text-gradient">Germany Opportunity Card</span>
      </h1>
      </FadeIn>
      <FadeLeftList>
        <ul className="mt-16 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-lg">
          <li id="passport" className="flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaPassport />
            </div>
            <span>Valid Passport</span>
          </li>
          <li id="qualifications" className="flex items-center space-x-2 bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaClipboardCheck />
            </div>
            <span>Proof of Qualifications</span>
          </li>
          <li id="experience" className="flex items-center space-x-2 bg-gradient-to-r from-red-900 to-yellow-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaFileContract />
            </div>
            <span>Proof of Work Experience</span>
          </li>
          <li id="language" className="flex items-center space-x-2 bg-gradient-to-r from-violet-900 to-indigo-500 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaLanguage />
            </div>
            <span>Language Proficiency Certificate</span>
          </li>
          <li id="financial-proof" className="flex items-center space-x-2 bg-gradient-to-r from-pink-900 to-orange-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaDollarSign />
            </div>
            <span>Financial Proof</span>
          </li>
          <li id="cv" className="flex items-center space-x-2 bg-gradient-to-r from-violet-900 to-indigo-500 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaUserTie />
            </div>
            <span>Curriculum Vitae (CV)</span>
          </li>
          <li id="insurance" className="flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaHeart />
            </div>
            <span>Health Insurance</span>
          </li>
          <li id="accommodation" className="flex items-center space-x-2 bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaHome />
            </div>
            <span>Proof of Accommodation</span>
          </li>
          <li id="motivation-letter" className="flex items-center space-x-2 bg-gradient-to-r from-red-900 to-yellow-900 p-4 rounded-lg">
            <div className="text-6xl text-white">
              <FaEnvelope />
            </div>
            <span>Motivation Letter</span>
          </li>
        </ul>
      </FadeLeftList>
    </div>
  );
};

export default CheckList;
