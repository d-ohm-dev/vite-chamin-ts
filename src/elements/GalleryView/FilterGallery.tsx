import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { 
  Accordion, 
  AccordionButton, 
  // AccordionIcon, 
  AccordionItem,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import CheckFilter from "./CheckFilter";



export default function FilterGallery () {
  return (
    <Accordion allowMultiple boxSize={[
      "100%", // 0-30em
      "100%", // 30em-48em
      "100%", // 48em-62em
      "25%", // 62em+
    ]} 
   >
    <AccordionItem >
    {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'  >
                Section 1 title
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
                Section 2 title
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
  </Accordion>
  )
}