import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
const PricingFeature = ({ feature }) => {
    return (<p className='flex mt-2'><FaCircleCheck className='mr-2'></FaCircleCheck>{feature}</p>)
};

export default PricingFeature;