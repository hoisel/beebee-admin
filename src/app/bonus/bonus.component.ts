import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers'

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {

  codigoIndicacao: string = this.user.id
  constructor(private user: UserService) { }

  ngOnInit() {
  }

}