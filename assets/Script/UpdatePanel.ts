
const { ccclass, property } = cc._decorator;

@ccclass
export default class UpdatePanel extends cc.Component {

    @property(cc.Label)
    info: cc.Label = null;

    @property(cc.ProgressBar)
    fileProgress: cc.ProgressBar = null;

    @property(cc.Label)
    fileLabel: cc.Label = null;

    @property(cc.ProgressBar)
    byteProgress: cc.ProgressBar = null;

    @property(cc.Label)
    byteLabel: cc.Label = null;

    @property(cc.Node)
    close: cc.Node = null;
    @property(cc.Node)
    checkBtn: cc.Node = null;
    @property(cc.Node)
    retryBtn: cc.Node = null;
    @property(cc.Node)
    updateBtn: cc.Node = null;
    @property(cc.Label)
    versionLabel:cc.Label = null;

    onLoad() {
        this.close.on(cc.Node.EventType.TOUCH_END, () => {
            this.node.parent.active = false;
        })
    }
}
