import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const products = useLoaderData()
    console.log(products)

    const { id } = useParams();
    console.log(id)

    const { name, brand, category} = products

    

    

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Details;