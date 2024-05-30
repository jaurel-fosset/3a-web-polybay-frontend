import { SSEClient } from "./lib/sse-client.js";
import { ProductsView } from "./views/products-view.js";

async function run()
{
    const view = new ProductsView();
    view.displayProducts();

    const sseClient = new SSEClient("localhost:8080");
    sseClient.connect();
    sseClient.subscribe("bids", view.updateBid);
}
window.addEventListener("load", run);