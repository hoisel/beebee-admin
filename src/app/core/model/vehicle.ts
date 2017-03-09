import { Model } from './model'
import { User } from './user'

export class Vehicle extends Model {
  cost: number
  vehicleTypeId: string
  vehicleType: VehicleType
  userOwner: User
  userOwnerId: string
  cargoTypes: CargoType[]
  optionals: Optional[]
}

export class VehicleType extends Model {
  icon: string
  maxDimensions: string
  maxWeight: string
  active: boolean
}

export class CargoType extends Model {
  maxDimensions: string
  maxWeight: string
  cost: number
}

export class Optional extends Model {
  cost: number
}
