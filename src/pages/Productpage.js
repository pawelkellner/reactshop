import "./Productpage.css";

import {useEffect} from "react"
import FilterBar from "../components/FilterBar/FilterBar";
const Productpage = (props) =>{
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    let toBeRendered = props.products.map((item, index) => {
        return( 
        <li key={index} className="productpage__listItem">
            <figure>
                <img className="product__image" src={item.image} alt={item.alt}/>
            </figure>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button onClick={()=>props.addtoCart(item)}>Add to cart</button>
        </li>
        )
    })

    return(
        <>
        <FilterBar cart={props.cart} />
        <article className="productpage">
            <ul className="productpage__list">
            {toBeRendered}
            </ul>
        </article>
        </>
    )
}

export default Productpage;