import GaleryCard from "../GaleryCard/GaleryCard";
import "./App.css";

import items from "../../data/items";
import FilterBar from "../FilterBar/FilterBar";
import {useState, useEffect} from "react"

const App = () =>{

    const [drinksState, setDrinksState] = useState([])
    const [defaultDrinks, setDefaultDrinks] = useState([])
    
    useEffect(() => {
        let i = 0
        let types = ["beer", "soda", "food"] 
        
        const galeryCardsToBeRendered = items?.map((drink, index) =>{
            let temp = <GaleryCard type={types[i]} drinks={drink} key={index}/>
            i = i + 1
            return temp
        })
        console.log(galeryCardsToBeRendered)
        setDrinksState(galeryCardsToBeRendered)
        setDefaultDrinks(galeryCardsToBeRendered)
    }, [])

    const onFilter = (filterValue) =>{
        let filterItems = defaultDrinks.filter((item) => {return item.props.type === filterValue} )
        
        setDrinksState(filterItems)
    }

    console.log(drinksState)
    return(
        <>
            <FilterBar onFilter={onFilter}/>
            {drinksState}
        </>
    )
}

export default App;