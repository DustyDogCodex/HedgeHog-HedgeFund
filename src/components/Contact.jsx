import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

function Contact(){

    //public access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoidm1hbGF2aXlhIiwiYSI6ImNsaDlpZHdwczA3bmYzZ3BoNGx0MDhreHQifQ.PkyMAVP9JlTTdJ4rm1wiZA'

    //using documentation from mapbox.com
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [ lng, setLng ] = useState(-70.9)
    const [ lat, setLat ] = useState(42.35)
    const [ zoom, setZoom ] = useState(9)

    useEffect(() => {
        if (map.current) return // initialize map only once
        
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        })
    })

    useEffect(() => {
        if (!map.current) return // wait for map to initialize
        
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4))
            setLat(map.current.getCenter().lat.toFixed(4))
            setZoom(map.current.getZoom().toFixed(2))
        })
    })

    return (
        <section className="p-5 bg-dark">
            <Container>
                <Row 
                    className="g-4"
                    lg={2} 
                    md={1} 
                    sm={1} 
                    xs={1}    
                >
                    <Col>
                        <h2 className="text-center mb-5 text-warning">Contact Info</h2>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <span className="fw-bold">Location:</span> 123 Street Name, City, State, 00000
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className="fw-bold">Phone:</span> (123) 456-7890
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className="fw-bold">Email: </span> thisisarealemail@scam.com
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className="fw-bold">Fax: </span> (098) 765-4321
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col>
                        <div className="sidebar">
                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </div>
                        <div ref={mapContainer} className="map-container" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact