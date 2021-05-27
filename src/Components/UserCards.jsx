import React from "react";
import { Card } from 'react-bootstrap';
import './style.css'


export default function UserCards({ users }) {
    return (
        <div className="container">
            <div className="row mt-2 justify-content-center">
                {
                    users.map((user) => {
                        return (

                            <Card key={user.id} className="user-card col-12 m-2 p-2 col-sm-5 col-lg-3">
                                <Card.Img className="user-img" variant="top" src={user.avatar} />
                                <Card.Body>
                                    <Card.Title>{user.first_name + " " + user.last_name}</Card.Title>
                                    <Card.Text>
                                        {"Email : " + user.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        )
                    })
                }
            </div>
        </div>
    );
}