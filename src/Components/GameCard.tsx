import { Card, CardBody, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropperImageUrl from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCropperImageUrl(game.background_image)}
        borderRadius={10}
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Flex justifyContent={"space-between"}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
