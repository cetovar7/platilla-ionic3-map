import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the TranslateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslateProvider {

  constructor(private translate: TranslateService) {
    //console.log('Hello TranslateProvider Provider');
  }

  public Traductor(strTraduc: string) {
    let _val: string
    this.translate.get(strTraduc).subscribe(
      value => {
        _val = value;
      }
    )
    return _val;
  }

  public TraductorValor(strTraduc: string, _value:any) {
    let _val: string
    this.translate.get(strTraduc, { value: _value }).subscribe((value: string) => {
      _val = value;
      // console.log(value);
      //=> 'hello world'
    });
    return _val;
  }

  public GetLeguajeUse() {
    return this.translate.getLangs().toString();
  }


}
