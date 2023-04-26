// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import NavBar from './component/navbar';
import DarkMode from './component/darkemode/DarkeMode';

//DEFULT

function App() {
  return (
    <div className="App">
        <DarkMode />
      <header>
        <NavBar />
      </header>
      {/* container start  */}
      <div className="container-fluid">
        <div className='row'>
          <div className='col-6'>
            <div className='img'>
              {/* img from the img map in public */}
              <img src="./img/iphone.jpg" alt="telefoon" width="500" height="600" className='img-fluid' />
            </div>

          </div>
          <div className='col-6'>
            <h1>About it</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper faucibus arcu, non mattis tellus iaculis sodales. Curabitur ac posuere sapien, at sollicitudin risus. Vivamus convallis auctor condimentum. Ut et egestas magna. Fusce dictum massa in nibh maximus fringilla. In nec maximus libero. Donec turpis tellus, volutpat nec facilisis id, cursus at velit. Donec fringilla ut magna vitae aliquam.
              Vivamus dolor massa, hendrerit quis lorem sagittis, fringilla congue urna. Phasellus arcu nisl, tincidunt at ipsum quis, egestas rhoncus purus. Duis in turpis ex. Nullam sit amet mollis felis. Phasellus nec venenatis magna. Fusce vestibulum ullamcorper vestibulum. Pellentesque euismod lorem quis augue aliquam viverra
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                click for more
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </p>

          </div>
        </div>
      </div>
      {/* container end */}

    
          


    </div>
  );
}

export default App;
