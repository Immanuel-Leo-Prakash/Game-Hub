import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenres";
import useGames from "../Hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const game = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = genres?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = ` ${platform?.name || ""} ${game?.name || ""} Games `;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}{" "}
    </Heading>
  );
};

export default GameHeading;
