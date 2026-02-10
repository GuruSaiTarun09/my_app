import { AbstractControl } from "@angular/forms";

export function capgeminiEmail(control:AbstractControl){
    if(control.value.includes('@capgemini.com')){
        return null;
    }
    else{
        return{'capgeminiEmail':true}
    }
}