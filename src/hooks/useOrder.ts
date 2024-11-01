import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    
    const [order, setOrder] = useState<OrderItem[]>([])

    const AddItem = (item: MenuItem) => {
        console.log("Agregando...");
        
    }
    return{
        AddItem
    }
}