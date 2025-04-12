import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db"; 
import OrderTotals from "./components/OrderTotals";
import useOrder from "./hooks/useOrder";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {

  const { order, tip, setTip, AddItem, RemoveItem } = useOrder()
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-5">
            {
              menuItems.map( item => (
                <MenuItem
                key={item.id}
                item={item}
                addItem={AddItem}
                />
              ))
            }
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContents
              order={order}
              removeItem= {RemoveItem}
            />

            <TipPercentageForm
              setTip={setTip}
              />
          
            <OrderTotals 
              order={order}
              tip={tip}
            />
        </div>

      </main>
    </>
  )
}

export default App
