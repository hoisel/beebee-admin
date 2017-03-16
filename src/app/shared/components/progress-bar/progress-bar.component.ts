import { Component, Input } from '@angular/core'

@Component( {
  selector: 'bee-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [ './progress-bar.component.css' ]
})
export class ProgressBarComponent {

  @Input() progress: number
}
