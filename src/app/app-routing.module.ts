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
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'main', component: MainComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'login', component: LoginComponent },
  { path: 'listaProducto', component: ListaProductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'detalleProducto/:id', component: DetalleProductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'nuevoProducto', component: NuevoProductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'editarProducto/:id', component: EditarProductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'listaProveedor', component: ListaProveedorComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'detalleProveedor/:id', component: DetalleProveedorComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'nuevoProveedor', component: NuevoProveedorComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'editarProveedor/:id', component: EditarProveedorComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'listaCategoria', component: ListaCategoriaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'detalleCategoria/:id', component: DetalleCategoriaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'nuevaCategoria', component: NuevaCategoriaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'editarCategoria/:id', component: EditarCategoriaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'listaEmpleado', component: ListaEmpleadoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'detalleEmpleado/:id', component: DetalleEmpleadoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'nuevoEmpleado', component: NuevoEmpleadoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'editarEmpleado/:id', component: EditarEmpleadoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'listaVenta', component: ListaVentaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'editarVenta/:id', component: EditarVentaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'caja', component: CajaCobroComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: 'configuracion', component: ConfiguracionComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  //  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
