'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
    return {
        width: width,
        height: height,
        getArea: function () {
            return width * height;
        }
    }
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
    return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
 *
 */
function fromJSON(proto, json) {
    throw new Error('Not implemented');
    let obj = JSON.parse(json);
    let k = new proto;
    let arr = [];
    console.log(k);
    for (let key in obj) {
        if(obj[key] != k[key]) k[key] = obj[key];
    }
    return k;
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy and implement the functionality
 * to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple, clear and readable as possible.
 *
 * @example
 *
 *  var builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()  => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()  => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()        =>    'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {    
    selector: "",
    elem: 0,
    i: 0,
    ps: 0,
    pred: "",

    stringify: function () {
        return this.selector;
    },

    element: function(value) {
        if (this.pred == "id" || this.pred == "class" || this.pred == "attr" || this.pred == "psC" || this.pred == "psE") throw new Error("Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element");
        if (this.elem != 0) throw new Error ("Element, id and pseudo-element should not occur more then one time inside the selector");
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + value;
        newobj.elem = 1;
        return newobj;
    },

    id: function(value) {
        if (this.pred == "class" || this.pred == "attr" || this.pred == "psC" || this.pred == "psE") throw new Error("Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element");
        if (this.i != 0) throw new Error ("Element, id and pseudo-element should not occur more then one time inside the selector");
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + "#" + value;
        newobj.i = 1;
        newobj.pred = "id";
        return newobj;
    },

    class: function(value) {
        if (this.pred == "attr" || this.pred == "psC" || this.pred == "psE") throw new Error("Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element");
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + "." + value;
        newobj.pred = "class";
        return newobj;
    },

    attr: function(value) {
        if (this.pred == "psC" || this.pred == "psE") throw new Error("Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element");
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + "[" + value + "]";
        newobj.pred = "attr";
        return newobj;
    },

    pseudoClass: function(value) {
        if (this.pred == "psE") throw new Error("Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element");
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + ":" + value;
        newobj.pred = "psC"
        return newobj;
    },

    pseudoElement: function(value) {
        if (this.ps != 0) throw new Error ("Element, id and pseudo-element should not occur more then one time inside the selector");
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + "::" + value;
        newobj.ps = 1;
        newobj.pred = "psE"
        return newobj;
    },

    combine: function(selector1, combinator, selector2) {
        let newobj = {};
        for (var key in cssSelectorBuilder) {
            newobj[key] = cssSelectorBuilder[key];
        }
        newobj.selector = this.selector + selector1.selector + " " + combinator + " " + selector2.selector;
        return newobj;
    },
};


module.exports = {
    Rectangle: Rectangle,
    getJSON: getJSON,
    fromJSON: fromJSON,
    cssSelectorBuilder: cssSelectorBuilder
};
