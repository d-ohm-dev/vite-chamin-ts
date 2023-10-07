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

/**
 * 
 * @param param0 label: List
 * @returns label type List
 * El Checbox retorna solo el label
 */
export function CheckFilter({label}: List) {

  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')

  return (

    <Stack pl={6} mt={1} spacing={1} >
       <Checkbox
          border={colorMode1}
          colorScheme="red"
        >
          {label}
        </Checkbox>

        </Stack>    
  )
}

/**
 * Recorro el LIST_ITEM y devuelvo CheckFilter con parametro Key={child.label}, luego el children desestructurado {...child}
 * @returns LIST_ITEM
 */
export default function FilterGallery () {


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
                    {data.children?.map((child) => (
                    <AccordionPanel pb={4}>
                      <CheckFilter key={child.label} {...child} />
                    </AccordionPanel>
                    ))

                    }

            </>
          )
          }
     
        </AccordionItem>
      ))
    }

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