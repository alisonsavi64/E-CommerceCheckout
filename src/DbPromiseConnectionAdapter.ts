import Connection from "./Connection";

export default class DbPromiseConnectionAdapter implements Connection {

    constructor () {
    }

    query(statement: string, params: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}