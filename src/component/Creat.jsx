import React from 'react'
import { useNavigate } from 'react-router-dom';

function Creat() {

    const navigate = useNavigate();
    const gotonewblog = () => {
        navigate('/newblog');
    };
    return (
        <div>
            <div className="container mt-5">
                <h1>Welcome to the Home Page</h1>
                <button className="btn btn-primary" onClick={gotonewblog}>Creat Your First Blog</button>
            </div>
        </div>
    )
}

export default Creat
