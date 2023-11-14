import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gamequery, setGamequery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // ~480px. em is a relative unit and is dependant on the font size.
        lg: `"nav nav" "aside main"`, // ~992px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGamequery({ ...gamequery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gamequery.genreId}
            onSelectGenre={(genre: Genre) => {
              setGamequery({ ...gamequery, genreId: genre.id });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10} marginBottom={-4}>
          <GameHeading gameQuery={gamequery} />
          <Flex marginX={0}>
            <Box paddingRight={5}>
              <PlatformSelector
                selectedPlatformId={gamequery.platformId}
                onSelectPlatform={(platform) =>
                  setGamequery({ ...gamequery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              onSelectSortOrder={(sortOrder) => {
                setGamequery({ ...gamequery, sortOrder });
              }}
              sortOrder={gamequery.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gamequery} />
      </GridItem>
    </Grid>
  );
}

export default App;
