import{D as j,G as N,A as B,C as _,g as I}from"./chunks/utils.D0TYFXdU.js";import{C as f}from"./chunks/characters.HllRjsve.js";import{w as S,a as G,c as g,f as v}from"./chunks/wishRecent.y34OoZ0P.js";import{d as W,p as y,v as D,x as V,B as A,o as e,c as t,k as n,j as l,a as d,G as w,t as i,F as o,C as m,e as E,_ as P}from"./chunks/framework.DsEWC0co.js";import"./chunks/utils.BYZJLXyl.js";import"./chunks/wish.DHXV2DMK.js";import"./chunks/wishInfo.D85DMK2T.js";import"./chunks/zh.sXGPeAhE.js";const R={key:0},$=["src"],F={key:1},O={key:2},T={class:"f-w-600"},U={key:0},q={key:3},H=W({__name:"WishRecent",setup(k){let h=-1,p=-1,b=y(""),z=y("");D(async()=>{h=setInterval(()=>{b.value=S()},1e3),p=setInterval(()=>{z.value=G()},1e3)}),V(()=>{h&&clearInterval(h),p&&clearInterval(p)}),j(g,N.ZZZ);function C(x){x.target.src="/image/genshin/wish/_1.jpg"}return(x,r)=>{const c=A("Badge");return e(),t(o,null,[n(g).able?(e(),t("div",R,[l("h2",null,[r[0]||(r[0]=d("当前调频 ")),w(c,{text:n(g).obj[0].ver,type:"warning"},null,8,["text"])]),l("blockquote",null,"调频周期："+i(n(g).obj[0].date),1),(e(!0),t(o,null,m(n(g).obj,(s,Z)=>(e(),t("div",null,[l("h3",null,[r[2]||(r[2]=d(" 活动期间，下列限定五星角色调频成功概率限时提升 ")),r[3]||(r[3]=l("br",null,null,-1)),(e(!0),t(o,null,m(s.name,(u,a)=>(e(),t("span",null,[d(i(n(B)(s.name[a])+n(_)(s.wish5star[a],n(f)))+" ",1),w(c,{text:s.image[a]==1?"首次up":`第${s.image[a]}次up`,type:s.image[a]==1?"tip":"warning"},null,8,["text","type"]),r[1]||(r[1]=l("br",null,null,-1))]))),256))]),r[4]||(r[4]=d(" 四星角色 ")),(e(!0),t(o,null,m(s.wish4star,(u,a)=>(e(),t("span",null,i("「"+n(_)(u,n(f))+"」"),1))),256)),r[5]||(r[5]=d(" 调频成功概率限时提升 "))]))),256)),l("h3",null,i(n(z))+" 后结束",1),(e(!0),t(o,null,m(n(g).obj,(s,Z)=>(e(),t("div",null,[(e(!0),t(o,null,m(s.src,(u,a)=>(e(),t("div",{key:a},[l("img",{src:u,onError:C},null,40,$)]))),128))]))),256))])):(e(),t("div",F,r[6]||(r[6]=[l("h2",null,"现在 暂无调频，敬请期待",-1)]))),n(v).able?(e(),t("div",O,[r[7]||(r[7]=l("h2",null,"未来调频",-1)),l("h3",null,i(n(b))+" 后开始",1),l("ul",null,[(e(!0),t(o,null,m(n(v).obj,(s,Z)=>(e(),t("li",null,[l("span",T,[(e(!0),t(o,null,m(s.wish5star,(u,a)=>(e(),t("span",null,[d(i(n(_)(u,n(f)))+" ",1),a!==s.wish5star.length-1?(e(),t("span",U,i("+ "))):E("",!0)]))),256))]),w(c,{text:s.ver},null,8,["text"]),d(" "+i(s.date)+" ",1),(e(!0),t(o,null,m(s.wish4star,(u,a)=>(e(),t("span",null,i(n(_)(u,n(f))),1))),256))]))),256))])])):(e(),t("div",q,r[8]||(r[8]=[l("h2",null,"未来调频，等待更新",-1)])))],64)}}}),J=P(H,[["__scopeId","data-v-55c0e98e"]]),L={id:"近期-getwishnamestr-gamename-zzz",tabindex:"-1"},se=JSON.parse('{"title":"近期{{ getWishNameStr(GameName.ZZZ) }}","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"zzz/wish-recent.md","filePath":"zzz/wish-recent.md","lastUpdated":1720408615000}'),M={name:"zzz/wish-recent.md"},le=Object.assign(M,{setup(k){return(h,p)=>(e(),t("div",null,[l("h1",L,[d("近期"+i(n(I)(n(N).ZZZ))+" ",1),p[0]||(p[0]=l("a",{class:"header-anchor",href:"#近期-getwishnamestr-gamename-zzz","aria-label":'Permalink to "近期{{ getWishNameStr(GameName.ZZZ) }}"'},"​",-1))]),w(J)]))}});export{se as __pageData,le as default};
