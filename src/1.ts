import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  getRandomNumber(min: number, max: number): number {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }
}
