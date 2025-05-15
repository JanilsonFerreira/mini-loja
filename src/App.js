import React, { useState } from 'react';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const toastRef = React.useRef(null);

    const handleAddProduct = (newProduct) => {
        setProducts(prev => [newProduct, ...prev]);
        if (toastRef.current) {
            toastRef.current.show({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Produto adicionado com sucesso!',
                life: 3000
            });
        }
    };

    const leftToolbarTemplate = () => ( <
        h1 > Mini Loja Virtual < /h1>
    );

    return ( <
        div className = "App" >
        <
        Toast ref = { toastRef }
        /> <
        Toolbar left = { leftToolbarTemplate }
        />

        <
        div className = "p-grid p-m-2" >
        <
        div className = "p-col-12 p-md-8" >
        <
        ProductList / >
        <
        /div> <
        div className = "p-col-12 p-md-4" >
        <
        AddProductForm onAddProduct = { handleAddProduct }
        /> <
        /div> <
        /div> <
        /div>
    );
}

export default App;