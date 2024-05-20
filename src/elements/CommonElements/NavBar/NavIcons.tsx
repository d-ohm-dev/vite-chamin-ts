import userImg from "../../../assets/icons/usuario3.png";
import userImgInv from "../../../assets/icons/usuario3inv.png";
import shoppingCart from "../../../assets/icons/Copia de carrito-de-compras.png";
import shoppingCartInv from "../../../assets/icons/Copia de carrito-de-comprasNew.png";
import {
  Box,
  Image,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as Link2 } from "react-router-dom";
/**
 *
 * @param param0
 * @returns Navbar icons
 */
export function NavIcons({ ...props }) {
  const SwitchCart = useColorModeValue(shoppingCart, shoppingCartInv);
  const SwitchUser = useColorModeValue(userImg, userImgInv);
  const popoverBgColor = useColorModeValue(
    "rgba(137, 200, 250, 0.95 )",
    "rgba(20, 30, 77, 0.95)"
  );
  const linkHoverColor = useColorModeValue(
    "gray.800",
    "rgba(137, 200, 250, 0.95 )"
  );

  return (
    <>
      <Stack
        // Acá renderizamos los iconos de usuario y carrito
        // Here we render the user and shopping cart icons
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        spacing={0}
        position={"relative"}
        left={{ md: 10, lg: 0 }}
        {...props}
      >
        <Box w={{ md: 9, lg: 9 }} mb={{ md: 8, lg: 10 }}>
          <Popover
            trigger={"hover"}
            placement={"bottom-end"}
            // este Popover renderiza el submenu desplegado por cada ícono
            // this Popover renderize the submenu icons displayed by every icon
          >
            <Box>
              <Link>
                <PopoverTrigger>
                  <Image
                    display={{ base: "none", md: "inline-flex" }}
                    src={SwitchUser}
                    alt="Login/Logon"
                    _hover={{ color: linkHoverColor }}
                  />
                </PopoverTrigger>
              </Link>
            </Box>
            <PopoverContent
              display={"run-in"}
              border={0}
              boxShadow={"lg"}
              bg={popoverBgColor}
              p={4}
              rounded={"sm"}
              minW={"2xs"}
            >
              <PopoverBody>
                <Link2 to={"/login"}>Login</Link2>
              </PopoverBody>
              <PopoverFooter>
                <Link2 to={"/register"}>Register</Link2>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Box>
        <Box w={{ base: "0", md: "8rem" }}>
          <Link2 to={"/"}>
            <Image
              display={{ base: "none", md: "inline-flex" }}
              w={"9"}
              src={SwitchCart}
              alt="Login/Logon"
            />
          </Link2>
        </Box>
      </Stack>
    </>
  );
}
