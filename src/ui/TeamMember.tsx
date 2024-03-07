import { TeamMemberProps } from "@/@types/TeamMember";
import Image from "next/image";
import React from "react";

function TeamMember({
  name,
  designation,
  image,
  children,
}: Readonly<{ children: React.ReactNode }> & TeamMemberProps) {
  return (
    <div className="bg-[#E8F4FD] p-6 rounded-lg my-8 md:flex items-center">
      <div className="md:w-[400px] grid place-items-center text-center">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-lg md:w-[80%]"
        />
        <div className="flex flex-col my-2">
          <span>{name}</span>
          <span className="text-[#788F9B] text-sm">{designation}</span>
        </div>
      </div>
      <div className="md:ml-3 md:text-lg">{children}</div>
    </div>
  );
}

export default TeamMember;
