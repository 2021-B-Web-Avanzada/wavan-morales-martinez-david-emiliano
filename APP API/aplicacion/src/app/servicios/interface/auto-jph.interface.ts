export interface AutoJphInterface {
    nombreConcesionario: string;
    direccion: string;
    telefono: string;
    abierto: boolean;
    web: string;
    logo: string;
    autos: 
        {
            modelo: string;
            anio: number;
            nuevo: boolean;
            color: string;
            precio: number;
        }
}