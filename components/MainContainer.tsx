import Head from "next/head";
import Header from "components/header/Header";

const MainContainer = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Pizzeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
