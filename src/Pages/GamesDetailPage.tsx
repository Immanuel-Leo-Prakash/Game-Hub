import useGame from "../Hooks/useGame";
import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GamesDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GamesDetailPage;
