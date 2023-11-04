import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/Platforms";
import apiClient from "../Services/api-client";
import { Platform } from "./useGames";
import { FetchResponse } from "../Services/api-client";
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
