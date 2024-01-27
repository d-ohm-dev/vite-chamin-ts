import logo from '../../assets/fotos/logo.png';
// import logos from './assets/fotos/logos.jpg';
import invlogo from '../../assets/fotos/invlogo.png';
import userImg from '../../assets/icons/usuario3.png';
import userImgInv from '../../assets/icons/usuario3inv.png';
import shoppingCart from '../../assets/icons/Copia de carrito-de-compras.png'
import shoppingCartInv from '../../assets/icons/Copia de carrito-de-compras_inv3.png'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  SlideFade,
  PopoverBody,
  PopoverFooter,
  ScaleFade,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as Link2 } from 'react-router-dom'
import ColorModeSwitcher from '../FrontPage/ColorModeSwitcher';
import { InView } from 'react-intersection-observer';

/**
 * @function default component
 * @param 
 * @returns the Navbar main component
 */
export default function Navbar() {
  const { isOpen } = useDisclosure();

  return (
    <Box top={0} >
      <ColorModeSwitcher 
      display='flex' 
      position='relative' 
      left='90%'
      zIndex='overlay' 
      />
      <InViewNavBar />
      <Collapse in={isOpen} animateOpacity>
        <MobileMenu />
      </Collapse>
    </Box>
  );
}

/**
 * @function Responsive rollbar
 * @returns rollbar animation
 * 
 */

const InViewNavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const SwitchLogo = useColorModeValue(logo, invlogo);
  const fixedNavBg = useColorModeValue('linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )', 'linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )');
  const colorFlex = useColorModeValue('gray.600', 'rgba(137, 200, 250, 0.95 )');
  const borderColorFlex = useColorModeValue('gray.200', 'gray.900');
  const aligNav = useBreakpointValue({ base: 'center', md: 'left' });



  return (
    /* 
    ES:
    Implemento "Inview" de "react-intersection-oserver" para detectar la visibilidad de mi "Navbar" dentro del "ScaleFade",
    al dejar esta de estar visible hace que se despliegue la "drop down bar" y viceversa
    EN:
    I implement "Inview" from "react-intersection-oserver" to detect the visibility of my "Navbar" within the "ScaleFade", 
    when it stops being visible it causes the "drop down bar" to be displayed and vice versa
    */
    <Box>
      <InView 
      rootMargin={'20%'} 
      initialInView={true} 
      // onChange={(inView) => console.log('Inview:', inView)}
      threshold={0.2}
      //Usamos InView de API "react-intersection-observer" para animar la barra de navegación
      // We use "InView" from "react-intersection-observer" API to make the Nav Bar animated
      // mas info/more info 👇 
      // https://github.com/zygisS22/intersectionObserverApi
      >
      {({inView, ref}) =>
        <Box >
          <SlideFade 
          // Este SlideFade renderiza el efecto de la barra "fixed" desplegable cuando se desplaza hacia abajo
          // This "Slidefade" renders the effect of "fixed" dropdown bar when scroll down
            in={!inView}
            offsetY={40}
            offsetX={15}
            delay={0.3}
            reverse={true}
            >
            <Box 
            position='fixed'
            width={'full'}
            bg={fixedNavBg}
            zIndex={'sticky'}
            top={0}
            >
              <Stack align={aligNav}>
                <Link2 to={'/'}>  
                  <Image 
                  src={SwitchLogo} 
                  alt="Logo"   
                  mt={{base: 2}} 
                  boxSize={{ base: 20 }} 
                  />
                </Link2>
              </Stack> 
              <Flex
              // Aca el menu de opciones
              // Here the option menu 
              display={{ base: 'none', md: 'flex' }} 
              // alignItems='end' 
              top={{ md: -150}} 
              pos={'absolute'} 
              left={40}
              >
                <DesktopMenu  fontSize={'xs'} />
                <NavIcons />
              </Flex>
            </Box>

          </SlideFade>
          
          <ScaleFade
          // Este ScaleFade renderiza el efecto del NavBar cuando se hace visible en scroll de abajo hacia arriba
          // This "Scalefade" renders the effect of the Navbar when get visible on scroll up
          in={inView}
          delay={0.5} 
          >
            <Flex
            // bg='inherit'
            color={colorFlex}
            ref={ref}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={borderColorFlex}
            align={'center'}
            >

              <Flex
              //Este Flex renderiza solo en vista de móviles
              // This Flex renderize only mobile display
              flex={{ base: 1, md: 'auto' }}
              display={{ base: 'flex', md: 'none' }}>
                <IconButton
                onClick={onToggle}
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
                />
              </Flex>
                
              <Flex 
              // Este Flex despliega el Navbar 
              // This "Flex" displays the Navbar
              flex={{ base: 1 }} 
              justify={{ base: 'center', md: 'start' }} 
              >
                <Stack display='inline' align={aligNav}>
                    <Box position='relative' 
                    top={4}
                    left={{md: 5, lg: 10}}
                    >
                      <Link2 to={'/'}>  
                        <Image 
                        src={SwitchLogo} 
                        alt="Logo"  
                        boxSize={{ base:20, md: 20}} 
                        mb={{ base: 16 , md: 16}}
                        />
                      </Link2>
                    </Box>
                </Stack>

                <Flex
              // Aca el menu de opciones
              // Here the option menu 
                display={{ base: 'none', md: 'flex' }} 
                // alignItems='end' 
                top={{base: -50 , md: -130}} 
                pos={'relative'} 
                left={28}
                >
                  <DesktopMenu />
                </Flex>
                
              </Flex>
              <NavIcons 
              mr={{base: 28, md: 20}} 
              // Aca los íconos de la barra de navegación
              // here the navbar icons
              />
            </Flex>
          </ScaleFade>
        </Box>
        }
      </InView >
    </Box>
  )
}

/**
 * 
 * @param param0 
 * @returns Navbar icons 
 */
const NavIcons = ({...props}) => {
  const SwitchCart = useColorModeValue(shoppingCart, shoppingCartInv);
  const SwitchUser = useColorModeValue(userImg, userImgInv);
  const popoverBgColor = useColorModeValue('rgba(137, 200, 250, 0.95 )', 'rgba(20, 30, 77, 0.95)');
  const linkHoverColor = useColorModeValue('gray.800', 'rgba(137, 200, 250, 0.95 )');
  
  return (
    <>
      <Stack
    // Acá renderizamos los iconos de usuario y carrito
    // Here render the user and shopping cart icons
      // flex={{ base: 1, md: 0 }}
      // justify={'flex-end'}
      direction={'row'}
      spacing={0}
      position={'relative'}
      left={{md: 10, lg: 0}} 
      {...props}
      // mr={20}
      // mt={'-60'}
      >
        <Box 
        w={{ base: 9}} 
        mb={{md: 8, lg: 10}}
        > 
          <Popover trigger={'hover'} placement={'bottom-end'}
          // este Popover renderiza el submenu desplegado por cada ícono
          // this Popover renderize the submenu icons displayed by every icon
          >
            <Box>
              <Link>
                <PopoverTrigger>
                  <Image
                  display={{ base: 'none', md: 'inline-flex' }}
                  src= {SwitchUser}
                  alt='Login/Logon'
                  _hover={{color: linkHoverColor}}
                      />
                </PopoverTrigger>
              </Link>
            </Box>
            <PopoverContent
                display={'run-in'}
                border={0}
                boxShadow={'lg'}
                bg={popoverBgColor}
                p={4}
                rounded={'sm'}
                minW={'2xs'}
              >
                <PopoverBody>
                  <Link2 to={'/login'}>
                    Login
                  </Link2>
                </PopoverBody>
                <PopoverFooter>
                  <Link2 to= {'/register'}>
                    Register
                  </Link2>
                </PopoverFooter>
              </PopoverContent>
          </Popover>
        </Box>
        <Box w={{base: '0', md: '8rem'}}>
          <Link2 to={'/'}>

            <Image
            display={{ base: 'none', md: 'inline-flex' }}
              w={'9'}
              src= {SwitchCart}
              // mt={{base: -20}}
              alt='Login/Logon'/>
                
          </Link2>
        </Box>
      </Stack>
    </>
  )
}


/**
 * 
 * @param param0 
 * @returns Desktop view menu
 */
const DesktopMenu = ({...props}) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'rgba(137, 200, 250, 0.95 )');
  const popoverContentBgColor = useColorModeValue('rgba(137, 200, 250, 0.95 )', 'gray.800');

  return (
    <Stack 
    direction={'row'} 
    spacing={{base: 0, md: 4, lg: 18, xl: 20}} 
    ml={{base: 0 , md: 5, lg: 18, xl: 32 }}
    >
      {
    // Recorremos el Array navItem declarado mas abajo para devolver por pantalla de escritorio sus valores usando
    // iteration through navItem array declared at the end to returns on desktop display it values
      NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}  >
          <Popover trigger={'hover'} placement={'bottom-start'}
          // Animación Popover de Chakra UI
          // Chakra UI Popover animation
          >
            <PopoverTrigger>
              <Box position={'relative'} top={44} right={{md: 16, lg: 0}} >
              <Link
                href={navItem.href ?? '#'}
                _hover={{
                  // textDecoration: 'none',
                  color: linkHoverColor,
                }}
                {...props}
                >
                <Text
                letterSpacing={{ md: 'wide', lg: 'tighter'}}
                fontSize={{ base: 12, md: 14, lg: 16}}
                // fontFamily={'body'}
                color={linkColor}
                >
                {navItem.label}
                </Text>
              </Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                // border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                // p={8}
                alignItems={'center'}
                rounded={'xl'}
                // minW={'s'}
                >
                <Stack alignItems={'center'} >
                  {navItem.children.map((child) => (
                    <DesktopSubmenu key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

/**
 * 
 * @param NavItem params 
 * @returns desktop view submenu
 */
const DesktopSubmenu = ({ label, href, subLabel }: NavItem) => {
  // Recibo los parametros previamente recorridos en DesktopMenu
  // receive the params previously iterated on DesktopMenu
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      // p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

/**
 * 
 * @returns Mobile view navbar
 */
const MobileMenu = () => {
  return (
    <Stack
      bg={useColorModeValue('rgba(137, 200, 250, 0.95 )', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {
    // Recorremos el Array navItem declarado mas abajo para devolver por pantallas de móviles sus valores
    // iteration through navItem array declared at the end to returns on mobile display it values
      NAV_ITEMS.map((navItem) => (
        <MobileSubmenu key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

/**
 * 
 * @param param0 
 * @returns mobile nav
 */
const MobileSubmenu = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  // Recibo los parametros previamente recorridos en MobileMenu
  // receive the params previously iterated on MobileMenu

  return (
    <Stack  onClick={children && onToggle}>
      <Flex
        // py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}
          // funcionalidad Collapse de Chakra UI
          // Chakra UI Collapse functionality
      >
        <Stack
          mt={2}
          // pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Alimentos',
    children: [
      {
        label: 'Marcas',
        subLabel: 'Tus marcas preferidas',
        href: '#',
      },
      {
        label: 'Ofertas',
        subLabel: 'Lo que buscabas al mejor precio',
        href: '#',
      },
    ],
  },
  {
    label: 'Juguetes',
    children: [
      {
        label: 'Marcas',
        subLabel: 'Solo los mejores juguetes del mercado',
        href: '#',
      },
      {
        label: 'Ofertas',
        subLabel: 'Al alcance de tu mascota',
        href: '#',
      },
    ],
  },
  {
    label: 'Acerca de nosotros',
    href: '#',
  },
  {
    label: 'Contacto',
    href: '#',
  },
];

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
