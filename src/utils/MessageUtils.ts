import IMessage from "../types/IMessage";

export function parseMessage(msg: string) : IMessage {
    const message = msg.split("#");
    return {
        sensor: message[0],
        value: parseFloat(message[1])
    };
}