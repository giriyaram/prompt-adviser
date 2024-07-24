import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='heading-texts z-10 text-center mt-5 text-5xl font-extrabold leading-[1.15] sm:text-6xl'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className="desc_gray text-center">
            Prompt Advicer is an open-source AI prompt tool for modern world to <span className="text-[#FAFAFA]">discover, create and share creative prompts</span>
        </p>

    <Feed />
  </section>
);

export default Home;
