import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ProductCard = ({ product, onAddToCart }) => {
    const header = ( <
        img alt = { product.title }
        src = { product.image }
        style = {
            { height: '200px', objectFit: 'contain' } }
        />
    );

    const footer = ( <
        Button label = "Adicionar ao Carrinho"
        icon = "pi pi-cart-plus"
        onClick = {
            () => onAddToCart(product) }
        />
    );

    return ( <
        div className = "p-col-12 p-md-4 p-lg-3" >
        <
        Card title = { product.title }
        subTitle = { `$${product.price}` }
        style = {
            { width: '100%', height: '100%' } }
        header = { header }
        footer = { footer } >
        <
        p className = "p-m-0" > { product.description } < /p> <
        p className = "p-mt-2" >
        <
        small > Categoria: { product.category } < /small> <
        /p> <
        /Card> <
        /div>
    );
};

export default ProductCard;