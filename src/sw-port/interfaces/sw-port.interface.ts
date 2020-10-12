import { Document } from "mongoose";

export interface SwPortInterface extends Document {
   readonly Proveedor: string,
   readonly Cliente: string,
   readonly Vlan: number,
   readonly RazonSocial: string,
   readonly L2VPLS_Service: boolean,
   readonly L3VPN: boolean,
   readonly Tecnologia: string,
   readonly Hub: string,
   readonly Datacenter: string,
   readonly Interfaz: number,
   readonly Estado: string,
   readonly Observaciones: string,
   readonly Date: Date
}