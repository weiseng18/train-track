import { Line } from "./lines";

export interface TrainStationInfo {
    lat: number;
    lng: number;
    name: string;
    code: string;
}

export type LineMap = { [key in Line]: TrainStationInfo[] }