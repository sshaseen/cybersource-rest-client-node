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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationAvs = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseProcessorInformationAvs model module.
   * @module model/PtsV2PaymentsPost201ResponseProcessorInformationAvs
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseProcessorInformationAvs</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseProcessorInformationAvs
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseProcessorInformationAvs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAvs} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAvs} The populated <code>PtsV2PaymentsPost201ResponseProcessorInformationAvs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('codeRaw')) {
        obj['codeRaw'] = ApiClient.convertToType(data['codeRaw'], 'String');
      }
    }
    return obj;
  }

  /**
   * AVS result code. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * AVS result code sent directly from the processor. Returned only when the processor returns this value. Important Do not use this field to evaluate the result of AVS. Use for debugging purposes only. 
   * @member {String} codeRaw
   */
  exports.prototype['codeRaw'] = undefined;



  return exports;
}));

