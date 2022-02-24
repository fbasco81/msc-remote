import moment, { Moment } from "moment-timezone";

export function getCurrentCetTime(): Moment {
    return moment().tz("Europe/Rome");
} 