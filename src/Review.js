import React from 'react';
import './App.css';


function Reviews(){
    // Mempersiapkan data json
    const users = [
        {
            "id": 1,
            "name": "Masayoshi",
            "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
            "photo": "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "id": 2,
            "name": "Shayna",
            "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
            "photo": "https://images.pexels.com/photos/1930621/pexels-photo-1930621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "id": 3,
            "name": "Alqowy",
            "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
            "photo": "https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ];
    const ListReviews = users.map((itemReview) =>
        <div key={itemReview.id} className="Item">
        <img src={itemReview.photo}></img>
        <div className="User">
            <h3>{itemReview.name}</h3>
            <p>{itemReview.review}</p>
        </div>
        </div> 
    );
    return (
        <div className="Review-box">
        <h2>Reviews</h2>
        {ListReviews}
        </div>
    );

}

export default Reviews;