import React, { useState } from 'react';

function Blog() {
    const [item, setItem] = useState(() => {
        const storeData = localStorage.getItem("data");
        return storeData ? JSON.parse(storeData) : [];
    });

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Blog Posts</h1>
            <div className="row">
                {item.length > 0 ? (
                    item.map((ele, i) => (
                        <div key={i} className="col-md-4 mb-4">
                            <div className="card">
                                {ele.image && (
                                    <img
                                        src={ele.image}
                                        alt={ele.title}
                                        className="card-img-top"
                                    />
                                )}
                                <div className="card-body">

                                    <p className="card-title"><strong>Title : </strong>{ele.title}</p>

                                    <p className="card-text"><strong>Description : </strong>{ele.description}</p>

                                    <p className="card-text">
                                        <strong>Category :</strong> {ele.category}
                                    </p>
                                    <p className="card-text">
                                        <strong>Date :</strong> {ele.option}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No blogs available.</p>
                )}
            </div>
        </div>
    );
}

export default Blog;
