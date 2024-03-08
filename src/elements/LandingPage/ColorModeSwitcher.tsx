import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ColorModeSwitcher = ({ ...props }) => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const location = useLocation();

  //Con "location.pathname" me dirijo a la misma ruta en la que estoy,
  // conservo el mismo path al reiniciar con "reloadDocument"
  return (
    <Link to={`${location.pathname}`} reloadDocument>
      <IconButton
        autoFocus
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${mode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Link>
  );
};

export default ColorModeSwitcher;
