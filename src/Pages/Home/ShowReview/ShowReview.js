import React, { useEffect, useState } from "react";

const ShowReview = () => {
        const [reviews, setReviews] = useState([]);
        useEffect(() => {
            fetch("https://blooming-everglades-02705.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
        }, []);
        return (
            <div className="container mt-5">
            <h1 className="text-center text-secondary">
                <i className="far fa-2x fas fa-comments text-success"></i> Customer{" "}
                <span className="text-warning">Review</span> <i className="far fa-2x fas fa-comments text-success"></i>
            </h1>
            <div className="row my-5">
                {reviews.map((review) => (
                <div key={review?._id} className="col-md-6">
                    <div class="card shadow">
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>
                            <i class="fas fa-2x fas fa-moon text-secondary"></i>{" "}
                            {review?.comments}
                        </p>
                        <footer class="blockquote-footer mt-3">
                            {review?.name}
                            
                        </footer>
                        </blockquote>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
  );
};

export default ShowReview;