import axios from "axios";

test("Deve chamar /items", async function(){
    const response = await axios({
        url: "http:localhost:5000/items",
        method: "get"
    });

    const items = response.data;
    expect(items).toHaveLength(3);
})
