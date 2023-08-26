import React, { useState } from 'react';
import logo from '../assets/images/YLE-logo.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BiExpandVertical } from 'react-icons/bi';
import { PiVideoFill,PiNewspaperClippingBold } from 'react-icons/pi';
import { MdOutlineQuiz } from 'react-icons/md';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CourseReview from '../components/CourseReview/CourseReview';
import ReactPlayer from 'react-player';

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
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const EnrolledCourse = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
                <div className='text-3xl capitalize font-semibold'>user Experience Design essentials - Adobe XD UI UX Design</div>
                <div className='w-full flex gap-4 xs:flex-col-reverse xs:mx-2 sm:flex-col-reverse sm:mx-2 md:flex-col-reverse md:mx-2'>
                    <div className='w-[60%] xs:w-full sm:w-full md:w-full flex flex-col gap-8'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=9wW9E6TNoVA' controls={true} width="100%"/>
                        <Box sx={{ width: '100%' }} className='w-full'>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%" }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="About" {...a11yProps(0)}/>
                                <Tab label="Notes" {...a11yProps(1)}/>
                                <Tab label="Discussions" {...a11yProps(2)}/>
                            </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <div className='flex justify-around items-start gap-8 flex-col'>
                                    <div>
                                        <div className="text-4xl font-['Jost'] font-semibold py-4">About this course</div>
                                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-['Jost'] font-semibold py-4">What will you learn from course</div>
                                        <div>Lorem Ipsum is simply dummy text of the printing :
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book
                                        </div>
                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                        <form action="">
                                            <textarea name="" id="" cols="30" rows="4" className='w-full border-2 border-[#ABABAB] p-4' placeholder='write what you want'></textarea>
                                            <div className='my-3 flex justify-center rounded-md items-center py-2 bg-[#EF9204] text-white text-lg font-medium uppercase'>
                                                <div>Save</div>
                                            </div>
                                        </form>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <div className='flex flex-col gap-y-8'>
                                    <CourseReview />
                                    <CourseReview />
                                    <CourseReview />
                                    <CourseReview />
                                    <CourseReview />
                                    <CourseReview />
                                    <div>
                                        <div className='text-[#B7B7B7] p-1 py-2'>write what you want</div>
                                        <form action="">
                                            <textarea name="" id="" cols="30" rows="10" className='w-full border-2 border-[#ABABAB] p-4' placeholder='write what you want'></textarea>
                                            <div className='my-3 flex justify-center rounded-md items-center py-2 bg-[#EF9204] text-white text-lg font-medium uppercase'>
                                                <div>Send</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </CustomTabPanel>
                        </Box>
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

export default EnrolledCourse;
