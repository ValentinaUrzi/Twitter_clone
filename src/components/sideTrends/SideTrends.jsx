import './index.css'

const SideTrends = ({ trendsData }) => {

    const { where, ashtag, number, image } = trendsData

    return (
        <div className="SideTrends">
            <div className="Sidetrends_text-content">
                <p>{where}</p>
                <h2>{ashtag}</h2>
                <p>{number}</p>
            </div>
            {image ? <img className="Sidetrends_img" src={image} /> : null}
        </div>
    )
}

export default SideTrends