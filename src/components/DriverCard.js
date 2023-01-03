
import Rating from './Rating';
import './DriverCard.css'

const DriverCard = ({name, rating, img, car}) => {

    return(
        <div className= 'allCard'>
    <div className = 'pic'>
    <img src={img} alt='myPhoto'/>
    </div>
    <div className='driverCard'>
    <h2>{name}</h2>
    <Rating>{rating}</Rating>
    <p>{car.model} - {car.licensePlate}</p>
    </div>
    </div>
    )

}

export default DriverCard