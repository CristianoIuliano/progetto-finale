import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpUser: any[] = [];
  
  signUpObject: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObject: any = {
    userName: '',
    password: ''
  };

  constructor(){}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUser');
    if (localData != null) {
      this.signUpUser = JSON.parse(localData);
    }
  }

  onSignUp(){
    this.signUpUser.push(this.signUpObject);
    localStorage.setItem('signUpUser', JSON.stringify(this.signUpUser));
    this.signUpObject = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin(){
    let loginUser = this.signUpUser.find(u => u.userName == this.loginObject.userName && u.password == this.loginObject.password);
    if(loginUser != undefined) {
      alert('Successful login')
    }
    else{
      alert('Invalid credentials')
    }
  }

}
