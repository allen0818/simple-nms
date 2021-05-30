export class Device {
    id?: number;
    name: string = '';
    ip: string = '';
    state: string = '';

    constructor(id = undefined, name = '', ip = '', state = '') {
        this.id = id;
        this.name = name;
        this.ip = ip;
        this.state = state;
    }
}