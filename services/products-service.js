export class ProductsService
{
    static async findAll()
    {
        const response = await fetch("http://localhost:8080/products");

        if (response.status === 200)
        {
            return await response.json();
        }
    }

    static async bid(id)
    {
        const param =
        {
            method: "POST"
        };

        const response = await fetch("http://localhost:8080/bid/" + id, param);

        if (response.status === 200)
        {
            return response.json();
        }
        else
        {
            return null;
        }
    }
}