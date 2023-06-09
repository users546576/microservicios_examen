export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passenger',
  FlightQueue = "flight",
}
export enum UserMSG {
  INSERTAR = 'CREAR_USUARIO',
  TODOS = 'TODOS_LOS_USUARIOS',
  UNO = 'UN_USUARIO',
  ACTUALIZAR = 'ACTUALIZA_USUARIO',
  ELIMINAR = 'ELIMINAR_USUARIO',
  VALIDAR_USAURIO = 'VALIDAR_USAURIO',
}
export enum PassengerMSG {
  INSERTAR = 'CREAR_PASAJERO',
  TODOS = 'TODOS_LOS_PASAJEROS',
  UNO = 'UN_PASAJERO',
  ACTUALIZAR = 'ACTUALIZA_PASAJERO',
  ELIMINAR = 'ELIMINAR_PASAJERO',
}
export enum FlightMSG {
  INSERTAR = 'CREAR_VUELO',
  TODOS = 'TODOS_LOS_VUELOS',
  UNO = 'UN_VUELO',
  ACTUALIZAR = 'ACTUALIZA_VUELO',
  ELIMINAR = 'ELIMINAR_VUELO',
  AGREGAR_PASAGERO="AGREGAR_UN_PASAGERO_A_VUELO"
}