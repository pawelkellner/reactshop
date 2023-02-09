import "./GaleryCard.css";
import toBeRenderedFigures from "./helpers/galeryCardHelper";
const GaleryCard = (props) =>{
    return(
        <article className="galeryCard">
            {toBeRenderedFigures(props.drinks).toBeRenderedFigures}
        </article>
    )
}

export default GaleryCard;