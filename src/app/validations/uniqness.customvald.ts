import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

export class UniqnessValidator{

static CheckUniqness(control: AbstractControl): Promise<ValidationErrors>|null
{

    // tslint:disable-next-line:no-shadowed-variable
    return new Promise(( resolve, reject) => {

        setTimeout(() => {
            if (control.value === 'gohr915@gmail.com')
            {
                resolve({CheckUniqness: true}) ;
            }else{
               resolve(null) ;
            }
        }, 2000);

    });

   /* if ( (control.value as string).indexOf(' ') !== -1)
     {
         return {CheckUniqness: true};
     }else{

        return null ;
     }*/
// tslint:disable-next-line:eofline
    }
}
