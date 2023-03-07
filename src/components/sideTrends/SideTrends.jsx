import './index.css'

const SideTrends = ({trendsData}) => {

    const { where, ashtag, number } = trendsData

    return (
        <div className="SideTrends">
            <p>{where}</p>
            <h2>{ashtag}</h2>
            <p>{number}</p>
        </div>
    )
}

export default SideTrends