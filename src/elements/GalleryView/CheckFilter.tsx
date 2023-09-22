

import React from "react"
import { Checkbox, Stack } from "@chakra-ui/react"




export default function CheckFilter() {
  const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  // const colorMode1 = useColorModeValue('gray.800', 'white')



  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}

        // color={colorMode1}
        // iconColor={colorMode1}

      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1} >
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          // colorScheme={colorMode1}
          // color={colorMode1}
          // iconColor={colorMode1}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          // colorScheme={colorMode1}
          // color={colorMode1}
          // iconColor={colorMode1}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  )
}
