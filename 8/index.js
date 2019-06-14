'use strict';

function Figure( x, y, color ){

	this.x = x;
	this.y = y;
	this.color = color;
}

function Line( x1, y1, x2, y2, color ){

	Figure.call( this, x1, y1, color );

	this.x2 = x2;
	this.y2 = y2;

	this.draw = function(ctx){
        ctx.beginPath();
		ctx.moveTo( this.x, this.y );
		ctx.lineTo( this.x2, this.y2 );
		ctx.strokeStyle = this.color;
		ctx.stroke();
    }
}


function Circle( x, y, radius, color ) {
    Figure.call( this, x, y, color );
    this.radius = radius;
    this.draw = function(ctx){
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
    }
}


function Rect( x, y, w, h, color ) {
    Figure.call( this, x, y, color );
    this.w = w;
    this.h = h;
    this.draw = function( ctx ){
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.fillRect( this.x, this.y, this.w, this.h );
        ctx.stroke();
    }
}


function Canvas(sel){
	let ctx = document.querySelector(sel).getContext( "2d" );
	ctx.height = 900;
	ctx.width  = 500;
	this.add = ( ...objs ) => objs.forEach((obj) => {
		ctx.beginPath();
        obj.draw(ctx);
        ctx.closePath();
	});
}

let drawArea = new Canvas( '#canvasID' );

let line1 = new Line( 0, 100, 100, 0, 'red' );
let line2 = new Line( 0, 120, 120, 0, 'magenta' );
drawArea.add( line1, line2 );

let drawArea2 = new Canvas( '#canvasID2' );
let circle = new Circle( 100, 80, 60, 'red' );
drawArea2.add( circle );

let drawArea3 = new Canvas( '#canvasID3' );
let rect = new Rect( 160, 30, 60, 120, '#00FFFF' );
drawArea3.add( rect );
