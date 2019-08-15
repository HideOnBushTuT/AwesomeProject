//
//  TestCell.h
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/13.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTComponent.h>
#import <MapKit/MapKit.h>


@interface TestCell : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end


