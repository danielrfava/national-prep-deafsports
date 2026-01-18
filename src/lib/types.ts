
export type Team = {
  id: string; abbr: string; name: string; city: string; state: string; division: "DI"|"DII"; logo?: string;
}
export type Player = {
  id: string; teamId: string; first: string; last: string; number?: number; position?: string; classYear?: string;
}
export type Game = {
  id: string; date?: string; timeLocal?: string; venue?: string;
  homeTeamId: string; awayTeamId: string; status: "final"|"scheduled";
  score?: { home: number; away: number }; lineScore?: Record<string,string>;
}
export type StandingsDivision = { id:"DI"|"DII"; name:string; rows: { teamId:string; wins:number; losses:number; pct:number; pf:number; pa:number; rating?:number|null; sos?:number|null }[] }
