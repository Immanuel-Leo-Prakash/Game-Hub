import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((data) => data.id === id);
};

export default usePlatform;
