import { Schema } from "mongoose";

export const SwPortSchema = new Schema({
    Proveedor: String,
    Cliente: String,
    Vlan: Number,
    RazonSocial: String,
    L2VPLS_Service: Boolean,
    L3VPN: Boolean,
    Tecnologia: String,
    Hub: String,
    Datacenter: String,
    Interfaz: Number,
    Estado: String,
    Observaciones: String,
    Date: { type: Date, default: Date.now}
});