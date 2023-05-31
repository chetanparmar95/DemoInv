//
//  SimulatorCheckModule.swift
//  Demo1
//
//  Created by Chetan on 30/05/23.
//

import Foundation
import React

@objc(SimulatorCheckModule)
class SimulatorCheckModule: NSObject, RCTBridgeModule {
  
  static func moduleName() -> String! {
    return "SimulatorCheckModule"
  }
  
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc(isRunningOnSimulator:rejecter:)
  func isRunningOnSimulator(_ resolve: @escaping RCTPromiseResolveBlock, _ reject: @escaping RCTPromiseRejectBlock) {
    #if targetEnvironment(simulator)
    resolve(true)
    #else
    resolve(false)
    #endif
  }
}
