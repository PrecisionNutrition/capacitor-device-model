  Pod::Spec.new do |s|
    s.name = 'PrecisionNutritionCapacitorDeviceModel'
    s.version = '0.17.0-rc.0'
    s.summary = 'Capture additional information about a native device.'
    s.license = 'MIT'
    s.homepage = 'https://precisionnutrition.com'
    s.author = 'Ben Borowski <ben.borowski@precisionnutrition.com>'
    s.source = { :git => 'https://github.com/PrecisionNutrition/capacitor-device-model.git', :tag => "#{s.version}" }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '12.0'
    s.dependency 'Capacitor'
    s.dependency 'DeviceKit'
  end
