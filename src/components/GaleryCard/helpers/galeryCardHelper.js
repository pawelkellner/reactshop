/* helper that renders images from data */
const getToBeRenderedFigures = (drinks) =>{
    let classToBeAdded = ""
    let toBeRenderedFigures = drinks.map((beer, index) =>{
    switch (index){
        case 0:
            classToBeAdded = "galeryCard__figure galeryCard__figure--big"
            break;
        case 1:
            classToBeAdded += "galeryCard__figure galeryCard__figure--middle"
            break;
        case 2:
            classToBeAdded += "galeryCard__figure galeryCard__figure--middle"
            break;
        default:
            classToBeAdded = "galeryCard__figure galeryCard__figure--small"
    }
    return (
        <figure className={classToBeAdded}>
                <img className="galeryCard__img" src={beer.image} alt={beer.alt}/>
        </figure>
    )
})
    return {toBeRenderedFigures}
}

export default getToBeRenderedFigures;