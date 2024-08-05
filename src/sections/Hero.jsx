import Button from "../ui/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { shoes, statistics } from "../constants/index";
import bigShoe1 from "../assets/images/big-shoe1.png";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex  xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> shoes
        </h1>
        <p className="font-palanquin text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Discover Quality Shoes
        </p>
        <Button label="shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-ful mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index} className="">
              <p className="font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
      <div>
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard
              imgUrl={shoe}
              changeBigShoeImage={() => {}}
              bigSgoeImg=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
