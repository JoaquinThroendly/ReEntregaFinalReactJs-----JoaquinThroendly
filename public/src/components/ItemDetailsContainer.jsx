import Container from 'react-bootstrap/Container';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, getDoc, doc} from "firebase/firestore"
import { ItemCount } from './ItemCount';
import { ItemsContext } from '../contexts/ItemsContext';


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    const {addItem} = useContext(ItemsContext);

    const {id}= useParams();
  
    useEffect(() => {
      const db = getFirestore();
      const refDoc = doc(db, "items", id);

      getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (quantity) => {
      addItem({ ...item, quantity})
    }

    console.log(item)

    if (loading) return "wait";
    if (!item || !item.imageId) return "Imagen no disponible";
    
    return (
      <Container className="mt-4">
        <h1>{item.title}</h1>
        <h2>{item.categoryId}</h2>
        <h3>{item.price}</h3>
        <img src={item.imageId} height={200} />
        <br />
        <b>${item.price}</b>
        <br />
        <b>{item.stock}</b>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
      </Container>
    );
}