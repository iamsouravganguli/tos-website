import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUrl: string;
  email: string;
  linkedin: string;
  review: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl, email, linkedin, review }) => {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex w-[556px]">
      {/* Image Section */}
      <div className='w-56' >
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={imageUrl}
          alt={name}
        />
      </div>
      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h3>
        <span className="text-gray-500 text-sm">{role}</span>
        <p className="mt-3 mb-4 font-light text-black">
          {review}
        </p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <Link href={`mailto:${email}`} className="text-gray-500 hover:text-gray-900 ">
              <FaEnvelope className="w-5 h-5" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
              <FaLinkedin className="w-5 h-5" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamMemberCard;
