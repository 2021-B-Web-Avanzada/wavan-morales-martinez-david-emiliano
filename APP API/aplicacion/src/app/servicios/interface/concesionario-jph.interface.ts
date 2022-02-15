import { AutoJphInterface } from "./auto-jph.interface";

export interface ConcesionarioJphInterface {
        nombreConcesionario: string;
        direccion: string;
        telefono: string;
        abierto: boolean;
        web: string;
        logo: string;
        autos: AutoJphInterface[]
}