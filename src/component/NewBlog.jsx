import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NewBlog() {
    const [data, setData] = useState({
        title: "",
        description: "",
        image: null,
        category: "",
        option: "",
    });

    const navigate = useNavigate();


    const [arr, setArr] = useState(() => {
        const storeData = localStorage.getItem("data");
        return storeData ? JSON.parse(storeData) : [];
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setData((prevData) => ({
                    ...prevData,
                    [name]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    const Submit = (e) => {
        e.preventDefault();


        setArr((prevArr) => {
            const newArr = [...prevArr, data];
            localStorage.setItem("data", JSON.stringify(newArr));
            return newArr;
        });


        setData({
            title: "",
            description: "",
            image: null,
            category: "",
            option: "",
        });
    };


    const ShowData = () => {
        navigate("/blog");
    };

    return (
        <div className="container mt-5">
            <h1>Add Blog</h1>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        className="form-control"
                        placeholder="Enter Blogging Title"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        value={data.description}
                        className="form-control"
                        placeholder="Enter Blogging description"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog Image</label>
                    <input
                        type="file"
                        name="image"
                        className="form-control"
                        required
                        onChange={handleFileChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Select Date</label>
                    <input
                        type="date"
                        name="option"
                        value={data.option}
                        className="form-control"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                        name="category"
                        value={data.category}
                        className="form-select"
                        onChange={handleChange}
                    >
                        <option value="">Select category</option>
                        <option value="Technically Blog">Technically Blog</option>
                        <option value="Travelling Blog">Travelling Blog</option>
                        <option value="Daily Blog">Daily Blog</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button className="btn btn-secondary mt-3" onClick={ShowData}>Show Data</button>
        </div>
    );
}

export default NewBlog;
