//
//  TestViewManager.m
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/13.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import "RCTConvert+MapKit.h"

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view {
  TestCell *cell = [[TestCell alloc] init];
  cell.delegate = self;
  return cell;
}

- (void)mapView:(TestCell *)mapView regionDidChangeAnimated:(BOOL)animated {
  if (!mapView.onRegionChange) {
    return;
  }
  NSLog(@"%s", __FUNCTION__);
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
                           @"region": @{
                               @"latitude": @(region.center.latitude),
                               @"longitude": @(region.center.longitude),
                               @"latitudeDelta": @(region.span.latitudeDelta),
                               @"longitudeDelta": @(region.span.longitudeDelta),
                               }
  });
}


@end
