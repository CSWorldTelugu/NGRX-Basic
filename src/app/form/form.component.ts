import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private store:Store<any>){}


  updateName(input){

    this.store.dispatch({type:'name-edit',payload:input.value})
    input.value=""
  }
  updateEmail(input){

    this.store.dispatch({type:'email-edit',payload:input.value})
    input.value=""



  }
  updateMobile(input){

    this.store.dispatch({type:'mobile-edit',payload:input.value})
    input.value=""



  }

}
