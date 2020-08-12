import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
userForm = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
  email: new FormControl('',Validators.required),
address: new FormControl('',Validators.required),
City: new FormControl('',Validators.required),
Code: new FormControl('',[Validators.pattern('^[1-9][0-9]{4}'),Validators.required])

})
onSubmit(){
console.log(this.userForm.value);

}

}
