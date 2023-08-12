import { Button } from 'flowbite-react';
import image from '../../assets/slider/about_11.jpg';
import '../About/About.css';

const About = () => {
    return (
        <div className='aboutMain'>
            <div className='aboutImage'>
                <img src={image} alt="" />
            </div>
            <div className='aboutOne'>
                <h4 className='text-blue-500 font-bold mb-5'>WHO WE ARE ---</h4>
                <h1 className='text-5xl font-bold mb-8'>We Can Take Your Business<br />To The <span className='text-blue-500'>Next Level.</span> </h1>
                <p className='mb-9 p-1'>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. Lorem Ipsum is<br /> simply dummy text of the printing and typesetting industry.</p>
                <div className='font-bold text-xl pb-2'>
                    <p><span className='text-blue-500'>&bull; </span>we are always ensure to give our best for our customer.</p>
                    <p><span className='text-blue-500'>&bull; </span> We give professional support by our professional.</p>
                    <p><span className='text-blue-500'>&bull; </span>Our mission is to provide quality product design.</p>
                </div>
                <div className='mt-16'>
                    <Button id="buttoncol"><span className='text-xl'>Get Started Now</span></Button>
                </div>
            </div>
        </div>
    );
};

export default About;