import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import axios from "axios";

import Filter from "shared/components/filter/Filter";
import Sort from "shared/components/sort/Sort";
import PizzaItem from "shared/components/productItem/PizzaItem";
import useLocalStorage from "shared/hooks/useLocalStorage";
import Show from "shared/components/show/Show";
import { ExpandContext } from "contexts/expandContext";
import {
  getFilteredIngredients,
  IPizza,
  pizzasToShow,
} from "utils/pizza.utils";
import { EApiPath, NAV_MENU, PIZZA_SORT_CRITERIA } from "constants/index";

import s from "styles/index.module.scss";

type THomeProps = { pizzas: IPizza[]; isLoading: boolean };

export default function Home({ pizzas }: THomeProps) {
  const [filter, setFilter] = useState<string[] | null>(null);
  const [memInvert, setMemInvert] = useLocalStorage("invert");
  const [invert, setInvert] = useState(Number(memInvert) || 0);
  const [memSort, setMemSort] = useLocalStorage("sort");
  const [sort, setSort] = useState<number>(Number(memSort) || 0);
  const [expanded] = useContext(ExpandContext);

  const itemsList = pizzasToShow({ pizzas, filter, sort, invert });

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  useEffect(() => {
    setMemSort(String(sort));
  }, [sort, setMemSort]);

  useEffect(() => {
    setMemInvert(String(Number(invert) * 1));
  }, [invert, setMemInvert]);

  const keywords = pizzas.map((pizza) => pizza.title).join(", ");

  return (
    <>
      <Head>
        <title>{NAV_MENU[0].title}</title>
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={scrollClassNames}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.filters}>
              <Filter
                specification={getFilteredIngredients(pizzas)}
                setFilter={setFilter}
                invert={invert}
              />
              <Sort sortCriteria={PIZZA_SORT_CRITERIA} setSort={setSort} />
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
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://63270a7aba4a9c47532f8ff3.mockapi.io/api/v1/" + EApiPath.Pizza
  );
  const pizzas = response.data;

  if (!pizzas) {
    return { notFound: true };
  }

  return {
    props: { pizzas },
  };
}
