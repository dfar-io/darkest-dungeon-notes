import { Injectable } from '@angular/core';
import { courtyard } from './data/courtyard';
import { cove } from './data/cove';
import { farmstead } from './data/farmstead';
import { ruins } from './data/ruins';
import { warrens } from './data/warrens';
import { weald } from './data/weald';
import { Area } from './area';
import { hamlet } from './data/hamlet';
import { dd1 } from './data/dd1';
import { dd2 } from './data/dd2';
import { dd3 } from './data/dd3';
import { dd4 } from './data/dd4';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  data = [
    courtyard,
    cove,
    farmstead,
    ruins,
    warrens,
    weald,
    hamlet,
    dd1,
    dd2,
    dd3,
    dd4
  ]

  constructor() { }

  getAreaById(id: string): Area {
    const result =  this.data.find(h => h.id === id);

    if (result === undefined) {
      throw new Error(`Cannot find area with id '${id}'`);
    }

    return result;
  }
}
