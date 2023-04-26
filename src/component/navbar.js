
import React, { Component } from "react";
// export const x =3;
// export const y = 4;



class NavBar extends Component {
     
    
    render() {
        return (
            <div>
                <nav class=" navbar navbar-expand-lg navbar-light  bg mb-5">
                    <div class="container-fluid m-5 ">
                        <a class="navbar-brand logo " href="#">IT<sub>24</sub></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">Menu</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       menu
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                              
                            </ul>

                        </div>
                    </div>
                </nav>
                </div>
                )

    }
}


                export default NavBar


// export function Test(params) {

//     console.log('new rrecat app');

// }

// function TestTwo(params) {

//     console.log('made by Ahmad');

// }
