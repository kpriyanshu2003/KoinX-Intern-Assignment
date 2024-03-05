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
    <div>
      <div>
        <Image src={image} alt={name} width={100} height={100} />
        <span>{name}</span>
        <span>{designation}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default TeamMember;
