import{a as l,o as s,b as n,p as x,i as y,e as t,k as b,v as r,f as a,w as u,x as F,l as k,t as E,m as h,F as S,q as D,c as A,y as q,z as g,A as B,h as p}from"./entry.f16b7760.js";import{r as H}from"./resizeImage.06ebd746.js";import R from"./prevSlide.4a018219.js";import z from"./nextSlide.633b1777.js";import G from"./startSlides.2ec3fd63.js";import{_ as O}from"./nuxt-link.e02d38fc.js";const V={},Q=e=>(x("data-v-0eac96d6"),e=e(),y(),e),M={class:"firstScreen"},J=Q(()=>t("div",{class:"firstScreen__wrapper"},[t("h1",{class:"icon-style"},"project"),t("h2",null,"Затеев Илья"),t("h2",null,"Front-end Developer")],-1)),Y=[J];function U(e,i){return s(),n("section",M,Y)}const P=l(V,[["render",U],["__scopeId","data-v-0eac96d6"]]),K=b({name:"NoCodeItem",components:{resizeImage:H},props:{item_data:{type:Object,default:()=>Object},currentSlideIndex:{type:Number,default:()=>0}},data(){return{pathImg:"./images/No-code/"}},computed:{withBrTags:function(){const e=this.item_data.text;return e==null?void 0:e.replace(/(\\r)*\\n/g,"<br>")}}});const W={class:"carousel__section"},X={class:"carousel__item img-section"},Z={class:"carousel__item description-section"},ee=["innerHTML"],te={class:"carousel__item title-section"},ie={class:"carousel__item nav-section"};function ae(e,i,d,c,$,_){const m=r("resizeImage");return s(),n("div",W,[t("div",X,[a(m,{src:e.pathImg+e.item_data.img,alt:e.item_data.img},{img:u(f=>[t("img",F({class:"carousel__img"},f),null,16)]),_:1},8,["src","alt"])]),t("div",Z,[t("p",{innerHTML:e.withBrTags},null,8,ee)]),t("div",te,[t("h2",{style:k(`color:var(--carouselTitle${e.item_data.id}Color)`)},E(e.item_data.title),5)]),t("div",ie,[h(e.$slots,"btns",{},void 0,!0)])])}const se=l(K,[["render",ae],["__scopeId","data-v-9fafdc97"]]);const oe={},ue={class:"blocks"};function ne(e,i){return s(),n("div",ue,[h(e.$slots,"default",{},void 0,!0)])}const re=l(oe,[["render",ne],["__scopeId","data-v-bd6106cb"]]);const le={},ce={class:"block"};function de(e,i){return s(),n("div",ce,[h(e.$slots,"img",{},void 0,!0),t("h2",null,[h(e.$slots,"h2",{},void 0,!0)])])}const me=l(le,[["render",de],["__scopeId","data-v-7ca0c04a"]]),pe=b({name:"NoCodeCarousel",components:{noCodeItem:se,btnPrev:R,btnNext:z,startSlides:G,SelectBlock:me,SelectBlocks:re},props:{carouselData:{type:Array,default:()=>[]},blocksData:{type:Array,default:()=>[]},buttonsData:{type:Array,default:()=>[]}},data(){return{currentSlideIndex:0}},methods:{prevSlide(){this.currentSlideIndex>0&&this.currentSlideIndex--},nextSlide(){if(this.currentSlideIndex>=this.carouselData.length-1)return!1;this.currentSlideIndex++},startSlide(){this.currentSlideIndex=1}}});const _e={class:"select"},fe={class:"select__wrapper"},ve=["src"];function he(e,i,d,c,$,_){const m=r("btnPrev"),f=r("startSlides"),C=r("btnNext"),I=r("noCodeItem"),w=r("SelectBlock"),L=r("SelectBlocks");return s(),n(S,null,[t("div",{class:"carousel",style:k(`transform: translate(-${100*e.currentSlideIndex}%)`)},[(s(!0),n(S,null,D(e.carouselData,o=>(s(),A(I,{key:o.id,item_data:o,currentSlideIndex:e.currentSlideIndex},{btns:u(()=>[q(t("button",{class:"nav-section__btn",title:"Пролестнуть назад",onClick:i[0]||(i[0]=(...v)=>e.prevSlide&&e.prevSlide(...v))},[a(m,{stroke:"white",width:"10vw"})],512),[[g,o.prev]]),q(t("button",{title:"вернуться в начало",class:B(`startSlides${e.currentSlideIndex} startSlides`),onClick:i[1]||(i[1]=(...v)=>e.startSlide&&e.startSlide(...v))},[a(f,{class:"startSlides__btn",width:"max(12rem ,8vw)",fill:"white"})],2),[[g,e.currentSlideIndex>=2]]),q(t("button",{class:"nav-section__btn",title:"Пролестнуть вперед",onClick:i[2]||(i[2]=(...v)=>e.nextSlide&&e.nextSlide(...v))},[a(C,{width:"10vw",fill:"white"})],512),[[g,o.next]])]),_:2},1032,["item_data","currentSlideIndex"]))),128)),q(t("button",{class:B("startSlides-whole"),title:"Возвратить в начало",style:k(`transform: translate(${100*e.currentSlideIndex}vw)`),onClick:i[3]||(i[3]=(...o)=>e.startSlide&&e.startSlide(...o))},[a(f,{width:"max(6rem, 5vw)",fill:"black"})],4),[[g,e.currentSlideIndex>1]])],4),q(t("div",_e,[t("button",{class:"select__back",title:"Вернуться назад",onClick:i[4]||(i[4]=(...o)=>e.prevSlide&&e.prevSlide(...o))},[a(m,{stroke:"white",width:"max(1.5em, 5vmax)"})]),t("div",fe,[a(L,null,{default:u(()=>[(s(!0),n(S,null,D(e.blocksData,o=>(s(),A(w,{key:o.id,onClick:v=>e.currentSlideIndex=e.currentSlideIndex+o.id},{img:u(()=>[t("img",{src:`./images/No-code/${o.img}`,alt:"gfdgf"},null,8,ve)]),h2:u(()=>[p(E(o.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})])],512),[[g,e.currentSlideIndex===1]])],64)}const qe=l(pe,[["render",he],["__scopeId","data-v-a0f23f69"]]),ge=[{id:0,text:"Способ без написания кода или NoCode способ \\n\\n Позволяет создать сайт без знаний языков программирования из за чего популярность этого способа неумолимо растёт последние годы. Он отлично подходит для предпринимателей, владельцев малого бизнеса и блоггеров, которые хотят быстро создавать прототипы и тестировать идеи или даже создавать крупномасштабные сайты без написания кода. Они удобны, просты в использовании и экономичные поскольку не требуют технических знаний.В конечном счете, приложения NoCode — отличный способ быстро и эффективно запустить сайт средний сложности.",title:"Способ без написания кода (NoCode)",img:"test.png",next:!0},{},{id:1,text:"Чтобы создать сайт с помощью NoCode приложения все что нужно это зайти на NoCode веб-сайт, такой как например Glide, Adalo или Tilda.  создать учетную запись, за несколько кнопок создать всю инфраструктуру, выбрать готовый шаблон, подредактировать его инструментом drag-and-drop расскладывая готовые блоки. За несколько часов создавая полный сайт готовый к выкладыванию в интернет. нажимаешь кнопку и сайт появляется в интернете с доменом который ты выбрал. Кроме того, большинство платформ NoCode предлагают дополнительные функции, такие как хостинг, аналитика и возможности электронной коммерции, которые можно использовать для дальнейшей настройки и улучшения сайта.",title:"NoCode веб-сайт",img:"test2.png"},{id:2,text:'В наше время появились нейросети так что сейчас некоторые люди создают сайты даже с помощью нейросетей. \\n\\n Создавая сайт нейросетью все что нужно это: сгенерировать дизайн, сгенерировать код и сгенерировать контент (текст).\\n\\n Дизайн \\n\\n Для создания дизайна нужно набрать в поисковике что то похожее на - "как сгенерировать картинку в midjourney" Набрать запрос в midJourney как например \\n "A beautiful modern clean website design for a tech powered Pizza restaraunt" и он сгенерирует красивый дизайн сравнимый с проффесионалами в дизайне. \\n\\nКод и контент\\n\\n Для написания кода и контента, есть трудности так как на данный момент ChatGpt недоступен в россии так что или найти ChatGPT в телеграмме (я посоветую "ChatGptBot") или пройти по этой ссылке в дискорд https://thecode.media/chat-discord/ и пообщаться с настоящим (я советую выбирать DAN так как он лучше отвечает чем нормальный ChatGPT) Там же можно создать контент так как он очень хорошо пишет текст и обьясняет любые вещи',title:"ChatGPT и MidJourney",img:"gptj.png",next:!0},{id:3,text:"Но создавать код незнаещему человеку будет почти невозможно, но это не значит что ChatGPT бесполезный так как он вобрал в себя значительную часть интернета до 2021 года и может ответить почти на любой вопрос",title:"AI еще развит не сильно",img:"gpt2.png",prev:!0}],be=[{id:1,img:"gdf.jpg",title:"NoCode приложения"},{id:2,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"},{id:4,img:"chat1.jpeg",title:"ЧатБоты"}],N={items:ge,blocks:be},$e=b({name:"NoCode",components:{carousel:qe},data(){return{items:N.items,blocks:N.blocks}}});const Se=e=>(x("data-v-0dd4c1e3"),e=e(),y(),e),xe={id:"noCode",class:"noCode"},ye={class:"noCode__wrapper"},Ce=Se(()=>t("p",null,null,-1));function Ie(e,i,d,c,$,_){const m=r("carousel");return s(),n("section",xe,[t("div",ye,[a(m,{carouselData:e.items,blocksData:e.blocks},null,8,["carouselData","blocksData"]),Ce])])}const we=l($e,[["render",Ie],["__scopeId","data-v-0dd4c1e3"]]),ke={};const Ae={class:"heading"};function De(e,i,d,c,$,_){return s(),n("div",Ae,[t("h2",null,[h(e.$slots,"h2",{},void 0,!0)]),t("p",null,[h(e.$slots,"p",{},void 0,!0)])])}const j=l(ke,[["render",De],["__scopeId","data-v-b1806849"]]),Be={id:"freelancerApproach",class:"freelancerApproach"},Ne={class:"btns"},Ee={data(){return{path:"/freelancerPage",defaultPath:"main"}}},Pe=b({...Ee,__name:"freelancerApproach",setup(e){return(i,d)=>{const c=O;return s(),n("section",Be,[a(j,{class:"heading"},{h2:u(()=>[p(" Фриланс ")]),_:1}),t("div",Ne,[a(c,{class:"btns__main",to:`${i.path}/${i.defaultPath}`},{default:u(()=>[p("freelance")]),_:1},8,["to"]),a(c,{class:"other g",to:`${i.path}/cms/definition`},{default:u(()=>[p("OtherSite")]),_:1},8,["to"]),a(c,{class:"other gg",to:`${i.path}/studios/definition`},{default:u(()=>[p("lorem")]),_:1},8,["to"]),a(c,{class:"other ggg",to:`${i.path}/freelancers/definition`},{default:u(()=>[p("lorem")]),_:1},8,["to"])])])}}});const je=l(Pe,[["__scopeId","data-v-c81c5b50"]]),Te=e=>(x("data-v-4dbcd332"),e=e(),y(),e),Le={id:"developerApproach",class:"developerApproach"},Fe={class:"container"},He=Te(()=>t("div",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem blanditiis asperiores magni, eaque iste, laboriosam accusamus fuga sunt expedita vitae architecto eos molestiae culpa aliquid! Maxime beatae debitis excepturi quo quis temporibus praesentium nemo dolorum sit perferendis, adipisci aliquid exercitationem, modi tempore ipsum laboriosam cum cumque assumenda omnis quod qui recusandae neque deleniti? Nulla facere quam exercitationem necessitatibus quo sed alias sapiente animi dicta sequi veritatis, nisi rem aut quasi mollitia fugiat, aliquam deserunt blanditiis ipsa quaerat itaque ad? Eos repudiandae non illo eaque tempore quisquam expedita amet perferendis nobis facilis impedit alias eligendi nesciunt, mollitia quaerat porro. Nesciunt quo, similique a sit vero itaque distinctio facere cum possimus facilis. Recusandae ratione asperiores accusamus illo minima error inventore, nisi dolore laudantium ea debitis consequatur suscipit quisquam maxime rem exercitationem modi quam incidunt corporis quos! Ipsam, cumque aut iusto eveniet fuga eius nihil vitae rerum tenetur aperiam quaerat soluta ipsa harum magnam! Ex quos, iusto veniam consectetur a, vitae rem dolor repudiandae tempore ipsam adipisci nulla? Numquam quidem placeat libero tempora cupiditate quae maiores eaque, tenetur perspiciatis esse assumenda officiis ipsum earum facere cumque dolore totam laboriosam! Iste, in, fuga odio, vero distinctio blanditiis quo fugit id quisquam itaque nemo! Doloribus architecto totam nihil, fuga eligendi, harum quisquam consequuntur, voluptas quas saepe eos temporibus distinctio dolor fugit molestias unde ullam molestiae corrupti officiis soluta non corporis alias ipsam? Est placeat doloribus, ut delectus sapiente quaerat quae accusantium saepe reiciendis fugiat voluptate consequatur excepturi fugit dolorum iusto similique odit tempore accusamus nostrum. Voluptate iste enim beatae dolor ducimus veniam ipsa perferendis autem qui laboriosam. Commodi exercitationem doloribus modi obcaecati quasi animi accusantium officiis eveniet quo maiores consequatur numquam provident praesentium voluptate aut molestiae enim possimus, voluptas laudantium veritatis dolorem dolor debitis! Ut molestias vel modi at dolorum nostrum ducimus error consequatur, excepturi nesciunt possimus deserunt unde nemo laudantium delectus saepe maxime omnis vero. Amet id tenetur mollitia qui delectus dignissimos nobis deleniti voluptas, ab eum nihil fugit error, laboriosam dolor, quaerat assumenda consequuntur commodi minima asperiores reiciendis cumque quas illum cum est. Quasi nam soluta quas doloribus suscipit assumenda asperiores eos molestias repellendus odit qui voluptatibus, vitae natus saepe vel consectetur harum! Obcaecati molestias similique nam quas fuga dolorum nulla officiis odio ut, laudantium neque. Atque eius eligendi repellendus minima? Accusantium, at cumque eveniet architecto distinctio incidunt nihil officia repellendus assumenda nesciunt eius quam voluptate quidem ipsam deserunt ex inventore perspiciatis? Accusantium ratione est minus, quasi aut inventore laboriosam repudiandae et veritatis officia? Corrupti ipsum voluptatibus assumenda cum illo sint quisquam veniam quo soluta, neque aut numquam, totam quis. Maxime mollitia voluptate quod laboriosam beatae minima, perferendis dolorem veniam placeat? Eum alias perferendis iste soluta repellendus odit unde, fugiat vitae sapiente? Quo non id quidem necessitatibus, voluptates placeat mollitia temporibus asperiores nihil. Quas itaque quisquam, porro, eveniet quis deleniti, sunt sit fugit at veritatis error numquam. Dolores deserunt, nam quae a velit maxime est, eum officia vitae commodi cumque blanditiis, rerum omnis laudantium eveniet officiis alias tempora numquam nulla ut magni dignissimos reiciendis. Saepe eius culpa quam minima quod iusto rerum officia non autem? Expedita eum maiores quibusdam culpa sint nihil saepe officia impedit, quos odio nostrum laboriosam quia voluptatibus nam tempore nobis aliquam alias enim error temporibus, omnis explicabo. Voluptates quasi minus distinctio illo natus accusantium voluptate, adipisci blanditiis? Aliquid repudiandae ut veniam vitae recusandae! Veritatis officia quidem libero, animi labore quos magni ex excepturi blanditiis aspernatur alias ratione quisquam, delectus a, neque modi expedita natus culpa. In, harum esse. Quisquam cupiditate saepe quam, quidem itaque iste, dolores vero neque nisi dignissimos aut labore doloribus minima molestiae natus, nostrum distinctio dolore nam exercitationem dolor maxime. Eligendi enim magnam distinctio tempore, velit similique optio, minima dicta, fuga accusantium repellendus iste fugit delectus nam maiores suscipit. Autem laboriosam nemo officia fugiat vitae obcaecati nulla cumque officiis, architecto fuga, culpa maiores, rem minima pariatur repellat inventore consequuntur quaerat praesentium distinctio delectus quibusdam aspernatur! Libero, voluptatibus? Dolor, eos repellendus placeat deserunt ipsam ipsum accusantium ea fugit a eligendi. Consequuntur quidem tenetur accusamus aut commodi iste eos quae accusantium, eaque nostrum ipsa illum dolorum cumque veniam quaerat? Enim non quo architecto recusandae a eaque earum dicta quae dolorem veniam saepe illo fugit qui nam ab reiciendis voluptatem voluptates, accusantium harum ut. Deleniti laborum reprehenderit dolor commodi quidem itaque rerum repudiandae nobis odit deserunt ea, blanditiis voluptate error consectetur labore mollitia provident. Reiciendis ipsa explicabo eius velit quisquam officiis, est distinctio vitae a corporis. Quaerat veritatis voluptatum commodi repudiandae perspiciatis. Eum aut accusantium, molestiae cumque consequuntur sit corrupti rem quam minus quas nobis, voluptatibus porro perferendis nulla omnis! Dolorem, sapiente repellendus! Provident, facere sint vero adipisci expedita non qui saepe veritatis. Atque saepe aliquam quas eveniet sit dolorum iusto! Optio facere ut, eum quisquam nostrum rem odio officiis nisi fugit blanditiis itaque tenetur asperiores autem quam! Asperiores consequuntur vel id, aperiam ut, vero aliquid non deleniti consequatur dignissimos, fugit praesentium maxime odit ab suscipit iste? Placeat voluptatibus nam eum dolorum delectus, velit, itaque molestias non laboriosam voluptas, iusto temporibus fugiat ex cum unde! Cumque, aperiam! Aspernatur unde accusamus deserunt eius totam, veritatis eveniet at cumque esse quam nulla quaerat est soluta, ab reiciendis. Officia, quasi provident ipsam saepe aspernatur facilis. Eaque nostrum, odio recusandae quisquam ipsa ratione fugiat ab vel voluptates incidunt voluptatum alias, cupiditate ex, placeat explicabo culpa molestiae consequatur eveniet cumque adipisci blanditiis! Deleniti fugiat earum assumenda expedita. Quas blanditiis pariatur asperiores facilis aperiam reprehenderit, explicabo quae totam, omnis accusantium quos? Deserunt atque asperiores necessitatibus laboriosam officiis, error iure dolores saepe pariatur ea placeat a suscipit harum molestiae labore autem temporibus hic velit amet similique ratione minus odio? Tenetur, libero suscipit. Voluptate corporis, accusamus repellendus officia doloribus cumque qui modi aliquam eius? Expedita perferendis ut fugit error, odio molestias fuga deleniti illo hic nam similique atque ab cumque eligendi! Labore rerum, ipsum quae hic omnis aliquam commodi quis sequi eius non! Corrupti aut harum culpa ipsum sed dignissimos, quo temporibus fugit omnis incidunt in repellat tenetur cupiditate, vitae et autem at. Facere, repudiandae explicabo. ",-1)),Re=b({__name:"developerApproach",setup(e){return(i,d)=>(s(),n("section",Le,[t("div",Fe,[a(j,null,{h2:u(()=>[p(" Офис ")]),p:u(()=>[p(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam labore, minima nisi est sequi aperiam doloribus culpa enim dignissimos ipsam vero non! Odio consequatur sapiente, omnis ullamconsectetur minima. ")]),_:1}),He])]))}});const ze=l(Re,[["__scopeId","data-v-4dbcd332"]]),Ge={name:"FirstPage",components:{firstScreen:P,noCode:we,freelancerApproach:je,developerApproach:ze},data(){return{headerHeight:64,calcutaedHeightCrutch:0,elem:document.body}},mounted(){this.elem=document.querySelector(".main"),this.calcutaedHeightCrutch=document.querySelector(".crutch").clientHeight/2,this.elem.classList.add("scrolled"),document.addEventListener("scroll",()=>{window.scrollY===0&&(document.styleSheets[0].insertRule("body::-webkit-scrollbar { width: 1px } ",0),document.styleSheets[0].insertRule("html { scrollBar-width: none } ",0),this.elem.classList.remove("scrolled"))}),this.$nextTick(()=>{window.scrollY===0&&(document.styleSheets[0].insertRule("body::-webkit-scrollbar { width: 1px } ",0),document.styleSheets[0].insertRule("html { scrollBar-width: none } ",0),this.elem.classList.remove("scrolled"))})},unmounted(){document.body.removeAttribute("style");for(let e of["scroll"])window.addEventListener(e,function(i){i.stopImmediatePropagation()},!0)},methods:{ScrollToDeveloper(e){e.target.scrollHeight-e.target.scrollTop-e.target.offsetHeight<=this.calcutaedHeightCrutch&&(this.elem.classList.add("scrolled"),this.elem.scrollBy(0,this.calcutaedHeightCrutch*-1),document.styleSheets[0].deleteRule(0),document.styleSheets[0].deleteRule(0),document.styleSheets[0].deleteRule(0))}}};const T=e=>(x("data-v-7455befe"),e=e(),y(),e),Oe={class:"container"},Ve=T(()=>t("div",{class:"crutch"},null,-1)),Qe=T(()=>t("div",{class:"crutch2"},null,-1));function Me(e,i,d,c,$,_){const m=P,f=r("noCode"),C=r("freelancerApproach"),I=r("developerApproach");return s(),n(S,null,[t("main",{class:"main",onScroll:i[0]||(i[0]=(...w)=>_.ScrollToDeveloper&&_.ScrollToDeveloper(...w))},[t("div",Oe,[a(m),a(f),a(C),Ve])],32),Qe,a(I,{id:"developerApproach"})],64)}const Je=l(Ge,[["render",Me],["__scopeId","data-v-7455befe"]]),Ye={};function Ue(e,i){const d=Je;return s(),A(d)}const it=l(Ye,[["render",Ue]]);export{it as default};
