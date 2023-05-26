import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import BlogPDF from './BlogPDF';
import { HiDownload } from "react-icons/hi";
import LoadSpinner from '../shared/LoadSpinner/LoadSpinner';

const Blog = () => {
    const bannerStyle = {
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to bottom, rgb(0 0 0 / 48%), rgb(0 0 0 / 48%)), url(/images/blog_bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <section style={bannerStyle} className='pt-[5rem] text-black md:min-h-screen'>
            <div className="container py-20">
                <div className='text-right mb-5'>
                    <PDFDownloadLink document={<BlogPDF />} fileName='blog' >
                        {({ loading }) => (loading ? <LoadSpinner /> : <button className="btn btn-primary border-none bg-primary bg-opacity-25"><HiDownload className='text-2xl' /> Download PDF</button>)}
                    </PDFDownloadLink>
                </div>
                <div className='text-center text-white max-w-xl mb-10 mx-auto'>
                    <h3 className=' text-2xl mb-3'>Questions <span className='text-3xl font-bold text-primary'>A</span>ns</h3>
                    <p>The answer to some beautiful questions</p>
                </div>
                <div className=" text-white">
                    <div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-xl font-medium">
                                What is the difference between uncontrolled and controlled components?
                            </div>
                            <div className="collapse-content">
                                <p className='p-5'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-xl font-medium">
                                How to validate React props using PropTypes?
                            </div>
                            <div className="collapse-content">
                                <p>Import the PropTypes library in your component using import PropTypes from prop-types; Then Define the expected data types for your props using the propTypes object inside your component. Specify the data type for each prop using PropTypes, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. Must be Assign the propTypes object to your component using the MyComponent.propTypes syntax.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-xl font-medium">
                                What is the difference between nodejs and express js.?
                            </div>
                            <div className="collapse-content">
                                <p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-xl font-medium">
                                What is a custom hook, and why will you create a custom hook?
                            </div>
                            <div className="collapse-content">
                                <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;