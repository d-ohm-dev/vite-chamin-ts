

'use client'

import cardImg1 from '../assets/fotos/Acana/IMG_20211220_115121_738.jpg'
import cardImg2 from '../assets/fotos/Acana/IMG_20211220_115121_276.jpg'
import cardImg3 from '../assets/fotos/Acana/IMG_20211220_115121_368.jpg'
import cardImg4 from '../assets/fotos/Acana/IMG_20211220_115121_697.jpg'

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Grid,
  Container,
  GridItem,
  // VStack,
  HStack,
  Center,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

const contentData = {
 data1: {
    isNew: true,
    imageURL: cardImg1,
    label: 'Acana',
    name: 'Wild Coast',
    price: 5000,
    rating: 5,
    numReviews: 24,
  },
  data2: {
    isNew: true,
    imageURL: cardImg2,
    label: 'Acana',
    name: `Puppy & Junior` ,
    price: 4700,
    rating: 4,
    numReviews: 11,
  },  
  data3: {
    isNew: false,
    imageURL: cardImg3,
    label: 'Acana',
    name: 'Praire Poultry',
    price: 6100,
    rating: 4.8,
    numReviews: 65,
  },
  data4: {
    isNew: true,
    imageURL: cardImg4,
    label: 'Acana',
    name: 'Freshwater Fish',
    price: 6000,
    rating: 4.5,
    numReviews: 114,
  }
}

interface RatingProps {
  rating: number
  numReviews: number
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1', padding: '0.1em'  }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1', padding: '0.1em' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1', padding: '0.1em' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="xs">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function ProductAddToCart() {
  return (
    <Center as={Container} maxW="full" mt={4} p={0}>
      <Grid
        templateColumns={{base: 'repeat(auto-fill, 1fr)'}}
        gap={{ base: 2}}
      >
        <HStack spacing={4}>

          <GridItem colSpan={1}>
            <Flex p={0} w="min" alignItems="center" justifyContent="center" >
                <Box
                  bg={useColorModeValue('white', 'gray.800')}
                  maxW="min"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  position="relative">
                  {contentData.data1.isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                  )}

                  <Image src={contentData.data1.imageURL} alt={`Picture of ${contentData.data1.name}`} roundedTop="lg" />

                  <Box p="8">
                    <Box display="flex" alignItems="baseline">
                      {contentData.data1.isNew && (
                        <Badge rounded="full" px="2" fontSize="sm" colorScheme="red">
                          Nuevo
                        </Badge>
                      )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {contentData.data1.label}
                        <br/>
                        {contentData.data1.name}
                      </Box>
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'lg'}>
                        <chakra.a href={'#'} display={'flex'}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                        </chakra.a>
                      </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                      <Rating rating={contentData.data1.rating} numReviews={contentData.data1.numReviews} />
                      <Box fontSize="lg" color={useColorModeValue('gray.800', 'white')}>
                        <Box as="span" color={'gray.600'} fontSize="md">
                          $
                        </Box>
                        {contentData.data1.price.toFixed(2)}
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </GridItem>

            <GridItem colSpan={2} >
              <Flex p={0} w="min" alignItems="center" justifyContent="center">
                <Box
                  bg={useColorModeValue('white', 'gray.800')}
                  maxW="min"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  position="relative">
                  {contentData.data2.isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                  )}

                  <Image src={contentData.data2.imageURL} alt={`Picture of ${contentData.data2.name}`} roundedTop="lg" />

                  <Box p="8">
                    <Box display="flex" alignItems="baseline">
                      {contentData.data2.isNew && (
                        <Badge rounded="full" px="2" fontSize="xs" colorScheme="red">
                          Nuevo
                        </Badge>
                      )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {contentData.data2.label} <br/> {contentData.data2.name}
                      </Box>
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'lg'}>
                        <chakra.a href={'#'} display={'flex'}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                        </chakra.a>
                      </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                      <Rating rating={contentData.data2.rating} numReviews={contentData.data2.numReviews} />
                      <Box fontSize="lg" color={useColorModeValue('gray.800', 'white')}>
                        <Box as="span" color={'gray.600'} fontSize="md">
                          $
                        </Box>
                        {contentData.data2.price.toFixed(2)}
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </GridItem>

            <GridItem colSpan={3} >
              <Flex p={0} w="min" alignItems="center" justifyContent="center">
                <Box
                  bg={useColorModeValue('white', 'gray.800')}
                  maxW="min"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  position="relative">
                  {contentData.data3.isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                  )}

                  <Image src={contentData.data3.imageURL} alt={`Picture of ${contentData.data3.name}`} roundedTop="lg" />

                  <Box p="8">
                    <Box display="flex" alignItems="baseline">
                      {contentData.data3.isNew && (
                        <Badge rounded="full" px="2" fontSize="xs" colorScheme="red">
                          Nuevo
                        </Badge>
                      )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {contentData.data3.label} <br/> {contentData.data3.name}
                      </Box>
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'lg'}>
                        <chakra.a href={'#'} display={'flex'}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                        </chakra.a>
                      </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                      <Rating rating={contentData.data3.rating} numReviews={contentData.data3.numReviews} />
                      <Box fontSize="lg" color={useColorModeValue('gray.800', 'white')}>
                        <Box as="span" color={'gray.600'} fontSize="md">
                          $
                        </Box>
                        {contentData.data3.price.toFixed(2)}
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </GridItem>

            <GridItem colSpan={4} >
              <Flex p={0} w="min" alignItems="center" justifyContent="center">
                <Box
                  bg={useColorModeValue('white', 'gray.800')}
                  maxW="min"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                  position="relative">
                  {contentData.data4.isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                  )}

                  <Image src={contentData.data4.imageURL} alt={`Picture of ${contentData.data4.name}`} roundedTop="lg" />

                  <Box p="8">
                    <Box display="flex" alignItems="baseline">
                      {contentData.data4.isNew && (
                        <Badge rounded="full" px="2" fontSize="xs" colorScheme="red">
                          Nuevo
                        </Badge>
                      )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {contentData.data4.label} <br/> {contentData.data4.name}
                      </Box>
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'lg'}>
                        <chakra.a href={'#'} display={'flex'}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                        </chakra.a>
                      </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                      <Rating rating={contentData.data4.rating} numReviews={contentData.data4.numReviews} />
                      <Box fontSize="lg" color={useColorModeValue('gray.800', 'white')}>
                        <Box as="span" color={'gray.600'} fontSize="md">
                          $
                        </Box>
                        {contentData.data4.price.toFixed(2)}
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </GridItem>
        </HStack>
      </Grid>
    </Center>  
  )
}

export default ProductAddToCart


