import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { 
  Accordion, 
  AccordionButton, 
  AccordionItem,
  AccordionPanel,
  Box,
  List
} from "@chakra-ui/react";
import { 
  Checkbox, 
  Stack, 
  useColorModeValue 
} from "@chakra-ui/react"
// import { useState } from "react";
// import CheckFilter from "./CheckFilter";

//  function listCicle() {
  // function listCicle() {
  // LIST_ITEMS.map((navList)=>{

  //   // if (data.label === label) {
      
  //   // }
  //     // return  console.log(typeof {child})
  //     return console.log(child)


  // })
  // }



export function CheckFilter({label}: List) {
  // const [checkedItems, setCheckedItems] = useState([false, false])

  // const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')

  return (
      
        // LIST_ITEMS.map(({label}: List, i)=>{
          // return (
      //       {/* <Checkbox
      //   isChecked={allChecked}
      //   isIndeterminate={isIndeterminate}
      //   onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      //   border={colorMode1}
      //   colorScheme="red"
      // >
      // {label}
      // </Checkbox> */}
      
        
    // LIST_ITEMS.map((item, i)=>(
    <Stack pl={6} mt={1} spacing={1} >
       <Checkbox
          // isChecked={checkedItems[0]}
          // onChange={(e) => setCheckedItems([e.target.checked, checkedItems[i]])}
          border={colorMode1}
          colorScheme="red"
          // key={i}
        >
          {label}
        </Checkbox>

        </Stack>
  //  ))  
      
          // )
        

    
  )
}


export default function FilterGallery () {

  // const [checkedItems, setCheckedItems] = useState([false, false])

  // const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <Accordion allowMultiple boxSize={[
      "100%", // 0-30em
      "100%", // 30em-48em
      "100%", // 48em-62em
      "25%", // 62em+
    ]} 
   >
    {
      LIST_ITEMS.map((data, i)=> (
        <AccordionItem key={i} >
        {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' >
                    {[data.label]}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
                    {data.children?.map((child, c) => (
                    <AccordionPanel pb={4}>
                      <CheckFilter key={child.label[c]} {...child} />
                    </AccordionPanel>
                    ))

                    }
              {/* <AccordionPanel pb={4}>
                  { data.label == 'Mascotas' ?
                  <Stack pl={6} mt={1} spacing={1} >                 
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                    border={colorMode1}
                    colorScheme="red"
                    key={i}
                  > 
                  {data.children?.map(x => x.label[i])}
                </Checkbox>
                <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                border={colorMode1}
                colorScheme="red"
                key={i}
              > 
              {data.children?.map(x => x.label[i])}
            </Checkbox>
            </Stack>
                : 'Error1'
                }
                {
                  data.label == "Etapa de vida" ? 
                  <Checkbox
                  isChecked={checkedItems[1]}
                  onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                  border={colorMode1}
                  colorScheme="red"
                  key={data.label}
                >
                  {data.children?.map((x) => x.label)}
                </Checkbox>
                :
                'Error2'
                }
                {
                  data.label == "Talla" ? 
                  <Checkbox
                  isChecked={checkedItems[1]}
                  onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                  border={colorMode1}
                  colorScheme="red"
                  key={i}
                >
                  {data.children?.map((x,l) => x.label[l])}
                </Checkbox>
                :
                'Error2'
                }
                

              </AccordionPanel> */}
            </>
          )
          }
     
        </AccordionItem>
      ))
    }
    {/* <AccordionItem >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton >
              <Box as="span" flex='1' textAlign='left'  >
                Mascota
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
                <AddIcon fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
              <CheckFilter/>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Etapa de vida
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
                <AddIcon fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckFilter/>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Talla
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
                <AddIcon fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CheckFilter/>
          </AccordionPanel>
        </>
      )}
    </AccordionItem> */}
  </Accordion>
  )
}

const LIST_ITEMS: Array<List> = [
  {
    label: "Mascotas",
    children: [
      {
        label: 'Perro',
      },
      {
        label: 'Gato'
      }

    ]

  },
  { 
    label: 'Etapa de vida',
    children: [
      {
        label:'Cachorro'
      },
      {
        label: 'Adulto'
      },
      {
        label: 'Senior'
      }
    ]
  },
  {
    label: 'Talla',
    children: [
      {
        label:"Muy Grande"
      },
      {
        label:"Grande"
      },
      {
        label:"Mediano"
      },
      {
        label:"Pequeño"
      },
      {
        label:"Muy Pequeño"
      }
    ]
  
  }
 ]

 interface List {
  label: string;
  children?: Array<List>;
}