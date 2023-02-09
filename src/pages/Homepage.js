import GaleryCard from "../components/GaleryCard/GaleryCard";
import items from "../data/items";
import FilterBar from "../components/FilterBar/FilterBar";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const Homepage = (props) =>{

    const [drinksState, setDrinksState] = useState([])
    const [defaultDrinks, setDefaultDrinks] = useState([])

    const onGalleryCardClicked = (type) =>{
        props.cardClicked(type)
    }
    
    useEffect(() => {
        let i = 0
        let types = ["beer", "soda", "food"] 
        
        const galeryCardsToBeRendered = items?.map((drink, index) =>{
            let temp = <Link type={types[i]} drinks={drink} onClick={()=> onGalleryCardClicked(drink)} to={`/product/${types[i]}`}>
                <GaleryCard type={types[i]} drinks={drink} key={index}/>
            </Link>
            i = i + 1
            return temp
        })
        setDrinksState(galeryCardsToBeRendered)
        setDefaultDrinks(galeryCardsToBeRendered)
    }, [])

    const onFilter = (filterValue) =>{
        let filterItems = defaultDrinks.filter((item) => {return item.props.type === filterValue} )
        
        setDrinksState(filterItems)
    }

    return(
        <>
            <FilterBar cart={props.cart} onFilter={onFilter}/>
            {drinksState}
        </>
    )
}

export default Homepage;