import { Component, OnInit } from '@angular/core';
import { InterestService } from '../Services/interest.service';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private service: InterestService) { }

  ngOnInit(): void {
  }

  Total: number = 0;
  years: number;

  calculateinterest() {
    this.Total = this.service.calculateinterest(this.years);
    }


}
