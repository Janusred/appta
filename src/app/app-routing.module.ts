import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './pages/main/producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './pages/main/producto/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './pages/main/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/main/producto/editar-producto/editar-producto.component';
import { ListaProveedorComponent } from './pages/main/proveedor/lista-proveedor/lista-proveedor.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DetalleProveedorComponent } from './pages/main/proveedor/detalle-proveedor/detalle-proveedor.component';
import { NuevoProveedorComponent } from './pages/main/proveedor/nuevo-proveedor/nuevo-proveedor.component';
import { EditarProveedorComponent } from './pages/main/proveedor/editar-proveedor/editar-proveedor.component';
import { CajaCobroComponent } from './pages/main/caja-cobro/caja-cobro.component';
import { ListaCategoriaComponent } from './pages/main/categoria/lista-categoria/lista-categoria.component';
import { DetalleCategoriaComponent } from './pages/main/categoria/detalle-categoria/detalle-categoria.component';
import { NuevaCategoriaComponent } from './pages/main/categoria/nueva-categoria/nueva-categoria.component';
import { EditarCategoriaComponent } from './pages/main/categoria/editar-categoria/editar-categoria.component';
import { ListaEmpleadoComponent } from './pages/main/empleado/lista-empleado/lista-empleado.component';
import { DetalleEmpleadoComponent } from './pages/main/empleado/detalle-empleado/detalle-empleado.component';
import { NuevoEmpleadoComponent } from './pages/main/empleado/nuevo-empleado/nuevo-empleado.component';
import { EditarEmpleadoComponent } from './pages/main/empleado/editar-empleado/editar-empleado.component';
import { ListaVentaComponent } from './pages/main/venta/lista-venta/lista-venta.component';
import { EditarVentaComponent } from './pages/main/venta/editar-venta/editar-venta.component';
import { ConfiguracionComponent } from './pages/main/configuracion/configuracion.component';


const routes: Routes = [
  { path: 'main', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'listaProducto', component: ListaProductoComponent},
  { path: 'detalleProducto/:id', component: DetalleProductoComponent},
  { path: 'nuevoProducto', component: NuevoProductoComponent},
  { path: 'editarProducto/:id', component: EditarProductoComponent},

  { path: 'listaProveedor', component: ListaProveedorComponent},
  { path: 'detalleProveedor/:id', component: DetalleProveedorComponent },
  { path: 'nuevoProveedor', component: NuevoProveedorComponent},
  { path: 'editarProveedor/:id', component: EditarProveedorComponent },

  { path: 'listaCategoria', component: ListaCategoriaComponent },
  { path: 'detalleCategoria/:id', component: DetalleCategoriaComponent},
  { path: 'nuevaCategoria', component: NuevaCategoriaComponent },
  { path: 'editarCategoria/:id', component: EditarCategoriaComponent },

  { path: 'listaEmpleado', component: ListaEmpleadoComponent},
  { path: 'detalleEmpleado/:id', component: DetalleEmpleadoComponent},
  { path: 'nuevoEmpleado', component: NuevoEmpleadoComponent },
  { path: 'editarEmpleado/:id', component: EditarEmpleadoComponent },

  { path: 'listaVenta', component: ListaVentaComponent },
  { path: 'editarVenta/:id', component: EditarVentaComponent},

  { path: 'caja', component: CajaCobroComponent},

  { path: 'configuracion', component: ConfiguracionComponent },

  //  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
