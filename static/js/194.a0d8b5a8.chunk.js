(this["webpackJsonp@uiw/react-md-editor"]=this["webpackJsonp@uiw/react-md-editor"]||[]).push([[194],{248:function(e,a){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,n){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,n){var t="doc-comment",r=e.languages[a];if(r){var i=r[t];if(!i){var o={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};i=(r=e.languages.insertBefore(a,"comment",o))[t]}if(i instanceof RegExp&&(i=r[t]={pattern:i}),Array.isArray(i))for(var s=0,p=i.length;s<p;s++)i[s]instanceof RegExp&&(i[s]={pattern:i[s]}),n(i[s]);else n(i)}}(a,(function(e){e.inside||(e.inside={}),e.inside.rest=n}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=194.a0d8b5a8.chunk.js.map