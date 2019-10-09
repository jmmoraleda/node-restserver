const jwt = require('jsonwebtoken');


// =====================
// Verificar Token
// =====================
let verificaToken = (req, res, next) => {

    let token = req.get('token'); // Obtenemos el token que viene en la petición (headers)

    jwt.verify(token, process.env.SEED, (err, decoded) => { // decoded es la información decodificada

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario; // En decoded está el payload del token por lo que tenemos el usuario.
        next(); // Lo que hace es continuar con la ejecución del programa después de ejecutar este middleware

    });



};

// =====================
// Verifica AdminRole
// =====================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next(); // Si el usuario es administrador dejamos continuar con la creación, modificación o borrado.
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};



module.exports = {
    verificaToken,
    verificaAdmin_Role
}