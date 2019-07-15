import React from "react";
import Card from 'react-bootstrap/Card';

const ListResults = ({results}) => (
    <ul>
        { 
            results.map( ({title, urlImage, id}) => (
                <Card>
                    <Card.Body>
                        <li key={id}>                            
                            <h3>{title}</h3>
                            <img alt={title} src={urlImage} />
                        </li>
                    </Card.Body>
                </Card>
            ))
        }
    </ul>
) 
export default ListResults;


 