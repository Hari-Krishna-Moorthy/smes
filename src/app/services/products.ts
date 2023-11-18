import Product from '../../interfaces/Product'

const productsCodeMap = {
  ['CN']: [
    {
      productCategory: 'PUMPS',
      name: 'Qingdao Longshine',
    },
    {
      productCategory: 'PUMPS',
      name: 'Guanghan N&amp;D Carbide',
    },
    {
      productCategory: 'PUMPS',
      name: 'Zoomlion Heavy Machinery',
    },
    {
      productCategory: 'PUMPS',
      name: 'Hebei Othello Sealing',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shinjiazhuang Sunbo pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Yiwu Xinda pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Dezhou Jiatong Machinery',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shijiazhuang Shizu pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Huangshan RSP manufacture',
    },
    {
      productCategory: 'PUMPS',
      name: 'Dongguan Modern pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shijianzhaung naipu pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Credo pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shaghai Pump Manufacture',
    },
    {
      productCategory: 'PUMPS',
      name: 'Zheijiang Feili pump co',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shimge Pump industry',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shijiazhuang Damei kingmech pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Hanhe Slurry &amp; Dredging pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shijiazhuang Aier Machinery co ltd',
    },
    {
      productCategory: 'PUMPS',
      name: 'Hichine industrial pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shandong Deyuan pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Chongqing lange machinery',
    },
    {
      productCategory: 'PUMPS',
      name: 'Changzhou Dongshen pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Tianjin Pumps &amp; Machinery Group',
    },
    {
      productCategory: 'PUMPS',
      name: 'Tiantaishan water pumps factory',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>ENGINE</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Anqing Marine Diesel Plant',
    },
    {
      productCategory: 'PUMPS',
      name: 'ZJMD-Zhengjing Marine Diesel(Zhengjiang CME Co)',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shaanxi Diesel Engine Heavy Industry Co',
    },
    {
      productCategory: 'PUMPS',
      name: 'Henan Diesel Engine Industry',
    },
    {
      productCategory: 'PUMPS',
      name: 'Nantong Diesel Engine Co',
    },
    {
      productCategory: 'PUMPS',
      name: 'Ningbo Diesel Engine',
    },
    {
      productCategory: 'PUMPS',
      name: 'Guangzhou Diesel Engine',
    },
    {
      productCategory: 'PUMPS',
      name: 'Dalian Ship Diesel Engine',
    },
    {
      productCategory: 'PUMPS',
      name: 'Wuxi Antai Power Machinery',
    },
    {
      productCategory: 'PUMPS',
      name: 'CSR Ziyang Locomotive Co',
    },
    {
      productCategory: 'PUMPS',
      name: 'FUEL INJECTION',
    },
    {
      productCategory: 'PUMPS',
      name: 'Chongqing Hongjiang Machinery Plant',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>BEARING</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'GYM(Chongqing Yuejin Machinery',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>BOLL FULLY AUTOMATIC BACK FLUSHING</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Nantong Navigation Machinery Co',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>HEAT EXCHANGER</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Nantong Shengtong Machinery Plan',
    },
    {
      productCategory: 'PUMPS',
      name: 'GEA (Wuhu) KHI Machinery',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>MARINE VALVES</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Dalian Marine Valve Co',
    },
    {
      productCategory: 'PUMPS',
      name: 'Dalian Jinzhou Marine Machinery C',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>BOW THRUSTER</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Wuhan Kawasaki Marine Machinery Co. Ltd',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>FAN – BLOWER</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shanghai Hengyuan Marine Equipment Corporation',
    },
    {
      productCategory: 'PUMPS',
      name: '<strong>THERMOMETER</strong>',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shanghai Tianmin Automation Instruments Co Lt',
    },
    {
      productCategory: 'PUMPS',
      name: 'Jiangsu Yuanwang Instrument Co,Lt',
    },
  ],
  ['DE']: [
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Atlas Copco Energas GMBH',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Bauer Kompressoren GMBH/ITS Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Compare Holman Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Hamworthy Engineering Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Hatlapa Uetersener Maschinenfabrik',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Ingersoll-Rand, Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Jowa Marine Groups AB',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Nash Engineering Co.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Sauer, J.P. &amp; Sohn Maschinenbau GMBH',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Sperre Mek Verksted A/S',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Sulzer-Burchardt Engineering Works',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Wabco Westinghouse',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'Aeroquip Ltd.',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'Carrier Air Conditioning Ltd.',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'Flakt Denmark A/S',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'Novenco Ltd.',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'Sabroe Marine',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'Stal Refrigeration AB',
    },
    {
      productCategory: 'AIR CONDITIONING EQUIPMENT',
      name: 'York Division, Borg-Warner Ltd.',
    },
    {
      productCategory: 'AUTO PILOTS, GYRO',
      name: 'Anschutz &amp; Co. GMBH',
    },
    {
      productCategory: 'AUTO PILOTS, GYRO',
      name: 'C. Plath, Fabrik Nautischer Instruments',
    },
    {
      productCategory: 'AUTO PILOTS, GYRO',
      name: 'Raytheon Marine Co.',
    },
    {
      productCategory: 'AUTO PILOTS, GYRO',
      name: 'Scan-Steering Aps',
    },
    {
      productCategory: 'AUTO PILOTS, GYRO',
      name: 'Sperry Ltd.',
    },
    {
      productCategory: 'BOILER CONTROLS',
      name: 'Bailey Controls',
    },
    {
      productCategory: 'BOILER CONTROLS',
      name: 'Bestobell Mobrey',
    },
    {
      productCategory: 'BOILER CONTROLS',
      name: 'Bristol Babcock Ltd.',
    },
    {
      productCategory: 'BOILER CONTROLS',
      name: 'Danfoss A/S',
    },
    {
      productCategory: 'BOILER CONTROLS',
      name: 'Foxboro-Yoxall',
    },
    {
      productCategory: 'BOILERS, EXHAUST GAS',
      name: 'Aalborg C/Serv International A/S',
    },
    {
      productCategory: 'BOILERS, EXHAUST GAS',
      name: 'Bobcock Power Ltd.',
    },
    {
      productCategory: 'BOILERS, EXHAUST GAS',
      name: 'Clayton Manufacturing Co.',
    },
    {
      productCategory: 'BOILERS, EXHAUST GAS',
      name: 'Cochran Thompson',
    },
    {
      productCategory: 'BOILERS, EXHAUST GAS',
      name: 'Sunrod International AB',
    },
    {
      productCategory: 'BREATHING APPARATUS',
      name: 'Arco Ltd.',
    },
    {
      productCategory: 'BREATHING APPARATUS',
      name: 'Chubb Fire Service Centre',
    },
    {
      productCategory: 'BREATHING APPARATUS',
      name: 'Dominic Hunter Filters Ltd.',
    },
    {
      productCategory: 'BREATHING APPARATUS',
      name: 'Dragerwerk AG',
    },
    {
      productCategory: 'BREATHING APPARATUS',
      name: 'M.S.A. (Britain) Ltd.',
    },
    {
      productCategory: 'BURNERS, COMBINED FUEL OIL & GAS',
      name: 'Hamworthy Engineering Ltd.',
    },
    {
      productCategory: 'BURNERS, COMBINED FUEL OIL & GAS',
      name: 'Holec Gas Generators BV',
    },
    {
      productCategory: 'BURNERS, COMBINED FUEL OIL & GAS',
      name: 'Infrasonik AB',
    },
    {
      productCategory: 'BURNERS, COMBINED FUEL OIL & GAS',
      name: 'Saacke GMBH &amp; Co.',
    },
    {
      productCategory: 'BURNERS, COMBINED FUEL OIL & GAS',
      name: 'Weishaupt (UK) Ltd.',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Anschutz &amp; Co. GMBH',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Debeg GMBH',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Hughes Network Systems Ltd.',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Racal Marine Radar Ltd.',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Sait Electronics',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Skanti A/S',
    },
    {
      productCategory: 'COMMUNICATION EQUIPMENT',
      name: 'Standard Radio Marine',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ELECTRONIC',
      name: 'ABB Industry Ltd.',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ELECTRONIC',
      name: 'Marconi Radar System Ltd.',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ELECTRONIC',
      name: 'Siemens AG',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ELECTRONIC',
      name: 'Telemechanique International Division',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ELECTRONIC',
      name: 'Trafag AG',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Asea Ltd.',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Amot Controls, Ltd.',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Carlo Gavazzi SPA',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Danfoss A/S',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Teddington Industrial Equipment Ltd.',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Trafag AG',
    },
    {
      productCategory: 'CONTROL EQUIPMENT, ENGINE',
      name: 'Woodward Governor Co.',
    },
    {
      productCategory: 'CRANES',
      name: 'Clark Hawthorn Ltd.',
    },
    {
      productCategory: 'CRANES',
      name: 'Clarke Chapman Marine Nei',
    },
    {
      productCategory: 'CRANES',
      name: 'Mannesmann Demag Baumaschinen',
    },
    {
      productCategory: 'CRANES',
      name: 'Munck International A/S',
    },
    {
      productCategory: 'CRANES',
      name: 'Peiner Maschinen Und Schraubenwerke',
    },
    {
      productCategory: 'CRANES',
      name: 'Schat Davis Ltd.',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Brissonneau &amp; Lotz Marine',
    },
    {
      productCategory: 'CRANES, DECK',
      name: '(Jeumont-Schneider Group)',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Hagglunds’ Marine &amp; Offshore AB',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Hiab Cranes &amp; Loaders Inc.',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Paceco',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Norwinch Division of Bergens',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Nor-Marine A/S',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Orenstein &amp; Koppel',
    },
    {
      productCategory: 'CRANES, DECK',
      name: 'Thrige-Titan A/S',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Alshom Alantique-Groupe Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Bergen Diesel Division of Bergens',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Caterpillar',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Hedemora Verkstander AB',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Klovkner-Humboldt Deutz AG',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'M.A.N. – B &amp; W',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Merkanisk Versteder A/S',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Paxman Diesel Ltd.',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Sach Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'S.E.M.T. Pielstick',
    },
    {
      productCategory: 'DIESEL ENGINES, AUX.',
      name: 'Wartsila Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Caterpillar',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Cummins Marine Co.',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Deutz (Klockner-Humboldt-Deutzag)',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Gotaverken Sweden',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Krupp-Mak Maschiinenbau GMBH',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'M.A.N. – B &amp; W',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Mirrlees Blackstone Diesels',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'MWM (Deutz) Motoren Weke Manniheim',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'New Sulzer Diesel Ltd.',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Paxman Diesels Ltd.',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Sach Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'S.E.M.T. Pielstick',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'SKL East',
    },
    {
      productCategory: 'DIESEL ENGINES, MAIN',
      name: 'Waertsilae Diesel',
    },
    {
      productCategory: 'FILTERS',
      name: 'Boll &amp; Kirch Filterbau',
    },
    {
      productCategory: 'GENERATORS, DC',
      name: 'Aeg Telefunken Marine Division',
    },
    {
      productCategory: 'GENERATORS, DC',
      name: 'ASEA Industry &amp; Electronics',
    },
    {
      productCategory: 'GENERATORS, DC',
      name: 'Brown, Boveri &amp; Cle Aktiengesell',
    },
    {
      productCategory: 'GENERATORS, DC',
      name: 'Clarke Chapman Marine NEI',
    },
    {
      productCategory: 'GENERATORS, DC',
      name: 'Siemens AG',
    },
    {
      productCategory: 'GAS ANALYZERS',
      name: 'Riken Keiki Fine Instrument',
    },
    {
      productCategory: 'HATCH COVERS',
      name: 'MacGregor-Navire International AB',
    },
    {
      productCategory: 'HATCH COVERS',
      name: 'Kvaemer Brug (Deutchland) GMBH',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Alfa-Laval Desalt A/S',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Atlas A/S',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Gea Ahlborn GMBH &amp; Co.',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Flakt Denmark A/S',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Sperre Mek Verksted A/S',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Sunrod International AB',
    },
    {
      productCategory: 'HEAT EXCHANGERS',
      name: 'Thyssen Schalker Verein GMBH',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'AP Precision Hydraulics Ltd.',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'Barton Hydraulic Engineering Co., Ltd.',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'Danfoss System Hydraulik A/S',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'Hydramaskin A/S',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'Johnson Fluid Power Ltd.',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'MacGregor Navire Group',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'Sjong Hydraulik A/S',
    },
    {
      productCategory: 'HYDRAULIC REMOTE CONTROLS',
      name: 'Vickers Systems Ltd.',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Aalborg Vaerft A/S',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Atlas A/S',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Bremer Vulkan Ag Schiffbau Und Maschinenfabrik',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Howden Engineering Ltd.',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Holec Gas Generators BV',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Kvaener Incineration A/S',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Peabody Holmes Ltd.',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Wilson, Walton International SAF',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'Amot Controls Ltd.',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'Bristol Babcock Ltd.',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'Hodge Separators Ltd.',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'Honeywell Ltd',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'ITT Mackay',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'Salen &amp; Wicander Marin AB',
    },
    {
      productCategory: 'MONITORS, OIL CONTENT/OIL POLLUTION',
      name: 'Wilson, Walton International SAF',
    },
    {
      productCategory: 'MOTORS, ELECTRIC',
      name: 'AEG Telefunken',
    },
    {
      productCategory: 'MOTORS, ELECTRIC',
      name: 'ASEA Industrial SA',
    },
    {
      productCategory: 'MOTORS, ELECTRIC',
      name: 'Bosch Electrical Products',
    },
    {
      productCategory: 'MOTORS, ELECTRIC',
      name: 'Brown, Boveri &amp; Cie Aktiengesell',
    },
    {
      productCategory: 'MOTORS, ELECTRIC',
      name: 'Siemens Electric Ltd.',
    },
    {
      productCategory: 'MOTORS, ELECTRIC',
      name: 'Stromberg AB, OY',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Chernikeef Instruments Ltd.',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'C. Plath, Fabrik Nautischer Instruments',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Honeywell-Elac-Nautik GMBH',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Kelvin Hudges Ltd.',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Krupp Atlas Elektronik',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Raytheon Marine Co.',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Sait Electronics',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Sperry Ltd.',
    },
    {
      productCategory: 'OIL SEPARATORS',
      name: 'Alfa-Laval Inc., Marine Dept.',
    },
    {
      productCategory: 'OIL SEPARATORS',
      name: 'Hamworthy Engineering Co., Ltd.',
    },
    {
      productCategory: 'OIL SEPARATORS',
      name: 'Hodge Separators Ltd.',
    },
    {
      productCategory: 'OIL SEPARATORS',
      name: 'Raydar AB',
    },
    {
      productCategory: 'OIL SEPARATORS',
      name: 'Westfalia Separators',
    },
    {
      productCategory: 'PROPELLER SHAFT SEALS',
      name: 'Lips BV',
    },
    {
      productCategory: 'PROPELLER SHAFT SEALS',
      name: 'Simplex',
    },
    {
      productCategory: 'PUMPS',
      name: 'Flygt Pumper A/S',
    },
    {
      productCategory: 'PUMPS',
      name: 'Hamworthy Engineering Ltd.',
    },
    {
      productCategory: 'PUMPS',
      name: 'Myhrwold &amp; Rasmussen A/S',
    },
    {
      productCategory: 'PUMPS',
      name: 'Svanehoj Pump Factory Ltd.',
    },
    {
      productCategory: 'PUMPS',
      name: 'Thune Eureka A/S',
    },
    {
      productCategory: 'PUMP, BALLAST',
      name: 'Allweiler-Houttuin Pompen ABV',
    },
    {
      productCategory: 'PUMP, BALLAST',
      name: 'Huttons of Hull Ltd.',
    },
    {
      productCategory: 'PUMP, BALLAST',
      name: 'Netzch-Mohnopumpen GMBH',
    },
    {
      productCategory: 'PUMP, BALLAST',
      name: 'Scanpump AB',
    },
    {
      productCategory: 'PUMP, BALLAST',
      name: 'Sihi-Masters BV',
    },
    {
      productCategory: 'PUMP, BALLAST',
      name: 'Worthington-Simpson Ltd.',
    },
    {
      productCategory: 'PUMPS, BILGE',
      name: 'Maskinfabriken Iron A/S',
    },
    {
      productCategory: 'PUMPS, BILGE',
      name: 'Paul Leistritz Maschinenfabrik GMBH',
    },
    {
      productCategory: 'PUMPS, BILGE',
      name: 'Weir Pumps Ltd.',
    },
    {
      productCategory: 'PUMPS, BOILER WATER CIRC.',
      name: 'Johnson Pump A/S',
    },
    {
      productCategory: 'PUMPS, BOILER WATER CIRC.',
      name: 'KSB Klien, Schanzlin &amp; Becker AG',
    },
    {
      productCategory: 'PUMPS, BOILER WATER CIRC.',
      name: 'Sulzer (UK) Pumps Ltd.',
    },
    {
      productCategory: 'PUMPS, BOILER WATER CIRC.',
      name: 'Wilo',
    },
    {
      productCategory: 'PUMPS, CENTRIFUGAL',
      name: 'Kvaerner Eureka A/S',
    },
    {
      productCategory: 'PUMPS, CENTRIFUGAL',
      name: 'Maskinfabriken Iron A/S',
    },
    {
      productCategory: 'PUMPS, CENTRIFUGAL',
      name: 'Sihi GMBH &amp; Co. KG',
    },
    {
      name: 'Frank Mohn A/S',
    },
    {
      name: 'Imo AB',
    },
    {
      name: 'Jonkopings Mekaniska Werksteds AB',
    },
    {
      name: 'Kvaerner Eureka A/S',
    },
    {
      name: 'Pumps Alta Guinard, ZAE',
    },
    {
      name: 'Weir Pumps Ltd',
    },
    {
      name: 'L’Orange Maschinenfabrik GMBH',
    },
    {
      productCategory: 'PURIFIERS/CLARIFIERS, OIL CENTRIFUGAL',
      name: 'Alfa-Laval Marine Department',
    },
    {
      productCategory: 'PURIFIERS/CLARIFIERS, OIL CENTRIFUGAL',
      name: 'Allweiler AG',
    },
    {
      productCategory: 'RADIO COMMUNICATIONS',
      name: 'Hagenuk GMBH',
    },
    {
      productCategory: 'RADIO COMMUNICATIONS',
      name: 'ITT Mackay',
    },
    {
      productCategory: 'RADIO COMMUNICATIONS',
      name: 'Icom Ltd.',
    },
    {
      productCategory: 'RADIO COMMUNICATIONS',
      name: 'Kelvin Hughes Ltd.',
    },
    {
      productCategory: 'RADIO COMMUNICATIONS',
      name: 'Racal Communications Ltd.',
    },
    {
      productCategory: 'RADIO COMMUNICATIONS',
      name: 'Storno A/S',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'APV Hall Products Ltd.',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Arcol Air Conditioning Co., Ltd.',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'AS Edco',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Beha-Hedo A/S',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Carrier Air Conditioning Ltd.',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Electrolux Marine',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Grenco Engineering &amp; Contracting Ltd.',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Moorwood Vulcan Ltd.',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Sabroe Marine',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'Stal Refrigeration AB',
    },
    {
      productCategory: 'REFRIGERATION EQUIPMENT',
      name: 'York Ltd.',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'AEG Telefunken, Marine Division',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Brown Brothers &amp; Co., Ltd.',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Centromor S.A.',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Donkin and Co., Ltd.',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Frydendo A/S',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'GE Marine Systems',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Progrunn Steering Gear A/S',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Sperry Electronic Systems',
    },
    {
      productCategory: 'STEERING GEAR',
      name: 'Tenfjord Mek Verksted A/S',
    },
    {
      name: 'AEG Telefunken Marine Division',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Harland &amp; Wolff Ltd.',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Lk-Nes Electrical Manufacturing Co.',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Max Weishaupt GMBH',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Norsk Electrisk &amp; Brown Boveri A/S (NEBB)',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Siemens Electric Ltd.',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Stromberg AB, OY',
    },
    {
      productCategory: 'ASEA AB',
      name: 'Telemechanique International Division',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'A/S Hydraulik Brattvaag',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'Clarke Chapman Marine NEI',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'Donkin and Co., Ltd.',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'Mekanisk Verkstender A/S',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'Norwinch A/S',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'Pusnes A/S',
    },
    {
      productCategory: 'WINCHES, CARGO',
      name: 'Thompson Winches',
    },
    {
      productCategory: 'WINCHES, MOORING, SELF-TENSIONING',
      name: 'Hatlapa Uetersener Maschinenfabrik',
    },
    {
      productCategory: 'WINCHES, MOORING, SELF-TENSIONING',
      name: 'James Robertson &amp; Sons',
    },
    {
      productCategory: 'WINCHES, MOORING, SELF-TENSIONING',
      name: 'Maskinfabrik A/S',
    },
  ],
  ['JP']: [
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Hokuetsu Industries',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Kobe Steel Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Matsubara Iron Works, Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Meiji Air Compressor Mfg. Co., Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Suction Gas Engine Mfg. Co., Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Tanabe Pneumatic Machinery Co., Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Teikoku Machinery Works Ltd.',
    },
    {
      productCategory: 'AIR COMPRESSORS',
      name: 'Yanmar Diesel Engine Co., Ltd.',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Daikin Kogyo',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Namirei',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Nippon Sabroe',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Nisshin Refrigeration &amp; Engineering',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Shin Nippon Air Conditioning Engineering',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Takatori',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Toyo Engineering Works',
    },
    {
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
      name: 'Ushio Reinetsu',
    },
    {
      productCategory: 'AIR MOTOR',
      name: 'Henmi Iron Works',
    },
    {
      productCategory: 'AIR RESERVOIRS',
      name: 'Henmi Iron Works',
    },
    {
      productCategory: 'AIR RESERVOIRS',
      name: 'Kanazawa Iron Works',
    },
    {
      productCategory: 'AIR RESERVOIRS',
      name: 'Miura',
    },
    {
      productCategory: 'AIR RESERVOIRS',
      name: 'Nishida Marine Boiler',
    },
    {
      productCategory: 'AIR RESERVOIRS',
      name: 'Osaka Boilers',
    },
    {
      productCategory: 'AIR TOOLS',
      name: 'Fuji Air Tool',
    },
    {
      productCategory: 'AIR TOOLS',
      name: 'Nitto Kohki',
    },
    {
      productCategory: 'AIR TOOLS',
      name: 'Uryu Seisakusho',
    },
    {
      productCategory: 'AIR TOOLS',
      name: 'Yokota Industrial',
    },
    {
      productCategory: 'AIR TOOLS',
      name: 'Yutani Tekko',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Fujikura Cable Works, Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Hamanaka Chain Mfg. Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Hien Electric Industries, Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Japan Mechanical Chain Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Komatsu Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Koyo Chain Mfg. Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Kuroki Seisa K.K.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Nippon Chain &amp; Anchor Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Onomichi Anchor Mfg. Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Osaka Byosa Kogyo Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Osaka Chain &amp; Machinery Mfg. Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Tatsuta Electric Wire &amp; Cable Co., Ltd.',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Tsubakimoto Chain Mfg. Co., Ltd.',
    },
    {
      productCategory: 'AUTOMATION & REMOTE CONTROL EQUIPMENT',
      name: 'Fuji Electric',
    },
    {
      productCategory: 'AUTOMATION & REMOTE CONTROL EQUIPMENT',
      name: 'Hanshin Diesel Works',
    },
    {
      name: 'Koyo Seiko Co., Ltd.',
    },
    {
      name: 'Nihon Seiko Co., Ltd.',
    },
    {
      name: 'Toyo Bearing Mfg. Co., Ltd.',
    },
    {
      name: 'Fuji Electric',
    },
    {
      name: 'Kubota Kogyo',
    },
    {
      name: 'Nishishiba Electric',
    },
    {
      name: 'Osaka Blower',
    },
    {
      name: 'Shinko Electric',
    },
    {
      name: 'Taiyo Electric',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Horiba',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Kikan Buhin',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Meiyo Electric',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Mitsubishi Electric',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Musashino Engineering Works',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Nakakita Seisakusho',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Naniwa Optical Mfg. Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Nippon Air Brake',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Nippon Zosen Kikai',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Nishishiba Electric',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Nunotani Hakuoy Kelii Kogyo',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Osaka Boiler Mfg. Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Osaka Zoki Valve Ind. Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Saacke Japan Tratec Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Saginomiya Seisakusho',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Sasebo Heavy Industries Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Sawada Seisakusho Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Seo Koatsu Kogyo Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Shinko Shoji Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Shonan Kosakusho Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Sumitomo Metal Industry Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Sunflame Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Taiyo Electric',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Takuma Boiler Mfg. Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Tortoise Engineering Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Tokyo Keiki',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Utsuki Keiki',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Volcano Co., Ltd.',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Yamatake Honeywell',
    },
    {
      productCategory: 'BOILER PARTS & ACCESSORIES',
      name: 'Yokogawa Hokushin Electric',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Aalborg Industries Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Haneda Pipe Works Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Hitachi Shipbuilding &amp; Engineering',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Innoshima Boiler Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Ishikawajima-Harima Heavy Industries Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Ishikawajima Ship &amp; Chemical Plant Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Kawasaki Heavy Industries, Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Kikan Buhin Seizosho Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Kobe Steel Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Mitsubishi Heavy Industries, Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Mitsui Shipbuilding Engineering Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Miura Kogho Co., Ltd.',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Nippon Kokan',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Nishida Marine Boiler',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Osaka Boiler',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Takuma',
    },
    {
      productCategory: 'BOILERS & EXHAUST GAS ECONOMIZERS',
      name: 'Tortoise Engineering',
    },
    {
      productCategory: 'CHEMICAL',
      name: 'Ameroid Japan Services Co., Ltd.',
    },
    {
      productCategory: 'CHEMICAL',
      name: 'Daishin Kako Co., Ltd.',
    },
    {
      productCategory: 'CHEMICAL',
      name: 'Oyalox Co., Ltd.',
    },
    {
      productCategory: 'CHEMICAL',
      name: 'Sea Light Kogyo K.K.',
    },
    {
      productCategory: 'CHEMICAL',
      name: 'Shin-Nitto Chemicals Co., Ltd.',
    },
    {
      productCategory: 'CHEMICAL',
      name: 'Yamamizu Shoji Co., Ltd.',
    },
    {
      productCategory: 'CORROSION PROTECTION',
      name: 'Nakagawa Corrosion Protection',
    },
    {
      productCategory: 'CRANES',
      name: 'Ishikawajima-Harima Heavy Industries',
    },
    {
      productCategory: 'CRANES',
      name: 'Japan Steel Works',
    },
    {
      productCategory: 'CRANES',
      name: 'Sekigahara Seisakusho',
    },
    {
      productCategory: 'CRANES',
      name: 'Sumitomo Heavy Industries',
    },
    {
      productCategory: 'CRANES',
      name: 'Tsuji Heavy Industries',
    },
    {
      productCategory: 'DAVITS',
      name: 'Sekigahara Seisakusho',
    },
    {
      productCategory: 'DAVITS',
      name: 'Tateno',
    },
    {
      productCategory: 'DAVITS',
      name: 'Tsuji Heavy Industries',
    },
    {
      productCategory: 'DAVITS',
      name: 'Ueda Iron Works',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Akasaka Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Daihatsu Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Fuji Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Hanshin Diesel Works',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Hitachi Shipbuilding &amp; Engineering',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Ishikawajima-Harima Heavy Industries',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Ito Engineering',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Kawasaki Heavy Industries',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Kobe Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Kubata',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Makita Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Mitsui Engineering &amp; Shipbuilding',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Niigata Engineering',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Nippon Kokan',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Otsuko Diesel',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Sumitomo Heavy Industries',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Ube Industries',
    },
    {
      productCategory: 'DIESEL ENGINES',
      name: 'Yanmar Diesel',
    },
    {
      productCategory: 'DISTILLING PLANTS',
      name: 'Alfa-Laval Service',
    },
    {
      productCategory: 'DISTILLING PLANTS',
      name: 'Hisaka Works',
    },
    {
      productCategory: 'DISTILLING PLANTS',
      name: 'Miura',
    },
    {
      productCategory: 'DISTILLING PLANTS',
      name: 'Nisshin Refrigeration &amp; Engineering',
    },
    {
      productCategory: 'DISTILLING PLANTS',
      name: 'Sasakura Engineering',
    },
    {
      productCategory: 'DOORS & LOCKS',
      name: 'Iwata',
    },
    {
      productCategory: 'DOORS & LOCKS',
      name: 'Ohshiima',
    },
    {
      productCategory: 'DOORS & LOCKS',
      name: 'Setouchi Kogyo',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Hien Electric Industries',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Izumi Denki',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Kitazawa Denki Seisakusho',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Kokosha',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Morio Denki',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Nippon Sento',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Ohishi Electric Industry',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Omron Tateishi Electronics',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Sakae Senpaku Denki',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'San-El Electric',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Sanshin Senpaku Dengu',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Shinko Electric',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Shonan Kosakusho',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Terasaki Electric',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Toshiba',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Toyo Electronics',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Utsunomiya Electric',
    },
    {
      productCategory: 'ELECTRICAL EQUIPMENT',
      name: 'Yoshida Denki Kogyo',
    },
    {
      productCategory: 'ELECTRIC BATTERIES',
      name: 'Furukawa Battery',
    },
    {
      productCategory: 'ELECTRIC BATTERIES',
      name: 'Japan Storage Battery',
    },
    {
      productCategory: 'ELECTRIC BATTERIES',
      name: 'Yuasa Battery',
    },
    {
      productCategory: 'ELECTRIC GENERATORS & MOTORS',
      name: 'Fuji Electric',
    },
    {
      productCategory: 'ELECTRIC GENERATORS & MOTORS',
      name: 'Mitsubishi Electric',
    },
    {
      productCategory: 'ELECTRIC GENERATORS & MOTORS',
      name: 'Mitsui Engineering &amp; Shipbuilding',
    },
    {
      productCategory: 'ELECTRIC GENERATORS & MOTORS',
      name: 'Nishishiba Electric',
    },
    {
      productCategory: 'ELECTRIC GENERATORS & MOTORS',
      name: 'Shinko Electric',
    },
    {
      productCategory: 'ELECTRIC GENERATORS & MOTORS',
      name: 'Taiyo Electric',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Eiwa Seiko Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Fuji Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Fuji Seimitsu Denki K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Furukawa Denki K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Igarashi Koka Kogyosyo',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'JRCS Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Kobe Electric Automatic Control K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Kokosha Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Konan Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Kuwahara Denki K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Meidensha Electric Mfg. Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Mitsubishi Electric Corporation',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Morio Denki Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'N.Z.K. Co. Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Nippon Battery Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Nippon Siemens K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Nishishiba Denki K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Ohnishi Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Okui Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Rikadenki Kogyo Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Saginomiya Seisakusho',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Sanshin Senpaku Dengyo K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Sanyo Seisakusho',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Seikosha Mfg. Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Shinko Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Shonan Kosakusho K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Sohdensha Electronics Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Shodensha K.K.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Taiyo Electric Mfg. Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Tamagawa Seiki Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Tateishi Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Terasaki Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Togami Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Tokyo Hatsudoki Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Tokyo Shinbaura Electric Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Utsunomiya Electric Mfg. Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Uzushio Electric',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Woodward Governor Co., Ltd.',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Yuasa Battery Co., Ltd.',
    },
    {
      productCategory: 'ELEVATORS',
      name: 'Mitsubishi Electric',
    },
    {
      productCategory: 'ELEVATORS',
      name: 'Nippon Elevator',
    },
    {
      productCategory: 'FENDERS',
      name: 'Bridgestone',
    },
    {
      productCategory: 'FENDERS',
      name: 'Yokohama Rubber',
    },
    {
      productCategory: 'FILTERS & STRAINERS',
      name: 'Ameroid Japan Service',
    },
    {
      productCategory: 'FILTERS & STRAINERS',
      name: 'Kanagawa Kiki Kogyo',
    },
    {
      productCategory: 'EXTINGUISHING APPLIANCES',
      name: 'Kashiwa Co.',
    },
    {
      productCategory: 'EXTINGUISHING APPLIANCES',
      name: 'Nohmi Bosai Kogyo',
    },
    {
      productCategory: 'EXTINGUISHING APPLIANCES',
      name: 'Tokyo Keiki',
    },
    {
      productCategory: 'EXTINGUISHING APPLIANCES',
      name: 'Yamatake-Honeywell',
    },
    {
      productCategory: 'EXTINGUISHING APPLIANCES',
      name: 'Yamato Shokaki',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Dainichi Kinzoku Kogyo K.K.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Fuji Air Tools Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Fuji Seimitsu Denki Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Iwata Air Compressor Mfg. Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Japan Ship Machine Tools Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Kobe Steel Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Koito Industries, Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Meiji Air Compressor Mfg. Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Mitsubishi Electric Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Nakagawa Corrosion Protecting Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'NHK Daiei Flex Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Nippon Corrosion Engineering Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Nisshin Cleaners Kogyo K.K.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Nittan Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Nitto Kohki Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Okuda Sogabe Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Osaka Air Machine Seisakusho Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Riken Keiki Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Sanwa Iron Works Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Showa Kinzoku K.K.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Taiyo Seiki Iron Works',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Teikoku Sanso K.K.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Tokyo Hydraulic Equipment Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Toyo Kikai Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Uryu Seisakusho Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Yamato Fire Extinguisher Co., Ltd.',
    },
    {
      productCategory: 'FITTINGS & TOOLS',
      name: 'Yutani Iron Works Co., Ltd.',
    },
    {
      productCategory: 'FUEL INJECTION PUMPS & NOZZLES',
      name: 'Diesel Kiki',
    },
    {
      productCategory: 'FUEL INJECTION PUMPS & NOZZLES',
      name: 'Nihon Nozzle Seiki',
    },
    {
      productCategory: 'FUEL INJECTION PUMPS & NOZZLES',
      name: 'Toyo Nozzle Pump',
    },
    {
      productCategory: 'GALLEY EQUIPMENT',
      name: 'Fuji Chubo Setsubi',
    },
    {
      productCategory: 'GALLEY EQUIPMENT',
      name: 'Mitsuboshi Chuki',
    },
    {
      productCategory: 'GALLEY EQUIPMENT',
      name: 'Sakae Senpaku Denki',
    },
    {
      productCategory: 'GALLEY EQUIPMENT',
      name: 'Washio Churi Kogyo',
    },
    {
      productCategory: 'GAS ANALYZERS',
      name: 'Riken Keiki Fine Instrument',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Daihatsu Diesel Mfg. Co., Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Diesel United, Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Hitachi Zosen Diesel Service Corp.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Isuzu Marine Engine Inc.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Kawasaki Heavy Industries Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Kubota Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Mitsubishi Heavy Industries Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Mitsui Deutz Diesel Engine Co., Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Niigata Engineering Co., Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Shinko Ind. Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Shinko Engineering Co., Ltd.',
    },
    {
      productCategory: 'GENERATORS',
      name: 'Yanmar Diesel Engine Co., Ltd.',
    },
    {
      productCategory: 'GOVERNORS',
      name: 'Deisel Kiki',
    },
    {
      productCategory: 'GOVERNORS',
      name: 'Woodward Governor',
    },
    {
      productCategory: 'HATCH COVERS',
      name: 'MacGregor-Kayaba, Ltd.',
    },
    {
      productCategory: 'HATCH COVERS',
      name: 'Ohama Iron Works Co., Ltd.',
    },
    {
      productCategory: 'HATCH COVERS',
      name: 'Tsuji Industries Co., Ltd.',
    },
    {
      productCategory: 'HATCH COVERS',
      name: 'Yutani Heavy Industries Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Aalborg Industries K.K.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Alfa-Laval Service',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Daikin Kogyo Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Fujita Iron Works, Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Hisaka Works',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Hitachi Shipbuildings &amp; Engineering',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Japan Steel Engineering',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Kamui',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Kawasaki Heavy Industries, Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Kunimori Seisakusho Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Misuzu Machinery Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Musashino Engineering Works',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Naniwa Reitoki Kogyo, Inc.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Nihon Tokushu Kogyo, Inc.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Nippon Algonquin',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Nippon Controls Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Nippon Danfoss Mfg. Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Nippon Sabroe Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Nissin Refrigeration &amp; Engineering Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Ohama Iron Works Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Osaka Blower Mfg. Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Osaka Dennetsu Kogyo K.K.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Sasakura Engineering Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Seo Koatsu Kogyo Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Shin Nippon Machinery Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Shin-Nippon Air Conditioning Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Suction Gas Engine Mfg. Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Takatori Seisakusho Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Tokyo Sensen Kikai Seisakusho Co., Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Toyo Engineering Works, Ltd.',
    },
    {
      productCategory: 'HEAT EXCHANGERS, CONDENSORS, COOLERS & HEATERS',
      name: 'Yamashina Seiki Co., Ltd.',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Miura',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Nisshin Refrigeration &amp; Engineering',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Sasakura Engineering',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Sunflame',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Takuma',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Volcano',
    },
    {
      productCategory: 'INERT GAS SYSTEMS',
      name: 'Kashiwa',
    },
    {
      productCategory: 'INERT GAS SYSTEMS',
      name: 'Misuzu Machineries &amp; Engineering',
    },
    {
      productCategory: 'INERT GAS SYSTEMS',
      name: 'Mitsubishi Kakoki Kaisha',
    },
    {
      productCategory: 'INERT GAS SYSTEMS',
      name: 'Sasakura Engineering',
    },
    {
      productCategory: 'INERT GAS SYSTEMS',
      name: 'Volcano',
    },
    {
      productCategory: 'LADDERS',
      name: 'Sanwa Iron Works',
    },
    {
      productCategory: 'LADDERS',
      name: 'Ueda Iron Works',
    },
    {
      productCategory: 'LAUNDRY EQUIPMENT',
      name: 'Tokyo Sensen Kikai Seisakusho',
    },
    {
      productCategory: 'LIFEBOATS',
      name: 'Shigi Shipbuilding',
    },
    {
      productCategory: 'LIFERAFTS',
      name: 'Fujikura Rubber Works',
    },
    {
      productCategory: 'LIFERAFTS',
      name: 'Toyo Rubber Industry',
    },
    {
      productCategory: 'LUBRICATORS',
      name: 'Shimadzu Seisakusho',
    },
    {
      productCategory: 'LUBRICATORS',
      name: 'Yamashina Seiki',
    },
    {
      productCategory: 'MACHINE TOOLS',
      name: 'Dainichi Kinzoku Kogyo',
    },
    {
      productCategory: 'MACHINE TOOLS',
      name: 'Takizawa Machine Tool',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Japan Radio',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Koden Electronics',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Oki Electric Industry',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Tokyo Keiki',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Toshiba Corp.',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Toyo Electronics',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Yamatake Honeywell',
    },
    {
      productCategory: 'NAVIGATIONAL INSTRUMENTS',
      name: 'Yokogawa Hokushin Electric',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Koito Industries',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Kokosha',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Nippon Sento',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Sanshin Senpaku Dengu',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Shonan Kosakusho',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Showa Industrial',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Setouchi Kogyo',
    },
    {
      productCategory: 'NAVIGATION LIGHTS & SEARCH LIGHTS',
      name: 'Suction Gas Engine',
    },
    {
      productCategory: 'OIL CONTENT MEASURING INSTRUMENTS',
      name: 'Fellow Kogyo',
    },
    {
      productCategory: 'OIL CONTENT MEASURING INSTRUMENTS',
      name: 'Horiba',
    },
    {
      productCategory: 'OIL CONTENT MEASURING INSTRUMENTS',
      name: 'Shimadzu Seisakusho',
    },
    {
      productCategory: 'OIL CONTENT MEASURING INSTRUMENTS',
      name: 'Tokyo Keiki',
    },
    {
      productCategory: 'OIL CONTENT MEASURING INSTRUMENTS',
      name: 'Yamatake-Honeywell',
    },
    {
      productCategory: 'OIL TREATMENT EQUIPMENT',
      name: 'Volcano',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Heishin Pump Works',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Nippon Srs',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Sasakura Engineering',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Taiko Kikai Industries',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Tokyo Keiki',
    },
    {
      productCategory: 'OVERHEAD TRAVELLING CRANES',
      name: 'Sekigahara Seisakusho',
    },
    {
      productCategory: 'PACKINGS & MECHANICAL SEALS',
      name: 'Eagle Industry',
    },
    {
      productCategory: 'PACKINGS & MECHANICAL SEALS',
      name: 'Nippon Pillar Packing',
    },
    {
      productCategory: 'PACKINGS & MECHANICAL SEALS',
      name: 'Nappon Valqua Industries',
    },
    {
      productCategory: 'PISTON RINGS',
      name: 'Nippon Piston Ring',
    },
    {
      productCategory: 'PISTON RINGS',
      name: 'Riken',
    },
    {
      productCategory: 'PLUMBING FIXTURES',
      name: 'Ina Seito',
    },
    {
      productCategory: 'PLUMBING FIXTURES',
      name: 'Toto',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Kamome Propeller',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Kobe Steel',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Hanshin Deisel Works',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Mikado Propeller',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Mikawa Propeller works',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Nakashima Propeller',
    },
    {
      productCategory: 'PUMPS',
      name: 'Daito Pump Kogyo',
    },
    {
      productCategory: 'PUMPS',
      name: 'Ebara',
    },
    {
      productCategory: 'PUMPS',
      name: 'Fujita Seisakusho',
    },
    {
      productCategory: 'PUMPS',
      name: 'Heishin Engineering &amp; Equipment',
    },
    {
      productCategory: 'PUMPS',
      name: 'Heishin Pump Works',
    },
    {
      productCategory: 'PUMPS',
      name: 'Ishii Machinery Works',
    },
    {
      productCategory: 'PUMPS',
      name: 'Kashiwa',
    },
    {
      productCategory: 'PUMPS',
      name: 'Kosaka Laboratory',
    },
    {
      productCategory: 'PUMPS',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'PUMPS',
      name: 'Naniwa Pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Niigata Worthington',
    },
    {
      productCategory: 'PUMPS',
      name: 'Sanko Pump',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shinkokinzoku Industries',
    },
    {
      productCategory: 'PUMPS',
      name: 'Taiko Kikai Industries',
    },
    {
      productCategory: 'PUMPS',
      name: 'Teikoku Machinery Works',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Alfa-Laval Service',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Mitsubishi Kakoki Kaisha',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Tomoe Engineering',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Anritsu',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Furuno Electric',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Japan Radio',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Koden Electronics',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Kyoritsu Radio',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Sakae Senpaku Denki',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Taiyo Musen',
    },
    {
      productCategory: 'RADIO & TELECOMMUNICATION',
      name: 'Toyo Electronics',
    },
    {
      productCategory: 'REDUCTION GEARS & COUPLINGS',
      name: 'Osaka Chain &amp; Machinery',
    },
    {
      productCategory: 'REDUCTION GEARS & COUPLINGS',
      name: 'Toyo Seimitsu Zoki',
    },
    {
      productCategory: 'REDUCTION GEARS & COUPLINGS',
      name: 'Ube Industries',
    },
    {
      productCategory: 'SEWAGE PLANTS',
      name: 'Heishin Engineering &amp; Equipment',
    },
    {
      productCategory: 'SEWAGE PLANTS',
      name: 'Sasakura Engineering',
    },
    {
      productCategory: 'SEWAGE PLANTS',
      name: 'Taiko Kikai Industries',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Ibuki Kogyo',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Izumitatsu Kogyo',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Koito Industries',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Kokosha',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Nippon Sento',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Sanshin Senpaku Dengu',
    },
    {
      productCategory: 'SIGNAL EQUIPMENT',
      name: 'Shonan Kosakusho',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Hitachi Shipbuilding &amp; Engineering',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Ishikawajima-Harima Heavy Industries',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Kawasaki Heavy Industries',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Mitsui Engineering &amp; Shipbuilding',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Nippon Kokan',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Shinkokinzoku Industries',
    },
    {
      productCategory: 'STEAM TURBINES',
      name: 'Sumitomo Heavy Industries',
    },
    {
      productCategory: 'STEEL HATCH COVERS',
      name: 'Kayaba Industry',
    },
    {
      productCategory: 'STEEL HATCH COVERS',
      name: 'MacGregor Far East',
    },
    {
      productCategory: 'STEEL HATCH COVERS',
      name: 'Tsuji Heavy Industries',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Hitachi Shipbuilding &amp; Engineering',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Kawasaki Heavy Industries',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Mitsui Engineering &amp; Shipbuilding',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Takatori',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Tokyo Keiki',
    },
    {
      productCategory: 'STERN TUBE SEALING',
      name: 'Dover Japan',
    },
    {
      productCategory: 'STERN TUBE SEALING',
      name: 'Eagle Industry',
    },
    {
      productCategory: 'STERN TUBE SEALING',
      name: 'Kobe Steel',
    },
    {
      productCategory: 'STEWARD',
      name: 'Daiei Flex Kogyo Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Inchcape Machinery Services',
    },
    {
      productCategory: 'STEWARD',
      name: 'Fiji Chubo Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Hitachi Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Kenko Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Kitazawa Denki Seisakusho',
    },
    {
      productCategory: 'STEWARD',
      name: 'Kokosha Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Kyoto Denki Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Murayasu Electric Industries Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Mitsuboshi Chuki Mfg. Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Morio Denki Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Naniwa Sohbi Kosakusho K.K.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Schindler Elevator Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Nippon Controls Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Nippon Kogaku Kogyo K.K.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Noritake China Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Oshima Hardware Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Showa Shokki K.K., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Sanwa Churi Kogyo K.K.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Takashima Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Tokyo Sensen Kikai Seisakusho',
    },
    {
      productCategory: 'STEWARD',
      name: 'Toto Kiki Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Uchida Yoko Co., Ltd.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Washio Churi Kogyo K.K.',
    },
    {
      productCategory: 'STEWARD',
      name: 'Yuasa Hardware Co., Ltd.',
    },
    {
      productCategory: 'TACHOMETERS',
      name: 'Kuramoto Instrument',
    },
    {
      productCategory: 'TACHOMETERS',
      name: 'Nippon Zosen Kikai',
    },
    {
      productCategory: 'TACHOMETERS',
      name: 'Nunotani Hakuyo Keiki Kogyo',
    },
    {
      productCategory: 'TACHOMETERS',
      name: 'Toyo Electronics',
    },
    {
      productCategory: 'TANK CLEANING SYSTEMS',
      name: 'Misuzu Machineries &amp; Engineering',
    },
    {
      productCategory: 'TANK CLEANING SYSTEMS',
      name: 'Niikura Kogyo',
    },
    {
      productCategory: 'TANK CLEANING SYSTEMS',
      name: 'Tomoe Engineering',
    },
    {
      productCategory: 'TANK HEATING SYSTEMS',
      name: 'Chugoku Seiki Senpaku',
    },
    {
      productCategory: 'TANK HEATING SYSTEMS',
      name: 'Nippon Algonquin',
    },
    {
      productCategory: 'THERMOMETERS',
      name: 'Hyoda Gauge',
    },
    {
      productCategory: 'THERMOMETERS',
      name: 'Meiyo Electric',
    },
    {
      productCategory: 'THERMOMETERS',
      name: 'Murayama Denki',
    },
    {
      productCategory: 'THERMOMETERS',
      name: 'Nagano Keiki Seisakusho',
    },
    {
      productCategory: 'THERMOMETERS',
      name: 'Rikadenki Kogyo',
    },
    {
      productCategory: 'TURBO CHARGERS',
      name: 'Ishikawajima-Harima Heavy Industries',
    },
    {
      productCategory: 'TURBO CHARGERS',
      name: 'Mitsubishi Heavy Industries',
    },
    {
      productCategory: 'TURBO CHARGERS',
      name: 'Mitsui Engineering &amp; Shipbuilding',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Fukui Seisakusho',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Keihin Seiki',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Kitamura Valve Seizo',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Mitsumoto Valve',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Nakakita Seisakusho',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Niigata Engineering',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Niikura Kogyo',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Nippon Air Brake',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Okano Valve',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Osaka Valve',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Saginomiya Seisakusho',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Tlv',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Taisei Kinzoku Industries',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Teikoku Piston Ringv Toa Valve',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Tomoe Valve',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Venn Valve',
    },
    {
      productCategory: 'VALVES & PIPEFITTINGS',
      name: 'Yamatake-Honeywell',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'BLM Far East Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Fukushima Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Ishikawajima-Harima Heavy Industries Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Japan Steel Works Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Kawasaki Heavy Industries Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Kitagawa Iron Works Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Kubota Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'MacGregor-Kayaba, Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Marol K.K.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Masago Industries Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Mitsubishi Heavy Industries, Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Mitsui Engineering &amp; Shipbuilding Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Nippon Ican Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Nippon Pusnes Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Nittan Valve Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Osaka Chain &amp; Machinery Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Sekigahara Seisakusho',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Shinko Electric Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Tobu Juko K.K.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Tokyo Kikai Service Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Tsuji Industries Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Yoshida Denki Kogyo K.K.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Yutani Heavy Industries Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Yutani Iron Works Co., Ltd.',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',

      name: 'Kokosha',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',

      name: 'Kumata Industry',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',

      name: 'Setouchi Kogyo',
    },
  ],
  ['KR']: [
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Daihan Anchor Chain',
    },
    {
      productCategory: 'ANCHORS & CHAINS',
      name: 'Korean Heavy Machinery Industries',
    },
    {
      productCategory: 'BOILER',
      name: 'Kangrim Industries Co., Ltd.',
    },
    {
      productCategory: 'BLOWERS & FANS',
      name: 'Han-Sung Electric Heating Equipment',
    },
    {
      productCategory: 'BLOWERS & FANS',
      name: 'Han-Young Kee Jun Industrial',
    },
    {
      productCategory: 'BLOWERS & FANS',
      name: 'Jonghap Compressors',
    },
    {
      productCategory: 'BLOWERS & FANS',
      name: 'Kyungwon Century Co., Ltd.',
    },
    {
      productCategory: 'BLOWERS & FANS',
      name: 'Oyang Kong Jo Ki',
    },
    {
      productCategory: 'BLOWERS & FANS',
      name: 'Sam-Jeong',
    },
    {
      productCategory: 'CRANES',
      name: 'Dai Jin Industries',
    },
    {
      productCategory: 'CRANES',
      name: 'Oriental Precision &amp; Engrg Co., Ltd.',
    },
    {
      productCategory: 'DAVITS',
      name: 'Suh Kwang Machinery &amp; Engineering',
    },
    {
      productCategory: 'DOORS & LOCKS',
      name: 'Korea Flange',
    },
    {
      productCategory: 'DOORS & LOCKS',
      name: 'Sungmi Co., Ltd.',
    },
    {
      productCategory: 'DOORS & LOCKS',
      name: 'Sungmi Cuen Cheui',
    },
    {
      productCategory: 'DISTILLING PLANTS',
      name: 'Doosan Manufacturing',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Bong Myung Industrial',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Daeyang Electric',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Daeyang Electric Supply Co., Ltd.',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Gold Star Cable',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'HI – PRES Korea Co., Ltd.',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Koc Electric Co., Ltd.',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Korea U.V Development Co., Ltd.',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Korea Welding Electrode',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Kuck Dong Electric Wire',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Sedhan Development',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Shinyeong Electric',
    },
    {
      productCategory: 'ELECTRIC EQUIPMENT',
      name: 'Yehab Electric Cable',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Daeyang Electric',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Gold Star Instruments &amp; Electric',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Hyundai Electrical Engineering',
    },
    {
      productCategory: 'CONTROL PANELS',
      name: 'Korea Taiyo Electric',
    },
    {
      productCategory: 'ELEVATORS',
      name: 'Dong Yang Elevator',
    },
    {
      productCategory: 'ELEVATORS',
      name: 'Hundai Elevator',
    },
    {
      productCategory: 'ELEVATORS',
      name: 'Shinyeong Electric',
    },
    {
      name: 'Dae Dong Metal Industrial',
    },
    {
      name: 'Han Jin',
    },
    {
      productCategory: 'GALLEY EQUIPMENT',
      name: 'Dong Woo Industrial',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Dai Jin Industries',
    },
    {
      productCategory: 'INCINERATORS',
      name: 'Hyundai Marine Machinery Co., Ltd.',
    },
    {
      productCategory: 'LADDERS',
      name: 'Samgong',
    },
    {
      productCategory: 'MAIN ENGINE / AUXILIARY ENGINE',
      name: 'HSD Engine',
    },
    {
      productCategory: 'MAIN ENGINE / AUXILIARY ENGINE',
      name: 'STX Man B&amp;W Engine',
    },
    {
      productCategory: 'MAIN ENGINE / AUXILIARY ENGINE',
      name: 'Hyundai Engine',
    },
    {
      productCategory: 'MARINE SAFETY EQUIPMENT',
      name: 'Daeho Flow Instruments Co., Ltd.',
    },
    {
      productCategory: 'MARINE SAFETY EQUIPMENT',
      name: 'Daihwa Corporation',
    },
    {
      productCategory: 'MARINE SAFETY EQUIPMENT',
      name: 'Dong Heung Ship Equipment',
    },
    {
      productCategory: 'MARINE SAFETY EQUIPMENT',
      name: 'MRC (Merine Radio Co., Ltd.)',
    },
    {
      productCategory: 'MARINE SAFETY EQUIPMENT',
      name: 'NK Co., Ltd.',
    },
    {
      productCategory: 'MARINE SAFETY EQUIPMENT',
      name: 'Hyundai Precision &amp; Engrg Co., Ltd.',
    },
    {
      productCategory: 'Marine Tank Cleaning Equipment',
      name: 'Donghwa Entec',
    },
    {
      productCategory: 'NAVIGATIONAL EQUIPMENT',
      name: 'Donghwa Precision Industrial',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Pohang Marine Engineering',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Yoo Won Industries Ltd.',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Seil Seres Co., Ltd.',
    },
    {
      productCategory: 'OILY WATER SEPARATORS',
      name: 'Sewon Industries Co., Ltd.',
    },
    {
      productCategory: 'PACKINGS & MECHANICAL SEALS',
      name: 'Dae Lim Trading',
    },
    {
      productCategory: 'PACKINGS & MECHANICAL SEALS',
      name: 'Royal Toto Metal',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Sil La Metal Industry',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Suh Kwang Machinery &amp; Engineering',
    },
    {
      productCategory: 'PROPELLERS',
      name: 'Suro Propeller &amp; Machinery',
    },
    {
      productCategory: 'PUMPS',
      name: 'Bonng Myung Industrial',
    },
    {
      productCategory: 'PUMPS',
      name: 'Hanyoung Engineeing Co., Ltd.',
    },
    {
      productCategory: 'PUMPS',
      name: 'Shin Shin Machinery',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Hai Yang Electric Equipment',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Oriental Precision Company',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Samgong Co., Ltd.',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Samkun Century Co., Ltd.',
    },
    {
      productCategory: 'PURIFIERS & CLARIFIERS',
      name: 'Shin Shin Machinery Co., Ltd.',
    },
    {
      productCategory: 'RADARS, LORANS, DIRECTION FINDERS, ETC.',
      name: 'Gold Star Precision',
    },
    {
      productCategory: 'RADARS, LORANS, DIRECTION FINDERS, ETC.',
      name: 'Hanla Level Co., Ltd.',
    },
    {
      productCategory: 'RADARS, LORANS, DIRECTION FINDERS, ETC.',
      name: 'Hai Yang Electric Equipment',
    },
    {
      productCategory: 'RADARS, LORANS, DIRECTION FINDERS, ETC.',
      name: 'Oriental Precision Company',
    },
    {
      productCategory: 'RADARS, LORANS, DIRECTION FINDERS, ETC.',
      name: 'Pan-Asia',
    },
    {
      productCategory: 'RADARS, LORANS, DIRECTION FINDERS, ETC.',
      name: 'Saracom',
    },
    {
      productCategory: 'SEWAGE PLANTS',
      name: 'Consolidated Machinery',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Daeyang Instrument Co., Ltd.',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Dong Myung Heavy Industries Co., Ltd.',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Tong Myung Heavy Industries',
    },
    {
      productCategory: 'STEERING GEARS',
      name: 'Yoo Won Industries Ltd.',
    },
    {
      productCategory: 'STERN TUBE SEALING',
      name: 'Sil La Metal Industry',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Dae Dong Metal Industrial',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Dai Yong Metal',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Danfoss Marine Systems',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Hanmi Hydraulic Machinery Co., Ltd.',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Hyup Dong Metal',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Kang Rim Technical Industries',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Keystone Valve Korea',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Keystone Valve',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Kook Jae Valve',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Korea Flange',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Kum Kang Bend',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Mt.H Controls',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Oyang Kong Jo Ki',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Sam Shin Iron',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Seon-li Metal',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Sung Kwany Fitting Industrial',
    },
    {
      productCategory: 'VALVES & PIPE FITTINGS',
      name: 'Woo Sung Fitting Industrial',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Dai Jin Industries',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Samgong',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Suh Kwang Machinery &amp; Engineering',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Ton Myung Heavy Industries',
    },
    {
      productCategory: 'WINCHES & WINDLASSES',
      name: 'Jung-A Marine Equipment MFG Co., Ltd.',
    },
    {
      productCategory: 'WINDOWS & SCUTTLES',
      name: 'Samgong',
    },
  ],
}

export const getProductViaCode = ({
  code,
}: Record<string, string>): {
  products: Product[]
  code: string
} => {
  if (!productsCodeMap[code]) throw new Error(`cannot get product`)

  const products = productsCodeMap[code]
  return {
    products,
    code: code,
  }
}
