// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { Md5 } from 'ts-md5/dist/md5';

export const environment = {
  production: false,
  marvel_api: 'https://gateway.marvel.com',
  marvel_api_versionv1: 'v1',
  marvel_api_key: 'ecabb751568004472dbc07970c9f9b22',
  marvel_api_private_key: '83d12bbbfeb15039388c97158fba9078b4133c3a',
  generateHash: function() {

    console.log('this: ', this);
    const ts = new Date().getTime();
    const hash = Md5.hashStr(ts + this.marvel_api_private_key + this.marvel_api_key);

    return {
      ts: `${ts}`,
      hash: `${hash}`
    };
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
