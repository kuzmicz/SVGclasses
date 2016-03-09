/*
 * SVGclasses - simple jQuery Plugin for adding, removing and checking classes on SVG elements
 *
 * Version:  1.0
 * Home:   https://github.com/kuzmicz/SVGclasses
 * Author:   Mateusz Kuźmicz (kuzmicz.it)
 * License:  MIT
 *
 * Copyright (c) 2016 kuzmicz.it
 */
(function($) {

    $.fn.addClassSVG = function(name) {
        $(this).attr('class', function(index, currentClasses) {
            return currentClasses ? currentClasses + ' ' + name : name
        });
        return this;
    };

    $.fn.removeClassSVG = function(name) {
        $(this).attr('class', function(index, currentClasses) {
            var classToRemove = new RegExp(name, 'g');
            return currentClasses.replace(classToRemove, '');
        });
        return this;
    };
    
    $.fn.hasClassSVG = function(name) {
        return RegExp('(\\s|^)' + name + '(\\s|$)').test(this.attr('class'))
    };

}(jQuery));
