import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        color="yellow"
        marginLeft={1}
        fontWeight="bold"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;