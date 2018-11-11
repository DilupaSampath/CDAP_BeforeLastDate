import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userName:any;
password:any;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
  }
  register() {
    var body={
      "email":this.userName,
      "password":this.password
    }
        this.http.post('http://127.0.0.1:3000/api/user/createUser',body).subscribe((data: any) => {
          console.log(data);
this.router.navigateByUrl('/login');
        });
    
      }

}
