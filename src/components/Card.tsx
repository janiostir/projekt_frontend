import React from "react";

interface CardProps{
    cardData: any
    hideControls?: boolean;
}

const Card = ({cardData, hideControls}: CardProps) => {
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                    {!hideControls && <img src={require('../img.jpg')} alt="Thumbnail" />}
                    <div className="card-body">
                        <h5>{cardData.title}</h5>
                        <p className="card-text">{cardData.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {!hideControls && <a href={"/post/"+cardData.id}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Card;