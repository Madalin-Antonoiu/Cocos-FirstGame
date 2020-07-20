// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight : 0,
        jumpDuration : 0,
        maxMoveSpeed : 0,
        acceleration : 0,
    },

    setJumpAction : function(){
        // Cocos "moveBy" API - duration, vector2 position( from 0 to jumpHeight in pixels). ease it out then
        let jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        let jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction); // run function setJumpAction on load, so it jumpts forever up and down
    },

    start () {

    },

    // update (dt) {},
});
