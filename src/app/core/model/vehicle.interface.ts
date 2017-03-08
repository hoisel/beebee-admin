import { IModel } from './model.interface'
import { IUser } from './user.interface'

export interface IVehicle extends IModel {
  cost: number
  vehicleTypeId: string
  vehicleType: IVehicleType
  userOwner: IUser
  userOwnerId: string
  cargoTypes: ICargoType[]
  optionals: IOptional[]
}

export interface IVehicleType extends IModel {
  icon: string
  maxDimensions: string
  maxWeight: string
  active: boolean
}

export interface ICargoType extends IModel {
  maxDimensions: string
  maxWeight: string
  cost: number
}

export interface IOptional extends IModel {
  cost: number
}
