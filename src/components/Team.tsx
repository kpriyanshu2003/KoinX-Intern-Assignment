import { CardContainer, CardContent, CardTitle } from "@/ui/Card";
import TeamMember from "@/ui/TeamMember";
import React from "react";

function Team() {
  return (
    <div>
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
          <TeamMember name="John Smith" image="/vercel.svg" designation="SDE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            laudantium architecto accusantium error vero vitae incidunt commodi
            cupiditate animi non possimus facere id unde tempora nostrum modi
            ipsum ab eos maiores, iure amet? Eius magni iusto quidem veritatis,
            aliquid consectetur. Dignissimos ea molestias voluptate quidem,
            molestiae asperiores ipsa! Ullam, id.
          </TeamMember>
          <TeamMember name="John Smith" image="/vercel.svg" designation="SDE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            laudantium architecto accusantium error vero vitae incidunt commodi
            cupiditate animi non possimus facere id unde tempora nostrum modi
            ipsum ab eos maiores, iure amet? Eius magni iusto quidem veritatis,
            aliquid consectetur. Dignissimos ea molestias voluptate quidem,
            molestiae asperiores ipsa! Ullam, id.
          </TeamMember>
          <TeamMember name="John Smith" image="/vercel.svg" designation="SDE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            laudantium architecto accusantium error vero vitae incidunt commodi
            cupiditate animi non possimus facere id unde tempora nostrum modi
            ipsum ab eos maiores, iure amet? Eius magni iusto quidem veritatis,
            aliquid consectetur. Dignissimos ea molestias voluptate quidem,
            molestiae asperiores ipsa! Ullam, id.
          </TeamMember>
          <TeamMember name="John Smith" image="/vercel.svg" designation="SDE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            laudantium architecto accusantium error vero vitae incidunt commodi
            cupiditate animi non possimus facere id unde tempora nostrum modi
            ipsum ab eos maiores, iure amet? Eius magni iusto quidem veritatis,
            aliquid consectetur. Dignissimos ea molestias voluptate quidem,
            molestiae asperiores ipsa! Ullam, id.
          </TeamMember>
        </CardContainer>
      </CardContainer>
    </div>
  );
}

export default Team;
