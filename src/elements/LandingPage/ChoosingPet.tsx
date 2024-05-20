'use client'
// import React from 'react'
import dogsplaying from '../../assets/fotos/dogplaying1.jpeg'
import cat3 from '../../assets/fotos/cat3F.png'
import dogtoys2 from '../../assets/fotos/dogtoys2F.jpeg'
import doghappy2 from '../../assets/fotos/dogshappy2F.jpeg'

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
  useColorModeValue,
  Center,
} from '@chakra-ui/react'


const imagesPV = [
  {
    image: cat3,
    title: 'Gatos'
  
  },
  {
    image: dogsplaying,
    title: 'Perros'
  
  },
  {
    image: dogtoys2,
    title: 'Conejos'
  
  },
  {
    image: doghappy2,
    title: 'Hamsters'
  
  }
]

export default function ChoosingPet() {

  const coloMod1 = useColorModeValue('white', 'gray.800')
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="10px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Título
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p textAlign={'left'} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          {imagesPV.map((data, i) =>(
                    <Center key={i} py={12}>
                    <Box
                      role={'group'}
                      p={6}
                      maxW={'330px'}
                      w={'full'}
                      bg={coloMod1}
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
                          backgroundImage: `url(${data.image})`,
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
                          src={data.image}
                          alt="#"
                        />
                      </Box>
                      <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                          {data.title}
                        </Text>
                        {/* <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                          Alimentos
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                          <Text fontWeight={800} fontSize={'xl'}>
                            $57
                          </Text>
                          <Text textDecoration={'line-through'} color={'gray.600'}>
                            $199
                          </Text> 
                        </Stack> */}
                      </Stack>
                    </Box>
                  </Center>
          ))}
        
      </Grid>
    </Box>
  )
}
