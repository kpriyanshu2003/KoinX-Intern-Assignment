import { CardContent, CardSubHeading, CardTitle } from "@/ui/Card";
import React from "react";
import { PieChartt } from "./PieChart";

function Tokenomics() {
  return (
    <div className="p-4 bg-white">
      <CardTitle>Tokenomics</CardTitle>
      <CardSubHeading>Initial Distribution</CardSubHeading>
      <PieChartt />
      <CardContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ad quas
        quos culpa optio nam iste, fuga libero voluptatem alias deleniti
        necessitatibus possimus mollitia at atque iure vel, deserunt nesciunt
        neque omnis. Iusto ut deleniti vitae eligendi doloribus possimus vero
        odit. Aliquid, ullam quod ratione deleniti labore, doloremque debitis
        maxime non cupiditate, eaque consequatur! Eius architecto perspiciatis
        perferendis et eum ullam dolorem reprehenderit hic repellat ex natus at
        in, omnis consequuntur quas. Accusamus aut reiciendis nemo mollitia nam
        possimus ipsum minus non dignissimos, ratione consectetur facere sunt
        fugiat, repellat, libero culpa dolor iusto illum eaque impedit a
        aliquam. Provident, ab!
      </CardContent>
    </div>
  );
}

export default Tokenomics;
