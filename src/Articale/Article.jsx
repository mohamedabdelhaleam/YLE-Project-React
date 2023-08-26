import React from 'react';
import logo from '../assets/images/YLE-logo.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BiExpandVertical } from 'react-icons/bi';
import { PiVideoFill,PiNewspaperClippingBold } from 'react-icons/pi';
import { MdOutlineQuiz } from 'react-icons/md';
import articleImg from "../assets/images/Publish-article-bro1.png"
import instrImg from "../assets/images/hazem.png"
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
  


const Article = () => {
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
            <div>
                <div className='w-full flex gap-4 xs:flex-col-reverse xs:mx-2 sm:flex-col-reverse sm:mx-2 md:flex-col-reverse md:mx-2'>
                    <div className='w-[60%] xs:w-full sm:w-full md:w-full flex flex-col gap-8'>
                        <div className='w-full h-52 rounded-tl-[120px] rounded-br-[120px] bg-[#FF742626] flex justify-evenly px-8 items-center'>
                            <div className='w-3/4 flex flex-col gap-6'> 
                                <div className='text-3xl font-semibold'>Article: What is the cool new modern design?</div>
                                <div className='flex gap-2 items-center font-medium'>
                                    <img src={instrImg} alt="" className='h-8 rounded-full'/>
                                    <div>Mohamed Hazem</div>
                                </div>
                            </div>
                            <div className='w-1/4'>
                                <img src={articleImg} alt="" className='h-48' srcset="" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 pr-8'>
                            <div className='flex flex-col gap-4'>
                                <div className='text-2xl font-semibold'>Profit in bear and bull markets</div>
                                <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='text-2xl font-semibold'>Ways to profit in bear markets</div>
                                <div>
                                    <div className="text-lg font-medium">1. Short positions</div>
                                    <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                                </div>
                                <div>
                                    <div className="text-lg font-medium">2. Set options</div>
                                    <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                                </div>
                                <div>
                                    <div className="text-lg font-medium">3. Short ETFs</div>
                                    <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='text-2xl font-semibold'>Ways to profit in bear markets</div>
                                <div>
                                    <div className="text-lg font-medium">1. Short positions</div>
                                    <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                                </div>
                                <div>
                                    <div className="text-lg font-medium">2. Set options</div>
                                    <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                                </div>
                                <div>
                                    <div className="text-lg font-medium">3. Short ETFs</div>
                                    <div>Both bear markets and bull markets are huge money-making opportunities, and the key to success is using strategies and ideas that can generate profits under a variety of circumstances. This requires consistency, discipline, focus and the ability to capitalize on fear and greed. This article will help introduce you to investments that can thrive in a bull or bear market. A bear market is defined as a decrease of 20% or more in the average market. In general, bear markets occur during recessions or depressions, when pessimism prevails. But amidst the ruins lie money-making opportunities for those who know how to use the right tools. Here are some ways to profit in bear markets</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[40%] xs:w-full sm:w-full md:w-full mt-28'>
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

export default Article;
