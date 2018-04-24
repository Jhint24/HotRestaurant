var tableData = require("../data/tableData");
var waitListData = require("../data/waitListData");

module.exports = function(app) {
    app.get("/api/tables", function(req, resp) {
        res.JSON(tableData);
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitListData);
      });

      app.post("/api/tables", function(req, res) {
        
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.JSON(true);
        }
        else {
          waitListData.push(req.body);
          res.JSON(false);
        }
      });

}

    
