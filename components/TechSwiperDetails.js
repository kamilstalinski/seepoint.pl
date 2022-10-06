import Link from "next/link"

const TechSwiperDestails = ({currentTechnology}) => {

    return (
        <div className="description">
            <h2>{currentTechnology.name}</h2>
            <p>{currentTechnology.description}</p>
            <Link href={`${currentTechnology.path}`}><a className="primary-button">Dowiedz się więcej</a></Link>
        </div>
    )
}

export default TechSwiperDestails;