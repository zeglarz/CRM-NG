import {Injectable} from '@angular/core';

export abstract class ApiService {
  abstract fetch(data: string): string;
}
