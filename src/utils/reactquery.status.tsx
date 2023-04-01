export const isErrorQueries = results => {
  const boolean1 = results.some(r => r.isError);
  const boolean2 = results.some(r => r.error);
  if (boolean1 || boolean2) {
    console.log(results);
    return true;
  }
  return false;
};

export const isLoadingQueries = results => {
  const boolean1 = results.some(r => r.isLoading);
  const boolean2 = results.some(r => r.isFetching);
  if (boolean1 || boolean2) return true;
  console.log("Loading completed ✅");
  return false;
};
