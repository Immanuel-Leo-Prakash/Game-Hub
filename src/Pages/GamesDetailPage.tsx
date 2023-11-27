import useGame from "../Hooks/useGame";
import { useParams } from "react-router-dom";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import DefinitionItem from "../Components/DefinitionItem";
import CriticScore from "../Components/CriticScore";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";

const GamesDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  console.log(game);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GamesDetailPage;
