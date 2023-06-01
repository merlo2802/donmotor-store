import { ConfiguracionDto } from './configuracionDto';
import { CiudadDto } from './ciudadDto';
import { SectorDto } from './sectorDto';
import { MonedaDto } from './monedaDto';

export interface EmpresaDto {
    id: number;
    nombre: string;
    slogan: string;
    razonSocial: string;
    nit: string;
    numeroWhatsapp: string;
    telefono: string;
    urlFacebook: string;
    urlInstagram: string;
    urlPersonalizada: string;
    direccion: string;
    gpsLatitud: number;
    gpsLongitud: number;
    enviosNacionales: boolean;
    enviosInternacionales: boolean;

    ciudadDto: CiudadDto;
    sectorDto: SectorDto;
    monedaDto: MonedaDto;
    configuracionEmpresaDto: ConfiguracionDto;
}
