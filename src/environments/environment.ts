// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'proyecto-tpv-tfg-2dd84',
    appId: '1:959036212586:web:1b654783c758c0c85bd113',
    databaseURL: 'https://proyecto-tpv-tfg-2dd84-default-rtdb.firebaseio.com',
    storageBucket: 'proyecto-tpv-tfg-2dd84.appspot.com',
    apiKey: 'AIzaSyDyKE1mOfy4QNAaZ5ZMiap7ewmeqx-FN0s',
    authDomain: 'proyecto-tpv-tfg-2dd84.firebaseapp.com',
    messagingSenderId: '959036212586',
  },
  production: false,

  //productoURL: 'https://mycloudtpv.hopto.org:8080/producto/',
  //proveedorURL: 'https://mycloudtpv.hopto.org:8080/proveedor/',
  //categoriaURL: 'https://mycloudtpv.hopto.org:8080/categoria/',
  //empleadoURL: 'https://mycloudtpv.hopto.org:8080/empleado/',
  //ventaURL: 'https://mycloudtpv.hopto.org:8080/venta/',
  //detalleVentaURL: 'https://mycloudtpv.hopto.org:8080/detalleVenta/'

   productoURL: 'http://localhost:8080/producto/',
   proveedorURL: 'http://localhost:8080/proveedor/',
   categoriaURL: 'http://localhost:8080/categoria/',
   empleadoURL: 'http://localhost:8080/empleado/',
   ventaURL: 'http://localhost:8080/venta/',
   detalleVentaURL: 'http://localhost:8080/detalleVenta/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
