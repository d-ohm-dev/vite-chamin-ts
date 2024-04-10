import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "../LandingPage/ColorModeSwitcher";
import NavAnimation from "./NavAnimation";

/**
 * @function default component
 * @param
 * @returns the Navbar main component
 */
export default function Navbar() {
  const { isOpen } = useDisclosure();

  return (
    <Box top={0}>
      <ColorModeSwitcher float={"inline-end"} />
      <NavAnimation />
      <Collapse in={isOpen} animateOpacity>
        <MobileMenu />
      </Collapse>
    </Box>
  );
}

/**
 *
 * @param param0
 * @returns Desktop view menu
 */
export const DesktopMenu = ({ ...props }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue(
    "gray.800",
    "rgba(137, 200, 250, 0.95 )"
  );
  const popoverContentBgColor = useColorModeValue(
    "rgba(137, 200, 250, 0.95 )",
    "gray.800"
  );

  return (
    <Stack
      direction={"row"}
      spacing={{ base: 0, md: 4, lg: 18, xl: 20 }}
      ml={{ base: 0, md: 5, lg: 18, xl: 32 }}
    >
      {
        // Recorremos el Array navItem declarado mas abajo para devolver por pantalla de escritorio sus valores
        // iteration through navItem array declared at the end to returns on desktop display it values
        NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover
              trigger={"hover"}
              placement={"bottom-start"}
              // Animación Popover de Chakra UI
              // Chakra UI Popover animation
            >
              <PopoverTrigger>
                <Box position={"relative"} top={44} right={{ md: 16, lg: 0 }}>
                  <Link
                    href={navItem.href ?? "#"}
                    _hover={{
                      color: linkHoverColor,
                    }}
                    {...props}
                  >
                    <Text
                      letterSpacing={{ md: "wide", lg: "tighter" }}
                      fontSize={{ base: 12, md: 14, lg: 16 }}
                      color={linkColor}
                    >
                      {navItem.label}
                    </Text>
                  </Link>
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  // p={8}
                  alignItems={"center"}
                  rounded={"xl"}
                  // minW={'s'}
                >
                  <Stack alignItems={"center"}>
                    {navItem.children.map((child) => (
                      <DesktopSubmenu key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))
      }
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
      role={"group"}
      display={"block"}
      // p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

/**
 *
 * @returns Mobile view navbar
 */
export const MobileMenu = () => {
  return (
    <Stack
      bg={useColorModeValue("rgba(137, 200, 250, 0.95 )", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {
        // Recorremos el Array navItem declarado mas abajo para devolver por pantallas de móviles sus valores
        // iteration through navItem array declared at the end to returns on mobile display it values
        NAV_ITEMS.map((navItem) => (
          <MobileSubmenu key={navItem.label} {...navItem} />
        ))
      }
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
    <Stack onClick={children && onToggle}>
      <Flex
        // py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
        // funcionalidad Collapse de Chakra UI
        // Chakra UI Collapse functionality
      >
        <Stack
          mt={2}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
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
    label: "Alimentos",
    children: [
      {
        label: "Marcas",
        subLabel: "Tus marcas preferidas",
        href: "#",
      },
      {
        label: "Ofertas",
        subLabel: "Lo que buscabas al mejor precio",
        href: "#",
      },
    ],
  },
  {
    label: "Juguetes",
    children: [
      {
        label: "Marcas",
        subLabel: "Solo los mejores juguetes del mercado",
        href: "#",
      },
      {
        label: "Ofertas",
        subLabel: "Al alcance de tu mascota",
        href: "#",
      },
    ],
  },
  {
    label: "Acerca de nosotros",
    href: "#",
  },
  {
    label: "Contacto",
    href: "#",
  },
];

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
