import { ProductsService } from "../services/products-service.js";

export class ProductsView
{
    constructor()
    {

    }

    updateBid(data)
    {
        const product = document.querySelector("[data-id=\"" + data.id + "\"]");
        const price = product.querySelector(".price");

        price.innerHTML = data.bid;
    }

    async displayProducts()
    {
        const products = await ProductsService.findAll();

        products.forEach(element =>
        {
            this.#displayProduct(element);
        });
    }

    #displayProduct(product)
    {
        const productsElement = document.querySelector("products");

        const productElement = document.createElement("product");
        productElement.dataset.id = product.id;
        productsElement.appendChild(productElement);

        const nameElement = document.createElement("p");
        nameElement.innerHTML = product.name;
        productElement.appendChild(nameElement);

        const ownerElement = document.createElement("p");
        ownerElement.innerHTML = product.owner;
        productElement.appendChild(ownerElement);

        const priceElement = document.createElement("p");
        priceElement.classList.add("price")
        priceElement.innerHTML = product.bid.toString();
        productElement.appendChild(priceElement);

        const buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.addEventListener("click", async (event) =>
        {
            const productElement = event.target.parentElement;
            const product = await ProductsService.bid(productElement.dataset.id);

            if (product !== null)
            {
                
                const priceElement = productElement.querySelector(".price");
                priceElement.innerHTML = product.bid;
            }
        });
        buttonElement.innerHTML = "Enchérir";
        productElement.appendChild(buttonElement);
    }
}