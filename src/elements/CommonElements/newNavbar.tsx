import logo from '../../assets/fotos/logo.png';
// import logos from './assets/fotos/logos.jpg';
import invlogo from '../../assets/fotos/invlogo.png';
import userImg from '../../assets/icons/usuario3.png';
import userImgInv from '../../assets/icons/usuario3inv.png';
import shoppingCart from '../../assets/icons/Copia de carrito-de-compras.png'
import shoppingCartInv from '../../assets/icons/Copia de carrito-de-compras-inv2.png'
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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as Link2 } from 'react-router-dom'
import { 
  // useEffect, 
  // useState 
  // useRef
} from 'react';
import ColorModeSwitcher from '../FrontPage/ColorModeSwitcher';
import { InView } from 'react-intersection-observer';
// import VisibilitySensor from "react-visibility-sensor"

// interface ColapseSensor {
//   isVisible: boolean;
// }


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const SwitchLogo = useColorModeValue(logo, invlogo);
  const SwitchUser = useColorModeValue(userImg, userImgInv);
  const SwitchCart = useColorModeValue(shoppingCart, shoppingCartInv);
  const fixedNavBg = useColorModeValue('linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )', 'linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )');
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [goingUp, setGoingUp] = useState(true);
  // const [visible, setVisible] = useState(true);
  const colorFlex = useColorModeValue('gray.600', 'white');
  const borderColorFlex = useColorModeValue('gray.200', 'gray.900');
  const aligNav = useBreakpointValue({ base: 'center', md: 'left' });
  // const [scrollSensor, setScrollSensor] = useState(0)



// eslint-disable-next-line @typescript-eslint/no-unused-vars



//   useEffect(() => {

//   () => {
//     const currentScrollY = scrollSensor;
    
//     if (scrollPosition < currentScrollY && goingUp) {
//       setGoingUp(false);
//     }
//     else if (scrollPosition > currentScrollY && !goingUp) {
//       setGoingUp(true);
//     }
    
//     console.log(' currentScrollY: ' + currentScrollY + ' scrollPosition: ' + scrollPosition + ' goingUp?: ' + goingUp)
//     setScrollPosition(currentScrollY)
    
//     return !goingUp && setVisible(false)
//   }
// },[goingUp, scrollPosition, scrollSensor])

  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
      
  //     if (scrollPosition < currentScrollY && goingUp) {
  //       setGoingUp(false);
  //     }
  //     if (scrollPosition > currentScrollY && !goingUp) {
  //       setGoingUp(true);
  //     }
      
  //     console.log(' currentScrollY: ' + currentScrollY + ' scrollPosition: ' + scrollPosition + ' goingUp?: ' + goingUp)
  //     setScrollPosition(currentScrollY)
  //   }


  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  //   }
  // , [goingUp, scrollPosition])
  
  // const onChange = (isVisible:ColapseSensor) => console.log(isVisible)
  // scrollSensor < 200 ? isVisible = true:  isVisible = false
    



  return (
    
    <Box top={0} >
              <ColorModeSwitcher 
              display='flex' 
              position='relative' 
              // top='15%' 
              left='93%' 
              zIndex='overlay' 
              />
              {/* <Stack display='inline' align={aligNav}>
                  <Box  

                  >
                  <Link2 to={'/'}>  
                    <Image src={SwitchLogo} alt="Logo"   mt={{base: 1}} boxSize={20} />
                  </Link2>
                  </Box>
              </Stack> 
      <VisibilitySensor 
      // scrollCheck={true}
      // scrollThrottle={10}
      partialVisibility={true}
      offset={{bottom:200}} 
      // minTopValue={3000}
      // scrollDelay={100}
      // delayedCall={true}
      // onChange={onChange}
      >
      {({isVisible}:ColapseSensor)=> 
      // {

      //     return 
        //   isVisible ? ( 
        //   // <OnChange isVisible={!isVisible} /> 
        //   <Box 
        //   // position='absolute'
        //   width={'full'}
        //   border={'1px solid black'}
        //   bg={fixedNavBg}
        //   zIndex={'1'}
        //   top={0}
          
        //   >
        //   <Stack align={aligNav}>
        //     <Link2 to={'/'}>  
        //       <Image src={SwitchLogo} alt="Logo"   mt={{base: 1}} boxSize={20} />
        //     </Link2>
        // </Stack> 
        //   </Box>
          
        //   ) :
  
          (*/}
          <InView 
          rootMargin={'250px'} 
          // initialInView={true} 
          onChange={(inView) => console.log('Inview:', inView)}
          // skip={true}
          threshold={0.9}
          // triggerOnce={true}
          // delay={200}
          >
          {({inView, ref}) =>
          // <OnChange isVisible={!isVisible} /> 
          <>
          <SlideFade 
          in={!inView}
          offsetY={30}
          reverse={true}
          unmountOnExit={true}
          >
            <Box 
            position='fixed'
            width={'full'}
            // border={'1px solid black'}
            bg={fixedNavBg}
            zIndex={'sticky'}
            top={0}
            // display={inView? 'none' : 'block' }
            >
              <Stack align={aligNav}>
                <Link2 to={'/'}>  
                  <Image src={SwitchLogo} alt="Logo"   mt={{base: 1}} boxSize={20} />
                </Link2>
            </Stack> 
          </Box>
          </SlideFade>
          
          
            <SlideFade
            // direction={'top'}
            in={inView} 
            // endingHeight={10}
            // startingHeight={'10%'}
            // offsetY={'100px'}
            // animateOpacity={false} 
            offsetY={80}
            // reverse={true}
            // unmountOnExit={true}

            >
            <Flex
            bg='inherit'
            color={colorFlex}
            ref={ref}

            // minH={'60px'}
            // py={{ base: 6 }}
            // px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={borderColorFlex}
            align={'center'}
            >
            <Flex
              flex={{ base: 1, md: 'auto' }}
              // ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
            <Stack display='inline' align={aligNav}>
              <Box position='relative' 
              // right='0' 
              p={10}
              >
              <Link2 to={'/'}>  
                <Image src={SwitchLogo} alt="Logo"   mt={{base: 1}} boxSize={28} />
              </Link2>
              </Box>
          </Stack>

              <Flex 
              display={{ base: 'none', md: 'flex' }} 
              // alignItems='end' 
              top={{base: -50 , md: -130}} 
              pos={'relative'} 
              left={28}
              >
                <DesktopNav />
              </Flex>
            </Flex>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={0}
              mr={20}
              mt={-18}
              >
              <Box 
              w={{base: '0', md: '8rem'}}
              > 
              <Link2 to={'login'} 
                >
                  <Image
                    display={{ base: 'none', md: 'inline-flex' }}
                    w={'10'}
                    src= {SwitchUser}
                    // mt={{base: -20}}

                    alt='Login/Logon'/>
                      
                </Link2>
              </Box>
              <Box w={{base: '0', md: '8rem'}}>
              <Link2 to={'login'} 
                >
                  <Image
                  display={{ base: 'none', md: 'inline-flex' }}
                    w={'10'}
                    src= {SwitchCart}
                    // mt={{base: -20}}

                    alt='Login/Logon'/>
                      
                </Link2>
              </Box>
            </Stack>
          </Flex>
        </SlideFade>
          </>
        }
        </InView >
          {/* ) 
      // } 
    }
      </VisibilitySensor>*/}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={0} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          {/* <Box 
          borderTop={'1px'}
          borderStyle={'dotted'}
          borderColor={'gray'}
          w={'24'} 
          mt={'52'} 
          h={'10'}
          transform={'rotate(60deg)'} 
          ml={-3}
          ></Box> */}
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box position={'relative'} ml={8} mt={56}>
              <Link
                fontFamily={'Futura'}
                p={1}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontFamily={'Futura'}
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

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          fontFamily={'Futura'}
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

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
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
