import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component( {
  selector: 'bee-brand',
  templateUrl: './brand.component.html',
  styleUrls: [ './brand.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
} )
export class BrandComponent { }
