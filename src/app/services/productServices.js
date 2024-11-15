// services/productService.js
import axios from 'axios';

export const fetchProducts = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    return response.json;

};
