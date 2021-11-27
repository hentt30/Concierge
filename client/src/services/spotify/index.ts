

// Service for spotify
export interface ISpotify
{
    authEndpoint: string;
    redirectUri: string;
    clientId: string;
    backendUrl:string;
    scopes: Array<string>;
    getUrl():string;
    login():Promise<void>;
}

export class Spotify implements ISpotify {
    public authEndpoint:string;
    public redirectUri:string;
    public clientId:string;
    public scopes: Array<string>;
    public backendUrl: string;

    constructor() {
      this.authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
      this.redirectUri = process.env.REACT_APP_REDIRECT_URI;
      this.clientId = process.env.REACT_APP_CLIENT_ID;
      this.scopes = ['user-read-private', 'user-read-email',
        'user-top-read', 'user-follow-read', 'playlist-modify-private',
        'playlist-read-collaborative', 'playlist-read-private',
        'playlist-modify-public'];
      this.backendUrl = process.env.REACT_APP_BACKEND_URL;
    }

    public getUrl(): string {
      const loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&resp
      onse_type=code&redirect_uri=${this.redirectUri}&scope=
      ${this.scopes.join('%20')}&response_type=token&show_dialog=true`;

      return loginUrl;
    }

    public async login(): Promise<void> {
      const spotifyUrl = this.getUrl();
      window.location.href =`${spotifyUrl}`;
    }
}
