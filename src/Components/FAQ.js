import { Accordion, Box, AccordionSummary , Typography, AccordionDetails} from '@mui/material'
import React from 'react'
import Header from './Header'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const FAQ = () => {
  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page"/>
      <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h5'>Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h5'>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h5'>Question 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h5'>Question 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h5'>Question 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  )
}

export default FAQ