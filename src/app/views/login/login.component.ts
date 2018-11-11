import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:any;
  password:any;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
  }
  login(){

    var body={
      "email":this.userName,
      "password":this.password
    }
    console.log(body);
        this.http.post('http://127.0.0.1:3000/api/user/loginUser',body).subscribe((data: any) => {
          console.log(data);
this.router.navigateByUrl('dashboards/v1');
        });
  }
}
