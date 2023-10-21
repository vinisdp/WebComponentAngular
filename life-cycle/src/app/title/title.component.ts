import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: String = '';

  constructor() {
    console.log(`Contrutor ${this.nome}`)
  }

  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`);
  }

  ngOnInit(): void {
    console.log(`OnInit ${this.nome}`);
  }

}
