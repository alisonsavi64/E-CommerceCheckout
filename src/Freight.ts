import Item from "./Item";

export default class Freght {
    private total = 0;
    private DISTANCE = 1000;
    private FACTOR = 100;

    addItem(item: Item, quantity: number){
        const freight = item.getVolume() * this.DISTANCE * (item.getDensity()/this.FACTOR)
        this.total += freight * quantity;
    }

    getTotal(){
        return this.total;
    }
}