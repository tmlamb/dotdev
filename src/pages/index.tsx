import type { NextPage } from "next";
import Head from "next/head";
import BoxWrapper from "../components/BoxWrapper";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dotdev</title>
        <meta name="description" content="Just testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center space-y-10 min-h-screen p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl leading-normal font-extrabold text-gray-700">
          <span className="text-blue-400">dotdev</span>
        </h1>
        <div className="h-full w-full">
          <BoxWrapper />
        </div>
      </main>
    </>
  );
};

export default Home;
