import './App.css';
import { useState, useEffect } from 'react';
import PageTorneio from './components/PageTorneio';
import Students from './components/Students';
function App() {
  const[students, setStudents] = useState([])
  const[showTorneio, setShowTorneio] = useState(true)
  const [bruxosAleatorios, setBruxosAleatorios] = useState([])
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);
  

   const random = (arr) =>{    
    const numerosAleatorios = Math.floor(Math.random() * 11)
    return arr[numerosAleatorios]
  }
  const bruxinhoAleatorio = () => {
      let primeiroBruxo = random(students)
      let segundoBruxo = students.find((item)=>item.house !== primeiroBruxo.house)
      let terceiroBruxo = students.find((item)=>item.house !== primeiroBruxo.house && item.house !== segundoBruxo.house)

      setBruxosAleatorios([primeiroBruxo, segundoBruxo, terceiroBruxo])
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {showTorneio && <PageTorneio showTorneio={showTorneio} setShowTorneio = {setShowTorneio} bruxinhoAleatorio={bruxinhoAleatorio}/>}
        </div>

        <div>
          <Students bruxosAleatorios={bruxosAleatorios} showTorneio={showTorneio} 
          bruxinhoAleatorio={bruxinhoAleatorio}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
