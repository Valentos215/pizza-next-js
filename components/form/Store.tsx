import { useEffect, useState } from "react";

import CityAutocomplete from "components/form/autocomplete/CityAutocomplete";
import StoreAutocomplete from "components/form/autocomplete/StoreAutocomplete";
import { ICity, IStoreAdress } from "components/form/utils/form.utils";

import s from "components/form/Store.module.scss";

interface IStoreProps {
  setStoreAddress: (value: IStoreAdress | null) => void;
  shouldCheck: boolean;
  setShouldCheck: (value: boolean) => void;
}

const Store = ({
  setStoreAddress,
  shouldCheck,
  setShouldCheck,
}: IStoreProps) => {
  const [city, setCity] = useState<ICity | null>(null);
  const [store, setStore] = useState("");

  useEffect(() => {
    if (!city || !store) {
      setStoreAddress(null);
    } else {
      setStoreAddress({ city: city!.slug, store: store });
    }
  }, [city, store, setStoreAddress]);

  return (
    <div className={s.store}>
      <h3>Store</h3>
      <form className={s.form}>
        <CityAutocomplete
          city={city}
          setCity={setCity}
          shouldCheck={shouldCheck}
          setShouldCheck={setShouldCheck}
        />
        <StoreAutocomplete
          city={city}
          store={store}
          setStore={setStore}
          shouldCheck={shouldCheck}
          setShouldCheck={setShouldCheck}
        />
      </form>
    </div>
  );
};

export default Store;
