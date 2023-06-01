export interface ProductoDto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    idCategoria: number;
    cantidad?: number;
    imagen: string;
}
