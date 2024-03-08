import { useNavigation } from "react-router-dom";
import { Spinner } from "./spinner";
import LandingPage from "./containers/LandingPage";
import { Box } from "@chakra-ui/react";

export function Root() {
  const { state } = useNavigation();
  return (
    <>
      <Box>
        {state !== "idle" && <Spinner />}
        <LandingPage />
      </Box>
    </>
  );
}
