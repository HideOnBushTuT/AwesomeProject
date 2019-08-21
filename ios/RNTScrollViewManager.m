//
//  RNTScrollViewManager.m
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNTScrollViewManager.h"

@interface RNTScrollViewManager ()
@property (nonatomic, assign) BOOL canParentViewScroll;
@property (nonatomic, assign) BOOL canChildViewScroll;
@property (nonatomic, assign) CGFloat headerStickyHeight;
@end


@implementation RNTScrollViewManager

RCT_EXPORT_MODULE(RNTScrollView)
RCT_EXPORT_VIEW_PROPERTY(showsVerticalScrollIndicator, BOOL)
RCT_EXPORT_VIEW_PROPERTY(contentSize, CGSize)
RCT_EXPORT_VIEW_PROPERTY(onScrolling, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(scrollEnabled, BOOL)


- (UIView *)view {
  RNTScrollView *scrollView = [[RNTScrollView alloc] init];
  scrollView.delegate = self;
  scrollView.scrollEnabled = YES;
//  scrollView.contentSize = CGSizeMake(200, 2000);
  self.rootScrollView = scrollView;
  self.headerStickyHeight = 100.0f;
  return scrollView;
}

- (void)scrollViewDidScroll:(RNTScrollView *)scrollView {
  if (!scrollView.onScrolling) {
    return;
  }
  RCTScrollView *childScrollView = scrollView.subviews[1];
  scrollView.onScrolling(@{@"contentOffSet":@(scrollView.contentOffset.y)});
  
  
  
  
  
  
  
  
  
  
//  if (scrollView == self.rootScrollView) {
//    if (!self.canParentViewScroll) {
//      [scrollView setContentOffset:CGPointMake(0, self.headerStickyHeight) animated:NO];
//      self.canChildViewScroll = YES;
//    } else if (scrollView.contentOffset.y > self.headerStickyHeight) {
//      [scrollView setContentOffset:CGPointMake(0, self.headerStickyHeight) animated:NO];
//      self.canParentViewScroll = NO;
//      self.canChildViewScroll = YES;
//    }
//  } else {
//    if (!self.canChildViewScroll) {
//      [childScrollView.scrollView setContentOffset:CGPointMake(0, 0) animated:NO];
//    } else if (scrollView.contentOffset.y <= 0) {
//      self.canChildViewScroll = NO;
//      self.canParentViewScroll = YES;
//    }
//  }
}



@end
