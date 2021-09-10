import './styles.css'
const CardStudents = ({item:{name,house,image}}) =>{
    return(
            <div className="principal">
                <div className="Students">
                <img src={image} alt="" id={house}/>
                <h3>{name}</h3>
                <p>{house}</p>
            </div>
            </div>
    )
}

export default CardStudents