

import React from "react"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 671f686... mojoras checkbox
import { Checkbox, 
  Stack, 
  useColorModeValue 
} from "@chakra-ui/react"
<<<<<<< HEAD
=======
import { Checkbox, Stack } from "@chakra-ui/react"
=======
>>>>>>> 671f686... mojoras checkbox

>>>>>>> af8adc3... mojoras ui filtro



export default function CheckFilter() {
  const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
<<<<<<< HEAD
<<<<<<< HEAD
  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')
=======
  // const colorMode1 = useColorModeValue('gray.800', 'white')
=======
  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')
>>>>>>> 671f686... mojoras checkbox

>>>>>>> af8adc3... mojoras ui filtro


  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
<<<<<<< HEAD
        border={colorMode1}
        colorScheme="red"
=======

        border={colorMode1}

>>>>>>> af8adc3... mojoras ui filtro
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1} >
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
<<<<<<< HEAD
<<<<<<< HEAD
          border={colorMode1}
          colorScheme="red"
=======
          // colorScheme={colorMode1}
          // color={colorMode1}
          // iconColor={colorMode1}
>>>>>>> af8adc3... mojoras ui filtro
=======
          border={colorMode1}
>>>>>>> 671f686... mojoras checkbox
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
<<<<<<< HEAD
<<<<<<< HEAD
          border={colorMode1}
          colorScheme="red"
=======
          // colorScheme={colorMode1}
          // color={colorMode1}
          // iconColor={colorMode1}
>>>>>>> af8adc3... mojoras ui filtro
=======
          border={colorMode1}
>>>>>>> 671f686... mojoras checkbox
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  )
}
