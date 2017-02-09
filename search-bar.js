(function() {
    "use strict";

    const template = `


            <input type="text">
            <button id="search">Submit</button>
    
    `;

    class MySearchBar extends HTMLElement {

        get value() {
            const searchValue = this.shadowRoot.querySelector('input'); 
            return searchValue.value;
        }
        
        set value(value){
            const setSearchVal = this.shadowRoot.querySelector('input')
            setSearchVal.value = value;
            this.setAttribute('value', value)
        }

        constructor() {
            super();
            let myShadowRoot = this.attachShadow({mode: 'open'});
            myShadowRoot.innerHTML = template;

            const myComponent = this
            
            this.shadowRoot.querySelector('button').addEventListener('click', function(e) {
                // watch for click events in the context of the button of the shadowRoot to console log the search
                console.log(myComponent.value);
            });
            this.shadowRoot.querySelector('input').addEventListener('keydown', function(e) {
               // watch for submit events to console log the search

                if(e.keyCode === 13)
                {
                    console.log(myComponent.value);
                }
            });
        }       
    }

    window.customElements.define('search-input', MySearchBar);
})();

