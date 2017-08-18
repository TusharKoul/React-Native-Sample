//
//  RCTConvert+MapKit.h
//  PropertyFinder
//
//  Created by Tushar Koul on 8/18/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTConvert.h>
#import <MapKit/MapKit.h>

@interface RCTConvert (MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end
