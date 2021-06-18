(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),i=(n(25),n(11)),s=n(4),l=n(5),u=n(7),h=n(6),d=(n(26),n(27),n(0)),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),n}(a.Component),m=(n(29),n(30),function(e){var t=e.id,n=e.webformatURL,a=e.largeImageURL,r=e.tags;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:n,alt:r,"data-url":a,className:"ImageGalleryItem-image"})},t)}),f=function(e){var t=e.images,n=e.onClick;return Object(d.jsx)("ul",{className:"ImageGallery",onClick:n,children:t.map((function(e){var t=e.id,n=e.webformatURL,a=e.largeImageURL,r=e.tags;return Object(d.jsx)(m,{webformatURL:n,largeImageURL:a,tags:r},t)}))})},b=(n(31),function(e){var t=e.onClick;return Object(d.jsx)("button",{className:"Button",onClick:t,children:"Load more"})}),j=n(10),p=n.n(j);p.a.defaults.baseURL="https://pixabay.com/api/";var y=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a;return p.a.get("/?q=".concat(n,"&page=").concat(r,"&key=").concat("21359619-d33abf781fc12db63121b07d3","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},v=n(20),O=n.n(v),w=(n(70),document.querySelector("#modal-root")),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:this.props.children})}),w)}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoaded:!1,error:null,showModal:!1,LargeUrl:"",tag:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,images:[],currentPage:1,error:null})},e.fetchImages=function(){var t=e.state,n=t.currentPage,a={searchQuery:t.searchQuery,currentPage:n};e.setState({isLoaded:!0}),y(a).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoaded:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageClick=function(t){console.log("\u041a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u043f\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435"),"IMG"===t.target.nodeName&&(e.setState({largeUrl:t.target.dataset.url,tags:t.target.alt},(function(){return console.log(e.state.tags)})),e.toggleModal())},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.searchQuery,r=n.images;t.searchQuery!==a&&this.fetchImages(),r.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.images,a=e.error,r=e.showModal,o=e.largeUrl,c=e.tag,i=n.length>0&&!t;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(g,{onSubmit:this.onChangeQuery}),a&&Object(d.jsxs)("h2",{children:["Sorry something went wrong, try again later!(",a.message,")"]}),Object(d.jsx)(f,{images:n,onClick:this.onImageClick}),t&&Object(d.jsx)(O.a,{type:"Audio",color:"#00BFFF",height:80,width:80}),i&&Object(d.jsx)(b,{onClick:this.fetchImages}),r&&Object(d.jsx)(C,{onClose:this.toggleModal,children:Object(d.jsx)("img",{src:o,alt:c})})]})}}]),n}(a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),k()}},[[71,1,2]]]);
//# sourceMappingURL=main.2e1127ca.chunk.js.map