//
//  CalendarManager.m
//  PropertyFinder
//
//  Created by Tushar Koul on 8/15/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation CalendarManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  RCTLogInfo(@"DETAILS %@", details);
  RCTLogInfo(@"Pretending to create an event %@ at %@ occuring on %@", name, location, time);
}

RCT_REMAP_METHOD(addEventWithLocation, addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}


@end
