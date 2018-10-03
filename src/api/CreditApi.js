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
    define(['ApiClient', 'model/CreateCreditRequest', 'model/InlineResponse2006', 'model/InlineResponse2014', 'model/InlineResponse4003', 'model/InlineResponse502'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateCreditRequest'), require('../model/InlineResponse2006'), require('../model/InlineResponse2014'), require('../model/InlineResponse4003'), require('../model/InlineResponse502'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreditApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateCreditRequest, root.CyberSource.InlineResponse2006, root.CyberSource.InlineResponse2014, root.CyberSource.InlineResponse4003, root.CyberSource.InlineResponse502);
  }
}(this, function(ApiClient, CreateCreditRequest, InlineResponse2006, InlineResponse2014, InlineResponse4003, InlineResponse502) {
  'use strict';

  /**
   * Credit service.
   * @module api/CreditApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CreditApi. 
   * @alias module:api/CreditApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCredit operation.
     * @callback module:api/CreditApi~createCreditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a Credit
     * POST to the credit resource to credit funds to a specified credit card.
     * @param {module:model/CreateCreditRequest} createCreditRequest 
     * @param {module:api/CreditApi~createCreditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2014}
     */
    this.createCredit = function(createCreditRequest, callback) {
      var postBody = createCreditRequest;

      // verify the required parameter 'createCreditRequest' is set
      if (createCreditRequest === undefined || createCreditRequest === null) {
        throw new Error("Missing the required parameter 'createCreditRequest' when calling createCredit");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2014;

      return this.apiClient.callApi(
        '/pts/v2/credits/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredit operation.
     * @callback module:api/CreditApi~getCreditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Credit
     * Include the credit ID in the GET request to return details of the credit.
     * @param {String} id The credit ID returned from a previous stand-alone credit request. 
     * @param {module:api/CreditApi~getCreditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.getCredit = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCredit");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/pts/v2/credits/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));