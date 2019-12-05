
var query = 'SELECT "DeliveryNumber","Palette","ThingName" FROM "Palette_Managemnet.DB_Palette_Managemnet::tables.FPT_PaletteThing" ';
var oConnection=$.db.getConnection();
var oStatement=oConnection.prepareStatement(query);

oStatement.execute();
var oResultSet=oStatement.getResultSet();
var data={};
var result = {
   records : [ ] 
};
 while (oResultSet.next()) { 
data = {
"DeliveryNumber":oResultSet.getString(1),
"Palette":oResultSet.getString(2),
"ThingName":oResultSet.getString(3) };
result.records.push(data);
}
oResultSet.close();
oStatement.close();
oConnection.close();
$.response.contentType = "application/json; charset=UTF-8";
$.response.setBody(JSON.stringify(result));
$.response.status = $.net.http.OK;
