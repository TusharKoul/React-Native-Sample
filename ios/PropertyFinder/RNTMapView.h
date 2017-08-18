//
//  RNTMapView.h
//  PropertyFinder
//
//  Created by Tushar Koul on 8/18/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end
