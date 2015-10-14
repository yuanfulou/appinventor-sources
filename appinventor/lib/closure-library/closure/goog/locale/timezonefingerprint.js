// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Data for time zone detection.
 *
 * The following code was generated by the timezone_detect.py script in:
 * http://go/i18n_tools which uses following files in this directory:
 * http://go/timezone_data
 * Files: olson2fingerprint.txt, country2olsons.txt, popular_olsons.txt
 *
 * After automatic generation, we added some manual editing. Projecting on
 * future changes, it is very unlikely that we will need to change the time
 * zone ID groups. Most of the further modifications will be about relative
 * time zone order in each time zone group. The easiest way to do that is
 * to modify this code directly, and that's what we decide to do.
 *
 */


goog.provide('goog.locale.TimeZoneFingerprint');


/**
 * Time zone fingerprint mapping to time zone list.
 * @enum {Array.<string>}
 */
goog.locale.TimeZoneFingerprint = {
  919994368: ['CA-America/Halifax', 'CA-America/Glace_Bay', 'GL-America/Thule',
    'BM-Atlantic/Bermuda'],
  6: ['AQ-Antarctica/Rothera'],
  8: ['GY-America/Guyana'],
  839516172: ['US-America/Denver', 'MX-America/Chihuahua', 'US-America/Boise',
    'CA-America/Cambridge_Bay', 'CA-America/Edmonton', 'CA-America/Inuvik',
    'MX-America/Mazatlan', 'US-America/Shiprock', 'CA-America/Yellowknife'],
  983564836: ['UY-America/Montevideo'],
  487587858: ['AU-Australia/Lord_Howe'],
  20: ['KI-Pacific/Kiritimati'],
  22: ['TO-Pacific/Tongatapu', 'KI-Pacific/Enderbury'],
  24: ['FJ-Pacific/Fiji', 'TV-Pacific/Funafuti', 'MH-Pacific/Kwajalein',
    'MH-Pacific/Majuro', 'NR-Pacific/Nauru', 'KI-Pacific/Tarawa',
    'UM-Pacific/Wake', 'WF-Pacific/Wallis'],
  25: ['NF-Pacific/Norfolk'],
  26: ['RU-Asia/Magadan', 'VU-Pacific/Efate', 'SB-Pacific/Guadalcanal',
    'FM-Pacific/Kosrae', 'NC-Pacific/Noumea', 'FM-Pacific/Ponape'],
  28: ['AQ-Antarctica/DumontDUrville', 'AU-Australia/Brisbane',
    'AU-Australia/Lindeman', 'GU-Pacific/Guam', 'PG-Pacific/Port_Moresby',
    'MP-Pacific/Saipan', 'FM-Pacific/Truk'],
  931091802: ['US-America/New_York', 'US-America/Detroit', 'CA-America/Iqaluit',
    'US-America/Kentucky/Monticello', 'US-America/Louisville',
    'CA-America/Montreal', 'BS-America/Nassau', 'CA-America/Nipigon',
    'CA-America/Pangnirtung', 'CA-America/Thunder_Bay', 'CA-America/Toronto'],
  30: ['JP-Asia/Tokyo', 'KR-Asia/Seoul', 'TL-Asia/Dili', 'ID-Asia/Jayapura',
    'KP-Asia/Pyongyang', 'PW-Pacific/Palau'],
  32: ['HK-Asia/Hong_Kong', 'CN-Asia/Shanghai', 'AU-Australia/Perth',
    'TW-Asia/Taipei', 'SG-Asia/Singapore', 'AQ-Antarctica/Casey',
    'BN-Asia/Brunei', 'CN-Asia/Chongqing', 'CN-Asia/Harbin',
    'CN-Asia/Kashgar', 'MY-Asia/Kuala_Lumpur', 'MY-Asia/Kuching',
    'MO-Asia/Macau', 'ID-Asia/Makassar', 'PH-Asia/Manila', 'CN-Asia/Urumqi'],
  34: ['TH-Asia/Bangkok', 'AQ-Antarctica/Davis', 'ID-Asia/Jakarta',
    'KH-Asia/Phnom_Penh', 'ID-Asia/Pontianak', 'VN-Asia/Saigon',
    'LA-Asia/Vientiane', 'CX-Indian/Christmas'],
  35: ['MM-Asia/Rangoon', 'CC-Indian/Cocos'],
  941621262: ['BR-America/Sao_Paulo'],
  37: ['IN-Asia/Calcutta'],
  38: ['PK-Asia/Karachi', 'KZ-Asia/Aqtobe', 'TM-Asia/Ashgabat',
    'TJ-Asia/Dushanbe', 'UZ-Asia/Samarkand', 'UZ-Asia/Tashkent',
    'TF-Indian/Kerguelen', 'MV-Indian/Maldives'],
  39: ['AF-Asia/Kabul'],
  40: ['OM-Asia/Muscat', 'AE-Asia/Dubai', 'SC-Indian/Mahe',
    'MU-Indian/Mauritius', 'RE-Indian/Reunion'],
  626175324: ['JO-Asia/Amman'],
  42: ['KE-Africa/Nairobi', 'SA-Asia/Riyadh', 'ET-Africa/Addis_Ababa',
    'ER-Africa/Asmera', 'TZ-Africa/Dar_es_Salaam', 'DJ-Africa/Djibouti',
    'UG-Africa/Kampala', 'SD-Africa/Khartoum', 'SO-Africa/Mogadishu',
    'AQ-Antarctica/Syowa', 'YE-Asia/Aden', 'BH-Asia/Bahrain',
    'KW-Asia/Kuwait', 'QA-Asia/Qatar', 'MG-Indian/Antananarivo',
    'KM-Indian/Comoro', 'YT-Indian/Mayotte'],
  44: ['ZA-Africa/Johannesburg', 'IL-Asia/Jerusalem', 'MW-Africa/Blantyre',
    'BI-Africa/Bujumbura', 'BW-Africa/Gaborone', 'ZW-Africa/Harare',
    'RW-Africa/Kigali', 'CD-Africa/Lubumbashi', 'ZM-Africa/Lusaka',
    'MZ-Africa/Maputo', 'LS-Africa/Maseru', 'SZ-Africa/Mbabane',
    'LY-Africa/Tripoli'],
  46: ['NG-Africa/Lagos', 'DZ-Africa/Algiers', 'CF-Africa/Bangui',
    'CG-Africa/Brazzaville', 'CM-Africa/Douala', 'CD-Africa/Kinshasa',
    'GA-Africa/Libreville', 'AO-Africa/Luanda', 'GQ-Africa/Malabo',
    'TD-Africa/Ndjamena', 'NE-Africa/Niamey', 'BJ-Africa/Porto-Novo'],
  48: ['MA-Africa/Casablanca', 'CI-Africa/Abidjan', 'GH-Africa/Accra',
    'ML-Africa/Bamako', 'GM-Africa/Banjul', 'GW-Africa/Bissau',
    'GN-Africa/Conakry', 'SN-Africa/Dakar', 'EH-Africa/El_Aaiun',
    'SL-Africa/Freetown', 'TG-Africa/Lome', 'LR-Africa/Monrovia',
    'MR-Africa/Nouakchott', 'BF-Africa/Ouagadougou', 'ST-Africa/Sao_Tome',
    'GL-America/Danmarkshavn', 'IS-Atlantic/Reykjavik',
    'SH-Atlantic/St_Helena'],
  570425352: ['GE-Asia/Tbilisi'],
  50: ['CV-Atlantic/Cape_Verde'],
  52: ['GS-Atlantic/South_Georgia', 'BR-America/Noronha'],
  54: ['AR-America/Buenos_Aires', 'BR-America/Araguaina',
    'AR-America/Argentina/La_Rioja', 'AR-America/Argentina/Rio_Gallegos',
    'AR-America/Argentina/San_Juan', 'AR-America/Argentina/Tucuman',
    'AR-America/Argentina/Ushuaia', 'BR-America/Bahia', 'BR-America/Belem',
    'AR-America/Catamarca', 'GF-America/Cayenne', 'AR-America/Cordoba',
    'BR-America/Fortaleza', 'AR-America/Jujuy', 'BR-America/Maceio',
    'AR-America/Mendoza', 'SR-America/Paramaribo', 'BR-America/Recife',
    'AQ-Antarctica/Rothera'],
  56: ['VE-America/Caracas', 'AI-America/Anguilla', 'AG-America/Antigua',
    'AW-America/Aruba', 'BB-America/Barbados', 'BR-America/Boa_Vista',
    'AN-America/Curacao', 'DM-America/Dominica', 'GD-America/Grenada',
    'GP-America/Guadeloupe', 'GY-America/Guyana', 'CU-America/Havana',
    'BO-America/La_Paz', 'BR-America/Manaus', 'MQ-America/Martinique',
    'MS-America/Montserrat', 'TT-America/Port_of_Spain',
    'BR-America/Porto_Velho', 'PR-America/Puerto_Rico',
    'DO-America/Santo_Domingo', 'KN-America/St_Kitts', 'LC-America/St_Lucia',
    'VI-America/St_Thomas', 'VC-America/St_Vincent', 'VG-America/Tortola'],
  58: ['US-America/Indianapolis', 'US-America/Indianapolis',
    'CO-America/Bogota', 'KY-America/Cayman', 'CA-America/Coral_Harbour',
    'BR-America/Eirunepe', 'EC-America/Guayaquil', 'US-America/Indiana/Knox',
    'JM-America/Jamaica', 'PE-America/Lima', 'PA-America/Panama',
    'BR-America/Rio_Branco'],
  60: ['NI-America/Managua', 'CA-America/Regina', 'BZ-America/Belize',
    'CR-America/Costa_Rica', 'SV-America/El_Salvador',
    'CA-America/Swift_Current', 'EC-Pacific/Galapagos'],
  62: ['US-America/Phoenix', 'CA-America/Dawson_Creek',
    'MX-America/Hermosillo'],
  64: ['PN-Pacific/Pitcairn'],
  66: ['PF-Pacific/Gambier'],
  67: ['PF-Pacific/Marquesas'],
  68: ['US-Pacific/Honolulu', 'TK-Pacific/Fakaofo', 'UM-Pacific/Johnston',
    'KI-Pacific/Kiritimati', 'CK-Pacific/Rarotonga', 'PF-Pacific/Tahiti'],
  70: ['UM-Pacific/Midway', 'WS-Pacific/Apia', 'KI-Pacific/Enderbury',
    'NU-Pacific/Niue', 'AS-Pacific/Pago_Pago'],
  72: ['MH-Pacific/Kwajalein'],
  49938444: ['MX-America/Chihuahua'],
  905969678: ['CA-America/Halifax'],
  626339164: ['EG-Africa/Cairo'],
  939579406: ['FK-Atlantic/Stanley'],
  487915538: ['AU-Australia/Lord_Howe'],
  937427058: ['CL-Pacific/Easter'],
  778043508: ['RU-Asia/Novosibirsk', 'RU-Asia/Omsk'],
  474655352: ['RU-Asia/Anadyr', 'RU-Asia/Kamchatka'],
  269133956: ['NZ-Pacific/Chatham'],
  948087430: ['GL-America/Godthab'],
  671787146: ['MN-Asia/Hovd'],
  617261764: ['TR-Europe/Istanbul', 'RU-Europe/Kaliningrad', 'BY-Europe/Minsk'],
  830603252: ['MX-America/Mexico_City', 'US-America/Chicago',
    'MX-America/Cancun', 'US-America/Menominee', 'MX-America/Merida',
    'MX-America/Monterrey', 'US-America/North_Dakota/Center',
    'CA-America/Rainy_River', 'CA-America/Rankin_Inlet'],
  805300897: ['LK-Asia/Colombo'],
  805312524: ['MX-America/Mexico_City', 'HN-America/Tegucigalpa'],
  984437412: ['GS-Atlantic/South_Georgia'],
  850043558: ['MX-America/Chihuahua'],
  29: ['AU-Australia/Darwin'],
  710950176: ['MN-Asia/Ulaanbaatar'],
  617786052: ['RO-Europe/Bucharest', 'FI-Europe/Helsinki', 'CY-Asia/Nicosia',
    'GR-Europe/Athens', 'MD-Europe/Chisinau', 'TR-Europe/Istanbul',
    'UA-Europe/Kiev', 'LV-Europe/Riga', 'UA-Europe/Simferopol',
    'BG-Europe/Sofia', 'EE-Europe/Tallinn', 'UA-Europe/Uzhgorod',
    'LT-Europe/Vilnius', 'UA-Europe/Zaporozhye'],
  105862464: ['US-America/Juneau'],
  581567010: ['IQ-Asia/Baghdad'],
  1294772902: ['US-America/Los_Angeles', 'CA-America/Dawson',
    'MX-America/Tijuana', 'CA-America/Vancouver', 'CA-America/Whitehorse'],
  483044050: ['AU-Australia/Sydney', 'AU-Australia/Melbourne'],
  491433170: ['AU-Australia/Hobart'],
  36: ['NP-Asia/Katmandu', 'LK-Asia/Colombo', 'BD-Asia/Dhaka',
    'AQ-Antarctica/Mawson', 'AQ-Antarctica/Vostok', 'KZ-Asia/Almaty',
    'KZ-Asia/Qyzylorda', 'BT-Asia/Thimphu', 'IO-Indian/Chagos'],
  626175196: ['IL-Asia/Jerusalem'],
  919994592: ['CA-America/Goose_Bay'],
  946339336: ['GB-Europe/London', 'ES-Atlantic/Canary', 'FO-Atlantic/Faeroe',
    'PT-Atlantic/Madeira', 'IE-Europe/Dublin', 'PT-Europe/Lisbon'],
  1037565906: ['PT-Atlantic/Azores', 'GL-America/Scoresbysund'],
  670913918: ['TN-Africa/Tunis'],
  41: ['IR-Asia/Tehran'],
  572522538: ['RU-Europe/Moscow'],
  403351686: ['MN-Asia/Choibalsan'],
  626338524: ['PS-Asia/Gaza'],
  411740806: ['RU-Asia/Yakutsk'],
  635437856: ['RU-Asia/Irkutsk'],
  617261788: ['RO-Europe/Bucharest', 'LB-Asia/Beirut'],
  947956358: ['GL-America/Godthab', 'PM-America/Miquelon'],
  12: ['EC-Pacific/Galapagos'],
  626306268: ['SY-Asia/Damascus'],
  497024903: ['AU-Australia/Adelaide', 'AU-Australia/Broken_Hill'],
  456480044: ['RU-Asia/Vladivostok', 'RU-Asia/Sakhalin'],
  312471854: ['NZ-Pacific/Auckland', 'AQ-Antarctica/McMurdo'],
  626347356: ['EG-Africa/Cairo'],
  897537370: ['CU-America/Havana'],
  680176266: ['RU-Asia/Krasnoyarsk'],
  1465210176: ['US-America/Anchorage'],
  805312908: ['NI-America/Managua'],
  492088530: ['AU-Australia/Currie', 'AU-Australia/Hobart'],
  901076366: ['BR-America/Campo_Grande', 'BR-America/Cuiaba'],
  943019406: ['CL-America/Santiago', 'AQ-Antarctica/Palmer'],
  928339288: ['US-America/New_York', 'CA-America/Montreal',
    'CA-America/Toronto', 'US-America/Detroit'],
  939480410: ['US-America/Indiana/Marengo', 'US-America/Indiana/Vevay'],
  626392412: ['NA-Africa/Windhoek'],
  559943005: ['IR-Asia/Tehran'],
  592794974: ['KZ-Asia/Aqtau', 'KZ-Asia/Oral'],
  76502378: ['CA-America/Pangnirtung'],
  838860812: ['US-America/Denver', 'CA-America/Edmonton'],
  931091834: ['TC-America/Grand_Turk', 'HT-America/Port-au-Prince'],
  662525310: ['FR-Europe/Paris', 'DE-Europe/Berlin', 'BA-Europe/Sarajevo',
    'CS-Europe/Belgrade', 'ES-Africa/Ceuta', 'NL-Europe/Amsterdam',
    'AD-Europe/Andorra', 'SK-Europe/Bratislava', 'BE-Europe/Brussels',
    'HU-Europe/Budapest', 'DK-Europe/Copenhagen', 'GI-Europe/Gibraltar',
    'SI-Europe/Ljubljana', 'LU-Europe/Luxembourg', 'ES-Europe/Madrid',
    'MT-Europe/Malta', 'MC-Europe/Monaco', 'NO-Europe/Oslo',
    'CZ-Europe/Prague', 'IT-Europe/Rome', 'MK-Europe/Skopje',
    'SE-Europe/Stockholm', 'AL-Europe/Tirane', 'LI-Europe/Vaduz',
    'AT-Europe/Vienna', 'PL-Europe/Warsaw', 'HR-Europe/Zagreb',
    'CH-Europe/Zurich'],
  1465865536: ['US-America/Anchorage', 'US-America/Juneau',
    'US-America/Nome', 'US-America/Yakutat'],
  495058823: ['AU-Australia/Adelaide', 'AU-Australia/Broken_Hill'],
  599086472: ['GE-Asia/Tbilisi', 'AM-Asia/Yerevan', 'RU-Europe/Samara'],
  805337484: ['GT-America/Guatemala'],
  1001739662: ['PY-America/Asuncion'],
  836894706: ['CA-America/Winnipeg'],
  599086512: ['AZ-Asia/Baku'],
  836894708: ['CA-America/Winnipeg'],
  41025476: ['US-America/Menominee'],
  501219282: ['RU-Asia/Magadan'],
  970325971: ['CA-America/St_Johns'],
  769654750: ['RU-Asia/Yekaterinburg'],
  1286253222: ['US-America/Los_Angeles', 'CA-America/Vancouver',
    'CA-America/Whitehorse'],
  1373765610: ['US-America/Adak'],
  973078513: ['CA-America/St_Johns'],
  838860786: ['US-America/Chicago', 'CA-America/Winnipeg'],
  970326003: ['CA-America/St_Johns'],
  771751924: ['KG-Asia/Bishkek'],
  952805774: ['AQ-Antarctica/Palmer'],
  483699410: ['AU-Australia/Sydney', 'AU-Australia/Melbourne']
};
