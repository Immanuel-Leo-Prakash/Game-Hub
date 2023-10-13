import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <Card paddingY="6px" borderRadius="16px" marginBottom="8px">
      <HStack justifyContent={"space-between"}>
        <SkeletonCircle size="9" borderRadius="10px" marginX={1} />
        <SkeletonText noOfLines={1} />
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
