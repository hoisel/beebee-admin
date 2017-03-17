import { Component, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core'
import { WizardStepComponent } from './wizard-step/wizard-step.component'

@Component( {
  selector: 'bee-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: [ './wizard.component.css' ]
})
export class WizardComponent implements OnInit, AfterContentInit {
  @ContentChildren( WizardStepComponent ) wizardSteps: QueryList<WizardStepComponent>
  @Output() public onStepChanged: EventEmitter<WizardStepComponent> = new EventEmitter<WizardStepComponent>()

  private _steps: Array<WizardStepComponent> = []
  private _isCompleted: boolean = false

  /**
   * Creates an instance of WizardComponent.
   *
   * @memberOf WizardComponent
   */
  constructor() { }

  /**
   *
   *
   *
   * @memberOf WizardComponent
   */
  public ngOnInit() {
  }

  /**
   *
   *
   *
   * @memberOf WizardComponent
   */
  public ngAfterContentInit() {
    this.wizardSteps.forEach( step => this._steps.push( step ) )
    this.steps[ 0 ].isActive = true
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {Array<WizardStepComponent>}
   * @memberOf WizardComponent
   */
  private get steps(): Array<WizardStepComponent> {
    return this._steps.filter( step => !step.hidden )
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberOf WizardComponent
   */
  private get isCompleted(): boolean {
    return this._isCompleted
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {WizardStepComponent}
   * @memberOf WizardComponent
   */
  private get activeStep(): WizardStepComponent {
    return this.steps.find( step => step.isActive )
  }

  /**
   *
   *
   * @private
   *
   * @memberOf WizardComponent
   */
  private set activeStep( step: WizardStepComponent ) {
    if ( step !== this.activeStep && !step.isDisabled ) {
      this.activeStep.isActive = false
      step.isActive = true
      this.onStepChanged.emit( step )
    }
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {number}
   * @memberOf WizardComponent
   */
  private get activeStepIndex(): number {
    return this.steps.indexOf( this.activeStep )
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberOf WizardComponent
   */
  private get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberOf WizardComponent
   */
  private get hasPrevStep(): boolean {
    return this.activeStepIndex > 0
  }

  /**
   *
   *
   * @param {WizardStepComponent} step
   *
   * @memberOf WizardComponent
   */
  public goToStep( step: WizardStepComponent ) {
    if ( !this.isCompleted ) {
      this.activeStep = step
    }
  }

  /**
   *
   *
   *
   * @memberOf WizardComponent
   */
  public next() {
    if ( this.hasNextStep ) {
      let nextStep: WizardStepComponent = this.steps[ this.activeStepIndex + 1 ]
      this.activeStep.onNext.emit()
      nextStep.isDisabled = false
      this.activeStep = nextStep
    }
  }

  /**
   *
   *
   *
   * @memberOf WizardComponent
   */
  public previous() {
    if ( this.hasPrevStep ) {
      let prevStep: WizardStepComponent = this.steps[ this.activeStepIndex - 1 ]
      this.activeStep.onPrev.emit()
      prevStep.isDisabled = false
      this.activeStep = prevStep
    }
  }

  /**
   *
   *
   *
   * @memberOf WizardComponent
   */
  public complete() {
    this.activeStep.onComplete.emit()
    this._isCompleted = true
  }
}
