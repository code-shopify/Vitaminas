!function(o){"use strict";var t=o("body"),a=!1,r=T4Sconfigs.round_currency,m=T4Sconfigs.hover_currency,n=T4Sconfigs.cartCurrency,e=T4Sconfigs.shopCurency,_=T4Sconfigs.moneyFormat,c="currency"+n.charAt(0)+n.slice(1).toLowerCase(),u="basecut4s",y=o(".t4s-close-overlay"),i=parseFloat(Shopify.currency.rate),f="is--selected",s="is--enabled",h={currentCurrency:T4SThemeSP.storageCurrency(),format:T4Sconfigs.currencyCodeEnabled?"money_with_currency_format":"money_format",cartCurrency:T4Sconfigs.cartCurrency,locationT4s:null},w={USD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} USD"},EUR:{money_format:"&euro;{{amount}}",money_with_currency_format:"&euro;{{amount}} EUR"},GBP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} GBP"},CAD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} CAD"},ALL:{money_format:"Lek {{amount}}",money_with_currency_format:"Lek {{amount}} ALL"},DZD:{money_format:"DA {{amount}}",money_with_currency_format:"DA {{amount}} DZD"},AOA:{money_format:"Kz{{amount}}",money_with_currency_format:"Kz{{amount}} AOA"},ARS:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} ARS"},AMD:{money_format:"{{amount}} AMD",money_with_currency_format:"{{amount}} AMD"},AWG:{money_format:"Afl{{amount}}",money_with_currency_format:"Afl{{amount}} AWG"},AUD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} AUD"},BBD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} Bds"},AZN:{money_format:"m.{{amount}}",money_with_currency_format:"m.{{amount}} AZN"},BDT:{money_format:"Tk {{amount}}",money_with_currency_format:"Tk {{amount}} BDT"},BSD:{money_format:"BS${{amount}}",money_with_currency_format:"BS${{amount}} BSD"},BHD:{money_format:"{{amount}} BD",money_with_currency_format:"{{amount}} BHD"},BYR:{money_format:"Br {{amount}}",money_with_currency_format:"Br {{amount}} BYR"},BZD:{money_format:"BZ${{amount}}",money_with_currency_format:"BZ${{amount}} BZD"},BTN:{money_format:"Nu {{amount}}",money_with_currency_format:"Nu {{amount}} BTN"},BAM:{money_format:"KM {{amount_with_comma_separator}}",money_with_currency_format:"KM {{amount_with_comma_separator}} BAM"},BRL:{money_format:"R$ {{amount_with_comma_separator}}",money_with_currency_format:"R$ {{amount_with_comma_separator}} BRL"},BOB:{money_format:"Bs{{amount_with_comma_separator}}",money_with_currency_format:"Bs{{amount_with_comma_separator}} BOB"},BWP:{money_format:"P{{amount}}",money_with_currency_format:"P{{amount}} BWP"},BND:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} BND"},BGN:{money_format:"{{amount}} Ð»Ð²",money_with_currency_format:"{{amount}} Ð»Ð² BGN"},MMK:{money_format:"K{{amount}}",money_with_currency_format:"K{{amount}} MMK"},KHR:{money_format:"KHR{{amount}}",money_with_currency_format:"KHR{{amount}}"},KYD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} KYD"},XAF:{money_format:"FCFA{{amount}}",money_with_currency_format:"FCFA{{amount}} XAF"},CLP:{money_format:"${{amount_no_decimals}}",money_with_currency_format:"${{amount_no_decimals}} CLP"},CNY:{money_format:"&#165;{{amount}}",money_with_currency_format:"&#165;{{amount}} CNY"},COP:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} COP"},CRC:{money_format:"&#8353; {{amount_with_comma_separator}}",money_with_currency_format:"&#8353; {{amount_with_comma_separator}} CRC"},HRK:{money_format:"{{amount_with_comma_separator}} kn",money_with_currency_format:"{{amount_with_comma_separator}} kn HRK"},CZK:{money_format:"{{amount_with_comma_separator}} K&#269;",money_with_currency_format:"{{amount_with_comma_separator}} K&#269;"},DKK:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"kr.{{amount_with_comma_separator}}"},DOP:{money_format:"RD$ {{amount}}",money_with_currency_format:"RD$ {{amount}}"},XCD:{money_format:"${{amount}}",money_with_currency_format:"EC${{amount}}"},EGP:{money_format:"LE {{amount}}",money_with_currency_format:"LE {{amount}} EGP"},ETB:{money_format:"Br{{amount}}",money_with_currency_format:"Br{{amount}} ETB"},XPF:{money_format:"{{amount_no_decimals_with_comma_separator}} XPF",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} XPF"},FJD:{money_format:"${{amount}}",money_with_currency_format:"FJ${{amount}}"},GMD:{money_format:"D {{amount}}",money_with_currency_format:"D {{amount}} GMD"},GHS:{money_format:"GH&#8373;{{amount}}",money_with_currency_format:"GH&#8373;{{amount}}"},GTQ:{money_format:"Q{{amount}}",money_with_currency_format:"{{amount}} GTQ"},GYD:{money_format:"G${{amount}}",money_with_currency_format:"${{amount}} GYD"},GEL:{money_format:"{{amount}} GEL",money_with_currency_format:"{{amount}} GEL"},HNL:{money_format:"L {{amount}}",money_with_currency_format:"L {{amount}} HNL"},HKD:{money_format:"${{amount}}",money_with_currency_format:"HK${{amount}}"},HUF:{money_format:"{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} Ft"},ISK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr ISK"},INR:{money_format:"Rs. {{amount}}",money_with_currency_format:"Rs. {{amount}}"},IDR:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"Rp {{amount_with_comma_separator}}"},ILS:{money_format:"{{amount}} NIS",money_with_currency_format:"{{amount}} NIS"},JMD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} JMD"},JPY:{money_format:"&#165;{{amount_no_decimals}}",money_with_currency_format:"&#165;{{amount_no_decimals}} JPY"},JEP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} JEP"},JOD:{money_format:"{{amount}} JD",money_with_currency_format:"{{amount}} JOD"},KZT:{money_format:"{{amount}} KZT",money_with_currency_format:"{{amount}} KZT"},KES:{money_format:"KSh{{amount}}",money_with_currency_format:"KSh{{amount}}"},KWD:{money_format:"{{amount}} KD",money_with_currency_format:"{{amount}} KWD"},KGS:{money_format:"Ð»Ð²{{amount}}",money_with_currency_format:"Ð»Ð²{{amount}}"},LVL:{money_format:"Ls {{amount}}",money_with_currency_format:"Ls {{amount}} LVL"},LBP:{money_format:"L&pound;{{amount}}",money_with_currency_format:"L&pound;{{amount}} LBP"},LTL:{money_format:"{{amount}} Lt",money_with_currency_format:"{{amount}} Lt"},MGA:{money_format:"Ar {{amount}}",money_with_currency_format:"Ar {{amount}} MGA"},MKD:{money_format:"ден {{amount}}",money_with_currency_format:"ден {{amount}} MKD"},MOP:{money_format:"MOP${{amount}}",money_with_currency_format:"MOP${{amount}}"},MVR:{money_format:"Rf{{amount}}",money_with_currency_format:"Rf{{amount}} MRf"},MXN:{money_format:"$ {{amount}}",money_with_currency_format:"$ {{amount}} MXN"},MYR:{money_format:"RM{{amount}} MYR",money_with_currency_format:"RM{{amount}} MYR"},MUR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} MUR"},MDL:{money_format:"{{amount}} MDL",money_with_currency_format:"{{amount}} MDL"},MAD:{money_format:"{{amount}} dh",money_with_currency_format:"Dh {{amount}} MAD"},MNT:{money_format:"{{amount_no_decimals}} &#8366",money_with_currency_format:"{{amount_no_decimals}} MNT"},MZN:{money_format:"{{amount}} Mt",money_with_currency_format:"Mt {{amount}} MZN"},NAD:{money_format:"N${{amount}}",money_with_currency_format:"N${{amount}} NAD"},NPR:{money_format:"Rs{{amount}}",money_with_currency_format:"Rs{{amount}} NPR"},ANG:{money_format:"&fnof;{{amount}}",money_with_currency_format:"{{amount}} NA&fnof;"},NZD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} NZD"},NIO:{money_format:"C${{amount}}",money_with_currency_format:"C${{amount}} NIO"},NGN:{money_format:"&#8358;{{amount}}",money_with_currency_format:"&#8358;{{amount}} NGN"},NOK:{money_format:"kr {{amount_with_comma_separator}}",money_with_currency_format:"kr {{amount_with_comma_separator}} NOK"},OMR:{money_format:"{{amount_with_comma_separator}} OMR",money_with_currency_format:"{{amount_with_comma_separator}} OMR"},PKR:{money_format:"Rs.{{amount}}",money_with_currency_format:"Rs.{{amount}} PKR"},PGK:{money_format:"K {{amount}}",money_with_currency_format:"K {{amount}} PGK"},PYG:{money_format:"Gs. {{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"Gs. {{amount_no_decimals_with_comma_separator}} PYG"},PEN:{money_format:"S/. {{amount}}",money_with_currency_format:"S/. {{amount}} PEN"},PHP:{money_format:"&#8369;{{amount}}",money_with_currency_format:"&#8369;{{amount}} PHP"},PLN:{money_format:"{{amount_with_comma_separator}} zl",money_with_currency_format:"{{amount_with_comma_separator}} zl PLN"},QAR:{money_format:"QAR {{amount_with_comma_separator}}",money_with_currency_format:"QAR {{amount_with_comma_separator}}"},RON:{money_format:"{{amount_with_comma_separator}} lei",money_with_currency_format:"{{amount_with_comma_separator}} lei RON"},RUB:{money_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",money_with_currency_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"},RWF:{money_format:"{{amount_no_decimals}} RF",money_with_currency_format:"{{amount_no_decimals}} RWF"},WST:{money_format:"WS$ {{amount}}",money_with_currency_format:"WS$ {{amount}} WST"},SAR:{money_format:"{{amount}} SR",money_with_currency_format:"{{amount}} SAR"},STD:{money_format:"Db {{amount}}",money_with_currency_format:"Db {{amount}} STD"},RSD:{money_format:"{{amount}} RSD",money_with_currency_format:"{{amount}} RSD"},SCR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} SCR"},SGD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} SGD"},SYP:{money_format:"S&pound;{{amount}}",money_with_currency_format:"S&pound;{{amount}} SYP"},ZAR:{money_format:"R {{amount}}",money_with_currency_format:"R {{amount}} ZAR"},KRW:{money_format:"&#8361;{{amount_no_decimals}}",money_with_currency_format:"&#8361;{{amount_no_decimals}} KRW"},LKR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} LKR"},SEK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr SEK"},CHF:{money_format:"{{amount}} CHF",money_with_currency_format:"{{amount}} CHF"},TWD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TWD"},THB:{money_format:"{{amount}} &#xe3f;",money_with_currency_format:"{{amount}} &#xe3f; THB"},TZS:{money_format:"{{amount}} TZS",money_with_currency_format:"{{amount}} TZS"},TTD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TTD"},TND:{money_format:"{{amount}}",money_with_currency_format:"{{amount}} DT"},TRY:{money_format:"{{amount}}TL",money_with_currency_format:"{{amount}}TL"},UGX:{money_format:"Ush {{amount_no_decimals}}",money_with_currency_format:"Ush {{amount_no_decimals}} UGX"},UAH:{money_format:"₴{{amount}}",money_with_currency_format:"{{amount}} UAH"},AED:{money_format:"Dhs. {{amount}}",money_with_currency_format:"Dhs. {{amount}} AED"},UYU:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} UYU"},VUV:{money_format:"{{amount}} VT",money_with_currency_format:"{{amount}} VT"},VEF:{money_format:"Bs. {{amount_with_comma_separator}}",money_with_currency_format:"Bs. {{amount_with_comma_separator}} VEF"},VND:{money_format:"{{amount_no_decimals_with_comma_separator}}&#8363;",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} VND"},XBT:{money_format:"{{amount_no_decimals}} BTC",money_with_currency_format:"{{amount_no_decimals}} BTC"},XOF:{money_format:"CFA{{amount}}",money_with_currency_format:"CFA{{amount}} XOF"},ZMW:{money_format:"K{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"ZMW{{amount_no_decimals_with_comma_separator}}"}};function D(o,t){"string"==typeof o&&(o=o.replace(".",""));var r=/\{\{\s*(\w+)\s*\}\}/,m=t||"${{amount}}";function n(o,t){return null==o||o!=o?t:o}function e(o,t,a,r){if(t=n(t,2),a=n(a,","),r=n(r,"."),isNaN(o)||null==o)return 0;var m=(o=(o/100).toFixed(t)).split(".");return m[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+a)+(m[1]?r+m[1]:"")}var _="";switch(m.match(r)[1]){case"amount":_=e(o,2);break;case"amount_no_decimals":_=e(o,0);break;case"amount_with_space_separator":_=e(o,2," ",".");break;case"amount_no_decimals_with_comma_separator":_=e(o,0,",",".");break;case"amount_no_decimals_with_space_separator":_=e(o,0," ");break;case"amount_with_comma_separator":_=e(o,2,".",",")}return a?-1!==m.indexOf("with_comma_separator")?m.replace(r,_).replace(",00",""):m.replace(r,_).replace(".00",""):m.replace(r,_)}function R(t,a,y,f){if(!a)return!1;const s="array"==typeof y?y:document.querySelectorAll(y||`span.money:not([data-currencyt4s="${a}"])`),R=w[a][f||h.format]||"{{amount}}";s.forEach((function(o){o.dataset[c]||(o.dataset[c]=o.innerText);const t=o.dataset[u]?parseFloat(o.dataset[u]):function(o,t){const a=w[e][t||h.format]||"{{amount}}";let r=o.textContent;-1!==_.indexOf("with_comma_separator")&&(r=r.replace(/[,.]/g,(function(o){return","===o?".":","})));let m=100*parseFloat(r.replace(/^[^0-9]+|[^0-9.]/g,"",""),10)/i;return o.dataset[u]=m,o.setAttribute("data-currency-"+e.toLowerCase(),D(m,a)),m}(o,f);if(void 0===t)return;let y="currency"+a.charAt(0)+a.slice(1).toLowerCase();if(o.dataset[y])o.innerHTML=o.dataset[y];else{let m=Currency.convert(t,e,a);r&&(m=100*Math.round(m/100));const n=D(m,R);o.innerHTML=n,o.dataset[y]=n}o.dataset.hdtCurrency=a,m&&a!==n?o.dataset.tooltip="top":o.removeAttribute("data-tooltip")})),o(".selected-currency").text(a),a==n?o("[data-currency-jsnotify]").hide():o("[data-currency-jsnotify]").show(),h.currentCurrency=a,isStorageSpdLocal&&localStorage.setItem("T4Currency",a),m&&T4SThemeSP.Tooltip()}T4SThemeSP.CurrencyT4s=function(){var a,r,m,e={AF:"AFN",AX:"EUR",AL:"ALL",DZ:"DZD",AS:"USD",AD:"EUR",AO:"AOA",AI:"XCD",AQ:"",AG:"XCD",AR:"ARS",AM:"AMD",AW:"AWG",AU:"AUD",AT:"EUR",AZ:"AZN",BS:"BSD",BH:"BHD",BD:"BDT",BB:"BBD",BY:"BYN",T4:"EUR",BZ:"BZD",BJ:"XOF",BM:"BMD",BT:"BTN",BO:"BOB",BA:"BAM",BW:"BWP",BV:"NOK",BR:"BRL",IO:"USD",BN:"BND",BG:"BGN",BF:"XOF",BI:"BIF",KH:"KHR",CM:"XAF",CA:"CAD",CV:"CVE",KY:"KYD",CF:"XAF",TD:"XAF",CL:"CLP",CN:"CNY",CX:"AUD",CC:"AUD",CO:"COP",KM:"KMF",CG:"XAF",CD:"CDF",CK:"NZD",CR:"CRC",CI:"XOF",HR:"HRK",CU:"CUP",CY:"EUR",CZ:"CZK",DK:"DKK",DJ:"DJF",DM:"XCD",DO:"DOP",EC:"USD",EG:"EGP",SV:"USD",GQ:"XAF",ER:"ERN",EE:"EUR",ET:"ETB",FK:"FKP",FO:"DKK",FJ:"FJD",FI:"EUR",FR:"EUR",GF:"EUR",PF:"XPF",TF:"EUR",GA:"XAF",GM:"GMD",GE:"GEL",DE:"EUR",GH:"GHS",GI:"GIP",GR:"EUR",GL:"DKK",GD:"XCD",GP:"EUR",GU:"USD",GT:"GTQ",GG:"GBP",GN:"GNF",GW:"XOF",GY:"GYD",HT:"HTG",HM:"AUD",VA:"EUR",HN:"HNL",HK:"HKD",HU:"HUF",IS:"ISK",IN:"INR",ID:"IDR",IR:"IRR",IQ:"IQD",IE:"EUR",IM:"GBP",IL:"ILS",IT:"EUR",JM:"JMD",JP:"JPY",JE:"GBP",JO:"JOD",KZ:"KZT",KE:"KES",KI:"AUD",KR:"KRW",KW:"KWD",KG:"KGS",LA:"LAK",LV:"EUR",LB:"LBP",LS:"LSL",LR:"LRD",LY:"LYD",LI:"CHF",LT:"EUR",LU:"EUR",MO:"MOP",MK:"MKD",MG:"MGA",MW:"MWK",MY:"MYR",MV:"MVR",ML:"XOF",MT:"EUR",MH:"USD",MQ:"EUR",MR:"MRU",MU:"MUR",YT:"EUR",MX:"MXN",FM:"USD",MD:"MDL",MC:"EUR",MN:"MNT",ME:"EUR",MS:"XCD",MA:"MAD",MZ:"MZN",MM:"MMK",NA:"NAD",NR:"AUD",NP:"NPR",NL:"EUR",AN:"",NC:"XPF",NZ:"NZD",NI:"NIO",NE:"XOF",NG:"NGN",NU:"NZD",NF:"AUD",MP:"USD",NO:"NOK",OM:"OMR",PK:"PKR",PW:"USD",PS:"ILS",PA:"PAB",PG:"PGK",PY:"PYG",PE:"PEN",PH:"PHP",PN:"NZD",PL:"PLN",PT:"EUR",PR:"USD",QA:"QAR",RE:"EUR",RO:"RON",RU:"RUB",RW:"RWF",BL:"EUR",SH:"SHP",KN:"XCD",LC:"XCD",MF:"EUR",PM:"EUR",VC:"XCD",WS:"WST",SM:"EUR",ST:"STN",SA:"SAR",SN:"XOF",RS:"RSD",SC:"SCR",SL:"SLL",SG:"SGD",SK:"EUR",SI:"EUR",SB:"SBD",SO:"SOS",ZA:"ZAR",GS:"GBP",ES:"EUR",LK:"LKR",SD:"SDG",SR:"SRD",SJ:"NOK",SZ:"SZL",SE:"SEK",CH:"CHF",SY:"SYP",TW:"TWD",TJ:"TJS",TZ:"TZS",TH:"THB",TL:"USD",TG:"XOF",TK:"NZD",TO:"TOP",TT:"TTD",TN:"TND",TR:"TRY",TM:"TMT",TC:"USD",TV:"AUD",UG:"UGX",UA:"UAH",AE:"AED",GB:"GBP",US:"USD",UM:"USD",UY:"UYU",UZ:"UZS",VU:"VUV",VE:"VEF",VN:"VND",VG:"USD",VI:"USD",WF:"XPF",EH:"MAD",YE:"YER",ZM:"ZMW",ZW:"ZWD"};function _(){o(`[data-currency-wrap]:not(.${s})`).on("click","[data-currency-item]",(function(e){e.preventDefault(),e.stopPropagation();var _=o(this);if(!_.hasClass(f)){if(r=_.attr("data-currency"),(m=_.closest("[data-currency-wrap]")).addClass(s),a=m.find("."+f).attr("data-currency")||n,o("[data-currency-wrap] [data-img-current]").length>0){let t=o("[data-currency-wrap] [data-img-current]").first().attr("src").replace(/\/\w\w.svg/g,"/"+r.slice(0,2).toLowerCase())+".svg";o("[data-currency-wrap] [data-img-current]").attr("src",t)}o("[data-currency-wrap] [data-current]").text(_.text()).removeClass("flagst4s-"+a).addClass("flagst4s-"+r),o(`[data-currency-wrap] .${f}`).removeClass(f),o("[data-currency-wrap] [data-currency="+r+"]").addClass(f),R(0,r),_.is("[data-drawer-close]")&&y.trigger("click"),void 0===e.originalEvent||_.closest("#shopify-section-mb_nav").length>0||t.trigger("dropdown:t4s:close")}}))}function c(){h.locationT4s&&(o("[data-currency-wrap]").each((function(){if(o(this).find("[data-currency-item].flagst4s-"+h.locationT4s).length<=0){if(o(this).find("[data-img-current]").length>0){let t=o(this).find("[data-img-current]").attr("src").replace(/\/\w\w.svg/g,"/"+h.locationT4s.slice(0,2).toLowerCase())+".svg";o(this).find("[data-currency-item][data-currency-temp] img").attr("src",t)}o(this).find("[data-currency-item][data-currency-temp] span").text(h.locationT4s),o(this).find("[data-currency-item][data-currency-temp]").attr("data-currency",h.locationT4s).addClass("flagst4s-"+h.locationT4s).removeClass("t4s-d-none")}})),o(`[data-currency-wrap] [data-currency="${h.currentCurrency||h.locationT4s||n}"]`).first().trigger("click"))}function u(o){var t=e[o.countryCode]||e[o.country]||o.currency||n,a=t.handle||t;h.locationT4s||(h.locationT4s=a),w[t]&&c()}function i(){if(T4Sconfigs.auto_currency&&!navigator.userAgent.match(/bot|spider/i)){var t=isStorageSpdLocal?localStorage.getItem("nt_currency"):null;if(t)u(JSON.parse(t));else{var a={type:"get",url:"https://ipinfo.io/json",dataType:"json",success:function(o){u(o),isStorageSpdLocal&&localStorage.setItem("nt_currency",JSON.stringify(o))}};o.ajax({type:"get",url:"https://extreme-ip-lookup.com/json/?key=demo2",dataType:"json",success:function(t){"success"==t.status?(u(t),isStorageSpdLocal&&localStorage.setItem("nt_currency",JSON.stringify(t))):o.ajax(a)},error:function(t,r){o.ajax(a)}})}}else h.currentCurrency&&h.currentCurrency!=n&&o(`[data-currency-wrap] [data-currency="${h.currentCurrency}"]`).first().trigger("click")}return function(){_(),o(`#t4s-menu-drawer [data-currency-wrap] [data-currency="${h.currentCurrency}"]`).first().trigger("click"),o("#t4s-menu-drawer").one("lazyincluded",(function(t){c(),_(),o(`#t4s-menu-drawer [data-currency-wrap] [data-currency="${h.currentCurrency}"]`).first().trigger("click")})),_(),t.on("currency:update",(function(){"undefined"!=h.currentCurrency&&null!=h.currentCurrency&&"null"!=h.currentCurrency&&R(0,h.currentCurrency)})),i()}}()}(jQuery_T4NT),jQuery_T4NT(document).ready((function(o){$script("https://cdn.shopify.com/s/javascripts/currencies.js",(function(){T4SThemeSP.CurrencyT4s()}))}));