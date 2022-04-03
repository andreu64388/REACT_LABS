import { FC, useState } from "react";
import { IMGS_SLIDER } from "../assets/assets";
const Home: FC = () => {
  const [slider, setSlider] = useState(0);
  if (slider > 3) {
    setSlider(0);
  }
  if (slider < 0) {
    setSlider(3);
  }
  return (
    <div className="main">
      <div className="slider">
        <div className="osnova_slider">
          <button
            onClick={() => setSlider((slider) => slider + 1)}
            className="btn right"
          >
            {">"}
          </button>
          <button
            onClick={() => setSlider((slider) => slider - 1)}
            className="btn left"
          >
            {"<"}
          </button>
          <img src={IMGS_SLIDER[slider]} />
        </div>
      </div>

      <div className="text-info">
        <div className="wrapper">
          <h1>Osnova Information</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            consequuntur velit ipsa deleniti. Dolorum corporis id recusandae
            commodi voluptatem ullam, mollitia odit aut totam in, corrupti error
            ducimus ipsa deleniti! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Facilis laboriosam facere perferendis nulla
            dolores. Beatae nobis, maiores incidunt tempore reprehenderit itaque
            consequatur laborum, dicta fugit voluptas, ea officiis totam
            placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eum velit at voluptatum consectetur adipisci dolorum rem aliquam,
            tempore, sequi nisi quod ipsa itaque facilis ratione voluptates
            repellendus libero cum aspernatur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio maxime placeat magnam dolor
            consectetur tenetur, reprehenderit incidunt eveniet accusantium
            libero, ut quia aliquam delectus est minima, atque odit. Saepe,
            odit! Rem fuga, saepe ea debitis culpa delectus veniam quis, vel,
            quod quisquam amet error quas modi asperiores accusantium voluptas.
            Voluptate nobis nemo officia delectus iste deleniti, hic dicta natus
            amet. Iure sint aspernatur quas repudiandae, earum pariatur beatae
            sapiente non numquam itaque quae officiis culpa eos provident ullam
            inventore at molestiae fugit! Cumque facilis obcaecati aspernatur,
            voluptatum omnis eius consectetur. Ab reprehenderit natus officiis!
            Earum ipsa et dignissimos molestiae voluptatibus nemo minima officia
            impedit magni officiis veniam quidem est ad velit inventore magnam
            at, nobis, commodi quas! Magnam, illo excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
