// OpenLayers osnovni moduli
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';

// Tile layer i OSM basemap
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// Vektorski slojevi i GeoJSON
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

// Stilizovanje vektorskih objekata
import {Style, Circle as CircleStyle, Fill, Stroke, Text} from 'ol/style';

// Interakcija za crtanje
import Draw from 'ol/interaction/Draw';

// Kontrole
import MousePosition from 'ol/control/MousePosition';
import {defaults as defaultControls, ScaleLine} from 'ol/control';
import {createStringXY} from 'ol/coordinate';

// GeoTIFF slojevi
import GeoTIFF from 'ol/source/GeoTIFF';

import {transformExtent} from 'ol/proj'; // za transformaciju extent-a kod GeoTIFF sloja

// 1️⃣ Vektorski sloj za turističke lokacije
//const turizamLayer = new VectorLayer({
 // source: new VectorSource({
   // url:'lokacije.geojson', // putanja do tvog GeoJSON fajla
   // format: new GeoJSON(),
 // }),
//});


//new Map({//kreiranje nove mape
 // target: 'map-container',//id elementa u index.html gde ce se mapa prikazivati
 // layers: [
  //  new TileLayer({ source: new OSM() }), // OSM basemap
  //  turizamLayer,                         // GeoJSON sloj sa tačkama
  //],
 // view: new View({
  //  center: fromLonLat([20.457273, 44.8176]), // Beograd lociranje
  //  zoom: 12, 
 // }),
//});


//posto nije radio da napraivm lokacije.geojson idemo na ovaj nacin da napravimo vektorski sloj direktno u main.js fajlu
// tvoj GeoJSON direktno ovde
const geojsonObject = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Saint Sava Cathedral",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.4691739431602,
          44.79808700866104
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {
        "name": "National Library of Serbia",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.467238419583936,
          44.79752229695134
        ],
        "type": "Point"
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gradjevinski fakultet",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.476257468223338,
          44.80565321460577
        ],
        "type": "Point"
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Park Cirila i Metodija",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.47863359386571,
          44.804715892634675
        ],
        "type": "Point"
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pioneers Park",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.464258519945986,
          44.81045236870028
        ],
        "type": "Point"
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tasmajdan Park",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.470411331022376,
          44.80888174028277
        ],
        "type": "Point"
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kalemegdan",
        "marker-color": "#1e3e9f",
        "marker-size": "medium",
        "marker-symbol": "circle-stroked"
      },
      "geometry": {
        "coordinates": [
          20.450645420622266,
          44.823287862602115
        ],
        "type": "Point"
      },
      "id": 6
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moskva Hotel",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.460586283947606,
          44.81280859088423
        ],
        "type": "Point"
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Knez Mihailova",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.458257346272916,
          44.81673008337776
        ],
        "type": "Point"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Belgrade Zoo",
        "marker-color": "#1e3e9f",
        "marker-size": "medium",
        "marker-symbol": "circle-stroked"
      },
      "geometry": {
        "coordinates": [
          20.453527533263042,
          44.82567267211488
        ],
        "type": "Point"
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Usce SC",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.436942228534093,
          44.81533851379251
        ],
        "type": "Point"
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Nikola Tesla Museum",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.470738122375792,
          44.80511643764481
        ],
        "type": "Point"
      },
      "id": 11
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Restoran Gurme",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.4760851693579,
          44.809452123482714
        ],
        "type": "Point"
      },
      "id": 13
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Caffe&Resaurant Fontana",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.475038525066793,
          44.805057826768206
        ],
        "type": "Point"
      },
      "id": 15
    },
    {
      "type": "Feature",
      "properties": {
        "name": "SKADARSKA",
        "marker-color": "#1e3e9f",
        "marker-symbol": "circle-stroked",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          20.46422314855093,
          44.817759803465634
        ],
        "type": "Point"
      },
      "id": 16
    }
  ]
}

// vektorski sloj sa stilom
const turizamLayer = new VectorLayer({//kreiranje vektorskog sloja koji će prikazivati turističke lokacije na mapi
  source: new VectorSource({//izvor podataka za vektorski sloj, koji se kreira pomoću VectorSource klase
    features: new GeoJSON().readFeatures(geojsonObject, {//učitavanje GeoJSON objekta i konvertovanje njegovih funkcija u OpenLayers format pomoću GeoJSON klase
      featureProjection: 'EPSG:3857'//definisanje projekcije u kojoj će se funkcije prikazivati na mapi, što je obično Web Mercator (EPSG:3857) za OpenLayers. Ovo osigurava da se funkcije pravilno pozicioniraju na mapi i da se koordinatni sistemi usklade.
    })
  }),
  style: function(feature) {//  stilizovanje funkcija na vektorskom sloju, gde se za svaku funkciju kreira novi stil koji uključuje krug kao marker i tekst sa imenom lokacije. Boja markera se uzima iz svojstva 'marker-color' funkcije, a tekst se prikazuje iz svojstva 'name'.
    return new Style({//kreiranje novog stila za svaku funkciju na vektorskom sloju
      image: new CircleStyle({//definisanje stila za tačke na mapi, gde se koristi CircleStyle klasa da se prikažu kao krugovi
        radius: 8,//postavljanje radijusa kruga na 8 piksela
        fill: new Fill({color: feature.get('marker-color') || '#1e3e9f'}),//postavljanje boje popunjavanja kruga na vrednost svojstva 'marker-color' funkcije, ili na podrazumevanu boju '#1e3e9f' ako to svojstvo nije definisano
        stroke: new Stroke({color: '#fff', width: 2})//postavljanje boje ivice kruga na belu i širine na 2 piksela
      }),
      text: new Text({
        text: feature.get('name'),
        offsetY: -15,//pomera tekst 15 piksela iznad markera
        fill: new Fill({color: '#000'}),
        stroke: new Stroke({color: '#fff', width: 2})
      })
    });
  }
});
// 2️⃣ Vektorski sloj za crtanje krugova
const drawSource = new VectorSource();

const drawLayer = new VectorLayer({
  source: drawSource,
  style: new Style({
    fill: new Fill({
      color: 'rgba(30, 62, 159, 0.25)'
    }),
    stroke: new Stroke({
      color: '#1e3e9f',
      width: 2
    })
  })
});
// 4️⃣ Kontrole za prikaz pozicije miša i linije skale
const mousePositionControl = new MousePosition({//kreiranje kontrole za prikaz pozicije miša na mapi
  coordinateFormat: createStringXY(6), // 6 decimala
  projection: 'EPSG:4326',             // lon/lat
  undefinedHTML: '&nbsp;',//prikazivanje praznog prostora kada miš nije iznad mape
});

const scaleLineControl = new ScaleLine();//kreiranje kontrole za prikaz linije skale na mapi

// 5️⃣ Kreiranje mape sa kontrolama i slojevima
//const map = new Map({
  //target: 'map-container',
  //layers: [
    //new TileLayer({source: new OSM()}),
    //turizamLayer,
   // drawLayer 
  //],
  //view: new View({
    //center: fromLonLat([20.457273, 44.8176]),//postavljanje centra mape na koordinate Beograda, konvertovane iz geografskih koordinata (longitude i latitude) u Web Mercator projekciju pomoću funkcije fromLonLat - Beograd lociranje
  //  zoom: 12
//  })
//});


// 6️⃣ Dodavanje GeoTIFF sloja
// Projekcija i extent (može EPSG:3857 ili druga po potrebi)
const projection = 'EPSG:3857'; 

// Ovo je primer extent-a, možeš ga prilagoditi svom GeoTIFF-u
const extent = transformExtent(
  [20.3, 44.7, 20.6, 44.9], // lon/lat bbox
  'EPSG:4326',
  projection
);

// Kreiranje GeoTIFF izvora sa definisanim extent-om i projekcijom
// GeoTIFF source
const sentinelSource = new GeoTIFF({
  sources: [
    {
      url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/34/T/DR/2023/6/S2A_34TDR_20230616_0_L2A/TCI.tif',
    },
  ]
});

// GeoTIFF layer
const sentinelLayer = new TileLayer({
  source: sentinelSource
});

// 7️⃣ Basemap slojevi
const osmLayer = new TileLayer({ 
  source: new OSM() 
}); // OSM po default-u

const geoLayer = new TileLayer({ 
  source: sentinelSource 
}); // GeoTIFF //ovde je promenjeno od originala! - pogledaj org txt


// 5️⃣ Kreiranje mape sa kontrolama i slojevima
const map = new Map({
  target: 'map-container',
  controls: defaultControls().extend([//dodavanje podrazumevanih kontrola na mapu, kao što su zoom kontrole i navigacione kontrole
    mousePositionControl,//dodavanje kontrole za prikaz pozicije miša na mapi
    scaleLineControl//dodavanje kontrole za prikaz linije skale na mapi
  ]),
  layers: [ //ovde je promenjeno od originala! - pogledaj org txt
    osmLayer,      // po default-u OSM
    turizamLayer,  // turističke lokacije
    drawLayer      // sloj za crtanje
  ],
  view: new View({//konfiguracija pogleda mape, uključujući centar i nivo zumiranja
    center: fromLonLat([20.457273, 44.8176]),//koordinate Beograda(longitude i latitude) u Web Mercator projekciju pomoću funkcije fromLonLat - Beograd lociranje
    zoom: 12,
    minZoom: 2//postavljanje minimalnog nivoa zumiranja na 2, što znači da korisnici neće moći da zumiraju van ovog nivoa
  })
});

// 7️⃣ Dugmad za prebacivanje slojeva

map.getLayers().setAt(0, osmLayer); // po default-u OSM

document.getElementById('osm-btn').addEventListener('click', () => {
  map.getLayers().setAt(0, osmLayer);
});
// Napomene: // - Kada se klikne na dugme "OSM", sloj se postavlja na OSM, a kada se klikne na "GeoTIFF", sloj se postavlja na GeoTIFF. Ovo omogućava korisnicima da lako prebacuju između različitih slojeva mape.
document.getElementById('geo-btn').addEventListener('click', () => {
  map.getLayers().setAt(0, geoLayer); //prebacivanje na GeoTIFF sloj kada se klikne na dugme "GeoTIFF"
 });


// 3️⃣ Interakcija za crtanje krugova
map.addInteraction(
  new Draw({
    type: 'Circle',
    source: drawSource,
  })
);