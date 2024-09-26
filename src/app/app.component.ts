import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms'; 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule
    // BrowserAnimationsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';

registerForm : FormGroup;

constructor ( private _fb : FormBuilder){

}

ngOnInit(){
this.setFormState(); // we have to call so that when it will run the form will be created . 
}
setFormState(){
  this.registerForm = this._fb.group({
    id :[0],
    title:['',Validators.required],
    firstName : ['', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(10)])],
    lastName : ['', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(10)])],
    email:['', Validators.compose([Validators.required, Validators.email])],
    dob:['',Validators.compose([Validators.required])],
    password : ['',Validators.compose([Validators.required])],
    confirmPassword :['', Validators.required],
    acceptTerms : [false, Validators.required]

    
  })
}
}

