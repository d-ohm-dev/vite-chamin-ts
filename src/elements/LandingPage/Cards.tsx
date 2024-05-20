"use client";

import cardImg1 from "../../assets/fotos/Acana/IMG_20211220_115121_738.jpg";
import cardImg2 from "../../assets/fotos/Acana/IMG_20211220_115121_276.jpg";
import cardImg3 from "../../assets/fotos/Acana/IMG_20211220_115121_368.jpg";
import cardImg4 from "../../assets/fotos/Acana/IMG_20211220_115121_697.jpg";

import {
  Box,
  Badge,
  useColorModeValue,
  Grid,
  Container,
  GridItem,
  HStack,
  Center,
  Img,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        {numReviews} review{numReviews > 1 && "s"}H
      </Box>
    </Box>
  );
}

function ProductAddToCart() {
  const colorMod1 = useColorModeValue("gray.100", "gray.800");
  const colorMod2 = useColorModeValue("gray.800", "white");

  // return (
  //   <Center as={Container} maxW="full" mt={4} >
  //     <Grid
  //       templateColumns={{base: 'repeat(auto-fill, 1fr)'}}
  //       gap={{ base: 2}}
  //     >
  //       <HStack spacing={4}>
  //       {contentData.map((data , i)=>(
  //                 <GridItem colSpan={i+1} key={i} minH={{base: 'full'}} overflow={'scroll'}>
  //                   <Flex w="min" alignItems="center" justifyContent="center" >
  //                       <Box
  //                         className='bgBox'
  //                         bg={colorMod1}
  //                         maxW="min"
  //                         borderWidth="1px"
  //                         rounded="lg"
  //                         shadow="lg"
  //                         position="relative"
  //                         padding={2 }
  //                         paddingBottom= {data.isNew? '0' : '6'}
  //                         alignItems='baseline'

  //                         >
  //                           <Circle
  //                           size="10px"
  //                           position="absolute" top={2}
  //                           right={2} bg="red.200"
  //                           display={data.isNew? 'inline-block': 'none'}
  //                           />

  //                         <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

  //                         <Box p="8">
  //                           <Box display="flex" alignItems="baseline">
  //                             {data.isNew && (
  //                               <Badge rounded="full" px="2" fontSize="sm" colorScheme="red">
  //                                 Nuevo
  //                               </Badge>
  //                             )}
  //                           </Box>
  //                           <Flex mt="1" justifyContent="space-between" alignContent="center">
  //                             <Box
  //                               fontSize="lg"
  //                               fontWeight="semibold"
  //                               as="h4"
  //                               lineHeight="tight"
  //                               isTruncated>
  //                               {data.label}
  //                               <br/>
  //                               {data.name}
  //                             </Box>
  //                             <Tooltip
  //                               label="Add to cart"
  //                               bg="white"
  //                               placement={'top'}
  //                               color={'gray.800'}
  //                               fontSize={'lg'}>
  //                               <chakra.a href={'#'} display={'flex'}>
  //                                 <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
  //                               </chakra.a>
  //                             </Tooltip>
  //                           </Flex>

  //                           <Flex justifyContent="space-between" alignContent="center">
  //                             <Rating rating={data.rating} numReviews={data.numReviews} />
  //                             <Box fontSize="lg" color={colorMod2}>
  //                               <Box as="span" color={'gray.600'} fontSize="md" >
  //                                 $
  //                               </Box>
  //                               {data.price.toFixed(2)}
  //                             </Box>
  //                           </Flex>
  //                         </Box>
  //                       </Box>
  //                     </Flex>
  //                   </GridItem>
  //       )
  //     )
  //       }
  //       </HStack>
  //     </Grid>
  //   </Center>
  // )

  return (
    <Box
      overflowX={"auto"}
      width={{ base: "auto", lg: "full" }}
      className="scrollcard"
    >
      <HStack spacing={4}>
        <Center as={Container} maxW="full" mt={2}>
          <Grid
            templateColumns={{ base: "repeat(auto-fill, 1fr)" }}
            gap={{ base: 2 }}
          >
            <Box
              position={"relative"}
              left={{ base: 40, md: 0 }}
              w={{
                base: "container.md",
                lg: "container.lg",
                xl: "full",
              }}
            >
              <HStack
                spacing={4}
                overscrollBehaviorX={{ base: "contain" }}
                alignItems={"flex-end"}
                mr={{ base: 5, lg: 1 }}
                ml={{ md: 3, lg: 3 }}
              >
                {contentData.map((data, i) => (
                  <GridItem colSpan={i + 1} key={i} minH={{ base: "full" }}>
                    <Link to={"/product-view"}>
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
                    </Link>
                  </GridItem>
                ))}
              </HStack>
            </Box>
          </Grid>
        </Center>
      </HStack>
    </Box>
  );
}

export default ProductAddToCart;
