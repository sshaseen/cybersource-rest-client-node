/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse201EmbeddedCaptureLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse201EmbeddedCaptureLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse201EmbeddedCapture = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse201EmbeddedCaptureLinks);
  }
}(this, function(ApiClient, InlineResponse201EmbeddedCaptureLinks) {
  'use strict';




  /**
   * The InlineResponse201EmbeddedCapture model module.
   * @module model/InlineResponse201EmbeddedCapture
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse201EmbeddedCapture</code>.
   * @alias module:model/InlineResponse201EmbeddedCapture
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse201EmbeddedCapture</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201EmbeddedCapture} obj Optional instance to populate.
   * @return {module:model/InlineResponse201EmbeddedCapture} The populated <code>InlineResponse201EmbeddedCapture</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InlineResponse201EmbeddedCaptureLinks.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * The status of the submitted transaction.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse201EmbeddedCaptureLinks} _links
   */
  exports.prototype['_links'] = undefined;



  return exports;
}));

