import {InjectionToken} from "@angular/core";

export enum Level {
  LOW,
  MEDIUM,
  HIGH
}

export interface Config {
  url: string;
  count: number;
  level: Level;
}

export const CONFIG: InjectionToken<Config> = new InjectionToken<Config>('App configuration');
