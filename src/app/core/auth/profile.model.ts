export abstract class Profile {
  public id: string = ''
  public name: string = ''
  public resourceName: string
  public isPersonalProfile: boolean
  public isCompanylProfile: boolean

  /**
   * Creates an instance of Profile.
   * @param {string} id
   * @param {string} name
   * @param {string} resourceName
   * @param {boolean} isPersonalAccount
   *
   * @memberOf Profile
   */
  constructor ( id: string, name: string, resourceName: string, isPersonalAccount: boolean ) {
    this.resourceName = resourceName
    this.name = name
    this.id = id
    this.isPersonalProfile = isPersonalAccount
    this.isCompanylProfile = !isPersonalAccount
  }
}

export class PersonalProfile extends Profile {
  constructor ( id: string, name: string ) {
    super( id, name, 'users', true )
  }
}

export class CompanyProfile extends Profile {
  constructor ( id: string, name?: string ) {
    super( id, name, 'companies', false )
  }
}
