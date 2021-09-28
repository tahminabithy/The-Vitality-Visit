import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import './DoctorDetails.css'

const DoctorDetails = (props) => {
    //console.log(props)
    const { name, img, degree, specialised, chamber, doctorVisit } = props.doctor;
    return (
        <div class="col shadow-sm">
            <div class="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text text-primary">{degree}</p>
                    <p class="card-text">Specialised in <span className='specialization'>{specialised}</span></p>
                    <p class="card-text">Charge : ${doctorVisit}</p>
                    <p><small>{chamber}</small></p>
                    {<button onClick={() => props.handleAddDoctorVisitToCart(props.doctor)} type="button" class="btn btn-secondary"> <FontAwesomeIcon icon={faUserMd} /> Appoint</button>}


                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;