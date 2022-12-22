import OrdemItem from "../../src/domain/entity/OrderItem";

test("Deve criar um item de pedido", function() {
    const orderItem = new OrdemItem(1, 1000, 2);
    expect(orderItem.getTotal()).toBe(2000);
});