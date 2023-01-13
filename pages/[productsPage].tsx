import { useState, useContext } from "react";

import Filter from "shared/components/filter/Filter";
import Sort from "shared/components/sort/Sort";
import ProductItem from "shared/components/productItem/ProductItem";
import { ExpandContext } from "contexts/expandContext";
import {
  getFilteredCategories,
  IProduct,
  productsToShow,
} from "utils/products.utils";
import Show from "shared/components/show/Show";

import s from "styles/products.module.scss";
import axios from "axios";
import MainContainer from "components/MainContainer";
import Head from "next/head";
import { useRouter } from "next/router";

type TProductsProps = { products: IProduct[] };

const Products = ({ products }: TProductsProps) => {
  const [filter, setFilter] = useState<string[] | null>(null);
  const [sort, setSort] = useState<number>(-1);
  const [expanded] = useContext(ExpandContext);

  const sortCriteria = ["Price low-high", "Price high-low"];

  const itemsList = productsToShow({ products, filter, sort });

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{asPath.charAt(1).toUpperCase() + asPath.slice(2)}</title>
      </Head>
      <MainContainer>
        <div className={scrollClassNames}>
          <div className={"container"}>
            <div className={s.wrapper}>
              <div className={s.filters}>
                <Show condition={!!products && !!products[0].category}>
                  <Filter
                    title="Category"
                    specification={getFilteredCategories(products)}
                    setFilter={setFilter}
                    invert={0}
                  />
                </Show>
                <div className={s.filters__space}></div>
                <Sort sortCriteria={sortCriteria} setSort={setSort} />
              </div>
              <Show condition={!!filter}>
                <div className={s.title}>{filter && filter.join(", ")}</div>
              </Show>
              <div className={s.pizzaItems}>
                <Show condition={!!itemsList}>
                  {!!itemsList &&
                    itemsList.map((product: IProduct) => (
                      <ProductItem key={product.id} product={product} />
                    ))}
                </Show>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Products;

type TGetServerSideProps = { params: { productsPage: string } };

export async function getServerSideProps({ params }: TGetServerSideProps) {
  const response = await axios.get(
    process.env.REACT_APP_BASE_URL + params.productsPage
  );
  const products = response.data;

  if (!products) {
    return { notFound: true };
  }

  return {
    props: { products },
  };
}
