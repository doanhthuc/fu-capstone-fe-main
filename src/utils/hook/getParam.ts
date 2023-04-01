import {useSearchParams} from "react-router-dom";

export default function getParams(...params): any {
  const [searchParams, setSearchParams] = useSearchParams();

  const returnParams = [];
  params.map(p => {
    returnParams.push(searchParams.get(p));
  });

  return [setSearchParams, returnParams];
}
// ! Not restrict number of parameters
// Usage: const [page, limit] = getParams("page", "limit");
// Usage: const [page] = getParams("page");
