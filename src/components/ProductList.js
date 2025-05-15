import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataView } from 'primereact/dataview';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        // Aqui você pode implementar a lógica para adicionar ao carrinho
        alert(`Produto "${product.title}" adicionado ao carrinho!`);
    };

    const itemTemplate = (product) => {
        return ( <
            ProductCard product = { product }
            onAddToCart = { handleAddToCart }
            />
        );
    };

    return ( <
        div className = "card" >
        <
        h2 > Produtos Disponíveis < /h2> {
            loading ? ( <
                p > Carregando produtos... < /p>
            ) : ( <
                DataView value = { products }
                itemTemplate = { itemTemplate }
                layout = "grid"
                paginator rows = { 9 }
                />
            )
        } <
        /div>
    );
};

export default ProductList;