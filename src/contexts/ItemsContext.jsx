import { createContext } from "react";
import { useState } from "react";
export const ItemsContext = createContext();
import proptypes from "prop-types";
export const Provider = ({children}) => {
    const [items, setItems] = useState([]);
    const reset = () => setItems([]);

    const addItem = (item) => {
        const alreadyExist = items.some((i) => i.id === item.id);

        if (alreadyExist) {
            const newItems = items.map((i) => {
                if (i.id === item.id) {
                    return { ...i, quantity: i.quantity + item.quantity}
                } else {
                    return i;

                }
            });
            setItems(newItems);
        } else {
            setItems((prev) => [...prev, item]);
        }
    };

    const removeItem = (id) => {
        const filter = items.filter(i => i.id !== id)
        setItems(filter);
    }

    console.log(items);

    return <ItemsContext.Provider value ={{ addItem, items, removeItem, reset }}>{children}</ItemsContext.Provider>;
};


Provider.propTypes = {
    children: proptypes.node.isRequired,
}
