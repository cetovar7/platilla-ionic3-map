import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DtosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class Connet {
  private _conncode: string = ""; // 'Sateqmx_TP';
  set conncode(value: string) { this._conncode = value }
  get conncode(): string { return this._conncode }

}


@Injectable()
export class LoggedIn {

  private _SessionID: number = 0;
  set SessionID(value: number) { this._SessionID = value; }
  get SessionID(): number { return this._SessionID; }

  private _OperatorID: number = 0;
  set OperatorID(value: number) { this._OperatorID = value; }
  get OperatorID(): number { return this._OperatorID; }

  private _AccessLogin: boolean = false;
  set AccessLogin(value: boolean) { this._AccessLogin = value; }
  get AccessLogin(): boolean { return this._AccessLogin; }

  private _Email: string = "";
  set Email(value: string) { this._Email = value; }
  get Email(): string { return this._Email; }

  private _Message: string = "";
  set Message(value: string) { this._Message = value; }
  get Message(): string { return this._Message; }

}
