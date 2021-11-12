import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Salle } from '../shared/models/salle';
import { SalleService } from '../shared/services/salle.service';

@Component({
  selector: 'app-salle-page',
  templateUrl: './salle-page.component.html',
  styleUrls: ['./salle-page.component.css']
})
export class SallePageComponent implements OnInit {

  salles:Salle[]=[]

id?: number = undefined;
  constructor(private route: ActivatedRoute, private userService: SalleService) { }

  ngOnInit(): void {
    // récupérer l'id depuis l'url
    this.id = this.route.snapshot.params['id'];

    // récupération en asynchrone des params de l'url
    this.route.params.subscribe((params) => {
      console.log(params);
    })
    // appel du service
    this.refreshSalles();
  }
  refreshSalles(): Subscription {
    return this.userService.getSalles()
      // souscription aux changements de l'observable
      .subscribe(
        // dés qu'il y a une reponse
        (salles: Salle[]) => {
          // j'assigne les utilisateurs récupére au tableau du composant
          this.salles = salles;
        }
      );
  }

}
