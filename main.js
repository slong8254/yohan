body {
    font-size: 15pt;
}console.log('Hello World!');

window.onload = function() {


    $.ajax({
      url: 'https://api.mlab.com/api/1/databases/yohandata/collections/company?apiKey=FDWFnY7QcOrnh7yow7rYNOwJXoxIko94',
      data: JSON.stringify([{ "_id": { "$oid": "5beac6c01f6e4f3cfd44aa5a" } }]),
      type: "PUT",
      contentType: "application/json"
    }).done(function(data) {
      console.log(data);
    });
    $.ajax({
      url: 'https://api.mlab.com/api/1/databases/yohandata/collections/company?q={"_id": {"$oid": "5beac6c01f6e4f3cfd44aa5a"}}&apiKey=FDWFnY7QcOrnh7yow7rYNOwJXoxIko94',
      data: JSON.stringify({}), //use json
      type: "GET",
      contentType: "application/json"
    }).done(function(data) {
      console.log(data);
    });
    //find docs & query

    $.ajax({
      url: 'https://api.mlab.com/api/1/databases/yohandata/collections/company?q={"_id": {"$oid": "5beac6c01f6e4f3cfd44aa5a"}}&apiKey=FDWFnY7QcOrnh7yow7rYNOwJXoxIko94',
      data: JSON.stringify({ "$set": { "name": 1 } }),
      type: "PUT",
      contentType: "application/json"
    }).done(function(data) {
      console.log(da