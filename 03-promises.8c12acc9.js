var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("eWCmQ");function i(e,o){return new Promise(((n,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const o=e.currentTarget.elements;let n=Number(o.delay.value);const t=Number(o.step.value),l=Number(o.amount.value);for(let e=0;e<l;e+=1)n+=t,i(e,n).then((({position:e,delay:o})=>{r.Notify.success(`Fulfilled promise ${e} in ${o}ms`),console.log("hg")})).catch((({position:e,delay:o})=>{r.Notify.failure(`Rejected promise ${e} in ${o}ms`)}))})),console.log("fsfdf");
//# sourceMappingURL=03-promises.8c12acc9.js.map
