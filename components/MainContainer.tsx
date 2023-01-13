import Head from "next/head";
import Header from "components/header/Header";
import { FC, ReactNode, useEffect, useState } from "react";
import Show from "shared/components/show/Show";
import Preloader from "shared/components/preloader/Preloader";
import { useRouter } from "next/router";

type TMainContainerProps = { children: ReactNode };

const MainContainer: FC<TMainContainerProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setIsLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      <Head>
        <meta name="description" content="Pizzeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Show condition={isLoading}>
        <div style={{ position: "absolute", marginTop: 120, width: "100%" }}>
          <Preloader></Preloader>
        </div>
      </Show>
      <Show condition={!isLoading}>
        <div>{children}</div>
      </Show>
    </>
  );
};

export default MainContainer;
