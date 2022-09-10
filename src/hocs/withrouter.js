
import {useNavigate} from "react-router-dom";
export const withRaouter = (Component) =>{
    const wrapper = () =>{
       
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigat = useNavigate();
      return <Component  navigat = {navigat} />
    };
    return wrapper;
};