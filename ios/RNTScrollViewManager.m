//
//  RNTScrollViewManager.m
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNTScrollViewManager.h"

@implementation RNTScrollViewManager

RCT_EXPORT_MODULE(RNTScrollView)
RCT_EXPORT_VIEW_PROPERTY(showsVerticalScrollIndicator, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onScrolling, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(scrollEnabled, BOOL)


- (UIView *)view {
  RNTScrollView *scrollView = [[RNTScrollView alloc] init];
  scrollView.delegate = self;
  scrollView.scrollEnabled = YES;
  scrollView.contentSize = CGSizeMake(200, 2000);
  UIView *sub = [[UIView alloc] init];
  sub.frame = CGRectMake(100, 200, 50, 40);
  sub.backgroundColor = [UIColor greenColor];
  [scrollView addSubview:sub];
  return scrollView;
}

- (void)scrollViewDidScroll:(RNTScrollView *)scrollView {
  if (!scrollView.onScrolling) {
    return;
  }
  NSLog(@"scrollView's childs: %@", scrollView.subviews);
  NSLog(@"subview of RCTView: %@", scrollView.subviews[1].subviews);
  CGFloat x = scrollView.contentOffset.x;
  scrollView.onScrolling(@{
                        @"contentOffSet":@(x),
  });
}
@end
