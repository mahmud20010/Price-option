import PropTypes from 'prop-types' 
import { RiCheckDoubleLine } from "react-icons/ri";

const Feature = ({feature}) => {
    return (
        <div>
           <p className='flex items-center gap-2'><RiCheckDoubleLine /> {feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;