export class BuscarVueloDto{
    originLocationCode?: string
    destinationLocationCode?: string
    departureDate?: string
  
    returnDate?: string | null
  
    adults: number = 1
  
    children?: number
  
    infants?: number
  
    travelClass?: string
    // nonStop: boolean = false
  
    currencyCode: string = 'COP'
    maxPrice?: number

    constructor(data: Partial<BuscarVueloDto> = {}) {
        Object.assign(this, data)
      }
  
}