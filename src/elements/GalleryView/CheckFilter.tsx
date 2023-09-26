

import React from "react"
import { Checkbox, 
  Stack, 
  useColorModeValue 
} from "@chakra-ui/react"



export default function CheckFilter() {
  const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')


  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        border={colorMode1}
        colorScheme="red"
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1} >
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          border={colorMode1}
          colorScheme="red"
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          border={colorMode1}
          colorScheme="red"
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  )
}
