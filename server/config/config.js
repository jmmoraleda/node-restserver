// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://user-admin_23:yT0zUI0XJpnNohV5@cluster0-4ooql.mongodb.net/cafe'; // Conexión a MongoDB Atlas
    // urlDB = 'mongodb://cafe-user:123456@ds213209.mlab.com:13209/cafe'; // La de Fernando
}
process.env.URLDB = urlDB;