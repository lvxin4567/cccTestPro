export default class PlatformMgr {

    private batteryLevel: number = 0;

    static __Ins__: PlatformMgr = null;
    static getInstance() :PlatformMgr{
        if (PlatformMgr.__Ins__ == null) {
            console.log("创建单例")
            PlatformMgr.__Ins__ = new PlatformMgr();
        }
        return PlatformMgr.__Ins__;
    }


    constructor() {
        let KaNativeBridge: any = {};
        KaNativeBridge.setBatteryLevel = this.setBatteryLevel;
        window['KaNativeBridge'] = KaNativeBridge;
    }

    setBatteryLevel(level: number) {
        console.log("收到java传来的电量:",level);
        this.batteryLevel = level;
    }

    getBatteryLevel(): number {
        console.log("传出的电量",this.batteryLevel);
        return this.batteryLevel;
    }



}
