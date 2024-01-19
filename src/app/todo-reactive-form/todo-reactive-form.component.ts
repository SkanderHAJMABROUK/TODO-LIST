import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// Chaque service importé on doit l'injecter
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {

  constructor(private formBuilder : FormBuilder,
              private userService:UserService,
              private router:Router)
  {
   
  }
  
  
  // La fct group permet de groupe les elements d'un formulaire
  authForm=this.formBuilder.nonNullable.group(
    {
      login:['',Validators.required],
      password:['',Validators.required] //Validators pour les contraintes d'un formulaire
    }
  )

  checkLogin(){
    //Pour accéder à un fichier json : HttpClient
    if(this.authForm.value.login&&this.authForm.value.password)
    {
      this.userService.getUser(this.authForm.value.login,this.authForm.value.password).
      subscribe(response=>
        {
        if(response.length)
        {
          localStorage.setItem("token",response[0].token)
          
          this.router.navigateByUrl('')
          this.userService.isAuthenticated = true;
        }
        else
          alert('Login ou mot de passe incorrect!')
        }
        )
    }
  }

}
