import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() client!: Client;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor(private clientService: ClientService,  private router: Router) { }

  ngOnInit(): void {
  }
  

}
