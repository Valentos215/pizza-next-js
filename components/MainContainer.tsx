import Head from "next/head";
import Header from "components/header/Header";
import { FC, ReactNode } from "react";

type TMainContainerProps = { children: ReactNode };

const MainContainer: FC<TMainContainerProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Pizzeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
