export default class Sensor {
    name: string;
    mqttName: string;
    minVal: number;
    maxVal: number;
    unit: string;
    threshold: Map<number,string>;

    constructor(name:string,mqttName:string, minVal:number,maxVal:number,unit:string,threshold: Map<number,string>) {
        this.name = name;
        this.mqttName = mqttName;
        this.minVal = minVal;
        this.maxVal = maxVal;
        this.unit = unit;
        this.threshold = threshold;
    }
}