var express = require('express');
var db = require('./dbconnection.js');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


db.connect();
app.listen(3001);

app.get('/', function (req, res) {
    console.log('Probando');
});

app.get('/cuentas', function (req, res) {
    obtenerCuentas(req.query['numeroDeCliente'], function (err, msg) {
        res.send(msg);
    });
});

app.get('/infoCuenta', function (req, res) {
    obtenerInfoCuenta(req.query['numeroDeCliente'], req.query['numeroDeCuenta'], function (err, msg) {
        res.send(msg);
    });
});

app.get('/transacciones', function (req, res) {
    obtenerTransacciones(req.query['numeroDeCliente'], function (err, msg) {
        res.send(msg);
    });
});

app.post('/crearTransaccion', (req, res) => {
    console.log(req.body.json);
    crearTransaccion(req.body.json, function (err, msg) {
        res.send(msg);
    });
});

/** FUNCIONES **/

function obtenerCuentas(numeroDeCuenta, callback) {
    db.query("SELECT * FROM cuenta WHERE nro_cliente = ?", [numeroDeCuenta], function (err, result, fields) {
        if (err) throw err;
        callback(null, result);
    });
}

function obtenerInfoCuenta(numeroDeCliente, numeroDeCuenta, callback) {
    db.query("SELECT * FROM cuenta WHERE nro_cuenta = ? AND nro_cliente = ?", [numeroDeCuenta, numeroDeCliente], function (err, result, fields) {
        if (err) throw err;
        callback(null, Object.values(JSON.parse(JSON.stringify(result))));
    });
}

function obtenerTransacciones(numeroDeCliente, callback) {
    db.query("SELECT * FROM transferencia WHERE nro_cliente = ? ORDER BY fecha_creacion asc LIMIT 5", [numeroDeCliente], function (err, result, fields) {
        if (err) throw err;
        callback(null, result);
    });
}

function crearTransaccion(transaccion, callback) {
    try {
        db.query("INSERT INTO transferencia SET ?", [transaccion], function (err, result, fields) {
            if (err) throw err;
            callback(null, { 'msg': 'Success' });
        });
    } catch (error) {
        console.log(error);
    }
}