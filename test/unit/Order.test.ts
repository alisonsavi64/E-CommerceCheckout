import Coupon from "../../src/domain/entity/Coupon";
import Dimension from "../../src/domain/entity/Dimension";
import Item from "../../src/domain/entity/Item";
import Order from "../../src/domain/entity/Order";

test("Não deve criar um pedido com CPF inválido", function() {
    expect(() => new Order("111.111.111-11")).toThrow(new Error("CPF Inválido")); 
});

test("Deve criar um pedido com 3 itens (com descrição, preço e quantidade", function() {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Cabo", 30), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
});

test("Deve criar um pedido com cupon de desconto", function() {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Cabo", 30), 3);
    order.addCoupon(new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(4872);
});

test("Deve criar um pedido com cupom de desconto expirado", function() {
    const order = new Order("935.411.347-80", new Date("2021-03-10T10:00:00"));
    order.addItem(new Item(1, "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Cabo", 30), 3);
    order.addCoupon(new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00")));
    const total = order.getTotal();
    expect(total).toBe(6090);
});

test("Deve criar um pedido com cupom de desconto expirado", function() {
    const order = new Order("935.411.347-80", new Date("2021-03-10T10:00:00"));
    order.addItem(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1);
    order.addItem(new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50), 20), 1);
    order.addItem(new Item(3, "Cabo", 30, new Dimension(10, 10, 10), 1), 3);
    order.addCoupon(new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00")));
    const freight = order.getFreight();
    expect(freight).toBe(260);
});