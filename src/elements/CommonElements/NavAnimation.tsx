import logo from "../../assets/fotos/logo.png";
import invlogo from "../../assets/fotos/invlogo.png";
import {
  Box,
  Flex,
  IconButton,
  Image,
  ScaleFade,
  SlideFade,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { memo } from "react";
import { InView } from "react-intersection-observer";
import { Link as Link2 } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DesktopMenu, MobileMenu } from "./NavBar";
import { NavIcons } from "./NavIcons";

/**
 * @function Responsive rollbar
 * @returns rollbar animation
 *
 */
const NavAnimation = memo(() => {
  const { isOpen, onToggle } = useDisclosure();
  const SwitchLogo = useColorModeValue(logo, invlogo);
  const fixedNavBg = useColorModeValue(
    "linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )",
    "linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )"
    // "linear-gradient( to bottom right, #0d2430, rgba(20, 20, 20, 0.94) )"
  );
  const colorFlex = useColorModeValue("gray.600", "rgba(137, 200, 250, 0.95 )");
  const borderColorFlex = useColorModeValue("gray.200", "gray.900");
  const aligNav = useBreakpointValue({ base: "center", md: "left" });

  return (
    /* 
    ES:
    Implemento "Inview" de "react-intersection-oserver" para detectar la visibilidad de mi "Navbar" dentro del "ScaleFade",
    al dejar esta de estar visible hace que se despliegue la "drop down bar" y viceversa
    EN:
    I implement "Inview" from "react-intersection-oserver" to detect the visibility of my "Navbar" within the "ScaleFade", 
    when it stops being visible it causes the "drop down bar" to be displayed and vice versa
    */
    <Box mt={5}>
      <InView
        initialInView={true}
        threshold={0.2}
        //Usamos InView de API "react-intersection-observer" para animar la barra de navegación
        // We use "InView" from "react-intersection-observer" API to make the Nav Bar animated
        // mas info/more info 👇
        // https://github.com/zygisS22/intersectionObserverApi
      >
        {({ inView, ref }) => (
          <Box>
            <SlideFade
              // Este SlideFade renderiza el efecto de la barra "fixed" desplegable cuando se desplaza hacia abajo
              // This "Slidefade" renders the effect of "fixed" dropdown bar when scroll down
              in={!inView}
              offsetY={40}
              delay={0.3}
              unmountOnExit
            >
              <Box
                position="fixed"
                width={{ base: "full" }}
                bg={fixedNavBg}
                zIndex={"sticky"}
                top={0}
              >
                <Stack align={aligNav}>
                  <Link2 to={"/"}>
                    <Image
                      src={SwitchLogo}
                      alt="Logo"
                      mt={{ base: 2 }}
                      boxSize={{ base: 20 }}
                      mb={2}
                    />
                  </Link2>
                </Stack>
                <Flex
                  // Aca el menú de opciones
                  // Here the option menu
                  display={{ base: "none", md: "flex" }}
                  top={{ md: -165 }}
                  pos={"absolute"}
                  left={44}
                >
                  <Flex
                    //Este Flex renderiza solo en vista de móviles
                    // This Flex renderize only mobile display
                    flex={{ base: 1, md: "auto" }}
                    display={{ base: "flex", md: "none" }}
                  >
                    <IconButton
                      onClick={onToggle}
                      icon={
                        isOpen ? (
                          <CloseIcon w={3} h={3} mt={96} ml={96} />
                        ) : (
                          <HamburgerIcon w={5} h={5} mt={96} ml={96} />
                        )
                      }
                      variant={"ghost"}
                      aria-label={"Toggle Navigation"}
                    />
                    {isOpen && <MobileMenu />}
                  </Flex>

                  <DesktopMenu fontSize={"xs"} ml={{ md: 16, xl: 10 }} />
                  <NavIcons mt={{ md: 48 }} ml={{ md: 1, lg: 52 }} />
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
                color={colorFlex}
                ref={ref}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={borderColorFlex}
                align={"center"}
              >
                <Flex
                  //Este Flex renderiza solo en vista de móviles
                  // This Flex renderize only mobile display
                  flex={{ base: 1, md: "auto" }}
                  display={{ base: "flex", md: "none" }}
                >
                  <IconButton
                    onClick={onToggle}
                    icon={
                      isOpen ? (
                        <CloseIcon w={3} h={3} />
                      ) : (
                        <HamburgerIcon w={5} h={5} />
                      )
                    }
                    variant={"ghost"}
                    aria-label={"Toggle Navigation"}
                  />
                  {isOpen && <MobileMenu />}
                </Flex>

                <Flex
                  // Este Flex despliega el Navbar
                  // This "Flex" displays the Navbar
                  flex={{ base: 1 }}
                  justify={{ base: "center", md: "start" }}
                >
                  <Box
                    position="relative"
                    top={4}
                    left={{ md: 5, lg: 10, xl: 20 }}
                  >
                    <Link2 to={"/"}>
                      <Image
                        src={SwitchLogo}
                        alt="Logo"
                        boxSize={{ base: 24 }}
                        mb={{ base: 16 }}
                      />
                    </Link2>
                  </Box>
                  <Flex
                    // Aca el menu de opciones
                    // Here the option menu
                    display={{ base: "none", md: "flex" }}
                    top={{ base: -50, md: -130 }}
                    pos={"relative"}
                    left={{ md: 28 }}
                  >
                    <DesktopMenu mr={{ lg: 24, xl: 16, "2xl": 36 }} />
                  </Flex>
                </Flex>
                <NavIcons
                  mt={{ lg: 5 }}
                  // Aca los íconos de la barra de navegación
                  // here the navbar icons
                />
              </Flex>
            </ScaleFade>
          </Box>
        )}
      </InView>
    </Box>
  );
});

export default NavAnimation;
