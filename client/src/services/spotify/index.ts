// Service for spotify
export interface ISpotify
{
    authEndpoint: string;
    redirectUri: string;
    clientId: string;
    scopes: Array<string>;
    getUrl():string;
}

export class Spotify implements ISpotify {
    public authEndpoint:string;
    public redirectUri:string;
    public clientId:string;
    public scopes: Array<string>;

    constructor() {
      this.authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
      this.redirectUri = process.env.REACT_APP_REDIRECT_URI;
      this.clientId = process.env.REACT_APP_CLIENT_ID;
      this.scopes = [
        'streaming',
        'user-read-email',
        'user-read-private',
      ];
    }

    public getUrl(): string {
      const loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&resp
      onse_type=code&redirect_uri=${this.redirectUri}&scope=
      ${this.scopes.join('%20')}`;

      return loginUrl;
    }
}
