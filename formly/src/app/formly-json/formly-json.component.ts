import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ServiceService } from '../servies/service.service';

@Component({
  selector: 'app-formly-json',
  templateUrl: './formly-json.component.html',
  styleUrls: ['./formly-json.component.css']
})
export class FormlyJsonComponent implements OnInit {
  title = 'formly-json';

  options: FormlyFormOptions = {};
  form = new FormGroup({});
  model: any = { };
  fields: FormlyFieldConfig[];

  constructor(private service: ServiceService){
    this.service.getdata().subscribe((res)=>{
      console.log(res);
      this.fields = res;
    })
  }


  ngOnInit(){

  }

  submit(){
    console.log(this.model);
  }

}
