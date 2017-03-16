export interface UploadInfo {
  complete: boolean
  progress: number
  imageFile: File,
  imageName?: string,
  fieldName?: string
}
