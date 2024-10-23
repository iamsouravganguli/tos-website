// TeamMemberCard.tsx
import React from 'react';

type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="min-w-[200px] max-w-[350px]">
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded-md"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="flex flex-col md:text-center ">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-5 text-sm text-gray-800">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
