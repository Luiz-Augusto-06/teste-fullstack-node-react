const allCar = [
  {
    "veiculo": "Integra GS 1.8",
    "marca": "Acura",
    "cod_fipe": "038003-2",
    "vendido": false
  },
  {
    "veiculo": "Legend 3.2/3.5",
    "marca": "Acura",
    "cod_fipe": "038002-4",
    "vendido": false
  },
  {
    "veiculo": "NSX 3.0",
    "marca": "Acura",
    "cod_fipe": "038001-6",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ 2.8 12V 132cv TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060001-6",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 100 2.8  CS TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060003-2",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 100 2.8 CD TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060004-0",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 150 2.8  CS TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060005-9",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 150 2.8 CD TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060006-7",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 200 2.8  CD TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060008-3",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 200 2.8 CS TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060007-5",
    "vendido": false
  },
  {
    "veiculo": "MARRUÁ AM 50 2.8 140CV TDI Diesel",
    "marca": "Agrale",
    "cod_fipe": "060002-4",
    "vendido": false
  },
  {
    "veiculo": "145 Elegant 1.7/1.8 16V",
    "marca": "Alfa Romeo",
    "cod_fipe": "006009-7",
    "vendido": false
  },
  {
    "veiculo": "145 Elegant 2.0 16V",
    "marca": "Alfa Romeo",
    "cod_fipe": "006001-1",
    "vendido": false
  },
  {
    "veiculo": "145 Quadrifoglio 2.0",
    "marca": "Alfa Romeo",
    "cod_fipe": "006002-0",
    "vendido": false
  },
  {
    "veiculo": "145 QV",
    "marca": "Alfa Romeo",
    "cod_fipe": "006008-9",
    "vendido": false
  },
  {
    "veiculo": "147 2.0 16V 148cv 4p Semi-Aut.",
    "marca": "Alfa Romeo",
    "cod_fipe": "006017-8",
    "vendido": false
  },
  {
    "veiculo": "155",
    "marca": "Alfa Romeo",
    "cod_fipe": "006003-8",
    "vendido": false
  },
  {
    "veiculo": "155 Super",
    "marca": "Alfa Romeo",
    "cod_fipe": "006004-6",
    "vendido": false
  },
  {
    "veiculo": "156 2.5 V6 24V 190cv 4p Aut.",
    "marca": "Alfa Romeo",
    "cod_fipe": "006015-1",
    "vendido": false
  },
  {
    "veiculo": "156 Sport Wagon 2.0 16V",
    "marca": "Alfa Romeo",
    "cod_fipe": "006014-3",
    "vendido": false
  },
  {
    "veiculo": "156 SportWagon 2.5 V6 24V 190cv 4p Aut.",
    "marca": "Alfa Romeo",
    "cod_fipe": "006016-0",
    "vendido": false
  },
  {
    "veiculo": "156 TS/Sport/Elegant 2.0 16V",
    "marca": "Alfa Romeo",
    "cod_fipe": "006010-0",
    "vendido": false
  },
  {
    "veiculo": "164 3.0 V6",
    "marca": "Alfa Romeo",
    "cod_fipe": "006005-4",
    "vendido": false
  },
  {
    "veiculo": "164 Super V6 24V",
    "marca": "Alfa Romeo",
    "cod_fipe": "006006-2",
    "vendido": false
  },
  {
    "veiculo": "166 3.0 V6 24V",
    "marca": "Alfa Romeo",
    "cod_fipe": "006011-9",
    "vendido": false
  },
  {
    "veiculo": "2300 TI/TI-4",
    "marca": "Alfa Romeo",
    "cod_fipe": "006013-5",
    "vendido": false
  },
  {
    "veiculo": "Spider 2.0/3.0",
    "marca": "Alfa Romeo",
    "cod_fipe": "006007-0",
    "vendido": false
  },
  {
    "veiculo": "Hummer Hard-Top 6.5 4x4 Diesel TB",
    "marca": "AM Gen",
    "cod_fipe": "037001-0",
    "vendido": false
  },
  {
    "veiculo": "Hummer Open-Top 6.5 4x4 Diesel TB",
    "marca": "AM Gen",
    "cod_fipe": "037002-9",
    "vendido": false
  },
  {
    "veiculo": "Hummer Wagon 6.5 4x4 Diesel TB",
    "marca": "AM Gen",
    "cod_fipe": "037003-7",
    "vendido": false
  },
  {
    "veiculo": "AM-825 Luxo 4.0 Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007018-1",
    "vendido": false
  },
  {
    "veiculo": "AM-825 Super Luxo 4.0 Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007019-0",
    "vendido": false
  },
  {
    "veiculo": "Hi-Topic SLX/SDX/DLX Full Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007001-7",
    "vendido": false
  },
  {
    "veiculo": "Hi-Topic STD Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007002-5",
    "vendido": false
  },
  {
    "veiculo": "Hi-Topic Van 2.7 Diesel (furgão)",
    "marca": "Asia Motors",
    "cod_fipe": "007017-3",
    "vendido": false
  },
  {
    "veiculo": "Jipe Rocsta GT 4x4 2.2 Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007020-3",
    "vendido": false
  },
  {
    "veiculo": "Topic Carga 2.7 Diesel (furgão)",
    "marca": "Asia Motors",
    "cod_fipe": "007016-5",
    "vendido": false
  },
  {
    "veiculo": "Topic Luxo Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007014-9",
    "vendido": false
  },
  {
    "veiculo": "Topic Super Luxo Diesel",
    "marca": "Asia Motors",
    "cod_fipe": "007015-7",
    "vendido": false
  },
  {
    "veiculo": "Towner Coach Full",
    "marca": "Asia Motors",
    "cod_fipe": "007003-3",
    "vendido": false
  },
  {
    "veiculo": "Towner Furgão",
    "marca": "Asia Motors",
    "cod_fipe": "007009-2",
    "vendido": false
  },
  {
    "veiculo": "Towner Glass Van",
    "marca": "Asia Motors",
    "cod_fipe": "007004-1",
    "vendido": false
  },
  {
    "veiculo": "Towner Luxo",
    "marca": "Asia Motors",
    "cod_fipe": "007012-2",
    "vendido": false
  },
  {
    "veiculo": "Towner Multiuso 5p",
    "marca": "Asia Motors",
    "cod_fipe": "007011-4",
    "vendido": false
  },
  {
    "veiculo": "Towner Panel Van",
    "marca": "Asia Motors",
    "cod_fipe": "007005-0",
    "vendido": false
  },
  {
    "veiculo": "Towner Pick-Up",
    "marca": "Asia Motors",
    "cod_fipe": "007008-4",
    "vendido": false
  },
  {
    "veiculo": "Towner SDX / DLX/ STD",
    "marca": "Asia Motors",
    "cod_fipe": "007006-8",
    "vendido": false
  },
  {
    "veiculo": "Towner Super Luxo",
    "marca": "Asia Motors",
    "cod_fipe": "007013-0",
    "vendido": false
  },
  {
    "veiculo": "Towner Truck",
    "marca": "Asia Motors",
    "cod_fipe": "007007-6",
    "vendido": false
  },
  {
    "veiculo": "DB9 Coupe 6.0 V12 510cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085011-0",
    "vendido": false
  },
  {
    "veiculo": "DB9 Volante 6.0 V12 470cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085006-3",
    "vendido": false
  },
  {
    "veiculo": "Rapide 6.0 V12 477cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085007-1",
    "vendido": false
  },
  {
    "veiculo": "Rapide S 6.0 V12 550cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085009-8",
    "vendido": false
  },
  {
    "veiculo": "Vanquish V12 6.0 565cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085010-1",
    "vendido": false
  },
  {
    "veiculo": "Vantage 6.0 V12 510cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085004-7",
    "vendido": false
  },
  {
    "veiculo": "Vantage Coupe 4.7 V8 425cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085002-0",
    "vendido": false
  },
  {
    "veiculo": "Vantage Roadster 4.7 V8 420cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085003-9",
    "vendido": false
  },
  {
    "veiculo": "Vantage S 6.0 V12 565cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085008-0",
    "vendido": false
  },
  {
    "veiculo": "Vantage S Coupe 4.7 V8 430cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085001-2",
    "vendido": false
  },
  {
    "veiculo": "Virage Coupe 6.0 V12 490cv",
    "marca": "ASTON MARTIN",
    "cod_fipe": "085005-5",
    "vendido": false
  },
  {
    "veiculo": "100 2.8 V6",
    "marca": "Audi",
    "cod_fipe": "008030-6",
    "vendido": false
  },
  {
    "veiculo": "100 2.8 V6 Avant",
    "marca": "Audi",
    "cod_fipe": "008076-4",
    "vendido": false
  },
  {
    "veiculo": "100 S-4 2.2 Avant Turbo",
    "marca": "Audi",
    "cod_fipe": "008031-4",
    "vendido": false
  },
  {
    "veiculo": "80 2.0",
    "marca": "Audi",
    "cod_fipe": "008001-2",
    "vendido": false
  },
  {
    "veiculo": "80 2.0 Avant",
    "marca": "Audi",
    "cod_fipe": "008077-2",
    "vendido": false
  },
  {
    "veiculo": "80 2.6/ 2.8",
    "marca": "Audi",
    "cod_fipe": "008080-2",
    "vendido": false
  },
  {
    "veiculo": "80 2.6/2.8 Avant",
    "marca": "Audi",
    "cod_fipe": "008002-0",
    "vendido": false
  },
  {
    "veiculo": "80 2.8 Cabriolet",
    "marca": "Audi",
    "cod_fipe": "008003-9",
    "vendido": false
  },
  {
    "veiculo": "80 S2 Avant",
    "marca": "Audi",
    "cod_fipe": "008004-7",
    "vendido": false
  },
  {
    "veiculo": "A1 1.4 TFSI 122cv S-tronic 3p",
    "marca": "Audi",
    "cod_fipe": "008153-1",
    "vendido": false
  },
  {
    "veiculo": "A1 2.0 TFSI Quattro 256cv 3p",
    "marca": "Audi",
    "cod_fipe": "008177-9",
    "vendido": false
  },
  {
    "veiculo": "A1 Sport 1.4 TFSI 185cv 3p S-tronic",
    "marca": "Audi",
    "cod_fipe": "008172-8",
    "vendido": false
  },
  {
    "veiculo": "A1 Sport. S Edition 1.4 TFSI 5p S-tronic",
    "marca": "Audi",
    "cod_fipe": "008210-4",
    "vendido": false
  },
  {
    "veiculo": "A1 Sportback 1.4 TFSI 185cv 5p S-tronic",
    "marca": "Audi",
    "cod_fipe": "008174-4",
    "vendido": false
  },
  {
    "veiculo": "A1 Sportback 1.4 TFSI 5p S-tronic",
    "marca": "Audi",
    "cod_fipe": "008173-6",
    "vendido": false
  },
  {
    "veiculo": "A1 Sportback 1.8 TFSI 192cv 5p S-tronic",
    "marca": "Audi",
    "cod_fipe": "008204-0",
    "vendido": false
  },
  {
    "veiculo": "A3 1.6 3p",
    "marca": "Audi",
    "cod_fipe": "008032-2",
    "vendido": false
  },
  {
    "veiculo": "A3 1.6 3p Aut",
    "marca": "Audi",
    "cod_fipe": "008056-0",
    "vendido": false
  },
  {
    "veiculo": "A3 1.6 5p",
    "marca": "Audi",
    "cod_fipe": "008040-3",
    "vendido": false
  },
  {
    "veiculo": "A3 1.6 5p Aut",
    "marca": "Audi",
    "cod_fipe": "008057-8",
    "vendido": false
  },
  {
    "veiculo": "A3 1.6 8V 102cv 3p",
    "marca": "Audi",
    "cod_fipe": "008116-7",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 3p",
    "marca": "Audi",
    "cod_fipe": "008005-5",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 3p Aut.",
    "marca": "Audi",
    "cod_fipe": "008043-8",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 5p Aut.",
    "marca": "Audi",
    "cod_fipe": "008042-0",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 5p Mec.",
    "marca": "Audi",
    "cod_fipe": "008041-1",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 180cv 3p Aut./ Tip.",
    "marca": "Audi",
    "cod_fipe": "008073-0",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 180cv 3p Mec.",
    "marca": "Audi",
    "cod_fipe": "008074-8",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 180cv 5p Aut./ Tip.",
    "marca": "Audi",
    "cod_fipe": "008071-3",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 180cv 5p Mec.",
    "marca": "Audi",
    "cod_fipe": "008072-1",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 3p Aut.",
    "marca": "Audi",
    "cod_fipe": "008046-2",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 3p Mec.",
    "marca": "Audi",
    "cod_fipe": "008006-3",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 5p Aut.",
    "marca": "Audi",
    "cod_fipe": "008045-4",
    "vendido": false
  },
  {
    "veiculo": "A3 1.8 Turbo 5p Mec.",
    "marca": "Audi",
    "cod_fipe": "008044-6",
    "vendido": false
  },
  {
    "veiculo": "A3 Cabriolet 1.8 16V TFSI 180cv S-tronic",
    "marca": "Audi",
    "cod_fipe": "008195-7",
    "vendido": false
  },
  {
    "veiculo": "A3 Sed. Ambition 2.0 TSFI 220cv S-tronic",
    "marca": "Audi",
    "cod_fipe": "008205-8",
    "vendido": false
  },
  {
    "veiculo": "A3 Sed.1.8/1.8 Ambit.16V TB FSI S-tronic",
    "marca": "Audi",
    "cod_fipe": "008190-6",
    "vendido": false
  },
  {
    "veiculo": "A3 Sedan 1.4 TFSI Flex Tiptronic 4p ",
    "marca": "Audi",
    "cod_fipe": "008203-1",
    "vendido": false
  },
  {
    "veiculo": "A3 Sedan 1.4/ Attra. 16V TB FSI S-tronic",
    "marca": "Audi",
    "cod_fipe": "008192-2",
    "vendido": false
  },
  {
    "veiculo": "A3 Sport 1.8 16V TFSI S-Tronic 3p",
    "marca": "Audi",
    "cod_fipe": "008181-7",
    "vendido": false
  },
  {
    "veiculo": "A3 Sport 2.0 16V TFSI S Tronic",
    "marca": "Audi",
    "cod_fipe": "008138-8",
    "vendido": false
  },
  {
    "veiculo": "A3 Sportback 1.4 TFSI S-Tronic",
    "marca": "Audi",
    "cod_fipe": "008184-1",
    "vendido": false
  },
  {
    "veiculo": "A3 Sportback 1.6 8V 102cv 5p",
    "marca": "Audi",
    "cod_fipe": "008117-5",
    "vendido": false
  },
  {
    "veiculo": "A3 Sportback 1.8 16V TFSI S-Tronic 5p",
    "marca": "Audi",
    "cod_fipe": "008185-0",
    "vendido": false
  },
  {
    "veiculo": "A3 Sportback 2.0 16V TFSI Mec.",
    "marca": "Audi",
    "cod_fipe": "008118-3",
    "vendido": false
  },
  {
    "veiculo": "A3 Sportback 2.0 16V TFSI S-Tronic",
    "marca": "Audi",
    "cod_fipe": "008119-1",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8  Aut.",
    "marca": "Audi",
    "cod_fipe": "008047-0",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8  Mec.",
    "marca": "Audi",
    "cod_fipe": "008007-1",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8 Avant Aut.",
    "marca": "Audi",
    "cod_fipe": "008048-9",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8 Avant Mec.",
    "marca": "Audi",
    "cod_fipe": "008009-8",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8 Avant Turbo Mec.",
    "marca": "Audi",
    "cod_fipe": "008010-1",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8 Avant Turbo Tip./ Multitronic",
    "marca": "Audi",
    "cod_fipe": "008049-7",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8 Tip./ Multitronic Turbo",
    "marca": "Audi",
    "cod_fipe": "008008-0",
    "vendido": false
  },
  {
    "veiculo": "A4 1.8 Turbo",
    "marca": "Audi",
    "cod_fipe": "008070-5",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 16V TFSI 183/180cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008132-9",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 16V TFSI 200/ 214cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008120-5",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 16V TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008170-1",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 20V 130cv Multitronic 4p",
    "marca": "Audi",
    "cod_fipe": "008101-9",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 Avant 16V TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008171-0",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 Avant Ambi. 2.0 16V TFSi S tronic",
    "marca": "Audi",
    "cod_fipe": "008211-2",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 Avant TFSI 183/180cv Multitroni",
    "marca": "Audi",
    "cod_fipe": "008133-7",
    "vendido": false
  },
  {
    "veiculo": "A4 2.0 Avant TFSI 200/214cv Multitron.",
    "marca": "Audi",
    "cod_fipe": "008121-3",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 30V Avant Mec",
    "marca": "Audi",
    "cod_fipe": "008020-9",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 30V Avant Tip./Multitronic",
    "marca": "Audi",
    "cod_fipe": "008021-7",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 30V Mec",
    "marca": "Audi",
    "cod_fipe": "008018-7",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 30V Tip./Multitronic",
    "marca": "Audi",
    "cod_fipe": "008019-5",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 Avant V6 30V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008081-0",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 Avant V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008082-9",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 V6 30V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008083-7",
    "vendido": false
  },
  {
    "veiculo": "A4 2.4 V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008084-5",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8",
    "marca": "Audi",
    "cod_fipe": "008011-0",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 30V  Tiptronic/ Aut.",
    "marca": "Audi",
    "cod_fipe": "008023-3",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 30V Mec",
    "marca": "Audi",
    "cod_fipe": "008022-5",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 Avant V6 12V",
    "marca": "Audi",
    "cod_fipe": "008036-5",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 Avant V6 30V Mec.",
    "marca": "Audi",
    "cod_fipe": "008037-3",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 Avant V6 30V Quattro Mec.",
    "marca": "Audi",
    "cod_fipe": "008087-0",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 Avant V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008088-8",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 Avant V6 30V Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008055-1",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 V6 30V  Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008085-3",
    "vendido": false
  },
  {
    "veiculo": "A4 2.8 V6 30V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008086-1",
    "vendido": false
  },
  {
    "veiculo": "A4 3.0 30V 218cv Multitronic 4p",
    "marca": "Audi",
    "cod_fipe": "008102-7",
    "vendido": false
  },
  {
    "veiculo": "A4 3.0 30V 218cv Quattro Tiptron./Aut 4p",
    "marca": "Audi",
    "cod_fipe": "008109-4",
    "vendido": false
  },
  {
    "veiculo": "A4 3.0 Avant 30V 218cv Multitronic 5p",
    "marca": "Audi",
    "cod_fipe": "008107-8",
    "vendido": false
  },
  {
    "veiculo": "A4 3.0 Avant 30V 218cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008110-8",
    "vendido": false
  },
  {
    "veiculo": "A4 3.0 Cabriolet 30V 218cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008108-6",
    "vendido": false
  },
  {
    "veiculo": "A4 3.2 FSI 24V 255cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008123-0",
    "vendido": false
  },
  {
    "veiculo": "A4 3.2 FSI 24V 269cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008130-2",
    "vendido": false
  },
  {
    "veiculo": "A4 3.2 FSI Avant 24V 255cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008124-8",
    "vendido": false
  },
  {
    "veiculo": "A4 3.2 FSI Avant 24V Quattro S Tronic",
    "marca": "Audi",
    "cod_fipe": "008135-3",
    "vendido": false
  },
  {
    "veiculo": "A4 3.2 FSI Cabriolet 24V 255cv Multitron",
    "marca": "Audi",
    "cod_fipe": "008125-6",
    "vendido": false
  },
  {
    "veiculo": "A4 Ambiente 2.0 TFSI 190cv S tronic",
    "marca": "Audi",
    "cod_fipe": "008209-0",
    "vendido": false
  },
  {
    "veiculo": "A4 Attraction 2.0 TFSI 190cv S tronic",
    "marca": "Audi",
    "cod_fipe": "008208-2",
    "vendido": false
  },
  {
    "veiculo": "A4 Launch Edition 2.0 TFSI 190cv S troni",
    "marca": "Audi",
    "cod_fipe": "008207-4",
    "vendido": false
  },
  {
    "veiculo": "A5 3.2 FSI 24V 269cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008131-0",
    "vendido": false
  },
  {
    "veiculo": "A5 3.2 FSI V6 24V 269cv Quattro Tiptroni",
    "marca": "Audi",
    "cod_fipe": "008139-6",
    "vendido": false
  },
  {
    "veiculo": "A5 Cabriolet 2.0 TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008165-5",
    "vendido": false
  },
  {
    "veiculo": "A5 Coupê 2.0 TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008164-7",
    "vendido": false
  },
  {
    "veiculo": "A5 Sportb. 2.0 16V TFSI Quat. S-tronic",
    "marca": "Audi",
    "cod_fipe": "008169-8",
    "vendido": false
  },
  {
    "veiculo": "A5 Sportback 1.8 TFSI 170cv Multi.",
    "marca": "Audi",
    "cod_fipe": "008197-3",
    "vendido": false
  },
  {
    "veiculo": "A5 Sportback 2.0 16V TFSI 180cv Multi.",
    "marca": "Audi",
    "cod_fipe": "008161-2",
    "vendido": false
  },
  {
    "veiculo": "A5 Sportback 2.0 16V TFSI 211cv Multi.",
    "marca": "Audi",
    "cod_fipe": "008145-0",
    "vendido": false
  },
  {
    "veiculo": "A6 2.0 TFSI 252cv S tronic 4p",
    "marca": "Audi",
    "cod_fipe": "008200-7",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 30V Mec",
    "marca": "Audi",
    "cod_fipe": "008024-1",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 30V Tip./Multitronic",
    "marca": "Audi",
    "cod_fipe": "008025-0",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 Avant 30V Mec.",
    "marca": "Audi",
    "cod_fipe": "008051-9",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 Avant 30V Tip./ Multitronic",
    "marca": "Audi",
    "cod_fipe": "008052-7",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 Avant V6 30V Quattro Mec.",
    "marca": "Audi",
    "cod_fipe": "008091-8",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 Avant V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008092-6",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 V6 30V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008089-6",
    "vendido": false
  },
  {
    "veiculo": "A6 2.4 V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008090-0",
    "vendido": false
  },
  {
    "veiculo": "A6 2.7 30V Avant Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008059-4",
    "vendido": false
  },
  {
    "veiculo": "A6 2.7 30V Mec.",
    "marca": "Audi",
    "cod_fipe": "008058-6",
    "vendido": false
  },
  {
    "veiculo": "A6 2.7 Avant Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008068-3",
    "vendido": false
  },
  {
    "veiculo": "A6 2.7 Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008067-5",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8",
    "marca": "Audi",
    "cod_fipe": "008012-8",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 30V Mec",
    "marca": "Audi",
    "cod_fipe": "008026-8",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 30V Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008027-6",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 Avant",
    "marca": "Audi",
    "cod_fipe": "008013-6",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 Avant 30V Mec",
    "marca": "Audi",
    "cod_fipe": "008053-5",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 Avant 30V Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008054-3",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 Avant V6 30V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008095-0",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 Avant V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008096-9",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 V6 30V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008093-4",
    "vendido": false
  },
  {
    "veiculo": "A6 2.8 V6 30V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008094-2",
    "vendido": false
  },
  {
    "veiculo": "A6 3.0 Avant V6 30V 218cv Multitronic 5p",
    "marca": "Audi",
    "cod_fipe": "008105-1",
    "vendido": false
  },
  {
    "veiculo": "A6 3.0 Avant. TB FSI V6 Quattro Tip. 5p",
    "marca": "Audi",
    "cod_fipe": "008150-7",
    "vendido": false
  },
  {
    "veiculo": "A6 3.0 Avant.TFSI V6 Quattro S tronic 5p",
    "marca": "Audi",
    "cod_fipe": "008179-5",
    "vendido": false
  },
  {
    "veiculo": "A6 3.0 TB FSI V6 Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008136-1",
    "vendido": false
  },
  {
    "veiculo": "A6 3.0 TFSI V6 Quattro S tronic 4p",
    "marca": "Audi",
    "cod_fipe": "008178-7",
    "vendido": false
  },
  {
    "veiculo": "A6 3.0 V6 30V 218cv Multitronic 4p",
    "marca": "Audi",
    "cod_fipe": "008103-5",
    "vendido": false
  },
  {
    "veiculo": "A6 3.2 FSI 24V 255cv Multitronic",
    "marca": "Audi",
    "cod_fipe": "008128-0",
    "vendido": false
  },
  {
    "veiculo": "A6 4.2 Avant Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008061-6",
    "vendido": false
  },
  {
    "veiculo": "A6 4.2 Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008060-8",
    "vendido": false
  },
  {
    "veiculo": "A6 Allroad 3.0 TFSI V6 Quattro S tronic",
    "marca": "Audi",
    "cod_fipe": "008180-9",
    "vendido": false
  },
  {
    "veiculo": "A7 Sportback 2.0 TFSI S Tronic",
    "marca": "Audi",
    "cod_fipe": "008206-6",
    "vendido": false
  },
  {
    "veiculo": "A7 Sportback 3.0 TFSI Quattro S Tronic",
    "marca": "Audi",
    "cod_fipe": "008154-0",
    "vendido": false
  },
  {
    "veiculo": "A8 3.0 TFSI 310cv Quattro Tiptronic 4p",
    "marca": "Audi",
    "cod_fipe": "008199-0",
    "vendido": false
  },
  {
    "veiculo": "A8 4.0 TFSI Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008187-6",
    "vendido": false
  },
  {
    "veiculo": "A8 4.2 Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008062-4",
    "vendido": false
  },
  {
    "veiculo": "A8 4.2 V8 32V Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008014-4",
    "vendido": false
  },
  {
    "veiculo": "A8 6.0 W12 48V 450cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008115-9",
    "vendido": false
  },
  {
    "veiculo": "A8 6.3 W12 48V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008156-6",
    "vendido": false
  },
  {
    "veiculo": "Allroad 2.7 30V Quattro Turbo Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008079-9",
    "vendido": false
  },
  {
    "veiculo": "Avant RS2",
    "marca": "Audi",
    "cod_fipe": "008015-2",
    "vendido": false
  },
  {
    "veiculo": "Q3 1.4 TFSI 150cv S-tronic 5p",
    "marca": "Audi",
    "cod_fipe": "008201-5",
    "vendido": false
  },
  {
    "veiculo": "Q3 2.0 TFSI Quat. 170/180cv S-tronic 5p",
    "marca": "Audi",
    "cod_fipe": "008159-0",
    "vendido": false
  },
  {
    "veiculo": "Q3 2.0 TFSI Quat. 211/220cv S-tronic 5p",
    "marca": "Audi",
    "cod_fipe": "008160-4",
    "vendido": false
  },
  {
    "veiculo": "Q5 2.0 16V TFSI 225cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008186-8",
    "vendido": false
  },
  {
    "veiculo": "Q5 2.0 16V TFSI Quattro S Tronic",
    "marca": "Audi",
    "cod_fipe": "008134-5",
    "vendido": false
  },
  {
    "veiculo": "Q5 3.0 V6 TFSI 272cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008182-5",
    "vendido": false
  },
  {
    "veiculo": "Q5 3.2 FSI V6 Quattro S Tronic",
    "marca": "Audi",
    "cod_fipe": "008137-0",
    "vendido": false
  },
  {
    "veiculo": "Q7 3.0 V6 TFSI 333cv Quattro Tip. 5p",
    "marca": "Audi",
    "cod_fipe": "008152-3",
    "vendido": false
  },
  {
    "veiculo": "Q7 3.6 V6 284cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008129-9",
    "vendido": false
  },
  {
    "veiculo": "Q7 4.2 V8 40V 350cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008122-1",
    "vendido": false
  },
  {
    "veiculo": "R8 4.2 V8 426cv QUATTRO R-tronic",
    "marca": "Audi",
    "cod_fipe": "008147-7",
    "vendido": false
  },
  {
    "veiculo": "R8 5.2 V10 QUATTRO R-tronic/S-tronic",
    "marca": "Audi",
    "cod_fipe": "008146-9",
    "vendido": false
  },
  {
    "veiculo": "R8 GT 5.2 V10 560cv QUATTRO R-tronic",
    "marca": "Audi",
    "cod_fipe": "008158-2",
    "vendido": false
  },
  {
    "veiculo": "R8 Spyder 5.2 QUATTRO R-tronic/S-tronic",
    "marca": "Audi",
    "cod_fipe": "008155-8",
    "vendido": false
  },
  {
    "veiculo": "RS Q3 2.5 TFSI Quattro S-tronic 5p",
    "marca": "Audi",
    "cod_fipe": "008193-0",
    "vendido": false
  },
  {
    "veiculo": "RS3 Sportback 2.5 TFSI Quattro S-tronic",
    "marca": "Audi",
    "cod_fipe": "008157-4",
    "vendido": false
  },
  {
    "veiculo": "RS4 2.7 Avant V6 30V BI-TB Quattro 380cv",
    "marca": "Audi",
    "cod_fipe": "008100-0",
    "vendido": false
  },
  {
    "veiculo": "RS4 4.2 Avant 32V FSI Quattro S-tronic ",
    "marca": "Audi",
    "cod_fipe": "008183-3",
    "vendido": false
  },
  {
    "veiculo": "RS5 4.2 FSI V8 450cv Quattro S-Tron. 2p",
    "marca": "Audi",
    "cod_fipe": "008151-5",
    "vendido": false
  },
  {
    "veiculo": "RS6 4.0 Avant FSI BI-TB Quattro Tip. 5p",
    "marca": "Audi",
    "cod_fipe": "008189-2",
    "vendido": false
  },
  {
    "veiculo": "RS6 4.2 450cv BI-TB Quattro Tiptronic 4p",
    "marca": "Audi",
    "cod_fipe": "008112-4",
    "vendido": false
  },
  {
    "veiculo": "RS6 4.2 Avant  BI-TB Quattro Tiptron. 5p",
    "marca": "Audi",
    "cod_fipe": "008111-6",
    "vendido": false
  },
  {
    "veiculo": "RS6 5.0 Avant.FSI V10 Bi-TB Quattro Tip.",
    "marca": "Audi",
    "cod_fipe": "008149-3",
    "vendido": false
  },
  {
    "veiculo": "RS6 5.0 FSI V10 Bi-TB Quattro Tip.",
    "marca": "Audi",
    "cod_fipe": "008148-5",
    "vendido": false
  },
  {
    "veiculo": "RS7 Sportback 4.0 TFSI Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008194-9",
    "vendido": false
  },
  {
    "veiculo": "S Q5 3.0 V6 TFSI 354cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008191-4",
    "vendido": false
  },
  {
    "veiculo": "S3 1.8 225cv Turbo Quattro",
    "marca": "Audi",
    "cod_fipe": "008066-7",
    "vendido": false
  },
  {
    "veiculo": "S3 Sedan 2.0 TFSI Quattro 286cv S-tronic",
    "marca": "Audi",
    "cod_fipe": "008196-5",
    "vendido": false
  },
  {
    "veiculo": "S3 Sportback 2.0 TFSI Quattro S Tronic",
    "marca": "Audi",
    "cod_fipe": "008140-0",
    "vendido": false
  },
  {
    "veiculo": "S4 2.7 Avant Turbo Quattro",
    "marca": "Audi",
    "cod_fipe": "008069-1",
    "vendido": false
  },
  {
    "veiculo": "S4 2.7 Turbo Quattro Mec.",
    "marca": "Audi",
    "cod_fipe": "008063-2",
    "vendido": false
  },
  {
    "veiculo": "S4 3.0 Avant TFSI V6 24V Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008163-9",
    "vendido": false
  },
  {
    "veiculo": "S4 3.0 TFSI V6 24V Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008162-0",
    "vendido": false
  },
  {
    "veiculo": "S4 4.2 Avant V8 40V 344cv Quattro Tipt.",
    "marca": "Audi",
    "cod_fipe": "008114-0",
    "vendido": false
  },
  {
    "veiculo": "S4 4.2 V8 40V 344cv Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008113-2",
    "vendido": false
  },
  {
    "veiculo": "S5 Cabriolet 3.0 TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008168-0",
    "vendido": false
  },
  {
    "veiculo": "S5 Coupê 3.0 TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008167-1",
    "vendido": false
  },
  {
    "veiculo": "S5 Sportback 3.0 TFSI Quattro Stronic",
    "marca": "Audi",
    "cod_fipe": "008166-3",
    "vendido": false
  },
  {
    "veiculo": "S6 2.2 20V TB",
    "marca": "Audi",
    "cod_fipe": "008038-1",
    "vendido": false
  },
  {
    "veiculo": "S6 2.2 Avant 20V TB",
    "marca": "Audi",
    "cod_fipe": "008078-0",
    "vendido": false
  },
  {
    "veiculo": "S6 4.0 TFSI Quattro S-Tronic 4p",
    "marca": "Audi",
    "cod_fipe": "008202-3",
    "vendido": false
  },
  {
    "veiculo": "S6 4.2 Avant V8 40V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008097-7",
    "vendido": false
  },
  {
    "veiculo": "S6 4.2 V8 40V Quattro Mec",
    "marca": "Audi",
    "cod_fipe": "008099-3",
    "vendido": false
  },
  {
    "veiculo": "S6 4.2 V8 40V Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008098-5",
    "vendido": false
  },
  {
    "veiculo": "S6 5.2 Avant FSI V10 435cv QUATTRO Tiptr",
    "marca": "Audi",
    "cod_fipe": "008144-2",
    "vendido": false
  },
  {
    "veiculo": "S6 5.2 FSI V10 435cv QUATTRO Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008143-4",
    "vendido": false
  },
  {
    "veiculo": "S6 Plus 4.2 Avant V8 32V",
    "marca": "Audi",
    "cod_fipe": "008016-0",
    "vendido": false
  },
  {
    "veiculo": "S6 Plus 4.2 V8 32V",
    "marca": "Audi",
    "cod_fipe": "008039-0",
    "vendido": false
  },
  {
    "veiculo": "S7 4.0 TFSI 420/450cv Quattro S-tronic",
    "marca": "Audi",
    "cod_fipe": "008188-4",
    "vendido": false
  },
  {
    "veiculo": "S8 4.0 TFSI 520cv Quattro Tiptronic 4p",
    "marca": "Audi",
    "cod_fipe": "008198-1",
    "vendido": false
  },
  {
    "veiculo": "S8 4.2 Mec",
    "marca": "Audi",
    "cod_fipe": "008028-4",
    "vendido": false
  },
  {
    "veiculo": "S8 4.2 Quattro Mec.",
    "marca": "Audi",
    "cod_fipe": "008064-0",
    "vendido": false
  },
  {
    "veiculo": "S8 4.2 Quattro Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008065-9",
    "vendido": false
  },
  {
    "veiculo": "S8 4.2 Tiptronic",
    "marca": "Audi",
    "cod_fipe": "008029-2",
    "vendido": false
  },
  {
    "veiculo": "TT 1.8 TB 180cv",
    "marca": "Audi",
    "cod_fipe": "008034-9",
    "vendido": false
  },
  {
    "veiculo": "TT 1.8 TB QUATTRO 225cv",
    "marca": "Audi",
    "cod_fipe": "008035-7",
    "vendido": false
  },
  {
    "veiculo": "TT 2.0 16v TFSI S-Tronic",
    "marca": "Audi",
    "cod_fipe": "008126-4",
    "vendido": false
  },
  {
    "veiculo": "TT Roadster 1.8 TB QUATTRO 225cv (Conv.)",
    "marca": "Audi",
    "cod_fipe": "008075-6",
    "vendido": false
  },
  {
    "veiculo": "TT Roadster 2.0 16v TFSI S-Tronic",
    "marca": "Audi",
    "cod_fipe": "008127-2",
    "vendido": false
  },
  {
    "veiculo": "TTRS 2.5 TB FSI QUATTRO S Tronic",
    "marca": "Audi",
    "cod_fipe": "008176-0",
    "vendido": false
  },
  {
    "veiculo": "TTRS Roadster 2.5 TB FSI QUATTRO STronic",
    "marca": "Audi",
    "cod_fipe": "008175-2",
    "vendido": false
  },
  {
    "veiculo": "TTS 2.0 TFSI QUATTRO S Tronic",
    "marca": "Audi",
    "cod_fipe": "008141-8",
    "vendido": false
  },
  {
    "veiculo": "TTS Roadster 2.0 TB FSI QUATTRO S Tronic",
    "marca": "Audi",
    "cod_fipe": "008142-6",
    "vendido": false
  },
  {
    "veiculo": "116iA 1.6 TB 16V 136cv 5p",
    "marca": "BMW",
    "cod_fipe": "009171-5",
    "vendido": false
  },
  {
    "veiculo": "118iA 2.0 16V 136cv 3p",
    "marca": "BMW",
    "cod_fipe": "009152-9",
    "vendido": false
  },
  {
    "veiculo": "118iA 2.0 16V 136cv 5p",
    "marca": "BMW",
    "cod_fipe": "009136-7",
    "vendido": false
  },
  {
    "veiculo": "118iA Full 1.6 TB 16V 170cv 5p",
    "marca": "BMW",
    "cod_fipe": "009169-3",
    "vendido": false
  },
  {
    "veiculo": "118iA/ Urban/Sport 1.6 TB 16V 170cv 5p",
    "marca": "BMW",
    "cod_fipe": "009159-6",
    "vendido": false
  },
  {
    "veiculo": "120i 2.0 16V 150cv/ 156cv 5p",
    "marca": "BMW",
    "cod_fipe": "009106-5",
    "vendido": false
  },
  {
    "veiculo": "120iA 2.0 16V 150cv/ 156cv 5p",
    "marca": "BMW",
    "cod_fipe": "009105-7",
    "vendido": false
  },
  {
    "veiculo": "120iA 2.0 16V 156cv 3p",
    "marca": "BMW",
    "cod_fipe": "009129-4",
    "vendido": false
  },
  {
    "veiculo": "120iA Cabrio 2.0 16V 156cv 2p",
    "marca": "BMW",
    "cod_fipe": "009130-8",
    "vendido": false
  },
  {
    "veiculo": "120iA Sport 2.0 ActiveFlex 16V Aut.",
    "marca": "BMW",
    "cod_fipe": "009212-6",
    "vendido": false
  },
  {
    "veiculo": "125i M Sport/Active Flex 2.0 TB Aut. 5p",
    "marca": "BMW",
    "cod_fipe": "009176-6",
    "vendido": false
  },
  {
    "veiculo": "130i 3.0 24V 265cv 5p",
    "marca": "BMW",
    "cod_fipe": "009109-0",
    "vendido": false
  },
  {
    "veiculo": "130iA 3.0 24V 265cv 3p",
    "marca": "BMW",
    "cod_fipe": "009126-0",
    "vendido": false
  },
  {
    "veiculo": "130iA 3.0 24V 265cv 5p",
    "marca": "BMW",
    "cod_fipe": "009117-0",
    "vendido": false
  },
  {
    "veiculo": "135iA Coupé 3.0 24V 306cv",
    "marca": "BMW",
    "cod_fipe": "009135-9",
    "vendido": false
  },
  {
    "veiculo": "220iTourer Active Flex 2.0 TB Aut.",
    "marca": "BMW",
    "cod_fipe": "009217-7",
    "vendido": false
  },
  {
    "veiculo": "225i Active Tourer Sport 2.0 TB Aut.",
    "marca": "BMW",
    "cod_fipe": "009208-8",
    "vendido": false
  },
  {
    "veiculo": "316 (todas)",
    "marca": "BMW",
    "cod_fipe": "009059-0",
    "vendido": false
  },
  {
    "veiculo": "316i 1.6 TB 16V 136cv 4p",
    "marca": "BMW",
    "cod_fipe": "009189-8",
    "vendido": false
  },
  {
    "veiculo": "318i Cabrio 1.8 16V",
    "marca": "BMW",
    "cod_fipe": "009062-0",
    "vendido": false
  },
  {
    "veiculo": "318i/iA 1.8 16V",
    "marca": "BMW",
    "cod_fipe": "009001-8",
    "vendido": false
  },
  {
    "veiculo": "318i/iA Compact 1.8 16V",
    "marca": "BMW",
    "cod_fipe": "009061-1",
    "vendido": false
  },
  {
    "veiculo": "318iA 2.0 16V 136cv 5p",
    "marca": "BMW",
    "cod_fipe": "009155-3",
    "vendido": false
  },
  {
    "veiculo": "318iS/ISA 1.9 16V",
    "marca": "BMW",
    "cod_fipe": "009002-6",
    "vendido": false
  },
  {
    "veiculo": "318Ti Compact Mec",
    "marca": "BMW",
    "cod_fipe": "009003-4",
    "vendido": false
  },
  {
    "veiculo": "318Ti/TiA Compact 1.9 16V",
    "marca": "BMW",
    "cod_fipe": "009060-3",
    "vendido": false
  },
  {
    "veiculo": "320i",
    "marca": "BMW",
    "cod_fipe": "009038-7",
    "vendido": false
  },
  {
    "veiculo": "320iA",
    "marca": "BMW",
    "cod_fipe": "009039-5",
    "vendido": false
  },
  {
    "veiculo": "320iA 2.0 TB M Sport ActiveFlex 16V 4p",
    "marca": "BMW",
    "cod_fipe": "009213-4",
    "vendido": false
  },
  {
    "veiculo": "320iA 2.0 Turbo/ActiveFlex 16V 184cv  4p",
    "marca": "BMW",
    "cod_fipe": "009164-2",
    "vendido": false
  },
  {
    "veiculo": "320iA GT Sport 2.0 Turbo 16V 184cv 5p",
    "marca": "BMW",
    "cod_fipe": "009185-5",
    "vendido": false
  },
  {
    "veiculo": "320iA Modern/Sport TB 2.0/A.Flex 16V 4p",
    "marca": "BMW",
    "cod_fipe": "009165-0",
    "vendido": false
  },
  {
    "veiculo": "323Ci Coupê",
    "marca": "BMW",
    "cod_fipe": "009057-3",
    "vendido": false
  },
  {
    "veiculo": "323CiA Coupê",
    "marca": "BMW",
    "cod_fipe": "009058-1",
    "vendido": false
  },
  {
    "veiculo": "323i 2.5 24V",
    "marca": "BMW",
    "cod_fipe": "009063-8",
    "vendido": false
  },
  {
    "veiculo": "323i Confort",
    "marca": "BMW",
    "cod_fipe": "009040-9",
    "vendido": false
  },
  {
    "veiculo": "323i Sport",
    "marca": "BMW",
    "cod_fipe": "009083-2",
    "vendido": false
  },
  {
    "veiculo": "323i Touring",
    "marca": "BMW",
    "cod_fipe": "009030-1",
    "vendido": false
  },
  {
    "veiculo": "323i/iA Exclusive",
    "marca": "BMW",
    "cod_fipe": "009042-5",
    "vendido": false
  },
  {
    "veiculo": "323iA 2.5 24V",
    "marca": "BMW",
    "cod_fipe": "009064-6",
    "vendido": false
  },
  {
    "veiculo": "323iA Confort",
    "marca": "BMW",
    "cod_fipe": "009041-7",
    "vendido": false
  },
  {
    "veiculo": "323iA Entry Sedan",
    "marca": "BMW",
    "cod_fipe": "009054-9",
    "vendido": false
  },
  {
    "veiculo": "323iA Sport",
    "marca": "BMW",
    "cod_fipe": "009043-3",
    "vendido": false
  },
  {
    "veiculo": "323iA Top Sedan",
    "marca": "BMW",
    "cod_fipe": "009056-5",
    "vendido": false
  },
  {
    "veiculo": "323iA Touring",
    "marca": "BMW",
    "cod_fipe": "009044-1",
    "vendido": false
  },
  {
    "veiculo": "323Ti Compact",
    "marca": "BMW",
    "cod_fipe": "009031-0",
    "vendido": false
  },
  {
    "veiculo": "323Ti Compact Sport",
    "marca": "BMW",
    "cod_fipe": "009032-8",
    "vendido": false
  },
  {
    "veiculo": "323TiA Compact Top",
    "marca": "BMW",
    "cod_fipe": "009033-6",
    "vendido": false
  },
  {
    "veiculo": "325i",
    "marca": "BMW",
    "cod_fipe": "009004-2",
    "vendido": false
  },
  {
    "veiculo": "325i/iA Cabrio",
    "marca": "BMW",
    "cod_fipe": "009005-0",
    "vendido": false
  },
  {
    "veiculo": "325iA",
    "marca": "BMW",
    "cod_fipe": "009036-0",
    "vendido": false
  },
  {
    "veiculo": "325iA 2.5 24V Protection",
    "marca": "BMW",
    "cod_fipe": "009094-8",
    "vendido": false
  },
  {
    "veiculo": "325iA Coupé 2.5 24V 2p",
    "marca": "BMW",
    "cod_fipe": "009091-3",
    "vendido": false
  },
  {
    "veiculo": "325iA Touring",
    "marca": "BMW",
    "cod_fipe": "009112-0",
    "vendido": false
  },
  {
    "veiculo": "328i Exclusive 2.8 24V",
    "marca": "BMW",
    "cod_fipe": "009066-2",
    "vendido": false
  },
  {
    "veiculo": "328i Touring/Sport",
    "marca": "BMW",
    "cod_fipe": "009034-4",
    "vendido": false
  },
  {
    "veiculo": "328i/iA   ( modelo antigo )",
    "marca": "BMW",
    "cod_fipe": "009006-9",
    "vendido": false
  },
  {
    "veiculo": "328i/iA (novo modelo)",
    "marca": "BMW",
    "cod_fipe": "009086-7",
    "vendido": false
  },
  {
    "veiculo": "328i/iA Cabrio",
    "marca": "BMW",
    "cod_fipe": "009022-0",
    "vendido": false
  },
  {
    "veiculo": "328iA 2.0 TB/2.0 TB Flex 16V 4p",
    "marca": "BMW",
    "cod_fipe": "009160-0",
    "vendido": false
  },
  {
    "veiculo": "328iA Exclusive 2.8 24V",
    "marca": "BMW",
    "cod_fipe": "009067-0",
    "vendido": false
  },
  {
    "veiculo": "328iA GT M Sport 2.0 Turbo 16V 245cv 5p",
    "marca": "BMW",
    "cod_fipe": "009187-1",
    "vendido": false
  },
  {
    "veiculo": "328iA Luxury/Modern 2.0 TB 16V 4p",
    "marca": "BMW",
    "cod_fipe": "009161-8",
    "vendido": false
  },
  {
    "veiculo": "328iA M Sport 2.0 16V Flex 4p",
    "marca": "BMW",
    "cod_fipe": "009215-0",
    "vendido": false
  },
  {
    "veiculo": "328iA Plus 2.0 TB 16V 245cv 4p",
    "marca": "BMW",
    "cod_fipe": "009163-4",
    "vendido": false
  },
  {
    "veiculo": "328iA Sport 2.0 16V/2.0 16V Flex 4p",
    "marca": "BMW",
    "cod_fipe": "009162-6",
    "vendido": false
  },
  {
    "veiculo": "328iA Touring/Sport",
    "marca": "BMW",
    "cod_fipe": "009065-4",
    "vendido": false
  },
  {
    "veiculo": "330Ci Cabriolet",
    "marca": "BMW",
    "cod_fipe": "009093-0",
    "vendido": false
  },
  {
    "veiculo": "330CiA Cabriolet",
    "marca": "BMW",
    "cod_fipe": "009087-5",
    "vendido": false
  },
  {
    "veiculo": "330i MotorSport 3.0 24V 4p",
    "marca": "BMW",
    "cod_fipe": "009092-1",
    "vendido": false
  },
  {
    "veiculo": "330iA Exclusive 3.0 24V 4p",
    "marca": "BMW",
    "cod_fipe": "009113-8",
    "vendido": false
  },
  {
    "veiculo": "330iA MotorSport 4p",
    "marca": "BMW",
    "cod_fipe": "009088-3",
    "vendido": false
  },
  {
    "veiculo": "330iA Top 4p",
    "marca": "BMW",
    "cod_fipe": "009089-1",
    "vendido": false
  },
  {
    "veiculo": "335i 3.0 ActiveHybrid 3",
    "marca": "BMW",
    "cod_fipe": "009182-0",
    "vendido": false
  },
  {
    "veiculo": "335iA 3.0 24V 306cv",
    "marca": "BMW",
    "cod_fipe": "009122-7",
    "vendido": false
  },
  {
    "veiculo": "335iA Cabriolet 3.0 24V 306cv",
    "marca": "BMW",
    "cod_fipe": "009124-3",
    "vendido": false
  },
  {
    "veiculo": "335iA M Sport 3.0 24V 306cv 4p",
    "marca": "BMW",
    "cod_fipe": "009184-7",
    "vendido": false
  },
  {
    "veiculo": "335iA Sport 3.0 24V 306cv 4p",
    "marca": "BMW",
    "cod_fipe": "009170-7",
    "vendido": false
  },
  {
    "veiculo": "420i Cabriolet Sport 2.0 TB 184cv 2p",
    "marca": "BMW",
    "cod_fipe": "009203-7",
    "vendido": false
  },
  {
    "veiculo": "428i Cabriolet Sport 2.0 TB 245cv 2p",
    "marca": "BMW",
    "cod_fipe": "009194-4",
    "vendido": false
  },
  {
    "veiculo": "428i Gran Coupe M Sport 2.0 TB 245cv",
    "marca": "BMW",
    "cod_fipe": "009201-0",
    "vendido": false
  },
  {
    "veiculo": "428i Gran Coupe Sport 2.0 TB 245cv",
    "marca": "BMW",
    "cod_fipe": "009202-9",
    "vendido": false
  },
  {
    "veiculo": "430i Cab. Sport Limited Ed.2.0 TB 2p",
    "marca": "BMW",
    "cod_fipe": "009220-7",
    "vendido": false
  },
  {
    "veiculo": "430i Cabriolet Sport 2.0 TB 252cv 2p",
    "marca": "BMW",
    "cod_fipe": "009224-0",
    "vendido": false
  },
  {
    "veiculo": "430i Gran Coupé M Sport TB 5p",
    "marca": "BMW",
    "cod_fipe": "009221-5",
    "vendido": false
  },
  {
    "veiculo": "435iA M Sport Coupe 3.0 24V 306cv 2p",
    "marca": "BMW",
    "cod_fipe": "009190-1",
    "vendido": false
  },
  {
    "veiculo": "520i 2.0 16V",
    "marca": "BMW",
    "cod_fipe": "009047-6",
    "vendido": false
  },
  {
    "veiculo": "525i/iA",
    "marca": "BMW",
    "cod_fipe": "009007-7",
    "vendido": false
  },
  {
    "veiculo": "525i/iA Touring",
    "marca": "BMW",
    "cod_fipe": "009068-9",
    "vendido": false
  },
  {
    "veiculo": "528i/iA",
    "marca": "BMW",
    "cod_fipe": "009008-5",
    "vendido": false
  },
  {
    "veiculo": "528iA 2.0 Turbo 16V 245cv 4p",
    "marca": "BMW",
    "cod_fipe": "009168-5",
    "vendido": false
  },
  {
    "veiculo": "528IA High",
    "marca": "BMW",
    "cod_fipe": "009023-9",
    "vendido": false
  },
  {
    "veiculo": "528iA M Sport 2.0 Turbo 16V 245cv 4p",
    "marca": "BMW",
    "cod_fipe": "009183-9",
    "vendido": false
  },
  {
    "veiculo": "528IA Touring",
    "marca": "BMW",
    "cod_fipe": "009024-7",
    "vendido": false
  },
  {
    "veiculo": "530i/iA",
    "marca": "BMW",
    "cod_fipe": "009009-3",
    "vendido": false
  },
  {
    "veiculo": "530i/iA Touring",
    "marca": "BMW",
    "cod_fipe": "009069-7",
    "vendido": false
  },
  {
    "veiculo": "535i/iA 3.5 24V",
    "marca": "BMW",
    "cod_fipe": "009037-9",
    "vendido": false
  },
  {
    "veiculo": "535iA 3.0 24V 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009146-4",
    "vendido": false
  },
  {
    "veiculo": "535iA GT 3.0 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009148-0",
    "vendido": false
  },
  {
    "veiculo": "535iA M Sport 3.0 24V 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009179-0",
    "vendido": false
  },
  {
    "veiculo": "540i",
    "marca": "BMW",
    "cod_fipe": "009010-7",
    "vendido": false
  },
  {
    "veiculo": "540i/iA Touring",
    "marca": "BMW",
    "cod_fipe": "009017-4",
    "vendido": false
  },
  {
    "veiculo": "540iA",
    "marca": "BMW",
    "cod_fipe": "009025-5",
    "vendido": false
  },
  {
    "veiculo": "540iA MotorSport",
    "marca": "BMW",
    "cod_fipe": "009084-0",
    "vendido": false
  },
  {
    "veiculo": "540iA Protection",
    "marca": "BMW",
    "cod_fipe": "009026-3",
    "vendido": false
  },
  {
    "veiculo": "540iTA",
    "marca": "BMW",
    "cod_fipe": "009052-2",
    "vendido": false
  },
  {
    "veiculo": "545iA 4.4 32V V8 333cv",
    "marca": "BMW",
    "cod_fipe": "009102-2",
    "vendido": false
  },
  {
    "veiculo": "550iA 4.4 32V 407cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009147-2",
    "vendido": false
  },
  {
    "veiculo": "550iA 4.8 32V",
    "marca": "BMW",
    "cod_fipe": "009110-3",
    "vendido": false
  },
  {
    "veiculo": "550iA Limited Sport Edition 4.8 32V",
    "marca": "BMW",
    "cod_fipe": "009137-5",
    "vendido": false
  },
  {
    "veiculo": "550iA Security 4.8 32V",
    "marca": "BMW",
    "cod_fipe": "009125-1",
    "vendido": false
  },
  {
    "veiculo": "640i Gran Coupe 3.0 320cv 4p",
    "marca": "BMW",
    "cod_fipe": "009177-4",
    "vendido": false
  },
  {
    "veiculo": "645Ci Cabriolet 4.4 V8 32V 333cv",
    "marca": "BMW",
    "cod_fipe": "009111-1",
    "vendido": false
  },
  {
    "veiculo": "645iA 4.4 V8 32V 333cv",
    "marca": "BMW",
    "cod_fipe": "009103-0",
    "vendido": false
  },
  {
    "veiculo": "650Ci Cabriolet 4.4 407cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009158-8",
    "vendido": false
  },
  {
    "veiculo": "650Ci Cabriolet 4.8 V8 32V 360cv",
    "marca": "BMW",
    "cod_fipe": "009115-4",
    "vendido": false
  },
  {
    "veiculo": "650i Gran Coupe 4.4 V8 450cv 4p",
    "marca": "BMW",
    "cod_fipe": "009188-0",
    "vendido": false
  },
  {
    "veiculo": "650iA 4.4 407cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009166-9",
    "vendido": false
  },
  {
    "veiculo": "650iA 4.8 V8 32V 360cv",
    "marca": "BMW",
    "cod_fipe": "009114-6",
    "vendido": false
  },
  {
    "veiculo": "650iA Limited Sport  Edition 4.8 32V",
    "marca": "BMW",
    "cod_fipe": "009141-3",
    "vendido": false
  },
  {
    "veiculo": "730i 3.0 32V",
    "marca": "BMW",
    "cod_fipe": "009048-4",
    "vendido": false
  },
  {
    "veiculo": "730iA 3.0 32V",
    "marca": "BMW",
    "cod_fipe": "009049-2",
    "vendido": false
  },
  {
    "veiculo": "735i/iA 3.5 32V",
    "marca": "BMW",
    "cod_fipe": "009070-0",
    "vendido": false
  },
  {
    "veiculo": "740i",
    "marca": "BMW",
    "cod_fipe": "009011-5",
    "vendido": false
  },
  {
    "veiculo": "740iA",
    "marca": "BMW",
    "cod_fipe": "009027-1",
    "vendido": false
  },
  {
    "veiculo": "740iL/iLA Highline 4.4 32V",
    "marca": "BMW",
    "cod_fipe": "009072-7",
    "vendido": false
  },
  {
    "veiculo": "740iLA Protection",
    "marca": "BMW",
    "cod_fipe": "009053-0",
    "vendido": false
  },
  {
    "veiculo": "745iA 4.4 V8 32V 333cv",
    "marca": "BMW",
    "cod_fipe": "009096-4",
    "vendido": false
  },
  {
    "veiculo": "750i",
    "marca": "BMW",
    "cod_fipe": "009012-3",
    "vendido": false
  },
  {
    "veiculo": "750i M Sport Sedan 4.4 V8 450cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009211-8",
    "vendido": false
  },
  {
    "veiculo": "750iA",
    "marca": "BMW",
    "cod_fipe": "009028-0",
    "vendido": false
  },
  {
    "veiculo": "750iL Highline 5.4 24V",
    "marca": "BMW",
    "cod_fipe": "009071-9",
    "vendido": false
  },
  {
    "veiculo": "750iL M Sport Sedan 4.4 V8 450cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009219-3",
    "vendido": false
  },
  {
    "veiculo": "750iLA 4.4 ActiveHybrid 7",
    "marca": "BMW",
    "cod_fipe": "009154-5",
    "vendido": false
  },
  {
    "veiculo": "760iL 6.0 V12 445cv/544cv",
    "marca": "BMW",
    "cod_fipe": "009099-9",
    "vendido": false
  },
  {
    "veiculo": "840Ci",
    "marca": "BMW",
    "cod_fipe": "009050-6",
    "vendido": false
  },
  {
    "veiculo": "840CiA",
    "marca": "BMW",
    "cod_fipe": "009051-4",
    "vendido": false
  },
  {
    "veiculo": "850Ci/CiA 5.0 24V",
    "marca": "BMW",
    "cod_fipe": "009077-8",
    "vendido": false
  },
  {
    "veiculo": "850Ci/CiA 5.4 24V",
    "marca": "BMW",
    "cod_fipe": "009078-6",
    "vendido": false
  },
  {
    "veiculo": "850CSi 5.6 24V",
    "marca": "BMW",
    "cod_fipe": "009076-0",
    "vendido": false
  },
  {
    "veiculo": "850i 5.0 24V",
    "marca": "BMW",
    "cod_fipe": "009013-1",
    "vendido": false
  },
  {
    "veiculo": "i3 Rex E Drive 170cv Aut.(Elétrico)",
    "marca": "BMW",
    "cod_fipe": "009196-0",
    "vendido": false
  },
  {
    "veiculo": "i3 Rex E Drive Full 170cv Aut.(Elétrico)",
    "marca": "BMW",
    "cod_fipe": "009195-2",
    "vendido": false
  },
  {
    "veiculo": "i8 e-Drive 1.5 TB 12V 362cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009197-9",
    "vendido": false
  },
  {
    "veiculo": "M 135i 3.0 24V 320cv",
    "marca": "BMW",
    "cod_fipe": "009178-2",
    "vendido": false
  },
  {
    "veiculo": "M 235i Coupe 3.0 24V 326cv",
    "marca": "BMW",
    "cod_fipe": "009193-6",
    "vendido": false
  },
  {
    "veiculo": "M 240i Coupe 3.0 24V 340cv 2p",
    "marca": "BMW",
    "cod_fipe": "009223-1",
    "vendido": false
  },
  {
    "veiculo": "M Roadster",
    "marca": "BMW",
    "cod_fipe": "009079-4",
    "vendido": false
  },
  {
    "veiculo": "M1 Coupê 3.0 24V 340cv",
    "marca": "BMW",
    "cod_fipe": "009157-0",
    "vendido": false
  },
  {
    "veiculo": "M140i 3.0  24v 340cv 5p",
    "marca": "BMW",
    "cod_fipe": "009222-3",
    "vendido": false
  },
  {
    "veiculo": "M2 Coupe 3.0 Turbo 24V 370cv",
    "marca": "BMW",
    "cod_fipe": "009218-5",
    "vendido": false
  },
  {
    "veiculo": "M3 3.2 24V",
    "marca": "BMW",
    "cod_fipe": "009073-5",
    "vendido": false
  },
  {
    "veiculo": "M3 Cabrio 3.0 24V",
    "marca": "BMW",
    "cod_fipe": "009074-3",
    "vendido": false
  },
  {
    "veiculo": "M3 Cabrio 4.0 32V",
    "marca": "BMW",
    "cod_fipe": "009134-0",
    "vendido": false
  },
  {
    "veiculo": "M3 Coupê 3.0 24V 255cv",
    "marca": "BMW",
    "cod_fipe": "009014-0",
    "vendido": false
  },
  {
    "veiculo": "M3 Coupê 3.0 V6 24V 282cv",
    "marca": "BMW",
    "cod_fipe": "009029-8",
    "vendido": false
  },
  {
    "veiculo": "M3 Coupê 4.0 32V",
    "marca": "BMW",
    "cod_fipe": "009127-8",
    "vendido": false
  },
  {
    "veiculo": "M3 Sedan 3.0 Bi-Turbo 24V 4p",
    "marca": "BMW",
    "cod_fipe": "009209-6",
    "vendido": false
  },
  {
    "veiculo": "M3 Sedan 4.0 32V",
    "marca": "BMW",
    "cod_fipe": "009133-2",
    "vendido": false
  },
  {
    "veiculo": "M4 Cabriolet 3.0 Bi-Turbo 24V 431cv 2p",
    "marca": "BMW",
    "cod_fipe": "009210-0",
    "vendido": false
  },
  {
    "veiculo": "M4 Coupe 3.0 Bi-Turbo 24V 431cv 2p",
    "marca": "BMW",
    "cod_fipe": "009206-1",
    "vendido": false
  },
  {
    "veiculo": "M5 3.8/Touring 3.8 24V",
    "marca": "BMW",
    "cod_fipe": "009015-8",
    "vendido": false
  },
  {
    "veiculo": "M5 4.4 560cv Bi-Turbo Aut.",
    "marca": "BMW",
    "cod_fipe": "009173-1",
    "vendido": false
  },
  {
    "veiculo": "M5 5.0 32V/ 40V",
    "marca": "BMW",
    "cod_fipe": "009075-1",
    "vendido": false
  },
  {
    "veiculo": "M6 5.0 V10 40V 507cv",
    "marca": "BMW",
    "cod_fipe": "009108-1",
    "vendido": false
  },
  {
    "veiculo": "M6 Coupe 4.4 Bi-Turbo V8 32V",
    "marca": "BMW",
    "cod_fipe": "009181-2",
    "vendido": false
  },
  {
    "veiculo": "M6 Gran Coupe 4.4 Bi-Turbo V8 32V 560cv",
    "marca": "BMW",
    "cod_fipe": "009186-3",
    "vendido": false
  },
  {
    "veiculo": "X1 SDRIVE 18i 2.0 16V 4x2 Aut.",
    "marca": "BMW",
    "cod_fipe": "009145-6",
    "vendido": false
  },
  {
    "veiculo": "X1 SDRIVE 20i 2.0/2.0 TB Acti.Flex Aut.",
    "marca": "BMW",
    "cod_fipe": "009172-3",
    "vendido": false
  },
  {
    "veiculo": "X1 XDRIVE 25i Sport 2.0/2.0 Flex Aut.",
    "marca": "BMW",
    "cod_fipe": "009216-9",
    "vendido": false
  },
  {
    "veiculo": "X1 XDRIVE 28i 2.0 Turbo 16V 4x4 Aut.",
    "marca": "BMW",
    "cod_fipe": "009167-7",
    "vendido": false
  },
  {
    "veiculo": "X1 XDRIVE 28i 3.0 24V 4x4 Aut.",
    "marca": "BMW",
    "cod_fipe": "009142-1",
    "vendido": false
  },
  {
    "veiculo": "X1 XDRIVE 28i Sport 2.0 ActiveFlex Aut.",
    "marca": "BMW",
    "cod_fipe": "009200-2",
    "vendido": false
  },
  {
    "veiculo": "X3 Family 2.5 24V 192cv/ 218cv",
    "marca": "BMW",
    "cod_fipe": "009104-9",
    "vendido": false
  },
  {
    "veiculo": "X3 Family 3.0 24V 231cv",
    "marca": "BMW",
    "cod_fipe": "009101-4",
    "vendido": false
  },
  {
    "veiculo": "X3 Sport 2.5 24V 192cv/ 218cv",
    "marca": "BMW",
    "cod_fipe": "009118-9",
    "vendido": false
  },
  {
    "veiculo": "X3 Sport 3.0 24V 231cv",
    "marca": "BMW",
    "cod_fipe": "009100-6",
    "vendido": false
  },
  {
    "veiculo": "X3 XDRIVE 20i 2.0/X-Line Bi-TB Flex Aut.",
    "marca": "BMW",
    "cod_fipe": "009180-4",
    "vendido": false
  },
  {
    "veiculo": "X3 XDRIVE 28i 2.0 Turbo 245cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009175-8",
    "vendido": false
  },
  {
    "veiculo": "X3 XDRIVE 28i 3.0 258cv",
    "marca": "BMW",
    "cod_fipe": "009156-1",
    "vendido": false
  },
  {
    "veiculo": "X3 XDRIVE 35i/M-Sport 3.0 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009151-0",
    "vendido": false
  },
  {
    "veiculo": "X4 XDRIVE 28i X-Line 2.0 Turbo 245cv Aut",
    "marca": "BMW",
    "cod_fipe": "009198-7",
    "vendido": false
  },
  {
    "veiculo": "X4 XDRIVE 35i M-Sport 3.0 TB 306cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009199-5",
    "vendido": false
  },
  {
    "veiculo": "X5 3.0 4x4",
    "marca": "BMW",
    "cod_fipe": "009081-6",
    "vendido": false
  },
  {
    "veiculo": "X5 4.4 4x4",
    "marca": "BMW",
    "cod_fipe": "009082-4",
    "vendido": false
  },
  {
    "veiculo": "X5 4.8 4x4 V8 32V 360cv",
    "marca": "BMW",
    "cod_fipe": "009107-3",
    "vendido": false
  },
  {
    "veiculo": "X5 Endurance 4.8is 4x4 V8 32V 355cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009128-6",
    "vendido": false
  },
  {
    "veiculo": "X5 M 4.4 4x4 V8 32V 555cv Bi-Turbo Aut.",
    "marca": "BMW",
    "cod_fipe": "009143-0",
    "vendido": false
  },
  {
    "veiculo": "X5 Security 4.4 4x4 V8 32V",
    "marca": "BMW",
    "cod_fipe": "009119-7",
    "vendido": false
  },
  {
    "veiculo": "X5 Security 4.8is 4x4 V8 32V 355cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009140-5",
    "vendido": false
  },
  {
    "veiculo": "X5 Sport 4.4 4x4 V8 32V",
    "marca": "BMW",
    "cod_fipe": "009095-6",
    "vendido": false
  },
  {
    "veiculo": "X5 Sport 4.8 4x4 V8 32V 355cv",
    "marca": "BMW",
    "cod_fipe": "009123-5",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 30d 3.0 258cv Diesel",
    "marca": "BMW",
    "cod_fipe": "009214-2",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 30d Full 3.0 258cv Diesel",
    "marca": "BMW",
    "cod_fipe": "009205-3",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 35i 3.0 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009149-9",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 35i Full 3.0 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009192-8",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 50i 4.4  Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009150-2",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 50i M Sport 4.4 Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009191-0",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE 50i Security 4.4 Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009153-7",
    "vendido": false
  },
  {
    "veiculo": "X5 XDRIVE M50d 3.0 381cv Diesel",
    "marca": "BMW",
    "cod_fipe": "009207-0",
    "vendido": false
  },
  {
    "veiculo": "X6 M 4.4 4x4 V8 32V Bi-Turbo Aut.",
    "marca": "BMW",
    "cod_fipe": "009144-8",
    "vendido": false
  },
  {
    "veiculo": "X6 XDRIVE 35i 3.0 306cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009131-6",
    "vendido": false
  },
  {
    "veiculo": "X6 XDRIVE 50i 4.4 407cv Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009132-4",
    "vendido": false
  },
  {
    "veiculo": "X6 XDRIVE 50i M Sport 4.4 Bi-Turbo",
    "marca": "BMW",
    "cod_fipe": "009204-5",
    "vendido": false
  },
  {
    "veiculo": "Z3 2.8 Aut",
    "marca": "BMW",
    "cod_fipe": "009020-4",
    "vendido": false
  },
  {
    "veiculo": "Z3 2.8 Mec",
    "marca": "BMW",
    "cod_fipe": "009019-0",
    "vendido": false
  },
  {
    "veiculo": "Z3 3.0 24V Roadster 2p",
    "marca": "BMW",
    "cod_fipe": "009085-9",
    "vendido": false
  },
  {
    "veiculo": "Z3 Roadster 1.9 Mec",
    "marca": "BMW",
    "cod_fipe": "009016-6",
    "vendido": false
  },
  {
    "veiculo": "Z3 Roadster 2.8",
    "marca": "BMW",
    "cod_fipe": "009021-2",
    "vendido": false
  },
  {
    "veiculo": "Z3 Roadster M 3.2",
    "marca": "BMW",
    "cod_fipe": "009018-2",
    "vendido": false
  },
  {
    "veiculo": "Z4 Coupé M 3.2 V6 24V 343cv",
    "marca": "BMW",
    "cod_fipe": "009121-9",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster 2.0 150cv 2p",
    "marca": "BMW",
    "cod_fipe": "009116-2",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster 3.0 V6 24V Aut.",
    "marca": "BMW",
    "cod_fipe": "009097-2",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster M 3.2 V6 24V 343cv",
    "marca": "BMW",
    "cod_fipe": "009120-0",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster sDRIVE 20i 2.0 16V 2p Aut",
    "marca": "BMW",
    "cod_fipe": "009174-0",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster sDRIVE 23i 2.5 24V 204cv 2p",
    "marca": "BMW",
    "cod_fipe": "009138-3",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster sDRIVE 35i 3.0 24V 306cv 2p",
    "marca": "BMW",
    "cod_fipe": "009139-1",
    "vendido": false
  },
  {
    "veiculo": "Z4 Roadster Sport 3.0 24V 231cv Aut.",
    "marca": "BMW",
    "cod_fipe": "009098-0",
    "vendido": false
  },
  {
    "veiculo": "Z8 5.0 V8",
    "marca": "BMW",
    "cod_fipe": "009090-5",
    "vendido": false
  },
  {
    "veiculo": "Buggy W. Turing/Luxo/M-11 Absolut 1.6 8V",
    "marca": "BRM",
    "cod_fipe": "039002-0",
    "vendido": false
  },
  {
    "veiculo": "Buggy/M-8/M-8 Long 1.6",
    "marca": "BRM",
    "cod_fipe": "039001-1",
    "vendido": false
  },
  {
    "veiculo": "Buggy 1.6 2-Lug.",
    "marca": "Buggy",
    "cod_fipe": "040001-7",
    "vendido": false
  },
  {
    "veiculo": "Buggy 1.6/ TST/ RS 1.6 4-Lug.",
    "marca": "Buggy",
    "cod_fipe": "040002-5",
    "vendido": false
  },
  {
    "veiculo": "Buggy IV e V",
    "marca": "Bugre",
    "cod_fipe": "062001-7",
    "vendido": false
  },
  {
    "veiculo": "Buggy VII/VII BIG",
    "marca": "Bugre",
    "cod_fipe": "062002-5",
    "vendido": false
  },
  {
    "veiculo": "Deville/Eldorado 4.9",
    "marca": "Cadillac",
    "cod_fipe": "041001-2",
    "vendido": false
  },
  {
    "veiculo": "Seville 4.6",
    "marca": "Cadillac",
    "cod_fipe": "041002-0",
    "vendido": false
  },
  {
    "veiculo": "Javali 3.0 4x4 Diesel",
    "marca": "CBT Jipe",
    "cod_fipe": "042001-8",
    "vendido": false
  },
  {
    "veiculo": "Cargo 1.0 8V 53cv (Pick-Up)",
    "marca": "CHANA",
    "cod_fipe": "064002-6",
    "vendido": false
  },
  {
    "veiculo": "Cargo CD 1.0 8V 53cv (Pick-Up)",
    "marca": "CHANA",
    "cod_fipe": "064004-2",
    "vendido": false
  },
  {
    "veiculo": "Cargo CE 1.0 8V 53cv (Pick-Up)",
    "marca": "CHANA",
    "cod_fipe": "064003-4",
    "vendido": false
  },
  {
    "veiculo": "Family 1.0 8V 53cv (Perua)",
    "marca": "CHANA",
    "cod_fipe": "064001-8",
    "vendido": false
  },
  {
    "veiculo": "Utility 1.0 8V 53cv  (Furgão)",
    "marca": "CHANA",
    "cod_fipe": "064005-0",
    "vendido": false
  },
  {
    "veiculo": "MINI STAR CD 1.0 8V 53cv (Pick-Up)",
    "marca": "CHANGAN",
    "cod_fipe": "081004-5",
    "vendido": false
  },
  {
    "veiculo": "MINI STAR CE 1.0 8V 53cv (Pick-Up)",
    "marca": "CHANGAN",
    "cod_fipe": "081003-7",
    "vendido": false
  },
  {
    "veiculo": "MINI STAR CS 1.0 8V 53cv (Pick-Up)",
    "marca": "CHANGAN",
    "cod_fipe": "081001-0",
    "vendido": false
  },
  {
    "veiculo": "MINI STAR CSB 1.0 8V 53cv (Pick-Up Báu)",
    "marca": "CHANGAN",
    "cod_fipe": "081002-9",
    "vendido": false
  },
  {
    "veiculo": "MINI STAR Family 1.0 8V 53cv (MiniVan)",
    "marca": "CHANGAN",
    "cod_fipe": "081006-1",
    "vendido": false
  },
  {
    "veiculo": "MINI STAR Utility 1.0 8V 53cv (Furgão)",
    "marca": "CHANGAN",
    "cod_fipe": "081005-3",
    "vendido": false
  },
  {
    "veiculo": "Celer Hatch 1.5 16V Flex 5p",
    "marca": "CHERY",
    "cod_fipe": "073007-6",
    "vendido": false
  },
  {
    "veiculo": "Celer Hatch ACT 1.5 16V Flex 5p",
    "marca": "CHERY",
    "cod_fipe": "073012-2",
    "vendido": false
  },
  {
    "veiculo": "Celer Sedan 1.5 16V Flex 5p",
    "marca": "CHERY",
    "cod_fipe": "073008-4",
    "vendido": false
  },
  {
    "veiculo": "Celer Sedan ACT 1.5 16V Flex 5p",
    "marca": "CHERY",
    "cod_fipe": "073013-0",
    "vendido": false
  },
  {
    "veiculo": "CIELO 1.6 16V 119cv  5p",
    "marca": "CHERY",
    "cod_fipe": "073003-3",
    "vendido": false
  },
  {
    "veiculo": "CIELO Sedan 1.6 16V 119cv  4p",
    "marca": "CHERY",
    "cod_fipe": "073004-1",
    "vendido": false
  },
  {
    "veiculo": "Face 1.3 16V/1.3 16v Flex.Mec ",
    "marca": "CHERY",
    "cod_fipe": "073002-5",
    "vendido": false
  },
  {
    "veiculo": "QQ 1.0 ACT 12V 69cv 5p",
    "marca": "CHERY",
    "cod_fipe": "073010-6",
    "vendido": false
  },
  {
    "veiculo": "QQ 1.0 ACT FL 12V 69cv 5p",
    "marca": "CHERY",
    "cod_fipe": "073014-9",
    "vendido": false
  },
  {
    "veiculo": "QQ 1.0 Look FL 12V 69cv 5p",
    "marca": "CHERY",
    "cod_fipe": "073011-4",
    "vendido": false
  },
  {
    "veiculo": "QQ 1.1/1.0 12V 69cv 5p",
    "marca": "CHERY",
    "cod_fipe": "073005-0",
    "vendido": false
  },
  {
    "veiculo": "S-18 1.3 16V Flex Mec. 5p",
    "marca": "CHERY",
    "cod_fipe": "073006-8",
    "vendido": false
  },
  {
    "veiculo": "Tiggo 2.0 16V Aut. 5p",
    "marca": "CHERY",
    "cod_fipe": "073009-2",
    "vendido": false
  },
  {
    "veiculo": "Tiggo 2.0 16V Mec. 5p",
    "marca": "CHERY",
    "cod_fipe": "073001-7",
    "vendido": false
  },
  {
    "veiculo": "300 C 3.5 V6 249cv",
    "marca": "Chrysler",
    "cod_fipe": "010029-3",
    "vendido": false
  },
  {
    "veiculo": "300 C 3.6 V6 Aut.",
    "marca": "Chrysler",
    "cod_fipe": "010033-1",
    "vendido": false
  },
  {
    "veiculo": "300 C 5.7 V8 16V 340cv Aut.",
    "marca": "Chrysler",
    "cod_fipe": "010024-2",
    "vendido": false
  },
  {
    "veiculo": "300 C SRT8 6.1 V8 16V 431cv Aut",
    "marca": "Chrysler",
    "cod_fipe": "010027-7",
    "vendido": false
  },
  {
    "veiculo": "300 C Touring 5.7 V8 16V 340cv Aut.",
    "marca": "Chrysler",
    "cod_fipe": "010026-9",
    "vendido": false
  },
  {
    "veiculo": "300 M 3.5",
    "marca": "Chrysler",
    "cod_fipe": "010014-5",
    "vendido": false
  },
  {
    "veiculo": "Caravan LE  3.3",
    "marca": "Chrysler",
    "cod_fipe": "010008-0",
    "vendido": false
  },
  {
    "veiculo": "Caravan LX 3.3 V6 182cv",
    "marca": "Chrysler",
    "cod_fipe": "010023-4",
    "vendido": false
  },
  {
    "veiculo": "Caravan LX 3.8",
    "marca": "Chrysler",
    "cod_fipe": "010009-9",
    "vendido": false
  },
  {
    "veiculo": "Caravan SE 2.4/3.3",
    "marca": "Chrysler",
    "cod_fipe": "010001-3",
    "vendido": false
  },
  {
    "veiculo": "Cirrus LXi 2.5 V6 24V",
    "marca": "Chrysler",
    "cod_fipe": "010015-3",
    "vendido": false
  },
  {
    "veiculo": "Gran Caravan SE 3.3 V6",
    "marca": "Chrysler",
    "cod_fipe": "010016-1",
    "vendido": false
  },
  {
    "veiculo": "Grand Caravan LE 3.3 Aut",
    "marca": "Chrysler",
    "cod_fipe": "010007-2",
    "vendido": false
  },
  {
    "veiculo": "Grand Caravan Limited 3.3 V6 12V 182cv",
    "marca": "Chrysler",
    "cod_fipe": "010021-8",
    "vendido": false
  },
  {
    "veiculo": "Grand Caravan LX 3.8",
    "marca": "Chrysler",
    "cod_fipe": "010010-2",
    "vendido": false
  },
  {
    "veiculo": "LE Baron 3.0 V6",
    "marca": "Chrysler",
    "cod_fipe": "010017-0",
    "vendido": false
  },
  {
    "veiculo": "LE Baron 3.0 V6 Conv.",
    "marca": "Chrysler",
    "cod_fipe": "010018-8",
    "vendido": false
  },
  {
    "veiculo": "Neon LE 1.8",
    "marca": "Chrysler",
    "cod_fipe": "010011-0",
    "vendido": false
  },
  {
    "veiculo": "Neon LE/Highline 2.0",
    "marca": "Chrysler",
    "cod_fipe": "010002-1",
    "vendido": false
  },
  {
    "veiculo": "Neon Sport 1.8/2.0",
    "marca": "Chrysler",
    "cod_fipe": "010012-9",
    "vendido": false
  },
  {
    "veiculo": "PT Cruiser Cabrio 2.4 16V 143cv 2p",
    "marca": "Chrysler",
    "cod_fipe": "010028-5",
    "vendido": false
  },
  {
    "veiculo": "PT Cruiser Classic 2.4 16V 143cv 4p",
    "marca": "Chrysler",
    "cod_fipe": "010025-0",
    "vendido": false
  },
  {
    "veiculo": "PT Cruiser Limited 2.0 16V 4p",
    "marca": "Chrysler",
    "cod_fipe": "010019-6",
    "vendido": false
  },
  {
    "veiculo": "PT Cruiser Limited 2.4 16V 143cv 4p",
    "marca": "Chrysler",
    "cod_fipe": "010022-6",
    "vendido": false
  },
  {
    "veiculo": "PT Cruiser Touring DEC. EDITION 2.4 16V",
    "marca": "Chrysler",
    "cod_fipe": "010031-5",
    "vendido": false
  },
  {
    "veiculo": "Sebring LX 2.7 V6 24V 204cv",
    "marca": "Chrysler",
    "cod_fipe": "010020-0",
    "vendido": false
  },
  {
    "veiculo": "Stratus LE 2.0",
    "marca": "Chrysler",
    "cod_fipe": "010003-0",
    "vendido": false
  },
  {
    "veiculo": "Stratus LX 2.0 Mec",
    "marca": "Chrysler",
    "cod_fipe": "010004-8",
    "vendido": false
  },
  {
    "veiculo": "Stratus LX 2.5 Aut",
    "marca": "Chrysler",
    "cod_fipe": "010005-6",
    "vendido": false
  },
  {
    "veiculo": "Stratus LX 2.5 Conversível Aut",
    "marca": "Chrysler",
    "cod_fipe": "010006-4",
    "vendido": false
  },
  {
    "veiculo": "TOWN & COUNTRY Limited 3.8 /3.6 V6 Aut.",
    "marca": "Chrysler",
    "cod_fipe": "010030-7",
    "vendido": false
  },
  {
    "veiculo": "TOWN & COUNTRY Touring 3.6 V6 Aut.",
    "marca": "Chrysler",
    "cod_fipe": "010032-3",
    "vendido": false
  },
  {
    "veiculo": "Vision 3.5 24V",
    "marca": "Chrysler",
    "cod_fipe": "010013-7",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Exc. ATACA. 1.6 Flex 16V 5p Aut",
    "marca": "Citroën",
    "cod_fipe": "011126-0",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Exc. ATACA. 1.6 Flex 16V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011122-8",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Exclusive 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011109-0",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Exclusive 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011103-1",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Feel 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011164-3",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Feel 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011165-1",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS GL 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011101-5",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS GLX 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011108-2",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS GLX 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011102-3",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS GLX ATACAMA 1.6 Flex 16V 5p Aut",
    "marca": "Citroën",
    "cod_fipe": "011124-4",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS GLX ATACAMA 1.6 Flex 16V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011123-6",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Live 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011162-7",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Live 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011163-5",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS SALOMON EXCLUSIVE 1.6 Flex Aut.",
    "marca": "Citroën",
    "cod_fipe": "011153-8",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS SALOMON EXCLUSIVE 1.6 Flex Mec.",
    "marca": "Citroën",
    "cod_fipe": "011152-0",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS SALOMON TENDANCE 1.6 Flex Aut.",
    "marca": "Citroën",
    "cod_fipe": "011150-3",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS SALOMON TENDANCE 1.6 Flex Mec.",
    "marca": "Citroën",
    "cod_fipe": "011151-1",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Shine 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011166-0",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS Star 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011161-9",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS TENDANCE 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011143-0",
    "vendido": false
  },
  {
    "veiculo": "AIRCROSS TENDANCE 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011144-9",
    "vendido": false
  },
  {
    "veiculo": "AX GTi",
    "marca": "Citroën",
    "cod_fipe": "011001-9",
    "vendido": false
  },
  {
    "veiculo": "Berlingo MultSpace GLX 1.6 16V 110cv 4p",
    "marca": "Citroën",
    "cod_fipe": "011078-7",
    "vendido": false
  },
  {
    "veiculo": "Berlingo MultSpace GLX 1.8i 3p",
    "marca": "Citroën",
    "cod_fipe": "011026-4",
    "vendido": false
  },
  {
    "veiculo": "Berlingo MultSpace GLX 1.8i 4p",
    "marca": "Citroën",
    "cod_fipe": "011033-7",
    "vendido": false
  },
  {
    "veiculo": "BX 1.6S 16V",
    "marca": "Citroën",
    "cod_fipe": "011002-7",
    "vendido": false
  },
  {
    "veiculo": "BX GTi 1.9",
    "marca": "Citroën",
    "cod_fipe": "011039-6",
    "vendido": false
  },
  {
    "veiculo": "C3 Attra/Origine Pack 1.5 Flex 8V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011145-7",
    "vendido": false
  },
  {
    "veiculo": "C3 Attraction Pure Tech 1.2 Flex 12V Mec",
    "marca": "Citroën",
    "cod_fipe": "011170-8",
    "vendido": false
  },
  {
    "veiculo": "C3 Excl. 1.6 VTi Flex Start 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011119-8",
    "vendido": false
  },
  {
    "veiculo": "C3 Excl. 1.6 VTi Flex Start 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011118-0",
    "vendido": false
  },
  {
    "veiculo": "C3 Excl./Excl.Solar./Sonora 1.6 Flex Aut",
    "marca": "Citroën",
    "cod_fipe": "011091-4",
    "vendido": false
  },
  {
    "veiculo": "C3 Exclus./Excl.Solaris 1.6 Flex 16V Mec",
    "marca": "Citroën",
    "cod_fipe": "011071-0",
    "vendido": false
  },
  {
    "veiculo": "C3 Exclusive 1.4 Flex 8V 5p",
    "marca": "Citroën",
    "cod_fipe": "011083-3",
    "vendido": false
  },
  {
    "veiculo": "C3 Exclusive 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011142-2",
    "vendido": false
  },
  {
    "veiculo": "C3 GLX 1.4/ GLX Sonora 1.4 Flex 8V 5p",
    "marca": "Citroën",
    "cod_fipe": "011072-8",
    "vendido": false
  },
  {
    "veiculo": "C3 GLX 1.6 Flex 16V 5p  Aut.",
    "marca": "Citroën",
    "cod_fipe": "011090-6",
    "vendido": false
  },
  {
    "veiculo": "C3 GLX 1.6/ 1.6 Flex 16V 5p",
    "marca": "Citroën",
    "cod_fipe": "011070-1",
    "vendido": false
  },
  {
    "veiculo": "C3 Ocimar Versolato 1.6 16V 110cv 5p",
    "marca": "Citroën",
    "cod_fipe": "011076-0",
    "vendido": false
  },
  {
    "veiculo": "C3 Origine 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011116-3",
    "vendido": false
  },
  {
    "veiculo": "C3 Origine Pure Tech 1.2 Flex 12V Mec",
    "marca": "Citroën",
    "cod_fipe": "011171-6",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso Excl. 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011111-2",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso Exclusive 1.6 Flex 16V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011107-4",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso GL 1.5 Flex 8V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011114-7",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso GL 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011105-8",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso GLX 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011115-5",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso GLX 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011110-4",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso GLX 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011106-6",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso Origine 1.5 Flex 8V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011141-4",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso Tendance 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011140-6",
    "vendido": false
  },
  {
    "veiculo": "C3 Picasso Tendance 1.6 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011139-2",
    "vendido": false
  },
  {
    "veiculo": "C3 Style Ed. Pure Tech 1.2 Flex 12V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011175-9",
    "vendido": false
  },
  {
    "veiculo": "C3 Style Edition 1.6 Flex 16V Aut.",
    "marca": "Citroën",
    "cod_fipe": "011176-7",
    "vendido": false
  },
  {
    "veiculo": "C3 Tendance 1.5 Flex 8V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011117-1",
    "vendido": false
  },
  {
    "veiculo": "C3 Tendance 1.6 VTi Flex Start 16V Aut.",
    "marca": "Citroën",
    "cod_fipe": "011138-4",
    "vendido": false
  },
  {
    "veiculo": "C3 Tendance Pure Tech 1.2 Flex 12V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011169-4",
    "vendido": false
  },
  {
    "veiculo": "C3 X-BOX ONE 1.6 VTi Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011137-6",
    "vendido": false
  },
  {
    "veiculo": "C3 XTR 1.4 Flex 8V 5p",
    "marca": "Citroën",
    "cod_fipe": "011082-5",
    "vendido": false
  },
  {
    "veiculo": "C3 XTR 1.6 Flex 16V 5p",
    "marca": "Citroën",
    "cod_fipe": "011080-9",
    "vendido": false
  },
  {
    "veiculo": "C4 Competition 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011133-3",
    "vendido": false
  },
  {
    "veiculo": "C4 Competition 2.0 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011127-9",
    "vendido": false
  },
  {
    "veiculo": "C4 Excl./Excl. Solar. 2.0 Flex 16V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011097-3",
    "vendido": false
  },
  {
    "veiculo": "C4 Excl.2.0/2.0 Solaris Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011095-7",
    "vendido": false
  },
  {
    "veiculo": "C4 GLX 1.6 Flex 16V 5p mec.",
    "marca": "Citroën",
    "cod_fipe": "011093-0",
    "vendido": false
  },
  {
    "veiculo": "C4 GLX 2.0 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011094-9",
    "vendido": false
  },
  {
    "veiculo": "C4 GLX 2.0 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011096-5",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Exclusive 1.6 Turbo 4p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011132-5",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Exclusive 1.6 Turbo Flex Aut. ",
    "marca": "Citroën",
    "cod_fipe": "011156-2",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Exclusive 2.0 Flex 4p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011131-7",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Orig.Business 1.6 TB Flex Aut.",
    "marca": "Citroën",
    "cod_fipe": "011172-4",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Origine 1.6 Turbo Flex  Aut.",
    "marca": "Citroën",
    "cod_fipe": "011173-2",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Origine 1.6 Turbo Flex Mec.",
    "marca": "Citroën",
    "cod_fipe": "011174-0",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Origine 2.0 Flex 4p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011158-9",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Origine 2.0 Flex 4p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011128-7",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE S 1.6 Turbo Flex Aut.",
    "marca": "Citroën",
    "cod_fipe": "011177-5",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Tendance 1.6 Turbo 4p Aut",
    "marca": "Citroën",
    "cod_fipe": "011146-5",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Tendance 1.6 Turbo Flex Aut.",
    "marca": "Citroën",
    "cod_fipe": "011157-0",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Tendance 2.0 Flex 4p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011130-9",
    "vendido": false
  },
  {
    "veiculo": "C4 LOUNGE Tendance 2.0 Flex 4p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011129-5",
    "vendido": false
  },
  {
    "veiculo": "C4 PAL.Excl/Excl(Tech.) 2.0/2.0 Flex Aut",
    "marca": "Citroën",
    "cod_fipe": "011088-4",
    "vendido": false
  },
  {
    "veiculo": "C4 PALLAS Exclusive 2.0/2.0 Flex 16V Mec",
    "marca": "Citroën",
    "cod_fipe": "011087-6",
    "vendido": false
  },
  {
    "veiculo": "C4 PALLAS GLX 2.0/ 2.0 Flex Aut.",
    "marca": "Citroën",
    "cod_fipe": "011086-8",
    "vendido": false
  },
  {
    "veiculo": "C4 PALLAS GLX 2.0/2.0 Flex 16V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011085-0",
    "vendido": false
  },
  {
    "veiculo": "C4 Picasso Grand 2.0 16V 143cv Aut",
    "marca": "Citroën",
    "cod_fipe": "011089-2",
    "vendido": false
  },
  {
    "veiculo": "C4 Picasso Intensive 1.6 Turbo 16V Aut.",
    "marca": "Citroën",
    "cod_fipe": "011160-0",
    "vendido": false
  },
  {
    "veiculo": "C4 Picasso Seduction 1.6 Turbo 16V Aut.",
    "marca": "Citroën",
    "cod_fipe": "011159-7",
    "vendido": false
  },
  {
    "veiculo": "C4 Picasso/Pic. La Luna 2.0 16V  Aut.",
    "marca": "Citroën",
    "cod_fipe": "011092-2",
    "vendido": false
  },
  {
    "veiculo": "C4 rockyou 1.6 Flex 16V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011134-1",
    "vendido": false
  },
  {
    "veiculo": "C4 Tendance 1.6 Flex 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011135-0",
    "vendido": false
  },
  {
    "veiculo": "C4 Tendance 2.0 Flex 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011136-8",
    "vendido": false
  },
  {
    "veiculo": "C4 VTR 2.0 16V 143cv",
    "marca": "Citroën",
    "cod_fipe": "011081-7",
    "vendido": false
  },
  {
    "veiculo": "C5 3.0 24V 210cv 4p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011067-1",
    "vendido": false
  },
  {
    "veiculo": "C5 Exclusive 2.0 16V 138cv 4p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011065-5",
    "vendido": false
  },
  {
    "veiculo": "C5 Exclusive 2.0 16V 4p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011066-3",
    "vendido": false
  },
  {
    "veiculo": "C5 Exclusive Break 2.0 16V 138cv 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011068-0",
    "vendido": false
  },
  {
    "veiculo": "C5 Exclusive Break 2.0 16V Aut.",
    "marca": "Citroën",
    "cod_fipe": "011069-8",
    "vendido": false
  },
  {
    "veiculo": "C5 Tourer Exclusive 2.0 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011098-1",
    "vendido": false
  },
  {
    "veiculo": "C6 Exclusive 3.0 V6 24V 215cv Aut.",
    "marca": "Citroën",
    "cod_fipe": "011084-1",
    "vendido": false
  },
  {
    "veiculo": "C8 Exclusive 2.0 16V 138cv 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011073-6",
    "vendido": false
  },
  {
    "veiculo": "DS3 1.6 Turbo 16V 3p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011113-9",
    "vendido": false
  },
  {
    "veiculo": "DS3 Sport Chic 1.6 TB 16V 3p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011149-0",
    "vendido": false
  },
  {
    "veiculo": "DS4 1.6 Chic Turbo 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011147-3",
    "vendido": false
  },
  {
    "veiculo": "DS4 1.6 So Chic Turbo 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011148-1",
    "vendido": false
  },
  {
    "veiculo": "DS4 1.6 Turbo 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011121-0",
    "vendido": false
  },
  {
    "veiculo": "DS5 1.6 Be Chic Turbo 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011155-4",
    "vendido": false
  },
  {
    "veiculo": "DS5 1.6 So Chic Turbo 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011154-6",
    "vendido": false
  },
  {
    "veiculo": "DS5 1.6 Turbo 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011120-1",
    "vendido": false
  },
  {
    "veiculo": "Evasion  GLX 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011027-2",
    "vendido": false
  },
  {
    "veiculo": "Evasion VSX Turbo",
    "marca": "Citroën",
    "cod_fipe": "011003-5",
    "vendido": false
  },
  {
    "veiculo": "Grand C4 Picasso Intensive 1.6 TB Aut.",
    "marca": "Citroën",
    "cod_fipe": "011168-6",
    "vendido": false
  },
  {
    "veiculo": "Grand C4 Picasso Seduction 1.6 TB Aut.",
    "marca": "Citroën",
    "cod_fipe": "011167-8",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.3 15/16Lug. TB Diesel",
    "marca": "Citroën",
    "cod_fipe": "011099-0",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.3 Furgão TB Diesel",
    "marca": "Citroën",
    "cod_fipe": "011100-7",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.3 Vetrato Exec. 16Lug. TB Dies.  ",
    "marca": "Citroën",
    "cod_fipe": "011112-0",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.3 Vetrato TB Diesel",
    "marca": "Citroën",
    "cod_fipe": "011104-0",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.5 Diesel",
    "marca": "Citroën",
    "cod_fipe": "011028-0",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.8 16Lug.  Diesel",
    "marca": "Citroën",
    "cod_fipe": "011050-7",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.8 Furgão 35C Diesel",
    "marca": "Citroën",
    "cod_fipe": "011052-3",
    "vendido": false
  },
  {
    "veiculo": "Jumper 2.8 Furgão 35MH Diesel",
    "marca": "Citroën",
    "cod_fipe": "011051-5",
    "vendido": false
  },
  {
    "veiculo": "Xantia 2.0  16V",
    "marca": "Citroën",
    "cod_fipe": "011043-4",
    "vendido": false
  },
  {
    "veiculo": "Xantia Activa 2.0",
    "marca": "Citroën",
    "cod_fipe": "011044-2",
    "vendido": false
  },
  {
    "veiculo": "Xantia Activa 2.0 TB",
    "marca": "Citroën",
    "cod_fipe": "011045-0",
    "vendido": false
  },
  {
    "veiculo": "Xantia Activa 3.0 V6 Mec",
    "marca": "Citroën",
    "cod_fipe": "011014-0",
    "vendido": false
  },
  {
    "veiculo": "Xantia Break 2.0 8V/GLX 2.0 16V Aut",
    "marca": "Citroën",
    "cod_fipe": "011015-9",
    "vendido": false
  },
  {
    "veiculo": "Xantia Break GLX 2.0 16V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011049-3",
    "vendido": false
  },
  {
    "veiculo": "Xantia Exclusive 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011042-6",
    "vendido": false
  },
  {
    "veiculo": "Xantia Exclusive 3.0 V6",
    "marca": "Citroën",
    "cod_fipe": "011034-5",
    "vendido": false
  },
  {
    "veiculo": "Xantia GLX 2.0 16V Aut.",
    "marca": "Citroën",
    "cod_fipe": "011047-7",
    "vendido": false
  },
  {
    "veiculo": "Xantia GLX 2.0 16V Mec.",
    "marca": "Citroën",
    "cod_fipe": "011029-9",
    "vendido": false
  },
  {
    "veiculo": "Xantia SX 1.8",
    "marca": "Citroën",
    "cod_fipe": "011016-7",
    "vendido": false
  },
  {
    "veiculo": "Xantia SX 2.0 8V/16V Mec/ Aut",
    "marca": "Citroën",
    "cod_fipe": "011004-3",
    "vendido": false
  },
  {
    "veiculo": "Xantia VSX 2.0",
    "marca": "Citroën",
    "cod_fipe": "011005-1",
    "vendido": false
  },
  {
    "veiculo": "Xantia VSX 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011048-5",
    "vendido": false
  },
  {
    "veiculo": "XM Exclusive 12v",
    "marca": "Citroën",
    "cod_fipe": "011007-8",
    "vendido": false
  },
  {
    "veiculo": "XM Exclusive 24V",
    "marca": "Citroën",
    "cod_fipe": "011040-0",
    "vendido": false
  },
  {
    "veiculo": "XM Exclusive Break",
    "marca": "Citroën",
    "cod_fipe": "011006-0",
    "vendido": false
  },
  {
    "veiculo": "XM Sensation 2.0 TB",
    "marca": "Citroën",
    "cod_fipe": "011041-8",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break Exclusive 1.6 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011061-2",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break Exclusive 1.6 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011060-4",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break Exclusive 1.8 16V",
    "marca": "Citroën",
    "cod_fipe": "011021-3",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break Exclusive 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011036-1",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break GLX 1.6 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011062-0",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break GLX 1.6 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011059-0",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break GLX 1.8 16V",
    "marca": "Citroën",
    "cod_fipe": "011020-5",
    "vendido": false
  },
  {
    "veiculo": "Xsara Break GLX/ Paris 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011035-3",
    "vendido": false
  },
  {
    "veiculo": "Xsara Exclusive 1.6 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011057-4",
    "vendido": false
  },
  {
    "veiculo": "Xsara Exclusive 1.6 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011056-6",
    "vendido": false
  },
  {
    "veiculo": "Xsara Exclusive 1.8 8V/16V 5p Aut",
    "marca": "Citroën",
    "cod_fipe": "011019-1",
    "vendido": false
  },
  {
    "veiculo": "Xsara Exclusive 1.8 8V/16V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011018-3",
    "vendido": false
  },
  {
    "veiculo": "Xsara Exclusive 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011037-0",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.6 16V 3p",
    "marca": "Citroën",
    "cod_fipe": "011053-1",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.6 16V 5p Aut.",
    "marca": "Citroën",
    "cod_fipe": "011055-8",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.6 16V 5p Mec.",
    "marca": "Citroën",
    "cod_fipe": "011054-0",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.8 16V 5p Mec",
    "marca": "Citroën",
    "cod_fipe": "011024-8",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.8 16V Cupê Mec",
    "marca": "Citroën",
    "cod_fipe": "011022-1",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.8 8V 5p Aut",
    "marca": "Citroën",
    "cod_fipe": "011025-6",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX 1.8 8V Cupê Aut",
    "marca": "Citroën",
    "cod_fipe": "011023-0",
    "vendido": false
  },
  {
    "veiculo": "Xsara GLX/ Paris 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011046-9",
    "vendido": false
  },
  {
    "veiculo": "Xsara Picasso Exc./Etoile 2.0 16v  Mec",
    "marca": "Citroën",
    "cod_fipe": "011063-9",
    "vendido": false
  },
  {
    "veiculo": "Xsara Picasso Exclus. 1.6/ 1.6 Flex 16V",
    "marca": "Citroën",
    "cod_fipe": "011079-5",
    "vendido": false
  },
  {
    "veiculo": "Xsara Picasso Exclusive 2.0 16V  Aut",
    "marca": "Citroën",
    "cod_fipe": "011074-4",
    "vendido": false
  },
  {
    "veiculo": "Xsara Picasso GLX /Brasil/Etoile 2.0 Mec",
    "marca": "Citroën",
    "cod_fipe": "011064-7",
    "vendido": false
  },
  {
    "veiculo": "Xsara Picasso GLX 1.6/ 1.6 Flex 16V",
    "marca": "Citroën",
    "cod_fipe": "011077-9",
    "vendido": false
  },
  {
    "veiculo": "Xsara Picasso GLX 2.0 16V  Aut",
    "marca": "Citroën",
    "cod_fipe": "011075-2",
    "vendido": false
  },
  {
    "veiculo": "Xsara VTS 1.6 16V 3p",
    "marca": "Citroën",
    "cod_fipe": "011058-2",
    "vendido": false
  },
  {
    "veiculo": "Xsara VTS 1.8 16V",
    "marca": "Citroën",
    "cod_fipe": "011038-8",
    "vendido": false
  },
  {
    "veiculo": "Xsara VTS 2.0  16V Cupê Mec",
    "marca": "Citroën",
    "cod_fipe": "011017-5",
    "vendido": false
  },
  {
    "veiculo": "ZX Cupê 16V",
    "marca": "Citroën",
    "cod_fipe": "011008-6",
    "vendido": false
  },
  {
    "veiculo": "ZX Dakar 2.0 16V",
    "marca": "Citroën",
    "cod_fipe": "011032-9",
    "vendido": false
  },
  {
    "veiculo": "ZX Furio",
    "marca": "Citroën",
    "cod_fipe": "011009-4",
    "vendido": false
  },
  {
    "veiculo": "ZX Paris 1.8",
    "marca": "Citroën",
    "cod_fipe": "011031-0",
    "vendido": false
  },
  {
    "veiculo": "ZX Volcane 3p e 5p",
    "marca": "Citroën",
    "cod_fipe": "011010-8",
    "vendido": false
  },
  {
    "veiculo": "CL-244 2.8 132cv 4x4 TB Int. Diesel",
    "marca": "Cross Lander",
    "cod_fipe": "059001-0",
    "vendido": false
  },
  {
    "veiculo": "CL-330 2.8 132cv 4x4 TB Int. Diesel",
    "marca": "Cross Lander",
    "cod_fipe": "059002-9",
    "vendido": false
  },
  {
    "veiculo": "Espero 2.0",
    "marca": "Daewoo",
    "cod_fipe": "030017-9",
    "vendido": false
  },
  {
    "veiculo": "Espero CD / DLX 2.0",
    "marca": "Daewoo",
    "cod_fipe": "030001-2",
    "vendido": false
  },
  {
    "veiculo": "Lanos Hatch SX 1.6 16V",
    "marca": "Daewoo",
    "cod_fipe": "030010-1",
    "vendido": false
  },
  {
    "veiculo": "Lanos SX 1.6 16V",
    "marca": "Daewoo",
    "cod_fipe": "030005-5",
    "vendido": false
  },
  {
    "veiculo": "Lanos SX 1.6 16V Aut",
    "marca": "Daewoo",
    "cod_fipe": "030009-8",
    "vendido": false
  },
  {
    "veiculo": "Leganza CDX 2.0 16V Aut.",
    "marca": "Daewoo",
    "cod_fipe": "030012-8",
    "vendido": false
  },
  {
    "veiculo": "Leganza CDX 2.0 16V Mec.",
    "marca": "Daewoo",
    "cod_fipe": "030006-3",
    "vendido": false
  },
  {
    "veiculo": "Nubira CDX 2.0 16V Aut.",
    "marca": "Daewoo",
    "cod_fipe": "030013-6",
    "vendido": false
  },
  {
    "veiculo": "Nubira CDX 2.0 16V Mec.",
    "marca": "Daewoo",
    "cod_fipe": "030007-1",
    "vendido": false
  },
  {
    "veiculo": "Nubira SW CDX 2.0 16V Aut.",
    "marca": "Daewoo",
    "cod_fipe": "030014-4",
    "vendido": false
  },
  {
    "veiculo": "Nubira SW CDX 2.0 16V Mec.",
    "marca": "Daewoo",
    "cod_fipe": "030008-0",
    "vendido": false
  },
  {
    "veiculo": "Prince Ace 2.0",
    "marca": "Daewoo",
    "cod_fipe": "030002-0",
    "vendido": false
  },
  {
    "veiculo": "Racer GTi 1.5 16V",
    "marca": "Daewoo",
    "cod_fipe": "030011-0",
    "vendido": false
  },
  {
    "veiculo": "Super Salon Ace",
    "marca": "Daewoo",
    "cod_fipe": "030004-7",
    "vendido": false
  },
  {
    "veiculo": "Tico",
    "marca": "Daewoo",
    "cod_fipe": "030003-9",
    "vendido": false
  },
  {
    "veiculo": "Applause 1.6 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012012-0",
    "vendido": false
  },
  {
    "veiculo": "Applause DLX 1.6 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012011-1",
    "vendido": false
  },
  {
    "veiculo": "Charade CX/TS 1.0",
    "marca": "Daihatsu",
    "cod_fipe": "012015-4",
    "vendido": false
  },
  {
    "veiculo": "Charade Sd 1.5/DLX 1.3",
    "marca": "Daihatsu",
    "cod_fipe": "012001-4",
    "vendido": false
  },
  {
    "veiculo": "Charade Sedan 1.3i 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012006-5",
    "vendido": false
  },
  {
    "veiculo": "Charade TS/TSi 1.3/LSi 1.5 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012002-2",
    "vendido": false
  },
  {
    "veiculo": "Charade TX 1.3 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012010-3",
    "vendido": false
  },
  {
    "veiculo": "Cuore 0/TS0 85i",
    "marca": "Daihatsu",
    "cod_fipe": "012013-8",
    "vendido": false
  },
  {
    "veiculo": "Cuore CS/CSL",
    "marca": "Daihatsu",
    "cod_fipe": "012003-0",
    "vendido": false
  },
  {
    "veiculo": "Cuore TS/TSL",
    "marca": "Daihatsu",
    "cod_fipe": "012004-9",
    "vendido": false
  },
  {
    "veiculo": "Feroza DX 1.6 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012009-0",
    "vendido": false
  },
  {
    "veiculo": "Feroza SX 1.6i 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012005-7",
    "vendido": false
  },
  {
    "veiculo": "Gran Move 1.5/1.6 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012007-3",
    "vendido": false
  },
  {
    "veiculo": "Move Van",
    "marca": "Daihatsu",
    "cod_fipe": "012014-6",
    "vendido": false
  },
  {
    "veiculo": "Terios 1.3 16V",
    "marca": "Daihatsu",
    "cod_fipe": "012008-1",
    "vendido": false
  },
  {
    "veiculo": "Avenger ES 2.0/2.5 16V",
    "marca": "Dodge",
    "cod_fipe": "013010-9",
    "vendido": false
  },
  {
    "veiculo": "Dakota 2.5",
    "marca": "Dodge",
    "cod_fipe": "013004-4",
    "vendido": false
  },
  {
    "veiculo": "Dakota Club 2.5",
    "marca": "Dodge",
    "cod_fipe": "013013-3",
    "vendido": false
  },
  {
    "veiculo": "Dakota Durango 5.9 4x4 V8",
    "marca": "Dodge",
    "cod_fipe": "013015-0",
    "vendido": false
  },
  {
    "veiculo": "Dakota Durango SLT 5.2 4x4 V8",
    "marca": "Dodge",
    "cod_fipe": "013016-8",
    "vendido": false
  },
  {
    "veiculo": "Dakota Intrepid 3.3 V6",
    "marca": "Dodge",
    "cod_fipe": "013017-6",
    "vendido": false
  },
  {
    "veiculo": "Dakota RT 5.2 Aut",
    "marca": "Dodge",
    "cod_fipe": "013018-4",
    "vendido": false
  },
  {
    "veiculo": "Dakota RT 5.2 CE Aut",
    "marca": "Dodge",
    "cod_fipe": "013019-2",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 2.5 4x4",
    "marca": "Dodge",
    "cod_fipe": "013014-1",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 2.5 CD Diesel",
    "marca": "Dodge",
    "cod_fipe": "013022-2",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 2.5 Diesel",
    "marca": "Dodge",
    "cod_fipe": "013006-0",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 3.9 V6",
    "marca": "Dodge",
    "cod_fipe": "013005-2",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 3.9 V6 CD Aut.",
    "marca": "Dodge",
    "cod_fipe": "013021-4",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 3.9 V6 CD Mec.",
    "marca": "Dodge",
    "cod_fipe": "013020-6",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 5.2 V8",
    "marca": "Dodge",
    "cod_fipe": "013011-7",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport 5.2 V8 CD Aut.",
    "marca": "Dodge",
    "cod_fipe": "013023-0",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport CE 2.5 Diesel",
    "marca": "Dodge",
    "cod_fipe": "013008-7",
    "vendido": false
  },
  {
    "veiculo": "Dakota Sport CE 3.9 V6",
    "marca": "Dodge",
    "cod_fipe": "013007-9",
    "vendido": false
  },
  {
    "veiculo": "Durango Citadel 3.6 24V 4x4 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013034-6",
    "vendido": false
  },
  {
    "veiculo": "Durango Crew 3.6 24V 4x4 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013035-4",
    "vendido": false
  },
  {
    "veiculo": "Durango Limited 3.6 24V 4x4 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013038-9",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY Crossroad 3.6 V6 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013037-0",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY RT  3.6 V6 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013031-1",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY RT 2.7 V6 185cv Aut.",
    "marca": "Dodge",
    "cod_fipe": "013029-0",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY RT 3.6 AWD V6 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013036-2",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY SE 2.7 V6 185cv Aut.",
    "marca": "Dodge",
    "cod_fipe": "013030-3",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY SXT 2.7 V6 185cv Aut.",
    "marca": "Dodge",
    "cod_fipe": "013027-3",
    "vendido": false
  },
  {
    "veiculo": "JOURNEY SXT 3.6 V6 Aut.",
    "marca": "Dodge",
    "cod_fipe": "013032-0",
    "vendido": false
  },
  {
    "veiculo": "Ram 2500 H.DUTY 5.9 SLT 24V CD 4x4 Dies.",
    "marca": "Dodge",
    "cod_fipe": "013024-9",
    "vendido": false
  },
  {
    "veiculo": "Ram 2500 H.DUTY 5.9 SLT TDI CS 4x4 Dies.",
    "marca": "Dodge",
    "cod_fipe": "013025-7",
    "vendido": false
  },
  {
    "veiculo": "Ram 2500 LARAMIE 6.7 TDI CD 4x4 Dies",
    "marca": "Dodge",
    "cod_fipe": "013033-8",
    "vendido": false
  },
  {
    "veiculo": "Ram 2500 TROPIVAN 5.9 SLT Exec.TDI Dies.",
    "marca": "Dodge",
    "cod_fipe": "013028-1",
    "vendido": false
  },
  {
    "veiculo": "Ram 2500 TROPIVAN 5.9 SLT TDI 4x4 Dies.",
    "marca": "Dodge",
    "cod_fipe": "013026-5",
    "vendido": false
  },
  {
    "veiculo": "Ram Laramie 5.9 V8",
    "marca": "Dodge",
    "cod_fipe": "013003-6",
    "vendido": false
  },
  {
    "veiculo": "Ram Laramie/SLT 5.2 V8",
    "marca": "Dodge",
    "cod_fipe": "013002-8",
    "vendido": false
  },
  {
    "veiculo": "Ram Sport 5.9 V8",
    "marca": "Dodge",
    "cod_fipe": "013001-0",
    "vendido": false
  },
  {
    "veiculo": "Stealth 3.0 MPI",
    "marca": "Dodge",
    "cod_fipe": "013009-5",
    "vendido": false
  },
  {
    "veiculo": "K01 Pick-up CS 1.0 8V 2p",
    "marca": "EFFA",
    "cod_fipe": "066012-4",
    "vendido": false
  },
  {
    "veiculo": "K02 Pick-up CD 1.0 8V 4p",
    "marca": "EFFA",
    "cod_fipe": "066013-2",
    "vendido": false
  },
  {
    "veiculo": "M-100 1.0 8v 5p",
    "marca": "EFFA",
    "cod_fipe": "066001-9",
    "vendido": false
  },
  {
    "veiculo": "Plutus 3.2 8V 4x2 CD Turbo Diesel      ",
    "marca": "EFFA",
    "cod_fipe": "066011-6",
    "vendido": false
  },
  {
    "veiculo": "Start Picape CD 1.0 8V 5p      ",
    "marca": "EFFA",
    "cod_fipe": "066010-8",
    "vendido": false
  },
  {
    "veiculo": "Start Picape L 1.0 8V 2p        ",
    "marca": "EFFA",
    "cod_fipe": "066008-6",
    "vendido": false
  },
  {
    "veiculo": "Start Van 1.0 8V 4p       ",
    "marca": "EFFA",
    "cod_fipe": "066009-4",
    "vendido": false
  },
  {
    "veiculo": "ULC FURGÃO 1.0 8V 5p",
    "marca": "EFFA",
    "cod_fipe": "066002-7",
    "vendido": false
  },
  {
    "veiculo": "ULC PICAPE 1.0 8V 2p",
    "marca": "EFFA",
    "cod_fipe": "066004-3",
    "vendido": false
  },
  {
    "veiculo": "ULC PICAPE CD 1.0 8V 4p",
    "marca": "EFFA",
    "cod_fipe": "066007-8",
    "vendido": false
  },
  {
    "veiculo": "ULC PICAPE Longa 1.0 8V 2p",
    "marca": "EFFA",
    "cod_fipe": "066006-0",
    "vendido": false
  },
  {
    "veiculo": "ULC PICAPE Longa Bau 1.0 8V 2p",
    "marca": "EFFA",
    "cod_fipe": "066005-1",
    "vendido": false
  },
  {
    "veiculo": "ULC VAN 1.0 8V 5p",
    "marca": "EFFA",
    "cod_fipe": "066003-5",
    "vendido": false
  },
  {
    "veiculo": "V21 Pick-up CS 1.3 16V 2p",
    "marca": "EFFA",
    "cod_fipe": "066014-0",
    "vendido": false
  },
  {
    "veiculo": "V22 Pick-up CD 1.3 16V 4p",
    "marca": "EFFA",
    "cod_fipe": "066015-9",
    "vendido": false
  },
  {
    "veiculo": "Engesa 4x4 2.5/4.1",
    "marca": "Engesa",
    "cod_fipe": "043001-3",
    "vendido": false
  },
  {
    "veiculo": "Engesa 4x4 4.0 Diesel",
    "marca": "Engesa",
    "cod_fipe": "043002-1",
    "vendido": false
  },
  {
    "veiculo": "Camper 2.5/GL/GLS/Master 4.1",
    "marca": "Envemo",
    "cod_fipe": "044001-9",
    "vendido": false
  },
  {
    "veiculo": "Camper 4x4 2.5 Diesel",
    "marca": "Envemo",
    "cod_fipe": "044003-5",
    "vendido": false
  },
  {
    "veiculo": "Camper GL/GLS 4x4 4.0 Diesel",
    "marca": "Envemo",
    "cod_fipe": "044002-7",
    "vendido": false
  },
  {
    "veiculo": "Master 4.0 Diesel",
    "marca": "Envemo",
    "cod_fipe": "044004-3",
    "vendido": false
  },
  {
    "veiculo": "348 GTS 3.4",
    "marca": "Ferrari",
    "cod_fipe": "031014-0",
    "vendido": false
  },
  {
    "veiculo": "348 Spider 3.4",
    "marca": "Ferrari",
    "cod_fipe": "031013-1",
    "vendido": false
  },
  {
    "veiculo": "348 TS/TB 3.4",
    "marca": "Ferrari",
    "cod_fipe": "031008-5",
    "vendido": false
  },
  {
    "veiculo": "355 Berlinetta",
    "marca": "Ferrari",
    "cod_fipe": "031001-8",
    "vendido": false
  },
  {
    "veiculo": "355 Berlinetta F1",
    "marca": "Ferrari",
    "cod_fipe": "031002-6",
    "vendido": false
  },
  {
    "veiculo": "355 GTS",
    "marca": "Ferrari",
    "cod_fipe": "031009-3",
    "vendido": false
  },
  {
    "veiculo": "355 GTS F1",
    "marca": "Ferrari",
    "cod_fipe": "031010-7",
    "vendido": false
  },
  {
    "veiculo": "355 GTS Spider",
    "marca": "Ferrari",
    "cod_fipe": "031015-8",
    "vendido": false
  },
  {
    "veiculo": "355 GTS Targa",
    "marca": "Ferrari",
    "cod_fipe": "031016-6",
    "vendido": false
  },
  {
    "veiculo": "355 Spider F1",
    "marca": "Ferrari",
    "cod_fipe": "031004-2",
    "vendido": false
  },
  {
    "veiculo": "360 Challenge Stradale",
    "marca": "Ferrari",
    "cod_fipe": "031024-7",
    "vendido": false
  },
  {
    "veiculo": "360 Modena",
    "marca": "Ferrari",
    "cod_fipe": "031011-5",
    "vendido": false
  },
  {
    "veiculo": "360 Modena F1",
    "marca": "Ferrari",
    "cod_fipe": "031012-3",
    "vendido": false
  },
  {
    "veiculo": "360 Spider 400cv",
    "marca": "Ferrari",
    "cod_fipe": "031021-2",
    "vendido": false
  },
  {
    "veiculo": "360 Spider F1 400cv",
    "marca": "Ferrari",
    "cod_fipe": "031022-0",
    "vendido": false
  },
  {
    "veiculo": "456 GT",
    "marca": "Ferrari",
    "cod_fipe": "031005-0",
    "vendido": false
  },
  {
    "veiculo": "456 GTA",
    "marca": "Ferrari",
    "cod_fipe": "031006-9",
    "vendido": false
  },
  {
    "veiculo": "456 M-GT 5.5 V12",
    "marca": "Ferrari",
    "cod_fipe": "031019-0",
    "vendido": false
  },
  {
    "veiculo": "488 GTB 3.9 V8 670cv",
    "marca": "Ferrari",
    "cod_fipe": "031037-9",
    "vendido": false
  },
  {
    "veiculo": "488 Spyder 3.9 V8 670cv",
    "marca": "Ferrari",
    "cod_fipe": "031039-5",
    "vendido": false
  },
  {
    "veiculo": "550 Maranello",
    "marca": "Ferrari",
    "cod_fipe": "031007-7",
    "vendido": false
  },
  {
    "veiculo": "575M Maranello F1 V12 515cv",
    "marca": "Ferrari",
    "cod_fipe": "031023-9",
    "vendido": false
  },
  {
    "veiculo": "612 Scaglietti F1 V12 540cv",
    "marca": "Ferrari",
    "cod_fipe": "031026-3",
    "vendido": false
  },
  {
    "veiculo": "California 3.9 Turbo F1 V8 560cv ",
    "marca": "Ferrari",
    "cod_fipe": "031036-0",
    "vendido": false
  },
  {
    "veiculo": "California F1 V8 460cv",
    "marca": "Ferrari",
    "cod_fipe": "031030-1",
    "vendido": false
  },
  {
    "veiculo": "F12 Berlinetta 740cv",
    "marca": "Ferrari",
    "cod_fipe": "031034-4",
    "vendido": false
  },
  {
    "veiculo": "F12 TDF 780cv",
    "marca": "Ferrari",
    "cod_fipe": "031038-7",
    "vendido": false
  },
  {
    "veiculo": "F430 F1",
    "marca": "Ferrari",
    "cod_fipe": "031025-5",
    "vendido": false
  },
  {
    "veiculo": "F430 SCUDERIA F1",
    "marca": "Ferrari",
    "cod_fipe": "031029-8",
    "vendido": false
  },
  {
    "veiculo": "F430 Spider F1",
    "marca": "Ferrari",
    "cod_fipe": "031027-1",
    "vendido": false
  },
  {
    "veiculo": "F458 Italia F1 4.5 V8 570cv",
    "marca": "Ferrari",
    "cod_fipe": "031031-0",
    "vendido": false
  },
  {
    "veiculo": "F458 Speciale F1 4.5 V8",
    "marca": "Ferrari",
    "cod_fipe": "031035-2",
    "vendido": false
  },
  {
    "veiculo": "F458 Spider F1 4.5 V8 570cv",
    "marca": "Ferrari",
    "cod_fipe": "031033-6",
    "vendido": false
  },
  {
    "veiculo": "F599 GTB Fiorano F1 6.0 V12 620cv",
    "marca": "Ferrari",
    "cod_fipe": "031028-0",
    "vendido": false
  },
  {
    "veiculo": "FF F1 6.3 V12 660cv",
    "marca": "Ferrari",
    "cod_fipe": "031032-8",
    "vendido": false
  },
  {
    "veiculo": "147 C/ CL",
    "marca": "Fiat",
    "cod_fipe": "001124-0",
    "vendido": false
  },
  {
    "veiculo": "147 Furgão (todos)",
    "marca": "Fiat",
    "cod_fipe": "001138-0",
    "vendido": false
  },
  {
    "veiculo": "147 Pick-Up (todas )",
    "marca": "Fiat",
    "cod_fipe": "001123-1",
    "vendido": false
  },
  {
    "veiculo": "500 ABARTH MULTIAIR 1.4 TB 16V 3p",
    "marca": "Fiat",
    "cod_fipe": "001429-0",
    "vendido": false
  },
  {
    "veiculo": "500 Cabrio Dualogic Flex 1.4 8V",
    "marca": "Fiat",
    "cod_fipe": "001420-6",
    "vendido": false
  },
  {
    "veiculo": "500 Cabrio Flex 1.4 8V Mec",
    "marca": "Fiat",
    "cod_fipe": "001421-4",
    "vendido": false
  },
  {
    "veiculo": "500 Cabrio/500 Coupe GUCCI/Flex 1.4 Aut",
    "marca": "Fiat",
    "cod_fipe": "001392-7",
    "vendido": false
  },
  {
    "veiculo": "500 Cult 1.4 Flex 8V EVO Dualogic  ",
    "marca": "Fiat",
    "cod_fipe": "001362-5",
    "vendido": false
  },
  {
    "veiculo": "500 Cult 1.4 Flex 8V EVO Mec. ",
    "marca": "Fiat",
    "cod_fipe": "001361-7",
    "vendido": false
  },
  {
    "veiculo": "500 LOUNGE 1.4 16V 100cv  Mec.",
    "marca": "Fiat",
    "cod_fipe": "001296-3",
    "vendido": false
  },
  {
    "veiculo": "500 LOUNGE 1.4 16V 100cv Dualogic",
    "marca": "Fiat",
    "cod_fipe": "001297-1",
    "vendido": false
  },
  {
    "veiculo": "500 Lounge Air 1.4/ 1.4 Flex 16V Aut. ",
    "marca": "Fiat",
    "cod_fipe": "001360-9",
    "vendido": false
  },
  {
    "veiculo": "500 SPORT 1.4 16V 100cv  Dualogic",
    "marca": "Fiat",
    "cod_fipe": "001295-5",
    "vendido": false
  },
  {
    "veiculo": "500 SPORT 1.4 16V 100cv Mec.",
    "marca": "Fiat",
    "cod_fipe": "001290-4",
    "vendido": false
  },
  {
    "veiculo": "500 Sport Air 1.4 16V/1.4 Flex 16V Aut. ",
    "marca": "Fiat",
    "cod_fipe": "001359-5",
    "vendido": false
  },
  {
    "veiculo": "500 Sport Air 1.4 16V/1.4 Flex Mec.  ",
    "marca": "Fiat",
    "cod_fipe": "001358-7",
    "vendido": false
  },
  {
    "veiculo": "Brava ELX  1.6 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001110-0",
    "vendido": false
  },
  {
    "veiculo": "Brava HGT 1.8 mpi 16V  4p",
    "marca": "Fiat",
    "cod_fipe": "001140-1",
    "vendido": false
  },
  {
    "veiculo": "Brava SX 1.6 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001109-6",
    "vendido": false
  },
  {
    "veiculo": "Bravo ABSOLUTE 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001339-0",
    "vendido": false
  },
  {
    "veiculo": "Bravo ABSOLUTE Dualogic 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001340-4",
    "vendido": false
  },
  {
    "veiculo": "Bravo BlackMotion 1.8 Dualogic Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001435-4",
    "vendido": false
  },
  {
    "veiculo": "Bravo BlackMotion 1.8 Flex 16v 5p",
    "marca": "Fiat",
    "cod_fipe": "001434-6",
    "vendido": false
  },
  {
    "veiculo": "Bravo ESSENCE 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001337-4",
    "vendido": false
  },
  {
    "veiculo": "Bravo ESSENCE Dualogic 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001338-2",
    "vendido": false
  },
  {
    "veiculo": "Bravo SPORTING 1.8 Dualogic Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001385-4",
    "vendido": false
  },
  {
    "veiculo": "Bravo SPORTING 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001384-6",
    "vendido": false
  },
  {
    "veiculo": "Bravo SX 1.6",
    "marca": "Fiat",
    "cod_fipe": "001127-4",
    "vendido": false
  },
  {
    "veiculo": "Bravo T-JET 1.4 16V Turbo 5p",
    "marca": "Fiat",
    "cod_fipe": "001356-0",
    "vendido": false
  },
  {
    "veiculo": "Bravo WOLVERINE 1.8 Dualogic Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001403-6",
    "vendido": false
  },
  {
    "veiculo": "Bravo WOLVERINE 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001402-8",
    "vendido": false
  },
  {
    "veiculo": "Cinquecento 0.7",
    "marca": "Fiat",
    "cod_fipe": "001128-2",
    "vendido": false
  },
  {
    "veiculo": "Coupe 16V",
    "marca": "Fiat",
    "cod_fipe": "001057-0",
    "vendido": false
  },
  {
    "veiculo": "Doblo  1.4 mpi Fire Flex  8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001300-5",
    "vendido": false
  },
  {
    "veiculo": "Doblo  Cargo 1.4 mpi Fire Flex 8V 3p",
    "marca": "Fiat",
    "cod_fipe": "001302-1",
    "vendido": false
  },
  {
    "veiculo": "Doblo Adv. XINGU 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001382-0",
    "vendido": false
  },
  {
    "veiculo": "Doblo Adv. XINGU LOCKER 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001383-8",
    "vendido": false
  },
  {
    "veiculo": "Doblo Adv.Ext./Adv.Ext.Loc. 1.8 16V Flex",
    "marca": "Fiat",
    "cod_fipe": "001456-7",
    "vendido": false
  },
  {
    "veiculo": "Doblo Adv/Adv TRYON/LOCKER 1.8 Flex",
    "marca": "Fiat",
    "cod_fipe": "001234-3",
    "vendido": false
  },
  {
    "veiculo": "Doblo Adventure/ Adv.ER 1.8 mpi 8V 103cv",
    "marca": "Fiat",
    "cod_fipe": "001204-1",
    "vendido": false
  },
  {
    "veiculo": "Doblo ATTRACTIVE 1.4 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001353-6",
    "vendido": false
  },
  {
    "veiculo": "Doblo Cargo 1.3 Fire 16V 4/5p",
    "marca": "Fiat",
    "cod_fipe": "001170-3",
    "vendido": false
  },
  {
    "veiculo": "Doblo Cargo 1.6 16V 4/5p",
    "marca": "Fiat",
    "cod_fipe": "001169-0",
    "vendido": false
  },
  {
    "veiculo": "Doblo Cargo 1.8 mpi 8V 103cv",
    "marca": "Fiat",
    "cod_fipe": "001206-8",
    "vendido": false
  },
  {
    "veiculo": "Doblo Cargo 1.8 mpi Fire Flex 8V/16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001235-1",
    "vendido": false
  },
  {
    "veiculo": "Doblo ELX 1.4 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001301-3",
    "vendido": false
  },
  {
    "veiculo": "Doblo ELX 1.6 16V 4/5p",
    "marca": "Fiat",
    "cod_fipe": "001168-1",
    "vendido": false
  },
  {
    "veiculo": "Doblo ELX 1.8 mpi 8V 103cv",
    "marca": "Fiat",
    "cod_fipe": "001205-0",
    "vendido": false
  },
  {
    "veiculo": "Doblo ELX 1.8 mpi 8V Flex",
    "marca": "Fiat",
    "cod_fipe": "001236-0",
    "vendido": false
  },
  {
    "veiculo": "Doblo ESSENCE 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001352-8",
    "vendido": false
  },
  {
    "veiculo": "Doblo EX 1.3 Fire 16V 80cv 4/5p",
    "marca": "Fiat",
    "cod_fipe": "001167-3",
    "vendido": false
  },
  {
    "veiculo": "Doblo HLX 1.8 mpi Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001240-8",
    "vendido": false
  },
  {
    "veiculo": "Ducato Cargo 2.8 Curto/Longo TB Diesel",
    "marca": "Fiat",
    "cod_fipe": "001190-8",
    "vendido": false
  },
  {
    "veiculo": "Ducato Cargo Curto 2.3 ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001282-3",
    "vendido": false
  },
  {
    "veiculo": "Ducato Cargo Longo 2.3 ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001283-1",
    "vendido": false
  },
  {
    "veiculo": "Ducato Combinato 2.3 ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001284-0",
    "vendido": false
  },
  {
    "veiculo": "Ducato Combinato 2.8 Diesel",
    "marca": "Fiat",
    "cod_fipe": "001098-7",
    "vendido": false
  },
  {
    "veiculo": "Ducato Combinato 2.8 Turbo Diesel",
    "marca": "Fiat",
    "cod_fipe": "001106-1",
    "vendido": false
  },
  {
    "veiculo": "Ducato Furgão Maxi 2.8 Diesel",
    "marca": "Fiat",
    "cod_fipe": "001096-0",
    "vendido": false
  },
  {
    "veiculo": "Ducato Maxi. Curta 2.3 T.Alto ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001288-2",
    "vendido": false
  },
  {
    "veiculo": "Ducato Maxi. Long. 2.3 T.Alto ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001289-0",
    "vendido": false
  },
  {
    "veiculo": "Ducato MaxiCargo/Furgão Maxi 2.8 TB Dies",
    "marca": "Fiat",
    "cod_fipe": "001107-0",
    "vendido": false
  },
  {
    "veiculo": "Ducato Minibus 2.3 ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001285-8",
    "vendido": false
  },
  {
    "veiculo": "Ducato Minibus 2.3 T.Alto ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001286-6",
    "vendido": false
  },
  {
    "veiculo": "Ducato Minibus 2.8 Diesel",
    "marca": "Fiat",
    "cod_fipe": "001100-2",
    "vendido": false
  },
  {
    "veiculo": "Ducato Minibus 2.8 Turbo Diesel",
    "marca": "Fiat",
    "cod_fipe": "001108-8",
    "vendido": false
  },
  {
    "veiculo": "Ducato Mult/ Vetrato 2.8 T.Alto TB Dies.",
    "marca": "Fiat",
    "cod_fipe": "001159-2",
    "vendido": false
  },
  {
    "veiculo": "Ducato Mult/ Vetrato 2.8 T.Baixo TB Dies",
    "marca": "Fiat",
    "cod_fipe": "001160-6",
    "vendido": false
  },
  {
    "veiculo": "Ducato Multi Long. 2.3 T.Alto ME Diesel",
    "marca": "Fiat",
    "cod_fipe": "001287-4",
    "vendido": false
  },
  {
    "veiculo": "Ducato Van 2.5  Diesel",
    "marca": "Fiat",
    "cod_fipe": "001132-0",
    "vendido": false
  },
  {
    "veiculo": "Ducato-10 Furgão 2.5 Diesel",
    "marca": "Fiat",
    "cod_fipe": "001130-4",
    "vendido": false
  },
  {
    "veiculo": "Ducato-15 2.8 Furgão TB Diesel",
    "marca": "Fiat",
    "cod_fipe": "001134-7",
    "vendido": false
  },
  {
    "veiculo": "Ducato-15 Furgão 2.8 Diesel",
    "marca": "Fiat",
    "cod_fipe": "001095-2",
    "vendido": false
  },
  {
    "veiculo": "Ducato-8 Furgão 2.5 Diesel",
    "marca": "Fiat",
    "cod_fipe": "001131-2",
    "vendido": false
  },
  {
    "veiculo": "Duna 1.6ie",
    "marca": "Fiat",
    "cod_fipe": "001129-0",
    "vendido": false
  },
  {
    "veiculo": "Elba 1.6i.e/Top/CSL/ 1.6i.e/1.5 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001025-1",
    "vendido": false
  },
  {
    "veiculo": "Elba CS 1.6 / 1.5 /1.3",
    "marca": "Fiat",
    "cod_fipe": "001023-5",
    "vendido": false
  },
  {
    "veiculo": "Elba S 1.6/ 1.5ie / 1.5 / 1.3",
    "marca": "Fiat",
    "cod_fipe": "001022-7",
    "vendido": false
  },
  {
    "veiculo": "Elba Weekend 1.5 i.e. 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001024-3",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Furg.1.5/1.3/1.3 Fire/1.3 F.Flex",
    "marca": "Fiat",
    "cod_fipe": "001027-8",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Furgão 1.0",
    "marca": "Fiat",
    "cod_fipe": "001026-0",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Furgão 1.5 mpi / i.e.",
    "marca": "Fiat",
    "cod_fipe": "001001-4",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Furgão Celeb. EVO 1.4 Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001414-1",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Furgão EVO 1.4 Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001413-3",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Furgão Work. HARD 1.4 Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001477-0",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Pick-Up 1.0",
    "marca": "Fiat",
    "cod_fipe": "001028-6",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Pick-Up 1.5 i.e. / 1.3/1.5 /HD/",
    "marca": "Fiat",
    "cod_fipe": "001029-4",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Pick-Up LX ( todas)",
    "marca": "Fiat",
    "cod_fipe": "001030-8",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Pick-Up Trekking 1.5 mpi / i.e.",
    "marca": "Fiat",
    "cod_fipe": "001003-0",
    "vendido": false
  },
  {
    "veiculo": "Fiorino Pick-Up Working 1.5 mpi / i.e.",
    "marca": "Fiat",
    "cod_fipe": "001002-2",
    "vendido": false
  },
  {
    "veiculo": "FREEMONT 2.4 16V 5p Aut.",
    "marca": "Fiat",
    "cod_fipe": "001365-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ATTRAC. 1.4 EVO F.Flex 8V ",
    "marca": "Fiat",
    "cod_fipe": "001378-1",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ATTRACTIVE 1.0 Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001481-8",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ESSEN. ITALIA Dual. 1.6 Flex",
    "marca": "Fiat",
    "cod_fipe": "001423-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ESSEN.SUBLIME 1.6 Flex",
    "marca": "Fiat",
    "cod_fipe": "001399-4",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ESSEN.SUBLIME Dual. 1.6 Flex",
    "marca": "Fiat",
    "cod_fipe": "001400-1",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ESSENCE 1.6 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001379-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ESSENCE Dual. 1.6 Flex 16V ",
    "marca": "Fiat",
    "cod_fipe": "001380-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena ESSENCE ITALIA 1.6 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001422-2",
    "vendido": false
  },
  {
    "veiculo": "Grand Siena TETRAFUEL 1.4 Evo F. Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001381-1",
    "vendido": false
  },
  {
    "veiculo": "Idea A.Ext./A..Ext.Loc.Dual. 1.8 Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001454-0",
    "vendido": false
  },
  {
    "veiculo": "Idea Adv./ Adv.LOCK.Dualogic 1.8 Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001281-5",
    "vendido": false
  },
  {
    "veiculo": "Idea Adv.Ext./Adv.Ext. Loc. 1.8 Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001455-9",
    "vendido": false
  },
  {
    "veiculo": "Idea Advent./ Adv.LOCKER 1.8 mpi Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001242-4",
    "vendido": false
  },
  {
    "veiculo": "Idea ATTRACTIVE 1.4 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001328-5",
    "vendido": false
  },
  {
    "veiculo": "Idea ELX 1.4 mpi Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001228-9",
    "vendido": false
  },
  {
    "veiculo": "Idea ELX 1.8 mpi Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001276-9",
    "vendido": false
  },
  {
    "veiculo": "Idea ESSENCE 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001326-9",
    "vendido": false
  },
  {
    "veiculo": "Idea ESSENCE Dualogic 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001327-7",
    "vendido": false
  },
  {
    "veiculo": "Idea ESSENCE SUBLIME 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001416-8",
    "vendido": false
  },
  {
    "veiculo": "Idea ESSENCE SUBLIME Dual.1.6 Flex16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001417-6",
    "vendido": false
  },
  {
    "veiculo": "Idea HLX 1.8 mpi Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001229-7",
    "vendido": false
  },
  {
    "veiculo": "Idea SPORTING 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001329-3",
    "vendido": false
  },
  {
    "veiculo": "Idea SPORTING Dualogic 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001330-7",
    "vendido": false
  },
  {
    "veiculo": "LINEA 1.9/ HLX 1.9/ 1.8 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001258-0",
    "vendido": false
  },
  {
    "veiculo": "LINEA 1.9/ HLX 1.9/1.8 Flex  Dualogic 4p",
    "marca": "Fiat",
    "cod_fipe": "001259-9",
    "vendido": false
  },
  {
    "veiculo": "LINEA ABSOLUTE 1.9/1.8 Flex Dualogic 4p",
    "marca": "Fiat",
    "cod_fipe": "001260-2",
    "vendido": false
  },
  {
    "veiculo": "LINEA ESSEN.SUBLIME 1.8 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001409-5",
    "vendido": false
  },
  {
    "veiculo": "LINEA ESSEN.SUBLIME Dual.1.8 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001410-9",
    "vendido": false
  },
  {
    "veiculo": "LINEA ESSENCE 1.8 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001354-4",
    "vendido": false
  },
  {
    "veiculo": "LINEA ESSENCE Dualogic 1.8 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001355-2",
    "vendido": false
  },
  {
    "veiculo": "LINEA LX 1.9/ 1.8 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001274-2",
    "vendido": false
  },
  {
    "veiculo": "LINEA LX 1.9/ 1.8 Flex 16V Dualogic 4p",
    "marca": "Fiat",
    "cod_fipe": "001275-0",
    "vendido": false
  },
  {
    "veiculo": "LINEA T-JET 1.4 16V Turbo 4p",
    "marca": "Fiat",
    "cod_fipe": "001261-0",
    "vendido": false
  },
  {
    "veiculo": "Marea City",
    "marca": "Fiat",
    "cod_fipe": "001079-0",
    "vendido": false
  },
  {
    "veiculo": "Marea ELX 1.8 mpi 16V 132cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001185-1",
    "vendido": false
  },
  {
    "veiculo": "Marea ELX 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001081-2",
    "vendido": false
  },
  {
    "veiculo": "Marea ELX 2.4 mpi 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001144-4",
    "vendido": false
  },
  {
    "veiculo": "Marea HLX 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001082-0",
    "vendido": false
  },
  {
    "veiculo": "Marea HLX 2.4 mpi 20V 4p Aut.",
    "marca": "Fiat",
    "cod_fipe": "001173-8",
    "vendido": false
  },
  {
    "veiculo": "Marea HLX 2.4 mpi 20V 4p Mec.",
    "marca": "Fiat",
    "cod_fipe": "001145-2",
    "vendido": false
  },
  {
    "veiculo": "Marea SX 1.6 mpi 16V 106cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001226-2",
    "vendido": false
  },
  {
    "veiculo": "Marea SX 1.8 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001114-2",
    "vendido": false
  },
  {
    "veiculo": "Marea SX 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001080-4",
    "vendido": false
  },
  {
    "veiculo": "Marea Turbo 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001083-9",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend City 4p",
    "marca": "Fiat",
    "cod_fipe": "001084-7",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend ELX 1.8 mpi 16V 132cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001186-0",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend ELX 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001086-3",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend ELX 2.4 mpi 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001146-0",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend HLX 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001087-1",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend HLX 2.4 mpi 20V 4p Aut.",
    "marca": "Fiat",
    "cod_fipe": "001174-6",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend HLX 2.4 mpi 20V 4p Mec.",
    "marca": "Fiat",
    "cod_fipe": "001147-9",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend SX 1.6 mpi 16V 106cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001227-0",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend SX 1.8 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001133-9",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend SX 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001085-5",
    "vendido": false
  },
  {
    "veiculo": "Marea Weekend Turbo 2.0 20V 4p",
    "marca": "Fiat",
    "cod_fipe": "001088-0",
    "vendido": false
  },
  {
    "veiculo": "MOBI DRIVE 1.0 Flex 6V 5p",
    "marca": "Fiat",
    "cod_fipe": "001480-0",
    "vendido": false
  },
  {
    "veiculo": "MOBI Easy 1.0 Fire Flex 5p.",
    "marca": "Fiat",
    "cod_fipe": "001463-0",
    "vendido": false
  },
  {
    "veiculo": "MOBI Easy on 1.0 Fire Flex 5p.",
    "marca": "Fiat",
    "cod_fipe": "001464-8",
    "vendido": false
  },
  {
    "veiculo": "MOBI Like 1.0 Fire Flex 5p.",
    "marca": "Fiat",
    "cod_fipe": "001461-3",
    "vendido": false
  },
  {
    "veiculo": "MOBI Like on 1.0 Fire Flex 5p.",
    "marca": "Fiat",
    "cod_fipe": "001462-1",
    "vendido": false
  },
  {
    "veiculo": "MOBI WAY 1.0 Fire Flex 5p.",
    "marca": "Fiat",
    "cod_fipe": "001466-4",
    "vendido": false
  },
  {
    "veiculo": "MOBI WAY on 1.0 Fire Flex 5p.",
    "marca": "Fiat",
    "cod_fipe": "001465-6",
    "vendido": false
  },
  {
    "veiculo": "Oggi",
    "marca": "Fiat",
    "cod_fipe": "001105-3",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.0 Cel. ECON./ITALIA F.Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001269-6",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001268-8",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001266-1",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001267-0",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 2p",
    "marca": "Fiat",
    "cod_fipe": "001176-2",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 4p",
    "marca": "Fiat",
    "cod_fipe": "001177-0",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.5 mpi 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001200-9",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.5 mpi 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001201-7",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.6 mpi 16V 2p",
    "marca": "Fiat",
    "cod_fipe": "001009-0",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.6 mpi 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001070-7",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.8R mpi Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001244-0",
    "vendido": false
  },
  {
    "veiculo": "Palio 1.8R mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001231-9",
    "vendido": false
  },
  {
    "veiculo": "Palio ATTRA. Best Seller 1.0 EVO Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001439-7",
    "vendido": false
  },
  {
    "veiculo": "Palio ATTRA. Best Seller 1.4 EVO Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001438-9",
    "vendido": false
  },
  {
    "veiculo": "Palio ATTRACTIVE 1.0 EVO Fire Flex 8v 5p",
    "marca": "Fiat",
    "cod_fipe": "001372-2",
    "vendido": false
  },
  {
    "veiculo": "Palio ATTRACTIVE 1.4 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001314-5",
    "vendido": false
  },
  {
    "veiculo": "Palio Celebration 1.0 Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001237-8",
    "vendido": false
  },
  {
    "veiculo": "Palio Celebration 1.0 Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001238-6",
    "vendido": false
  },
  {
    "veiculo": "Palio City 1.0 4p",
    "marca": "Fiat",
    "cod_fipe": "001067-7",
    "vendido": false
  },
  {
    "veiculo": "Palio City 1.5/1.6 4p",
    "marca": "Fiat",
    "cod_fipe": "001069-3",
    "vendido": false
  },
  {
    "veiculo": "Palio CityMatic 1.0 mpi",
    "marca": "Fiat",
    "cod_fipe": "001115-0",
    "vendido": false
  },
  {
    "veiculo": "Palio ED 1.0 mpi 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001006-5",
    "vendido": false
  },
  {
    "veiculo": "Palio EDX 1.0 mpi 2p",
    "marca": "Fiat",
    "cod_fipe": "001007-3",
    "vendido": false
  },
  {
    "veiculo": "Palio EDX 1.0 mpi 4p",
    "marca": "Fiat",
    "cod_fipe": "001008-1",
    "vendido": false
  },
  {
    "veiculo": "Palio EL 1.5 mpi 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001031-6",
    "vendido": false
  },
  {
    "veiculo": "Palio EL 1.6 spi 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001063-4",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.0 Fire/30 Anos F. Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001207-6",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.0 mpi Fire 16v 4p (25 anos)",
    "marca": "Fiat",
    "cod_fipe": "001151-7",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.0/ 1.0 Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001066-9",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.3 mpi  Fire 16v 4p",
    "marca": "Fiat",
    "cod_fipe": "001142-8",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.3 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001208-4",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.4 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001223-8",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.5 4p",
    "marca": "Fiat",
    "cod_fipe": "001071-5",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.6 4p",
    "marca": "Fiat",
    "cod_fipe": "001068-5",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.6 mpi 16v 4p",
    "marca": "Fiat",
    "cod_fipe": "001152-5",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX 1.8/ 1.8 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001196-7",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX Dualogic 1.8 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001278-5",
    "vendido": false
  },
  {
    "veiculo": "Palio ELX/ 500 1.0 4p",
    "marca": "Fiat",
    "cod_fipe": "001065-0",
    "vendido": false
  },
  {
    "veiculo": "Palio ESSENCE 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001324-2",
    "vendido": false
  },
  {
    "veiculo": "Palio ESSENCE Dualogic 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001325-0",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.0 mpi 2p",
    "marca": "Fiat",
    "cod_fipe": "001004-9",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.0 mpi 4p",
    "marca": "Fiat",
    "cod_fipe": "001005-7",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.0 mpi Fire 8v 4p",
    "marca": "Fiat",
    "cod_fipe": "001154-1",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.0 mpi Fire/ Fire Flex 8v 2p",
    "marca": "Fiat",
    "cod_fipe": "001153-3",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.3 mpi Fire 8V 67cv 2p",
    "marca": "Fiat",
    "cod_fipe": "001178-9",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.3 mpi Fire 8V 67cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001179-7",
    "vendido": false
  },
  {
    "veiculo": "Palio EX 1.8 mpi 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001195-9",
    "vendido": false
  },
  {
    "veiculo": "Palio EX Century 1.0 mpi Fire 16v 2p",
    "marca": "Fiat",
    "cod_fipe": "001171-1",
    "vendido": false
  },
  {
    "veiculo": "Palio EX Century 1.0 mpi Fire 16v 4p",
    "marca": "Fiat",
    "cod_fipe": "001172-0",
    "vendido": false
  },
  {
    "veiculo": "Palio HLX 1.8 mpi 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001209-2",
    "vendido": false
  },
  {
    "veiculo": "Palio HLX 1.8 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001210-6",
    "vendido": false
  },
  {
    "veiculo": "Palio Rua 1.0 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001426-5",
    "vendido": false
  },
  {
    "veiculo": "Palio SPORT.INTERLAGOS 1.6 Flex 16V ",
    "marca": "Fiat",
    "cod_fipe": "001397-8",
    "vendido": false
  },
  {
    "veiculo": "Palio SPORT.INTERLAGOS Dual.1.6 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001398-6",
    "vendido": false
  },
  {
    "veiculo": "Palio SPORTING 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001370-6",
    "vendido": false
  },
  {
    "veiculo": "Palio SPORTING B.Edit. 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001467-2",
    "vendido": false
  },
  {
    "veiculo": "Palio SPORTING Dual. B.Edit. 1.6 Flex 5p",
    "marca": "Fiat",
    "cod_fipe": "001468-0",
    "vendido": false
  },
  {
    "veiculo": "Palio SPORTING Dualogic 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001371-4",
    "vendido": false
  },
  {
    "veiculo": "Palio Stile 1.6 mpi 16v 4p",
    "marca": "Fiat",
    "cod_fipe": "001155-0",
    "vendido": false
  },
  {
    "veiculo": "Palio W.Adv. LOC. ITAL.Dual.1.8 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001376-5",
    "vendido": false
  },
  {
    "veiculo": "Palio W.ADV. LOCK. ITALIA 1.8 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001374-9",
    "vendido": false
  },
  {
    "veiculo": "Palio Way 1.0 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001418-4",
    "vendido": false
  },
  {
    "veiculo": "Palio Way Celebration 1.0 F. Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001419-2",
    "vendido": false
  },
  {
    "veiculo": "Palio Week. Adv. Dualogic 1.8 Flex",
    "marca": "Fiat",
    "cod_fipe": "001357-9",
    "vendido": false
  },
  {
    "veiculo": "Palio Week. Adv. ITALIA 1.8 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001373-0",
    "vendido": false
  },
  {
    "veiculo": "Palio Week. Adv/Adv TRYON 1.8 mpi Flex",
    "marca": "Fiat",
    "cod_fipe": "001216-5",
    "vendido": false
  },
  {
    "veiculo": "Palio Week. ATTRACTIVE 1.4 Fire Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001315-3",
    "vendido": false
  },
  {
    "veiculo": "Palio Week.Adv. ITAL. Dual. 1.8 Flex 16V",
    "marca": "Fiat",
    "cod_fipe": "001375-7",
    "vendido": false
  },
  {
    "veiculo": "Palio Week.Adv.LOCK.Dualogic 1.8 Flex",
    "marca": "Fiat",
    "cod_fipe": "001280-7",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend 1.0 6-marchas",
    "marca": "Fiat",
    "cod_fipe": "001104-5",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend 1.5 mpi 4p",
    "marca": "Fiat",
    "cod_fipe": "001010-3",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend 1.6 mpi 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001011-1",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adv. Ext. 1.8 Dual. Flex",
    "marca": "Fiat",
    "cod_fipe": "001459-1",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adv. Ext. 1.8 Flex",
    "marca": "Fiat",
    "cod_fipe": "001457-5",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adv. Loc.Ext.1.8 Dual.Flex",
    "marca": "Fiat",
    "cod_fipe": "001460-5",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adv. LOCKER Ext. 1.8 Flex",
    "marca": "Fiat",
    "cod_fipe": "001458-3",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adventure 1.6 8v/16v",
    "marca": "Fiat",
    "cod_fipe": "001111-8",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adventure 1.8 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001194-0",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Adventure LOCKER 1.8 Flex",
    "marca": "Fiat",
    "cod_fipe": "001255-6",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend City 1.5/ 1.6 4p",
    "marca": "Fiat",
    "cod_fipe": "001136-3",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend ELX 1.0 mpi Fire 16V",
    "marca": "Fiat",
    "cod_fipe": "001156-8",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend ELX 1.3 mpi  Fire 16V",
    "marca": "Fiat",
    "cod_fipe": "001143-6",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend ELX 1.3 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001214-9",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend ELX 1.4 mpi Fire Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001225-4",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend ELX 1.5 mpi 4p",
    "marca": "Fiat",
    "cod_fipe": "001075-8",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend ELX 1.6 mpi",
    "marca": "Fiat",
    "cod_fipe": "001073-1",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend EX 1.3 mpi Fire 8V 67cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001191-6",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend EX 1.5 mpi",
    "marca": "Fiat",
    "cod_fipe": "001074-0",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend EX 1.8 mpi 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001192-4",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend HLX 1.8 mpi Flex 4p",
    "marca": "Fiat",
    "cod_fipe": "001215-7",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Sport 1.6 mpi 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001013-8",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Stile 1.6 mpi 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001012-0",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Stile 1.8 mpi 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001193-2",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Trekking 1.4 Fire Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001256-4",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Trekking 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001336-6",
    "vendido": false
  },
  {
    "veiculo": "Palio Weekend Trekking 1.8 mpi Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001294-7",
    "vendido": false
  },
  {
    "veiculo": "Palio Young 1.0 mpi 8v 2p",
    "marca": "Fiat",
    "cod_fipe": "001149-5",
    "vendido": false
  },
  {
    "veiculo": "Palio Young 1.0 mpi 8v 4p",
    "marca": "Fiat",
    "cod_fipe": "001150-9",
    "vendido": false
  },
  {
    "veiculo": "Palio Young 1.0 mpi Fire 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001165-7",
    "vendido": false
  },
  {
    "veiculo": "Palio Young 1.0 mpi Fire 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001166-5",
    "vendido": false
  },
  {
    "veiculo": "Panorama C/CL",
    "marca": "Fiat",
    "cod_fipe": "001116-9",
    "vendido": false
  },
  {
    "veiculo": "Premio CS 1.5 i.e. 2p/ SL 1.6/1.5/1.3 4p",
    "marca": "Fiat",
    "cod_fipe": "001034-0",
    "vendido": false
  },
  {
    "veiculo": "Premio CS 1.6/ 1.5/ 1.3 2p",
    "marca": "Fiat",
    "cod_fipe": "001033-2",
    "vendido": false
  },
  {
    "veiculo": "Premio CSL 1.6 i.e./ 1.5 4p",
    "marca": "Fiat",
    "cod_fipe": "001036-7",
    "vendido": false
  },
  {
    "veiculo": "Premio CSL 1.6/ 1.5",
    "marca": "Fiat",
    "cod_fipe": "001035-9",
    "vendido": false
  },
  {
    "veiculo": "Premio S 1.5 i.e./ 1.5 / 1.3",
    "marca": "Fiat",
    "cod_fipe": "001032-4",
    "vendido": false
  },
  {
    "veiculo": "Punto  ELX 1.4 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001249-1",
    "vendido": false
  },
  {
    "veiculo": "Punto 1.4 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001248-3",
    "vendido": false
  },
  {
    "veiculo": "Punto ATTRACTIVE 1.4 Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001313-7",
    "vendido": false
  },
  {
    "veiculo": "Punto ATTRACTIVE ITALIA 1.4 F.Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001377-3",
    "vendido": false
  },
  {
    "veiculo": "Punto BLACKMOTION 1.8 Flex 16V 5p.",
    "marca": "Fiat",
    "cod_fipe": "001407-9",
    "vendido": false
  },
  {
    "veiculo": "Punto BLACKMOTION Dual. 1.8 Flex 16v 5p",
    "marca": "Fiat",
    "cod_fipe": "001408-7",
    "vendido": false
  },
  {
    "veiculo": "Punto Cabrio",
    "marca": "Fiat",
    "cod_fipe": "001120-7",
    "vendido": false
  },
  {
    "veiculo": "Punto EL/ELX",
    "marca": "Fiat",
    "cod_fipe": "001117-7",
    "vendido": false
  },
  {
    "veiculo": "Punto ESSENCE 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001316-1",
    "vendido": false
  },
  {
    "veiculo": "Punto ESSENCE 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001317-0",
    "vendido": false
  },
  {
    "veiculo": "Punto ESSENCE Dualogic 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001342-0",
    "vendido": false
  },
  {
    "veiculo": "Punto ESSENCE Dualogic 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001318-8",
    "vendido": false
  },
  {
    "veiculo": "Punto ESSENCE SP 1.6 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001437-0",
    "vendido": false
  },
  {
    "veiculo": "Punto ESSENCE SP Dualogic 1.6 Flex 16V ",
    "marca": "Fiat",
    "cod_fipe": "001442-7",
    "vendido": false
  },
  {
    "veiculo": "Punto HLX 1.8 Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001250-5",
    "vendido": false
  },
  {
    "veiculo": "Punto S",
    "marca": "Fiat",
    "cod_fipe": "001118-5",
    "vendido": false
  },
  {
    "veiculo": "Punto Sporting 1.8 Flex 8V / 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001251-3",
    "vendido": false
  },
  {
    "veiculo": "Punto Sporting Dualogic 1.8 Flex 16V 5p",
    "marca": "Fiat",
    "cod_fipe": "001319-6",
    "vendido": false
  },
  {
    "veiculo": "Punto SX",
    "marca": "Fiat",
    "cod_fipe": "001119-3",
    "vendido": false
  },
  {
    "veiculo": "Punto T-JET 1.4 16V Turbo 5p",
    "marca": "Fiat",
    "cod_fipe": "001271-8",
    "vendido": false
  },
  {
    "veiculo": "Siena 1.0 mpi/ 500 1.0 mpi",
    "marca": "Fiat",
    "cod_fipe": "001078-2",
    "vendido": false
  },
  {
    "veiculo": "Siena 1.0/ EX 1.0 mpi Fire/ Fire Flex 8v",
    "marca": "Fiat",
    "cod_fipe": "001175-4",
    "vendido": false
  },
  {
    "veiculo": "Siena 1.5 mpi 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001202-5",
    "vendido": false
  },
  {
    "veiculo": "Siena ATTRACTIVE 1.0 Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001320-0",
    "vendido": false
  },
  {
    "veiculo": "Siena ATTRACTIVE 1.4 Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001321-8",
    "vendido": false
  },
  {
    "veiculo": "Siena Celebration 1.0 Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001239-4",
    "vendido": false
  },
  {
    "veiculo": "Siena City 4p",
    "marca": "Fiat",
    "cod_fipe": "001076-6",
    "vendido": false
  },
  {
    "veiculo": "Siena EL 1.0 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001272-6",
    "vendido": false
  },
  {
    "veiculo": "Siena EL 1.4 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001331-5",
    "vendido": false
  },
  {
    "veiculo": "Siena EL 1.6 mpi 16V",
    "marca": "Fiat",
    "cod_fipe": "001015-4",
    "vendido": false
  },
  {
    "veiculo": "Siena EL 1.6 spi",
    "marca": "Fiat",
    "cod_fipe": "001014-6",
    "vendido": false
  },
  {
    "veiculo": "Siena EL Celeb. 1.0 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001273-4",
    "vendido": false
  },
  {
    "veiculo": "Siena EL Celeb. 1.4 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001332-3",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.0 mpi Fire 16v 4p (25 anos)",
    "marca": "Fiat",
    "cod_fipe": "001158-4",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.0 mpi Fire/Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001211-4",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.3 mpi Fire 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001141-0",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.3 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001212-2",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.4 mpi Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001224-6",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.5 mpi 4p",
    "marca": "Fiat",
    "cod_fipe": "001112-6",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.6 mpi 8V/16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001077-4",
    "vendido": false
  },
  {
    "veiculo": "Siena ELX 1.8 mpi 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001199-1",
    "vendido": false
  },
  {
    "veiculo": "Siena ESSENCE 1.6 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001322-6",
    "vendido": false
  },
  {
    "veiculo": "Siena ESSENCE Dualogic 1.6 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001323-4",
    "vendido": false
  },
  {
    "veiculo": "Siena EX 1.0 mpi Fire 16v 4p",
    "marca": "Fiat",
    "cod_fipe": "001157-6",
    "vendido": false
  },
  {
    "veiculo": "Siena EX 1.3 mpi Fire 8V 67cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001198-3",
    "vendido": false
  },
  {
    "veiculo": "Siena EX 1.8 mpi 8V 103cv 4p",
    "marca": "Fiat",
    "cod_fipe": "001197-5",
    "vendido": false
  },
  {
    "veiculo": "Siena HL 1.6 mpi 16V",
    "marca": "Fiat",
    "cod_fipe": "001016-2",
    "vendido": false
  },
  {
    "veiculo": "Siena HLX 1.8 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001213-0",
    "vendido": false
  },
  {
    "veiculo": "Siena HLX Dualogic 1.8 mpi Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001279-3",
    "vendido": false
  },
  {
    "veiculo": "Siena Sporting 1.6 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001333-1",
    "vendido": false
  },
  {
    "veiculo": "Siena Sporting Dualogic 1.6 Flex 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001334-0",
    "vendido": false
  },
  {
    "veiculo": "Siena Stile/Sport MTV 1.6 mpi 16V",
    "marca": "Fiat",
    "cod_fipe": "001017-0",
    "vendido": false
  },
  {
    "veiculo": "Siena TETRAFUEL 1.4 mpi Fire Flex 8v 4p",
    "marca": "Fiat",
    "cod_fipe": "001241-6",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8 ATTRACTIVE Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001298-0",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8 MS Lim.Edit./ MS Season 16V",
    "marca": "Fiat",
    "cod_fipe": "001220-3",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8 SP Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001243-2",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8 Sporting Flex 8V 5P",
    "marca": "Fiat",
    "cod_fipe": "001247-5",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8/ 1.8 Connect 8V 103cv 5p",
    "marca": "Fiat",
    "cod_fipe": "001180-0",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8/ 1.8 Connect Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001230-0",
    "vendido": false
  },
  {
    "veiculo": "Stilo 1.8/ 1.8 SP/ Connect 16V 122cv 5p",
    "marca": "Fiat",
    "cod_fipe": "001181-9",
    "vendido": false
  },
  {
    "veiculo": "Stilo 2.4 Abarth 20V 167cv 5p",
    "marca": "Fiat",
    "cod_fipe": "001182-7",
    "vendido": false
  },
  {
    "veiculo": "Stilo Dualogic 1.8 BlackMotion Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001270-0",
    "vendido": false
  },
  {
    "veiculo": "Stilo Dualogic 1.8 Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001252-1",
    "vendido": false
  },
  {
    "veiculo": "Stilo Dualogic 1.8 SP Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001253-0",
    "vendido": false
  },
  {
    "veiculo": "Stilo Dualogic 1.8 Sporting Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001254-8",
    "vendido": false
  },
  {
    "veiculo": "Stilo Duologic 1.8 ATTRACTIVE Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001299-8",
    "vendido": false
  },
  {
    "veiculo": "Strada 1.3 mpi Fire 8V 67cv CE",
    "marca": "Fiat",
    "cod_fipe": "001184-3",
    "vendido": false
  },
  {
    "veiculo": "Strada 1.3 mpi Fire 8V 67cv CS",
    "marca": "Fiat",
    "cod_fipe": "001183-5",
    "vendido": false
  },
  {
    "veiculo": "Strada 1.4 mpi Fire Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001222-0",
    "vendido": false
  },
  {
    "veiculo": "Strada 1.4 mpi Fire Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001221-1",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv. Ext. 1.8 LOCKER Dual.Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001446-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv. Ext./ Ext.1.8 LOCKER Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001448-6",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv. Extreme 1.8 Dual. Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001447-8",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv. M. March. 1.8 Flex 16V CD",
    "marca": "Fiat",
    "cod_fipe": "001404-4",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv. M. March.1.8 Dual. Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001405-2",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv.1.8 16V  LOCKER Dual. Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001412-5",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv.1.8 16V Dualogic Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001363-3",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv.1.8 16V Dualogic Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001411-7",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv.1.8 16V LOCKER Dualo. Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001364-1",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv.Ext. 1.8 LOCKER Dual. Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001443-5",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv.Ext./ Ext. 1.8 LOCKER Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001445-1",
    "vendido": false
  },
  {
    "veiculo": "Strada Adv/Adv TRYON 1.8 mpi Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001219-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Adventure 1.6 mpi 16V CE",
    "marca": "Fiat",
    "cod_fipe": "001163-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Adventure 1.8 mpi 8V 103cv CE",
    "marca": "Fiat",
    "cod_fipe": "001189-4",
    "vendido": false
  },
  {
    "veiculo": "Strada Adventure 1.8/ 1.8 LOCKER Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001257-2",
    "vendido": false
  },
  {
    "veiculo": "Strada Adventure Ext. 1.8  Dual. Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001444-3",
    "vendido": false
  },
  {
    "veiculo": "Strada Adventure1.8/ 1.8 LOCKER Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001277-7",
    "vendido": false
  },
  {
    "veiculo": "Strada Celeb. 1.4 mpi Fire Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001312-9",
    "vendido": false
  },
  {
    "veiculo": "Strada Celeb. 1.4 mpi Fire Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001311-0",
    "vendido": false
  },
  {
    "veiculo": "Strada LX 1.6 16V CE",
    "marca": "Fiat",
    "cod_fipe": "001113-4",
    "vendido": false
  },
  {
    "veiculo": "Strada LX 1.6 mpi 16V",
    "marca": "Fiat",
    "cod_fipe": "001091-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Sporting 1.8 Flex 16V CE",
    "marca": "Fiat",
    "cod_fipe": "001335-8",
    "vendido": false
  },
  {
    "veiculo": "Strada Trek. M. March. 1.6 Flex 16V CE",
    "marca": "Fiat",
    "cod_fipe": "001406-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.4 mpi Fire Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001233-5",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.4 mpi Fire Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001232-7",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.6 16V Flex CD",
    "marca": "Fiat",
    "cod_fipe": "001388-9",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.6 16V Flex CE",
    "marca": "Fiat",
    "cod_fipe": "001387-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.6 16V Flex CS",
    "marca": "Fiat",
    "cod_fipe": "001386-2",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.6 16V LOCKER Flex  CD",
    "marca": "Fiat",
    "cod_fipe": "001441-9",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.6 mpi",
    "marca": "Fiat",
    "cod_fipe": "001090-1",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.8 mpi Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001218-1",
    "vendido": false
  },
  {
    "veiculo": "Strada Trekking 1.8 mpi Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001217-3",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.4 mpi Fire Flex 8V CD",
    "marca": "Fiat",
    "cod_fipe": "001293-9",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.4 mpi Fire Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001292-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.4 mpi Fire Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001291-2",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.6 mpi 16V CE",
    "marca": "Fiat",
    "cod_fipe": "001148-7",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.6 mpi 16V CS",
    "marca": "Fiat",
    "cod_fipe": "001164-9",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.8 mpi 8v 103cv CE",
    "marca": "Fiat",
    "cod_fipe": "001188-6",
    "vendido": false
  },
  {
    "veiculo": "Strada Working 1.8 mpi 8V 103cv CS",
    "marca": "Fiat",
    "cod_fipe": "001187-8",
    "vendido": false
  },
  {
    "veiculo": "Strada Working Celeb.1.4 Fire Flex 8V CD",
    "marca": "Fiat",
    "cod_fipe": "001391-9",
    "vendido": false
  },
  {
    "veiculo": "Strada Working Celeb.1.4 Fire Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001390-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Working Celeb.1.4 Fire Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001389-7",
    "vendido": false
  },
  {
    "veiculo": "Strada Working HARD 1.4 Fire Flex 8V CD",
    "marca": "Fiat",
    "cod_fipe": "001431-1",
    "vendido": false
  },
  {
    "veiculo": "Strada Working HARD 1.4 Fire Flex 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001432-0",
    "vendido": false
  },
  {
    "veiculo": "Strada Working HARD 1.4 Fire Flex 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001433-8",
    "vendido": false
  },
  {
    "veiculo": "Strada Working Plus 1.4 8V Flex CS",
    "marca": "Fiat",
    "cod_fipe": "001478-8",
    "vendido": false
  },
  {
    "veiculo": "Strada/ Strada Working 1.5 mpi 8V CE",
    "marca": "Fiat",
    "cod_fipe": "001122-3",
    "vendido": false
  },
  {
    "veiculo": "Strada/ Strada Working 1.5 mpi 8V CS",
    "marca": "Fiat",
    "cod_fipe": "001089-8",
    "vendido": false
  },
  {
    "veiculo": "Tempra 2.0 i.e 16V 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001037-5",
    "vendido": false
  },
  {
    "veiculo": "Tempra 2.0 i.e. 8V 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001092-8",
    "vendido": false
  },
  {
    "veiculo": "Tempra 2.0 mpi 16V",
    "marca": "Fiat",
    "cod_fipe": "001093-6",
    "vendido": false
  },
  {
    "veiculo": "Tempra 8V/ City 8V",
    "marca": "Fiat",
    "cod_fipe": "001102-9",
    "vendido": false
  },
  {
    "veiculo": "Tempra HLX 2.0 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001042-1",
    "vendido": false
  },
  {
    "veiculo": "Tempra Ouro 16V 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001040-5",
    "vendido": false
  },
  {
    "veiculo": "Tempra Ouro/Prata 2.0 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001038-3",
    "vendido": false
  },
  {
    "veiculo": "Tempra Stile 2.0 i.e. Turbo 4p",
    "marca": "Fiat",
    "cod_fipe": "001044-8",
    "vendido": false
  },
  {
    "veiculo": "Tempra SW SLX 2.0 i.e.",
    "marca": "Fiat",
    "cod_fipe": "001058-8",
    "vendido": false
  },
  {
    "veiculo": "Tempra SX 2.0 16V 4p",
    "marca": "Fiat",
    "cod_fipe": "001041-3",
    "vendido": false
  },
  {
    "veiculo": "Tempra SX 2.0 i.e. 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001039-1",
    "vendido": false
  },
  {
    "veiculo": "Tempra Turbo 2.0 i.e. 2p",
    "marca": "Fiat",
    "cod_fipe": "001043-0",
    "vendido": false
  },
  {
    "veiculo": "Tipo 1.6 i.e. 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001059-6",
    "vendido": false
  },
  {
    "veiculo": "Tipo 1.6 mpi 4p",
    "marca": "Fiat",
    "cod_fipe": "001045-6",
    "vendido": false
  },
  {
    "veiculo": "Tipo 2.0 16V 2p/4p",
    "marca": "Fiat",
    "cod_fipe": "001061-8",
    "vendido": false
  },
  {
    "veiculo": "Tipo 2.0 SLX 4p",
    "marca": "Fiat",
    "cod_fipe": "001062-6",
    "vendido": false
  },
  {
    "veiculo": "Toro Freedom 1.8 16V Flex Aut.",
    "marca": "Fiat",
    "cod_fipe": "001449-4",
    "vendido": false
  },
  {
    "veiculo": "Toro Freedom 2.0 16V 4x2 TB Diesel Mec.",
    "marca": "Fiat",
    "cod_fipe": "001451-6",
    "vendido": false
  },
  {
    "veiculo": "Toro Freedom 2.0 16V 4x4 TB Diesel Mec.",
    "marca": "Fiat",
    "cod_fipe": "001452-4",
    "vendido": false
  },
  {
    "veiculo": "Toro Freedom 2.4 16V Flex Aut.",
    "marca": "Fiat",
    "cod_fipe": "001479-6",
    "vendido": false
  },
  {
    "veiculo": "Toro Opening Edition 1.8 16V Flex Aut.",
    "marca": "Fiat",
    "cod_fipe": "001450-8",
    "vendido": false
  },
  {
    "veiculo": "Toro Volcano 2.0 16V 4x4 TB Diesel Aut.",
    "marca": "Fiat",
    "cod_fipe": "001453-2",
    "vendido": false
  },
  {
    "veiculo": "Uno 1.6 mpi 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001054-5",
    "vendido": false
  },
  {
    "veiculo": "Uno 1.6R mpi / 1.6R / 1.5R",
    "marca": "Fiat",
    "cod_fipe": "001055-3",
    "vendido": false
  },
  {
    "veiculo": "UNO ATTRACTI. Celeb.1.4 EVO F.Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001348-0",
    "vendido": false
  },
  {
    "veiculo": "UNO ATTRACTI. Celeb.1.4 EVO F.Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001308-0",
    "vendido": false
  },
  {
    "veiculo": "UNO ATTRACTIVE 1.0 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001424-9",
    "vendido": false
  },
  {
    "veiculo": "UNO ATTRACTIVE 1.0 Flex 6V 5p",
    "marca": "Fiat",
    "cod_fipe": "001475-3",
    "vendido": false
  },
  {
    "veiculo": "UNO ATTRACTIVE 1.4 EVO Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001347-1",
    "vendido": false
  },
  {
    "veiculo": "UNO ATTRACTIVE 1.4 EVO Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001304-8",
    "vendido": false
  },
  {
    "veiculo": "Uno City / Smart City 1.0 4p",
    "marca": "Fiat",
    "cod_fipe": "001094-4",
    "vendido": false
  },
  {
    "veiculo": "Uno CS/Top/Sport 1.5 i.e. / 1.5 /1.3",
    "marca": "Fiat",
    "cod_fipe": "001051-0",
    "vendido": false
  },
  {
    "veiculo": "Uno CS/Top/Sport 1.5 i.e. / 1.5 4p",
    "marca": "Fiat",
    "cod_fipe": "001052-9",
    "vendido": false
  },
  {
    "veiculo": "Uno CSL 1.6 4p (Argentino)",
    "marca": "Fiat",
    "cod_fipe": "001053-7",
    "vendido": false
  },
  {
    "veiculo": "UNO ECONOMY 1.4 EVO Fire Flex 8V 2p  ",
    "marca": "Fiat",
    "cod_fipe": "001366-8",
    "vendido": false
  },
  {
    "veiculo": "UNO ECONOMY 1.4 EVO Fire Flex 8V 4p      ",
    "marca": "Fiat",
    "cod_fipe": "001367-6",
    "vendido": false
  },
  {
    "veiculo": "UNO ECONOMY Celeb. 1.4 EVO F. Flex 8V 2p  ",
    "marca": "Fiat",
    "cod_fipe": "001368-4",
    "vendido": false
  },
  {
    "veiculo": "UNO ECONOMY Celeb. 1.4 EVO F. Flex 8V 4p          ",
    "marca": "Fiat",
    "cod_fipe": "001369-2",
    "vendido": false
  },
  {
    "veiculo": "UNO EVOLUTION 1.4 Fire Flex 8V 5p ",
    "marca": "Fiat",
    "cod_fipe": "001425-7",
    "vendido": false
  },
  {
    "veiculo": "UNO Furgão 1.0 Fire Flex 8V 3p",
    "marca": "Fiat",
    "cod_fipe": "001430-3",
    "vendido": false
  },
  {
    "veiculo": "Uno Furgão 1.3 mpi Fire/ Fire Flex 8V",
    "marca": "Fiat",
    "cod_fipe": "001203-3",
    "vendido": false
  },
  {
    "veiculo": "Uno Furgão 1.5 mpi/i.e.",
    "marca": "Fiat",
    "cod_fipe": "001021-9",
    "vendido": false
  },
  {
    "veiculo": "Uno Furgão 1.5/ 1.3",
    "marca": "Fiat",
    "cod_fipe": "001049-9",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille  ELX  2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001048-0",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille 1.0 Electronic 4p",
    "marca": "Fiat",
    "cod_fipe": "001047-2",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille 1.0 Fire/ F.Flex/ ECONOMY 2p",
    "marca": "Fiat",
    "cod_fipe": "001161-4",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille 1.0 Fire/ F.Flex/ ECONOMY 4p",
    "marca": "Fiat",
    "cod_fipe": "001162-2",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille 1.0/ i.e./ Electronic/  Brio",
    "marca": "Fiat",
    "cod_fipe": "001046-4",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille Celeb. WAY ECON. 1.0 F.Flex 2p",
    "marca": "Fiat",
    "cod_fipe": "001264-5",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille Celeb. WAY ECON. 1.0 F.Flex 4p",
    "marca": "Fiat",
    "cod_fipe": "001265-3",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille Celeb/Celeb.ECON 1.0 F.Flex 2p",
    "marca": "Fiat",
    "cod_fipe": "001245-9",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille Celeb/Celeb.ECON 1.0 F.Flex 4p",
    "marca": "Fiat",
    "cod_fipe": "001246-7",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille EP 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001064-2",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille Grazie 1.0 Fire Flex 8v 4p",
    "marca": "Fiat",
    "cod_fipe": "001415-0",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille SX 2p e 4p",
    "marca": "Fiat",
    "cod_fipe": "001020-0",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille SX Young 1.0 IE",
    "marca": "Fiat",
    "cod_fipe": "001103-7",
    "vendido": false
  },
  {
    "veiculo": "UNO MILLE WAY ECO.XINGU 1.0 F.Flex 8v 5p",
    "marca": "Fiat",
    "cod_fipe": "001393-5",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille WAY ECONOMY 1.0 F.Flex 2p",
    "marca": "Fiat",
    "cod_fipe": "001262-9",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille WAY ECONOMY 1.0 F.Flex 4p",
    "marca": "Fiat",
    "cod_fipe": "001263-7",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille/ Mille EX/ Smart 2p",
    "marca": "Fiat",
    "cod_fipe": "001018-9",
    "vendido": false
  },
  {
    "veiculo": "Uno Mille/ Mille EX/ Smart 4p",
    "marca": "Fiat",
    "cod_fipe": "001137-1",
    "vendido": false
  },
  {
    "veiculo": "Uno S 1.5 i.e. / 1.5 / 1.3/ SX 1.3",
    "marca": "Fiat",
    "cod_fipe": "001050-2",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORT. Dual. 1.4 B.Edit. Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001469-9",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORT.INTERLAGOS 1.4 EVO F.Flex 8v  ",
    "marca": "Fiat",
    "cod_fipe": "001396-0",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORTING 1.3 Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001471-0",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORTING 1.4 B.Edit. Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001470-2",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORTING 1.4 EVO Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001351-0",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORTING 1.4 EVO Fire Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001341-2",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORTING Dualogic 1.3 Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001472-9",
    "vendido": false
  },
  {
    "veiculo": "UNO SPORTING Dualogic 1.4 EVO Flex 8V 4p",
    "marca": "Fiat",
    "cod_fipe": "001428-1",
    "vendido": false
  },
  {
    "veiculo": "Uno Turbo 1.4 i.e. 2p",
    "marca": "Fiat",
    "cod_fipe": "001056-1",
    "vendido": false
  },
  {
    "veiculo": "UNO VIVACE 1.0 EVO Fire Flex 8V 3p",
    "marca": "Fiat",
    "cod_fipe": "001343-9",
    "vendido": false
  },
  {
    "veiculo": "UNO VIVACE Celeb. 1.0 EVO F. Flex 8V 3p",
    "marca": "Fiat",
    "cod_fipe": "001344-7",
    "vendido": false
  },
  {
    "veiculo": "UNO VIVACE Celeb. 1.0 EVO F.Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001307-2",
    "vendido": false
  },
  {
    "veiculo": "UNO VIVACE College 1.0 EVO FireFlex 5p",
    "marca": "Fiat",
    "cod_fipe": "001401-0",
    "vendido": false
  },
  {
    "veiculo": "UNO VIVACE ITALIA 1.0 EVO F. Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001436-2",
    "vendido": false
  },
  {
    "veiculo": "UNO VIVACE/RUA 1.0 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001303-0",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.0 EVO Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001345-5",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.0 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001305-6",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.0 Flex 6V 5p",
    "marca": "Fiat",
    "cod_fipe": "001474-5",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.3 Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001473-7",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.4 EVO Dualogic Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001427-3",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.4 EVO Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001349-8",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY 1.4 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001306-4",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY Celeb. 1.0 EVO Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001346-3",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY Celeb. 1.0 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001309-9",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY Celeb. 1.4 EVO Fire Flex 8V 2p",
    "marca": "Fiat",
    "cod_fipe": "001350-1",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY Celeb. 1.4 EVO Fire Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001310-2",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY Dualogic 1.3 Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001476-1",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY RIO 450 1.0 EVO Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001440-0",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY XINGU 1.0 EVO F.Flex 8V 5P",
    "marca": "Fiat",
    "cod_fipe": "001394-3",
    "vendido": false
  },
  {
    "veiculo": "UNO WAY XINGU 1.4 EVO F.Flex 8V 5p",
    "marca": "Fiat",
    "cod_fipe": "001395-1",
    "vendido": false
  },
  {
    "veiculo": "Buggy Off Road 1.8 8V",
    "marca": "Fibravan",
    "cod_fipe": "067004-9",
    "vendido": false
  },
  {
    "veiculo": "Buggy Plus 1.6 8V",
    "marca": "Fibravan",
    "cod_fipe": "067001-4",
    "vendido": false
  },
  {
    "veiculo": "Buggy Vip 1.6 8V Total Flex",
    "marca": "Fibravan",
    "cod_fipe": "067003-0",
    "vendido": false
  },
  {
    "veiculo": "Buggy Vip 1.8 8V",
    "marca": "Fibravan",
    "cod_fipe": "067002-2",
    "vendido": false
  },
  {
    "veiculo": "Aerostar Mini-Van 3.8",
    "marca": "Ford",
    "cod_fipe": "003118-6",
    "vendido": false
  },
  {
    "veiculo": "Aspire 1.3",
    "marca": "Ford",
    "cod_fipe": "003152-6",
    "vendido": false
  },
  {
    "veiculo": "Belina GL 1.8 / 1.6",
    "marca": "Ford",
    "cod_fipe": "003021-0",
    "vendido": false
  },
  {
    "veiculo": "Belina L 1.8/ 1.6",
    "marca": "Ford",
    "cod_fipe": "003020-1",
    "vendido": false
  },
  {
    "veiculo": "Club Wagon V8",
    "marca": "Ford",
    "cod_fipe": "003119-4",
    "vendido": false
  },
  {
    "veiculo": "Club Wagon XLT 4.9 V6",
    "marca": "Ford",
    "cod_fipe": "003120-8",
    "vendido": false
  },
  {
    "veiculo": "Contour SE/ GL/ LX  2.0 16V",
    "marca": "Ford",
    "cod_fipe": "003121-6",
    "vendido": false
  },
  {
    "veiculo": "Contour SE/GL/ LX 2.5 24V",
    "marca": "Ford",
    "cod_fipe": "003122-4",
    "vendido": false
  },
  {
    "veiculo": "Corcel II GL/GT",
    "marca": "Ford",
    "cod_fipe": "003129-1",
    "vendido": false
  },
  {
    "veiculo": "Corcel II L",
    "marca": "Ford",
    "cod_fipe": "003128-3",
    "vendido": false
  },
  {
    "veiculo": "Courier 1.3i/Furgão",
    "marca": "Ford",
    "cod_fipe": "003001-5",
    "vendido": false
  },
  {
    "veiculo": "Courier 1.6 L/ 1.6 Flex",
    "marca": "Ford",
    "cod_fipe": "003139-9",
    "vendido": false
  },
  {
    "veiculo": "Courier CLX 1.4i 16V",
    "marca": "Ford",
    "cod_fipe": "003002-3",
    "vendido": false
  },
  {
    "veiculo": "Courier Si 1.4i 16V",
    "marca": "Ford",
    "cod_fipe": "003003-1",
    "vendido": false
  },
  {
    "veiculo": "Courier Sport 1.6 8v",
    "marca": "Ford",
    "cod_fipe": "003231-0",
    "vendido": false
  },
  {
    "veiculo": "Courier Van 1.6/ 1.6 Flex 8V  ( Carga )",
    "marca": "Ford",
    "cod_fipe": "003312-0",
    "vendido": false
  },
  {
    "veiculo": "Courier XL/XL-RS 1.6/ XL 1.6 Flex",
    "marca": "Ford",
    "cod_fipe": "003140-2",
    "vendido": false
  },
  {
    "veiculo": "Crown Victoria LX 4.6",
    "marca": "Ford",
    "cod_fipe": "003153-4",
    "vendido": false
  },
  {
    "veiculo": "Del Rey Belina Ghia",
    "marca": "Ford",
    "cod_fipe": "003135-6",
    "vendido": false
  },
  {
    "veiculo": "Del Rey Belina GL",
    "marca": "Ford",
    "cod_fipe": "003133-0",
    "vendido": false
  },
  {
    "veiculo": "Del Rey Belina GLX",
    "marca": "Ford",
    "cod_fipe": "003134-8",
    "vendido": false
  },
  {
    "veiculo": "Del Rey Belina L",
    "marca": "Ford",
    "cod_fipe": "003132-1",
    "vendido": false
  },
  {
    "veiculo": "Del Rey Ghia 1.8 / 1.6 2p e 4p",
    "marca": "Ford",
    "cod_fipe": "003025-2",
    "vendido": false
  },
  {
    "veiculo": "Del Rey GLX 1.6/1.8 / GL 1.6/1.8 2p e 4p",
    "marca": "Ford",
    "cod_fipe": "003024-4",
    "vendido": false
  },
  {
    "veiculo": "Del Rey L 1.8 / 1.6 2p e 4p",
    "marca": "Ford",
    "cod_fipe": "003023-6",
    "vendido": false
  },
  {
    "veiculo": "EcoSport 4WD 2.0/ 2.0 Flex 16V 5p",
    "marca": "Ford",
    "cod_fipe": "003285-9",
    "vendido": false
  },
  {
    "veiculo": "EcoSport FREESTYLE 1.6 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003367-7",
    "vendido": false
  },
  {
    "veiculo": "EcoSport FREESTYLE 1.6 16V Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003420-7",
    "vendido": false
  },
  {
    "veiculo": "EcoSport FREESTYLE 2.0 16V 4WD Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003391-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport FREESTYLE 2.0 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003369-3",
    "vendido": false
  },
  {
    "veiculo": "EcoSport FREESTYLE 2.0 16V Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003407-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport S 1.6 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003365-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport SE 1.6 16V Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003419-3",
    "vendido": false
  },
  {
    "veiculo": "EcoSport SE 1.6 16V Flex 5p Mec.",
    "marca": "Ford",
    "cod_fipe": "003366-9",
    "vendido": false
  },
  {
    "veiculo": "EcoSport SE 2.0 16V Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003373-1",
    "vendido": false
  },
  {
    "veiculo": "EcoSport SE Direct 1.6 16V Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003427-4",
    "vendido": false
  },
  {
    "veiculo": "EcoSport TITANIUM 1.6 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003368-5",
    "vendido": false
  },
  {
    "veiculo": "EcoSport TITANIUM 2.0 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003370-7",
    "vendido": false
  },
  {
    "veiculo": "EcoSport TITANIUM 2.0 16V Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003374-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XL 1.6/ 1.6 Flex 8V 5p",
    "marca": "Ford",
    "cod_fipe": "003268-9",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XL Supercharger 1.0 8V 95cv 5p",
    "marca": "Ford",
    "cod_fipe": "003267-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLS 1.6/ 1.6 Flex 8V 5p",
    "marca": "Ford",
    "cod_fipe": "003269-7",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLS 2.0/2.0 Flex 16V 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003319-7",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLS FREESTYLE 1.6 Flex 8V 5p",
    "marca": "Ford",
    "cod_fipe": "003303-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLT 1.6/ 1.6 Flex 8V 5p",
    "marca": "Ford",
    "cod_fipe": "003270-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLT 2.0/ 2.0 Flex 16V 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003320-0",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLT 2.0/ 2.0 Flex 16V 5p Mec.",
    "marca": "Ford",
    "cod_fipe": "003271-9",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLT FREESTYLE 1.6 Flex 8V 5p",
    "marca": "Ford",
    "cod_fipe": "003318-9",
    "vendido": false
  },
  {
    "veiculo": "EcoSport XLT FREESTYLE 2.0 Flex 16V 5p",
    "marca": "Ford",
    "cod_fipe": "003330-8",
    "vendido": false
  },
  {
    "veiculo": "EDGE LIMITED 3.5 V6 24V AWD Aut.",
    "marca": "Ford",
    "cod_fipe": "003344-8",
    "vendido": false
  },
  {
    "veiculo": "EDGE LIMITED 3.5 V6 24V FWD Aut.",
    "marca": "Ford",
    "cod_fipe": "003352-9",
    "vendido": false
  },
  {
    "veiculo": "EDGE SEL 3.5 V6  24V FWD Aut.",
    "marca": "Ford",
    "cod_fipe": "003353-7",
    "vendido": false
  },
  {
    "veiculo": "EDGE SEL 3.5 V6 24V AWD Aut.",
    "marca": "Ford",
    "cod_fipe": "003329-4",
    "vendido": false
  },
  {
    "veiculo": "EDGE TITANIUM 3.5 V6 24V AWD Aut.",
    "marca": "Ford",
    "cod_fipe": "003428-2",
    "vendido": false
  },
  {
    "veiculo": "Escort  Racer 2.0i",
    "marca": "Ford",
    "cod_fipe": "003123-2",
    "vendido": false
  },
  {
    "veiculo": "Escort Ghia 1.8i / 1.8 / 1.6",
    "marca": "Ford",
    "cod_fipe": "003035-0",
    "vendido": false
  },
  {
    "veiculo": "Escort Ghia 2.0i / 2.0",
    "marca": "Ford",
    "cod_fipe": "003036-8",
    "vendido": false
  },
  {
    "veiculo": "Escort GL 1.6 MPI",
    "marca": "Ford",
    "cod_fipe": "003207-7",
    "vendido": false
  },
  {
    "veiculo": "Escort GL 1.6i / 1.6",
    "marca": "Ford",
    "cod_fipe": "003030-9",
    "vendido": false
  },
  {
    "veiculo": "Escort GL 1.8i / 1.8",
    "marca": "Ford",
    "cod_fipe": "003031-7",
    "vendido": false
  },
  {
    "veiculo": "Escort GL 1.8i 16V 3p",
    "marca": "Ford",
    "cod_fipe": "003004-0",
    "vendido": false
  },
  {
    "veiculo": "Escort GL 1.8i 16V 4p",
    "marca": "Ford",
    "cod_fipe": "003005-8",
    "vendido": false
  },
  {
    "veiculo": "Escort GLX 1.6i",
    "marca": "Ford",
    "cod_fipe": "003032-5",
    "vendido": false
  },
  {
    "veiculo": "Escort GLX 1.8i 16V 4p",
    "marca": "Ford",
    "cod_fipe": "003007-4",
    "vendido": false
  },
  {
    "veiculo": "Escort GLX 1.8i 8v",
    "marca": "Ford",
    "cod_fipe": "003033-3",
    "vendido": false
  },
  {
    "veiculo": "Escort Guarujá 1.8 4p",
    "marca": "Ford",
    "cod_fipe": "003034-1",
    "vendido": false
  },
  {
    "veiculo": "Escort Hobby 1.0",
    "marca": "Ford",
    "cod_fipe": "003026-0",
    "vendido": false
  },
  {
    "veiculo": "Escort Hobby 1.6",
    "marca": "Ford",
    "cod_fipe": "003027-9",
    "vendido": false
  },
  {
    "veiculo": "Escort L 1.8i / 1.8",
    "marca": "Ford",
    "cod_fipe": "003029-5",
    "vendido": false
  },
  {
    "veiculo": "Escort L/LX 1.6",
    "marca": "Ford",
    "cod_fipe": "003028-7",
    "vendido": false
  },
  {
    "veiculo": "Escort RS 1.8i 16V",
    "marca": "Ford",
    "cod_fipe": "003095-3",
    "vendido": false
  },
  {
    "veiculo": "Escort S.W GL 1.8i 16V",
    "marca": "Ford",
    "cod_fipe": "003006-6",
    "vendido": false
  },
  {
    "veiculo": "Escort S.W. GLX 1.8i 16V",
    "marca": "Ford",
    "cod_fipe": "003008-2",
    "vendido": false
  },
  {
    "veiculo": "Escort SW 1.9 16v",
    "marca": "Ford",
    "cod_fipe": "003230-1",
    "vendido": false
  },
  {
    "veiculo": "Escort SW GL 1.6 MPI",
    "marca": "Ford",
    "cod_fipe": "003208-5",
    "vendido": false
  },
  {
    "veiculo": "Escort XR3 1.8 / 1.6 Beneton/Form./Laser",
    "marca": "Ford",
    "cod_fipe": "003038-4",
    "vendido": false
  },
  {
    "veiculo": "Escort XR3 1.8 / 1.6 Conversível",
    "marca": "Ford",
    "cod_fipe": "003039-2",
    "vendido": false
  },
  {
    "veiculo": "Escort XR3 2.0i",
    "marca": "Ford",
    "cod_fipe": "003040-6",
    "vendido": false
  },
  {
    "veiculo": "Escort XR3 2.0i Conversível",
    "marca": "Ford",
    "cod_fipe": "003041-4",
    "vendido": false
  },
  {
    "veiculo": "Expedition 5.4 V8",
    "marca": "Ford",
    "cod_fipe": "003154-2",
    "vendido": false
  },
  {
    "veiculo": "Explorer Limited 4.0 4x4 V6 213cv",
    "marca": "Ford",
    "cod_fipe": "003290-5",
    "vendido": false
  },
  {
    "veiculo": "Explorer Limited 5.0 4x4 V8",
    "marca": "Ford",
    "cod_fipe": "003138-0",
    "vendido": false
  },
  {
    "veiculo": "Explorer Sport 4.0 V6",
    "marca": "Ford",
    "cod_fipe": "003157-7",
    "vendido": false
  },
  {
    "veiculo": "Explorer XL 4x2 4.0 V6",
    "marca": "Ford",
    "cod_fipe": "003155-0",
    "vendido": false
  },
  {
    "veiculo": "Explorer XL 4x4 4.0 V6",
    "marca": "Ford",
    "cod_fipe": "003156-9",
    "vendido": false
  },
  {
    "veiculo": "Explorer XLT 4x2 4.0 V6",
    "marca": "Ford",
    "cod_fipe": "003073-2",
    "vendido": false
  },
  {
    "veiculo": "Explorer XLT 4x4 4.0 V6",
    "marca": "Ford",
    "cod_fipe": "003074-0",
    "vendido": false
  },
  {
    "veiculo": "F-100 2.3",
    "marca": "Ford",
    "cod_fipe": "003185-2",
    "vendido": false
  },
  {
    "veiculo": "F-100 Blazer 2.3",
    "marca": "Ford",
    "cod_fipe": "003186-0",
    "vendido": false
  },
  {
    "veiculo": "F-100 CD 2.3",
    "marca": "Ford",
    "cod_fipe": "003187-9",
    "vendido": false
  },
  {
    "veiculo": "F-100 Super 2.3",
    "marca": "Ford",
    "cod_fipe": "003188-7",
    "vendido": false
  },
  {
    "veiculo": "F-100 Super Série 2.3",
    "marca": "Ford",
    "cod_fipe": "003189-5",
    "vendido": false
  },
  {
    "veiculo": "F-1000 CD/Blazer 3.6",
    "marca": "Ford",
    "cod_fipe": "003162-3",
    "vendido": false
  },
  {
    "veiculo": "F-1000 CD/Blazer 3.9 Dies.",
    "marca": "Ford",
    "cod_fipe": "003163-1",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Lightning/ Super 4.9i",
    "marca": "Ford",
    "cod_fipe": "003164-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Regular Cab. 4.9i",
    "marca": "Ford",
    "cod_fipe": "003009-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 S. S. Diesel / S.S. Diesel Turbo",
    "marca": "Ford",
    "cod_fipe": "003048-1",
    "vendido": false
  },
  {
    "veiculo": "F-1000 SR XK  Deserter Diesel",
    "marca": "Ford",
    "cod_fipe": "003124-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 SR XK Deserter",
    "marca": "Ford",
    "cod_fipe": "003222-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super 3.6 / Super Série 3.6",
    "marca": "Ford",
    "cod_fipe": "003042-2",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super CE 4.9i / 3.6",
    "marca": "Ford",
    "cod_fipe": "003043-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super Diesel / Super Diesel Turbo",
    "marca": "Ford",
    "cod_fipe": "003046-5",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super Diesel CE 3.9",
    "marca": "Ford",
    "cod_fipe": "003045-7",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super Série CE 4.9i / 3.6",
    "marca": "Ford",
    "cod_fipe": "003044-9",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super Série CE Diesel 3.9",
    "marca": "Ford",
    "cod_fipe": "003047-3",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Super/ S.Série 4x4 3.9 Diesel",
    "marca": "Ford",
    "cod_fipe": "003049-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Tropical CD 2.5 HSD/4.3 Diesel TB",
    "marca": "Ford",
    "cod_fipe": "003165-8",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Tropical CD 4.9i",
    "marca": "Ford",
    "cod_fipe": "003166-6",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Tropical SL/ Van 4.9i",
    "marca": "Ford",
    "cod_fipe": "003243-3",
    "vendido": false
  },
  {
    "veiculo": "F-1000 Tropical SL/ Van T.Diesel (todas)",
    "marca": "Ford",
    "cod_fipe": "003241-7",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XL 2.5 HSD Diesel TB",
    "marca": "Ford",
    "cod_fipe": "003167-4",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XL 4.9i",
    "marca": "Ford",
    "cod_fipe": "003199-2",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XL 4.9i CE",
    "marca": "Ford",
    "cod_fipe": "003010-4",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XL 4x4 Diesel Turbo",
    "marca": "Ford",
    "cod_fipe": "003014-7",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XL Diesel Turbo",
    "marca": "Ford",
    "cod_fipe": "003012-0",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XLT 2.5 HSD Diesel TB",
    "marca": "Ford",
    "cod_fipe": "003168-2",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XLT 4x4 Diesel Turbo",
    "marca": "Ford",
    "cod_fipe": "003015-5",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XLT CE 4.9i",
    "marca": "Ford",
    "cod_fipe": "003197-6",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XLT Diesel Turbo",
    "marca": "Ford",
    "cod_fipe": "003013-9",
    "vendido": false
  },
  {
    "veiculo": "F-1000 XLT/XL Lighting 4.9i",
    "marca": "Ford",
    "cod_fipe": "003011-2",
    "vendido": false
  },
  {
    "veiculo": "F-150 XL Triton 4.3 V6",
    "marca": "Ford",
    "cod_fipe": "003126-7",
    "vendido": false
  },
  {
    "veiculo": "F-150 XLT Triton 4.3",
    "marca": "Ford",
    "cod_fipe": "003159-3",
    "vendido": false
  },
  {
    "veiculo": "F-150 XLT Triton 4.6 V8",
    "marca": "Ford",
    "cod_fipe": "003217-4",
    "vendido": false
  },
  {
    "veiculo": "F-150 XLT Triton 5.8",
    "marca": "Ford",
    "cod_fipe": "003160-7",
    "vendido": false
  },
  {
    "veiculo": "F-250 F-MILHA CD 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003338-3",
    "vendido": false
  },
  {
    "veiculo": "F-250 TropiCab CE 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003313-8",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropical 3.9 Diesel",
    "marca": "Ford",
    "cod_fipe": "003170-4",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropical 4.2 CE / CD Diesel TB",
    "marca": "Ford",
    "cod_fipe": "003172-0",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropical 4.2 V6",
    "marca": "Ford",
    "cod_fipe": "003171-2",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropical SL/ Van T.Diesel (todas)",
    "marca": "Ford",
    "cod_fipe": "003242-5",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropicampo CD 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003314-6",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropicampo Executive 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003355-3",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropiclassic 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003315-4",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropivan Executive 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003316-2",
    "vendido": false
  },
  {
    "veiculo": "F-250 Tropivan/Tropi. Plus 3.9 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003317-0",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL 3.9 4x2 Diesel",
    "marca": "Ford",
    "cod_fipe": "003115-1",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL 3.9 4x4 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003305-7",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL 3.9 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003306-5",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL 4.2 180cv CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003279-4",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL 4.2 Turbo Diesel",
    "marca": "Ford",
    "cod_fipe": "003198-4",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL 4.2 V6",
    "marca": "Ford",
    "cod_fipe": "003114-3",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL Super Duty 3.9 Diesel",
    "marca": "Ford",
    "cod_fipe": "003142-9",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL Super Duty 4.2 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003272-7",
    "vendido": false
  },
  {
    "veiculo": "F-250 XL Super Duty 4.2 V6",
    "marca": "Ford",
    "cod_fipe": "003141-0",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 3.9 4x2 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003308-1",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 3.9 4x2 Diesel TB",
    "marca": "Ford",
    "cod_fipe": "003117-8",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 3.9 4x4 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003309-0",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 3.9 4x4 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003307-3",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 4.2 180cv CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003280-8",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 4.2 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003206-9",
    "vendido": false
  },
  {
    "veiculo": "F-250 XLT 4.2 V6",
    "marca": "Ford",
    "cod_fipe": "003116-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.0 8V Flex/Class 1.0 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003310-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.0i 3p e 5p",
    "marca": "Ford",
    "cod_fipe": "003016-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.3  3p e 5p",
    "marca": "Ford",
    "cod_fipe": "003075-9",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.5 16V Flex Mec. 5p",
    "marca": "Ford",
    "cod_fipe": "003386-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.6 16V Flex Aut. 5p",
    "marca": "Ford",
    "cod_fipe": "003388-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.6 16V Flex Mec. 5p",
    "marca": "Ford",
    "cod_fipe": "003387-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta 1.6 8V Flex/Class 1.6 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003286-7",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Class 1.0 2p",
    "marca": "Ford",
    "cod_fipe": "003200-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Class 1.0 4p",
    "marca": "Ford",
    "cod_fipe": "003201-8",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Class 1.6 8V 98cv 5p",
    "marca": "Ford",
    "cod_fipe": "003261-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta CLX 1.3i 3p",
    "marca": "Ford",
    "cod_fipe": "003052-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta CLX 1.3i 5p",
    "marca": "Ford",
    "cod_fipe": "003053-8",
    "vendido": false
  },
  {
    "veiculo": "Fiesta CLX 1.4i 16V 3p e 5p",
    "marca": "Ford",
    "cod_fipe": "003017-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta GL 1.0 3p",
    "marca": "Ford",
    "cod_fipe": "003143-7",
    "vendido": false
  },
  {
    "veiculo": "Fiesta GL 1.0 5p",
    "marca": "Ford",
    "cod_fipe": "003192-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta GL Class 1.0i 5p",
    "marca": "Ford",
    "cod_fipe": "003096-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta GLX 1.6 8V 3p",
    "marca": "Ford",
    "cod_fipe": "003144-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta GLX 1.6 8V 5p",
    "marca": "Ford",
    "cod_fipe": "003193-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Personnalité 1.0 8V 66cv 5p",
    "marca": "Ford",
    "cod_fipe": "003259-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta S 1.0 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003380-4",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SE 1.0 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003381-2",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SE 1.6 16V Flex 5p   ",
    "marca": "Ford",
    "cod_fipe": "003351-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SE 1.6 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003382-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SE Style 1.6 16V Flex Mec. 5p",
    "marca": "Ford",
    "cod_fipe": "003430-4",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sed. 1.6 8V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003289-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sed. Personnalité 1.0 8V 4p",
    "marca": "Ford",
    "cod_fipe": "003287-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sed. Supercharger 1.0 8V 4p",
    "marca": "Ford",
    "cod_fipe": "003288-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sed. TI./TI.Plus1.6 16V Flex Aut.",
    "marca": "Ford",
    "cod_fipe": "003400-2",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan 1.0 8V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003311-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan 1.6 16V Flex Aut.",
    "marca": "Ford",
    "cod_fipe": "003398-7",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan 1.6 16V Flex Mec.",
    "marca": "Ford",
    "cod_fipe": "003397-9",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan S 1.0 8V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003383-9",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan SE 1.0 8V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003384-7",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan SE 1.6 16V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003340-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan SE 1.6 8V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003385-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan Street 1.0 8v 4p",
    "marca": "Ford",
    "cod_fipe": "003245-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan Street 1.6 8v 4p",
    "marca": "Ford",
    "cod_fipe": "003246-8",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sedan TITANIUM 1.6 16V Flex Mec",
    "marca": "Ford",
    "cod_fipe": "003399-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SEL 1.6 16V Flex  Aut. 5p",
    "marca": "Ford",
    "cod_fipe": "003423-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SEL 1.6 16V Flex Mec. 5p",
    "marca": "Ford",
    "cod_fipe": "003422-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta SEL Style 1.6 16V Flex Mec. 5p",
    "marca": "Ford",
    "cod_fipe": "003431-2",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sport 1.0MPi 4p",
    "marca": "Ford",
    "cod_fipe": "003219-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sport 1.6 16V Flex Mec.",
    "marca": "Ford",
    "cod_fipe": "003416-9",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Sport 1.6MPi 4p",
    "marca": "Ford",
    "cod_fipe": "003221-2",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Street 1.0 8v 3p",
    "marca": "Ford",
    "cod_fipe": "003229-8",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Street 1.6 8v 95cv 5p",
    "marca": "Ford",
    "cod_fipe": "003256-5",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Street/ Action 1.0 8v 5p",
    "marca": "Ford",
    "cod_fipe": "003244-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta Supercharger 1.0 8V 95cv 5p",
    "marca": "Ford",
    "cod_fipe": "003260-3",
    "vendido": false
  },
  {
    "veiculo": "Fiesta TIT./TIT.Plus 1.6 16V Flex Aut.",
    "marca": "Ford",
    "cod_fipe": "003390-1",
    "vendido": false
  },
  {
    "veiculo": "Fiesta TIT.Plus 1.0 12V EcoBoost Aut. 5p",
    "marca": "Ford",
    "cod_fipe": "003424-0",
    "vendido": false
  },
  {
    "veiculo": "Fiesta TITANIUM 1.6 16V Flex Mec.",
    "marca": "Ford",
    "cod_fipe": "003389-8",
    "vendido": false
  },
  {
    "veiculo": "Fiesta TRAIL 1.0 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003322-7",
    "vendido": false
  },
  {
    "veiculo": "Fiesta TRAIL 1.6 8V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003323-5",
    "vendido": false
  },
  {
    "veiculo": "Focus 1.6 S/1.6 SE Flex 16v 5p Aut",
    "marca": "Ford",
    "cod_fipe": "003404-5",
    "vendido": false
  },
  {
    "veiculo": "Focus 1.6 S/SE/SE Plus Flex 8V/16V  5p",
    "marca": "Ford",
    "cod_fipe": "003281-6",
    "vendido": false
  },
  {
    "veiculo": "Focus 1.8 16V 5p",
    "marca": "Ford",
    "cod_fipe": "003224-7",
    "vendido": false
  },
  {
    "veiculo": "Focus 2.0 16V/ 2.0 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003228-0",
    "vendido": false
  },
  {
    "veiculo": "Focus 2.0 16V/SE/SE Plus Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003283-2",
    "vendido": false
  },
  {
    "veiculo": "Focus Fastback SE/SE PLUS 2.0 Flex Aut.",
    "marca": "Ford",
    "cod_fipe": "003417-7",
    "vendido": false
  },
  {
    "veiculo": "Focus Fastback TIT./T.PLUS 2.0 Flex Aut.",
    "marca": "Ford",
    "cod_fipe": "003418-5",
    "vendido": false
  },
  {
    "veiculo": "Focus Ghia  2.0 16V/ 2.0 16V Flex 5p Aut",
    "marca": "Ford",
    "cod_fipe": "003266-2",
    "vendido": false
  },
  {
    "veiculo": "Focus Ghia Sed. 2.0 16V/ 2.0 16V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003226-3",
    "vendido": false
  },
  {
    "veiculo": "Focus Ghia Sed. 2.0 16V/2.0 16V Flex Aut",
    "marca": "Ford",
    "cod_fipe": "003262-0",
    "vendido": false
  },
  {
    "veiculo": "Focus Ghia/ XR 2.0 /Ghia 2.0 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003227-1",
    "vendido": false
  },
  {
    "veiculo": "Focus Sed. TI./TI.Plus 2.0 16V Flex  Aut",
    "marca": "Ford",
    "cod_fipe": "003348-0",
    "vendido": false
  },
  {
    "veiculo": "Focus Sedan 1.6 16V Flex 4p Aut.",
    "marca": "Ford",
    "cod_fipe": "003425-8",
    "vendido": false
  },
  {
    "veiculo": "Focus Sedan 1.6/ 1.6 Flex 8V/16v 4p Mec.",
    "marca": "Ford",
    "cod_fipe": "003284-0",
    "vendido": false
  },
  {
    "veiculo": "Focus Sedan 1.8 16V 115cv 4p",
    "marca": "Ford",
    "cod_fipe": "003265-4",
    "vendido": false
  },
  {
    "veiculo": "Focus Sedan 2.0 16V/ 2.0 16V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003225-5",
    "vendido": false
  },
  {
    "veiculo": "Focus Sedan 2.0 16V/ 2.0 16V Flex 4p Aut",
    "marca": "Ford",
    "cod_fipe": "003282-4",
    "vendido": false
  },
  {
    "veiculo": "Focus TITA/TITA Plus 2.0  Flex 5p Aut.",
    "marca": "Ford",
    "cod_fipe": "003347-2",
    "vendido": false
  },
  {
    "veiculo": "Focus TITANIUM 2.0 16V Flex 5p Mec.",
    "marca": "Ford",
    "cod_fipe": "003346-4",
    "vendido": false
  },
  {
    "veiculo": "Furglaine 3.6",
    "marca": "Ford",
    "cod_fipe": "003173-9",
    "vendido": false
  },
  {
    "veiculo": "Furglaine 3.9 Diesel",
    "marca": "Ford",
    "cod_fipe": "003174-7",
    "vendido": false
  },
  {
    "veiculo": "Furglaine Chateaux/Exec. 3.9 Diesel",
    "marca": "Ford",
    "cod_fipe": "003175-5",
    "vendido": false
  },
  {
    "veiculo": "Fusion 2.5L I-VCT Flex Aut.",
    "marca": "Ford",
    "cod_fipe": "003378-2",
    "vendido": false
  },
  {
    "veiculo": "Fusion Hybrid 2.5 16V 193cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003345-6",
    "vendido": false
  },
  {
    "veiculo": "Fusion SE 2.5 I-VCT Flex 16V Aut.",
    "marca": "Ford",
    "cod_fipe": "003432-0",
    "vendido": false
  },
  {
    "veiculo": "Fusion SEL 2.0 Ecobo. 16V 248cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003429-0",
    "vendido": false
  },
  {
    "veiculo": "Fusion SEL 2.3 16V  162cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003304-9",
    "vendido": false
  },
  {
    "veiculo": "Fusion SEL 2.5 16V 173cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003335-9",
    "vendido": false
  },
  {
    "veiculo": "Fusion SEL 3.0 V6  24V 243cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003349-9",
    "vendido": false
  },
  {
    "veiculo": "Fusion SEL 3.0 V6 AWD 24V 243cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003336-7",
    "vendido": false
  },
  {
    "veiculo": "Fusion Titanium 2.0 GTDI EcoBo. Awd Aut ",
    "marca": "Ford",
    "cod_fipe": "003376-6",
    "vendido": false
  },
  {
    "veiculo": "Fusion Titanium 2.0 GTDI EcoBo. Fwd Aut.",
    "marca": "Ford",
    "cod_fipe": "003377-4",
    "vendido": false
  },
  {
    "veiculo": "Fusion Titanium HYBRID 2.0 145cv Aut.",
    "marca": "Ford",
    "cod_fipe": "003402-9",
    "vendido": false
  },
  {
    "veiculo": "Ibiza 3.9 Furgão Diesel",
    "marca": "Ford",
    "cod_fipe": "003176-3",
    "vendido": false
  },
  {
    "veiculo": "Ibiza Chat./Exec. 3.9 Diesel",
    "marca": "Ford",
    "cod_fipe": "003177-1",
    "vendido": false
  },
  {
    "veiculo": "KA 1.0 8V/1.0 8V ST Flex 3p",
    "marca": "Ford",
    "cod_fipe": "003325-1",
    "vendido": false
  },
  {
    "veiculo": "Ka 1.0 SEL TiCVT Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003409-6",
    "vendido": false
  },
  {
    "veiculo": "KA 1.0 TECNO 8V Flex 3p",
    "marca": "Ford",
    "cod_fipe": "003327-8",
    "vendido": false
  },
  {
    "veiculo": "Ka 1.0 TiCVT Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003408-8",
    "vendido": false
  },
  {
    "veiculo": "KA 1.0i 3p",
    "marca": "Ford",
    "cod_fipe": "003018-0",
    "vendido": false
  },
  {
    "veiculo": "Ka 1.5 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003410-0",
    "vendido": false
  },
  {
    "veiculo": "KA 1.6 8V Flex 3p",
    "marca": "Ford",
    "cod_fipe": "003326-0",
    "vendido": false
  },
  {
    "veiculo": "KA 1.6 TECNO 8V Flex 3p",
    "marca": "Ford",
    "cod_fipe": "003328-6",
    "vendido": false
  },
  {
    "veiculo": "KA Action 1.6 MPI 8V 95cv",
    "marca": "Ford",
    "cod_fipe": "003264-6",
    "vendido": false
  },
  {
    "veiculo": "KA Black 1.0 MPI 8v 65cv",
    "marca": "Ford",
    "cod_fipe": "003233-6",
    "vendido": false
  },
  {
    "veiculo": "KA Black 1.6 MPI 8v 95cv",
    "marca": "Ford",
    "cod_fipe": "003234-4",
    "vendido": false
  },
  {
    "veiculo": "KA CLX 1.3i 3p",
    "marca": "Ford",
    "cod_fipe": "003019-8",
    "vendido": false
  },
  {
    "veiculo": "KA GL 1.0i Zetec Rocam",
    "marca": "Ford",
    "cod_fipe": "003145-3",
    "vendido": false
  },
  {
    "veiculo": "KA GL Image 1.0i/ 1.0i Zetec Rocam",
    "marca": "Ford",
    "cod_fipe": "003161-5",
    "vendido": false
  },
  {
    "veiculo": "KA Image 1.0i",
    "marca": "Ford",
    "cod_fipe": "003098-8",
    "vendido": false
  },
  {
    "veiculo": "KA MP3 1.0 MPI 8V 65cv",
    "marca": "Ford",
    "cod_fipe": "003301-4",
    "vendido": false
  },
  {
    "veiculo": "KA MP3 1.6 MPI 8V 95cv",
    "marca": "Ford",
    "cod_fipe": "003302-2",
    "vendido": false
  },
  {
    "veiculo": "Ka SEL 1.5 16V Flex 5p",
    "marca": "Ford",
    "cod_fipe": "003411-8",
    "vendido": false
  },
  {
    "veiculo": "KA Sport 1.6 8V Flex 3p",
    "marca": "Ford",
    "cod_fipe": "003350-2",
    "vendido": false
  },
  {
    "veiculo": "KA Street 1.0i",
    "marca": "Ford",
    "cod_fipe": "003097-0",
    "vendido": false
  },
  {
    "veiculo": "KA Tecno 1.0i 8v Zetec Rocam",
    "marca": "Ford",
    "cod_fipe": "003169-0",
    "vendido": false
  },
  {
    "veiculo": "KA XR 1.6 MPI 8V",
    "marca": "Ford",
    "cod_fipe": "003232-8",
    "vendido": false
  },
  {
    "veiculo": "Ka+ Sedan 1.0 SEL TiCVT Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003413-4",
    "vendido": false
  },
  {
    "veiculo": "Ka+ Sedan 1.0 TiCVT Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003412-6",
    "vendido": false
  },
  {
    "veiculo": "Ka+ Sedan 1.5 16V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003414-2",
    "vendido": false
  },
  {
    "veiculo": "Ka+ Sedan 1.5 SEL 16V Flex 4p",
    "marca": "Ford",
    "cod_fipe": "003415-0",
    "vendido": false
  },
  {
    "veiculo": "Mondeo CLX 1.8 4p e 5p",
    "marca": "Ford",
    "cod_fipe": "003076-7",
    "vendido": false
  },
  {
    "veiculo": "Mondeo CLX 1.8i SW",
    "marca": "Ford",
    "cod_fipe": "003077-5",
    "vendido": false
  },
  {
    "veiculo": "Mondeo CLX 2.0i 4p Aut",
    "marca": "Ford",
    "cod_fipe": "003194-1",
    "vendido": false
  },
  {
    "veiculo": "Mondeo CLX 2.0i 4p Mec",
    "marca": "Ford",
    "cod_fipe": "003078-3",
    "vendido": false
  },
  {
    "veiculo": "Mondeo CLX 2.0i SW Aut",
    "marca": "Ford",
    "cod_fipe": "003195-0",
    "vendido": false
  },
  {
    "veiculo": "Mondeo CLX 2.0i SW Mec",
    "marca": "Ford",
    "cod_fipe": "003079-1",
    "vendido": false
  },
  {
    "veiculo": "Mondeo Ghia 2.0 16V 143cv 4p Aut",
    "marca": "Ford",
    "cod_fipe": "003258-1",
    "vendido": false
  },
  {
    "veiculo": "Mondeo Ghia 2.0 16V 143cv 4p Mec",
    "marca": "Ford",
    "cod_fipe": "003257-3",
    "vendido": false
  },
  {
    "veiculo": "Mondeo Ghia 2.5 V6 Aut",
    "marca": "Ford",
    "cod_fipe": "003104-6",
    "vendido": false
  },
  {
    "veiculo": "Mondeo Ghia 2.5 V6 Mec",
    "marca": "Ford",
    "cod_fipe": "003103-8",
    "vendido": false
  },
  {
    "veiculo": "Mondeo GLX 2.0 16V 4p Aut",
    "marca": "Ford",
    "cod_fipe": "003223-9",
    "vendido": false
  },
  {
    "veiculo": "Mondeo GLX 2.0 4p e 5p",
    "marca": "Ford",
    "cod_fipe": "003080-5",
    "vendido": false
  },
  {
    "veiculo": "Mondeo GLX 2.0i SW Mec./ Aut.",
    "marca": "Ford",
    "cod_fipe": "003082-1",
    "vendido": false
  },
  {
    "veiculo": "Mustang 3.8 V6",
    "marca": "Ford",
    "cod_fipe": "003179-8",
    "vendido": false
  },
  {
    "veiculo": "Mustang 3.8 V6 Conv.",
    "marca": "Ford",
    "cod_fipe": "003180-1",
    "vendido": false
  },
  {
    "veiculo": "Mustang Cobra 5.7 V8",
    "marca": "Ford",
    "cod_fipe": "003190-9",
    "vendido": false
  },
  {
    "veiculo": "Mustang GT V8",
    "marca": "Ford",
    "cod_fipe": "003083-0",
    "vendido": false
  },
  {
    "veiculo": "Mustang GT V8 Conversível",
    "marca": "Ford",
    "cod_fipe": "003084-8",
    "vendido": false
  },
  {
    "veiculo": "Pampa 4x4 Jeep GL / L 1.6",
    "marca": "Ford",
    "cod_fipe": "003058-9",
    "vendido": false
  },
  {
    "veiculo": "Pampa Ghia 1.6/1.8/DUO",
    "marca": "Ford",
    "cod_fipe": "003137-2",
    "vendido": false
  },
  {
    "veiculo": "Pampa GL 1.6/ 1.8",
    "marca": "Ford",
    "cod_fipe": "003056-2",
    "vendido": false
  },
  {
    "veiculo": "Pampa L 1.6",
    "marca": "Ford",
    "cod_fipe": "003054-6",
    "vendido": false
  },
  {
    "veiculo": "Pampa L 1.8i / 1.8",
    "marca": "Ford",
    "cod_fipe": "003055-4",
    "vendido": false
  },
  {
    "veiculo": "Pampa S 1.8",
    "marca": "Ford",
    "cod_fipe": "003057-0",
    "vendido": false
  },
  {
    "veiculo": "Probe 2.0/2.2",
    "marca": "Ford",
    "cod_fipe": "003125-9",
    "vendido": false
  },
  {
    "veiculo": "Probe GT 2.5 V6",
    "marca": "Ford",
    "cod_fipe": "003182-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5 4x2 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003210-7",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5 4x2 CE Diesel",
    "marca": "Ford",
    "cod_fipe": "003209-3",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5 4x2 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003205-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5 4x4 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003108-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5 4x4 CE TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003147-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5 4x4 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003107-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5i CD",
    "marca": "Ford",
    "cod_fipe": "003105-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5i CE",
    "marca": "Ford",
    "cod_fipe": "003146-1",
    "vendido": false
  },
  {
    "veiculo": "Ranger 2.5i CS",
    "marca": "Ford",
    "cod_fipe": "003106-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger Limited 2.3 150cv CD",
    "marca": "Ford",
    "cod_fipe": "003337-5",
    "vendido": false
  },
  {
    "veiculo": "Ranger Limited 2.5 16V 4x2 CD Flex",
    "marca": "Ford",
    "cod_fipe": "003359-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger Limited 3.0 PSE 4x4 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003296-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger Limited 3.2 20V 4x4 CD Aut. Dies.",
    "marca": "Ford",
    "cod_fipe": "003364-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger Splash CE",
    "marca": "Ford",
    "cod_fipe": "003220-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger Splash CS",
    "marca": "Ford",
    "cod_fipe": "003089-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger SPORT 2.5 Flex 16V 4x2 CS",
    "marca": "Ford",
    "cod_fipe": "003406-1",
    "vendido": false
  },
  {
    "veiculo": "Ranger STX 4.0 CS/ CE",
    "marca": "Ford",
    "cod_fipe": "003090-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPICAB 2.5 16V 4X2 Flex",
    "marca": "Ford",
    "cod_fipe": "003396-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPICAB 3.2 20V 4X4 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003395-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPIVAN 2.5 16V 4X2 Flex",
    "marca": "Ford",
    "cod_fipe": "003394-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPIVAN 3.2 20V 4X4 TB Dies.Aut.",
    "marca": "Ford",
    "cod_fipe": "003393-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPIVAN 3.2 20V 4X4 TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003392-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPIVAN XLT 2.3 16V 150cv",
    "marca": "Ford",
    "cod_fipe": "003341-3",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPIVAN XLT 3.0 PSE 4x2 TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003342-1",
    "vendido": false
  },
  {
    "veiculo": "Ranger TROPIVAN XLT 3.0 PSE 4x4 TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003343-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.2 4x4 Cd Diesel Mec.",
    "marca": "Ford",
    "cod_fipe": "003426-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.3 16v 137cv 4x2 CD Repower.",
    "marca": "Ford",
    "cod_fipe": "003237-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.3 16v 137cv 4x2 CE Repower.",
    "marca": "Ford",
    "cod_fipe": "003236-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.3 16v 137cv 4x2 CS Repower.",
    "marca": "Ford",
    "cod_fipe": "003235-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.3 CS",
    "marca": "Ford",
    "cod_fipe": "003085-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.8 8v 135cv 4x2 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003254-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.8 8v 135cv 4x2 CE TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003249-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.8 8v 135cv 4x2 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003247-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.8 8v 135cv 4x4 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003255-7",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.8 8v 135cv 4x4 CE TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003250-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 2.8 8v 135cv 4x4 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003248-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 3.0 PSE 163cv 4x2 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003298-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 3.0 PSE 163cv 4x2 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003299-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 3.0 PSE 163cv 4x4 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003300-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 3.0 PSE 163cv 4x4 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003297-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 4.0 12v V6 210cv 4x2 CS Repow.",
    "marca": "Ford",
    "cod_fipe": "003238-7",
    "vendido": false
  },
  {
    "veiculo": "Ranger XL 4.0 CS",
    "marca": "Ford",
    "cod_fipe": "003086-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.2 4x4 CD Diesel Aut.",
    "marca": "Ford",
    "cod_fipe": "003421-5",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.2 4x4 CD Diesel Mec.",
    "marca": "Ford",
    "cod_fipe": "003405-3",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.3 16V 145cv/150cv 4x2 CD",
    "marca": "Ford",
    "cod_fipe": "003276-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.3 16V 145cv/150cv 4x2 CS",
    "marca": "Ford",
    "cod_fipe": "003275-1",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.5 16V 4x2 CD Flex",
    "marca": "Ford",
    "cod_fipe": "003357-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.5 16V 4x2 CS",
    "marca": "Ford",
    "cod_fipe": "003356-1",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.8 8V 135cv 4x2 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003278-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.8 8V 135cv 4x2 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003277-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.8 8V 135cv 4x4 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003273-5",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 2.8/2.8 Storm  4x4 CD TB Dies",
    "marca": "Ford",
    "cod_fipe": "003274-3",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.0 PSE 163cv 4x2 CD TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003291-3",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.0 PSE 163cv 4x2 CS TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003292-1",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.0 PSE 163cv 4x4 CD TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003293-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.0 PSE Storm 4x4 CD TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003334-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.2 20V 4x4 CD Diesel Aut.",
    "marca": "Ford",
    "cod_fipe": "003401-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.2 20V 4x4 CD Diesel Mec.",
    "marca": "Ford",
    "cod_fipe": "003361-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS 3.2 20V 4x4 CS Diesel",
    "marca": "Ford",
    "cod_fipe": "003360-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLS SPORT 2.3 16V 150cv CS",
    "marca": "Ford",
    "cod_fipe": "003324-3",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.3 16V 150cv CD Repower.",
    "marca": "Ford",
    "cod_fipe": "003321-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.3 CS",
    "marca": "Ford",
    "cod_fipe": "003087-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 16V 4x2 CD Flex",
    "marca": "Ford",
    "cod_fipe": "003358-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 4x2 CD Diesel",
    "marca": "Ford",
    "cod_fipe": "003204-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 4x2 CE Diesel",
    "marca": "Ford",
    "cod_fipe": "003202-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 4x2 CS Diesel",
    "marca": "Ford",
    "cod_fipe": "003203-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 4x4 CD Diesel",
    "marca": "Ford",
    "cod_fipe": "003110-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 4x4 CE TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003148-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.5 4x4 CS TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003109-7",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.8 8v 135cv 4x2 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003252-2",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.8 8v 135cv 4x4 CD TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003253-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 2.8 8v 135cv 4x4 CE TB Diesel",
    "marca": "Ford",
    "cod_fipe": "003251-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 3.0 PSE 163cv 4x2 CD TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003294-8",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 3.0 PSE 163cv 4x4 CD TB Dies.",
    "marca": "Ford",
    "cod_fipe": "003295-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 3.2 20V 4x4 CD Diesel ",
    "marca": "Ford",
    "cod_fipe": "003362-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 3.2 20V 4x4 CD Diesel Aut.",
    "marca": "Ford",
    "cod_fipe": "003363-4",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 12v V6 210cv 4x4 CD Repow",
    "marca": "Ford",
    "cod_fipe": "003240-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 12v V6 210cv 4x4 CE Repow",
    "marca": "Ford",
    "cod_fipe": "003239-5",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 4x2 CE",
    "marca": "Ford",
    "cod_fipe": "003149-6",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 4x2 CS",
    "marca": "Ford",
    "cod_fipe": "003088-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 4x4 CD",
    "marca": "Ford",
    "cod_fipe": "003112-7",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 4x4 CE",
    "marca": "Ford",
    "cod_fipe": "003150-0",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT 4.0 4x4 CS",
    "marca": "Ford",
    "cod_fipe": "003111-9",
    "vendido": false
  },
  {
    "veiculo": "Ranger XLT Limit./L.Cent. 2.8 CD TB Dies",
    "marca": "Ford",
    "cod_fipe": "003263-8",
    "vendido": false
  },
  {
    "veiculo": "Royale Ghia 2.0i 4p / 2.0i / 2.0",
    "marca": "Ford",
    "cod_fipe": "003061-9",
    "vendido": false
  },
  {
    "veiculo": "Royale GL 1.8i 4p / 1.8i / 1.8",
    "marca": "Ford",
    "cod_fipe": "003059-7",
    "vendido": false
  },
  {
    "veiculo": "Royale GL 2.0i 2e4p / 2.0i / 2.0",
    "marca": "Ford",
    "cod_fipe": "003060-0",
    "vendido": false
  },
  {
    "veiculo": "Taurus GL 3.0 V6",
    "marca": "Ford",
    "cod_fipe": "003091-0",
    "vendido": false
  },
  {
    "veiculo": "Taurus GL SW 3.0 V6 24V",
    "marca": "Ford",
    "cod_fipe": "003127-5",
    "vendido": false
  },
  {
    "veiculo": "Taurus L/LX 3.0 V6",
    "marca": "Ford",
    "cod_fipe": "003092-9",
    "vendido": false
  },
  {
    "veiculo": "Taurus LX SW 3.0 V6 24V",
    "marca": "Ford",
    "cod_fipe": "003191-7",
    "vendido": false
  },
  {
    "veiculo": "Taurus SHO 3.0 V6",
    "marca": "Ford",
    "cod_fipe": "003183-6",
    "vendido": false
  },
  {
    "veiculo": "Thunderbird SC 3.8 V6",
    "marca": "Ford",
    "cod_fipe": "003184-4",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Chassi 2.2 TDCI Diesel",
    "marca": "Ford",
    "cod_fipe": "003372-3",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Chassi 2.4 TDCI Diesel",
    "marca": "Ford",
    "cod_fipe": "003339-1",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Furgão 2.2 TDCI Curto Diesel",
    "marca": "Ford",
    "cod_fipe": "003379-0",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Furgão 2.2 TDCI Longa Diesel",
    "marca": "Ford",
    "cod_fipe": "003375-8",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Furgão 2.2 TDCI Longo Jumbo Dies",
    "marca": "Ford",
    "cod_fipe": "003354-5",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Furgão 3330 2.4 TDCI Curto Dies.",
    "marca": "Ford",
    "cod_fipe": "003331-6",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Furgão 3550 2.4 TDCI Longo Dies.",
    "marca": "Ford",
    "cod_fipe": "003332-4",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Van 3550 2.2 TDCI 14/16lug. Dies",
    "marca": "Ford",
    "cod_fipe": "003371-5",
    "vendido": false
  },
  {
    "veiculo": "TRANSIT Van 3550 2.4 TDCI 14lug. Diesel",
    "marca": "Ford",
    "cod_fipe": "003333-2",
    "vendido": false
  },
  {
    "veiculo": "Verona Ghia 2.0i 4p",
    "marca": "Ford",
    "cod_fipe": "003065-1",
    "vendido": false
  },
  {
    "veiculo": "Verona GL 1.8i / LX 1.8i 4p",
    "marca": "Ford",
    "cod_fipe": "003062-7",
    "vendido": false
  },
  {
    "veiculo": "Verona GLX 1.8 (Modelo antigo)",
    "marca": "Ford",
    "cod_fipe": "003069-4",
    "vendido": false
  },
  {
    "veiculo": "Verona GLX 1.8i / 1.8 4p",
    "marca": "Ford",
    "cod_fipe": "003063-5",
    "vendido": false
  },
  {
    "veiculo": "Verona GLX 2.0i / 2.0 4p",
    "marca": "Ford",
    "cod_fipe": "003064-3",
    "vendido": false
  },
  {
    "veiculo": "Verona LX 1.6 (Modelo antigo)",
    "marca": "Ford",
    "cod_fipe": "003067-8",
    "vendido": false
  },
  {
    "veiculo": "Verona LX 1.8 (Modelo antigo)",
    "marca": "Ford",
    "cod_fipe": "003068-6",
    "vendido": false
  },
  {
    "veiculo": "Verona S 2.0i 4p",
    "marca": "Ford",
    "cod_fipe": "003066-0",
    "vendido": false
  },
  {
    "veiculo": "Versailles Ghia 2.0i / 2.0 2p e 4p",
    "marca": "Ford",
    "cod_fipe": "003072-4",
    "vendido": false
  },
  {
    "veiculo": "Versailles GL 1.8i / 1.8 2p e 4p",
    "marca": "Ford",
    "cod_fipe": "003070-8",
    "vendido": false
  },
  {
    "veiculo": "Versailles GL 2.0i / 2.0 2p e 4p",
    "marca": "Ford",
    "cod_fipe": "003071-6",
    "vendido": false
  },
  {
    "veiculo": "Windstar GL",
    "marca": "Ford",
    "cod_fipe": "003093-7",
    "vendido": false
  },
  {
    "veiculo": "Windstar LX",
    "marca": "Ford",
    "cod_fipe": "003094-5",
    "vendido": false
  },
  {
    "veiculo": "AUMARK 3.5 - 11DT 2.8 4x2 TB Diesel",
    "marca": "FOTON",
    "cod_fipe": "086003-4",
    "vendido": false
  },
  {
    "veiculo": "AUMARK 3.5 - 11ST 2.8 4x2 TB Diesel",
    "marca": "FOTON",
    "cod_fipe": "086002-6",
    "vendido": false
  },
  {
    "veiculo": "AUMARK 3.5 - 14ST 2.8 4x2 TB Diesel",
    "marca": "FOTON",
    "cod_fipe": "086004-2",
    "vendido": false
  },
  {
    "veiculo": "AUMARK 3.50AK 2.8 4x2 TB Diesel",
    "marca": "FOTON",
    "cod_fipe": "086001-8",
    "vendido": false
  },
  {
    "veiculo": "Buggy 2000W 1.6 8V",
    "marca": "Fyber",
    "cod_fipe": "079002-8",
    "vendido": false
  },
  {
    "veiculo": "Buggy 2000W 1.8 8V/ 1.8 8V Flex",
    "marca": "Fyber",
    "cod_fipe": "079001-0",
    "vendido": false
  },
  {
    "veiculo": "EC7 1.8 16V 130cv 4p Mec.",
    "marca": "GEELY",
    "cod_fipe": "088001-9",
    "vendido": false
  },
  {
    "veiculo": "GC2 1.0 12V 68cv 5p",
    "marca": "GEELY",
    "cod_fipe": "088002-7",
    "vendido": false
  },
  {
    "veiculo": "A-10 2.5/4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004113-0",
    "vendido": false
  },
  {
    "veiculo": "A-10 De Luxe 2.5/4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004114-9",
    "vendido": false
  },
  {
    "veiculo": "A-20 Custom Std. CD/ De Luxe CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004126-2",
    "vendido": false
  },
  {
    "veiculo": "A-20 Custom/ C-20 Luxe 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004024-0",
    "vendido": false
  },
  {
    "veiculo": "A-20 Custom/ C-20 S 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004023-1",
    "vendido": false
  },
  {
    "veiculo": "AGILE LT 1.4 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004362-1",
    "vendido": false
  },
  {
    "veiculo": "AGILE LTZ 1.4 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004363-0",
    "vendido": false
  },
  {
    "veiculo": "AGILE LTZ EASYTRONIC 1.4 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004427-0",
    "vendido": false
  },
  {
    "veiculo": "AGILE LTZ EFFECT 1.4 8V FlexPower 5p Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004446-6",
    "vendido": false
  },
  {
    "veiculo": "AGILE LTZ EFFECT EASYTR.1.4 8V FlexP. 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004447-4",
    "vendido": false
  },
  {
    "veiculo": "AGILE LTZ WI-FI 1.4 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004382-6",
    "vendido": false
  },
  {
    "veiculo": "Astra 2.0 8V/ CD 2.0 8V Hatchback 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004232-3",
    "vendido": false
  },
  {
    "veiculo": "Astra 2.0 8V/ CD 2.0 8V Hatchback 5p Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004231-5",
    "vendido": false
  },
  {
    "veiculo": "Astra 2.0/ CD 2.0 8V 3p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004223-4",
    "vendido": false
  },
  {
    "veiculo": "Astra 2.0/ CD/ GLS 2.0 MPFI 16V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004169-6",
    "vendido": false
  },
  {
    "veiculo": "Astra 2.0/ CD/ Sunny/ GLS 2.0 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004082-7",
    "vendido": false
  },
  {
    "veiculo": "Astra 500 Sedan 2.0 MPFI 16V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004194-7",
    "vendido": false
  },
  {
    "veiculo": "Astra Advant. 2.0 MPFI 8V FlexP. 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004330-3",
    "vendido": false
  },
  {
    "veiculo": "Astra Advantage 2.0 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004328-1",
    "vendido": false
  },
  {
    "veiculo": "Astra Advantage 2.0 MPFI FlexPower 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004312-5",
    "vendido": false
  },
  {
    "veiculo": "Astra Comfort 2.0 MPFI FlexPower 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004252-8",
    "vendido": false
  },
  {
    "veiculo": "Astra Comfort 2.0 MPFI FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004254-4",
    "vendido": false
  },
  {
    "veiculo": "Astra Eleg. 2.0 MPFI FlexPower 8V 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004256-0",
    "vendido": false
  },
  {
    "veiculo": "Astra Elegance 2.0 MPFI FlexPower 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004253-6",
    "vendido": false
  },
  {
    "veiculo": "Astra Elegance 2.0 MPFI FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004255-2",
    "vendido": false
  },
  {
    "veiculo": "Astra Elite 2.0 MPFI Flex Pow. 8V 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004310-9",
    "vendido": false
  },
  {
    "veiculo": "Astra Elite 2.0 MPFI FlexPower 8V 5p Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004257-9",
    "vendido": false
  },
  {
    "veiculo": "Astra GL 1.8 MPFI 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004081-9",
    "vendido": false
  },
  {
    "veiculo": "Astra GL Milenium 1.8 MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004120-3",
    "vendido": false
  },
  {
    "veiculo": "Astra GLS 2.0 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004072-0",
    "vendido": false
  },
  {
    "veiculo": "Astra GLS 2.0 MPFI SW",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004073-8",
    "vendido": false
  },
  {
    "veiculo": "Astra GSi 2.0 16v 136cv Hatchback 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004230-7",
    "vendido": false
  },
  {
    "veiculo": "Astra S.Sport 2.0 F.Pow. 5p/Sport 2.0 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004195-5",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed. Advant. 2.0 8V MPFI FlexP. 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004329-0",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Advant. 2.0 8V MPFI FlexP. Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004331-1",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Comf. 2.0 MPFI FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004258-7",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Comf.2.0 MPFI MultiPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004313-3",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Eleg. 2.0 MPFI FlexP.8V 4p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004260-9",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Eleg.2.0 MPFI FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004259-5",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Eleg.2.0 MPFI MultiPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004314-1",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Elite 2.0 MPFI FlexP.8V 4p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004262-5",
    "vendido": false
  },
  {
    "veiculo": "Astra Sed.Elite 2.0 MPFI FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004261-7",
    "vendido": false
  },
  {
    "veiculo": "Astra Sedan 1.8 MPFI 8V 4p (taxi)",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004216-1",
    "vendido": false
  },
  {
    "veiculo": "Astra Sedan 2.0/ CD 2.0 MPFI 8V 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004215-3",
    "vendido": false
  },
  {
    "veiculo": "Astra Sedan 2.0/CD/ Expres.GLS 2.0 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004168-8",
    "vendido": false
  },
  {
    "veiculo": "Astra Sedan 2.0/CD/ GLS/ Adv. 2.0 16V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004083-5",
    "vendido": false
  },
  {
    "veiculo": "Astra Sedan Comfort 1.8 MPFI 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004263-3",
    "vendido": false
  },
  {
    "veiculo": "Astra Sedan/ Astra GL Sedan 1.8 MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004084-3",
    "vendido": false
  },
  {
    "veiculo": "Blazer Jimmy 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004158-0",
    "vendido": false
  },
  {
    "veiculo": "Blazer S-10 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004159-9",
    "vendido": false
  },
  {
    "veiculo": "Blazer SS-10 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004160-2",
    "vendido": false
  },
  {
    "veiculo": "Bonanza S / Luxe 4.0 Diesel Turbo",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004026-6",
    "vendido": false
  },
  {
    "veiculo": "Bonanza S / Luxe 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004025-8",
    "vendido": false
  },
  {
    "veiculo": "Brasinca Blazer CD 4.0 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004183-1",
    "vendido": false
  },
  {
    "veiculo": "Brasinca Blazer CD 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004117-3",
    "vendido": false
  },
  {
    "veiculo": "C-10 2.5/4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004115-7",
    "vendido": false
  },
  {
    "veiculo": "C-10 CD 2.5/ 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004127-0",
    "vendido": false
  },
  {
    "veiculo": "C-10 De Luxe 2.5/4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004116-5",
    "vendido": false
  },
  {
    "veiculo": "C-10 De Luxe CD 2.5/ 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004128-9",
    "vendido": false
  },
  {
    "veiculo": "C-20 Custom De Luxe 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004129-7",
    "vendido": false
  },
  {
    "veiculo": "C-20 Custom De Luxe CD 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004131-9",
    "vendido": false
  },
  {
    "veiculo": "C-20 Custom Std. 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004130-0",
    "vendido": false
  },
  {
    "veiculo": "C-20 Custom Std. CD 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004132-7",
    "vendido": false
  },
  {
    "veiculo": "Calibra 16V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004074-6",
    "vendido": false
  },
  {
    "veiculo": "CAMARO FIFTY 6.2 V8 16V 461cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004475-0",
    "vendido": false
  },
  {
    "veiculo": "Camaro RS 5.0 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004155-6",
    "vendido": false
  },
  {
    "veiculo": "Camaro Sport 5.0 Conv.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004156-4",
    "vendido": false
  },
  {
    "veiculo": "Camaro SS 6.2 V8 16V 406cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004371-0",
    "vendido": false
  },
  {
    "veiculo": "Camaro SS Conversível 6.2 V8 16V 406cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004453-9",
    "vendido": false
  },
  {
    "veiculo": "Camaro Z-28 Targa/Conv. 5.7",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004111-4",
    "vendido": false
  },
  {
    "veiculo": "Caprice 4.3 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004133-5",
    "vendido": false
  },
  {
    "veiculo": "Caprice SW 4.3 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004134-3",
    "vendido": false
  },
  {
    "veiculo": "Caprice Victoria",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004135-1",
    "vendido": false
  },
  {
    "veiculo": "CAPTIVA SPORT AWD 3.0 V6 24V 268cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004377-0",
    "vendido": false
  },
  {
    "veiculo": "CAPTIVA SPORT AWD 3.6 V6 24V 261cv 4x4",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004352-4",
    "vendido": false
  },
  {
    "veiculo": "CAPTIVA SPORT FWD 2.4 16V 171/185cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004357-5",
    "vendido": false
  },
  {
    "veiculo": "CAPTIVA SPORT FWD 3.0 V6 24V 268cv 4x2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004376-1",
    "vendido": false
  },
  {
    "veiculo": "CAPTIVA SPORT FWD 3.6 V6 24V 261cv 4x2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004351-6",
    "vendido": false
  },
  {
    "veiculo": "Caravan Comodoro 4.1 / 2.5",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004027-4",
    "vendido": false
  },
  {
    "veiculo": "Caravan Diplomata 4.1 / 2.5",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004028-2",
    "vendido": false
  },
  {
    "veiculo": "Caravan L/SL/S/SS 2.5/4.1/4.2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004137-8",
    "vendido": false
  },
  {
    "veiculo": "Cavalier 3.1 Conv.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004138-6",
    "vendido": false
  },
  {
    "veiculo": "Cavalier L 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004139-4",
    "vendido": false
  },
  {
    "veiculo": "Celta 1.0/ Super 1.0 MPFI VHC 8v 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004227-7",
    "vendido": false
  },
  {
    "veiculo": "Celta 1.0/Super/N.Piq.1.0 MPFi VHC 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004202-1",
    "vendido": false
  },
  {
    "veiculo": "Celta 1.4/ Super/ Energy 1.4 8V 85cv 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004235-8",
    "vendido": false
  },
  {
    "veiculo": "Celta 1.4/ Super/ Energy 1.4 8V 85cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004236-6",
    "vendido": false
  },
  {
    "veiculo": "Celta ADVANTAGE 1.0 8v FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004445-8",
    "vendido": false
  },
  {
    "veiculo": "Celta Life 1.0 MPFI VHC 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004264-1",
    "vendido": false
  },
  {
    "veiculo": "Celta Life 1.0 MPFI VHC 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004266-8",
    "vendido": false
  },
  {
    "veiculo": "Celta Life 1.4 MPFI 8V 85cv 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004268-4",
    "vendido": false
  },
  {
    "veiculo": "Celta Life 1.4 MPFI 8V 85cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004270-6",
    "vendido": false
  },
  {
    "veiculo": "Celta Life/ LS 1.0 MPFI 8V FlexPower 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004318-4",
    "vendido": false
  },
  {
    "veiculo": "Celta Life/ LS 1.0 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004319-2",
    "vendido": false
  },
  {
    "veiculo": "Celta Spirit 1.0 MPFI 8V FlexPower 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004320-6",
    "vendido": false
  },
  {
    "veiculo": "Celta Spirit 1.0 MPFI VHC 8V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004265-0",
    "vendido": false
  },
  {
    "veiculo": "Celta Spirit 1.0 MPFI VHC 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004267-6",
    "vendido": false
  },
  {
    "veiculo": "Celta Spirit 1.4 MPFI 8V 85cv 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004269-2",
    "vendido": false
  },
  {
    "veiculo": "Celta Spirit 1.4 MPFI 8V 85cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004271-4",
    "vendido": false
  },
  {
    "veiculo": "Celta Spirit/ LT 1.0 MPFI 8V FlexP. 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004321-4",
    "vendido": false
  },
  {
    "veiculo": "Celta Super 1.0 MPFI 8V FlexPower 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004316-8",
    "vendido": false
  },
  {
    "veiculo": "Celta Super 1.0 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004317-6",
    "vendido": false
  },
  {
    "veiculo": "Chevette Junior 1.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004029-0",
    "vendido": false
  },
  {
    "veiculo": "Chevette L / SL / SL/e / DL / SE 1.6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004030-4",
    "vendido": false
  },
  {
    "veiculo": "Chevy 500 DL / SL / SE/ Furgão 1.6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004031-2",
    "vendido": false
  },
  {
    "veiculo": "Cheynne 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004161-0",
    "vendido": false
  },
  {
    "veiculo": "Classic ADVANTAGE 1.0 VHC FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004450-4",
    "vendido": false
  },
  {
    "veiculo": "Classic/ Classic LS 1.0 VHC FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004360-5",
    "vendido": false
  },
  {
    "veiculo": "COBALT ADVANTAGE 1.4 MPFI 8V F.Power 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004442-3",
    "vendido": false
  },
  {
    "veiculo": "COBALT ADVANTAGE 1.8 8V Eco.Flex 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004443-1",
    "vendido": false
  },
  {
    "veiculo": "COBALT ELITE 1.8 8V Econo.Flex 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004468-7",
    "vendido": false
  },
  {
    "veiculo": "COBALT Graphite 1.8 8V Econo.Flex 4p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004463-6",
    "vendido": false
  },
  {
    "veiculo": "COBALT Graphite 1.8 8V Econo.Flex 4p Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004462-8",
    "vendido": false
  },
  {
    "veiculo": "COBALT LS 1.4 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004383-4",
    "vendido": false
  },
  {
    "veiculo": "COBALT LT 1.4 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004384-2",
    "vendido": false
  },
  {
    "veiculo": "COBALT LT 1.8 8V Econo.Flex 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004419-9",
    "vendido": false
  },
  {
    "veiculo": "COBALT LT 1.8 8V Econo.Flex 4p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004418-0",
    "vendido": false
  },
  {
    "veiculo": "COBALT LTZ 1.4 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004385-0",
    "vendido": false
  },
  {
    "veiculo": "COBALT LTZ 1.8 8V Econo.Flex 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004421-0",
    "vendido": false
  },
  {
    "veiculo": "COBALT LTZ 1.8 8V Econo.Flex 4p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004420-2",
    "vendido": false
  },
  {
    "veiculo": "Corsa Furgão 1.6 MPFi Powertech 92cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004199-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa GL 1.6 MPFI / 1.4 EFI 2p e 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004004-5",
    "vendido": false
  },
  {
    "veiculo": "Corsa GLS 1.6 MPFI 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004085-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa GSi 16V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004033-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Joy 1.0/ 1.0 FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004280-3",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Joy 1.8 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004286-2",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Maxx 1.0/ 1.0 FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004281-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Maxx 1.4 8V ECONOFLEX 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004339-7",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Maxx 1.8 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004287-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Prem. 1.0/1.0 FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004282-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. Premium 1.4 8V ECONOFLEX 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004340-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat. SS 1.8 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004326-5",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hat.Premium 1.8 MPFI 8V F.Power 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004288-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hatchback 1.0 MPFI 8V 71cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004218-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hatchback 1.8 MPFI 8V 102cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004220-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Hatchback 1.8 MPFI FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004233-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa Pick-Up GL/ Champ 1.6 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004003-7",
    "vendido": false
  },
  {
    "veiculo": "Corsa Pick-Up Sport 1.6 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004213-7",
    "vendido": false
  },
  {
    "veiculo": "Corsa Pick-Up STD/ Rodeio 1.6 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004086-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Clas.Spirit 1.6MPFI VHC 8V Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004278-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Clas.Super 1.6MPFI VHC 8V Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004279-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Class.Life 1.0/1.0 FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004272-2",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Class.Spirit 1.0/1.0 FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004273-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Class.Super 1.0/1.0 FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004274-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Classic Life 1.6 MPFI VHC 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004275-7",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Classic Spirit 1.6 MPFI VHC 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004276-5",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed Classic Super 1.6 MPFI VHC 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004277-3",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Joy 1.0/ 1.0 FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004283-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Joy 1.8 MPFI 8V FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004289-7",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Maxx 1.0/ 1.0 FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004284-6",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Maxx 1.4 8V ECONOFLEX 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004341-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Maxx 1.8 MPFI 8V FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004290-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Premium 1.4 8V ECONOFLEX 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004342-7",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed. Premium 1.8 MPFI 8V FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004291-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed.Prem. 1.0/ 1.0 FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004285-4",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sed.Wind 1.0/Millenium/Classic VHC",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004121-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan 1.0 MPFI 8V 71cv 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004219-6",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan 1.8 MPFI 8V  102cv 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004221-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan 1.8 MPFI FlexPower 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004234-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan GL 1.6  MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004005-3",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan GLS 1.6 16V MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004006-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan GLS 1.6 MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004032-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan Super 1.0 MPFI 16V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004171-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan Super 1.0 MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004080-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan Super Milenium 1.0 MPFI 16V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004122-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Sedan Super/ Classic 1.6 MPFI 8v 4",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004208-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Super 1.0 MPFI / 2p e 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004002-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Super 1.0 MPFI 16V 3p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004087-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa Super 1.0 MPFI 16V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004172-6",
    "vendido": false
  },
  {
    "veiculo": "Corsa Super 1.6 MPFI 8v 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004207-2",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wagon GL 1.6 MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004007-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wagon GLS 1.6 16V MPFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004008-8",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wagon GLS 1.6 8V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004186-6",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wagon Super 1.0 MPFI 16V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004112-2",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wagon Super 1.6 MPFI 8v",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004209-9",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wind 1.0 MPF/MilleniumI/ EFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004173-4",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wind 1.0 MPFI / EFI  2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004001-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wind 1.6 MPFi 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004197-1",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wind 1.6 MPFi 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004198-0",
    "vendido": false
  },
  {
    "veiculo": "Corsa Wind Piquet/ Champ 1.0 MPFI 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004203-0",
    "vendido": false
  },
  {
    "veiculo": "Corvette 5.7/ 6.0, 6.2 Conv./Stingray",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004140-8",
    "vendido": false
  },
  {
    "veiculo": "Corvette 5.7/ 6.0, 6.2 Targa/Stingray",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004141-6",
    "vendido": false
  },
  {
    "veiculo": "CRUZE HB Sport LT 1.8 16V FlexP. 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004399-0",
    "vendido": false
  },
  {
    "veiculo": "CRUZE HB Sport LT 1.8 16V FlexP. 5p Mec ",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004398-2",
    "vendido": false
  },
  {
    "veiculo": "CRUZE HB Sport LTZ 1.8 16V FlexP. 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004401-6",
    "vendido": false
  },
  {
    "veiculo": "CRUZE HB Sport LTZ 1.8 16V FlexP. 5p Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004400-8",
    "vendido": false
  },
  {
    "veiculo": "CRUZE LT 1.4 16V Turbo Flex 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004470-9",
    "vendido": false
  },
  {
    "veiculo": "CRUZE LT 1.8 16V FlexPower 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004380-0",
    "vendido": false
  },
  {
    "veiculo": "CRUZE LT 1.8 16V FlexPower 4p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004379-6",
    "vendido": false
  },
  {
    "veiculo": "CRUZE LTZ 1.4 16V Turbo Flex 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004469-5",
    "vendido": false
  },
  {
    "veiculo": "CRUZE LTZ 1.8 16V FlexPower 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004381-8",
    "vendido": false
  },
  {
    "veiculo": "CRUZE Sport LT 1.4 16V TB Flex 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004478-4",
    "vendido": false
  },
  {
    "veiculo": "CRUZE Sport LTZ 1.4 16V TB Flex 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004479-2",
    "vendido": false
  },
  {
    "veiculo": "D-10 CD Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004184-0",
    "vendido": false
  },
  {
    "veiculo": "D-10 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004118-1",
    "vendido": false
  },
  {
    "veiculo": "D-20 4.0 Champ/Conquest/El Caminho Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004142-4",
    "vendido": false
  },
  {
    "veiculo": "D-20 CD Lx S4T/Tro.Plus/Lx 3.9/4.0 TDies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004037-1",
    "vendido": false
  },
  {
    "veiculo": "D-20 S / El Caminho 3.9/4.0 CD T.Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004036-3",
    "vendido": false
  },
  {
    "veiculo": "D-20 S / Luxe 3.9/4.0 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004034-7",
    "vendido": false
  },
  {
    "veiculo": "D-20 S / Luxe 3.9/4.0 T.Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004035-5",
    "vendido": false
  },
  {
    "veiculo": "D-20 S 3.9/4.0 Turbo Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004187-4",
    "vendido": false
  },
  {
    "veiculo": "Ipanema GL 1.8 MPFI / EFI /SL 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004038-0",
    "vendido": false
  },
  {
    "veiculo": "Ipanema GL/ Flair 2.0 MPFI / EFI 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004039-8",
    "vendido": false
  },
  {
    "veiculo": "Ipanema GLS/SLE 2.0EFI /SL/e1.8/Sol/Wave",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004040-1",
    "vendido": false
  },
  {
    "veiculo": "Kadett GL 2.0 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004042-8",
    "vendido": false
  },
  {
    "veiculo": "Kadett GL/SL/Lite/Turim 1.8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004041-0",
    "vendido": false
  },
  {
    "veiculo": "Kadett GLS 1.8 EFI / SL/e 1.8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004043-6",
    "vendido": false
  },
  {
    "veiculo": "Kadett GLS 2.0 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004009-6",
    "vendido": false
  },
  {
    "veiculo": "Kadett GSi / GS 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004044-4",
    "vendido": false
  },
  {
    "veiculo": "Kadett GSi 2.0 Conversível",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004045-2",
    "vendido": false
  },
  {
    "veiculo": "Kadett Sport 2.0 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004046-0",
    "vendido": false
  },
  {
    "veiculo": "Lumina",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004075-4",
    "vendido": false
  },
  {
    "veiculo": "MALIBU LTZ 2.4 16V 171cv 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004366-4",
    "vendido": false
  },
  {
    "veiculo": "Marajo SL/SLe/Se",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004119-0",
    "vendido": false
  },
  {
    "veiculo": "Meriva 1.8/ CD 1.8 MPFI 16V 122cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004229-3",
    "vendido": false
  },
  {
    "veiculo": "Meriva 1.8/ CD 1.8 MPFI 8V 102cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004228-5",
    "vendido": false
  },
  {
    "veiculo": "Meriva 1.8/ CD 1.8 MPFI FlexPower 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004242-0",
    "vendido": false
  },
  {
    "veiculo": "Meriva COLLECTION 1.4 8V ECONOFLEX 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004408-3",
    "vendido": false
  },
  {
    "veiculo": "Meriva Expres.EASYTRONIC 1.8 FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004355-9",
    "vendido": false
  },
  {
    "veiculo": "Meriva Joy 1.4 MPFI 8V ECONOFLEX 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004353-2",
    "vendido": false
  },
  {
    "veiculo": "Meriva Joy 1.8 MPFI 8V FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004292-7",
    "vendido": false
  },
  {
    "veiculo": "Meriva Maxx 1.4 MPFI 8V ECONOFLEX 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004354-0",
    "vendido": false
  },
  {
    "veiculo": "Meriva Maxx 1.8 MPFI 8V FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004293-5",
    "vendido": false
  },
  {
    "veiculo": "Meriva Prem.EASYTRONIC 1.8 FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004347-8",
    "vendido": false
  },
  {
    "veiculo": "Meriva Premium 1.8 MPFI 8V FlexPower",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004294-3",
    "vendido": false
  },
  {
    "veiculo": "Meriva SS 1.8 MPFI 8V FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004327-3",
    "vendido": false
  },
  {
    "veiculo": "Meriva SS EASYTRONIC 1.8 FlexPower 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004356-7",
    "vendido": false
  },
  {
    "veiculo": "MONTANA  Sport 1.8 MPFI FlexPower 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004240-4",
    "vendido": false
  },
  {
    "veiculo": "MONTANA 1.4 8V Conquest ECONOFLEX  2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004338-9",
    "vendido": false
  },
  {
    "veiculo": "MONTANA 1.8/ 1.8 Conquest FlexPower 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004239-0",
    "vendido": false
  },
  {
    "veiculo": "MONTANA ARENA 1.4 ECONOFLEX  8V 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004364-8",
    "vendido": false
  },
  {
    "veiculo": "MONTANA COMBO 1.4 8V ECONOFLEX",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004361-3",
    "vendido": false
  },
  {
    "veiculo": "MONTANA LS 1.4 ECONOFLEX 8V 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004370-2",
    "vendido": false
  },
  {
    "veiculo": "MONTANA LS COMBO 1.4 8V ECONOFLEX 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004422-9",
    "vendido": false
  },
  {
    "veiculo": "MONTANA Off Road 1.8 MPFI FlexPower 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004241-2",
    "vendido": false
  },
  {
    "veiculo": "MONTANA Sport 1.4 ECONOFLEX 8V 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004365-6",
    "vendido": false
  },
  {
    "veiculo": "Monza 1.6i/ 1.8i  (restante)",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004143-2",
    "vendido": false
  },
  {
    "veiculo": "Monza Class 1.8/ 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004191-2",
    "vendido": false
  },
  {
    "veiculo": "Monza Classic SE 2.0 /MPFI e EFI 2p e 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004051-7",
    "vendido": false
  },
  {
    "veiculo": "Monza Classic/ SL/e/SR 1.8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004048-7",
    "vendido": false
  },
  {
    "veiculo": "Monza GL 1.8 EFI/ SL/ L/ 650/Barc. 2e4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004047-9",
    "vendido": false
  },
  {
    "veiculo": "Monza GL 2.0 EFI/SL/L/650/Club/Barc.2e4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004049-5",
    "vendido": false
  },
  {
    "veiculo": "Monza GLS/ Hi-Tech 2.0 EFI 2p e 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004050-9",
    "vendido": false
  },
  {
    "veiculo": "Monza SL/e SR 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004200-5",
    "vendido": false
  },
  {
    "veiculo": "Omega CD 3.8 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004090-8",
    "vendido": false
  },
  {
    "veiculo": "Omega CD 4.1 / 3.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004011-8",
    "vendido": false
  },
  {
    "veiculo": "Omega CD/ FITTIPALDI 3.6 V6 24V 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004315-0",
    "vendido": false
  },
  {
    "veiculo": "Omega Diamond",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004103-3",
    "vendido": false
  },
  {
    "veiculo": "Omega GL 2.0/ 2.2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004052-5",
    "vendido": false
  },
  {
    "veiculo": "Omega GLS 2.2 / 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004010-0",
    "vendido": false
  },
  {
    "veiculo": "Omega GLS 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004053-3",
    "vendido": false
  },
  {
    "veiculo": "ONIX  Lollapalooza 1.0 F.Power 5p Mec. ",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004451-2",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH ACTIV 1.4 8V Flex 5P Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004471-7",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH ACTIV 1.4 8V Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004472-5",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH EFFECT 1.4 8V F.Power 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004460-1",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH Joy 1.0 8V Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004473-3",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH LS 1.0 8V FlexPower 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004423-7",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH LT 1.0 8V FlexPower 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004424-5",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH LT 1.4 8V FlexPower 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004438-5",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH LT 1.4 8V FlexPower 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004425-3",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH LTZ 1.4 8V FlexPower 5p Aut. ",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004439-3",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH LTZ 1.4 8V FlexPower 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004426-1",
    "vendido": false
  },
  {
    "veiculo": "ONIX HATCH SELEÇÃO 1.0 8V Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004461-0",
    "vendido": false
  },
  {
    "veiculo": "Opala Comodoro/ Comod. SLE  4.1 / 2.5",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004054-1",
    "vendido": false
  },
  {
    "veiculo": "Opala Diplomata/ Diplom. SLE 4.1 / 2.5",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004055-0",
    "vendido": false
  },
  {
    "veiculo": "Opala L/SL/SS/ 2.5/4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004104-1",
    "vendido": false
  },
  {
    "veiculo": "PRISMA  Sed. Maxx/ LT 1.4 8V ECONOF. 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004333-8",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. ADVANT. 1.0 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004452-0",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. ADVANT. 1.4 8V F.Power Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004466-0",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. Joy 1.4 8V ECONOFLEX 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004332-0",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. Joy/ LS 1.0 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004358-3",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. LT 1.0 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004432-6",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. LT 1.4 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004433-4",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. LT 1.4 8V FlexPower 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004436-9",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. LTZ 1.4 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004434-2",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. LTZ 1.4 8V FlexPower 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004437-7",
    "vendido": false
  },
  {
    "veiculo": "PRISMA Sed. Maxx 1.0 8V FlexPower 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004359-1",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer  DTi 2.8 4x2 Turbo Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004226-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer 2.4 MPFI 8v 128cv 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004204-8",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004190-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Advant. 2.4/2.4 MPFI F.Power",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004308-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Colina 2.4/2.4 MPFI F.Power",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004306-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Colina 2.8 TDI 4x4 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004309-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer DLX 2.2 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004019-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer DLX 2.4 MPFI 128cv 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004237-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer DLX 2.5 Diesel Turbo",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004022-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer DLX 2.8 4x4 TB Interc. Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004193-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer DLX 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004020-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Executive 2.8 4x4 TDI Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004244-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Executive 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004091-6",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Std. 2.2 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004018-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Std. 2.5 Diesel Turbo",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004021-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Blazer Tornado 2.4 MPFI 8V 128cv",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004307-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up 2.4 MPFI 8v 128cv CD 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004206-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up 2.4 MPFI 8v 128cv/ Rodeio",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004205-6",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up 2.5 4x2 CD TB Max HST Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004093-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up 2.5 4x4 CD TB Max HST Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004144-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up 2.8 4x2 Turbo Interc. Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004174-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004162-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Advantage 2.5 Flex 4x2 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004474-1",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Barretos 2.2 MPFI 2p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004201-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Champ 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004105-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up DLX 2.4 MPFI 128cv CD 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004238-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Exec. 2.8 4x2 CD TB Int.Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004300-1",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Exec. 2.8 4x4 CD TB Int.Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004217-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Executive CD 4.3",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004146-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Executive CD 4.3 4x4",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004147-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Freeride 2.5 Flex 4x2 CD Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004465-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LS 2.4 F.Power 4x2 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004388-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LS 2.4 F.Power 4x2 CS",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004386-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LS 2.8 TDI 4x2 CD Dies. Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004412-1",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LS 2.8 TDI 4x2 CS Dies. Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004411-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LS 2.8 TDI 4x4 CD Dies. Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004413-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LS 2.8 TDI 4x4 CS Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004391-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.4 F.Power 4x2 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004389-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.4 F.Power 4x2 CS",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004387-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.5 Flex 4x2 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004455-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.5 Flex 4x4 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004456-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.8 TDI 4x2 CD Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004392-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.8 TDI 4x2 CD Diesel Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004393-1",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.8 TDI 4x4 CD Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004394-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LT 2.8 TDI 4x4 CD Diesel Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004395-8",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LTZ 2.4 F.Power 4x2 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004390-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LTZ 2.5 Flex 4x2 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004454-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LTZ 2.5 Flex 4x4 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004457-1",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LTZ 2.8 TDI 4x2 CD Dies. Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004410-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LTZ 2.8 TDI 4x2 CD Dies.Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004396-6",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up LTZ 2.8 TDI 4x4 CD Dies.Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004397-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 2.2 EFI CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004056-8",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 2.2 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004013-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 2.2 MPFI/EFI CE",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004015-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 2.5 CE TB Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004059-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 2.5 Diesel Turbo",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004058-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 2.8 4x2 CD TB Int.Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004176-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004014-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 4.3 V6 CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004017-7",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Luxe 4.3 V6 CE",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004016-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up RODEIO 2.4 MPFI F.Power CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004367-2",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up RODEIO 2.8 TDI 4x2 CD Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004368-0",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up RODEIO 2.8 TDI 4x4 CD Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004369-9",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Std 2.8 4x2 CD TB Int.Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004178-5",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Std 2.8 4x4 CD TB Int.Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004179-3",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Std. 2.2 MPFI / EFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004012-6",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Std. 2.2 MPFI CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004092-4",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Std. 2.5 Diesel Turbo",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004057-6",
    "vendido": false
  },
  {
    "veiculo": "S10 Pick-Up Tornado 2.4 MPFI 128cv CD 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004303-6",
    "vendido": false
  },
  {
    "veiculo": "S10 Pic-Up H.Country 2.8 4x4 CD Dies.Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004464-4",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up 2.8/Sert. 2.8 4x4 TB Int. Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004175-0",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Advant. 2.4/2.4 MPFI F.Power CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004322-2",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Advantage 2.4 MPFI F.Power CS",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004349-4",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Colina 2.4 MPFI 128cv CD 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004302-8",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Colina 2.4/2.4 MPFI F.Power CS",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004311-7",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Colina 2.8 TDI 4x2/4x4 CD Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004304-4",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Colina 2.8 TDI 4x2/4x4 CS Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004301-0",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Executive 2.4 MPFI F.Power CD",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004350-8",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Luxe 2.5 4x2 CD TB Max HST Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004060-6",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Luxe 2.5 4x4 CD TB Max HST Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004145-9",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Lx/Sert/Rod 2.8 4x4 CD TDI Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004177-7",
    "vendido": false
  },
  {
    "veiculo": "S10 P-Up Tornado 2.8 TDI 4x2/4x4 CD Dies",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004305-2",
    "vendido": false
  },
  {
    "veiculo": "Saturn SL",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004106-8",
    "vendido": false
  },
  {
    "veiculo": "Sierra CE 5.7 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004164-5",
    "vendido": false
  },
  {
    "veiculo": "Sierra Sport 5.0 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004165-3",
    "vendido": false
  },
  {
    "veiculo": "Silverado",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004076-2",
    "vendido": false
  },
  {
    "veiculo": "Silverado 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004094-0",
    "vendido": false
  },
  {
    "veiculo": "Silverado 4.1 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004095-9",
    "vendido": false
  },
  {
    "veiculo": "Silverado 4.2 Turbo Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004096-7",
    "vendido": false
  },
  {
    "veiculo": "Silverado Conquest 4.1 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004109-2",
    "vendido": false
  },
  {
    "veiculo": "Silverado Conquest 4.2 Diesel Turbo",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004110-6",
    "vendido": false
  },
  {
    "veiculo": "Silverado D20/ Rodeio 4.2 TB Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004196-3",
    "vendido": false
  },
  {
    "veiculo": "Silverado DLX 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004097-5",
    "vendido": false
  },
  {
    "veiculo": "Silverado DLX 4.2 Conquest HD Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004180-7",
    "vendido": false
  },
  {
    "veiculo": "Silverado DLX 4.2 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004098-3",
    "vendido": false
  },
  {
    "veiculo": "Silverado G. Blazer DLX/ Std 4.2 Dies.TB",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004089-4",
    "vendido": false
  },
  {
    "veiculo": "Silverado Grand Blazer DLX 4.1 mpfi",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004088-6",
    "vendido": false
  },
  {
    "veiculo": "Silverado Sport/ Fleet Side 5.7 CS",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004151-3",
    "vendido": false
  },
  {
    "veiculo": "Silverado Sport/Fleet Side 6.5 Dies. CS",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004152-1",
    "vendido": false
  },
  {
    "veiculo": "Silverado Trop. SL/ Van T.Diesel (todas)",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004214-5",
    "vendido": false
  },
  {
    "veiculo": "Silverado Tropical CD 4.1 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004149-1",
    "vendido": false
  },
  {
    "veiculo": "Silverado Tropical CD 4.1 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004148-3",
    "vendido": false
  },
  {
    "veiculo": "Silverado Tropical CD 4.2 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004150-5",
    "vendido": false
  },
  {
    "veiculo": "SONIC HB LT 1.6 16V FlexPower 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004428-8",
    "vendido": false
  },
  {
    "veiculo": "SONIC HB LT 1.6 16V FlexPower 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004402-4",
    "vendido": false
  },
  {
    "veiculo": "SONIC HB LTZ 1.6 16V FlexPower 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004404-0",
    "vendido": false
  },
  {
    "veiculo": "SONIC HB LTZ 1.6 16V FlexPower 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004403-2",
    "vendido": false
  },
  {
    "veiculo": "SONIC HB LTZ EFFECT 1.6 16V FlexP 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004448-2",
    "vendido": false
  },
  {
    "veiculo": "SONIC Sed. LT 1.6 16V FlexPower 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004429-6",
    "vendido": false
  },
  {
    "veiculo": "SONIC Sed. LT 1.6 16V FlexPower 4p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004405-9",
    "vendido": false
  },
  {
    "veiculo": "SONIC Sed. LTZ 1.6 16V FlexPower 4p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004407-5",
    "vendido": false
  },
  {
    "veiculo": "SONIC Sed. LTZ 1.6 16V FlexPower 4p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004406-7",
    "vendido": false
  },
  {
    "veiculo": "Sonoma CE 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004166-1",
    "vendido": false
  },
  {
    "veiculo": "SpaceVan Furgão 2.1 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004107-6",
    "vendido": false
  },
  {
    "veiculo": "SpaceVan Furgão 2.2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004099-1",
    "vendido": false
  },
  {
    "veiculo": "SpaceVan Passageiro 2.1Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004101-7",
    "vendido": false
  },
  {
    "veiculo": "SpaceVan Passageiro 2.2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004100-9",
    "vendido": false
  },
  {
    "veiculo": "SPIN ACTIV 1.8 8V Econo. Flex 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004458-0",
    "vendido": false
  },
  {
    "veiculo": "SPIN ACTIV 1.8 8V Econo. Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004459-8",
    "vendido": false
  },
  {
    "veiculo": "SPIN ADVANTAGE 1.8 8V Econo.Flex 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004441-5",
    "vendido": false
  },
  {
    "veiculo": "SPIN ADVANTAGE 1.8 8V Econo.Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004440-7",
    "vendido": false
  },
  {
    "veiculo": "SPIN LS 1.8 8V Econo.Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004435-0",
    "vendido": false
  },
  {
    "veiculo": "SPIN LT 1.8 8V Econo.Flex 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004415-6",
    "vendido": false
  },
  {
    "veiculo": "SPIN LT 1.8 8V Econo.Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004414-8",
    "vendido": false
  },
  {
    "veiculo": "SPIN LTZ 1.8 8V Econo.Flex 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004417-2",
    "vendido": false
  },
  {
    "veiculo": "SPIN LTZ 1.8 8V Econo.Flex 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004416-4",
    "vendido": false
  },
  {
    "veiculo": "SS10 Pick-Up 4.3 V6",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004163-7",
    "vendido": false
  },
  {
    "veiculo": "Suburban 5.7/ 6.5 V8/ 5.3 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004153-0",
    "vendido": false
  },
  {
    "veiculo": "Suprema CD 4.1 / 3.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004064-9",
    "vendido": false
  },
  {
    "veiculo": "Suprema Diamond",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004108-4",
    "vendido": false
  },
  {
    "veiculo": "Suprema GL 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004061-4",
    "vendido": false
  },
  {
    "veiculo": "Suprema GLS 2.2 / 2.0",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004062-2",
    "vendido": false
  },
  {
    "veiculo": "Suprema GLS 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004063-0",
    "vendido": false
  },
  {
    "veiculo": "Syclone 5.7 V8",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004167-0",
    "vendido": false
  },
  {
    "veiculo": "Tigra 1.6 16V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004102-5",
    "vendido": false
  },
  {
    "veiculo": "Tigra Power Tech Coupe 1.6 SFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004123-8",
    "vendido": false
  },
  {
    "veiculo": "TRACKER 2.0 16v 128cv MPFI 4x4 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004334-6",
    "vendido": false
  },
  {
    "veiculo": "TRACKER 2.0 4x4 TB Int. Diesel 4p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004210-2",
    "vendido": false
  },
  {
    "veiculo": "TRACKER Freeride 1.8 16V Flex 4x2 Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004449-0",
    "vendido": false
  },
  {
    "veiculo": "TRACKER LT 1.4 Turbo 16V Flex 4x2 Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004476-8",
    "vendido": false
  },
  {
    "veiculo": "TRACKER LT 1.8 16V Flex 4x2 Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004467-9",
    "vendido": false
  },
  {
    "veiculo": "TRACKER LTZ 1.4 Turbo 16V Flex 4x2 Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004477-6",
    "vendido": false
  },
  {
    "veiculo": "TRACKER LTZ 1.8 16V Flex 4x2 Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004444-0",
    "vendido": false
  },
  {
    "veiculo": "Trafic Chassi Longo Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004077-0",
    "vendido": false
  },
  {
    "veiculo": "Trafic Furgão Carga 2.1 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004078-9",
    "vendido": false
  },
  {
    "veiculo": "Trafic Furgao Carga 2.2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004188-2",
    "vendido": false
  },
  {
    "veiculo": "Trafic Passageiros 2.1 Diesel",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004079-7",
    "vendido": false
  },
  {
    "veiculo": "Trafic Passageiros 2.2",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004189-0",
    "vendido": false
  },
  {
    "veiculo": "TRAILBLAZER LTZ 2.8 CTDI Diesel Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004431-8",
    "vendido": false
  },
  {
    "veiculo": "TRAILBLAZER LTZ 3.6 V6  Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004430-0",
    "vendido": false
  },
  {
    "veiculo": "Vectra CD 2.0 (modelo antigo)",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004068-1",
    "vendido": false
  },
  {
    "veiculo": "Vectra CD 2.2 16V / 2.0 16V Mec./Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004067-3",
    "vendido": false
  },
  {
    "veiculo": "Vectra COLLECTION 2.0 FlexPower 8V Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004378-8",
    "vendido": false
  },
  {
    "veiculo": "Vectra Comfort 2.0 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004295-1",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elegan. 2.0 MPFI 8V FlexPower Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004324-9",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elegan. 2.0 MPFI 8V FlexPower Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004323-0",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elegance 2.0 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004296-0",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elegance 2.2 MPFI 16V Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004298-6",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elite 2.0 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004297-8",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elite 2.0 MPFI 8V FlexPower Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004348-6",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elite 2.2 MPFI 16V Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004299-4",
    "vendido": false
  },
  {
    "veiculo": "Vectra Elite 2.4 MPFI 16V FlexPower Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004325-7",
    "vendido": false
  },
  {
    "veiculo": "Vectra Expres./ Collection  2.0 MPFI 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004243-9",
    "vendido": false
  },
  {
    "veiculo": "Vectra EXPRESSION 2.0 MPFI FlexPower Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004337-0",
    "vendido": false
  },
  {
    "veiculo": "Vectra EXPRESSION 2.0 MPFI FlexPower Mec",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004336-2",
    "vendido": false
  },
  {
    "veiculo": "Vectra GL 2.2 / 2.0 MPFI",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004065-7",
    "vendido": false
  },
  {
    "veiculo": "Vectra GL 2.2 MPFI Milenium",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004181-5",
    "vendido": false
  },
  {
    "veiculo": "Vectra GLS/ Challenge 2.2 MPFI 16V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004182-3",
    "vendido": false
  },
  {
    "veiculo": "Vectra GLS/Expres.2.2/ 2.0 e 2.0 CD 8V",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004066-5",
    "vendido": false
  },
  {
    "veiculo": "Vectra GSi 2.0 16V (modelo antigo)",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004069-0",
    "vendido": false
  },
  {
    "veiculo": "Vectra GT 2.0 MPFI 8V FlexPower Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004344-3",
    "vendido": false
  },
  {
    "veiculo": "Vectra GT 2.0 MPFI 8V FlexPower Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004343-5",
    "vendido": false
  },
  {
    "veiculo": "Vectra GT-X 2.0 MPFI 8V FlexPower Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004346-0",
    "vendido": false
  },
  {
    "veiculo": "Vectra GT-X 2.0 MPFI 8V FlexPower Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004345-1",
    "vendido": false
  },
  {
    "veiculo": "Veraneio S / Luxe 4.1",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004070-3",
    "vendido": false
  },
  {
    "veiculo": "Veraneio S/ Luxe 4.0 Dies./TB Dies.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004071-1",
    "vendido": false
  },
  {
    "veiculo": "Zafira 2.0/ CD 2.0  8V  MPFI 5p Mec.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004211-0",
    "vendido": false
  },
  {
    "veiculo": "Zafira 2.0/ CD 2.0 16V  MPFI 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004212-9",
    "vendido": false
  },
  {
    "veiculo": "Zafira 2.0/ CD 2.0 8V MPFI 5p Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004222-6",
    "vendido": false
  },
  {
    "veiculo": "Zafira COLLECTION 2.0 FlexPower 8V Aut.",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004409-1",
    "vendido": false
  },
  {
    "veiculo": "Zafira Comfort 2.0 MPFI FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004245-5",
    "vendido": false
  },
  {
    "veiculo": "Zafira Eleg.2.0 MPFI FlexPower 8V 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004247-1",
    "vendido": false
  },
  {
    "veiculo": "Zafira Elegance 2.0 MPFI 16v 136cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004250-1",
    "vendido": false
  },
  {
    "veiculo": "Zafira Elegance 2.0 MPFI FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004246-3",
    "vendido": false
  },
  {
    "veiculo": "Zafira Elite 2.0 MPFI 16v 136cv 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004251-0",
    "vendido": false
  },
  {
    "veiculo": "Zafira Elite 2.0 MPFI FlexPower 8V  Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004249-8",
    "vendido": false
  },
  {
    "veiculo": "Zafira Elite 2.0 MPFI FlexPower 8V 5p",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004248-0",
    "vendido": false
  },
  {
    "veiculo": "Zafira Expres. 2.0 MPFI FlexPower 5p Aut",
    "marca": "GM - Chevrolet",
    "cod_fipe": "004335-4",
    "vendido": false
  },
  {
    "veiculo": "HOVER CUV 2.4 16V 4WD 5p Mec.",
    "marca": "GREAT WALL",
    "cod_fipe": "069002-3",
    "vendido": false
  },
  {
    "veiculo": "HOVER CUV 2.4 16V 5p Mec.",
    "marca": "GREAT WALL",
    "cod_fipe": "069001-5",
    "vendido": false
  },
  {
    "veiculo": "BR-800 (todos)/ Supermini",
    "marca": "Gurgel",
    "cod_fipe": "045003-0",
    "vendido": false
  },
  {
    "veiculo": "Carajas Diesel",
    "marca": "Gurgel",
    "cod_fipe": "045002-2",
    "vendido": false
  },
  {
    "veiculo": "Carajas/ Tocantis/ Xavante/ Vip",
    "marca": "Gurgel",
    "cod_fipe": "045001-4",
    "vendido": false
  },
  {
    "veiculo": "Towner Furgão 1.0 8V 48cv 5p",
    "marca": "HAFEI",
    "cod_fipe": "068002-8",
    "vendido": false
  },
  {
    "veiculo": "Towner Jr. Pick-up 1.0 8V 48cv  CD 4p",
    "marca": "HAFEI",
    "cod_fipe": "068005-2",
    "vendido": false
  },
  {
    "veiculo": "Towner Jr. Pick-up 1.0 8V 48cv  CS 2p",
    "marca": "HAFEI",
    "cod_fipe": "068004-4",
    "vendido": false
  },
  {
    "veiculo": "Towner Jr. Pick-up Baú 1.0 8V 48cv 2p",
    "marca": "HAFEI",
    "cod_fipe": "068007-9",
    "vendido": false
  },
  {
    "veiculo": "Towner Jr. Pick-up Baú 1.0 8V 48cv CD 4p",
    "marca": "HAFEI",
    "cod_fipe": "068008-7",
    "vendido": false
  },
  {
    "veiculo": "Towner Passageiro 1.0 8V 48cv 7L 5p",
    "marca": "HAFEI",
    "cod_fipe": "068001-0",
    "vendido": false
  },
  {
    "veiculo": "Towner Pick_up Baú 1.0 8V 48cv 2p",
    "marca": "HAFEI",
    "cod_fipe": "068006-0",
    "vendido": false
  },
  {
    "veiculo": "Towner Pick-up 1.0 8V 48cv 2p",
    "marca": "HAFEI",
    "cod_fipe": "068003-6",
    "vendido": false
  },
  {
    "veiculo": "Accord Coupe EX",
    "marca": "Honda",
    "cod_fipe": "014001-5",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã EX 2.0 16V 156cv Aut.",
    "marca": "Honda",
    "cod_fipe": "014066-0",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã EX 2.4/ 2.3/ 2.2 16V ",
    "marca": "Honda",
    "cod_fipe": "014014-7",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã EX 2.7/ 3.0 24V",
    "marca": "Honda",
    "cod_fipe": "014023-6",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã EX 3.5 V6 24V",
    "marca": "Honda",
    "cod_fipe": "014055-4",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã EXR",
    "marca": "Honda",
    "cod_fipe": "014015-5",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã LX  2.2/ 2.4 16V 158cv",
    "marca": "Honda",
    "cod_fipe": "014002-3",
    "vendido": false
  },
  {
    "veiculo": "Accord Sedã LX 2.0 16V 150cv/ 156cv Aut.",
    "marca": "Honda",
    "cod_fipe": "014047-3",
    "vendido": false
  },
  {
    "veiculo": "Accord SW EX",
    "marca": "Honda",
    "cod_fipe": "014020-1",
    "vendido": false
  },
  {
    "veiculo": "Accord SW LX",
    "marca": "Honda",
    "cod_fipe": "014021-0",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan DX 1.5 Flex 16V Aut.",
    "marca": "Honda",
    "cod_fipe": "014067-8",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan DX 1.5 Flex 16V Mec.",
    "marca": "Honda",
    "cod_fipe": "014068-6",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan EX 1.5 Flex 16V 4p Aut.",
    "marca": "Honda",
    "cod_fipe": "014061-9",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan EX 1.5 Flex 16V 4p Mec.",
    "marca": "Honda",
    "cod_fipe": "014060-0",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan EXL 1.5 Flex  16V 4p Aut.",
    "marca": "Honda",
    "cod_fipe": "014063-5",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan EXL 1.5 Flex 16V 4p Mec.",
    "marca": "Honda",
    "cod_fipe": "014062-7",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan LX 1.5 Flex 16V 4p Aut.",
    "marca": "Honda",
    "cod_fipe": "014059-7",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan LX 1.5 Flex 16V 4p Mec.",
    "marca": "Honda",
    "cod_fipe": "014058-9",
    "vendido": false
  },
  {
    "veiculo": "CITY Sedan SPORT 1.5 FLEX 16V 4p Mec.",
    "marca": "Honda",
    "cod_fipe": "014077-5",
    "vendido": false
  },
  {
    "veiculo": "Civic Coupe EX/ EXS 1.6 16V 2p",
    "marca": "Honda",
    "cod_fipe": "014019-8",
    "vendido": false
  },
  {
    "veiculo": "Civic Coupé Si 2.4 16V 206cv Mec. 2p",
    "marca": "Honda",
    "cod_fipe": "014084-8",
    "vendido": false
  },
  {
    "veiculo": "Civic CRX/ Targa VTi",
    "marca": "Honda",
    "cod_fipe": "014004-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Hatch DX",
    "marca": "Honda",
    "cod_fipe": "014005-8",
    "vendido": false
  },
  {
    "veiculo": "Civic Hatch LSi",
    "marca": "Honda",
    "cod_fipe": "014008-2",
    "vendido": false
  },
  {
    "veiculo": "Civic Hatch LX Aut",
    "marca": "Honda",
    "cod_fipe": "014006-6",
    "vendido": false
  },
  {
    "veiculo": "Civic Hatch Si",
    "marca": "Honda",
    "cod_fipe": "014011-2",
    "vendido": false
  },
  {
    "veiculo": "Civic Hatch VTi",
    "marca": "Honda",
    "cod_fipe": "014007-4",
    "vendido": false
  },
  {
    "veiculo": "Civic Sed LX 1.8 Aut 4p(s/Acess.Esp.D.F)",
    "marca": "Honda",
    "cod_fipe": "014051-1",
    "vendido": false
  },
  {
    "veiculo": "Civic Sed. LXL/ LXL SE 1.8 Flex 16V Aut.",
    "marca": "Honda",
    "cod_fipe": "014065-1",
    "vendido": false
  },
  {
    "veiculo": "Civic Sed. LXL/ LXL SE 1.8 Flex 16V Mec",
    "marca": "Honda",
    "cod_fipe": "014064-3",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedã EX/ EXS 1.6 Mec. 4p",
    "marca": "Honda",
    "cod_fipe": "014009-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedã EX/ EXS Aut. 4p/ Del-Sol 2p",
    "marca": "Honda",
    "cod_fipe": "014003-1",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedã LX 1.5/ 1.6",
    "marca": "Honda",
    "cod_fipe": "014010-4",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EX 1.6 16V Aut. 4p (nacion.)",
    "marca": "Honda",
    "cod_fipe": "014030-9",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EX 1.6 16V Mec. 4p (nacion.)",
    "marca": "Honda",
    "cod_fipe": "014029-5",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EX 1.7 16V 130cv Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014033-3",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EX 1.7 16v 130cv Mec. 4p",
    "marca": "Honda",
    "cod_fipe": "014034-1",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EX 2.0 Flex 16V Aut.4p",
    "marca": "Honda",
    "cod_fipe": "014091-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EXL 2.0 Flex 16V Aut.4p",
    "marca": "Honda",
    "cod_fipe": "014090-2",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EXR 2.0 Flexone 16V Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014075-9",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan EXS 1.8/1.8 Flex 16V Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014050-3",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LX 1.6 16V Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014028-7",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LX 1.6 16V Mec. 4p",
    "marca": "Honda",
    "cod_fipe": "014017-1",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LX 1.7 16V 115cv Mec. 4p",
    "marca": "Honda",
    "cod_fipe": "014036-8",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LX/ LXL 1.7 16V 115cv Aut 4p",
    "marca": "Honda",
    "cod_fipe": "014035-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXB 1.6 16V 4p",
    "marca": "Honda",
    "cod_fipe": "014016-3",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXB 1.7 16V 115cv",
    "marca": "Honda",
    "cod_fipe": "014037-6",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXL 1.7 16V 130cv Aut 4p",
    "marca": "Honda",
    "cod_fipe": "014044-9",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXL 1.7 16V 130cv Mec 4p",
    "marca": "Honda",
    "cod_fipe": "014043-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXR 2.0 Flexone 16V Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014074-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXS 1.8/1.8 Flex 16V Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014049-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan LXS 1.8/1.8 Flex 16V Mec. 4p",
    "marca": "Honda",
    "cod_fipe": "014048-1",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan Si 2.0 16V  192cv 4p",
    "marca": "Honda",
    "cod_fipe": "014052-0",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan SPORT 2.0 Flex 16V Aut.4p",
    "marca": "Honda",
    "cod_fipe": "014092-9",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan SPORT 2.0 Flex 16V Mec.4p",
    "marca": "Honda",
    "cod_fipe": "014093-7",
    "vendido": false
  },
  {
    "veiculo": "Civic Sedan TOURING 1.5 Turbo 16V Aut.4p",
    "marca": "Honda",
    "cod_fipe": "014089-9",
    "vendido": false
  },
  {
    "veiculo": "CR-V 2.0 16V Aut.",
    "marca": "Honda",
    "cod_fipe": "014032-5",
    "vendido": false
  },
  {
    "veiculo": "CR-V 2.0 16V Mec.",
    "marca": "Honda",
    "cod_fipe": "014031-7",
    "vendido": false
  },
  {
    "veiculo": "CR-V 2.4 16V 156cv Aut. 4p",
    "marca": "Honda",
    "cod_fipe": "014038-4",
    "vendido": false
  },
  {
    "veiculo": "CR-V EXL 2.0 16V 4WD/2.0 Flexone Aut.",
    "marca": "Honda",
    "cod_fipe": "014053-8",
    "vendido": false
  },
  {
    "veiculo": "CR-V EXL 2.0 Flexone 16V 2WD Aut.",
    "marca": "Honda",
    "cod_fipe": "014076-7",
    "vendido": false
  },
  {
    "veiculo": "CR-V LX 2.0 16V 2WD Mec.",
    "marca": "Honda",
    "cod_fipe": "014071-6",
    "vendido": false
  },
  {
    "veiculo": "CR-V LX 2.0 16V 2WD/2.0 Flexone Aut.",
    "marca": "Honda",
    "cod_fipe": "014054-6",
    "vendido": false
  },
  {
    "veiculo": "Fit CX 1.4 Flex 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014079-1",
    "vendido": false
  },
  {
    "veiculo": "Fit CX 1.4 Flex 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014078-3",
    "vendido": false
  },
  {
    "veiculo": "Fit DX 1.4 Flex 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014070-8",
    "vendido": false
  },
  {
    "veiculo": "Fit DX 1.4 Flex 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014069-4",
    "vendido": false
  },
  {
    "veiculo": "Fit DX 1.5 Flexone 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014082-1",
    "vendido": false
  },
  {
    "veiculo": "Fit DX 1.5 Flexone 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014083-0",
    "vendido": false
  },
  {
    "veiculo": "Fit EX/ S 1.5/ EX 1.5 Flex 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014046-5",
    "vendido": false
  },
  {
    "veiculo": "Fit EX/S/EX 1.5 Flex/Flexone 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014045-7",
    "vendido": false
  },
  {
    "veiculo": "Fit EXL 1.5 Flex 16V 5p Mec",
    "marca": "Honda",
    "cod_fipe": "014057-0",
    "vendido": false
  },
  {
    "veiculo": "Fit EXL 1.5 Flex/Flexone 16V 5p Aut",
    "marca": "Honda",
    "cod_fipe": "014056-2",
    "vendido": false
  },
  {
    "veiculo": "Fit LX 1.4/ 1.4 Flex 8V/16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014040-6",
    "vendido": false
  },
  {
    "veiculo": "Fit LX 1.4/ 1.4 Flex 8V/16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014039-2",
    "vendido": false
  },
  {
    "veiculo": "Fit LX 1.5 Flexone 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014081-3",
    "vendido": false
  },
  {
    "veiculo": "Fit LX 1.5 Flexone 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014080-5",
    "vendido": false
  },
  {
    "veiculo": "Fit LXL 1.4/ 1.4 Flex 8V/16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014042-2",
    "vendido": false
  },
  {
    "veiculo": "Fit LXL 1.4/ 1.4 Flex 8V/16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014041-4",
    "vendido": false
  },
  {
    "veiculo": "Fit Twist 1.5 Flex 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014073-2",
    "vendido": false
  },
  {
    "veiculo": "Fit Twist 1.5 Flex 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014072-4",
    "vendido": false
  },
  {
    "veiculo": "HR-V EX 1.8 Flexone 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014087-2",
    "vendido": false
  },
  {
    "veiculo": "HR-V EXL 1.8 Flexone 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014088-0",
    "vendido": false
  },
  {
    "veiculo": "HR-V LX 1.8 Flexone 16V 5p Aut.",
    "marca": "Honda",
    "cod_fipe": "014086-4",
    "vendido": false
  },
  {
    "veiculo": "HR-V LX 1.8 Flexone 16V 5p Mec.",
    "marca": "Honda",
    "cod_fipe": "014085-6",
    "vendido": false
  },
  {
    "veiculo": "Odyssey EX Van Aut (6 lug.)",
    "marca": "Honda",
    "cod_fipe": "014012-0",
    "vendido": false
  },
  {
    "veiculo": "Odyssey Van LX Aut (6 lug.)",
    "marca": "Honda",
    "cod_fipe": "014022-8",
    "vendido": false
  },
  {
    "veiculo": "Passport EX",
    "marca": "Honda",
    "cod_fipe": "014024-4",
    "vendido": false
  },
  {
    "veiculo": "Passport LX",
    "marca": "Honda",
    "cod_fipe": "014025-2",
    "vendido": false
  },
  {
    "veiculo": "Passport PIck-Up 4x2",
    "marca": "Honda",
    "cod_fipe": "014026-0",
    "vendido": false
  },
  {
    "veiculo": "Prelude Coupê S 2.2",
    "marca": "Honda",
    "cod_fipe": "014027-9",
    "vendido": false
  },
  {
    "veiculo": "Prelude Si",
    "marca": "Honda",
    "cod_fipe": "014013-9",
    "vendido": false
  },
  {
    "veiculo": "Accent GLS 1.5 12/16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015032-0",
    "vendido": false
  },
  {
    "veiculo": "Accent GLS 1.5 12/16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015001-0",
    "vendido": false
  },
  {
    "veiculo": "Accent GS 3p Mec",
    "marca": "Hyundai",
    "cod_fipe": "015002-9",
    "vendido": false
  },
  {
    "veiculo": "Accent L/ LR 1.5 2/4p",
    "marca": "Hyundai",
    "cod_fipe": "015003-7",
    "vendido": false
  },
  {
    "veiculo": "Accent LS 4p",
    "marca": "Hyundai",
    "cod_fipe": "015004-5",
    "vendido": false
  },
  {
    "veiculo": "Atos Prime GL 1.0 Mec",
    "marca": "Hyundai",
    "cod_fipe": "015048-7",
    "vendido": false
  },
  {
    "veiculo": "Atos Prime GLS 1.0 Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015035-5",
    "vendido": false
  },
  {
    "veiculo": "Atos Prime GLS 1.0 Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015033-9",
    "vendido": false
  },
  {
    "veiculo": "Atos Prime GLS 1.0 Semi-Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015034-7",
    "vendido": false
  },
  {
    "veiculo": "AZERA 3.0 V6 24V 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015083-5",
    "vendido": false
  },
  {
    "veiculo": "AZERA GLS 3.3 V6 24V 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015069-0",
    "vendido": false
  },
  {
    "veiculo": "Coupê FX 2.0 Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015037-1",
    "vendido": false
  },
  {
    "veiculo": "Coupê FX 2.0 Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015036-3",
    "vendido": false
  },
  {
    "veiculo": "Coupe FX 2.7 V6 24V 180cv Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015054-1",
    "vendido": false
  },
  {
    "veiculo": "Coupe FX 2.7 V6 24V 180cv Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015053-3",
    "vendido": false
  },
  {
    "veiculo": "Creta Attitude 1.6 16V Flex Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015142-4",
    "vendido": false
  },
  {
    "veiculo": "Creta Prestige 2.0 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015144-0",
    "vendido": false
  },
  {
    "veiculo": "Creta Pulse 1.6 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015141-6",
    "vendido": false
  },
  {
    "veiculo": "Creta Pulse 1.6 16V Flex Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015140-8",
    "vendido": false
  },
  {
    "veiculo": "Creta Pulse 2.0 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015143-2",
    "vendido": false
  },
  {
    "veiculo": "Cupê 2.0",
    "marca": "Hyundai",
    "cod_fipe": "015015-0",
    "vendido": false
  },
  {
    "veiculo": "Elantra 2.0 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015136-0",
    "vendido": false
  },
  {
    "veiculo": "Elantra GL",
    "marca": "Hyundai",
    "cod_fipe": "015005-3",
    "vendido": false
  },
  {
    "veiculo": "Elantra GLS 1.6",
    "marca": "Hyundai",
    "cod_fipe": "015030-4",
    "vendido": false
  },
  {
    "veiculo": "Elantra GLS 1.8 16V",
    "marca": "Hyundai",
    "cod_fipe": "015006-1",
    "vendido": false
  },
  {
    "veiculo": "ELANTRA GLS 1.8 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015081-9",
    "vendido": false
  },
  {
    "veiculo": "ELANTRA GLS 1.8 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015080-0",
    "vendido": false
  },
  {
    "veiculo": "Elantra GLS 2.0 16V Aut",
    "marca": "Hyundai",
    "cod_fipe": "015050-9",
    "vendido": false
  },
  {
    "veiculo": "Elantra GLS 2.0 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015104-1",
    "vendido": false
  },
  {
    "veiculo": "Elantra GLS 2.0 16V Mec",
    "marca": "Hyundai",
    "cod_fipe": "015049-5",
    "vendido": false
  },
  {
    "veiculo": "Elantra Special Edition 2.0 16V Flex Aut",
    "marca": "Hyundai",
    "cod_fipe": "015135-1",
    "vendido": false
  },
  {
    "veiculo": "Elantra Wagon 1.8 16V",
    "marca": "Hyundai",
    "cod_fipe": "015016-9",
    "vendido": false
  },
  {
    "veiculo": "EQUUS 4.6 V8 32V 366cv 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015087-8",
    "vendido": false
  },
  {
    "veiculo": "Excel GLS",
    "marca": "Hyundai",
    "cod_fipe": "015007-0",
    "vendido": false
  },
  {
    "veiculo": "Excel GS",
    "marca": "Hyundai",
    "cod_fipe": "015026-6",
    "vendido": false
  },
  {
    "veiculo": "Excel L",
    "marca": "Hyundai",
    "cod_fipe": "015027-4",
    "vendido": false
  },
  {
    "veiculo": "Excel LS/ GL",
    "marca": "Hyundai",
    "cod_fipe": "015008-8",
    "vendido": false
  },
  {
    "veiculo": "Galloper 2.5 Luxo Turbo Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015022-3",
    "vendido": false
  },
  {
    "veiculo": "Galloper 2.5 Super Luxo Turbo Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015021-5",
    "vendido": false
  },
  {
    "veiculo": "Galloper 3.0 V6 Luxo",
    "marca": "Hyundai",
    "cod_fipe": "015023-1",
    "vendido": false
  },
  {
    "veiculo": "Galloper 3.0 V6 Super Luxo Aut",
    "marca": "Hyundai",
    "cod_fipe": "015025-8",
    "vendido": false
  },
  {
    "veiculo": "Galloper 3.0 V6 Super Luxo Mec",
    "marca": "Hyundai",
    "cod_fipe": "015024-0",
    "vendido": false
  },
  {
    "veiculo": "GENESIS 3.8 V6 24V 290cv 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015084-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Santa Fé  3.3 V6 4X4 Tiptronic",
    "marca": "Hyundai",
    "cod_fipe": "015108-4",
    "vendido": false
  },
  {
    "veiculo": "H1 Starex HSV 2.4 16V 137cv  Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015060-6",
    "vendido": false
  },
  {
    "veiculo": "H1 Starex HSV 2.5 Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015042-8",
    "vendido": false
  },
  {
    "veiculo": "H1 Starex SVX 2.4 16V",
    "marca": "Hyundai",
    "cod_fipe": "015070-3",
    "vendido": false
  },
  {
    "veiculo": "H1 Starex SVX 2.5 TDI 100cv Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015067-3",
    "vendido": false
  },
  {
    "veiculo": "H1 Starex SVX 2.6 85cv Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015043-6",
    "vendido": false
  },
  {
    "veiculo": "H100 DLX Furgão Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015018-5",
    "vendido": false
  },
  {
    "veiculo": "H100 DLX/ Panel Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015019-3",
    "vendido": false
  },
  {
    "veiculo": "H100 GL Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015038-0",
    "vendido": false
  },
  {
    "veiculo": "H100 GL Furgão Extra-Longo Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015041-0",
    "vendido": false
  },
  {
    "veiculo": "H100 GLS Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015040-1",
    "vendido": false
  },
  {
    "veiculo": "H100 GS (12 lugares)",
    "marca": "Hyundai",
    "cod_fipe": "015029-0",
    "vendido": false
  },
  {
    "veiculo": "H100 GS Diesel (12 lugares)",
    "marca": "Hyundai",
    "cod_fipe": "015013-4",
    "vendido": false
  },
  {
    "veiculo": "H100 Porter Truck Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015031-2",
    "vendido": false
  },
  {
    "veiculo": "H100 SPR Diesel (15 lugares)",
    "marca": "Hyundai",
    "cod_fipe": "015014-2",
    "vendido": false
  },
  {
    "veiculo": "H100 Top Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015039-8",
    "vendido": false
  },
  {
    "veiculo": "HB20 C./C.Plus/C.Style 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015089-4",
    "vendido": false
  },
  {
    "veiculo": "HB20 C.Style/C.Plus 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015090-8",
    "vendido": false
  },
  {
    "veiculo": "HB20 Comf./C.Plus/C.Style 1.0 Flex 12V",
    "marca": "Hyundai",
    "cod_fipe": "015088-6",
    "vendido": false
  },
  {
    "veiculo": "HB20 Comfort Plus 1.0 TB Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015126-2",
    "vendido": false
  },
  {
    "veiculo": "HB20 Comfort Style 1.0 TB Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015127-0",
    "vendido": false
  },
  {
    "veiculo": "HB20 Copa do Mundo 1.0 Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015109-2",
    "vendido": false
  },
  {
    "veiculo": "HB20 Copa do Mundo 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015111-4",
    "vendido": false
  },
  {
    "veiculo": "HB20 Copa do Mundo 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015110-6",
    "vendido": false
  },
  {
    "veiculo": "HB20 For You 1.0 Flex 12V 5p",
    "marca": "Hyundai",
    "cod_fipe": "015115-7",
    "vendido": false
  },
  {
    "veiculo": "HB20 Ocean 1.0 Flex 12V 5p Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015130-0",
    "vendido": false
  },
  {
    "veiculo": "HB20 Ocean 1.6 Flex 16V 5p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015132-7",
    "vendido": false
  },
  {
    "veiculo": "HB20 Ocean 1.6 Flex 16V 5p Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015131-9",
    "vendido": false
  },
  {
    "veiculo": "HB20 Premium 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015092-4",
    "vendido": false
  },
  {
    "veiculo": "HB20 Premium 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015091-6",
    "vendido": false
  },
  {
    "veiculo": "HB20 R spec 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015124-6",
    "vendido": false
  },
  {
    "veiculo": "HB20 R spec 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015125-4",
    "vendido": false
  },
  {
    "veiculo": "HB20 S For You 1.0 Flex 12V 4p",
    "marca": "Hyundai",
    "cod_fipe": "015116-5",
    "vendido": false
  },
  {
    "veiculo": "HB20 Spicy 1.0 Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015119-0",
    "vendido": false
  },
  {
    "veiculo": "HB20 Spicy 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015118-1",
    "vendido": false
  },
  {
    "veiculo": "HB20 Spicy 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015117-3",
    "vendido": false
  },
  {
    "veiculo": "HB20S  Impress 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015120-3",
    "vendido": false
  },
  {
    "veiculo": "HB20S  Impress 1.6 Flex 16v Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015121-1",
    "vendido": false
  },
  {
    "veiculo": "HB20S C.Plus/C.Style 1.6 Flex 16V Mec.4p",
    "marca": "Hyundai",
    "cod_fipe": "015100-9",
    "vendido": false
  },
  {
    "veiculo": "HB20S C.Plus/C.Style1.0 Flex 12V Mec. 4P",
    "marca": "Hyundai",
    "cod_fipe": "015099-1",
    "vendido": false
  },
  {
    "veiculo": "HB20S C.Style/C.Plus1.6 Flex 16V Aut. 4p",
    "marca": "Hyundai",
    "cod_fipe": "015101-7",
    "vendido": false
  },
  {
    "veiculo": "HB20S Comfort Plus 1.0 TB Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015128-9",
    "vendido": false
  },
  {
    "veiculo": "HB20S Comfort Style 1.0 TB Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015129-7",
    "vendido": false
  },
  {
    "veiculo": "HB20S Copa do Mundo 1.0 Flex 12V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015112-2",
    "vendido": false
  },
  {
    "veiculo": "HB20S Copa do Mundo 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015114-9",
    "vendido": false
  },
  {
    "veiculo": "HB20S Copa do Mundo 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015113-0",
    "vendido": false
  },
  {
    "veiculo": "HB20S Ocean 1.6 Flex 16v 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015134-3",
    "vendido": false
  },
  {
    "veiculo": "HB20S Ocean 1.6 Flex 16V 4p Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015133-5",
    "vendido": false
  },
  {
    "veiculo": "HB20S Premium 1.6 Flex 16V Aut. 4p",
    "marca": "Hyundai",
    "cod_fipe": "015103-3",
    "vendido": false
  },
  {
    "veiculo": "HB20S Premium 1.6 Flex 16V Mec. 4p",
    "marca": "Hyundai",
    "cod_fipe": "015102-5",
    "vendido": false
  },
  {
    "veiculo": "HB20X Premium 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015097-5",
    "vendido": false
  },
  {
    "veiculo": "HB20X Premium 1.6 Flex 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015096-7",
    "vendido": false
  },
  {
    "veiculo": "HB20X Style 1.6 Flex 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015095-9",
    "vendido": false
  },
  {
    "veiculo": "HB20X Style 1.6 Flex 16v Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015094-0",
    "vendido": false
  },
  {
    "veiculo": "HR 2.5 TCI Diesel (RS/RD)",
    "marca": "Hyundai",
    "cod_fipe": "015065-7",
    "vendido": false
  },
  {
    "veiculo": "i30 1.6 16V Flex 5p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015098-3",
    "vendido": false
  },
  {
    "veiculo": "i30 1.8 16V Aut. 5p",
    "marca": "Hyundai",
    "cod_fipe": "015106-8",
    "vendido": false
  },
  {
    "veiculo": "i30 2.0 16V 145cv 5p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015071-1",
    "vendido": false
  },
  {
    "veiculo": "i30 2.0 16V 145cv 5p Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015072-0",
    "vendido": false
  },
  {
    "veiculo": "i30 Serie Limitada 1.8 16V Aut. 5p",
    "marca": "Hyundai",
    "cod_fipe": "015122-0",
    "vendido": false
  },
  {
    "veiculo": "i30cw 2.0 16V 145cv Aut. 5p",
    "marca": "Hyundai",
    "cod_fipe": "015077-0",
    "vendido": false
  },
  {
    "veiculo": "i30cw 2.0 16V 145cv Mec. 5p",
    "marca": "Hyundai",
    "cod_fipe": "015076-2",
    "vendido": false
  },
  {
    "veiculo": "ix35 2.0 16V 170cv 2WD/4WD Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015074-6",
    "vendido": false
  },
  {
    "veiculo": "ix35 2.0 16V 170cv 2WD/4WD Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015075-4",
    "vendido": false
  },
  {
    "veiculo": "ix35 2.0 16V 2WD Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015146-7",
    "vendido": false
  },
  {
    "veiculo": "ix35 2.0 16V 2WD Flex Mec. ",
    "marca": "Hyundai",
    "cod_fipe": "015085-1",
    "vendido": false
  },
  {
    "veiculo": "ix35 2.0 Launching Edition 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015123-8",
    "vendido": false
  },
  {
    "veiculo": "ix35 GL 2.0 16V 2WD Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015145-9",
    "vendido": false
  },
  {
    "veiculo": "ix35 GLS 2.0 16V 2WD Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015086-0",
    "vendido": false
  },
  {
    "veiculo": "Matrix GLS 1.8 16V 123cv Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015058-4",
    "vendido": false
  },
  {
    "veiculo": "Matrix GLS 1.8 16V 123cv Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015057-6",
    "vendido": false
  },
  {
    "veiculo": "Porter GL 4x2 Curto/Longo Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015044-4",
    "vendido": false
  },
  {
    "veiculo": "Porter GLS CD 4x2 2.6 8V Diesel",
    "marca": "Hyundai",
    "cod_fipe": "015046-0",
    "vendido": false
  },
  {
    "veiculo": "Santa Fé /GLS 3.3 V6 4X4 Tiptronic",
    "marca": "Hyundai",
    "cod_fipe": "015105-0",
    "vendido": false
  },
  {
    "veiculo": "Santa Fe GLS 2.4 Tiptronic",
    "marca": "Hyundai",
    "cod_fipe": "015082-7",
    "vendido": false
  },
  {
    "veiculo": "Santa Fe GLS 2.7 V6 4x4TipTronic",
    "marca": "Hyundai",
    "cod_fipe": "015051-7",
    "vendido": false
  },
  {
    "veiculo": "Santa Fe GLS 3.5 V6 4x4 Tiptronic",
    "marca": "Hyundai",
    "cod_fipe": "015073-8",
    "vendido": false
  },
  {
    "veiculo": "Scoupe",
    "marca": "Hyundai",
    "cod_fipe": "015009-6",
    "vendido": false
  },
  {
    "veiculo": "Sonata 2.4 16V 182cv 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015078-9",
    "vendido": false
  },
  {
    "veiculo": "Sonata GL 2.0 4p",
    "marca": "Hyundai",
    "cod_fipe": "015010-0",
    "vendido": false
  },
  {
    "veiculo": "Sonata GLS 2.0 4p",
    "marca": "Hyundai",
    "cod_fipe": "015011-8",
    "vendido": false
  },
  {
    "veiculo": "Sonata GLS 2.5 Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015045-2",
    "vendido": false
  },
  {
    "veiculo": "Sonata GLS 2.7 V6 24V 179cv 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015052-5",
    "vendido": false
  },
  {
    "veiculo": "Sonata GLS 3.0 4p Aut",
    "marca": "Hyundai",
    "cod_fipe": "015012-6",
    "vendido": false
  },
  {
    "veiculo": "Sonata GLS 3.3 V6 24V 235cv 4p Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015066-5",
    "vendido": false
  },
  {
    "veiculo": "Terracan 2.5 8V 100cv TB Diesel Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015056-8",
    "vendido": false
  },
  {
    "veiculo": "Terracan 2.5 8V 100cv TB Diesel Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015055-0",
    "vendido": false
  },
  {
    "veiculo": "Terracan 2.9 CRDI 8V 163cv Diesel Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015059-2",
    "vendido": false
  },
  {
    "veiculo": "Trajet GLS 2.7 V6 24v 179cv Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015047-9",
    "vendido": false
  },
  {
    "veiculo": "Tucson 2.0 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015064-9",
    "vendido": false
  },
  {
    "veiculo": "Tucson 2.0 16V Flex Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015093-2",
    "vendido": false
  },
  {
    "veiculo": "Tucson 2.0 16V Flex Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015107-6",
    "vendido": false
  },
  {
    "veiculo": "Tucson 2.0 16V Mec.",
    "marca": "Hyundai",
    "cod_fipe": "015063-0",
    "vendido": false
  },
  {
    "veiculo": "Tucson 2.0 CRDi 16V 112cv Diesel Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015061-4",
    "vendido": false
  },
  {
    "veiculo": "Tucson 2.7 MPFI 24V 175cv Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015062-2",
    "vendido": false
  },
  {
    "veiculo": "Tucson Ed. Especial 1.6 Turbo 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015139-4",
    "vendido": false
  },
  {
    "veiculo": "Tucson GL 1.6 Turbo 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015137-8",
    "vendido": false
  },
  {
    "veiculo": "Tucson GLS 1.6 Turbo 16V Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015138-6",
    "vendido": false
  },
  {
    "veiculo": "Veloster 1.6 16V  140cv Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015079-7",
    "vendido": false
  },
  {
    "veiculo": "VERACRUZ GLS 3.8 4WD Aut.",
    "marca": "Hyundai",
    "cod_fipe": "015068-1",
    "vendido": false
  },
  {
    "veiculo": "Amigo 2.3 4x2/4x4",
    "marca": "Isuzu",
    "cod_fipe": "046001-0",
    "vendido": false
  },
  {
    "veiculo": "Hombre 2 WD XS 2.2",
    "marca": "Isuzu",
    "cod_fipe": "046002-8",
    "vendido": false
  },
  {
    "veiculo": "Rodeo 3.2 V6",
    "marca": "Isuzu",
    "cod_fipe": "046003-6",
    "vendido": false
  },
  {
    "veiculo": "J2 1.4 16V 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080007-4",
    "vendido": false
  },
  {
    "veiculo": "J2 1.4 JET Flex 16V 5p Mec",
    "marca": "JAC",
    "cod_fipe": "080012-0",
    "vendido": false
  },
  {
    "veiculo": "J3 1.4 16V 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080001-5",
    "vendido": false
  },
  {
    "veiculo": "J3 Brasil1.4 16V 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080004-0",
    "vendido": false
  },
  {
    "veiculo": "J3 S 1.5 JET Flex 16v VVT 5p",
    "marca": "JAC",
    "cod_fipe": "080008-2",
    "vendido": false
  },
  {
    "veiculo": "J3 S turin 1.5 JET Flex 16V 4p Mec.",
    "marca": "JAC",
    "cod_fipe": "080011-2",
    "vendido": false
  },
  {
    "veiculo": "J3 turin Sedan 1.4 16V 4p Mec.",
    "marca": "JAC",
    "cod_fipe": "080002-3",
    "vendido": false
  },
  {
    "veiculo": "J3 turin Sedan Brasil 1.4 16V 4p Mec.",
    "marca": "JAC",
    "cod_fipe": "080005-8",
    "vendido": false
  },
  {
    "veiculo": "J5 Sedan 1.5 16V 4p Mec.",
    "marca": "JAC",
    "cod_fipe": "080006-6",
    "vendido": false
  },
  {
    "veiculo": "J6 2.0 16V 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080003-1",
    "vendido": false
  },
  {
    "veiculo": "J6 2.0 JET Flex 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080014-7",
    "vendido": false
  },
  {
    "veiculo": "T 140 2.8 2p (diesel)",
    "marca": "JAC",
    "cod_fipe": "080009-0",
    "vendido": false
  },
  {
    "veiculo": "T5 1.5 JET Flex 16V 5p Aut.",
    "marca": "JAC",
    "cod_fipe": "080016-3",
    "vendido": false
  },
  {
    "veiculo": "T5 1.5 JET Flex 16V 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080015-5",
    "vendido": false
  },
  {
    "veiculo": "T6 2.0 JET Flex 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080013-9",
    "vendido": false
  },
  {
    "veiculo": "T8 2.0 16V 5p Mec.",
    "marca": "JAC",
    "cod_fipe": "080010-4",
    "vendido": false
  },
  {
    "veiculo": "Daimler LWB 4.0",
    "marca": "Jaguar",
    "cod_fipe": "016006-7",
    "vendido": false
  },
  {
    "veiculo": "F-Pace 2.0 Prestige 180cv Diesel Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016052-0",
    "vendido": false
  },
  {
    "veiculo": "F-Pace 3.0 FIRST EDITION 380cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016053-9",
    "vendido": false
  },
  {
    "veiculo": "F-Pace 3.0 R-Sport 340cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016051-2",
    "vendido": false
  },
  {
    "veiculo": "F-Pace 3.0 S 380cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016050-4",
    "vendido": false
  },
  {
    "veiculo": "F-Type R AWD Supercharged Coupe 5.0 V8",
    "marca": "Jaguar",
    "cod_fipe": "016046-6",
    "vendido": false
  },
  {
    "veiculo": "F-Type R Supercharged Coupe 5.0 V8",
    "marca": "Jaguar",
    "cod_fipe": "016040-7",
    "vendido": false
  },
  {
    "veiculo": "F-Type S Supercharged Conversivel 3.0 V6",
    "marca": "Jaguar",
    "cod_fipe": "016032-6",
    "vendido": false
  },
  {
    "veiculo": "F-Type S Supercharged Conversivel 5.0 V8",
    "marca": "Jaguar",
    "cod_fipe": "016033-4",
    "vendido": false
  },
  {
    "veiculo": "F-Type S Supercharged Coupe 3.0 V6",
    "marca": "Jaguar",
    "cod_fipe": "016038-5",
    "vendido": false
  },
  {
    "veiculo": "F-Type Supercharged Conversivel 3.0 V6 ",
    "marca": "Jaguar",
    "cod_fipe": "016031-8",
    "vendido": false
  },
  {
    "veiculo": "F-Type Supercharged Coupe 3.0 V6 ",
    "marca": "Jaguar",
    "cod_fipe": "016039-3",
    "vendido": false
  },
  {
    "veiculo": "S-Type 3.0/ 3.0 SE V6",
    "marca": "Jaguar",
    "cod_fipe": "016009-1",
    "vendido": false
  },
  {
    "veiculo": "S-Type 4.2/ 4.2 SE/ 4.0 V8 32V",
    "marca": "Jaguar",
    "cod_fipe": "016015-6",
    "vendido": false
  },
  {
    "veiculo": "S-Type R 4.2 V8 32V 400cv",
    "marca": "Jaguar",
    "cod_fipe": "016019-9",
    "vendido": false
  },
  {
    "veiculo": "XE 2.0 Turbocharged Pure 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016043-1",
    "vendido": false
  },
  {
    "veiculo": "XE 2.0 Turbocharged R-Sport 240cv Aut. ",
    "marca": "Jaguar",
    "cod_fipe": "016044-0",
    "vendido": false
  },
  {
    "veiculo": "XE 3.0 Supercharged S 340cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016045-8",
    "vendido": false
  },
  {
    "veiculo": "XF 2.0 GTDi Prestige 16V 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016047-4",
    "vendido": false
  },
  {
    "veiculo": "XF 2.0 GTDI R-SPORT 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016048-2",
    "vendido": false
  },
  {
    "veiculo": "XF 2.0 GTDI SPORT LUXURY 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016041-5",
    "vendido": false
  },
  {
    "veiculo": "XF 2.0 GTDI SPORT PREMIUM TECH 240cv Aut",
    "marca": "Jaguar",
    "cod_fipe": "016042-3",
    "vendido": false
  },
  {
    "veiculo": "XF 2.0 Turbo 16V 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016029-6",
    "vendido": false
  },
  {
    "veiculo": "XF 3.0 Portfolio Supercharged V6 Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016030-0",
    "vendido": false
  },
  {
    "veiculo": "XF 3.0 S V6 380cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016049-0",
    "vendido": false
  },
  {
    "veiculo": "XF 3.0 V6 24V 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016023-7",
    "vendido": false
  },
  {
    "veiculo": "XF 4.2 V8 32V 300cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016024-5",
    "vendido": false
  },
  {
    "veiculo": "XF 5.0 32V V8 385cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016027-0",
    "vendido": false
  },
  {
    "veiculo": "XF SV8 4.2 V8 32V 420cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016025-3",
    "vendido": false
  },
  {
    "veiculo": "XFR Supercharged 5.0 V8 510cv Aut",
    "marca": "Jaguar",
    "cod_fipe": "016026-1",
    "vendido": false
  },
  {
    "veiculo": "XFR-S Supercharged 5.0 V8 550cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016036-9",
    "vendido": false
  },
  {
    "veiculo": "XJ 2.0 Turbo 16V 240cv Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016035-0",
    "vendido": false
  },
  {
    "veiculo": "XJ 3.0 Portfolio Supercharged V6 Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016034-2",
    "vendido": false
  },
  {
    "veiculo": "XJ 3.0 R-Sport Supercharged V6 Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016054-7",
    "vendido": false
  },
  {
    "veiculo": "XJ S.Sport Supercharged 5.0 V8 32V Aut.",
    "marca": "Jaguar",
    "cod_fipe": "016028-8",
    "vendido": false
  },
  {
    "veiculo": "XJ Super 4.2 V8 32V 400cv 4p",
    "marca": "Jaguar",
    "cod_fipe": "016018-0",
    "vendido": false
  },
  {
    "veiculo": "XJ-12",
    "marca": "Jaguar",
    "cod_fipe": "016002-4",
    "vendido": false
  },
  {
    "veiculo": "XJ-12 Conv.",
    "marca": "Jaguar",
    "cod_fipe": "016010-5",
    "vendido": false
  },
  {
    "veiculo": "XJ-6",
    "marca": "Jaguar",
    "cod_fipe": "016001-6",
    "vendido": false
  },
  {
    "veiculo": "XJ-8 Daimler",
    "marca": "Jaguar",
    "cod_fipe": "016003-2",
    "vendido": false
  },
  {
    "veiculo": "XJ-8 Executive/ Centenary 4.0",
    "marca": "Jaguar",
    "cod_fipe": "016004-0",
    "vendido": false
  },
  {
    "veiculo": "XJ-8 Executive/ SE 4.2 V8 32V 300cv 4p",
    "marca": "Jaguar",
    "cod_fipe": "016016-4",
    "vendido": false
  },
  {
    "veiculo": "XJ-8 Sovereign LWB 4.0",
    "marca": "Jaguar",
    "cod_fipe": "016005-9",
    "vendido": false
  },
  {
    "veiculo": "XJR 4.2 V8 32V 400cv 4p",
    "marca": "Jaguar",
    "cod_fipe": "016017-2",
    "vendido": false
  },
  {
    "veiculo": "XJS 4.0 24V",
    "marca": "Jaguar",
    "cod_fipe": "016011-3",
    "vendido": false
  },
  {
    "veiculo": "XJS-C 6.0 V12",
    "marca": "Jaguar",
    "cod_fipe": "016012-1",
    "vendido": false
  },
  {
    "veiculo": "XK-8 BR Conversível / XK-8 Conversível",
    "marca": "Jaguar",
    "cod_fipe": "016008-3",
    "vendido": false
  },
  {
    "veiculo": "XK-8 BR Coupê/ XK-8 Coupê",
    "marca": "Jaguar",
    "cod_fipe": "016007-5",
    "vendido": false
  },
  {
    "veiculo": "XKR Conversível 4.2 / 5.0 32V",
    "marca": "Jaguar",
    "cod_fipe": "016022-9",
    "vendido": false
  },
  {
    "veiculo": "XKR Coupê  4.2 / 5.0 32V",
    "marca": "Jaguar",
    "cod_fipe": "016021-0",
    "vendido": false
  },
  {
    "veiculo": "XKR-S Coupé Supercharged 5.0 32V",
    "marca": "Jaguar",
    "cod_fipe": "016037-7",
    "vendido": false
  },
  {
    "veiculo": "X-Type ESTATE 3.0 24V 230cv",
    "marca": "Jaguar",
    "cod_fipe": "016020-2",
    "vendido": false
  },
  {
    "veiculo": "X-Type SE 2.5 V6 194cv",
    "marca": "Jaguar",
    "cod_fipe": "016013-0",
    "vendido": false
  },
  {
    "veiculo": "X-Type SE 3.0 V6 231cv",
    "marca": "Jaguar",
    "cod_fipe": "016014-8",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Country 4.0 V6 4x4",
    "marca": "Jeep",
    "cod_fipe": "017009-7",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Limited 3.2 4x4 V6 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017031-3",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Limited 3.7 4x4 V6 12V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017022-4",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Longitude 3.2 4x4 V6 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017032-1",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Rubicon 4.0 V6 4x4",
    "marca": "Jeep",
    "cod_fipe": "017010-0",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Sport  4.0 Mec./Aut.",
    "marca": "Jeep",
    "cod_fipe": "017004-6",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Sport 2.5 4x4 Diesel",
    "marca": "Jeep",
    "cod_fipe": "017012-7",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Sport 3.7 4x4 V6 12V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017015-1",
    "vendido": false
  },
  {
    "veiculo": "Cherokee Traihawk 3.2 4x4 V6 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017039-9",
    "vendido": false
  },
  {
    "veiculo": "Commander Limited 5.7 326cv 5p",
    "marca": "Jeep",
    "cod_fipe": "017017-8",
    "vendido": false
  },
  {
    "veiculo": "COMPASS LIMITED 2.0 4x2 Flex 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017047-0",
    "vendido": false
  },
  {
    "veiculo": "COMPASS LONGITUDE 2.0 4x2 Flex 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017046-1",
    "vendido": false
  },
  {
    "veiculo": "COMPASS LONGITUDE 2.0 4x4 Dies. 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017045-3",
    "vendido": false
  },
  {
    "veiculo": "COMPASS SPORT 2.0 16V 156cv 5p",
    "marca": "Jeep",
    "cod_fipe": "017028-3",
    "vendido": false
  },
  {
    "veiculo": "COMPASS SPORT 2.0 4x2 Flex 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017048-8",
    "vendido": false
  },
  {
    "veiculo": "COMPASS TRAILHAWK 2.0 4x4 Dies. 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017044-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Laredo 2.7 I-5 TB Dies.",
    "marca": "Jeep",
    "cod_fipe": "017014-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Laredo 3.1 TB Diesel Aut",
    "marca": "Jeep",
    "cod_fipe": "017013-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Laredo 3.6 4x4 V6 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017025-9",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Laredo 4.0 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017001-1",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limit.4.7 Quad.Drive Aut.",
    "marca": "Jeep",
    "cod_fipe": "017011-9",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limited 3.0 TB Dies. Aut",
    "marca": "Jeep",
    "cod_fipe": "017021-6",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limited 3.6 4x4 V6 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017024-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limited 4.7",
    "marca": "Jeep",
    "cod_fipe": "017006-2",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limited 5.2 Aut.",
    "marca": "Jeep",
    "cod_fipe": "017002-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limited 5.7 326cv",
    "marca": "Jeep",
    "cod_fipe": "017016-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Limited LX 5.9",
    "marca": "Jeep",
    "cod_fipe": "017005-4",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Nova Limited 4.7",
    "marca": "Jeep",
    "cod_fipe": "017008-9",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee Overland 5.7 326cv",
    "marca": "Jeep",
    "cod_fipe": "017019-4",
    "vendido": false
  },
  {
    "veiculo": "Grand Cherokee SRT8 6.1 V8 16V 432cv Aut",
    "marca": "Jeep",
    "cod_fipe": "017018-6",
    "vendido": false
  },
  {
    "veiculo": "Renegade 75 Anos 1.8 4X2 Flex 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017043-7",
    "vendido": false
  },
  {
    "veiculo": "Renegade 75 Anos 2.0 4X4 TB Diesel Aut.",
    "marca": "Jeep",
    "cod_fipe": "017042-9",
    "vendido": false
  },
  {
    "veiculo": "Renegade Lim. Edit. 1.8 4x2 Flex 16V Aut",
    "marca": "Jeep",
    "cod_fipe": "017041-0",
    "vendido": false
  },
  {
    "veiculo": "Renegade Longitude 1.8 4x2 Flex 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017035-6",
    "vendido": false
  },
  {
    "veiculo": "Renegade Longitude 2.0 4x4 TB Diesel Aut",
    "marca": "Jeep",
    "cod_fipe": "017037-2",
    "vendido": false
  },
  {
    "veiculo": "Renegade Sport 1.8 4x2 Flex 16V Aut.",
    "marca": "Jeep",
    "cod_fipe": "017034-8",
    "vendido": false
  },
  {
    "veiculo": "Renegade Sport 1.8 4x2 Flex 16V Mec.",
    "marca": "Jeep",
    "cod_fipe": "017033-0",
    "vendido": false
  },
  {
    "veiculo": "Renegade Sport 2.0 4x4 TB Diesel Aut.",
    "marca": "Jeep",
    "cod_fipe": "017036-4",
    "vendido": false
  },
  {
    "veiculo": "Renegade Trailhawk 2.0 4x4 TB Diesel Aut",
    "marca": "Jeep",
    "cod_fipe": "017038-0",
    "vendido": false
  },
  {
    "veiculo": "Renegade1.8 4x2 Flex 16V Mec.",
    "marca": "Jeep",
    "cod_fipe": "017040-2",
    "vendido": false
  },
  {
    "veiculo": "Wrangler 4.0/Sport 4.0",
    "marca": "Jeep",
    "cod_fipe": "017003-8",
    "vendido": false
  },
  {
    "veiculo": "Wrangler SAHARA 3.8 V6 199cv 2p",
    "marca": "Jeep",
    "cod_fipe": "017026-7",
    "vendido": false
  },
  {
    "veiculo": "Wrangler Sport 3.6 V6 284cv 2p",
    "marca": "Jeep",
    "cod_fipe": "017029-1",
    "vendido": false
  },
  {
    "veiculo": "Wrangler Sport 3.8 V6 199cv",
    "marca": "Jeep",
    "cod_fipe": "017020-8",
    "vendido": false
  },
  {
    "veiculo": "Wrangler Unlimited 75 Anos 3.6 V6 284cv",
    "marca": "Jeep",
    "cod_fipe": "017049-6",
    "vendido": false
  },
  {
    "veiculo": "Wrangler Unlimited SAHARA 3.8 V6  4p",
    "marca": "Jeep",
    "cod_fipe": "017027-5",
    "vendido": false
  },
  {
    "veiculo": "Wrangler Unlimited Sport 3.6 V6 284cv 4p",
    "marca": "Jeep",
    "cod_fipe": "017030-5",
    "vendido": false
  },
  {
    "veiculo": "Wrangler Unlimited Sport 3.8 V6 199cv",
    "marca": "Jeep",
    "cod_fipe": "017023-2",
    "vendido": false
  },
  {
    "veiculo": "TOPIC ESCOLAR L 2.2 8V/ 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070004-5",
    "vendido": false
  },
  {
    "veiculo": "TOPIC ESCOLAR SL 2.2 8V/ 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070005-3",
    "vendido": false
  },
  {
    "veiculo": "TOPIC FURGAO L 2.2 8V/ 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070001-0",
    "vendido": false
  },
  {
    "veiculo": "TOPIC VAN L 2.2 8V/ 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070002-9",
    "vendido": false
  },
  {
    "veiculo": "TOPIC VAN Lon./GRAN TOPIC SL",
    "marca": "JINBEI",
    "cod_fipe": "070007-0",
    "vendido": false
  },
  {
    "veiculo": "TOPIC VAN SL 2.2 8V/ 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070003-7",
    "vendido": false
  },
  {
    "veiculo": "TOPIC VAN STD 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070006-1",
    "vendido": false
  },
  {
    "veiculo": "VKN VAN 2.0 16V 4p",
    "marca": "JINBEI",
    "cod_fipe": "070008-8",
    "vendido": false
  },
  {
    "veiculo": "Jipe Montez 4x4 CD Teto de Lona Diesel",
    "marca": "JPX",
    "cod_fipe": "032001-3",
    "vendido": false
  },
  {
    "veiculo": "Jipe Montez 4x4 CD Teto Rígido Diesel",
    "marca": "JPX",
    "cod_fipe": "032002-1",
    "vendido": false
  },
  {
    "veiculo": "Jipe Montez Std 4x4 Teto de Lona Diesel",
    "marca": "JPX",
    "cod_fipe": "032004-8",
    "vendido": false
  },
  {
    "veiculo": "Jipe Montez Std 4x4 Teto Rígido Diesel",
    "marca": "JPX",
    "cod_fipe": "032005-6",
    "vendido": false
  },
  {
    "veiculo": "Picape Montez 1.9 4x4 Diesel",
    "marca": "JPX",
    "cod_fipe": "032003-0",
    "vendido": false
  },
  {
    "veiculo": "Besta EST 2.7 Diesel (10/12lug.)",
    "marca": "Kia Motors",
    "cod_fipe": "018002-5",
    "vendido": false
  },
  {
    "veiculo": "Besta EST Full 2.7 Diesel (10/12lug.)",
    "marca": "Kia Motors",
    "cod_fipe": "018003-3",
    "vendido": false
  },
  {
    "veiculo": "Besta Furgão 2.2 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018004-1",
    "vendido": false
  },
  {
    "veiculo": "Besta Furgão 2.7 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018013-0",
    "vendido": false
  },
  {
    "veiculo": "Besta Furgão Grand 3.0 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018042-4",
    "vendido": false
  },
  {
    "veiculo": "Besta GS 2.7 8V 12L Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018014-9",
    "vendido": false
  },
  {
    "veiculo": "Besta GS Full 2.7 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018015-7",
    "vendido": false
  },
  {
    "veiculo": "Besta GS Grand 3.0 8V 16L Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018035-1",
    "vendido": false
  },
  {
    "veiculo": "Besta ST 2.2 Diesel (12lug.)",
    "marca": "Kia Motors",
    "cod_fipe": "018001-7",
    "vendido": false
  },
  {
    "veiculo": "Bongo K-2400 2.4 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018027-0",
    "vendido": false
  },
  {
    "veiculo": "Bongo K-2500 2.5 4x2 TB Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018065-3",
    "vendido": false
  },
  {
    "veiculo": "Bongo K-2700 2.7 4x2/4x4 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018028-9",
    "vendido": false
  },
  {
    "veiculo": "Bongo K-2700 2.7 4x4 Basculante Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018058-0",
    "vendido": false
  },
  {
    "veiculo": "Bongo K-2700 2.7 4x4 CD Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018048-3",
    "vendido": false
  },
  {
    "veiculo": "Bongo K-3500/K-3600/110 3.6 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018029-7",
    "vendido": false
  },
  {
    "veiculo": "CADENZA EX 3.5 V6 24V 290cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018080-7",
    "vendido": false
  },
  {
    "veiculo": "Carens EX 2.0 16V  Aut",
    "marca": "Kia Motors",
    "cod_fipe": "018067-0",
    "vendido": false
  },
  {
    "veiculo": "Carens LS 1.8 16V 130cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018045-9",
    "vendido": false
  },
  {
    "veiculo": "Carens LS 1.8 16V 130cv Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018044-0",
    "vendido": false
  },
  {
    "veiculo": "Carnival 2.5 V6",
    "marca": "Kia Motors",
    "cod_fipe": "018016-5",
    "vendido": false
  },
  {
    "veiculo": "Carnival EX 3.5 V6 24V 276cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018081-5",
    "vendido": false
  },
  {
    "veiculo": "Carnival EX 3.8 V6 24V 242cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018057-2",
    "vendido": false
  },
  {
    "veiculo": "Carnival GS 2.9 TDI 16V 125cv Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018043-2",
    "vendido": false
  },
  {
    "veiculo": "Cerato 1.6 16 V Flex Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018084-0",
    "vendido": false
  },
  {
    "veiculo": "Cerato 1.6 16V  Flex  Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018085-8",
    "vendido": false
  },
  {
    "veiculo": "Cerato 1.6 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018064-5",
    "vendido": false
  },
  {
    "veiculo": "Cerato 1.6 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018054-8",
    "vendido": false
  },
  {
    "veiculo": "Cerato 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018055-6",
    "vendido": false
  },
  {
    "veiculo": "Cerato KOUP 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018082-3",
    "vendido": false
  },
  {
    "veiculo": "Ceres Pick-Up 2.2 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018022-0",
    "vendido": false
  },
  {
    "veiculo": "Clarus GLX 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018030-0",
    "vendido": false
  },
  {
    "veiculo": "Clarus GLX 2.0 16V Mec",
    "marca": "Kia Motors",
    "cod_fipe": "018010-6",
    "vendido": false
  },
  {
    "veiculo": "Clarus Wagon GLX 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018031-9",
    "vendido": false
  },
  {
    "veiculo": "Clarus Wagon GLX 2.0 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018017-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Carnival EX 3.3 V6 24V 270cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018089-0",
    "vendido": false
  },
  {
    "veiculo": "Magentis EX 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018039-4",
    "vendido": false
  },
  {
    "veiculo": "Magentis LX 2.0 16V Aut",
    "marca": "Kia Motors",
    "cod_fipe": "018062-9",
    "vendido": false
  },
  {
    "veiculo": "MOHAVE EX 3.0 V6 24V 256cv TB Dies. Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018069-6",
    "vendido": false
  },
  {
    "veiculo": "MOHAVE EX 3.8 V6 24V 275cv 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018068-8",
    "vendido": false
  },
  {
    "veiculo": "MOHAVE EX 4.6 V8 32V 340cv 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018072-6",
    "vendido": false
  },
  {
    "veiculo": "Opirus GL 3.5 V6 24V 202cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018052-1",
    "vendido": false
  },
  {
    "veiculo": "Opirus GL 3.8 V6 24V 267cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018063-7",
    "vendido": false
  },
  {
    "veiculo": "OPTIMA 2.0 16V 165cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018086-6",
    "vendido": false
  },
  {
    "veiculo": "OPTIMA 2.4 16V 180cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018083-1",
    "vendido": false
  },
  {
    "veiculo": "Picanto EX 1.1/ 1.0/ 1.0 Flex Aut",
    "marca": "Kia Motors",
    "cod_fipe": "018060-2",
    "vendido": false
  },
  {
    "veiculo": "Picanto EX 1.1/ 1.0/ 1.0 Flex Mec",
    "marca": "Kia Motors",
    "cod_fipe": "018059-9",
    "vendido": false
  },
  {
    "veiculo": "QUORIS EX 3.8 V6 24V 294cv Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018087-4",
    "vendido": false
  },
  {
    "veiculo": "Sephia GTX 1.5 16V",
    "marca": "Kia Motors",
    "cod_fipe": "018007-6",
    "vendido": false
  },
  {
    "veiculo": "Sephia GTX 1.6",
    "marca": "Kia Motors",
    "cod_fipe": "018008-4",
    "vendido": false
  },
  {
    "veiculo": "Sephia LS 1.5 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018019-0",
    "vendido": false
  },
  {
    "veiculo": "Sephia LS 1.5 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018018-1",
    "vendido": false
  },
  {
    "veiculo": "Sephia SLX",
    "marca": "Kia Motors",
    "cod_fipe": "018011-4",
    "vendido": false
  },
  {
    "veiculo": "Shuma LS 1.5 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018032-7",
    "vendido": false
  },
  {
    "veiculo": "Shuma LS 1.5 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018023-8",
    "vendido": false
  },
  {
    "veiculo": "Sorento 2.4 16V 174cv 4x2 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018073-4",
    "vendido": false
  },
  {
    "veiculo": "Sorento 2.4 16V 174cv 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018074-2",
    "vendido": false
  },
  {
    "veiculo": "Sorento 3.3 V6 24V 270cv 4x2 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018088-2",
    "vendido": false
  },
  {
    "veiculo": "Sorento 3.5 V6 24V 278cv 4x2 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018075-0",
    "vendido": false
  },
  {
    "veiculo": "Sorento 3.5 V6 24V 278cv 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018076-9",
    "vendido": false
  },
  {
    "veiculo": "Sorento EX 2.5 140/170cv 4x4 Aut.Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018047-5",
    "vendido": false
  },
  {
    "veiculo": "Sorento EX 2.5 16V 4x4 Mec. Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018056-4",
    "vendido": false
  },
  {
    "veiculo": "Sorento EX 3.5 V6 24V 197cv 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018046-7",
    "vendido": false
  },
  {
    "veiculo": "Sorento EX 3.8 V6 24V 267cv 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018061-0",
    "vendido": false
  },
  {
    "veiculo": "Sorento LX 2.5 16V 140cv 4x4 Aut. Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018050-5",
    "vendido": false
  },
  {
    "veiculo": "Sorento LX 2.5 16V 140cv 4x4 Mec. Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018051-3",
    "vendido": false
  },
  {
    "veiculo": "SOUL 1.6/ 1.6 16V FLEX Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018070-0",
    "vendido": false
  },
  {
    "veiculo": "SOUL 1.6/ 1.6 16V FLEX Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018071-8",
    "vendido": false
  },
  {
    "veiculo": "Sportage 2.0 16V Aut",
    "marca": "Kia Motors",
    "cod_fipe": "018012-2",
    "vendido": false
  },
  {
    "veiculo": "Sportage 2.0 8V TB-IC Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018037-8",
    "vendido": false
  },
  {
    "veiculo": "Sportage DLX 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018033-5",
    "vendido": false
  },
  {
    "veiculo": "Sportage DLX 2.0 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018024-6",
    "vendido": false
  },
  {
    "veiculo": "Sportage DLX 2.2 Diesel Mec",
    "marca": "Kia Motors",
    "cod_fipe": "018009-2",
    "vendido": false
  },
  {
    "veiculo": "Sportage EX 2.0 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018066-1",
    "vendido": false
  },
  {
    "veiculo": "Sportage EX 2.0 16V/ 2.0 16V Flex Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018079-3",
    "vendido": false
  },
  {
    "veiculo": "Sportage EX 2.7 V6 4x4 Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018053-0",
    "vendido": false
  },
  {
    "veiculo": "Sportage Grand 2.0 16V Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018034-3",
    "vendido": false
  },
  {
    "veiculo": "Sportage Grand 2.0 16V Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018020-3",
    "vendido": false
  },
  {
    "veiculo": "Sportage Grand 2.0 8V TB-IC Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018025-4",
    "vendido": false
  },
  {
    "veiculo": "Sportage GTE 2.2 4x4 Diesel",
    "marca": "Kia Motors",
    "cod_fipe": "018026-2",
    "vendido": false
  },
  {
    "veiculo": "Sportage LX 2.0 16V 142cv 5p",
    "marca": "Kia Motors",
    "cod_fipe": "018049-1",
    "vendido": false
  },
  {
    "veiculo": "Sportage LX 2.0 16V/ 2.0 16V Flex  Aut.",
    "marca": "Kia Motors",
    "cod_fipe": "018077-7",
    "vendido": false
  },
  {
    "veiculo": "Sportage LX 2.0 16V/ 2.0 16V Flex Mec.",
    "marca": "Kia Motors",
    "cod_fipe": "018078-5",
    "vendido": false
  },
  {
    "veiculo": "Sportage Targa 2.0 16V",
    "marca": "Kia Motors",
    "cod_fipe": "018021-1",
    "vendido": false
  },
  {
    "veiculo": "Laika 1.5",
    "marca": "Lada",
    "cod_fipe": "019005-5",
    "vendido": false
  },
  {
    "veiculo": "Laika 1.6",
    "marca": "Lada",
    "cod_fipe": "019001-2",
    "vendido": false
  },
  {
    "veiculo": "Laika SW 5p",
    "marca": "Lada",
    "cod_fipe": "019002-0",
    "vendido": false
  },
  {
    "veiculo": "Niva 1.6 RC/ Pantanal 4x4",
    "marca": "Lada",
    "cod_fipe": "019003-9",
    "vendido": false
  },
  {
    "veiculo": "Niva 1.6/ CD 4x4",
    "marca": "Lada",
    "cod_fipe": "019007-1",
    "vendido": false
  },
  {
    "veiculo": "Niva 1.7i 4x4",
    "marca": "Lada",
    "cod_fipe": "019006-3",
    "vendido": false
  },
  {
    "veiculo": "Samara 1.3/ 1.5",
    "marca": "Lada",
    "cod_fipe": "019004-7",
    "vendido": false
  },
  {
    "veiculo": "AVENTADOR LP 700-4",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078008-1",
    "vendido": false
  },
  {
    "veiculo": "AVENTADOR LP 700-4 ROADSTER",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078009-0",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Coupe LP550-2 Bicolore",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078007-3",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Coupe LP560-4",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078001-4",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Coupe LP570-4 Sup.Trof.Stradale",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078006-5",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Coupe Superleggera LP570-4",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078004-9",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Coupe Valentino Balboni LP550-2",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078003-0",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Spider LP560-4",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078002-2",
    "vendido": false
  },
  {
    "veiculo": "Gallardo Spyder Performante LP570-4",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078005-7",
    "vendido": false
  },
  {
    "veiculo": "HURACAN Coupe LP 610-4",
    "marca": "LAMBORGHINI",
    "cod_fipe": "078010-3",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 2.4 122cv T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033048-5",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 2.5 HCPU TDi CS Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033013-2",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 2.5 TDi County Pers. Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033018-3",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 2.5 TDi Hard Top Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033014-0",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 2.5 TDi High Capacity Dies.",
    "marca": "Land Rover",
    "cod_fipe": "033015-9",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 2.5 TDi Personel Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033016-7",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 LE FIRE & ICE 2.4 T. Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033052-3",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 RAW 2.4 122cv T. Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033067-1",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 SVX Lim.Edit. 2.4 T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033050-7",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 TD5 2.5 4x4 Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033036-1",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 TDI County SW Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033001-9",
    "vendido": false
  },
  {
    "veiculo": "Defender 110 TDI SW Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033004-3",
    "vendido": false
  },
  {
    "veiculo": "Defender 130 Chassis CD Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033010-8",
    "vendido": false
  },
  {
    "veiculo": "Defender 130 High CAP Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033011-6",
    "vendido": false
  },
  {
    "veiculo": "Defender 130 TDI CD Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033012-4",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 2.4 122cv T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033047-7",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 2.5 TDi CS Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033017-5",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 LE FIRE & ICE 2.4 T. Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033051-5",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 RAW 2.4 122cv T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033066-3",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 Soft Top Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033003-5",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 SVX Lim.Edit. 2.4 T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033049-3",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 TDI CSW Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033006-0",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 TDI Hard Top Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033002-7",
    "vendido": false
  },
  {
    "veiculo": "Defender 90 TDI SW Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033005-1",
    "vendido": false
  },
  {
    "veiculo": "Discovery ES 3.9 V8",
    "marca": "Land Rover",
    "cod_fipe": "033008-6",
    "vendido": false
  },
  {
    "veiculo": "Discovery ES 4.0 V8 Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033021-3",
    "vendido": false
  },
  {
    "veiculo": "Discovery ES TD5 2.5 4x4 4p Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033023-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery ES TD5 2.5 4x4 4p Diesel Mec.",
    "marca": "Land Rover",
    "cod_fipe": "033022-1",
    "vendido": false
  },
  {
    "veiculo": "Discovery RAW 3.0 4x4 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033106-6",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport BLACK 2.2 4x4 Dies. Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033121-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport HSE 2.0 4x4 Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033104-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport HSE 2.0 4x4 Diesel Aut",
    "marca": "Land Rover",
    "cod_fipe": "033127-9",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport HSE 2.2 4x4 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033118-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport HSE L. 2.2 4x4 Die. Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033119-8",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport HSE Luxury 2.0 4x4 Aut. ",
    "marca": "Land Rover",
    "cod_fipe": "033105-8",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport SE 2.0 4x4 Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033103-1",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport SE 2.0 4x4 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033126-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery Sport SE 2.2 4x4 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033117-1",
    "vendido": false
  },
  {
    "veiculo": "Discovery TDI 2.5 Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033007-8",
    "vendido": false
  },
  {
    "veiculo": "Discovery3 HSE 2.7 4x4 TDI Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033028-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery3 HSE 4.4 V8 4x4 299cv Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033027-2",
    "vendido": false
  },
  {
    "veiculo": "Discovery3 S 2.7 4x4 TDI Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033029-9",
    "vendido": false
  },
  {
    "veiculo": "Discovery3 S 4.0 V6 4x4 215cv Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033037-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery3 SE 2.7 4x4 TDI Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033045-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery3 SE 4.0 V6 4x4 215cv Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033030-2",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 B&W 3.0 4x4 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033071-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 BLACK 3.0 4x4 SDV6 Dies. Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033111-2",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 GRAPHITE 3.0 4x4 SDV6 Die.Aut",
    "marca": "Land Rover",
    "cod_fipe": "033124-4",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 HSE 2.7 4x4 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033057-4",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 HSE 3.0 4x4 TDV6/SDV6 Die.Aut",
    "marca": "Land Rover",
    "cod_fipe": "033059-0",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 HSE 5.0 4x4 Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033060-4",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 S 2.7 4x4 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033056-6",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 S 3.0 4X4 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033080-9",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 SE 2.7 4x4 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033053-1",
    "vendido": false
  },
  {
    "veiculo": "Discovery4 SE 3.0 4x4 TDV6/SDV6 Die.Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033058-2",
    "vendido": false
  },
  {
    "veiculo": "Freelander 1.8 16v",
    "marca": "Land Rover",
    "cod_fipe": "033020-5",
    "vendido": false
  },
  {
    "veiculo": "Freelander HSE 2.5 V6 24V 177cv 5p",
    "marca": "Land Rover",
    "cod_fipe": "033025-6",
    "vendido": false
  },
  {
    "veiculo": "Freelander HSE3 2.5 V6 24V 177cv 3p",
    "marca": "Land Rover",
    "cod_fipe": "033034-5",
    "vendido": false
  },
  {
    "veiculo": "Freelander S/ SE 2.5 V6 24V 177cv 5p",
    "marca": "Land Rover",
    "cod_fipe": "033024-8",
    "vendido": false
  },
  {
    "veiculo": "Freelander SE3 2.5 V6 24V 177cv 3p",
    "marca": "Land Rover",
    "cod_fipe": "033026-4",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 Dynamique 2.2 SD4 T. Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033081-7",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 HSE 2.2 SD4 190cv T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033070-1",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 I6 HSE 3.2 232cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033042-6",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 I6 LE Sport 3.2 232cv Aut. 5",
    "marca": "Land Rover",
    "cod_fipe": "033065-5",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 I6 S 3.2 232cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033041-8",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 I6 S Sport 3.2 232cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033063-9",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 I6 SE 3.2 232cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033040-0",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 S 2.2 SD4 190cv T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033068-0",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 SE 2.2 SD4 190cv T.Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033069-8",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 SI4 Dyn. 2.0 240cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033089-2",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 SI4 HSE 2.0 240cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033090-6",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 SI4 S 2.0 240cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033087-6",
    "vendido": false
  },
  {
    "veiculo": "Freelander2 SI4 SE 2.0 240cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033088-4",
    "vendido": false
  },
  {
    "veiculo": "New Range/Range Rover Vogue 3.9 V8",
    "marca": "Land Rover",
    "cod_fipe": "033019-1",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVO DYNAMIQUE BLACK 2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033109-0",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVO STYLE 2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033110-4",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVOQUE LONDON 2.0 240cv Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033107-4",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVOQUE SD4 HSE 2.2 Dies. Aut.5p",
    "marca": "Land Rover",
    "cod_fipe": "033122-8",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVOQUE SD4 SE 2.2 Dies. Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033112-0",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVOQUE SI4 HSE Dynamic 2.0 Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033115-5",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVOQUE SI4 SE 2.0 Aut. 5p ",
    "marca": "Land Rover",
    "cod_fipe": "033113-9",
    "vendido": false
  },
  {
    "veiculo": "Range R. EVOQUE SI4 SE Dynamic 2.0 Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033116-3",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport Autob. 3.0 SDV6 Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033086-8",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport Autob. Dyn.SCHA. 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033101-5",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport Autob. SUPERCHAR. 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033085-0",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport HSE Dynamic SUPERC.5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033093-0",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport HSE SUPERCHARGED 3.0 V6 ",
    "marca": "Land Rover",
    "cod_fipe": "033094-9",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport HST SUPERCHARGED 3.0 V6",
    "marca": "Land Rover",
    "cod_fipe": "033120-1",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport L. Edit. SCHARGED 3.0 V6",
    "marca": "Land Rover",
    "cod_fipe": "033125-2",
    "vendido": false
  },
  {
    "veiculo": "Range R. Sport TECH S 3.0 SDV6 Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033108-2",
    "vendido": false
  },
  {
    "veiculo": "Range R. SVAutobiography SUPERC. 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033123-6",
    "vendido": false
  },
  {
    "veiculo": "Range R. Vogue 4.4 TDV8/SDV8 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033064-7",
    "vendido": false
  },
  {
    "veiculo": "Range R. Vogue Autob. SUPERCHAR. 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033084-1",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Dynamic 2.0 Aut 3p",
    "marca": "Land Rover",
    "cod_fipe": "033076-0",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Dynamic 2.0 Aut 5p",
    "marca": "Land Rover",
    "cod_fipe": "033077-9",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Dynamic Tech 2.0 Aut 3p",
    "marca": "Land Rover",
    "cod_fipe": "033078-7",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Dynamic Tech 2.0 Aut 5p",
    "marca": "Land Rover",
    "cod_fipe": "033079-5",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE ONE SICILIAN 2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033095-7",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Prestige 2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033074-4",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Prestige 2.2 5p Dies.",
    "marca": "Land Rover",
    "cod_fipe": "033099-0",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Prestige Tech 2.0 Aut 5p",
    "marca": "Land Rover",
    "cod_fipe": "033075-2",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE PrestigeTech 2.2 5p Dies.",
    "marca": "Land Rover",
    "cod_fipe": "033098-1",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Pure  2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033073-6",
    "vendido": false
  },
  {
    "veiculo": "Range R.EVOQUE Pure 2.0 Aut. 3p",
    "marca": "Land Rover",
    "cod_fipe": "033072-8",
    "vendido": false
  },
  {
    "veiculo": "Range R.Sport HSE Dynamic 4.4 SDV8 Dies.",
    "marca": "Land Rover",
    "cod_fipe": "033114-7",
    "vendido": false
  },
  {
    "veiculo": "Range R.Sport SE 3.0 4x4 TDV6/SDV6 Dies.",
    "marca": "Land Rover",
    "cod_fipe": "033055-8",
    "vendido": false
  },
  {
    "veiculo": "Range Rover EVOQUE Pure Tech 2.0 Aut. 3p",
    "marca": "Land Rover",
    "cod_fipe": "033092-2",
    "vendido": false
  },
  {
    "veiculo": "Range Rover EVOQUE Pure Tech 2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033082-5",
    "vendido": false
  },
  {
    "veiculo": "Range Rover EVOQUE SE 2.0 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033128-7",
    "vendido": false
  },
  {
    "veiculo": "Range Rover EVOQUE Zanzibar 2.0 Aut. 5p",
    "marca": "Land Rover",
    "cod_fipe": "033100-7",
    "vendido": false
  },
  {
    "veiculo": "Range Rover HSE 4.4/ 4.6",
    "marca": "Land Rover",
    "cod_fipe": "033009-4",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport 3.6 TDV8 272cv Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033044-2",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport HSE 2.7 190cv TB Dies.",
    "marca": "Land Rover",
    "cod_fipe": "033035-3",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport HSE 3.0 SDV6  Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033062-0",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport HSE 4.4 V8 32V 295cv",
    "marca": "Land Rover",
    "cod_fipe": "033033-7",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport HSE SUPERCHAR. 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033054-0",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport SE 2.7 190cv TB Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033038-8",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport SE 3.6 TDV8 272cv Dies",
    "marca": "Land Rover",
    "cod_fipe": "033046-9",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport SE 4.4 V8 32V 299cv",
    "marca": "Land Rover",
    "cod_fipe": "033039-6",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport SUPERCHAGED 4.2 V8",
    "marca": "Land Rover",
    "cod_fipe": "033032-9",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Sport SVR SUPERCHAGED 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033102-3",
    "vendido": false
  },
  {
    "veiculo": "Range Rover SUPERCHAGED 4.2 V8 396cv",
    "marca": "Land Rover",
    "cod_fipe": "033031-0",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Vogue 3.0 TDV6 Diesel Aut.",
    "marca": "Land Rover",
    "cod_fipe": "033096-5",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Vogue 3.6 TDV8 272cv Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033043-4",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Vogue 4.4 Auto. SDV8 Diesel.",
    "marca": "Land Rover",
    "cod_fipe": "033083-3",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Vogue HSE 3.0 TDV6 Diesel",
    "marca": "Land Rover",
    "cod_fipe": "033097-3",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Vogue SE 4.4 SDV8 Dies. Aut",
    "marca": "Land Rover",
    "cod_fipe": "033091-4",
    "vendido": false
  },
  {
    "veiculo": "Range Rover Vogue SE SUPERCHAR. 5.0 V8",
    "marca": "Land Rover",
    "cod_fipe": "033061-2",
    "vendido": false
  },
  {
    "veiculo": "CT200h  1.8 16V HIBRID Aut.",
    "marca": "Lexus",
    "cod_fipe": "057034-6",
    "vendido": false
  },
  {
    "veiculo": "CT200h F-Sport 1.8 16V HIBRID Aut.",
    "marca": "Lexus",
    "cod_fipe": "057035-4",
    "vendido": false
  },
  {
    "veiculo": "ES-300 3.0",
    "marca": "Lexus",
    "cod_fipe": "057020-6",
    "vendido": false
  },
  {
    "veiculo": "ES-330 3.3 24V 228cv",
    "marca": "Lexus",
    "cod_fipe": "057027-3",
    "vendido": false
  },
  {
    "veiculo": "ES-350 3.5 24V 284cv",
    "marca": "Lexus",
    "cod_fipe": "057028-1",
    "vendido": false
  },
  {
    "veiculo": "GS 300 3.0 V6 24V",
    "marca": "Lexus",
    "cod_fipe": "057001-0",
    "vendido": false
  },
  {
    "veiculo": "IS-250 2.5 24V 208cv Aut.",
    "marca": "Lexus",
    "cod_fipe": "057036-2",
    "vendido": false
  },
  {
    "veiculo": "IS-250 F Sport 2.5 24V 208cv Aut.",
    "marca": "Lexus",
    "cod_fipe": "057037-0",
    "vendido": false
  },
  {
    "veiculo": "IS-300 3.0 24v 231cv Aut.",
    "marca": "Lexus",
    "cod_fipe": "057030-3",
    "vendido": false
  },
  {
    "veiculo": "LS 400 4.0",
    "marca": "Lexus",
    "cod_fipe": "057025-7",
    "vendido": false
  },
  {
    "veiculo": "LS 430 4.3 32V 281cv",
    "marca": "Lexus",
    "cod_fipe": "057026-5",
    "vendido": false
  },
  {
    "veiculo": "LS 460 4.6 32V 347cv",
    "marca": "Lexus",
    "cod_fipe": "057029-0",
    "vendido": false
  },
  {
    "veiculo": "LS-460L 4.6 V8 32v 347cv Aut.",
    "marca": "Lexus",
    "cod_fipe": "057031-1",
    "vendido": false
  },
  {
    "veiculo": "NX-200t F-Sport 2.0 16v 238cv Aut.",
    "marca": "Lexus",
    "cod_fipe": "057039-7",
    "vendido": false
  },
  {
    "veiculo": "NX-200t Luxury 2.0 16V 238cv Aut.",
    "marca": "Lexus",
    "cod_fipe": "057038-9",
    "vendido": false
  },
  {
    "veiculo": "RX 300 3.0 V6 24V",
    "marca": "Lexus",
    "cod_fipe": "057002-8",
    "vendido": false
  },
  {
    "veiculo": "RX-350 3.5 24v  Aut.",
    "marca": "Lexus",
    "cod_fipe": "057032-0",
    "vendido": false
  },
  {
    "veiculo": "RX-350 F-Sport 3.5 24V Aut.",
    "marca": "Lexus",
    "cod_fipe": "057033-8",
    "vendido": false
  },
  {
    "veiculo": "SC 400 4.0 V8",
    "marca": "Lexus",
    "cod_fipe": "057003-6",
    "vendido": false
  },
  {
    "veiculo": "320 ELITE 1.3 16V 88cv 5p",
    "marca": "LIFAN",
    "cod_fipe": "077001-9",
    "vendido": false
  },
  {
    "veiculo": "530 1.5 16V 103cv 4p",
    "marca": "LIFAN",
    "cod_fipe": "077005-1",
    "vendido": false
  },
  {
    "veiculo": "530 TALENT 1.5 16V 103cv 4p",
    "marca": "LIFAN",
    "cod_fipe": "077006-0",
    "vendido": false
  },
  {
    "veiculo": "620 TALENT 1.6 16V 106cv 4p",
    "marca": "LIFAN",
    "cod_fipe": "077002-7",
    "vendido": false
  },
  {
    "veiculo": "FOISON 1.3 16V 85cv 2p",
    "marca": "LIFAN",
    "cod_fipe": "077004-3",
    "vendido": false
  },
  {
    "veiculo": "X60 1.8 16V 128cv 5p Mec.",
    "marca": "LIFAN",
    "cod_fipe": "077003-5",
    "vendido": false
  },
  {
    "veiculo": "H1 1.8 20V Turbo 180cv 2p",
    "marca": "LOBINI",
    "cod_fipe": "063001-2",
    "vendido": false
  },
  {
    "veiculo": "Elan S-2 1.6 16V",
    "marca": "Lotus",
    "cod_fipe": "047001-5",
    "vendido": false
  },
  {
    "veiculo": "Esprit S-4 2.2 16V",
    "marca": "Lotus",
    "cod_fipe": "047002-3",
    "vendido": false
  },
  {
    "veiculo": "PIK-UP CD 2.2 4X2 (diesel) Mec.",
    "marca": "Mahindra",
    "cod_fipe": "065007-2",
    "vendido": false
  },
  {
    "veiculo": "PIK-UP CD 2.2 4X4 (diesel) Mec.",
    "marca": "Mahindra",
    "cod_fipe": "065005-6",
    "vendido": false
  },
  {
    "veiculo": "PIK-UP CS 2.2 4X2 (diesel) Mec.",
    "marca": "Mahindra",
    "cod_fipe": "065006-4",
    "vendido": false
  },
  {
    "veiculo": "PIK-UP CS 2.2 4X4 (diesel) Mec.",
    "marca": "Mahindra",
    "cod_fipe": "065004-8",
    "vendido": false
  },
  {
    "veiculo": "SCORPIO 2.6 CD TB Diesel CRDe 4x4",
    "marca": "Mahindra",
    "cod_fipe": "065003-0",
    "vendido": false
  },
  {
    "veiculo": "SCORPIO 2.6 CS/ Chassi TB Dies. CRDe 4x4",
    "marca": "Mahindra",
    "cod_fipe": "065002-1",
    "vendido": false
  },
  {
    "veiculo": "SCORPIO GLX SUV 2.6 TB Diesel CRDe 4WD",
    "marca": "Mahindra",
    "cod_fipe": "065001-3",
    "vendido": false
  },
  {
    "veiculo": "SUV 2.2 4x4 (diesel) Mec.",
    "marca": "Mahindra",
    "cod_fipe": "065008-0",
    "vendido": false
  },
  {
    "veiculo": "222 SE/SR 2.0 V6",
    "marca": "Maserati",
    "cod_fipe": "034003-0",
    "vendido": false
  },
  {
    "veiculo": "228",
    "marca": "Maserati",
    "cod_fipe": "034004-9",
    "vendido": false
  },
  {
    "veiculo": "3200 GT Cupê",
    "marca": "Maserati",
    "cod_fipe": "034001-4",
    "vendido": false
  },
  {
    "veiculo": "3200 GT Cupê Aut.",
    "marca": "Maserati",
    "cod_fipe": "034011-1",
    "vendido": false
  },
  {
    "veiculo": "430 2.0 V6",
    "marca": "Maserati",
    "cod_fipe": "034005-7",
    "vendido": false
  },
  {
    "veiculo": "430 II 2.0 V6",
    "marca": "Maserati",
    "cod_fipe": "034006-5",
    "vendido": false
  },
  {
    "veiculo": "Coupé CC 4.2 V8 32V 390cv",
    "marca": "Maserati",
    "cod_fipe": "034012-0",
    "vendido": false
  },
  {
    "veiculo": "Ghibli 2.0 V6",
    "marca": "Maserati",
    "cod_fipe": "034007-3",
    "vendido": false
  },
  {
    "veiculo": "Ghibli 3.0 V6 330cv Aut.",
    "marca": "Maserati",
    "cod_fipe": "034027-8",
    "vendido": false
  },
  {
    "veiculo": "Ghibli S Q4 3.0 V6 410cv Aut.",
    "marca": "Maserati",
    "cod_fipe": "034026-0",
    "vendido": false
  },
  {
    "veiculo": "Gran Turismo Sport 4.7 V8 32v 460cv",
    "marca": "Maserati",
    "cod_fipe": "034028-6",
    "vendido": false
  },
  {
    "veiculo": "GranCabrio 4.7 V8 32V 440cv",
    "marca": "Maserati",
    "cod_fipe": "034023-5",
    "vendido": false
  },
  {
    "veiculo": "GranSport 4.2 V8 32V 400cv",
    "marca": "Maserati",
    "cod_fipe": "034016-2",
    "vendido": false
  },
  {
    "veiculo": "GranSport Spyder 4.2 V8 32V 400cv",
    "marca": "Maserati",
    "cod_fipe": "034017-0",
    "vendido": false
  },
  {
    "veiculo": "GranTurismo 4.2 V8 32V 405cv",
    "marca": "Maserati",
    "cod_fipe": "034018-9",
    "vendido": false
  },
  {
    "veiculo": "GranTurismo MC Stradale 4.7 V8 32V 450cv",
    "marca": "Maserati",
    "cod_fipe": "034024-3",
    "vendido": false
  },
  {
    "veiculo": "GranTurismo S 4.7 V8 32V/ MC Line",
    "marca": "Maserati",
    "cod_fipe": "034021-9",
    "vendido": false
  },
  {
    "veiculo": "Levante 3.0 V6 350cv Aut.",
    "marca": "Maserati",
    "cod_fipe": "034029-4",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte Automatica 4.2 32V 400cv",
    "marca": "Maserati",
    "cod_fipe": "034019-7",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte Evolucione Aut.",
    "marca": "Maserati",
    "cod_fipe": "034002-2",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte Evolucione Mec.",
    "marca": "Maserati",
    "cod_fipe": "034010-3",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte Executive 4.2 32V 400cv",
    "marca": "Maserati",
    "cod_fipe": "034014-6",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte GTS 3.8 V8 32V 530cv",
    "marca": "Maserati",
    "cod_fipe": "034025-1",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte S 4.7 V8 32V 430cv",
    "marca": "Maserati",
    "cod_fipe": "034020-0",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte Sport 4.2 32V 400cv/430cv",
    "marca": "Maserati",
    "cod_fipe": "034015-4",
    "vendido": false
  },
  {
    "veiculo": "Quattroporte Sport GT-S 4.7 V8 32V 440cv",
    "marca": "Maserati",
    "cod_fipe": "034022-7",
    "vendido": false
  },
  {
    "veiculo": "Shamal 3.2 V8",
    "marca": "Maserati",
    "cod_fipe": "034008-1",
    "vendido": false
  },
  {
    "veiculo": "Spider IE 2.0 V6",
    "marca": "Maserati",
    "cod_fipe": "034009-0",
    "vendido": false
  },
  {
    "veiculo": "Spyder CC 4.2 V8 32V 390cv",
    "marca": "Maserati",
    "cod_fipe": "034013-8",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up 4x2 Curto/Longo 2.5 TDI Diesel",
    "marca": "Matra",
    "cod_fipe": "058001-5",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up 4x4 Curto/Longo 2.5 TDI  Diesel",
    "marca": "Matra",
    "cod_fipe": "058002-3",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up CD 4x2 Curto/Longo 2.5 TDI Dies.",
    "marca": "Matra",
    "cod_fipe": "058003-1",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up CD 4x4 Curto/Longo 2.5 TDI Dies.",
    "marca": "Matra",
    "cod_fipe": "058004-0",
    "vendido": false
  },
  {
    "veiculo": "323 1.6 16V",
    "marca": "Mazda",
    "cod_fipe": "020018-2",
    "vendido": false
  },
  {
    "veiculo": "626 GLX",
    "marca": "Mazda",
    "cod_fipe": "020001-8",
    "vendido": false
  },
  {
    "veiculo": "626 GT",
    "marca": "Mazda",
    "cod_fipe": "020002-6",
    "vendido": false
  },
  {
    "veiculo": "626 Sedan Aut.",
    "marca": "Mazda",
    "cod_fipe": "020022-0",
    "vendido": false
  },
  {
    "veiculo": "626 Sedan High",
    "marca": "Mazda",
    "cod_fipe": "020014-0",
    "vendido": false
  },
  {
    "veiculo": "626 Sedan Mec.",
    "marca": "Mazda",
    "cod_fipe": "020013-1",
    "vendido": false
  },
  {
    "veiculo": "626 Sedan Top",
    "marca": "Mazda",
    "cod_fipe": "020015-8",
    "vendido": false
  },
  {
    "veiculo": "626 SW",
    "marca": "Mazda",
    "cod_fipe": "020016-6",
    "vendido": false
  },
  {
    "veiculo": "626 SW High",
    "marca": "Mazda",
    "cod_fipe": "020017-4",
    "vendido": false
  },
  {
    "veiculo": "929 V6 Aut",
    "marca": "Mazda",
    "cod_fipe": "020003-4",
    "vendido": false
  },
  {
    "veiculo": "B2200 Pick-Up 2.2 Diesel",
    "marca": "Mazda",
    "cod_fipe": "020007-7",
    "vendido": false
  },
  {
    "veiculo": "B2200 Pick-Up CD 2.2 Diesel",
    "marca": "Mazda",
    "cod_fipe": "020008-5",
    "vendido": false
  },
  {
    "veiculo": "B-2500 Pick-Up 2.5 Diesel",
    "marca": "Mazda",
    "cod_fipe": "020010-7",
    "vendido": false
  },
  {
    "veiculo": "B-2500 Pick-Up 4x4 2.5 Diesel",
    "marca": "Mazda",
    "cod_fipe": "020025-5",
    "vendido": false
  },
  {
    "veiculo": "B-2500 Pick-Up CD 4x4 2.5 Diesel",
    "marca": "Mazda",
    "cod_fipe": "020011-5",
    "vendido": false
  },
  {
    "veiculo": "Millenia 3.0 V6 24V",
    "marca": "Mazda",
    "cod_fipe": "020019-0",
    "vendido": false
  },
  {
    "veiculo": "MPV Minivan Aut",
    "marca": "Mazda",
    "cod_fipe": "020004-2",
    "vendido": false
  },
  {
    "veiculo": "MX-3 1.6 16V",
    "marca": "Mazda",
    "cod_fipe": "020005-0",
    "vendido": false
  },
  {
    "veiculo": "MX-3 GS 1.8 V6 24V",
    "marca": "Mazda",
    "cod_fipe": "020020-4",
    "vendido": false
  },
  {
    "veiculo": "MX-5 Mec",
    "marca": "Mazda",
    "cod_fipe": "020006-9",
    "vendido": false
  },
  {
    "veiculo": "Navajo LX 3.0 V6",
    "marca": "Mazda",
    "cod_fipe": "020021-2",
    "vendido": false
  },
  {
    "veiculo": "Protegé Aut.",
    "marca": "Mazda",
    "cod_fipe": "020023-9",
    "vendido": false
  },
  {
    "veiculo": "Protegé High",
    "marca": "Mazda",
    "cod_fipe": "020024-7",
    "vendido": false
  },
  {
    "veiculo": "Protegé Mec.",
    "marca": "Mazda",
    "cod_fipe": "020009-3",
    "vendido": false
  },
  {
    "veiculo": "RX 7 2.6 Turbo",
    "marca": "Mazda",
    "cod_fipe": "020012-3",
    "vendido": false
  },
  {
    "veiculo": "180-D Pick-Up/Furgão 2.4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021060-9",
    "vendido": false
  },
  {
    "veiculo": "180-D Van 2.4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021061-7",
    "vendido": false
  },
  {
    "veiculo": "190-E 2.3",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021062-5",
    "vendido": false
  },
  {
    "veiculo": "230-E 2.3",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021063-3",
    "vendido": false
  },
  {
    "veiculo": "260-E 2.6",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021067-6",
    "vendido": false
  },
  {
    "veiculo": "300-D 3.0 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021068-4",
    "vendido": false
  },
  {
    "veiculo": "300-E 3.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021069-2",
    "vendido": false
  },
  {
    "veiculo": "300-SE 3.0/3.2",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021045-5",
    "vendido": false
  },
  {
    "veiculo": "300-SL 3.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021070-6",
    "vendido": false
  },
  {
    "veiculo": "300-TE Wagon 3.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021071-4",
    "vendido": false
  },
  {
    "veiculo": "500-E 5.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021072-2",
    "vendido": false
  },
  {
    "veiculo": "500-SEC/ SL",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021047-1",
    "vendido": false
  },
  {
    "veiculo": "500-SEL 5.0/ 5.6",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021074-9",
    "vendido": false
  },
  {
    "veiculo": "560-SEL 5.6",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021075-7",
    "vendido": false
  },
  {
    "veiculo": "C-180 1.6 Turbo 16V/Flex 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021331-4",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Avant. 1.6/1.6 FlexTB 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021308-0",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Classic 1.8 16V 156cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021239-3",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Coupe 1.8 16V 156cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021246-6",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Coupe Sport 1.6 TB 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021281-4",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Estate Avant. 1.6 TB 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021320-9",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Exc. 1.6/1.6 Flex TB 16V  Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021307-1",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Sport 1.6 TB 16V 156cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021280-6",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Touring 1.8 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021255-5",
    "vendido": false
  },
  {
    "veiculo": "C-180 CGI Touring Sport 1.6 TB Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021282-2",
    "vendido": false
  },
  {
    "veiculo": "C-180 Classic/Classic Plus/Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021001-3",
    "vendido": false
  },
  {
    "veiculo": "C-180 Kompressor Classic 1.6 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021230-0",
    "vendido": false
  },
  {
    "veiculo": "C-180 Kompressor Classic 1.8 16V 143cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021151-6",
    "vendido": false
  },
  {
    "veiculo": "C-200 Avantgarde 2.0 TB 16V 184cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021310-1",
    "vendido": false
  },
  {
    "veiculo": "C-200 CGI Avantgarde 1.8 16V 184cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021233-4",
    "vendido": false
  },
  {
    "veiculo": "C-200 CGI Sport 1.8 TB 16V 184cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021234-2",
    "vendido": false
  },
  {
    "veiculo": "C-200 CGI Touring Avantgarde 1.8 16V Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021237-7",
    "vendido": false
  },
  {
    "veiculo": "C-200 Classic/Sport",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021076-5",
    "vendido": false
  },
  {
    "veiculo": "C-200 Kompressor 2.0 V6 16v 4p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021123-0",
    "vendido": false
  },
  {
    "veiculo": "C-200 Kompressor Avant.1.8 16V Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021193-1",
    "vendido": false
  },
  {
    "veiculo": "C-200 Kompressor Classic 1.8 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021202-4",
    "vendido": false
  },
  {
    "veiculo": "C-200 Sportcoupé Komp. 2.0 16V 163cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021143-5",
    "vendido": false
  },
  {
    "veiculo": "C-200 Touring Komp. 2.0 16V 163cv 5p Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021142-7",
    "vendido": false
  },
  {
    "veiculo": "C-200 Touring Komp. Avant. 1.8 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021210-5",
    "vendido": false
  },
  {
    "veiculo": "C-220 Classic/Elegance/Sport",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021002-1",
    "vendido": false
  },
  {
    "veiculo": "C-230 Avantgarde 2.5 V6 24V 204cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021181-8",
    "vendido": false
  },
  {
    "veiculo": "C-230 Komp. Sportcoupé 2.3 16V 197cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021132-0",
    "vendido": false
  },
  {
    "veiculo": "C-230 Kompressor Avantgarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021003-0",
    "vendido": false
  },
  {
    "veiculo": "C-230 Sport/ Eleg./Touring Eleg.Plus 2.3",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021077-3",
    "vendido": false
  },
  {
    "veiculo": "C-230 Touring Avant. 2.5 24V 204cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021192-3",
    "vendido": false
  },
  {
    "veiculo": "C-230 Touring Kompressor",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021022-6",
    "vendido": false
  },
  {
    "veiculo": "C-240 AvantGarde 2.4/ 2.6 4p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021119-2",
    "vendido": false
  },
  {
    "veiculo": "C-240 Classic",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021050-1",
    "vendido": false
  },
  {
    "veiculo": "C-240 Elegance 2.4",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021040-4",
    "vendido": false
  },
  {
    "veiculo": "C-240 Elegance 2.4 V6 24v 4p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021120-6",
    "vendido": false
  },
  {
    "veiculo": "C-250 CGI Sport 1.8 16V Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021242-3",
    "vendido": false
  },
  {
    "veiculo": "C-250 CGI Sport Coupe 1.8 16V TB Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021286-5",
    "vendido": false
  },
  {
    "veiculo": "C-250 Sport 2.0 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021309-8",
    "vendido": false
  },
  {
    "veiculo": "C-250 Sport Coupe 2.0 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021350-0",
    "vendido": false
  },
  {
    "veiculo": "C-280 Avantgarde 3.0 V6 231cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021203-2",
    "vendido": false
  },
  {
    "veiculo": "C-280 Classic/Sport",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021005-6",
    "vendido": false
  },
  {
    "veiculo": "C-280 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021004-8",
    "vendido": false
  },
  {
    "veiculo": "C-280 Touring",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021041-2",
    "vendido": false
  },
  {
    "veiculo": "C-300 Anniversary Lim. Edit. 2.0 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021365-9",
    "vendido": false
  },
  {
    "veiculo": "C-300 Avantgarde 3.0 V6 24V 231cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021222-9",
    "vendido": false
  },
  {
    "veiculo": "C-300 Cabriolet 2.0 245cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021368-3",
    "vendido": false
  },
  {
    "veiculo": "C-300 Sport 3.0 V6 231cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021236-9",
    "vendido": false
  },
  {
    "veiculo": "C-320 AvantGarde 3.2 V6 24v 4p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021121-4",
    "vendido": false
  },
  {
    "veiculo": "C-320 Elegance 3.2 V6 24v 4p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021122-2",
    "vendido": false
  },
  {
    "veiculo": "C-320 Touring 3.2 V6 18v 4p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021131-1",
    "vendido": false
  },
  {
    "veiculo": "C-350 Avantgarde/ Elegance 3.5 V6 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021179-6",
    "vendido": false
  },
  {
    "veiculo": "C-350 CGI Sport 3.5 306cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021249-0",
    "vendido": false
  },
  {
    "veiculo": "C-350 Sport 3.5 V6 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021215-6",
    "vendido": false
  },
  {
    "veiculo": "C-350 Sportcoupé 3.5 24V  272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021185-0",
    "vendido": false
  },
  {
    "veiculo": "C-350 Touring AvantGarde 3.5 24V 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021186-9",
    "vendido": false
  },
  {
    "veiculo": "C-36 AMG",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021006-4",
    "vendido": false
  },
  {
    "veiculo": "C-43 AMG",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021023-4",
    "vendido": false
  },
  {
    "veiculo": "C-43 AMG 3.0 V6 Bi-Turbo 367cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021361-6",
    "vendido": false
  },
  {
    "veiculo": "C-43 Coupe AMG 3.0 V6 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021357-8",
    "vendido": false
  },
  {
    "veiculo": "C-450 AMG Sport 3.0 TB 362cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021333-0",
    "vendido": false
  },
  {
    "veiculo": "C-55 AMG 24V 367cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021183-4",
    "vendido": false
  },
  {
    "veiculo": "C-55 Touring AMG 24V 367cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021184-2",
    "vendido": false
  },
  {
    "veiculo": "C-63 AMG 4.0 V8 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021349-7",
    "vendido": false
  },
  {
    "veiculo": "C-63 AMG 6.2 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021209-1",
    "vendido": false
  },
  {
    "veiculo": "C-63 Coupe AMG 6.2 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021251-2",
    "vendido": false
  },
  {
    "veiculo": "C-63 Coupe AMG Black Series 6.3 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021279-2",
    "vendido": false
  },
  {
    "veiculo": "C-63 S AMG 4.0 V8  Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021330-6",
    "vendido": false
  },
  {
    "veiculo": "C-63 S Coupe AMG 4.0 V8  Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021370-5",
    "vendido": false
  },
  {
    "veiculo": "C-63 Touring AMG 6.2 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021224-5",
    "vendido": false
  },
  {
    "veiculo": "CL-500 5.0/ 5.5",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021046-3",
    "vendido": false
  },
  {
    "veiculo": "CL-600 6.0/ 5.5",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021078-1",
    "vendido": false
  },
  {
    "veiculo": "CL-63 AMG 6.2 V8 32V 525cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021206-7",
    "vendido": false
  },
  {
    "veiculo": "CL-65 AMG 6.0 V12 612cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021225-3",
    "vendido": false
  },
  {
    "veiculo": "CLA-200 CGI 1.6 TB 16V 156cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021301-2",
    "vendido": false
  },
  {
    "veiculo": "CLA-200 Urban 1.6 TB 16V/Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021312-8",
    "vendido": false
  },
  {
    "veiculo": "CLA-200 Vision 1.6 TB 16V Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021316-0",
    "vendido": false
  },
  {
    "veiculo": "CLA-250 Sport 2.0 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021311-0",
    "vendido": false
  },
  {
    "veiculo": "CLA-45 AMG CGI 2.0 TB Aut. ",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021306-3",
    "vendido": false
  },
  {
    "veiculo": "Classe A 160 Classic Semi-Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021051-0",
    "vendido": false
  },
  {
    "veiculo": "Classe A 160 Classic/ Spirit Mec.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021048-0",
    "vendido": false
  },
  {
    "veiculo": "Classe A 160 Elegance Mec.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021049-8",
    "vendido": false
  },
  {
    "veiculo": "Classe A 160 Elegance Semi-Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021098-6",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 AvantGarde 1.9 8V 125cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021161-3",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 AvantGarde 1.9 8V 125cv Mec",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021141-9",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 Classic 1.9 Semi-Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021113-3",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 Classic/ Spirit 1.9 Mec.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021112-5",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 Elegance 1.9 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021129-0",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 Elegance 1.9 Mec.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021114-1",
    "vendido": false
  },
  {
    "veiculo": "Classe A 190 Elegance 1.9 Semi-Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021115-0",
    "vendido": false
  },
  {
    "veiculo": "Classe A 200 1.6 TB 16V Style 156cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021288-1",
    "vendido": false
  },
  {
    "veiculo": "Classe A 200 1.6 TB 16V Urban 156cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021289-0",
    "vendido": false
  },
  {
    "veiculo": "Classe A 200 1.6 TB/Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021327-6",
    "vendido": false
  },
  {
    "veiculo": "Classe A 200 Elegance 2.0 136cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021182-6",
    "vendido": false
  },
  {
    "veiculo": "Classe A 250 2.0 TB Sport Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021304-7",
    "vendido": false
  },
  {
    "veiculo": "Classe A 45 AMG 2.0 Turbo 360cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021300-4",
    "vendido": false
  },
  {
    "veiculo": "Classe B 170 1.7 116cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021218-0",
    "vendido": false
  },
  {
    "veiculo": "Classe B 180 1.7 116cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021220-2",
    "vendido": false
  },
  {
    "veiculo": "Classe B 200 2.0 136cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021194-0",
    "vendido": false
  },
  {
    "veiculo": "Classe B 200 2.0 Turbo 193cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021197-4",
    "vendido": false
  },
  {
    "veiculo": "Classe B 200 CGI 1.6 TB Sport 156cv Aut ",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021278-4",
    "vendido": false
  },
  {
    "veiculo": "Classe B 200 CGI 1.6 TB/Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021277-6",
    "vendido": false
  },
  {
    "veiculo": "Classe R 500 5.0 V8 306cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021195-8",
    "vendido": false
  },
  {
    "veiculo": "Classe R 500 L 5.5 V8 388cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021226-1",
    "vendido": false
  },
  {
    "veiculo": "Classic 6.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021082-0",
    "vendido": false
  },
  {
    "veiculo": "CLC 200 Kompressor 1.8 184cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021219-9",
    "vendido": false
  },
  {
    "veiculo": "CLK-230 Cabriolet Kompressor",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021099-4",
    "vendido": false
  },
  {
    "veiculo": "CLK-230 Kompressor",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021024-2",
    "vendido": false
  },
  {
    "veiculo": "CLK-320 AvantGarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021053-6",
    "vendido": false
  },
  {
    "veiculo": "CLK-320 AvantGarde Cabriolet",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021116-8",
    "vendido": false
  },
  {
    "veiculo": "CLK-320 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021025-0",
    "vendido": false
  },
  {
    "veiculo": "CLK-320 Elegance Cabriolet",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021052-8",
    "vendido": false
  },
  {
    "veiculo": "CLK-320 Sport",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021026-9",
    "vendido": false
  },
  {
    "veiculo": "CLK-320 Sport Cabriolet",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021054-4",
    "vendido": false
  },
  {
    "veiculo": "CLK-350 Avant./ Elegance 3.5 24V 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021188-5",
    "vendido": false
  },
  {
    "veiculo": "CLK-350 Avant./Eleg. Cabriolet 3.5 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021190-7",
    "vendido": false
  },
  {
    "veiculo": "CLK-430 Avantgard Cabriolet 4.3 V8 24v",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021126-5",
    "vendido": false
  },
  {
    "veiculo": "CLK-430 AvantGarde 4.3",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021118-4",
    "vendido": false
  },
  {
    "veiculo": "CLK-430 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021027-7",
    "vendido": false
  },
  {
    "veiculo": "CLK-430 Elegance Cabriolet 4.3 V8 24v",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021127-3",
    "vendido": false
  },
  {
    "veiculo": "CLK-430 Sport 4.3",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021028-5",
    "vendido": false
  },
  {
    "veiculo": "CLK-500 Cabriolet V8 24V 306cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021163-0",
    "vendido": false
  },
  {
    "veiculo": "CLK-500 Elegance/ Avant. 5.0 V8 24V Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021145-1",
    "vendido": false
  },
  {
    "veiculo": "CLK-55 AMG Cabriolet V8 24v 367cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021156-7",
    "vendido": false
  },
  {
    "veiculo": "CLK-55 AMG V8 24V 367cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021153-2",
    "vendido": false
  },
  {
    "veiculo": "CLS-350 CGI 3.5 306cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021250-4",
    "vendido": false
  },
  {
    "veiculo": "CLS-350 V6 24V 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021189-3",
    "vendido": false
  },
  {
    "veiculo": "CLS-400 3.5 V6 Bi-Turbo 333cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021321-7",
    "vendido": false
  },
  {
    "veiculo": "CLS-500 V8 24V",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021175-3",
    "vendido": false
  },
  {
    "veiculo": "CLS-55 Kompressor AMG 5.5 V8 24V 476cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021180-0",
    "vendido": false
  },
  {
    "veiculo": "CLS-63 AMG 5.5 V8 557cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021245-8",
    "vendido": false
  },
  {
    "veiculo": "CLS-63 AMG 6.2 V8 32V 514cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021196-6",
    "vendido": false
  },
  {
    "veiculo": "E-190",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021007-2",
    "vendido": false
  },
  {
    "veiculo": "E-190 Classic",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021107-9",
    "vendido": false
  },
  {
    "veiculo": "E-200 Classic 2.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021079-0",
    "vendido": false
  },
  {
    "veiculo": "E-220 Classic/Touring 2.2",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021064-1",
    "vendido": false
  },
  {
    "veiculo": "E-230 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021008-0",
    "vendido": false
  },
  {
    "veiculo": "E-240 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021029-3",
    "vendido": false
  },
  {
    "veiculo": "E-250 Cabriolet 2.0 TB 211CV Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021305-5",
    "vendido": false
  },
  {
    "veiculo": "E-250 CGI Avantgarde 1.8 16V 204cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021243-1",
    "vendido": false
  },
  {
    "veiculo": "E-250 CGI Avantgarde 2.0 TB 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021295-4",
    "vendido": false
  },
  {
    "veiculo": "E-250 CGI Coupe 1.8 16V 204cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021244-0",
    "vendido": false
  },
  {
    "veiculo": "E-250 CGI VR4 2.0 TB Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021323-3",
    "vendido": false
  },
  {
    "veiculo": "E-250 Coupe 2.0 TB 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021298-9",
    "vendido": false
  },
  {
    "veiculo": "E-250 Excl. Launch Ed. 2.0 TB 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021362-4",
    "vendido": false
  },
  {
    "veiculo": "E-280 Classic 2.8",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021065-0",
    "vendido": false
  },
  {
    "veiculo": "E-280 Touring 2.8",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021066-8",
    "vendido": false
  },
  {
    "veiculo": "E-320",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021009-9",
    "vendido": false
  },
  {
    "veiculo": "E-320 3.2 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021030-7",
    "vendido": false
  },
  {
    "veiculo": "E-320 Avantgarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021031-5",
    "vendido": false
  },
  {
    "veiculo": "E-320 C 3.2/ CA Classic 3.2",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021094-3",
    "vendido": false
  },
  {
    "veiculo": "E-320 Cabriolet",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021093-5",
    "vendido": false
  },
  {
    "veiculo": "E-320 Touring Avantgarde 24V V6 5p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021160-5",
    "vendido": false
  },
  {
    "veiculo": "E-320 Touring Eleg./Classic",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021033-1",
    "vendido": false
  },
  {
    "veiculo": "E-350  Touring Avant/Eleg. 3.5 24V 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021187-7",
    "vendido": false
  },
  {
    "veiculo": "E-350 Avant./Avant. Execut. 3.5 V6 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021221-0",
    "vendido": false
  },
  {
    "veiculo": "E-350 Avantgarde/ Elegance 3.5 V6 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021178-8",
    "vendido": false
  },
  {
    "veiculo": "E-350 Cabrio 3.5 V6 272cv 2p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021235-0",
    "vendido": false
  },
  {
    "veiculo": "E-350 CGI Avantgarde Sport 3.5 306cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021275-0",
    "vendido": false
  },
  {
    "veiculo": "E-350 CGI Cabriolet 3.5 306cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021294-6",
    "vendido": false
  },
  {
    "veiculo": "E-350 CGI Executive 3.5 306cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021256-3",
    "vendido": false
  },
  {
    "veiculo": "E-350 CGI Guard VR4 3.5 306cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021296-2",
    "vendido": false
  },
  {
    "veiculo": "E-350 Coupe 3.5 V6 272cv 2p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021223-7",
    "vendido": false
  },
  {
    "veiculo": "E-350 Sport 3.5 V6 272cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021208-3",
    "vendido": false
  },
  {
    "veiculo": "E-400 Avantgarde 3.5 V6 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021317-9",
    "vendido": false
  },
  {
    "veiculo": "E-400 Cabriolet 3.5 V6 Bi-Turbo Aut. ",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021329-2",
    "vendido": false
  },
  {
    "veiculo": "E-420 Classic/Elegance/Avantgarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021010-2",
    "vendido": false
  },
  {
    "veiculo": "E-420 Touring Avantgarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021059-5",
    "vendido": false
  },
  {
    "veiculo": "E-430 Avantgarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021035-8",
    "vendido": false
  },
  {
    "veiculo": "E-430 Elegance",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021034-0",
    "vendido": false
  },
  {
    "veiculo": "E-430 Touring Avantgarde",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021036-6",
    "vendido": false
  },
  {
    "veiculo": "E-500 Avangarde Executive 5.5 V8 388cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021240-7",
    "vendido": false
  },
  {
    "veiculo": "E-500 Avant. (Blindada) 5.0 V8 4p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021216-4",
    "vendido": false
  },
  {
    "veiculo": "E-500 CGI Guard VR4 4.7 V8 408cv 4p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021274-1",
    "vendido": false
  },
  {
    "veiculo": "E-500 CGI Guard VR4 5.5 V8 4p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021257-1",
    "vendido": false
  },
  {
    "veiculo": "E-500 Coupe Sport 4.7 V8 408cv Aut 2p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021263-6",
    "vendido": false
  },
  {
    "veiculo": "E-500 Coupe Sport 5.5 V8 388cv 2p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021238-5",
    "vendido": false
  },
  {
    "veiculo": "E-500 Elegance/ Avant. 5.0 V8 24V 4p Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021144-3",
    "vendido": false
  },
  {
    "veiculo": "E-500 Sport Avantgarde 5.0 V8 24V 4p Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021211-3",
    "vendido": false
  },
  {
    "veiculo": "E-500 Tour. Avant./ Eleg. 24V V8 5p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021158-3",
    "vendido": false
  },
  {
    "veiculo": "E-55 AMG",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021037-4",
    "vendido": false
  },
  {
    "veiculo": "E-55 Touring AMG 24V V8 5p Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021159-1",
    "vendido": false
  },
  {
    "veiculo": "E-63 AMG 5.5 V8 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021258-0",
    "vendido": false
  },
  {
    "veiculo": "E-63 AMG 6.2 V8 32V",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021198-2",
    "vendido": false
  },
  {
    "veiculo": "E-63 Touring AMG 5.5 V8 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021259-8",
    "vendido": false
  },
  {
    "veiculo": "E-63 Touring AMG 6.2 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021241-5",
    "vendido": false
  },
  {
    "veiculo": "G-55 Kompressor AMG 5.5 V8 507cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021229-6",
    "vendido": false
  },
  {
    "veiculo": "G-63 AMG 5.5 Bi-Turbo 32V 4x4 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021293-8",
    "vendido": false
  },
  {
    "veiculo": "GL-350 Sport 3.0 V6 258cv 4x4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021299-7",
    "vendido": false
  },
  {
    "veiculo": "GL-500 4.7 Bi-Turbo V8 4x4 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021287-3",
    "vendido": false
  },
  {
    "veiculo": "GL-500 5.5 V8 32V 4x4 388cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021199-0",
    "vendido": false
  },
  {
    "veiculo": "GL-63 AMG 5.5 Bi-Turbo 32V 4x4 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021292-0",
    "vendido": false
  },
  {
    "veiculo": "GLA 200 Adv. 1.6/1.6 TB 16V Flex  Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021313-6",
    "vendido": false
  },
  {
    "veiculo": "GLA 200 Enduro 1.6 TB 16V Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021338-1",
    "vendido": false
  },
  {
    "veiculo": "GLA 200 Style 1.6 TB 16V/Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021322-5",
    "vendido": false
  },
  {
    "veiculo": "GLA 200 Vis. Black Ed. 1.6 TB 16V  Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021315-2",
    "vendido": false
  },
  {
    "veiculo": "GLA 200 Vision 1.6/1.6 TB 16V Flex Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021314-4",
    "vendido": false
  },
  {
    "veiculo": "GLA 250 Enduro 2.0 TB 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021339-0",
    "vendido": false
  },
  {
    "veiculo": "GLA 250 Sport 2.0 TB 16V 4x2  211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021325-0",
    "vendido": false
  },
  {
    "veiculo": "GLA 250 Sport TB 16V 4x4 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021363-2",
    "vendido": false
  },
  {
    "veiculo": "GLA 250 Vision 2.0 TB 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021324-1",
    "vendido": false
  },
  {
    "veiculo": "GLA 45 AMG 2.0 Turbo 4x4 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021318-7",
    "vendido": false
  },
  {
    "veiculo": "GLC 250 2.0 TB 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021344-6",
    "vendido": false
  },
  {
    "veiculo": "GLC 250 Sport 2.0 TB 16V 211cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021343-8",
    "vendido": false
  },
  {
    "veiculo": "GLC-43 AMG 3.0 V6 Bi-Turbo 367cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021367-5",
    "vendido": false
  },
  {
    "veiculo": "GLE-350 3.0 V6 258cv 4x4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021340-3",
    "vendido": false
  },
  {
    "veiculo": "GLE-350 Family 3.0 V6 258cv 4x4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021342-0",
    "vendido": false
  },
  {
    "veiculo": "GLE-350 Sport 3.0 V6 258cv 4x4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021341-1",
    "vendido": false
  },
  {
    "veiculo": "GLE-400 Coupe 3.0 V6 333cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021345-4",
    "vendido": false
  },
  {
    "veiculo": "GLE-400 Highway Coupe 3.0 V6 333cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021364-0",
    "vendido": false
  },
  {
    "veiculo": "GLE-400 Night Coupe 3.0 V6 333cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021346-2",
    "vendido": false
  },
  {
    "veiculo": "GLE-43 AMG 3.0 V6 Bi-Turbo 367cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021369-1",
    "vendido": false
  },
  {
    "veiculo": "GLE-450 AMG 3.0 V6 367cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021356-0",
    "vendido": false
  },
  {
    "veiculo": "GLE-63 AMG 5.5 V8 557cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021360-8",
    "vendido": false
  },
  {
    "veiculo": "GLE-63 AMG Coupe 5.5 v8 557cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021347-0",
    "vendido": false
  },
  {
    "veiculo": "GLK 220 CDI 2.2 TB 4X4 170cv Aut. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021290-3",
    "vendido": false
  },
  {
    "veiculo": "GLK 220 Sport CDI 2.2 TB 4X4 Aut. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021291-1",
    "vendido": false
  },
  {
    "veiculo": "GLK 280 3.0 V6 24V 4x4 231cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021217-2",
    "vendido": false
  },
  {
    "veiculo": "GLK 300 3.0 V6 24V 4x4 231cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021228-8",
    "vendido": false
  },
  {
    "veiculo": "GLK 300 3.5 CGI V6 4x4 252cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021284-9",
    "vendido": false
  },
  {
    "veiculo": "GLS-350 V6 258cv 4x4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021348-9",
    "vendido": false
  },
  {
    "veiculo": "GT AMG 4.0 V8 Bi-Turbo 462cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021358-6",
    "vendido": false
  },
  {
    "veiculo": "GT S AMG 4.0 V8 Bi-Turbo 510cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021332-2",
    "vendido": false
  },
  {
    "veiculo": "ML-230 4x4",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021038-2",
    "vendido": false
  },
  {
    "veiculo": "ML-320 3.0 V6 224cv 4x4 diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021212-1",
    "vendido": false
  },
  {
    "veiculo": "ML-320 4x4",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021039-0",
    "vendido": false
  },
  {
    "veiculo": "ML-350 3.0 V6  4x4 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021227-0",
    "vendido": false
  },
  {
    "veiculo": "ML-350 3.5  4x4",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021172-9",
    "vendido": false
  },
  {
    "veiculo": "ML-350 Sport 3.0 V6 258cv 4X4 Diesel ",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021297-0",
    "vendido": false
  },
  {
    "veiculo": "ML-350 Sport CGI 3.5 V6 306cv 4x4 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021264-4",
    "vendido": false
  },
  {
    "veiculo": "ML-430",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021056-0",
    "vendido": false
  },
  {
    "veiculo": "ML-500 V8 24V ",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021155-9",
    "vendido": false
  },
  {
    "veiculo": "ML-55 AMG 5.5 24v",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021128-1",
    "vendido": false
  },
  {
    "veiculo": "ML-63 AMG 5.5 V8 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021276-8",
    "vendido": false
  },
  {
    "veiculo": "ML-63 AMG 6.2 V8 32V 510cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021201-6",
    "vendido": false
  },
  {
    "veiculo": "S-320 L Classic/Wagon Classic 3.2",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021013-7",
    "vendido": false
  },
  {
    "veiculo": "S-400 Hybrid 3.5 V6 279cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021231-8",
    "vendido": false
  },
  {
    "veiculo": "S-420 Classic 4.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021080-3",
    "vendido": false
  },
  {
    "veiculo": "S-500 5.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021014-5",
    "vendido": false
  },
  {
    "veiculo": "S-500 C Classic 5.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021081-1",
    "vendido": false
  },
  {
    "veiculo": "S-500 L/ L Classic/ Wagon Classic 5.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021092-7",
    "vendido": false
  },
  {
    "veiculo": "S-500L 4.7 Bi-Turbo V8 455cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021302-0",
    "vendido": false
  },
  {
    "veiculo": "S-500L 5.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021057-9",
    "vendido": false
  },
  {
    "veiculo": "S-55 AMG V8 24V 364cv/ 500cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021173-7",
    "vendido": false
  },
  {
    "veiculo": "S-600 L/ L Classic/ Wagon Classic 6.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021083-8",
    "vendido": false
  },
  {
    "veiculo": "S-600/ S-600 C Classic 6.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021015-3",
    "vendido": false
  },
  {
    "veiculo": "S-63 AMG 5.5 V8 BI-TURBO Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021252-0",
    "vendido": false
  },
  {
    "veiculo": "S-63 AMG 6.2 V8 525cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021204-0",
    "vendido": false
  },
  {
    "veiculo": "S-63 Cabriolet AMG 5.5 V8 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021366-7",
    "vendido": false
  },
  {
    "veiculo": "S-63 Coupe AMG 5.5 V8 Bi-Turbo Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021328-4",
    "vendido": false
  },
  {
    "veiculo": "S-63 L AMG 6.2 V8/5.5 V8 Bi-TB Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021205-9",
    "vendido": false
  },
  {
    "veiculo": "S-65 AMG 6.0 V12 612cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021200-8",
    "vendido": false
  },
  {
    "veiculo": "S-65 L AMG 6.0 V12 630cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021359-4",
    "vendido": false
  },
  {
    "veiculo": "SE-500",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021016-1",
    "vendido": false
  },
  {
    "veiculo": "SL-280 Classic 2.8",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021084-6",
    "vendido": false
  },
  {
    "veiculo": "SL-320 3.2/Classic 3.2",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021017-0",
    "vendido": false
  },
  {
    "veiculo": "SL-350 3.5 V6 2p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021191-5",
    "vendido": false
  },
  {
    "veiculo": "SL-350 Sport 3.5 V6 316cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021232-6",
    "vendido": false
  },
  {
    "veiculo": "SL-400 3.0 Bi-Turbo V6 2p",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021326-8",
    "vendido": false
  },
  {
    "veiculo": "SL-500 5.0 e 5.5/ Classic 5.0",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021018-8",
    "vendido": false
  },
  {
    "veiculo": "SL-55 AMG V8 24V 500cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021154-0",
    "vendido": false
  },
  {
    "veiculo": "SL-600",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021019-6",
    "vendido": false
  },
  {
    "veiculo": "SL-63 AMG 5.5 Bi-Turbo V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021285-7",
    "vendido": false
  },
  {
    "veiculo": "SL-63 AMG 6.2 V8 525cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021213-0",
    "vendido": false
  },
  {
    "veiculo": "SL-65 AMG 6.0 V12 612cv Aut",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021214-8",
    "vendido": false
  },
  {
    "veiculo": "SLC-300 2.0 Turbo 245cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021351-9",
    "vendido": false
  },
  {
    "veiculo": "SLC-43 AMG 3.0 V6 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021355-1",
    "vendido": false
  },
  {
    "veiculo": "SLK-200 Kompressor 16V/ 200 CGI 16V",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021162-1",
    "vendido": false
  },
  {
    "veiculo": "SLK-230 Kompressor",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021021-8",
    "vendido": false
  },
  {
    "veiculo": "SLK-230 Plus",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021058-7",
    "vendido": false
  },
  {
    "veiculo": "SLK-250 CGI 1.8 16V 204cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021254-7",
    "vendido": false
  },
  {
    "veiculo": "SLK-300 2.0 Turbo 245cv Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021334-9",
    "vendido": false
  },
  {
    "veiculo": "SLK-320 3.2 218cv",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021125-7",
    "vendido": false
  },
  {
    "veiculo": "SLK-350 3.5 V6/SLK-350 CGI",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021177-0",
    "vendido": false
  },
  {
    "veiculo": "SLK-55 AMG V8 24V",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021176-1",
    "vendido": false
  },
  {
    "veiculo": "SLS-63 AMG 6.2 8V Black Series Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021303-9",
    "vendido": false
  },
  {
    "veiculo": "SLS-63 AMG 6.2 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021247-4",
    "vendido": false
  },
  {
    "veiculo": "SLS-63 AMG Roadster 6.3 V8 Aut.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021253-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Chassi Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021095-1",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Furgão 2.5 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021117-6",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Pick-Up Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021096-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Van Exec. 9Lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021097-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Van Luxo/Exec. 12/14L Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021085-4",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Van Std 12e14L/Luxo 9L.Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021087-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 310 Van Std. 9Lug. 2.5 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021088-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Chassi 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021146-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Chassi E. Longa 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021319-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Furgão Curto 2.2 Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021133-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Furgão E.Longo T.Alto Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021248-2",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Furgão Longo 2.2  Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021134-6",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Furgão Longo Teto alto Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021135-4",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Street Luxo 2.2 16Lug. Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021149-4",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 Street Std. 2.2 16Lug. Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021150-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 VAN Luxo 2.2 109cv 13L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021138-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 VAN Luxo 2.2 109cv 16L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021148-6",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 VAN Std. 2.2 109cv 13L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021137-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 311 VAN Std. 2.2 109cv 16L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021136-2",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Furgão Curto Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021042-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Furgão Longo Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021124-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Furgão Longo T.Alto Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021130-3",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Exec. 10Lug. 2.5 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021089-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Exec. 12Lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021104-4",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Luxo 10lug.  Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021043-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Luxo 12lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021102-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Luxo 15lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021044-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Luxo 16lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021103-6",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Luxo Lotação 16lug.Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021106-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Std 12lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021100-1",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Std 16lug. Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021101-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Std Lotação 16lug. Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021105-2",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Street Luxo 15Lug.Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021090-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312 Van Street Std. 15Lug.Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021091-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 312-D Chassi Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021111-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313  Chassi Ex. Longo 2.2 Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021353-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 Chassi 2.2 129cv Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021166-4",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 Chassi Longo 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021352-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 Furgão Curto 2.2 129cv Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021164-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 Furgão Ex. Longo T. A. Die.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021354-3",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 Furgão Longo 2.2 129cv Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021165-6",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 Furgão Longo T. Alto Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021147-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Exec 2.2 Mec/S-Aut Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021139-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Luxo 2.2 129cv 13L.Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021168-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Luxo 2.2 129cv 16L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021140-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Std. 2.2 129cv 13L.Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021167-2",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Std. 2.2 129cv 16L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021174-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Street Luxo 16L. Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021169-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 313 VAN Street Std. 16L. Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021170-2",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 412-D Chassi Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021108-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 413 Furgão Longo T.Alto Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021157-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 413 VAN Luxo 2.2 16 e 20L Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021207-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 413-D Chassi Curto/Longo Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021152-4",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 Chassi L. 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021265-2",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 Furgão Curto T.B. 2.2 Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021268-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 Furgão E.L.T.Alt. 2.2 Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021269-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 Furgão Lon.T.Alto 2.2 Dies",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021261-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 Furgão Lon.T.Bai. 2.2 Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021260-1",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 VAN Luxo T.A. 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021273-3",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 VAN Luxo T.B. 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021272-5",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 VAN Standard T.A. 2.2 Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021271-7",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 415 VAN Standard T.B. 2.2 Dies.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021270-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 515 Chassi E. L. 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021267-9",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 515 Chassi L. 2.2  Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021266-0",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 515 Furgão E.L.T. Alto 2.2 Die.",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021262-8",
    "vendido": false
  },
  {
    "veiculo": "Sprinter 515 VAN 2.2 Diesel",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021283-0",
    "vendido": false
  },
  {
    "veiculo": "VITO 111 CDI Furgão 1.6 TB Diesel 4p Mec",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021337-3",
    "vendido": false
  },
  {
    "veiculo": "VITO TOURER 119 Comf. 2.0 Flex 9Lug. Mec",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021336-5",
    "vendido": false
  },
  {
    "veiculo": "VITO TOURER 119 Luxo 2.0 Flex 8Lug. Mec",
    "marca": "Mercedes-Benz",
    "cod_fipe": "021335-7",
    "vendido": false
  },
  {
    "veiculo": "Mystique GS 2.5 V6 Mec.",
    "marca": "Mercury",
    "cod_fipe": "048001-0",
    "vendido": false
  },
  {
    "veiculo": "Sable LS 3.0 V6",
    "marca": "Mercury",
    "cod_fipe": "048002-9",
    "vendido": false
  },
  {
    "veiculo": "550 1.8 16V Turbo 170cv Aut.",
    "marca": "MG",
    "cod_fipe": "076001-3",
    "vendido": false
  },
  {
    "veiculo": "MG6 1.8 16V Turbo 170cv Aut.",
    "marca": "MG",
    "cod_fipe": "076002-1",
    "vendido": false
  },
  {
    "veiculo": "COOPER 1.5 Turbo 12V 3p Aut.",
    "marca": "MINI",
    "cod_fipe": "071029-6",
    "vendido": false
  },
  {
    "veiculo": "COOPER 1.5 Turbo 12V 5p Aut.",
    "marca": "MINI",
    "cod_fipe": "071033-4",
    "vendido": false
  },
  {
    "veiculo": "COOPER 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071002-4",
    "vendido": false
  },
  {
    "veiculo": "COOPER 1.6 Mec.",
    "marca": "MINI",
    "cod_fipe": "071001-6",
    "vendido": false
  },
  {
    "veiculo": "COOPER CABRIO 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071005-9",
    "vendido": false
  },
  {
    "veiculo": "COOPER CABRIO John Works 1.6  Mec.",
    "marca": "MINI",
    "cod_fipe": "071012-1",
    "vendido": false
  },
  {
    "veiculo": "COOPER CABRIO John Works 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071024-5",
    "vendido": false
  },
  {
    "veiculo": "COOPER CABRIO S 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071006-7",
    "vendido": false
  },
  {
    "veiculo": "COOPER CABRIO S 2.0 16V Aut.",
    "marca": "MINI",
    "cod_fipe": "071036-9",
    "vendido": false
  },
  {
    "veiculo": "COOPER CABRIO S HIGHGATE 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071020-2",
    "vendido": false
  },
  {
    "veiculo": "COOPER Clubman 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071015-6",
    "vendido": false
  },
  {
    "veiculo": "COOPER Country. John Works ALL4 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071027-0",
    "vendido": false
  },
  {
    "veiculo": "COOPER Countryman 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071010-5",
    "vendido": false
  },
  {
    "veiculo": "COOPER Countryman S 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071009-1",
    "vendido": false
  },
  {
    "veiculo": "COOPER Countryman S ALL4 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071007-5",
    "vendido": false
  },
  {
    "veiculo": "COOPER COUPÉ 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071013-0",
    "vendido": false
  },
  {
    "veiculo": "COOPER COUPÉ John Works 1.6 Aut",
    "marca": "MINI",
    "cod_fipe": "071022-9",
    "vendido": false
  },
  {
    "veiculo": "COOPER COUPÉ S 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071014-8",
    "vendido": false
  },
  {
    "veiculo": "COOPER John Works 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071021-0",
    "vendido": false
  },
  {
    "veiculo": "COOPER John Works 1.6 Mec.",
    "marca": "MINI",
    "cod_fipe": "071008-3",
    "vendido": false
  },
  {
    "veiculo": "COOPER John Works 2.0 Turbo 3p Aut.",
    "marca": "MINI",
    "cod_fipe": "071034-2",
    "vendido": false
  },
  {
    "veiculo": "COOPER PACEMAN S 1.6 16V 184cv Aut.",
    "marca": "MINI",
    "cod_fipe": "071019-9",
    "vendido": false
  },
  {
    "veiculo": "COOPER PACEMAN S ALL4 1.6 16V Aut.",
    "marca": "MINI",
    "cod_fipe": "071026-1",
    "vendido": false
  },
  {
    "veiculo": "COOPER PACEMAN S John Works ALL4 1.6 Aut",
    "marca": "MINI",
    "cod_fipe": "071028-8",
    "vendido": false
  },
  {
    "veiculo": "COOPER ROADSTER 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071017-2",
    "vendido": false
  },
  {
    "veiculo": "COOPER ROADSTER John Works 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071023-7",
    "vendido": false
  },
  {
    "veiculo": "COOPER ROADSTER S 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071018-0",
    "vendido": false
  },
  {
    "veiculo": "COOPER S 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071003-2",
    "vendido": false
  },
  {
    "veiculo": "COOPER S 2.0 Turbo 16v 3p Aut.",
    "marca": "MINI",
    "cod_fipe": "071030-0",
    "vendido": false
  },
  {
    "veiculo": "COOPER S 2.0 Turbo 16V 3p Mec.",
    "marca": "MINI",
    "cod_fipe": "071031-8",
    "vendido": false
  },
  {
    "veiculo": "COOPER S 2.0 Turbo 16V 5p Aut.",
    "marca": "MINI",
    "cod_fipe": "071032-6",
    "vendido": false
  },
  {
    "veiculo": "COOPER S BAYSWATER 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071025-3",
    "vendido": false
  },
  {
    "veiculo": "COOPER S Clubman 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071004-0",
    "vendido": false
  },
  {
    "veiculo": "COOPER S Clubman 2.0 Aut.",
    "marca": "MINI",
    "cod_fipe": "071035-0",
    "vendido": false
  },
  {
    "veiculo": "ONE 1.6  Mec.",
    "marca": "MINI",
    "cod_fipe": "071011-3",
    "vendido": false
  },
  {
    "veiculo": "ONE 1.6 Aut.",
    "marca": "MINI",
    "cod_fipe": "071016-4",
    "vendido": false
  },
  {
    "veiculo": "3000 GT SL 3.0",
    "marca": "Mitsubishi",
    "cod_fipe": "022041-8",
    "vendido": false
  },
  {
    "veiculo": "3000 GT VR-4",
    "marca": "Mitsubishi",
    "cod_fipe": "022001-9",
    "vendido": false
  },
  {
    "veiculo": "Airtrek 2.0 16V TB-IC 202cv 4x4 5p",
    "marca": "Mitsubishi",
    "cod_fipe": "022097-3",
    "vendido": false
  },
  {
    "veiculo": "Airtrek 2.4 16V 163cv/ 136cv 4x4 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022077-9",
    "vendido": false
  },
  {
    "veiculo": "ASX 2.0 16V  4x4 Aut.(By Armura-Blind.)",
    "marca": "Mitsubishi",
    "cod_fipe": "022140-6",
    "vendido": false
  },
  {
    "veiculo": "ASX 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022113-9",
    "vendido": false
  },
  {
    "veiculo": "ASX 2.0 16V 160cv Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022114-7",
    "vendido": false
  },
  {
    "veiculo": "ASX 2.0 16V 4x2 Aut.(By Amura-Blind.)",
    "marca": "Mitsubishi",
    "cod_fipe": "022142-2",
    "vendido": false
  },
  {
    "veiculo": "ASX 2.0 16V 4x4 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022115-5",
    "vendido": false
  },
  {
    "veiculo": "ASX O NEILL 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022146-5",
    "vendido": false
  },
  {
    "veiculo": "ASX OUTDOOR 2.0 4x2 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022155-4",
    "vendido": false
  },
  {
    "veiculo": "ASX OUTDOOR 2.0 4X4 16V 160 cv Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022149-0",
    "vendido": false
  },
  {
    "veiculo": "ASX-S 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022156-2",
    "vendido": false
  },
  {
    "veiculo": "Colt GLXi",
    "marca": "Mitsubishi",
    "cod_fipe": "022002-7",
    "vendido": false
  },
  {
    "veiculo": "Colt GTi Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022003-5",
    "vendido": false
  },
  {
    "veiculo": "Diamant  LS 3.0 V6",
    "marca": "Mitsubishi",
    "cod_fipe": "022030-2",
    "vendido": false
  },
  {
    "veiculo": "Eclipse GS/ GS Turbo Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022004-3",
    "vendido": false
  },
  {
    "veiculo": "Eclipse GST 2.0 16V Turbo",
    "marca": "Mitsubishi",
    "cod_fipe": "022032-9",
    "vendido": false
  },
  {
    "veiculo": "Eclipse GSX 2.0 V6 16V Turbo",
    "marca": "Mitsubishi",
    "cod_fipe": "022031-0",
    "vendido": false
  },
  {
    "veiculo": "Eclipse GT 3.0 V6 24V",
    "marca": "Mitsubishi",
    "cod_fipe": "022059-0",
    "vendido": false
  },
  {
    "veiculo": "Eclipse GT 3.8 V6 267cv",
    "marca": "Mitsubishi",
    "cod_fipe": "022096-5",
    "vendido": false
  },
  {
    "veiculo": "Expo LRV Sport 2.3 16V",
    "marca": "Mitsubishi",
    "cod_fipe": "022042-6",
    "vendido": false
  },
  {
    "veiculo": "Expo SP Van 2.3 16V",
    "marca": "Mitsubishi",
    "cod_fipe": "022005-1",
    "vendido": false
  },
  {
    "veiculo": "Galant 2.0",
    "marca": "Mitsubishi",
    "cod_fipe": "022025-6",
    "vendido": false
  },
  {
    "veiculo": "Galant 2.5 V6",
    "marca": "Mitsubishi",
    "cod_fipe": "022026-4",
    "vendido": false
  },
  {
    "veiculo": "Galant ES",
    "marca": "Mitsubishi",
    "cod_fipe": "022006-0",
    "vendido": false
  },
  {
    "veiculo": "Galant GS 2.0 V6",
    "marca": "Mitsubishi",
    "cod_fipe": "022056-6",
    "vendido": false
  },
  {
    "veiculo": "GRANDIS 2.4 16V 163cv 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022085-0",
    "vendido": false
  },
  {
    "veiculo": "L200 2.5 4x2 CD Turbo Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022070-1",
    "vendido": false
  },
  {
    "veiculo": "L200 2.5 4x2 Turbo Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022008-6",
    "vendido": false
  },
  {
    "veiculo": "L200 2.5 4x4 CD Turbo Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022009-4",
    "vendido": false
  },
  {
    "veiculo": "L200 Evolution 3.2 4x4 TB Int. Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022069-8",
    "vendido": false
  },
  {
    "veiculo": "L200 GL 2.5 4X4 CD Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022028-0",
    "vendido": false
  },
  {
    "veiculo": "L200 GLS 2.5 4X4 CD Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022029-9",
    "vendido": false
  },
  {
    "veiculo": "L200 GLS Sport 2.5 4x4 121cv CD DTI Dies",
    "marca": "Mitsubishi",
    "cod_fipe": "022080-9",
    "vendido": false
  },
  {
    "veiculo": "L200 HPE 2.5 8v 95/118cv TB-IC Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022071-0",
    "vendido": false
  },
  {
    "veiculo": "L200 L 2.5 4X4 CD Turbo Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022060-4",
    "vendido": false
  },
  {
    "veiculo": "L200 OUTDOOR GLS 2.5 4X4 CD TDI Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022092-2",
    "vendido": false
  },
  {
    "veiculo": "L200 OUTDOOR HPE 2.5 4x4 CD T.Diesel Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022094-9",
    "vendido": false
  },
  {
    "veiculo": "L200 OUTDOOR HPE 2.5 4x4 CD T.Diesel Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022093-0",
    "vendido": false
  },
  {
    "veiculo": "L200 RI/ RII/ RIII CD 2.5 TB Int. Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022076-0",
    "vendido": false
  },
  {
    "veiculo": "L200 Savana 2.5 4x4 121cv CD DTI  Dies.",
    "marca": "Mitsubishi",
    "cod_fipe": "022081-7",
    "vendido": false
  },
  {
    "veiculo": "L200 Sport 2.5 4x4 CD Turbo Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022043-4",
    "vendido": false
  },
  {
    "veiculo": "L200 Sport HPE 2.5 4x4 CD DTI Dies. Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022078-7",
    "vendido": false
  },
  {
    "veiculo": "L200 Sport HPE 2.5 4x4 CD DTI Dies. Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022079-5",
    "vendido": false
  },
  {
    "veiculo": "L200 Sport RS 2.5 CD DTI (passeio) Dies.",
    "marca": "Mitsubishi",
    "cod_fipe": "022084-1",
    "vendido": false
  },
  {
    "veiculo": "L200 T. OUTDOOR 3.2 CD TB Int.Dies. Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022153-8",
    "vendido": false
  },
  {
    "veiculo": "L200 T. Savana 3.2 CD TB Int. Dies. Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022150-3",
    "vendido": false
  },
  {
    "veiculo": "L200 T.OUTDOOR 3.2 CD TB Int. Dies. Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022152-0",
    "vendido": false
  },
  {
    "veiculo": "L200 Tri.HLS Chrome Ed. 2.4 CD Flex Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022141-4",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton GLS 3.2 CD TB Int.Diesel Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022126-0",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton GLX 3.2 CD TB Int.Diesel Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022125-2",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton HLS 2.4 Flex 16V CD Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022130-9",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton HPE 3.2 CD TB Int.Diesel Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022103-1",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton HPE 3.2 CD TB Int.Diesel Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022104-0",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton HPE 3.5 CD V6 24V Flex Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022102-3",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton KTM 3.2 CD TB Int.Dies. Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022154-6",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton OUTDOOR 2.4 Flex 16V CD Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022151-1",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton S. HPE FTP 2.4 CD Dies. Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022159-7",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton Savana 3.2 CD TBI Dies. Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022128-7",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton Savanaoff 3.2 CD TBI Die.Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022135-0",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton Sport GLS 2.4 CD Diesel Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022160-0",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton Sport HPE 2.4 CD Diesel Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022158-9",
    "vendido": false
  },
  {
    "veiculo": "L200 Triton XB 3.2 CD TB Int.Diesel Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022117-1",
    "vendido": false
  },
  {
    "veiculo": "L300 Base/DX/Canter 2.5 Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022027-2",
    "vendido": false
  },
  {
    "veiculo": "L300 Top/Luxo 2.5 Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022010-8",
    "vendido": false
  },
  {
    "veiculo": "Lancer 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022123-6",
    "vendido": false
  },
  {
    "veiculo": "Lancer 2.0 16V 160cv Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022124-4",
    "vendido": false
  },
  {
    "veiculo": "Lancer Evol. 2.0 Turbo",
    "marca": "Mitsubishi",
    "cod_fipe": "022036-1",
    "vendido": false
  },
  {
    "veiculo": "Lancer Evol. VI 2.0 Turbo 4p",
    "marca": "Mitsubishi",
    "cod_fipe": "022063-9",
    "vendido": false
  },
  {
    "veiculo": "Lancer Evol. X J. Easton 2.0 16V TB Int.",
    "marca": "Mitsubishi",
    "cod_fipe": "022131-7",
    "vendido": false
  },
  {
    "veiculo": "Lancer Evolut. IX MR 2.0 290cv TB-IC",
    "marca": "Mitsubishi",
    "cod_fipe": "022095-7",
    "vendido": false
  },
  {
    "veiculo": "Lancer Evolut. VII/ VIII/ IX 2.0 280cv T",
    "marca": "Mitsubishi",
    "cod_fipe": "022072-8",
    "vendido": false
  },
  {
    "veiculo": "Lancer Evolution X 2.0 16V 295cv TB Int.",
    "marca": "Mitsubishi",
    "cod_fipe": "022112-0",
    "vendido": false
  },
  {
    "veiculo": "Lancer GLX",
    "marca": "Mitsubishi",
    "cod_fipe": "022011-6",
    "vendido": false
  },
  {
    "veiculo": "Lancer GT 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022120-1",
    "vendido": false
  },
  {
    "veiculo": "Lancer GT 2.0 16V 4X4 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022129-5",
    "vendido": false
  },
  {
    "veiculo": "Lancer GT 2.0 16V Aut.(By Armura-Blind.)",
    "marca": "Mitsubishi",
    "cod_fipe": "022143-0",
    "vendido": false
  },
  {
    "veiculo": "Lancer GTi Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022012-4",
    "vendido": false
  },
  {
    "veiculo": "Lancer HL 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022138-4",
    "vendido": false
  },
  {
    "veiculo": "Lancer HL 2.0 16V Aut.(By Armura-Blind.)",
    "marca": "Mitsubishi",
    "cod_fipe": "022144-9",
    "vendido": false
  },
  {
    "veiculo": "Lancer HLE 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022137-6",
    "vendido": false
  },
  {
    "veiculo": "Lancer HLE 2.0 16V Aut.(By Armura-Blind)",
    "marca": "Mitsubishi",
    "cod_fipe": "022145-7",
    "vendido": false
  },
  {
    "veiculo": "Lancer HL-T 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022148-1",
    "vendido": false
  },
  {
    "veiculo": "Lancer LS 1.8",
    "marca": "Mitsubishi",
    "cod_fipe": "022037-0",
    "vendido": false
  },
  {
    "veiculo": "Lancer Sport Ralliart 2.0 16V TB Int. 5p",
    "marca": "Mitsubishi",
    "cod_fipe": "022119-8",
    "vendido": false
  },
  {
    "veiculo": "Mirage ES",
    "marca": "Mitsubishi",
    "cod_fipe": "022034-5",
    "vendido": false
  },
  {
    "veiculo": "Mirage GS 16V/ GLSi1.6",
    "marca": "Mitsubishi",
    "cod_fipe": "022035-3",
    "vendido": false
  },
  {
    "veiculo": "Mirage LS",
    "marca": "Mitsubishi",
    "cod_fipe": "022033-7",
    "vendido": false
  },
  {
    "veiculo": "Montero 2.8 Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022046-9",
    "vendido": false
  },
  {
    "veiculo": "OUTLANDER 2.0 16V 160cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022116-3",
    "vendido": false
  },
  {
    "veiculo": "OUTLANDER 2.2 165cv Diesel Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022139-2",
    "vendido": false
  },
  {
    "veiculo": "OUTLANDER 2.4 16V 170cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022108-2",
    "vendido": false
  },
  {
    "veiculo": "OUTLANDER 3.0/ GT 3.0 V6 Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022101-5",
    "vendido": false
  },
  {
    "veiculo": "OUTLANDER PHEV (Hybrid) 2.0 16V 4x4 Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022136-8",
    "vendido": false
  },
  {
    "veiculo": "Pajero 3.2 4x4 T.I. Dies. 5p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022132-5",
    "vendido": false
  },
  {
    "veiculo": "Pajero DAKAR 3.2 4x4 T.I. Dies. 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022110-4",
    "vendido": false
  },
  {
    "veiculo": "Pajero DAKAR 3.2 4x4 T.I. Dies. 5p Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022111-2",
    "vendido": false
  },
  {
    "veiculo": "Pajero DAKAR HPE 3.2 4x4 T.I Dies 5p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022127-9",
    "vendido": false
  },
  {
    "veiculo": "Pajero DAKAR/HPE 3.5 4x4 Flex 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022118-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero Evolution 4x4 3.5 V6",
    "marca": "Mitsubishi",
    "cod_fipe": "022048-5",
    "vendido": false
  },
  {
    "veiculo": "Pajero Full GLS/GLS/PKHPE 3.2 Dies.TI 5p",
    "marca": "Mitsubishi",
    "cod_fipe": "022106-6",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 2.8 Diesel Turbo Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022054-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 2.8 Diesel Turbo Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022014-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.0 V6 2p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022061-2",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.0 V6 2p Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022038-8",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.0 V6 4p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022055-8",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.0 V6 4p Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022047-7",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.5 V6 2p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022022-1",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.5 V6 2p Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022021-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.5 V6 4p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022020-5",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.5 V6 4p Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022062-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.5 V6 Top 2p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022039-6",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS 3.5 V6 Top 4p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022040-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS Full 3.8 V6 250cv 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022098-1",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS HPE/HPE Full 3.8 233cv 3p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022082-5",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLS HPE/HPE Full 3.8 233cv 5p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022083-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLX 2.8 Diesel 4p Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022016-7",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLX 3.0 V6 4p Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022015-9",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLZ 2.8 4x4 Turbo Diesel",
    "marca": "Mitsubishi",
    "cod_fipe": "022049-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero GLZ 3.0 4x4 V6",
    "marca": "Mitsubishi",
    "cod_fipe": "022050-7",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE 3.2 4x4 T.I. Dies. 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022133-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE 3.5 4x4 Flex 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022134-1",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE Full 3.2 4x4 T.I.Dies. 5p Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022107-4",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE Full 3.2 4x4 T.I.Dies.3p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022088-4",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE Full 3.8 V6 250cv 3p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022099-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE Full 3.8 V6 250cv 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022100-7",
    "vendido": false
  },
  {
    "veiculo": "Pajero HPE-S 3.2 4x4 T.I.Diesel 5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022147-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero iO Aut",
    "marca": "Mitsubishi",
    "cod_fipe": "022024-8",
    "vendido": false
  },
  {
    "veiculo": "Pajero iO Mec",
    "marca": "Mitsubishi",
    "cod_fipe": "022023-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero iO SE 1.8 16V Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022065-5",
    "vendido": false
  },
  {
    "veiculo": "Pajero iO SE 1.8 16V Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022067-1",
    "vendido": false
  },
  {
    "veiculo": "Pajero OUTDOOR 3.2 4x4 T.I. Dies.5p Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022157-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport 2.8 4x4 Diesel Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022058-2",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport 2.8 4x4 Diesel Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022057-4",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport 3.0 4x2 V6 Mec./Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022018-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport 3.0 4x4 V6 Mec./Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022019-1",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport 3.5 V6 Flex 4x4 Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022109-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport HPE 2.5 4x4 Diesel Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022090-6",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport HPE 2.5 4x4 Diesel Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022091-4",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport HPE 3.5 4x4 200cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022089-2",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport SE 3.0 4x2 V6 177cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022073-6",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport SE/ HPE 2.8 4x4 Diesel Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022066-3",
    "vendido": false
  },
  {
    "veiculo": "Pajero Sport SE/ HPE 3.0 4x4 177cv Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022064-7",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 2.0 Blind. 16V 131cv 4x4 Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022087-6",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 2.0 Blind. 16V 131cv 4x4 Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022086-8",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 2.0 Flex 16V 4X2 Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022122-8",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 2.0 Flex 16V 4X2 Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022121-0",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 2.0/ 2.0 Flex 16V 4x4 Aut.",
    "marca": "Mitsubishi",
    "cod_fipe": "022075-2",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 2.0/ 2.0 Flex 16V 4x4 Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022074-4",
    "vendido": false
  },
  {
    "veiculo": "Pajero TR4 GLS 2.0 Flex 16V 4x4 Mec.",
    "marca": "Mitsubishi",
    "cod_fipe": "022105-8",
    "vendido": false
  },
  {
    "veiculo": "Space Wagon GLS 2.0",
    "marca": "Mitsubishi",
    "cod_fipe": "022052-3",
    "vendido": false
  },
  {
    "veiculo": "Space Wagon GLS 2.4",
    "marca": "Mitsubishi",
    "cod_fipe": "022053-1",
    "vendido": false
  },
  {
    "veiculo": "Space Wagon GLXi 2.4 ( Nova Série )",
    "marca": "Mitsubishi",
    "cod_fipe": "022051-5",
    "vendido": false
  },
  {
    "veiculo": "Space Wagon/ Glxi 2.4",
    "marca": "Mitsubishi",
    "cod_fipe": "022017-5",
    "vendido": false
  },
  {
    "veiculo": "Picape BG-Truck CD Turbo Diesel",
    "marca": "Miura",
    "cod_fipe": "049001-6",
    "vendido": false
  },
  {
    "veiculo": "350Z 3.5 V6 280cv/ 312cv 2p",
    "marca": "Nissan",
    "cod_fipe": "023051-0",
    "vendido": false
  },
  {
    "veiculo": "Altima GXE 2.4 16V",
    "marca": "Nissan",
    "cod_fipe": "023020-0",
    "vendido": false
  },
  {
    "veiculo": "Altima SE 2.4 16V",
    "marca": "Nissan",
    "cod_fipe": "023021-9",
    "vendido": false
  },
  {
    "veiculo": "ALTIMA SL 2.5 16V 4p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023124-0",
    "vendido": false
  },
  {
    "veiculo": "AX 6.5D Turbo Diesel",
    "marca": "Nissan",
    "cod_fipe": "023022-7",
    "vendido": false
  },
  {
    "veiculo": "D-21 Pick-Up CD 4x2/4x4 2.7 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023024-3",
    "vendido": false
  },
  {
    "veiculo": "D-21 Pick-Up CS 4x2/4x4 2.7 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023023-5",
    "vendido": false
  },
  {
    "veiculo": "Frontier AX 3.2 CD Diesel",
    "marca": "Nissan",
    "cod_fipe": "023012-0",
    "vendido": false
  },
  {
    "veiculo": "Frontier AX CD 4x4 2.5 TB Interc. Diesel",
    "marca": "Nissan",
    "cod_fipe": "023041-3",
    "vendido": false
  },
  {
    "veiculo": "Frontier DX 3.2 CD Diesel",
    "marca": "Nissan",
    "cod_fipe": "023011-1",
    "vendido": false
  },
  {
    "veiculo": "Frontier LE ATTACK CD 4x4 2.5 TB Die.Aut",
    "marca": "Nissan",
    "cod_fipe": "023102-9",
    "vendido": false
  },
  {
    "veiculo": "Frontier LE CD 4x4 2.5 TB dies.(Import.)",
    "marca": "Nissan",
    "cod_fipe": "023059-6",
    "vendido": false
  },
  {
    "veiculo": "Frontier LE CD 4x4 2.5 TB Diesel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023080-4",
    "vendido": false
  },
  {
    "veiculo": "Frontier LE CD 4x4 2.5 TB Diesel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023079-0",
    "vendido": false
  },
  {
    "veiculo": "Frontier PLATINUM CD 4x4 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023125-8",
    "vendido": false
  },
  {
    "veiculo": "Frontier S CD 4x2 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023121-5",
    "vendido": false
  },
  {
    "veiculo": "Frontier S CD 4x4 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023122-3",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE ATTACK CD 4x2 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023100-2",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE ATTACK CD 4x4 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023101-0",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE Serrana CD 4x4 2.8 TB Dies",
    "marca": "Nissan",
    "cod_fipe": "023052-9",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE Vibe CD 2.8 TDI Dies.",
    "marca": "Nissan",
    "cod_fipe": "023069-3",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE/ SE ONE CD 4x2 2.8 TDI Dies",
    "marca": "Nissan",
    "cod_fipe": "023046-4",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE/SE Strik CD 4x2 2.5 TB Dies.",
    "marca": "Nissan",
    "cod_fipe": "023077-4",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE/SE Strik CD 4x4 2.5 TB Dies.",
    "marca": "Nissan",
    "cod_fipe": "023078-2",
    "vendido": false
  },
  {
    "veiculo": "Frontier SE/SE Strik/ONE CD 4x4 2.8 Dies",
    "marca": "Nissan",
    "cod_fipe": "023047-2",
    "vendido": false
  },
  {
    "veiculo": "Frontier SEL CD 4x4 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023070-7",
    "vendido": false
  },
  {
    "veiculo": "Frontier SEL CD 4x4 2.5 TB Diesel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023071-5",
    "vendido": false
  },
  {
    "veiculo": "Frontier SL CD 4x4 2.5TB Diesel Aut ",
    "marca": "Nissan",
    "cod_fipe": "023118-5",
    "vendido": false
  },
  {
    "veiculo": "Frontier SV AT. CD 4x4 2.5 TB Dies. Aut.",
    "marca": "Nissan",
    "cod_fipe": "023128-2",
    "vendido": false
  },
  {
    "veiculo": "Frontier SV AT.CD 4x4 2.5 TB Diesel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023117-7",
    "vendido": false
  },
  {
    "veiculo": "Frontier SV ATTACK CD 4x2 2.5 TB Diesel ",
    "marca": "Nissan",
    "cod_fipe": "023116-9",
    "vendido": false
  },
  {
    "veiculo": "Frontier XE  CD 4x4 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023081-2",
    "vendido": false
  },
  {
    "veiculo": "Frontier XE ATTACK CD 2.8 TDI Diesel",
    "marca": "Nissan",
    "cod_fipe": "023056-1",
    "vendido": false
  },
  {
    "veiculo": "Frontier XE CD 4x2 2.5 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023076-6",
    "vendido": false
  },
  {
    "veiculo": "Frontier XE CS 4x2 2.8 TB Interc. Dies.",
    "marca": "Nissan",
    "cod_fipe": "023048-0",
    "vendido": false
  },
  {
    "veiculo": "Frontier XE/ XE TIT. CD 4x2 2.8 TDI Dies",
    "marca": "Nissan",
    "cod_fipe": "023044-8",
    "vendido": false
  },
  {
    "veiculo": "Frontier XE/ XE TIT. CD 4x4 2.8 TDI Dies",
    "marca": "Nissan",
    "cod_fipe": "023045-6",
    "vendido": false
  },
  {
    "veiculo": "GT-R 3.8 V6 BiTurbo Aut.",
    "marca": "Nissan",
    "cod_fipe": "023151-7",
    "vendido": false
  },
  {
    "veiculo": "Infinit 3.0",
    "marca": "Nissan",
    "cod_fipe": "023025-1",
    "vendido": false
  },
  {
    "veiculo": "KICKS Rio 2016 1.6 16V FlexStar 5p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023148-7",
    "vendido": false
  },
  {
    "veiculo": "KICKS SL 1.6 16V FlexStar 5p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023149-5",
    "vendido": false
  },
  {
    "veiculo": "KICKS SV Limited 1.6 16V Flex 5p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023152-5",
    "vendido": false
  },
  {
    "veiculo": "King-Cab SE 4x4 3.0 V6",
    "marca": "Nissan",
    "cod_fipe": "023026-0",
    "vendido": false
  },
  {
    "veiculo": "LIVINA 1.6 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023082-0",
    "vendido": false
  },
  {
    "veiculo": "LIVINA 1.8 16V Flex Fuel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023084-7",
    "vendido": false
  },
  {
    "veiculo": "LIVINA GRAND 1.8 16V Flex Fuel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023087-1",
    "vendido": false
  },
  {
    "veiculo": "LIVINA GRAND 1.8 16V Flex Fuel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023086-3",
    "vendido": false
  },
  {
    "veiculo": "LIVINA GRAND S 1.8 16V Flex Fuel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023096-0",
    "vendido": false
  },
  {
    "veiculo": "LIVINA GRAND S 1.8 16V Flex Fuel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023097-9",
    "vendido": false
  },
  {
    "veiculo": "LIVINA GRAND SL 1.8 16V Flex Fuel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023089-8",
    "vendido": false
  },
  {
    "veiculo": "LIVINA GRAND SL 1.8 16V Flex Fuel Mec",
    "marca": "Nissan",
    "cod_fipe": "023088-0",
    "vendido": false
  },
  {
    "veiculo": "LIVINA NIGHT&DAY 1.6 16V Flex Fuel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023099-5",
    "vendido": false
  },
  {
    "veiculo": "LIVINA S 1.6 16V Flex Fuel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023093-6",
    "vendido": false
  },
  {
    "veiculo": "LIVINA S 1.8 16V Flex Fuel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023094-4",
    "vendido": false
  },
  {
    "veiculo": "LIVINA SL 1.6 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023083-9",
    "vendido": false
  },
  {
    "veiculo": "LIVINA SL 1.8 16V Flex Fuel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023085-5",
    "vendido": false
  },
  {
    "veiculo": "LIVINA X-GEAR 1.6 16V Flex Fuel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023090-1",
    "vendido": false
  },
  {
    "veiculo": "LIVINA X-GEAR S 1.6 16V Flex Fuel",
    "marca": "Nissan",
    "cod_fipe": "023095-2",
    "vendido": false
  },
  {
    "veiculo": "LIVINA X-GEAR SL 1.6 16V Flex Fuel Mec.",
    "marca": "Nissan",
    "cod_fipe": "023091-0",
    "vendido": false
  },
  {
    "veiculo": "LIVINA X-GEAR SL/X-GEAR 1.8 Flex F. Aut.",
    "marca": "Nissan",
    "cod_fipe": "023092-8",
    "vendido": false
  },
  {
    "veiculo": "MARCH 1.0 12V Flex 5p",
    "marca": "Nissan",
    "cod_fipe": "023134-7",
    "vendido": false
  },
  {
    "veiculo": "MARCH 1.0 12V FlexStart 5p",
    "marca": "Nissan",
    "cod_fipe": "023146-0",
    "vendido": false
  },
  {
    "veiculo": "MARCH 1.0 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023105-3",
    "vendido": false
  },
  {
    "veiculo": "MARCH Rio2016 1.0 Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023119-3",
    "vendido": false
  },
  {
    "veiculo": "MARCH Rio2016 1.6 Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023120-7",
    "vendido": false
  },
  {
    "veiculo": "MARCH S 1.0 12V Flex 5p",
    "marca": "Nissan",
    "cod_fipe": "023129-0",
    "vendido": false
  },
  {
    "veiculo": "MARCH S 1.0 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023104-5",
    "vendido": false
  },
  {
    "veiculo": "MARCH S 1.6 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023108-8",
    "vendido": false
  },
  {
    "veiculo": "MARCH S 1.6 16V FlexStart 5p",
    "marca": "Nissan",
    "cod_fipe": "023150-9",
    "vendido": false
  },
  {
    "veiculo": "MARCH SL 1.6 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023127-4",
    "vendido": false
  },
  {
    "veiculo": "MARCH SL 1.6 16V FlexStart 5p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023139-8",
    "vendido": false
  },
  {
    "veiculo": "MARCH SL 1.6 16V FlexStart 5p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023147-9",
    "vendido": false
  },
  {
    "veiculo": "MARCH SR 1.6 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023110-0",
    "vendido": false
  },
  {
    "veiculo": "MARCH SV 1.0 12V Flex 5p",
    "marca": "Nissan",
    "cod_fipe": "023130-4",
    "vendido": false
  },
  {
    "veiculo": "MARCH SV 1.0 16V Flex Fuel 5p",
    "marca": "Nissan",
    "cod_fipe": "023126-6",
    "vendido": false
  },
  {
    "veiculo": "MARCH SV 1.6 16V Flex Fuel",
    "marca": "Nissan",
    "cod_fipe": "023109-6",
    "vendido": false
  },
  {
    "veiculo": "MARCH SV 1.6 16V FlexStart 5p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023143-6",
    "vendido": false
  },
  {
    "veiculo": "MARCH SV 1.6 16V FlexStart 5p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023145-2",
    "vendido": false
  },
  {
    "veiculo": "Maxima 30G/ GLE 3.0 V6 24V",
    "marca": "Nissan",
    "cod_fipe": "023013-8",
    "vendido": false
  },
  {
    "veiculo": "Maxima 30GV  Limited 3.0 V6 24V",
    "marca": "Nissan",
    "cod_fipe": "023038-3",
    "vendido": false
  },
  {
    "veiculo": "Maxima 30GV/30GV Aero/ GV 3.0 V6 24V",
    "marca": "Nissan",
    "cod_fipe": "023009-0",
    "vendido": false
  },
  {
    "veiculo": "Maxima 30J",
    "marca": "Nissan",
    "cod_fipe": "023010-3",
    "vendido": false
  },
  {
    "veiculo": "Maxima GXE 3.0",
    "marca": "Nissan",
    "cod_fipe": "023015-4",
    "vendido": false
  },
  {
    "veiculo": "Maxima SE 3.0 V6",
    "marca": "Nissan",
    "cod_fipe": "023027-8",
    "vendido": false
  },
  {
    "veiculo": "Micra 1.0 ",
    "marca": "Nissan",
    "cod_fipe": "023028-6",
    "vendido": false
  },
  {
    "veiculo": "MURANO SE 3.5 V6 24V 231cv Aut",
    "marca": "Nissan",
    "cod_fipe": "023058-8",
    "vendido": false
  },
  {
    "veiculo": "NX 2000",
    "marca": "Nissan",
    "cod_fipe": "023016-2",
    "vendido": false
  },
  {
    "veiculo": "NX 2000 Targa 2.0",
    "marca": "Nissan",
    "cod_fipe": "023029-4",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder LE 2.5 16V TDI Diesel Aut",
    "marca": "Nissan",
    "cod_fipe": "023054-5",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder LE 4.0 V6 24V 266cv Aut",
    "marca": "Nissan",
    "cod_fipe": "023055-3",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE 2.5 16V TDI Diesel Aut.",
    "marca": "Nissan",
    "cod_fipe": "023073-1",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE 3.3 V6 12V",
    "marca": "Nissan",
    "cod_fipe": "023040-5",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE 4.0 V6 24V 266cv Aut.",
    "marca": "Nissan",
    "cod_fipe": "023072-3",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE 4x4 3.0 12V Aut./Mec.",
    "marca": "Nissan",
    "cod_fipe": "023001-4",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE Luxo 3.3 V6 12V",
    "marca": "Nissan",
    "cod_fipe": "023039-1",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE Luxo 3.5 V6 24V 243cv",
    "marca": "Nissan",
    "cod_fipe": "023043-0",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder SE Titanium 3.3 V6 12V",
    "marca": "Nissan",
    "cod_fipe": "023019-7",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder XE 2.7 TB Diesel",
    "marca": "Nissan",
    "cod_fipe": "023042-1",
    "vendido": false
  },
  {
    "veiculo": "Pathfinder XE 4x4",
    "marca": "Nissan",
    "cod_fipe": "023003-0",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up CD AX/ DX 4x4 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023004-9",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up CS DX 4x4 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023005-7",
    "vendido": false
  },
  {
    "veiculo": "Pick-Up King Cab DX 2.7 4x2 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023006-5",
    "vendido": false
  },
  {
    "veiculo": "Primera GXE 2.0 16V",
    "marca": "Nissan",
    "cod_fipe": "023014-6",
    "vendido": false
  },
  {
    "veiculo": "Quest GXE/ GLE/ SER",
    "marca": "Nissan",
    "cod_fipe": "023007-3",
    "vendido": false
  },
  {
    "veiculo": "Quest XE 3.0 V6",
    "marca": "Nissan",
    "cod_fipe": "023030-8",
    "vendido": false
  },
  {
    "veiculo": "Sentra 2.0/ 2.0 Flex Fuel 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023061-8",
    "vendido": false
  },
  {
    "veiculo": "Sentra 2.0/ 2.0 Flex Fuel 16V Mec.",
    "marca": "Nissan",
    "cod_fipe": "023060-0",
    "vendido": false
  },
  {
    "veiculo": "Sentra GLE",
    "marca": "Nissan",
    "cod_fipe": "023037-5",
    "vendido": false
  },
  {
    "veiculo": "Sentra GSX/ EX",
    "marca": "Nissan",
    "cod_fipe": "023008-1",
    "vendido": false
  },
  {
    "veiculo": "Sentra GXE/ SER",
    "marca": "Nissan",
    "cod_fipe": "023036-7",
    "vendido": false
  },
  {
    "veiculo": "Sentra S 2.0 FlexStart 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023135-5",
    "vendido": false
  },
  {
    "veiculo": "Sentra S 2.0/ 2.0 Flex Fuel 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023063-4",
    "vendido": false
  },
  {
    "veiculo": "Sentra S 2.0/ 2.0 Flex Fuel 16V Mec.",
    "marca": "Nissan",
    "cod_fipe": "023062-6",
    "vendido": false
  },
  {
    "veiculo": "Sentra SE 2.0 Flex 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023115-0",
    "vendido": false
  },
  {
    "veiculo": "Sentra SL 2.0 FlexStart 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023136-3",
    "vendido": false
  },
  {
    "veiculo": "Sentra SL 2.0/ 2.0 Flex Fuel 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023064-2",
    "vendido": false
  },
  {
    "veiculo": "Sentra SR 2.0 Flex Fuel 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023106-1",
    "vendido": false
  },
  {
    "veiculo": "Sentra SR 2.0 Flex Fuel 16V Mec.",
    "marca": "Nissan",
    "cod_fipe": "023107-0",
    "vendido": false
  },
  {
    "veiculo": "Sentra SV 2.0 FlexStart 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023123-1",
    "vendido": false
  },
  {
    "veiculo": "Sentra UNIQUE 2.0 Flex Fuel 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023103-7",
    "vendido": false
  },
  {
    "veiculo": "Stanza XE 2.4 12V",
    "marca": "Nissan",
    "cod_fipe": "023031-6",
    "vendido": false
  },
  {
    "veiculo": "SX 240 2.4",
    "marca": "Nissan",
    "cod_fipe": "023032-4",
    "vendido": false
  },
  {
    "veiculo": "Terrano II SE 2.7 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023033-2",
    "vendido": false
  },
  {
    "veiculo": "Terrano II SLX 2.7 Diesel",
    "marca": "Nissan",
    "cod_fipe": "023034-0",
    "vendido": false
  },
  {
    "veiculo": "TIIDA S 1.8/1.8 Flex 16V  Mec.",
    "marca": "Nissan",
    "cod_fipe": "023065-0",
    "vendido": false
  },
  {
    "veiculo": "TIIDA S 1.8/1.8 Flex 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023066-9",
    "vendido": false
  },
  {
    "veiculo": "TIIDA Sedan 1.8 16V Flex Fuel 4p",
    "marca": "Nissan",
    "cod_fipe": "023098-7",
    "vendido": false
  },
  {
    "veiculo": "TIIDA Sedan 1.8 16V Flex Fuel 4p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023114-2",
    "vendido": false
  },
  {
    "veiculo": "TIIDA SL 1.8/1.8 Flex 16V  Mec.",
    "marca": "Nissan",
    "cod_fipe": "023067-7",
    "vendido": false
  },
  {
    "veiculo": "TIIDA SL 1.8/1.8 Flex 16V Aut.",
    "marca": "Nissan",
    "cod_fipe": "023068-5",
    "vendido": false
  },
  {
    "veiculo": "VERSA 1.0 12V FlexStart 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023131-2",
    "vendido": false
  },
  {
    "veiculo": "VERSA S 1.0 12V FlexStart 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023132-0",
    "vendido": false
  },
  {
    "veiculo": "VERSA S 1.6 16V Flex Fuel 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023111-8",
    "vendido": false
  },
  {
    "veiculo": "VERSA S 1.6 16V FlexStart 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023142-8",
    "vendido": false
  },
  {
    "veiculo": "VERSA SL 1.6 16V Flex Fuel 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023113-4",
    "vendido": false
  },
  {
    "veiculo": "VERSA SL 1.6 16V FlexStart 4p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023140-1",
    "vendido": false
  },
  {
    "veiculo": "VERSA SL 1.6 16V FlexStart 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023138-0",
    "vendido": false
  },
  {
    "veiculo": "VERSA SV 1.6 16V Flex Fuel 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023112-6",
    "vendido": false
  },
  {
    "veiculo": "VERSA SV 1.6 16V FlexStart 4p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023144-4",
    "vendido": false
  },
  {
    "veiculo": "VERSA SV 1.6 16V FlexStart 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023137-1",
    "vendido": false
  },
  {
    "veiculo": "VERSA UNIQUE 1.6 16V Flex 4p Mec.",
    "marca": "Nissan",
    "cod_fipe": "023133-9",
    "vendido": false
  },
  {
    "veiculo": "VERSA UNIQUE 1.6 16V FlexStart 4p Aut.",
    "marca": "Nissan",
    "cod_fipe": "023141-0",
    "vendido": false
  },
  {
    "veiculo": "XTerra ECOTRIP 4x4 140cv 2.8 TB Int.Dies",
    "marca": "Nissan",
    "cod_fipe": "023057-0",
    "vendido": false
  },
  {
    "veiculo": "XTerra SE 4x4 2.8 132/140cv TB Int.Dies.",
    "marca": "Nissan",
    "cod_fipe": "023049-9",
    "vendido": false
  },
  {
    "veiculo": "XTerra XE 4x4 2.8 132cv TB Int. Diesel",
    "marca": "Nissan",
    "cod_fipe": "023050-2",
    "vendido": false
  },
  {
    "veiculo": "X-TRAIL GX 2.5 16V 180cv 5p",
    "marca": "Nissan",
    "cod_fipe": "023053-7",
    "vendido": false
  },
  {
    "veiculo": "X-TRAIL LE 2.0 16V 138cv Aut.",
    "marca": "Nissan",
    "cod_fipe": "023075-8",
    "vendido": false
  },
  {
    "veiculo": "X-TRAIL SE 2.0 16V 138cv Aut.",
    "marca": "Nissan",
    "cod_fipe": "023074-0",
    "vendido": false
  },
  {
    "veiculo": "ZX 300 3.0 BI-Turbo",
    "marca": "Nissan",
    "cod_fipe": "023035-9",
    "vendido": false
  },
  {
    "veiculo": "106 KID 1.0",
    "marca": "Peugeot",
    "cod_fipe": "024042-7",
    "vendido": false
  },
  {
    "veiculo": "106 Passion 1.0 3p",
    "marca": "Peugeot",
    "cod_fipe": "024028-1",
    "vendido": false
  },
  {
    "veiculo": "106 Passion 1.0 5p",
    "marca": "Peugeot",
    "cod_fipe": "024066-4",
    "vendido": false
  },
  {
    "veiculo": "106 Quiksilver 1.0 3p",
    "marca": "Peugeot",
    "cod_fipe": "024078-8",
    "vendido": false
  },
  {
    "veiculo": "106 Selection 1.0 3p",
    "marca": "Peugeot",
    "cod_fipe": "024026-5",
    "vendido": false
  },
  {
    "veiculo": "106 Selection 1.0 5p",
    "marca": "Peugeot",
    "cod_fipe": "024067-2",
    "vendido": false
  },
  {
    "veiculo": "106 Soleil 1.0 3p",
    "marca": "Peugeot",
    "cod_fipe": "024027-3",
    "vendido": false
  },
  {
    "veiculo": "106 Soleil 1.0 5p",
    "marca": "Peugeot",
    "cod_fipe": "024068-0",
    "vendido": false
  },
  {
    "veiculo": "106 XN 3p e 5p",
    "marca": "Peugeot",
    "cod_fipe": "024001-0",
    "vendido": false
  },
  {
    "veiculo": "106 XT",
    "marca": "Peugeot",
    "cod_fipe": "024002-8",
    "vendido": false
  },
  {
    "veiculo": "2008 Allure 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024211-0",
    "vendido": false
  },
  {
    "veiculo": "2008 Allure 1.6 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024210-1",
    "vendido": false
  },
  {
    "veiculo": "2008 Crossoway 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024227-6",
    "vendido": false
  },
  {
    "veiculo": "2008 Griffe 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024213-6",
    "vendido": false
  },
  {
    "veiculo": "2008 Griffe 1.6 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024212-8",
    "vendido": false
  },
  {
    "veiculo": "2008 Griffe 1.6 Turbo Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024214-4",
    "vendido": false
  },
  {
    "veiculo": "205 CJ Cabriolet",
    "marca": "Peugeot",
    "cod_fipe": "024064-8",
    "vendido": false
  },
  {
    "veiculo": "205 CTi Cabriolet 1.4",
    "marca": "Peugeot",
    "cod_fipe": "024065-6",
    "vendido": false
  },
  {
    "veiculo": "205 GTi 1.4",
    "marca": "Peugeot",
    "cod_fipe": "024055-9",
    "vendido": false
  },
  {
    "veiculo": "205 XSi/ Junior 1.4 3p",
    "marca": "Peugeot",
    "cod_fipe": "024003-6",
    "vendido": false
  },
  {
    "veiculo": "206 Allure 1.6 Flex 16V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024132-6",
    "vendido": false
  },
  {
    "veiculo": "206 Allure 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024133-4",
    "vendido": false
  },
  {
    "veiculo": "206 Automatic (feline)1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024134-2",
    "vendido": false
  },
  {
    "veiculo": "206 CC 1.6 16v 2p",
    "marca": "Peugeot",
    "cod_fipe": "024080-0",
    "vendido": false
  },
  {
    "veiculo": "206 Feline 1.4/ 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024104-0",
    "vendido": false
  },
  {
    "veiculo": "206 Holiday 1.4 8V 75cv 3p",
    "marca": "Peugeot",
    "cod_fipe": "024119-9",
    "vendido": false
  },
  {
    "veiculo": "206 Holiday 1.4 8V 75cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024120-2",
    "vendido": false
  },
  {
    "veiculo": "206 Holiday 1.6 Flex 16V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024121-0",
    "vendido": false
  },
  {
    "veiculo": "206 Holiday 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024122-9",
    "vendido": false
  },
  {
    "veiculo": "206 Moonlight 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024130-0",
    "vendido": false
  },
  {
    "veiculo": "206 Moonlight 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024131-8",
    "vendido": false
  },
  {
    "veiculo": "206 Passion 1.6",
    "marca": "Peugeot",
    "cod_fipe": "024030-3",
    "vendido": false
  },
  {
    "veiculo": "206 Passion 1.6 16v 110cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024088-5",
    "vendido": false
  },
  {
    "veiculo": "206 Presence 1.4/ 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024102-4",
    "vendido": false
  },
  {
    "veiculo": "206 Presence 1.4/ 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024103-2",
    "vendido": false
  },
  {
    "veiculo": "206 Rallye 1.6",
    "marca": "Peugeot",
    "cod_fipe": "024031-1",
    "vendido": false
  },
  {
    "veiculo": "206 Rallye 1.6/ 1.6 Flex 16v 110cv 3p",
    "marca": "Peugeot",
    "cod_fipe": "024089-3",
    "vendido": false
  },
  {
    "veiculo": "206 Select./Presence 1.6/1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024096-6",
    "vendido": false
  },
  {
    "veiculo": "206 Selection 1.6 16V 110cv 3p",
    "marca": "Peugeot",
    "cod_fipe": "024095-8",
    "vendido": false
  },
  {
    "veiculo": "206 Selection/ Sensation 1.0 16v 3p",
    "marca": "Peugeot",
    "cod_fipe": "024082-6",
    "vendido": false
  },
  {
    "veiculo": "206 Selection/ Sensation 1.0 16v 5p",
    "marca": "Peugeot",
    "cod_fipe": "024084-2",
    "vendido": false
  },
  {
    "veiculo": "206 Sensation 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024123-7",
    "vendido": false
  },
  {
    "veiculo": "206 Sensation 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024124-5",
    "vendido": false
  },
  {
    "veiculo": "206 Soleil 1.0 16v 5p",
    "marca": "Peugeot",
    "cod_fipe": "024085-0",
    "vendido": false
  },
  {
    "veiculo": "206 Soleil 1.6 16v 110cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024087-7",
    "vendido": false
  },
  {
    "veiculo": "206 Soleil 1.6 3p",
    "marca": "Peugeot",
    "cod_fipe": "024029-0",
    "vendido": false
  },
  {
    "veiculo": "206 Soleil 1.6 5p",
    "marca": "Peugeot",
    "cod_fipe": "024069-9",
    "vendido": false
  },
  {
    "veiculo": "206 Soleil/ Quiksilver 1.0 16v 3p",
    "marca": "Peugeot",
    "cod_fipe": "024081-8",
    "vendido": false
  },
  {
    "veiculo": "206 Soleil/ Quiksilver 1.6 16v 110cv 3p",
    "marca": "Peugeot",
    "cod_fipe": "024086-9",
    "vendido": false
  },
  {
    "veiculo": "206 SW Automatic (feline)1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024135-0",
    "vendido": false
  },
  {
    "veiculo": "206 SW ESCAPADE 1.6 16v Flex 5p",
    "marca": "Peugeot",
    "cod_fipe": "024129-6",
    "vendido": false
  },
  {
    "veiculo": "206 SW Feline 1.6/ 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024114-8",
    "vendido": false
  },
  {
    "veiculo": "206 SW Moonlight 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024144-0",
    "vendido": false
  },
  {
    "veiculo": "206 SW Presence 1.4/ 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024112-1",
    "vendido": false
  },
  {
    "veiculo": "206 SW Presence 1.6/1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024113-0",
    "vendido": false
  },
  {
    "veiculo": "206 Techno 1.0 16V 70cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024099-0",
    "vendido": false
  },
  {
    "veiculo": "206 Techno/ Feline 1.6/ 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024100-8",
    "vendido": false
  },
  {
    "veiculo": "207 Active 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024202-0",
    "vendido": false
  },
  {
    "veiculo": "207 Blue Lion 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024192-0",
    "vendido": false
  },
  {
    "veiculo": "207 QUIKSILVER 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024167-9",
    "vendido": false
  },
  {
    "veiculo": "207 QUIKSILVER 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024168-7",
    "vendido": false
  },
  {
    "veiculo": "207 QUIKSILVER 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024183-0",
    "vendido": false
  },
  {
    "veiculo": "207 Sed. Passion XR Sport 1.4 Flex 8V 4p",
    "marca": "Peugeot",
    "cod_fipe": "024156-3",
    "vendido": false
  },
  {
    "veiculo": "207 Sedan Active 1.4 Flex 8V 4p",
    "marca": "Peugeot",
    "cod_fipe": "024203-9",
    "vendido": false
  },
  {
    "veiculo": "207 Sedan Allure 1.4 Flex 8v 4p",
    "marca": "Peugeot",
    "cod_fipe": "024204-7",
    "vendido": false
  },
  {
    "veiculo": "207 Sedan Passion XR 1.4 Flex 8V 4p",
    "marca": "Peugeot",
    "cod_fipe": "024155-5",
    "vendido": false
  },
  {
    "veiculo": "207 Sedan Passion XS 1.6 Flex 16V 4p",
    "marca": "Peugeot",
    "cod_fipe": "024157-1",
    "vendido": false
  },
  {
    "veiculo": "207 Sedan Passion XS 1.6 Flex 16V 4p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024158-0",
    "vendido": false
  },
  {
    "veiculo": "207 SW ESCAPADE 1.6 16V Flex 5p",
    "marca": "Peugeot",
    "cod_fipe": "024159-8",
    "vendido": false
  },
  {
    "veiculo": "207 SW XR 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024152-0",
    "vendido": false
  },
  {
    "veiculo": "207 SW XR Sport 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024153-9",
    "vendido": false
  },
  {
    "veiculo": "207 SW XS 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024154-7",
    "vendido": false
  },
  {
    "veiculo": "207 X-Line 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024164-4",
    "vendido": false
  },
  {
    "veiculo": "207 X-Line 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024165-2",
    "vendido": false
  },
  {
    "veiculo": "207 XR 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024145-8",
    "vendido": false
  },
  {
    "veiculo": "207 XR 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024146-6",
    "vendido": false
  },
  {
    "veiculo": "207 XR Sport 1.4 Flex 8V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024147-4",
    "vendido": false
  },
  {
    "veiculo": "207 XR Sport 1.4 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024148-2",
    "vendido": false
  },
  {
    "veiculo": "207 XS 1.6 Flex 16V 3p",
    "marca": "Peugeot",
    "cod_fipe": "024149-0",
    "vendido": false
  },
  {
    "veiculo": "207 XS 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024150-4",
    "vendido": false
  },
  {
    "veiculo": "207 XS 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024151-2",
    "vendido": false
  },
  {
    "veiculo": "208 Active 1.2 Flex 12V 5p mec.",
    "marca": "Peugeot",
    "cod_fipe": "024219-5",
    "vendido": false
  },
  {
    "veiculo": "208 Active Pack 1.2 flex 12V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024220-9",
    "vendido": false
  },
  {
    "veiculo": "208 Active Pack 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024207-1",
    "vendido": false
  },
  {
    "veiculo": "208 Active/Active Pack 1.5 Flex 8V 5p ",
    "marca": "Peugeot",
    "cod_fipe": "024194-6",
    "vendido": false
  },
  {
    "veiculo": "208 Allure 1.2 Flex 12V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024221-7",
    "vendido": false
  },
  {
    "veiculo": "208 Allure 1.5 Flex 8V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024195-4",
    "vendido": false
  },
  {
    "veiculo": "208 Allure 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024215-2",
    "vendido": false
  },
  {
    "veiculo": "208 Allure inconcert 1.5 Flex 8V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024217-9",
    "vendido": false
  },
  {
    "veiculo": "208 Allure inconcert 1.6 Flex 16V 5p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024218-7",
    "vendido": false
  },
  {
    "veiculo": "208 Griffe 1.6 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024197-0",
    "vendido": false
  },
  {
    "veiculo": "208 Griffe 1.6 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024196-2",
    "vendido": false
  },
  {
    "veiculo": "208 GT 1.6 THP Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024223-3",
    "vendido": false
  },
  {
    "veiculo": "208 Premier 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024198-9",
    "vendido": false
  },
  {
    "veiculo": "208 Sport 1.6 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024222-5",
    "vendido": false
  },
  {
    "veiculo": "3008 Allure 1.6 Turbo 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024175-0",
    "vendido": false
  },
  {
    "veiculo": "3008 Griffe 1.6 Turbo 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024176-8",
    "vendido": false
  },
  {
    "veiculo": "3008 Roland Garros 1.6 Turbo 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024200-4",
    "vendido": false
  },
  {
    "veiculo": "306 Break Passion 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024032-0",
    "vendido": false
  },
  {
    "veiculo": "306 Cabriolet 1.8/ Mi 16V",
    "marca": "Peugeot",
    "cod_fipe": "024004-4",
    "vendido": false
  },
  {
    "veiculo": "306 Cabriolet 2.0",
    "marca": "Peugeot",
    "cod_fipe": "024005-2",
    "vendido": false
  },
  {
    "veiculo": "306 GTi 2.0 16V",
    "marca": "Peugeot",
    "cod_fipe": "024033-8",
    "vendido": false
  },
  {
    "veiculo": "306 Passion 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024040-0",
    "vendido": false
  },
  {
    "veiculo": "306 Passion Sedan 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024046-0",
    "vendido": false
  },
  {
    "veiculo": "306 Rallye 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024043-5",
    "vendido": false
  },
  {
    "veiculo": "306 S16 2.0 3p",
    "marca": "Peugeot",
    "cod_fipe": "024006-0",
    "vendido": false
  },
  {
    "veiculo": "306 Selection Hatch 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024038-9",
    "vendido": false
  },
  {
    "veiculo": "306 Selection Sedan 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024039-7",
    "vendido": false
  },
  {
    "veiculo": "306 Si/ SL 1.8",
    "marca": "Peugeot",
    "cod_fipe": "024044-3",
    "vendido": false
  },
  {
    "veiculo": "306 Soleil 1.8 16V  4p",
    "marca": "Peugeot",
    "cod_fipe": "024058-3",
    "vendido": false
  },
  {
    "veiculo": "306 Soleil 1.8 16V 2p",
    "marca": "Peugeot",
    "cod_fipe": "024057-5",
    "vendido": false
  },
  {
    "veiculo": "306 Soleil Break 1.8 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024077-0",
    "vendido": false
  },
  {
    "veiculo": "306 Soleil Hatch 1.8 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024076-1",
    "vendido": false
  },
  {
    "veiculo": "306 SR",
    "marca": "Peugeot",
    "cod_fipe": "024045-1",
    "vendido": false
  },
  {
    "veiculo": "306 XN 1.8",
    "marca": "Peugeot",
    "cod_fipe": "024041-9",
    "vendido": false
  },
  {
    "veiculo": "306 XR 1.8 / XR Break 1.8 16V",
    "marca": "Peugeot",
    "cod_fipe": "024047-8",
    "vendido": false
  },
  {
    "veiculo": "306 XS 1.6 3p/ ST 1.8i 4p",
    "marca": "Peugeot",
    "cod_fipe": "024007-9",
    "vendido": false
  },
  {
    "veiculo": "306 XSi 2.0 3/5p",
    "marca": "Peugeot",
    "cod_fipe": "024008-7",
    "vendido": false
  },
  {
    "veiculo": "307 CC 2.0 16V 138cv 2p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024110-5",
    "vendido": false
  },
  {
    "veiculo": "307 CC 2.0 16V 2p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024111-3",
    "vendido": false
  },
  {
    "veiculo": "307 Feline 2.0/ 2.0 Flex 16V 5p Mec",
    "marca": "Peugeot",
    "cod_fipe": "024105-9",
    "vendido": false
  },
  {
    "veiculo": "307 Feline/Griff/Premi. 2.0 Flex 5p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024106-7",
    "vendido": false
  },
  {
    "veiculo": "307 MILLESIM200 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024174-1",
    "vendido": false
  },
  {
    "veiculo": "307 Passion 1.6 16V 110cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024091-5",
    "vendido": false
  },
  {
    "veiculo": "307 Passion 2.0 16V 138cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024125-3",
    "vendido": false
  },
  {
    "veiculo": "307 Presence 2.0 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024160-1",
    "vendido": false
  },
  {
    "veiculo": "307 Rallye 1.6 16V 110cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024092-3",
    "vendido": false
  },
  {
    "veiculo": "307 Rallye 2.0 16V 138cv 5p",
    "marca": "Peugeot",
    "cod_fipe": "024098-2",
    "vendido": false
  },
  {
    "veiculo": "307 Rallye 2.0 16V 138cv 5p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024107-5",
    "vendido": false
  },
  {
    "veiculo": "307 Sed. Feline 2.0/ 2.0 Flex 16V 4p Mec",
    "marca": "Peugeot",
    "cod_fipe": "024127-0",
    "vendido": false
  },
  {
    "veiculo": "307 Sed. Presence 1.6 Flex 16V 4p",
    "marca": "Peugeot",
    "cod_fipe": "024126-1",
    "vendido": false
  },
  {
    "veiculo": "307 Sed. Presence 2.0 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024161-0",
    "vendido": false
  },
  {
    "veiculo": "307 Sed.Feline/Griff 2.0/2.0 Flex 4p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024128-8",
    "vendido": false
  },
  {
    "veiculo": "307 Soleil/ Presence 1.6/1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024090-7",
    "vendido": false
  },
  {
    "veiculo": "307 SW 2.0 16V 138cv 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024097-4",
    "vendido": false
  },
  {
    "veiculo": "307 SW 2.0 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024109-1",
    "vendido": false
  },
  {
    "veiculo": "307 SW Allure 2.0 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024137-7",
    "vendido": false
  },
  {
    "veiculo": "307 SW Allure 2.0 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024136-9",
    "vendido": false
  },
  {
    "veiculo": "307 SW Feline 2.0 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024138-5",
    "vendido": false
  },
  {
    "veiculo": "308 Active 1.6 Flex 16V 5p mec.",
    "marca": "Peugeot",
    "cod_fipe": "024186-5",
    "vendido": false
  },
  {
    "veiculo": "308 Allure 1.6 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024187-3",
    "vendido": false
  },
  {
    "veiculo": "308 Allure 1.6 Turbo Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024225-0",
    "vendido": false
  },
  {
    "veiculo": "308 Allure 2.0 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024189-0",
    "vendido": false
  },
  {
    "veiculo": "308 Allure 2.0 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024188-1",
    "vendido": false
  },
  {
    "veiculo": "308 CC 1.6 Turbo 16V 2p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024191-1",
    "vendido": false
  },
  {
    "veiculo": "308 CC Roland Garros 1.6 Turbo16V 2p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024201-2",
    "vendido": false
  },
  {
    "veiculo": "308 Feline 2.0 Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024184-9",
    "vendido": false
  },
  {
    "veiculo": "308 Feline/Griffe 1.6 Turbo 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024193-8",
    "vendido": false
  },
  {
    "veiculo": "308 Griffe 1.6 Turbo Flex 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024216-0",
    "vendido": false
  },
  {
    "veiculo": "308 QUIKSILVER 1.6 Flex 16V 5p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024208-0",
    "vendido": false
  },
  {
    "veiculo": "308 Roland Garros 1.6 Turbo 16V 5P",
    "marca": "Peugeot",
    "cod_fipe": "024199-7",
    "vendido": false
  },
  {
    "veiculo": "405 GLi/ GL 1.6",
    "marca": "Peugeot",
    "cod_fipe": "024009-5",
    "vendido": false
  },
  {
    "veiculo": "405 GRi 1.8",
    "marca": "Peugeot",
    "cod_fipe": "024010-9",
    "vendido": false
  },
  {
    "veiculo": "405 Mi 2.0 16V",
    "marca": "Peugeot",
    "cod_fipe": "024048-6",
    "vendido": false
  },
  {
    "veiculo": "405 SRi 1.8",
    "marca": "Peugeot",
    "cod_fipe": "024011-7",
    "vendido": false
  },
  {
    "veiculo": "405 SRi 2.0",
    "marca": "Peugeot",
    "cod_fipe": "024012-5",
    "vendido": false
  },
  {
    "veiculo": "405 SRi Break",
    "marca": "Peugeot",
    "cod_fipe": "024013-3",
    "vendido": false
  },
  {
    "veiculo": "405 STi",
    "marca": "Peugeot",
    "cod_fipe": "024014-1",
    "vendido": false
  },
  {
    "veiculo": "406 Break 2.0 16V",
    "marca": "Peugeot",
    "cod_fipe": "024036-2",
    "vendido": false
  },
  {
    "veiculo": "406 Break 3.0 V6 24V",
    "marca": "Peugeot",
    "cod_fipe": "024059-1",
    "vendido": false
  },
  {
    "veiculo": "406 Break ST 2.0",
    "marca": "Peugeot",
    "cod_fipe": "024074-5",
    "vendido": false
  },
  {
    "veiculo": "406 Cupê 3.0 24V Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024070-2",
    "vendido": false
  },
  {
    "veiculo": "406 Cupê 3.0 24V Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024023-0",
    "vendido": false
  },
  {
    "veiculo": "406 Familiale 2.0 16V Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024071-0",
    "vendido": false
  },
  {
    "veiculo": "406 Familiale 2.0 16V Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024052-4",
    "vendido": false
  },
  {
    "veiculo": "406 Sedan 2.0 Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024072-9",
    "vendido": false
  },
  {
    "veiculo": "406 Sedan 2.0 Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024051-6",
    "vendido": false
  },
  {
    "veiculo": "406 Sedan 3.0 V6 24V",
    "marca": "Peugeot",
    "cod_fipe": "024075-3",
    "vendido": false
  },
  {
    "veiculo": "406 ST 2.0 16V  Mec",
    "marca": "Peugeot",
    "cod_fipe": "024035-4",
    "vendido": false
  },
  {
    "veiculo": "406 ST/ SVA 2.0 16V Aut",
    "marca": "Peugeot",
    "cod_fipe": "024020-6",
    "vendido": false
  },
  {
    "veiculo": "406 SV 2.0 16V",
    "marca": "Peugeot",
    "cod_fipe": "024037-0",
    "vendido": false
  },
  {
    "veiculo": "406 SVA 3.0 24V",
    "marca": "Peugeot",
    "cod_fipe": "024060-5",
    "vendido": false
  },
  {
    "veiculo": "406 SVE 3.0 24V",
    "marca": "Peugeot",
    "cod_fipe": "024025-7",
    "vendido": false
  },
  {
    "veiculo": "407 Sed. Allure 2.0 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024139-3",
    "vendido": false
  },
  {
    "veiculo": "407 Sed. Feline 3.0 V6 211cv 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024140-7",
    "vendido": false
  },
  {
    "veiculo": "407 Sed. Griffe 3.0 V6 211cv 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024141-5",
    "vendido": false
  },
  {
    "veiculo": "407 Sedan 2.0 16V  138cv 4p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024115-6",
    "vendido": false
  },
  {
    "veiculo": "407 Sedan 3.0 V6 211cv 4p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024116-4",
    "vendido": false
  },
  {
    "veiculo": "407 SW 2.0 16V 5p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024117-2",
    "vendido": false
  },
  {
    "veiculo": "407 SW 3.0 V6 211cv 5p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024118-0",
    "vendido": false
  },
  {
    "veiculo": "407 SW Allure 2.0 16V 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024142-3",
    "vendido": false
  },
  {
    "veiculo": "407 SW Feline 3.0 V6 211cv 5p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024143-1",
    "vendido": false
  },
  {
    "veiculo": "408 Sed. Business 1.6 TB Flex 16V 4p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024226-8",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Allure 2.0 Flex 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024177-6",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Allure 2.0 Flex 16V 4p Mec.",
    "marca": "Peugeot",
    "cod_fipe": "024178-4",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Feline 2.0 Flex 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024179-2",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Griffe 1.6 TB Flex 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024224-1",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Griffe 1.6 Turbo 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024185-7",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Griffe 2.0 Flex 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024180-6",
    "vendido": false
  },
  {
    "veiculo": "408 Sedan Limited 2.0 Flex 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024209-8",
    "vendido": false
  },
  {
    "veiculo": "504 GD 2.3 Diesel",
    "marca": "Peugeot",
    "cod_fipe": "024049-4",
    "vendido": false
  },
  {
    "veiculo": "504 GRD 2.3 Diesel",
    "marca": "Peugeot",
    "cod_fipe": "024050-8",
    "vendido": false
  },
  {
    "veiculo": "505 SR/ SRi/ SRX",
    "marca": "Peugeot",
    "cod_fipe": "024061-3",
    "vendido": false
  },
  {
    "veiculo": "508 THP 1.6 Turbo 16V 4p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024190-3",
    "vendido": false
  },
  {
    "veiculo": "605 SRi 3.0",
    "marca": "Peugeot",
    "cod_fipe": "024062-1",
    "vendido": false
  },
  {
    "veiculo": "605 SRi/ SLi 2.0",
    "marca": "Peugeot",
    "cod_fipe": "024015-0",
    "vendido": false
  },
  {
    "veiculo": "605 SV 3.0 Aut",
    "marca": "Peugeot",
    "cod_fipe": "024016-8",
    "vendido": false
  },
  {
    "veiculo": "605 SV-3 3.0 V6 24V",
    "marca": "Peugeot",
    "cod_fipe": "024053-2",
    "vendido": false
  },
  {
    "veiculo": "607 Sedan 3.0 V6",
    "marca": "Peugeot",
    "cod_fipe": "024079-6",
    "vendido": false
  },
  {
    "veiculo": "806 ST Turbo",
    "marca": "Peugeot",
    "cod_fipe": "024022-2",
    "vendido": false
  },
  {
    "veiculo": "806 SV 2.0 Turbo",
    "marca": "Peugeot",
    "cod_fipe": "024017-6",
    "vendido": false
  },
  {
    "veiculo": "807 2.0 16V 138cv 5p Aut",
    "marca": "Peugeot",
    "cod_fipe": "024108-3",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.3 Furg.TB Dies. Curto/Médio",
    "marca": "Peugeot",
    "cod_fipe": "024162-8",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.3 Furg.TB Dies. Méd/ LongoT.Alto",
    "marca": "Peugeot",
    "cod_fipe": "024163-6",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.3 LH Executive 15/16L TB Diesel",
    "marca": "Peugeot",
    "cod_fipe": "024181-4",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.3 Minibus 15/16L TB Diesel.",
    "marca": "Peugeot",
    "cod_fipe": "024166-0",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.5 Diesel",
    "marca": "Peugeot",
    "cod_fipe": "024021-4",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.8 10Lug. Diesel",
    "marca": "Peugeot",
    "cod_fipe": "024054-0",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.8 15L/16L Dies./TB Diesel",
    "marca": "Peugeot",
    "cod_fipe": "024073-7",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.8 Furg. TB Dies. Méd/LongoT.Alto",
    "marca": "Peugeot",
    "cod_fipe": "024094-0",
    "vendido": false
  },
  {
    "veiculo": "Boxer 2.8 Furgão Dies/ TB Dies.curto/méd",
    "marca": "Peugeot",
    "cod_fipe": "024093-1",
    "vendido": false
  },
  {
    "veiculo": "HOGGAR Active 1.4 Flex 8V 2p",
    "marca": "Peugeot",
    "cod_fipe": "024205-5",
    "vendido": false
  },
  {
    "veiculo": "HOGGAR Allure 1.4 Flex 8V 2p",
    "marca": "Peugeot",
    "cod_fipe": "024206-3",
    "vendido": false
  },
  {
    "veiculo": "HOGGAR ESCAPADE 1.6 Flex 16V 2p",
    "marca": "Peugeot",
    "cod_fipe": "024171-7",
    "vendido": false
  },
  {
    "veiculo": "HOGGAR X-Line 1.4 Flex 8V 2p",
    "marca": "Peugeot",
    "cod_fipe": "024169-5",
    "vendido": false
  },
  {
    "veiculo": "HOGGAR XR 1.4 Flex 8V 2p",
    "marca": "Peugeot",
    "cod_fipe": "024170-9",
    "vendido": false
  },
  {
    "veiculo": "Partner  VAN 1.6  Flex 16V  5p",
    "marca": "Peugeot",
    "cod_fipe": "024172-5",
    "vendido": false
  },
  {
    "veiculo": "Partner  VAN ESCAPADE 1.6 Flex 16V 5p",
    "marca": "Peugeot",
    "cod_fipe": "024173-3",
    "vendido": false
  },
  {
    "veiculo": "Partner Furgão 1.6 16V/ 1.6 16V Flex 3p",
    "marca": "Peugeot",
    "cod_fipe": "024101-6",
    "vendido": false
  },
  {
    "veiculo": "Partner Furgão 1.8 3p",
    "marca": "Peugeot",
    "cod_fipe": "024063-0",
    "vendido": false
  },
  {
    "veiculo": "RCZ 1.6 Turbo16v 2p Aut.",
    "marca": "Peugeot",
    "cod_fipe": "024182-2",
    "vendido": false
  },
  {
    "veiculo": "Gran Voyager LE 2.5",
    "marca": "Plymouth",
    "cod_fipe": "050001-1",
    "vendido": false
  },
  {
    "veiculo": "Sundance 2.5",
    "marca": "Plymouth",
    "cod_fipe": "050002-0",
    "vendido": false
  },
  {
    "veiculo": "Trans-AM 5.7 V8",
    "marca": "Pontiac",
    "cod_fipe": "051001-7",
    "vendido": false
  },
  {
    "veiculo": "Trans-Sport SE 3.1",
    "marca": "Pontiac",
    "cod_fipe": "051002-5",
    "vendido": false
  },
  {
    "veiculo": "718 Boxster 2.0 300cv",
    "marca": "Porsche",
    "cod_fipe": "035069-9",
    "vendido": false
  },
  {
    "veiculo": "718 Boxster S 2.5 350cv",
    "marca": "Porsche",
    "cod_fipe": "035070-2",
    "vendido": false
  },
  {
    "veiculo": "718 Cayman 2.0 300cv",
    "marca": "Porsche",
    "cod_fipe": "035084-2",
    "vendido": false
  },
  {
    "veiculo": "718 Cayman S 2.5 350cv",
    "marca": "Porsche",
    "cod_fipe": "035086-9",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4 Cabriolet 3.0 370cv",
    "marca": "Porsche",
    "cod_fipe": "035073-7",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4 Coupe 3.0 370cv",
    "marca": "Porsche",
    "cod_fipe": "035075-3",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4 GTS Coupé 3.8 24V (991)",
    "marca": "Porsche",
    "cod_fipe": "035066-4",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4 GTS Targa 3.8 24V (991)",
    "marca": "Porsche",
    "cod_fipe": "035068-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4S Cabriolet 3.0 420cv",
    "marca": "Porsche",
    "cod_fipe": "035080-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4S Cabriolet-4 3.6/3.8",
    "marca": "Porsche",
    "cod_fipe": "035026-5",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4S Coupe 3.0 420cv",
    "marca": "Porsche",
    "cod_fipe": "035078-8",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera 4S Coupé-4 3.6/3.8",
    "marca": "Porsche",
    "cod_fipe": "035023-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Cabriolet 3.0 370cv",
    "marca": "Porsche",
    "cod_fipe": "035074-5",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Cabriolet 3.4/ 3.6 Mec",
    "marca": "Porsche",
    "cod_fipe": "035003-6",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Cabriolet 3.4/ 3.6 Tiptronic",
    "marca": "Porsche",
    "cod_fipe": "035008-7",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Cabriolet-4 3.4 Mec",
    "marca": "Porsche",
    "cod_fipe": "035004-4",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Cabriolet-4 3.4 Tiptronic",
    "marca": "Porsche",
    "cod_fipe": "035018-4",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupé",
    "marca": "Porsche",
    "cod_fipe": "035001-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupe 3.0 370cv",
    "marca": "Porsche",
    "cod_fipe": "035076-1",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupé Black Edi. 3.6/3.4 24V",
    "marca": "Porsche",
    "cod_fipe": "035047-8",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupé GTS 3.8 24V 408cv",
    "marca": "Porsche",
    "cod_fipe": "035046-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupé Tiptronic",
    "marca": "Porsche",
    "cod_fipe": "035006-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupé-4 3.4/ 3.6",
    "marca": "Porsche",
    "cod_fipe": "035002-8",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Coupé-4 3.4/ 3.6 Tiptronic",
    "marca": "Porsche",
    "cod_fipe": "035007-9",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Evo Cabriolet",
    "marca": "Porsche",
    "cod_fipe": "035020-6",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Evo Cabriolet-4",
    "marca": "Porsche",
    "cod_fipe": "035022-2",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Evo Coupé",
    "marca": "Porsche",
    "cod_fipe": "035019-2",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera Evo Coupé-4",
    "marca": "Porsche",
    "cod_fipe": "035021-4",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera GT3 RS",
    "marca": "Porsche",
    "cod_fipe": "035082-6",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera GT3/ GT2 Street",
    "marca": "Porsche",
    "cod_fipe": "035009-5",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera GTS Cabriolet 3.8 24V (991)",
    "marca": "Porsche",
    "cod_fipe": "035065-6",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera GTS Coupé 3.8 24V (991)",
    "marca": "Porsche",
    "cod_fipe": "035064-8",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S 50th Coupé 3.8 24V(991)",
    "marca": "Porsche",
    "cod_fipe": "035059-1",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S Cabriolet 3.0 420cv",
    "marca": "Porsche",
    "cod_fipe": "035072-9",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S Cabriolet 3.8 24V",
    "marca": "Porsche",
    "cod_fipe": "035032-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S Cabriolet 3.8 24V (991)",
    "marca": "Porsche",
    "cod_fipe": "035050-8",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S Coupe 3.0 420cv",
    "marca": "Porsche",
    "cod_fipe": "035077-0",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S Coupé 3.8 24V",
    "marca": "Porsche",
    "cod_fipe": "035028-1",
    "vendido": false
  },
  {
    "veiculo": "911 Carrera S Coupé 3.8 24V (991)",
    "marca": "Porsche",
    "cod_fipe": "035049-4",
    "vendido": false
  },
  {
    "veiculo": "911 Targa 3.6",
    "marca": "Porsche",
    "cod_fipe": "035013-3",
    "vendido": false
  },
  {
    "veiculo": "911 Targa 4 3.0 370cv",
    "marca": "Porsche",
    "cod_fipe": "035079-6",
    "vendido": false
  },
  {
    "veiculo": "911 Targa 4S",
    "marca": "Porsche",
    "cod_fipe": "035036-2",
    "vendido": false
  },
  {
    "veiculo": "911 Targa 4S 3.0 420cv",
    "marca": "Porsche",
    "cod_fipe": "035081-8",
    "vendido": false
  },
  {
    "veiculo": "911 Turbo Cabriolet 3.6/3.8",
    "marca": "Porsche",
    "cod_fipe": "035029-0",
    "vendido": false
  },
  {
    "veiculo": "911 Turbo Coupé 3.6 / 3.8",
    "marca": "Porsche",
    "cod_fipe": "035014-1",
    "vendido": false
  },
  {
    "veiculo": "911 Turbo S Cabriolet 3.6/3.8 24V",
    "marca": "Porsche",
    "cod_fipe": "035031-1",
    "vendido": false
  },
  {
    "veiculo": "911 Turbo S Coupé 3.6/3.8 24V",
    "marca": "Porsche",
    "cod_fipe": "035030-3",
    "vendido": false
  },
  {
    "veiculo": "928 GTS 5.4 32V",
    "marca": "Porsche",
    "cod_fipe": "035016-8",
    "vendido": false
  },
  {
    "veiculo": "968 Cabriolet 3.0",
    "marca": "Porsche",
    "cod_fipe": "035005-2",
    "vendido": false
  },
  {
    "veiculo": "968 Coupé 3.0 16V",
    "marca": "Porsche",
    "cod_fipe": "035017-6",
    "vendido": false
  },
  {
    "veiculo": "Boxster  2.9 255cv",
    "marca": "Porsche",
    "cod_fipe": "035039-7",
    "vendido": false
  },
  {
    "veiculo": "Boxster 2.7 265cv",
    "marca": "Porsche",
    "cod_fipe": "035051-6",
    "vendido": false
  },
  {
    "veiculo": "Boxster GTS 3.4 330cv",
    "marca": "Porsche",
    "cod_fipe": "035057-5",
    "vendido": false
  },
  {
    "veiculo": "Boxster Mec.",
    "marca": "Porsche",
    "cod_fipe": "035015-0",
    "vendido": false
  },
  {
    "veiculo": "Boxster S",
    "marca": "Porsche",
    "cod_fipe": "035011-7",
    "vendido": false
  },
  {
    "veiculo": "Boxster S 3.4 310cv",
    "marca": "Porsche",
    "cod_fipe": "035038-9",
    "vendido": false
  },
  {
    "veiculo": "Boxster S 3.4 315cv",
    "marca": "Porsche",
    "cod_fipe": "035052-4",
    "vendido": false
  },
  {
    "veiculo": "Boxster S Tiptronic",
    "marca": "Porsche",
    "cod_fipe": "035012-5",
    "vendido": false
  },
  {
    "veiculo": "Boxster Spyder 3.4 320cv",
    "marca": "Porsche",
    "cod_fipe": "035044-3",
    "vendido": false
  },
  {
    "veiculo": "Boxster Spyder 3.8 375cv",
    "marca": "Porsche",
    "cod_fipe": "035071-0",
    "vendido": false
  },
  {
    "veiculo": "Boxster Tiptronic",
    "marca": "Porsche",
    "cod_fipe": "035010-9",
    "vendido": false
  },
  {
    "veiculo": "Cayenne GTS 3.6 Bi-Turbo 440cv",
    "marca": "Porsche",
    "cod_fipe": "035062-1",
    "vendido": false
  },
  {
    "veiculo": "Cayenne GTS 4.8 405/420cv",
    "marca": "Porsche",
    "cod_fipe": "035037-0",
    "vendido": false
  },
  {
    "veiculo": "Cayenne S 3.6 Bi-Turbo 420cv",
    "marca": "Porsche",
    "cod_fipe": "035063-0",
    "vendido": false
  },
  {
    "veiculo": "Cayenne S 4.5/4.8",
    "marca": "Porsche",
    "cod_fipe": "035024-9",
    "vendido": false
  },
  {
    "veiculo": "Cayenne S E-Hybrid 3.0 V6 416cv",
    "marca": "Porsche",
    "cod_fipe": "035085-0",
    "vendido": false
  },
  {
    "veiculo": "Cayenne Turbo 4.5/4.8",
    "marca": "Porsche",
    "cod_fipe": "035025-7",
    "vendido": false
  },
  {
    "veiculo": "Cayenne Turbo S 4.5/ 4.8 32V",
    "marca": "Porsche",
    "cod_fipe": "035035-4",
    "vendido": false
  },
  {
    "veiculo": "Cayenne V6 3.2/3.6 24V",
    "marca": "Porsche",
    "cod_fipe": "035027-3",
    "vendido": false
  },
  {
    "veiculo": "Cayman 2.7/ 2.9",
    "marca": "Porsche",
    "cod_fipe": "035034-6",
    "vendido": false
  },
  {
    "veiculo": "Cayman GT4 3.8 385cv",
    "marca": "Porsche",
    "cod_fipe": "035061-3",
    "vendido": false
  },
  {
    "veiculo": "Cayman GTS 3.4 340cv",
    "marca": "Porsche",
    "cod_fipe": "035058-3",
    "vendido": false
  },
  {
    "veiculo": "Cayman R 3.4 330cv",
    "marca": "Porsche",
    "cod_fipe": "035045-1",
    "vendido": false
  },
  {
    "veiculo": "Cayman S 3.4",
    "marca": "Porsche",
    "cod_fipe": "035033-8",
    "vendido": false
  },
  {
    "veiculo": "Macan 2.0 Turbo 237/252cv",
    "marca": "Porsche",
    "cod_fipe": "035060-5",
    "vendido": false
  },
  {
    "veiculo": "Macan GTS 3.0 Bi-Turbo 360cv",
    "marca": "Porsche",
    "cod_fipe": "035083-4",
    "vendido": false
  },
  {
    "veiculo": "Macan S 3.0 Bi-Turbo 340cv",
    "marca": "Porsche",
    "cod_fipe": "035055-9",
    "vendido": false
  },
  {
    "veiculo": "Macan Turbo 3.6 Bi-Turbo 400cv",
    "marca": "Porsche",
    "cod_fipe": "035056-7",
    "vendido": false
  },
  {
    "veiculo": "Panamera 3.6 V6 300cv/310cv",
    "marca": "Porsche",
    "cod_fipe": "035043-5",
    "vendido": false
  },
  {
    "veiculo": "Panamera 4S 4.8 400cv",
    "marca": "Porsche",
    "cod_fipe": "035041-9",
    "vendido": false
  },
  {
    "veiculo": "Panamera Edition 3.6 v6 310cv",
    "marca": "Porsche",
    "cod_fipe": "035067-2",
    "vendido": false
  },
  {
    "veiculo": "Panamera GT-S 4.8",
    "marca": "Porsche",
    "cod_fipe": "035053-2",
    "vendido": false
  },
  {
    "veiculo": "Panamera S 3.0 Bi-Turbo 420cv",
    "marca": "Porsche",
    "cod_fipe": "035054-0",
    "vendido": false
  },
  {
    "veiculo": "Panamera S 4.8 400cv",
    "marca": "Porsche",
    "cod_fipe": "035040-0",
    "vendido": false
  },
  {
    "veiculo": "Panamera Turbo 4.8 500cv/520cv",
    "marca": "Porsche",
    "cod_fipe": "035042-7",
    "vendido": false
  },
  {
    "veiculo": "Panamera Turbo S 4.8    ",
    "marca": "Porsche",
    "cod_fipe": "035048-6",
    "vendido": false
  },
  {
    "veiculo": "2500 LARAMIE  6.7 TDI  CD 4x4 Diesel",
    "marca": "RAM",
    "cod_fipe": "083001-1",
    "vendido": false
  },
  {
    "veiculo": "2500 LARAMIE TROPIV. 6.7 4x4 Diesel",
    "marca": "RAM",
    "cod_fipe": "083002-0",
    "vendido": false
  },
  {
    "veiculo": "LINK 1.3 16V 5p",
    "marca": "RELY",
    "cod_fipe": "084003-3",
    "vendido": false
  },
  {
    "veiculo": "PICK-UP Q22B CS 1.0 2p",
    "marca": "RELY",
    "cod_fipe": "084001-7",
    "vendido": false
  },
  {
    "veiculo": "PICK-UP Q22D CS 1.0 2p",
    "marca": "RELY",
    "cod_fipe": "084004-1",
    "vendido": false
  },
  {
    "veiculo": "PICK-UP Q22E CD 1.0 4p",
    "marca": "RELY",
    "cod_fipe": "084005-0",
    "vendido": false
  },
  {
    "veiculo": "VAN Q22 1.0 5p",
    "marca": "RELY",
    "cod_fipe": "084002-5",
    "vendido": false
  },
  {
    "veiculo": "19 16S/ RT 16V",
    "marca": "Renault",
    "cod_fipe": "025001-5",
    "vendido": false
  },
  {
    "veiculo": "19 RN",
    "marca": "Renault",
    "cod_fipe": "025002-3",
    "vendido": false
  },
  {
    "veiculo": "19 RT 1.8/ 1.8i",
    "marca": "Renault",
    "cod_fipe": "025003-1",
    "vendido": false
  },
  {
    "veiculo": "19 RT 1.8/ 1.8i Conv.",
    "marca": "Renault",
    "cod_fipe": "025031-7",
    "vendido": false
  },
  {
    "veiculo": "21 GTX 2.0",
    "marca": "Renault",
    "cod_fipe": "025020-1",
    "vendido": false
  },
  {
    "veiculo": "21 Nevada GTX 2.2",
    "marca": "Renault",
    "cod_fipe": "025033-3",
    "vendido": false
  },
  {
    "veiculo": "21 Nevada TXE 2.2",
    "marca": "Renault",
    "cod_fipe": "025008-2",
    "vendido": false
  },
  {
    "veiculo": "21 TXE/ TXi 2.2",
    "marca": "Renault",
    "cod_fipe": "025034-1",
    "vendido": false
  },
  {
    "veiculo": "Clio Auth. /AIR Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025099-6",
    "vendido": false
  },
  {
    "veiculo": "Clio Authentique 1.0 8V 3p",
    "marca": "Renault",
    "cod_fipe": "025081-3",
    "vendido": false
  },
  {
    "veiculo": "Clio Authentique 1.0/1.0 Hi-Power 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025082-1",
    "vendido": false
  },
  {
    "veiculo": "Clio Authentique Hi-Flex 1.0 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025111-9",
    "vendido": false
  },
  {
    "veiculo": "Clio Authentique Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025112-7",
    "vendido": false
  },
  {
    "veiculo": "Clio Authentique Hi-Flex 1.6 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025109-7",
    "vendido": false
  },
  {
    "veiculo": "Clio Campus Hi-Flex 1.0 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025150-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Campus Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025151-8",
    "vendido": false
  },
  {
    "veiculo": "Clio Dynamique 1.0/ 1.0 Hi-Power 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025090-2",
    "vendido": false
  },
  {
    "veiculo": "Clio Dynamique 1.6 16V 110cv 3p",
    "marca": "Renault",
    "cod_fipe": "025091-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Dynamique Hi-Flex 1.6 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025098-8",
    "vendido": false
  },
  {
    "veiculo": "Clio Expression 1.0 8V 60cv 3p",
    "marca": "Renault",
    "cod_fipe": "025085-6",
    "vendido": false
  },
  {
    "veiculo": "Clio Expression 1.0/1.0 Hi-Power 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025086-4",
    "vendido": false
  },
  {
    "veiculo": "Clio Expression Hi-Flex 1.0 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025113-5",
    "vendido": false
  },
  {
    "veiculo": "Clio Expression Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025114-3",
    "vendido": false
  },
  {
    "veiculo": "Clio GetUp Hi-Flex 1.0 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025121-6",
    "vendido": false
  },
  {
    "veiculo": "Clio GetUp Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025122-4",
    "vendido": false
  },
  {
    "veiculo": "Clio Hi-Flex 1.0 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025169-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025170-4",
    "vendido": false
  },
  {
    "veiculo": "Clio Hi-Flex 1.6 16V 3p",
    "marca": "Renault",
    "cod_fipe": "025095-3",
    "vendido": false
  },
  {
    "veiculo": "Clio Hi-Flex/ Expres. Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025096-1",
    "vendido": false
  },
  {
    "veiculo": "Clio Privilège Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025115-1",
    "vendido": false
  },
  {
    "veiculo": "Clio Privilège Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025100-3",
    "vendido": false
  },
  {
    "veiculo": "Clio RL / Yahoo/ Authent. 1.0 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025026-0",
    "vendido": false
  },
  {
    "veiculo": "Clio RL 1.6 3p/5p",
    "marca": "Renault",
    "cod_fipe": "025004-0",
    "vendido": false
  },
  {
    "veiculo": "Clio RL Alizé/ Authent. 1.6 16V 110cv 5p",
    "marca": "Renault",
    "cod_fipe": "025075-9",
    "vendido": false
  },
  {
    "veiculo": "Clio RL/ JP/Auth.1.0/1.0 Hi-Power 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025061-9",
    "vendido": false
  },
  {
    "veiculo": "Clio RN 1.6 3p (importado)",
    "marca": "Renault",
    "cod_fipe": "025021-0",
    "vendido": false
  },
  {
    "veiculo": "Clio RN 1.6 5p",
    "marca": "Renault",
    "cod_fipe": "025028-7",
    "vendido": false
  },
  {
    "veiculo": "Clio RN/ Expression 1.0 5p",
    "marca": "Renault",
    "cod_fipe": "025027-9",
    "vendido": false
  },
  {
    "veiculo": "Clio RN/ Expression 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025048-1",
    "vendido": false
  },
  {
    "veiculo": "Clio RN/Alizé/Expr./1.0 Hi-Power 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025054-6",
    "vendido": false
  },
  {
    "veiculo": "Clio RT 1.6 5p",
    "marca": "Renault",
    "cod_fipe": "025005-8",
    "vendido": false
  },
  {
    "veiculo": "Clio RT/ Privil. 1.0/1.0 Hi-Power 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025056-2",
    "vendido": false
  },
  {
    "veiculo": "Clio RT/ Privilège 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025049-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed RT/ Privilège/ Botic 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025051-1",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Alizé 1.6/ 1.6 Hi-Flex 16v 4p",
    "marca": "Renault",
    "cod_fipe": "025076-7",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Authentique Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025116-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Authentique Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025102-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Expression Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025117-8",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Hi-Flex/Exp.Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025097-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Privilège Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025118-6",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed. Privilège Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025101-1",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed.RL/Auth.1.0/1.0 Hi-Power 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025067-8",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed.RN/Alizé/Botic./Exp.1.0 Hi-Pow.",
    "marca": "Renault",
    "cod_fipe": "025055-4",
    "vendido": false
  },
  {
    "veiculo": "Clio Sed.RT/Privil.1.0/1.0 Hi-Pow.16V 4p",
    "marca": "Renault",
    "cod_fipe": "025057-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Sedan Authentique 1.6 16V 110cv 4p",
    "marca": "Renault",
    "cod_fipe": "025093-7",
    "vendido": false
  },
  {
    "veiculo": "Clio Sedan Egeus Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025123-2",
    "vendido": false
  },
  {
    "veiculo": "Clio Sedan Egeus Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025124-0",
    "vendido": false
  },
  {
    "veiculo": "Clio Sedan RN/ Expression 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025050-3",
    "vendido": false
  },
  {
    "veiculo": "Clio SI 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025053-8",
    "vendido": false
  },
  {
    "veiculo": "Clio Tech Run 1.0 16v 70cv 5p",
    "marca": "Renault",
    "cod_fipe": "025060-0",
    "vendido": false
  },
  {
    "veiculo": "DUSTER 1.6 Hi-Flex 16V Mec      ",
    "marca": "Renault",
    "cod_fipe": "025181-0",
    "vendido": false
  },
  {
    "veiculo": "DUSTER DAKAR 4x2 1.6 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025233-6",
    "vendido": false
  },
  {
    "veiculo": "DUSTER DAKAR 4x4 2.0 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025234-4",
    "vendido": false
  },
  {
    "veiculo": "DUSTER Dynamique 1.6 Hi-Flex 16V Mec. ",
    "marca": "Renault",
    "cod_fipe": "025183-6",
    "vendido": false
  },
  {
    "veiculo": "DUSTER Dynamique 2.0  Hi-Flex 16V Aut.      ",
    "marca": "Renault",
    "cod_fipe": "025185-2",
    "vendido": false
  },
  {
    "veiculo": "DUSTER Dynamique 2.0 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025184-4",
    "vendido": false
  },
  {
    "veiculo": "DUSTER Dynamique 4x4 2.0 Hi-Flex 16V Mec",
    "marca": "Renault",
    "cod_fipe": "025186-0",
    "vendido": false
  },
  {
    "veiculo": "DUSTER Expression 1.6 Hi-Flex 16V Mec.    ",
    "marca": "Renault",
    "cod_fipe": "025182-8",
    "vendido": false
  },
  {
    "veiculo": "DUSTER OROCH Dyna. 1.6 Hi-Flex 16V Mec",
    "marca": "Renault",
    "cod_fipe": "025231-0",
    "vendido": false
  },
  {
    "veiculo": "DUSTER OROCH Dyna. 2.0 Hi-Flex 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025240-9",
    "vendido": false
  },
  {
    "veiculo": "DUSTER OROCH Dyna. 2.0 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025232-8",
    "vendido": false
  },
  {
    "veiculo": "DUSTER OROCH Exp. 1.6 Hi-Flex 16V  Mec. ",
    "marca": "Renault",
    "cod_fipe": "025230-1",
    "vendido": false
  },
  {
    "veiculo": "DUSTER OUTDOOR 1.6 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025221-2",
    "vendido": false
  },
  {
    "veiculo": "DUSTER TECHROAD 1.6 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025191-7",
    "vendido": false
  },
  {
    "veiculo": "DUSTER TECHROAD 2.0 Hi-Flex 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025193-3",
    "vendido": false
  },
  {
    "veiculo": "DUSTER TECHROAD 2.0 Hi-Flex 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025192-5",
    "vendido": false
  },
  {
    "veiculo": "DUSTER TECHROAD 4X4 2.0 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025209-3",
    "vendido": false
  },
  {
    "veiculo": "Express 1.6/ RL 1.6",
    "marca": "Renault",
    "cod_fipe": "025012-0",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sed. Dyn. Plus 2.0 16V FLEX Aut.",
    "marca": "Renault",
    "cod_fipe": "025225-5",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sed. Dynamique 2.0 16V FLEX Mec.",
    "marca": "Renault",
    "cod_fipe": "025173-9",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sedan Dynamique 2.0 16V FLEX Aut",
    "marca": "Renault",
    "cod_fipe": "025174-7",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sedan Expres. 1.6 16V FLEX Mec.",
    "marca": "Renault",
    "cod_fipe": "025239-5",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sedan GT Line 2.0 Flex Aut.",
    "marca": "Renault",
    "cod_fipe": "025212-3",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sedan GT SPORT",
    "marca": "Renault",
    "cod_fipe": "025194-1",
    "vendido": false
  },
  {
    "veiculo": "FLUENCE Sedan Privilège 2.0 16V FLEX Aut",
    "marca": "Renault",
    "cod_fipe": "025175-5",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Authentique 1.6 16V 95cv",
    "marca": "Renault",
    "cod_fipe": "025106-2",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Authentique Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025134-8",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Expres.SPORTWAY 1.6/1.6 Hi-Flex",
    "marca": "Renault",
    "cod_fipe": "025128-3",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Express Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025133-0",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Express RL/ Express 1.0 16V/ 8V",
    "marca": "Renault",
    "cod_fipe": "025044-9",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Express RL/ Express 1.6 16V/ 8V",
    "marca": "Renault",
    "cod_fipe": "025045-7",
    "vendido": false
  },
  {
    "veiculo": "Kangoo Expression Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025132-1",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RL 1.0 8V",
    "marca": "Renault",
    "cod_fipe": "025038-4",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RL 1.6 8V",
    "marca": "Renault",
    "cod_fipe": "025041-4",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RL/ Yahoo 1.0 16V 70cv",
    "marca": "Renault",
    "cod_fipe": "025070-8",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RN 1.0 8V",
    "marca": "Renault",
    "cod_fipe": "025039-2",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RN/ Yahoo/ Expression 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025072-4",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RN/Expression 1.6 16V / 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025040-6",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RT 1.0 16V 70cv 5p",
    "marca": "Renault",
    "cod_fipe": "025073-2",
    "vendido": false
  },
  {
    "veiculo": "Kangoo RT 1.6 16V/ 8V 90cv 5p",
    "marca": "Renault",
    "cod_fipe": "025074-0",
    "vendido": false
  },
  {
    "veiculo": "Laguna Grand Tour Privilège 3.0 V6 210cv",
    "marca": "Renault",
    "cod_fipe": "025080-5",
    "vendido": false
  },
  {
    "veiculo": "Laguna Nevada RT/ RXE 2.0s 16V",
    "marca": "Renault",
    "cod_fipe": "025010-4",
    "vendido": false
  },
  {
    "veiculo": "Laguna Privilège 3.0 V6 24V 210cv 5p",
    "marca": "Renault",
    "cod_fipe": "025079-1",
    "vendido": false
  },
  {
    "veiculo": "Laguna RT 2.0",
    "marca": "Renault",
    "cod_fipe": "025006-6",
    "vendido": false
  },
  {
    "veiculo": "Laguna RXE 2.0s 8V/ 16V",
    "marca": "Renault",
    "cod_fipe": "025011-2",
    "vendido": false
  },
  {
    "veiculo": "Laguna V6",
    "marca": "Renault",
    "cod_fipe": "025007-4",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Authentique Flex 1.0 12V 4p",
    "marca": "Renault",
    "cod_fipe": "025242-5",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Authentique Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025135-6",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Authentique Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025138-0",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Authentique Plus Hi-F. 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025226-3",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Avantage Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025178-0",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Dyna. EasyR Hi-Flex 1.6 8V Aut.",
    "marca": "Renault",
    "cod_fipe": "025218-2",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Dynamique Easy R Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025252-2",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Dynamique Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025255-7",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Dynamique Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025208-5",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Exclusive EasyR Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025224-7",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Exclusive Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025223-9",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expres. EasyR Hi-Flex 1.6 8V Aut.",
    "marca": "Renault",
    "cod_fipe": "025217-4",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expres. P.Avant. Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025238-7",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expres./Exp. UP Hi-Flex 1.0 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025136-4",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expression Easy R Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025256-5",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expression Flex 1.0 12V 4p",
    "marca": "Renault",
    "cod_fipe": "025241-7",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expression Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025253-0",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expression Hi-Flex 1.6 16V 4p Aut",
    "marca": "Renault",
    "cod_fipe": "025177-1",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Expression Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025139-9",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Privilège Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025137-2",
    "vendido": false
  },
  {
    "veiculo": "LOGAN Privilège Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025140-2",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Chassi 16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025195-0",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Executive 16L Longo Dies",
    "marca": "Renault",
    "cod_fipe": "025205-0",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Extra F.Vitre 16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025201-8",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Extra Furgão 16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025198-4",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Furgão 16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025196-8",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Grand F.Vitre16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025200-0",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Grand Furgão16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025197-6",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Std 16L Longo Diesel",
    "marca": "Renault",
    "cod_fipe": "025204-2",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Std 16L Médio Diesel",
    "marca": "Renault",
    "cod_fipe": "025202-6",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Std Escolar 20L MédioDies",
    "marca": "Renault",
    "cod_fipe": "025203-4",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi VIP 16L Longo Diesel",
    "marca": "Renault",
    "cod_fipe": "025206-9",
    "vendido": false
  },
  {
    "veiculo": "Master 2.3 dCi Vitre Furgão 16V Diesel",
    "marca": "Renault",
    "cod_fipe": "025199-2",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi 16V 115cv 13L Diesel",
    "marca": "Renault",
    "cod_fipe": "025110-0",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi 16V 115cv 16L Diesel",
    "marca": "Renault",
    "cod_fipe": "025094-5",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi Chassi 16V 115cv Diesel",
    "marca": "Renault",
    "cod_fipe": "025103-8",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi Escolar 115cv 16/19L Dies",
    "marca": "Renault",
    "cod_fipe": "025157-7",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi Executivo 115cv 16L Dies",
    "marca": "Renault",
    "cod_fipe": "025158-5",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi Furg. Medio/LongoTA Dies.",
    "marca": "Renault",
    "cod_fipe": "025105-4",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi FurgãoTB Curto Diesel",
    "marca": "Renault",
    "cod_fipe": "025104-6",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi Vitré 115cv Curto Diesel   ",
    "marca": "Renault",
    "cod_fipe": "025179-8",
    "vendido": false
  },
  {
    "veiculo": "Master 2.5 dCi Vitré 115cv Longa Diesel   ",
    "marca": "Renault",
    "cod_fipe": "025180-1",
    "vendido": false
  },
  {
    "veiculo": "Master 2.8 DTI 114cv 16L Diesel",
    "marca": "Renault",
    "cod_fipe": "025071-6",
    "vendido": false
  },
  {
    "veiculo": "Master 2.8 DTI Chassi 114cv Diesel",
    "marca": "Renault",
    "cod_fipe": "025084-8",
    "vendido": false
  },
  {
    "veiculo": "Master 2.8 DTI Furgão 114cv Diesel curto",
    "marca": "Renault",
    "cod_fipe": "025083-0",
    "vendido": false
  },
  {
    "veiculo": "Master 2.8 DTI Furgão Dies.Longo Alto",
    "marca": "Renault",
    "cod_fipe": "025069-4",
    "vendido": false
  },
  {
    "veiculo": "Master 2.8 Furgão 85cv Diesel curto",
    "marca": "Renault",
    "cod_fipe": "025068-6",
    "vendido": false
  },
  {
    "veiculo": "Megane Coupé Cabriolet Dynamique 2.0 Aut",
    "marca": "Renault",
    "cod_fipe": "025147-0",
    "vendido": false
  },
  {
    "veiculo": "Megane G. Tour EXTREME 2.0 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025166-6",
    "vendido": false
  },
  {
    "veiculo": "Megane G. Tour EXTREME 2.0 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025165-8",
    "vendido": false
  },
  {
    "veiculo": "Megane G. Tour EXTREME Hi-Flex 1.6 Mec.",
    "marca": "Renault",
    "cod_fipe": "025164-0",
    "vendido": false
  },
  {
    "veiculo": "Megane Grand Tour Dynam. Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025129-1",
    "vendido": false
  },
  {
    "veiculo": "Megane Grand Tour Dynamique 2.0 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025131-3",
    "vendido": false
  },
  {
    "veiculo": "Megane Grand Tour Dynamique 2.0 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025130-5",
    "vendido": false
  },
  {
    "veiculo": "Megane Grand Tour Expres.Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025155-0",
    "vendido": false
  },
  {
    "veiculo": "Megane Grand Tour Privilège 2.0 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025153-4",
    "vendido": false
  },
  {
    "veiculo": "Megane Hatch RN 1.6",
    "marca": "Renault",
    "cod_fipe": "025022-8",
    "vendido": false
  },
  {
    "veiculo": "Megane Hatch RT 1.6/RT/Alizé/Exp 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025014-7",
    "vendido": false
  },
  {
    "veiculo": "Megane Hatch RXE 2.0",
    "marca": "Renault",
    "cod_fipe": "025016-3",
    "vendido": false
  },
  {
    "veiculo": "Megane Hatch RXE/Egeus 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025043-0",
    "vendido": false
  },
  {
    "veiculo": "Megane Sed. Expression 2.0 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025149-6",
    "vendido": false
  },
  {
    "veiculo": "Megane Sed. Expression 2.0 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025154-2",
    "vendido": false
  },
  {
    "veiculo": "Megane Sed. EXTREME 2.0 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025163-1",
    "vendido": false
  },
  {
    "veiculo": "Megane Sed. EXTREME 2.0 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025162-3",
    "vendido": false
  },
  {
    "veiculo": "Megane Sed. EXTREME HI-Flex 1.6 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025161-5",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan Dynamique 2.0 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025127-5",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan Dynamique 2.0 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025126-7",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan Dynamique Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025120-8",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan Expression Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025119-4",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan Privilège 2.0 16V Aut",
    "marca": "Renault",
    "cod_fipe": "025092-9",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan RT 2.0",
    "marca": "Renault",
    "cod_fipe": "025015-5",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan RT/Alizé 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025042-2",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan RXE/ Privilège 2.0 16V Mec",
    "marca": "Renault",
    "cod_fipe": "025078-3",
    "vendido": false
  },
  {
    "veiculo": "Megane Sedan RXE/Egeus 2.0",
    "marca": "Renault",
    "cod_fipe": "025017-1",
    "vendido": false
  },
  {
    "veiculo": "Safrane RXE",
    "marca": "Renault",
    "cod_fipe": "025023-6",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Auth. Plus Hi-Power 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025227-1",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Authentique Flex 1.0 12V 5p",
    "marca": "Renault",
    "cod_fipe": "025243-3",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Authentique Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025141-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Authentique Hi-Flex 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025142-9",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Authentique Hi-Power 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025216-6",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Dyna. EasyR Hi-Flex 1.6 8V",
    "marca": "Renault",
    "cod_fipe": "025219-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Dynamique Easy R Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025248-4",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Dynamique Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025254-9",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Dynamique Hi-Power 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025213-1",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expres EasyR Hi-Flex 1.6 8V",
    "marca": "Renault",
    "cod_fipe": "025220-4",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expres. Easy R Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025251-4",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expres. P.Avant. Hi.P. 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025237-9",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expression Flex 1.0 12V 5p",
    "marca": "Renault",
    "cod_fipe": "025244-1",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expression Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025250-6",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expression Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025143-7",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expression Hi-Flex 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025144-5",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expression Hi-Power 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025215-8",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Expression Hi-Power 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025214-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO GT line Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025249-2",
    "vendido": false
  },
  {
    "veiculo": "SANDERO GT line Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025172-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO GT line Hi-Flex 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025190-9",
    "vendido": false
  },
  {
    "veiculo": "SANDERO GT line Hi-Power 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025229-8",
    "vendido": false
  },
  {
    "veiculo": "SANDERO NOKIA Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025152-6",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Privilège Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025146-1",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Privilège Hi-Flex 1.6 16V 5p Aut",
    "marca": "Renault",
    "cod_fipe": "025176-3",
    "vendido": false
  },
  {
    "veiculo": "SANDERO Privilège Hi-Flex 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025145-3",
    "vendido": false
  },
  {
    "veiculo": "SANDERO SPORT RS 2.0 Hi-Power 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025228-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEP. Easy R H-Power 1.6 8V",
    "marca": "Renault",
    "cod_fipe": "025222-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEP. Easy R R.CURL H.P. 1.6 5p",
    "marca": "Renault",
    "cod_fipe": "025236-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEP. R. CURL Hi-Power 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025235-2",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Easy R Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025247-6",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025246-8",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Hi-F. R. CURL 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025188-7",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025156-9",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Hi-Flex 1.6 16V 5p Aut.",
    "marca": "Renault",
    "cod_fipe": "025187-9",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Hi-Power 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025189-5",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Tweed HFlex 1.6 16V Aut",
    "marca": "Renault",
    "cod_fipe": "025211-5",
    "vendido": false
  },
  {
    "veiculo": "SANDERO STEPWAY Tweed HFlex 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025210-7",
    "vendido": false
  },
  {
    "veiculo": "SANDERO TechRun Hi-Flex 1.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025207-7",
    "vendido": false
  },
  {
    "veiculo": "SANDERO vibe Flex 1.0 12V 5p",
    "marca": "Renault",
    "cod_fipe": "025245-0",
    "vendido": false
  },
  {
    "veiculo": "SANDERO vibe Hi-Flex 1.6 8V 5p",
    "marca": "Renault",
    "cod_fipe": "025168-2",
    "vendido": false
  },
  {
    "veiculo": "Scénic Alizé/ Expression 1.6 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025052-0",
    "vendido": false
  },
  {
    "veiculo": "Scénic Alizé/ Expression 2.0 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025077-5",
    "vendido": false
  },
  {
    "veiculo": "Scénic Expression 1.6 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025087-2",
    "vendido": false
  },
  {
    "veiculo": "Scénic Grand Dynamique 2.0 16V 5p Aut.",
    "marca": "Renault",
    "cod_fipe": "025148-8",
    "vendido": false
  },
  {
    "veiculo": "Scénic Hi-Flex/Express. Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025107-0",
    "vendido": false
  },
  {
    "veiculo": "Scénic Privilège Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025108-9",
    "vendido": false
  },
  {
    "veiculo": "Scénic Privillège 1.6 16V Aut.",
    "marca": "Renault",
    "cod_fipe": "025088-0",
    "vendido": false
  },
  {
    "veiculo": "Scénic Privillège 2.0 Plus 16V 5p Aut",
    "marca": "Renault",
    "cod_fipe": "025089-9",
    "vendido": false
  },
  {
    "veiculo": "Scénic RT 2.0",
    "marca": "Renault",
    "cod_fipe": "025024-4",
    "vendido": false
  },
  {
    "veiculo": "Scénic RT 2.0 16V 5p Aut.",
    "marca": "Renault",
    "cod_fipe": "025063-5",
    "vendido": false
  },
  {
    "veiculo": "Scénic RT 2.0 16V 5p Mec.",
    "marca": "Renault",
    "cod_fipe": "025062-7",
    "vendido": false
  },
  {
    "veiculo": "Scénic RT/Auth/Auth/Kids Hi-Flex 1.6 16V",
    "marca": "Renault",
    "cod_fipe": "025029-5",
    "vendido": false
  },
  {
    "veiculo": "Scénic RXE 2.0 8V",
    "marca": "Renault",
    "cod_fipe": "025025-2",
    "vendido": false
  },
  {
    "veiculo": "Scénic RXE Egeus 2.0",
    "marca": "Renault",
    "cod_fipe": "025046-5",
    "vendido": false
  },
  {
    "veiculo": "Scénic RXE/ Privilège 1.6 16V Mec.",
    "marca": "Renault",
    "cod_fipe": "025058-9",
    "vendido": false
  },
  {
    "veiculo": "Scénic RXE/ Privilège 2.0 16V 5p Aut.",
    "marca": "Renault",
    "cod_fipe": "025064-3",
    "vendido": false
  },
  {
    "veiculo": "Scénic RXE/ Privilège 2.0 16V 5p Mec.",
    "marca": "Renault",
    "cod_fipe": "025059-7",
    "vendido": false
  },
  {
    "veiculo": "Scénic SPORTWAY Hi-Flex 1.6 16V 5p",
    "marca": "Renault",
    "cod_fipe": "025125-9",
    "vendido": false
  },
  {
    "veiculo": "SYMBOL CONNECTION Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025171-2",
    "vendido": false
  },
  {
    "veiculo": "SYMBOL Expression Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025160-7",
    "vendido": false
  },
  {
    "veiculo": "SYMBOL Expression Hi-Flex 1.6 8V 4p",
    "marca": "Renault",
    "cod_fipe": "025167-4",
    "vendido": false
  },
  {
    "veiculo": "SYMBOL Privilège Hi-Flex 1.6 16V 4p",
    "marca": "Renault",
    "cod_fipe": "025159-3",
    "vendido": false
  },
  {
    "veiculo": "Trafic Furgão 2.0 98cv",
    "marca": "Renault",
    "cod_fipe": "025047-3",
    "vendido": false
  },
  {
    "veiculo": "Trafic Furgão Chassi Curto 2.2",
    "marca": "Renault",
    "cod_fipe": "025018-0",
    "vendido": false
  },
  {
    "veiculo": "Trafic Furgão Chassi Longo 2.2",
    "marca": "Renault",
    "cod_fipe": "025019-8",
    "vendido": false
  },
  {
    "veiculo": "Trafic Van 2.2",
    "marca": "Renault",
    "cod_fipe": "025036-8",
    "vendido": false
  },
  {
    "veiculo": "Twingo 1.0 8V",
    "marca": "Renault",
    "cod_fipe": "025035-0",
    "vendido": false
  },
  {
    "veiculo": "Twingo 1.2",
    "marca": "Renault",
    "cod_fipe": "025009-0",
    "vendido": false
  },
  {
    "veiculo": "Twingo Easy 1.2",
    "marca": "Renault",
    "cod_fipe": "025030-9",
    "vendido": false
  },
  {
    "veiculo": "Twingo Initiale 1.0 16V 70cv",
    "marca": "Renault",
    "cod_fipe": "025066-0",
    "vendido": false
  },
  {
    "veiculo": "Twingo Pack 1.0 16V 70cv",
    "marca": "Renault",
    "cod_fipe": "025065-1",
    "vendido": false
  },
  {
    "veiculo": "Twingo Pack 1.0 8V",
    "marca": "Renault",
    "cod_fipe": "025037-6",
    "vendido": false
  },
  {
    "veiculo": "Ghost 6.6 V12 Aut.",
    "marca": "Rolls-Royce",
    "cod_fipe": "087001-3",
    "vendido": false
  },
  {
    "veiculo": "Ghost ll 6.6 V12 Aut.",
    "marca": "Rolls-Royce",
    "cod_fipe": "087003-0",
    "vendido": false
  },
  {
    "veiculo": "Phantom 6.7 V12 Aut.",
    "marca": "Rolls-Royce",
    "cod_fipe": "087002-1",
    "vendido": false
  },
  {
    "veiculo": "Wraith 6.6 V12 Aut.",
    "marca": "Rolls-Royce",
    "cod_fipe": "087004-8",
    "vendido": false
  },
  {
    "veiculo": "Mini Cooper 1.3",
    "marca": "Rover",
    "cod_fipe": "052001-2",
    "vendido": false
  },
  {
    "veiculo": "9000 CD 2.3 Turbo",
    "marca": "Saab",
    "cod_fipe": "053001-8",
    "vendido": false
  },
  {
    "veiculo": "SL-2 1.9",
    "marca": "Saturn",
    "cod_fipe": "054001-3",
    "vendido": false
  },
  {
    "veiculo": "Cordoba 1.6L",
    "marca": "Seat",
    "cod_fipe": "026003-7",
    "vendido": false
  },
  {
    "veiculo": "Cordoba SXE 1.8 / GLX 1.8 4p",
    "marca": "Seat",
    "cod_fipe": "026001-0",
    "vendido": false
  },
  {
    "veiculo": "Cordoba Vario 1.6L",
    "marca": "Seat",
    "cod_fipe": "026004-5",
    "vendido": false
  },
  {
    "veiculo": "Ibiza 1.0 16v 4p",
    "marca": "Seat",
    "cod_fipe": "026008-8",
    "vendido": false
  },
  {
    "veiculo": "Ibiza 1.0i 8v",
    "marca": "Seat",
    "cod_fipe": "026005-3",
    "vendido": false
  },
  {
    "veiculo": "Ibiza 1.6L",
    "marca": "Seat",
    "cod_fipe": "026006-1",
    "vendido": false
  },
  {
    "veiculo": "Ibiza SXE / GLX 1.8",
    "marca": "Seat",
    "cod_fipe": "026002-9",
    "vendido": false
  },
  {
    "veiculo": "Inca 1.6L",
    "marca": "Seat",
    "cod_fipe": "026007-0",
    "vendido": false
  },
  {
    "veiculo": "SY1020 T 20 TRUCKS BAU",
    "marca": "SHINERAY",
    "cod_fipe": "082005-9",
    "vendido": false
  },
  {
    "veiculo": "SY1020 T 22 TRUCKS CD",
    "marca": "SHINERAY",
    "cod_fipe": "082004-0",
    "vendido": false
  },
  {
    "veiculo": "SY1020 T20 TRUCKS",
    "marca": "SHINERAY",
    "cod_fipe": "082003-2",
    "vendido": false
  },
  {
    "veiculo": "SY6370 A7 PVAN",
    "marca": "SHINERAY",
    "cod_fipe": "082006-7",
    "vendido": false
  },
  {
    "veiculo": "SY6390 A9 CARGOV",
    "marca": "SHINERAY",
    "cod_fipe": "082001-6",
    "vendido": false
  },
  {
    "veiculo": "SY6390 A9 PVANS",
    "marca": "SHINERAY",
    "cod_fipe": "082002-4",
    "vendido": false
  },
  {
    "veiculo": "X30 VAN 1.3 16V Mec.",
    "marca": "SHINERAY",
    "cod_fipe": "082007-5",
    "vendido": false
  },
  {
    "veiculo": "fortwo BRABUS cabrio 1.0 72kw",
    "marca": "smart",
    "cod_fipe": "072005-4",
    "vendido": false
  },
  {
    "veiculo": "fortwo BRABUS coupé 1.0 72kw",
    "marca": "smart",
    "cod_fipe": "072003-8",
    "vendido": false
  },
  {
    "veiculo": "fortwo coupé/Brasil.Edition 1.0 mhd 71cv",
    "marca": "smart",
    "cod_fipe": "072004-6",
    "vendido": false
  },
  {
    "veiculo": "fortwo passion cabrio 1.0 62kw/Tritop",
    "marca": "smart",
    "cod_fipe": "072002-0",
    "vendido": false
  },
  {
    "veiculo": "fortwo passion coupé 1.0 62kw",
    "marca": "smart",
    "cod_fipe": "072001-1",
    "vendido": false
  },
  {
    "veiculo": "ACTYON 2.0 16V 141cv Diesel",
    "marca": "SSANGYONG",
    "cod_fipe": "055025-6",
    "vendido": false
  },
  {
    "veiculo": "ACTYON 2.3 16V 150cv Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055027-2",
    "vendido": false
  },
  {
    "veiculo": "ACTYON SPORTS 2.0 16V 141cv Diesel",
    "marca": "SSANGYONG",
    "cod_fipe": "055024-8",
    "vendido": false
  },
  {
    "veiculo": "ACTYON SPORTS 2.0 16V 155cv Diesel",
    "marca": "SSANGYONG",
    "cod_fipe": "055030-2",
    "vendido": false
  },
  {
    "veiculo": "Chairman 3.2 V6 220cv Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055013-2",
    "vendido": false
  },
  {
    "veiculo": "Istana 2.9 95cv TB Diesel Int. 16Lug.",
    "marca": "SSANGYONG",
    "cod_fipe": "055014-0",
    "vendido": false
  },
  {
    "veiculo": "Korando 2.0 16V T.Diesel AWD Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055029-9",
    "vendido": false
  },
  {
    "veiculo": "Korando 2.0 16V T.Diesel AWD Mec.",
    "marca": "SSANGYONG",
    "cod_fipe": "055028-0",
    "vendido": false
  },
  {
    "veiculo": "Korando Canvas 2.9 TB Diesel Int. Aut",
    "marca": "SSANGYONG",
    "cod_fipe": "055007-8",
    "vendido": false
  },
  {
    "veiculo": "Korando Canvas 2.9 TB Diesel Int. Mec",
    "marca": "SSANGYONG",
    "cod_fipe": "055006-0",
    "vendido": false
  },
  {
    "veiculo": "Korando GL 2.9 TB Diesel Int. 120cv",
    "marca": "SSANGYONG",
    "cod_fipe": "055003-5",
    "vendido": false
  },
  {
    "veiculo": "Korando GLX 2.9 TB Diesel Int. 120cv Aut",
    "marca": "SSANGYONG",
    "cod_fipe": "055005-1",
    "vendido": false
  },
  {
    "veiculo": "Korando GLX 2.9 TB Diesel Int. 120cv Mec",
    "marca": "SSANGYONG",
    "cod_fipe": "055004-3",
    "vendido": false
  },
  {
    "veiculo": "Kyron 2.0 16V 141cv  TDI Diesel Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055026-4",
    "vendido": false
  },
  {
    "veiculo": "Kyron 2.7 20V 165cv TDI Dies. Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055022-1",
    "vendido": false
  },
  {
    "veiculo": "Musso DX 2.9 Diesel",
    "marca": "SSANGYONG",
    "cod_fipe": "055001-9",
    "vendido": false
  },
  {
    "veiculo": "Musso GL 2.9 TB Diesel Int. 120cv",
    "marca": "SSANGYONG",
    "cod_fipe": "055008-6",
    "vendido": false
  },
  {
    "veiculo": "Musso GLS 2.9 TB Diesel Int. 120cv Aut",
    "marca": "SSANGYONG",
    "cod_fipe": "055011-6",
    "vendido": false
  },
  {
    "veiculo": "Musso GLS 3.2 V6 220cv 4x4 Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055012-4",
    "vendido": false
  },
  {
    "veiculo": "Musso GLX 2.9 TB Diesel Int. 120cv Aut",
    "marca": "SSANGYONG",
    "cod_fipe": "055010-8",
    "vendido": false
  },
  {
    "veiculo": "Musso GLX 2.9 TB Diesel Int. 120cv Mec",
    "marca": "SSANGYONG",
    "cod_fipe": "055009-4",
    "vendido": false
  },
  {
    "veiculo": "Musso Pick-Up GLX 2.9 4x4 CD TB Int.Dies",
    "marca": "SSANGYONG",
    "cod_fipe": "055019-1",
    "vendido": false
  },
  {
    "veiculo": "Musso Pick-Up LX 2.9 4x4 CD TB Int.Dies.",
    "marca": "SSANGYONG",
    "cod_fipe": "055018-3",
    "vendido": false
  },
  {
    "veiculo": "Musso SX 2.9 Diesel",
    "marca": "SSANGYONG",
    "cod_fipe": "055002-7",
    "vendido": false
  },
  {
    "veiculo": "Rexton II 2.7 20V 165/186cv TDI Dies.Aut",
    "marca": "SSANGYONG",
    "cod_fipe": "055021-3",
    "vendido": false
  },
  {
    "veiculo": "Rexton II 3.2 V6 24V 220cv Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055023-0",
    "vendido": false
  },
  {
    "veiculo": "Rexton RX 270 2.7 165cv Xdi Diesel Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055020-5",
    "vendido": false
  },
  {
    "veiculo": "Rexton RX 290 2.9 120cv TB Int. Dies.Aut",
    "marca": "SSANGYONG",
    "cod_fipe": "055016-7",
    "vendido": false
  },
  {
    "veiculo": "Rexton RX 290 2.9 120cv TB Int. Dies.Mec",
    "marca": "SSANGYONG",
    "cod_fipe": "055015-9",
    "vendido": false
  },
  {
    "veiculo": "Rexton RX 320 3.2 V6 235cv Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055017-5",
    "vendido": false
  },
  {
    "veiculo": "Rexton W 2.7 20V XDI Diesel Aut.",
    "marca": "SSANGYONG",
    "cod_fipe": "055031-0",
    "vendido": false
  },
  {
    "veiculo": "Forester 2.0 16v 4x4 Turbo Aut.",
    "marca": "Subaru",
    "cod_fipe": "027039-3",
    "vendido": false
  },
  {
    "veiculo": "Forester 2.0 4x4 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027013-0",
    "vendido": false
  },
  {
    "veiculo": "Forester 2.0 4x4 Turbo",
    "marca": "Subaru",
    "cod_fipe": "027037-7",
    "vendido": false
  },
  {
    "veiculo": "Forester 2.0/2.0 S 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027024-5",
    "vendido": false
  },
  {
    "veiculo": "Forester XT 2.0 16V 4x4 Turbo Aut.",
    "marca": "Subaru",
    "cod_fipe": "027067-9",
    "vendido": false
  },
  {
    "veiculo": "Forester XT 2.5 16V 4x4 Turbo Aut.",
    "marca": "Subaru",
    "cod_fipe": "027047-4",
    "vendido": false
  },
  {
    "veiculo": "Forester XT S-EDITION 2.5 16V 4x4 TB Aut",
    "marca": "Subaru",
    "cod_fipe": "027064-4",
    "vendido": false
  },
  {
    "veiculo": "Impreza 1.5 16V 115cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027053-9",
    "vendido": false
  },
  {
    "veiculo": "Impreza 1.5 16V 115cv Mec.",
    "marca": "Subaru",
    "cod_fipe": "027054-7",
    "vendido": false
  },
  {
    "veiculo": "Impreza 2.0 16V 160cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027051-2",
    "vendido": false
  },
  {
    "veiculo": "Impreza 2.0 16V 160cv Mec.",
    "marca": "Subaru",
    "cod_fipe": "027052-0",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 1.6/1.8 16V",
    "marca": "Subaru",
    "cod_fipe": "027020-2",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 2.0 4x2 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027032-6",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 2.0 4x2 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027014-8",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 2.0 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027025-3",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 2.0 4x4 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027015-6",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 4x4 1.8 16V",
    "marca": "Subaru",
    "cod_fipe": "027022-9",
    "vendido": false
  },
  {
    "veiculo": "Impreza GL 4x4 2.0 16V",
    "marca": "Subaru",
    "cod_fipe": "027021-0",
    "vendido": false
  },
  {
    "veiculo": "Impreza GT 2.0 Turbo",
    "marca": "Subaru",
    "cod_fipe": "027010-5",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD 2.0 16V 160cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027057-1",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD 2.0/2.0i-S AWD Aut.",
    "marca": "Subaru",
    "cod_fipe": "027066-0",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD GX 2.0 16v 4x4 4p Aut.",
    "marca": "Subaru",
    "cod_fipe": "027040-7",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD RX 2.0 4x4",
    "marca": "Subaru",
    "cod_fipe": "027038-5",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD WRX 2.0 16v 4x4",
    "marca": "Subaru",
    "cod_fipe": "027043-1",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD WRX 2.0 16V TB 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027068-7",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD WRX 2.5 16V TB 4x4 4p",
    "marca": "Subaru",
    "cod_fipe": "027048-2",
    "vendido": false
  },
  {
    "veiculo": "Impreza SD WRX STI 2.5 16V TB 4x4",
    "marca": "Subaru",
    "cod_fipe": "027063-6",
    "vendido": false
  },
  {
    "veiculo": "Impreza SW GL 1.6/1.8/2.0 4x4 16V",
    "marca": "Subaru",
    "cod_fipe": "027016-4",
    "vendido": false
  },
  {
    "veiculo": "Impreza SW GT 2.0 16v 4x4 Turbo Mec.",
    "marca": "Subaru",
    "cod_fipe": "027041-5",
    "vendido": false
  },
  {
    "veiculo": "Impreza SW GX 2.0 16v 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027042-3",
    "vendido": false
  },
  {
    "veiculo": "Impreza SW WRX 2.0 16v 4x4 TB",
    "marca": "Subaru",
    "cod_fipe": "027044-0",
    "vendido": false
  },
  {
    "veiculo": "Impreza SW WRX 2.5 16V TB 4x4 5p",
    "marca": "Subaru",
    "cod_fipe": "027049-0",
    "vendido": false
  },
  {
    "veiculo": "Impreza WRX 2.5 16V TB 4x4 5p",
    "marca": "Subaru",
    "cod_fipe": "027050-4",
    "vendido": false
  },
  {
    "veiculo": "Impreza WRX STI 2.5 16V TB 4x4",
    "marca": "Subaru",
    "cod_fipe": "027056-3",
    "vendido": false
  },
  {
    "veiculo": "Impreza XV 2.0 16V 160cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027061-0",
    "vendido": false
  },
  {
    "veiculo": "Impreza XV 2.0 16V 160cv Mec.",
    "marca": "Subaru",
    "cod_fipe": "027062-8",
    "vendido": false
  },
  {
    "veiculo": "Legacy 2.0 16V 160cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027058-0",
    "vendido": false
  },
  {
    "veiculo": "Legacy 3.0 R H6 245cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027046-6",
    "vendido": false
  },
  {
    "veiculo": "Legacy 3.6 4x4 256cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027069-5",
    "vendido": false
  },
  {
    "veiculo": "Legacy GL 1.8",
    "marca": "Subaru",
    "cod_fipe": "027023-7",
    "vendido": false
  },
  {
    "veiculo": "Legacy GL 2.0/ GLS Mec",
    "marca": "Subaru",
    "cod_fipe": "027004-0",
    "vendido": false
  },
  {
    "veiculo": "Legacy GL TW 2.0 4x2 Mec./Aut.",
    "marca": "Subaru",
    "cod_fipe": "027006-7",
    "vendido": false
  },
  {
    "veiculo": "Legacy GL TW 2.0 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027034-2",
    "vendido": false
  },
  {
    "veiculo": "Legacy GL TW 2.0 4x4 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027033-4",
    "vendido": false
  },
  {
    "veiculo": "Legacy GL/ GLS 2.0 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027026-1",
    "vendido": false
  },
  {
    "veiculo": "Legacy GT 2.5  16V 280cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027059-8",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX 2.2 4x4",
    "marca": "Subaru",
    "cod_fipe": "027005-9",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX 2.5 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027017-2",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX 2.5 4x4 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027031-8",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX TW 2.2 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027030-0",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX TW 2.2 4x4 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027029-6",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX TW 2.5 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027027-0",
    "vendido": false
  },
  {
    "veiculo": "Legacy GX TW 2.5 4x4 Mec",
    "marca": "Subaru",
    "cod_fipe": "027007-5",
    "vendido": false
  },
  {
    "veiculo": "Legacy SW 2.2",
    "marca": "Subaru",
    "cod_fipe": "027019-9",
    "vendido": false
  },
  {
    "veiculo": "Outback 2.5 4x4 Aut.",
    "marca": "Subaru",
    "cod_fipe": "027028-8",
    "vendido": false
  },
  {
    "veiculo": "Outback 2.5 4x4 Mec.",
    "marca": "Subaru",
    "cod_fipe": "027018-0",
    "vendido": false
  },
  {
    "veiculo": "Outback 3.0 H6 SW 245cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027045-8",
    "vendido": false
  },
  {
    "veiculo": "Outback 3.6 H6 SW Aut.",
    "marca": "Subaru",
    "cod_fipe": "027060-1",
    "vendido": false
  },
  {
    "veiculo": "SVX Cupê 3.3 4x4 Aut",
    "marca": "Subaru",
    "cod_fipe": "027008-3",
    "vendido": false
  },
  {
    "veiculo": "TRIBECA 3.6 24V 270cv 5p Aut.",
    "marca": "Subaru",
    "cod_fipe": "027055-5",
    "vendido": false
  },
  {
    "veiculo": "Vivio SD GLI 3p Mec",
    "marca": "Subaru",
    "cod_fipe": "027009-1",
    "vendido": false
  },
  {
    "veiculo": "XV 2.0 16V 4x4 150cv Aut.",
    "marca": "Subaru",
    "cod_fipe": "027065-2",
    "vendido": false
  },
  {
    "veiculo": "Baleno 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028023-2",
    "vendido": false
  },
  {
    "veiculo": "Baleno 1.6 16V Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028009-7",
    "vendido": false
  },
  {
    "veiculo": "Baleno Wagon 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028010-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028025-9",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 1.6 16V Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028011-9",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V 3p",
    "marca": "Suzuki",
    "cod_fipe": "028012-7",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V 4x2/4x4 5p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028026-7",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V 4x2/4x4 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028013-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V 5p/ Gold Aut( Arg.)",
    "marca": "Suzuki",
    "cod_fipe": "028038-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V 5p/ Gold Mec( Arg.)",
    "marca": "Suzuki",
    "cod_fipe": "028037-2",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V Ed. Special 5p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028034-8",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 16V Ed. Special 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028033-0",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.0 TB-IC Diesel 4p",
    "marca": "Suzuki",
    "cod_fipe": "028036-4",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.5 V6 5p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028027-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 2.5 V6 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028014-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 3.2 24V 4WD 5p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028044-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 4SPORT 2.0 16V 4x2 5P Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028061-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 4SPORT 2.0 16V 4x4 5p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028059-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara 4SPORT 2.0 16V 4x4 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028060-7",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara L.EDI. 2.0 16V 4x2/4x4 Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028051-8",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara S. EDITI.  2.0 16V 4x2 Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028054-2",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara Sport 2.0 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028028-3",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara Sport 2.0 16V Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028019-4",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara XL_7 2.7 24V 173cv  4p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028040-2",
    "vendido": false
  },
  {
    "veiculo": "Grand Vitara XL_7 2.7 24V 173cv 4p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028039-9",
    "vendido": false
  },
  {
    "veiculo": "Ignis 1.3 16V 82cv 4p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028042-9",
    "vendido": false
  },
  {
    "veiculo": "Ignis 1.3 16V 82cv 4p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028041-0",
    "vendido": false
  },
  {
    "veiculo": "Ignis WRS 1.3 16V 82cv 4x4 4p",
    "marca": "Suzuki",
    "cod_fipe": "028043-7",
    "vendido": false
  },
  {
    "veiculo": "Jimny 4S 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028049-6",
    "vendido": false
  },
  {
    "veiculo": "Jimny 4SPORT/ 4WORK 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028047-0",
    "vendido": false
  },
  {
    "veiculo": "Jimny 4STREET 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028048-8",
    "vendido": false
  },
  {
    "veiculo": "Jimny 4SUN 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028050-0",
    "vendido": false
  },
  {
    "veiculo": "Jimny 4WORK OFF ROAD 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028062-3",
    "vendido": false
  },
  {
    "veiculo": "Jimny CANVAS 4ALL 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028072-0",
    "vendido": false
  },
  {
    "veiculo": "Jimny CANVAS 4SPORT 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028073-9",
    "vendido": false
  },
  {
    "veiculo": "Jimny Wide/ Jimny/4ALL 1.3 16V",
    "marca": "Suzuki",
    "cod_fipe": "028015-1",
    "vendido": false
  },
  {
    "veiculo": "Samurai JX Canvas 1.3",
    "marca": "Suzuki",
    "cod_fipe": "028001-1",
    "vendido": false
  },
  {
    "veiculo": "Samurai JX Metal 1.3",
    "marca": "Suzuki",
    "cod_fipe": "028002-0",
    "vendido": false
  },
  {
    "veiculo": "S-CROSS 4STYLE 1.4 TB 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028069-0",
    "vendido": false
  },
  {
    "veiculo": "S-CROSS 4STYLE ALLGRIP 1.4 TB 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028071-2",
    "vendido": false
  },
  {
    "veiculo": "S-CROSS 4YOU 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028070-4",
    "vendido": false
  },
  {
    "veiculo": "Sidekick Canvas",
    "marca": "Suzuki",
    "cod_fipe": "028031-3",
    "vendido": false
  },
  {
    "veiculo": "Sidekick Metal",
    "marca": "Suzuki",
    "cod_fipe": "028003-8",
    "vendido": false
  },
  {
    "veiculo": "Super Carry Van/ Furgão 1.0",
    "marca": "Suzuki",
    "cod_fipe": "028020-8",
    "vendido": false
  },
  {
    "veiculo": "Swift GL",
    "marca": "Suzuki",
    "cod_fipe": "028004-6",
    "vendido": false
  },
  {
    "veiculo": "Swift GTi 1.3 3p",
    "marca": "Suzuki",
    "cod_fipe": "028005-4",
    "vendido": false
  },
  {
    "veiculo": "Swift GTI Convers. 16V",
    "marca": "Suzuki",
    "cod_fipe": "028018-6",
    "vendido": false
  },
  {
    "veiculo": "Swift Hatch 1.0 3p e 5p",
    "marca": "Suzuki",
    "cod_fipe": "028006-2",
    "vendido": false
  },
  {
    "veiculo": "Swift Hatch/ Sedan 1.3",
    "marca": "Suzuki",
    "cod_fipe": "028021-6",
    "vendido": false
  },
  {
    "veiculo": "Swift Sedan 1.6 16V",
    "marca": "Suzuki",
    "cod_fipe": "028032-1",
    "vendido": false
  },
  {
    "veiculo": "Swift Sport 1.6 16V 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028052-6",
    "vendido": false
  },
  {
    "veiculo": "Swift Sport R 1.6 16V 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028053-4",
    "vendido": false
  },
  {
    "veiculo": "SX4 2.0 16V 145cv 4WD 5p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028046-1",
    "vendido": false
  },
  {
    "veiculo": "SX4 2.0 16V 145cv 4WD 5p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028045-3",
    "vendido": false
  },
  {
    "veiculo": "SX4 S-CROSS ALLGRIP GLS 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028056-9",
    "vendido": false
  },
  {
    "veiculo": "SX4 S-CROSS ALLGRIP GLX 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028058-5",
    "vendido": false
  },
  {
    "veiculo": "SX4 S-CROSS GL 1.6 16V Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028055-0",
    "vendido": false
  },
  {
    "veiculo": "SX4 S-CROSS GLX 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028057-7",
    "vendido": false
  },
  {
    "veiculo": "Vitara 4ALL 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028064-0",
    "vendido": false
  },
  {
    "veiculo": "Vitara 4ALL 1.6 16V Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028063-1",
    "vendido": false
  },
  {
    "veiculo": "Vitara 4SPORT 1.4 TB 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028067-4",
    "vendido": false
  },
  {
    "veiculo": "Vitara 4SPORT ALLGRIP 1.4 TB 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028068-2",
    "vendido": false
  },
  {
    "veiculo": "Vitara 4YOU 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028065-8",
    "vendido": false
  },
  {
    "veiculo": "Vitara 4YOU ALLGRIP 1.6 16V Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028066-6",
    "vendido": false
  },
  {
    "veiculo": "Vitara JLX 1.6 16V 4x4 4p Aut.",
    "marca": "Suzuki",
    "cod_fipe": "028035-6",
    "vendido": false
  },
  {
    "veiculo": "Vitara JLX 1.6 16V 4x4 4p Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028022-4",
    "vendido": false
  },
  {
    "veiculo": "Vitara JLX 2.0 V6 4x4",
    "marca": "Suzuki",
    "cod_fipe": "028017-8",
    "vendido": false
  },
  {
    "veiculo": "Vitara JLX Canvas 1.6 8V 2p",
    "marca": "Suzuki",
    "cod_fipe": "028007-0",
    "vendido": false
  },
  {
    "veiculo": "Vitara JLX Metal 1.6 8V 2p",
    "marca": "Suzuki",
    "cod_fipe": "028008-9",
    "vendido": false
  },
  {
    "veiculo": "Wagon R+ 1.0 Mec.",
    "marca": "Suzuki",
    "cod_fipe": "028016-0",
    "vendido": false
  },
  {
    "veiculo": "Stark 2.3 4WD 127cv TDI Diesel 3p",
    "marca": "TAC",
    "cod_fipe": "075001-8",
    "vendido": false
  },
  {
    "veiculo": "Avalon XLS 3.0",
    "marca": "Toyota",
    "cod_fipe": "002038-9",
    "vendido": false
  },
  {
    "veiculo": "Band. Jipe 4x4 Sport 3.7 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002050-8",
    "vendido": false
  },
  {
    "veiculo": "Band.Jipe Cap.de Aço Chas. Curto Diesel",
    "marca": "Toyota",
    "cod_fipe": "002002-8",
    "vendido": false
  },
  {
    "veiculo": "Band.Jipe Cap.de Aço Chas. Longo Diesel",
    "marca": "Toyota",
    "cod_fipe": "002003-6",
    "vendido": false
  },
  {
    "veiculo": "Band.Jipe Capota de Lona Diesel",
    "marca": "Toyota",
    "cod_fipe": "002001-0",
    "vendido": false
  },
  {
    "veiculo": "Band.Picape CD 2p Chassi Longo Diesel",
    "marca": "Toyota",
    "cod_fipe": "002006-0",
    "vendido": false
  },
  {
    "veiculo": "Band.Picape CD 4p Chassi Longo Diesel",
    "marca": "Toyota",
    "cod_fipe": "002059-1",
    "vendido": false
  },
  {
    "veiculo": "Band.Picape Chassi Curto Diesel",
    "marca": "Toyota",
    "cod_fipe": "002005-2",
    "vendido": false
  },
  {
    "veiculo": "Band.Picape Chassi Longo Diesel",
    "marca": "Toyota",
    "cod_fipe": "002008-7",
    "vendido": false
  },
  {
    "veiculo": "Camry LE",
    "marca": "Toyota",
    "cod_fipe": "002009-5",
    "vendido": false
  },
  {
    "veiculo": "Camry SW LE 2.2 16V",
    "marca": "Toyota",
    "cod_fipe": "002042-7",
    "vendido": false
  },
  {
    "veiculo": "Camry SW XLE 3.0 24V",
    "marca": "Toyota",
    "cod_fipe": "002043-5",
    "vendido": false
  },
  {
    "veiculo": "Camry XLE 3.0 24V 186cv",
    "marca": "Toyota",
    "cod_fipe": "002010-9",
    "vendido": false
  },
  {
    "veiculo": "Camry XLE 3.5 24V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002098-2",
    "vendido": false
  },
  {
    "veiculo": "Celica GT 2.2 16V",
    "marca": "Toyota",
    "cod_fipe": "002044-3",
    "vendido": false
  },
  {
    "veiculo": "Celica ST 1.8",
    "marca": "Toyota",
    "cod_fipe": "002036-2",
    "vendido": false
  },
  {
    "veiculo": "Corolla ALTIS 2.0 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002112-1",
    "vendido": false
  },
  {
    "veiculo": "Corolla DX/ SW DX 1.6 16V",
    "marca": "Toyota",
    "cod_fipe": "002011-7",
    "vendido": false
  },
  {
    "veiculo": "Corolla Dynamic 2.0 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002158-0",
    "vendido": false
  },
  {
    "veiculo": "Corolla Fielder SW 1.8/1.8 XEi Flex Aut.",
    "marca": "Toyota",
    "cod_fipe": "002084-2",
    "vendido": false
  },
  {
    "veiculo": "Corolla Fielder SW 1.8/1.8 XEi Flex Mec",
    "marca": "Toyota",
    "cod_fipe": "002083-4",
    "vendido": false
  },
  {
    "veiculo": "Corolla Fielder SW S  1.8 16V 136cv Aut",
    "marca": "Toyota",
    "cod_fipe": "002102-4",
    "vendido": false
  },
  {
    "veiculo": "Corolla Fielder SW S 1.8 16V 136cv Mec",
    "marca": "Toyota",
    "cod_fipe": "002101-6",
    "vendido": false
  },
  {
    "veiculo": "Corolla Fielder SW SE-G 1.8 Flex 16V Aut",
    "marca": "Toyota",
    "cod_fipe": "002103-2",
    "vendido": false
  },
  {
    "veiculo": "Corolla GLi 1.6 16V",
    "marca": "Toyota",
    "cod_fipe": "002046-0",
    "vendido": false
  },
  {
    "veiculo": "Corolla GLi 1.8 Flex 16V  Aut.",
    "marca": "Toyota",
    "cod_fipe": "002109-1",
    "vendido": false
  },
  {
    "veiculo": "Corolla GLi 1.8 Flex 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002108-3",
    "vendido": false
  },
  {
    "veiculo": "Corolla GLi Upper 1.8 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002139-3",
    "vendido": false
  },
  {
    "veiculo": "Corolla GLi Upper Black P. 1.8 Flex Aut.",
    "marca": "Toyota",
    "cod_fipe": "002155-5",
    "vendido": false
  },
  {
    "veiculo": "Corolla LE 1.8",
    "marca": "Toyota",
    "cod_fipe": "002012-5",
    "vendido": false
  },
  {
    "veiculo": "Corolla LE 2.2 16V",
    "marca": "Toyota",
    "cod_fipe": "002045-1",
    "vendido": false
  },
  {
    "veiculo": "Corolla S 1.8 16V 136cv Aut",
    "marca": "Toyota",
    "cod_fipe": "002100-8",
    "vendido": false
  },
  {
    "veiculo": "Corolla S 1.8 16V 136cv Mec",
    "marca": "Toyota",
    "cod_fipe": "002099-0",
    "vendido": false
  },
  {
    "veiculo": "Corolla SE-G 1.8 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002029-0",
    "vendido": false
  },
  {
    "veiculo": "Corolla SE-G 1.8/1.8 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002060-5",
    "vendido": false
  },
  {
    "veiculo": "Corolla SW LE 1.8/ XLi 1.6 16V",
    "marca": "Toyota",
    "cod_fipe": "002037-0",
    "vendido": false
  },
  {
    "veiculo": "Corolla WG",
    "marca": "Toyota",
    "cod_fipe": "002013-3",
    "vendido": false
  },
  {
    "veiculo": "Corolla XEi 1.8/1.8 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002061-3",
    "vendido": false
  },
  {
    "veiculo": "Corolla XEi 1.8/1.8 Flex 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002028-1",
    "vendido": false
  },
  {
    "veiculo": "Corolla XEi 2.0 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002111-3",
    "vendido": false
  },
  {
    "veiculo": "Corolla XLi 1.6 16V 110cv Aut.",
    "marca": "Toyota",
    "cod_fipe": "002080-0",
    "vendido": false
  },
  {
    "veiculo": "Corolla XLi 1.6 16V 110cv Mec.",
    "marca": "Toyota",
    "cod_fipe": "002079-6",
    "vendido": false
  },
  {
    "veiculo": "Corolla XLi 1.8/1.8 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002062-1",
    "vendido": false
  },
  {
    "veiculo": "Corolla XLi 1.8/1.8 Flex 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002027-3",
    "vendido": false
  },
  {
    "veiculo": "Corolla XRS 2.0 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002115-6",
    "vendido": false
  },
  {
    "veiculo": "Corona Aut.",
    "marca": "Toyota",
    "cod_fipe": "002063-0",
    "vendido": false
  },
  {
    "veiculo": "Corona GLi Mec",
    "marca": "Toyota",
    "cod_fipe": "002024-9",
    "vendido": false
  },
  {
    "veiculo": "Corona Mec.",
    "marca": "Toyota",
    "cod_fipe": "002039-7",
    "vendido": false
  },
  {
    "veiculo": "ETIOS 1.3 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002121-0",
    "vendido": false
  },
  {
    "veiculo": "ETIOS CROSS 1.5 Flex 16V 5p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002148-2",
    "vendido": false
  },
  {
    "veiculo": "ETIOS CROSS 1.5 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002133-4",
    "vendido": false
  },
  {
    "veiculo": "ETIOS PLATINUM 1.5 Flex 16V 4p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002156-3",
    "vendido": false
  },
  {
    "veiculo": "ETIOS PLATINUM 1.5 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002134-2",
    "vendido": false
  },
  {
    "veiculo": "ETIOS PLATINUM Sed. 1.5 Flex 16V 4p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002157-1",
    "vendido": false
  },
  {
    "veiculo": "ETIOS PLATINUM Sed. 1.5 Flex 16V 4p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002135-0",
    "vendido": false
  },
  {
    "veiculo": "ETIOS READY! 1.5 Flex 16V 5p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002159-8",
    "vendido": false
  },
  {
    "veiculo": "ETIOS X  1.3 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002122-9",
    "vendido": false
  },
  {
    "veiculo": "ETIOS X 1.3 Flex 16V 5p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002154-7",
    "vendido": false
  },
  {
    "veiculo": "ETIOS X Sedan 1.5 Flex 16V 4p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002153-9",
    "vendido": false
  },
  {
    "veiculo": "ETIOS X Sedan 1.5 Flex 16V 4p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002125-3",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XLS 1.5 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002124-5",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XLS 1.5 Flex 5p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002150-4",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XLS Sedan 1.5 Flex 16V 4p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002149-0",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XLS Sedan 1.5 Flex 16V 4p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002127-0",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XS  1.3 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002123-7",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XS 1.5 Flex 16V 5p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002152-0",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XS 1.5 Flex 16V 5p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002132-6",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XS Sedan 1.5 Flex 16V 4p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002151-2",
    "vendido": false
  },
  {
    "veiculo": "ETIOS XS Sedan1.5 Flex 16V 4p Mec.",
    "marca": "Toyota",
    "cod_fipe": "002126-1",
    "vendido": false
  },
  {
    "veiculo": "Hilux 4x2 2.4 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002030-3",
    "vendido": false
  },
  {
    "veiculo": "Hilux 4x2 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002031-1",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD 4x2 2.4 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002014-1",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD 4x4 2.7 16V Flex Mec.",
    "marca": "Toyota",
    "cod_fipe": "002128-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD 4x4 2.8 Diesel Mec.",
    "marca": "Toyota",
    "cod_fipe": "002015-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD D4-D 4x2 2.5 16V 102cv TB Dies.",
    "marca": "Toyota",
    "cod_fipe": "002087-7",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD D4-D 4x4 2.5 16V 102cv TB Dies.",
    "marca": "Toyota",
    "cod_fipe": "002088-5",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD D4-D 4x4 3.0 TDI Dies. Mec.",
    "marca": "Toyota",
    "cod_fipe": "002119-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD DLX 4x2 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002032-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD DLX 4x4 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002033-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD DX 4x2 2.7 16V 142cv",
    "marca": "Toyota",
    "cod_fipe": "002068-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD DX 4x2 3.0 8V 90cv Diesel",
    "marca": "Toyota",
    "cod_fipe": "002069-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD DX 4x4 3.0 8V 90cv Diesel",
    "marca": "Toyota",
    "cod_fipe": "002075-3",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD Limited 4x4 3.0 TDI Diesel Aut.",
    "marca": "Toyota",
    "cod_fipe": "002137-7",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR 4x2 2.7 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002104-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR 4x2 2.7 16V/2.7 Flex Aut.",
    "marca": "Toyota",
    "cod_fipe": "002110-5",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR 4x4 2.8 TDI Diesel Aut.",
    "marca": "Toyota",
    "cod_fipe": "002142-3",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR 4x4 3.0 8V 116cv TB Diesel",
    "marca": "Toyota",
    "cod_fipe": "002077-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR 4x4 3.0 8V 90cv Diesel",
    "marca": "Toyota",
    "cod_fipe": "002076-1",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR D4-D 4x2 3.0 163cv TDI Dies.",
    "marca": "Toyota",
    "cod_fipe": "002089-3",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR D4-D 4x4 3.0  TDI Dies.",
    "marca": "Toyota",
    "cod_fipe": "002090-7",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR D4-D 4x4 3.0 TDI Dies Aut.",
    "marca": "Toyota",
    "cod_fipe": "002116-4",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SR5 4x4 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002041-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV 4x2 2.7 16V 142cv",
    "marca": "Toyota",
    "cod_fipe": "002072-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV 4x2 2.7 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002136-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV 4x2 3.0 8V 90cv Diesel",
    "marca": "Toyota",
    "cod_fipe": "002073-7",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV 4x4 2.7 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002114-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV 4x4 2.8 TDI Diesel Aut.",
    "marca": "Toyota",
    "cod_fipe": "002143-1",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV 4x4 3.0 8V 116cv TB Diesel",
    "marca": "Toyota",
    "cod_fipe": "002078-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV D4-D 4x2 3.0 163cv TDI Dies",
    "marca": "Toyota",
    "cod_fipe": "002091-5",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV D4-D 4x4 3.0  TDI Dies",
    "marca": "Toyota",
    "cod_fipe": "002092-3",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRV D4-D 4x4 3.0 TDI Diesel Aut",
    "marca": "Toyota",
    "cod_fipe": "002093-1",
    "vendido": false
  },
  {
    "veiculo": "Hilux CD SRX 4x4 2.8 TDI 16V Diesel Aut.",
    "marca": "Toyota",
    "cod_fipe": "002141-5",
    "vendido": false
  },
  {
    "veiculo": "Hilux Chassi 4x4 2.8 TDI Diesel Mec.",
    "marca": "Toyota",
    "cod_fipe": "002145-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux Chassi D4-D 4x4 2.5 102cv TB Dies.",
    "marca": "Toyota",
    "cod_fipe": "002094-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux Chassi D4-D 4x4 3.0 TDI Dies. Mec.",
    "marca": "Toyota",
    "cod_fipe": "002118-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS 4x4 2.4 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002016-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS 4x4 2.8 TDI Diesel Mec.",
    "marca": "Toyota",
    "cod_fipe": "002144-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS D4-D 4x2 2.5 16V 102cv TB Dies.",
    "marca": "Toyota",
    "cod_fipe": "002085-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS D4-D 4x4 2.5 16V 102cv TB Dies.",
    "marca": "Toyota",
    "cod_fipe": "002086-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS D4-D 4x4 3.0 TDI Dies. Mec.",
    "marca": "Toyota",
    "cod_fipe": "002117-2",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS DLX 4x2 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002047-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS DLX 4x4 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002048-6",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS DX 4x2 2.7 16V 142cv",
    "marca": "Toyota",
    "cod_fipe": "002067-2",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS DX 4x2 3.0 8V 90cv Diesel",
    "marca": "Toyota",
    "cod_fipe": "002070-2",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS DX 4x4 3.0 8V 90cv Diesel",
    "marca": "Toyota",
    "cod_fipe": "002074-5",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS SR5 4x4 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002040-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux CS SRV 4x2 2.7 16V 142cv",
    "marca": "Toyota",
    "cod_fipe": "002071-0",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 2.7 16V",
    "marca": "Toyota",
    "cod_fipe": "002064-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 3.4 V6",
    "marca": "Toyota",
    "cod_fipe": "002019-2",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 4x4 2.4 8V",
    "marca": "Toyota",
    "cod_fipe": "002017-6",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 4x4 2.8 Diesel",
    "marca": "Toyota",
    "cod_fipe": "002018-4",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 4x4 3.0 12V V6",
    "marca": "Toyota",
    "cod_fipe": "002051-6",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 4x4 3.0 24V V6",
    "marca": "Toyota",
    "cod_fipe": "002053-2",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 4x4 3.0 8V TB Diesel",
    "marca": "Toyota",
    "cod_fipe": "002052-4",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SR 4x2 2.7/ 2.7 Flex 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002107-5",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SR 4x2 2.7/2.7 Flex 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002106-7",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SR D4-D 4x4 3.0 TDI Dies. Aut ",
    "marca": "Toyota",
    "cod_fipe": "002120-2",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SRV 4x4 4.0 V6 24V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002105-9",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SRV D4-D 4x4 3.0 TDI Dies. Aut",
    "marca": "Toyota",
    "cod_fipe": "002096-6",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SRV D4-D 4x4 3.0 TDI Dies. Mec",
    "marca": "Toyota",
    "cod_fipe": "002095-8",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SRX 4x4 2.8 TDI 16V Dies. Aut.",
    "marca": "Toyota",
    "cod_fipe": "002146-6",
    "vendido": false
  },
  {
    "veiculo": "Hilux SW4 SRX 4x4 4.0 V6 24V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002147-4",
    "vendido": false
  },
  {
    "veiculo": "Land Cruiser 4WD 4.5 24V",
    "marca": "Toyota",
    "cod_fipe": "002054-0",
    "vendido": false
  },
  {
    "veiculo": "Land Cruiser Prado 3.0 4x4 TB Diesel Aut",
    "marca": "Toyota",
    "cod_fipe": "002082-6",
    "vendido": false
  },
  {
    "veiculo": "Land Cruiser Prado 3.0 4x4 TB Diesel Mec",
    "marca": "Toyota",
    "cod_fipe": "002081-8",
    "vendido": false
  },
  {
    "veiculo": "MR-2 Turbo 2.0",
    "marca": "Toyota",
    "cod_fipe": "002055-9",
    "vendido": false
  },
  {
    "veiculo": "Paseo",
    "marca": "Toyota",
    "cod_fipe": "002021-4",
    "vendido": false
  },
  {
    "veiculo": "Previa LE 2.4 16V",
    "marca": "Toyota",
    "cod_fipe": "002022-2",
    "vendido": false
  },
  {
    "veiculo": "Previa LX 2.5",
    "marca": "Toyota",
    "cod_fipe": "002056-7",
    "vendido": false
  },
  {
    "veiculo": "PRIUS HYBRID 1.8 16V 5p Aut.",
    "marca": "Toyota",
    "cod_fipe": "002129-6",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.0 4x2 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002130-0",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.0 4x4 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002066-4",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.0 4x4 16V Mec.",
    "marca": "Toyota",
    "cod_fipe": "002057-5",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.0 HIGH 4x2 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002138-5",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.0 TOP 4x2 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002140-7",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.4 4x2 16V 170cv Aut.",
    "marca": "Toyota",
    "cod_fipe": "002113-0",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.4 4x4 16V 170cv Aut.",
    "marca": "Toyota",
    "cod_fipe": "002097-4",
    "vendido": false
  },
  {
    "veiculo": "RAV4 2.5 4x4 16V Aut.",
    "marca": "Toyota",
    "cod_fipe": "002131-8",
    "vendido": false
  },
  {
    "veiculo": "Supra",
    "marca": "Toyota",
    "cod_fipe": "002023-0",
    "vendido": false
  },
  {
    "veiculo": "T-100 3.4 V6",
    "marca": "Toyota",
    "cod_fipe": "002058-3",
    "vendido": false
  },
  {
    "veiculo": "PANTANAL 3.0 TDI Elet. 4x2 CS Diesel",
    "marca": "Troller",
    "cod_fipe": "056008-1",
    "vendido": false
  },
  {
    "veiculo": "PANTANAL 3.0 TDI Elet. 4x4 CS Diesel",
    "marca": "Troller",
    "cod_fipe": "056009-0",
    "vendido": false
  },
  {
    "veiculo": "RF Esport 4x4 2.0",
    "marca": "Troller",
    "cod_fipe": "056001-4",
    "vendido": false
  },
  {
    "veiculo": "RF Esport T-4 4x4 2.0 Cap. Lona",
    "marca": "Troller",
    "cod_fipe": "056002-2",
    "vendido": false
  },
  {
    "veiculo": "RF Esport T-4 4x4 2.0 Cap. Rígida",
    "marca": "Troller",
    "cod_fipe": "056003-0",
    "vendido": false
  },
  {
    "veiculo": "T-4 4x4 2.8 TB Int. Cap. Lona Diesel",
    "marca": "Troller",
    "cod_fipe": "056004-9",
    "vendido": false
  },
  {
    "veiculo": "T-4 4x4 2.8 TB Int. Cap. Rígida Diesel",
    "marca": "Troller",
    "cod_fipe": "056005-7",
    "vendido": false
  },
  {
    "veiculo": "T-4 4x4 3.0 TB Int. Cap. Lona Diesel",
    "marca": "Troller",
    "cod_fipe": "056006-5",
    "vendido": false
  },
  {
    "veiculo": "T-4 4x4 3.0 TB Int. Cap. Rígida Diesel",
    "marca": "Troller",
    "cod_fipe": "056007-3",
    "vendido": false
  },
  {
    "veiculo": "T-4 4x4 3.2 20V Tdi Cap. Rígida Diesel",
    "marca": "Troller",
    "cod_fipe": "056012-0",
    "vendido": false
  },
  {
    "veiculo": "T-4 4x4 3.2 TGV tdi Cap. Rígida Diesel",
    "marca": "Troller",
    "cod_fipe": "056011-1",
    "vendido": false
  },
  {
    "veiculo": "T-4 BOLD 4x4 3.2 Tdi Cap. Rígida Diesel",
    "marca": "Troller",
    "cod_fipe": "056013-8",
    "vendido": false
  },
  {
    "veiculo": "T-4 DESERT STORM 4x4 3.0 TB Int Diesel",
    "marca": "Troller",
    "cod_fipe": "056010-3",
    "vendido": false
  },
  {
    "veiculo": "440 Turbo 1.8",
    "marca": "Volvo",
    "cod_fipe": "029029-7",
    "vendido": false
  },
  {
    "veiculo": "460 GLT 2.0/ Turbo 1.8",
    "marca": "Volvo",
    "cod_fipe": "029001-7",
    "vendido": false
  },
  {
    "veiculo": "850 GLE 2.5 20V",
    "marca": "Volvo",
    "cod_fipe": "029023-8",
    "vendido": false
  },
  {
    "veiculo": "850 GLE SW 20V",
    "marca": "Volvo",
    "cod_fipe": "029024-6",
    "vendido": false
  },
  {
    "veiculo": "850 GLT 2.5 20V",
    "marca": "Volvo",
    "cod_fipe": "029025-4",
    "vendido": false
  },
  {
    "veiculo": "850 GLT SW 2.5 20V",
    "marca": "Volvo",
    "cod_fipe": "029031-9",
    "vendido": false
  },
  {
    "veiculo": "850 R SW 2.3 Turbo",
    "marca": "Volvo",
    "cod_fipe": "029032-7",
    "vendido": false
  },
  {
    "veiculo": "850 Sedan",
    "marca": "Volvo",
    "cod_fipe": "029002-5",
    "vendido": false
  },
  {
    "veiculo": "850 T-5 SW 2.5 BI-Turbo/ 2.3 Turbo",
    "marca": "Volvo",
    "cod_fipe": "029003-3",
    "vendido": false
  },
  {
    "veiculo": "850 TURBO 20V/ R Turbo 2.3",
    "marca": "Volvo",
    "cod_fipe": "029026-2",
    "vendido": false
  },
  {
    "veiculo": "940 Turbo/ SW Turbo 3.0",
    "marca": "Volvo",
    "cod_fipe": "029033-5",
    "vendido": false
  },
  {
    "veiculo": "960 Sedan",
    "marca": "Volvo",
    "cod_fipe": "029004-1",
    "vendido": false
  },
  {
    "veiculo": "C30 2.0 145cv",
    "marca": "Volvo",
    "cod_fipe": "029072-6",
    "vendido": false
  },
  {
    "veiculo": "C30 2.4 170cv Aut",
    "marca": "Volvo",
    "cod_fipe": "029073-4",
    "vendido": false
  },
  {
    "veiculo": "C30 T-5 2.5 220/ 230cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029074-2",
    "vendido": false
  },
  {
    "veiculo": "C30 T-5 2.5 230cv Mec.",
    "marca": "Volvo",
    "cod_fipe": "029075-0",
    "vendido": false
  },
  {
    "veiculo": "C30 T-5 R-DESIGN 2.5 230cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029080-7",
    "vendido": false
  },
  {
    "veiculo": "C70 Cabriolet",
    "marca": "Volvo",
    "cod_fipe": "029027-0",
    "vendido": false
  },
  {
    "veiculo": "C70 Cupê",
    "marca": "Volvo",
    "cod_fipe": "029007-6",
    "vendido": false
  },
  {
    "veiculo": "S40 1.8 Aut",
    "marca": "Volvo",
    "cod_fipe": "029005-0",
    "vendido": false
  },
  {
    "veiculo": "S40 1.8 Mec.",
    "marca": "Volvo",
    "cod_fipe": "029034-3",
    "vendido": false
  },
  {
    "veiculo": "S40 2.0 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029043-2",
    "vendido": false
  },
  {
    "veiculo": "S40 2.0 Mec.",
    "marca": "Volvo",
    "cod_fipe": "029011-4",
    "vendido": false
  },
  {
    "veiculo": "S40 2.0 T",
    "marca": "Volvo",
    "cod_fipe": "029012-2",
    "vendido": false
  },
  {
    "veiculo": "S40 2.4 140cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029069-6",
    "vendido": false
  },
  {
    "veiculo": "S40 2.4 170cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029065-3",
    "vendido": false
  },
  {
    "veiculo": "S40 T 2.0  Turbo Aut.",
    "marca": "Volvo",
    "cod_fipe": "029042-4",
    "vendido": false
  },
  {
    "veiculo": "S40 T-4",
    "marca": "Volvo",
    "cod_fipe": "029013-0",
    "vendido": false
  },
  {
    "veiculo": "S40 T-4 ARM Aut.",
    "marca": "Volvo",
    "cod_fipe": "029048-3",
    "vendido": false
  },
  {
    "veiculo": "S40 T-4 ARM Mec.",
    "marca": "Volvo",
    "cod_fipe": "029050-5",
    "vendido": false
  },
  {
    "veiculo": "S40 T-5 2.5 220/230cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029061-0",
    "vendido": false
  },
  {
    "veiculo": "S60 R 2.5 300cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029060-2",
    "vendido": false
  },
  {
    "veiculo": "S60 R 2.5 300cv Mec.",
    "marca": "Volvo",
    "cod_fipe": "029063-7",
    "vendido": false
  },
  {
    "veiculo": "S60 T 2.0 4p",
    "marca": "Volvo",
    "cod_fipe": "029057-2",
    "vendido": false
  },
  {
    "veiculo": "S60 T 2.4/ 2.5",
    "marca": "Volvo",
    "cod_fipe": "029054-8",
    "vendido": false
  },
  {
    "veiculo": "S60 T-4 1.6 180cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029082-3",
    "vendido": false
  },
  {
    "veiculo": "S60 T-4 KINETIC 2.0 190cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029114-5",
    "vendido": false
  },
  {
    "veiculo": "S60 T-4 MOMENTUM 2.0 190cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029115-3",
    "vendido": false
  },
  {
    "veiculo": "S60 T-5 2.0 240cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029083-1",
    "vendido": false
  },
  {
    "veiculo": "S60 T-5 2.3",
    "marca": "Volvo",
    "cod_fipe": "029053-0",
    "vendido": false
  },
  {
    "veiculo": "S60 T-5 KINETIC 2.0 245cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029094-7",
    "vendido": false
  },
  {
    "veiculo": "S60 T-5 MOMENTUM 2.0 245cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029093-9",
    "vendido": false
  },
  {
    "veiculo": "S60 T-5 R-DESIGN 2.0 240cv 4p",
    "marca": "Volvo",
    "cod_fipe": "029090-4",
    "vendido": false
  },
  {
    "veiculo": "S60 T-6 3.0 304cv AWD 4p",
    "marca": "Volvo",
    "cod_fipe": "029084-0",
    "vendido": false
  },
  {
    "veiculo": "S60 T-6 R-DESIGN 2.0 306cv FWD 4p",
    "marca": "Volvo",
    "cod_fipe": "029105-6",
    "vendido": false
  },
  {
    "veiculo": "S60 T-6 R-DESIGN 3.0 AWD 4p",
    "marca": "Volvo",
    "cod_fipe": "029086-6",
    "vendido": false
  },
  {
    "veiculo": "S70 2.5",
    "marca": "Volvo",
    "cod_fipe": "029014-9",
    "vendido": false
  },
  {
    "veiculo": "S70 2.5 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029037-8",
    "vendido": false
  },
  {
    "veiculo": "S70 R",
    "marca": "Volvo",
    "cod_fipe": "029008-4",
    "vendido": false
  },
  {
    "veiculo": "S70 R Aut.",
    "marca": "Volvo",
    "cod_fipe": "029038-6",
    "vendido": false
  },
  {
    "veiculo": "S70 T-5 2.3",
    "marca": "Volvo",
    "cod_fipe": "029015-7",
    "vendido": false
  },
  {
    "veiculo": "S80 2.9",
    "marca": "Volvo",
    "cod_fipe": "029016-5",
    "vendido": false
  },
  {
    "veiculo": "S80 2.9 ARM",
    "marca": "Volvo",
    "cod_fipe": "029046-7",
    "vendido": false
  },
  {
    "veiculo": "S80 3.2 238cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029070-0",
    "vendido": false
  },
  {
    "veiculo": "S80 4.4 V8 315cv AWD Aut.",
    "marca": "Volvo",
    "cod_fipe": "029071-8",
    "vendido": false
  },
  {
    "veiculo": "S80 T6 2.8 BI-Turbo",
    "marca": "Volvo",
    "cod_fipe": "029009-2",
    "vendido": false
  },
  {
    "veiculo": "S80 T6 2.8 BI-Turbo ARM",
    "marca": "Volvo",
    "cod_fipe": "029047-5",
    "vendido": false
  },
  {
    "veiculo": "S80 T-6 Executive 2.8",
    "marca": "Volvo",
    "cod_fipe": "029055-6",
    "vendido": false
  },
  {
    "veiculo": "S80 T-6 Executive ARM 2.8 24v",
    "marca": "Volvo",
    "cod_fipe": "029056-4",
    "vendido": false
  },
  {
    "veiculo": "V40 1.8 Aut",
    "marca": "Volvo",
    "cod_fipe": "029006-8",
    "vendido": false
  },
  {
    "veiculo": "V40 1.8 Mec.",
    "marca": "Volvo",
    "cod_fipe": "029035-1",
    "vendido": false
  },
  {
    "veiculo": "V40 2.0",
    "marca": "Volvo",
    "cod_fipe": "029017-3",
    "vendido": false
  },
  {
    "veiculo": "V40 2.0 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029040-8",
    "vendido": false
  },
  {
    "veiculo": "V40 2.0 Turbo",
    "marca": "Volvo",
    "cod_fipe": "029028-9",
    "vendido": false
  },
  {
    "veiculo": "V40 T-3 KINETIC 1.5 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029103-0",
    "vendido": false
  },
  {
    "veiculo": "V40 T-4",
    "marca": "Volvo",
    "cod_fipe": "029019-0",
    "vendido": false
  },
  {
    "veiculo": "V40 T-4 ARM Aut.",
    "marca": "Volvo",
    "cod_fipe": "029049-1",
    "vendido": false
  },
  {
    "veiculo": "V40 T-4 Aut./Mec.",
    "marca": "Volvo",
    "cod_fipe": "029039-4",
    "vendido": false
  },
  {
    "veiculo": "V40 T-4 Cross Country 2.0 FWD Aut.",
    "marca": "Volvo",
    "cod_fipe": "029112-9",
    "vendido": false
  },
  {
    "veiculo": "V40 T-4 KINETIC 2.0 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029111-0",
    "vendido": false
  },
  {
    "veiculo": "V40 T-4 MOMENTUM 2.0 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029106-4",
    "vendido": false
  },
  {
    "veiculo": "V40 T-5 Cross Country 2.0 Awd Aut.",
    "marca": "Volvo",
    "cod_fipe": "029092-0",
    "vendido": false
  },
  {
    "veiculo": "V40 T-5 R-DESIGN 2.0 Aut.",
    "marca": "Volvo",
    "cod_fipe": "029091-2",
    "vendido": false
  },
  {
    "veiculo": "V50 2.4 20V 140cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029077-7",
    "vendido": false
  },
  {
    "veiculo": "V50 2.4 20V 170cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029066-1",
    "vendido": false
  },
  {
    "veiculo": "V50 T-5 2.5 220cv Aut.",
    "marca": "Volvo",
    "cod_fipe": "029062-9",
    "vendido": false
  },
  {
    "veiculo": "V60 T-4 KINETIC 2.0 190cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029116-1",
    "vendido": false
  },
  {
    "veiculo": "V60 T-4 MOMENTUM 2.0 190cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029113-7",
    "vendido": false
  },
  {
    "veiculo": "V60 T-5 KINETIC 2.0 245cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029096-3",
    "vendido": false
  },
  {
    "veiculo": "V60 T-5 MOMENTUM 2.0 245cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029095-5",
    "vendido": false
  },
  {
    "veiculo": "V60 T-5 R-DESING 2.0 5p",
    "marca": "Volvo",
    "cod_fipe": "029088-2",
    "vendido": false
  },
  {
    "veiculo": "V60 T-6 R-DESIGN 2.0 FWD 4p",
    "marca": "Volvo",
    "cod_fipe": "029107-2",
    "vendido": false
  },
  {
    "veiculo": "V60 T-6 R-DESIGN 3.0 AWD 4p",
    "marca": "Volvo",
    "cod_fipe": "029089-0",
    "vendido": false
  },
  {
    "veiculo": "V70 2.5",
    "marca": "Volvo",
    "cod_fipe": "029020-3",
    "vendido": false
  },
  {
    "veiculo": "V70 Cross Country 2.4",
    "marca": "Volvo",
    "cod_fipe": "029052-1",
    "vendido": false
  },
  {
    "veiculo": "V70 R 2.5 300cv AWD Aut.",
    "marca": "Volvo",
    "cod_fipe": "029010-6",
    "vendido": false
  },
  {
    "veiculo": "V70 R 2.5 300cv AWD Mec.",
    "marca": "Volvo",
    "cod_fipe": "029064-5",
    "vendido": false
  },
  {
    "veiculo": "V70 T 2.0 20v 180cv 4p Aut.",
    "marca": "Volvo",
    "cod_fipe": "029058-0",
    "vendido": false
  },
  {
    "veiculo": "V70 T 2.4",
    "marca": "Volvo",
    "cod_fipe": "029044-0",
    "vendido": false
  },
  {
    "veiculo": "V70 T 2.4/ 2.5 Premium",
    "marca": "Volvo",
    "cod_fipe": "029045-9",
    "vendido": false
  },
  {
    "veiculo": "V70 T5 2.3",
    "marca": "Volvo",
    "cod_fipe": "029022-0",
    "vendido": false
  },
  {
    "veiculo": "V70 XC/ XC 70",
    "marca": "Volvo",
    "cod_fipe": "029021-1",
    "vendido": false
  },
  {
    "veiculo": "XC 60 2.0 T5  5p",
    "marca": "Volvo",
    "cod_fipe": "029085-8",
    "vendido": false
  },
  {
    "veiculo": "XC 60 3.0 AWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029078-5",
    "vendido": false
  },
  {
    "veiculo": "XC 60 D-5 KINETIC 2.4 AWD Diesel 5p",
    "marca": "Volvo",
    "cod_fipe": "029109-9",
    "vendido": false
  },
  {
    "veiculo": "XC 60 D-5 MOMENTUM 2.4  AWD Diesel  5p",
    "marca": "Volvo",
    "cod_fipe": "029108-0",
    "vendido": false
  },
  {
    "veiculo": "XC 60 R-DESIGN 3.0 304cv AWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029079-3",
    "vendido": false
  },
  {
    "veiculo": "XC 60 T-5 INSCRIPTION 2.0 245 cv FWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029110-2",
    "vendido": false
  },
  {
    "veiculo": "XC 60 T-5 KINETIC 2.0 245cv FWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029102-1",
    "vendido": false
  },
  {
    "veiculo": "XC 60 T-5 MOMENTUM 2.0 245cv FWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029104-8",
    "vendido": false
  },
  {
    "veiculo": "XC 60 T-5 R-DESIGN 2.0 FWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029087-4",
    "vendido": false
  },
  {
    "veiculo": "XC 60 T-6  R-DESIGN 2.0 306cv FWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029101-3",
    "vendido": false
  },
  {
    "veiculo": "XC 60 T-6 INCRIPTION 2.0 FWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029097-1",
    "vendido": false
  },
  {
    "veiculo": "XC 90 2.5T 210cv AWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029067-0",
    "vendido": false
  },
  {
    "veiculo": "XC 90 3.2 238cv AWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029076-9",
    "vendido": false
  },
  {
    "veiculo": "XC 90 4.4 V8 315cv AWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029068-8",
    "vendido": false
  },
  {
    "veiculo": "XC 90 D-5 INSCRIPTION 2.0 235cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029118-8",
    "vendido": false
  },
  {
    "veiculo": "XC 90 D-5 MOMENTUM 2.0 235cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029117-0",
    "vendido": false
  },
  {
    "veiculo": "XC 90 T6 2.9 BI-TB 272cv AWD 5p",
    "marca": "Volvo",
    "cod_fipe": "029059-9",
    "vendido": false
  },
  {
    "veiculo": "XC 90 T-6 FIRST EDITION 2.0 320cv 5p",
    "marca": "Volvo",
    "cod_fipe": "029100-5",
    "vendido": false
  },
  {
    "veiculo": "XC 90 T-6 INSCRIPTION 2.0 320CV 5p",
    "marca": "Volvo",
    "cod_fipe": "029099-8",
    "vendido": false
  },
  {
    "veiculo": "XC 90 T-6 MOMENTUM 2.0 320cv 5P",
    "marca": "Volvo",
    "cod_fipe": "029098-0",
    "vendido": false
  },
  {
    "veiculo": "AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005329-5",
    "vendido": false
  },
  {
    "veiculo": "AMAROK CD2.0 16V/S CD2.0 16V TDI 4x4 Die",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005330-9",
    "vendido": false
  },
  {
    "veiculo": "AMAROK CS2.0 16V/S2.0 16V TDI 4x2 Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005337-6",
    "vendido": false
  },
  {
    "veiculo": "AMAROK CS2.0 16V/S2.0 16V TDI 4x4 Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005338-4",
    "vendido": false
  },
  {
    "veiculo": "AMAROK Hig. Extreme CD 2.0 4x4 Dies. Aut",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005470-4",
    "vendido": false
  },
  {
    "veiculo": "AMAROK Hig.ULTIMATE CD 2.0 4x4 Dies. Aut",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005464-0",
    "vendido": false
  },
  {
    "veiculo": "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005340-6",
    "vendido": false
  },
  {
    "veiculo": "AMAROK Highline CD 2.0 16V TDI 4x4 Dies.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005320-1",
    "vendido": false
  },
  {
    "veiculo": "AMAROK SE CD 2.0 16V TDI 4x4 Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005325-2",
    "vendido": false
  },
  {
    "veiculo": "AMAROK T. Dark Label CD 2.0 4x4 Dies Aut",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005443-7",
    "vendido": false
  },
  {
    "veiculo": "AMAROK Trendline CD 2.0 16V TDI 4x4 Dies",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005323-6",
    "vendido": false
  },
  {
    "veiculo": "AMAROK Trendline CD 2.0 TDI 4X4 Dies Aut",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005349-0",
    "vendido": false
  },
  {
    "veiculo": "Apolo GL 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005025-3",
    "vendido": false
  },
  {
    "veiculo": "Apolo GLS/ Vip 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005026-1",
    "vendido": false
  },
  {
    "veiculo": "Bora 2.0 8v Comfortline Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005156-0",
    "vendido": false
  },
  {
    "veiculo": "Bora 2.0 8v Comfortline Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005155-1",
    "vendido": false
  },
  {
    "veiculo": "Bora 2.0/ 2.0 Flex 8v Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005154-3",
    "vendido": false
  },
  {
    "veiculo": "Bora 2.0/ 2.0 Flex 8v Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005153-5",
    "vendido": false
  },
  {
    "veiculo": "Caravelle 2.4 Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005083-0",
    "vendido": false
  },
  {
    "veiculo": "Corrado 2.0 Turbo",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005118-7",
    "vendido": false
  },
  {
    "veiculo": "Corrado G-60 2.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005117-9",
    "vendido": false
  },
  {
    "veiculo": "CROSSFOX  1.6 T. Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005418-6",
    "vendido": false
  },
  {
    "veiculo": "CROSSFOX  I MOTION 1.6 T. Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005419-4",
    "vendido": false
  },
  {
    "veiculo": "CROSSFOX 1.6 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005225-6",
    "vendido": false
  },
  {
    "veiculo": "CROSSFOX I MOTION 1.6 Mi T. Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005342-2",
    "vendido": false
  },
  {
    "veiculo": "EOS Cab. 2.0 Turbo FSI Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005287-6",
    "vendido": false
  },
  {
    "veiculo": "Eurovan 2.4 Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005084-9",
    "vendido": false
  },
  {
    "veiculo": "Fox 1.0 Mi Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005307-4",
    "vendido": false
  },
  {
    "veiculo": "Fox 1.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005308-2",
    "vendido": false
  },
  {
    "veiculo": "Fox 1.6 Mi I MOTION Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005305-8",
    "vendido": false
  },
  {
    "veiculo": "Fox 1.6 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005306-6",
    "vendido": false
  },
  {
    "veiculo": "Fox BLUEMOTION 1.0 Mi Total Flex 12V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005352-0",
    "vendido": false
  },
  {
    "veiculo": "Fox BLUEMOTION 1.0 Mi Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005353-8",
    "vendido": false
  },
  {
    "veiculo": "Fox BlueMotion 1.6 Mi Total Flex 3p.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005343-0",
    "vendido": false
  },
  {
    "veiculo": "Fox BlueMotion 1.6 Mi Total Flex 5p.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005344-9",
    "vendido": false
  },
  {
    "veiculo": "Fox City 1.0 Mi/ 1.0Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005205-1",
    "vendido": false
  },
  {
    "veiculo": "Fox City 1.0Mi/ 1.0Mi Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005198-5",
    "vendido": false
  },
  {
    "veiculo": "Fox Comfortline 1.0 Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005433-0",
    "vendido": false
  },
  {
    "veiculo": "Fox Comfortline 1.0 Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005407-0",
    "vendido": false
  },
  {
    "veiculo": "Fox Comfortline 1.6 Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005405-4",
    "vendido": false
  },
  {
    "veiculo": "Fox Comfortline I Motion 1.6 Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005404-6",
    "vendido": false
  },
  {
    "veiculo": "Fox extreme 1.6 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005274-4",
    "vendido": false
  },
  {
    "veiculo": "Fox Highline I MOTION 1.6 Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005402-0",
    "vendido": false
  },
  {
    "veiculo": "Fox Highline1.6 Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005403-8",
    "vendido": false
  },
  {
    "veiculo": "Fox PEPPER 1.6 Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005421-6",
    "vendido": false
  },
  {
    "veiculo": "Fox PEPPER I MOTION 1.6 Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005422-4",
    "vendido": false
  },
  {
    "veiculo": "Fox Plus 1.0Mi/ 1.0Mi Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005199-3",
    "vendido": false
  },
  {
    "veiculo": "Fox Plus 1.0Mi/ 1.0Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005206-0",
    "vendido": false
  },
  {
    "veiculo": "Fox Plus 1.6Mi/ 1.6Mi Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005200-0",
    "vendido": false
  },
  {
    "veiculo": "Fox Plus 1.6Mi/ 1.6Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005207-8",
    "vendido": false
  },
  {
    "veiculo": "Fox PRIME/Hghi. IMOTION 1.6 T.Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005304-0",
    "vendido": false
  },
  {
    "veiculo": "Fox PRIME/Higli. 1.6 Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005303-1",
    "vendido": false
  },
  {
    "veiculo": "Fox Rock in Rio 1.6 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005332-5",
    "vendido": false
  },
  {
    "veiculo": "Fox Route 1.0 Mi Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005262-0",
    "vendido": false
  },
  {
    "veiculo": "Fox Route 1.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005263-9",
    "vendido": false
  },
  {
    "veiculo": "Fox Route 1.6 Mi Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005264-7",
    "vendido": false
  },
  {
    "veiculo": "Fox Route 1.6 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005265-5",
    "vendido": false
  },
  {
    "veiculo": "Fox RUN 1.6 Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005462-3",
    "vendido": false
  },
  {
    "veiculo": "Fox SELEÇÃO 1.0 Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005358-9",
    "vendido": false
  },
  {
    "veiculo": "Fox SELEÇÃO 1.6 Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005359-7",
    "vendido": false
  },
  {
    "veiculo": "Fox SELEÇÃO IMOTION 1.6 Mi T. Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005371-6",
    "vendido": false
  },
  {
    "veiculo": "Fox Sportline/Sports 1.0 Tot.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005212-4",
    "vendido": false
  },
  {
    "veiculo": "Fox Sportline/Sports 1.0/1.0 Tot.Flex 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005201-9",
    "vendido": false
  },
  {
    "veiculo": "Fox Sportline/Sports 1.6/1.6 Tot.Flex 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005202-7",
    "vendido": false
  },
  {
    "veiculo": "Fox Sportline/Sports 1.6/1.6 Tot.Flex 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005208-6",
    "vendido": false
  },
  {
    "veiculo": "Fox SUNRISE 1.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005293-0",
    "vendido": false
  },
  {
    "veiculo": "Fox TRACK 1.0 Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005444-5",
    "vendido": false
  },
  {
    "veiculo": "Fox Trendline 1.0 Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005434-8",
    "vendido": false
  },
  {
    "veiculo": "Fox Trendline 1.0 Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005401-1",
    "vendido": false
  },
  {
    "veiculo": "Fox Trendline 1.6 Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005406-2",
    "vendido": false
  },
  {
    "veiculo": "Fusca",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005027-0",
    "vendido": false
  },
  {
    "veiculo": "Fusca 2.0 R-Line TSI 16V Aut. ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005420-8",
    "vendido": false
  },
  {
    "veiculo": "Fusca 2.0 TSI 16V Aut. ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005348-1",
    "vendido": false
  },
  {
    "veiculo": "Fusca 2.0 TSI 16V Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005347-3",
    "vendido": false
  },
  {
    "veiculo": "Gol (novo) 1.0 Mi Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005345-7",
    "vendido": false
  },
  {
    "veiculo": "Gol (novo) 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005275-2",
    "vendido": false
  },
  {
    "veiculo": "Gol (novo) 1.6 Mi Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005346-5",
    "vendido": false
  },
  {
    "veiculo": "Gol (novo) 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005276-0",
    "vendido": false
  },
  {
    "veiculo": "Gol (novo) 1.6 Power/Highi T.Flex 8v 4P",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005277-9",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Mi FUN/ Highway/ Sport 16V  2/4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005159-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Plus 16v 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005148-9",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Plus 16v 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005147-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Plus 8v 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005150-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Plus 8v 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005149-7",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Power 16v 76cv 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005162-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Total Flex 8V 5p (25 Anos)",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005341-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Trend/ Power 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005163-2",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.0 Trend/ Power 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005164-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 I MOTI.Power/Highli T.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005310-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi I MOTION Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005350-3",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi Plus Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005197-7",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi Plus Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005196-9",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi Power Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005190-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi Rallye I MOTION T. Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005324-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi Rallye Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005210-8",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi/ 1.6i 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005078-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.6 Mi/ Power 1.6 Mi 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005124-1",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.8 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005104-7",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.8 Mi 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005125-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.8 Mi Power Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005216-7",
    "vendido": false
  },
  {
    "veiculo": "Gol 1.8 Mi Rallye Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005217-5",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 (modelo antigo)",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005028-8",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi 16V 2p Turbo",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005144-6",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi 16V 4p Turbo",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005146-2",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi 16V/ Ouro  2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005002-4",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi 16V/ Ouro 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005126-8",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi 2p  / 1000i",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005001-6",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005127-6",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi Plus 16V 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005004-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000 Mi Plus 8v 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005030-0",
    "vendido": false
  },
  {
    "veiculo": "Gol 1000i Plus 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005029-6",
    "vendido": false
  },
  {
    "veiculo": "Gol 2.0 Mi 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005105-5",
    "vendido": false
  },
  {
    "veiculo": "Gol 2.0 Mi 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005128-4",
    "vendido": false
  },
  {
    "veiculo": "Gol BLACK 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005339-2",
    "vendido": false
  },
  {
    "veiculo": "Gol City (Trend) 1.0 Mi Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005227-2",
    "vendido": false
  },
  {
    "veiculo": "Gol City (Trend) 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005228-0",
    "vendido": false
  },
  {
    "veiculo": "Gol City 1.0 Mi 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005179-9",
    "vendido": false
  },
  {
    "veiculo": "Gol City 1.0 Mi 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005180-2",
    "vendido": false
  },
  {
    "veiculo": "Gol City 1.6 Mi 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005181-0",
    "vendido": false
  },
  {
    "veiculo": "Gol City 1.6 Mi 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005182-9",
    "vendido": false
  },
  {
    "veiculo": "Gol City 1.6 Mi Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005229-9",
    "vendido": false
  },
  {
    "veiculo": "Gol City 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005195-0",
    "vendido": false
  },
  {
    "veiculo": "Gol CL 1.6 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005005-9",
    "vendido": false
  },
  {
    "veiculo": "Gol CL 1.8 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005006-7",
    "vendido": false
  },
  {
    "veiculo": "Gol CLi / CL 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005033-4",
    "vendido": false
  },
  {
    "veiculo": "Gol CLi / CL/ Copa/ Stones 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005032-6",
    "vendido": false
  },
  {
    "veiculo": "Gol Comfortline 1.0 T. Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005456-9",
    "vendido": false
  },
  {
    "veiculo": "Gol Comfortline 1.0 T. Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005389-9",
    "vendido": false
  },
  {
    "veiculo": "Gol Comfortline 1.0 T. Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005390-2",
    "vendido": false
  },
  {
    "veiculo": "Gol Comfortline 1.6 T. Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005391-0",
    "vendido": false
  },
  {
    "veiculo": "Gol Comfortline 1.6 T. Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005392-9",
    "vendido": false
  },
  {
    "veiculo": "Gol COPA 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005243-4",
    "vendido": false
  },
  {
    "veiculo": "Gol COPA 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005244-2",
    "vendido": false
  },
  {
    "veiculo": "Gol ECOMOTION  1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005317-1",
    "vendido": false
  },
  {
    "veiculo": "Gol ECOMOTION 1.0 Mi Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005316-3",
    "vendido": false
  },
  {
    "veiculo": "Gol Furgao 1.0 mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005031-8",
    "vendido": false
  },
  {
    "veiculo": "Gol Furgão 1.6 Mi/ 1.6i/ 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005119-5",
    "vendido": false
  },
  {
    "veiculo": "Gol GL 1.6 Mi/Star 1.6 e 1.8/Atlanta 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005034-2",
    "vendido": false
  },
  {
    "veiculo": "Gol GL 1.8 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005007-5",
    "vendido": false
  },
  {
    "veiculo": "Gol GLi / GL/ Atlanta 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005035-0",
    "vendido": false
  },
  {
    "veiculo": "Gol GLS 2.0 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005080-6",
    "vendido": false
  },
  {
    "veiculo": "Gol GT/GTS 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005036-9",
    "vendido": false
  },
  {
    "veiculo": "Gol GTi 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005040-7",
    "vendido": false
  },
  {
    "veiculo": "Gol GTi 2000 16V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005041-5",
    "vendido": false
  },
  {
    "veiculo": "Gol I MOTION 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005309-0",
    "vendido": false
  },
  {
    "veiculo": "Gol I MOTION Comfort. 1.6 T. Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005393-7",
    "vendido": false
  },
  {
    "veiculo": "Gol I MOTION Comfort. 1.6 T. Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005394-5",
    "vendido": false
  },
  {
    "veiculo": "Gol I Motion Trendline 1.6 T. Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005411-9",
    "vendido": false
  },
  {
    "veiculo": "Gol I Motion Trendline 1.6 T. Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005398-8",
    "vendido": false
  },
  {
    "veiculo": "Gol L 1.3/ L/ LS/ C/ S/ BX/ Plus 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005103-9",
    "vendido": false
  },
  {
    "veiculo": "Gol Plus 1.0 Mi Total Flex 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005230-2",
    "vendido": false
  },
  {
    "veiculo": "Gol Plus 1.0 Mi Total Flex 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005231-0",
    "vendido": false
  },
  {
    "veiculo": "Gol Rallye 1.6 T. Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005395-3",
    "vendido": false
  },
  {
    "veiculo": "Gol Rallye I MOTION 1.6 T. Flex 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005396-1",
    "vendido": false
  },
  {
    "veiculo": "Gol Rock in Rio 1.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005331-7",
    "vendido": false
  },
  {
    "veiculo": "Gol SELEÇÃO 1.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005318-0",
    "vendido": false
  },
  {
    "veiculo": "Gol SELEÇÃO 1.6 I MOTION T.Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005364-3",
    "vendido": false
  },
  {
    "veiculo": "Gol SELEÇÃO 1.6 Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005363-5",
    "vendido": false
  },
  {
    "veiculo": "Gol Special 1.0 Mi 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005189-6",
    "vendido": false
  },
  {
    "veiculo": "Gol Special 1.0 Total Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005415-1",
    "vendido": false
  },
  {
    "veiculo": "Gol Special 1.0 Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005414-3",
    "vendido": false
  },
  {
    "veiculo": "Gol Special 1.6 Mi 8V 99cv 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005178-0",
    "vendido": false
  },
  {
    "veiculo": "Gol Special/ Special Xtreme 1.0 Mi 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005079-2",
    "vendido": false
  },
  {
    "veiculo": "Gol TECH 1.0 Mi Total Flex 8V 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005253-1",
    "vendido": false
  },
  {
    "veiculo": "Gol TECH 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005254-0",
    "vendido": false
  },
  {
    "veiculo": "Gol TRACK 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005351-1",
    "vendido": false
  },
  {
    "veiculo": "Gol TRACK 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005469-0",
    "vendido": false
  },
  {
    "veiculo": "Gol Trendline 1.0 T.Flex 12V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005461-5",
    "vendido": false
  },
  {
    "veiculo": "Gol Trendline 1.0 T.Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005455-0",
    "vendido": false
  },
  {
    "veiculo": "Gol Trendline 1.0 T.Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005383-0",
    "vendido": false
  },
  {
    "veiculo": "Gol Trendline 1.0 T.Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005384-8",
    "vendido": false
  },
  {
    "veiculo": "Gol Trendline 1.6 T.Flex 8V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005412-7",
    "vendido": false
  },
  {
    "veiculo": "Gol Trendline 1.6 T.Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005397-0",
    "vendido": false
  },
  {
    "veiculo": "Gol TSi 1.8/ 1.8Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005037-7",
    "vendido": false
  },
  {
    "veiculo": "Gol TSi 2000 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005038-5",
    "vendido": false
  },
  {
    "veiculo": "Golf  BLACK EDITON 2.0 Mi T. Flex 8V Tip",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005314-7",
    "vendido": false
  },
  {
    "veiculo": "Golf  TECH 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005273-6",
    "vendido": false
  },
  {
    "veiculo": "Golf 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005252-3",
    "vendido": false
  },
  {
    "veiculo": "Golf 1.6 Mi Trip/ Sport 101cv 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005187-0",
    "vendido": false
  },
  {
    "veiculo": "Golf 1.6Mi/ 1.6Mi Gener./Black & Silver",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005085-7",
    "vendido": false
  },
  {
    "veiculo": "Golf 1.8 Mi Sport 150cv Turbo Mec/Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005209-4",
    "vendido": false
  },
  {
    "veiculo": "Golf 2.0/ 2.0 Mi Flex Aut/Tiptronic.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005129-2",
    "vendido": false
  },
  {
    "veiculo": "Golf 2.0/ 2.0 Mi Flex Comfortline Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005130-6",
    "vendido": false
  },
  {
    "veiculo": "Golf 2.0/ 2.0 Mi Flex Comfortline/ Sport",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005106-3",
    "vendido": false
  },
  {
    "veiculo": "Golf 2.0/ 2.0 T. Flex Mec.(Black & Silv)",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005141-1",
    "vendido": false
  },
  {
    "veiculo": "Golf Comfortline 1.0 TSI Total Flex Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005466-6",
    "vendido": false
  },
  {
    "veiculo": "Golf Comfortline 1.4 TSI 140cv Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005370-8",
    "vendido": false
  },
  {
    "veiculo": "Golf Comfortline 1.4 TSI 140cv Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005369-4",
    "vendido": false
  },
  {
    "veiculo": "Golf Comfortline 1.6 MSI Total Flex Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005449-6",
    "vendido": false
  },
  {
    "veiculo": "Golf Comfortline 1.6 MSI Total Flex Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005448-8",
    "vendido": false
  },
  {
    "veiculo": "Golf Flash 1.6 Mi/1.6 Mi Tot. Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005236-1",
    "vendido": false
  },
  {
    "veiculo": "Golf GL 1.8/ 2.0i 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005071-7",
    "vendido": false
  },
  {
    "veiculo": "Golf GLX 2.0 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005072-5",
    "vendido": false
  },
  {
    "veiculo": "Golf GT 2.0 Mi T. Flex 8V 4p Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005285-0",
    "vendido": false
  },
  {
    "veiculo": "Golf GT 2.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005278-7",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 1.8 Mi 180/193cv Turbo 4p Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005171-3",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 1.8 Mi 180/193cv Turbo 4p Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005170-5",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 1.8 Mi 20V 2p Turbo Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005107-1",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 1.8 Mi 20V Turbo 2p Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005131-4",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 1.8 Mi 20V Turbo 4p Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005158-6",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 1.8 Mi 20V Turbo 4p Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005157-8",
    "vendido": false
  },
  {
    "veiculo": "Golf GTI 1.8 Turbo",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005087-3",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005073-3",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi 2.0 TSI 220cv Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005356-2",
    "vendido": false
  },
  {
    "veiculo": "Golf GTi Cabrio 2.0 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005120-9",
    "vendido": false
  },
  {
    "veiculo": "Golf GTI VR6/ Golf 2.8 VR6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005099-7",
    "vendido": false
  },
  {
    "veiculo": "Golf Highline 1.4 TSI 140cv Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005355-4",
    "vendido": false
  },
  {
    "veiculo": "Golf Highline 1.4 TSI 140cv Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005354-6",
    "vendido": false
  },
  {
    "veiculo": "Golf Highline 1.4 TSI Total Flex Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005451-8",
    "vendido": false
  },
  {
    "veiculo": "Golf Highline 1.4 TSI Total Flex Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005450-0",
    "vendido": false
  },
  {
    "veiculo": "Golf SILVER EDIT. 2.0 Mi T.Flex 8v Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005302-3",
    "vendido": false
  },
  {
    "veiculo": "Golf SILVER EDIT. 2.0 Mi T.Flex 8V Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005301-5",
    "vendido": false
  },
  {
    "veiculo": "Golf Sportline 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005259-0",
    "vendido": false
  },
  {
    "veiculo": "Golf Sportline 2.0 Mi Total F. 8V Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005319-8",
    "vendido": false
  },
  {
    "veiculo": "Golf Variant Comfort. 1.4 TSI T.Flex Aut",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005467-4",
    "vendido": false
  },
  {
    "veiculo": "Golf Variant Comfortline 1.4 TSI  Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005431-3",
    "vendido": false
  },
  {
    "veiculo": "Golf Variant Comfortline 1.4 TSI Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005445-3",
    "vendido": false
  },
  {
    "veiculo": "Golf Variant Highli. 1.4 TSI T.Flex Aut ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005465-8",
    "vendido": false
  },
  {
    "veiculo": "Golf Variant Highline 1.4 TSI Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005430-5",
    "vendido": false
  },
  {
    "veiculo": "Grand Saveiro Xtreme/Street  1.6/1.8/2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005168-3",
    "vendido": false
  },
  {
    "veiculo": "JETTA  GLX III 2.8 VR6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005121-7",
    "vendido": false
  },
  {
    "veiculo": "JETTA 2.5 20V 150/170cv Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005255-8",
    "vendido": false
  },
  {
    "veiculo": "JETTA Comfortline  2.0 T.Flex 8V 4p Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005326-0",
    "vendido": false
  },
  {
    "veiculo": "JETTA Comfortline 1.4 TSI 16V 4p Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005454-2",
    "vendido": false
  },
  {
    "veiculo": "JETTA Comfortline 2.0 T.Flex 8V 4p Tipt.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005327-9",
    "vendido": false
  },
  {
    "veiculo": "JETTA Highline 2.0 TSI 16V 4p Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005328-7",
    "vendido": false
  },
  {
    "veiculo": "JETTA Trendline 1.4 TSI 16V 4p  Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005452-6",
    "vendido": false
  },
  {
    "veiculo": "JETTA Trendline 1.4 TSI 16V 4p Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005453-4",
    "vendido": false
  },
  {
    "veiculo": "JETTA Trendline 2.0 T.Flex 8V 4p Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005425-9",
    "vendido": false
  },
  {
    "veiculo": "JETTA Variant 2.5 20V 170cv Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005272-8",
    "vendido": false
  },
  {
    "veiculo": "Kombi Carat",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005081-4",
    "vendido": false
  },
  {
    "veiculo": "Kombi Escolar 1.6 MPi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005137-3",
    "vendido": false
  },
  {
    "veiculo": "Kombi Escolar/ 50 anos 1.4 Mi Total Flex",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005241-8",
    "vendido": false
  },
  {
    "veiculo": "Kombi Furgão",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005023-7",
    "vendido": false
  },
  {
    "veiculo": "Kombi Furgão 1.4 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005239-6",
    "vendido": false
  },
  {
    "veiculo": "Kombi Furgão Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005138-1",
    "vendido": false
  },
  {
    "veiculo": "Kombi LAST EDITION 56 1.4 Mi Total Flex ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005357-0",
    "vendido": false
  },
  {
    "veiculo": "Kombi Lotação 1.4 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005240-0",
    "vendido": false
  },
  {
    "veiculo": "Kombi Lotação 1.6 MPi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005136-5",
    "vendido": false
  },
  {
    "veiculo": "Kombi Pick-Up",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005022-9",
    "vendido": false
  },
  {
    "veiculo": "Kombi Pick-Up Diesel",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005139-0",
    "vendido": false
  },
  {
    "veiculo": "Kombi Standard 1.4 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005238-8",
    "vendido": false
  },
  {
    "veiculo": "Kombi Standard/ Luxo/ Série Prata",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005024-5",
    "vendido": false
  },
  {
    "veiculo": "Logus 1.6 / CLi / CL/ GL",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005042-3",
    "vendido": false
  },
  {
    "veiculo": "Logus 1.8 / CLi / CL",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005043-1",
    "vendido": false
  },
  {
    "veiculo": "Logus GLi / GL 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005044-0",
    "vendido": false
  },
  {
    "veiculo": "Logus GLS 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005045-8",
    "vendido": false
  },
  {
    "veiculo": "Logus GLSi / GLS 2000",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005046-6",
    "vendido": false
  },
  {
    "veiculo": "Logus Wolfsburg Edition 2000i",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005047-4",
    "vendido": false
  },
  {
    "veiculo": "New Beetle 2.0 Mi Mec./Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005111-0",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.0 Mi FUN/ SunSet 16V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005160-8",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.0 Mi Plus 16v 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005151-9",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.0 Mi Summer 16v 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005152-7",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.0 Mi Tour 16V 76cv 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005165-9",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.6 Mi Plus Total Flex  8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005211-6",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.6 Mi/ 1.6 Mi City",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005108-0",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.6Mi/1.6Mi City/T.Field T.Flex",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005192-6",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.8 Mi City Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005218-3",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.8 Mi CROSSOVER Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005221-3",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.8 Mi Plus Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005219-1",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.8 Mi T. Field Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005220-5",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.8 Mi Tour 8V 99cv 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005166-7",
    "vendido": false
  },
  {
    "veiculo": "Parati 1.8 Mi/ 1.8 Mi Plus",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005109-8",
    "vendido": false
  },
  {
    "veiculo": "Parati 1000 Mi 16V 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005008-3",
    "vendido": false
  },
  {
    "veiculo": "Parati 1000 Mi 16V 4p Turbo",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005145-4",
    "vendido": false
  },
  {
    "veiculo": "Parati 2.0 Mi Tour 8V 112cv 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005167-5",
    "vendido": false
  },
  {
    "veiculo": "Parati 2.0 Mi/ 2.0 Mi Track & Field",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005110-1",
    "vendido": false
  },
  {
    "veiculo": "Parati C 1.6/ CL 1.6 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005009-1",
    "vendido": false
  },
  {
    "veiculo": "Parati CL 1.8 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005010-5",
    "vendido": false
  },
  {
    "veiculo": "Parati CLi / CL/ Atlanta 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005048-2",
    "vendido": false
  },
  {
    "veiculo": "Parati CLi / CL/ Atlanta 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005049-0",
    "vendido": false
  },
  {
    "veiculo": "Parati COMFORTLINE 1.6 Mi Tot.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005242-6",
    "vendido": false
  },
  {
    "veiculo": "Parati COMFORTLINE 1.8 Mi Tot.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005232-9",
    "vendido": false
  },
  {
    "veiculo": "Parati CROSSOVER 2.0 8V/ 1.0 16V TB 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005188-8",
    "vendido": false
  },
  {
    "veiculo": "Parati Evidence 1.8 8V/ 1.0 16V TB 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005183-7",
    "vendido": false
  },
  {
    "veiculo": "Parati GL 1.6 Mi/ 1.6/ GLS/ Club 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005050-4",
    "vendido": false
  },
  {
    "veiculo": "Parati GL 1.8 Mi/ Club 1.8 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005011-3",
    "vendido": false
  },
  {
    "veiculo": "Parati GLi / GL 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005051-2",
    "vendido": false
  },
  {
    "veiculo": "Parati GLS 2.0 Mi 2/4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005012-1",
    "vendido": false
  },
  {
    "veiculo": "Parati GLSi 2.0 / GLS/ Surf 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005052-0",
    "vendido": false
  },
  {
    "veiculo": "Parati GTi 2.0 Mi 16V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005053-9",
    "vendido": false
  },
  {
    "veiculo": "Parati Plus/ LS/ S",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005100-4",
    "vendido": false
  },
  {
    "veiculo": "Parati SURF 1.6 Mi Total Flex",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005270-1",
    "vendido": false
  },
  {
    "veiculo": "Parati SURF 1.8 Mi Total Flex",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005271-0",
    "vendido": false
  },
  {
    "veiculo": "Parati TITAN 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005289-2",
    "vendido": false
  },
  {
    "veiculo": "Parati Utility 1.8 8V/ 1.0 Turbo 16V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005169-1",
    "vendido": false
  },
  {
    "veiculo": "Passat  L/LS/LSe/GL/GLS/TS/Fla/Vill/Plus",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005101-2",
    "vendido": false
  },
  {
    "veiculo": "Passat 1.8 Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005132-2",
    "vendido": false
  },
  {
    "veiculo": "Passat 1.8 Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005088-1",
    "vendido": false
  },
  {
    "veiculo": "Passat 1.8 Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005113-6",
    "vendido": false
  },
  {
    "veiculo": "Passat 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005074-1",
    "vendido": false
  },
  {
    "veiculo": "Passat 2.0 FSI Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005234-5",
    "vendido": false
  },
  {
    "veiculo": "Passat 2.8 V6 Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005092-0",
    "vendido": false
  },
  {
    "veiculo": "Passat 2.8 V6 Protect Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005184-5",
    "vendido": false
  },
  {
    "veiculo": "Passat 2.8 V6 Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005112-8",
    "vendido": false
  },
  {
    "veiculo": "Passat 3.2 V6 FSI 24V 250cv Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005260-4",
    "vendido": false
  },
  {
    "veiculo": "Passat CC 2.0 TSI 211cv Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005400-3",
    "vendido": false
  },
  {
    "veiculo": "Passat CC 3.6 V6 FSI 300cv Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005292-2",
    "vendido": false
  },
  {
    "veiculo": "Passat Comfortline 2.0 TSI 220cv Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005446-1",
    "vendido": false
  },
  {
    "veiculo": "Passat Highline 2.0 TSI 220cv Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005447-0",
    "vendido": false
  },
  {
    "veiculo": "Passat Pointer GTS",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005054-7",
    "vendido": false
  },
  {
    "veiculo": "Passat R-Line TB 2.0 TSI Tiptronic 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005413-5",
    "vendido": false
  },
  {
    "veiculo": "Passat TB 2.0 FSI/TSI 211cv Tiptronic 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005257-4",
    "vendido": false
  },
  {
    "veiculo": "Passat Turbo 1.8 Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005090-3",
    "vendido": false
  },
  {
    "veiculo": "Passat Turbo 1.8 Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005134-9",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant  2.0 FSI 150cv Tiptron.5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005237-0",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant 1.8 Aut.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005135-7",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant 1.8 Mec.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005089-0",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005075-0",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant 2.8 V6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005093-8",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant 2.8 V6 Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005114-4",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant 3.2 V6 FSI 24V 250cv Tip.",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005261-2",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant R-Line TB 2.0 TSI Tip. 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005440-2",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant Turbo 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005091-1",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant Turbo 1.8 Tiptronic",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005115-2",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant Turbo 2.0 FSI Tiptron. 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005256-6",
    "vendido": false
  },
  {
    "veiculo": "Passat Variant VR6 2.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005076-8",
    "vendido": false
  },
  {
    "veiculo": "Passat VR6 2.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005077-6",
    "vendido": false
  },
  {
    "veiculo": "Pointer 1.8 / CLi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005055-5",
    "vendido": false
  },
  {
    "veiculo": "Pointer GLi 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005056-3",
    "vendido": false
  },
  {
    "veiculo": "Pointer GLi 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005057-1",
    "vendido": false
  },
  {
    "veiculo": "Pointer GTi 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005058-0",
    "vendido": false
  },
  {
    "veiculo": "Polo 1.0 Mi 79cv 16V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005174-8",
    "vendido": false
  },
  {
    "veiculo": "Polo 1.6 E-Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005290-6",
    "vendido": false
  },
  {
    "veiculo": "Polo 1.6 Mi/ S.Ouro 1.6Mi 101cv 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005172-1",
    "vendido": false
  },
  {
    "veiculo": "Polo 1.6 Mi/S.Ouro 1.6 Mi Tot.Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005213-2",
    "vendido": false
  },
  {
    "veiculo": "Polo 2.0 Mi 116cv 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005173-0",
    "vendido": false
  },
  {
    "veiculo": "Polo BLUEMOTION 1.6 Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005288-4",
    "vendido": false
  },
  {
    "veiculo": "Polo Classic 1.0 Mi 16v  65cv 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005177-2",
    "vendido": false
  },
  {
    "veiculo": "Polo Classic/ Special 1.8 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005013-0",
    "vendido": false
  },
  {
    "veiculo": "Polo GT 2.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005284-1",
    "vendido": false
  },
  {
    "veiculo": "Polo GTI 1.8 Mi 150cv 20V Turbo 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005258-2",
    "vendido": false
  },
  {
    "veiculo": "Polo I MOTION 1.6 Total Flex  5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005294-9",
    "vendido": false
  },
  {
    "veiculo": "Polo Next 1.6 Mi 101cv 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005191-8",
    "vendido": false
  },
  {
    "veiculo": "Polo Sed. COMFORT. 1.6 Mi Tot. Flex 8v",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005248-5",
    "vendido": false
  },
  {
    "veiculo": "Polo Sed./ Sed. COMF. 2.0/2.0 Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005186-1",
    "vendido": false
  },
  {
    "veiculo": "Polo Sed.COMFORT. I MOTION 1.6 T.Flex 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005297-3",
    "vendido": false
  },
  {
    "veiculo": "Polo Sedan 1.6 Mi 101cv 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005185-3",
    "vendido": false
  },
  {
    "veiculo": "Polo Sedan 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005214-0",
    "vendido": false
  },
  {
    "veiculo": "Polo Sedan Evidence 1.6 Mi T.Flex 8v 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005226-4",
    "vendido": false
  },
  {
    "veiculo": "Polo Sedan I MOTION  1.6 Total Flex  4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005296-5",
    "vendido": false
  },
  {
    "veiculo": "Polo SPORTLINE 1.6 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005249-3",
    "vendido": false
  },
  {
    "veiculo": "Polo Sportline 2.0 Mi Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005333-3",
    "vendido": false
  },
  {
    "veiculo": "Polo SPORTLINE I MOTION 1.6 T.Flex 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005295-7",
    "vendido": false
  },
  {
    "veiculo": "Quantum 1.8 Mi/ 1.8i",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005014-8",
    "vendido": false
  },
  {
    "veiculo": "Quantum 2.0 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005015-6",
    "vendido": false
  },
  {
    "veiculo": "Quantum CLi / CL / C/ CS/ CD/ CG 1.8/2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005059-8",
    "vendido": false
  },
  {
    "veiculo": "Quantum Evidenc 2.0 MI",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005097-0",
    "vendido": false
  },
  {
    "veiculo": "Quantum Exclusiv 2.0 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005016-4",
    "vendido": false
  },
  {
    "veiculo": "Quantum GLi / GL 1.8/ 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005060-1",
    "vendido": false
  },
  {
    "veiculo": "Quantum GLSi / GLS 1.8/Sport/ Family 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005061-0",
    "vendido": false
  },
  {
    "veiculo": "Santana 1.8 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005017-2",
    "vendido": false
  },
  {
    "veiculo": "Santana 2.0 Mi 2p e 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005018-0",
    "vendido": false
  },
  {
    "veiculo": "Santana CLi /CL /C 1.8/2.0 /SU 2.0 2p/4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005062-8",
    "vendido": false
  },
  {
    "veiculo": "Santana COMFORTLINE 1.8 Mi 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005245-0",
    "vendido": false
  },
  {
    "veiculo": "Santana CS/CD/CG",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005102-0",
    "vendido": false
  },
  {
    "veiculo": "Santana Evidenc 2.0 MI",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005098-9",
    "vendido": false
  },
  {
    "veiculo": "Santana Exclusiv 2.0 Mi/ Executivo 2.0i",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005019-9",
    "vendido": false
  },
  {
    "veiculo": "Santana GLi / GL/ Sport 1.8/ 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005063-6",
    "vendido": false
  },
  {
    "veiculo": "Santana GLSi / GLS 1.8/ 2.0",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005064-4",
    "vendido": false
  },
  {
    "veiculo": "Saveiro  Trendline 1.6 T.Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005386-4",
    "vendido": false
  },
  {
    "veiculo": "Saveiro  Trendline 1.6 T.Flex 8V CE",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005387-2",
    "vendido": false
  },
  {
    "veiculo": "Saveiro 1.6 Mi Total Flex 8V CE",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005298-1",
    "vendido": false
  },
  {
    "veiculo": "Saveiro 1.6 Mi/ 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005094-6",
    "vendido": false
  },
  {
    "veiculo": "Saveiro 1.6 Mi/ 1.6Mi City Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005193-4",
    "vendido": false
  },
  {
    "veiculo": "Saveiro 1.8 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005142-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro 2.0 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005140-3",
    "vendido": false
  },
  {
    "veiculo": "Saveiro City 1.8 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005222-1",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CL 1.6 Mi / CL/ C 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005020-2",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CL/ Summer 1.8 Mi e 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005021-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CROSS 1.6 Mi Total Flex 8V CE",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005315-5",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CROSS 1.6 T. Flex 16V CE",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005388-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CROSS 1.6 T.Flex 16v CD",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005408-9",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CROSSOVER 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005246-9",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CROSSOVER 1.8 Mi 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005215-9",
    "vendido": false
  },
  {
    "veiculo": "Saveiro CROSSOVER 1.8 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005224-8",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Diesel (todas)",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005122-5",
    "vendido": false
  },
  {
    "veiculo": "Saveiro FUN 1.8 99cv/ City e S.Surf  1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005161-6",
    "vendido": false
  },
  {
    "veiculo": "Saveiro GL 1.8Mi e 1.6/GL/LS/S/ Sunset",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005065-2",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Highline 1.6 T. Flex 8V CD",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005409-7",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Robust 1.6 Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005459-3",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Rock in Rio 1.6 Total Flex 8V CD",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005432-1",
    "vendido": false
  },
  {
    "veiculo": "Saveiro SPORTLINE 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005247-7",
    "vendido": false
  },
  {
    "veiculo": "Saveiro SPORTLINE 1.8 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005233-7",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Startline 1.6 T.Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005385-6",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Super Surf  1.8 Mi 8V 99cv",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005203-5",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Super Surf 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005194-2",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Super Surf 1.8 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005223-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro SURF 1.6 Mi Total Flex 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005268-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro SURF 1.8 Mi Total Flex 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005269-8",
    "vendido": false
  },
  {
    "veiculo": "Saveiro TITAN  1.6 Mi Total Flex 2p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005267-1",
    "vendido": false
  },
  {
    "veiculo": "Saveiro Trendline 1.6 T.Flex 8V CD",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005410-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro TROOPER 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005299-0",
    "vendido": false
  },
  {
    "veiculo": "Saveiro TROOPER 1.6 Mi Total Flex 8V CE",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005300-7",
    "vendido": false
  },
  {
    "veiculo": "Saveiro TSi 2.0 Mi",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005095-4",
    "vendido": false
  },
  {
    "veiculo": "SpaceCross 1.6 Mi Total Flex 16V  ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005426-7",
    "vendido": false
  },
  {
    "veiculo": "SpaceCross 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005334-1",
    "vendido": false
  },
  {
    "veiculo": "SpaceCross I MOTION 1.6 Mi T. Flex 16V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005427-5",
    "vendido": false
  },
  {
    "veiculo": "SpaceCross I MOTION 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005335-0",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX  SPORTLINE/HIGHLINE 1.6 T.Flex",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005279-5",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX  TREND I MOTION 1.6 T. Flex 8v",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005321-0",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX 1.6 Trendline I MOT. T.Flex 8V ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005442-9",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX 1.6 Trendline Total Flex 8v 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005441-0",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX 1.6/ 1.6 Trend Total Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005251-5",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX COMF. I MOTION 1.6 Flex 8V 5p ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005423-2",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX COMFORTLINE 1.6 Mi T.Flex 8V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005250-7",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX HIGHLINE 1.6 T.Flex 16V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005429-1",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX HIGHLINE I MOT. 1.6 T.Flex 16V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005428-3",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX Route 1.6 Mi T.Flex 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005286-8",
    "vendido": false
  },
  {
    "veiculo": "SPACEFOX SPORTLINE/HIGHLINE I MOTION 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005322-8",
    "vendido": false
  },
  {
    "veiculo": "TIGUAN 1.4 TSI 16V 150cv 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005471-2",
    "vendido": false
  },
  {
    "veiculo": "TIGUAN 2.0 TSI 16V 200cv Tiptronic 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005291-4",
    "vendido": false
  },
  {
    "veiculo": "TOUAREG 3.2 24V V6 Tiptronic 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005235-3",
    "vendido": false
  },
  {
    "veiculo": "TOUAREG 3.6 24V V6 280cv Tiptronic 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005266-3",
    "vendido": false
  },
  {
    "veiculo": "TOUAREG 4.2 32V V8 310cv Tiptronic 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005204-3",
    "vendido": false
  },
  {
    "veiculo": "TOUAREG R-Line 4.2 V8 360cv Tiptronic 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005424-0",
    "vendido": false
  },
  {
    "veiculo": "up! black/white/red 1.0 T. Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005368-6",
    "vendido": false
  },
  {
    "veiculo": "up! black/white/red 1.0 TSI TFlex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005438-0",
    "vendido": false
  },
  {
    "veiculo": "up! black/white/red I MOTION 1.0 Flex 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005374-0",
    "vendido": false
  },
  {
    "veiculo": "up! cross 1.0 T. Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005416-0",
    "vendido": false
  },
  {
    "veiculo": "up! cross 1.0 TSI Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005436-4",
    "vendido": false
  },
  {
    "veiculo": "up! cross I MOTION 1.0 T.Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005417-8",
    "vendido": false
  },
  {
    "veiculo": "up! high 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005367-8",
    "vendido": false
  },
  {
    "veiculo": "up! high 1.0 TSI Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005437-2",
    "vendido": false
  },
  {
    "veiculo": "up! high I MOTION 1.0 T. Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005373-2",
    "vendido": false
  },
  {
    "veiculo": "up! move 1.0 T. Flex 12V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005375-9",
    "vendido": false
  },
  {
    "veiculo": "up! move 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005366-0",
    "vendido": false
  },
  {
    "veiculo": "up! move 1.0 TSI Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005435-6",
    "vendido": false
  },
  {
    "veiculo": "up! move I MOTION 1.0 T. Flex 12V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005372-4",
    "vendido": false
  },
  {
    "veiculo": "up! move I MOTION 1.0 T. Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005399-6",
    "vendido": false
  },
  {
    "veiculo": "up! Run 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005460-7",
    "vendido": false
  },
  {
    "veiculo": "up! Run I MOTION 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005463-1",
    "vendido": false
  },
  {
    "veiculo": "up! SPEED 1.0 TSI T. Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005439-9",
    "vendido": false
  },
  {
    "veiculo": "up! take 1.0 T. Flex 12V 3p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005376-7",
    "vendido": false
  },
  {
    "veiculo": "up! take 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005365-1",
    "vendido": false
  },
  {
    "veiculo": "up! track 1.0 Total Flex 12V 5p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005468-2",
    "vendido": false
  },
  {
    "veiculo": "Van 1.6 Mi (furgão)",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005096-2",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE  Trendline 1.0 T.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005379-1",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE  Trendline 1.6 T.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005380-5",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE 1.0/1.0 City Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005283-3",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE 1.6/1.6 City  Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005282-5",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE C/CL/Fox 1.6",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005066-0",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE CL 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005067-9",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE COMF/Highli. 1.6 Mi T.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005280-9",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE Comfortline  1.0 T.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005377-5",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE Comfortline 1.0 T.Flex 12V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005458-5",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE Evidence 1.6 Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005378-3",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE GL 1.8 4p (Argentino)",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005069-5",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE GL/ Special 1.6/ 1.8",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005068-7",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE I MOTION  Trendline 1.6 T.Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005381-3",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE I MOTION 1.6 Mi Total Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005311-2",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE I MOTION COMF/Hghli.1.6 T.Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005313-9",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE I MOTION Evidence 1.6 T.Flex 8V ",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005382-1",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE I MOTION TREND 1.6 Mi T. Flex 8V",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005312-0",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE L/LS/Plus/GLS/S/Sport/Super L.Ang",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005070-9",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE SELEÇÃO 1.0 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005360-0",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE SELEÇÃO 1.6 I MOTION T.Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005362-7",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE SELEÇÃO 1.6 Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005361-9",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE TREND 1.6 Mi Total Flex 8V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005281-7",
    "vendido": false
  },
  {
    "veiculo": "VOYAGE Trendline 1.0 T.Flex 12V 4p",
    "marca": "VW - VolksWagen",
    "cod_fipe": "005457-7",
    "vendido": false
  },
  {
    "veiculo": "Way 1.6 Total Flex 8V Mec.",
    "marca": "Wake",
    "cod_fipe": "074001-2",
    "vendido": false
  },
  {
    "veiculo": "Way 1.8 Total Flex 8V Mec.",
    "marca": "Wake",
    "cod_fipe": "074002-0",
    "vendido": false
  },
  {
    "veiculo": "Buggy Walk Sport 1.6 8V 58cv",
    "marca": "Walk",
    "cod_fipe": "061001-1",
    "vendido": false
  }
];

export default allCar;
