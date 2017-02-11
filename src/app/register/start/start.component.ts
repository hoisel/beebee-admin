import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SharedDataService } from './../../../providers'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
    public title: Title,
    public router: Router
  ) {
    if (!this.shared.data || !this.shared.data.user) {
      this.router.navigate(['/cadastro'])
    }
  }

  ngOnInit() {
    this.title.setTitle('Começar | BeeBee')
  }
}
