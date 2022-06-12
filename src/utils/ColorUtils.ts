import Sensor from "@/types/Sensor";

export function generateColor(sensorInfo: Sensor, sensorValue: number) : string {
    let oldKey = 0;
    for(const [key,value] of sensorInfo.threshold) {
        if(oldKey <= sensorValue && sensorValue <= key) {
            return value;
        }
        oldKey = key;
    }
    return '';
}