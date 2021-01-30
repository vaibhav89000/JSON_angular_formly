import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get<FormlyFieldConfig[]>('assets/jsons/200.json');
  }
}
