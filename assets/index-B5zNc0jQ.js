import{d as f,r,o,c as n,a as s,b,t as i,_ as u,e as C,f as k,g as B,w as j,F as a,h as l,u as m,i as _,j as w,v as y}from"./index-P4JqOINM.js";const S={class:"feeds_col"},I={class:"goods"},D={class:"goods_info"},G={class:"goods_name"},N={class:"goods_desc"},V=f({__name:"GoodsCard",props:{goods:{}},setup(v){return(e,t)=>{const c=r("van-image");return o(),n("div",S,[s("div",I,[b(c,{width:"100%",height:"100%",src:e.goods.picUrl},null,8,["src"]),s("div",D,[s("div",G,i(e.goods.name),1),s("div",N,[t[0]||(t[0]=s("div",null,"功效：",-1)),s("div",null,i(e.goods.desc),1)])])])])}}}),U=u(V,[["__scopeId","data-v-6ed6aad7"]]),E={class:"feeds_col"},R={class:"goods"},z={class:"mt-2"},A={class:"goods_info"},H={class:"goods_name"},J={class:"goods_desc"},K={class:"goods_desc"},M={class:"goods_desc"},O={style:{"white-space":"pre-wrap"}},P=f({__name:"SoupCard",props:{item:{}},setup(v){return(e,t)=>{const c=r("van-image");return o(),n("div",E,[s("div",R,[s("div",z,[b(c,{width:"100",height:"100",fit:"cover",radius:"8",src:e.item.picUrl},null,8,["src"])]),s("div",A,[s("div",H,i(e.item.name),1),s("div",J,[t[0]||(t[0]=s("div",null,"功效：",-1)),s("div",null,i(e.item.desc),1)]),s("div",K,[t[1]||(t[1]=s("div",null,"食材：",-1)),s("div",null,i(e.item.content),1)]),s("div",M,[t[2]||(t[2]=s("div",null,"步骤：",-1)),s("p",O,i(e.item.step),1)])])])])}}}),Q=u(P,[["__scopeId","data-v-b95c7787"]]),T={class:"goods-list"},W={class:"w-50"},X={class:"w-50"},Y={class:""},Z=f({__name:"index",setup(v){const e=C(0),t=k({tabList:["推荐","煲汤"],leftList:[{name:"新疆红枣",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/241645/34/22289/183526/6736b30dFd6b8ec03/7b4acf39c4f209c8.jpg!q70.webp",desc:"补气养血 红枣中含有大量的糖类物质，还含有与人参中类似的达玛烷型皂甙，具有增强人体耐力和抗疲劳的作用。 同时红枣中富大量的维生素、以及钙和铁，有补气养血之功效。"},{name:"宁夏枸杞王",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",desc:"枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用"},{name:"野山参长白山人参",picUrl:"https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",desc:"人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成"},{name:"宁夏枸杞王",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",desc:"枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用"},{name:"野山参长白山人参",picUrl:"https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",desc:"人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成"},{name:"宁夏枸杞王",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",desc:"枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用"}],rightList:[{name:"野山参长白山人参22",picUrl:"https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",desc:"人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成"},{name:"宁夏枸杞王",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",desc:"枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用"},{name:"野山参长白山人参",picUrl:"https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",desc:"人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成"},{name:"宁夏枸杞王",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",desc:"枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用"},{name:"野山参长白山人参",picUrl:"https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",desc:"人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成"},{name:"宁夏枸杞王",picUrl:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",desc:"枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用"}],soupList:[{name:"自制养生参芪汤---参芪猴头菇排骨汤",picUrl:"https://i3.meishichina.com/atta/recipe/2012/04/13/20120413131449848162820.jpg?x-oss-process=style/p800",desc:"黄芪有补气固表、止汗脱毒、生肌、利尿、退肿之功效。用于治疗气虚乏力，中气下陷，久泻脱肛，便血崩漏，表虚自汗，糖尿病等。",content:"排骨：350克、猴头菇：5-6朵、盐：适量、胡椒粉：少许、党参：5克、黄芪：3克、葱段：3段、姜片：4片、山楂片：5片",step:`1、小块的排骨用清水泡去血水。
2、配料准备好。
3、排骨凉水下锅加入绍酒和姜丝焯水。
4、焯水后洗净捞出。
5、猴头菇提前泡发洗净。
6、排骨放入汤锅煮开去掉浮沫，加入配料转小火慢慢煮一个半小时左右。
7、放入猴头菇煮开转小火接着煮40分钟左右。
8、加入盐和胡椒粉调味即可，喜欢香菜的可以撒点香菜。
9、这款【参芪猴头菇排骨汤】就做好了！`},{name:"自制养生参芪汤---参芪猴头菇排骨汤",picUrl:"https://i3.meishichina.com/atta/recipe/2012/04/13/20120413131449848162820.jpg?x-oss-process=style/p800",desc:"黄芪有补气固表、止汗脱毒、生肌、利尿、退肿之功效。用于治疗气虚乏力，中气下陷，久泻脱肛，便血崩漏，表虚自汗，糖尿病等。",content:"排骨：350克、猴头菇：5-6朵、盐：适量、胡椒粉：少许、党参：5克、黄芪：3克、葱段：3段、姜片：4片、山楂片：5片",step:`1、小块的排骨用清水泡去血水。
2、配料准备好。
3、排骨凉水下锅加入绍酒和姜丝焯水。
4、焯水后洗净捞出。
5、猴头菇提前泡发洗净。
6、排骨放入汤锅煮开去掉浮沫，加入配料转小火慢慢煮一个半小时左右。
7、放入猴头菇煮开转小火接着煮40分钟左右。
8、加入盐和胡椒粉调味即可，喜欢香菜的可以撒点香菜。
9、这款【参芪猴头菇排骨汤】就做好了！`}]}),{tabList:c,leftList:F,rightList:x,soupList:q}=B(t);return(ss,p)=>{const $=r("van-tab"),L=r("van-tabs");return o(),n(a,null,[p[1]||(p[1]=s("div",{class:"shop-name"},"阿鹏药材店",-1)),b(L,{active:e.value,"onUpdate:active":p[0]||(p[0]=g=>e.value=g),sticky:"",background:"#f5f5f5"},{default:j(()=>[(o(!0),n(a,null,l(m(c),(g,h)=>(o(),_($,{title:g},{default:j(()=>[w(s("div",T,[s("div",W,[(o(!0),n(a,null,l(m(F),d=>(o(),_(U,{goods:d},null,8,["goods"]))),256))]),s("div",X,[(o(!0),n(a,null,l(m(x),d=>(o(),_(U,{goods:d},null,8,["goods"]))),256))])],512),[[y,h==0]]),w(s("div",Y,[(o(!0),n(a,null,l(m(q),d=>(o(),_(Q,{item:d},null,8,["item"]))),256))],512),[[y,h==1]])]),_:2},1032,["title"]))),256))]),_:1},8,["active"])],64)}}}),ts=u(Z,[["__scopeId","data-v-a7b9823f"]]);export{ts as default};