import { Model, Company, Address, UserRole } from '../model'

export class User extends Model {
  public address: Address
  public companies: Company[] = []
  public role: UserRole | undefined
  public cellphone: string = ''
  public cpf: string = ''
  public driverLicence: string = ''
  public driverLicenceExpiration: string
  public email: string = ''
  public paymentAccounts: string = ''
  public phone: string = ''
  public receiptAccounts: string = ''
  public rg: string = ''
}
