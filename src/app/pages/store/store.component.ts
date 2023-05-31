import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Digitec } from 'src/app/core/digitec-class/digitec';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent  extends Digitec implements OnInit {
  public notFound: boolean = false;
  private pathName: string;
  public clienteEmpresa: any;
  // public empresa: EmpresaDto;
  // public categorias: CategoriaDto[];
  // public productos: ProductoDto[];

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
  ) {
    super();
    this.pathName = location.pathname;
  }

  ngOnInit(): void {
    if (this.pathName.length > 1) {
      const urlPersonalizada: string = this.pathName.substring(1);
      this.obtenerDatosEmpresa(urlPersonalizada);
    }
  }

  private obtenerDatosEmpresa(url: string) {
    console.log(url);
    this.notFound = true;
    this.clienteEmpresa = {
      name : "store 1"
    }
  }

  // private obtenerDatosEmpresa(urlPersonalizada: string):void {
  //   this.eurekaService.obtenerEmpresa(urlPersonalizada).subscribe(resp => {
  //       const empresa = resp.body;
  //       if(empresa){
  //         this.empresa = this.toEmpresaDto(empresa)
  //         this.title.setTitle(this.empresa.nombre);
  //         const color = this.empresa.configuracionEmpresaDto.colorSeccion ? this.empresa.configuracionEmpresaDto.colorSeccion : '#ed5725';
  //         this.meta.updateTag({ content:  color }, 'name=theme-color');
  //         this.eurekaService.obtenerCategorias(this.empresa.id).subscribe(respC => {
  //           const categorias = respC.body;
  //           if (categorias) {
  //             this.categorias = this.toCategoriasDto(categorias);
  //             this.eurekaService.obtenerProductos(this.empresa.id).subscribe(responseP => {
  //               if (responseP) {
  //                 const productos = responseP.body;
  //                 this.productos = this.toProductosDto(productos);
  //                 this.clienteEmpresa = {
  //                   empresaDto: this.empresa,
  //                   categoriaDtoList: this.categorias,
  //                   productoDtoList: this.productos
  //                 };
  //                 this.encriptarDatos(this.empresa, Llaves.dataEmpresa, Llaves.claveEncriptacion);
  //               }
  //             }, error => {
  //               console.log('error al obtener los productos de la empresa id', this.empresa.id);
  //             });
  //           }
  //         }, error => {
  //           console.log('error al obtener las categorias de la empresa id', this.empresa.id);
  //         })
  //       }else {
  //         this.notFound = true;
  //         console.log('no hay ninuna empresa:  ', urlPersonalizada);
  //       }
  //     }, error => {
  //       console.log('error al obtener la empresa en la ruta ', urlPersonalizada);
  //   });
  // }

  // private obtenerDatosDeEmpresa(urlPersonalizada: string): void {
  //   this.eurekaClienteService.obtenerEmpresa(urlPersonalizada).subscribe((response) => {
  //     if (response.length > 0) {
  //       this.empresa = this.toEmpresaDto(response[0]);
  //       this.title.setTitle(this.empresa.nombre);
  //       const color = this.empresa.configuracionEmpresaDto.colorSeccion ? this.empresa.configuracionEmpresaDto.colorSeccion : '#ed5725';
  //       this.meta.updateTag({ content:  color }, 'name=theme-color');

  //       this.eurekaClienteService.obtenerCategorias(this.empresa.id).subscribe(responseC => {
  //         if (responseC) {
  //           this.categorias = this.toCategoriasDto(responseC);
  //           this.eurekaClienteService.obtenerProductos(this.empresa.id).subscribe(responseP => {
  //             if (responseP) {
  //               console.log(responseP);
  //               this.productos = this.toProductosDto(responseP);

  //               this.clienteEmpresa = {
  //                 empresaDto: this.empresa,
  //                 categoriaDtoList: this.categorias,
  //                 productoDtoList: this.productos
  //               };

  //               this.encriptarDatos(this.empresa, Llaves.dataEmpresa, Llaves.claveEncriptacion);
  //             }
  //           }, error => {
  //             console.log('error al obtener los productos de la empresa id', this.empresa.id);
  //           });
  //         }
  //       }, error => {
  //         console.log('error al obtener las categorias de la empresa id', this.empresa.id);
  //       });
  //     }else {
  //       this.notFound = true;
  //       console.log('no hay ninuna empresa:  ', urlPersonalizada);
  //     }
  //   }, error => {
  //     console.log('error al obtener la empresa en la ruta ', urlPersonalizada);
  //   });
  // }

  // public toEmpresaDto(empresa): EmpresaDto {
  //  const configuracionEmpresaDto: ConfiguracionDto = {
  //     id: empresa.id,
  //     urlLogo: environment.aws+empresa.imagenPerfil,
  //     urlPortada: environment.aws+empresa.imagenPortada,
  //     horarioInicio: empresa.openTime,
  //     horarioCierre: empresa.closeTime,
  //     colorSeccion: empresa.colorSeccion,
  //     colorBotones: empresa.colorBotones,
  //     soloCatalogo: empresa.soloCatalogo,
  //   };

  //  const monedaDto: MonedaDto = {
  //     id: 1,
  //     nombre: 'Boliviano',
  //     simbolo: 'Bs',
  //     codigo: 1,
  //   };

  //  const empresaDto: EmpresaDto = {
  //       id: empresa.id,
  //       nombre : empresa.nombreCorto,
  //       numeroWhatsapp: `+${empresa.telefonoEmpresa}`,
  //       gpsLatitud: empresa.lat,
  //       gpsLongitud: empresa.lng,
  //       direccion: empresa.direccion,
  //       slogan: empresa.descripcion,

  //       urlPersonalizada: empresa.urlPersonalizada,
  //       razonSocial: empresa.razonSocial,
  //       nit: empresa.nit,
  //       telefono: empresa.telefonoEmpresa,
  //       urlFacebook: empresa.facebook,
  //       urlInstagram: empresa.instagram,
  //       enviosNacionales: empresa.enviosNacionales,
  //       enviosInternacionales: empresa.enviosInternacionales,
  //       ciudadDto: empresa.ciudadDto,
  //       sectorDto: empresa.sectorDto,
  //       monedaDto,
  //       configuracionEmpresaDto,
  //   };
  //  return empresaDto;
  // }

  // public toCategoriasDto(categorias: any[]): CategoriaDto[] {
  //   const categoriasList: CategoriaDto[] = [];
  //   categorias.forEach(categoria => {
  //     const categoriaDto: CategoriaDto = {
  //       id: categoria.id,
  //       nombre: categoria.nombre,
  //       idEmpresa: categoria.idEmpresa,
  //       descripcion: '',
  //      };
  //     categoriasList.push(categoriaDto);
  //   });
  //   return categoriasList;
  //  }

  //  public toProductosDto(productos: any[]): ProductoDto[] {
  //   console.log(productos)
  //   const productosList: ProductoDto[] = [];
  //   productos.forEach(producto => {
  //      const productoDto: ProductoDto = {
  //       id: producto.id,
  //       nombre: producto.nombre,
  //       descripcion: producto.descripcion,
  //       precio: producto.precio,
  //       idCategoria: producto.idCategoria,
  //       cantidad: producto.stock !== undefined ? producto.stock : null,
  //       imagen: producto.imagen ? environment.aws+producto.imagen : '../../../assets/images/producto.png'
  //      };
  //      productosList.push(productoDto);
  //    });
  //   return productosList;
  //  }
}
