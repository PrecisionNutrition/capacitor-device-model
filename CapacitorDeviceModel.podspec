
  Pod::Spec.new do |s|
    s.name = 'CapacitorDeviceModel'
    s.module_name = 'PrecisionNutrition'
    s.version = '0.10.0'
    s.summary = 'Capture additional information about a native device.'
    s.license = 'UNLICENSED'
    s.homepage = 'git@github.com:PrecisionNutrition/capacitor-device-model.git'
    s.author = 'Ben Borowski <ben.borowski@precisionnutrition.com>'
    s.source = { :git => 'git@github.com:PrecisionNutrition/capacitor-device-model.git', :tag => "v#{s.version}" }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
    s.dependency 'DeviceKit'
  end
