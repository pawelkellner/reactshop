import { useEffect, useState } from "react";
import "./FilterBar.css";

const FilterBar = ({onFilter, cart}) =>{
    const [labels, setLabels] = useState([]);

    useEffect(() =>{
        let toBeRenderedLabels = [
            {
                name: "beer",
                checked: false
            },
            {
                name: "soda",
                checked: false
            },
            {
                name: "food",
                checked: false
            },
        ]

        setLabels(toBeRenderedLabels)
    },[])

    const toBeRenderedLabels = labels?.map((label, index) =>{
        return(
            <div key={index} className="filterBar__inputWrapper">
                    <input onChange={() => filterDrink(label.name)} id={label.name} className="filterBar__checkbox" type="checkbox" name="" id="" checked={label.checked}/>
                    <label htmlFor={label.name}>{label.name}</label>
                </div>
        )
    })

    const filterDrink = (value) =>{
        let returnChecked = labels?.map((drink) =>{

            if(drink.name === value){
                drink.checked = true
                return drink
            } else {
                drink.checked = false
                return drink
            }
        })
        setLabels(returnChecked)
        onFilter(value)
    }

    return(
        <>
        <section className="filterBar">
            <div className="filterBarWrapper">
                {toBeRenderedLabels}
            </div>
            <article className="counter">
                <p>{cart.length}</p>
            </article>
        </section>
        </>
    )
}

export default FilterBar;