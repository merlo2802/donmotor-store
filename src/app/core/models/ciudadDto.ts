import { PaisDto } from './paisDto';
export interface CiudadDto {
    id: number;
    nombre: string;
    codigo: string;
    estado: string;
    idPais: number;
    paisDto: PaisDto;
}
