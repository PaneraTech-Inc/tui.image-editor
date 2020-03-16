import fabric from 'fabric';

const LineArrow = fabric.util.createClass(fabric.Line, {

    type: 'lineArrow',
    initialize(element, options) {
        if (!options) {
            options = {};
        }
        this.callSuper('initialize', element, options);
        this.options = options
        // this.canvas = canvas;
        // this.options = options;
    },

    // toObject: () => fabric.util.object.extend(this.callSuper('toObject')),

    _render(ctx) {
        this.ctx = ctx;
        this.callSuper('_render', ctx);
        const p = this.calcLinePoints();
        let xDiff = this.x2 - this.x1;
        let yDiff = this.y2 - this.y1;
        let angle = Math.atan2(yDiff, xDiff);
        this.drawArrow(angle, p.x2, p.y2, true);
        ctx.save();
        xDiff = -this.x2 + this.x1;
        yDiff = -this.y2 + this.y1;
        angle = Math.atan2(yDiff, xDiff);
        this.drawArrow(angle, p.x1, p.y1, false);
    },

    drawArrow(angle, xPos, yPos, head) {
        const arrowSize = this.options.strokeWidth*2;
        if (head) {
            this.ctx.translate(xPos, yPos);
            this.ctx.rotate(angle);
            this.ctx.beginPath();
            // Move 5px in front of line to start the arrow so it does not have the square line end showing in front (0,0)
            this.ctx.moveTo(10, 0);
            this.ctx.lineTo(-arrowSize, arrowSize);
            this.ctx.lineTo(-arrowSize, -arrowSize);
            this.ctx.closePath();
        }
        this.ctx.fillStyle = this.stroke;
        this.ctx.fill();
        this.ctx.restore();
    }
});

LineArrow.fromObject = (object, callback) => callback &&
    callback(new LineArrow([object.x1, object.y1, object.x2, object.y2], object));

LineArrow.async = true;

module.exports = LineArrow;
