//
//  RCTConvert+MapKit.h
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTConvert.h>
#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

@interface RCTConvert (MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

