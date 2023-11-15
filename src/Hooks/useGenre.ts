import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data?.results.find((data) => data.id === id);
};

export default useGenre;
