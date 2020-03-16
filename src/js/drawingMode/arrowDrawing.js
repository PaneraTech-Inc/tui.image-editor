/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview ArrowDrawingMode class
 */
import DrawingMode from '../interface/drawingMode';
import consts from '../consts';

const {drawingModes} = consts;
const components = consts.componentNames;

/**
 * ArrowDrawingMode class
 * @class
 * @ignore
 */
class ArrowDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.ARROW_DRAWING);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @param {{width: ?number, color: ?string}} [options] - Brush width & color
    * @override
    */
    start(graphics, options) {
        const lineDrawing = graphics.getComponent(components.ARROW_DRAWING);
        lineDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const lineDrawing = graphics.getComponent(components.ARROW_DRAWING);
        lineDrawing.end();
    }
}

module.exports = ArrowDrawingMode;
