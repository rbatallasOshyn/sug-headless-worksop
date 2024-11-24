"use strict";(()=>{var e={};e.id=538,e.ids=[538,888,660],e.modules={210:(e,t,s)=>{s.r(t),s.d(t,{config:()=>eD,default:()=>eC,getServerSideProps:()=>eT,getStaticPaths:()=>e_,getStaticProps:()=>eN,reportWebVitals:()=>eP,routeModule:()=>ek,unstable_getServerProps:()=>ew,unstable_getServerSideProps:()=>eb,unstable_getStaticParams:()=>eL,unstable_getStaticPaths:()=>eI,unstable_getStaticProps:()=>eE});var a={};s.r(a),s.d(a,{Default:()=>Default});var i={};s.r(i),s.d(i,{Default:()=>Container_Default});var r={};s.r(r),s.d(r,{default:()=>z});var n={};s.r(n),s.d(n,{Banner:()=>Banner,Default:()=>Image_Default});var l={};s.r(l),s.d(l,{Default:()=>LinkList_Default});var o={};s.r(o),s.d(o,{Default:()=>Navigation_Default});var c={};s.r(c),s.d(c,{Default:()=>PageContent_Default});var d={};s.r(d),s.d(d,{default:()=>components_PartialDesignDynamicPlaceholder});var m={};s.r(m),s.d(m,{Default:()=>Promo_Default,WithText:()=>WithText});var p={};s.r(p),s.d(p,{Default:()=>RichText_Default});var u={};s.r(u),s.d(u,{Default:()=>RowSplitter_Default});var h={};s.r(h),s.d(h,{Default:()=>Title_Default});var x={};s.r(x),s.d(x,{default:()=>SUGComponents_Footer});var g={};s.r(g),s.d(g,{default:()=>SUGComponents_MenuNavigation});var f={};s.r(f),s.d(f,{default:()=>SUGComponents_Header});var v={};s.r(v),s.d(v,{default:()=>SUGComponents_OneColumn});var j={};s.r(j),s.d(j,{default:()=>SUGComponents_ShortTwoColumns});var S={};s.r(S),s.d(S,{default:()=>SUGComponents_TwoColumns});var y={};s.r(y),s.d(y,{default:()=>ContactUsComponents_ContactUs});var C={};s.r(C),s.d(C,{default:()=>DoctorComponents_DoctorDetails});var N={};s.r(N),s.d(N,{default:()=>DoctorComponents_DoctorsList,fetchDoctorList:()=>fetchDoctorList});var _={};s.r(_),s.d(_,{default:()=>DoctorComponents_SpecialtyList,fetchSpecialtyList:()=>fetchSpecialtyList});var T={};s.r(T),s.d(T,{default:()=>HomeComponentes_HeroBanner});var D={};s.r(D),s.d(D,{default:()=>HomeComponentes_PageBodyText});var P={};s.r(P),s.d(P,{default:()=>HomeComponentes_SearchBox});var E={};s.r(E);var I={};s.r(I),s.d(I,{defaultPlugin:()=>ex});var L={};s.r(L),s.d(L,{componentPropsPlugin:()=>ei,contentStylesPlugin:()=>er,normalModePlugin:()=>em,previewModePlugin:()=>eu,sitePlugin:()=>ev});var w={};s.r(w),s.d(w,{graphqlSitemapServicePlugin:()=>eS});var b={};s.r(b),s.d(b,{default:()=>_path_,getStaticPaths:()=>getStaticPaths,getStaticProps:()=>getStaticProps});var k=s(7299),R=s(5631),$=s(214),A=s(8165),F=s.n(A),H=s(966),G=s(997),U=s(6689),M=s(9004),q=s.n(M);let src_NotFound=()=>(0,G.jsxs)(G.Fragment,{children:[G.jsx(q(),{children:G.jsx("title",{children:"404: NotFound"})}),(0,G.jsxs)("div",{style:{padding:10},children:[G.jsx("h1",{children:"Page not found"}),G.jsx("p",{children:"This page does not exist."}),G.jsx("a",{href:"/",children:"Go to the Home page"})]})]});var B=s(5216),O=s.n(B);let Q=require("@sitecore-jss/sitecore-jss-nextjs");var W=s(7512),V=s.n(W);let src_Scripts=()=>null,K=V().publicUrl,src_Layout=({layoutData:e,headLinks:t})=>{let{route:s}=e.sitecore,a=s?.fields,i=e.sitecore.context.pageEditing;return(0,G.jsxs)(G.Fragment,{children:[G.jsx(src_Scripts,{}),(0,G.jsxs)(q(),{children:[G.jsx("title",{children:a?.Title?.value?.toString()||"Page"}),G.jsx("link",{rel:"icon",href:`${K}/favicon.ico`}),t.map(e=>G.jsx("link",{rel:e.rel,href:e.href},e.href)),G.jsx("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),G.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),G.jsx("meta",{name:"referrer",content:"always"})]}),(0,G.jsxs)("div",{className:`${O().className} ${i?"editing-mode":"prod-mode"}`,children:[G.jsx("header",{children:s&&G.jsx(Q.Placeholder,{name:"headless-header",rendering:s})}),s&&G.jsx(Q.Placeholder,{name:"headless-banner",rendering:s}),G.jsx("section",{id:"main",children:G.jsx("div",{className:"g-w",children:G.jsx("div",{className:"g-p",children:s&&G.jsx(Q.Placeholder,{name:"headless-main",rendering:s})})})}),G.jsx("footer",{children:s&&G.jsx(Q.Placeholder,{name:"headless-footer",rendering:s})})]})]})},J=require("@sitecore-jss/sitecore-jss-nextjs/utils"),Default=e=>{let t=`${e.params.GridParameters??""} ${e.params.Styles??""}`.trimEnd(),s=[e.params.ColumnWidth1,e.params.ColumnWidth2,e.params.ColumnWidth3,e.params.ColumnWidth4,e.params.ColumnWidth5,e.params.ColumnWidth6,e.params.ColumnWidth7,e.params.ColumnWidth8],a=[e.params.Styles1,e.params.Styles2,e.params.Styles3,e.params.Styles4,e.params.Styles5,e.params.Styles6,e.params.Styles7,e.params.Styles8],i=e.params.EnabledPlaceholders.split(","),r=e.params.RenderingIdentifier;return G.jsx("div",{className:`row component column-splitter ${t}`,id:r||void 0,children:i.map((t,i)=>{let r=`column-${t}-{*}`,n=`${s[+t-1]} ${a[+t-1]??""}`.trimEnd();return G.jsx("div",{className:n,children:G.jsx("div",{className:"row",children:G.jsx(Q.Placeholder,{name:r,rendering:e.rendering},i)},i)},i)})})},X=new RegExp(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi),DefaultContainer=e=>{let{sitecoreContext:t}=(0,Q.useSitecoreContext)(),s=e.params&&e.params.Styles?e.params.Styles:"",a=`${e.params.GridParameters} ${s}`.trimEnd(),i=`container-${e.params.DynamicPlaceholderId}`,r=e.params.RenderingIdentifier,n=e.params.BackgroundImage,l={};if(n){let e=`${"normal"!==t.pageState?"/sitecore/shell":""}/-/media/`;n=`${n?.match(X)?.pop()?.replace(/-/gi,"")}`,l={backgroundImage:`url('${e}${n}')`}}return G.jsx("div",{className:`component container-default ${a}`,id:r||void 0,children:G.jsx("div",{className:"component-content",style:l,children:G.jsx("div",{className:"row",children:G.jsx(Q.Placeholder,{name:i,rendering:e.rendering})})})})},Container_Default=e=>{let t=e.params?.Styles?.split(" ");return t&&t.includes("container")?G.jsx("div",{className:"container-wrapper",children:G.jsx(DefaultContainer,{...e})}):G.jsx(DefaultContainer,{...e})},z=(0,Q.withDatasourceCheck)()(({fields:e})=>(0,G.jsxs)("div",{className:"contentBlock",children:[G.jsx(Q.Text,{tag:"h2",className:"contentTitle",field:e.heading}),G.jsx(Q.RichText,{className:"contentDescription",field:e.content})]})),ImageDefault=e=>G.jsx("div",{className:`component image ${e.params.styles}`.trimEnd(),children:G.jsx("div",{className:"component-content",children:G.jsx("span",{className:"is-empty-hint",children:"Image"})})}),Banner=e=>{let{sitecoreContext:t}=(0,Q.useSitecoreContext)(),s=t.pageEditing,a=s&&e.fields?.Image?.value?.class==="scEmptyImage"?"hero-banner-empty":"",i={backgroundImage:`url('${e?.fields?.Image?.value?.src}')`},r={...e.fields.Image,editable:e?.fields?.Image?.editable?.replace(`width="${e?.fields?.Image?.value?.width}"`,'width="100%"').replace(`height="${e?.fields?.Image?.value?.height}"`,'height="100%"')},n=e.params.RenderingIdentifier;return G.jsx("div",{className:`component hero-banner ${e.params.styles} ${a}`,id:n||void 0,children:G.jsx("div",{className:"component-content sc-sxa-image-hero-banner",style:i,children:t.pageEditing?G.jsx(Q.Image,{field:r}):""})})},Image_Default=e=>{let{sitecoreContext:t}=(0,Q.useSitecoreContext)();if(e.fields){let Image=()=>G.jsx(Q.Image,{field:e.fields.Image}),s=e.params.RenderingIdentifier;return G.jsx("div",{className:`component image ${e.params.styles}`,id:s||void 0,children:(0,G.jsxs)("div",{className:"component-content",children:["edit"!==t.pageState&&e.fields.TargetUrl?.value?.href?G.jsx(Q.Link,{field:e.fields.TargetUrl,children:G.jsx(Image,{})}):G.jsx(Image,{}),G.jsx(Q.Text,{tag:"span",className:"image-caption field-imagecaption",field:e.fields.ImageCaption})]})})}return G.jsx(ImageDefault,{...e})},LinkListItem=e=>{let t=`item${e.index}`;return t+=(e.index+1)%2==0?" even":" odd",0==e.index&&(t+=" first"),e.index+1==e.total&&(t+=" last"),G.jsx("li",{className:t,children:G.jsx("div",{className:"field-link",children:G.jsx(Q.Link,{field:e.field})})})},LinkList_Default=e=>{let t=e.fields?.data?.datasource,s=`component link-list ${e.params.styles}`.trimEnd(),a=e.params.RenderingIdentifier;if(t){let e=t.children.results.filter(e=>e?.field?.link).map((e,s)=>G.jsx(LinkListItem,{index:s,total:t.children.results.length,field:e.field.link},`${s}${e.field.link}`));return G.jsx("div",{className:s,id:a||void 0,children:(0,G.jsxs)("div",{className:"component-content",children:[G.jsx(Q.Text,{tag:"h3",field:t?.field?.title}),G.jsx("ul",{children:e})]})})}return G.jsx("div",{className:s,id:a||void 0,children:G.jsx("div",{className:"component-content",children:G.jsx("h3",{children:"Link List"})})})},getLinkField=e=>({value:{href:e.fields.Href,title:getLinkTitle(e),querystring:e.fields.Querystring}}),Navigation_Default=e=>{let[t,s]=(0,U.useState)(!1),{sitecoreContext:a}=(0,Q.useSitecoreContext)(),i=null!=e.params?`${e.params.GridParameters??""} ${e.params.Styles??""}`.trimEnd():"",r=null!=e.params?e.params.RenderingIdentifier:null;if(!Object.values(e.fields).length)return G.jsx("div",{className:`component navigation ${i}`,id:r||void 0,children:G.jsx("div",{className:"component-content",children:"[Navigation]"})});let handleToggleMenu=(e,i)=>{if(e&&a?.pageEditing&&e.preventDefault(),void 0!==i)return s(i);s(!t)},n=Object.values(e.fields).filter(e=>e).map((e,t)=>G.jsx(NavigationList,{fields:e,handleClick:e=>handleToggleMenu(e,!1),relativeLevel:1},`${t}${e.Id}`));return G.jsx("div",{className:`component navigation ${i}`,id:r||void 0,children:(0,G.jsxs)("label",{className:"menu-mobile-navigate-wrapper",children:[G.jsx("input",{type:"checkbox",className:"menu-mobile-navigate",checked:t,onChange:()=>handleToggleMenu()}),G.jsx("div",{className:"menu-humburger"}),G.jsx("div",{className:"component-content",children:G.jsx("nav",{children:G.jsx("ul",{className:"clearfix",children:n})})})]})})},NavigationList=e=>{let{sitecoreContext:t}=(0,Q.useSitecoreContext)(),[s,a]=(0,U.useState)(!1),i=`${e.fields.Styles.concat("rel-level"+e.relativeLevel).join(" ")}`,r=[];return e.fields.Children&&e.fields.Children.length&&(r=e.fields.Children.map((t,s)=>G.jsx(NavigationList,{fields:t,handleClick:e.handleClick,relativeLevel:e.relativeLevel+1},`${s}${t.Id}`))),(0,G.jsxs)("li",{className:`${i} ${s?"active":""}`,tabIndex:0,children:[G.jsx("div",{className:`navigation-title ${r.length?"child":""}`,onClick:()=>a(()=>!s),children:G.jsx(Q.Link,{field:getLinkField(e),editable:t.pageEditing,onClick:e.handleClick,children:function(e){return e.fields.NavigationTitle?G.jsx(Q.Text,{field:e.fields.NavigationTitle}):e.fields.Title?G.jsx(Q.Text,{field:e.fields.Title}):e.fields.DisplayName}(e)})}),r.length>0?G.jsx("ul",{className:"clearfix",children:r}):null]},e.fields.Id)},getLinkTitle=e=>e.fields.NavigationTitle?.value?e.fields.NavigationTitle.value.toString():e.fields.Title?.value?e.fields.Title.value.toString():e.fields.DisplayName,ComponentContent=e=>{let t=e.id;return G.jsx("div",{className:`component content ${e.styles}`,id:t||void 0,children:G.jsx("div",{className:"component-content",children:G.jsx("div",{className:"field-content",children:e.children})})})},PageContent_Default=e=>{let{sitecoreContext:t}=(0,Q.useSitecoreContext)(),s=e.params.RenderingIdentifier;if(!(e.fields&&e.fields.Content)&&!t?.route?.fields?.Content)return G.jsx("div",{className:`component content ${e.params.styles}`,id:s||void 0,children:G.jsx("div",{className:"component-content",children:G.jsx("div",{className:"field-content",children:"[Content]"})})});let a=e.fields&&e.fields.Content?e.fields.Content:t?.route?.fields?.Content;return G.jsx(ComponentContent,{styles:e.params.styles,id:s,children:G.jsx(Q.RichText,{field:a})})},components_PartialDesignDynamicPlaceholder=e=>G.jsx(Q.Placeholder,{name:e.rendering?.params?.sig||"",rendering:e.rendering}),PromoDefaultComponent=e=>G.jsx("div",{className:`component promo ${e.params.styles}`,children:G.jsx("div",{className:"component-content",children:G.jsx("span",{className:"is-empty-hint",children:"Promo"})})}),Promo_Default=e=>{let t=e.params.RenderingIdentifier;return e.fields?G.jsx("div",{className:`component promo ${e.params.styles}`,id:t||void 0,children:(0,G.jsxs)("div",{className:"component-content",children:[G.jsx("div",{className:"field-promoicon",children:G.jsx(Q.Image,{field:e.fields.PromoIcon})}),(0,G.jsxs)("div",{className:"promo-text",children:[G.jsx("div",{children:G.jsx("div",{className:"field-promotext",children:G.jsx(Q.RichText,{field:e.fields.PromoText})})}),G.jsx("div",{className:"field-promolink",children:G.jsx(Q.Link,{field:e.fields.PromoLink})})]})]})}):G.jsx(PromoDefaultComponent,{...e})},WithText=e=>{let t=e.params.RenderingIdentifier;return e.fields?G.jsx("div",{className:`component promo ${e.params.styles}`,id:t||void 0,children:(0,G.jsxs)("div",{className:"component-content",children:[G.jsx("div",{className:"field-promoicon",children:G.jsx(Q.Image,{field:e.fields.PromoIcon})}),(0,G.jsxs)("div",{className:"promo-text",children:[G.jsx("div",{children:G.jsx("div",{className:"field-promotext",children:G.jsx(Q.RichText,{className:"promo-text",field:e.fields.PromoText})})}),G.jsx("div",{className:"field-promotext",children:G.jsx(Q.RichText,{className:"promo-text",field:e.fields.PromoText2})})]})]})}):G.jsx(PromoDefaultComponent,{...e})},RichText_Default=e=>{let t=e.fields?G.jsx(Q.RichText,{field:e.fields.Text}):G.jsx("span",{className:"is-empty-hint",children:"Rich text"}),s=e.params.RenderingIdentifier;return G.jsx("div",{className:`component rich-text ${e.params.styles.trimEnd()}`,id:s||void 0,children:G.jsx("div",{className:"component-content",children:t})})},RowSplitter_Default=e=>{let t=`${e.params.GridParameters??""} ${e.params.Styles??""}`.trimEnd(),s=[e.params.Styles1,e.params.Styles2,e.params.Styles3,e.params.Styles4,e.params.Styles5,e.params.Styles6,e.params.Styles7,e.params.Styles8],a=e.params.EnabledPlaceholders.split(","),i=e.params.RenderingIdentifier;return G.jsx("div",{className:`component row-splitter ${t}`,id:i||void 0,children:a.map((t,a)=>{let i=`row-${t}-{*}`,r=`${s[+t-1]??""}`.trimEnd();return G.jsx("div",{className:`container-fluid ${r}`.trimEnd(),children:G.jsx("div",{children:G.jsx("div",{className:"row",children:G.jsx(Q.Placeholder,{name:i,rendering:e.rendering},a)},a)},a)},a)})})},Title_ComponentContent=e=>{let t=e.id;return G.jsx("div",{className:`component title ${e.styles}`,id:t||void 0,children:G.jsx("div",{className:"component-content",children:G.jsx("div",{className:"field-title",children:e.children})})})},Title_Default=e=>{let t=e.fields?.data?.datasource||e.fields?.data?.contextItem,{sitecoreContext:s}=(0,Q.useSitecoreContext)(),a={value:t?.field?.jsonValue?.value,editable:t?.field?.jsonValue?.editable},i={value:{href:t?.url?.path,title:t?.field?.jsonValue?.value,editable:!0}};return"normal"===s.pageState||(i.value.querystring=`sc_site=${t?.url?.siteName}`,a.value||(a.value="Title field",i.value.href="#")),G.jsx(Title_ComponentContent,{styles:e.params.styles,id:e.params.RenderingIdentifier,children:G.jsx(G.Fragment,{children:"edit"===s.pageState?G.jsx(Q.Text,{field:a}):G.jsx(Q.Link,{field:i,children:G.jsx(Q.Text,{field:a})})})})},SUGComponents_Footer=e=>G.jsx(Q.RichText,{field:e.fields.Content}),Y=require("graphql-request");var Z=s(2808),ee=s.n(Z);let fetchMenuItems=async e=>{let t=new Y.GraphQLClient(V().graphQLEndpoint);t.setHeader("sc_apikey",V().sitecoreApiKey);let s=`
    query {
      item(path: "/sitecore/content/SUGLATAM/Workshop/Workshop Site/Home", language: "${e}") {
        children(
          includeTemplateIDs: ["{A956FDF7-E918-4BEE-9952-53B4E5D14DC5}"]
        ) {
          results {
            ... on Item {
              name
              id
              url{
                path
              }
            }
          }
        }
      }
    }
  `,a=await t.request(s),i={MenuItems:[]};return a.item.children.results.map(e=>{let t={Url:e.url.path,Text:e.name};i.MenuItems.push(t)}),i},SUGComponents_MenuNavigation=()=>{let[e,t]=(0,U.useState)(null);(0,U.useEffect)(()=>{fetchMenuItems("en").then(e=>{t(e)})},[]);let s=e&&e.MenuItems.map((e,t)=>G.jsx("li",{children:G.jsx(ee(),{href:e.Url.toLowerCase(),target:"_self",children:e.Text})},t));return G.jsx("div",{className:"g-u-1 g-u-lg-3-5",id:"menu",children:G.jsx("nav",{children:G.jsx("ul",{children:s})})})},SUGComponents_Header=e=>e?.fields?G.jsx("div",{className:"g-w",children:G.jsx("div",{className:"g-p",children:(0,G.jsxs)("div",{className:"g-g",children:[(0,G.jsxs)("div",{className:"g-u-1 g-u-lg-2-5",children:[G.jsx(Q.Link,{field:e.fields.CTA,className:"logo",children:G.jsx(Q.Text,{field:e.fields.CTAText})}),G.jsx("span",{className:"menu btn",children:G.jsx(Q.Text,{field:e.fields.MenuButtonText})})]}),G.jsx(SUGComponents_MenuNavigation,{})]})})}):G.jsx("h1",{children:"Header Here"}),SUGComponents_OneColumn=()=>{let e=(0,Q.useSitecoreContext)(),t=e.sitecoreContext.route;return G.jsx(G.Fragment,{children:G.jsx("div",{className:"g-g",children:G.jsx("div",{className:"g-u-1 g-u-lg-1-2",children:t&&G.jsx(Q.Placeholder,{name:"col-1",rendering:t})})})})},SUGComponents_ShortTwoColumns=()=>{let e=(0,Q.useSitecoreContext)(),t=e.sitecoreContext.route;return G.jsx(G.Fragment,{children:(0,G.jsxs)("div",{className:"g-g",children:[G.jsx("div",{className:"g-u-1 g-u-lg-1-5",children:t&&G.jsx(Q.Placeholder,{name:"col-1",rendering:t})}),G.jsx("div",{className:"g-u-1 g-u-lg-4-5",children:t&&G.jsx(Q.Placeholder,{name:"col-2",rendering:t})})]})})},SUGComponents_TwoColumns=()=>{let e=(0,Q.useSitecoreContext)(),t=e.sitecoreContext.route;return G.jsx(G.Fragment,{children:(0,G.jsxs)("div",{className:"g-g",children:[G.jsx("div",{className:"g-u-1 g-u-lg-1-2",children:t&&G.jsx(Q.Placeholder,{name:"col-1",rendering:t})}),G.jsx("div",{className:"g-u-1 g-u-lg-1-2",children:t&&G.jsx(Q.Placeholder,{name:"col-2",rendering:t})})]})})},ContactUsComponents_ContactUs=e=>G.jsx(G.Fragment,{children:(0,G.jsxs)("div",{className:"box form",children:[G.jsx("h2",{children:G.jsx(Q.Text,{field:e.fields.Title})}),(0,G.jsxs)("div",{id:"p_lt_ctl01_pP_p_lt_ctl00_BizForm_viewBiz",children:[(0,G.jsxs)("div",{className:"form",children:[G.jsx("label",{children:G.jsx(Q.Text,{field:e.fields.Name})}),G.jsx("input",{type:"text",className:"form-control"}),G.jsx("label",{children:G.jsx(Q.Text,{field:e.fields.Email})}),G.jsx("input",{type:"text",className:"form-control"}),G.jsx("label",{children:G.jsx(Q.Text,{field:e.fields.Message})}),G.jsx("textarea",{rows:2,cols:20,className:"form-control"})]}),G.jsx("input",{type:"submit",value:e.fields.CTAText.value,className:"FormButton btn btn-primary"})]})]})}),DoctorComponents_DoctorDetails=()=>{let e=(0,Q.useSitecoreContext)(),t=e.sitecoreContext.route?.fields,s=t.Content,a=t.Name,i=t.CTA,r=t.CTAText,n=t.Specialty,l=t.Photo;return G.jsx(G.Fragment,{children:(0,G.jsxs)("div",{className:"g-g",children:[G.jsx("div",{className:"g-u-1-5",children:G.jsx(Q.NextImage,{field:l})}),(0,G.jsxs)("div",{className:"g-u-4-5",children:[G.jsx("h1",{className:"doctor-name",children:G.jsx(Q.Text,{field:a})}),G.jsx("span",{className:"doctor-position",children:G.jsx(Q.Text,{field:n})}),G.jsx(Q.RichText,{field:s}),G.jsx(Q.Link,{field:i,className:"btn red bold big",children:G.jsx(Q.Text,{field:r})})]})]})})},fetchDoctorList=async e=>{let t=new Y.GraphQLClient(V().graphQLEndpoint);t.setHeader("sc_apikey",V().sitecoreApiKey);let s=`
        query {
        item(path: "/sitecore/content/SUGLATAM/Workshop/Workshop Site/Home/Doctors", language: "${e}") {
            children(
            includeTemplateIDs: ["{894EE557-6053-44E6-8630-14A46D760FE6}"]
            ) {
            results {
                ... on Item {
                name
                id
                url{
                    path
                }
                fields{
                    name
                    value
                    jsonValue                
                  }
                }
            }
            }
        }
        }
    `,a=await t.request(s),i={Doctors:[]};return a.item.children.results.map(e=>{let t={Url:e.url.path,Text:e.name,Fields:[]};e.fields.map(e=>{let s={Name:e.name,Value:e.value,JsonValue:e.jsonValue};t.Fields.push(s)}),i.Doctors.push(t)}),i},DoctorComponents_DoctorsList=()=>{let[e,t]=(0,U.useState)(null),s=(0,Q.useSitecoreContext)(),a=s.sitecoreContext.route?.fields;(0,U.useEffect)(()=>{fetchDoctorList("en").then(e=>{t(e)})},[]);let i=e&&e.Doctors.map((e,t)=>{let s=e.Fields[1],a=s.JsonValue,i=e.Fields[2],r=i.JsonValue,n=e.Fields[0],l=n.JsonValue;return G.jsx("li",{children:(0,G.jsxs)("div",{className:"g-g",children:[G.jsx("div",{className:"g-u-1-6",children:G.jsx(Q.NextImage,{field:a})}),(0,G.jsxs)("div",{className:"g-u-5-6",children:[G.jsx(ee(),{href:e.Url.toLocaleLowerCase(),target:"_self",children:G.jsx(Q.Text,{field:l})}),G.jsx("p",{children:G.jsx(Q.Text,{field:r})})]})]})},t)});return(0,G.jsxs)(G.Fragment,{children:[G.jsx("h1",{children:G.jsx(Q.Text,{field:a.Title})}),G.jsx("ul",{className:"doctors",children:i})]})},fetchSpecialtyList=async e=>{let t=new Y.GraphQLClient(V().graphQLEndpoint);t.setHeader("sc_apikey",V().sitecoreApiKey);let s=`
        query {
        item(path: "/sitecore/content/SUGLATAM/Workshop/Workshop Site/Home/Medical Centers", language: "${e}") {
            children(
            includeTemplateIDs: ["{A956FDF7-E918-4BEE-9952-53B4E5D14DC5}"]
            ) {
            results {
                ... on Item {
                name
                id
                url{
                    path
                }
             }
            }
            }
        }
        }
    `,a=await t.request(s),i={MenuItems:[]};return a.item.children.results.map(e=>{let t={Url:e.url.path,Text:e.name};i.MenuItems.push(t)}),i},DoctorComponents_SpecialtyList=()=>{let[e,t]=(0,U.useState)(null);(0,U.useEffect)(()=>{fetchSpecialtyList("en").then(e=>{t(e)})},[]);let s=e&&e.MenuItems.map((e,t)=>G.jsx("li",{children:G.jsx(ee(),{href:e.Url.toLowerCase(),target:"_self",children:e.Text})},t));return G.jsx("div",{className:"treeMenu",children:G.jsx("ul",{children:s})})},HomeComponentes_HeroBanner=e=>G.jsx(G.Fragment,{children:G.jsx("section",{id:"banner",style:{backgroundImage:`url(${e.fields.Image.value?.src})`},children:G.jsx("div",{className:"g-w",children:G.jsx("div",{className:"g-p",children:G.jsx("div",{className:"g-g",children:(0,G.jsxs)("div",{className:"g-u-1 g-u-lg-1-2",children:[G.jsx("h1",{children:e.fields.Title.value}),G.jsx("p",{children:e.fields.Description.value}),G.jsx(Q.Link,{field:e.fields.CTA,className:"btn red bold big",children:G.jsx(Q.Text,{field:e.fields.CTAText})})]})})})})})}),HomeComponentes_PageBodyText=()=>{let e=(0,Q.useSitecoreContext)(),t=e.sitecoreContext.route?.fields,s=t.Content;return G.jsx(Q.RichText,{field:s})},HomeComponentes_SearchBox=e=>G.jsx(G.Fragment,{children:(0,G.jsxs)("div",{className:"box form",children:[G.jsx("h2",{children:G.jsx(Q.Text,{field:e.fields.Title})}),(0,G.jsxs)("div",{className:"form",children:[G.jsx("label",{children:G.jsx(Q.Text,{field:e.fields.Label})}),G.jsx("input",{type:"text"}),G.jsx("input",{type:"submit",value:"Submit",className:"btn btn-primary btn-default"})]})]})}),et=new Map;et.set("ColumnSplitter",a),et.set("Container",i),et.set("ContentBlock",r),et.set("Image",n),et.set("LinkList",l),et.set("Navigation",o),et.set("PageContent",c),et.set("PartialDesignDynamicPlaceholder",d),et.set("Promo",m),et.set("RichText",p),et.set("RowSplitter",u),et.set("Title",h),et.set("Footer",x),et.set("Header",f),et.set("MenuNavigation",g),et.set("OneColumn",v),et.set("ShortTwoColumns",j),et.set("TwoColumns",S),et.set("ContactUs",y),et.set("DoctorDetails",C),et.set("DoctorsList",N),et.set("SpecialtyList",_),et.set("HeroBanner",T),et.set("PageBodyText",D),et.set("SearchBox",P);let es=new Q.ComponentBuilder({components:et}),ea=es.getModuleFactory(),ei=new class{constructor(){this.order=2,this.componentPropsService=new Q.ComponentPropsService}async exec(e,t){if(!e.layoutData.sitecore.route)return e;isServerSidePropsContext(t)?e.componentProps=await this.componentPropsService.fetchServerSideComponentProps({layoutData:e.layoutData,context:t,moduleFactory:ea}):e.componentProps=await this.componentPropsService.fetchStaticComponentProps({layoutData:e.layoutData,context:t,moduleFactory:ea});let s=Object.keys(e.componentProps).map(t=>{let s=e.componentProps[t];return s.error?`
Unable to get component props for ${s.componentName} (${t}): ${s.error}`:""}).join("");if(s.length)throw Error(s);return e}},er=new class{async exec(e){let t=(0,Q.getContentStylesheetLink)(e.layoutData);return t&&e.headLinks.push(t),e}constructor(){this.order=2}},en=require("@sitecore-jss/sitecore-jss-nextjs/graphql"),el=(e=>{let t;if(e.graphQLEndpoint&&e.sitecoreApiKey)t={endpoint:e.graphQLEndpoint,apiKey:e.sitecoreApiKey};else throw Error("Please configure your graphQLEndpoint and sitecoreApiKey.");return en.GraphQLRequestClient.createClientFactory(t)})(V()),eo=new class{create(e){return process.env.FETCH_WITH===Q.constants.FETCH_WITH.GRAPHQL?new Q.GraphQLDictionaryService({siteName:e,clientFactory:el,jssAppTemplateId:"{A398868D-3570-4CAD-8F3D-A8B55B814014}",rootItemId:"{B1C2C658-E948-4333-9E55-DAA3110B74AE}",retries:process.env.GRAPH_QL_SERVICE_RETRIES&&parseInt(process.env.GRAPH_QL_SERVICE_RETRIES,10)||0}):new Q.RestDictionaryService({apiHost:V().sitecoreApiHost,apiKey:V().sitecoreApiKey,siteName:e})}},ec=new class{create(e){return process.env.FETCH_WITH===Q.constants.FETCH_WITH.GRAPHQL?new Q.GraphQLLayoutService({siteName:e,clientFactory:el,retries:process.env.GRAPH_QL_SERVICE_RETRIES&&parseInt(process.env.GRAPH_QL_SERVICE_RETRIES,10)||0}):new Q.RestLayoutService({apiHost:V().sitecoreApiHost,apiKey:V().sitecoreApiKey,siteName:e,configurationName:V().layoutServiceConfigurationName})}},ed=new class{extract(e){if(void 0===e)return"/";let t=Array.isArray(e.path)?e.path.join("/"):e.path??"/";t.startsWith("/")||(t="/"+t);let s=Object.values(E).reduce((e,t)=>t.exec(e),t);return s}},em=new class{constructor(){this.order=1,this.dictionaryServices=new Map,this.layoutServices=new Map}async exec(e,t){if(t.preview)return e;let s=ed.extract(t.params);e.locale=t.locale??e.site.language;let a=this.getLayoutService(e.site.name);if(e.layoutData=await a.fetchLayoutData(s,e.locale,isServerSidePropsContext(t)?t.req:void 0,isServerSidePropsContext(t)?t.res:void 0),e.layoutData.sitecore.route||(e.notFound=!0),!e.notFound){let t=this.getDictionaryService(e.site.name);e.dictionary=await t.fetchDictionaryData(e.locale)}return e.headLinks=[],e}getDictionaryService(e){if(this.dictionaryServices.has(e))return this.dictionaryServices.get(e);let t=eo.create(e);return this.dictionaryServices.set(e,t),t}getLayoutService(e){if(this.layoutServices.has(e))return this.layoutServices.get(e);let t=ec.create(e);return this.layoutServices.set(e,t),t}},ep=require("@sitecore-jss/sitecore-jss-nextjs/editing"),eu=new class{async exec(e,t){if(!t.preview)return e;let s=await ep.editingDataService.getEditingData(t.previewData);if(!s)throw Error(`Unable to get editing data for preview ${JSON.stringify(t.previewData)}`);return e.site=s.layoutData.sitecore.context.site,e.locale=s.language,e.layoutData=s.layoutData,e.dictionary=s.dictionary,e.headLinks=[],e}constructor(){this.order=1}},eh=require("@sitecore-jss/sitecore-jss-nextjs/site"),ex=new class{exec(e){return e.unshift({name:V().sitecoreSiteName,language:V().defaultLanguage,hostName:"*"}),e}},eg=Object.values(I).reduce((e,t)=>t.exec(e),[]),ef=new eh.SiteResolver(eg),ev=new class{async exec(e,t){return t.preview||(e.site=ef.getByName(V().sitecoreSiteName)),e}constructor(){this.order=0}},isServerSidePropsContext=function(e){return void 0!==e.req},ej=new class{async create(e){let t=Date.now();Q.debug.common("page-props-factory start");let s=await Object.values(L).sort((e,t)=>e.order-t.order).reduce(async(t,s)=>{let a=await t,i=await s.exec(a,e);return i},Promise.resolve({}));return Q.debug.common("page-props-factory end in %dms",Date.now()-t),s}},eS=new class{constructor(){this._graphqlSitemapService=new Q.GraphQLSitemapService({siteName:V().sitecoreSiteName,clientFactory:el})}async exec(e){return process.env.JSS_MODE===Q.constants.JSS_MODE.DISCONNECTED?[]:process.env.EXPORT_MODE?this._graphqlSitemapService.fetchExportSitemap(V().defaultLanguage):this._graphqlSitemapService.fetchSSGSitemap(e?.locales||[])}},ey=new class{async fetch(e){let t=Object.values(w),s=await Promise.all(t.map(t=>t.exec(e))),a=s.reduce((e,t)=>[...e,...t],[]);return a}},getStaticPaths=async e=>{let t=[],s="blocking";if(!process.env.DISABLE_SSG_FETCH){try{t=await ey.fetch(e)}catch(e){console.log("Error occurred while fetching static paths"),console.log(e)}s=!process.env.EXPORT_MODE&&s}return{paths:t,fallback:s}},getStaticProps=async e=>{let t=await ej.create(e);return{props:t,revalidate:5,notFound:t.notFound}},_path_=({notFound:e,componentProps:t,layoutData:s,headLinks:a})=>{if((0,U.useEffect)(()=>{(0,J.handleEditorFastRefresh)()},[]),e||!s.sitecore.route)return G.jsx(src_NotFound,{});let i=s.sitecore.context.pageEditing,r=s.sitecore.context.renderingType===Q.RenderingType.Component;return G.jsx(Q.ComponentPropsContext,{value:t,children:G.jsx(Q.SitecoreContext,{componentFactory:es.getComponentFactory({isEditing:i}),layoutData:s,children:r?G.jsx(Q.EditingComponentPlaceholder,{rendering:s.sitecore.route}):G.jsx(src_Layout,{layoutData:s,headLinks:a})})})},eC=(0,$.l)(b,"default"),eN=(0,$.l)(b,"getStaticProps"),e_=(0,$.l)(b,"getStaticPaths"),eT=(0,$.l)(b,"getServerSideProps"),eD=(0,$.l)(b,"config"),eP=(0,$.l)(b,"reportWebVitals"),eE=(0,$.l)(b,"unstable_getStaticProps"),eI=(0,$.l)(b,"unstable_getStaticPaths"),eL=(0,$.l)(b,"unstable_getStaticParams"),ew=(0,$.l)(b,"unstable_getServerProps"),eb=(0,$.l)(b,"unstable_getServerSideProps"),ek=new k.PagesRouteModule({definition:{kind:R.x.PAGES,page:"/[[...path]]",pathname:"/[[...path]]",bundlePath:"",filename:""},components:{App:H.default,Document:F()},userland:b})},7512:e=>{let t={};t.sitecoreApiKey=process.env.SITECORE_API_KEY||"{1F320DE2-6517-4377-94E1-C4D5E66EC5EF}",t.sitecoreApiHost=process.env.SITECORE_API_HOST||"https://workshop.suglatam.com",t.sitecoreSiteName=process.env.SITECORE_SITE_NAME||"workshop-jss-app",t.graphQLEndpointPath=process.env.GRAPH_QL_ENDPOINT_PATH||"/sitecore/api/graph/edge",t.defaultLanguage=process.env.DEFAULT_LANGUAGE||"en",t.graphQLEndpoint=process.env.GRAPH_QL_ENDPOINT||"https://workshop.suglatam.com/sitecore/api/graph/edge",t.layoutServiceConfigurationName=process.env.LAYOUT_SERVICE_CONFIGURATION_NAME||"sxa-jss",t.publicUrl="https://willowy-blancmange-6fd800.netlify.app",e.exports=t},5989:e=>{e.exports=require("next-localization")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[472,292,246,966],()=>__webpack_exec__(210));module.exports=s})();