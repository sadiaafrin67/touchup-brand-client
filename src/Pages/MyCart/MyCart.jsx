import { useEffect, useState } from "react";
import Cart from "./Cart";


const MyCart = () => {

    const [products, setProducts] = useState([])
    const [items, setItems] = useState(products)

    useEffect(() => {
        fetch('http://localhost:5000/cardInfo')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
        })  
    }, [])


    return (
        <div>
            <div className="grid my-20 mx-auto grid-cols-1 md:grid-cols-2  gap-4">
                {
                    products.map(product => <Cart key={product._id} items={items}
                        setItems={setItems} product={product}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;