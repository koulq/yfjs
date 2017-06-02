!function(a){var b=a.each,c=function(a,b){this.init(a,b)};a.extend(c.prototype,{init:function(a,b){this.options=a,this.chartOptions=b,this.columns=a.columns||this.rowsToColumns(a.rows)||[],this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())},getColumnDistribution:function(){var c=this.chartOptions,d=function(b){return(a.seriesTypes[b||"line"].prototype.pointArrayMap||[0]).length},e=c&&c.chart&&c.chart.type,f=[];b(c&&c.series||[],function(a){f.push(d(a.type||e))}),this.valueCount={global:d(e),individual:f}},dataFound:function(){this.parseTypes(),this.findHeaderRow(),this.parsed(),this.complete()},parseCSV:function(){var a,c=this,d=this.options,e=d.csv,f=this.columns,g=d.startRow||0,h=d.endRow||Number.MAX_VALUE,i=d.startColumn||0,j=d.endColumn||Number.MAX_VALUE,k=0;e&&(a=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(d.lineDelimiter||"\n"),b(a,function(a,e){var l,m=c.trim(a),n=0===m.indexOf("#"),o=""===m;e>=g&&e<=h&&!n&&!o&&(l=a.split(d.itemDelimiter||","),b(l,function(a,b){b>=i&&b<=j&&(f[b-i]||(f[b-i]=[]),f[b-i][k]=a)}),k+=1)}),this.dataFound())},parseTable:function(){var a,c=this.options,d=c.table,e=this.columns,f=c.startRow||0,g=c.endRow||Number.MAX_VALUE,h=c.startColumn||0,i=c.endColumn||Number.MAX_VALUE;d&&("string"==typeof d&&(d=document.getElementById(d)),b(d.getElementsByTagName("tr"),function(c,d){a=0,d>=f&&d<=g&&b(c.childNodes,function(b){("TD"===b.tagName||"TH"===b.tagName)&&a>=h&&a<=i&&(e[a]||(e[a]=[]),e[a][d-f]=b.innerHTML,a+=1)})}),this.dataFound())},parseGoogleSpreadsheet:function(){var a,b,c=this,d=this.options,e=d.googleSpreadsheetKey,f=this.columns,g=d.startRow||0,h=d.endRow||Number.MAX_VALUE,i=d.startColumn||0,j=d.endColumn||Number.MAX_VALUE;e&&jQuery.getJSON("https://spreadsheets.google.com/feeds/cells/"+e+"/"+(d.googleSpreadsheetWorksheet||"od6")+"/public/values?alt=json-in-script&callback=?",function(d){var e,k,l=d.feed.entry,m=l.length,n=0,o=0;for(k=0;k<m;k++)e=l[k],n=Math.max(n,e.gs$cell.col),o=Math.max(o,e.gs$cell.row);for(k=0;k<n;k++)k>=i&&k<=j&&(f[k-i]=[],f[k-i].length=Math.min(o,h-g));for(k=0;k<m;k++)e=l[k],a=e.gs$cell.row-1,(b=e.gs$cell.col-1)>=i&&b<=j&&a>=g&&a<=h&&(f[b-i][a-g]=e.content.$t);c.dataFound()})},findHeaderRow:function(){var a=0;b(this.columns,function(b){"string"!=typeof b[0]&&(a=null)}),this.headerRow=0},trim:function(a){return"string"==typeof a?a.replace(/^\s+|\s+$/g,""):a},parseTypes:function(){for(var a,b,c,d,e,f=this.columns,g=f.length;g--;)for(a=f[g].length;a--;)b=f[g][a],c=parseFloat(b),d=this.trim(b),d==c?(f[g][a]=c,c>31536e6?f[g].isDatetime=!0:f[g].isNumeric=!0):(e=this.parseDate(b),0!==g||"number"!=typeof e||isNaN(e)?f[g][a]=""===d?null:d:(f[g][a]=e,f[g].isDatetime=!0))},dateFormats:{"YYYY-mm-dd":{regex:"^([0-9]{4})-([0-9]{2})-([0-9]{2})$",parser:function(a){return Date.UTC(+a[1],a[2]-1,+a[3])}}},parseDate:function(a){var b,c,d,e,f=this.options.parseDate;if(f&&(b=f(a)),"string"==typeof a)for(c in this.dateFormats)d=this.dateFormats[c],(e=a.match(d.regex))&&(b=d.parser(e));return b},rowsToColumns:function(a){var b,c,d,e,f;if(a)for(f=[],c=a.length,b=0;b<c;b++)for(e=a[b].length,d=0;d<e;d++)f[d]||(f[d]=[]),f[d][b]=a[b][d];return f},parsed:function(){this.options.parsed&&this.options.parsed.call(this,this.columns)},complete:function(){var b,c,d,e,f,g,h,i,j=this.columns,k=this.options;if(k.complete){for(this.getColumnDistribution(),j.length>1&&(b=j.shift(),0===this.headerRow&&b.shift(),b.isDatetime?c="datetime":b.isNumeric||(c="category")),g=0;g<j.length;g++)0===this.headerRow&&(j[g].name=j[g].shift());for(e=[],g=0,i=0;g<j.length;i++){for(d=a.pick(this.valueCount.individual[i],this.valueCount.global),f=[],h=0;h<j[g].length;h++)f[h]=[b[h],void 0!==j[g][h]?j[g][h]:null],d>1&&f[h].push(void 0!==j[g+1][h]?j[g+1][h]:null),d>2&&f[h].push(void 0!==j[g+2][h]?j[g+2][h]:null),d>3&&f[h].push(void 0!==j[g+3][h]?j[g+3][h]:null),d>4&&f[h].push(void 0!==j[g+4][h]?j[g+4][h]:null);e[i]={name:j[g].name,data:f},g+=d}k.complete({xAxis:{type:c},series:e})}}}),a.Data=c,a.data=function(a,b){return new c(a,b)},a.wrap(a.Chart.prototype,"init",function(c,d,e){var f=this;d&&d.data?a.data(a.extend(d.data,{complete:function(g){d.series&&b(d.series,function(b,c){d.series[c]=a.merge(b,g.series[c])}),d=a.merge(g,d),c.call(f,d,e)}}),d):c.call(f,d,e)})}(Highcharts);