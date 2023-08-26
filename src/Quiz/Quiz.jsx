import React from 'react';
import logo from '../assets/images/YLE-logo.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BiExpandVertical } from 'react-icons/bi';
import { PiVideoFill,PiNewspaperClippingBold } from 'react-icons/pi';
import { MdOutlineQuiz } from 'react-icons/md';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  


const Quiz = () => {
  return (
    <div>
      <header>
        <div className='m-auto max-w-[1280px] py-4'> 
            <div className='flex justify-between items-center xs:mx-4 sm:mx-4 md:mx-4'>
                <div>
                    <img src={logo} alt="Yle Logo" srcset="" className='xs:w-1/2 sm:w-1/2 md:w-3/4'/>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-[#D9D9D9]'></div>
                    <div className=''>Your Progress</div>
                </div>
            </div>
        </div>
      </header>
      <div className='my-8'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex flex-col gap-8'>
                <div className='text-3xl capitalize font-semibold'>User experience design testing</div>
                <div className='w-full flex gap-4 xs:flex-col-reverse xs:mx-2 sm:flex-col-reverse sm:mx-2 md:flex-col-reverse md:mx-2'>
                    <div className='w-[60%] xs:w-full sm:w-full md:w-full flex flex-col gap-8'>
                    </div>
                    <div className='w-[40%] xs:w-full sm:w-full md:w-full'>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<BiExpandVertical />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Section 1: Introduction</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">1 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiVideoFill /> <div>2 Min</div></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">2 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiNewspaperClippingBold /></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">3 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><MdOutlineQuiz /></div>
                                    </div>
                                </div>

                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<BiExpandVertical />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Section 2: What is UI UX</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">1 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiVideoFill /> <div>2 Min</div></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">2 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiNewspaperClippingBold /></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">3 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><MdOutlineQuiz /></div>
                                    </div>
                                </div>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<BiExpandVertical />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            >
                            <Typography>Section 3: Why Learning UI</Typography>
                            </AccordionSummary>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<BiExpandVertical />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Section 4: Why Learning UX</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">1 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiVideoFill /> <div>2 Min</div></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">2 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiNewspaperClippingBold /></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">3 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><MdOutlineQuiz /></div>
                                    </div>
                                </div>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<BiExpandVertical />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Section 5: Why Learning UX</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">1 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiVideoFill /> <div>2 Min</div></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">2 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><PiNewspaperClippingBold /></div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <form action="" className='flex gap-3 items-center'>
                                            <input type="checkbox" name="What is User Experience Design?" id="" />
                                            <label htmlFor="">3 - What is User Experience Design ?</label>
                                        </form>
                                        <div className='flex gap-2 items-center'><MdOutlineQuiz /></div>
                                    </div>
                                </div>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<BiExpandVertical />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Section 6: Why Learning UX</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
