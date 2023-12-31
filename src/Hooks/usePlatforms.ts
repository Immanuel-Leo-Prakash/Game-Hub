import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Platforms from "../Data/Platforms";
import APIClient from "../Services/api-client";
import Platform from "../Entities/Platform";

const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: Platforms,
  });

export default usePlatforms;
