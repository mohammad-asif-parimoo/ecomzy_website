import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {

    const API_URL = "https://dummyjson.com/products";
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);

        try {
            const data = await fetch(API_URL);
            const response = await data.json();
            setItems(response.products);
        } catch (error) {
            console.log("Error occured while fetching items from the API", error);
            setItems([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <div className='w-[100vw]'>
            {
                loading ? <Spinner /> :

                    <div className='w-[85%] mx-auto mt-[8rem] mb-10 flex flex-wrap gap-6 justify-center'>
                        {
                            items.map((singleItem) => (
                                <Product key={singleItem.id} singleItem={singleItem} />
                            ))
                        }
                    </div>

            }

        </div>
    )
}

export default Home;