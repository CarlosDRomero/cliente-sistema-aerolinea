import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PasswordConfirm(options? : any): ValidatorFn {
  return (abstractSymbol: AbstractControl): ValidationErrors | null => {
    
    var controlName: string = options?.control || 'password';
    var matchingControlName: string = options?.matchingControlName || 'passwordConfirm';
    const control = abstractSymbol.get(controlName);
    const matchingControl = abstractSymbol.get(matchingControlName);
    
    if (
      matchingControl?.errors &&
      !matchingControl?.errors?.['confirmedValidator']
    ) {
      return null;
    }
    if (control!.value !== matchingControl!.value) {
      const error = { confirmedValidator: true}
      matchingControl!.setErrors(error);
      return error;
    } else {
      matchingControl?.setErrors(null);
      return null;
    }
  };
}
