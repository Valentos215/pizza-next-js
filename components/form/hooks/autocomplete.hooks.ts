import { useEffect } from "react";
import axios from "axios";

import { ICity, IStreet } from "components/form/utils/form.utils";

interface IUseSearchStreet {
  city: ICity | null;
  streetSearch: string;
  setSearchResults: (value: IStreet[] | null) => void;
}

export const useSearchStreet = ({
  city,
  streetSearch,
  setSearchResults,
}: IUseSearchStreet) => {
  const apiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const apiKey =
    "pk.eyJ1IjoidmFsZW50aW5vczIxNSIsImEiOiJjbDhuYzN5N3gwZXJiM29vYW5vdzJndzNtIn0.sXTtaj_m9upSxo6msqBwRA";
  const apiFetchParams = "types=address&limit=5&language=en";

  useEffect(() => {
    if (!streetSearch) {
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      axios
        .get(
          `${apiUrl}${streetSearch}.json?bbox=${city?.bbox}&${apiFetchParams}&access_token=${apiKey}`
        )
        .then((resp) => {
          if (!resp.data.features[0]) {
            setSearchResults([{ id: "1", text: "No matches" }]);
          } else {
            setSearchResults(resp.data.features);
          }
        });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [apiKey, apiUrl, city?.bbox, setSearchResults, streetSearch]);
};
