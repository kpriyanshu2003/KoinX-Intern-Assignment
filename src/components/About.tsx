import {
  CardContainer,
  CardContent,
  CardImageContainer,
  CardSubHeading,
  CardTitle,
} from "@/ui/Card";
import { PageContainer } from "@/ui/PageContainer";
import React from "react";

function About() {
  return (
    <PageContainer>
      <CardContainer>
        <CardTitle>About BitCoin</CardTitle>
        <CardContainer>
          <CardSubHeading>What is BitCoin ?</CardSubHeading>
          <CardContent>
            Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
            volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
            currently -7.70% from its 7-day all-time high of $18,366.66, and
            3.40% from its 7-day all-time low of $16,394.75. BTC has a
            circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </CardContent>
        </CardContainer>
        <hr />
        <CardContainer>
          <CardSubHeading>Lorem ipsum dolor sit amet.</CardSubHeading>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            <br />
            <br />
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
            <br />
            <br />
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </CardContent>
        </CardContainer>
        <hr />
        <CardTitle>Already Holding a Bitcoin ?</CardTitle>
        <div className="md:flex gap-5">
          {/* background: linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%); */}
          <CardImageContainer
            buttonText="Check Now"
            buttonLink="/"
            text="Calculate Your Profits"
            image="/assets/investing.png"
            gradient="linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)"
          />
          {/* background: linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%); */}
          <CardImageContainer
            buttonText="Check Now"
            buttonLink="/"
            text="Calculate Your Profits"
            image="/assets/charts.png"
            gradient="linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)"
          />
        </div>
        <hr className="my-5" />
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex
          enim aspernatur recusandae consequuntur! Nesciunt, illo earum quisquam
          exercitationem dolorum accusamus fugit molestias reiciendis inventore
          consectetur voluptas facere error minima nam quidem dolore ipsum sit
          hic officia ab obcaecati non placeat! Nesciunt iusto cupiditate
          perferendis eos modi quae corporis consectetur.
        </CardContent>
      </CardContainer>
    </PageContainer>
  );
}

export default About;
