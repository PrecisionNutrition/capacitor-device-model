package com.precisionnutrition.capacitordevicemodel;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import android.os.Build;
@NativePlugin()
public class DeviceModel extends Plugin {

    @PluginMethod()
    public void getInfo(PluginCall call) {
        JSObject ret = new JSObject();
        Boolean isSimulator = isSimulator();

        // Android handles notches different vs iOS, so this flag isn't needed
        ret.put("hasNotch", false);
        ret.put("isSimulator", isSimulator);
        ret.put("modelName", Build.MODEL);
        ret.put("platform", "android");

        call.resolve(ret);
    }

    private boolean isSimulator() {
        return (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
            || Build.FINGERPRINT.startsWith("generic")
            || Build.FINGERPRINT.startsWith("unknown")
            || Build.HARDWARE.contains("goldfish")
            || Build.HARDWARE.contains("ranchu")
            || Build.MODEL.contains("google_sdk")
            || Build.MODEL.contains("Emulator")
            || Build.MODEL.contains("Android SDK built for x86")
            || Build.MANUFACTURER.contains("Genymotion")
            || Build.PRODUCT.contains("sdk_google")
            || Build.PRODUCT.contains("google_sdk")
            || Build.PRODUCT.contains("sdk")
            || Build.PRODUCT.contains("sdk_x86")
            || Build.PRODUCT.contains("vbox86p")
            || Build.PRODUCT.contains("emulator")
            || Build.PRODUCT.contains("simulator");
    }
}
