import Sensor from "@/types/Sensor";

export const sensorInfo = [
    new Sensor('Temperature','TEMP',0,50,'°C',
    new Map<number,string>()
        .set(10,'#D22B2B')
        .set(20,'#EC5800')
        .set(25,'#097969')
        .set(30,'#EC5800')
        .set(50,'#D22B2B')
    ),
    new Sensor('Air Humidity','HUM',0,100,'%',
    new Map<number,string>()
        .set(50,'#D22B2B')
        .set(60,'#EC5800')
        .set(70,'#097969')
        .set(80,'#EC5800')
        .set(100,'#D22B2B')
    ),
    new Sensor('Ground Humidity','GHUM',0,100,'%',
    new Map<number,string>()
        .set(50,'#D22B2B')
        .set(60,'#EC5800')
        .set(70,'#097969')
        .set(80,'#EC5800')
        .set(100,'#D22B2B')
    ),
];