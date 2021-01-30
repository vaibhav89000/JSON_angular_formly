import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ServiceService } from '../servies/service.service';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent implements OnInit {
  title = 'formly';

  // form: FormGroup;
  options: FormlyFormOptions = {};
  // model: any;
  // fields: FormlyFieldConfig[];

  form = new FormGroup({});
  model: any = { };
  fields: FormlyFieldConfig[] = [
    {
      key: 'FirstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'First Name',
        required: false,
        minLength: 3,
        maxLength: 20
      },
    },
    {
      key: 'LastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Last Name',
        required: false,
        minLength: 3,
        maxLength: 20
      },
    },
    {
      key: 'PhoneNumber',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        placeholder: 'Phone Number',
        type: 'Number',
        required: false,
      },
    }
  ];

  constructor(private service: ServiceService){
    this.service.getdata().subscribe((res)=>{
      console.log('res',res);
    })
  }


  ngOnInit(){

  }

  submit(){
    console.log(this.model);
  }

}
