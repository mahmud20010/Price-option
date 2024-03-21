import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { id, name, features, price } = option;
  return (
    <div className="bg-slate-700 rounded-lg p-4 text-red-200 text-center space-y-4">
      <h1>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl">/Month</span>
      </h1>
      <h1 className="text-3xl">{name}</h1>
      <div className="pl-6">
        {features.map((feature, indx) => (
          <Feature key={indx} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-gray-500 mb-0 p-2 rounded hover:bg-slate-50 hover:text-black transition-all duration-500">Buy now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
