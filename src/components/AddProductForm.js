import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const AddProductForm = ({ onAddProduct }) => {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: '',
        category: 'electronics',
        image: 'https://via.placeholder.com/150'
    });

    const categories = [
        { label: 'Eletrônicos', value: 'electronics' },
        { label: 'Jóias', value: 'jewelery' },
        { label: 'Roupas Masculinas', value: "men's clothing" },
        { label: 'Roupas Femininas', value: "women's clothing" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({
            ...product,
            id: Math.floor(Math.random() * 10000) // ID temporário
        });
        setProduct({
            title: '',
            price: 0,
            description: '',
            category: 'electronics',
            image: 'https://via.placeholder.com/150'
        });
    };

    return ( <
        div className = "card p-fluid" >
        <
        h2 > Adicionar Novo Produto < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div className = "p-field p-grid" >
        <
        label htmlFor = "title"
        className = "p-col-12 p-md-2" > Título < /label> <
        div className = "p-col-12 p-md-10" >
        <
        InputText id = "title"
        name = "title"
        value = { product.title }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        /div>

        <
        div className = "p-field p-grid" >
        <
        label htmlFor = "price"
        className = "p-col-12 p-md-2" > Preço < /label> <
        div className = "p-col-12 p-md-10" >
        <
        InputNumber id = "price"
        name = "price"
        value = { product.price }
        onValueChange = {
            (e) => setProduct(prev => ({...prev, price: e.value })) }
        mode = "currency"
        currency = "USD"
        locale = "en-US"
        required /
        >
        <
        /div> <
        /div>

        <
        div className = "p-field p-grid" >
        <
        label htmlFor = "description"
        className = "p-col-12 p-md-2" > Descrição < /label> <
        div className = "p-col-12 p-md-10" >
        <
        InputText id = "description"
        name = "description"
        value = { product.description }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        /div>

        <
        div className = "p-field p-grid" >
        <
        label htmlFor = "category"
        className = "p-col-12 p-md-2" > Categoria < /label> <
        div className = "p-col-12 p-md-10" >
        <
        Dropdown id = "category"
        name = "category"
        options = { categories }
        value = { product.category }
        onChange = {
            (e) => setProduct(prev => ({...prev, category: e.value })) }
        optionLabel = "label"
        placeholder = "Selecione uma categoria" /
        >
        <
        /div> <
        /div>

        <
        div className = "p-field p-grid" >
        <
        label htmlFor = "image"
        className = "p-col-12 p-md-2" > URL da Imagem < /label> <
        div className = "p-col-12 p-md-10" >
        <
        InputText id = "image"
        name = "image"
        value = { product.image }
        onChange = { handleChange }
        /> <
        /div> <
        /div>

        <
        Button label = "Adicionar Produto"
        icon = "pi pi-plus"
        type = "submit"
        className = "p-mt-2" /
        >
        <
        /form> <
        /div>
    );
};

export default AddProductForm;