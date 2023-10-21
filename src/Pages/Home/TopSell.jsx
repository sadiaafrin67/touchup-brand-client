import { useEffect, useState } from "react";
import TopCard from "./TopCard";


const TopSell = () => {

    const [sell, setSell] = useState([])

    useEffect(() => {
        fetch('/top.json')
            .then(res => {console.log(res); return res.json()})
            .then(data => {
                setSell(data)
            })
    }, [])

    return (
        <div>
            <div>
            <h2 className="lg:text-3xl md:text-2xl text-xl mt-10 mb-5 text-center font-bold">
        Our <span className="text-[#EC6F66]">Top</span> Selling Products
      </h2>
      <p className="text-center text-xs lg:text-base font-medium px-2  lg:px-6 mb-10 text-gray-500">Those are our top selling products and are loved by our customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                sell?.map(products => <TopCard key={products.id} products={products}></TopCard>)
            }
            </div>
        </div>
    );
};

export default TopSell;