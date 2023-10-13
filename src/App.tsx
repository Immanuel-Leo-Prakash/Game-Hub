import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gamequery.genre}
            onSelectGenre={(genre: Genre) => {
              console.log(genre);
              console.log(gamequery.platform);

              setGamequery({ ...gamequery, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gamequery.platform}
          onSelectPlatform={(platform) =>
            setGamequery({ ...gamequery, platform })
          }
        />
        <GameGrid gameQuery={gamequery} />
      </GridItem>
    </Grid>
  );
}

export default App;
