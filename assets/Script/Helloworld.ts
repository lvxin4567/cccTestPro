const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start() {
        // init logic
        this.label.string = this.text;
    }

    onLoad() {
        let index = 0;
        if (cc.sys.isNative) {
            var serchPath = jsb.fileUtils.getWritablePath();
            console.log(index++, serchPath);
            console.log(index++, jsb.fileUtils.fullPathForFilename(serchPath));
            // if(jsb.fileUtils.isFileExist(serchPath)){
            //     console.log(index++ ,serchPath);
            // }

            var baseName = "test.json";

            jsb.fileUtils.writeStringToFile("这是我测试的数据", serchPath + '/' + baseName);

            var baseDir = "test";
            var newDir = serchPath + '/' + baseDir
            jsb.fileUtils.createDirectory(newDir);
            if (jsb.fileUtils.isDirectoryExist(newDir)) {
                console.log(index++)
            }

            //--------------------------------方法签名----------------------------------------
            //方法签名稍微有一点复杂，最简单的方法签名是 ()V，它表示一个没有参数没有返回值的方法。其他一些
            // 例子：
            // (I)V 表示参数为一个int，没有返回值的方法
            // (I)I 表示参数为一个int，返回值为int的方法
            // (IF)Z 表示参数为一个int和一个float，返回值为boolean的方法

            if(cc.sys.os == cc.sys.OS_ANDROID){
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "hello", "(Ljava/lang/String)V", "this is a message from js");

                // 调用第一个sum方法
                var result = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "sum", "(III)I", 3, 7 , 10);
                console.log(index++ , result)
    
                // 调用第二个sum方法
                var result = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "sum", "(I)I", 3);
                console.log(index++ , result)
                //--------------------------------------------------------------------------------
                // 另外有一点需要注意的就是，在 Android 应用中，cocos 引擎的渲染和 JS 的逻辑是在 GL 线程中进行的，
                // 而 Android 本身的 UI 更新是在 App 的 UI 线程进行的，所以如果我们在 JS 中调用的 Java 方法有任何刷新 UI 的操作，都需要在 UI 线程进行。
    
                // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");

                var batteryLevel = cc.sys.getBatteryLevel();
                console.log(index++ , batteryLevel);

                var netWork = cc.sys.getNetworkType();
                console.log(index++ , netWork);

            }
        }
    }


    clickEvent(e){
        console.log(e);
        if(cc.sys.os == cc.sys.OS_ANDROID){
            cc.sys.openURL("www.baidu.com");
        }
    }
}
