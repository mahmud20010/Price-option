import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
   

      <li className="hover:bg-slate-200 p-3 transition-colors rounded text-center">
        <a href={route.path}>{route.name}</a>
      </li>
 
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
