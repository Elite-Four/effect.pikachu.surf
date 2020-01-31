var POKEMONS = {
  "#001 Grookey": {
    types: ["GRASS"]
  },
  "#002 Thwackey": {
    types: ["GRASS"]
  },
  "#003 Rillaboom": {
    types: ["GRASS"]
  },
  "#004 Scorbunny": {
    types: ["FIRE"]
  },
  "#005 Raboot": {
    types: ["FIRE"]
  },
  "#006 Cinderace": {
    types: ["FIRE"]
  },
  "#007 Sobble": {
    types: ["WATER"]
  },
  "#008 Drizzile": {
    types: ["WATER"]
  },
  "#009 Inteleon": {
    types: ["WATER"]
  },
  "#010 Blipbug": {
    types: ["BUG"]
  },
  "#011 Dottler": {
    types: ["BUG", "PSYCHIC"]
  },
  "#012 Orbeetle": {
    types: ["BUG", "PSYCHIC"]
  },
  "#013 Caterpie": {
    types: ["BUG"]
  },
  "#014 Metapod": {
    types: ["BUG"]
  },
  "#015 Butterfree": {
    types: ["BUG", "FLYING"]
  },
  "#016 Grubbin": {
    types: ["BUG"]
  },
  "#017 Charjabug": {
    types: ["BUG", "ELECTRIC"]
  },
  "#018 Vikavolt": {
    types: ["BUG", "ELECTRIC"]
  },
  "#019 Hoothoot": {
    types: ["NORMAL", "FLYING"]
  },
  "#020 Noctowl": {
    types: ["NORMAL", "FLYING"]
  },
  "#021 Rookidee": {
    types: ["FLYING"]
  },
  "#022 Corvisquire": {
    types: ["FLYING"]
  },
  "#023 Corviknight": {
    types: ["FLYING", "STEEL"]
  },
  "#024 Skwovet": {
    types: ["NORMAL"]
  },
  "#025 Greedent": {
    types: ["NORMAL"]
  },
  "#026 Pidove": {
    types: ["NORMAL", "FLYING"]
  },
  "#027 Tranquill": {
    types: ["NORMAL", "FLYING"]
  },
  "#028 Unfezant": {
    types: ["NORMAL", "FLYING"]
  },
  "#029 Nickit": {
    types: ["DARK"]
  },
  "#030 Thievul": {
    types: ["DARK"]
  },
  "#031 Zigzagoon": {
    types: ["NORMAL"]
  },
  "#032 Linoone": {
    types: ["NORMAL"]
  },
  "#033 Obstagoon": {
    types: ["DARK", "NORMAL"]
  },
  "#034 Wooloo": {
    types: ["NORMAL"]
  },
  "#035 Dubwool": {
    types: ["NORMAL"]
  },
  "#036 Lotad": {
    types: ["WATER", "GRASS"]
  },
  "#037 Lombre": {
    types: ["WATER", "GRASS"]
  },
  "#038 Ludicolo": {
    types: ["WATER", "GRASS"]
  },
  "#039 Seedot": {
    types: ["GRASS"]
  },
  "#040 Nuzleaf": {
    types: ["GRASS", "DARK"]
  },
  "#041 Shiftry": {
    types: ["GRASS", "DARK"]
  },
  "#042 Chewtle": {
    types: ["WATER"]
  },
  "#043 Drednaw": {
    types: ["WATER", "ROCK"]
  },
  "#044 Purrloin": {
    types: ["DARK"]
  },
  "#045 Liepard": {
    types: ["DARK"]
  },
  "#046 Yamper": {
    types: ["ELECTRIC"]
  },
  "#047 Boltund": {
    types: ["ELECTRIC"]
  },
  "#048 Bunnelby": {
    types: ["NORMAL"]
  },
  "#049 Diggersby": {
    types: ["NORMAL", "GROUND"]
  },
  "#050 Minccino": {
    types: ["NORMAL"]
  },
  "#051 Cinccino": {
    types: ["NORMAL"]
  },
  "#052 Bounsweet": {
    types: ["GRASS"]
  },
  "#053 Steenee": {
    types: ["GRASS"]
  },
  "#054 Tsareena": {
    types: ["GRASS"]
  },
  "#055 Oddish": {
    types: ["GRASS", "POISON"]
  },
  "#056 Gloom": {
    types: ["GRASS", "POISON"]
  },
  "#057 Vileplume": {
    types: ["GRASS", "POISON"]
  },
  "#058 Bellossom": {
    types: ["GRASS"]
  },
  "#059 Budew": {
    types: ["GRASS", "POISON"]
  },
  "#060 Roselia": {
    types: ["GRASS", "POISON"]
  },
  "#061 Roserade": {
    types: ["GRASS", "POISON"]
  },
  "#062 Wingull": {
    types: ["WATER", "FLYING"]
  },
  "#063 Pelipper": {
    types: ["WATER", "FLYING"]
  },
  "#064 Joltik": {
    types: ["BUG", "ELECTRIC"]
  },
  "#065 Galvantula": {
    types: ["BUG", "ELECTRIC"]
  },
  "#066 Electrike": {
    types: ["ELECTRIC"]
  },
  "#067 Manectric": {
    types: ["ELECTRIC"]
  },
  "#068 Vulpix": {
    types: ["FIRE"]
  },
  "#069 Ninetales": {
    types: ["FIRE"]
  },
  "#070 Growlithe": {
    types: ["FIRE"]
  },
  "#071 Arcanine": {
    types: ["FIRE"]
  },
  "#072 Vanillite": {
    types: ["ICE"]
  },
  "#073 Vanillish": {
    types: ["ICE"]
  },
  "#074 Vanilluxe": {
    types: ["ICE"]
  },
  "#075 Swinub": {
    types: ["ICE", "GROUND"]
  },
  "#076 Piloswine": {
    types: ["ICE", "GROUND"]
  },
  "#077 Mamoswine": {
    types: ["ICE", "GROUND"]
  },
  "#078 Delibird": {
    types: ["ICE", "FLYING"]
  },
  "#079 Snorunt": {
    types: ["ICE"]
  },
  "#080 Glalie": {
    types: ["ICE"]
  },
  "#081 Froslass": {
    types: ["ICE", "GHOST"]
  },
  "#082 Baltoy": {
    types: ["GROUND", "PSYCHIC"]
  },
  "#083 Claydol": {
    types: ["GROUND", "PSYCHIC"]
  },
  "#084 Mudbray": {
    types: ["GROUND"]
  },
  "#085 Mudsdale": {
    types: ["GROUND"]
  },
  "#086 Dwebble": {
    types: ["BUG", "ROCK"]
  },
  "#087 Crustle": {
    types: ["BUG", "ROCK"]
  },
  "#088 Golett": {
    types: ["GROUND", "GHOST"]
  },
  "#089 Golurk": {
    types: ["GROUND", "GHOST"]
  },
  "#090 Munna": {
    types: ["PSYCHIC"]
  },
  "#091 Musharna": {
    types: ["PSYCHIC"]
  },
  "#092 Natu": {
    types: ["PSYCHIC", "FLYING"]
  },
  "#093 Xatu": {
    types: ["PSYCHIC", "FLYING"]
  },
  "#094 Stufful": {
    types: ["NORMAL", "FIGHTING"]
  },
  "#095 Bewear": {
    types: ["NORMAL", "FIGHTING"]
  },
  "#096 Snover": {
    types: ["GRASS", "ICE"]
  },
  "#097 Abomasnow": {
    types: ["GRASS", "ICE"]
  },
  "#098 Krabby": {
    types: ["WATER"]
  },
  "#099 Kingler": {
    types: ["WATER"]
  },
  "#100 Wooper": {
    types: ["WATER", "GROUND"]
  },
  "#101 Quagsire": {
    types: ["WATER", "GROUND"]
  },
  "#102 Corphish": {
    types: ["WATER"]
  },
  "#103 Crawdaunt": {
    types: ["WATER", "DARK"]
  },
  "#104 Nincada": {
    types: ["BUG", "GROUND"]
  },
  "#105 Ninjask": {
    types: ["BUG", "FLYING"]
  },
  "#106 Shedinja": {
    types: ["BUG", "GHOST"]
  },
  "#107 Tyrogue": {
    types: ["FIGHTING"]
  },
  "#108 Hitmonlee": {
    types: ["FIGHTING"]
  },
  "#109 Hitmonchan": {
    types: ["FIGHTING"]
  },
  "#110 Hitmontop": {
    types: ["FIGHTING"]
  },
  "#111 Pancham": {
    types: ["FIGHTING"]
  },
  "#112 Pangoro": {
    types: ["FIGHTING", "DARK"]
  },
  "#113 Klink": {
    types: ["STEEL"]
  },
  "#114 Klang": {
    types: ["STEEL"]
  },
  "#115 Klinklang": {
    types: ["STEEL"]
  },
  "#116 Combee": {
    types: ["BUG", "FLYING"]
  },
  "#117 Vespiquen": {
    types: ["BUG", "FLYING"]
  },
  "#118 Bronzor": {
    types: ["STEEL", "PSYCHIC"]
  },
  "#119 Bronzong": {
    types: ["STEEL", "PSYCHIC"]
  },
  "#120 Ralts": {
    types: ["PSYCHIC", "FAIRY"]
  },
  "#121 Kirlia": {
    types: ["PSYCHIC", "FAIRY"]
  },
  "#122 Gardevoir": {
    types: ["PSYCHIC", "FAIRY"]
  },
  "#123 Gallade": {
    types: ["PSYCHIC", "FIGHTING"]
  },
  "#124 Drifloon": {
    types: ["GHOST", "FLYING"]
  },
  "#125 Drifblim": {
    types: ["GHOST", "FLYING"]
  },
  "#126 Gossifleur": {
    types: ["GRASS"]
  },
  "#127 Eldegoss": {
    types: ["GRASS"]
  },
  "#128 Cherubi": {
    types: ["GRASS"]
  },
  "#129 Cherrim": {
    types: ["GRASS"]
  },
  "#130 Stunky": {
    types: ["POISON", "DARK"]
  },
  "#131 Skuntank": {
    types: ["POISON", "DARK"]
  },
  "#132 Tympole": {
    types: ["WATER"]
  },
  "#133 Palpitoad": {
    types: ["WATER", "GROUND"]
  },
  "#134 Seismitoad": {
    types: ["WATER", "GROUND"]
  },
  "#135 Duskull": {
    types: ["GHOST"]
  },
  "#136 Dusclops": {
    types: ["GHOST"]
  },
  "#137 Dusknoir": {
    types: ["GHOST"]
  },
  "#138 Machop": {
    types: ["FIGHTING"]
  },
  "#139 Machoke": {
    types: ["FIGHTING"]
  },
  "#140 Machamp": {
    types: ["FIGHTING"]
  },
  "#141 Gastly": {
    types: ["GHOST", "POISON"]
  },
  "#142 Haunter": {
    types: ["GHOST", "POISON"]
  },
  "#143 Gengar": {
    types: ["GHOST", "POISON"]
  },
  "#144 Magikarp": {
    types: ["WATER"]
  },
  "#145 Gyarados": {
    types: ["WATER", "FLYING"]
  },
  "#146 Goldeen": {
    types: ["WATER"]
  },
  "#147 Seaking": {
    types: ["WATER"]
  },
  "#148 Remoraid": {
    types: ["WATER"]
  },
  "#149 Octillery": {
    types: ["WATER"]
  },
  "#150 Shellder": {
    types: ["WATER"]
  },
  "#151 Cloyster": {
    types: ["WATER", "ICE"]
  },
  "#152 Feebas": {
    types: ["WATER"]
  },
  "#153 Milotic": {
    types: ["WATER"]
  },
  "#154 Basculin": {
    types: ["WATER"]
  },
  "#155 Wishiwashi": {
    types: ["WATER"]
  },
  "#156 Pyukumuku": {
    types: ["WATER"]
  },
  "#157 Trubbish": {
    types: ["POISON"]
  },
  "#158 Garbodor": {
    types: ["POISON"]
  },
  "#159 Sizzlipede": {
    types: ["FIRE", "BUG"]
  },
  "#160 Centiskorch": {
    types: ["FIRE", "BUG"]
  },
  "#161 Rolycoly": {
    types: ["ROCK"]
  },
  "#162 Carkol": {
    types: ["ROCK", "FIRE"]
  },
  "#163 Coalossal": {
    types: ["ROCK", "FIRE"]
  },
  "#164 Diglett": {
    types: ["GROUND"]
  },
  "#165 Dugtrio": {
    types: ["GROUND"]
  },
  "#166 Drilbur": {
    types: ["GROUND"]
  },
  "#167 Excadrill": {
    types: ["GROUND", "STEEL"]
  },
  "#168 Roggenrola": {
    types: ["ROCK"]
  },
  "#169 Boldore": {
    types: ["ROCK"]
  },
  "#170 Gigalith": {
    types: ["ROCK"]
  },
  "#171 Timburr": {
    types: ["FIGHTING"]
  },
  "#172 Gurdurr": {
    types: ["FIGHTING"]
  },
  "#173 Conkeldurr": {
    types: ["FIGHTING"]
  },
  "#174 Woobat": {
    types: ["PSYCHIC", "FLYING"]
  },
  "#175 Swoobat": {
    types: ["PSYCHIC", "FLYING"]
  },
  "#176 Noibat": {
    types: ["FLYING", "DRAGON"]
  },
  "#177 Noivern": {
    types: ["FLYING", "DRAGON"]
  },
  "#178 Onix": {
    types: ["ROCK", "GROUND"]
  },
  "#179 Steelix": {
    types: ["STEEL", "GROUND"]
  },
  "#180 Arrokuda": {
    types: ["WATER"]
  },
  "#181 Barraskewda": {
    types: ["WATER"]
  },
  "#182 Meowth": {
    types: ["NORMAL"]
  },
  "#183 Perrserker": {
    types: ["STEEL"]
  },
  "#184 Persian": {
    types: ["NORMAL"]
  },
  "#185 Milcery": {
    types: ["FAIRY"]
  },
  "#186 Alcremie": {
    types: ["FAIRY"]
  },
  "#187 Cutiefly": {
    types: ["BUG", "FAIRY"]
  },
  "#188 Ribombee": {
    types: ["BUG", "FAIRY"]
  },
  "#189 Ferroseed": {
    types: ["GRASS", "STEEL"]
  },
  "#190 Ferrothorn": {
    types: ["GRASS", "STEEL"]
  },
  "#191 Pumpkaboo": {
    types: ["GHOST", "GRASS"]
  },
  "#192 Gourgeist": {
    types: ["GHOST", "GRASS"]
  },
  "#193 Pichu": {
    types: ["ELECTRIC"]
  },
  "#194 Pikachu": {
    types: ["ELECTRIC"]
  },
  "#195 Raichu": {
    types: ["ELECTRIC"]
  },
  "#196 Eevee": {
    types: ["NORMAL"]
  },
  "#197 Vaporeon": {
    types: ["WATER"]
  },
  "#198 Jolteon": {
    types: ["ELECTRIC"]
  },
  "#199 Flareon": {
    types: ["FIRE"]
  },
  "#200 Espeon": {
    types: ["PSYCHIC"]
  },
  "#201 Umbreon": {
    types: ["DARK"]
  },
  "#202 Leafeon": {
    types: ["GRASS"]
  },
  "#203 Glaceon": {
    types: ["ICE"]
  },
  "#204 Sylveon": {
    types: ["FAIRY"]
  },
  "#205 Applin": {
    types: ["GRASS", "DRAGON"]
  },
  "#206 Flapple": {
    types: ["GRASS", "DRAGON"]
  },
  "#207 Appletun": {
    types: ["GRASS", "DRAGON"]
  },
  "#208 Espurr": {
    types: ["PSYCHIC"]
  },
  "#209 Meowstic": {
    types: ["PSYCHIC"]
  },
  "#210 Swirlix": {
    types: ["FAIRY"]
  },
  "#211 Slurpuff": {
    types: ["FAIRY"]
  },
  "#212 Spritzee": {
    types: ["FAIRY"]
  },
  "#213 Aromatisse": {
    types: ["FAIRY"]
  },
  "#214 Dewpider": {
    types: ["WATER", "BUG"]
  },
  "#215 Araquanid": {
    types: ["WATER", "BUG"]
  },
  "#216 Wynaut": {
    types: ["PSYCHIC"]
  },
  "#217 Wobbuffet": {
    types: ["PSYCHIC"]
  },
  "#218 Farfetch'd": {
    types: ["NORMAL", "FLYING"]
  },
  "#219 Sirfetch'd": {
    types: ["FIGHTING"]
  },
  "#220 Chinchou": {
    types: ["WATER", "ELECTRIC"]
  },
  "#221 Lanturn": {
    types: ["WATER", "ELECTRIC"]
  },
  "#222 Croagunk": {
    types: ["POISON", "FIGHTING"]
  },
  "#223 Toxicroak": {
    types: ["POISON", "FIGHTING"]
  },
  "#224 Scraggy": {
    types: ["DARK", "FIGHTING"]
  },
  "#225 Scrafty": {
    types: ["DARK", "FIGHTING"]
  },
  "#226 Stunfisk": {
    types: ["GROUND", "ELECTRIC"]
  },
  "#227 Shuckle": {
    types: ["BUG", "ROCK"]
  },
  "#228 Barboach": {
    types: ["WATER", "GROUND"]
  },
  "#229 Whiscash": {
    types: ["WATER", "GROUND"]
  },
  "#230 Shellos": {
    types: ["WATER"]
  },
  "#231 Gastrodon": {
    types: ["WATER", "GROUND"]
  },
  "#232 Wimpod": {
    types: ["BUG", "WATER"]
  },
  "#233 Golisopod": {
    types: ["BUG", "WATER"]
  },
  "#234 Binacle": {
    types: ["ROCK", "WATER"]
  },
  "#235 Barbaracle": {
    types: ["ROCK", "WATER"]
  },
  "#236 Corsola": {
    types: ["WATER", "ROCK"]
  },
  "#237 Cursola": {
    types: ["GHOST"]
  },
  "#238 Impidimp": {
    types: ["DARK", "FAIRY"]
  },
  "#239 Morgrem": {
    types: ["DARK", "FAIRY"]
  },
  "#240 Grimmsnarl": {
    types: ["DARK", "FAIRY"]
  },
  "#241 Hatenna": {
    types: ["PSYCHIC"]
  },
  "#242 Hattrem": {
    types: ["PSYCHIC"]
  },
  "#243 Hatterene": {
    types: ["PSYCHIC", "FAIRY"]
  },
  "#244 Salandit": {
    types: ["POISON", "FIRE"]
  },
  "#245 Salazzle": {
    types: ["POISON", "FIRE"]
  },
  "#246 Pawniard": {
    types: ["DARK", "STEEL"]
  },
  "#247 Bisharp": {
    types: ["DARK", "STEEL"]
  },
  "#248 Throh": {
    types: ["FIGHTING"]
  },
  "#249 Sawk": {
    types: ["FIGHTING"]
  },
  "#250 Koffing": {
    types: ["POISON"]
  },
  "#251 Weezing": {
    types: ["POISON"]
  },
  "#252 Bonsly": {
    types: ["ROCK"]
  },
  "#253 Sudowoodo": {
    types: ["ROCK"]
  },
  "#254 Cleffa": {
    types: ["FAIRY"]
  },
  "#255 Clefairy": {
    types: ["FAIRY"]
  },
  "#256 Clefable": {
    types: ["FAIRY"]
  },
  "#257 Togepi": {
    types: ["FAIRY"]
  },
  "#258 Togetic": {
    types: ["FAIRY", "FLYING"]
  },
  "#259 Togekiss": {
    types: ["FAIRY", "FLYING"]
  },
  "#260 Munchlax": {
    types: ["NORMAL"]
  },
  "#261 Snorlax": {
    types: ["NORMAL"]
  },
  "#262 Cottonee": {
    types: ["GRASS", "FAIRY"]
  },
  "#263 Whimsicott": {
    types: ["GRASS", "FAIRY"]
  },
  "#264 Rhyhorn": {
    types: ["GROUND", "ROCK"]
  },
  "#265 Rhydon": {
    types: ["GROUND", "ROCK"]
  },
  "#266 Rhyperior": {
    types: ["GROUND", "ROCK"]
  },
  "#267 Gothita": {
    types: ["PSYCHIC"]
  },
  "#268 Gothorita": {
    types: ["PSYCHIC"]
  },
  "#269 Gothitelle": {
    types: ["PSYCHIC"]
  },
  "#270 Solosis": {
    types: ["PSYCHIC"]
  },
  "#271 Duosion": {
    types: ["PSYCHIC"]
  },
  "#272 Reuniclus": {
    types: ["PSYCHIC"]
  },
  "#273 Karrablast": {
    types: ["BUG"]
  },
  "#274 Escavalier": {
    types: ["BUG", "STEEL"]
  },
  "#275 Shelmet": {
    types: ["BUG"]
  },
  "#276 Accelgor": {
    types: ["BUG"]
  },
  "#277 Elgyem": {
    types: ["PSYCHIC"]
  },
  "#278 Beheeyem": {
    types: ["PSYCHIC"]
  },
  "#279 Cubchoo": {
    types: ["ICE"]
  },
  "#280 Beartic": {
    types: ["ICE"]
  },
  "#281 Rufflet": {
    types: ["NORMAL", "FLYING"]
  },
  "#282 Braviary": {
    types: ["NORMAL", "FLYING"]
  },
  "#283 Vullaby": {
    types: ["DARK", "FLYING"]
  },
  "#284 Mandibuzz": {
    types: ["DARK", "FLYING"]
  },
  "#285 Skorupi": {
    types: ["POISON", "BUG"]
  },
  "#286 Drapion": {
    types: ["POISON", "DARK"]
  },
  "#287 Litwick": {
    types: ["GHOST", "FIRE"]
  },
  "#288 Lampent": {
    types: ["GHOST", "FIRE"]
  },
  "#289 Chandelure": {
    types: ["GHOST", "FIRE"]
  },
  "#290 Inkay": {
    types: ["DARK", "PSYCHIC"]
  },
  "#291 Malamar": {
    types: ["DARK", "PSYCHIC"]
  },
  "#292 Sneasel": {
    types: ["DARK", "ICE"]
  },
  "#293 Weavile": {
    types: ["DARK", "ICE"]
  },
  "#294 Sableye": {
    types: ["DARK", "GHOST"]
  },
  "#295 Mawile": {
    types: ["STEEL", "FAIRY"]
  },
  "#296 Maractus": {
    types: ["GRASS"]
  },
  "#297 Sigilyph": {
    types: ["PSYCHIC", "FLYING"]
  },
  "#298 Riolu": {
    types: ["FIGHTING"]
  },
  "#299 Lucario": {
    types: ["FIGHTING", "STEEL"]
  },
  "#300 Torkoal": {
    types: ["FIRE"]
  },
  "#301 Mimikyu": {
    types: ["GHOST", "FAIRY"]
  },
  "#302 Cufant": {
    types: ["STEEL"]
  },
  "#303 Copperajah": {
    types: ["STEEL"]
  },
  "#304 Qwilfish": {
    types: ["WATER", "POISON"]
  },
  "#305 Frillish": {
    types: ["WATER", "GHOST"]
  },
  "#306 Jellicent": {
    types: ["WATER", "GHOST"]
  },
  "#307 Mareanie": {
    types: ["POISON", "WATER"]
  },
  "#308 Toxapex": {
    types: ["POISON", "WATER"]
  },
  "#309 Cramorant": {
    types: ["FLYING", "WATER"]
  },
  "#310 Toxel": {
    types: ["ELECTRIC", "POISON"]
  },
  "#311 Toxtricity": {
    types: ["ELECTRIC", "POISON"]
  },
  "#312 Silicobra": {
    types: ["GROUND"]
  },
  "#313 Sandaconda": {
    types: ["GROUND"]
  },
  "#314 Hippopotas": {
    types: ["GROUND"]
  },
  "#315 Hippowdon": {
    types: ["GROUND"]
  },
  "#316 Durant": {
    types: ["BUG", "STEEL"]
  },
  "#317 Heatmor": {
    types: ["FIRE"]
  },
  "#318 Helioptile": {
    types: ["ELECTRIC", "NORMAL"]
  },
  "#319 Heliolisk": {
    types: ["ELECTRIC", "NORMAL"]
  },
  "#320 Hawlucha": {
    types: ["FIGHTING", "FLYING"]
  },
  "#321 Trapinch": {
    types: ["GROUND"]
  },
  "#322 Vibrava": {
    types: ["GROUND", "DRAGON"]
  },
  "#323 Flygon": {
    types: ["GROUND", "DRAGON"]
  },
  "#324 Axew": {
    types: ["DRAGON"]
  },
  "#325 Fraxure": {
    types: ["DRAGON"]
  },
  "#326 Haxorus": {
    types: ["DRAGON"]
  },
  "#327 Yamask": {
    types: ["GHOST"]
  },
  "#328 Runerigus": {
    types: ["GROUND", "GHOST"]
  },
  "#329 Cofagrigus": {
    types: ["GHOST"]
  },
  "#330 Honedge": {
    types: ["STEEL", "GHOST"]
  },
  "#331 Doublade": {
    types: ["STEEL", "GHOST"]
  },
  "#332 Aegislash": {
    types: ["STEEL", "GHOST"]
  },
  "#333 Ponyta": {
    types: ["FIRE"]
  },
  "#334 Rapidash": {
    types: ["FIRE"]
  },
  "#335 Sinistea": {
    types: ["GHOST"]
  },
  "#336 Polteageist": {
    types: ["GHOST"]
  },
  "#337 Indeedee": {
    types: ["PSYCHIC", "NORMAL"]
  },
  "#338 Phantump": {
    types: ["GHOST", "GRASS"]
  },
  "#339 Trevenant": {
    types: ["GHOST", "GRASS"]
  },
  "#340 Morelull": {
    types: ["GRASS", "FAIRY"]
  },
  "#341 Shiinotic": {
    types: ["GRASS", "FAIRY"]
  },
  "#342 Oranguru": {
    types: ["NORMAL", "PSYCHIC"]
  },
  "#343 Passimian": {
    types: ["FIGHTING"]
  },
  "#344 Morpeko": {
    types: ["ELECTRIC", "DARK"]
  },
  "#345 Falinks": {
    types: ["FIGHTING"]
  },
  "#346 Drampa": {
    types: ["NORMAL", "DRAGON"]
  },
  "#347 Turtonator": {
    types: ["FIRE", "DRAGON"]
  },
  "#348 Togedemaru": {
    types: ["ELECTRIC", "STEEL"]
  },
  "#349 Snom": {
    types: ["ICE", "BUG"]
  },
  "#350 Frosmoth": {
    types: ["ICE", "BUG"]
  },
  "#351 Clobbopus": {
    types: ["FIGHTING"]
  },
  "#352 Grapploct": {
    types: ["FIGHTING"]
  },
  "#353 Pincurchin": {
    types: ["ELECTRIC"]
  },
  "#354 Mantyke": {
    types: ["WATER", "FLYING"]
  },
  "#355 Mantine": {
    types: ["WATER", "FLYING"]
  },
  "#356 Wailmer": {
    types: ["WATER"]
  },
  "#357 Wailord": {
    types: ["WATER"]
  },
  "#358 Bergmite": {
    types: ["ICE"]
  },
  "#359 Avalugg": {
    types: ["ICE"]
  },
  "#360 Dhelmise": {
    types: ["GHOST", "GRASS"]
  },
  "#361 Lapras": {
    types: ["WATER", "ICE"]
  },
  "#362 Lunatone": {
    types: ["ROCK", "PSYCHIC"]
  },
  "#363 Solrock": {
    types: ["ROCK", "PSYCHIC"]
  },
  "#364 Mime Jr.": {
    types: ["PSYCHIC", "FAIRY"]
  },
  "#365 Mr. Mime": {
    types: ["PSYCHIC", "FAIRY"]
  },
  "#366 Mr. Rime": {
    types: ["PSYCHIC", "ICE"]
  },
  "#367 Darumaka": {
    types: ["FIRE"]
  },
  "#368 Darmanitan": {
    types: ["FIRE"]
  },
  "#369 Stonjourner": {
    types: ["ROCK"]
  },
  "#370 Eiscue": {
    types: ["ICE"]
  },
  "#371 Duraludon": {
    types: ["STEEL", "DRAGON"]
  },
  "#372 Rotom": {
    types: ["ELECTRIC", "GHOST"]
  },
  "#373 Ditto": {
    types: ["NORMAL"]
  },
  "#374 Dracozolt": {
    types: ["ELECTRIC", "DRAGON"]
  },
  "#375 Arctozolt": {
    types: ["ELECTRIC", "ICE"]
  },
  "#376 Dracovish": {
    types: ["WATER", "DRAGON"]
  },
  "#377 Arctovish": {
    types: ["WATER", "ICE"]
  },
  "#378 Charmander": {
    types: ["FIRE"]
  },
  "#379 Charmeleon": {
    types: ["FIRE"]
  },
  "#380 Charizard": {
    types: ["FIRE", "FLYING"]
  },
  "#381 Type: Null": {
    types: ["NORMAL"]
  },
  "#382 Silvally": {
    types: ["NORMAL"]
  },
  "#383 Larvitar": {
    types: ["ROCK", "GROUND"]
  },
  "#384 Pupitar": {
    types: ["ROCK", "GROUND"]
  },
  "#385 Tyranitar": {
    types: ["ROCK", "DARK"]
  },
  "#386 Deino": {
    types: ["DARK", "DRAGON"]
  },
  "#387 Zweilous": {
    types: ["DARK", "DRAGON"]
  },
  "#388 Hydreigon": {
    types: ["DARK", "DRAGON"]
  },
  "#389 Goomy": {
    types: ["DRAGON"]
  },
  "#390 Sliggoo": {
    types: ["DRAGON"]
  },
  "#391 Goodra": {
    types: ["DRAGON"]
  },
  "#392 Jangmo-o": {
    types: ["DRAGON"]
  },
  "#393 Hakamo-o": {
    types: ["DRAGON", "FIGHTING"]
  },
  "#394 Kommo-o": {
    types: ["DRAGON", "FIGHTING"]
  },
  "#395 Dreepy": {
    types: ["DRAGON", "GHOST"]
  },
  "#396 Drakloak": {
    types: ["DRAGON", "GHOST"]
  },
  "#397 Dragapult": {
    types: ["DRAGON", "GHOST"]
  },
  "#398 Zacian": {
    types: ["FAIRY", "STEEL"]
  },
  "#399 Zamazenta": {
    types: ["FIGHTING", "STEEL"]
  },
  "#400 Eternatus": {
    types: ["POISON", "DRAGON"]
  },
}
