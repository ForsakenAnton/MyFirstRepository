import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {BillGatesQuotation} from '../bill-gates-quotation';

@Component({
  selector: 'app-bill-gates-speaks',
  templateUrl: './bill-gates-speaks.component.html',
  styleUrls: ['./bill-gates-speaks.component.css']
})
export class BillGatesSpeaksComponent implements OnInit {
  billGatesQuotation: BillGatesQuotation;

  constructor() { }

  ngOnInit(): void {
    this.billGatesQuotation = {
      id: 1,
      name: "Bill Gates",
      quotation: [
        "«Patience is a key element of success»",
        "If you think your teacher is tough, wait till you get a boss",
        "Life is not fair — get used to it!",
        "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
        "Be nice to nerds. Chances are you’ll end up working for one"
      ]
    }
  }
}
