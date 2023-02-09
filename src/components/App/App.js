
import Homepage from "../../pages/Homepage";
import Productpage from "../../pages/Productpage";
import "./App.css";

import { useState } from "react"

import {Routes, Route} from "react-router-dom"

const App = () =>{
    const [productList, setProductList] = useState([])
    const [productsCart, setProductsCart] = useState([])

    const cardClicked = (type) =>{
        setProductList(type)
    }

    const addToCart = (item) =>{
        let oldState = [...productsCart];
        oldState.push(item)
        let newState = oldState
        setProductsCart(newState)
    }

    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage cart={productsCart} cardClicked={cardClicked}/>}></Route>
            <Route path="/product/:type" element={<Productpage cart={productsCart} addtoCart={addToCart} products={productList}/>}></Route>
        </Routes>
        </>
    )
}

export default App;