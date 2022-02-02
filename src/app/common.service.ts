import { Injectable } from '@angular/core';
import  *  as  projects  from  './project.json';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  projects: any = (projects as any).default;
  constructor() { }
}
