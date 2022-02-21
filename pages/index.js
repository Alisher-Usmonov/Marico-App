import Head from "next/head";
import Agree from "../components/Agree/Agree";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Steps from "../components/Steps/Steps";

export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen overflow-x-hidden">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="container mx-auto h-full pt-2">
        <Header />
        <Featured />
        <Steps />
        <Agree />
        <Footer />
      </div>
    </div>
  )
}
