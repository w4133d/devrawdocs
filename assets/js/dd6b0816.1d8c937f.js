"use strict";(self.webpackChunkdevraw_docs=self.webpackChunkdevraw_docs||[]).push([[8710],{9101:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(4848),t=r(8453);const i={Beginner:e=>{let{children:s}=e;return(0,o.jsx)("span",{style:{backgroundColor:"#0f9d58",borderRadius:"11px",color:"#fff",padding:"10px"},children:s})},Intermediate:e=>{let{children:s}=e;return(0,o.jsx)("span",{style:{backgroundColor:"#ffa000",borderRadius:"11px",color:"#fff",padding:"10px"},children:s})},Advanced:e=>{let{children:s}=e;return(0,o.jsx)("span",{style:{backgroundColor:"#ed3419",borderRadius:"11px",color:"#fff",padding:"10px"},children:s})}},n={sidebar_position:4,sidebar_label:"Directories & File Overrides"},a="BO3 Directories",l={id:"general/bo3-directories",title:"BO3 Directories",description:"Beginner",source:"@site/docs/general/bo3-directories.mdx",sourceDirName:"general",slug:"/general/bo3-directories",permalink:"/w1433d.github.io/docs/general/bo3-directories",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/general/bo3-directories.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Directories & File Overrides"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/w1433d.github.io/docs/category/general"},next:{title:"zone-files",permalink:"/w1433d.github.io/docs/general/zone-files"}},d={},c=[{value:"About directories",id:"about-directories",level:2},{value:"Dragging &amp; Dropping / Installing Asset Packs",id:"dragging--dropping--installing-asset-packs",level:3},{value:"File overrides",id:"file-overrides",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return i||p("Levels",!1),i.Beginner||p("Levels.Beginner",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"bo3-directories",children:"BO3 Directories"}),"\n",(0,o.jsx)(i.Beginner,{children:"Beginner"}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsxs)(s.p,{children:["This section focuses on Black Ops III's ",(0,o.jsx)(s.strong,{children:"directory system"}),", and how ",(0,o.jsx)(s.strong,{children:"dragging & dropping"})," works."]}),"\n",(0,o.jsx)(s.p,{children:"It also covers which folders the compiler prioritises when building your map."}),"\n",(0,o.jsx)(s.h2,{id:"about-directories",children:"About directories"}),"\n",(0,o.jsxs)(s.p,{children:["When you installed Mod Tools, you'll have noticed more folders in your BO3 root. Some of them are: ",(0,o.jsx)(s.code,{children:"map_source"}),", ",(0,o.jsx)(s.code,{children:"model_export"}),", ",(0,o.jsx)(s.code,{children:"share"}),", ",(0,o.jsx)(s.code,{children:"sound_assets"})," and ",(0,o.jsx)(s.code,{children:"texture_assets"}),". These are some of the main folders that store assets for the game. You'll be using them a lot, and you'll naturally get familiar with them. Sometimes specific files ",(0,o.jsx)(s.strong,{children:"must"})," be inside their respective folder for the game to read them."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-x",metastring:'title="Visualisation of the directory tree "',children:"Call of Duty Black Ops III\n    \u2514\u2500\u2500 sound_assets\n        \u2514\u2500\u2500 pv\n            \u2514\u2500\u2500 motd_announcer_finn\n                \u2514\u2500\u2500 max_ammo.wav\n"})}),"\n",(0,o.jsxs)(s.p,{children:["For example, consider the directory above. I want to put this sound in the game. Sound files must be within ",(0,o.jsx)(s.code,{children:"sound_assets"})," as the linker is searching ",(0,o.jsx)(s.code,{children:"<path to root>\\Call of Duty Black Ops III\\sound_assets\\"})," PLUS whatever the file path for the sound is. In the case above, the full path would be:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'"<path to root>\\Call of Duty Black Ops III\\sound_assets\\" PLUS "pv\\motd_announcer_finn\\max_ammo.wav"\n'})}),"\n",(0,o.jsxs)(s.p,{children:["This is just because the devs wanted all sounds to be located inside the ",(0,o.jsx)(s.code,{children:"sound_assets"})," folder. However this isn't the case for all files used by the game. For example,  ",(0,o.jsx)(s.code,{children:".xmodel_bin"})," files and textures (PNGs & TIFs) can be put anywhere inside the Black Ops III folder or all its subfolders. But I still recommend to keep them in their respective folders. Files can get ",(0,o.jsx)(s.em,{children:"very messy very quickly"}),", and could cause you greif later on if there's a lack of organisation, which is why in game dev you'll never find a company that doesn't have a logical data structure for their game files."]}),"\n",(0,o.jsx)(s.p,{children:"I recommend you make a custom folder of your username (or an abbreviation of it) in the main folders when you add assets to them, so you know which stuff is yours."}),"\n",(0,o.jsx)(s.h3,{id:"dragging--dropping--installing-asset-packs",children:"Dragging & Dropping / Installing Asset Packs"}),"\n",(0,o.jsx)(s.p,{children:"Dragging & dropping is an easy way to install someone else's assets they've released. It's a standard format for sharing assets within the Mod Tools community. The person packages up all the assets by putting them all into the same folders they were originally in. So when you install it, you just drag the main folders (that have their files in) into your BO3 root, and the files will be in the same place as the person who shared the files."}),"\n",(0,o.jsxs)(s.p,{children:["The file paths will all be the same, so if I'm releasing that ",(0,o.jsx)(s.a,{href:"https://www.devraw.net/releases/michael-finn-o'leary-announcer-pack",children:"Mob of the Dead Announcer pack"}),", I would put it in the same directory tree. Then when the game compiles your map, it will find the files in the same location (from the BO3 root folder)"]}),"\n",(0,o.jsx)(s.p,{children:"Usually people leave instructions on how to install the asset pack, in case there are a few more steps than a simple drag 'n drop."}),"\n",(0,o.jsx)(s.h2,{id:"file-overrides",children:"File overrides"}),"\n",(0,o.jsxs)(s.p,{children:["Just like ",(0,o.jsx)(s.code,{children:"sound_assets"})," is a base for sound files, there is another 'base' folder used for common shared files, used by all maps, located in ",(0,o.jsx)(s.code,{children:"<BO3 root>\\share\\raw\\**"}),". Now there are a ton of folders here, but don't let that intimiadte you. For now, let's just focus on the ",(0,o.jsx)(s.code,{children:"scripts"})," folder."]}),"\n",(0,o.jsxs)(s.p,{children:["This is, as the name implies, where all the ",(0,o.jsx)(s.strong,{children:"global scripts"})," are stored. What do I mean by global? Well, these scripts can be called and used in any map (assuming you've ",(0,o.jsx)(s.a,{href:"/w1433d.github.io/docs/general/zone-files",children:"zoned them"}),", of course). This also applies to every other file in the ",(0,o.jsx)(s.code,{children:"share\\raw\\**"})," directory."]}),"\n",(0,o.jsxs)(s.p,{children:["But what if you wanted to change a script, or another file for a specific map? If you change it in ",(0,o.jsx)(s.code,{children:"share\\raw"}),", it'll reflect the changes whenever you compile any map. Well, before the linker checks if the file is in ",(0,o.jsx)(s.code,{children:"share\\raw"}),", it'll actually check if it's in your map folder first."]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>a});var o=r(6540);const t={},i=o.createContext(t);function n(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);