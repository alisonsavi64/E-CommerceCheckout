export default class OrdemItem {

    constructor(readonly idItem: number, readonly price: number, readonly quantity : number) {

    }

    getTotal() {
        return this.price * this.quantity;
    }
}