import { useEffect, useState } from "react";

type TUseLocalStorageOutput = [string, (value: string) => void];

const useLocalStorage = (
  key: string,
  initialValue: string = ""
): TUseLocalStorageOutput => {
  const [value, setValue] = useState<string>(initialValue);
  const [item, setItem] = useState("");

  useEffect(() => {
    if (!localStorage.getItem(key)) return;
    setItem(localStorage.getItem(key) || "");
  }, []);

  useEffect(() => {
    if (!item) {
      return;
    }
    setValue(item);
  }, [item]);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
