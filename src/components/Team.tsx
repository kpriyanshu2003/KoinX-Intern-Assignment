import { teamData } from "@/constants/team-data";
import { CardContainer, CardContent, CardTitle } from "@/ui/Card";
import { PageContainer } from "@/ui/PageContainer";
import TeamMember from "@/ui/TeamMember";
import React from "react";

function Team() {
  return (
    <PageContainer>
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
        <CardContent>
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
        </CardContent>
      </CardContainer>
    </PageContainer>
  );
}

export default Team;
