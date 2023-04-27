"use strict";
(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[822],{

/***/ 20764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "basicUsage": () => (/* binding */ basicUsage),
  "currencyPreset": () => (/* binding */ currencyPreset),
  "customProps": () => (/* binding */ customProps),
  "default": () => (/* binding */ currency_text_field_stories),
  "playground": () => (/* binding */ playground)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(18380);
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/blocks.mjs
var blocks = __webpack_require__(88843);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/index.mjs
var dist = __webpack_require__(70019);
;// CONCATENATED MODULE: ./packages/currency-text-field/package.json
const package_namespaceObject = {"i8":"0.1.1"};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(33130);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(80044);
;// CONCATENATED MODULE: ./packages/currency-text-field/src/currency/currency_iso.ts
/* harmony default export */ const currency_iso = ({
  aed: {
    priority: 100,
    isoCode: 'AED',
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ',
    alternateSymbols: ['DH', 'Dhs'],
    subunit: 'Fils',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '784',
    smallestDenomination: 25
  },
  afn: {
    priority: 100,
    isoCode: 'AFN',
    name: 'Afghan Afghani',
    symbol: '؋',
    alternateSymbols: ['Af', 'Afs'],
    subunit: 'Pul',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '971',
    smallestDenomination: 100
  },
  all: {
    priority: 100,
    isoCode: 'ALL',
    name: 'Albanian Lek',
    symbol: 'L',
    disambiguateSymbol: 'Lek',
    alternateSymbols: ['Lek'],
    subunit: 'Qintar',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '008',
    smallestDenomination: 100
  },
  amd: {
    priority: 100,
    isoCode: 'AMD',
    name: 'Armenian Dram',
    symbol: 'դր.',
    alternateSymbols: ['dram'],
    subunit: 'Luma',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '051',
    smallestDenomination: 10
  },
  ang: {
    priority: 100,
    isoCode: 'ANG',
    name: 'Netherlands Antillean Gulden',
    symbol: 'ƒ',
    alternateSymbols: ['NAƒ', 'NAf', 'f'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x0192;',
    decimal: ',',
    separator: '.',
    isoNumeric: '532',
    smallestDenomination: 1
  },
  aoa: {
    priority: 100,
    isoCode: 'AOA',
    name: 'Angolan Kwanza',
    symbol: 'Kz',
    alternateSymbols: [],
    subunit: 'Cêntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '973',
    smallestDenomination: 10
  },
  ars: {
    priority: 100,
    isoCode: 'ARS',
    name: 'Argentine Peso',
    symbol: '$',
    disambiguateSymbol: '$m/n',
    alternateSymbols: ['$m/n', 'm$n'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: ',',
    separator: '.',
    isoNumeric: '032',
    smallestDenomination: 1
  },
  aud: {
    priority: 4,
    isoCode: 'AUD',
    name: 'Australian Dollar',
    symbol: '$',
    disambiguateSymbol: 'A$',
    alternateSymbols: ['A$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '036',
    smallestDenomination: 5
  },
  awg: {
    priority: 100,
    isoCode: 'AWG',
    name: 'Aruban Florin',
    symbol: 'ƒ',
    alternateSymbols: ['Afl'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x0192;',
    decimal: '.',
    separator: ',',
    isoNumeric: '533',
    smallestDenomination: 5
  },
  azn: {
    priority: 100,
    isoCode: 'AZN',
    name: 'Azerbaijani Manat',
    symbol: '₼',
    alternateSymbols: ['m', 'man'],
    subunit: 'Qəpik',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '944',
    smallestDenomination: 1
  },
  bam: {
    priority: 100,
    isoCode: 'BAM',
    name: 'Bosnia and Herzegovina Convertible Mark',
    symbol: 'КМ',
    alternateSymbols: ['KM'],
    subunit: 'Fening',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '977',
    smallestDenomination: 5
  },
  bbd: {
    priority: 100,
    isoCode: 'BBD',
    name: 'Barbadian Dollar',
    symbol: '$',
    disambiguateSymbol: 'Bds$',
    alternateSymbols: ['Bds$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '052',
    smallestDenomination: 1
  },
  bdt: {
    priority: 100,
    isoCode: 'BDT',
    name: 'Bangladeshi Taka',
    symbol: '৳',
    alternateSymbols: ['Tk'],
    subunit: 'Paisa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '050',
    smallestDenomination: 1
  },
  bgn: {
    priority: 100,
    isoCode: 'BGN',
    name: 'Bulgarian Lev',
    symbol: 'лв.',
    alternateSymbols: ['lev', 'leva', 'лев', 'лева'],
    subunit: 'Stotinka',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '975',
    smallestDenomination: 1
  },
  bhd: {
    priority: 100,
    isoCode: 'BHD',
    name: 'Bahraini Dinar',
    symbol: 'د.ب',
    alternateSymbols: ['BD'],
    subunit: 'Fils',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '048',
    smallestDenomination: 5
  },
  bif: {
    priority: 100,
    isoCode: 'BIF',
    name: 'Burundian Franc',
    symbol: 'Fr',
    disambiguateSymbol: 'FBu',
    alternateSymbols: ['FBu'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '108',
    smallestDenomination: 100
  },
  bmd: {
    priority: 100,
    isoCode: 'BMD',
    name: 'Bermudian Dollar',
    symbol: '$',
    disambiguateSymbol: 'BD$',
    alternateSymbols: ['BD$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '060',
    smallestDenomination: 1
  },
  bnd: {
    priority: 100,
    isoCode: 'BND',
    name: 'Brunei Dollar',
    symbol: '$',
    disambiguateSymbol: 'BND',
    alternateSymbols: ['B$'],
    subunit: 'Sen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '096',
    smallestDenomination: 1
  },
  bob: {
    priority: 100,
    isoCode: 'BOB',
    name: 'Bolivian Boliviano',
    symbol: 'Bs.',
    alternateSymbols: ['Bs'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '068',
    smallestDenomination: 10
  },
  brl: {
    priority: 100,
    isoCode: 'BRL',
    name: 'Brazilian Real',
    symbol: 'R$',
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: 'R$',
    decimal: ',',
    separator: '.',
    isoNumeric: '986',
    smallestDenomination: 5
  },
  bsd: {
    priority: 100,
    isoCode: 'BSD',
    name: 'Bahamian Dollar',
    symbol: '$',
    disambiguateSymbol: 'BSD',
    alternateSymbols: ['B$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '044',
    smallestDenomination: 1
  },
  btn: {
    priority: 100,
    isoCode: 'BTN',
    name: 'Bhutanese Ngultrum',
    symbol: 'Nu.',
    alternateSymbols: ['Nu'],
    subunit: 'Chertrum',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '064',
    smallestDenomination: 5
  },
  bwp: {
    priority: 100,
    isoCode: 'BWP',
    name: 'Botswana Pula',
    symbol: 'P',
    alternateSymbols: [],
    subunit: 'Thebe',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '072',
    smallestDenomination: 5
  },
  byn: {
    priority: 100,
    isoCode: 'BYN',
    name: 'Belarusian Ruble',
    symbol: 'Br',
    disambiguateSymbol: 'BYN',
    alternateSymbols: ['бел. руб.', 'б.р.', 'руб.', 'р.'],
    subunit: 'Kapeyka',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: ' ',
    isoNumeric: '933',
    smallestDenomination: 1
  },
  byr: {
    priority: 50,
    isoCode: 'BYR',
    name: 'Belarusian Ruble',
    symbol: 'Br',
    disambiguateSymbol: 'BYR',
    alternateSymbols: ['бел. руб.', 'б.р.', 'руб.', 'р.'],
    subunit: null,
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: ' ',
    isoNumeric: '974',
    smallestDenomination: 100
  },
  bzd: {
    priority: 100,
    isoCode: 'BZD',
    name: 'Belize Dollar',
    symbol: '$',
    disambiguateSymbol: 'BZ$',
    alternateSymbols: ['BZ$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '084',
    smallestDenomination: 1
  },
  cad: {
    priority: 5,
    isoCode: 'CAD',
    name: 'Canadian Dollar',
    symbol: '$',
    disambiguateSymbol: 'C$',
    alternateSymbols: ['C$', 'CAD$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '124',
    smallestDenomination: 5
  },
  cdf: {
    priority: 100,
    isoCode: 'CDF',
    name: 'Congolese Franc',
    symbol: 'Fr',
    disambiguateSymbol: 'FC',
    alternateSymbols: ['FC'],
    subunit: 'Centime',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '976',
    smallestDenomination: 1
  },
  chf: {
    priority: 100,
    isoCode: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF',
    alternateSymbols: ['SFr', 'Fr'],
    subunit: 'Rappen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    format: '%u%n',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '756',
    smallestDenomination: 5
  },
  clf: {
    priority: 100,
    isoCode: 'CLF',
    name: 'Unidad de Fomento',
    symbol: 'UF',
    alternateSymbols: [],
    subunit: 'Peso',
    subunitToUnit: 10000,
    precision: 4,
    symbolFirst: true,
    htmlEntity: '&#x20B1;',
    decimal: ',',
    separator: '.',
    isoNumeric: '990'
  },
  clp: {
    priority: 100,
    isoCode: 'CLP',
    name: 'Chilean Peso',
    symbol: '$',
    disambiguateSymbol: 'CLP',
    alternateSymbols: [],
    subunit: 'Peso',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: true,
    htmlEntity: '&#36;',
    decimal: ',',
    separator: '.',
    isoNumeric: '152',
    smallestDenomination: 1
  },
  cny: {
    priority: 100,
    isoCode: 'CNY',
    name: 'Chinese Renminbi Yuan',
    symbol: '¥',
    alternateSymbols: ['CN¥', '元', 'CN元'],
    subunit: 'Fen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '￥',
    decimal: '.',
    separator: ',',
    isoNumeric: '156',
    smallestDenomination: 1
  },
  cop: {
    priority: 100,
    isoCode: 'COP',
    name: 'Colombian Peso',
    symbol: '$',
    disambiguateSymbol: 'COL$',
    alternateSymbols: ['COL$'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#36;',
    decimal: ',',
    separator: '.',
    isoNumeric: '170',
    smallestDenomination: 20
  },
  crc: {
    priority: 100,
    isoCode: 'CRC',
    name: 'Costa Rican Colón',
    symbol: '₡',
    alternateSymbols: ['¢'],
    subunit: 'Céntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20A1;',
    decimal: ',',
    separator: '.',
    isoNumeric: '188',
    smallestDenomination: 500
  },
  cuc: {
    priority: 100,
    isoCode: 'CUC',
    name: 'Cuban Convertible Peso',
    symbol: '$',
    disambiguateSymbol: 'CUC$',
    alternateSymbols: ['CUC$'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '931',
    smallestDenomination: 1
  },
  cup: {
    priority: 100,
    isoCode: 'CUP',
    name: 'Cuban Peso',
    symbol: '$',
    disambiguateSymbol: '$MN',
    alternateSymbols: ['$MN'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20B1;',
    decimal: '.',
    separator: ',',
    isoNumeric: '192',
    smallestDenomination: 1
  },
  cve: {
    priority: 100,
    isoCode: 'CVE',
    name: 'Cape Verdean Escudo',
    symbol: '$',
    disambiguateSymbol: 'Esc',
    alternateSymbols: ['Esc'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '132',
    smallestDenomination: 100
  },
  czk: {
    priority: 100,
    isoCode: 'CZK',
    name: 'Czech Koruna',
    symbol: 'Kč',
    alternateSymbols: [],
    subunit: 'Haléř',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: ' ',
    isoNumeric: '203',
    smallestDenomination: 100
  },
  djf: {
    priority: 100,
    isoCode: 'DJF',
    name: 'Djiboutian Franc',
    symbol: 'Fdj',
    alternateSymbols: [],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '262',
    smallestDenomination: 100
  },
  dkk: {
    priority: 100,
    isoCode: 'DKK',
    name: 'Danish Krone',
    symbol: 'kr.',
    disambiguateSymbol: 'DKK',
    alternateSymbols: [',-'],
    subunit: 'Øre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '208',
    smallestDenomination: 50
  },
  dop: {
    priority: 100,
    isoCode: 'DOP',
    name: 'Dominican Peso',
    symbol: '$',
    disambiguateSymbol: 'RD$',
    alternateSymbols: ['RD$'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20B1;',
    decimal: '.',
    separator: ',',
    isoNumeric: '214',
    smallestDenomination: 100
  },
  dzd: {
    priority: 100,
    isoCode: 'DZD',
    name: 'Algerian Dinar',
    symbol: 'د.ج',
    alternateSymbols: ['DA'],
    subunit: 'Centime',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '012',
    smallestDenomination: 100
  },
  egp: {
    priority: 100,
    isoCode: 'EGP',
    name: 'Egyptian Pound',
    symbol: 'ج.م',
    alternateSymbols: ['LE', 'E£', 'L.E.'],
    subunit: 'Piastre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '818',
    smallestDenomination: 25
  },
  ern: {
    priority: 100,
    isoCode: 'ERN',
    name: 'Eritrean Nakfa',
    symbol: 'Nfk',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '232',
    smallestDenomination: 1
  },
  etb: {
    priority: 100,
    isoCode: 'ETB',
    name: 'Ethiopian Birr',
    symbol: 'Br',
    disambiguateSymbol: 'ETB',
    alternateSymbols: [],
    subunit: 'Santim',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '230',
    smallestDenomination: 1
  },
  eur: {
    priority: 2,
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20AC;',
    decimal: ',',
    separator: '.',
    isoNumeric: '978',
    smallestDenomination: 1
  },
  fjd: {
    priority: 100,
    isoCode: 'FJD',
    name: 'Fijian Dollar',
    symbol: '$',
    disambiguateSymbol: 'FJ$',
    alternateSymbols: ['FJ$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '242',
    smallestDenomination: 5
  },
  fkp: {
    priority: 100,
    isoCode: 'FKP',
    name: 'Falkland Pound',
    symbol: '£',
    disambiguateSymbol: 'FK£',
    alternateSymbols: ['FK£'],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '238',
    smallestDenomination: 1
  },
  gbp: {
    priority: 3,
    isoCode: 'GBP',
    name: 'British Pound',
    symbol: '£',
    alternateSymbols: [],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '826',
    smallestDenomination: 1
  },
  gel: {
    priority: 100,
    isoCode: 'GEL',
    name: 'Georgian Lari',
    symbol: 'ლ',
    alternateSymbols: ['lari'],
    subunit: 'Tetri',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '981',
    smallestDenomination: 1
  },
  ghs: {
    priority: 100,
    isoCode: 'GHS',
    name: 'Ghanaian Cedi',
    symbol: '₵',
    alternateSymbols: ['GH¢', 'GH₵'],
    subunit: 'Pesewa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20B5;',
    decimal: '.',
    separator: ',',
    isoNumeric: '936',
    smallestDenomination: 1
  },
  gip: {
    priority: 100,
    isoCode: 'GIP',
    name: 'Gibraltar Pound',
    symbol: '£',
    disambiguateSymbol: 'GIP',
    alternateSymbols: [],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '292',
    smallestDenomination: 1
  },
  gmd: {
    priority: 100,
    isoCode: 'GMD',
    name: 'Gambian Dalasi',
    symbol: 'D',
    alternateSymbols: [],
    subunit: 'Butut',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '270',
    smallestDenomination: 1
  },
  gnf: {
    priority: 100,
    isoCode: 'GNF',
    name: 'Guinean Franc',
    symbol: 'Fr',
    disambiguateSymbol: 'FG',
    alternateSymbols: ['FG', 'GFr'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '324',
    smallestDenomination: 100
  },
  gtq: {
    priority: 100,
    isoCode: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbol: 'Q',
    alternateSymbols: [],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '320',
    smallestDenomination: 1
  },
  gyd: {
    priority: 100,
    isoCode: 'GYD',
    name: 'Guyanese Dollar',
    symbol: '$',
    disambiguateSymbol: 'G$',
    alternateSymbols: ['G$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '328',
    smallestDenomination: 100
  },
  hkd: {
    priority: 100,
    isoCode: 'HKD',
    name: 'Hong Kong Dollar',
    symbol: '$',
    disambiguateSymbol: 'HK$',
    alternateSymbols: ['HK$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '344',
    smallestDenomination: 10
  },
  hnl: {
    priority: 100,
    isoCode: 'HNL',
    name: 'Honduran Lempira',
    symbol: 'L',
    disambiguateSymbol: 'HNL',
    alternateSymbols: [],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '340',
    smallestDenomination: 5
  },
  hrk: {
    priority: 100,
    isoCode: 'HRK',
    name: 'Croatian Kuna',
    symbol: 'kn',
    alternateSymbols: [],
    subunit: 'Lipa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '191',
    smallestDenomination: 1
  },
  htg: {
    priority: 100,
    isoCode: 'HTG',
    name: 'Haitian Gourde',
    symbol: 'G',
    alternateSymbols: [],
    subunit: 'Centime',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '332',
    smallestDenomination: 5
  },
  huf: {
    priority: 100,
    isoCode: 'HUF',
    name: 'Hungarian Forint',
    symbol: 'Ft',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: ' ',
    isoNumeric: '348',
    smallestDenomination: 5
  },
  idr: {
    priority: 100,
    isoCode: 'IDR',
    name: 'Indonesian Rupiah',
    symbol: 'Rp',
    alternateSymbols: [],
    subunit: 'Sen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '360',
    smallestDenomination: 5000
  },
  ils: {
    priority: 100,
    isoCode: 'ILS',
    name: 'Israeli New Sheqel',
    symbol: '₪',
    alternateSymbols: ['ש״ח', 'NIS'],
    subunit: 'Agora',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20AA;',
    decimal: '.',
    separator: ',',
    isoNumeric: '376',
    smallestDenomination: 10
  },
  inr: {
    priority: 100,
    isoCode: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    alternateSymbols: ['Rs', '৳', '૱', '௹', 'रु', '₨'],
    subunit: 'Paisa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20b9;',
    decimal: '.',
    separator: ',',
    isoNumeric: '356',
    smallestDenomination: 50
  },
  iqd: {
    priority: 100,
    isoCode: 'IQD',
    name: 'Iraqi Dinar',
    symbol: 'ع.د',
    alternateSymbols: [],
    subunit: 'Fils',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '368',
    smallestDenomination: 50000
  },
  irr: {
    priority: 100,
    isoCode: 'IRR',
    name: 'Iranian Rial',
    symbol: '﷼',
    alternateSymbols: [],
    subunit: null,
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#xFDFC;',
    decimal: '.',
    separator: ',',
    isoNumeric: '364',
    smallestDenomination: 5000
  },
  isk: {
    priority: 100,
    isoCode: 'ISK',
    name: 'Icelandic Króna',
    symbol: 'kr.',
    alternateSymbols: ['Íkr'],
    subunit: null,
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '352',
    smallestDenomination: 1
  },
  jmd: {
    priority: 100,
    isoCode: 'JMD',
    name: 'Jamaican Dollar',
    symbol: '$',
    disambiguateSymbol: 'J$',
    alternateSymbols: ['J$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '388',
    smallestDenomination: 1
  },
  jod: {
    priority: 100,
    isoCode: 'JOD',
    name: 'Jordanian Dinar',
    symbol: 'د.ا',
    alternateSymbols: ['JD'],
    subunit: 'Fils',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '400',
    smallestDenomination: 5
  },
  jpy: {
    priority: 6,
    isoCode: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    alternateSymbols: ['円', '圓'],
    subunit: null,
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: true,
    htmlEntity: '&#x00A5;',
    decimal: '.',
    separator: ',',
    isoNumeric: '392',
    smallestDenomination: 1
  },
  kes: {
    priority: 100,
    isoCode: 'KES',
    name: 'Kenyan Shilling',
    symbol: 'KSh',
    alternateSymbols: ['Sh'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '404',
    smallestDenomination: 50
  },
  kgs: {
    priority: 100,
    isoCode: 'KGS',
    name: 'Kyrgyzstani Som',
    symbol: 'som',
    alternateSymbols: ['сом'],
    subunit: 'Tyiyn',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '417',
    smallestDenomination: 1
  },
  khr: {
    priority: 100,
    isoCode: 'KHR',
    name: 'Cambodian Riel',
    symbol: '៛',
    alternateSymbols: [],
    subunit: 'Sen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x17DB;',
    decimal: '.',
    separator: ',',
    isoNumeric: '116',
    smallestDenomination: 5000
  },
  kmf: {
    priority: 100,
    isoCode: 'KMF',
    name: 'Comorian Franc',
    symbol: 'Fr',
    disambiguateSymbol: 'CF',
    alternateSymbols: ['CF'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '174',
    smallestDenomination: 100
  },
  kpw: {
    priority: 100,
    isoCode: 'KPW',
    name: 'North Korean Won',
    symbol: '₩',
    alternateSymbols: [],
    subunit: 'Chŏn',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20A9;',
    decimal: '.',
    separator: ',',
    isoNumeric: '408',
    smallestDenomination: 1
  },
  krw: {
    priority: 100,
    isoCode: 'KRW',
    name: 'South Korean Won',
    symbol: '₩',
    subunit: null,
    subunitToUnit: 1,
    precision: 0,
    alternateSymbols: [],
    symbolFirst: true,
    htmlEntity: '&#x20A9;',
    decimal: '.',
    separator: ',',
    isoNumeric: '410',
    smallestDenomination: 1
  },
  kwd: {
    priority: 100,
    isoCode: 'KWD',
    name: 'Kuwaiti Dinar',
    symbol: 'د.ك',
    alternateSymbols: ['K.D.'],
    subunit: 'Fils',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '414',
    smallestDenomination: 5
  },
  kyd: {
    priority: 100,
    isoCode: 'KYD',
    name: 'Cayman Islands Dollar',
    symbol: '$',
    disambiguateSymbol: 'CI$',
    alternateSymbols: ['CI$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '136',
    smallestDenomination: 1
  },
  kzt: {
    priority: 100,
    isoCode: 'KZT',
    name: 'Kazakhstani Tenge',
    symbol: '₸',
    alternateSymbols: [],
    subunit: 'Tiyn',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '398',
    smallestDenomination: 100
  },
  lak: {
    priority: 100,
    isoCode: 'LAK',
    name: 'Lao Kip',
    symbol: '₭',
    alternateSymbols: ['₭N'],
    subunit: 'Att',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20AD;',
    decimal: '.',
    separator: ',',
    isoNumeric: '418',
    smallestDenomination: 10
  },
  lbp: {
    priority: 100,
    isoCode: 'LBP',
    name: 'Lebanese Pound',
    symbol: 'ل.ل',
    alternateSymbols: ['£', 'L£'],
    subunit: 'Piastre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '422',
    smallestDenomination: 25000
  },
  lkr: {
    priority: 100,
    isoCode: 'LKR',
    name: 'Sri Lankan Rupee',
    symbol: '₨',
    disambiguateSymbol: 'SLRs',
    alternateSymbols: ['රු', 'ரூ', 'SLRs', '/-'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#8360;',
    decimal: '.',
    separator: ',',
    isoNumeric: '144',
    smallestDenomination: 100
  },
  lrd: {
    priority: 100,
    isoCode: 'LRD',
    name: 'Liberian Dollar',
    symbol: '$',
    disambiguateSymbol: 'L$',
    alternateSymbols: ['L$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '430',
    smallestDenomination: 5
  },
  lsl: {
    priority: 100,
    isoCode: 'LSL',
    name: 'Lesotho Loti',
    symbol: 'L',
    disambiguateSymbol: 'M',
    alternateSymbols: ['M'],
    subunit: 'Sente',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '426',
    smallestDenomination: 1
  },
  lyd: {
    priority: 100,
    isoCode: 'LYD',
    name: 'Libyan Dinar',
    symbol: 'ل.د',
    alternateSymbols: ['LD'],
    subunit: 'Dirham',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '434',
    smallestDenomination: 50
  },
  mad: {
    priority: 100,
    isoCode: 'MAD',
    name: 'Moroccan Dirham',
    symbol: 'د.م.',
    alternateSymbols: [],
    subunit: 'Centime',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '504',
    smallestDenomination: 1
  },
  mdl: {
    priority: 100,
    isoCode: 'MDL',
    name: 'Moldovan Leu',
    symbol: 'L',
    alternateSymbols: ['lei'],
    subunit: 'Ban',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '498',
    smallestDenomination: 1
  },
  mga: {
    priority: 100,
    isoCode: 'MGA',
    name: 'Malagasy Ariary',
    symbol: 'Ar',
    alternateSymbols: [],
    subunit: 'Iraimbilanja',
    subunitToUnit: 5,
    precision: 1,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '969',
    smallestDenomination: 1
  },
  mkd: {
    priority: 100,
    isoCode: 'MKD',
    name: 'Macedonian Denar',
    symbol: 'ден',
    alternateSymbols: [],
    subunit: 'Deni',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '807',
    smallestDenomination: 100
  },
  mmk: {
    priority: 100,
    isoCode: 'MMK',
    name: 'Myanmar Kyat',
    symbol: 'K',
    disambiguateSymbol: 'MMK',
    alternateSymbols: [],
    subunit: 'Pya',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '104',
    smallestDenomination: 50
  },
  mnt: {
    priority: 100,
    isoCode: 'MNT',
    name: 'Mongolian Tögrög',
    symbol: '₮',
    alternateSymbols: [],
    subunit: 'Möngö',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20AE;',
    decimal: '.',
    separator: ',',
    isoNumeric: '496',
    smallestDenomination: 2000
  },
  mop: {
    priority: 100,
    isoCode: 'MOP',
    name: 'Macanese Pataca',
    symbol: 'P',
    alternateSymbols: ['MOP$'],
    subunit: 'Avo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '446',
    smallestDenomination: 10
  },
  mru: {
    priority: 100,
    isoCode: 'MRU',
    name: 'Mauritanian Ouguiya',
    symbol: 'UM',
    alternateSymbols: [],
    subunit: 'Khoums',
    subunitToUnit: 5,
    precision: 1,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '929',
    smallestDenomination: 1
  },
  mur: {
    priority: 100,
    isoCode: 'MUR',
    name: 'Mauritian Rupee',
    symbol: '₨',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20A8;',
    decimal: '.',
    separator: ',',
    isoNumeric: '480',
    smallestDenomination: 100
  },
  mvr: {
    priority: 100,
    isoCode: 'MVR',
    name: 'Maldivian Rufiyaa',
    symbol: 'MVR',
    alternateSymbols: ['MRF', 'Rf', '/-', 'ރ'],
    subunit: 'Laari',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '462',
    smallestDenomination: 1
  },
  mwk: {
    priority: 100,
    isoCode: 'MWK',
    name: 'Malawian Kwacha',
    symbol: 'MK',
    alternateSymbols: [],
    subunit: 'Tambala',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '454',
    smallestDenomination: 1
  },
  mxn: {
    priority: 100,
    isoCode: 'MXN',
    name: 'Mexican Peso',
    symbol: '$',
    disambiguateSymbol: 'MEX$',
    alternateSymbols: ['MEX$'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '484',
    smallestDenomination: 5
  },
  myr: {
    priority: 100,
    isoCode: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM',
    alternateSymbols: [],
    subunit: 'Sen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '458',
    smallestDenomination: 5
  },
  mzn: {
    priority: 100,
    isoCode: 'MZN',
    name: 'Mozambican Metical',
    symbol: 'MTn',
    alternateSymbols: ['MZN'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '943',
    smallestDenomination: 1
  },
  nad: {
    priority: 100,
    isoCode: 'NAD',
    name: 'Namibian Dollar',
    symbol: '$',
    disambiguateSymbol: 'N$',
    alternateSymbols: ['N$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '516',
    smallestDenomination: 5
  },
  ngn: {
    priority: 100,
    isoCode: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦',
    alternateSymbols: [],
    subunit: 'Kobo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20A6;',
    decimal: '.',
    separator: ',',
    isoNumeric: '566',
    smallestDenomination: 50
  },
  nio: {
    priority: 100,
    isoCode: 'NIO',
    name: 'Nicaraguan Córdoba',
    symbol: 'C$',
    disambiguateSymbol: 'NIO$',
    alternateSymbols: [],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '558',
    smallestDenomination: 5
  },
  nok: {
    priority: 100,
    isoCode: 'NOK',
    name: 'Norwegian Krone',
    symbol: 'kr',
    disambiguateSymbol: 'NOK',
    alternateSymbols: [',-'],
    subunit: 'Øre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: 'kr',
    decimal: ',',
    separator: '.',
    isoNumeric: '578',
    smallestDenomination: 100
  },
  npr: {
    priority: 100,
    isoCode: 'NPR',
    name: 'Nepalese Rupee',
    symbol: 'Rs.',
    disambiguateSymbol: 'NPR',
    alternateSymbols: ['Rs', 'रू', '₨'],
    subunit: 'Paisa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20A8;',
    decimal: '.',
    separator: ',',
    isoNumeric: '524',
    smallestDenomination: 1
  },
  nzd: {
    priority: 100,
    isoCode: 'NZD',
    name: 'New Zealand Dollar',
    symbol: '$',
    disambiguateSymbol: 'NZ$',
    alternateSymbols: ['NZ$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '554',
    smallestDenomination: 10
  },
  omr: {
    priority: 100,
    isoCode: 'OMR',
    name: 'Omani Rial',
    symbol: 'ر.ع.',
    alternateSymbols: [],
    subunit: 'Baisa',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: true,
    htmlEntity: '&#xFDFC;',
    decimal: '.',
    separator: ',',
    isoNumeric: '512',
    smallestDenomination: 5
  },
  pab: {
    priority: 100,
    isoCode: 'PAB',
    name: 'Panamanian Balboa',
    symbol: 'B/.',
    alternateSymbols: [],
    subunit: 'Centésimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '590',
    smallestDenomination: 1
  },
  pen: {
    priority: 100,
    isoCode: 'PEN',
    name: 'Peruvian Sol',
    symbol: 'S/',
    alternateSymbols: [],
    subunit: 'Céntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: 'S/',
    decimal: '.',
    separator: ',',
    isoNumeric: '604',
    smallestDenomination: 1
  },
  pgk: {
    priority: 100,
    isoCode: 'PGK',
    name: 'Papua New Guinean Kina',
    symbol: 'K',
    disambiguateSymbol: 'PGK',
    alternateSymbols: [],
    subunit: 'Toea',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '598',
    smallestDenomination: 5
  },
  php: {
    priority: 100,
    isoCode: 'PHP',
    name: 'Philippine Peso',
    symbol: '₱',
    alternateSymbols: ['PHP', 'PhP', 'P'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20B1;',
    decimal: '.',
    separator: ',',
    isoNumeric: '608',
    smallestDenomination: 1
  },
  pkr: {
    priority: 100,
    isoCode: 'PKR',
    name: 'Pakistani Rupee',
    symbol: '₨',
    disambiguateSymbol: 'PKR',
    alternateSymbols: ['Rs'],
    subunit: 'Paisa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20A8;',
    decimal: '.',
    separator: ',',
    isoNumeric: '586',
    smallestDenomination: 100
  },
  pln: {
    priority: 100,
    isoCode: 'PLN',
    name: 'Polish Złoty',
    symbol: 'zł',
    alternateSymbols: [],
    subunit: 'Grosz',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: 'z&#322;',
    decimal: ',',
    separator: ' ',
    isoNumeric: '985',
    smallestDenomination: 1
  },
  pyg: {
    priority: 100,
    isoCode: 'PYG',
    name: 'Paraguayan Guaraní',
    symbol: '₲',
    alternateSymbols: [],
    subunit: 'Céntimo',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: true,
    htmlEntity: '&#x20B2;',
    decimal: '.',
    separator: ',',
    isoNumeric: '600',
    smallestDenomination: 5000
  },
  qar: {
    priority: 100,
    isoCode: 'QAR',
    name: 'Qatari Riyal',
    symbol: 'ر.ق',
    alternateSymbols: ['QR'],
    subunit: 'Dirham',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#xFDFC;',
    decimal: '.',
    separator: ',',
    isoNumeric: '634',
    smallestDenomination: 1
  },
  ron: {
    priority: 100,
    isoCode: 'RON',
    name: 'Romanian Leu',
    symbol: 'Lei',
    alternateSymbols: [],
    subunit: 'Bani',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '946',
    smallestDenomination: 1
  },
  rsd: {
    priority: 100,
    isoCode: 'RSD',
    name: 'Serbian Dinar',
    symbol: 'РСД',
    alternateSymbols: ['RSD', 'din', 'дин'],
    subunit: 'Para',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '941',
    smallestDenomination: 100
  },
  rub: {
    priority: 100,
    isoCode: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽',
    alternateSymbols: ['руб.', 'р.'],
    subunit: 'Kopeck',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20BD;',
    decimal: ',',
    separator: '.',
    isoNumeric: '643',
    smallestDenomination: 1
  },
  rwf: {
    priority: 100,
    isoCode: 'RWF',
    name: 'Rwandan Franc',
    symbol: 'FRw',
    alternateSymbols: ['RF', 'R₣'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '646',
    smallestDenomination: 100
  },
  sar: {
    priority: 100,
    isoCode: 'SAR',
    name: 'Saudi Riyal',
    symbol: 'ر.س',
    alternateSymbols: ['SR', '﷼'],
    subunit: 'Hallallah',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#xFDFC;',
    decimal: '.',
    separator: ',',
    isoNumeric: '682',
    smallestDenomination: 5
  },
  sbd: {
    priority: 100,
    isoCode: 'SBD',
    name: 'Solomon Islands Dollar',
    symbol: '$',
    disambiguateSymbol: 'SI$',
    alternateSymbols: ['SI$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '090',
    smallestDenomination: 10
  },
  scr: {
    priority: 100,
    isoCode: 'SCR',
    name: 'Seychellois Rupee',
    symbol: '₨',
    disambiguateSymbol: 'SRe',
    alternateSymbols: ['SRe', 'SR'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20A8;',
    decimal: '.',
    separator: ',',
    isoNumeric: '690',
    smallestDenomination: 1
  },
  sdg: {
    priority: 100,
    isoCode: 'SDG',
    name: 'Sudanese Pound',
    symbol: '£',
    disambiguateSymbol: 'SDG',
    alternateSymbols: [],
    subunit: 'Piastre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '938',
    smallestDenomination: 1
  },
  sek: {
    priority: 100,
    isoCode: 'SEK',
    name: 'Swedish Krona',
    symbol: 'kr',
    disambiguateSymbol: 'SEK',
    alternateSymbols: [':-'],
    subunit: 'Öre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: ',',
    separator: ' ',
    isoNumeric: '752',
    smallestDenomination: 100
  },
  sgd: {
    priority: 100,
    isoCode: 'SGD',
    name: 'Singapore Dollar',
    symbol: '$',
    disambiguateSymbol: 'S$',
    alternateSymbols: ['S$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '702',
    smallestDenomination: 1
  },
  shp: {
    priority: 100,
    isoCode: 'SHP',
    name: 'Saint Helenian Pound',
    symbol: '£',
    disambiguateSymbol: 'SHP',
    alternateSymbols: [],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '654',
    smallestDenomination: 1
  },
  skk: {
    priority: 100,
    isoCode: 'SKK',
    name: 'Slovak Koruna',
    symbol: 'Sk',
    alternateSymbols: [],
    subunit: 'Halier',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '703',
    smallestDenomination: 50
  },
  sll: {
    priority: 100,
    isoCode: 'SLL',
    name: 'Sierra Leonean Leone',
    symbol: 'Le',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '694',
    smallestDenomination: 1000
  },
  sos: {
    priority: 100,
    isoCode: 'SOS',
    name: 'Somali Shilling',
    symbol: 'Sh',
    alternateSymbols: ['Sh.So'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '706',
    smallestDenomination: 1
  },
  srd: {
    priority: 100,
    isoCode: 'SRD',
    name: 'Surinamese Dollar',
    symbol: '$',
    disambiguateSymbol: 'SRD',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '968',
    smallestDenomination: 1
  },
  ssp: {
    priority: 100,
    isoCode: 'SSP',
    name: 'South Sudanese Pound',
    symbol: '£',
    disambiguateSymbol: 'SSP',
    alternateSymbols: [],
    subunit: 'piaster',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '728',
    smallestDenomination: 5
  },
  std: {
    priority: 100,
    isoCode: 'STD',
    name: 'São Tomé and Príncipe Dobra',
    symbol: 'Db',
    alternateSymbols: [],
    subunit: 'Cêntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '678',
    smallestDenomination: 10000
  },
  stn: {
    priority: 100,
    isoCode: 'STN',
    name: 'São Tomé and Príncipe Second Dobra',
    symbol: 'Db',
    disambiguateSymbol: 'STN',
    alternateSymbols: [],
    subunit: 'Cêntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '930',
    smallestDenomination: 10
  },
  svc: {
    priority: 100,
    isoCode: 'SVC',
    name: 'Salvadoran Colón',
    symbol: '₡',
    alternateSymbols: ['¢'],
    subunit: 'Centavo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20A1;',
    decimal: '.',
    separator: ',',
    isoNumeric: '222',
    smallestDenomination: 1
  },
  syp: {
    priority: 100,
    isoCode: 'SYP',
    name: 'Syrian Pound',
    symbol: '£S',
    alternateSymbols: ['£', 'ل.س', 'LS', 'الليرة السورية'],
    subunit: 'Piastre',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '760',
    smallestDenomination: 100
  },
  szl: {
    priority: 100,
    isoCode: 'SZL',
    name: 'Swazi Lilangeni',
    symbol: 'E',
    disambiguateSymbol: 'SZL',
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '748',
    smallestDenomination: 1
  },
  thb: {
    priority: 100,
    isoCode: 'THB',
    name: 'Thai Baht',
    symbol: '฿',
    alternateSymbols: [],
    subunit: 'Satang',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x0E3F;',
    decimal: '.',
    separator: ',',
    isoNumeric: '764',
    smallestDenomination: 1
  },
  tjs: {
    priority: 100,
    isoCode: 'TJS',
    name: 'Tajikistani Somoni',
    symbol: 'ЅМ',
    alternateSymbols: [],
    subunit: 'Diram',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '972',
    smallestDenomination: 1
  },
  tmt: {
    priority: 100,
    isoCode: 'TMT',
    name: 'Turkmenistani Manat',
    symbol: 'T',
    alternateSymbols: [],
    subunit: 'Tenge',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '934',
    smallestDenomination: 1
  },
  tnd: {
    priority: 100,
    isoCode: 'TND',
    name: 'Tunisian Dinar',
    symbol: 'د.ت',
    alternateSymbols: ['TD', 'DT'],
    subunit: 'Millime',
    subunitToUnit: 1000,
    precision: 3,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '788',
    smallestDenomination: 10
  },
  top: {
    priority: 100,
    isoCode: 'TOP',
    name: 'Tongan Paʻanga',
    symbol: 'T$',
    alternateSymbols: ['PT'],
    subunit: 'Seniti',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '776',
    smallestDenomination: 1
  },
  "try": {
    priority: 100,
    isoCode: 'TRY',
    name: 'Turkish Lira',
    symbol: '₺',
    alternateSymbols: ['TL'],
    subunit: 'kuruş',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#8378;',
    decimal: ',',
    separator: '.',
    isoNumeric: '949',
    smallestDenomination: 1
  },
  ttd: {
    priority: 100,
    isoCode: 'TTD',
    name: 'Trinidad and Tobago Dollar',
    symbol: '$',
    disambiguateSymbol: 'TT$',
    alternateSymbols: ['TT$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '780',
    smallestDenomination: 1
  },
  twd: {
    priority: 100,
    isoCode: 'TWD',
    name: 'New Taiwan Dollar',
    symbol: '$',
    disambiguateSymbol: 'NT$',
    alternateSymbols: ['NT$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '901',
    smallestDenomination: 50
  },
  tzs: {
    priority: 100,
    isoCode: 'TZS',
    name: 'Tanzanian Shilling',
    symbol: 'Sh',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '834',
    smallestDenomination: 5000
  },
  uah: {
    priority: 100,
    isoCode: 'UAH',
    name: 'Ukrainian Hryvnia',
    symbol: '₴',
    alternateSymbols: [],
    subunit: 'Kopiyka',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20B4;',
    decimal: '.',
    separator: ',',
    isoNumeric: '980',
    smallestDenomination: 1
  },
  ugx: {
    priority: 100,
    isoCode: 'UGX',
    name: 'Ugandan Shilling',
    symbol: 'USh',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '800',
    smallestDenomination: 1000
  },
  usd: {
    priority: 1,
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$',
    disambiguateSymbol: 'US$',
    alternateSymbols: ['US$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '840',
    smallestDenomination: 1
  },
  uyu: {
    priority: 100,
    isoCode: 'UYU',
    name: 'Uruguayan Peso',
    symbol: '$U',
    alternateSymbols: ['$U'],
    subunit: 'Centésimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$U',
    decimal: ',',
    separator: '.',
    isoNumeric: '858',
    smallestDenomination: 100
  },
  uzs: {
    priority: 100,
    isoCode: 'UZS',
    name: 'Uzbekistan Som',
    symbol: "so'm",
    alternateSymbols: ['so‘m', 'сўм', 'сум', 's', 'с'],
    subunit: 'Tiyin',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '860',
    smallestDenomination: 100
  },
  ves: {
    priority: 100,
    isoCode: 'VES',
    name: 'Venezuelan Bolívar Soberano',
    symbol: 'Bs',
    alternateSymbols: ['Bs.S'],
    subunit: 'Céntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '928',
    smallestDenomination: 1
  },
  vnd: {
    priority: 100,
    isoCode: 'VND',
    name: 'Vietnamese Đồng',
    symbol: '₫',
    alternateSymbols: [],
    subunit: 'Hào',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20AB;',
    decimal: ',',
    separator: '.',
    isoNumeric: '704',
    smallestDenomination: 100
  },
  vuv: {
    priority: 100,
    isoCode: 'VUV',
    name: 'Vanuatu Vatu',
    symbol: 'Vt',
    alternateSymbols: [],
    subunit: null,
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '548',
    smallestDenomination: 1
  },
  wst: {
    priority: 100,
    isoCode: 'WST',
    name: 'Samoan Tala',
    symbol: 'T',
    disambiguateSymbol: 'WS$',
    alternateSymbols: ['WS$', 'SAT', 'ST'],
    subunit: 'Sene',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '882',
    smallestDenomination: 10
  },
  xaf: {
    priority: 100,
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'CFA',
    disambiguateSymbol: 'FCFA',
    alternateSymbols: ['FCFA'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '950',
    smallestDenomination: 100
  },
  xag: {
    priority: 100,
    isoCode: 'XAG',
    name: 'Silver (Troy Ounce)',
    symbol: 'oz t',
    disambiguateSymbol: 'XAG',
    alternateSymbols: [],
    subunit: 'oz',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '961'
  },
  xau: {
    priority: 100,
    isoCode: 'XAU',
    name: 'Gold (Troy Ounce)',
    symbol: 'oz t',
    disambiguateSymbol: 'XAU',
    alternateSymbols: [],
    subunit: 'oz',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '959'
  },
  xba: {
    priority: 100,
    isoCode: 'XBA',
    name: 'European Composite Unit',
    symbol: '',
    disambiguateSymbol: 'XBA',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '955'
  },
  xbb: {
    priority: 100,
    isoCode: 'XBB',
    name: 'European Monetary Unit',
    symbol: '',
    disambiguateSymbol: 'XBB',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '956'
  },
  xbc: {
    priority: 100,
    isoCode: 'XBC',
    name: 'European Unit of Account 9',
    symbol: '',
    disambiguateSymbol: 'XBC',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '957'
  },
  xbd: {
    priority: 100,
    isoCode: 'XBD',
    name: 'European Unit of Account 17',
    symbol: '',
    disambiguateSymbol: 'XBD',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '958'
  },
  xcd: {
    priority: 100,
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$',
    disambiguateSymbol: 'EX$',
    alternateSymbols: ['EC$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '951',
    smallestDenomination: 1
  },
  xdr: {
    priority: 100,
    isoCode: 'XDR',
    name: 'Special Drawing Rights',
    symbol: 'SDR',
    alternateSymbols: ['XDR'],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '960'
  },
  xof: {
    priority: 100,
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'Fr',
    disambiguateSymbol: 'CFA',
    alternateSymbols: ['CFA'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '952',
    smallestDenomination: 100
  },
  xpd: {
    priority: 100,
    isoCode: 'XPD',
    name: 'Palladium',
    symbol: 'oz t',
    disambiguateSymbol: 'XPD',
    alternateSymbols: [],
    subunit: 'oz',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '964'
  },
  xpf: {
    priority: 100,
    isoCode: 'XPF',
    name: 'Cfp Franc',
    symbol: 'Fr',
    alternateSymbols: ['F'],
    subunit: 'Centime',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '953',
    smallestDenomination: 100
  },
  xpt: {
    priority: 100,
    isoCode: 'XPT',
    name: 'Platinum',
    symbol: 'oz t',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '962',
    smallestDenomination: ''
  },
  xts: {
    priority: 100,
    isoCode: 'XTS',
    name: 'Codes specifically reserved for testing purposes',
    symbol: '',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '963',
    smallestDenomination: ''
  },
  yer: {
    priority: 100,
    isoCode: 'YER',
    name: 'Yemeni Rial',
    symbol: '﷼',
    alternateSymbols: [],
    subunit: 'Fils',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#xFDFC;',
    decimal: '.',
    separator: ',',
    isoNumeric: '886',
    smallestDenomination: 100
  },
  zar: {
    priority: 100,
    isoCode: 'ZAR',
    name: 'South African Rand',
    symbol: 'R',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x0052;',
    decimal: '.',
    separator: ',',
    isoNumeric: '710',
    smallestDenomination: 10
  },
  zmk: {
    priority: 100,
    isoCode: 'ZMK',
    name: 'Zambian Kwacha',
    symbol: 'ZK',
    disambiguateSymbol: 'ZMK',
    alternateSymbols: [],
    subunit: 'Ngwee',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '894',
    smallestDenomination: 5
  },
  zmw: {
    priority: 100,
    isoCode: 'ZMW',
    name: 'Zambian Kwacha',
    symbol: 'K',
    disambiguateSymbol: 'ZMW',
    alternateSymbols: [],
    subunit: 'Ngwee',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '967',
    smallestDenomination: 5
  }
});
;// CONCATENATED MODULE: ./packages/currency-text-field/src/currency/currency_non_iso.ts
/* harmony default export */ const currency_non_iso = ({
  bch: {
    priority: 100,
    isoCode: 'BCH',
    name: 'Bitcoin Cash',
    symbol: '₿',
    disambiguateSymbol: '₿CH',
    alternateSymbols: ['BCH'],
    subunit: 'Satoshi',
    subunitToUnit: 100000000,
    precision: 8,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '&#x20bf;',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  btc: {
    priority: 100,
    isoCode: 'BTC',
    name: 'Bitcoin',
    symbol: '₿',
    alternateSymbols: [],
    subunit: 'Satoshi',
    subunitToUnit: 100000000,
    precision: 8,
    symbolFirst: true,
    htmlEntity: '&#x20bf;',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  jep: {
    priority: 100,
    isoCode: 'JEP',
    name: 'Jersey Pound',
    symbol: '£',
    disambiguateSymbol: 'JEP',
    alternateSymbols: [],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  ggp: {
    priority: 100,
    isoCode: 'GGP',
    name: 'Guernsey Pound',
    symbol: '£',
    disambiguateSymbol: 'GGP',
    alternateSymbols: [],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  imp: {
    priority: 100,
    isoCode: 'IMP',
    name: 'Isle of Man Pound',
    symbol: '£',
    disambiguateSymbol: 'IMP',
    alternateSymbols: ['M£'],
    subunit: 'Penny',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  xfu: {
    priority: 100,
    isoCode: 'XFU',
    name: 'UIC Franc',
    symbol: '',
    disambiguateSymbol: 'XFU',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: ''
  },
  gbx: {
    priority: 100,
    isoCode: 'GBX',
    name: 'British Penny',
    symbol: '',
    disambiguateSymbol: 'GBX',
    alternateSymbols: [],
    subunit: '',
    subunitToUnit: 1,
    precision: 0,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  cnh: {
    priority: 100,
    isoCode: 'CNH',
    name: 'Chinese Renminbi Yuan Offshore',
    symbol: '¥',
    disambiguateSymbol: 'CNH',
    alternateSymbols: ['CN¥', '元', 'CN元'],
    subunit: 'Fen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '￥',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  },
  usdc: {
    priority: 100,
    so_code: 'USDC',
    name: 'USD Coin',
    symbol: 'USDC',
    disambiguateSymbol: 'USDC',
    alternateSymbols: [],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 1
  }
});
;// CONCATENATED MODULE: ./packages/currency-text-field/src/currency/currency_backwards_compatible.ts
/* harmony default export */ const currency_backwards_compatible = ({
  eek: {
    priority: 100,
    isoCode: 'EEK',
    name: 'Estonian Kroon',
    symbol: 'KR',
    alternateSymbols: [],
    subunit: 'Sent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '233',
    smallestDenomination: 5
  },
  ghc: {
    priority: 100,
    isoCode: 'GHS',
    name: 'Ghanaian Cedi',
    symbol: '₵',
    disambiguateSymbol: 'GH₵',
    alternateSymbols: ['GH₵'],
    subunit: 'Pesewa',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x20B5;',
    decimal: '.',
    separator: ',',
    isoNumeric: '288',
    smallestDenomination: 1
  },
  ltl: {
    priority: 100,
    isoCode: 'LTL',
    name: 'Lithuanian Litas',
    symbol: 'Lt',
    alternateSymbols: [],
    subunit: 'Centas',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '440',
    smallestDenomination: 1
  },
  lvl: {
    priority: 100,
    isoCode: 'LVL',
    name: 'Latvian Lats',
    symbol: 'Ls',
    alternateSymbols: [],
    subunit: 'Santīms',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '428',
    smallestDenomination: 1
  },
  mro: {
    priority: 100,
    isoCode: 'MRO',
    name: 'Mauritanian Ouguiya',
    symbol: 'UM',
    disambiguateSymbol: 'A-UM',
    alternateSymbols: [],
    subunit: 'Khoums',
    subunitToUnit: 5,
    precision: 1,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '478',
    smallestDenomination: 1
  },
  mtl: {
    priority: 100,
    isoCode: 'MTL',
    name: 'Maltese Lira',
    symbol: '₤',
    alternateSymbols: ['Lm'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A3;',
    decimal: '.',
    separator: ',',
    isoNumeric: '470',
    smallestDenomination: 1
  },
  tmm: {
    priority: 100,
    isoCode: 'TMM',
    name: 'Turkmenistani Manat',
    symbol: 'm',
    alternateSymbols: [],
    subunit: 'Tennesi',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: false,
    format: '%n %u',
    htmlEntity: '',
    decimal: '.',
    separator: ',',
    isoNumeric: '795',
    smallestDenomination: 1
  },
  yen: {
    priority: 100,
    isoCode: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    disambiguateSymbol: 'JPY',
    alternateSymbols: ['円', '圓'],
    subunit: 'Sen',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '&#x00A5;',
    decimal: '.',
    separator: ',',
    isoNumeric: '',
    smallestDenomination: 100
  },
  zwd: {
    priority: 100,
    isoCode: 'ZWD',
    name: 'Zimbabwean Dollar',
    symbol: '$',
    disambiguateSymbol: 'ZWD',
    alternateSymbols: ['Z$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '716',
    smallestDenomination: 100
  },
  zwl: {
    priority: 100,
    isoCode: 'ZWL',
    name: 'Zimbabwean Dollar',
    symbol: '$',
    disambiguateSymbol: 'ZWL',
    alternateSymbols: ['Z$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '932',
    smallestDenomination: 100
  },
  zwn: {
    priority: 100,
    isoCode: 'ZWN',
    name: 'Zimbabwean Dollar',
    symbol: '$',
    disambiguateSymbol: 'ZWN',
    alternateSymbols: ['Z$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '942',
    smallestDenomination: 100
  },
  zwr: {
    priority: 100,
    isoCode: 'ZWR',
    name: 'Zimbabwean Dollar',
    symbol: '$',
    disambiguateSymbol: 'ZWR',
    alternateSymbols: ['Z$'],
    subunit: 'Cent',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '$',
    decimal: '.',
    separator: ',',
    isoNumeric: '935',
    smallestDenomination: 100
  },
  vef: {
    priority: 100,
    isoCode: 'VEF',
    name: 'Venezuelan Bolívar',
    symbol: 'Bs.F',
    alternateSymbols: ['Bs'],
    subunit: 'Céntimo',
    subunitToUnit: 100,
    precision: 2,
    symbolFirst: true,
    htmlEntity: '',
    decimal: ',',
    separator: '.',
    isoNumeric: '937',
    smallestDenomination: 1
  }
});
;// CONCATENATED MODULE: ./packages/currency-text-field/src/currency/currency.ts





var CURRENCY = Object.assign({}, currency_iso, currency_non_iso, currency_backwards_compatible);
var CurrencyNames = Object.keys(CURRENCY);
/* harmony default export */ const currency_currency = (CURRENCY);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(39446);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(39275);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(22321);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(98356);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 48 modules
var TextField = __webpack_require__(36043);
// EXTERNAL MODULE: ./node_modules/currency.js/dist/currency.min.js
var currency_min = __webpack_require__(10321);
var currency_min_default = /*#__PURE__*/__webpack_require__.n(currency_min);
// EXTERNAL MODULE: ./node_modules/lodash.pick/index.js
var lodash_pick = __webpack_require__(12008);
var lodash_pick_default = /*#__PURE__*/__webpack_require__.n(lodash_pick);
// EXTERNAL MODULE: ./node_modules/lodash.defaults/index.js
var lodash_defaults = __webpack_require__(88393);
var lodash_defaults_default = /*#__PURE__*/__webpack_require__.n(lodash_defaults);
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(28179);
;// CONCATENATED MODULE: ./packages/currency-text-field/src/lib/currency-text-field.tsx

var _excluded = ["value", "onChange", "currency", "outputFormat", "currencyProps"];











var CURRENCY_ATTRIBUTES = ['precision', 'decimal', 'separator', 'symbol', 'symbolFirst', 'useVedic'];
function CurrencyTextField(props) {
  var value = props.value,
    onChange = props.onChange,
    _props$currency = props.currency,
    currency = _props$currency === void 0 ? 'brl' : _props$currency,
    _props$outputFormat = props.outputFormat,
    outputFormat = _props$outputFormat === void 0 ? 'float' : _props$outputFormat,
    currencyProps = props.currencyProps,
    rest = objectWithoutPropertiesLoose_default()(props, _excluded);
  var _useState = (0,react.useState)(''),
    maskedValue = _useState[0],
    setMaskedValue = _useState[1];
  var priorityCurrencyProps = (0,react.useMemo)(function () {
    var currencyFallback = lodash_pick_default()(currency_currency.brl, CURRENCY_ATTRIBUTES);
    var currencyPreset = lodash_pick_default()(currency_currency[currency], CURRENCY_ATTRIBUTES);
    var mergedCurrency = lodash_defaults_default()(currencyProps, currencyPreset, currencyFallback);
    return lodash_pick_default()(mergedCurrency, CURRENCY_ATTRIBUTES);
  }, [currency, currencyProps]);
  var formatToCurrency = (0,react.useCallback)(function (value) {
    var onlyNumbers = String(value).replace(/\D/g, '');
    return currency_min_default()(onlyNumbers, Object.assign({}, priorityCurrencyProps, {
      fromCents: true,
      symbol: ''
    }));
  }, [priorityCurrencyProps]);
  var internalOnChange = function internalOnChange(textFieldValue) {
    var currencyObject = formatToCurrency(textFieldValue);
    var internalMaskedValue = currencyObject.format();
    var outputValue = internalMaskedValue;
    if (outputFormat === 'float') {
      outputValue = currencyObject.value;
    } else if (outputFormat === 'integer') {
      outputValue = currencyObject.intValue;
    }
    onChange(outputValue);
    setMaskedValue(internalMaskedValue);
  };
  (0,react.useEffect)(function () {
    setMaskedValue(formatToCurrency(value).format());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Box/* default */.Z, {
    children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(TextField/* default */.Z, Object.assign({
      value: maskedValue,
      InputProps: {
        startAdornment: priorityCurrencyProps.symbolFirst ? (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Box/* default */.Z, {
          sx: {
            mr: 0.5
          },
          children: priorityCurrencyProps == null ? void 0 : priorityCurrencyProps.symbol
        }) : null,
        endAdornment: !priorityCurrencyProps.symbolFirst ? (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(Box/* default */.Z, {
          sx: {
            mr: 0.5
          },
          children: priorityCurrencyProps == null ? void 0 : priorityCurrencyProps.symbol
        }) : null
      },
      onChange: function onChange(value) {
        return internalOnChange(value.target.value);
      }
    }, rest))
  });
}
CurrencyTextField.displayName = "CurrencyTextField";
/* harmony default export */ const currency_text_field = ((/* unused pure expression or super */ null && (CurrencyTextField)));
try {
    // @ts-ignore
    CurrencyTextField.displayName = "CurrencyTextField";
    // @ts-ignore
    CurrencyTextField.__docgenInfo = { "description": "", "displayName": "CurrencyTextField", "props": { "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: string | number) => void" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string | number" } }, "outputFormat": { "defaultValue": null, "description": "", "name": "outputFormat", "required": false, "type": { "name": "enum", "value": [{ "value": "\"string\"" }, { "value": "\"float\"" }, { "value": "\"integer\"" }] } }, "currency": { "defaultValue": null, "description": "", "name": "currency", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"all\"" }, { "value": "\"eek\"" }, { "value": "\"ghc\"" }, { "value": "\"ltl\"" }, { "value": "\"lvl\"" }, { "value": "\"mro\"" }, { "value": "\"mtl\"" }, { "value": "\"tmm\"" }, { "value": "\"yen\"" }, { "value": "\"zwd\"" }, { "value": "\"zwl\"" }, { "value": "\"zwn\"" }, { "value": "\"zwr\"" }, { "value": "\"vef\"" }, { "value": "\"bch\"" }, { "value": "\"btc\"" }, { "value": "\"jep\"" }, { "value": "\"ggp\"" }, { "value": "\"imp\"" }, { "value": "\"xfu\"" }, { "value": "\"gbx\"" }, { "value": "\"cnh\"" }, { "value": "\"usdc\"" }, { "value": "\"aed\"" }, { "value": "\"afn\"" }, { "value": "\"amd\"" }, { "value": "\"ang\"" }, { "value": "\"aoa\"" }, { "value": "\"ars\"" }, { "value": "\"aud\"" }, { "value": "\"awg\"" }, { "value": "\"azn\"" }, { "value": "\"bam\"" }, { "value": "\"bbd\"" }, { "value": "\"bdt\"" }, { "value": "\"bgn\"" }, { "value": "\"bhd\"" }, { "value": "\"bif\"" }, { "value": "\"bmd\"" }, { "value": "\"bnd\"" }, { "value": "\"bob\"" }, { "value": "\"brl\"" }, { "value": "\"bsd\"" }, { "value": "\"btn\"" }, { "value": "\"bwp\"" }, { "value": "\"byn\"" }, { "value": "\"byr\"" }, { "value": "\"bzd\"" }, { "value": "\"cad\"" }, { "value": "\"cdf\"" }, { "value": "\"chf\"" }, { "value": "\"clf\"" }, { "value": "\"clp\"" }, { "value": "\"cny\"" }, { "value": "\"cop\"" }, { "value": "\"crc\"" }, { "value": "\"cuc\"" }, { "value": "\"cup\"" }, { "value": "\"cve\"" }, { "value": "\"czk\"" }, { "value": "\"djf\"" }, { "value": "\"dkk\"" }, { "value": "\"dop\"" }, { "value": "\"dzd\"" }, { "value": "\"egp\"" }, { "value": "\"ern\"" }, { "value": "\"etb\"" }, { "value": "\"eur\"" }, { "value": "\"fjd\"" }, { "value": "\"fkp\"" }, { "value": "\"gbp\"" }, { "value": "\"gel\"" }, { "value": "\"ghs\"" }, { "value": "\"gip\"" }, { "value": "\"gmd\"" }, { "value": "\"gnf\"" }, { "value": "\"gtq\"" }, { "value": "\"gyd\"" }, { "value": "\"hkd\"" }, { "value": "\"hnl\"" }, { "value": "\"hrk\"" }, { "value": "\"htg\"" }, { "value": "\"huf\"" }, { "value": "\"idr\"" }, { "value": "\"ils\"" }, { "value": "\"inr\"" }, { "value": "\"iqd\"" }, { "value": "\"irr\"" }, { "value": "\"isk\"" }, { "value": "\"jmd\"" }, { "value": "\"jod\"" }, { "value": "\"jpy\"" }, { "value": "\"kes\"" }, { "value": "\"kgs\"" }, { "value": "\"khr\"" }, { "value": "\"kmf\"" }, { "value": "\"kpw\"" }, { "value": "\"krw\"" }, { "value": "\"kwd\"" }, { "value": "\"kyd\"" }, { "value": "\"kzt\"" }, { "value": "\"lak\"" }, { "value": "\"lbp\"" }, { "value": "\"lkr\"" }, { "value": "\"lrd\"" }, { "value": "\"lsl\"" }, { "value": "\"lyd\"" }, { "value": "\"mad\"" }, { "value": "\"mdl\"" }, { "value": "\"mga\"" }, { "value": "\"mkd\"" }, { "value": "\"mmk\"" }, { "value": "\"mnt\"" }, { "value": "\"mop\"" }, { "value": "\"mru\"" }, { "value": "\"mur\"" }, { "value": "\"mvr\"" }, { "value": "\"mwk\"" }, { "value": "\"mxn\"" }, { "value": "\"myr\"" }, { "value": "\"mzn\"" }, { "value": "\"nad\"" }, { "value": "\"ngn\"" }, { "value": "\"nio\"" }, { "value": "\"nok\"" }, { "value": "\"npr\"" }, { "value": "\"nzd\"" }, { "value": "\"omr\"" }, { "value": "\"pab\"" }, { "value": "\"pen\"" }, { "value": "\"pgk\"" }, { "value": "\"php\"" }, { "value": "\"pkr\"" }, { "value": "\"pln\"" }, { "value": "\"pyg\"" }, { "value": "\"qar\"" }, { "value": "\"ron\"" }, { "value": "\"rsd\"" }, { "value": "\"rub\"" }, { "value": "\"rwf\"" }, { "value": "\"sar\"" }, { "value": "\"sbd\"" }, { "value": "\"scr\"" }, { "value": "\"sdg\"" }, { "value": "\"sek\"" }, { "value": "\"sgd\"" }, { "value": "\"shp\"" }, { "value": "\"skk\"" }, { "value": "\"sll\"" }, { "value": "\"sos\"" }, { "value": "\"srd\"" }, { "value": "\"ssp\"" }, { "value": "\"std\"" }, { "value": "\"stn\"" }, { "value": "\"svc\"" }, { "value": "\"syp\"" }, { "value": "\"szl\"" }, { "value": "\"thb\"" }, { "value": "\"tjs\"" }, { "value": "\"tmt\"" }, { "value": "\"tnd\"" }, { "value": "\"try\"" }, { "value": "\"ttd\"" }, { "value": "\"twd\"" }, { "value": "\"tzs\"" }, { "value": "\"uah\"" }, { "value": "\"ugx\"" }, { "value": "\"usd\"" }, { "value": "\"uyu\"" }, { "value": "\"uzs\"" }, { "value": "\"ves\"" }, { "value": "\"vnd\"" }, { "value": "\"vuv\"" }, { "value": "\"wst\"" }, { "value": "\"xaf\"" }, { "value": "\"xag\"" }, { "value": "\"xau\"" }, { "value": "\"xba\"" }, { "value": "\"xbb\"" }, { "value": "\"xbc\"" }, { "value": "\"xbd\"" }, { "value": "\"xcd\"" }, { "value": "\"xdr\"" }, { "value": "\"xof\"" }, { "value": "\"xpd\"" }, { "value": "\"xpf\"" }, { "value": "\"xpt\"" }, { "value": "\"xts\"" }, { "value": "\"yer\"" }, { "value": "\"zar\"" }, { "value": "\"zmk\"" }, { "value": "\"zmw\"" }] } }, "currencyProps": { "defaultValue": null, "description": "", "name": "currencyProps", "required": false, "type": { "name": "CurrencyProps" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["packages/currency-text-field/src/lib/currency-text-field.tsx#CurrencyTextField"] = { docgenInfo: CurrencyTextField.__docgenInfo, name: "CurrencyTextField", path: "packages/currency-text-field/src/lib/currency-text-field.tsx#CurrencyTextField" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(67557);
;// CONCATENATED MODULE: ./packages/currency-text-field/src/lib/currency-text-field.stories.mdx



/*setup on change*/

/*setup on change*/

/*setup on change*/










function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,jsx_runtime.jsx)(MDXLayout, { ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_createMdxContent, {})
  }) : _createMdxContent();

  function _createMdxContent() {
    const _components = Object.assign({
      h1: "h1",
      p: "p",
      h3: "h3",
      code: "code",
      pre: "pre",
      a: "a",
      div: "div"
    }, (0,lib/* useMDXComponents */.ah)(), props.components);

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Meta */.h_, {
        title: "Currency Textfield",
        component: CurrencyTextField
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.h1, {
        id: "currencytextfield-",
        children: ["CurrencyTextField ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: `https://img.shields.io/badge/Version-v${package_namespaceObject.i8}-brightgreenn`
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Use this component for currency inputs"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "installation",
        children: "Installation"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["First install the latest version of the package from ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          children: "@novatics/currency-text-field"
        }), "."]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @novatics/currency-text-field\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "dependencies",
        children: "Dependencies"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component extends ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://mui.com/material-ui/react-text-field",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Material UI React Text Field"
        }), ". Therefore is needed to install Material UI:"]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "yarn add @mui/material @emotion/react @emotion/styled\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "basic-usage",
        children: "Basic Usage"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Basic Usage",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, {
                value: 123456,
                onChange: () => {
                  /*setup on change*/
                },
                ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import CurrencyTextField from '@novatics/currency-text-field';\n\n<CurrencyTextField\n  value={123456}\n  onChange={() => {\n    /* setup on change */\n  }}\n/>;\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "currency-preset",
        children: "Currency Preset"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Currency Preset",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, {
                value: 123456,
                currency: "aud",
                onChange: () => {
                  /*setup on change*/
                },
                ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "The currency preset implements the default currency values."
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "For example:"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "  aud: {\n    symbol: '$',\n    precision: 2,\n    symbolFirst: true,\n    htmlEntity: '$',\n    decimal: '.',\n    separator: ',',\n  },\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Check the list of available presets and their values:"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Novatics/novatics/blob/dojo/NUI-15-masked-inputs/packages/currency-text-field/src/currency/currency_iso.ts",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "ISO Currency"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Novatics/novatics/blob/dojo/NUI-15-masked-inputs/packages/currency-text-field/src/currency/currency_non_iso.ts",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "NON_ISO Currency"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "custom-props",
        children: "Custom Props"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Custom Props",
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, {
                value: 1234567,
                currency: "aud",
                currencyProps: {
                  decimal: '_',
                  precision: 3,
                  separator: '-',
                  symbol: '(^.^)',
                  symbolFirst: false
                },
                onChange: () => {
                  /*setup on change*/
                },
                ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This component implements ", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.a, {
          href: "https://currency.js.org/",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "CurrencyJs Lib"
        })]
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.p, {
        children: "Its possible to override any/all of this props in 'currencyProps':"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.pre, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "['precision', 'decimal', 'separator', 'symbol', 'symbolFirst', 'useVedic'];\n"
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(_components.h3, {
        id: "playground",
        children: "Playground"
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Canvas */.Xz, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* Story */.oG, {
          name: "Playground",
          argTypes: {
            onChange: {
              description: "Input's onChange method."
            },
            value: {
              description: "Input's initial value."
            },
            outputFormat: {
              description: "Format type returned on onChange Method. 'string' -> masked value, as shown. 'float' -> unmasked number. 'integer' -> unmasked number without the decimal part."
            },
            currency: {
              description: "Preset values of 'precision', 'decimal', 'separator', 'symbol'  'symbolFirst' and 'useVedic' based on currency code."
            },
            currencyProps: {
              description: 'Props from currency.js library.'
            }
          },
          children: args => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(_components.div, {
              style: {
                display: 'flex',
                flexDirection: 'row'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, { ...args
              })
            });
          }
        })
      }), "\n", /*#__PURE__*/(0,jsx_runtime.jsx)(blocks/* ArgsTable */.$4, {
        story: "Playground"
      })]
    });
  }
}
/* ========= */


const basicUsage = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, {
      value: 123456,
      onChange: () => {
        /* setup on change */
      },
      ...args
    })
  });
};
basicUsage.storyName = 'Basic Usage';
basicUsage.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <CurrencyTextField value={123456} onChange={() => {\n      /* setup on change */\n    }} {...args} />\n        </div>;\n}'
  }
};
const currencyPreset = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, {
      value: 123456,
      currency: "aud",
      onChange: () => {
        /* setup on change */
      },
      ...args
    })
  });
};
currencyPreset.storyName = 'Currency Preset';
currencyPreset.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <CurrencyTextField value={123456} currency=\"aud\" onChange={() => {\n      /* setup on change */\n    }} {...args} />\n        </div>;\n}'
  }
};
const customProps = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, {
      value: 1234567,
      currency: "aud",
      currencyProps: {
        decimal: "_",
        precision: 3,
        separator: "-",
        symbol: "(^.^)",
        symbolFirst: false
      },
      onChange: () => {
        /* setup on change */
      },
      ...args
    })
  });
};
customProps.storyName = 'Custom Props';
customProps.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <CurrencyTextField value={1234567} currency=\"aud\" currencyProps={{\n      decimal: \"_\",\n      precision: 3,\n      separator: \"-\",\n      symbol: \"(^.^)\",\n      symbolFirst: false\n    }} onChange={() => {\n      /* setup on change */\n    }} {...args} />\n        </div>;\n}'
  }
};
const playground = args => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CurrencyTextField, { ...args
    })
  });
};
playground.storyName = 'Playground';
playground.argTypes = {
  onChange: {
    description: "Input's onChange method."
  },
  value: {
    description: "Input's initial value."
  },
  outputFormat: {
    description: "Format type returned on onChange Method. 'string' -> masked value, as shown. 'float' -> unmasked number. 'integer' -> unmasked number without the decimal part."
  },
  currency: {
    description: "Preset values of 'precision', 'decimal', 'separator', 'symbol'  'symbolFirst' and 'useVedic' based on currency code."
  },
  currencyProps: {
    description: "Props from currency.js library."
  }
};
playground.parameters = {
  storySource: {
    source: 'args => {\n  return <div style={{\n    display: \"flex\",\n    flexDirection: \"row\"\n  }}>\n          <CurrencyTextField {...args} />\n        </div>;\n}'
  }
};
const componentMeta = {
  title: 'Currency Textfield',
  component: CurrencyTextField,
  tags: ['stories-mdx'],
  includeStories: ["basicUsage", "currencyPreset", "customProps", "playground"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = { ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const currency_text_field_stories = (componentMeta);

/***/ })

}]);
//# sourceMappingURL=currency-text-field-src-lib-currency-text-field-stories-mdx.31b70b62.iframe.bundle.js.map