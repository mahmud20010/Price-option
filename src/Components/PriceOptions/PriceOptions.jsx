import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room",
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Extended gym hours",
        "Group fitness classes",
        "Access to locker room",
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: "Platinum Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "24/7 gym access",
        "Personal training sessions",
        "Access to sauna and spa",
        "Access to locker room",
        "Towel service",
      ],
      price: 80.0,
    },
  ];

  return (
    <div className="m-12">
      <div className="flex justify-center mx-auto text-5xl text-center mb-5 md:bg-none bg-slate-500 text-orange-200 rounded-md max-w-xl p-12">
      <h1>Best Price in The Town</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {priceOptions.map((option, indx) => (
          <PriceOption key={indx} option={option}></PriceOption>
        ))}
      
      </div>
    </div>
  );
};

export default PriceOptions;
