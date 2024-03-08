import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {

    const [shipper, setShipper] = useState("");
    const [receiver, setReceiver] = useState("");
    const [item, setItem] = useState("");
    const [carrier, setCarrier] = useState("");
    const [estimated, setEstimated] = useState("");
    const navigate = useNavigate();

    const add_order = async () => {
        const response = await fetch("http://localhost:3000/api/add-order?shipper="+ shipper +"&receiver=" + receiver + "&item=" + item + "&carrier=" + carrier + "&estimated=" + estimated, {
            method: "POST"
        });

        const data = await response.json();

        if(data.status === "success")
            navigate("/dashboard");
        else
            navigate("/add-order");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">New Order</h1>
                    <p className="text-zinc-200 dark:text-zinc-700">
                        Please fill in the below fields to add a new order.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Shipper
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setShipper(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Receiver
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setReceiver(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Item
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setItem(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Carrier
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setCarrier(text.target.value)}
                        />
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Estimated Time
                        </label>
                        <input
                            type="text"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            onChange={(text) => setEstimated(text.target.value)}
                        />
                        <button onClick={() => { add_order(); }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-gradient-to-tr text-white">
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

export default OrderForm