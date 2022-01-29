import { useParams } from "react-router-dom";

const Details = ()=>{
    const {currCode} = useParams();
    return(
        <div>
            <h1>details</h1>
            <h2>{currCode}</h2>
        </div>
    )
}
export default Details;