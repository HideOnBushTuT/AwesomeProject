//
//  RCTConvert+MapKit.m
//  AwesomeProject
//
//  Created by shanbin cai on 2019/8/14.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RCTConvert+MapKit.h"

@implementation RCTConvert (MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end
