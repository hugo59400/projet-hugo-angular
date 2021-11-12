import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from '../shared/models/client';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  clients:Client[]=[]

id?: number = undefined;
  constructor(private route: ActivatedRoute, private userService: ClientService,private router: Router) { }

  ngOnInit(): void {
    // récupérer l'id depuis l'url
    this.id = this.route.snapshot.params['id'];

    // récupération en asynchrone des params de l'url
    this.route.params.subscribe((params) => {
      console.log(params);
    })
    // appel du service
    this.refreshClients();
  }
  refreshClients(): Subscription {
    return this.userService.getClients()
      // souscription aux changements de l'observable
      .subscribe(
        // dés qu'il y a une reponse
        (clients: Client[]) => {
          // j'assigne les utilisateurs récupére au tableau du composant
          this.clients = clients;
        }
      );
  }



}
