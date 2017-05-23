/* Listado inicial de inmuebles disponibles */ 
var PROPERTIES = [
    {
        id: '1',
        description: 'Casa tradicional, completamente amueblada, naturaleza de vanguardia',
        address: 'Calle Río Luna, 19',
        city: 'Tajonar',
        region: 'Navarra',
        year: 1956,
        numberOfBedrooms: 5,
        price: 300000,
        likes: 0,
        images: ['/images/leon1.jpg',
        '/images/leon2.jpg',
        '/images/leon3.jpg'],
    },
    {
        id: '2',
        description: 'En pleno corazón de la Sierra de Aralar, con vistas espectaculares a ésta, ideal para desconectar y vivir apartado del mundo. El terreno incluye establo y granja.',
        address: 'Calle Trasgo, s/n',
        city: 'Idiazabal',
        region: 'Navarra',
        year: 1990,
        numberOfBedrooms: 7,
        price: 550000,
        likes: 0,
        images: ['/images/allende1.jpg',
        '/images/allende2.jpg',
        '/images/allende3.jpg',
        '/images/allende4.jpg',
        '/images/allende5.jpg',
        '/images/allende6.jpg'],
    },
    {
        id: '3',
        description: 'Chalet en paraje natural, vivienda tranquila a 1 km del pueblo',
        address: 'Calle Olentzero, 34',
        city: 'Tafalla',
        region: 'Navarra',
        year: 2013,
        numberOfBedrooms: 6,
        price: 355000,
        likes: 0,
        images: ['/images/pontevedra1.jpg',
        '/images/pontevedra2.jpg',
        '/images/pontevedra3.jpg',
        '/images/pontevedra4.jpg'],
    },
    {
        id: '4',
        description: 'Piso lujoso en el centro de Pamplona, a 100 metros de transporte público, restaurantes y supermercados',
        address: 'Calle de la Estafeta, 21',
        city: 'Pamplona',
        region: 'Navarra',
        year: 1945,
        numberOfBedrooms: 3,
        price: 1000000,
        likes: 0,
        images: ['/images/madrid1.jpg',
        '/images/madrid3.jpg',
        '/images/madrid4.jpg',
        '/images/madrid9.jpg'],        
    },
    {
        id: '5',
        description: 'Chalet a las afueras de Pamplona, urbanización tranquila y situado en plena naturaleza',
        address: 'Avenida de Carlos III,24',
        city: 'Guerendiain',
        region: 'Navarra',
        year: 2000,
        numberOfBedrooms: 6,
        price: 950000,
        likes: 0,
        images: ['/images/madrid5.jpg',
        '/images/madrid6.jpg',
        '/images/madrid7.jpg'],        
    },
    {
        id: '6',
        description: 'Chalet de lujo a escasos minutos del centro, el lujoso mobiliario está realizado con maderas autóctonas de la zona de Elizondo por ebanistas que trabajan con herramientas y técnicas de hace 100 años',
        address: 'Calle Aramburu,2',
        city: 'Elizondo',
        region: 'Navarra',
        year: 2015,
        numberOfBedrooms: 5,
        price: 5000000,
        likes: 0,
        images: ['/images/elizondo1.jpg',
        '/images/elizondo2.jpg',
        '/images/elizondo3.jpg',
        '/images/elizondo4.jpg',
        '/images/elizondo5.jpg'],        
    },
    {
        id: '7',
        description: 'Casa tradicional, en el casco urbano de la ciudad con vistas a la Selva de Irati',
        address: 'Calle San Fermín,54',
        city: 'Aurizberri',
        region: 'Navarra',
        year: 2001,
        numberOfBedrooms: 4,
        price: 900000,
        likes: 0,
        images: ['/images/irati1.jpg',
        '/images/irati2.jpg',
        '/images/irati3.jpg',
        '/images/irati4.jpg'],        
    },
     {
        id:'8',
        description: 'Chalet en urbanización cercana al pueblo, amplio terreno para construir más edificios anexos',
        address: 'Calle Kodro, 43',
        city: 'Olite',
        region: 'Navarra',
        year: 1999,
        numberOfBedrooms: 5,
        price: 700000,
        likes: 0,
        images: ['/images/olite1.jpg',
        '/images/olite2.jpg',
        '/images/olite3.jpg',
        '/images/olite4.jpg',
        '/images/olite5.jpg',
        '/images/olite6.jpg'],        
    },
    {
        id: '9',
        description: 'Vivienda de lujo en pleno corazón del parque Nacional de Bardenas Reales, rodeado de naturaleza y cerca del núcleo urbano, ideal para los amantes del senderismo.',
        address: 'Avenida Carmilla,4',
        city: 'Marcilla',
        region: 'Navarra',
        year:2014,
        numberOfBedrooms: 8,
        price: 5900000,
        likes: 0,
        images: ['/images/canmore1.jpg',
        '/images/canmore2.jpg',
        '/images/canmore4.jpg',
        '/images/canmore5.jpg',
        '/images/canmore7.jpg',
        '/images/canmore8.jpg'],        
    }
]
