---Comandos para este proyecto---
Node modules:
Server
npm install typescript ts-node @types/node prisma

Angular
npm install @angular/cli


Base de datos 
Crear:
npx prisma migrate dev --name MatriculaDB
Reiniciar:
npx prisma migrate reset

Iniciar servicios:
Server: 
npm run dev 

Angular:
ng serve

Crear componentes en angular:
ng generate component "Nombre del componente"

