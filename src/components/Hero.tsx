interface HeroProps {
  first: string;
  second: string;
}

function Hero({ first, second }: HeroProps) {
  return (
    <>
      <section className="flex justify-center h-52 bg-top bg-[url('../public/hero_bg.png')] bg-cover">
        <article className="w-[1080px] flex flex-col items-start justify-center px-5">
          <span className="text-[40px] text-white font-bold">{first}</span>
          <span className="text-[100px] text-white font-bold leading-[80px] ">
            {second}
          </span>
        </article>
      </section>
    </>
  );
}
export default Hero;
