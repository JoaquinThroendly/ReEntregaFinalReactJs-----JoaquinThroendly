import React, { useEffect, useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {
getFirestore,
getDocs,
where,
query,
collection,
} from "firebase/firestore"; 

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ref = !id
        ? collection(db, "items") 
        : query(collection(db, "items"), where("categoryId", "==", id))


        getDocs(ref)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data()};
                })
            );
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return "wait";

    if (items.length === 0) return <p>No hay productos en esta categoría</p>;

    return (
        <Container className="mt-4 d-flex">
            {items.map(i => (
                <Card key={i.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={i.imageId} alt={i.title} />
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>{i.categoryId}</Card.Text>
                        <Card.Text>{i.price}</Card.Text>
                        <Link to={`/item/${i.id}`}>
                            <Button variant="primary">Ver</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};
