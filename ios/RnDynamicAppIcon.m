#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DynamicAppIcon, NSObject)

RCT_EXTERN_METHOD(changeIcon:(NSString *)iconName 
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
