import { Injectable, InjectionToken, Inject } from '@angular/core';

import { Md5 } from 'ts-md5/dist/md5';

export interface AuthUser {
    ts: string;
    apiKey: string;
    hash: string;
}

export const PUBLIC_KEY: InjectionToken<string> = new InjectionToken('PUBLIC_KEY');
export const PRIVATE_KEY: InjectionToken<string> = new InjectionToken('PRIVATE_KEY');

@Injectable()
export class HashUserService {
    constructor( @Inject(PUBLIC_KEY) private _publicKey: string, @Inject(PRIVATE_KEY) private _privateKey: string) {}

    getAuthUser() {
        const authUser: AuthUser = {
            ts: new Date().getTime().toString(),
            apiKey: this._publicKey,
            hash: null
        };

        const md5 = new Md5();

        md5.appendStr(authUser.ts);
        md5.appendStr(this._privateKey);
        md5.appendStr(this._publicKey);

        authUser.hash = md5.end().toString();

        return authUser;
    }
}
