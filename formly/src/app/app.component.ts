import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
      },
    },
    {
      key: 'LastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Last Name',
        required: false,
      },
    },
    {
      key: 'PhoneNumber',
      type: 'input',
      templateOptions: {
        label: 'PhoneNumber',
        placeholder: 'Phone Number',
        type: 'Number',
        required: false,
      },
    }
  ];


  ngOnInit(){

  }

  submit(){
    console.log(this.model);
  }

}
