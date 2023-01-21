import "./FilterBar.css";

const FilterBar = ({onFilter}) =>{
    const filterBeer = (e) =>{
        onFilter(e.target.checked)
    }

    return(
        <section className="filterBar">
            <div className="filterBarWrapper">
                <div className="filterBar__inputWrapper">
                    <input onChange={filterBeer} id="beer" className="filterBar__checkbox" type="checkbox" name="" id=""/>
                    <label htmlFor="beer">Beer</label>
                </div>
                <div className="filterBar__inputWrapper">
                    <input id="soda" className="filterBar__checkbox" type="checkbox" name="" id=""/>
                    <label htmlFor="soda">Soda</label>
                </div>
                <div className="filterBar__inputWrapper">
                    <input id="food" className="filterBar__checkbox" type="checkbox" name="" id=""/>
                    <label htmlFor="food">Food</label>
                </div>
            </div>
        </section>
    )
}

export default FilterBar;