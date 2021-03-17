const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

infoGeneral = {
    telefono: '09 6636 7775',
    correo: 'info@hostallamaravilla.com',
    facebook: 'https://www.facebook.com/Hostal-La-Maravilla-343037112469747/',
    idioma: 'ES',
    bandera: 'img/espana.png',
    inicio: 'Inicio',
    habitaciones: 'Habitaciones',
    nosotros: 'Sobre nosotros',
    contacto: 'Contacto',
    frase: 'El lugar en donde nacen infinitas maravillas.',
    direccion:
        'Los Montes Parcela 323 Lote B, Región del Maule, San Clemente. Chile',
    casilla: ' La Maravilla, casilla 24, San Clemente',
};

app.get('/', (req, res) => {
    res.render('home', {
        ...infoGeneral,
        titulo: 'Hostal la Maravilla',
        subtitulo:
            'La Maravilla es un oasis de paz y tranquilidad, incrustado en un paisaje auténtico al pie de la cordillera.',
        bienvenidos: 'Bienvenidos!',
        mas: 'Leer más',
        quehacemos: 'Que hacemos',
        servicio: 'Descubra nuestros servicios',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        ...infoGeneral,
        titulo: 'Información de Contacto',
        texto:
            'El Hostal La Maravilla se encuentra en Vilches, a 39 km de Talca y 42 km de Linares.',
        info1: 'Dirreción',
        info2: 'Teléfono',
        info3: 'Correo',
        info4: 'Casilla',
        info5: 'Nombre',
        info6: 'Correo',
        info7: 'Mensaje',
        info8: 'Enviar ahora',
    });
});

app.get('/rooms', (req, res) => {
    res.render('rooms', {
        ...infoGeneral,
        info:
            'Nuestras habitaciones tienen nombres de flores. Los hemos seleccionado de todo el rico patrimonio natural el cual tienen un significado especial para nosotros.',
        habitacion1: 'Girasol',
        habitacion2: 'Calla',
        habitacion3: 'Lirio',
        habitacion4: 'Hortensia',
        cabana: 'Cabaña El Pino',
        tamano: 'Tamaño',
        capacidad: 'Capacidad',
        cama: 'Cama',
        servicios: 'Servicios',
        detalles: 'Mas detalles',
        tamanodata1: '10 m',
        capacidaddata1: '3 personas',
        camadata1: '1 cama doble',
        serviciosdata1: 'Baño',
        tamanodata2: '10 m',
        capacidaddata2: '3 personas',
        camadata2: '2 camas individual',
        serviciosdata2: 'Baño',
        tamanodata3: '10 m',
        capacidaddata3: '3 personas',
        camadata3: '2 camas individual',
        serviciosdata3: 'Baño',
        tamanodata4: '10 m',
        capacidaddata4: '3 personas',
        camadata4: '2 camas individual',
        serviciosdata4: 'Baño',
        tamanodata5: '20 m',
        capacidaddata5: '5 personas',
        camadata5: '2 camas individual - 1 cama doble',
        serviciosdata5: 'Baño y cocina',
    });
});

app.get('/us', (req, res) => {
    res.render('us', {
        ...infoGeneral,
        titulo: 'Bienvenido a la Maravilla.',
        texto:
            'Luego de viajar por gran parte de Chile descubrí que en la séptima regio del Maule se encuentra un Chile autentico con un hermoso clima mediterráneo. Para mí fue una maravilla el encontrar este lugar tan especial. Alrededor de donde estamos ubicados se encuentran parques nacionales, lagunas, lagos, termas, saltos, viñas para visitar, montañas y volcanes para subir. En su estadía les ayudaremos con las informaciones necesarias para descubrir los atractivos turísticos de la zona.',
        servicio1: 'Desayuno diario incluido.',
        servicio2: 'Aparcamiento privado gratis.',
        servicio3: 'Piscina al aire libre.',
        servicio4: 'Wifi gratis.',
        servicio5: 'Almuerzos para llevar.',
        servicio6: '¡Hablamos tu idioma!',
        principal1: 'Restaurante',
        principal2: 'Habitaciones & Cabaña',
        principal3: 'Atractivos',
        titulo2: 'Descubre Nuestro Hostal Desde las Alturas.',
        titulo3: 'Sobre mí',
        titulo4: 'Marion',
        p0: 'A Temprana edad salí a descubrir el gran y ancho mundo.',
        p1:
            'Mi iniciación comenzó en la selva negra, de la cual emigré para conocer nuevos países y culturas, nuevos continentes, encontrar en ellos cosas nuevas y una de mis principales razones, fue escapar del frío.',
        p2:
            'En la temporada de verano volví a Alemania, a trabajar en mis profesiones, las cuales están relacionadas directamente con el mundo turístico (Agente de viaje - Gerente de hotel).',
        p3:
            'Mi amor y encanto por Chile han aumentado, lo que trajo como consecuencia que mis deseos de seguir viajando disminuyeran. ',
        p4: 'Aquí encontré mi lugar perfecto.',
    });
});

app.listen(port, () => console.log(`Escuchando en el puerto: ${port}`));