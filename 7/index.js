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
	ctx.fillStyle = this._color;
	ctx.fill();
	ctx.arc( this._x3, this._y3, this._x4, this._y4, this._radius, this._color );
	ctx.strokeStyle = this._color;
	ctx.stroke();
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

function Canvas(sel){
	let c = document.querySelector( sel );
	this._ctx = c.getContext( "2d" );
	c.height = 300;
	c.width  = 300;
};

Canvas.prototype.add = function(){
	let ctx = this._ctx;
	[].forEach.call( arguments, function(el) {
		el.draw( ctx );
	});

}

let drawArea = new Canvas( '#canvasID1' );

let line1 = new Line( 0, 0, 100, 100, 'magenta' );
let line2 = new Line( 0, 100, 100, 0, 'magenta' );
let line3 = new Line( 100, 100, 0, 100, 'magenta' );
let line4 = new Line( 100, 100, 100, 0, 'magenta' );

drawArea.add( line1, line2, line3, line4 );

let drawArea2 = new Canvas( '#canvasID2' );
let circle = new Circle( 100, 80, 60, 0, 2*Math.PI, '#FF0000' );
drawArea2.add( circle );


let drawArea3 = new Canvas( '#canvasID3' );
let rect = new Rect( 200, 100, 0, 0, '#00FFFF' );
drawArea3.add( rect );