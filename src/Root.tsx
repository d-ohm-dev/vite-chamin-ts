import { Outlet, useNavigation } from "react-router-dom"
import { Spinner } from "./spinner"
import Frontpage from "./containers/Frontpage"
import { Box } from "@chakra-ui/react"

export function Root() {
  const {state} = useNavigation()
  return (
    <Box>
      {state !== "idle" && <Spinner/>}
      <Frontpage/>
      <Outlet/>
    </Box>
      
    
  )
} 