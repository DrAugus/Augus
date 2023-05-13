import { City, Element, Weapon, Artifacts } from "./utils";

export const CHARACTER = {
  kafka: {
    id: "Kafka",
    name: "卡芙卡",
    prefix: Weapon.Nihility.name,
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.StellaronHunters,
    ele: Element.Lightning,
    weapon: Weapon.Nihility.id
  },
  blade: {
    id: "Blade",
    name: "刃",
    prefix: Weapon.Destruction.name,
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.StellaronHunters,
    ele: Element.Wind,
    weapon: Weapon.Destruction.id
  },
  fu_xuan: {
    id: "Fu Xuan",
    name: "符玄",
    prefix: Weapon.Preservation.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.TheXianzhouLuofu,
    ele: Element.Quantum,
    weapon: Weapon.Preservation.id
  },
  seele: {
    id: "Seele",
    name: "希儿",
    prefix: Weapon.Hunt.name,
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.JariloVI,
    ele: Element.Quantum,
    weapon: Weapon.Hunt.id
  },
  hook: {
    id: "Hook",
    name: "虎克",
    prefix: Weapon.Destruction.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Fire,
    weapon: Weapon.Destruction.id
  },
  pela: {
    id: "Pela",
    name: "佩拉",
    prefix: Weapon.Nihility.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Ice,
    weapon: Weapon.Nihility.id
  },
  natasha: {
    id: "Natasha",
    name: "娜塔莎",
    prefix: Weapon.Abundance.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Physical,
    weapon: Weapon.Abundance.id
  },
  yukong: {
    id: 'Yukong',
    name: '驭空',
    prefix: Weapon.Harmony.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Imaginary,
    weapon: Weapon.Harmony.id
  },
  luocha: {
    id: 'Luocha',
    name: '罗刹',
    prefix: Weapon.Abundance.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Imaginary,
    weapon: Weapon.Abundance.id
  },
  silver_wolf: {
    id: 'Silver Wolf',
    name: '银狼',
    prefix: Weapon.Nihility.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.StellaronHunters,
    ele: Element.Quantum,
    weapon: Weapon.Nihility.id
  },
  bailu: {
    id: 'Bailu',
    name: '白露',
    prefix: Weapon.Abundance.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Lightning,
    weapon: Weapon.Abundance.id
  },
  yanqing: {
    id: 'Yanqing',
    name: '彦卿',
    prefix: Weapon.Hunt.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Ice,
    weapon: Weapon.Hunt.id
  },
  sushang: {
    id: 'Sushang',
    name: '素裳',
    prefix: Weapon.Hunt.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Physical,
    weapon: Weapon.Hunt.id
  },
  jing_yuan: {
    id: 'Jing Yuan',
    name: '景元',
    prefix: Weapon.Erudition.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Lightning,
    weapon: Weapon.Erudition.id
  },
  tingyun: {
    id: 'Tingyun',
    name: '停云',
    prefix: Weapon.Harmony.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Lightning,
    weapon: Weapon.Harmony.id
  },
  qingque: {
    id: 'Qingque',
    name: '青雀',
    prefix: Weapon.Erudition.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Quantum,
    weapon: Weapon.Erudition.id
  },
  sampo: {
    id: 'Sampo',
    name: '桑博',
    prefix: Weapon.Nihility.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Wind,
    weapon: Weapon.Nihility.id
  },
  clara: {
    id: 'Clara',
    name: '克拉拉',
    prefix: Weapon.Destruction.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Physical,
    weapon: Weapon.Destruction.id
  },
  gepard: {
    id: 'Gepard',
    name: '杰帕德',
    prefix: Weapon.Preservation.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Ice,
    weapon: Weapon.Preservation.id
  },
  serval: {
    id: 'Serval',
    name: '希露瓦',
    prefix: Weapon.Erudition.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Lightning,
    weapon: Weapon.Erudition.id
  },
  bronya: {
    id: 'Bronya',
    name: '布洛妮娅',
    prefix: Weapon.Harmony.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Wind,
    weapon: Weapon.Harmony.id
  },
  herta: {
    id: 'Herta',
    name: '黑塔',
    prefix: Weapon.Erudition.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.HertaSpaceStation,
    ele: Element.Ice,
    weapon: Weapon.Erudition.id
  },
  asta: {
    id: 'Asta',
    name: '艾丝妲',
    prefix: Weapon.Harmony.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.HertaSpaceStation,
    ele: Element.Fire,
    weapon: Weapon.Harmony.id
  },
  arlan: {
    id: 'Arlan',
    name: '阿兰',
    prefix: Weapon.Destruction.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.HertaSpaceStation,
    ele: Element.Lightning,
    weapon: Weapon.Destruction.id
  },
  welt: {
    id: 'Welt',
    name: '瓦尔特',
    prefix: Weapon.Nihility.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Imaginary,
    weapon: Weapon.Nihility.id
  },
  himeko: {
    id: 'Himeko',
    name: '姬子',
    prefix: Weapon.Erudition.name,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Fire,
    weapon: Weapon.Erudition.id
  },
  dan_heng: {
    id: 'Dan Heng',
    name: '丹恒',
    prefix: Weapon.Hunt.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Wind,
    weapon: Weapon.Hunt.id
  },
  march_7th: {
    id: 'March 7th',
    name: '三月七',
    prefix: Weapon.Preservation.name,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Ice,
    weapon: Weapon.Preservation.id
  },
}
