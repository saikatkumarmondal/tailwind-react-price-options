import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
  return (
    <div className="flex flex-col border border-white bg-amber-600 rounded-2xl p-4">
      {/* Card Header */}
      <div>
        <h1 className="text-5xl">{pricing.title}</h1>
        <h3 className="text-2xl">${pricing.price}</h3>
      </div>
      {/* Card Body */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-3 flex-1">
        <p>{pricing.description}</p>
        {pricing.features.map((feature, index) => (
          <PricingFeature feature={feature} key={index}></PricingFeature>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;