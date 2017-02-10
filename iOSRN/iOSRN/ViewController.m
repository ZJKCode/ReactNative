//
//  ViewController.m
//  iOSRN
//
//  Created by zhangjikuan on 2017/2/9.
//  Copyright © 2017年 zhang_jk. All rights reserved.
//

#import "ViewController.h"
#import "ReactViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    self.title = @"iOS OC";
    UIButton *showReact = [UIButton buttonWithType:UIButtonTypeCustom];
    showReact.frame = CGRectMake(100, 100, 100, 100);
    [showReact setTitle:@"showReact" forState:UIControlStateNormal];
    [showReact setBackgroundColor:[UIColor redColor]];
    [showReact addTarget:self
                  action:@selector(showReact)
        forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:showReact];
}

- (void)showReact {
    ReactViewController *react = [[ReactViewController alloc] init];
 
    [self.navigationController pushViewController:react
                                         animated:YES];
}

@end
