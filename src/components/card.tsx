
import "./card.css"

type Props = {
    title: string;
    text: string;
    image: string;
    link: string;
}

export const Card = ({title, text, image, link}:Props) => {
    return (
        <div className="border">
            <img className="image" src={image} />
            <h2 className="text">{title}</h2>
            <p className="paragraph"> {text}</p>
            <a href={link}>
                <button className="button">
                    Read more
                </button>
            </a>
        </div>
    )
}