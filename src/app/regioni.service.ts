import { Injectable } from '@angular/core';
import { Regioni } from './regioni.model'
@Injectable({
providedIn: 'root'
})
export class RegioniService {
  datiRegioni: Regioni[] = [
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 13,
        "denominazione_regione": "Abruzzo",
        "lat": 42.35122196,
        "long": 13.39843823,
        "ricoverati_con_sintomi": 289,
        "terapia_intensiva": 11,
        "totale_ospedalizzati": 300,
        "isolamento_domiciliare": 1509,
        "totale_positivi": 1809,
        "variazione_totale_positivi": -28,
        "nuovi_positivi": 25,
        "dimessi_guariti": 881,
        "deceduti": 335,
        "totale_casi": 3025,
        "tamponi": 42489,
        "casi_testati": 30835,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 17,
        "denominazione_regione": "Basilicata",
        "lat": 40.63947052,
        "long": 15.80514834,
        "ricoverati_con_sintomi": 50,
        "terapia_intensiva": 3,
        "totale_ospedalizzati": 53,
        "isolamento_domiciliare": 124,
        "totale_positivi": 177,
        "variazione_totale_positivi": 4,
        "nuovi_positivi": 10,
        "dimessi_guariti": 194,
        "deceduti": 25,
        "totale_casi": 396,
        "tamponi": 15476,
        "casi_testati": 15028,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 4,
        "denominazione_regione": "P.A. Bolzano",
        "lat": 46.49933453,
        "long": 11.35662422,
        "ricoverati_con_sintomi": 99,
        "terapia_intensiva": 11,
        "totale_ospedalizzati": 110,
        "isolamento_domiciliare": 502,
        "totale_positivi": 612,
        "variazione_totale_positivi": -24,
        "nuovi_positivi": 1,
        "dimessi_guariti": 1644,
        "deceduti": 286,
        "totale_casi": 2542,
        "tamponi": 45264,
        "casi_testati": 20561,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 18,
        "denominazione_regione": "Calabria",
        "lat": 38.90597598,
        "long": 16.59440194,
        "ricoverati_con_sintomi": 92,
        "terapia_intensiva": 4,
        "totale_ospedalizzati": 96,
        "isolamento_domiciliare": 554,
        "totale_positivi": 650,
        "variazione_totale_positivi": -24,
        "nuovi_positivi": 1,
        "dimessi_guariti": 381,
        "deceduti": 88,
        "totale_casi": 1119,
        "tamponi": 40509,
        "casi_testati": 38461,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 15,
        "denominazione_regione": "Campania",
        "lat": 40.83956555,
        "long": 14.25084984,
        "ricoverati_con_sintomi": 408,
        "terapia_intensiva": 25,
        "totale_ospedalizzati": 433,
        "isolamento_domiciliare": 2097,
        "totale_positivi": 2530,
        "variazione_totale_positivi": -181,
        "nuovi_positivi": 20,
        "dimessi_guariti": 1619,
        "deceduti": 369,
        "totale_casi": 4518,
        "tamponi": 93068,
        "casi_testati": 48733,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 8,
        "denominazione_regione": "Emilia-Romagna",
        "lat": 44.49436681,
        "long": 11.3417208,
        "ricoverati_con_sintomi": 1917,
        "terapia_intensiva": 191,
        "totale_ospedalizzati": 2108,
        "isolamento_domiciliare": 6573,
        "totale_positivi": 8681,
        "variazione_totale_positivi": -303,
        "nuovi_positivi": 100,
        "dimessi_guariti": 13889,
        "deceduti": 3705,
        "totale_casi": 26275,
        "tamponi": 206166,
        "casi_testati": 136310,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 6,
        "denominazione_regione": "Friuli Venezia Giulia",
        "lat": 45.6494354,
        "long": 13.76813649,
        "ricoverati_con_sintomi": 120,
        "terapia_intensiva": 4,
        "totale_ospedalizzati": 124,
        "isolamento_domiciliare": 860,
        "totale_positivi": 984,
        "variazione_totale_positivi": -66,
        "nuovi_positivi": 9,
        "dimessi_guariti": 1798,
        "deceduti": 303,
        "totale_casi": 3085,
        "tamponi": 78510,
        "casi_testati": 50135,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 12,
        "denominazione_regione": "Lazio",
        "lat": 41.89277044,
        "long": 12.48366722,
        "ricoverati_con_sintomi": 1315,
        "terapia_intensiva": 91,
        "totale_ospedalizzati": 1406,
        "isolamento_domiciliare": 2964,
        "totale_positivi": 4370,
        "variazione_totale_positivi": -15,
        "nuovi_positivi": 67,
        "dimessi_guariti": 2010,
        "deceduti": 534,
        "totale_casi": 6914,
        "tamponi": 157307,
        "casi_testati": 122541,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 7,
        "denominazione_regione": "Liguria",
        "lat": 44.41149315,
        "long": 8.9326992,
        "ricoverati_con_sintomi": 583,
        "terapia_intensiva": 68,
        "totale_ospedalizzati": 651,
        "isolamento_domiciliare": 2776,
        "totale_positivi": 3427,
        "variazione_totale_positivi": -81,
        "nuovi_positivi": 63,
        "dimessi_guariti": 3816,
        "deceduti": 1232,
        "totale_casi": 8475,
        "tamponi": 57622,
        "casi_testati": 36150,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 3,
        "denominazione_regione": "Lombardia",
        "lat": 45.46679409,
        "long": 9.190347404,
        "ricoverati_con_sintomi": 6201,
        "terapia_intensiva": 509,
        "totale_ospedalizzati": 6710,
        "isolamento_domiciliare": 30382,
        "totale_positivi": 37092,
        "variazione_totale_positivi": -215,
        "nuovi_positivi": 500,
        "dimessi_guariti": 27124,
        "deceduti": 14389,
        "totale_casi": 78605,
        "tamponi": 425290,
        "casi_testati": 255292,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 11,
        "denominazione_regione": "Marche",
        "lat": 43.61675973,
        "long": 13.5188753,
        "ricoverati_con_sintomi": 387,
        "terapia_intensiva": 42,
        "totale_ospedalizzati": 429,
        "isolamento_domiciliare": 2790,
        "totale_positivi": 3219,
        "variazione_totale_positivi": 13,
        "nuovi_positivi": 29,
        "dimessi_guariti": 2237,
        "deceduti": 936,
        "totale_casi": 6392,
        "tamponi": 67256,
        "casi_testati": 44045,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 14,
        "denominazione_regione": "Molise",
        "lat": 41.55774754,
        "long": 14.65916051,
        "ricoverati_con_sintomi": 9,
        "terapia_intensiva": 1,
        "totale_ospedalizzati": 10,
        "isolamento_domiciliare": 167,
        "totale_positivi": 177,
        "variazione_totale_positivi": -1,
        "nuovi_positivi": 0,
        "dimessi_guariti": 102,
        "deceduti": 22,
        "totale_casi": 301,
        "tamponi": 7528,
        "casi_testati": 7252,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 1,
        "denominazione_regione": "Piemonte",
        "lat": 45.0732745,
        "long": 7.680687483,
        "ricoverati_con_sintomi": 2307,
        "terapia_intensiva": 155,
        "totale_ospedalizzati": 2462,
        "isolamento_domiciliare": 12861,
        "totale_positivi": 15323,
        "variazione_totale_positivi": -239,
        "nuovi_positivi": 152,
        "dimessi_guariti": 9235,
        "deceduti": 3216,
        "totale_casi": 27774,
        "tamponi": 181316,
        "casi_testati": 126685,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 16,
        "denominazione_regione": "Puglia",
        "lat": 41.12559576,
        "long": 16.86736689,
        "ricoverati_con_sintomi": 384,
        "terapia_intensiva": 39,
        "totale_ospedalizzati": 423,
        "isolamento_domiciliare": 2516,
        "totale_positivi": 2939,
        "variazione_totale_positivi": -6,
        "nuovi_positivi": 17,
        "dimessi_guariti": 798,
        "deceduti": 433,
        "totale_casi": 4170,
        "tamponi": 69128,
        "casi_testati": 67238,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 20,
        "denominazione_regione": "Sardegna",
        "lat": 39.21531192,
        "long": 9.110616306,
        "ricoverati_con_sintomi": 94,
        "terapia_intensiva": 9,
        "totale_ospedalizzati": 103,
        "isolamento_domiciliare": 539,
        "totale_positivi": 642,
        "variazione_totale_positivi": -11,
        "nuovi_positivi": 1,
        "dimessi_guariti": 557,
        "deceduti": 119,
        "totale_casi": 1318,
        "tamponi": 28867,
        "casi_testati": 25631,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 19,
        "denominazione_regione": "Sicilia",
        "lat": 38.11569725,
        "long": 13.3623567,
        "ricoverati_con_sintomi": 367,
        "terapia_intensiva": 26,
        "totale_ospedalizzati": 393,
        "isolamento_domiciliare": 1809,
        "totale_positivi": 2202,
        "variazione_totale_positivi": 0,
        "nuovi_positivi": 12,
        "dimessi_guariti": 818,
        "deceduti": 247,
        "totale_casi": 3267,
        "tamponi": 91306,
        "casi_testati": 82079,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 9,
        "denominazione_regione": "Toscana",
        "lat": 43.76923077,
        "long": 11.25588885,
        "ricoverati_con_sintomi": 484,
        "terapia_intensiva": 111,
        "totale_ospedalizzati": 595,
        "isolamento_domiciliare": 4595,
        "totale_positivi": 5190,
        "variazione_totale_positivi": -89,
        "nuovi_positivi": 30,
        "dimessi_guariti": 3552,
        "deceduti": 889,
        "totale_casi": 9631,
        "tamponi": 157260,
        "casi_testati": 118265,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 4,
        "denominazione_regione": "P.A. Trento",
        "lat": 46.06893511,
        "long": 11.12123097,
        "ricoverati_con_sintomi": 126,
        "terapia_intensiva": 15,
        "totale_ospedalizzati": 141,
        "isolamento_domiciliare": 900,
        "totale_positivi": 1041,
        "variazione_totale_positivi": -124,
        "nuovi_positivi": 3,
        "dimessi_guariti": 2787,
        "deceduti": 433,
        "totale_casi": 4261,
        "tamponi": 42870,
        "casi_testati": 25137,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 10,
        "denominazione_regione": "Umbria",
        "lat": 43.10675841,
        "long": 12.38824698,
        "ricoverati_con_sintomi": 56,
        "terapia_intensiva": 11,
        "totale_ospedalizzati": 67,
        "isolamento_domiciliare": 109,
        "totale_positivi": 176,
        "variazione_totale_positivi": -5,
        "nuovi_positivi": 6,
        "dimessi_guariti": 1154,
        "deceduti": 70,
        "totale_casi": 1400,
        "tamponi": 39998,
        "casi_testati": 27822,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 2,
        "denominazione_regione": "Valle d'Aosta",
        "lat": 45.73750286,
        "long": 7.320149366,
        "ricoverati_con_sintomi": 56,
        "terapia_intensiva": 3,
        "totale_ospedalizzati": 59,
        "isolamento_domiciliare": 51,
        "totale_positivi": 110,
        "variazione_totale_positivi": 0,
        "nuovi_positivi": 0,
        "dimessi_guariti": 894,
        "deceduti": 139,
        "totale_casi": 1143,
        "tamponi": 8484,
        "casi_testati": 6342,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-05-05T17:00:00",
        "stato": "ITA",
        "codice_regione": 5,
        "denominazione_regione": "Veneto",
        "lat": 45.43490485,
        "long": 12.33845213,
        "ricoverati_con_sintomi": 926,
        "terapia_intensiva": 98,
        "totale_ospedalizzati": 1024,
        "isolamento_domiciliare": 6092,
        "totale_positivi": 7116,
        "variazione_totale_positivi": -118,
        "nuovi_positivi": 29,
        "dimessi_guariti": 9741,
        "deceduti": 1545,
        "totale_casi": 18402,
        "tamponi": 390952,
        "casi_testati": 227579,
        "note_it": "",
        "note_en": ""
    }
  ]

  constructor() { 
    let regioni = new Regioni();
  }

  getDatiRegioni(): Regioni[] {
    return this.datiRegioni;
  }
}