import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <Card paddingY="6px" borderRadius="16px">
      <SkeletonCircle size="9" borderRadius="10px" marginX={1} />
      <SkeletonText />
    </Card>
  );
};

export default GenreListSkeleton;
