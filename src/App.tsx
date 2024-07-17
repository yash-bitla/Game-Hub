import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/useGames";
import PlatformDropDown from "./components/PlatformDropDown";
import SortSelector from "./components/sortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //more than 1080p
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={setSearchText}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading
            platform={selectedPlatform}
            genres={selectedGenre}
          ></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformDropDown
              onPlatformSelect={(p) => setSelectedPlatform(p)}
              selectedPlatform={selectedPlatform}
            ></PlatformDropDown>
            <SortSelector
              onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
              sortOrder={sortOrder}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          setSortedOrder={sortOrder}
          searchText={searchText}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
