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
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fillStyle = this.color;
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


function Zigzag(color) {
    Line.call( this, 0, 0, 8, 8, color );
    this.draw = function( ctx ){
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.color;
        ctx.moveTo ( 0, 0 );
        for ( let i = 1; i < 50; i++ ) {
            let x2 = i * 8;
            let y2 = (i % 2) ? 8 : 0;
            ctx.lineTo(x2, y2);
        }
        ctx.stroke();
    };
}


function Canvas(elID){
	let ctx = document.getElementById(elID).getContext( "2d" );
    ctx.globalAlpha = 0.7;
	this.add = ( ...objs ) => objs.forEach((obj) => {
		ctx.beginPath();
        obj.draw(ctx);
        ctx.closePath();
	});
}

function drawFigure(){
	let line1 = new Line( 80, 50, 50, 100, 'red' );
    let line2 = new Line( 70, 50, 40, 100, 'black' );
	let circle1 = new Circle( 170, 60, 20, '#00ff00' );
    let circle2 = new Circle( 140, 70, 30, '#bfff00' );
	let rect1 = new Rect( 180, 100, 90, 50, '#00ffff' );
    let rect2 = new Rect( 240, 90, 90, 50, '#bf00ff' );
	let zigzag = new Zigzag( '#ff0040' );

	let drawArea = new Canvas( 'canvasID' );
	
    drawArea.add( line1, line2, circle1, circle2, rect1, rect2, zigzag );
}
