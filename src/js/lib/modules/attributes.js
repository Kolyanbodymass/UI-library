import $ from '../core';

$.prototype.setAttribute = function(attributeName, attributeValue){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(attributeName, attributeValue);
    }

    return this;
};

$.prototype.removeAttribute = function(attributeName){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].removeAttribute) {
            continue;
        }
        this[i].removeAttribute(attributeName);
    }

    return this;
};