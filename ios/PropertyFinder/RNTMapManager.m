//
//  RNTMapManager.m
//  PropertyFinder
//
//  Created by Tushar Koul on 8/16/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager

@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  // no need to set frame etc, ReactNative will override
  return [[MKMapView alloc] init];
}

@end
