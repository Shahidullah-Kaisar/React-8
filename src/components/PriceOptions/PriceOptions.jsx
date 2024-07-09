import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 30.0,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "1 personal training session",
      ],
      duration: "1 month",
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50.0,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "1 personal training session",
      ],
      duration: "1 month",
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 80.0,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "3 personal training sessions",
      ],
      duration: "1 month",
    },
    {
      id: 4,
      name: "Annual Membership",
      price: 500.0,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "5 personal training sessions",
      ],
      duration: "12 months",
    },
    {
        id: 4,
        name: "Annual Membership",
        price: 500.0,
        currency: "USD",
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Unlimited group fitness classes",
          "5 personal training sessions",
          "Sauna access",
        ],
        duration: "12 months",
      },
      {
        id: 4,
        name: "Annual Membership",
        price: 500.0,
        currency: "USD",
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Unlimited group fitness classes",
          "5 personal training sessions",
        ],
        duration: "12 months",
      },
  ];

  return (
    <>
        <h1 className="text-5xl text-center text-red-600">Best Prices in the town</h1>
        <div className="grid grid-cols-3 gap-6 mt-10">
            
            {
                priceOptions.map(loop => <PriceOption key={loop.id} option={loop}></PriceOption>)
            }
        </div>
        
    </>
  );
};

export default PriceOptions;
