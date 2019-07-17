import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PopularMovies = ({results}) => (
    <ul>
        { 
            results.map( ({title, urlImage, id}) => (
                <li key={id}>                            
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={urlImage} alt={title} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {title}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </li>
            ))
        }
    </ul>
) 
export default PopularMovies;