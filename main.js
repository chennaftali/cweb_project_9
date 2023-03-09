!function(){"use strict";function e(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class t{constructor(t,o,n){e(this,"_getElement",(()=>document.querySelector(this._templateCardSelector).content.querySelector(".card__list-item").cloneNode(!0))),e(this,"_toggleLikeButton",(e=>{e.target.classList.toggle("card__button_type_active")})),e(this,"_handleDelete",(()=>{this._cardElement.remove()})),this._name=t.name,this._link=t.link,this._handleCardClick=n,this._templateCardSelector=o}_setEventListeners(){this._likeButton.addEventListener("click",this._toggleLikeButton),this._deleteButton.addEventListener("click",this._handleDelete),this._cardImage.addEventListener("click",this._handleCardClick)}createCard(){this._cardElement=this._getElement(),this._cardImage=this._cardElement.querySelector(".card__img");const e=this._cardElement.querySelector(".card__title");return this._deleteButton=this._cardElement.querySelector(".card__button_type_delete"),this._likeButton=this._cardElement.querySelector(".card__button_type-like"),this._cardImage.src=this._link,this._cardImage.alt=`photo of ${this._name}`,e.textContent=this._name,this._setEventListeners(),this._cardElement}}function o(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class n{constructor(e,t){o(this,"resetValidation",(()=>{this._inputs.forEach((e=>{this._hideError(e,this._setting)}))})),o(this,"_showError",(e=>{const t=e.validationMessage,o=document.querySelector(`#${e.id}-error`);o.textContent=t,o.classList.add(this._setting.errorClass)})),o(this,"_hideError",(e=>{const t=document.querySelector(`#${e.id}-error`);t.textContent="",t.classList.remove(this._setting.errorClass)})),o(this,"disableButton",(()=>{this._button.disabled=!0,this._button.classList.add(this._setting.inactiveButtonClass)})),o(this,"_enableButton",(()=>{this._button.disabled=!1,this._button.classList.remove(this._setting.inactiveButtonClass)})),o(this,"_toggleInputError",(e=>{e.validity.valid?this._hideError(e):this._showError(e)})),o(this,"_setEventListeners",(()=>{this._inputs.forEach((e=>{e.addEventListener("input",(()=>{this._toggleInputError(e),this.toggleButtonState(this._inputs,this._button)}))}))})),o(this,"_isValid",(()=>this._inputs.every((e=>e.validity.valid)))),o(this,"toggleButtonState",(()=>{this._isValid()?this._enableButton(this._button):this.disableButton(this._button)})),this._setting=e,this._formElement=t,this._inputs=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._button=this._formElement.querySelector(e.submitButtonSelector)}enableValidation(){this._formElement.addEventListener("submit",(e=>e.preventDefault())),this._inputs.forEach((e=>{e.addEventListener("input",(()=>{this._toggleInputError(e),this.toggleButtonState()}))}))}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class r{constructor(e){s(this,"_handleEscClose",(e=>{"Escape"===e.key&&this.close()})),s(this,"_handleOverlayClose",(e=>{e.target.classList.contains("popup")&&this.close()})),this._popup=document.querySelector(e)}open(){this._popup.classList.add("popup_open"),document.addEventListener("mousedown",this._handleOverlayClose),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_open"),document.removeEventListener("mousedown",this._handleOverlayClose),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){this._popup.querySelector(".popup__close").addEventListener("click",(()=>this.close()))}}class i extends r{constructor(e,t){super(e),this.submitHandler=t,this._form=this._popup.querySelector(".popup__form"),this.inputValues={},this._inputs=this._form.querySelectorAll(".popup__content")}_getInputValues(){return this._inputs.forEach((e=>{this.inputValues[e.name]=e.value})),this.inputValues}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this.submitHandler(this._getInputValues()),this.close()})),super.setEventListeners()}close(){this._form.reset(),super.close()}}class l{constructor(e){let{profileNameSelector:t,profileJobSelector:o}=e;this._profileName=document.querySelector(t),this._profileJob=document.querySelector(o)}getUserInfo(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}setUserInfo(e){let{name:t,aboutMe:o}=e;console.log("setUserInfo",this),this._profileName.textContent=t,this._profileJob.textContent=o}}const a={inputSelector:".popup__content",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},p=document.querySelector(".element__list"),_=document.querySelector(".popup__form_type-add"),c=document.querySelector(".popup__form_type-profile"),u=(document.querySelector(".popup_type-edit"),document.querySelector(".popup_type_add-card"),document.querySelector(".popup_type_image-preview"),document.querySelector(".popup__form_type-profile"),document.querySelector(".popup__content_type_name")),d=document.querySelector(".popup__content_type_aboutMe"),h=(document.querySelector(".popup__form_type-add"),document.querySelector(".popup__content_type_img-title"),document.querySelector(".popup__content_type_img-link"),document.querySelector(".profile__edit-button")),m=(document.querySelector(".popup__close_type-proile"),document.querySelector(".popup__close_type_image-preview"),document.querySelector(".profile__add-button")),y=(document.querySelector(".popup__close_type_add"),document.querySelector(".profile__name"),document.querySelector(".profile__explorer"),new l({profileNameSelector:".profile__name",profileJobSelector:".profile__explorer"}),new class{constructor(e,t){let{items:o,renderer:n}=e;this._items=o,this._renderer=n,this._container=t}addItem(e){this._renderer(e)}prependItem(e){this._container.prepend(e)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>{const o=new t(n=e,"#card__template",(()=>{b.open(n.link,n.name)})).createCard();var n;y.prependItem(o)}},p)),g=new l({profileNameSelector:".profile__name",profileJobSelector:".profile__explorer"}),b=new class extends r{constructor(e){super(e),this._imageElement=this._popup.querySelector(".popup__img-preview"),this._imageCaption=this._popup.querySelector(".popup__header-img")}open(e,t){this._imageElement.src=e,this._imageElement.alt=`${t}`,this._imageCaption.textContent=t,super.open()}}(".popup_type_image-preview");b.setEventListeners();const f=new i(".popup_type-edit",(e=>{g.setUserInfo(e)}));f.setEventListeners();const v=new i(".popup_type_add-card",(e=>{console.log(e);const t={name:`${e.placeName}`,link:`${e.link}`};y.addItem(t)}));v.setEventListeners();const E=new n(a,_),S=new n(a,c);E.enableValidation(),S.enableValidation(),y.renderItems(),m.addEventListener("click",(function(){v.open(),E.disableButton()})),h.addEventListener("click",(()=>{const e=g.getUserInfo();u.value=e.name,d.value=e.job,f.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCbEYsaUJBQWlCLFNBQVMsS0FDL0MsTUFBTXRCLEVBQU93SCxFQUFTNUIsY0FDdEJVLEVBQVVqQixNQUFRckYsRUFBS2dCLEtBQ3ZCdUYsRUFBZ0JsQixNQUFRckYsRUFBSzZGLElBQzdCZ0MsRUFBVW5ELE1BQVYsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS1ieS1jaGVuLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0tYnktY2hlbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLWJ5LWNoZW4vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0tYnktY2hlbi8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLWJ5LWNoZW4vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0tYnktY2hlbi8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLWJ5LWNoZW4vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLWJ5LWNoZW4vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS1ieS1jaGVuLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHRlbXBsYXRlQ2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIHRoaXMuX3RlbXBsYXRlQ2FyZFNlbGVjdG9yID0gdGVtcGxhdGVDYXJkU2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZUNhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saXN0LWl0ZW1cIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBfdG9nZ2xlTGlrZUJ1dHRvbiA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBhY3Rpdkxpa2VCdXR0b24gPSBlLnRhcmdldDtcclxuICAgIGFjdGl2TGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fYnV0dG9uX3R5cGVfYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICB9O1xyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl90b2dnbGVMaWtlQnV0dG9uKTtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlRGVsZXRlKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2FyZENsaWNrKTtcclxuICB9XHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpO1xyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNhcmRfX2J1dHRvbl90eXBlX2RlbGV0ZVwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNhcmRfX2J1dHRvbl90eXBlLWxpa2VcIlxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSBgcGhvdG8gb2YgJHt0aGlzLl9uYW1lfWA7XHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3NldHRpbmcgPSBzZXR0aW5nO1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZy5pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHNldHRpbmcuc3VibWl0QnV0dG9uU2VsZWN0b3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXRzKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihpbnB1dHMsIHRoaXMuX3NldHRpbmcpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgX3Nob3dFcnJvciA9IChpbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3IgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3I7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5nLmVycm9yQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIF9oaWRlRXJyb3IgPSAoaW5wdXQpID0+IHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmcuZXJyb3JDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgZGlzYWJsZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5nLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIF9lbmFibGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgX3RvZ2dsZUlucHV0RXJyb3IgPSAoaW5wdXQpID0+IHtcclxuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2hvd0Vycm9yKGlucHV0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl90b2dnbGVJbnB1dEVycm9yKGlucHV0KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0cywgdGhpcy5fYnV0dG9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBfaXNWYWxpZCA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWxpZGl0eS52YWxpZCk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5faXNWYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbih0aGlzLl9idXR0b24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKHRoaXMuX2J1dHRvbik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl90b2dnbGVJbnB1dEVycm9yKGlucHV0KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5faGFuZGxlT3ZlcmxheUNsb3NlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVPdmVybGF5Q2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwXCIpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHN1Ym1pdEhhbmRsZXIpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpOyAgICBcclxuICAgIHRoaXMuc3VibWl0SGFuZGxlciA9IHN1Ym1pdEhhbmRsZXI7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgICB0aGlzLmlucHV0VmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2NvbnRlbnRcIik7XHJcbiAgfVxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIC8vY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEhhbmRsZXIodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVOYW1lU2VsZWN0b3IsIHByb2ZpbGVKb2JTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZU5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9wcm9maWxlSm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSm9iU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgam9iOiB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXRNZSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNldFVzZXJJbmZvXCIsIHRoaXMpO1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCA9IGFib3V0TWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2NvbnRlbnRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX3NhdmVcIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19zYXZlX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVsZW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19saXN0XCIpO1xyXG5leHBvcnQgY29uc3QgYWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX3R5cGUtYWRkXCIpO1xyXG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wb3B1cF9fZm9ybV90eXBlLXByb2ZpbGVcIlxyXG4pO1xyXG4vLy8vLy8vLy8vLy9wb3B1cC8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGUtZWRpdFwiKTtcclxuZXhwb3J0IGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9hZGQtY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IGltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfaW1hZ2UtcHJldmlld1wiKTtcclxuLy8vLy8vLy8vLy9Gb3Jtcy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fdHlwZS1wcm9maWxlXCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY29udGVudF90eXBlX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBpbnB1dE9jY3VwYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19jb250ZW50X3R5cGVfYWJvdXRNZVwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1fdHlwZS1hZGRcIik7XHJcbmV4cG9ydCBjb25zdCBhZGRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wb3B1cF9fY29udGVudF90eXBlX2ltZy10aXRsZVwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBhZGRJbWFnZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wb3B1cF9fY29udGVudF90eXBlX2ltZy1saW5rXCJcclxuKTtcclxuLy8vLy8vLy8vL0J1dHRvbnMvLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblByb2ZpbGVQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgY2xvc2VQcm9maWxlUG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19jbG9zZV90eXBlLXByb2lsZVwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBjbG9zZUltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19jbG9zZV90eXBlX2ltYWdlLXByZXZpZXdcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGNsb3NlQWRkUG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19jbG9zZV90eXBlX2FkZFwiXHJcbik7XHJcbi8vLy8vLy8vL290aGVycyBET00gZWxlbWVudC8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU9jY3VwYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2V4cGxvcmVyXCIpO1xyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNldHRpbmcsXHJcbiAgZWxlbWVudExpc3QsXHJcbiAgYWRkQ2FyZEZvcm0sXHJcbiAgZWRpdFByb2ZpbGVGb3JtLFxyXG4gIGVkaXRQcm9maWxlUG9wdXAsXHJcbiAgYWRkQ2FyZFBvcHVwLFxyXG4gIGlucHV0TmFtZSxcclxuICBpbnB1dE9jY3VwYXRpb24sXHJcbiAgZm9ybUFkZCxcclxuICBhZGRUaXRsZUlucHV0LFxyXG4gIGFkZEltYWdlSW5wdXQsXHJcbiAgb3BlblByb2ZpbGVQb3B1cEJ1dHRvbixcclxuICBjbG9zZVByb2ZpbGVQb3B1cEJ1dHRvbixcclxuICBhZGRDYXJkQnV0dG9uLFxyXG4gIGNsb3NlQWRkUG9wdXBCdXR0b24sXHJcbiAgcHJvZmlsZU5hbWUsXHJcbiAgcHJvZmlsZU9jY3VwYXRpb24sXHJcbiAgaW5pdGlhbENhcmRzLFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbmNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBuZXcgVXNlckluZm8oe1xyXG4gIHByb2ZpbGVOYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX25hbWVcIixcclxuICBwcm9maWxlSm9iU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2V4cGxvcmVyXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGRhdGEsIFwiI2NhcmRfX3RlbXBsYXRlXCIsICgpID0+IHtcclxuICAgIGltYWdlTW9kYWwub3BlbihkYXRhLmxpbmssIGRhdGEubmFtZSk7XHJcbiAgfSk7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmNyZWF0ZUNhcmQoKTtcclxuXHJcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59O1xyXG5cclxuY29uc3QgcHJlcGVuZENhcmQgPSAoZSkgPT4geyAgICAgICAgXHJcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZSk7XHJcbiAgIHNlY3Rpb24ucHJlcGVuZEl0ZW0oY2FyZClcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7IGl0ZW1zOiBpbml0aWFsQ2FyZHMsIHJlbmRlcmVyOiBwcmVwZW5kQ2FyZCB9LFxyXG4gIGVsZW1lbnRMaXN0XHJcbik7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxyXG4gIHByb2ZpbGVKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fZXhwbG9yZXJcIixcclxufSk7XHJcbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXBfdHlwZV9pbWFnZS1wcmV2aWV3XCIpO1xyXG5pbWFnZU1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBlZGl0TW9kYWwgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF90eXBlLWVkaXRcIiwgKGRhdGEpID0+IHtcclxuICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcclxufSk7XHJcbmVkaXRNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgYWRkQ2FyZE1vZGFsID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfdHlwZV9hZGQtY2FyZFwiLCAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IGNhcmQgPSB7XHJcbiAgICBuYW1lOiBgJHtkYXRhLnBsYWNlTmFtZX1gLFxyXG4gICAgbGluazogYCR7ZGF0YS5saW5rfWAsXHJcbiAgfTtcclxuICBzZWN0aW9uLmFkZEl0ZW0oY2FyZCk7XHJcbn0pO1xyXG5hZGRDYXJkTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGFkZENhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZywgYWRkQ2FyZEZvcm0pO1xyXG5jb25zdCBlZGl0UHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5nLCBlZGl0UHJvZmlsZUZvcm0pO1xyXG5cclxuYWRkQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5lZGl0UHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5zZWN0aW9uLnJlbmRlckl0ZW1zKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL0Z1bmN0aW9uLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy9hZGQtY2FyZC1mdW5jdGlvbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRDbGljaygpIHtcclxuICBhZGRDYXJkTW9kYWwub3BlbigpO1xyXG4gIGFkZENhcmRGb3JtVmFsaWRhdG9yLmRpc2FibGVCdXR0b24oKTtcclxufVxyXG5hZGRDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBZGRDYXJkQ2xpY2spO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vL0V2ZW50IExpc3RlbmVycy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbm9wZW5Qcm9maWxlUG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dE5hbWUudmFsdWUgPSBkYXRhLm5hbWU7XHJcbiAgaW5wdXRPY2N1cGF0aW9uLnZhbHVlID0gZGF0YS5qb2I7XHJcbiAgZWRpdE1vZGFsLm9wZW4oKTtcclxufSk7XHJcbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXIpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICB9XHJcblxyXG4gIHByZXBlbmRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltZy1wcmV2aWV3XCIpO1xyXG4gICAgdGhpcy5faW1hZ2VDYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faGVhZGVyLWltZ1wiKTtcclxuICB9XHJcbiAgb3BlbihpbWFnZSwgY2FwdGlvbikge1xyXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlO1xyXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IGAke2NhcHRpb259YDtcclxuICAgIHRoaXMuX2ltYWdlQ2FwdGlvbi50ZXh0Q29udGVudCA9IGNhcHRpb247XHJcblxyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsInRlbXBsYXRlQ2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGhpcyIsIl90ZW1wbGF0ZUNhcmRTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2NhcmRFbGVtZW50IiwicmVtb3ZlIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2hhbmRsZUNhcmRDbGljayIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9saWtlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90b2dnbGVMaWtlQnV0dG9uIiwiX2RlbGV0ZUJ1dHRvbiIsIl9oYW5kbGVEZWxldGUiLCJfY2FyZEltYWdlIiwiY3JlYXRlQ2FyZCIsIl9nZXRFbGVtZW50IiwiY2FyZFRpdGxlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZyIsImZvcm1FbGVtZW50IiwiX2lucHV0cyIsImZvckVhY2giLCJpbnB1dHMiLCJfaGlkZUVycm9yIiwiX3NldHRpbmciLCJpbnB1dCIsImVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsImFkZCIsImVycm9yQ2xhc3MiLCJfYnV0dG9uIiwiZGlzYWJsZWQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93RXJyb3IiLCJfdG9nZ2xlSW5wdXRFcnJvciIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiZXZlcnkiLCJfaXNWYWxpZCIsIl9lbmFibGVCdXR0b24iLCJkaXNhYmxlQnV0dG9uIiwiX2Zvcm1FbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImVuYWJsZVZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImtleSIsImNsb3NlIiwiY29udGFpbnMiLCJfcG9wdXAiLCJvcGVuIiwiX2hhbmRsZU92ZXJsYXlDbG9zZSIsIl9oYW5kbGVFc2NDbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRFdmVudExpc3RlbmVycyIsIlBvcHVwV2l0aEZvcm0iLCJzdWJtaXRIYW5kbGVyIiwic3VwZXIiLCJfZm9ybSIsImlucHV0VmFsdWVzIiwiX2dldElucHV0VmFsdWVzIiwidmFsdWUiLCJyZXNldCIsIlVzZXJJbmZvIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVKb2JTZWxlY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsImFib3V0TWUiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRFcnJvckNsYXNzIiwiZWxlbWVudExpc3QiLCJhZGRDYXJkRm9ybSIsImVkaXRQcm9maWxlRm9ybSIsImlucHV0TmFtZSIsImlucHV0T2NjdXBhdGlvbiIsIm9wZW5Qcm9maWxlUG9wdXBCdXR0b24iLCJhZGRDYXJkQnV0dG9uIiwic2VjdGlvbiIsImNvbnRhaW5lciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiYWRkSXRlbSIsIml0ZW0iLCJwcmVwZW5kSXRlbSIsInByZXBlbmQiLCJyZW5kZXJJdGVtcyIsImNhcmQiLCJpbWFnZU1vZGFsIiwidXNlckluZm8iLCJfaW1hZ2VFbGVtZW50IiwiX2ltYWdlQ2FwdGlvbiIsImltYWdlIiwiY2FwdGlvbiIsImVkaXRNb2RhbCIsImFkZENhcmRNb2RhbCIsInBsYWNlTmFtZSIsImFkZENhcmRGb3JtVmFsaWRhdG9yIiwiZWRpdFByb2ZpbGVGb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==