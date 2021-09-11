import './styles.css'
const CardStudents = ({item:{name,house,image}}) =>{
    return(
            <div>
                <img src={image} alt="" id={house}/>
                <h3>{name}</h3>
                <p>{house}</p>
            </div>
    )
}

export default CardStudents