import { Card, CardBody, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../Entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropperImageUrl from "../Services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Image
        src={getCropperImageUrl(game.background_image)}
        borderRadius={10}
      />
      <CardBody>
        <Flex justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Flex>
        <Heading fontSize={"2xl"}>
          <Link to={"games/" + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
