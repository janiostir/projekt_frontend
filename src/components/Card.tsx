import React from "react";

const Card = ({cardData}:{cardData:any}) => {
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg" alt="Thumbnail" />
                    <div className="card-body">
                        <h5>{cardData.title}</h5>
                        <p className="card-text">{cardData.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Card;