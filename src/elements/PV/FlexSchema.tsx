import { 
  Box, 
  Button, 
  Container, 
  // Card, 
  // CardBody, 
  // CardFooter, 
  Center, 
  Flex, 
  Heading, 
  Image, 
  List, 
  ListItem, 
  SimpleGrid, 
  // Square, 
  Stack, 
  StackDivider, 
  Text, 
  VStack,
  useColorModeValue} from "@chakra-ui/react";
  import { MdLocalShipping } from 'react-icons/md'


function FlexSchema () {

  const colorMode1 = useColorModeValue('gray.900', 'gray.400')
  const colorMode2 = useColorModeValue('gray.200', 'gray.600')
  const colorMode3 = useColorModeValue('gray.500', 'gray.400')
  const colorMode4 = useColorModeValue('yellow.500', 'yellow.300')
  const colorMode5 = useColorModeValue('gray.900', 'gray.50')
  const colorMode6 = useColorModeValue('white', 'gray.900')
  return (
<Flex color='white'>

  <Center w='100px' bg='green.500' width={'sm'} >

    <Text>Box 1</Text>

  </Center> 

  {/* <Square bg='blue.500' size='150px'>

   <Text>Box 2</Text>

 </Square> */}

  <Container maxW={'max'}>
      <SimpleGrid
        columns={1}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 18, md: 24 }}
        >
        <VStack>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            // w={'100%'}
            h={{ base: '100%', sm: '600px', lg: 'max' }}
          />
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Automatic Watch
            </Heading>
            <Text
              color={colorMode1}
              fontWeight={300}
              fontSize={'2xl'}>
              $350.00 USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={colorMode2} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={colorMode3}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={colorMode4}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={colorMode4}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                  inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={colorMode5}
            color={colorMode6}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
        </VStack>
      </SimpleGrid>
    </Container>  
</Flex>
  )
}

export default FlexSchema
