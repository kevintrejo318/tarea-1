import React, { useState } from "react";
import "./index.css";
import Button from '@mui/material/Button';

function Card({ nombre = 'nombre producto', precio = 'precio del producto', description = 'descripcion del producto', image = '#' }) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className="content-card">
            <img className="image-card" src={image} alt={nombre + ' del producto'} />
            <h2 className="titulo-card">{nombre}</h2>
            <p className="precio-card">{'$' + precio}</p>
            {show && <p className="descripcion-card">{description}</p>}
            <Button variant="contained" onClick={handleClick}>ver {show ? "menos" : "mas"} </Button>
        </div>
    );
}

export default Card;
