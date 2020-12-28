(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._photo=e.link,this._place=e.place,this._cardSelector=o,this._showPopupOpenImage=n}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._element.remove(),e._element=null})),this._picture.addEventListener("click",(function(){return e._showPopupOpenImage(e._photo,e._place)}))}},{key:"_handleLikeClick",value:function(){this.like=this._element.querySelector(".element__like-button"),this.like.classList.toggle("element__like-button_type_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._picture=this._element.querySelector(".element__photo"),this._picture.src=this._photo,this._picture.alt=this._place,this._element.querySelector(".element__place").textContent=this._place,this._setEventListeners(),this._element}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n}var t,o;return t=e,(o=[{key:"_showError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass)}},{key:"_hideError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._config.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_setButtonState",value:function(e,t){t?(e.classList.remove(this._config.inactiveButtonClass),e.disabled=!1):(e.classList.add(this._config.inactiveButtonClass),e.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._form.querySelectorAll(this._config.inputSelector),n=this._form.querySelector(this._config.submitButtonSelector);t.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState(n,e._form.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(this._form);var e=this._form.querySelector(this._config.submitButtonSelector);this._setButtonState(e,this._form.checkValidity())}},{key:"resetValidation",value:function(){var e=this;this._form.querySelectorAll(this._config.inputSelector).forEach((function(t){e._hideError(t)}));var t=this._form.querySelector(this._config.submitButtonSelector);this._setButtonState(t,!1)}}])&&n(t.prototype,o),e}(),r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_type_inactive",inputErrorClass:"popup__input_type_error",errorClass:"error"},i=document.querySelector(".popup_type_edit"),c=document.querySelector(".popup_type_add-card"),u=document.querySelector(".popup_type_image"),l=document.querySelector(".popup__form"),s=document.querySelector(".popup__input_type_name"),a=document.querySelector(".popup__input_type_description"),p=i.querySelector(".popup__close-button"),f=c.querySelector(".popup__close-button"),_=u.querySelector(".popup__close-button"),h=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),d=document.querySelector(".profile__name"),v=document.querySelector(".profile__description"),m=document.querySelector(".elements"),b=document.querySelector(".add-element-form"),S=(document.querySelector(".popup__image"),document.querySelector(".popup__caption"),b.querySelector(".popup__input_type_photo")),k=b.querySelector(".popup__input_type_place"),g=".element-template";function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._closePopupEsc=this._closePopupEsc.bind(this),this._closePopupOverlay=this._closePopupOverlay.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;document.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._closePopupOverlay()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupEsc),this._popupSelector.addEventListener("mousedown",this._closePopupOverlay)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupEsc),this._popupSelector.removeEventListener("mousedown",this._closePopupOverlay)}},{key:"_closePopupEsc",value:function(e){"Escape"===e.key&&this.close(document.querySelector(".popup_opened"))}},{key:"_closePopupOverlay",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&w(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(o);if(r){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._photo=document.querySelector(".popup__image"),t._place=document.querySelector(".popup__caption"),t}return t=c,(n=[{key:"open",value:function(e,t){L(C(c.prototype),"open",this).call(this),this._photo.src=e,this._photo.alt=t,this._place.textContent=t}}])&&q(t.prototype,n),c}(E);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(o);if(r){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popupSelector.querySelector(".popup__form"),n}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;x(T(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){x(T(c.prototype),"close",this).call(this),this._form.reset()}}])&&V(t.prototype,n),c}(E);function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"newItem",value:function(e){this._container.prepend(e)}}])&&N(t.prototype,n),e}();function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var M=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userDescription=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,description:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userDescription.textContent=t}}])&&A(t.prototype,n),e}(),Q=new o(r,l),W=new o(r,b),Z=new I(u),z=new M(d,v);h.addEventListener("click",(function(){var e=z.getUserInfo();s.value=e.name,a.value=e.description,G.open(),Q.resetValidation()}));var G=new F(i,(function(){z.setUserInfo(s.value,a.value),G.close(i)}));function H(e){return new t(e,(function(){return Z.open(e.link,e.place)}),g).generateCard()}G.setEventListeners();var J=new F(c,(function(e){var t=H(e);K.newItem(t)})),K=new U({items:[{name:k.value,link:S.value}],renderer:function(e){var t=H(e);K.newItem(t)}},m),X=new U({items:[{place:"Санкт-Петербург",link:"https://allovertheus.ru/wp-content/uploads/2020/01/novogodnie-yolki-v-sankt-peterburge-v-yanvare.jpg"},{place:"Самара",link:"https://static.ngs.ru/news/99/preview/bbfcce7e2c040d0b1bb65a3102356a9017dd36852_1900_1267.jpg"},{place:"Казань",link:"https://i.ytimg.com/vi/Wn8wx3ieFZQ/maxresdefault.jpg"},{place:"Москва",link:"https://img.fotokonkurs.ru/cache/photo_1000w/photos/2010/12/23/3/7168f69c348019d8a3c5a19b814ca4cb/23249c099330217b.jpg"},{place:"Нижний Новгород",link:"https://mtdata.ru/u4/photo1F1F/20574129751-0/original.jpg"},{place:"Красноярск",link:"https://www.trk7.ru/upload/iblock/7a4/7a44e3f7c2c4d0e0f5c6b9215c68abd6.jpg"}],renderer:function(e){var n=new t(e,(function(){return Z.open(e.link,e.place)}),g).generateCard();X.addItem(n)}},m);X.renderItems(),Q.enableValidation(),W.enableValidation(),J.setEventListeners(),Z.setEventListeners(),y.addEventListener("click",(function(){return W.resetValidation(),b.reset(),void J.open()})),f.addEventListener("click",(function(){return J.close()})),p.addEventListener("click",(function(){return G.close()})),_.addEventListener("click",(function(){return Z.close()}))})();
//# sourceMappingURL=index.js.map