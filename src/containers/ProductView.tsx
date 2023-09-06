import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../elements/PV/NavbarPV";
import { ColorModeSwitcher } from "../elements/FP/ColorModeSwitcher";
import FlexSchema from "../elements/PV/FlexSchema";
// import PlacementExample from "../elements/PV/rollNav";


const ProductView = () => (
  // textAlign="center" fontSize="xl"
  <Box textAlign="center" fontSize="xl" >
    <Grid
    h='8xl'
    templateRows='repeat(4, 1fr, auto)'
    templateColumns='repeat(1, 100%)'
    gap={0}
    bg={useColorModeValue('linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )', 'linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )')}
    >
    <GridItem rowSpan={1} colSpan={1}>
    <ColorModeSwitcher display='flex' position='relative' top='15%' left='93%' />
      {/* <PlacementExample/> */}
      <Navbar/>
    </GridItem>
    <GridItem rowSpan={2} colSpan={1} >
       <FlexSchema />
    </GridItem>
    <GridItem rowSpan={3} colSpan={1} bg='papayawhip' />
    <GridItem rowSpan={4} colSpan={1} bg= 'aquamarine' />
  </Grid>
</Box>
)

export default ProductView