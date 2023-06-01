import { ProductoDto } from './productoDto';
export interface CategoriaDto {
    id: number;
    nombre: string;
    descripcion: string;
    idEmpresa: number;
    productos?: ProductoDto[];
}
