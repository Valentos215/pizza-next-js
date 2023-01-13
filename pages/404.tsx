import { useRouter } from "next/router";
import { useEffect } from "react";

import MainContainer from "components/MainContainer";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <MainContainer>
      <h2 style={{ position: "absolute", marginTop: 120, width: "100%" }}>
        Something went wrong
      </h2>
    </MainContainer>
  );
}
