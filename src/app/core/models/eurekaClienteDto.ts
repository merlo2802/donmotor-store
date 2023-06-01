import { EmpresaDto } from './empresaDto';
import { CategoriaDto } from './categoriaDto';
import { ProductoDto } from './productoDto';
export interface EurekaClienteDto {
    empresaDto: EmpresaDto;
    categoriaDtoList: CategoriaDto[];
    productoDtoList: ProductoDto[];
}
