import { Component, OnInit } from '@angular/core';
import { RegioniService } from '../regioni.service';
import { Regioni } from '../regioni.model';

@Component({
  selector: 'app-regioni',
  templateUrl: './regioni.component.html',
  styleUrls: ['./regioni.component.css']
})
export class RegioniComponent implements OnInit {
  @Input() regioni: Regioni = null;

  constructor(public regioniService: RegioniService) { }

  ngOnInit() {
  }

}