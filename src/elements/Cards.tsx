// 'use client'
import cat3 from '../assets/fotos/photo_2023-06-16 19.19.12 (1).jpeg'
// import dogtoys2 from '../assets/fotos/dogtoys2F.jpeg'
// import doghappy2 from '../assets/fotos/dogshappy2F.jpeg'
// import dogsplaying from '../assets/fotos/dogplaying1.jpeg'

// import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
//   SimpleGrid,
// } from '@chakra-ui/react'

// export default function ProductSimple() {
//   return (
//     <SimpleGrid spacing={20} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'273px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${cat3})`,
//               // backgroundImage: 'none',
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={cat3}
//               alt="#"
//             />
//           </Box>
//           <Stack pt={10} align={'center'}>
//             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               Cats
//             </Text>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//               Todo Gatos
//             </Heading>
//             <Stack direction={'row'} align={'center'}>
//               {/* <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text> */}
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'273px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${doghappy2})`,
//               // backgroundImage: 'none',
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={doghappy2}
//               alt="#"
//             />
//           </Box>
//           <Stack pt={10} align={'center'}>
//             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               Perros
//             </Text>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//               Todo Perros
//             </Heading>
//             <Stack direction={'row'} align={'center'}>
//               {/* <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text> */}
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'273px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${dogtoys2})`,
//               // backgroundImage: 'none',
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={dogtoys2}
//               alt="#"
//             />
//           </Box>
//           <Stack pt={10} align={'center'}>
//             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               Felicidad
//             </Text>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//               Juguetes
//             </Heading>
//             <Stack direction={'row'} align={'center'}>
//               {/* <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text> */}
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'273px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${dogsplaying})`,
//               // backgroundImage: 'none',
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={dogsplaying}
//               alt="#"
//             />
//           </Box>
//           <Stack pt={10} align={'center'}>
//             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               Energia
//             </Text>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//               Alimentos
//             </Heading>
//             <Stack direction={'row'} align={'center'}>
//               {/* <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text> */}
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//     </SimpleGrid>
//   )
// }


'use client'

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
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

const data = {
  isNew: true,
  imageURL: cat3,
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
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
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function ProductAddToCart() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductAddToCart


