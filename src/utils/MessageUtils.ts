import Control from "@/types/Control";
import IMessage from "../types/IMessage";

export function parseMessage(msg: string) : IMessage {
    const message = msg.split("#");
    return {
        sensor: message[0],
        value: parseFloat(message[1])
    };
}

export function createMessage(control: Control, value: boolean) : string {
    const message = `${control.mqttName}#${value?'1':'0'}`;
    return message;
}