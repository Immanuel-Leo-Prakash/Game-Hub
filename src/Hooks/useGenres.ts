import Genre from "../Data/Genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => ({ data: Genre, isLoading: false, error: null });

export default useGenres;
