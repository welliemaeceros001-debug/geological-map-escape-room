import { getStore } from "@netlify/blobs";
export const headers={"content-type":"application/json","cache-control":"no-store"};
export function response(body,status=200){return new Response(JSON.stringify(body),{status,headers});}
export async function body(req){try{return await req.json()}catch{return null}}
export function valid(p){return p&&typeof p.sessionId==="string"&&p.sessionId.length<100&&typeof p.groupName==="string"&&p.groupName.trim()&&p.groupName.length<=60}
export function clean(p){return JSON.parse(JSON.stringify(p,(_k,v)=>typeof v==="string"?v.slice(0,500):v))}
export async function allJSON(store,prefix=""){let cursor;const values=[];do{const page=await store.list({prefix,cursor});for(const b of page.blobs||[]){const value=await store.get(b.key,{type:"json",consistency:"strong"});if(value)values.push(value)}cursor=page.next_cursor}while(cursor);return values}
