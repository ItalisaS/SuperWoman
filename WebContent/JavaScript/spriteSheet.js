export default class SpriteSheet {
    constructor(image, width, height) {
        this.buffer = document.createElement('canvas');
        this.buffer.width = width;
        this.buffer.height = height;
        this.width = width;
        this.height = height;
        this.buffer.getContext('2d')
            .drawImage(image, 0, 0, width, height, 0, 0, width, height);
    }


    draw(context, x, y) {
        context.drawImage(this.buffer, x, y);
    }

}
