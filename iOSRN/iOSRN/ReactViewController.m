//
//  ReactViewController.m
//  iOSRN
//
//  Created by zhangjikuan on 2017/2/10.
//  Copyright © 2017年 zhang_jk. All rights reserved.
//

#import "ReactViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
@interface ReactViewController ()

@end

@implementation ReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"iOS RN";
    NSString *strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL *jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"iOSRN"
                                                 initialProperties:nil launchOptions:nil];
    self.view = rootView;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
