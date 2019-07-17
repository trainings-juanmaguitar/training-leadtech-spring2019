import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ListResults = ({results}) => (
    <ul>
        { 
            results.map( ({title, urlImage, id, overview}) => (
                <li key={id}>                            
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={urlImage} alt={title} />
                        <Card.Body>
                            <Card.Title><a href="">{title}</a></Card.Title>
                            <Card.Text>
                                {overview}
                            </Card.Text>
                            <Button variant="primary">Go {title}</Button>
                        </Card.Body>
                    </Card>
                </li>
            ))
        }
    </ul>
) 
export default ListResults;