import { environment } from '../../environments/environment'

export const config = {
  apiEndPoint: environment.apiEndpoint,
  tokenName: `bee-jwt-token-${ environment.envName}`
}
