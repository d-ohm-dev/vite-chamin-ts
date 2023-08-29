'use client'

import logo from '../../assets/fotos/logo.png';
import invlogo from '../../assets/fotos/invlogo.png';
import bgimgl from '../../assets/fotos/FondoWebRecSky.jpg'
import bgimgd from '../../assets/fotos/FondoWebRecNight.png'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Img,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  const SwitchLogo = useColorModeValue(logo, invlogo);
  const SwitchBg = useColorModeValue(bgimgl, bgimgd);
  return (
    <Box
      backgroundImage={SwitchBg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={{base: 'contain', md: 'contain', lg: 'cover'}}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Img src={SwitchLogo} alt="Logo" maxH='55%' maxW='55%' mr={{base: -200}} mt={{base: 1}} />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Chamin Pet Shop</ListHeader>
            <Box as="a" href={'#'}>
              Acerca de nosotros
            </Box>
            <Box as="a" href={'#'}>
              Contáctanos
            </Box>
            <Box as="a" href={'#'}>
              Presupuestos
            </Box>
            <Box as="a" href={'#'}>
              Testimonios
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Soporte</ListHeader>
            <Box as="a" href={'#'}>
              ¿Necesitas ayuda?
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Ubicacion
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Conocer ultimas ofertas</ListHeader>
            <Stack direction={'row'} >
              <Input
                placeholder={'Tu correo electrónico'}
                bg={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.600',
                }}
              />
              <IconButton
                boxSize={'4xs'}
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
        <Text fontSize={'sm'} textAlign={'right'} >© 2023 D-Ohm Design. All rigths reserved</Text>
      </Container>
    </Box>
  )
}
