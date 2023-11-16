import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function BusquedaVuelo(options? : any): ValidatorFn {
  return (abstractSymbol: AbstractControl): ValidationErrors | null => {
    
    const fechaida = abstractSymbol.get('fechaida');
    const fechaidavuelta = abstractSymbol.get('fechaidavuelta');
    const adultos = abstractSymbol.get('adultos');
    const niños = abstractSymbol.get('niños');
    const bebes = abstractSymbol.get('bebes');
    
    const now = new Date()
    const fi = new Date(fechaida?.value)
    var fiv = []
    //comprobar que es de tipo array

    if (Array.isArray(fechaidavuelta?.value)){
      fechaidavuelta?.value.map((r:any)=>{
        if (fechaidavuelta.getError('nofecha')) return;
        const fi = new Date(r)
        fi.setHours(23)
        fi.setMinutes(59)
        fi.setSeconds(59)
        if (now.getTime()>fi.getTime()){
          const error = {nofecha:true}
          fechaidavuelta!.setErrors(error)
        }
      })
    }
    fi.setHours(23)
    fi.setMinutes(59)
    fi.setSeconds(59)
    if (now.getTime()>fi.getTime()){
      const error = {nofecha:true}
      fechaida!.setErrors(error)
    }
    if (adultos && niños && bebes){
      if (adultos.value+niños.value+bebes.value>9){
        const error = {maxpasajeros: true}
        adultos.setErrors(error)
        niños.setErrors(error)
        bebes.setErrors(error)
      }
    }
    return null

    // if (control!.value !== matchingControl!.value) {
    //   const error = { confirmedValidator: true}
    //   matchingControl!.setErrors(error);
    //   return error;
    // } else {
    //   matchingControl?.setErrors(null);
    //   return null;
    // }
  };
}