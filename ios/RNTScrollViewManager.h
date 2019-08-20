//
//  RNTScrollViewManager.h
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTViewManager.h>
#import <React/RCTScrollView.h>
#import "RNTScrollView.h"

@interface RNTScrollViewManager : RCTViewManager <UIScrollViewDelegate>
@property (nonatomic, strong) RNTScrollView *rootScrollView;
@end
