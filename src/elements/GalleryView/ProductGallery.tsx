/* eslint-disable @typescript-eslint/no-explicit-any */
import cardImg1 from "../../assets/fotos/Acana/IMG_20211220_115121_738.jpg";
import cardImg2 from "../../assets/fotos/Acana/IMG_20211220_115121_276.jpg";
import cardImg3 from "../../assets/fotos/Acana/IMG_20211220_115121_368.jpg";
import cardImg4 from "../../assets/fotos/Acana/IMG_20211220_115121_697.jpg";

import {
  // Flex,
  // Circle,
  Box,
  // Image,
  Badge,
  useColorModeValue,
  // Icon,
  // chakra,
  // Tooltip,
  Grid,
  Container,
  GridItem,
  Center,
  Img,
  Stack,
  // Text,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import FilterGallery from "./newFilterGallery";
// import { FiShoppingCart } from 'react-icons/fi'
// import { StarIcon } from '@chakra-ui/icons'

const contentData = [
  {
    isNew: true,
    imageURL: cardImg1,
    label: "Acana",
    name: "Wild Coast",
    price: 5000,
    rating: 5,
    numReviews: 24,
  },
  {
    isNew: true,
    imageURL: cardImg2,
    label: "Acana",
    name: `Puppy & Junior`,
    price: 4700,
    rating: 4,
    numReviews: 11,
  },
  {
    isNew: false,
    imageURL: cardImg3,
    label: "Acana",
    name: "Praire Poultry",
    price: 6000,
    rating: 4.8,
    numReviews: 65,
  },
  {
    isNew: false,
    imageURL: cardImg4,
    label: "Acana",
    name: "Freshwater Fish",
    price: 5000,
    rating: 4.5,
    numReviews: 114,
  },
  {
    isNew: true,
    imageURL: cardImg1,
    label: "Acana",
    name: "Wild Coast",
    price: 5000,
    rating: 5,
    numReviews: 24,
  },
  {
    isNew: true,
    imageURL: cardImg2,
    label: "Acana",
    name: `Puppy & Junior`,
    price: 4700,
    rating: 4,
    numReviews: 11,
  },
  {
    isNew: false,
    imageURL: cardImg3,
    label: "Acana",
    name: "Praire Poultry",
    price: 6000,
    rating: 4.8,
    numReviews: 65,
  },
  {
    isNew: false,
    imageURL: cardImg4,
    label: "Acana",
    name: "Freshwater Fish",
    price: 5000,
    rating: 4.5,
    numReviews: 114,
  },
];

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1", padding: "0.1em" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: "1", padding: "0.1em" }}
              />
            );
          }
          return (
            <BsStar key={i} style={{ marginLeft: "1", padding: "0.1em" }} />
          );
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="xs">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function Gallery() {
  const colorMod1 = useColorModeValue("gray.100", "gray.800");
  const colorMod2 = useColorModeValue("gray.800", "white");

  return (
    <Stack color={colorMod2} direction={["column", "row"]}>
      <FilterGallery />

      {/* <Center w="100px" bg="green.500" width={"sm"}>
        <Text>En Construcción</Text>
      </Center> */}
      <Center as={Container} maxW="full" m={2}>
        <Grid
          templateColumns={" 4fr repeat(3, 4fr)"}
          // templateRows={'repeat(2, 1fr, auto)'}
          gap={2}
          p={"0"}
        >
          {contentData.map((data, i) => (
            <GridItem colSpan={"auto"} key={i} minH={{ base: "full" }}>
              <Link to={"/product-view/detail"}>
                <Img
                  src={data.imageURL}
                  alt={"Picture of" + data.name}
                  key={i}
                />
                <Box p="4" bg={colorMod1}>
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {data.isNew ? "Nuevo" : "Mas Vendido"}
                    </Badge>
                    {/* <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      {property.beds} beds &bull; {propertyhs} baths
                  </Box>             */}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={2}
                    color={colorMod2}
                  >
                    {data.label} <br /> {data.name}
                  </Box>
                  <Box color={colorMod2}>
                    <Box>
                      {data.price.toFixed(2)}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / $
                      </Box>
                    </Box>
                    <Box display="flex" mt="2" alignItems="center">
                      <Rating
                        rating={data.rating}
                        numReviews={data.numReviews}
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
        {/* <List
          loading={isLoading}
          items={products}
          renderLoadingItem={() => <ListItemSkeleton />}
          fetchMore={() => {
            if (!isLoading) {
              setItems((prevItems) => prevItems + PAGE_SIZE);
            }
          }}
          renderItem={(item: any) => (
            <ListItem
              key={item.id}
              background={item.background}
              name={item.name}
              color={item.color}
              price={item.price}
            />
          )}
        /> */}
      </Center>
    </Stack>
  );
}

export default Gallery;
