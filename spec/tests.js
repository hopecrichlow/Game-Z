(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  'use strict';

  //Good Guy
  describe('About Goodguy', function () {
    //Before Each instance
    beforeEach(function () {
      window.x = new GoodGuy();
    });

    describe('create a good guy', function () {
      it('should create an instance of good guy', function () {
        // let x = new GoodGuy();
        expect(x instanceof GoodGuy).to.equal(true);
      });
    });

    describe('my player health', function () {
      it('should have full health upon creation', function () {
        var x = new GoodGuy();
        expect(x.health).to.equal(100);
      });
    });

    describe('player taking damage', function () {
      it('should lower score, after getting hit', function () {
        //let x = new GoodGuy();
        x.hit();
        expect(x.health).to.be.below(100);
      });
    });
  });
})();

},{}]},{},[1])


//# sourceMappingURL=tests.js.map
