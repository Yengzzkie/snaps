import "./Hero.scss";

const Hero = () => {
  return (
    <section>
      <h4 className="hero__header">Our Mission:</h4>
      <p className="hero__content">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,{" "}
        <span className="hero__content-emphasized">
          expressed in their unique style.
        </span>
      </p>
    </section>
  );
};

export default Hero;
