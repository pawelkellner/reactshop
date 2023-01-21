import "./GaleryCard.css";
import toBeRenderedFigures from "./helpers/galeryCardHelper";
const GaleryCard = (props) =>{
    console.log(props.type)
    return(
        <article className="galeryCard">
            {toBeRenderedFigures(props.drinks).toBeRenderedFigures}
        </article>
    )
}

export default GaleryCard;