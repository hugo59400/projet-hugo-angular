import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  // attribut du composant qui contient le formulaire
  clientForm: FormGroup;

  constructor(private userService: ClientService, private router: Router) {
    // création du formulaire à la création du composant
    this.clientForm = new FormGroup({
      // un formControl par input
      name: new FormControl("name", [Validators.required, Validators.minLength(5)]),
      firstname: new FormControl("firstname", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("email", Validators.email),
     
    
    })
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    // si le formulaire est valide
    if (this.clientForm.valid) {
      // j'envois mon utilisateur à l'API
      this.userService.createClient(this.clientForm.value)
        // si on ne se sert pas de la reponse on mets un "_" en param du callback
        .subscribe((_) => {
          this.router.navigate(['../clients']);
        })
    }
    console.log(this.clientForm);
  }



 

}
