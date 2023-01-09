import { useEffect, useState } from "react";

type TUseLocalStorageOutput = [string, (value: string) => void];

const useLocalStorage = (
  key: string,
  initialValue: string = ""
): TUseLocalStorageOutput => {
  const [value, setValue] = useState<string>(() => {
    if (typeof window !== "undefined")
      return localStorage.getItem(key) || initialValue;
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
