export class Device {
    id?: number;
    name: string = '';
    ip: string = '';
    model: string = '';
    state: string = '';

    constructor(id=undefined, name='', ip='', model='unknown', state='') {
        this.id = id;
        this.name = name;
        this.ip = ip;
        this.model = model;
        this.state = state;
    }
}