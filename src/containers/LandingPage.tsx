import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../elements/CommonElements/NavBar";
import Carousel from "../elements/LandingPage/Carousel";
import Cards from "../elements/LandingPage/Cards";
import Footer from "../elements/CommonElements/Footer";
import ChoosingPet from "../elements/LandingPage/ChoosingPet";

const LandingPage = () => {
  return (
    <Box textAlign="center" overflow={"clip"}>
      <Grid
        // h='min-content'
        templateRows={{
          base: "repeat(1, 1fr, auto)",
          md: "repeat(1, 1fr, auto)",
          lg: "repeat(4, 1fr, auto)",
        }}
        // autoRows={'min-content'}

        templateColumns="repeat(1, 100%)"
        gap={0}
        bg={useColorModeValue(
          "linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )",
          "linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )"
          // "linear-gradient( to bottom right, #0d2430, rgba(20, 20, 20, 0.94) )"
        )}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Navbar />
        </GridItem>

        <GridItem rowSpan={2} colSpan={1}>
          <Carousel />
        </GridItem>

        <GridItem rowSpan={3} colSpan={1}>
          <Cards />
        </GridItem>

        <GridItem rowSpan={4} colSpan={1}>
          <ChoosingPet />
        </GridItem>

        <GridItem rowSpan={5} colSpan={1}>
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LandingPage;
