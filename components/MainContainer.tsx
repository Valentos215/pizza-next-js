import Head from "next/head";
import Header from "components/header/Header";
import icon from "public/favicon.ico";

const MainContainer = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Pizzeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon.src} />
      </Head>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
