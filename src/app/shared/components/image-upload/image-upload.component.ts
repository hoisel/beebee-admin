import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'
import { UploadInfo, AssetsApiService } from '../../../core'

@Component( {
  selector: 'bee-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: [ './image-upload.component.css' ]
})
export class ImageUploadComponent implements OnChanges {

  @Input() public imageName: string
  @Input() public title: string
  @Input() public accept = 'jpg,jpeg,png,gif'
  @Input() public name: string
  @Input() public preview: boolean = false
  @Output() public onComplete = new EventEmitter<UploadInfo>()
  @Output() public onProgress = new EventEmitter<UploadInfo>()
  @Input() public imageUrlFallback: string = 'assets/beebee/img/profile.png'
  public imageUrl: string
  public progress: number = 0

  /**
   * Creates an instance of ImagePickerComponent.
   * @param {AssetsApiService} assetsApiService
   *
   * @memberOf ImagePickerComponent
   */
  constructor( private assetsApiService: AssetsApiService ) { }

  /**
   *
   *
   * @param {SimpleChanges} changes
   *
   * @memberOf ImagePickerComponent
   */
  public ngOnChanges( changes: SimpleChanges ) {
    // busca imagem se imageName mudar
    let change = changes[ 'imageName' ]
    if ( change && change.currentValue ) {
      this.getImageUrl( change.currentValue )
    }
  }

  /**
   *
   *
   * @private
   * @param {string} imageName
   *
   * @memberOf ImageUploadComponent
   */
  private getImageUrl( imageName: string ) {
    this.assetsApiService.getImageUrl( imageName )
      .subscribe( {
        next: imageUrl => this.imageUrl = imageUrl,
        error: () => this.imageUrl = this.imageUrlFallback
      })
  }

  /**
   *
   *
   * @param {File} imageFile
   * @param {string} imageName
   * @returns
   *
   * @memberOf UploadComponent
   */
  public onFileChange( imageFile: File ) {
    if ( !imageFile ) { return }

    if ( this.preview ) {
      return this.previewImage( imageFile )
    }

    this.uploadImage( imageFile )
  }

  /**
   *
   *
   * @private
   * @param {File} imageFile
   * @param {string} imageName
   *
   * @memberOf UploadComponent
   */
  private uploadImage( imageFile: File ) {
    this.assetsApiService.uploadImage( imageFile )
      .subscribe( {
        next: ( uploadInfo: UploadInfo ) => {
          this.progress = uploadInfo.progress
          this.onProgress.emit( uploadInfo )

          if ( uploadInfo.complete ) {
            this.previewImage( imageFile )
            this.onComplete.emit( Object.assign( uploadInfo, { fieldName: this.name }) )
          }
        },
        error: () => this.progress = 0,
        complete: () => this.progress = 0
      })
  }

  /**
   *
   *
   * @private
   * @param {File} imageFile
   * @param {string} imageName
   *
   * @memberOf UploadComponent
   */
  private previewImage( imageFile: File ) {
    const reader = new FileReader()
    reader.onload = ( e: any ) => this.imageUrl = e.target.result
    reader.readAsDataURL( imageFile )
  }
}
