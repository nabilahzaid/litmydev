import React from "react";
import MainLayout from "../../layouts/mainLayout";
import { IMAGES } from "../../assets";

type Props = {};

function Home(_props: Props) {
  return (
    <MainLayout>
      <div className="z-0 w-full relative min-h-screen">
        <img src={IMAGES.litmyBanner} alt="" className="w-full" />
        <header className="font-poppins text-center text-primary-800 font-black text-5xl">
          Tech Sisters, Unite!
        </header>
        <section className="flex flex-col text-center py-20 px-56 text-xl gap-y-10 font-manrope">
          <p>
            Ladies in Tech Malaysia (LIT MY) is a dynamic community aimed at
            empowering and connecting women in the technology sector, whether
            they are industry professionals or tech enthusiasts. Our mission is
            to bridge the gender gap in tech, offering a supportive network for
            learning, growth, and leadership.{" "}
          </p>
          <p>
            We organize a variety of events including workshops, mentorship
            programs, and speaker sessions with industry experts to facilitate
            skill development and knowledge sharing. LIT MY is not just about
            professional growth; it's a platform that celebrates diversity,
            fosters collaboration, and nurtures the unique perspectives women
            bring to technology.{" "}
          </p>
          <p>
            Join us to explore and thrive in the ever-evolving tech world, as
            part of a community that champions women's success and innovation in
            technology.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}

export default Home;
