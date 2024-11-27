import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    
    const [order, setOrder] = useState<OrderItem[]>([])

    const AddItem = (item: MenuItem) => {
        const existsItem = order.find( x => x.id === item.id)
        if(existsItem){
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? 
               {...orderItem, quantity: orderItem.quantity + 1} :
               orderItem
            )
            setOrder(updatedOrder)
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const RemoveItem = (id: MenuItem['id']) =>
        {
            setOrder( order.filter(item => item.id !== id) )         
        }

    return{
        order,
        AddItem,
        RemoveItem
    }
}