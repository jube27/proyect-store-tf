import React from 'react';
import { Link } from 'react-router-dom';


function Page2() {
    return (
        <div>
            <h1>holaa soy otra seccion</h1>
            <Link to="/">
            ir a inicio
            </Link>
        </div>
    );
}

export default Page2;