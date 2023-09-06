import React from 'react'

const Card = (props) => {

    let {id,name,email}=props.data;
    return (
        <div className='container' key={id}>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default Card
