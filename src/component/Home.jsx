import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // Using useNavigate to programmatically navigate

    // Function to navigate to the blog page
    const gotoblog = () => {
        navigate('/blog');
    };

    const gotonewblog = () => {
        navigate('/newblog');
    };

    const gotoemployee = () => {
        navigate("/employee")
    }

    const showdata = () => {
        navigate("/showdata")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => navigate('/')}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={gotoblog}>Blog</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={gotonewblog}>New Blog</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={gotoemployee}>Add-Employee</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={showdata}>Employee-Records</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Welcome message and button to navigate to the Blog */}

        </div>
    );
}

export default Home;
