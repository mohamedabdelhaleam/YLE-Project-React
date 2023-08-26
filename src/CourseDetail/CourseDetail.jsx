import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Rating from '@mui/material/Rating';
import { BiTime,BiCameraMovie,BiExpandVertical } from 'react-icons/bi';
import { AiOutlineDownload } from 'react-icons/ai';
import videoImg from '../assets/images/little-girl-participating-online-classes1.jpg'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BuyCard from '../components/BuyCard/BuyCard';
import CourseReview from '../components/CourseReview/CourseReview';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiFillPlayCircle } from 'react-icons/ai';
import CourseCard from '../components/CourseCard/CourseCard';


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

const CourseDetail = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div>
      <Navbar />
      <header className='bg-[#FDF8EE] py-8 my-16'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-between items-center xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse xs:mx-4 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4'>
                <div className='w-1/2 flex justify-evenly items-start flex-col gap-2 pr-16 xs:pr-0 sm:pr-0 md:pr-0 xs:w-full sm:w-full md:w-full xs:text-center sm:text-center md:text-center lg:text-center'>
                    <div className='text-5xl font-bold capitalize lg:text-3xl xl:text-4xl xs:text-lg sm:text-lg md:text-xl'>
                        user Experience Design essentials - Adobe XD UIUX Design
                    </div>
                    <div className='text-lg font-normal text-[#606060]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
                    </div>
                    <div className='
                      xs:w-full xs:flex xs:justify-center xs:items-center
                      sm:w-full sm:flex sm:justify-center sm:items-center
                      md:w-full md:flex md:justify-center md:items-center
                    '>
                    <div className='flex justify-around items-start gap-2 
                      xs:w-[70%] xs:items-center
                      sm:w-[70%] sm:items-center
                      md:w-[70%] md:items-center
                      '>
                        <div className='text-lg font-medium text-[#606060]'>4.5</div>
                        <div> 
                            <Rating name="size-small" defaultValue={4} precision={1} size="small" className='pt-1'/>
                        </div>
                        <div className='text-lg font-medium text-[#606060]'>( 150 )</div>
                    </div>
                    </div>
                    <div className='
                      xs:w-full xs:justify-center xs:items-center
                      sm:w-full sm:justify-center sm:items-center
                      md:w-full md:justify-center md:items-center
                      '>
                    <div className='flex justify-between items-start gap-4 text-[#ACACAC] py-2 xs:items-center'>
                        <div className='flex justify-evenly items-center text-lg font-medium'><BiTime size={22} color='#606060' /><div className='px-1'>22hr 30min</div>  </div>
                        <div className='flex justify-evenly items-center text-lg font-medium'><BiCameraMovie size={22} color='#606060' /><div className='px-1'>34 Courses</div>  </div>
                        <div className='flex justify-evenly items-center text-lg font-medium'><AiOutlineDownload size={22} color='#606060' /><div className='px-1'>250 Sales</div>  </div>
                    </div>
                    </div>
                </div>
                <div className='w-1/2 xs:w-full sm:w-full md:w-full'>
                    <img src={videoImg} alt="" className='w-full rounded-md' srcset="" />
                </div>
            </div>
        </div>
      </header>
      <div>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-between items-start xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:mx-4 xl:mx-4'>
                <div className='w-[60%] xs:w-full sm:w-full md:w-full'>
                <Box sx={{ width: '100%' }} className='w-full'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%" }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="About" {...a11yProps(0)}/>
                            <Tab label="Course Review" {...a11yProps(1)}/>
                            <Tab label="Instructor" {...a11yProps(2)}/>
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
                            <div>
                                <div className="text-4xl font-['Jost'] font-semibold py-4">what’s in this course</div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<BiExpandVertical />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography>What is User Experience Design?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<BiExpandVertical />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography>Understand The meaning of UX</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<BiExpandVertical />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                        <Typography>Understand The meaning of UX</Typography>
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
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className='flex gap-y-8 flex-col'>
                          <div className='text-3xl font-semibold'>4.3 Course rating . 28 rating</div>
                          <div className='flex flex-col gap-y-8'>
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                          </div>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <div className='flex gap-y-8 flex-col'>
                          <div className='text-2xl font-semibold xs:text-xl sm:text-xl  xs:text-center sm:text-center'>About Instructor <span className="text-[#FF7426]">Mohamed Abdelhaleam</span></div>
                          <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center">
                            <div className='flex gap-8 items-center'>
                              <div className='w-28 h-28 bg-[#D9D9D9] rounded-full'></div>
                              <div className='flex gap-2 flex-col'>
                                <div className='flex gap-4'><BsFillChatQuoteFill size={25} color='#FF7426' /> <div className='text-xl font-semibold'>1,780 Reviews </div></div>
                                <div className='flex gap-4'><HiOutlineUserGroup size={25} color='#FF7426' /> <div className='text-xl font-semibold'>12,264 Students </div></div>
                                <div className='flex gap-4'><AiFillPlayCircle size={25} color='#FF7426' /> <div className='text-xl font-semibold'>7 Courses </div></div>
                              </div>
                            </div>
                          </div>
                          <div className='text-lg font-normal xs:text-center sm:text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
                          </div>
                          <div className='text-2xl font-semibold xs:text-center sm:text-center'>More Courses From instructor </div>
                          <div className='grid grid-cols-2 gap-4 gap-y-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center'>
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                          </div>
                        </div>
                    </CustomTabPanel>
                </Box>

                </div>
                <div className='
                  xs:w-full xs:flex xs:justify-center xs:items-center
                  sm:w-full sm:flex sm:justify-center sm:items-center
                  md:w-full md:flex md:justify-center md:items-center
                  lg:w-[70%] lg:flex  lg:justify-center lg:items-center
                  '>
                  <div className='
                  xs:w-[90%]
                  sm:w-[90%]
                  md:w-[90%]
                  lg:w-[90%]
                  '><BuyCard /></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
