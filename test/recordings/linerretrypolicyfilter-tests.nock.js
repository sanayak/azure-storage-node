// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'TableEndpoint=http://yaxiatest.table.testch1.dnsdemo4.com/;QueueEndpoint=http://yaxiatest.queue.testch1.dnsdemo4.com/;FileEndpoint=http://yaxiatest.file.testch1.dnsdemo4.com/;BlobEndpoint=http://yaxiatest.blob.testch1.dnsdemo4.com/;AccountName=yaxiatest;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'linearretry1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9ec19701-0002-0000-2855-53daa2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'linearretry1\')',
  date: 'Sat, 28 Feb 2015 12:55:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableAlreadyExists</code><message xml:lang=\"en-US\">The table specified already exists.\nRequestId:8a0453ba-0002-0001-0a55-53bf9a000000\nTime:2015-02-28T12:55:54.3401701Z</message><innererror><message>Table 'linearretry1' already exists</message><type>Microsoft.Cis.Services.Nephos.Common.Storage.ContainerAlreadyExistsException</type><stacktrace>   at Microsoft.UtilityComputing.UtilityTableDataContext.ExecuteOnUtilityTable(ChangeDescription changeDescription) in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableDataContext.cs:line 709&#xD;\n   at System.Data.Services.DataService`1.HandleNonBatchRequest(RequestDescription description)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8a0453ba-0002-0001-0a55-53bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Sat, 28 Feb 2015 12:55:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/Tables(%27linearretry1%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"http://yaxiatest.table.testch1.dnsdemo4.com/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>http://yaxiatest.table.testch1.dnsdemo4.com/Tables('linearretry1')</id><category term=\"yaxiatest.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry1')\" /><title /><updated>2015-02-28T12:55:53Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>linearretry1</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '16030fba-0002-0002-5355-5310d2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:55:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f7bb3c20-0002-0003-6155-5375ea000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:55:54 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'linearretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '76be1329-0002-0004-3a55-534e43000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'linearretry2\')',
  date: 'Sat, 28 Feb 2015 12:55:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9ec19709-0002-0000-2b55-53daa2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:55:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableBeingDeleted</code><message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:8a045444-0002-0001-1155-53bf9a000000\nTime:2015-02-28T12:55:57.0421701Z</message><innererror><message>Exception of type 'Microsoft.Cis.Services.Nephos.Common.Storage.ContainerBeingDeletedException' was thrown.</message><type>Microsoft.Cis.Services.Nephos.Common.Storage.ContainerBeingDeletedException</type><stacktrace>   at Microsoft.Cis.Services.Nephos.Common.Storage.ExceptionManager.ReThrowIfXStoreException(Exception e) in x:\\btsdx\\410604\\services\\xstore\\XFE\\providers\\xstore\\Blob\\ExceptionManager.cs:line 478&#xD;\n   at Microsoft.Cis.Services.Nephos.Common.Storage.StorageAccount.CreateTableContainer(String tableName, Nullable`1 expiryTime, Byte[] serviceMetadata, Byte[] applicationMetadata) in x:\\btsdx\\410604\\services\\xstore\\XFE\\providers\\xstore\\Blob\\StorageAccount.cs:line 947&#xD;\n   at Microsoft.UtilityComputing.UtilityTableDataContext.ExecuteOnUtilityTable(ChangeDescription changeDescription) in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableDataContext.cs:line 722&#xD;\n   at System.Data.Services.DataService`1.HandleNonBatchRequest(RequestDescription description)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace><internalexception><message>\"Container is being deleted.\"</message><type>Microsoft.XStore.XContainerException</type><stacktrace>   at Microsoft.XStore.XBlob.XContainer.CreateContainerInTable(Nullable`1 expiryTime, Byte[] serviceMetadata, Byte[] applicationMetadata, TimeSpan timeout) in x:\\btsdx\\410604\\services\\xstore\\xtable\\api\\managed\\xcontainer.cpp:line 651&#xD;\n   at Microsoft.XStore.XBlob.XStoreAccount.CreateTableContainer(String containerName, Nullable`1 expiryTime, Byte[] serviceMetadata, Byte[] applicationMetadata) in x:\\btsdx\\410604\\services\\xstore\\xtable\\api\\managed\\xblobstore.cpp:line 4366&#xD;\n   at Microsoft.Cis.Services.Nephos.Common.Storage.StorageAccount.CreateTableContainer(String tableName, Nullable`1 expiryTime, Byte[] serviceMetadata, Byte[] applicationMetadata) in x:\\btsdx\\410604\\services\\xstore\\XFE\\providers\\xstore\\Blob\\StorageAccount.cs:line 938</stacktrace></internalexception></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8a045444-0002-0001-1155-53bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Sat, 28 Feb 2015 12:55:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'linearretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9ec19731-0002-0000-3855-53daa2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'linearretry2\')',
  date: 'Sat, 28 Feb 2015 12:56:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/Tables(%27linearretry2%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"http://yaxiatest.table.testch1.dnsdemo4.com/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>http://yaxiatest.table.testch1.dnsdemo4.com/Tables('linearretry2')</id><category term=\"yaxiatest.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('linearretry2')\" /><title /><updated>2015-02-28T12:56:28Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>linearretry2</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8a045998-0002-0001-4655-53bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '160314f6-0002-0002-6d55-5310d2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:27 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:f7bb3c44-0002-0003-6955-5375ea000000\nTime:2015-02-28T12:56:29.0926189Z</message><innererror><message>Resource not found.</message><type>System.Data.Services.DataServiceException</type><stacktrace>   at Microsoft.UtilityComputing.UtilityTableUpdatable.GetTable(ChangeDescription changeDescription) in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 258&#xD;\n   at Microsoft.UtilityComputing.UtilityTableUpdatable.SaveChanges() in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 209&#xD;\n   at System.Data.Services.DataService`1.HandleNonBatchRequest(RequestDescription description)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f7bb3c44-0002-0003-6955-5375ea000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:76be1351-0002-0004-4655-534e43000000\nTime:2015-02-28T12:56:29.2042780Z</message><innererror><message>Resource not found.</message><type>System.Data.Services.DataServiceException</type><stacktrace>   at Microsoft.UtilityComputing.UtilityTableUpdatable.GetTable(ChangeDescription changeDescription) in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 258&#xD;\n   at Microsoft.UtilityComputing.UtilityTableUpdatable.SaveChanges() in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 209&#xD;\n   at System.Data.Services.DataService`1.HandleNonBatchRequest(RequestDescription description)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '76be1351-0002-0004-4655-534e43000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:9ec19736-0002-0000-3955-53daa2000000\nTime:2015-02-28T12:56:30.3346292Z</message><innererror><message>Resource not found.</message><type>System.Data.Services.DataServiceException</type><stacktrace>   at Microsoft.UtilityComputing.UtilityTableUpdatable.GetTable(ChangeDescription changeDescription) in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 258&#xD;\n   at Microsoft.UtilityComputing.UtilityTableUpdatable.SaveChanges() in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 209&#xD;\n   at System.Data.Services.DataService`1.HandleNonBatchRequest(RequestDescription description)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9ec19736-0002-0000-3955-53daa2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:8a045a02-0002-0001-2f55-53bf9a000000\nTime:2015-02-28T12:56:31.0891701Z</message><innererror><message>Resource not found.</message><type>System.Data.Services.DataServiceException</type><stacktrace>   at Microsoft.UtilityComputing.UtilityTableUpdatable.GetTable(ChangeDescription changeDescription) in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 258&#xD;\n   at Microsoft.UtilityComputing.UtilityTableUpdatable.SaveChanges() in x:\\btsdx\\410604\\services\\xstore\\XTable\\Api\\Managed2\\UtilityTableUpdatable.cs:line 209&#xD;\n   at System.Data.Services.DataService`1.HandleNonBatchRequest(RequestDescription description)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8a045a02-0002-0001-2f55-53bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/Tables(%27linearretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:16031558-0002-0002-4d55-5310d2000000\nTime:2015-02-28T12:56:29.8239661Z</message><innererror><message>Resource not found for the segment 'Tables'.</message><type>System.Data.Services.DataServiceException</type><stacktrace>   at System.Data.Services.Providers.DataServiceExecutionProviderWrapper.GetSingleResultFromRequest(SegmentInfo segmentInfo)&#xD;\n   at System.Data.Services.DataService`1.CompareETagAndWriteResponse(RequestDescription description, IDataService dataService, IODataResponseMessage responseMessage)&#xD;\n   at System.Data.Services.DataService`1.SerializeResponseBody(RequestDescription description, IDataService dataService, IODataResponseMessage responseMessage)&#xD;\n   at System.Data.Services.DataService`1.HandleRequest()</stacktrace></innererror></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '16031558-0002-0002-4d55-5310d2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 28 Feb 2015 12:56:29 GMT' });
 return result; }]];