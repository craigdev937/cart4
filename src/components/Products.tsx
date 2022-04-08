import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { add } from "../global/CartSlice";
import { fetchProd } from "../global/ProdSlice";
import { IProd } from "../types/Interfaces";

export const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { loading, error, products } = 
    useAppSelector((state) => state.products);

    React.useEffect(() => {
        dispatch(fetchProd());
    }, []);

    const handleAdd = (product: IProd) => {
        dispatch(add(product));
    };

    if (error) return <h1>Error...</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <main className="products-wrapper">
            {products.map((product) => (
                <main className="card" key={product.id}>
                    <img 
                        alt={product.title}
                        src={product.image}
                    />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button 
                        className="btn"
                        onClick={() => handleAdd(product)}
                        >Add to cart
                    </button>
                </main>
            ))}
        </main>
    );
};



