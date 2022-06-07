export default class Control {
    name: string;
    mqttName: string;

    constructor(name:string,mqttName:string) {
        this.name = name;
        this.mqttName = mqttName;
    }
}