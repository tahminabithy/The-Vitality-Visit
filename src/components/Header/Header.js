import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
const Header = () => {
    return (
        <div className='head-container'>

            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./clicnicalMedical"><FontAwesomeIcon icon={faClinicMedical} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="./home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./link">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./details">More details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="./help">Help Desk</a>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='heading'>
                <h2>The Vitality Visit</h2>
                <p>"Treat your body like you care."</p>
                <h5 className='mt-3'>Our Entire Allocation : 200crore</h5>
            </div>

        </div>
    );
};

export default Header;