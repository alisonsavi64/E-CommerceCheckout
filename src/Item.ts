import Dimension from "./Dimension";

export default class Item {

    constructor(readonly idItem: number, readonly description : string, readonly price : number, readonly dimension? : Dimension , readonly width? : number, readonly heigth? : number, readonly length? : number, readonly weight? : number){ 
    }

    getVolume() {
        if (this.width && this.heigth && this.length && this.weight){ 
            return (this.width/100) * (this.heigth) * (this.length/100);
        }else {
            return 0
        }
    }

    getDensity() {
        if (this.width && this.heigth && this.length && this.weight){ 
            return this.weight/this.getVolume();
        }else {
            return 0
        }
    }


}