!function(a){function b(){return!!this.points.length}function c(){var a=this;a.hasData()?a.hideNoData():a.showNoData()}var d=a.seriesTypes,e=a.Chart.prototype,f=a.getOptions(),g=a.extend;g(f.lang,{noData:"No data to display"}),f.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},attr:{},style:{fontWeight:"bold",fontSize:"12px",color:"#60606a"}},d.pie.prototype.hasData=b,d.gauge&&(d.gauge.prototype.hasData=b),d.waterfall&&(d.waterfall.prototype.hasData=b),a.Series.prototype.hasData=function(){return void 0!==this.dataMax&&void 0!==this.dataMin},e.showNoData=function(a){var b=this,c=b.options,d=a||c.lang.noData,e=c.noData;b.noDataLabel||(b.noDataLabel=b.renderer.label(d,0,0,null,null,null,null,null,"no-data").attr(e.attr).css(e.style).add(),b.noDataLabel.align(g(b.noDataLabel.getBBox(),e.position),!1,"plotBox"))},e.hideNoData=function(){var a=this;a.noDataLabel&&(a.noDataLabel=a.noDataLabel.destroy())},e.hasData=function(){for(var a=this,b=a.series,c=b.length;c--;)if(b[c].hasData()&&!b[c].options.isInternal)return!0;return!1},e.callbacks.push(function(b){a.addEvent(b,"load",c),a.addEvent(b,"redraw",c)})}(Highcharts);