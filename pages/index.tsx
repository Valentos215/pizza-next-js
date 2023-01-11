import { useState, useEffect, useContext } from "react";
import axios from "axios";

import MainContainer from "components/MainContainer";
import Filter from "shared/components/filter/Filter";
import Sort from "shared/components/sort/Sort";
import PizzaItem from "shared/components/productItem/PizzaItem";
import useLocalStorage from "shared/hooks/useLocalStorage";
import Show from "shared/components/show/Show";
import PizzaSkeleton from "shared/components/productItem/PizzaSkeleton";
import { ExpandContext } from "contexts/expandContext";
import {
  getFilteredIngredients,
  IPizza,
  pizzasToShow,
} from "utils/pizza.utils";

import s from "styles/index.module.scss";
import { useRouter } from "next/router";
import { range } from "utils/utils";

export default function Home({ pizzas }: { pizzas: IPizza[] }) {
  const [filter, setFilter] = useState<string[] | null>(null);
  const [memInvert, setMemInvert] = useLocalStorage("invert");
  const [invert, setInvert] = useState(Number(memInvert) || 0);
  const [memSort, setMemSort] = useLocalStorage("sort");
  const [sort, setSort] = useState<number>(Number(memSort) || 0);
  const [expanded] = useContext(ExpandContext);
  const [isLoading, setIsLoading] = useState(false);

  const sortCriteria = ["Popularity", "Price low-high", "Price high-low"];

  const itemsList = pizzasToShow({ pizzas, filter, sort, invert });

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  useEffect(() => {
    setMemSort(String(sort));
  }, [sort, setMemSort]);

  useEffect(() => {
    setMemInvert(String(Number(invert) * 1));
  }, [invert, setMemInvert]);

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
    <MainContainer>
      <div className={scrollClassNames}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.filters}>
              <Filter
                specification={getFilteredIngredients(pizzas)}
                setFilter={setFilter}
                invert={invert}
              />
              <Sort sortCriteria={sortCriteria} setSort={setSort} />
            </div>
            <Show condition={!!filter}>
              <div className={s.title}>
                Pizzas {!!invert ? "without" : "contains"}{" "}
                {filter && filter.join(", ")}{" "}
                <span
                  onClick={() => setInvert(Math.abs(invert - 1))}
                  className={s.invert}
                >
                  Invert
                </span>
              </div>
            </Show>
            <div className={s.pizzaItems}>
              <Show condition={isLoading}>
                {range(8).map((i) => (
                  <PizzaSkeleton key={i} />
                ))}
              </Show>
              <Show condition={!!itemsList}>
                {!!itemsList &&
                  itemsList.map((pizza: IPizza) => (
                    <PizzaItem key={pizza.id} pizza={pizza} />
                  ))}
              </Show>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getStaticProps() {
  const response = await axios.get(process.env.REACT_APP_BASE_URL + "pizza");
  const pizzas = response.data;

  return {
    props: { pizzas },
  };
}
