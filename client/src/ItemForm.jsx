import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ItemForm = () => {

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [quantity, setQuantity] = useState("");
    const [reorder, setReorder] = useState("");
    const [cost, setCost] = useState("");
    const navigate = useNavigate();

    const add_item = async () => {
        const response = await fetch("http://localhost:3000/api/add-item?itemName="+ name +"&itemCode=" + code + "&quantity=" + quantity + "&reorder=" + reorder + "&cost=" + cost, {
            method: "POST"
        });

        const data = await response.json();

        if(data.status === "success")
            navigate("/inventory");
        else
            navigate("/add-item");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">New Item</h1>
                    <p className="text-zinc-200 dark:text-zinc-700">
                        Please fill in the below fields to add a new item.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Item Name
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setName(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Item Code
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setCode(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Quantity on Hand
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setQuantity(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Reorder Point
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setReorder(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Cost of Item
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setCost(text.target.value)}
                        />
                        <button onClick={() => { add_item(); }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-gradient-to-tr text-white">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center">
                                    Add
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ItemForm