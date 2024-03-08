import { useState, useEffect, useRef } from 'react';

import Item from './components/Item.jsx';

import "./Inventory.css";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
export default function Products() {

    const [items, setItems] = useState([]);
    const [reset, setReset] = useState(1);
    const fileInputRef = useRef();

    const fetch_items = async () => {
        const response = await fetch("http://localhost:3000/api/get-items");
        const data = await response.json();

        setItems(data);
    }

    const add_item = async (name, code, quantity, reorder, cost) => {
        const response = await fetch("http://localhost:3000/api/add-item?itemName="+ name +"&itemCode=" + code + "&quantity=" + quantity + "&reorder=" + reorder + "&cost=" + cost, {
            method: "POST"
        });

        const data = await response.json();

        return data;
    }

    const import_csv = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async (e) => {
                const csvData = e.target.result;

                let lines = csvData.split("\r\n");
                lines = lines.slice(1, -1);

                for (const line of lines) {
                    const item = line.split(";");
                    const response = await add_item(...item);

                    if(response.status === "success") {
                        setReset((reset + 1) % 10);
                    } else {
                        break;
                    }
                }
            };

            reader.readAsText(file);
        } else {
            console.error("No file selected");
        }
    }

    useEffect(() => {
        fetch_items();
    }, [reset]);

    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-white-800/40">
                <div className="flex flex-col gap-2">
                    <div className="flex h-[60px] items-center px-6">
                        <a className="flex items-center gap-2 font-semibold" href="/" rel="ugc">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                                <path d="M12 3v6"></path>
                            </svg>
                            <span className="">Cognichain</span>
                        </a>
                    </div>
                    <div className="flex-1 ">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <a
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "
                                href="/dashboard"
                                rel="ugc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                Dashboard
                            </a>
                            <a
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "
                                href="/Inventory"
                                rel="ugc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="m7.5 4.27 9 5.15"></path>
                                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                                    <path d="M12 22V12"></path>
                                </svg>
                                Inventory
                            </a>
                            <a
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "
                                href="/users"
                                rel="ugc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                Users
                            </a>
                            <a
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400"
                                href="/settings"
                                rel="ugc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                Settings
                            </a>
                            <a
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400"
                                href="/"
                                rel="ugc"
                            >
                              
                            <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '12px', marginLeft: '5px' }} /> Logout
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <a className="lg:hidden" href="/" rel="ugc">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                            <path d="M12 3v6"></path>
                        </svg>
                        <span className="sr-only">Home</span>
                    </a>
                    <div className="dash">
                        <div className='heading'>
                            <h1 className="font-semibold text-lg text-white">Inventory</h1>
                        </div>
                        <div className='body'>

                            <button onClick={() => fileInputRef.current.click()} className="btn btn-primary" id='imp-csv'
                                rel="ugc">
                                Import CSV
                            </button>
                            <input onChange={import_csv} multiple={false} ref={fileInputRef} type='file' hidden />
                            <a className="btn btn-primary" id='add-item'
                                href="/add-item"
                                rel="ugc">
                                Add Item
                            </a>

                            <Dropdown id='filter-btn'>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Filter
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item  className="text-light" href="#" >Date</Dropdown.Item>
                                    <Dropdown.Item  className="text-light" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item  className="text-light" href="#">Something else here</Dropdown.Item>
                                    {/* <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </header>
                <main className="inv">
                    {
                        items.map((item, key) => 
                            <Item {...item} key={key} />
                        )
                    }
                </main>
            </div>
        </div>
    )
}