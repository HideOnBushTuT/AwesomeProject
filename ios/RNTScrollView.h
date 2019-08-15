//
//  RNTScrollView.h
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@interface RNTScrollView : UIScrollView
@property (nonatomic, copy) RCTBubblingEventBlock onScrolling;
@end

