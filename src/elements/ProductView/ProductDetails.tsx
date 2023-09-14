import productImg from "../../assets/fotos/Acana/FIRST FEAST.jpg"
import { 
  Box, 
  Button, 
  Container, 
  // Card, 
  // CardBody, 
  // CardFooter, 
  // Center, 
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

const detailProduct = [


  {
    img: productImg,
  }
]


function ProductDetails () {

  const colorMode1 = useColorModeValue('gray.900', 'gray.400')
  const colorMode2 = useColorModeValue('gray.200', 'gray.600')
  const colorMode3 = useColorModeValue('gray.500', 'gray.400')
  const colorMode4 = useColorModeValue('yellow.500', 'yellow.300')
  const colorMode5 = useColorModeValue('gray.900', 'gray.50')
  const colorMode6 = useColorModeValue('white', 'gray.900')
  return (
<Flex color='white'>

  {/* <Center w='100px' bg='green.500' width={'sm'} >

    <Text  >En Construcción</Text>

  </Center>  */}

  {/* <Square bg='blue.500' size='150px'>

   <Text>Box 2</Text>

 </Square> */}

  <Container maxW={'max'}>
      <SimpleGrid
        columns={2}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 18, md: 24 }}
        >
          <Image
            rounded={'md'}
            alt={'product image'}
            src={`${detailProduct.map(x => x.img)}`}
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
              Acana Kitten
            </Heading>
            <Text
              color={colorMode1}
              fontWeight={300}
              fontSize={'2xl'}>
              $350.00
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
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum</ListItem>{' '}
                  <ListItem>Lorem ipsum</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum</ListItem>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
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
                  Lorem ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  Lorem ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Lorem ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  Lorem ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Lorem ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  Lorem ipsum dolor sit amet){' '}
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
      </SimpleGrid>
    </Container>  
</Flex>
  )
}

export default ProductDetails
