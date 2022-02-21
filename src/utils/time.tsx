import moment from "moment-timezone";

export function getCurrentCetTime(): string {
    return moment().tz("Europe/Rome").format("HH:mm");
} 