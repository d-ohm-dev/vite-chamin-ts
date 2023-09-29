import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
// import Navbar from "../elements/ProductView/NavbarPV";
import Navbar from "../elements/CommonElements/Navbar";
import { ColorModeSwitcher } from "../elements/FrontPage/ColorModeSwitcher";
// import FlexView from "../elements/ProductView/ProductDetails";
import Footer from "../elements/CommonElements/Footer";
import ProductDetails from "../elements/ProductView/ProductDetails";
import SimpleThreeColumns from "../elements/GalleryView/GalleryFeatures";
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
        <ProductDetails/>
      </GridItem>
      <GridItem rowSpan={3} colSpan={1}>
        <SimpleThreeColumns/>
      </GridItem>
      <GridItem rowSpan={4} colSpan={1}>
        <Footer/>
      </GridItem>
    </Grid>
  </Box>
)

export default ProductView