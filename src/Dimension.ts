export default class Dimension {

    constructor(readonly width : number, readonly heigth : number, readonly length : number){
    }

    getVolume() {
        return (this.width/100) * (this.heigth/100) * (this.length/100);
    }

}