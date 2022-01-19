import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner2/Banner2';

function App() {
  var mostrar = true;

  function msj_log(){
    console.log(mostrar)
    if(mostrar) mostrar = false;
    else mostrar = true;
    
  }
  return (
    <div className="App">
      <div class="row">

        <div class="col">
          <h1>Website Name </h1>
        </div>
        
        <div class="col">  
          <div class="container overflow-hidden">
            <div class="row gy-5">
              <div class="col-6">
                <div class="p-3">Seccion 1</div>
              </div>
              <div class="col-6">
                <div class="p-3">Seccion 2</div>
              </div>
              <div class="col-6">
                <div class="p-3">Seccion 3</div>
              </div>
              <div class="col-6">
                <div class="p-3">Search</div>
              </div>
            </div>
          </div>   
        </div>
      </div>

      <hr></hr>

      <div class="row">
        <div class="col-8">
          <h1>Title </h1>
        </div>
        <div class="col">
          <div class="container">
            <div class="row g-2 row-cols-lg-1">
              <div class="col-6">
                <div class="p-3">
                <button class="btn btn-primary" onClick={msj_log}> Button 1 </button>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3">
                <button class="btn btn-primary" onClick={msj_log}> Button 2 </button>
                </div>
              </div>

              <div class="col-6">
                <div class="p-3">texto</div>
              </div>
            </div>
          </div>
        </div>
       </div>

      <hr></hr>

      <div class="row">
        <div class="col-2">
          <h1>Foto </h1>
        </div>

        <div class="col-6">
          <h2>Title 2 ....</h2>
          Aqui va algo....
        </div>

        <div class="col-4">
      
          <div class="container">
            <div class="row g-2 row-cols-lg-1">
              
              <div class="col">
                <div class="p-3">
                  Title 3
                </div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">
                 Algo para decir
                </div>
              </div>
              
              <div class="col">
                <div class="p-3 border bg-light">
                  Algo para decir
                </div>
              </div>
              
              <div class="col">
                <div class="p-3 border bg-light">
                 Algo para decir
                </div>
              </div>
  
            </div>
          </div>
      
        </div>  
      </div>
    </div>
  );
}

export default App;
