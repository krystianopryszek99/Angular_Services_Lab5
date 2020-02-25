import { Component, OnInit } from '@angular/core';
import { InterestService } from '../Services/interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private service: InterestService) { }

  ngOnInit(): void {
  }

  Total: number = 0;
  years: number;

  calculateinterest() {
    this.Total = this.service.calculateinterest(this.years);
    }

  }



