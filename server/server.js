import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";

const app = express();

// Utility Functions
const get_orders = async () => {
    return await readFile("./records/orders.json", "utf-8");
}

const get_items = async () => {
    return await readFile("./records/items.json", "utf-8");
}

const get_date = () => {
    var date = new Date();
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();

    date = day + '/' + month + '/' + year;

    return date;
}

// Middleware
app.use(express.json());
app.use(cors());

// REST Controller
app
    // GET Requests
    .get("/", (req, res) => {
        return res.json([{ "hello": "world!" }]);
    })

    .get("/api/get-orders", async (req, res) => {
        return res.json(JSON.parse(await get_orders()));
    })

    .get("/api/get-items", async (req, res) => {
        return res.json(JSON.parse(await get_items()));
    })

    // POST Requests
    .post("/api/add-order", async (req, res) => {
        const shipper = req.query.shipper;
        const receiver = req.query.receiver;
        const item = req.query.item;
        const carrier = req.query.carrier;
        const estimated = req.query.estimated;

        var orders = JSON.parse(await get_orders());

        const orderId = orders.length === undefined ? 2 : orders.length + 1;
        const loadNumber = Math.floor(Math.random()*90000) + 10000;
        const date = get_date();

        const order = {
            orderId,
            loadNumber,
            shipper,
            receiver,
            date,
            item,
            carrier,
            estimated
        }

        if(orders.length === undefined) {
            const array = [];
            array.push(orders);
            orders = array;
        }
        orders.push(order);

        await writeFile("./records/orders.json", JSON.stringify(orders, null, 2), "utf-8");
        return;
    })

    .post("/api/add-item", async (req, res) => {
        const itemName = req.query.itemName;
        const itemCode = req.query.itemCode;
        const quantity = req.query.quantity;
        const reorder = req.query.reorder;
        const cost = req.query.cost;

        var orders = JSON.parse(await get_items());

        const order = {
            itemName,
            itemCode,
            quantity,
            reorder,
            cost
          }

        if(orders.length === undefined) {
            const array = [];
            array.push(orders);
            orders = array;
        }
        orders.push(order);

        await writeFile("./records/items.json", JSON.stringify(orders, null, 2), "utf-8");
        return;
    })

app.listen(3000, () => {
    console.log("Server started!");
});