import {useState} from "react";
import {useDebounce} from "rooks";

export default function useSearchDebounce() {
  const [value, setValue] = useState("");
  const setSearchDebounced = useDebounce(setValue, 500);

  return [value, setSearchDebounced];
}
// ! Not restrict number of parameters
// Usage: const [page, limit] = getParams("page", "limit");
// Usage: const [page] = getParams("page");
