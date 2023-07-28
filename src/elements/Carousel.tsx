import React from 'react';
import sliderDog from '../assets/fotos/sliderDog.png';
import sliderCat from '../assets/fotos/sliderCat.png';
import sliderBunny from '../assets/fotos/sliderBunny.jpeg'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Container,
  GridItem,
  // useBoolean,
  Center,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};



export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);
  //hover
  // const [flag, setFlag] = useBoolean()

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  // const boxSizes = useBreakpointValue({base: 'xs', md: 'md', lg: 'lg', xl: 'xl' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Diseño 1',
      text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: sliderDog,
      },
    {
      title: 'Diseño 2',
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sliderCat
    },
    {
      title: 'Diseño 3',
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sliderBunny
    },
  ];

  const { colorMode, toggleColorMode } = useColorMode()

  // const { isOpen, onToggle } = useDisclosure()

  return ( 

<GridItem
  position='relative'
  height='max'
  width='full'
  overflow='hidden'>
  {/* CSS files for react-slick */}
  <link
    rel="stylesheet"
    type="text/css"
    charSet="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />

  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />
  {/* Left Icon */}
  <IconButton
    aria-label="left-arrow"
    variant="ghost"
    colorScheme='messenger'
    position="absolute"
    left={side}
    top={top}
    transform={'translate(0%, -50%)'}
    zIndex={2}
    onClick={() => slider?.slickPrev()}>
    <BiLeftArrowAlt size="40px" />
  </IconButton>
  {/* Right Icon */}
  <IconButton
    aria-label="right-arrow"
    variant="ghost"
    colorScheme='messenger'
    position="absolute"
    right={side}
    top={top}
    transform={'translate(0%, -50%)'}
    zIndex={2}
    onClick={() => slider?.slickNext()}>
    <BiRightArrowAlt size="40px" />
  </IconButton>
  {/* Slider */}
  <Slider {...settings} ref={(slider) => setSlider(slider)} >
    {cards.map((card, index) => (
      <Box
        // mt='16'
        key={index}
        height='max'
        maxW='100%'
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={{base: 'contain', md: 'contain', lg: 'cover'}}
        backgroundImage={`url(${card.image})`}>
        
        {/* This is the block you need to change, to customize the caption */}

        <Container 
        height="600px" 
        maxW='1'
        position="relative" 
        >
          <VStack 
          position='absolute'
          top={{base: '40%', md: '50%'}}
          h='s'
          w={{base: 'sm', md: 'lg', lg: '4xl'}}
          transform={{base: 'translate(-48%, 0)', md: 'translate(-48%, 0)'}}
          onClick={toggleColorMode}
          >
            {colorMode === 'light' ? 'Dark' : 'Light'}
              <Heading fontSize={{ base: 'xl', md: '4xl', lg: '5xl' }} color='white' textShadow='1px 1px black'>
                <Center>
                  {card.title}
                </Center>
              </Heading>
              <Text fontSize={{ base: 'lg', lg: '2xl' }} color='white' textShadow='1px 1px black' >
                <Center>
                  {card.text}
                </Center>
              </Text>
          </VStack>
        </Container>
      </Box>
    ))}
  </Slider>
</GridItem>
)
    }