import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Two-letter ISO 3166-1 alpha-2 representation of a supported country. */
export const CountryCodeSupported = {
  /** "AD": { "description": "Andorra" } */
  Ad: "AD",
  /** "AE": { "description": "United Arab Emirates" } */
  Ae: "AE",
  /** "AG": { "description": "Antigua and Barbuda" } */
  Ag: "AG",
  /** "AI": { "description": "Anguilla" } */
  Ai: "AI",
  /** "AL": { "description": "Albania" } */
  Al: "AL",
  /** "AM": { "description": "Armenia" } */
  Am: "AM",
  /** "AO": { "description": "Angola" } */
  Ao: "AO",
  /** "AR": { "description": "Argentina" } */
  Ar: "AR",
  /** "AS": { "description": "American Samoa" } */
  As: "AS",
  /** "AT": { "description": "Austria" } */
  At: "AT",
  /** "AU": { "description": "Australia" } */
  Au: "AU",
  /** "AW": { "description": "Aruba" } */
  Aw: "AW",
  /** "AX": { "description": "Åland Islands" } */
  Ax: "AX",
  /** "AZ": { "description": "Azerbaijan" } */
  Az: "AZ",
  /** "BA": { "description": "Bosnia and Herzegovina" } */
  Ba: "BA",
  /** "BB": { "description": "Barbados" } */
  Bb: "BB",
  /** "BD": { "description": "Bangladesh" } */
  Bd: "BD",
  /** "BE": { "description": "Belgium" } */
  Be: "BE",
  /** "BF": { "description": "Burkina Faso" } */
  Bf: "BF",
  /** "BG": { "description": "Bulgaria" } */
  Bg: "BG",
  /** "BH": { "description": "Bahrain" } */
  Bh: "BH",
  /** "BI": { "description": "Burundi" } */
  Bi: "BI",
  /** "BJ": { "description": "Benin" } */
  Bj: "BJ",
  /** "BL": { "description": "Saint Barthélemy" } */
  Bl: "BL",
  /** "BM": { "description": "Bermuda" } */
  Bm: "BM",
  /** "BN": { "description": "Brunei" } */
  Bn: "BN",
  /** "BO": { "description": "Bolivia" } */
  Bo: "BO",
  /** "BQ": { "description": "Caribbean Netherlands (Bonaire, Sint Eustatius, and Saba)" } */
  Bq: "BQ",
  /** "BR": { "description": "Brazil" } */
  Br: "BR",
  /** "BS": { "description": "Bahamas" } */
  Bs: "BS",
  /** "BT": { "description": "Bhutan" } */
  Bt: "BT",
  /** "BV": { "description": "Bouvet Island" } */
  Bv: "BV",
  /** "BW": { "description": "Botswana" } */
  Bw: "BW",
  /** "BZ": { "description": "Belize" } */
  Bz: "BZ",
  /** "CA": { "description": "Canada" } */
  Ca: "CA",
  /** "CC": { "description": "Cocos Islands" } */
  Cc: "CC",
  /** "CG": { "description": "Republic of Congo" } */
  Cg: "CG",
  /** "CH": { "description": "Switzerland" } */
  Ch: "CH",
  /** "CI": { "description": "Côte d'Ivoire (Ivory Coast)" } */
  Ci: "CI",
  /** "CK": { "description": "Cook Islands" } */
  Ck: "CK",
  /** "CL": { "description": "Chile" } */
  Cl: "CL",
  /** "CM": { "description": "Cameroon" } */
  Cm: "CM",
  /** "CN": { "description": "China" } */
  Cn: "CN",
  /** "CO": { "description": "Colombia" } */
  Co: "CO",
  /** "CR": { "description": "Costa Rica" } */
  Cr: "CR",
  /** "CV": { "description": "Cape Verde" } */
  Cv: "CV",
  /** "CW": { "description": "Curaçao" } */
  Cw: "CW",
  /** "CX": { "description": "Christmas Island" } */
  Cx: "CX",
  /** "CY": { "description": "Cyprus" } */
  Cy: "CY",
  /** "CZ": { "description": "Czechia (Czech Republic)" } */
  Cz: "CZ",
  /** "DE": { "description": "Germany" } */
  De: "DE",
  /** "DJ": { "description": "Djibouti" } */
  Dj: "DJ",
  /** "DK": { "description": "Denmark" } */
  Dk: "DK",
  /** "DM": { "description": "Dominica" } */
  Dm: "DM",
  /** "DO": { "description": "Dominican Republic" } */
  Do: "DO",
  /** "DZ": { "description": "Algeria" } */
  Dz: "DZ",
  /** "EC": { "description": "Ecuador" } */
  Ec: "EC",
  /** "EE": { "description": "Estonia" } */
  Ee: "EE",
  /** "EG": { "description": "Egypt" } */
  Eg: "EG",
  /** "EH": { "description": "Western Sahara" } */
  Eh: "EH",
  /** "ER": { "description": "Eritrea" } */
  Er: "ER",
  /** "ES": { "description": "Spain" } */
  Es: "ES",
  /** "ET": { "description": "Ethiopia" } */
  Et: "ET",
  /** "FI": { "description": "Finland" } */
  Fi: "FI",
  /** "FJ": { "description": "Fiji" } */
  Fj: "FJ",
  /** "FK": { "description": "Falkland Islands" } */
  Fk: "FK",
  /** "FM": { "description": "Micronesia" } */
  Fm: "FM",
  /** "FO": { "description": "Faroe Islands" } */
  Fo: "FO",
  /** "FR": { "description": "France" } */
  Fr: "FR",
  /** "GA": { "description": "Gabon" } */
  Ga: "GA",
  /** "GB": { "description": "United Kingdom" } */
  Gb: "GB",
  /** "GD": { "description": "Grenada" } */
  Gd: "GD",
  /** "GE": { "description": "Georgia" } */
  Ge: "GE",
  /** "GF": { "description": "French Guiana" } */
  Gf: "GF",
  /** "GG": { "description": "Guernsey" } */
  Gg: "GG",
  /** "GH": { "description": "Ghana" } */
  Gh: "GH",
  /** "GI": { "description": "Gibraltar" } */
  Gi: "GI",
  /** "GL": { "description": "Greenland" } */
  Gl: "GL",
  /** "GM": { "description": "Gambia" } */
  Gm: "GM",
  /** "GN": { "description": "Guinea" } */
  Gn: "GN",
  /** "GP": { "description": "Guadeloupe" } */
  Gp: "GP",
  /** "GQ": { "description": "Equatorial Guinea" } */
  Gq: "GQ",
  /** "GR": { "description": "Greece" } */
  Gr: "GR",
  /** "GS": { "description": "South Georgia and the South Sandwich Islands" } */
  Gs: "GS",
  /** "GT": { "description": "Guatemala" } */
  Gt: "GT",
  /** "GU": { "description": "Guam" } */
  Gu: "GU",
  /** "GW": { "description": "Guinea-Bissau" } */
  Gw: "GW",
  /** "GY": { "description": "Guyana" } */
  Gy: "GY",
  /** "HK": { "description": "Hong Kong" } */
  Hk: "HK",
  /** "HM": { "description": "Heard Island and McDonald Islands" } */
  Hm: "HM",
  /** "HN": { "description": "Honduras" } */
  Hn: "HN",
  /** "HR": { "description": "Croatia" } */
  Hr: "HR",
  /** "HU": { "description": "Hungary" } */
  Hu: "HU",
  /** "ID": { "description": "Indonesia" } */
  Id: "ID",
  /** "IE": { "description": "Ireland" } */
  Ie: "IE",
  /** "IL": { "description": "Israel" } */
  Il: "IL",
  /** "IM": { "description": "Isle of Man" } */
  Im: "IM",
  /** "IN": { "description": "India" } */
  In: "IN",
  /** "IO": { "description": "British Indian Ocean Territory" } */
  Io: "IO",
  /** "IQ": { "description": "Iraq" } */
  Iq: "IQ",
  /** "IS": { "description": "Iceland" } */
  Is: "IS",
  /** "IT": { "description": "Italy" } */
  It: "IT",
  /** "JE": { "description": "Jersey" } */
  Je: "JE",
  /** "JM": { "description": "Jamaica" } */
  Jm: "JM",
  /** "JO": { "description": "Jordan" } */
  Jo: "JO",
  /** "JP": { "description": "Japan" } */
  Jp: "JP",
  /** "KE": { "description": "Kenya" } */
  Ke: "KE",
  /** "KG": { "description": "Kyrgyzstan" } */
  Kg: "KG",
  /** "KH": { "description": "Cambodia" } */
  Kh: "KH",
  /** "KI": { "description": "Kiribati" } */
  Ki: "KI",
  /** "KM": { "description": "Comoros" } */
  Km: "KM",
  /** "KN": { "description": "Saint Kitts and Nevis" } */
  Kn: "KN",
  /** "KR": { "description": "South Korea" } */
  Kr: "KR",
  /** "KW": { "description": "Kuwait" } */
  Kw: "KW",
  /** "KY": { "description": "Cayman Islands" } */
  Ky: "KY",
  /** "KZ": { "description": "Kazakhstan" } */
  Kz: "KZ",
  /** "LA": { "description": "Lao People's Democratic Republic (Laos)" } */
  La: "LA",
  /** "LB": { "description": "Lebanon" } */
  Lb: "LB",
  /** "LC": { "description": "Saint Lucia" } */
  Lc: "LC",
  /** "LI": { "description": "Liechtenstein" } */
  Li: "LI",
  /** "LK": { "description": "Sri Lanka" } */
  Lk: "LK",
  /** "LR": { "description": "Liberia" } */
  Lr: "LR",
  /** "LS": { "description": "Lesotho" } */
  Ls: "LS",
  /** "LT": { "description": "Lithuania" } */
  Lt: "LT",
  /** "LU": { "description": "Luxembourg" } */
  Lu: "LU",
  /** "LV": { "description": "Latvia" } */
  Lv: "LV",
  /** "MA": { "description": "Morocco" } */
  Ma: "MA",
  /** "MC": { "description": "Monaco" } */
  Mc: "MC",
  /** "MD": { "description": "Moldova" } */
  Md: "MD",
  /** "ME": { "description": "Montenegro" } */
  Me: "ME",
  /** "MF": { "description": "Saint Martin" } */
  Mf: "MF",
  /** "MG": { "description": "Madagascar" } */
  Mg: "MG",
  /** "MH": { "description": "Marshall Islands" } */
  Mh: "MH",
  /** "MK": { "description": "Macedonia" } */
  Mk: "MK",
  /** "MN": { "description": "Mongolia" } */
  Mn: "MN",
  /** "MO": { "description": "Macao" } */
  Mo: "MO",
  /** "MP": { "description": "Northern Mariana Islands" } */
  Mp: "MP",
  /** "MQ": { "description": "Martinique" } */
  Mq: "MQ",
  /** "MR": { "description": "Mauritania" } */
  Mr: "MR",
  /** "MS": { "description": "Montserrat" } */
  Ms: "MS",
  /** "MT": { "description": "Malta" } */
  Mt: "MT",
  /** "MU": { "description": "Mauritius" } */
  Mu: "MU",
  /** "MV": { "description": "Maldives" } */
  Mv: "MV",
  /** "MW": { "description": "Malawi" } */
  Mw: "MW",
  /** "MX": { "description": "Mexico" } */
  Mx: "MX",
  /** "MY": { "description": "Malaysia" } */
  My: "MY",
  /** "MZ": { "description": "Mozambique" } */
  Mz: "MZ",
  /** "NA": { "description": "Namibia" } */
  Na: "NA",
  /** "NC": { "description": "New Caledonia" } */
  Nc: "NC",
  /** "NE": { "description": "Niger" } */
  Ne: "NE",
  /** "NF": { "description": "Norfolk Island" } */
  Nf: "NF",
  /** "NG": { "description": "Nigeria" } */
  Ng: "NG",
  /** "NL": { "description": "Netherlands" } */
  Nl: "NL",
  /** "NO": { "description": "Norway" } */
  No: "NO",
  /** "NP": { "description": "Nepal" } */
  Np: "NP",
  /** "NR": { "description": "Nauru" } */
  Nr: "NR",
  /** "NU": { "description": "Niue" } */
  Nu: "NU",
  /** "NZ": { "description": "New Zealand" } */
  Nz: "NZ",
  /** "OM": { "description": "Oman" } */
  Om: "OM",
  /** "PA": { "description": "Panama" } */
  Pa: "PA",
  /** "PE": { "description": "Peru" } */
  Pe: "PE",
  /** "PF": { "description": "French Polynesia" } */
  Pf: "PF",
  /** "PG": { "description": "Papua New Guinea" } */
  Pg: "PG",
  /** "PH": { "description": "Philippines" } */
  Ph: "PH",
  /** "PK": { "description": "Pakistan" } */
  Pk: "PK",
  /** "PL": { "description": "Poland" } */
  Pl: "PL",
  /** "PM": { "description": "Saint Pierre and Miquelon" } */
  Pm: "PM",
  /** "PN": { "description": "Pitcairn" } */
  Pn: "PN",
  /** "PR": { "description": "Puerto Rico" } */
  Pr: "PR",
  /** "PS": { "description": "Palestinian territories" } */
  Ps: "PS",
  /** "PT": { "description": "Portugal" } */
  Pt: "PT",
  /** "PW": { "description": "Palau" } */
  Pw: "PW",
  /** "PY": { "description": "Paraguay" } */
  Py: "PY",
  /** "QA": { "description": "Qatar" } */
  Qa: "QA",
  /** "RE": { "description": "Reunion" } */
  Re: "RE",
  /** "RO": { "description": "Romania" } */
  Ro: "RO",
  /** "RS": { "description": "Republic of Serbia" } */
  Rs: "RS",
  /** "RW": { "description": "Rwanda" } */
  Rw: "RW",
  /** "SA": { "description": "Saudi Arabia" } */
  Sa: "SA",
  /** "SB": { "description": "Solomon Islands" } */
  Sb: "SB",
  /** "SC": { "description": "Seychelles" } */
  Sc: "SC",
  /** "SE": { "description": "Sweden" } */
  Se: "SE",
  /** "SG": { "description": "Singapore" } */
  Sg: "SG",
  /** "SH": { "description": "Saint Helena" } */
  Sh: "SH",
  /** "SI": { "description": "Slovenia" } */
  Si: "SI",
  /** "SJ": { "description": "Svalbard and Jan Mayen" } */
  Sj: "SJ",
  /** "SK": { "description": "Slovakia" } */
  Sk: "SK",
  /** "SL": { "description": "Sierra Leone" } */
  Sl: "SL",
  /** "SM": { "description": "San Marino" } */
  Sm: "SM",
  /** "SN": { "description": "Senegal" } */
  Sn: "SN",
  /** "SR": { "description": "Suriname" } */
  Sr: "SR",
  /** "ST": { "description": "São Tomé and Príncipe" } */
  St: "ST",
  /** "SV": { "description": "El Salvador" } */
  Sv: "SV",
  /** "SX": { "description": "Sint Maarten" } */
  Sx: "SX",
  /** "SZ": { "description": "Swaziland" } */
  Sz: "SZ",
  /** "TC": { "description": "Turks and Caicos Islands" } */
  Tc: "TC",
  /** "TD": { "description": "Chad" } */
  Td: "TD",
  /** "TF": { "description": "French Southern and Antarctic Lands" } */
  Tf: "TF",
  /** "TG": { "description": "Togo" } */
  Tg: "TG",
  /** "TH": { "description": "Thailand" } */
  Th: "TH",
  /** "TJ": { "description": "Tajikistan" } */
  Tj: "TJ",
  /** "TK": { "description": "Tokelau" } */
  Tk: "TK",
  /** "TL": { "description": "Timor-Leste" } */
  Tl: "TL",
  /** "TM": { "description": "Turkmenistan" } */
  Tm: "TM",
  /** "TN": { "description": "Tunisia" } */
  Tn: "TN",
  /** "TO": { "description": "Tonga" } */
  To: "TO",
  /** "TR": { "description": "Turkey" } */
  Tr: "TR",
  /** "TT": { "description": "Trinidad and Tobago" } */
  Tt: "TT",
  /** "TV": { "description": "Tuvalu" } */
  Tv: "TV",
  /** "TW": { "description": "Taiwan" } */
  Tw: "TW",
  /** "TZ": { "description": "Tanzania" } */
  Tz: "TZ",
  /** "UA": { "description": "Ukraine" } */
  Ua: "UA",
  /** "UG": { "description": "Uganda" } */
  Ug: "UG",
  /** "UM": { "description": "United States Minor Outlying Islands" } */
  Um: "UM",
  /** "US": { "description": "United States" } */
  Us: "US",
  /** "UY": { "description": "Uruguay" } */
  Uy: "UY",
  /** "UZ": { "description": "Uzbekistan" } */
  Uz: "UZ",
  /** "VA": { "description": "Holy See (Vatican City)" } */
  Va: "VA",
  /** "VC": { "description": "Saint Vincent and the Grenadines" } */
  Vc: "VC",
  /** "VG": { "description": "British Virgin Islands" } */
  Vg: "VG",
  /** "VI": { "description": "U.S. Virgin Islands" } */
  Vi: "VI",
  /** "VN": { "description": "Vietnam" } */
  Vn: "VN",
  /** "VU": { "description": "Vanuatu" } */
  Vu: "VU",
  /** "WF": { "description": "Wallis and Futuna" } */
  Wf: "WF",
  /** "WS": { "description": "Samoa" } */
  Ws: "WS",
  /** "XK": { "description": "Kosovo" } */
  Xk: "XK",
  /** "YT": { "description": "Mayotte" } */
  Yt: "YT",
  /** "ZA": { "description": "South Africa" } */
  Za: "ZA",
  /** "ZM": { "description": "Zambia" } */
  Zm: "ZM",
} as const;
export type CountryCodeSupported =
  | (typeof CountryCodeSupported)[keyof typeof CountryCodeSupported]
  | (string & {});

export const countryCodeSupportedSchema: EnumSchema<CountryCodeSupported> =
  s.enumOf<CountryCodeSupported>(CountryCodeSupported);
