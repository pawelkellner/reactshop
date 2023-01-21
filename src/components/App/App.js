import GaleryCard from "../GaleryCard/GaleryCard";
import "./App.css";

import items from "../../data/items";
import FilterBar from "../FilterBar/FilterBar";
import {useState, useEffect} from "react"

const App = () =>{

    const [drinksState, setDrinksState] = useState([])

    useEffect(() => {
        setDrinksState(items)
    }, [])

    const onFilter = (filterValue) =>{
        console.log(filterValue)
    }

    let i = 0

    let types = ["beer", "soda", "food"] 

    const galeryCardsToBeRendered = drinksState?.map((drink, index) =>{
        let temp = <GaleryCard type={types[i]} drinks={drink} key={index}/>
        i = i + 1
        return temp
    })

    return(
        <>
            <FilterBar onFilter={onFilter}/>
            {galeryCardsToBeRendered}
        </>
    )
}

export default App;