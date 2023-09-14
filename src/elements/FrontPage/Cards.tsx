

'use client'

import cardImg1 from '../../assets/fotos/Acana/IMG_20211220_115121_738.jpg'
import cardImg2 from '../../assets/fotos/Acana/IMG_20211220_115121_276.jpg'
import cardImg3 from '../../assets/fotos/Acana/IMG_20211220_115121_368.jpg'
import cardImg4 from '../../assets/fotos/Acana/IMG_20211220_115121_697.jpg'

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
  // VStack,
  HStack,
  Center,
  Img,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import { FiShoppingCart } from 'react-icons/fi'
// import { StarIcon } from '@chakra-ui/icons'

const contentData = [ 
  {
    isNew: true,
    imageURL: cardImg1,
    label: 'Acana',
    name: 'Wild Coast',
    price: 5000,
    rating: 5,
    numReviews: 24,
  },
  {
    isNew: true,
    imageURL: cardImg2,
    label: 'Acana',
    name: `Puppy & Junior` ,
    price: 4700,
    rating: 4,
    numReviews: 11,
  },  
  {
    isNew: false,
    imageURL: cardImg3,
    label: 'Acana',
    name: 'Praire Poultry',
    price: 6000,
    rating: 4.8,
    numReviews: 65,
  },
  {
    isNew: false,
    imageURL: cardImg4,
    label: 'Acana',
    name: 'Freshwater Fish',
    price: 5000,
    rating: 4.5,
    numReviews: 114,
  }
]

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
  const colorMod1 = useColorModeValue('gray.100', 'gray.800');
  // const colorMod2 = useColorModeValue('gray.800', 'white');

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
  
    <Center as={Container} maxW="full" mt={4} >
      <Grid
        templateColumns={{base: 'repeat(auto-fill, 1fr)'}}
        gap={{ base: 2}}
      >
        <HStack spacing={4}>
          {
            contentData.map((data, i) => (
            
            <GridItem colSpan={i+1} key={i} minH={{base: 'full'}}>
              <Link to={'/product-view'}>
              <Img src={data.imageURL} alt={'Picture of' + data.name} key={i} />
              <Box p='4' bg={colorMod1}>
                <Box display='flex' alignItems='baseline' >
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    { data.isNew? 'Nuevo': 'Mas Vendido'}
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
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={2}
                >
                  {data.label} <br/> {data.name}
                </Box>

                <Box>
                  {data.price.toFixed(2)}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    / $
                  </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                  <Rating rating={data.rating} numReviews={data.numReviews} />
                </Box>

              </Box>
              </Link>
            </GridItem>
            
            ))
            
          }
        </HStack> 
      </Grid> 
    </Center>
  ) 
    
}

    export default ProductAddToCart

/*
    <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < data.rating ? 'teal.500' : 'gray.300'} />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {data.numReviews} reviews
            </Box>
          </Box> 
        </Box>
      </Box>

  */
  
  //  return (
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


/*
function AirbnbCard() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
  
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {
      contentData.map((data, i) => (
    <Image src={data.imageURL} alt={'Picture of' + data.name} key={i} />

    < p='6'>
      < display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          New
        </Badge>


       <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {property.beds} beds &bull; {propertyhs} baths
        </Box> }
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {data.label + '<br/>' + data.name}
      </Box>

      <Box>
        {data.price.toFixed(2)}
        <Box as='span' color='gray.600' fontSize='sm'>
          / wk
        </Box>
      </Box>

      <Box display='flex' mt='2' alignItems='center'>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < data.rating ? 'teal.500' : 'gray.300'}
            />
          ))}
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {data.reviewCount} reviews
        </Box>
      </Box>
    </Box>
  </Box>
      ))
    }
  )
} */
