import {
  CardContainer,
  CardContent,
  CardImageContainer,
  CardSubHeading,
  CardTitle,
} from "@/ui/Card";
import React from "react";

function About() {
  return (
    <div>
      <CardContainer>
        <CardTitle>About BitCoin</CardTitle>
        <CardContainer>
          <CardSubHeading>What is BitCoin ?</CardSubHeading>
          <CardContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            laboriosam deserunt obcaecati, voluptatum commodi alias consectetur
            delectus ipsum enim molestias numquam necessitatibus ab voluptatibus
            nemo eum architecto explicabo tenetur eligendi distinctio? Sunt fuga
            voluptatum ratione minus sed, iusto perferendis consequuntur quam
            veritatis perspiciatis laudantium magnam! Facere, molestias odit.
            Aliquam, quae?
          </CardContent>
        </CardContainer>
        <hr />
        <CardContainer>
          <CardSubHeading>Lorem ipsum dolor sit amet.</CardSubHeading>
          <CardContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            iusto quas illo architecto tempore autem libero unde nemo magni vel!
            Dignissimos at voluptatibus laboriosam accusantium sed perferendis
            suscipit doloribus dolor, vel, iure beatae officia. Iure vero iusto
            doloremque quam. Modi iure quod excepturi explicabo minima
            perspiciatis voluptas tempore hic nam! Assumenda necessitatibus
            consequatur aspernatur molestiae sapiente nostrum aliquam, tempora
            qui quaerat, commodi at voluptas autem velit soluta odit dolorem
            illum, ducimus dolore voluptatum debitis voluptatibus. Saepe beatae
            corrupti impedit, eos nesciunt id rem iusto suscipit velit quo
            temporibus maiores nulla quibusdam enim quam ea harum totam. <br />
            <br />
            Minima sapiente laborum tempore totam voluptatibus consequatur nihil
            quo optio beatae at doloribus temporibus officia cum, cumque qui
            nisi reiciendis aliquid, architecto animi modi pariatur vel
            consectetur corrupti? Incidunt doloribus officiis adipisci, ipsum
            accusantium voluptatibus neque repellat, mollitia nobis beatae
            molestiae amet quidem omnis! <br />
            <br /> Libero, sint facilis. Quos, voluptatem consequatur ipsum
            perspiciatis voluptatibus hic nemo rem nisi facere mollitia eveniet,
            eum, quis veniam magni commodi aliquam facilis! Illo sequi nobis
            quaerat vel aperiam corrupti saepe, nulla laborum fuga, nesciunt
            corporis unde, ullam laudantium sit rerum enim natus obcaecati
            dolorem cumque eaque? Necessitatibus vitae beatae iusto recusandae
            consectetur, aperiam, quod voluptas atque rem, itaque ullam.
          </CardContent>
        </CardContainer>
        <hr />
        <CardTitle>Already Holding a Bitcoin ?</CardTitle>
        <div className="flex gap-5 border">
          <CardImageContainer
            buttonText="Check Now"
            buttonLink="/"
            text="Calculate Your Profits"
            image="/vercel.svg"
          />
          <CardImageContainer
            buttonText="Check Now"
            buttonLink="/"
            text="Calculate Your Profits"
            image="/vercel.svg"
          />
        </div>
        <hr />
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex
          enim aspernatur recusandae consequuntur! Nesciunt, illo earum quisquam
          exercitationem dolorum accusamus fugit molestias reiciendis inventore
          consectetur voluptas facere error minima nam quidem dolore ipsum sit
          hic officia ab obcaecati non placeat! Nesciunt iusto cupiditate
          perferendis eos modi quae corporis consectetur.
        </CardContent>
      </CardContainer>
    </div>
  );
}

export default About;
