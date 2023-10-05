import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius=" 4px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
