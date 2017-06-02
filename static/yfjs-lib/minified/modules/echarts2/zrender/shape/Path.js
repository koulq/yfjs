define("zrender2/shape/Path",["require","./Base","./util/PathProxy","../tool/util"],function(a){var b=a("./Base"),c=a("./util/PathProxy"),d=c.PathSegment,e=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])},f=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(e(a)*e(b))},g=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(f(a,b))},h=function(a){b.call(this,a)};return h.prototype={type:"path",buildPathArray:function(a,b,c){if(!a)return[];b=b||0,c=c||0;var e=a,f=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];e=e.replace(/-/g," -"),e=e.replace(/  /g," "),e=e.replace(/ /g,","),e=e.replace(/,,/g,",");var g;for(g=0;g<f.length;g++)e=e.replace(new RegExp(f[g],"g"),"|"+f[g]);var h=e.split("|"),i=[],j=0,k=0;for(g=1;g<h.length;g++){var l=h[g],m=l.charAt(0);l=l.slice(1),l=l.replace(new RegExp("e,-","g"),"e-");var n=l.split(",");n.length>0&&""===n[0]&&n.shift();for(var o=0;o<n.length;o++)n[o]=parseFloat(n[o]);for(;n.length>0&&!isNaN(n[0]);){var p,q,r,s,t,u,v,w,x=null,y=[],z=j,A=k;switch(m){case"l":j+=n.shift(),k+=n.shift(),x="L",y.push(j,k);break;case"L":j=n.shift(),k=n.shift(),y.push(j,k);break;case"m":j+=n.shift(),k+=n.shift(),x="M",y.push(j,k),m="l";break;case"M":j=n.shift(),k=n.shift(),x="M",y.push(j,k),m="L";break;case"h":j+=n.shift(),x="L",y.push(j,k);break;case"H":j=n.shift(),x="L",y.push(j,k);break;case"v":k+=n.shift(),x="L",y.push(j,k);break;case"V":k=n.shift(),x="L",y.push(j,k);break;case"C":y.push(n.shift(),n.shift(),n.shift(),n.shift()),j=n.shift(),k=n.shift(),y.push(j,k);break;case"c":y.push(j+n.shift(),k+n.shift(),j+n.shift(),k+n.shift()),j+=n.shift(),k+=n.shift(),x="C",y.push(j,k);break;case"S":p=j,q=k,r=i[i.length-1],"C"===r.command&&(p=j+(j-r.points[2]),q=k+(k-r.points[3])),y.push(p,q,n.shift(),n.shift()),j=n.shift(),k=n.shift(),x="C",y.push(j,k);break;case"s":p=j,q=k,r=i[i.length-1],"C"===r.command&&(p=j+(j-r.points[2]),q=k+(k-r.points[3])),y.push(p,q,j+n.shift(),k+n.shift()),j+=n.shift(),k+=n.shift(),x="C",y.push(j,k);break;case"Q":y.push(n.shift(),n.shift()),j=n.shift(),k=n.shift(),y.push(j,k);break;case"q":y.push(j+n.shift(),k+n.shift()),j+=n.shift(),k+=n.shift(),x="Q",y.push(j,k);break;case"T":p=j,q=k,r=i[i.length-1],"Q"===r.command&&(p=j+(j-r.points[0]),q=k+(k-r.points[1])),j=n.shift(),k=n.shift(),x="Q",y.push(p,q,j,k);break;case"t":p=j,q=k,r=i[i.length-1],"Q"===r.command&&(p=j+(j-r.points[0]),q=k+(k-r.points[1])),j+=n.shift(),k+=n.shift(),x="Q",y.push(p,q,j,k);break;case"A":s=n.shift(),t=n.shift(),u=n.shift(),v=n.shift(),w=n.shift(),z=j,A=k,j=n.shift(),k=n.shift(),x="A",y=this._convertPoint(z,A,j,k,v,w,s,t,u);break;case"a":s=n.shift(),t=n.shift(),u=n.shift(),v=n.shift(),w=n.shift(),z=j,A=k,j+=n.shift(),k+=n.shift(),x="A",y=this._convertPoint(z,A,j,k,v,w,s,t,u)}for(var B=0,C=y.length;B<C;B+=2)y[B]+=b,y[B+1]+=c;i.push(new d(x||m,y))}"z"!==m&&"Z"!==m||i.push(new d("z",[]))}return i},_convertPoint:function(a,b,c,d,e,h,i,j,k){var l=k*(Math.PI/180),m=Math.cos(l)*(a-c)/2+Math.sin(l)*(b-d)/2,n=-1*Math.sin(l)*(a-c)/2+Math.cos(l)*(b-d)/2,o=m*m/(i*i)+n*n/(j*j);o>1&&(i*=Math.sqrt(o),j*=Math.sqrt(o));var p=Math.sqrt((i*i*(j*j)-i*i*(n*n)-j*j*(m*m))/(i*i*(n*n)+j*j*(m*m)));e===h&&(p*=-1),isNaN(p)&&(p=0);var q=p*i*n/j,r=p*-j*m/i,s=(a+c)/2+Math.cos(l)*q-Math.sin(l)*r,t=(b+d)/2+Math.sin(l)*q+Math.cos(l)*r,u=g([1,0],[(m-q)/i,(n-r)/j]),v=[(m-q)/i,(n-r)/j],w=[(-1*m-q)/i,(-1*n-r)/j],x=g(v,w);return f(v,w)<=-1&&(x=Math.PI),f(v,w)>=1&&(x=0),0===h&&x>0&&(x-=2*Math.PI),1===h&&x<0&&(x+=2*Math.PI),[s,t,i,j,u,x,l,h]},buildPath:function(a,b){var c=b.path,d=b.x||0,e=b.y||0;b.pathArray=b.pathArray||this.buildPathArray(c,d,e);for(var f=b.pathArray,g=b.pointList=[],h=[],i=0,j=f.length;i<j;i++){"M"==f[i].command.toUpperCase()&&(h.length>0&&g.push(h),h=[]);for(var k=f[i].points,l=0,m=k.length;l<m;l+=2)h.push([k[l],k[l+1]])}h.length>0&&g.push(h);for(var i=0,j=f.length;i<j;i++){var n=f[i].command,k=f[i].points;switch(n){case"L":a.lineTo(k[0],k[1]);break;case"M":a.moveTo(k[0],k[1]);break;case"C":a.bezierCurveTo(k[0],k[1],k[2],k[3],k[4],k[5]);break;case"Q":a.quadraticCurveTo(k[0],k[1],k[2],k[3]);break;case"A":var o=k[0],p=k[1],q=k[2],r=k[3],s=k[4],t=k[5],u=k[6],v=k[7],w=q>r?q:r,x=q>r?1:q/r,y=q>r?r/q:1;a.translate(o,p),a.rotate(u),a.scale(x,y),a.arc(0,0,w,s,s+t,1-v),a.scale(1/x,1/y),a.rotate(-u),a.translate(-o,-p);break;case"z":a.closePath()}}},getRect:function(a){if(a.__rect)return a.__rect;var b;b="stroke"==a.brushType||"fill"==a.brushType?a.lineWidth||1:0;for(var c=Number.MAX_VALUE,d=Number.MIN_VALUE,e=Number.MAX_VALUE,f=Number.MIN_VALUE,g=a.x||0,h=a.y||0,i=a.pathArray||this.buildPathArray(a.path),j=0;j<i.length;j++)for(var k=i[j].points,l=0;l<k.length;l++)l%2==0?(k[l]+g<c&&(c=k[l]),k[l]+g>d&&(d=k[l])):(k[l]+h<e&&(e=k[l]),k[l]+h>f&&(f=k[l]));var m;return m=c===Number.MAX_VALUE||d===Number.MIN_VALUE||e===Number.MAX_VALUE||f===Number.MIN_VALUE?{x:0,y:0,width:0,height:0}:{x:Math.round(c-b/2),y:Math.round(e-b/2),width:d-c+b,height:f-e+b},a.__rect=m,m}},a("../tool/util").inherits(h,b),h});