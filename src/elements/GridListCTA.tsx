'use client'
// import React from 'react'
import dogsplaying from '../assets/fotos/dogplaying1.jpeg'
import cat3 from '../assets/fotos/cat3F.png'
import dogtoys2 from '../assets/fotos/dogtoys2F.jpeg'
import doghappy2 from '../assets/fotos/dogshappy2F.jpeg'

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Image,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'

// interface FeatureProps {
//   heading: string
//   text: string
// }

// const Feature = ({ heading, text }: FeatureProps) => {
//   return (
//     <GridItem>
//       <chakra.h3 fontSize="xl" fontWeight="600">
//         {heading}
//       </chakra.h3>
//       <chakra.p>{text}</chakra.p>
//     </GridItem>
//   )
// }

export default function GridListCTA() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Medium length title
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Provide your customers a story they would enjoy keeping in mind the
              objectives of your website. Pay special attention to the tone of voice.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'273px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${dogsplaying})`,
                // backgroundImage: 'none',
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={dogsplaying}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Energia
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Alimentos
              </Heading>
              <Stack direction={'row'} align={'center'}>
                {/* <Text fontWeight={800} fontSize={'xl'}>
                  $57
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $199
                </Text> */}
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'273px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${cat3})`,
                // backgroundImage: 'none',
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={cat3}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Cats
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Todo Gatos
              </Heading>
              <Stack direction={'row'} align={'center'}>
                {/* <Text fontWeight={800} fontSize={'xl'}>
                  $57
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $199
                </Text> */}
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'273px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${doghappy2})`,
                // backgroundImage: 'none',
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={doghappy2}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Perros
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Todo Perros
              </Heading>
              <Stack direction={'row'} align={'center'}>
                {/* <Text fontWeight={800} fontSize={'xl'}>
                  $57
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $199
                </Text> */}
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'273px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${dogtoys2})`,
                // backgroundImage: 'none',
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={dogtoys2}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                Felicidad
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Juguetes
              </Heading>
              <Stack direction={'row'} align={'center'}>
                {/* <Text fontWeight={800} fontSize={'xl'}>
                  $57
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $199
                </Text> */}
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Grid>
    </Box>
  )
}
