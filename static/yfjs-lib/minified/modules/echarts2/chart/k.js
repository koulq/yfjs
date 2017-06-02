define("echarts2/chart/k",["require","./base","../util/shape/Candle","../component/axis","../component/grid","../component/dataZoom","../config","../util/ecData","zrender2/tool/util","../chart"],function(a){function b(a,b,d,e,f){c.call(this,a,b,d,e,f),this.refresh(e)}var c=a("./base"),d=a("../util/shape/Candle");a("../component/axis"),a("../component/grid"),a("../component/dataZoom");var e=a("../config");e.k={zlevel:0,z:2,clickable:!0,hoverable:!0,legendHoverLink:!1,xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{color:"#fff",color0:"#00aa11",lineStyle:{width:1,color:"#ff3200",color0:"#00aa11"},label:{show:!1}},emphasis:{label:{show:!1}}}};var f=a("../util/ecData"),g=a("zrender2/tool/util");return b.prototype={type:e.CHART_TYPE_K,_buildShape:function(){var a=this.series;this.selectedMap={};for(var b,c={top:[],bottom:[]},d=0,f=a.length;d<f;d++)a[d].type===e.CHART_TYPE_K&&(a[d]=this.reformOption(a[d]),this.legendHoverLink=a[d].legendHoverLink||this.legendHoverLink,b=this.component.xAxis.getAxis(a[d].xAxisIndex),b.type===e.COMPONENT_TYPE_AXIS_CATEGORY&&c[b.getPosition()].push(d));for(var g in c)c[g].length>0&&this._buildSinglePosition(g,c[g]);this.addShapeList()},_buildSinglePosition:function(a,b){var c=this._mapData(b),d=c.locationMap,e=c.maxDataLength;if(0!==e&&0!==d.length){this._buildHorizontal(b,e,d);for(var f=0,g=b.length;f<g;f++)this.buildMark(b[f])}},_mapData:function(a){for(var b,c,d=this.series,e=this.component.legend,f=[],g=0,h=0,i=a.length;h<i;h++)b=d[a[h]],c=b.name,this.selectedMap[c]=!e||e.isSelected(c),this.selectedMap[c]&&f.push(a[h]),g=Math.max(g,b.data.length);return{locationMap:f,maxDataLength:g}},_buildHorizontal:function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n=this.series,o={},p=0,q=c.length;p<q;p++){d=c[p],e=n[d],f=e.xAxisIndex||0,g=this.component.xAxis.getAxis(f),j=e.barWidth||Math.floor(g.getGap()/2),m=e.barMaxWidth,m&&m<j&&(j=m),h=e.yAxisIndex||0,i=this.component.yAxis.getAxis(h),o[d]=[];for(var r=0,s=b;r<s&&null!=g.getNameByIndex(r);r++)k=e.data[r],"-"!==(l=this.getDataFromOption(k,"-"))&&4==l.length&&o[d].push([g.getCoordByIndex(r),j,i.getCoord(l[0]),i.getCoord(l[1]),i.getCoord(l[2]),i.getCoord(l[3]),r,g.getNameByIndex(r)])}this._buildKLine(a,o)},_buildKLine:function(a,b){for(var c,d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=this.series,v=0,w=a.length;v<w;v++)if(t=a[v],n=u[t],q=b[t],this._isLarge(q)&&(q=this._getLargePointList(q)),n.type===e.CHART_TYPE_K&&null!=q){o=n,c=this.query(o,"itemStyle.normal.lineStyle.width"),d=this.query(o,"itemStyle.normal.lineStyle.color"),f=this.query(o,"itemStyle.normal.lineStyle.color0"),g=this.query(o,"itemStyle.normal.color"),h=this.query(o,"itemStyle.normal.color0"),i=this.query(o,"itemStyle.emphasis.lineStyle.width"),j=this.query(o,"itemStyle.emphasis.lineStyle.color"),k=this.query(o,"itemStyle.emphasis.lineStyle.color0"),l=this.query(o,"itemStyle.emphasis.color"),m=this.query(o,"itemStyle.emphasis.color0");for(var x=0,y=q.length;x<y;x++)r=q[x],p=n.data[r[6]],o=p,s=r[3]<r[2],this.shapeList.push(this._getCandle(t,r[6],r[7],r[0],r[1],r[2],r[3],r[4],r[5],s?this.query(o,"itemStyle.normal.color")||g:this.query(o,"itemStyle.normal.color0")||h,this.query(o,"itemStyle.normal.lineStyle.width")||c,s?this.query(o,"itemStyle.normal.lineStyle.color")||d:this.query(o,"itemStyle.normal.lineStyle.color0")||f,s?this.query(o,"itemStyle.emphasis.color")||l||g:this.query(o,"itemStyle.emphasis.color0")||m||h,this.query(o,"itemStyle.emphasis.lineStyle.width")||i||c,s?this.query(o,"itemStyle.emphasis.lineStyle.color")||j||d:this.query(o,"itemStyle.emphasis.lineStyle.color0")||k||f))}},_isLarge:function(a){return a[0][1]<.5},_getLargePointList:function(a){for(var b=this.component.grid.getWidth(),c=a.length,d=[],e=0;e<b;e++)d[e]=a[Math.floor(c/b*e)];return d},_getCandle:function(a,b,c,e,g,h,i,j,k,l,m,n,o,p,q){var r=this.series,s=r[a],t=s.data[b],u=[t,s],v={zlevel:s.zlevel,z:s.z,clickable:this.deepQuery(u,"clickable"),hoverable:this.deepQuery(u,"hoverable"),style:{x:e,y:[h,i,j,k],width:g,color:l,strokeColor:n,lineWidth:m,brushType:"both"},highlightStyle:{color:o,strokeColor:q,lineWidth:p},_seriesIndex:a};return v=this.addLabel(v,s,t,c),f.pack(v,s,a,t,b,c),v=new d(v)},getMarkCoord:function(a,b){var c=this.series[a],d=this.component.xAxis.getAxis(c.xAxisIndex),e=this.component.yAxis.getAxis(c.yAxisIndex);return["string"!=typeof b.xAxis&&d.getCoordByIndex?d.getCoordByIndex(b.xAxis||0):d.getCoord(b.xAxis||0),"string"!=typeof b.yAxis&&e.getCoordByIndex?e.getCoordByIndex(b.yAxis||0):e.getCoord(b.yAxis||0)]},refresh:function(a){a&&(this.option=a,this.series=a.series),this.backupShapeList(),this._buildShape()},addDataAnimation:function(a,b){function c(){0===--o&&b&&b()}for(var d=this.series,e={},g=0,h=a.length;g<h;g++)e[a[g][0]]=a[g];for(var i,j,k,l,m,n,o=0,g=0,h=this.shapeList.length;g<h;g++)if(m=this.shapeList[g]._seriesIndex,e[m]&&!e[m][3]&&"candle"===this.shapeList[g].type){if(n=f.get(this.shapeList[g],"dataIndex"),l=d[m],e[m][2]&&n===l.data.length-1){this.zr.delShape(this.shapeList[g].id);continue}if(!e[m][2]&&0===n){this.zr.delShape(this.shapeList[g].id);continue}j=this.component.xAxis.getAxis(l.xAxisIndex||0).getGap(),i=e[m][2]?j:-j,k=0,o++,this.zr.animate(this.shapeList[g].id,"").when(this.query(this.option,"animationDurationUpdate"),{position:[i,k]}).done(c).start()}o||b&&b()}},g.inherits(b,c),a("../chart").define("k",b),b});