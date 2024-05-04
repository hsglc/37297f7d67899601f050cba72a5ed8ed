export interface SportProgram {
  date: any;
  error: any;
  info: any;
  isSuccess: boolean;
  message: string;
  data: Data;
}

export interface Data {
  sportId: number;
  events: Event[];
  mukList: any;
  marketHeader: any;
  groupName: any;
}

export interface Event {
  sid: number;
  eid: number;
  ev: number;
  cn: string;
  e: string;
  ed: number;
  ede: string;
  edh: string;
  en: string;
  mb: number;
  es: number;
  live: boolean;
  mc: number;
  cnid: string;
  cnn: string;
  bid: number;
  m: M[];
  pt: number;
  cgid: number;
  eprt: Eprt[];
  betting: boolean;
  muklist: any;
  edgn: string;
  spc: any;
  cgn: string;
  iskbet: boolean;
  skbet: number;
  kblive: boolean;
  kbodd: boolean;
  kbmbs: boolean;
  cref: number;
  cgref: number;
  iirm: boolean;
  hasduel: boolean;
  iso: boolean;
}

export interface M {
  mid: number;
  mv: number;
  mn: string;
  muk: string;
  mbs: number;
  ms: number;
  mno: string;
  o: O[];
  irp: boolean;
  inm: boolean;
}

export interface O {
  ou: string;
  ono: number;
  odd: number;
  sodd: string;
  ona: string;
  ov: number;
  cs?: string;
  spo: boolean;
  oodd?: string;
  state: boolean;
  sona?: string;
  wodd: number;
}

export interface Eprt {
  acr: string;
  pn: string;
}
