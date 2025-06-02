import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ( { fetchPromise } ) => {
    const pricingData = use( fetchPromise );
    // console.log(pricingData)
    return (
      <div>
        <h2 className="text-3xl">Get Our Membership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
          {/* {pricingData.map((pricing) => (
            <PricingCard pricing={pricing} key={pricing.id}></PricingCard>
          ))} */}
          {pricingData.map((pricing) => (
            <DaisyPricing pricing={pricing} key={pricing.id}></DaisyPricing>
          ))}
        </div>
      </div>
    );
};

export default PricingOptions;