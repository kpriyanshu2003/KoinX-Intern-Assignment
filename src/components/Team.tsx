import { teamData } from "@/constants/team-data";
import { CardContainer, CardContent, CardTitle } from "@/ui/Card";
import TeamMember from "@/ui/TeamMember";
import React from "react";

function Team() {
  return (
    <div className="p-4 bg-white">
      <CardContainer>
        <CardTitle>Team</CardTitle>
        <CardContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          eos excepturi soluta beatae eveniet quas voluptas corrupti fuga
          laudantium commodi. Nesciunt obcaecati numquam, illo aspernatur
          aperiam perspiciatis eius veniam, error consectetur ut commodi.
          Veniam, soluta enim, neque quod omnis exercitationem magnam veritatis
          nulla, iste eos sint aperiam! Qui, enim maxime.
        </CardContent>
        <CardContainer>
          {teamData.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image={member.image}
              designation={member.designation}
            >
              {member.description}
            </TeamMember>
          ))}
        </CardContainer>
      </CardContainer>
    </div>
  );
}

export default Team;
