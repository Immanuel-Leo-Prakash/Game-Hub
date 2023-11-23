import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GenreList from "../Components/GenreList";
import GameHeading from "../Components/GameHeading";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";
import GameGrid from "../Components/GameGrid";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // ~480px. em is a relative unit and is dependant on the font size.
        lg: ` "aside main"`, // ~992px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10} marginBottom={-4}>
          <GameHeading />
          <Flex marginX={0}>
            <Box paddingRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
