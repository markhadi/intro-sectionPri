import audiophiles from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

const Hero = () => {
  return (
    <main>
      <picture>
        <source media="(min-width:944px )" srcSet={heroDesktop} />
        <img src={heroMobile} alt="" />
      </picture>

      <section>
        <div>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <span>
            <img src={databiz} alt="" />
            <img src={audiophiles} alt="" />
            <img src={meet} alt="" />
            <img src={maker} alt="" />
          </span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
