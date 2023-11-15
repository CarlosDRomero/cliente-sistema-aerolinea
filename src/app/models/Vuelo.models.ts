import { CiudadModel } from "./ciudades.model";

export enum TipoVuelo{
  'ECONOMY',
  'PREMIUM_ECONOMY',
  'BUSINESS',
  'FIRST'
}
export class VueloModel{
  id?: string
  origen?: CiudadModel;
  destino?: CiudadModel;
  moneda?: string;
  tipo?: TipoVuelo;
  precio?: number;
  duracion?: string;
  fecha_ida?: Date
  hora_salida?: string;
  fecha_vuelta?: Date
  codigo_aerolinea?:string
  nombre_aerolinea?: string
}