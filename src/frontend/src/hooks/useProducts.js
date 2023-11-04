import { useEffect, useState } from "react";
import { productService } from "../service/products";

export function useProducts(productId) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await productService.getProducts();
            setProducts(data);
        };

        const getSingleProduct = async () => {
            const data = await productService.getSingleClient(productId);
            setProducts([data]);
        };
        if (!productId) {
            getProducts();
            return;
        }

        getSingleProduct();
    }, [productId]);

    return {
        products,
        setProducts,
    };
}