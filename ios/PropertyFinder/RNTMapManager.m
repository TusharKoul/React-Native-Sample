//
//  RNTMapManager.m
//  PropertyFinder
//
//  Created by Tushar Koul on 8/16/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>
#import "RCTConvert+MapKit.h"

@interface RNTMapManager : RCTViewManager

@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  // no need to set frame etc, ReactNative will override
  return [[MKMapView alloc] init];
}


RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)


// check the definition of this macro: json, view and defaultView are parameters of this method

// #define RCT_CUSTOM_VIEW_PROPERTY(name, type, viewClass)
// - (void)set_##name:(id)json forView:(viewClass *)view withDefaultView:(viewClass *)defaultView

// above #define will generate:
// - (void)set_region:(id)json forView:(MKMapView *)view withDefaultView:(MKMapView *)defaultView

// On React Native side -
//    let region = {
//      latitude: 37.48,
//      longitude: -122.16,
//      latitudeDelta: 0.1,
//      longitudeDelta: 0.1,
//    };
//    return <MapView style={styles.map} zoomEnabled={false} region={region}/>

// region json object is passed to below method, which converts the json into MKCoordinateRegion data type
// view parameter is of type MKMapView which then calls setRegion on itself

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  MKCoordinateRegion region;
  if (json) {
    // if props were passed, convert json to region object
    region = [RCTConvert MKCoordinateRegion:json];
  }
  else {
    region = defaultView.region;
  }
  
  [view setRegion:region animated:YES];
}

@end


