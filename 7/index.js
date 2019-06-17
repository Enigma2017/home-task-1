'use strict';

function Figure( x1, y1, color ){

	this._x1 = x1;
	this._y1 = y1;
	this._color = color;
}

function Line( x1, y1, x2, y2, color ){

Figure.apply( this, [ x1, y1, color ] );

	this._x2 = x2;
	this._y2 = y2;

}

Line.prototype.draw = function(ctx){

	ctx.beginPath();
	ctx.moveTo( this._x1, this._y1 );
	ctx.lineTo( this._x2, this._y2 );
	ctx.strokeStyle = this._color;
	ctx.stroke();
}

function Circle( x3, y3, x4, y4, radius, color ){

Figure.apply( this, [ x3, y3, color ] );
	this._x3 = x3;
	this._y3 = y3;
	this._x4 = x4;
	this._y4 = y4;
	this._radius = radius;
}

Circle.prototype.draw = function(ctx){

	ctx.beginPath();
	ctx.arc( this._x3, this._y3, this._x4, this._y4, this._radius, this._color );
	ctx.strokeStyle = this._color;
	ctx.stroke();
	ctx.fillStyle = this._color;
	ctx.fill();
}

function Rect( x7, y7, x8, y8, color ){

Figure.apply( this, [ x7, y7, color ] );
	this._x7 = x7;
	this._y7 = y7;
	this._x8 = x8;
	this._y8 = y8;
}

Rect.prototype.draw = function(ctx){

	ctx.beginPath();
	ctx.fillStyle = this._color;
	ctx.fill();
	ctx.fillRect( this._x8, this._y8, this._x7, this._y7, this._color );
	ctx.stroke();
}

function Zig( x9, y9, x10, y10, color ){

	Figure.apply( this, [x9, y9, color] );
	this._color = color;
}

Zig.prototype.draw = function( ctx ){
        ctx.lineWidth = 1;
        ctx.strokeStyle = this._color;
        ctx.moveTo ( 0, 0 );
        for ( let i = 1; i < 50; i++ ) {
            let x9 = i * 8;
            let y9 = (i % 2) ? 8 : 0;
            ctx.lineTo( x9, y9 );
        }
        ctx.stroke();
    };



function Canvas(sel){
	let c = document.getElementById( sel );
	this._ctx = c.getContext( "2d" );
	/*c.height = 300;
	c.width  = 300;*/
};

Canvas.prototype.add = function(){
	let ctx = this._ctx;
	ctx.globalAlpha = 0.7;
	[].forEach.call( arguments, function(el) {
		el.draw( ctx );
	});

}


function drawFigure(){
	let line1 = new Line( 80, 50, 50, 100, 'red' );
    let line2 = new Line( 70, 50, 40, 100, 'black' );
	let circle1 = new Circle( 170, 60, 20, 0, 2*Math.PI, '#00ff00' );
    let circle2 = new Circle( 140, 70, 30, 0, 2*Math.PI, '#bfff00' );
	let rect1 = new Rect( 30, 70, 240, 50, '#00ffff' );
    let rect2 = new Rect( 40, 90, 220, 50, '#bf00ff' );
    let zig = new Zig( 0, 0, 8, 8, 'red' );

	let drawArea = new Canvas( 'canvasID' );
	
    drawArea.add( line1, line2, circle1, circle2, rect1, rect2, zig );
}
