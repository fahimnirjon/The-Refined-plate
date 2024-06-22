const Banner = () => {
  return (
    <div
      className=" container mx-auto  hero min-h-[80vh] bg-top mb-24  "
      style={{
        backgroundImage: "url(https://i.ibb.co/wJfYcqp/image.png)",
        borderRadius: "24px",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className=" text-center text-neutral-content lg:w-[70%] rounded-3xl p-3 ">
        <h2 className="lg:text-6xl text-5xl font-bold text-white">
          Discover an exceptional cooking class tailored for you!
        </h2>
        <p className="mt-6 mb-10">
          Step into Damn cock, your vibrant culinary haven, offering bespoke
          recipes and immersive cooking classes for a delicious journey to
          health and vitality.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-8 ">
          <button className=" border-none px-9 text-black  py-4 text-xl  font-semibold bg-green-400 rounded-full ">
            Explore Now
          </button>
          <button className=" px-9  py-4 text-xl font-semibold bg-transparent  border-2 text-white rounded-full">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
