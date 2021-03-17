const express = require('express');
const hbs = require('hbs');
const {
    infoGeneral,
    home,
    contacto,
    habitacion,
    nosotros,
} = require('./data/es');

const {
    infoGeneralEn,
    homeEn,
    contactoEn,
    habitacionEn,
    nosotrosEn,
} = require('./data/en');

const {
    infoGeneralDe,
    homeDe,
    contactoDe,
    habitacionDe,
    nosotrosDe,
} = require('./data/de');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/es', (req, res) => {
    res.render('home', {
        ...infoGeneral,
        ...home,
    });
});
app.get('/en', (req, res) => {
    res.render('home-en', {
        ...infoGeneralEn,
        ...homeEn,
    });
});
app.get('/de', (req, res) => {
    res.render('home-de', {
        ...infoGeneralDe,
        ...homeDe,
    });
});

//Español
app.get('/', (req, res) => {
    res.render('home', {
        ...infoGeneral,
        ...home,
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        ...infoGeneral,
        ...contacto,
    });
});

app.get('/rooms', (req, res) => {
    res.render('rooms', {
        ...infoGeneral,
        ...habitacion,
    });
});

app.get('/us', (req, res) => {
    res.render('us', {
        ...infoGeneral,
        ...nosotros,
    });
});
//Ingles
app.get('/home-en', (req, res) => {
    res.render('home-en', {
        ...infoGeneralEn,
        ...homeEn,
    });
});

app.get('/contact-en', (req, res) => {
    res.render('contact-en', {
        ...infoGeneralEn,
        ...contactoEn,
    });
});

app.get('/rooms-en', (req, res) => {
    res.render('rooms-en', {
        ...infoGeneralEn,
        ...habitacionEn,
    });
});

app.get('/us-en', (req, res) => {
    res.render('us-en', {
        ...infoGeneralEn,
        ...nosotrosEn,
    });
});
//Aleman
app.get('/home-de', (req, res) => {
    res.render('home-de', {
        ...infoGeneralDe,
        ...homeDe,
    });
});

app.get('/contact-de', (req, res) => {
    res.render('contact-de', {
        ...infoGeneralDe,
        ...contactoDe,
    });
});

app.get('/rooms-de', (req, res) => {
    res.render('rooms-de', {
        ...infoGeneralDe,
        ...habitacionDe,
    });
});

app.get('/us-de', (req, res) => {
    res.render('us-de', {
        ...infoGeneralDe,
        ...nosotrosDe,
    });
});

app.get('*', (req, res) => {
    res.render('404', infoGeneral);
});
app.listen(port, () => console.log(`Escuchando en el puerto: ${port}`));
