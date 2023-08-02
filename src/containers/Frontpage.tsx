import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../elements/ColorModeSwitcher";
import Navbar from "../elements/Navbar";
import Carousel from "../elements/Carousel";
import Cards from "../elements/Cards";
import Footer from "../elements/Footer";
import GridListCTA from "../elements/GridListCTA";

const Frontpage = () => {
  return (
  <Box textAlign="center" fontSize="xl">
    <Grid
    // h='min-content'
    templateRows='repeat(4, 1fr, auto)'
    templateColumns='repeat(1, 100%)'
    gap={0}
    bg={useColorModeValue('linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )', 'linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )')}
    >
      <GridItem rowSpan={1} colSpan={1} h='10%' w='100%' mb='0%' >
        <ColorModeSwitcher display='flex' position='relative' top='15%' left='93%' />
        <Navbar/>
      </GridItem>


      <GridItem rowSpan={2} colSpan={1} >
        <Carousel/>
      </GridItem>

      <GridItem rowSpan={3} h='800px' zIndex='base' >
        <Cards/>
      </GridItem>

      <GridItem rowSpan={4} colSpan={1} >
        <GridListCTA/>
      </GridItem>

      <GridItem rowSpan={5} colSpan={1} >
        <Footer/>
      </GridItem>


    </Grid>
  </Box>
  )
}

export default Frontpage