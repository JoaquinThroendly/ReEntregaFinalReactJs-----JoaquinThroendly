import  { useEffect, useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {
getDocs,
where,
query,
collection,
} from "firebase/firestore"; 
import { db } from '../main';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const productosCollection = collection(db, "productos");
        const ref = !id
        ? productosCollection
        : query(productosCollection, where("titulo", "==", id))


        getDocs(ref)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => {
                    console.log(doc.data());
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
                    <Card.Img variant="top" src={i.imagen} alt={i.title} />
                    <Card.Body>
                        <Card.Title>{i.titulo}</Card.Title>
                        <Card.Text>{i.categoria}</Card.Text>
                        <Card.Text>{i.precio}</Card.Text>
                        <Link to={`/item/${i.id}`}>
                            <Button variant="primary">Ver</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};
