//
//  RCTConvert+MapKit.m
//  PropertyFinder
//
//  Created by Tushar Koul on 8/18/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RCTConvert+MapKit.h"
#import <React/RCTConvert+CoreLocation.h>


@implementation RCTConvert(MapKit)

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
  CLLocationCoordinate2D center = [self CLLocationCoordinate2D:json];
  MKCoordinateSpan span = [self MKCoordinateSpan:json];
  
  return MKCoordinateRegionMake(center, span);  
}

@end
