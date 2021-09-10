import CardStudents from '../CardStudents'
import './styles.css'
const Students = ({bruxosAleatorios,showTorneio, bruxinhoAleatorio}) =>{
   
    return(
      
       <div>
           {!showTorneio && (
               <div>
               {bruxosAleatorios.map((item, index)=>{
                   return <CardStudents key={index}
                          item={item} />
               })}
            <button onClick={bruxinhoAleatorio}>Tentar novamente</button>
           </div>
           )}
       </div>
    )
}

export default Students