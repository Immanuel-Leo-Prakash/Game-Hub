import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../Data/Genre";
import APIClient from "../Services/api-client";
import Genre from "../Entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
