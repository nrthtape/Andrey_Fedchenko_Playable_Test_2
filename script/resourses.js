import {app, viewport, resources, Sprite} from "./app.js";

//Add sprite by config and return
export function getSpriteByConfig(config){

    config = Object.assign({
        position: [app.view.width / 2, app.view.height / 2],
        anchor: [0.5, 0.5],
        parent: app.stage,
        mask: false
    }, config);

    const atlas = resources["images/atlas.json"].textures;

    const sprite = new Sprite(atlas[config.name + ".png"]);
    sprite.x = config.position[0];
    sprite.y = config.position[1];
    sprite.anchor.x = config.anchor[0];
    sprite.anchor.y = config.anchor[1];
    sprite.mask = config.mask;

    config.parent.addChild(sprite);

    return sprite;
}

export class Layer {

    constructor(config){

        this.sprite = getSpriteByConfig(config);
    }
}