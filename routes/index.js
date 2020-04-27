const conn = require('../bin/DBconection');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  //conn.connect()
  sql = 'SELECT * FROM tpersona'
  conn.query(sql, (err, respuesta) => {
    if (err) {
      console.log('Error')
    } else {
      res.render('index', { datos: respuesta })
    }
  })
});


router.get('/nuevo', (req, res) => {
  res.render('nuevo');
})

router.post('/DOins', (req, res) => {
  let codPersona = req.body.txtCod || '';
  let nombres = req.body.txtNombres || '';
  let apellidos = req.body.txtApellidos || '';

  SQL = `INSERT INTO tPersona VALUES ('${codPersona}','${nombres}','${apellidos}');`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al insertar')
    } else {
      res.send('Insertado correctamente...   <a href="http://localhost:3000">HOME</a>')
    }
  })

})

router.get('/borra/:codigo', (req, res) => {
  let codigo = req.params.codigo;

  SQL = `DELETE FROM tPersona WHERE codPersona = '${codigo}'`
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al borrar')
    } else {
      res.send('Borrado correctamente...   <a href="http://localhost:3000">HOME</a>')
    }
  })
})

router.get('/edita/:codigo', (req, res) => {
  let codigo = req.params.codigo;
  SQL = `SELECT * FROM tPersona WHERE codPersona = '${codigo}'`
  conn.query(SQL, (err, respuesta) => {
    if (err) {
      console.log('Error al buscar persona')
    } else {
      res.render('edita', { dato: respuesta })
    }
  })
})

router.post('/edita/DOedt', (req, res) => {
  let codPersona = req.body.txtCod || '';
  let nombres = req.body.txtNombres || '';
  let apellidos = req.body.txtApellidos || '';

  SQL = `UPDATE tPersona SET nombres='${nombres}', apellidos='${apellidos}' WHERE codPersona='${codPersona}' `
  conn.query(SQL, (err, resultado) => {
    if (err) {
      console.log('Error al editar')
    } else {
      res.send('Editado correctamente...   <a href="http://localhost:3000">HOME</a>')
    }
  })
})

module.exports = router;
