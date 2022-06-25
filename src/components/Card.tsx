import React from "react";

const Card = ({cardData}:{cardData:any}) => {
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={require('../img.jpg')} alt="Thumbnail" />
                    <div className="card-body">
                        <h5>{cardData.title}</h5>
                        <p className="card-text">{cardData.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href={"/post/"+cardData.id}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Card;