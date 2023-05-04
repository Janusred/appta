// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'proyecto-tpv-tfg',
    appId: '1:565752849878:web:a95ef6b1a3706f4669b077',
    databaseURL: 'https://proyecto-tpv-tfg-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'proyecto-tpv-tfg.appspot.com',
    apiKey: 'AIzaSyDA_SyIVgHbE8c7zG1Fhk_iHhT2T2alQAg',
    authDomain: 'proyecto-tpv-tfg.firebaseapp.com',
    messagingSenderId: '565752849878',
  },
  production: false,

  productoURL: 'https://27.0.172.124:8080/producto/',
  proveedorURL: 'https://27.0.172.124:8080/proveedor/',
  categoriaURL: 'https://27.0.172.124:8080/categoria/',
  empleadoURL: 'https://27.0.172.124:8080/empleado/',
  ventaURL: 'https://27.0.172.124:8080/venta/',
  detalleVentaURL: 'https://27.0.172.124:8080/detalleVenta/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
