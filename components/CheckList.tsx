import React from 'react';
import { FaPassport, FaClipboardCheck, FaFileContract, FaLanguage, FaDollarSign, FaUserTie, FaHeart, FaHome, FaEnvelope, FaIdCard } from 'react-icons/fa'; // Importing relevant icons
import FadeRight from './ui/FadeRight';

const CheckList: React.FC = () => {
  return (
    <FadeRight>
    <div className="flex flex-col items-center  bg-black text-white py-32">
      <h1 className="heading text-3xl font-bold text-center uppercase">
        Document Checklist for the
        <br />
        <span className="text-gradient">Germany Opportunity Card</span>
      </h1>

      <ul className="mt-16 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-lg"> {/* Adjusted grid-cols and gap */}
        {/* Checklist Items */}
        <li className="flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaPassport />
          </div>
          <span>Valid Passport</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaClipboardCheck />
          </div>
          <span>Proof of Qualifications</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-red-900 to-yellow-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaFileContract />
          </div>
          <span>Proof of Work Experience</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-violet-900 to-indigo-500 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaLanguage />
          </div>
          <span>Language Proficiency Certificate</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-pink-900 to-orange-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaDollarSign />
          </div>
          <span>Financial Proof</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r  from-violet-900 to-indigo-500 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaUserTie />
          </div>
          <span>Curriculum Vitae (CV)</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaHeart />
          </div>
          <span>Health Insurance</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaHome />
          </div>
          <span>Proof of Accommodation</span>
        </li>
        <li className="flex items-center space-x-2 bg-gradient-to-r from-red-900 to-yellow-900 p-4 rounded-lg">
          <div className="text-6xl text-white">
            <FaEnvelope />
          </div>
          <span>Motivation Letter</span>
        </li>
       
      </ul>

    </div>
    </FadeRight>
  );
};

export default CheckList;
