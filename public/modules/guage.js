/*global window:false, angular:false, Gauge:false*/
/**
 * angular-gaugejs version 0.1
 * License: MIT.
 * Copyright (C) 2014, Rasmus Schlünsen
 */

(function(angular) {
    'use strict';

    angular.module('gaugejs', [])
    .directive('gaugeJs', function(){
        return {
            restrict: 'A',
            scope: {
                options:'=',
                currentValue: '=ngModel'    
            },
            compile: function(tElem, tAttrs){

                if ( tElem[0].tagName !== 'CANVAS' ) {
                  throw new Error('guage-js can only be set on a canvas element. ' + tElem[0].tagName + ' will not work.');
                }

                return function(scope, element, attrs){
                
                    var gauge;
                    
                    function setGauge(options){
                        gauge = new Gauge(element[0]).setOptions(scope.options);
                        gauge.maxValue = scope.options.maxValue; // set max gauge value
                        gauge.set(scope.currentValue);
                    }
                    
                    scope.$watch('options', function(newV, oldV){
                        setGauge(scope.options);
                    },true);
                                 
                    scope.$watch('currentValue', function(newV,oldV){       
                        if(scope.currentValue > scope.options.maxValue){
                          gauge.set(scope.options.maxValue);                  
                        } else {
                          gauge.set(scope.currentValue);  
                        }  
                    });
                };
            }
        };
    });

})(window.angular);
