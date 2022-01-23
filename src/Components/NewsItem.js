import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'


export default class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, author } = this.props;
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}...</Card.Title>
                        <Card.Text>
                            {description}...
                        </Card.Text>
                        <p><b>Published at: </b> {publishedAt}</p>
                        <p><b> Author: </b> {author}</p>
                       <a  rel="noreferrer" href={newsUrl} target="_blank">
                           <Button>Read More</Button>
                       </a>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
