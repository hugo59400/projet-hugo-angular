import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/shared/models/salle';
import { SalleService } from 'src/app/shared/services/salle.service';

@Component({
  selector: 'app-salle-card',
  templateUrl: './salle-card.component.html',
  styleUrls: ['./salle-card.component.css']
})
export class SalleCardComponent implements OnInit {

  @Input() salle!: Salle;

  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor(private salleService: SalleService,  private router: Router) { }

  ngOnInit(): void {
  }
}
