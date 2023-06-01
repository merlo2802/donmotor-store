export interface EmpresaDtos{
  id ? : number;
  razonSocial: string;
  nit: string;
  nombreCorto: string;
  representanteLegal: string;
  telefono: string;
  telefonoEmpresa: string;
  descripcion?: string;
  direccion: string;
  urlPersonalizada: string;
  colorBotones?: string;
  colorSeccion?: string;
  bloqueado?: boolean;
  idCiudad?:number
  // estado?: Estado;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  //USUARIO
  nombreCompleto: string;
  nombreUsuario: string;
  email: string;
  // tipoUsuario?: TipoUsuario;
  idRol?: number;
}