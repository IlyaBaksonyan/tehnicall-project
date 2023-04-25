import{b as g,r as u,l as S,m as d,p as v,o,e as r,f as t,q as I,u as h,i as p,t as M,h as m,a as x,F as f,s as C,c as P}from"./entry.074424bb.js";import{S as b}from"./ScrollTrigger.42d31154.js";import{r as q}from"./resizeImage.a63cdd3f.js";import"./cross.vue.36cbe246.js";const k=""+globalThis.__publicAssetsURL("images/freelancerPage/cmsIntro.jpg"),U={class:"CMS__intro"},B={class:"CMS__intro__content"},A=t("div",{class:"CMS__intro__header"},[t("h1",null,[p(" Среднеуровневые методы "),t("br"),p(" (CMS) ")])],-1),D={class:"CMS__intro__animatedInput"},E={class:"CMS__intro__animatedInput__paragraph"},F=t("div",{class:"CMS__intro__background"},[t("img",{src:k,alt:""})],-1),N=g({__name:"introSection",setup(_){const e=u();let s=u(),a;function n(i=!1){var T;s.value=(T=e.value)==null?void 0:T.innerHTML.split("").length,i?a=setInterval(c,7e3):clearInterval(a);function c(){var y;const $=["Определение.","Применение.","Качества."],j=Math.floor(Math.random()*$.length),H=$[j];e.value.innerHTML=H,s.value=(y=e.value)==null?void 0:y.innerHTML.split("").length}}function l(){const i=".cmsSection",c=".CMS__intro";d.timeline({scrollTrigger:{trigger:c,scroller:i,start:"start bottom",scrub:1,snap:{snapTo:.5,duration:.5,directional:!0,ease:"ease"},end:"bottom"}})}return S(()=>{n(!0),d.registerPlugin(b),l()}),v(()=>{n(!1)}),(i,c)=>(o(),r("div",U,[t("div",B,[A,t("div",D,[t("div",E,[t("p",{ref_key:"introParagraph",ref:e,style:I({"--letterCount":h(s)})},"Определение.",4)])])]),F]))}}),V={class:"CMS__using__section"},W={class:"CMS__using__heading"},z={class:"CMS__using__description"},O=["innerHTML"],R={class:"CMS__using__img"},w=g({__name:"cmsUsingSection",props:{item_data:{type:Object,default:()=>Object}},setup(_){const e=_,s="/tehnicall-project/images/freelancerPage/";return(a,n)=>(o(),r("div",V,[t("div",W,[t("h2",null,M(e.item_data.heading),1)]),t("div",z,[t("p",{innerHTML:e.item_data.text},null,8,O)]),t("div",R,[m(q,{src:s+e.item_data.img,alt:e.item_data.img},null,8,["src","alt"])])]))}}),J=x(w,[["__scopeId","data-v-12332983"]]),G=[{id:0,text:"Разработчик выбирает подходящую CMS в зависимости от требований проекта. Например, если сайт будет лендингом или корпоративным, то хорошим выбором будет WordPress. Если требуется более сложный функционал, то можно рассмотреть Drupal или Joomla, которые обладают более широкими возможностями.",heading:"Выбор CMS",img:"choose.jpg"},{id:1,text:"Разработчик устанавливает CMS на хостинг и настраивает ее под нужды проекта. Также может помочь настроить доменное имя. При установке CMS разработчик настраивает базу данных и выбирает тему или шаблон для сайта, чтобы клиент мог в дальнейшем легко менять его дизайн.",heading:"Установка и настройка CMS",img:"setting.jpg"},{id:2,text:"Разработчик выбирает готовую тему или шаблон для сайта и настраивает его дизайн с помощью встроенных инструментов в CMS. Верстка сайта производится с помощью языков HTML и CSS, используя готовые элементы и стили из выбранной темы. ",heading:"Разработка дизайна и верстки",img:"design.jpg"},{id:3,text:"Разработчик создает функционал сайта, используя готовые плагины и модули, которые можно легко установить и настроить. Это включает создание форм обратной связи, интеграцию социальных сетей, разработку слайдеров и других интерактивных элементов.            ",heading:"Создание функционала",img:"functionality.jpg"},{id:4,text:"После завершения разработки, разработчик проводит тестирование сайта, чтобы убедиться, что все работает должным образом и соответствует требованиям проекта. Затем он производит оптимизацию сайта с помощью плагинов, чтобы улучшить скорость загрузки и повысить его поисковую оптимизацию.             ",heading:"Тестирование и оптимизация",img:"testing.jpg"},{id:5,text:" После окончания разработки и оптимизации, сайт передается клиенту, который может добавлять контент с помощью CMS. Разработчик также даёт документацию или обучает клиента,  чтобы он мог эффективно управлять своим сайтом и вносить изменения при необходимости.",heading:"Добавление контента",img:"Content.jpeg"}],K={cmsUsage:G},Q={class:"CMS__using"},X=g({__name:"usingSection",setup(_){const e=u(K.cmsUsage);function s(){const a=".cmsSection",n=".CMS__using";d.timeline({scrollTrigger:{trigger:n,scroller:a,start:"start start",scrub:1,snap:{snapTo:1,duration:30,ease:"ease"},end:"bottom bottom"}})}return S(()=>{d.registerPlugin(b),s()}),v(()=>{}),(a,n)=>(o(),r("div",Q,[(o(!0),r(f,null,C(h(e),(l,i)=>(o(),P(J,{key:i,item_data:l},null,8,["item_data"]))),128))]))}}),Y=x(X,[["__scopeId","data-v-0aa6a747"]]),Z=[{heading:"Доступность:",text:"полностью не требуются глубокие знания программирования"},{heading:"Скорость:",text:"быстрое создание сайтов и приложений с помощью перетаскивания модулей"},{heading:"Экономичность:",text:"значительно дешевле чем заказ"},{heading:"Техническая поддержка:",text:"предоставление хостинга и обновлений сайта конструктором"}],tt=[{heading:"Ограниченная настройка:",text:"невозможность полностью настроить сайт, особенно в случае нестандартных требований к дизайну и функциональности."},{heading:"Сложность масштабирования:",text:"подходят для создания простых сайтов, но являются посредственным выбором для средних и сложных проектов, требующих индивидуальной функциональности и масштабируемости."}],L={pros:Z,cons:tt},et={class:"CMS__qualities"},nt={class:"constructors__qualities__content"},st={class:"CMS__qualities__leftPart"},at=["innerHTML"],it={class:"CMS__qualities__rightPart"},ot=["innerHTML"],rt=g({__name:"qualitiesSection",setup(_){const e=u(L.pros),s=u(L.cons);function a(){const n=".cmsSection",l=".CMS__qualities";d.timeline({scrollTrigger:{trigger:l,scroller:n,start:"start bottom",scrub:.5,snap:{snapTo:.5,duration:.5,directional:!0,ease:"ease"},end:"bottom"}})}return S(()=>{d.registerPlugin(b),a()}),(n,l)=>(o(),r("div",et,[t("div",nt,[t("div",st,[t("ul",null,[(o(!0),r(f,null,C(h(e),(i,c)=>(o(),r("li",{key:c},[t("b",{innerHTML:i.heading},null,8,at),p(" "+M(i.text),1)]))),128))])]),t("div",it,[t("ul",null,[(o(!0),r(f,null,C(h(s),(i,c)=>(o(),r("li",{key:c},[t("b",{innerHTML:i.heading},null,8,ot),p(" "+M(i.text),1)]))),128))])])])]))}}),ct={class:"CMS"},_t=g({__name:"main",setup(_){function e(a=!1){const n=document.querySelector(".container");a?n.style.maxWidth="max(100vw, 65ch)":n.removeAttribute("style")}function s(a=!1){const n=document.querySelector("main");a?n.classList.remove("style"):n.classList.add("style")}return S(()=>{e(!0),s(!0)}),v(()=>{e(!1),s(!1)}),(a,n)=>(o(),r("div",ct,[m(N),m(Y),m(rt)]))}}),lt={};function dt(_,e){const s=_t;return o(),P(s)}const pt=x(lt,[["render",dt]]);export{pt as default};
