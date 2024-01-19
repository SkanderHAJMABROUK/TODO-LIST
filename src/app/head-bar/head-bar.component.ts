import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
@Input() title:string=''
constructor(public _service:TodoService,public _user:UserService,
  
  private router:Router){
  }


 signOut()
 {
  localStorage.removeItem("token")
  this._user.isAuthenticated = false
 this.router.navigateByUrl('signin')
 window.location.reload()
 }

}
