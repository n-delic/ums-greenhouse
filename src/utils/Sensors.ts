import Sensor from "@/types/Sensor";

export const sensorInfo = [
    new Sensor('Temperature','TEMP',0,50,'°C',{
        bad: {
            15: '#fff',
            
        },
        good: {15:'ss'},
        acceptable:{15:'ss'}
    }),
    new Sensor('Air Humidity','HUM',0,100,'%',{
        bad: {
            15: '#fff',
            
        },
        good: {15:'ss'},
        acceptable:{15:'ss'}
    }),
    new Sensor('Ground Humidity','GHUM',0,100,'%',{
        bad: {
            15: '#fff',
        },
        good: {15:'ss'},
        acceptable:{15:'ss'}
    }),
];