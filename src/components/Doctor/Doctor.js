import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import Cart from '../Carts/Cart';
import './Doctor.css'

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    const handleAddDoctorVisitToCart = (doctor) => {
        const newCart = [...carts, doctor];
        setCarts(newCart);
    }
    return (
        <div className='row pt-4 ms-2'>
            <div className='col-md-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        doctors.map(doctor => <DoctorDetails
                            key={doctor.id}
                            doctor={doctor}
                            handleAddDoctorVisitToCart={handleAddDoctorVisitToCart}
                        ></DoctorDetails>)
                    }
                </div>

            </div>
            <div className='col-md-3 '>
                <div className='shadow-lg cart-position ps-2'>
                    <h4 className='mb-3'> <FontAwesomeIcon icon={faHospitalUser} /> Doctors Details and selection</h4>
                    <p className='fw-bold'>Total selected Doctor : {carts.length}</p>
                    <Cart carts={carts}></Cart>
                    <p className='fw-bold'>Your Chosen Doctor</p>
                    <ul>
                        {
                            carts.map(cart => <li><small>{cart.name}</small></li>)
                        }
                    </ul>

                </div>


            </div>
        </div>
    );
};

export default Doctor;