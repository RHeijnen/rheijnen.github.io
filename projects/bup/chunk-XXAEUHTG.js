import{Da as Gh,Ea as Wh,Fa as zr,Ga as Xh,Ia as Tl,Ja as wl,Ka as Al,a as Ae,b as Cn,c as dn,ma as El,va as Hr}from"./chunk-6SELWNYU.js";var qa="183";var Du=0,mc=1,Lu=2;var Xi=1,Nu=2,Us=3,tn=0,Yt=1,Gt=2,zn=0,Ln=1,Vn=2,gc=3,xc=4,Fu=5;var gi=100,Ou=101,Uu=102,ku=103,Bu=104,Hu=200,zu=201,Vu=202,Gu=203,ya=204,_a=205,Wu=206,Xu=207,qu=208,Yu=209,ju=210,$u=211,Ku=212,Zu=213,Ju=214,va=0,ba=1,Sa=2,Ni=3,Ma=4,Ea=5,Ta=6,wa=7,yc=0,Qu=1,ed=2,Tn=0,_c=1,vc=2,bc=3,Sc=4,Mc=5,Ec=6,Tc=7,tc="attached",td="detached",nc=300,Mi=301,qi=302,Ya=303,ja=304,Rr=306,Sn=1e3,Ot=1001,Ss=1002,Ye=1003,$a=1004;var Yi=1005;var _t=1006,ks=1007;var wn=1008;var Zt=1009,wc=1010,Ac=1011,Bs=1012,Ka=1013,An=1014,ln=1015,Gn=1016,Za=1017,Ja=1018,Hs=1020,Rc=35902,Cc=35899,Ic=1021,Pc=1022,cn=1023,Nn=1026,Ei=1027,Qa=1028,eo=1029,ji=1030,to=1031;var no=1033,Cr=33776,Ir=33777,Pr=33778,Dr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,fo=37490,po=37491,mo=37808,go=37809,xo=37810,yo=37811,_o=37812,vo=37813,bo=37814,So=37815,Mo=37816,Eo=37817,To=37818,wo=37819,Ao=37820,Ro=37821,Co=36492,Io=36494,Po=36495,Do=36283,Lo=36284,No=36285,Fo=36286;var Fi=2300,Oi=2301,xa=2302,ic=2303,sc=2400,rc=2401,ac=2402,nd=2500;var Dc=0,Lr=1,zs=2,id=3200;var Oo=0,sd=1,oi="",ut="srgb",Ut="srgb-linear",or="linear",Je="srgb";var Li=7680;var oc=519,rd=512,ad=513,od=514,Uo=515,ld=516,cd=517,ko=518,hd=519,Aa=35044;var Lc="300 es",vn=2e3,Ms=2001;function Mf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ef(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Es(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ud(){let a=Es("canvas");return a.style.display="block",a}var qh={},Ts=null;function lr(...a){let e="THREE."+a.shift();Ts?Ts("log",e,...a):console.log(e,...a)}function dd(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ee(...a){a=dd(a);let e="THREE."+a.shift();if(Ts)Ts("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Re(...a){a=dd(a);let e="THREE."+a.shift();if(Ts)Ts("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function cr(...a){let e=a.join(" ");e in qh||(qh[e]=!0,Ee(...a))}function fd(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var pd={[va]:ba,[Sa]:Ta,[Ma]:wa,[Ni]:Ea,[ba]:va,[Ta]:Sa,[wa]:Ma,[Ea]:Ni},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,rr=Math.PI/180,Ui=180/Math.PI;function bn(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[a&255]+Bt[a>>8&255]+Bt[a>>16&255]+Bt[a>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function qe(a,e,t){return Math.max(e,Math.min(t,a))}function Nc(a,e){return(a%e+e)%e}function Tf(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function wf(a,e,t){return a!==e?(t-a)/(e-a):0}function ar(a,e,t){return(1-t)*a+t*e}function Af(a,e,t,n){return ar(a,e,1-Math.exp(-t*n))}function Rf(a,e=1){return e-Math.abs(Nc(a,e*2)-e)}function Cf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function If(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Pf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Df(a,e){return a+Math.random()*(e-a)}function Lf(a){return a*(.5-Math.random())}function Nf(a){a!==void 0&&(Yh=a);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ff(a){return a*rr}function Of(a){return a*Ui}function Uf(a){return(a&a-1)===0&&a!==0}function kf(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Bf(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Hf(a,e,t,n,i){let s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*h,o*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function it(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Fc={DEG2RAD:rr,RAD2DEG:Ui,generateUUID:bn,clamp:qe,euclideanModulo:Nc,mapLinear:Tf,inverseLerp:wf,lerp:ar,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:If,randInt:Pf,randFloat:Df,randFloatSpread:Lf,seededRandom:Nf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:Uf,ceilPowerOfTwo:kf,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:Hf,normalize:it,denormalize:_n},Pe=class a{constructor(e=0,t=0){a.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[r+0],f=s[r+1],g=s[r+2],x=s[r+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let y=Math.acos(p),b=Math.sin(y);m=Math.sin(m*y)/b,o=Math.sin(o*y)/b,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class a{constructor(e=0,t=0,n=0){a.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-s*i),d=2*(s*n-r*t);return this.x=t+l*c+r*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new I,jh=new nn,ke=class a{constructor(e,t,n,i,s,r,o,l,c){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c)}set(e,t,n,i,s,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],p=i[3],m=i[6],y=i[1],b=i[4],_=i[7],T=i[2],w=i[5],A=i[8];return s[0]=r*x+o*y+l*T,s[3]=r*p+o*b+l*w,s[6]=r*m+o*_+l*A,s[1]=c*x+h*y+d*T,s[4]=c*p+h*b+d*w,s[7]=c*m+h*_+d*A,s[2]=u*x+f*y+g*T,s[5]=u*p+f*b+g*w,s[8]=u*m+f*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*s,f=c*s-r*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*r)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new ke,$h=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let a={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Je&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Je&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Ut]:{primaries:e,whitePoint:n,transfer:or,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),a}var Xe=zf();function ni(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function bs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var is,Ra=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Es("canvas")),is.width=e.width,is.height=e.height;let i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ni(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vf=0,ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Il(i[r].image)):s.push(Il(i[r]))}else s=Il(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Il(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ra.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var Gf=0,Pl=new I,Wt=(()=>{class a extends ii{constructor(t=a.DEFAULT_IMAGE,n=a.DEFAULT_MAPPING,i=Ot,s=Ot,r=_t,o=wn,l=cn,c=Zt,h=a.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=bn(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ee(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ee(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sn:t.x=t.x-Math.floor(t.x);break;case Ot:t.x=t.x<0?0:1;break;case Ss:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sn:t.y=t.y-Math.floor(t.y);break;case Ot:t.y=t.y<0?0:1;break;case Ss:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return a.DEFAULT_IMAGE=null,a.DEFAULT_MAPPING=nc,a.DEFAULT_ANISOTROPY=1,a})(),dt=class a{constructor(e=0,t=0,n=0,i=1){a.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(f+1)/2,T=(m+1)/2,w=(h+u)/4,A=(d+x)/4,v=(g+p)/4;return b>_&&b>T?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=A/n):_>T?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=v/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Wt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ws(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Ca{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},hr=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ne=class a{constructor(e,t,n,i,s,r,o,l,c,h,d,u,f,g,x,p){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c,h,d,u,f,g,x,p)}set(e,t,n,i,s,r,o,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),r=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=r*h,f=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=r*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=x-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let u=r*h,f=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let u=r*l,f=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=r*l,f=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wf,e,Xf)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),hi.crossVectors(n,Qt),hi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),hi.crossVectors(n,Qt)),hi.normalize(),Vr.crossVectors(Qt,hi),i[0]=hi.x,i[4]=Vr.x,i[8]=Qt.x,i[1]=hi.y,i[5]=Vr.y,i[9]=Qt.y,i[2]=hi.z,i[6]=Vr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],b=n[7],_=n[11],T=n[15],w=i[0],A=i[4],v=i[8],M=i[12],k=i[1],R=i[5],F=i[9],U=i[13],G=i[2],B=i[6],H=i[10],D=i[14],j=i[3],Z=i[7],ue=i[11],me=i[15];return s[0]=r*w+o*k+l*G+c*j,s[4]=r*A+o*R+l*B+c*Z,s[8]=r*v+o*F+l*H+c*ue,s[12]=r*M+o*U+l*D+c*me,s[1]=h*w+d*k+u*G+f*j,s[5]=h*A+d*R+u*B+f*Z,s[9]=h*v+d*F+u*H+f*ue,s[13]=h*M+d*U+u*D+f*me,s[2]=g*w+x*k+p*G+m*j,s[6]=g*A+x*R+p*B+m*Z,s[10]=g*v+x*F+p*H+m*ue,s[14]=g*M+x*U+p*D+m*me,s[3]=y*w+b*k+_*G+T*j,s[7]=y*A+b*R+_*B+T*Z,s[11]=y*v+b*F+_*H+T*ue,s[15]=y*M+b*U+_*D+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],y=l*f-c*u,b=o*f-c*d,_=o*u-l*d,T=r*f-c*h,w=r*u-l*h,A=r*d-o*h;return t*(x*y-p*b+m*_)-n*(g*y-p*T+m*w)+i*(g*b-x*T+m*A)-s*(g*_-x*w+p*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],y=t*o-n*r,b=t*l-i*r,_=t*c-s*r,T=n*l-i*o,w=n*c-s*o,A=i*c-s*l,v=h*x-d*g,M=h*p-u*g,k=h*m-f*g,R=d*p-u*x,F=d*m-f*x,U=u*m-f*p,G=y*U-b*F+_*R+T*k-w*M+A*v;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/G;return e[0]=(o*U-l*F+c*R)*B,e[1]=(i*F-n*U-s*R)*B,e[2]=(x*A-p*w+m*T)*B,e[3]=(u*w-d*A-f*T)*B,e[4]=(l*k-r*U-c*M)*B,e[5]=(t*U-i*k+s*M)*B,e[6]=(p*_-g*A-m*b)*B,e[7]=(h*A-u*_+f*b)*B,e[8]=(r*F-o*k+c*v)*B,e[9]=(n*k-t*F-s*v)*B,e[10]=(g*w-x*_+m*y)*B,e[11]=(d*_-h*w-f*y)*B,e[12]=(o*M-r*R-l*v)*B,e[13]=(t*R-n*M+i*v)*B,e[14]=(x*b-g*T-p*y)*B,e[15]=(h*T-d*b+u*y)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,d=o+o,u=s*c,f=s*h,g=s*d,x=r*h,p=r*d,m=o*d,y=l*c,b=l*h,_=l*d,T=n.x,w=n.y,A=n.z;return i[0]=(1-(x+m))*T,i[1]=(f+_)*T,i[2]=(g-b)*T,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(u+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(g+b)*A,i[9]=(p-y)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let r=ss.set(i[0],i[1],i[2]).length(),o=ss.set(i[4],i[5],i[6]).length(),l=ss.set(i[8],i[9],i[10]).length();s<0&&(r=-r),gn.copy(this);let c=1/r,h=1/o,d=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,r,o=vn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(l)g=s/(r-s),x=r*s/(r-s);else if(o===vn)g=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===Ms)g=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=vn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(l)g=1/(r-s),x=r/(r-s);else if(o===vn)g=-2/(r-s),x=-(r+s)/(r-s);else if(o===Ms)g=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ss=new I,gn=new Ne,Wf=new I(0,0,0),Xf=new I(1,1,1),hi=new I,Vr=new I,Qt=new I,Zh=new Ne,Jh=new nn,Fn=(()=>{class a{constructor(t=0,n=0,i=0,s=a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],c=s[1],h=s[5],d=s[9],u=s[2],f=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return a.DEFAULT_ORDER="XYZ",a})(),As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qf=0,Qh=new I,rs=new nn,$n=new Ne,Gr=new I,$s=new I,Yf=new I,jf=new nn,eu=new I(1,0,0),tu=new I(0,1,0),nu=new I(0,0,1),iu={type:"added"},$f={type:"removed"},as={type:"childadded",child:null},Dl={type:"childremoved",child:null},ft=(()=>{class a extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let t=new I,n=new Fn,i=new nn,s=new I(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ke}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return rs.setFromAxisAngle(t,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,n){return rs.setFromAxisAngle(t,n),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,n){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Gr.copy(t):Gr.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($s,Gr,this.up):$n.lookAt(Gr,$s,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),rs.setFromRotationMatrix($n),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),as.child=t,this.dispatchEvent(as),as.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent($f),Dl.child=t,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Cn(Ae({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Ae({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(n){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),g=o(t.animations),x=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return a.DEFAULT_UP=new I(0,1,0),a.DEFAULT_MATRIX_AUTO_UPDATE=!0,a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,a})(),Ue=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kf={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Ll(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Nc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ll(r,s,e+1/3),this.g=Ll(r,s,e),this.b=Ll(r,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Xe.workingToColorSpace(Ht.copy(this),e),Math.round(qe(Ht.r*255,0,255))*65536+Math.round(qe(Ht.g*255,0,255))*256+Math.round(qe(Ht.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Ht.copy(this),t);let n=Ht.r,i=Ht.g,s=Ht.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ut){Xe.workingToColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,i=Ht.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Wr);let n=ar(ui.h,Wr.h,t),i=ar(ui.s,Wr.s,t),s=ar(ui.l,Wr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new he;he.NAMES=md;var ur=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new I,Kn=new I,Nl=new I,Zn=new I,os=new I,ls=new I,su=new I,Fl=new I,Ol=new I,Ul=new I,kl=new dt,Bl=new dt,Hl=new dt,ti=class a{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xn.subVectors(i,t),Kn.subVectors(n,t),Nl.subVectors(e,t);let r=xn.dot(xn),o=xn.dot(Kn),l=xn.dot(Nl),c=Kn.dot(Kn),h=Kn.dot(Nl),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(r,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return kl.setScalar(0),Bl.setScalar(0),Hl.setScalar(0),kl.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(kl,s.x),r.addScaledVector(Bl,s.y),r.addScaledVector(Hl,s.z),r}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Kn.subVectors(e,t),xn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),xn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;os.subVectors(i,n),ls.subVectors(s,n),Fl.subVectors(e,n);let l=os.dot(Fl),c=ls.dot(Fl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);let h=os.dot(Ol),d=ls.dot(Ol);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(os,r);Ul.subVectors(e,s);let f=os.dot(Ul),g=ls.dot(Ul);if(g>=0&&f<=g)return t.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return su.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(su,o);let m=1/(p+x+u);return r=x*m,o=u*m,t.copy(n).addScaledVector(os,r).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,yn):yn.fromBufferAttribute(s,r),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),qr.subVectors(this.max,Ks),cs.subVectors(e.a,Ks),hs.subVectors(e.b,Ks),us.subVectors(e.c,Ks),di.subVectors(hs,cs),fi.subVectors(us,hs),Ci.subVectors(cs,us);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,fi.z,0,-fi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ci.y,Ci.x,0];return!zl(t,cs,hs,us,qr)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,cs,hs,us,qr))?!1:(Yr.crossVectors(di,fi),t=[Yr.x,Yr.y,Yr.z],zl(t,cs,hs,us,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Xr=new vt,cs=new I,hs=new I,us=new I,di=new I,fi=new I,Ci=new I,Ks=new I,qr=new I,Yr=new I,Ii=new I;function zl(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Ii.fromArray(a,s);let o=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Mt=new I,jr=new Pe,Zf=0,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}};var fr=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jf=new vt,Zs=new I,Vl=new I,jt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);let t=Zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Vl)),this.expandByPoint(Zs.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qf=0,fn=new Ne,Gl=new ft,ds=new I,en=new vt,Js=new vt,Dt=new I,At=class a extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?pr:fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(en.min,Js.min),en.expandByPoint(Dt),Dt.addVectors(en.max,Js.max),en.expandByPoint(Dt)):(en.expandByPoint(Js.min),en.expandByPoint(Js.max))}en.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Dt.add(ds)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new I,l[v]=new I;let c=new I,h=new I,d=new I,u=new Pe,f=new Pe,g=new Pe,x=new I,p=new I;function m(v,M,k){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,k),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,k),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[v].add(x),o[M].add(x),o[k].add(x),l[v].add(p),l[M].add(p),l[k].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,M=y.length;v<M;++v){let k=y[v],R=k.start,F=k.count;for(let U=R,G=R+F;U<G;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new I,_=new I,T=new I,w=new I;function A(v){T.fromBufferAttribute(i,v),w.copy(T);let M=o[v];b.copy(M),b.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(w,M);let R=_.dot(l[v])<0?-1:1;r.setXYZW(v,b.x,b.y,b.z,R)}for(let v=0,M=y.length;v<M;++v){let k=y[v],R=k.start,F=k.count;for(let U=R,G=R+F;U<G;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new I,s=new I,r=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new gt(u,h,d)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Aa,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new I,xi=class a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ep=0,zt=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ln,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=_a,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ln&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cs=class extends zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fs,Qs=new I,ps=new I,ms=new I,gs=new Pe,er=new Pe,gd=new Ne,$r=new I,tr=new I,Kr=new I,ru=new Pe,Wl=new Pe,au=new Pe,mr=class extends ft{constructor(e=new Cs){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ki(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new xi(n,3,0,!1)),fs.setAttribute("uv",new xi(n,2,3,!1))}this.geometry=fs,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let r=this.center;Zr($r.set(-.5,-.5,0),ms,r,ps,i,s),Zr(tr.set(.5,-.5,0),ms,r,ps,i,s),Zr(Kr.set(.5,.5,0),ms,r,ps,i,s),ru.set(0,0),Wl.set(1,0),au.set(1,1);let o=e.ray.intersectTriangle($r,tr,Kr,!1,Qs);if(o===null&&(Zr(tr.set(-.5,.5,0),ms,r,ps,i,s),Wl.set(0,1),o=e.ray.intersectTriangle($r,Kr,tr,!1,Qs),o===null))return;let l=e.ray.origin.distanceTo(Qs);l<e.near||l>e.far||t.push({distance:l,point:Qs.clone(),uv:ti.getInterpolation(Qs,$r,tr,Kr,ru,Wl,au,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Zr(a,e,t,n,i,s){gs.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(er.x=s*gs.x-i*gs.y,er.y=i*gs.x+s*gs.y):er.copy(gs),a.copy(e),a.x+=er.x,a.y+=er.y,a.applyMatrix4(gd)}var Qn=new I,Xl=new I,Jr=new I,pi=new I,ql=new I,Qr=new I,Yl=new I,yi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xl.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Xl);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Jr),o=pi.dot(this.direction),l=-pi.dot(Jr),c=pi.lengthSq(),h=Math.abs(1-r*r),d,u,f,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xl).addScaledVector(Jr,u),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,s){ql.subVectors(t,e),Qr.subVectors(n,e),Yl.crossVectors(ql,Qr);let r=this.direction.dot(Yl),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;pi.subVectors(this.origin,e);let l=o*this.direction.dot(Qr.crossVectors(pi,Qr));if(l<0)return null;let c=o*this.direction.dot(ql.cross(pi));if(c<0||l+c>r)return null;let h=-o*pi.dot(Yl);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class extends zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ou=new Ne,Pi=new yi,ea=new jt,lu=new I,ta=new I,na=new I,ia=new I,jl=new I,sa=new I,cu=new I,ra=new I,et=class extends ft{constructor(e=new At,t=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(jl.fromBufferAttribute(d,e),r?sa.addScaledVector(jl,h):sa.addScaledVector(jl.sub(t),h))}t.add(sa)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(ea.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ea,lu)===null||Pi.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(ou.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,T=b;_<T;_+=3){let w=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);i=aa(this,m,e,n,c,h,d,w,A,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=o.getX(p),b=o.getX(p+1),_=o.getX(p+2);i=aa(this,r,e,n,c,h,d,y,b,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,T=b;_<T;_+=3){let w=_,A=_+1,v=_+2;i=aa(this,m,e,n,c,h,d,w,A,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,b=p+1,_=p+2;i=aa(this,r,e,n,c,h,d,y,b,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function tp(a,e,t,n,i,s,r,o){let l;if(e.side===Yt?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===tn,o),l===null)return null;ra.copy(o),ra.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:a}}function aa(a,e,t,n,i,s,r,o,l,c){a.getVertexPosition(o,ta),a.getVertexPosition(l,na),a.getVertexPosition(c,ia);let h=tp(a,e,t,n,ta,na,ia,cu);if(h){let d=new I;ti.getBarycoord(cu,ta,na,ia,d),i&&(h.uv=ti.getInterpolatedAttribute(i,o,l,c,d,new Pe)),s&&(h.uv1=ti.getInterpolatedAttribute(s,o,l,c,d,new Pe)),r&&(h.normal=ti.getInterpolatedAttribute(r,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};ti.getNormal(ta,na,ia,u.normal),h.face=u,h.barycoord=d}return h}var hu=new I,uu=new dt,du=new dt,np=new I,fu=new Ne,oa=new I,$l=new jt,pu=new Ne,Kl=new yi,gr=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingBox.expandByPoint(oa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oa),this.boundingSphere.expandByPoint(oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(i),e.ray.intersectsSphere($l)!==!1&&(pu.copy(i).invert(),Kl.copy(e.ray).applyMatrix4(pu),!(this.boundingBox!==null&&Kl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===td?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;uu.fromBufferAttribute(i.attributes.skinIndex,e),du.fromBufferAttribute(i.attributes.skinWeight,e),hu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let r=du.getComponent(s);if(r!==0){let o=uu.getComponent(s);fu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(np.copy(hu).applyMatrix4(fu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},Is=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ps=class extends Wt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=Ye,h=Ye,d,u){super(null,r,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mu=new Ne,ip=new Ne,xr=class a{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:ip;mu.multiplyMatrices(o,t[s]),mu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ps(t,e,e,cn,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];r===void 0&&(Ee("Skeleton: No bone found with UUID:",s),r=new Is),this.bones.push(r),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},rn=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Ne,gu=new Ne,la=[],xu=new vt,sp=new Ne,nr=new et,ir=new jt,Vt=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rn(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),xu.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),ir.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xs),gu.multiplyMatrices(n,xs),nr.matrixWorld=gu,nr.raycast(e,la);for(let r=0,o=la.length;r<o;r++){let l=la[r];l.instanceId=s,l.object=this,t.push(l)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(i*this.count),i,this.count,Qa,ln));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zl=new I,rp=new I,ap=new ke,Pn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Zl.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ap.getNormalMatrix(e),i=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new jt,op=new Pe(.5,.5),ca=new I,Ds=class{constructor(e=new Pn,t=new Pn,n=new Pn,i=new Pn,s=new Pn,r=new Pn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],x=s[9],p=s[10],m=s[11],y=s[12],b=s[13],_=s[14],T=s[15];if(i[0].setComponents(c-r,f-h,m-g,T-y).normalize(),i[1].setComponents(c+r,f+h,m+g,T+y).normalize(),i[2].setComponents(c+o,f+d,m+x,T+b).normalize(),i[3].setComponents(c-o,f-d,m-x,T-b).normalize(),n)i[4].setComponents(l,u,p,_).normalize(),i[5].setComponents(c-l,f-u,m-p,T-_).normalize();else if(i[4].setComponents(c-l,f-u,m-p,T-_).normalize(),t===vn)i[5].setComponents(c+l,f+u,m+p,T+_).normalize();else if(t===Ms)i[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=op.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ls=class extends zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pa=new I,Da=new I,yu=new Ne,sr=new yi,ha=new jt,Jl=new I,_u=new I,Bi=class extends ft{constructor(e=new At,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pa.fromBufferAttribute(t,i-1),Da.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pa.distanceTo(Da);e.setAttribute("lineDistance",new Lt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(i),ha.radius+=s,e.ray.intersectsSphere(ha)===!1)return;yu.copy(i).invert(),sr.copy(e.ray).applyMatrix4(yu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),b=ua(this,e,sr,l,m,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=ua(this,e,sr,l,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=f,p=g-1;x<p;x+=c){let m=ua(this,e,sr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=ua(this,e,sr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ua(a,e,t,n,i,s,r){let o=a.geometry.attributes.position;if(Pa.fromBufferAttribute(o,i),Da.fromBufferAttribute(o,s),t.distanceSqToSegment(Pa,Da,Jl,_u)>n)return;Jl.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:_u.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}var vu=new I,bu=new I,yr=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vu.fromBufferAttribute(t,i),bu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vu.distanceTo(bu);e.setAttribute("lineDistance",new Lt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_r=class extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_i=class extends zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Su=new Ne,lc=new yi,da=new jt,fa=new I,Hi=class extends ft{constructor(e=new At,t=new _i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=s,e.ray.intersectsSphere(da)===!1)return;Su.copy(i).invert(),lc.copy(e.ray).applyMatrix4(Su);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);fa.fromBufferAttribute(d,p),Mu(fa,p,l,i,e,t,this)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,x=f;g<x;g++)fa.fromBufferAttribute(d,g),Mu(fa,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Mu(a,e,t,n,i,s,r){let o=lc.distanceSqToPoint(a);if(o<t){let l=new I;lc.closestPointToPoint(a,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var vr=class extends Wt{constructor(e=[],t=Mi,n,i,s,r,o,l,c,h){super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zi=class extends Wt{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class extends Wt{constructor(e,t,n=An,i,s,r,o=Ye,l=Ye,c,h=Nn,d=1){if(h!==Nn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},La=class extends vi{constructor(e,t=An,n=Mi,i,s,r=Ye,o=Ye,l,c=Nn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},br=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class a extends At{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function g(x,p,m,y,b,_,T,w,A,v,M){let k=_/A,R=T/v,F=_/2,U=T/2,G=w/2,B=A+1,H=v+1,D=0,j=0,Z=new I;for(let ue=0;ue<H;ue++){let me=ue*R-U;for(let ce=0;ce<B;ce++){let Fe=ce*k-F;Z[x]=Fe*y,Z[p]=me*b,Z[m]=G,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[m]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ce/A),d.push(1-ue/v),D+=1}}for(let ue=0;ue<v;ue++)for(let me=0;me<A;me++){let ce=u+me+B*ue,Fe=u+me+B*(ue+1),st=u+(me+1)+B*(ue+1),Ke=u+(me+1)+B*ue;l.push(ce,Fe,Ke),l.push(Fe,st,Ke),j+=6}o.addGroup(f,j,M),f+=j,u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mn=class a extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*u-r;for(let b=0;b<c;b++){let _=b*d-s;g.push(_,-y,0),x.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let b=y+c*m,_=y+c*(m+1),T=y+1+c*(m+1),w=y+1+c*m;f.push(b,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}};var On=class a extends At{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(r+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],b=m/n,_=0;m===0&&r===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let w=T/t;d.x=-e*Math.cos(i+w*s)*Math.sin(r+b*o),d.y=e*Math.cos(r+b*o),d.z=e*Math.sin(i+w*s)*Math.sin(r+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(w+_,1-b),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let b=h[m][y+1],_=h[m][y],T=h[m+1][y],w=h[m+1][y+1];(m!==0||r>0)&&f.push(b,_,w),(m!==n-1||l<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function $i(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(a){let e={};for(let t=0;t<a.length;t++){let n=$i(a[t]);for(let i in n)e[i]=n[i]}return e}function lp(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Oc(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var xd={clone:$i,merge:Xt},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Na=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vi=class extends zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$t=class extends Vi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var En=class extends zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fa=class extends zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oa=class extends zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pa(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function up(a){function e(i,s){return a[i]-a[s]}let t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Eu(a,e,t){let n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function yd(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}var Un=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ua=class extends Un{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case rc:s=e,o=2*t-n;break;case ac:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:r=e,l=2*n-t;break;case ac:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,y=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,b=(-1-f)*p+(1.5+f)*x+.5*g,_=f*p-f*x;for(let T=0;T!==o;++T)s[T]=m*r[h+T]+y*r[c+T]+b*r[l+T]+_*r[d+T];return s}},ka=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}},Ba=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ha=class extends Un{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){let x=(n-t)/(i-t),p=1-x;for(let m=0;m!==o;++m)s[m]=r[c+m]*p+r[l+m]*x;return s}let f=o*2,g=e-1;for(let x=0;x!==o;++x){let p=r[c+x],m=r[l+x],y=g*f+x*2,b=u[y],_=u[y+1],T=e*f+x*2,w=d[T],A=d[T+1],v=(n-t)/(i-t),M,k,R,F,U;for(let G=0;G<8;G++){M=v*v,k=M*v,R=1-v,F=R*R,U=F*R;let H=U*t+3*F*v*b+3*R*M*w+k*i-n;if(Math.abs(H)<1e-10)break;let D=3*F*(b-t)+6*R*v*(w-b)+3*M*(i-w);if(Math.abs(D)<1e-10)break;v=v-H/D,v=Math.max(0,Math.min(1,v))}s[x]=U*p+3*F*v*_+3*R*M*A+k*m}return s}},Kt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ha(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Fi:t=this.InterpolantFactoryMethodDiscrete;break;case Oi:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break;case ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fi;case this.InterpolantFactoryMethodLinear:return Oi;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Re("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Ef(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xa,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let d=o*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=Oi;var si=class extends Kt{constructor(e,t,n){super(e,t,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Fi;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Sr=class extends Kt{constructor(e,t,n,i){super(e,t,n,i)}};Sr.prototype.ValueTypeName="color";var kn=class extends Kt{constructor(e,t,n,i){super(e,t,n,i)}};kn.prototype.ValueTypeName="number";var za=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(s,0,r,c-o,r,c,l);return s}},Bn=class extends Kt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};Bn.prototype.ValueTypeName="quaternion";Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Kt{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Fi;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Kt{constructor(e,t,n,i){super(e,t,n,i)}};Hn.prototype.ValueTypeName="vector";var Mr=class{constructor(e="",t=-1,n=[],i=nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(fp(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(Kt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=up(l);l=Eu(l,1,h),c=Eu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new kn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,x){if(f.length!==0){let p=[],m=[];yd(f,p,m,g),p.length!==0&&x.push(new d(u,p,m))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)f[u[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let y=0;y!==u[g].morphTargets.length;++y){let b=u[g];p.push(b.time),m.push(b.morphTarget===x?1:0)}i.push(new kn(".morphTargetInfluence["+x+"]",p,m))}l=f.length*r}else{let f=".bones["+t[d].name+"]";n(Hn,f+".position",u,"pos",i),n(Bn,f+".quaternion",u,"rot",i),n(Hn,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function dp(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kn;case"vector":case"vector2":case"vector3":case"vector4":return Hn;case"color":return Sr;case"quaternion":return Bn;case"bool":case"boolean":return si;case"string":return ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function fp(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dp(a.type);if(a.times===void 0){let t=[],n=[];yd(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}var Dn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(Tu(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!Tu(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function Tu(a){try{let e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Va=class{constructor(e,t,n){let i=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_d=new Va,Ki=(()=>{class a{constructor(t){this.manager=t!==void 0?t:_d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return a.DEFAULT_MATERIAL_NAME="__DEFAULT",a})(),ei={},cc=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends Ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Dn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ei[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,x=0,p=new ReadableStream({start(m){y();function y(){d.read().then(({done:b,value:_})=>{if(b)m.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,A=h.length;w<A;w++){let v=h[w];v.onProgress&&v.onProgress(T)}m.enqueue(_),y()}},b=>{m.error(b)})}}});return new Response(p)}else throw new cc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Dn.add(`file:${e}`,c);let h=ei[e];delete ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ei[e];if(h===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ys=new WeakMap,Ga=class extends Ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Dn.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=ys.get(r);d===void 0&&(d=[],ys.set(r,d)),d.push({onLoad:t,onError:i})}return r}let o=Es("img");function l(){h(),t&&t(this);let d=ys.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}ys.delete(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),Dn.remove(`image:${e}`);let u=ys.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}ys.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Dn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Gi=class extends Ki{constructor(e){super(e)}load(e,t,n,i){let s=new Wt,r=new Ga(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Wi=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ql=new Ne,wu=new I,Au=new I,Er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ms||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ma=new I,ga=new nn,In=new I,Tr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,In.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ma,ga,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new I,Ru=new Pe,Cu=new Pe,Et=class extends Tr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hc=class extends Er{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ui*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wr=class extends Wi{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uc=class extends Er{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0}},Tt=class extends Wi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bi=class extends Tr{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dc=class extends Er{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends Wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new dc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fs=class extends Wi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ec=new WeakMap,Ar=class extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Dn.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{if(ec.has(r)===!0)i&&i(ec.get(r)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Dn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ec.set(l,c),Dn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Dn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=-90,vs=1,Wa=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(_s,vs,e,t);i.layers=this.layers,this.add(i);let s=new Et(_s,vs,e,t);s.layers=this.layers,this.add(s);let r=new Et(_s,vs,e,t);r.layers=this.layers,this.add(r);let o=new Et(_s,vs,e,t);o.layers=this.layers,this.add(o);let l=new Et(_s,vs,e,t);l.layers=this.layers,this.add(l);let c=new Et(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xa=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Uc="\\[\\]\\.:\\/",pp=new RegExp("["+Uc+"]","g"),kc="[^"+Uc+"]",mp="[^"+Uc.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",kc),xp=/(WCOD+)?/.source.replace("WCOD",mp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),vp=new RegExp("^"+gp+xp+yp+_p+"$"),bp=["material","materials","bones","map"],fc=class{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=(()=>{class a{constructor(t,n,i){this.path=n,this.parsedPath=i||a.parseTrackName(n),this.node=a.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new a.Composite(t,n,i):new a(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(t){let n=vp.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);bp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=a.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=n.nodeName;Re("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return a.Composite=fc,a})();pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var Iu=new Ne,Os=class{constructor(e,t,n=0,i=1/0){this.ray=new yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Re("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return pc(e,this,n,t),n.sort(Pu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)pc(e[i],this,n,t);return n.sort(Pu),n}};function Pu(a,e){return a.distance-e.distance}function pc(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=a.children;for(let r=0,o=s.length;r<o;r++)pc(s[r],e,t,!0)}}function Bc(a,e,t,n){let i=Sp(n);switch(t){case Ic:return a*e;case Qa:return a*e/i.components*i.byteLength;case eo:return a*e/i.components*i.byteLength;case ji:return a*e*2/i.components*i.byteLength;case to:return a*e*2/i.components*i.byteLength;case Pc:return a*e*3/i.components*i.byteLength;case cn:return a*e*4/i.components*i.byteLength;case no:return a*e*4/i.components*i.byteLength;case Cr:case Ir:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Dr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case so:case ao:return Math.max(a,16)*Math.max(e,8)/4;case io:case ro:return Math.max(a,8)*Math.max(e,8)/2;case oo:case lo:case ho:case uo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case co:case fo:case po:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case yo:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Co:case Io:case Po:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Do:case Lo:return Math.ceil(a/4)*Math.ceil(e/4)*8;case No:case Fo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sp(a){switch(a){case Zt:case wc:return{byteLength:1,components:1};case Bs:case Ac:case Gn:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case An:case Ka:case ln:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function Vd(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Mp(a){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(a.bindBuffer(c,o),d.length===0)a.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];a.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:r}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Ep,alphahash_pars_fragment:Tp,alphamap_fragment:wp,alphamap_pars_fragment:Ap,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Dp,batching_vertex:Lp,begin_vertex:Np,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:Up,bumpmap_pars_fragment:kp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Vp,color_fragment:Gp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Kp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:ym,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:bm,lights_physical_pars_fragment:Sm,lights_fragment_begin:Mm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Dm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Om,morphcolor_vertex:Um,morphnormal_vertex:km,morphtarget_pars_vertex:Bm,morphtarget_vertex:Hm,normal_fragment_begin:zm,normal_fragment_maps:Vm,normal_pars_fragment:Gm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Km,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Qm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:xg,transmission_pars_fragment:yg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:bg,worldpos_vertex:Sg,background_vert:Mg,background_frag:Eg,backgroundCube_vert:Tg,backgroundCube_frag:wg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Ig,distance_vert:Pg,distance_frag:Dg,equirect_vert:Lg,equirect_frag:Ng,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Ug,meshbasic_frag:kg,meshlambert_vert:Bg,meshlambert_frag:Hg,meshmatcap_vert:zg,meshmatcap_frag:Vg,meshnormal_vert:Gg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:jg,meshtoon_vert:$g,meshtoon_frag:Kg,points_vert:Zg,points_frag:Jg,shadow_vert:Qg,shadow_frag:e0,sprite_vert:t0,sprite_frag:n0},ae={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Xn={basic:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new he(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Xt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Xt([ae.lights,ae.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Xn.physical={uniforms:Xt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Bo={r:0,b:0,g:0},Zi=new Fn,i0=new Ne;function s0(a,e,t,n,i,s){let r=new he(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let _=y.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(y){let b=!1,_=f(y);_===null?p(r,o):_&&_.isColor&&(p(_,1),b=!0);let T=a.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(y,b){let _=f(b);_&&(_.isCubeTexture||_.mapping===Rr)?(c===void 0&&(c=new et(new an(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:$i(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Zi.copy(b.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(Zi)),c.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Je,(h!==_||d!==_.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new et(new Mn(2,2),new on({name:"BackgroundMaterial",uniforms:$i(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Je,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=a.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(Bo,Oc(a)),t.buffers.color.setClear(Bo.r,Bo.g,Bo.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,b=1){r.set(y),o=b,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(r,o)},render:g,addToRenderList:x,dispose:m}}function r0(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,r=!1;function o(R,F,U,G,B){let H=!1,D=d(R,G,U,F);s!==D&&(s=D,c(s.object)),H=f(R,G,U,B),H&&g(R,G,U,B),B!==null&&e.update(B,a.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,_(R,F,U,G),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return a.createVertexArray()}function c(R){return a.bindVertexArray(R)}function h(R){return a.deleteVertexArray(R)}function d(R,F,U,G){let B=G.wireframe===!0,H=n[F.id];H===void 0&&(H={},n[F.id]=H);let D=R.isInstancedMesh===!0?R.id:0,j=H[D];j===void 0&&(j={},H[D]=j);let Z=j[U.id];Z===void 0&&(Z={},j[U.id]=Z);let ue=Z[B];return ue===void 0&&(ue=u(l()),Z[B]=ue),ue}function u(R){let F=[],U=[],G=[];for(let B=0;B<t;B++)F[B]=0,U[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:G,object:R,attributes:{},index:null}}function f(R,F,U,G){let B=s.attributes,H=F.attributes,D=0,j=U.getAttributes();for(let Z in j)if(j[Z].location>=0){let me=B[Z],ce=H[Z];if(ce===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),me===void 0||me.attribute!==ce||ce&&me.data!==ce.data)return!0;D++}return s.attributesNum!==D||s.index!==G}function g(R,F,U,G){let B={},H=F.attributes,D=0,j=U.getAttributes();for(let Z in j)if(j[Z].location>=0){let me=H[Z];me===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(me=R.instanceColor));let ce={};ce.attribute=me,me&&me.data&&(ce.data=me.data),B[Z]=ce,D++}s.attributes=B,s.attributesNum=D,s.index=G}function x(){let R=s.newAttributes;for(let F=0,U=R.length;F<U;F++)R[F]=0}function p(R){m(R,0)}function m(R,F){let U=s.newAttributes,G=s.enabledAttributes,B=s.attributeDivisors;U[R]=1,G[R]===0&&(a.enableVertexAttribArray(R),G[R]=1),B[R]!==F&&(a.vertexAttribDivisor(R,F),B[R]=F)}function y(){let R=s.newAttributes,F=s.enabledAttributes;for(let U=0,G=F.length;U<G;U++)F[U]!==R[U]&&(a.disableVertexAttribArray(U),F[U]=0)}function b(R,F,U,G,B,H,D){D===!0?a.vertexAttribIPointer(R,F,U,B,H):a.vertexAttribPointer(R,F,U,G,B,H)}function _(R,F,U,G){x();let B=G.attributes,H=U.getAttributes(),D=F.defaultAttributeValues;for(let j in H){let Z=H[j];if(Z.location>=0){let ue=B[j];if(ue===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){let me=ue.normalized,ce=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;let st=Fe.buffer,Ke=Fe.type,$=Fe.bytesPerElement,ne=Ke===a.INT||Ke===a.UNSIGNED_INT||ue.gpuType===Ka;if(ue.isInterleavedBufferAttribute){let re=ue.data,Be=re.stride,Ce=ue.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<Z.locationSize;De++)m(Z.location+De,re.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<Z.locationSize;De++)p(Z.location+De);a.bindBuffer(a.ARRAY_BUFFER,st);for(let De=0;De<Z.locationSize;De++)b(Z.location+De,ce/Z.locationSize,Ke,me,Be*$,(Ce+ce/Z.locationSize*De)*$,ne)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)m(Z.location+re,ue.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<Z.locationSize;re++)p(Z.location+re);a.bindBuffer(a.ARRAY_BUFFER,st);for(let re=0;re<Z.locationSize;re++)b(Z.location+re,ce/Z.locationSize,Ke,me,ce*$,ce/Z.locationSize*re*$,ne)}}else if(D!==void 0){let me=D[j];if(me!==void 0)switch(me.length){case 2:a.vertexAttrib2fv(Z.location,me);break;case 3:a.vertexAttrib3fv(Z.location,me);break;case 4:a.vertexAttrib4fv(Z.location,me);break;default:a.vertexAttrib1fv(Z.location,me)}}}}y()}function T(){M();for(let R in n){let F=n[R];for(let U in F){let G=F[U];for(let B in G){let H=G[B];for(let D in H)h(H[D].object),delete H[D];delete G[B]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let F=n[R.id];for(let U in F){let G=F[U];for(let B in G){let H=G[B];for(let D in H)h(H[D].object),delete H[D];delete G[B]}}delete n[R.id]}function A(R){for(let F in n){let U=n[F];for(let G in U){let B=U[G];if(B[R.id]===void 0)continue;let H=B[R.id];for(let D in H)h(H[D].object),delete H[D];delete B[R.id]}}}function v(R){for(let F in n){let U=n[F],G=R.isInstancedMesh===!0?R.id:0,B=U[G];if(B!==void 0){for(let H in B){let D=B[H];for(let j in D)h(D[j].object),delete D[j];delete B[H]}delete U[G],Object.keys(U).length===0&&delete n[F]}}}function M(){k(),r=!0,s!==i&&(s=i,c(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function a0(a,e,t){let n;function i(c){n=c}function s(c,h){a.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,d){d!==0&&(a.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function o0(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==cn&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zt&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!v)}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),b=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=a.getParameter(a.MAX_SAMPLES),w=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:T,samples:w}}function l0(a){let e=this,t=null,n=0,i=!1,s=!1,r=new Pn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let y=s?0:n,b=y*4,_=m.clippingState||null;l.value=_,_=h(g,u,b,f);for(let T=0;T!==b;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,_=f;b!==x;++b,_+=4)r.copy(d[b]).applyMatrix4(y,o),r.normal.toArray(p,_),p[_+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Ti=4,vd=[.125,.215,.35,.446,.526,.582],Qi=20,c0=256,Nr=new bi,bd=new he,Hc=null,zc=0,Vc=0,Gc=!1,h0=new I,zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:r=256,position:o=h0}=s;Hc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,zc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:Gn,format:cn,colorSpace:Ut,depthBuffer:!1},i=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u0(s)),this._blurMaterial=f0(s,e,t),this._ggxMaterial=d0(s,e,t)}return i}_compileMaterial(e){let t=new et(new At,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,i,s){let l=new Et(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bd),d.toneMapping=Tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new an,new Qe({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(bd),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let T=this._cubeSize;Vs(i,_*T,b>2?T:0,T,T),d.setRenderTarget(i),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Mi||e.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Nr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Ti?n-g+Ti:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Vs(s,p,m,3*x,2*x),i.setRenderTarget(s),i.render(o,Nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Vs(e,p,m,3*x,2*x),i.setRenderTarget(e),i.render(o,Nr)}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[i];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):Qi;p>Qi&&Ee(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);let m=[],y=0;for(let A=0;A<Qi;++A){let v=A/x,M=Math.exp(-v*v/2);m.push(M),A===0?y+=M:A<p&&(y+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let _=this._sizeLods[i],T=3*_*(i>b-Ti?i-b+Ti:0),w=4*(this._cubeSize-_);Vs(t,T,w,3*_,2*_),l.setRenderTarget(t),l.render(d,Nr)}};function u0(a){let e=[],t=[],n=[],i=a,s=a-Ti+1+vd.length;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Ti?l=vd[r-a+Ti-1]:r===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),b=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,v=w>2?0:-1,M=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];y.set(M,x*g*w),b.set(u,p*g*w);let k=[w,w,w,w,w,w];_.set(k,m*g*w)}let T=new At;T.setAttribute("position",new gt(y,x)),T.setAttribute("uv",new gt(b,p)),T.setAttribute("faceIndex",new gt(_,m)),n.push(new et(T,null)),i>Ti&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Sd(a,e,t){let n=new sn(a,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function d0(a,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function f0(a,e,t){let n=new Float32Array(Qi),i=new I(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Md(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ed(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vo=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:zn});s.uniforms.tEquirect.value=t;let r=new et(i,s),o=t.minFilter;return t.minFilter===wn&&(t.minFilter=_t),new Wa(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}};function p0(a){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?r(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ya||f===ja)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Vo(g.height);return x.fromEquirectangularTexture(a,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ya||f===ja,x=f===Mi||f===qi;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new zo(a)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new zo(a)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ya?u.mapping=Mi:f===ja&&(u.mapping=qi),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function m0(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&cr("WebGLRenderer: "+n+" extension not supported."),i}}}function g0(a,e,t,n){let i={},s=new WeakMap;function r(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],a.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let b=0,_=y.length;b<_;b+=3){let T=y[b+0],w=y[b+1],A=y[b+2];u.push(T,w,w,A,A,T)}}else{let y=g.array;x=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let T=b+0,w=b+1,A=b+2;u.push(T,w,w,A,A,T)}}let p=new(g.count>=65535?pr:fr)(u,1);p.version=x;let m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function x0(a,e,t){let n;function i(u){n=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function l(u,f){a.drawElements(n,f,s,u*r),t.update(f,n,1)}function c(u,f,g){g!==0&&(a.drawElementsInstanced(n,f,s,u*r,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function d(u,f,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/r,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*x[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function y0(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Re("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _0(a,e,t){let n=new WeakMap,i=new dt;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let k=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",k)};var f=k;u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;g===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let T=o.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let A=new Float32Array(T*w*4*d),v=new hr(A,T,w,d);v.type=ln,v.needsUpdate=!0;let M=_*4;for(let R=0;R<d;R++){let F=m[R],U=y[R],G=b[R],B=T*w*4*R;for(let H=0;H<F.count;H++){let D=H*M;g===!0&&(i.fromBufferAttribute(F,H),A[B+D+0]=i.x,A[B+D+1]=i.y,A[B+D+2]=i.z,A[B+D+3]=0),x===!0&&(i.fromBufferAttribute(U,H),A[B+D+4]=i.x,A[B+D+5]=i.y,A[B+D+6]=i.z,A[B+D+7]=0),p===!0&&(i.fromBufferAttribute(G,H),A[B+D+8]=i.x,A[B+D+9]=i.y,A[B+D+10]=i.z,A[B+D+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:v,size:new Pe(T,w)},n.set(o,u),o.addEventListener("dispose",k)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",x),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function v0(a,e,t,n,i){let s=new WeakMap;function r(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var b0={[_c]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Sc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function S0(a,e,t,n,i){let s=new sn(e,t,{type:a,depthBuffer:n,stencilBuffer:i}),r=new sn(e,t,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),o=new At;o.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let l=new Na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new et(o,l),h=new bi(-1,1,1,-1,0,1),d=null,u=null,f=!1,g,x=null,p=[],m=!1;this.setSize=function(y,b){s.setSize(y,b),r.setSize(y,b);for(let _=0;_<p.length;_++){let T=p[_];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;let b=s.width,_=s.height;for(let T=0;T<p.length;T++){let w=p[T];w.setSize&&w.setSize(b,_)}},this.begin=function(y,b){if(f||y.toneMapping===Tn&&p.length===0)return!1;if(x=b,b!==null){let _=b.width,T=b.height;(s.width!==_||s.height!==T)&&this.setSize(_,T)}return m===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Tn,!0},this.hasRenderPass=function(){return m},this.end=function(y,b){y.toneMapping=g,f=!0;let _=s,T=r;for(let w=0;w<p.length;w++){let A=p[w];if(A.enabled!==!1&&(A.render(y,T,_,b),A.needsSwap!==!1)){let v=_;_=T,T=v}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},Xe.getTransfer(d)===Je&&(l.defines.SRGB_TRANSFER="");let w=b0[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,y.setRenderTarget(x),y.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),r.dispose(),o.dispose(),l.dispose()}}var Gd=new Wt,qc=new vi(1,1),Wd=new hr,Xd=new Ia,qd=new vr,Td=[],wd=[],Ad=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function Ws(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,s=Td[i];if(s===void 0&&(s=new Float32Array(i),Td[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Rt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ct(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Xo(a,e){let t=wd[e];t===void 0&&(t=new Int32Array(e),wd[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function M0(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function E0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;a.uniform2fv(this.addr,e),Ct(t,e)}}function T0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;a.uniform3fv(this.addr,e),Ct(t,e)}}function w0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;a.uniform4fv(this.addr,e),Ct(t,e)}}function A0(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Cd.set(n),a.uniformMatrix2fv(this.addr,!1,Cd),Ct(t,n)}}function R0(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Rd.set(n),a.uniformMatrix3fv(this.addr,!1,Rd),Ct(t,n)}}function C0(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ad.set(n),a.uniformMatrix4fv(this.addr,!1,Ad),Ct(t,n)}}function I0(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function P0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;a.uniform2iv(this.addr,e),Ct(t,e)}}function D0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;a.uniform3iv(this.addr,e),Ct(t,e)}}function L0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;a.uniform4iv(this.addr,e),Ct(t,e)}}function N0(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function F0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;a.uniform2uiv(this.addr,e),Ct(t,e)}}function O0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;a.uniform3uiv(this.addr,e),Ct(t,e)}}function U0(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;a.uniform4uiv(this.addr,e),Ct(t,e)}}function k0(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(qc.compareFunction=t.isReversedDepthBuffer()?ko:Uo,s=qc):s=Gd,t.setTexture2D(e||s,i)}function B0(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xd,i)}function H0(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qd,i)}function z0(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wd,i)}function V0(a){switch(a){case 5126:return M0;case 35664:return E0;case 35665:return T0;case 35666:return w0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return I0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return z0}}function G0(a,e){a.uniform1fv(this.addr,e)}function W0(a,e){let t=Ws(e,this.size,2);a.uniform2fv(this.addr,t)}function X0(a,e){let t=Ws(e,this.size,3);a.uniform3fv(this.addr,t)}function q0(a,e){let t=Ws(e,this.size,4);a.uniform4fv(this.addr,t)}function Y0(a,e){let t=Ws(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function j0(a,e){let t=Ws(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function $0(a,e){let t=Ws(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function K0(a,e){a.uniform1iv(this.addr,e)}function Z0(a,e){a.uniform2iv(this.addr,e)}function J0(a,e){a.uniform3iv(this.addr,e)}function Q0(a,e){a.uniform4iv(this.addr,e)}function ex(a,e){a.uniform1uiv(this.addr,e)}function tx(a,e){a.uniform2uiv(this.addr,e)}function nx(a,e){a.uniform3uiv(this.addr,e)}function ix(a,e){a.uniform4uiv(this.addr,e)}function sx(a,e,t){let n=this.cache,i=e.length,s=Xo(t,i);Rt(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=qc:r=Gd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function rx(a,e,t){let n=this.cache,i=e.length,s=Xo(t,i);Rt(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Xd,s[r])}function ax(a,e,t){let n=this.cache,i=e.length,s=Xo(t,i);Rt(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||qd,s[r])}function ox(a,e,t){let n=this.cache,i=e.length,s=Xo(t,i);Rt(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Wd,s[r])}function lx(a){switch(a){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return j0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V0(t.type)}},jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lx(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Id(a,e){a.seq.push(e),a.map[e.id]=e}function cx(a,e,t){let n=a.name,i=n.length;for(Wc.lastIndex=0;;){let s=Wc.exec(n),r=Wc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Id(t,c===void 0?new Yc(o,a,e):new jc(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new $c(o),Id(t,d)),t=d}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);cx(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function Pd(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var hx=37297,ux=0;function dx(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var Dd=new ke;function fx(a){Xe._getMatrix(Dd,Xe.workingColorSpace,a);let e=`mat3( ${Dd.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(a)){case or:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ld(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dx(a.getShaderSource(e),o)}else return s}function px(a,e){let t=fx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var mx={[_c]:"Linear",[vc]:"Reinhard",[bc]:"Cineon",[Sc]:"ACESFilmic",[Ec]:"AgX",[Tc]:"Neutral",[Mc]:"Custom"};function gx(a,e){let t=mx[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ho=new I;function xx(){Xe.getLuminanceCoefficients(Ho);let a=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function _x(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vx(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=a.getActiveAttrib(e,i),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Or(a){return a!==""}function Nd(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(a){return a.replace(bx,Mx)}var Sx=new Map;function Mx(a,e){let t=He[e];if(t===void 0){let n=Sx.get(e);if(n!==void 0)t=He[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}var Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(a){return a.replace(Ex,Tx)}function Tx(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ud(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var wx={[Xi]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Ax(a){return wx[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rx={[Mi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function Cx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Rx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ix={[qi]:"ENVMAP_MODE_REFRACTION"};function Px(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Ix[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dx={[yc]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function Lx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Dx[a.combine]||"ENVMAP_BLENDING_NONE"}function Nx(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fx(a,e,t,n){let i=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,l=Ax(t),c=Cx(t),h=Px(t),d=Lx(t),u=Nx(t),f=yx(t),g=_x(s),x=i.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`)):(p=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),m=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?He.tonemapping_pars_fragment:"",t.toneMapping!==Tn?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,px("linearToOutputTexel",t.outputColorSpace),xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),r=Kc(r),r=Nd(r,t),r=Fd(r,t),o=Kc(o),o=Nd(o,t),o=Fd(o,t),r=Od(r),o=Od(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=y+p+r,_=y+m+o,T=Pd(i,i.VERTEX_SHADER,b),w=Pd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(R){if(a.debug.checkShaderErrors){let F=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(w)||"",B=F.trim(),H=U.trim(),D=G.trim(),j=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,x,T,w);else{let ue=Ld(i,T,"vertex"),me=Ld(i,w,"fragment");Re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ue+`
`+me)}else B!==""?Ee("WebGLProgram: Program Info Log:",B):(H===""||D==="")&&(Z=!1);Z&&(R.diagnostics={runnable:j,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:D,prefix:m}})}i.deleteShader(T),i.deleteShader(w),v=new Gs(i,x),M=vx(i,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(x,hx)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ux++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var Ox=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jc(e),t.set(e,n)),n}},Jc=class{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}};function Ux(a,e,t,n,i,s){let r=new As,o=new Zc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,M,k,R,F){let U=R.fog,G=F.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=e.get(v.envMap||B,H),j=D&&D.mapping===Rr?D.image.height:null,Z=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ee("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=ue!==void 0?ue.length:0,ce=0;G.morphAttributes.position!==void 0&&(ce=1),G.morphAttributes.normal!==void 0&&(ce=2),G.morphAttributes.color!==void 0&&(ce=3);let Fe,st,Ke,$;if(Z){let nt=Xn[Z];Fe=nt.vertexShader,st=nt.fragmentShader}else Fe=v.vertexShader,st=v.fragmentShader,o.update(v),Ke=o.getVertexShaderID(v),$=o.getFragmentShaderID(v);let ne=a.getRenderTarget(),re=a.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,De=!!v.map,It=!!v.matcap,je=!!D,tt=!!v.aoMap,ot=!!v.lightMap,ze=!!v.bumpMap,xt=!!v.normalMap,P=!!v.displacementMap,St=!!v.emissiveMap,Ze=!!v.metalnessMap,ct=!!v.roughnessMap,be=v.anisotropy>0,C=v.clearcoat>0,S=v.dispersion>0,N=v.iridescence>0,Y=v.sheen>0,K=v.transmission>0,q=be&&!!v.anisotropyMap,ge=C&&!!v.clearcoatMap,ie=C&&!!v.clearcoatNormalMap,we=C&&!!v.clearcoatRoughnessMap,Ie=N&&!!v.iridescenceMap,J=N&&!!v.iridescenceThicknessMap,ee=Y&&!!v.sheenColorMap,xe=Y&&!!v.sheenRoughnessMap,_e=!!v.specularMap,de=!!v.specularColorMap,Ve=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,se=K&&!!v.thicknessMap,te=!!v.gradientMap,pe=!!v.alphaMap,Q=v.alphaTest>0,X=!!v.alphaHash,ye=!!v.extensions,Le=Tn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=a.toneMapping);let ht={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:st,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:ne===null?a.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ut,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:It,envMap:je,envMapMode:je&&D.mapping,envMapCubeUVHeight:j,aoMap:tt,lightMap:ot,bumpMap:ze,normalMap:xt,displacementMap:P,emissiveMap:St,normalMapObjectSpace:xt&&v.normalMapType===sd,normalMapTangentSpace:xt&&v.normalMapType===Oo,metalnessMap:Ze,roughnessMap:ct,anisotropy:be,anisotropyMap:q,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:ie,clearcoatRoughnessMap:we,dispersion:S,iridescence:N,iridescenceMap:Ie,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:xe,specularMap:_e,specularColorMap:de,specularIntensityMap:Ve,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:te,opaque:v.transparent===!1&&v.blending===Ln&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:X,combine:v.combine,mapUv:De&&g(v.map.channel),aoMapUv:tt&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:ze&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:St&&g(v.emissiveMap.channel),metalnessMapUv:Ze&&g(v.metalnessMap.channel),roughnessMapUv:ct&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:ge&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(v.sheenRoughnessMap.channel),specularMapUv:_e&&g(v.specularMap.channel),specularColorMapUv:de&&g(v.specularColorMap.channel),specularIntensityMapUv:Ve&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:se&&g(v.thicknessMap.channel),alphaMapUv:pe&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||be),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(De||pe),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Le,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===Je,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===Je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gt,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)M.push(k),M.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(m(M,v),y(M,v),M.push(a.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),v.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),v.push(r.mask)}function b(v){let M=f[v.type],k;if(M){let R=Xn[M];k=xd.clone(R.uniforms)}else k=v.uniforms;return k}function _(v,M){let k=h.get(M);return k!==void 0?++k.usedTimes:(k=new Fx(a,M,v,i),c.push(k),h.set(M,k)),k}function T(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:b,acquireProgram:_,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function kx(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Bx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function kd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Bd(){let a=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,p,m){let y=a[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},a[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=r(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=p,y.group=m),e++,y}function l(u,f,g,x,p,m){let y=o(u,f,g,x,p,m);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function c(u,f,g,x,p,m){let y=o(u,f,g,x,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||Bx),n.length>1&&n.sort(f||kd),i.length>1&&i.sort(f||kd)}function d(){for(let u=e,f=a.length;u<f;u++){let g=a[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Hx(){let a=new WeakMap;function e(n,i){let s=a.get(n),r;return s===void 0?(r=new Bd,a.set(n,[r])):i>=s.length?(r=new Bd,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function zx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new he};break;case"SpotLight":t={position:new I,direction:new I,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function Vx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Gx=0;function Wx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Xx(a){let e=new zx,t=Vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new Ne,r=new Ne;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,b=0,_=0,T=0,w=0,A=0;c.sort(Wx);for(let M=0,k=c.length;M<k;M++){let R=c[M],F=R.color,U=R.intensity,G=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ji?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*U,d+=F.g*U,u+=F.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);A++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let D=R.shadow,j=t.get(R);j.shadowIntensity=D.intensity,j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=H,f++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(U),H.distance=G,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;let D=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,D.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=D.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=D.intensity,j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=B,_++}x++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(F).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=H,p++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let D=R.shadow,j=t.get(R);j.shadowIntensity=D.intensity,j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,j.shadowCameraNear=D.camera.near,j.shadowCameraFar=D.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[m]=H,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==_||v.numSpotMaps!==T||v.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,v.directionalLength=f,v.pointLength=g,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=_,v.numSpotMaps=T,v.numLightProbes=A,n.version=Gx++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let b=c[m];if(b.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),d++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),r.identity(),s.copy(b.matrixWorld),s.premultiply(p),r.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Hd(a){let e=new Xx(a),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function qx(a){let e=new WeakMap;function t(i,s=0){let r=e.get(i),o;return r===void 0?(o=new Hd(a),e.set(i,[o])):s>=r.length?(o=new Hd(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$x=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Kx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],zd=new Ne,Fr=new I,Xc=new I;function Zx(a,e,t){let n=new Ds,i=new Pe,s=new Pe,r=new dt,o=new Fa,l=new Oa,c={},h=t.maxTextureSize,d={[tn]:Yt,[Yt]:tn,[Gt]:Gt},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Yx,fragmentShader:jx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xi;let m=this.type;this.render=function(w,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Nu&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xi);let M=a.getRenderTarget(),k=a.getActiveCubeFace(),R=a.getActiveMipmapLevel(),F=a.state;F.setBlending(zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=m!==this.type;U&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(B=>B.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,B=w.length;G<B;G++){let H=w[G],D=H.shadow;if(D===void 0){Ee("WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let j=D.getFrameExtents();i.multiply(j),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,D.mapSize.y=s.y));let Z=a.state.buffers.depth.getReversed();if(D.camera._reversedDepth=Z,D.map===null||U===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Us){if(H.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new sn(i.x,i.y,{format:ji,type:Gn,minFilter:_t,magFilter:_t,generateMipmaps:!1}),D.map.texture.name=H.name+".shadowMap",D.map.depthTexture=new vi(i.x,i.y,ln),D.map.depthTexture.name=H.name+".shadowMapDepth",D.map.depthTexture.format=Nn,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ye,D.map.depthTexture.magFilter=Ye}else H.isPointLight?(D.map=new Vo(i.x),D.map.depthTexture=new La(i.x,An)):(D.map=new sn(i.x,i.y),D.map.depthTexture=new vi(i.x,i.y,An)),D.map.depthTexture.name=H.name+".shadowMap",D.map.depthTexture.format=Nn,this.type===Xi?(D.map.depthTexture.compareFunction=Z?ko:Uo,D.map.depthTexture.minFilter=_t,D.map.depthTexture.magFilter=_t):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ye,D.map.depthTexture.magFilter=Ye);D.camera.updateProjectionMatrix()}let ue=D.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ue;me++){if(D.map.isWebGLCubeRenderTarget)a.setRenderTarget(D.map,me),a.clear();else{me===0&&(a.setRenderTarget(D.map),a.clear());let ce=D.getViewport(me);r.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),F.viewport(r)}if(H.isPointLight){let ce=D.camera,Fe=D.matrix,st=H.distance||ce.far;st!==ce.far&&(ce.far=st,ce.updateProjectionMatrix()),Fr.setFromMatrixPosition(H.matrixWorld),ce.position.copy(Fr),Xc.copy(ce.position),Xc.add($x[me]),ce.up.copy(Kx[me]),ce.lookAt(Xc),ce.updateMatrixWorld(),Fe.makeTranslation(-Fr.x,-Fr.y,-Fr.z),zd.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),D._frustum.setFromProjectionMatrix(zd,ce.coordinateSystem,ce.reversedDepth)}else D.updateMatrices(H);n=D.getFrustum(),_(A,v,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===Us&&y(D,v),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(M,k,R)};function y(w,A){let v=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new sn(i.x,i.y,{format:ji,type:Gn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(A,null,v,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(A,null,v,f,x,null)}function b(w,A,v,M){let k=null,R=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)k=R;else if(k=v.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=k.uuid,U=A.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let B=G[U];B===void 0&&(B=k.clone(),G[U]=B,A.addEventListener("dispose",T)),k=B}if(k.visible=A.visible,k.wireframe=A.wireframe,M===Us?k.side=A.shadowSide!==null?A.shadowSide:A.side:k.side=A.shadowSide!==null?A.shadowSide:d[A.side],k.alphaMap=A.alphaMap,k.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,k.map=A.map,k.clipShadows=A.clipShadows,k.clippingPlanes=A.clippingPlanes,k.clipIntersection=A.clipIntersection,k.displacementMap=A.displacementMap,k.displacementScale=A.displacementScale,k.displacementBias=A.displacementBias,k.wireframeLinewidth=A.wireframeLinewidth,k.linewidth=A.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let F=a.properties.get(k);F.light=v}return k}function _(w,A,v,M,k){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Us)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let U=e.update(w),G=w.material;if(Array.isArray(G)){let B=U.groups;for(let H=0,D=B.length;H<D;H++){let j=B[H],Z=G[j.materialIndex];if(Z&&Z.visible){let ue=b(w,Z,M,k);w.onBeforeShadow(a,w,A,v,U,ue,j),a.renderBufferDirect(v,null,U,ue,w,j),w.onAfterShadow(a,w,A,v,U,ue,j)}}}else if(G.visible){let B=b(w,G,M,k);w.onBeforeShadow(a,w,A,v,U,B,null),a.renderBufferDirect(v,null,U,B,w,null),w.onAfterShadow(a,w,A,v,U,B,null)}}let F=w.children;for(let U=0,G=F.length;U<G;U++)_(F[U],A,v,M,k)}function T(w){w.target.removeEventListener("dispose",T);for(let v in c){let M=c[v],k=w.target.uuid;k in M&&(M[k].dispose(),delete M[k])}}}function Jx(a,e){function t(){let L=!1,se=new dt,te=null,pe=new dt(0,0,0,0);return{setMask:function(Q){te!==Q&&!L&&(a.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){L=Q},setClear:function(Q,X,ye,Le,ht){ht===!0&&(Q*=Le,X*=Le,ye*=Le),se.set(Q,X,ye,Le),pe.equals(se)===!1&&(a.clearColor(Q,X,ye,Le),pe.copy(se))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,te=null,pe=null,Q=null;return{setReversed:function(X){if(se!==X){let ye=e.get("EXT_clip_control");X?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),se=X;let Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return se},setTest:function(X){X?ne(a.DEPTH_TEST):re(a.DEPTH_TEST)},setMask:function(X){te!==X&&!L&&(a.depthMask(X),te=X)},setFunc:function(X){if(se&&(X=pd[X]),pe!==X){switch(X){case va:a.depthFunc(a.NEVER);break;case ba:a.depthFunc(a.ALWAYS);break;case Sa:a.depthFunc(a.LESS);break;case Ni:a.depthFunc(a.LEQUAL);break;case Ma:a.depthFunc(a.EQUAL);break;case Ea:a.depthFunc(a.GEQUAL);break;case Ta:a.depthFunc(a.GREATER);break;case wa:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=X}},setLocked:function(X){L=X},setClear:function(X){Q!==X&&(Q=X,se&&(X=1-X),a.clearDepth(X))},reset:function(){L=!1,te=null,pe=null,Q=null,se=!1}}}function i(){let L=!1,se=null,te=null,pe=null,Q=null,X=null,ye=null,Le=null,ht=null;return{setTest:function(nt){L||(nt?ne(a.STENCIL_TEST):re(a.STENCIL_TEST))},setMask:function(nt){se!==nt&&!L&&(a.stencilMask(nt),se=nt)},setFunc:function(nt,Yn,jn){(te!==nt||pe!==Yn||Q!==jn)&&(a.stencilFunc(nt,Yn,jn),te=nt,pe=Yn,Q=jn)},setOp:function(nt,Yn,jn){(X!==nt||ye!==Yn||Le!==jn)&&(a.stencilOp(nt,Yn,jn),X=nt,ye=Yn,Le=jn)},setLocked:function(nt){L=nt},setClear:function(nt){ht!==nt&&(a.clearStencil(nt),ht=nt)},reset:function(){L=!1,se=null,te=null,pe=null,Q=null,X=null,ye=null,Le=null,ht=null}}}let s=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,p=null,m=null,y=null,b=null,_=null,T=null,w=null,A=new he(0,0,0),v=0,M=!1,k=null,R=null,F=null,U=null,G=null,B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,D=0,j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=D>=2);let Z=null,ue={},me=a.getParameter(a.SCISSOR_BOX),ce=a.getParameter(a.VIEWPORT),Fe=new dt().fromArray(me),st=new dt().fromArray(ce);function Ke(L,se,te,pe){let Q=new Uint8Array(4),X=a.createTexture();a.bindTexture(L,X),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ye=0;ye<te;ye++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(se,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,Q):a.texImage2D(se+ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Q);return X}let $={};$[a.TEXTURE_2D]=Ke(a.TEXTURE_2D,a.TEXTURE_2D,1),$[a.TEXTURE_CUBE_MAP]=Ke(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[a.TEXTURE_2D_ARRAY]=Ke(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),$[a.TEXTURE_3D]=Ke(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(a.DEPTH_TEST),r.setFunc(Ni),ze(!1),xt(mc),ne(a.CULL_FACE),tt(zn);function ne(L){h[L]!==!0&&(a.enable(L),h[L]=!0)}function re(L){h[L]!==!1&&(a.disable(L),h[L]=!1)}function Be(L,se){return d[L]!==se?(a.bindFramebuffer(L,se),d[L]=se,L===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=se),L===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(L,se){let te=f,pe=!1;if(L){te=u.get(se),te===void 0&&(te=[],u.set(se,te));let Q=L.textures;if(te.length!==Q.length||te[0]!==a.COLOR_ATTACHMENT0){for(let X=0,ye=Q.length;X<ye;X++)te[X]=a.COLOR_ATTACHMENT0+X;te.length=Q.length,pe=!0}}else te[0]!==a.BACK&&(te[0]=a.BACK,pe=!0);pe&&a.drawBuffers(te)}function De(L){return g!==L?(a.useProgram(L),g=L,!0):!1}let It={[gi]:a.FUNC_ADD,[Ou]:a.FUNC_SUBTRACT,[Uu]:a.FUNC_REVERSE_SUBTRACT};It[ku]=a.MIN,It[Bu]=a.MAX;let je={[Hu]:a.ZERO,[zu]:a.ONE,[Vu]:a.SRC_COLOR,[ya]:a.SRC_ALPHA,[ju]:a.SRC_ALPHA_SATURATE,[qu]:a.DST_COLOR,[Wu]:a.DST_ALPHA,[Gu]:a.ONE_MINUS_SRC_COLOR,[_a]:a.ONE_MINUS_SRC_ALPHA,[Yu]:a.ONE_MINUS_DST_COLOR,[Xu]:a.ONE_MINUS_DST_ALPHA,[$u]:a.CONSTANT_COLOR,[Ku]:a.ONE_MINUS_CONSTANT_COLOR,[Zu]:a.CONSTANT_ALPHA,[Ju]:a.ONE_MINUS_CONSTANT_ALPHA};function tt(L,se,te,pe,Q,X,ye,Le,ht,nt){if(L===zn){x===!0&&(re(a.BLEND),x=!1);return}if(x===!1&&(ne(a.BLEND),x=!0),L!==Fu){if(L!==p||nt!==M){if((m!==gi||_!==gi)&&(a.blendEquation(a.FUNC_ADD),m=gi,_=gi),nt)switch(L){case Ln:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vn:a.blendFunc(a.ONE,a.ONE);break;case gc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case xc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Re("WebGLState: Invalid blending: ",L);break}else switch(L){case Ln:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case gc:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,w=null,A.set(0,0,0),v=0,p=L,M=nt}return}Q=Q||se,X=X||te,ye=ye||pe,(se!==m||Q!==_)&&(a.blendEquationSeparate(It[se],It[Q]),m=se,_=Q),(te!==y||pe!==b||X!==T||ye!==w)&&(a.blendFuncSeparate(je[te],je[pe],je[X],je[ye]),y=te,b=pe,T=X,w=ye),(Le.equals(A)===!1||ht!==v)&&(a.blendColor(Le.r,Le.g,Le.b,ht),A.copy(Le),v=ht),p=L,M=!1}function ot(L,se){L.side===Gt?re(a.CULL_FACE):ne(a.CULL_FACE);let te=L.side===Yt;se&&(te=!te),ze(te),L.blending===Ln&&L.transparent===!1?tt(zn):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(a.SAMPLE_ALPHA_TO_COVERAGE):re(a.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){k!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),k=L)}function xt(L){L!==Du?(ne(a.CULL_FACE),L!==R&&(L===mc?a.cullFace(a.BACK):L===Lu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):re(a.CULL_FACE),R=L}function P(L){L!==F&&(H&&a.lineWidth(L),F=L)}function St(L,se,te){L?(ne(a.POLYGON_OFFSET_FILL),(U!==se||G!==te)&&(U=se,G=te,r.getReversed()&&(se=-se),a.polygonOffset(se,te))):re(a.POLYGON_OFFSET_FILL)}function Ze(L){L?ne(a.SCISSOR_TEST):re(a.SCISSOR_TEST)}function ct(L){L===void 0&&(L=a.TEXTURE0+B-1),Z!==L&&(a.activeTexture(L),Z=L)}function be(L,se,te){te===void 0&&(Z===null?te=a.TEXTURE0+B-1:te=Z);let pe=ue[te];pe===void 0&&(pe={type:void 0,texture:void 0},ue[te]=pe),(pe.type!==L||pe.texture!==se)&&(Z!==te&&(a.activeTexture(te),Z=te),a.bindTexture(L,se||$[L]),pe.type=L,pe.texture=se)}function C(){let L=ue[Z];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{a.compressedTexImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function N(){try{a.compressedTexImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function Y(){try{a.texSubImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function K(){try{a.texSubImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function ge(){try{a.compressedTexSubImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function ie(){try{a.texStorage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function we(){try{a.texStorage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function Ie(){try{a.texImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function J(){try{a.texImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function ee(L){Fe.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function xe(L){st.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function _e(L,se){let te=c.get(se);te===void 0&&(te=new WeakMap,c.set(se,te));let pe=te.get(L);pe===void 0&&(pe=a.getUniformBlockIndex(se,L.name),te.set(L,pe))}function de(L,se){let pe=c.get(se).get(L);l.get(se)!==pe&&(a.uniformBlockBinding(se,pe,L.__bindingPointIndex),l.set(se,pe))}function Ve(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},Z=null,ue={},d={},u=new WeakMap,f=[],g=null,x=!1,p=null,m=null,y=null,b=null,_=null,T=null,w=null,A=new he(0,0,0),v=0,M=!1,k=null,R=null,F=null,U=null,G=null,Fe.set(0,0,a.canvas.width,a.canvas.height),st.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ne,disable:re,bindFramebuffer:Be,drawBuffers:Ce,useProgram:De,setBlending:tt,setMaterial:ot,setFlipSided:ze,setCullFace:xt,setLineWidth:P,setPolygonOffset:St,setScissorTest:Ze,activeTexture:ct,bindTexture:be,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:Ie,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:de,texStorage2D:ie,texStorage3D:we,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:ee,viewport:xe,reset:Ve}}function Qx(a,e,t,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):Es("canvas")}function x(C,S,N){let Y=1,K=be(C);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(Y*K.width),ge=Math.floor(Y*K.height);d===void 0&&(d=g(q,ge));let ie=S?g(q,ge):d;return ie.width=q,ie.height=ge,ie.getContext("2d").drawImage(C,0,0,q,ge),Ee("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+ge+")."),ie}else return"data"in C&&Ee("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){a.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function b(C,S,N,Y,K=!1){if(C!==null){if(a[C]!==void 0)return a[C];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=S;if(S===a.RED&&(N===a.FLOAT&&(q=a.R32F),N===a.HALF_FLOAT&&(q=a.R16F),N===a.UNSIGNED_BYTE&&(q=a.R8)),S===a.RED_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.R8UI),N===a.UNSIGNED_SHORT&&(q=a.R16UI),N===a.UNSIGNED_INT&&(q=a.R32UI),N===a.BYTE&&(q=a.R8I),N===a.SHORT&&(q=a.R16I),N===a.INT&&(q=a.R32I)),S===a.RG&&(N===a.FLOAT&&(q=a.RG32F),N===a.HALF_FLOAT&&(q=a.RG16F),N===a.UNSIGNED_BYTE&&(q=a.RG8)),S===a.RG_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RG8UI),N===a.UNSIGNED_SHORT&&(q=a.RG16UI),N===a.UNSIGNED_INT&&(q=a.RG32UI),N===a.BYTE&&(q=a.RG8I),N===a.SHORT&&(q=a.RG16I),N===a.INT&&(q=a.RG32I)),S===a.RGB_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RGB8UI),N===a.UNSIGNED_SHORT&&(q=a.RGB16UI),N===a.UNSIGNED_INT&&(q=a.RGB32UI),N===a.BYTE&&(q=a.RGB8I),N===a.SHORT&&(q=a.RGB16I),N===a.INT&&(q=a.RGB32I)),S===a.RGBA_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),N===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),N===a.UNSIGNED_INT&&(q=a.RGBA32UI),N===a.BYTE&&(q=a.RGBA8I),N===a.SHORT&&(q=a.RGBA16I),N===a.INT&&(q=a.RGBA32I)),S===a.RGB&&(N===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),N===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),S===a.RGBA){let ge=K?or:Xe.getTransfer(Y);N===a.FLOAT&&(q=a.RGBA32F),N===a.HALF_FLOAT&&(q=a.RGBA16F),N===a.UNSIGNED_BYTE&&(q=ge===Je?a.SRGB8_ALPHA8:a.RGBA8),N===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),N===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(C,S){let N;return C?S===null||S===An||S===Hs?N=a.DEPTH24_STENCIL8:S===ln?N=a.DEPTH32F_STENCIL8:S===Bs&&(N=a.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===An||S===Hs?N=a.DEPTH_COMPONENT24:S===ln?N=a.DEPTH_COMPONENT32F:S===Bs&&(N=a.DEPTH_COMPONENT16),N}function T(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==_t?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){let S=C.target;S.removeEventListener("dispose",w),v(S),S.isVideoTexture&&h.delete(S)}function A(C){let S=C.target;S.removeEventListener("dispose",A),k(S)}function v(C){let S=n.get(C);if(S.__webglInit===void 0)return;let N=C.source,Y=u.get(N);if(Y){let K=Y[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(C),Object.keys(Y).length===0&&u.delete(N)}n.remove(C)}function M(C){let S=n.get(C);a.deleteTexture(S.__webglTexture);let N=C.source,Y=u.get(N);delete Y[S.__cacheKey],r.memory.textures--}function k(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let K=0;K<S.__webglFramebuffer[Y].length;K++)a.deleteFramebuffer(S.__webglFramebuffer[Y][K]);else a.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)a.deleteFramebuffer(S.__webglFramebuffer[Y]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let N=C.textures;for(let Y=0,K=N.length;Y<K;Y++){let q=n.get(N[Y]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(N[Y])}n.remove(C)}let R=0;function F(){R=0}function U(){let C=R;return C>=i.maxTextures&&Ee("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function G(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function B(C,S){let N=n.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){let Y=C.image;if(Y===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,C,S);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,N.__webglTexture,a.TEXTURE0+S)}function H(C,S){let N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){$(N,C,S);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,N.__webglTexture,a.TEXTURE0+S)}function D(C,S){let N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){$(N,C,S);return}t.bindTexture(a.TEXTURE_3D,N.__webglTexture,a.TEXTURE0+S)}function j(C,S){let N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){ne(N,C,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+S)}let Z={[Sn]:a.REPEAT,[Ot]:a.CLAMP_TO_EDGE,[Ss]:a.MIRRORED_REPEAT},ue={[Ye]:a.NEAREST,[$a]:a.NEAREST_MIPMAP_NEAREST,[Yi]:a.NEAREST_MIPMAP_LINEAR,[_t]:a.LINEAR,[ks]:a.LINEAR_MIPMAP_NEAREST,[wn]:a.LINEAR_MIPMAP_LINEAR},me={[rd]:a.NEVER,[hd]:a.ALWAYS,[ad]:a.LESS,[Uo]:a.LEQUAL,[od]:a.EQUAL,[ko]:a.GEQUAL,[ld]:a.GREATER,[cd]:a.NOTEQUAL};function ce(C,S){if(S.type===ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===_t||S.magFilter===ks||S.magFilter===Yi||S.magFilter===wn||S.minFilter===_t||S.minFilter===ks||S.minFilter===Yi||S.minFilter===wn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,Z[S.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,Z[S.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,Z[S.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,ue[S.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ye||S.minFilter!==Yi&&S.minFilter!==wn||S.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(C,S){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));let Y=S.source,K=u.get(Y);K===void 0&&(K={},u.set(Y,K));let q=G(S);if(q!==C.__cacheKey){K[q]===void 0&&(K[q]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,N=!0),K[q].usedTimes++;let ge=K[C.__cacheKey];ge!==void 0&&(K[C.__cacheKey].usedTimes--,ge.usedTimes===0&&M(S)),C.__cacheKey=q,C.__webglTexture=K[q].texture}return N}function st(C,S,N){return Math.floor(Math.floor(C/N)/S)}function Ke(C,S,N,Y){let q=C.updateRanges;if(q.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,N,Y,S.data);else{q.sort((J,ee)=>J.start-ee.start);let ge=0;for(let J=1;J<q.length;J++){let ee=q[ge],xe=q[J],_e=ee.start+ee.count,de=st(xe.start,S.width,4),Ve=st(ee.start,S.width,4);xe.start<=_e+1&&de===Ve&&st(xe.start+xe.count-1,S.width,4)===de?ee.count=Math.max(ee.count,xe.start+xe.count-ee.start):(++ge,q[ge]=xe)}q.length=ge+1;let ie=a.getParameter(a.UNPACK_ROW_LENGTH),we=a.getParameter(a.UNPACK_SKIP_PIXELS),Ie=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let J=0,ee=q.length;J<ee;J++){let xe=q[J],_e=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),Ve=_e%S.width,L=Math.floor(_e/S.width),se=de,te=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ve),a.pixelStorei(a.UNPACK_SKIP_ROWS,L),t.texSubImage2D(a.TEXTURE_2D,0,Ve,L,se,te,N,Y,S.data)}C.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,ie),a.pixelStorei(a.UNPACK_SKIP_PIXELS,we),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ie)}}function $(C,S,N){let Y=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=a.TEXTURE_3D);let K=Fe(C,S),q=S.source;t.bindTexture(Y,C.__webglTexture,a.TEXTURE0+N);let ge=n.get(q);if(q.version!==ge.__version||K===!0){t.activeTexture(a.TEXTURE0+N);let ie=Xe.getPrimaries(Xe.workingColorSpace),we=S.colorSpace===oi?null:Xe.getPrimaries(S.colorSpace),Ie=S.colorSpace===oi||ie===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let J=x(S.image,!1,i.maxTextureSize);J=ct(S,J);let ee=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),_e=b(S.internalFormat,ee,xe,S.colorSpace,S.isVideoTexture);ce(Y,S);let de,Ve=S.mipmaps,L=S.isVideoTexture!==!0,se=ge.__version===void 0||K===!0,te=q.dataReady,pe=T(S,J);if(S.isDepthTexture)_e=_(S.format===Ei,S.type),se&&(L?t.texStorage2D(a.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(a.TEXTURE_2D,0,_e,J.width,J.height,0,ee,xe,null));else if(S.isDataTexture)if(Ve.length>0){L&&se&&t.texStorage2D(a.TEXTURE_2D,pe,_e,Ve[0].width,Ve[0].height);for(let Q=0,X=Ve.length;Q<X;Q++)de=Ve[Q],L?te&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,de.width,de.height,ee,xe,de.data):t.texImage2D(a.TEXTURE_2D,Q,_e,de.width,de.height,0,ee,xe,de.data);S.generateMipmaps=!1}else L?(se&&t.texStorage2D(a.TEXTURE_2D,pe,_e,J.width,J.height),te&&Ke(S,J,ee,xe)):t.texImage2D(a.TEXTURE_2D,0,_e,J.width,J.height,0,ee,xe,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&se&&t.texStorage3D(a.TEXTURE_2D_ARRAY,pe,_e,Ve[0].width,Ve[0].height,J.depth);for(let Q=0,X=Ve.length;Q<X;Q++)if(de=Ve[Q],S.format!==cn)if(ee!==null)if(L){if(te)if(S.layerUpdates.size>0){let ye=Bc(de.width,de.height,S.format,S.type);for(let Le of S.layerUpdates){let ht=de.data.subarray(Le*ye/de.data.BYTES_PER_ELEMENT,(Le+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,Le,de.width,de.height,1,ee,ht)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,ee,de.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Q,_e,de.width,de.height,J.depth,0,de.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,ee,xe,de.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Q,_e,de.width,de.height,J.depth,0,ee,xe,de.data)}else{L&&se&&t.texStorage2D(a.TEXTURE_2D,pe,_e,Ve[0].width,Ve[0].height);for(let Q=0,X=Ve.length;Q<X;Q++)de=Ve[Q],S.format!==cn?ee!==null?L?te&&t.compressedTexSubImage2D(a.TEXTURE_2D,Q,0,0,de.width,de.height,ee,de.data):t.compressedTexImage2D(a.TEXTURE_2D,Q,_e,de.width,de.height,0,de.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,de.width,de.height,ee,xe,de.data):t.texImage2D(a.TEXTURE_2D,Q,_e,de.width,de.height,0,ee,xe,de.data)}else if(S.isDataArrayTexture)if(L){if(se&&t.texStorage3D(a.TEXTURE_2D_ARRAY,pe,_e,J.width,J.height,J.depth),te)if(S.layerUpdates.size>0){let Q=Bc(J.width,J.height,S.format,S.type);for(let X of S.layerUpdates){let ye=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,ee,xe,ye)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ee,xe,J.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,ee,xe,J.data);else if(S.isData3DTexture)L?(se&&t.texStorage3D(a.TEXTURE_3D,pe,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ee,xe,J.data)):t.texImage3D(a.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,ee,xe,J.data);else if(S.isFramebufferTexture){if(se)if(L)t.texStorage2D(a.TEXTURE_2D,pe,_e,J.width,J.height);else{let Q=J.width,X=J.height;for(let ye=0;ye<pe;ye++)t.texImage2D(a.TEXTURE_2D,ye,_e,Q,X,0,ee,xe,null),Q>>=1,X>>=1}}else if(Ve.length>0){if(L&&se){let Q=be(Ve[0]);t.texStorage2D(a.TEXTURE_2D,pe,_e,Q.width,Q.height)}for(let Q=0,X=Ve.length;Q<X;Q++)de=Ve[Q],L?te&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,ee,xe,de):t.texImage2D(a.TEXTURE_2D,Q,_e,ee,xe,de);S.generateMipmaps=!1}else if(L){if(se){let Q=be(J);t.texStorage2D(a.TEXTURE_2D,pe,_e,Q.width,Q.height)}te&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ee,xe,J)}else t.texImage2D(a.TEXTURE_2D,0,_e,ee,xe,J);p(S)&&m(Y),ge.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ne(C,S,N){if(S.image.length!==6)return;let Y=Fe(C,S),K=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+N);let q=n.get(K);if(K.version!==q.__version||Y===!0){t.activeTexture(a.TEXTURE0+N);let ge=Xe.getPrimaries(Xe.workingColorSpace),ie=S.colorSpace===oi?null:Xe.getPrimaries(S.colorSpace),we=S.colorSpace===oi||ge===ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Ie&&!J?ee[X]=x(S.image[X],!0,i.maxCubemapSize):ee[X]=J?S.image[X].image:S.image[X],ee[X]=ct(S,ee[X]);let xe=ee[0],_e=s.convert(S.format,S.colorSpace),de=s.convert(S.type),Ve=b(S.internalFormat,_e,de,S.colorSpace),L=S.isVideoTexture!==!0,se=q.__version===void 0||Y===!0,te=K.dataReady,pe=T(S,xe);ce(a.TEXTURE_CUBE_MAP,S);let Q;if(Ie){L&&se&&t.texStorage2D(a.TEXTURE_CUBE_MAP,pe,Ve,xe.width,xe.height);for(let X=0;X<6;X++){Q=ee[X].mipmaps;for(let ye=0;ye<Q.length;ye++){let Le=Q[ye];S.format!==cn?_e!==null?L?te&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,0,0,Le.width,Le.height,_e,Le.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,Ve,Le.width,Le.height,0,Le.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,0,0,Le.width,Le.height,_e,de,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,Ve,Le.width,Le.height,0,_e,de,Le.data)}}}else{if(Q=S.mipmaps,L&&se){Q.length>0&&pe++;let X=be(ee[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,pe,Ve,X.width,X.height)}for(let X=0;X<6;X++)if(J){L?te&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,_e,de,ee[X].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ee[X].width,ee[X].height,0,_e,de,ee[X].data);for(let ye=0;ye<Q.length;ye++){let ht=Q[ye].image[X].image;L?te&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,0,0,ht.width,ht.height,_e,de,ht.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,Ve,ht.width,ht.height,0,_e,de,ht.data)}}else{L?te&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,_e,de,ee[X]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,_e,de,ee[X]);for(let ye=0;ye<Q.length;ye++){let Le=Q[ye];L?te&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,0,0,_e,de,Le.image[X]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,Ve,_e,de,Le.image[X])}}}p(S)&&m(a.TEXTURE_CUBE_MAP),q.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function re(C,S,N,Y,K,q){let ge=s.convert(N.format,N.colorSpace),ie=s.convert(N.type),we=b(N.internalFormat,ge,ie,N.colorSpace),Ie=n.get(S),J=n.get(N);if(J.__renderTarget=S,!Ie.__hasExternalTextures){let ee=Math.max(1,S.width>>q),xe=Math.max(1,S.height>>q);K===a.TEXTURE_3D||K===a.TEXTURE_2D_ARRAY?t.texImage3D(K,q,we,ee,xe,S.depth,0,ge,ie,null):t.texImage2D(K,q,we,ee,xe,0,ge,ie,null)}t.bindFramebuffer(a.FRAMEBUFFER,C),St(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Y,K,J.__webglTexture,0,P(S)):(K===a.TEXTURE_2D||K>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Y,K,J.__webglTexture,q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Be(C,S,N){if(a.bindRenderbuffer(a.RENDERBUFFER,C),S.depthBuffer){let Y=S.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=_(S.stencilBuffer,K),ge=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;St(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,P(S),q,S.width,S.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,P(S),q,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,q,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,C)}else{let Y=S.textures;for(let K=0;K<Y.length;K++){let q=Y[K],ge=s.convert(q.format,q.colorSpace),ie=s.convert(q.type),we=b(q.internalFormat,ge,ie,q.colorSpace);St(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,P(S),we,S.width,S.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,P(S),we,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,we,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ce(C,S,N){let Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),ce(a.TEXTURE_CUBE_MAP,S.depthTexture);let Ie=s.convert(S.depthTexture.format),J=s.convert(S.depthTexture.type),ee;S.depthTexture.format===Nn?ee=a.DEPTH_COMPONENT24:S.depthTexture.format===Ei&&(ee=a.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ee,S.width,S.height,0,Ie,J,null)}}else B(S.depthTexture,0);let q=K.__webglTexture,ge=P(S),ie=Y?a.TEXTURE_CUBE_MAP_POSITIVE_X+N:a.TEXTURE_2D,we=S.depthTexture.format===Ei?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(S.depthTexture.format===Nn)St(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,we,ie,q,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,we,ie,q,0);else if(S.depthTexture.format===Ei)St(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,we,ie,q,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,we,ie,q,0);else throw new Error("Unknown depthTexture format")}function De(C){let S=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Ce(S.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?Ce(S.__webglFramebuffer[0],C,0):Ce(S.__webglFramebuffer,C,0)}else if(N){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=a.createRenderbuffer(),Be(S.__webglDepthbuffer[Y],C,!1);else{let K=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,q)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),Be(S.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,q)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function It(C,S,N){let Y=n.get(C);S!==void 0&&re(Y.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),N!==void 0&&De(C)}function je(C){let S=C.texture,N=n.get(C),Y=n.get(S);C.addEventListener("dispose",A);let K=C.textures,q=C.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=a.createTexture()),Y.__version=S.version,r.memory.textures++),q){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let we=0;we<S.mipmaps.length;we++)N.__webglFramebuffer[ie][we]=a.createFramebuffer()}else N.__webglFramebuffer[ie]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)N.__webglFramebuffer[ie]=a.createFramebuffer()}else N.__webglFramebuffer=a.createFramebuffer();if(ge)for(let ie=0,we=K.length;ie<we;ie++){let Ie=n.get(K[ie]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=a.createTexture(),r.memory.textures++)}if(C.samples>0&&St(C)===!1){N.__webglMultisampledFramebuffer=a.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let we=K[ie];N.__webglColorRenderbuffer[ie]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);let Ie=s.convert(we.format,we.colorSpace),J=s.convert(we.type),ee=b(we.internalFormat,Ie,J,we.colorSpace,C.isXRRenderTarget===!0),xe=P(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,xe,ee,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ie,a.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=a.createRenderbuffer(),Be(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){t.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture),ce(a.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)re(N.__webglFramebuffer[ie][we],C,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we);else re(N.__webglFramebuffer[ie],C,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(S)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ie=0,we=K.length;ie<we;ie++){let Ie=K[ie],J=n.get(Ie),ee=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),ce(ee,Ie),re(N.__webglFramebuffer,C,Ie,a.COLOR_ATTACHMENT0+ie,ee,0),p(Ie)&&m(ee)}t.unbindTexture()}else{let ie=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),ce(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)re(N.__webglFramebuffer[we],C,S,a.COLOR_ATTACHMENT0,ie,we);else re(N.__webglFramebuffer,C,S,a.COLOR_ATTACHMENT0,ie,0);p(S)&&m(ie),t.unbindTexture()}C.depthBuffer&&De(C)}function tt(C){let S=C.textures;for(let N=0,Y=S.length;N<Y;N++){let K=S[N];if(p(K)){let q=y(C),ge=n.get(K).__webglTexture;t.bindTexture(q,ge),m(q),t.unbindTexture()}}}let ot=[],ze=[];function xt(C){if(C.samples>0){if(St(C)===!1){let S=C.textures,N=C.width,Y=C.height,K=a.COLOR_BUFFER_BIT,q=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=n.get(C),ie=S.length>1;if(ie)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let we=C.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=a.STENCIL_BUFFER_BIT)),ie){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]);let J=n.get(S[Ie]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,J,0)}a.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,a.NEAREST),l===!0&&(ot.length=0,ze.length=0,ot.push(a.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ot.push(q),ze.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ze)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ie)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]);let J=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,J,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function P(C){return Math.min(i.maxSamples,C.samples)}function St(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(C){let S=r.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ct(C,S){let N=C.colorSpace,Y=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Ut&&N!==oi&&(Xe.getTransfer(N)===Je?(Y!==cn||K!==Zt)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",N)),S}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=D,this.setTextureCube=j,this.rebindTextures=It,this.setupRenderTarget=je,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=re,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ey(a,e){function t(n,i=oi){let s,r=Xe.getTransfer(i);if(n===Zt)return a.UNSIGNED_BYTE;if(n===Za)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return a.BYTE;if(n===Ac)return a.SHORT;if(n===Bs)return a.UNSIGNED_SHORT;if(n===Ka)return a.INT;if(n===An)return a.UNSIGNED_INT;if(n===ln)return a.FLOAT;if(n===Gn)return a.HALF_FLOAT;if(n===Ic)return a.ALPHA;if(n===Pc)return a.RGB;if(n===cn)return a.RGBA;if(n===Nn)return a.DEPTH_COMPONENT;if(n===Ei)return a.DEPTH_STENCIL;if(n===Qa)return a.RED;if(n===eo)return a.RED_INTEGER;if(n===ji)return a.RG;if(n===to)return a.RG_INTEGER;if(n===no)return a.RGBA_INTEGER;if(n===Cr||n===Ir||n===Pr||n===Dr)if(r===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oo||n===lo)return r===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===co)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return s.COMPRESSED_R11_EAC;if(n===uo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return s.COMPRESSED_RG11_EAC;if(n===po)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mo||n===go||n===xo||n===yo||n===_o||n===vo||n===bo||n===So||n===Mo||n===Eo||n===To||n===wo||n===Ao||n===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return r===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Io||n===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Co)return r===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Lo||n===No||n===Fo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends ii{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Qc,m={},y=t.getContextAttributes(),b=null,_=null,T=[],w=[],A=new Pe,v=null,M=new Et;M.viewport=new dt;let k=new Et;k.viewport=new dt;let R=[M,k],F=new Xa,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=T[$];return ne===void 0&&(ne=new Rs,T[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=T[$];return ne===void 0&&(ne=new Rs,T[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=T[$];return ne===void 0&&(ne=new Rs,T[$]=ne),ne.getHandSpace()};function B($){let ne=w.indexOf($.inputSource);if(ne===-1)return;let re=T[ne];re!==void 0&&(re.update($.inputSource,$.frame,c||r),re.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",D);for(let $=0;$<T.length;$++){let ne=w[$];ne!==null&&(w[$]=null,T[$].disconnect(ne))}U=null,G=null,p.reset();for(let $ in m)delete m[$];e.setRenderTarget(b),f=null,u=null,d=null,i=null,_=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=function($){return dn(this,null,function*(){if(i=$,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&(yield t.makeXRCompatible()),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Be=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Ei:Nn,Be=y.stencil?Hs:An);let De={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(De),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new sn(u.textureWidth,u.textureHeight,{format:cn,type:Zt,depthTexture:new vi(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new sn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=yield i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function D($){for(let ne=0;ne<$.removed.length;ne++){let re=$.removed[ne],Be=w.indexOf(re);Be>=0&&(w[Be]=null,T[Be].disconnect(re))}for(let ne=0;ne<$.added.length;ne++){let re=$.added[ne],Be=w.indexOf(re);if(Be===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(re),Be=De;break}else if(w[De]===null){w[De]=re,Be=De;break}if(Be===-1)break}let Ce=T[Be];Ce&&Ce.connect(re)}}let j=new I,Z=new I;function ue($,ne,re){j.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);let Be=j.distanceTo(Z),Ce=ne.projectionMatrix.elements,De=re.projectionMatrix.elements,It=Ce[14]/(Ce[10]-1),je=Ce[14]/(Ce[10]+1),tt=(Ce[9]+1)/Ce[5],ot=(Ce[9]-1)/Ce[5],ze=(Ce[8]-1)/Ce[0],xt=(De[8]+1)/De[0],P=It*ze,St=It*xt,Ze=Be/(-ze+xt),ct=Ze*-ze;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(Ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let be=It+Ze,C=je+Ze,S=P-ct,N=St+(Be-ct),Y=tt*je/C*be,K=ot*je/C*be;$.projectionMatrix.makePerspective(S,N,Y,K,be,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ne=$.near,re=$.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(re=p.depthFar)),F.near=k.near=M.near=ne,F.far=k.far=M.far=re,(U!==F.near||G!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,G=F.far),F.layers.mask=$.layers.mask|6,M.layers.mask=F.layers.mask&-5,k.layers.mask=F.layers.mask&-3;let Be=$.parent,Ce=F.cameras;me(F,Be);for(let De=0;De<Ce.length;De++)me(Ce[De],Be);Ce.length===2?ue(F,M,k):F.projectionMatrix.copy(M.projectionMatrix),ce($,F,Be)};function ce($,ne,re){re===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ui*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function($){return m[$]};let Fe=null;function st($,ne){if(h=ne.getViewerPose(c||r),g=ne,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Be=!1;re.length!==F.cameras.length&&(F.cameras.length=0,Be=!0);for(let je=0;je<re.length;je++){let tt=re[je],ot=null;if(f!==null)ot=f.getViewport(tt);else{let xt=d.getViewSubImage(u,tt);ot=xt.viewport,je===0&&(e.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(_))}let ze=R[je];ze===void 0&&(ze=new Et,ze.layers.enable(je),ze.viewport=new dt,R[je]=ze),ze.matrix.fromArray(tt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(tt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ot.x,ot.y,ot.width,ot.height),je===0&&(F.matrix.copy(ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Be===!0&&F.cameras.push(ze)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let je=d.getDepthInformation(re[0]);je&&je.isValid&&je.texture&&p.init(je,i.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let je=0;je<re.length;je++){let tt=re[je].camera;if(tt){let ot=m[tt];ot||(ot=new br,m[tt]=ot);let ze=d.getCameraImage(tt);ot.sourceTexture=ze}}}}for(let re=0;re<T.length;re++){let Be=w[re],Ce=T[re];Be!==null&&Ce!==void 0&&Ce.update(Be,ne,c||r)}Fe&&Fe($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Ke=new Vd;Ke.setAnimationLoop(st),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}},Ji=new Fn,iy=new Ne;function sy(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Oc(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,b,_){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Yt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Yt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,_=y.envMapRotation;b&&(p.envMap.value=b,Ji.copy(_),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),p.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Ji)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ry(a,e,t,n){let i={},s={},r=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let _=b.program;n.uniformBlockBinding(y,_)}function c(y,b){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",p));let T=b.program;n.updateUBOMapping(y,T);let w=e.render.frame;s[y.id]!==w&&(u(y),s[y.id]=w)}function h(y){let b=d();y.__bindingPointIndex=b;let _=a.createBuffer(),T=y.__size,w=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,T,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,_),_}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=i[y.id],_=y.uniforms,T=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let w=0,A=_.length;w<A;w++){let v=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,k=v.length;M<k;M++){let R=v[M];if(f(R,w,M,T)===!0){let F=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],G=0;for(let B=0;B<U.length;B++){let H=U[B],D=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,a.bufferSubData(a.UNIFORM_BUFFER,F+G,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,G),G+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,F,R.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,b,_,T){let w=y.value,A=b+"_"+_;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let v=T[A];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return T[A]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function g(y){let b=y.uniforms,_=0,T=16;for(let A=0,v=b.length;A<v;A++){let M=Array.isArray(b[A])?b[A]:[b[A]];for(let k=0,R=M.length;k<R;k++){let F=M[k],U=Array.isArray(F.value)?F.value:[F.value];for(let G=0,B=U.length;G<B;G++){let H=U[G],D=x(H),j=_%T,Z=j%D.boundary,ue=j+Z;_+=Z,ue!==0&&T-ue<D.storage&&(_+=T-ue),F.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=D.storage}}}let w=_%T;return w>0&&(_+=T-w),y.__size=_,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){let b=y.target;b.removeEventListener("dispose",p);let _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),a.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(let y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}var ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function oy(){return Wn===null&&(Wn=new Ps(ay,16,16,ji,Gn),Wn.name="DFG_LUT",Wn.minFilter=_t,Wn.magFilter=_t,Wn.wrapS=Ot,Wn.wrapT=Ot,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Go=class{constructor(e={}){let{canvas:t=ud(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;let x=f,p=new Set([no,to,eo]),m=new Set([Zt,An,Bs,Hs,Za,Ja]),y=new Uint32Array(4),b=new Int32Array(4),_=null,T=null,w=[],A=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,k=!1;this._outputColorSpace=ut;let R=0,F=0,U=null,G=-1,B=null,H=new dt,D=new dt,j=null,Z=new he(0),ue=0,me=t.width,ce=t.height,Fe=1,st=null,Ke=null,$=new dt(0,0,me,ce),ne=new dt(0,0,me,ce),re=!1,Be=new Ds,Ce=!1,De=!1,It=new Ne,je=new I,tt=new dt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function xt(){return U===null?Fe:1}let P=n;function St(E,O){return t.getContext(E,O)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ht,!1),P===null){let O="webgl2";if(P=St(O,E),P===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Re("WebGLRenderer: "+E.message),E}let Ze,ct,be,C,S,N,Y,K,q,ge,ie,we,Ie,J,ee,xe,_e,de,Ve,L,se,te,pe;function Q(){Ze=new m0(P),Ze.init(),se=new ey(P,Ze),ct=new o0(P,Ze,e,se),be=new Jx(P,Ze),ct.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),C=new y0(P),S=new kx,N=new Qx(P,Ze,be,S,ct,se,C),Y=new p0(M),K=new Mp(P),te=new r0(P,K),q=new g0(P,K,C,te),ge=new v0(P,q,K,te,C),de=new _0(P,ct,N),ee=new l0(S),ie=new Ux(M,Y,Ze,ct,te,ee),we=new sy(M,S),Ie=new Hx,J=new qx(Ze),_e=new s0(M,Y,be,ge,g,l),xe=new Zx(M,ge,ct),pe=new ry(P,C,ct,be),Ve=new a0(P,Ze,C),L=new x0(P,Ze,C),C.programs=ie.programs,M.capabilities=ct,M.extensions=Ze,M.properties=S,M.renderLists=Ie,M.shadowMap=xe,M.state=be,M.info=C}Q(),x!==Zt&&(v=new S0(x,t.width,t.height,i,s));let X=new eh(M,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){E!==void 0&&(Fe=E,this.setSize(me,ce,!1))},this.getSize=function(E){return E.set(me,ce)},this.setSize=function(E,O,W=!0){if(X.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}me=E,ce=O,t.width=Math.floor(E*Fe),t.height=Math.floor(O*Fe),W===!0&&(t.style.width=E+"px",t.style.height=O+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(me*Fe,ce*Fe).floor()},this.setDrawingBufferSize=function(E,O,W){me=E,ce=O,Fe=W,t.width=Math.floor(E*W),t.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===Zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,O,W,V){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,O,W,V),be.viewport(H.copy($).multiplyScalar(Fe).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,O,W,V){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,O,W,V),be.scissor(D.copy(ne).multiplyScalar(Fe).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){be.setScissorTest(re=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){Ke=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let V=0;if(E){let z=!1;if(U!==null){let oe=U.texture.format;z=p.has(oe)}if(z){let oe=U.texture.type,fe=m.has(oe),le=_e.getClearColor(),ve=_e.getClearAlpha(),Me=le.r,Oe=le.g,Ge=le.b;fe?(y[0]=Me,y[1]=Oe,y[2]=Ge,y[3]=ve,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=Me,b[1]=Oe,b[2]=Ge,b[3]=ve,P.clearBufferiv(P.COLOR,0,b))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),W&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),_e.dispose(),Ie.dispose(),J.dispose(),S.dispose(),Y.dispose(),ge.dispose(),te.dispose(),pe.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",Fh),X.removeEventListener("sessionend",Oh),Ai.stop()};function ye(E){E.preventDefault(),lr("WebGLRenderer: Context Lost."),k=!0}function Le(){lr("WebGLRenderer: Context Restored."),k=!1;let E=C.autoReset,O=xe.enabled,W=xe.autoUpdate,V=xe.needsUpdate,z=xe.type;Q(),C.autoReset=E,xe.enabled=O,xe.autoUpdate=W,xe.needsUpdate=V,xe.type=z}function ht(E){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){let O=E.target;O.removeEventListener("dispose",nt),Yn(O)}function Yn(E){jn(E),S.remove(E)}function jn(E){let O=S.get(E).programs;O!==void 0&&(O.forEach(function(W){ie.releaseProgram(W)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,V,z,oe){O===null&&(O=ot);let fe=z.isMesh&&z.matrixWorld.determinant()<0,le=xf(E,O,W,V,z);be.setMaterial(V,fe);let ve=W.index,Me=1;if(V.wireframe===!0){if(ve=q.getWireframeAttribute(W),ve===void 0)return;Me=2}let Oe=W.drawRange,Ge=W.attributes.position,Te=Oe.start*Me,rt=(Oe.start+Oe.count)*Me;oe!==null&&(Te=Math.max(Te,oe.start*Me),rt=Math.min(rt,(oe.start+oe.count)*Me)),ve!==null?(Te=Math.max(Te,0),rt=Math.min(rt,ve.count)):Ge!=null&&(Te=Math.max(Te,0),rt=Math.min(rt,Ge.count));let yt=rt-Te;if(yt<0||yt===1/0)return;te.setup(z,V,le,W,ve);let mt,at=Ve;if(ve!==null&&(mt=K.get(ve),at=L,at.setIndex(mt)),z.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*xt()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(z.isLine){let kt=V.linewidth;kt===void 0&&(kt=1),be.setLineWidth(kt*xt()),z.isLineSegments?at.setMode(P.LINES):z.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else z.isPoints?at.setMode(P.POINTS):z.isSprite&&at.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)cr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let kt=z._multiDrawStarts,Se=z._multiDrawCounts,Jt=z._multiDrawCount,$e=ve?K.get(ve).bytesPerElement:1,mn=S.get(V).currentProgram.getUniforms();for(let Rn=0;Rn<Jt;Rn++)mn.setValue(P,"_gl_DrawID",Rn),at.render(kt[Rn]/$e,Se[Rn])}else if(z.isInstancedMesh)at.renderInstances(Te,yt,z.count);else if(W.isInstancedBufferGeometry){let kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,kt);at.renderInstances(Te,yt,Se)}else at.render(Te,yt)};function Nh(E,O,W){E.transparent===!0&&E.side===Gt&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,Br(E,O,W),E.side=tn,E.needsUpdate=!0,Br(E,O,W),E.side=Gt):Br(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),T=J.get(W),T.init(O),A.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();let V=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let oe=z.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let le=oe[fe];Nh(le,W,z),V.add(le)}else Nh(oe,W,z),V.add(oe)}),T=A.pop(),V},this.compileAsync=function(E,O,W=null){let V=this.compile(E,O,W);return new Promise(z=>{function oe(){if(V.forEach(function(fe){S.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){z(E);return}setTimeout(oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Sl=null;function gf(E){Sl&&Sl(E)}function Fh(){Ai.stop()}function Oh(){Ai.start()}let Ai=new Vd;Ai.setAnimationLoop(gf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(E){Sl=E,X.setAnimationLoop(E),E===null?Ai.stop():Ai.start()},X.addEventListener("sessionstart",Fh),X.addEventListener("sessionend",Oh),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;let W=X.enabled===!0&&X.isPresenting===!0,V=v!==null&&(U===null||W)&&v.begin(M,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,U),T=J.get(E,A.length),T.init(O),A.push(T),It.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(It,vn,O.reversedDepth),De=this.localClippingEnabled,Ce=ee.init(this.clippingPlanes,De),_=Ie.get(E,w.length),_.init(),w.push(_),X.enabled===!0&&X.isPresenting===!0){let fe=M.xr.getDepthSensingMesh();fe!==null&&Ml(fe,O,-1/0,M.sortObjects)}Ml(E,O,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(st,Ke),ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ze&&_e.addToRenderList(_,E),this.info.render.frame++,Ce===!0&&ee.beginShadows();let z=T.state.shadowsArray;if(xe.render(z,E,O),Ce===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&v.hasRenderPass())===!1){let fe=_.opaque,le=_.transmissive;if(T.setupLights(),O.isArrayCamera){let ve=O.cameras;if(le.length>0)for(let Me=0,Oe=ve.length;Me<Oe;Me++){let Ge=ve[Me];kh(fe,le,E,Ge)}ze&&_e.render(E);for(let Me=0,Oe=ve.length;Me<Oe;Me++){let Ge=ve[Me];Uh(_,E,Ge,Ge.viewport)}}else le.length>0&&kh(fe,le,E,O),ze&&_e.render(E),Uh(_,E,O)}U!==null&&F===0&&(N.updateMultisampleRenderTarget(U),N.updateRenderTargetMipmap(U)),V&&v.end(M),E.isScene===!0&&E.onAfterRender(M,E,O),te.resetDefaultState(),G=-1,B=null,A.pop(),A.length>0?(T=A[A.length-1],Ce===!0&&ee.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Ml(E,O,W,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){V&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);let fe=ge.update(E),le=E.material;le.visible&&_.push(E,fe,le,W,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){let fe=ge.update(E),le=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),tt.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),tt.copy(fe.boundingSphere.center)),tt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(le)){let ve=fe.groups;for(let Me=0,Oe=ve.length;Me<Oe;Me++){let Ge=ve[Me],Te=le[Ge.materialIndex];Te&&Te.visible&&_.push(E,fe,Te,W,tt.z,Ge)}}else le.visible&&_.push(E,fe,le,W,tt.z,null)}}let oe=E.children;for(let fe=0,le=oe.length;fe<le;fe++)Ml(oe[fe],O,W,V)}function Uh(E,O,W,V){let{opaque:z,transmissive:oe,transparent:fe}=E;T.setupLightsView(W),Ce===!0&&ee.setGlobalState(M.clippingPlanes,W),V&&be.viewport(H.copy(V)),z.length>0&&kr(z,O,W),oe.length>0&&kr(oe,O,W),fe.length>0&&kr(fe,O,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function kh(E,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Te=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new sn(1,1,{generateMipmaps:!0,type:Te?Gn:Zt,minFilter:wn,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let oe=T.state.transmissionRenderTarget[V.id],fe=V.viewport||H;oe.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);let le=M.getRenderTarget(),ve=M.getActiveCubeFace(),Me=M.getActiveMipmapLevel();M.setRenderTarget(oe),M.getClearColor(Z),ue=M.getClearAlpha(),ue<1&&M.setClearColor(16777215,.5),M.clear(),ze&&_e.render(W);let Oe=M.toneMapping;M.toneMapping=Tn;let Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ce===!0&&ee.setGlobalState(M.clippingPlanes,V),kr(E,W,V),N.updateMultisampleRenderTarget(oe),N.updateRenderTargetMipmap(oe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let rt=0,yt=O.length;rt<yt;rt++){let mt=O[rt],{object:at,geometry:kt,material:Se,group:Jt}=mt;if(Se.side===Gt&&at.layers.test(V.layers)){let $e=Se.side;Se.side=Yt,Se.needsUpdate=!0,Bh(at,W,V,kt,Se,Jt),Se.side=$e,Se.needsUpdate=!0,Te=!0}}Te===!0&&(N.updateMultisampleRenderTarget(oe),N.updateRenderTargetMipmap(oe))}M.setRenderTarget(le,ve,Me),M.setClearColor(Z,ue),Ge!==void 0&&(V.viewport=Ge),M.toneMapping=Oe}function kr(E,O,W){let V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,oe=E.length;z<oe;z++){let fe=E[z],{object:le,geometry:ve,group:Me}=fe,Oe=fe.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),le.layers.test(W.layers)&&Bh(le,O,W,ve,Oe,Me)}}function Bh(E,O,W,V,z,oe){E.onBeforeRender(M,O,W,V,z,oe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(M,O,W,V,E,oe),z.transparent===!0&&z.side===Gt&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,M.renderBufferDirect(W,O,V,z,E,oe),z.side=tn,z.needsUpdate=!0,M.renderBufferDirect(W,O,V,z,E,oe),z.side=Gt):M.renderBufferDirect(W,O,V,z,E,oe),E.onAfterRender(M,O,W,V,z,oe)}function Br(E,O,W){O.isScene!==!0&&(O=ot);let V=S.get(E),z=T.state.lights,oe=T.state.shadowsArray,fe=z.state.version,le=ie.getParameters(E,z.state,oe,O,W),ve=ie.getProgramCacheKey(le),Me=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=Y.get(E.envMap||V.environment,Oe),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Me===void 0&&(E.addEventListener("dispose",nt),Me=new Map,V.programs=Me);let Ge=Me.get(ve);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===fe)return zh(E,le),Ge}else le.uniforms=ie.getUniforms(E),E.onBeforeCompile(le,M),Ge=ie.acquireProgram(le,ve),Me.set(ve,Ge),V.uniforms=le.uniforms;let Te=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ee.uniform),zh(E,le),V.needsLights=_f(E),V.lightsStateVersion=fe,V.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function Hh(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Gs.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function zh(E,O){let W=S.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function xf(E,O,W,V,z){O.isScene!==!0&&(O=ot),N.resetTextureUnits();let oe=O.fog,fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,le=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ut,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Me=Y.get(V.envMap||fe,ve),Oe=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color,mt=Tn;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(mt=M.toneMapping);let at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,kt=at!==void 0?at.length:0,Se=S.get(V),Jt=T.state.lights;if(Ce===!0&&(De===!0||E!==B)){let Pt=E===B&&V.id===G;ee.setState(V,E,Pt)}let $e=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Jt.state.version||Se.outputColorSpace!==le||z.isBatchedMesh&&Se.batching===!1||!z.isBatchedMesh&&Se.batching===!0||z.isBatchedMesh&&Se.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Se.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Se.instancing===!1||!z.isInstancedMesh&&Se.instancing===!0||z.isSkinnedMesh&&Se.skinning===!1||!z.isSkinnedMesh&&Se.skinning===!0||z.isInstancedMesh&&Se.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Se.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Se.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Se.instancingMorph===!1&&z.morphTexture!==null||Se.envMap!==Me||V.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Oe||Se.vertexTangents!==Ge||Se.morphTargets!==Te||Se.morphNormals!==rt||Se.morphColors!==yt||Se.toneMapping!==mt||Se.morphTargetsCount!==kt)&&($e=!0):($e=!0,Se.__version=V.version);let mn=Se.currentProgram;$e===!0&&(mn=Br(V,O,z));let Rn=!1,Ri=!1,ts=!1,lt=mn.getUniforms(),Ft=Se.uniforms;if(be.useProgram(mn.program)&&(Rn=!0,Ri=!0,ts=!0),V.id!==G&&(G=V.id,Ri=!0),Rn||B!==E){be.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",E.projectionMatrix),lt.setValue(P,"viewMatrix",E.matrixWorldInverse);let ci=lt.map.cameraPosition;ci!==void 0&&ci.setValue(P,je.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,Ri=!0,ts=!0)}if(Se.needsLights&&(Jt.state.directionalShadowMap.length>0&&lt.setValue(P,"directionalShadowMap",Jt.state.directionalShadowMap,N),Jt.state.spotShadowMap.length>0&&lt.setValue(P,"spotShadowMap",Jt.state.spotShadowMap,N),Jt.state.pointShadowMap.length>0&&lt.setValue(P,"pointShadowMap",Jt.state.pointShadowMap,N)),z.isSkinnedMesh){lt.setOptional(P,z,"bindMatrix"),lt.setOptional(P,z,"bindMatrixInverse");let Pt=z.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),lt.setValue(P,"boneTexture",Pt.boneTexture,N))}z.isBatchedMesh&&(lt.setOptional(P,z,"batchingTexture"),lt.setValue(P,"batchingTexture",z._matricesTexture,N),lt.setOptional(P,z,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",z._indirectTexture,N),lt.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",z._colorsTexture,N));let li=W.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&de.update(z,W,mn),(Ri||Se.receiveShadow!==z.receiveShadow)&&(Se.receiveShadow=z.receiveShadow,lt.setValue(P,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Ft.envMapIntensity.value=O.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=oy()),Ri&&(lt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Se.needsLights&&yf(Ft,ts),oe&&V.fog===!0&&we.refreshFogUniforms(Ft,oe),we.refreshMaterialUniforms(Ft,V,Fe,ce,T.state.transmissionRenderTarget[E.id]),Gs.upload(P,Hh(Se),Ft,N)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gs.upload(P,Hh(Se),Ft,N),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(P,"center",z.center),lt.setValue(P,"modelViewMatrix",z.modelViewMatrix),lt.setValue(P,"normalMatrix",z.normalMatrix),lt.setValue(P,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Pt=V.uniformsGroups;for(let ci=0,ns=Pt.length;ci<ns;ci++){let Vh=Pt[ci];pe.update(Vh,mn),pe.bind(Vh,mn)}}return mn}function yf(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function _f(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,O,W){let V=S.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=O,S.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let W=S.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};let vf=P.createFramebuffer();this.setRenderTarget=function(E,O=0,W=0){U=E,R=O,F=W;let V=null,z=!1,oe=!1;if(E){let le=S.get(E);if(le.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),H.copy(E.viewport),D.copy(E.scissor),j=E.scissorTest,be.viewport(H),be.scissor(D),be.setScissorTest(j),G=-1;return}else if(le.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(le.__hasExternalTextures)N.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Oe=E.depthTexture;if(le.__boundDepthTexture!==Oe){if(Oe!==null&&S.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(oe=!0);let Me=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Me[O])?V=Me[O][W]:V=Me[O],z=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?V=S.get(E).__webglMultisampledFramebuffer:Array.isArray(Me)?V=Me[W]:V=Me,H.copy(E.viewport),D.copy(E.scissor),j=E.scissorTest}else H.copy($).multiplyScalar(Fe).floor(),D.copy(ne).multiplyScalar(Fe).floor(),j=re;if(W!==0&&(V=vf),be.bindFramebuffer(P.FRAMEBUFFER,V)&&be.drawBuffers(E,V),be.viewport(H),be.scissor(D),be.setScissorTest(j),z){let le=S.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,le.__webglTexture,W)}else if(oe){let le=O;for(let ve=0;ve<E.textures.length;ve++){let Me=S.get(E.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,Me.__webglTexture,W,le)}}else if(E!==null&&W!==0){let le=S.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(E,O,W,V,z,oe,fe,le=0){if(!(E&&E.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){be.bindFramebuffer(P.FRAMEBUFFER,ve);try{let Me=E.textures[le],Oe=Me.format,Ge=Me.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!ct.textureFormatReadable(Oe)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ge)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&W>=0&&W<=E.height-z&&P.readPixels(O,W,V,z,se.convert(Oe),se.convert(Ge),oe)}finally{let Me=U!==null?S.get(U).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=function(E,O,W,V,z,oe,fe,le=0){return dn(this,null,function*(){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(O>=0&&O<=E.width-V&&W>=0&&W<=E.height-z){be.bindFramebuffer(P.FRAMEBUFFER,ve);let Me=E.textures[le],Oe=Me.format,Ge=Me.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!ct.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(O,W,V,z,se.convert(Oe),se.convert(Ge),0);let rt=U!==null?S.get(U).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,rt);let yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),yield fd(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(Te),P.deleteSync(yt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(E,O=null,W=0){let V=Math.pow(2,-W),z=Math.floor(E.image.width*V),oe=Math.floor(E.image.height*V),fe=O!==null?O.x:0,le=O!==null?O.y:0;N.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,fe,le,z,oe),be.unbindTexture()};let bf=P.createFramebuffer(),Sf=P.createFramebuffer();this.copyTextureToTexture=function(E,O,W=null,V=null,z=0,oe=0){let fe,le,ve,Me,Oe,Ge,Te,rt,yt,mt=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(W!==null)fe=W.max.x-W.min.x,le=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,Oe=W.min.y,Ge=W.isBox3?W.min.z:0;else{let Ft=Math.pow(2,-z);fe=Math.floor(mt.width*Ft),le=Math.floor(mt.height*Ft),E.isDataArrayTexture?ve=mt.depth:E.isData3DTexture?ve=Math.floor(mt.depth*Ft):ve=1,Me=0,Oe=0,Ge=0}V!==null?(Te=V.x,rt=V.y,yt=V.z):(Te=0,rt=0,yt=0);let at=se.convert(O.format),kt=se.convert(O.type),Se;O.isData3DTexture?(N.setTexture3D(O,0),Se=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),Se=P.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let Jt=P.getParameter(P.UNPACK_ROW_LENGTH),$e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Rn=P.getParameter(P.UNPACK_SKIP_ROWS),Ri=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);let ts=E.isDataArrayTexture||E.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Ft=S.get(E),li=S.get(O),Pt=S.get(Ft.__renderTarget),ci=S.get(li.__renderTarget);be.bindFramebuffer(P.READ_FRAMEBUFFER,Pt.__webglFramebuffer),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let ns=0;ns<ve;ns++)ts&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(E).__webglTexture,z,Ge+ns),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(O).__webglTexture,oe,yt+ns)),P.blitFramebuffer(Me,Oe,fe,le,Te,rt,fe,le,P.DEPTH_BUFFER_BIT,P.NEAREST);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||S.has(E)){let Ft=S.get(E),li=S.get(O);be.bindFramebuffer(P.READ_FRAMEBUFFER,bf),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,Sf);for(let Pt=0;Pt<ve;Pt++)ts?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,z,Ge+Pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,z),lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,li.__webglTexture,oe,yt+Pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,li.__webglTexture,oe),z!==0?P.blitFramebuffer(Me,Oe,fe,le,Te,rt,fe,le,P.COLOR_BUFFER_BIT,P.NEAREST):lt?P.copyTexSubImage3D(Se,oe,Te,rt,yt+Pt,Me,Oe,fe,le):P.copyTexSubImage2D(Se,oe,Te,rt,Me,Oe,fe,le);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Se,oe,Te,rt,yt,fe,le,ve,at,kt,mt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,oe,Te,rt,yt,fe,le,ve,at,mt.data):P.texSubImage3D(Se,oe,Te,rt,yt,fe,le,ve,at,kt,mt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,Te,rt,fe,le,at,kt,mt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,Te,rt,mt.width,mt.height,at,mt.data):P.texSubImage2D(P.TEXTURE_2D,oe,Te,rt,fe,le,at,kt,mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Jt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ri),oe===0&&O.generateMipmaps&&P.generateMipmap(Se),be.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){R=0,F=0,U=null,be.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var qo=class{textures=new Map;loader=new Gi;loadTexture(e,t){return dn(this,null,function*(){return new Promise((n,i)=>{this.loader.load(t,s=>{s.magFilter=Ye,s.minFilter=Ye,s.colorSpace=ut,s.flipY=!1,s.wrapS=Sn,s.wrapT=Sn,this.textures.set(e,s),console.log(`Texture loaded: [${e}]`),n()},void 0,s=>{console.error(`Failed to load texture: ${t}`,s),i(s)})})})}getTexture(e){let t=this.textures.get(e);if(!t)throw new Error(`Texture [${e}] not found! Did you await loadTexture?`);return t}};var wt={potion:{id:"potion",name:"Basic Potion",description:"A basic healing potion. Restores a small amount of HP.",maxStack:3,type:"consumable",animType:"hold",equippable:!1,usableInHotbar:!0},sword:{id:"sword",name:"Basic Sword",description:"A reliable steel sword.",maxStack:1,type:"weapon",animType:"swing",attackId:"slash_short",weaponDamage:12,equippable:!0,allowedEquipSlots:["rightHand"],usableInHotbar:!1},staff:{id:"staff",name:"Basic Staff",description:"A staff used to cast magic.",maxStack:1,type:"weapon",animType:"cast",attackId:"staff_orb_basic",weaponDamage:8,meleeReach:.72,meleeSwipeHalfArcRad:.32,rangedWeaponKind:"staff_orb",projectileSpeed:5,projectileMaxRange:100,projectileCollisionRadius:.14,projectileSpawnOffset:{z:-.38,y:.04},rangedCooldownSec:.28,equippable:!0,allowedEquipSlots:["rightHand"],usableInHotbar:!1},throwing_knife:{id:"throwing_knife",name:"Throwing Knife",description:"A light blade thrown from the hand.",maxStack:1,type:"weapon",animType:"throw",attackId:"knife_throw_basic",weaponDamage:11,voxelTextureId:"weapon_basic_knife",rangedWeaponKind:"throwing_knife",projectileSpeed:8,projectileMaxRange:32,projectileSpawnOffset:{z:-.34,y:.02},rangedCooldownSec:.52,equippable:!0,allowedEquipSlots:["rightHand"],usableInHotbar:!1},chakram:{id:"chakram",name:"Chakram",description:"A returning disc; bounces off foes and walls before homing back.",maxStack:1,type:"weapon",animType:"chakram",attackId:"chakram_boomerang",weaponDamage:14,voxelTextureId:"weapon_basic_chakram",rangedWeaponKind:"chakram",projectileSpeed:8.5,projectileMaxRange:28,projectileSpawnOffset:{z:-.36,y:.02},rangedCooldownSec:.85,chakramMaxBounces:3,chakramMaxOutboundSec:3,equippable:!0,allowedEquipSlots:["rightHand"],usableInHotbar:!1},bow_basic:{id:"bow_basic",name:"Basic Bow",description:"A simple bow with a clean draw-release cadence.",maxStack:1,type:"weapon",animType:"bow",attackId:"bow_arrow_basic",weaponDamage:10,rangedWeaponKind:"bow_arrow",projectileSpeed:14,projectileMaxRange:52,projectileCollisionRadius:.1,projectileSpawnOffset:{z:-.48,y:.06,x:.04},equipmentRotationDegrees:{z:-65,y:35,x:-15},rangedCooldownSec:.42,equippable:!0,allowedEquipSlots:["rightHand"],usableInHotbar:!1},fire_sword:{id:"fire_sword",name:"Fire Sword",description:"A sword wreathed in flame; strikes leave holy/fiery traces.",maxStack:1,type:"weapon",animType:"swing",attackId:"slash_fire",weaponDamage:18,meleeReach:1.05,meleeSwipeHalfArcRad:.45,equippable:!0,allowedEquipSlots:["rightHand"],usableInHotbar:!1},item_lantern:{id:"item_lantern",name:"Lantern",description:"A handheld lantern that provides light. (Emits light once it gains an emission map.)",maxStack:1,type:"accessory",animType:"hold",equippable:!0,rendersIn3d:!0,allowedEquipSlots:["beltLeft"],usableInHotbar:!1},item_book:{id:"item_book",name:"Book",description:"An old tome carried in the offhand.",maxStack:1,type:"accessory",animType:"hold",attackModifiers:[{statusesAdd:[{kind:"dot",durationSec:2.5,tickEverySec:.5,magnitude:1}]}],equippable:!0,rendersIn3d:!0,allowedEquipSlots:["leftHand"],firstPersonOffset:{x:.03,y:-.12,rotY:-.22,rotX:.12,scale:.85},usableInHotbar:!1},coin:{id:"coin",name:"Gold Coin",description:"Currency used to buy items.",maxStack:99,type:"material",animType:"hold",equippable:!1,usableInHotbar:!1}};var Nt={dash:{id:"dash",name:"Shadow Dash",description:"A burst of speed in your movement direction.",maxRank:3,assignableToHotbar:!1,ranks:[{soulCost:25,effects:{dashSpeedMult:3,dashDuration:.18,dashCooldown:1.5}},{soulCost:60,effects:{dashSpeedMult:3.5,dashDuration:.2,dashCooldown:1.2}},{soulCost:120,effects:{dashSpeedMult:4,dashDuration:.22,dashCooldown:.9}}]},double_jump:{id:"double_jump",name:"Double Jump",description:"Gain one extra jump while airborne.",maxRank:1,assignableToHotbar:!1,ranks:[{soulCost:80,effects:{extraAirJumps:1}}]},auto_fire:{id:"auto_fire",name:"Auto Fire",description:"Hold primary fire to repeatedly attack.",maxRank:1,assignableToHotbar:!1,ranks:[{soulCost:65,effects:{enabled:1}}]},big_boom:{id:"big_boom",name:"Big Boom",description:"Fire a thick piercing orb that can hit multiple enemies.",maxRank:3,assignableToHotbar:!0,ranks:[{soulCost:90,effects:{cooldown:2.2,damage:18,projectileSpeed:10,projectileRange:24,projectileRadius:.45}},{soulCost:160,effects:{cooldown:1.8,damage:24,projectileSpeed:11,projectileRange:28,projectileRadius:.5}},{soulCost:260,effects:{cooldown:1.4,damage:30,projectileSpeed:12,projectileRange:32,projectileRadius:.55}}]}};var Yo=class{constructor(e,t,n){this.ctx=e;this.config=t;this.textureManager=n;this.uiWidth=this.config.width*this.scale,this.uiHeight=this.config.height*this.scale,this.ctx.imageSmoothingEnabled=!1}scale=4;uiWidth;uiHeight;SLOT_ASSET_SIZE=34;HOTBAR_ASSET_W=148;HOTBAR_ASSET_H=42;HOTBAR_SLOT_W=34;HOTBAR_GAP=4;hitboxes=[];dialogOptionHitboxes=[];shopHitboxes=[];unlockedSkillIds=new Set;render(e,t,n,i,s,r=null,o=null,l=null,c=[]){this.updateLayout(e),this.dialogOptionHitboxes.length=0,this.shopHitboxes.length=0,this.unlockedSkillIds.clear();for(let d of c)this.unlockedSkillIds.add(d.id);if(this.ctx.clearRect(0,0,this.uiWidth,this.uiHeight),e.isMenuOpen){this.renderMenuUI(e),this.renderCursor(e);return}if(l){this.renderSoulShopUI(e,l),this.renderCursor(e);return}let h=!!r||!!o;e.isInventoryOpen?(this.renderInventoryUI(e),this.renderHotbar(e)):(this.renderStatBars(e),this.renderAutoMap(e,t,i,s),r?(this.renderDialogUI(e,r),this.renderCursor(e)):o?(this.renderShopUI(e,o),this.renderCursor(e)):this.renderInteractionUI(n),this.renderHotbar(e),c.length>0&&this.renderSkillCooldowns(c)),this.renderTooltip(e,h),!e.isInventoryOpen&&!r&&!o&&this.renderCrosshair()}renderCrosshair(){let e=this.uiWidth/2,t=this.uiHeight/2,n=10,i=4;this.ctx.save(),this.ctx.strokeStyle="rgba(255,255,255,0.85)",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(e-i,t),this.ctx.lineTo(e-i-n,t),this.ctx.moveTo(e+i,t),this.ctx.lineTo(e+i+n,t),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(e,t-i),this.ctx.lineTo(e,t-i-n),this.ctx.moveTo(e,t+i),this.ctx.lineTo(e,t+i+n),this.ctx.stroke(),this.ctx.fillStyle="rgba(255,255,255,0.9)",this.ctx.fillRect(e-1,t-1,2,2),this.ctx.restore()}getSlotAtPosition(e,t){for(let n of this.hitboxes)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return n;return null}getDialogOptionAtPosition(e,t){for(let n of this.dialogOptionHitboxes)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return n.optionIndex;return null}getShopHitAtPosition(e,t){for(let n of this.shopHitboxes)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return n.kind==="buy"?{kind:"buy",rowIndex:n.rowIndex}:{kind:"close"};return null}updateLayout(e){this.hitboxes=[];let t=this.SLOT_ASSET_SIZE*this.scale,n=2*this.scale,i=4,s=i*t+(i-1)*n,r=this.uiHeight/2-s/2;if(e.isInventoryOpen){let d=48*this.scale,u=16*this.scale,f=r-(u+4*this.scale);if(this.hitboxes.push({type:"tab",tabPage:"items",x:this.uiWidth/2-d-4*this.scale,y:f,w:d,h:u}),this.hitboxes.push({type:"tab",tabPage:"skills",x:this.uiWidth/2+4*this.scale,y:f,w:d,h:u}),e.inventoryPage==="skills"){let p=Object.values(Nt).filter(b=>this.hasSkill(e,b.id)),m=this.uiWidth/2-120*this.scale,y=r+2*this.scale;for(let b of p){if(!b.assignableToHotbar){y+=16*this.scale;continue}for(let _=0;_<4;_++)this.hitboxes.push({type:"skill_assign",index:_,skillId:b.id,x:m+170*this.scale+_*(24*this.scale),y:y-9*this.scale,w:20*this.scale,h:12*this.scale});y+=16*this.scale}}let g=this.uiWidth/2+15*this.scale;if(e.inventoryPage!=="skills")for(let p=0;p<e.maxInventorySlots;p++){let m=p%i,y=Math.floor(p/i);this.hitboxes.push({type:"inventory",index:p,x:g+m*(t+n),y:r+y*(t+n),w:t,h:t})}let x=this.uiWidth/2-s-15*this.scale;if(e.inventoryPage!=="skills"){this.hitboxes.push({type:"equipment",equipSlot:"head",x,y:r,w:t,h:t}),this.hitboxes.push({type:"equipment",equipSlot:"chest",x,y:r+t+n,w:t,h:t}),this.hitboxes.push({type:"equipment",equipSlot:"legs",x,y:r+(t+n)*2,w:t,h:t}),this.hitboxes.push({type:"equipment",equipSlot:"feet",x,y:r+(t+n)*3,w:t,h:t});let p=r+(t+n)*4;this.hitboxes.push({type:"equipment",equipSlot:"beltLeft",x,y:p,w:t,h:t}),this.hitboxes.push({type:"equipment",equipSlot:"beltRight",x:x+t+n,y:p,w:t,h:t});let m=r+(t+n)*5;this.hitboxes.push({type:"equipment",equipSlot:"leftHand",x,y:m,w:t,h:t}),this.hitboxes.push({type:"equipment",equipSlot:"rightHand",x:x+t+n,y:m,w:t,h:t});let y=this.SLOT_ASSET_SIZE*this.scale,b=this.uiWidth/2-y/2,_=r+(t+n)*5;this.hitboxes.push({type:"potion",x:b,y:_,w:y,h:y})}}let o=this.HOTBAR_ASSET_W*this.scale,l=this.HOTBAR_ASSET_H*this.scale,c=this.uiWidth/2-o/2,h=this.uiHeight-l-15*this.scale;for(let d=0;d<4;d++){let u=c+d*(this.HOTBAR_SLOT_W+this.HOTBAR_GAP)*this.scale,f=h+4*this.scale;this.hitboxes.push({type:"hotbar",index:d,x:u,y:f,w:this.HOTBAR_SLOT_W*this.scale,h:this.HOTBAR_SLOT_W*this.scale})}}renderInventoryUI(e){this.ctx.fillStyle="rgba(0, 0, 0, 0.7)",this.ctx.fillRect(0,0,this.uiWidth,this.uiHeight);for(let t of this.hitboxes){if(t.type!=="tab"||!t.tabPage)continue;let n=e.inventoryPage===t.tabPage;this.ctx.fillStyle=n?"rgba(180,180,220,0.35)":"rgba(255,255,255,0.08)",this.ctx.fillRect(t.x,t.y,t.w,t.h),this.ctx.strokeStyle=n?"#d0d0ff":"#666",this.ctx.strokeRect(t.x,t.y,t.w,t.h),this.ctx.fillStyle=n?"#fff":"#bbb",this.ctx.font=`${7*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText(t.tabPage.toUpperCase(),t.x+t.w/2,t.y+10*this.scale),this.ctx.textAlign="left"}if(e.inventoryPage==="skills"){this.renderSkillbookPage(e),this.renderCursor(e);return}for(let t of this.hitboxes)if(t.type==="inventory"&&t.index!==void 0)this.drawSlot(t.x,t.y,t.w,e.inventory[t.index]);else if(t.type==="equipment"&&t.equipSlot){let n=t.equipSlot.toUpperCase().replace("HAND","-HAND");this.drawSlot(t.x,t.y,t.w,e.equipment[t.equipSlot],n)}else t.type==="potion"&&this.drawPotionSlot(e,t.x,t.y,t.w);if(e.draggedItem){let t=this.SLOT_ASSET_SIZE*this.scale;this.drawSlot(e.uiCursor.x-t/2,e.uiCursor.y-t/2,t,e.draggedItem.slot)}this.renderCursor(e)}renderHotbar(e){let t=this.HOTBAR_ASSET_W*this.scale,n=this.HOTBAR_ASSET_H*this.scale,i=this.uiWidth/2-t/2,s=this.uiHeight-n-15*this.scale;try{let r=this.textureManager.getTexture("ui_hotbar");this.ctx.drawImage(r.image,i,s,t,n)}catch{this.ctx.fillStyle="#222",this.ctx.fillRect(i,s,t,n)}for(let r of this.hitboxes)if(r.type==="hotbar"&&r.index!==void 0){let o=e.hotbar[r.index];if(o){let l=Nt[o];this.ctx.fillStyle="rgba(70,70,90,0.85)",this.ctx.fillRect(r.x+2*this.scale,r.y+2*this.scale,r.w-4*this.scale,r.h-4*this.scale),this.ctx.fillStyle="#fff",this.ctx.font=`bold ${7*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText(`${r.index+1}`,r.x+r.w/2,r.y+9*this.scale),this.ctx.font=`${6*this.scale}px monospace`,this.ctx.fillText((l?.name??o).slice(0,8),r.x+r.w/2,r.y+17*this.scale),this.ctx.textAlign="left"}}}renderTooltip(e,t=!1){if(e.draggedItem||t)return;let n=this.getSlotAtPosition(e.uiCursor.x,e.uiCursor.y);if(!n)return;let i=null,s=null;if(n.type==="inventory"&&n.index!==void 0?i=e.inventory[n.index]:n.type==="equipment"&&n.equipSlot?i=e.equipment[n.equipSlot]:n.type==="hotbar"&&n.index!==void 0?s=e.hotbar[n.index]:n.type==="potion"&&(i=e.potionSlot.itemId?{itemId:e.potionSlot.itemId,qty:e.potionSlot.qty}:null),s){let r=Nt[s],o=r?.name??s,l=r?.description??"";this.ctx.font=`bold ${8*this.scale}px monospace`;let c=this.ctx.measureText(o).width,h=4*this.scale,d=Math.max(c+h*2,100*this.scale),u=18*this.scale,f=e.uiCursor.x+6*this.scale,g=e.uiCursor.y+6*this.scale;f+d>this.uiWidth&&(f=e.uiCursor.x-d-2*this.scale),g+u>this.uiHeight&&(g=e.uiCursor.y-u-2*this.scale),this.ctx.fillStyle="rgba(15, 15, 20, 0.95)",this.ctx.fillRect(f,g,d,u),this.ctx.strokeStyle="#555",this.ctx.strokeRect(f,g,d,u),this.ctx.fillStyle="#fff",this.ctx.fillText(o,f+h,g+8*this.scale),this.ctx.font=`${6*this.scale}px monospace`,this.ctx.fillStyle="#cfcfcf",this.ctx.fillText(l.slice(0,40),f+h,g+14*this.scale);return}if(i){let r=wt[i.itemId],o=r?.name||i.itemId.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),l=r?.description||"",c=l.length>42?`${l.slice(0,39)}...`:l;this.ctx.font=`bold ${8*this.scale}px monospace`;let h=this.ctx.measureText(o).width,d=4*this.scale,u=h+d*2,f=c?18*this.scale:12*this.scale,g=e.uiCursor.x+6*this.scale,x=e.uiCursor.y+6*this.scale;g+u>this.uiWidth&&(g=e.uiCursor.x-u-2*this.scale),x+f>this.uiHeight&&(x=e.uiCursor.y-f-2*this.scale),this.ctx.fillStyle="rgba(15, 15, 20, 0.95)",this.ctx.fillRect(g,x,u,f),this.ctx.strokeStyle="#555",this.ctx.lineWidth=1*this.scale,this.ctx.strokeRect(g,x,u,f),this.ctx.fillStyle="#fff",this.ctx.textAlign="left",this.ctx.fillText(o,g+d,x+9*this.scale),c&&(this.ctx.font=`${6*this.scale}px monospace`,this.ctx.fillStyle="#cfcfcf",this.ctx.fillText(c,g+d,x+14*this.scale),this.ctx.fillStyle="#fff",this.ctx.font=`bold ${8*this.scale}px monospace`)}}drawSlot(e,t,n,i,s){try{let r=this.textureManager.getTexture("ui_inv_slot");this.ctx.drawImage(r.image,e,t,n,n)}catch{this.ctx.fillStyle="rgba(40, 40, 40, 0.9)",this.ctx.fillRect(e,t,n,n),this.ctx.strokeStyle="#555",this.ctx.strokeRect(e,t,n,n)}s&&!i&&(this.ctx.fillStyle="#666",this.ctx.font=`${6*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText(s,e+n/2,t+n/2+2*this.scale),this.ctx.textAlign="left"),i&&this.drawItemInSlot(e,t,n,i)}drawPotionSlot(e,t,n,i){try{let s=this.textureManager.getTexture("ui_potion_slot");this.ctx.drawImage(s.image,t,n,i,i)}catch{this.ctx.fillStyle="rgba(50, 30, 30, 0.95)",this.ctx.fillRect(t,n,i,i),this.ctx.strokeStyle="#aa6666",this.ctx.strokeRect(t,n,i,i)}e.potionSlot.itemId==="potion"&&e.potionSlot.qty>0&&(this.drawItemInSlot(t,n,i,{itemId:"potion",qty:e.potionSlot.qty}),this.ctx.fillStyle="#ffdddd",this.ctx.font=`${6*this.scale}px monospace`,this.ctx.fillText("[R]",t+2*this.scale,n-2*this.scale))}renderSkillbookPage(e){let t=this.uiWidth/2-120*this.scale,n=this.uiHeight/2-80*this.scale;this.ctx.fillStyle="#ddd",this.ctx.font=`bold ${9*this.scale}px monospace`,this.ctx.fillText("SKILLBOOK",t,n),n+=10*this.scale;let i=Object.values(Nt).filter(s=>this.hasSkill(e,s.id));this.ctx.font=`${7*this.scale}px monospace`;for(let s of i){if(this.ctx.fillStyle="#fff",this.ctx.fillText(s.name,t,n),this.ctx.fillStyle="#aaa",this.ctx.fillText(s.description,t,n+8*this.scale),s.assignableToHotbar)for(let r=0;r<4;r++){let o=t+170*this.scale+r*(24*this.scale),l=e.hotbar[r]===s.id;this.ctx.fillStyle=l?"#66aa66":"rgba(255,255,255,0.12)",this.ctx.fillRect(o,n-9*this.scale,20*this.scale,12*this.scale),this.ctx.fillStyle="#fff",this.ctx.textAlign="center",this.ctx.fillText(`${r+1}`,o+10*this.scale,n-1*this.scale),this.ctx.textAlign="left"}else{this.ctx.fillStyle="#888";let r="(Passive)";s.id==="dash"&&(r="Hold [Shift] while moving"),this.ctx.fillText(r,t+170*this.scale,n)}n+=16*this.scale}}hasSkill(e,t){return this.unlockedSkillIds.has(t)}drawItemInSlot(e,t,n,i){try{let s=wt[i.itemId],r=s?.voxelTextureId??i.itemId,l=this.textureManager.getTexture(r).image,c=6/34,h=n*c,d=n-h*2;if(s?.rangedWeaponKind==="bow_arrow"&&l.width>=3&&l.width>l.height){let u=Math.floor(l.width/3);this.ctx.drawImage(l,0,0,u,l.height,e+h,t+h,d,d)}else this.ctx.drawImage(l,e+h,t+h,d,d);i.qty>1&&(this.ctx.fillStyle="#fff",this.ctx.font=`bold ${7*this.scale}px monospace`,this.ctx.textAlign="right",this.ctx.fillText(i.qty.toString(),e+n-4*this.scale,t+n-4*this.scale),this.ctx.textAlign="left")}catch{this.ctx.fillStyle="#ffaa00";let r=n*.25;this.ctx.fillRect(e+r,t+r,n-r*2,n-r*2)}}renderCursor(e){this.ctx.fillStyle="#fff",this.ctx.strokeStyle="#000",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(e.uiCursor.x,e.uiCursor.y),this.ctx.lineTo(e.uiCursor.x+15*(this.scale/4),e.uiCursor.y+10*(this.scale/4)),this.ctx.lineTo(e.uiCursor.x+5*(this.scale/4),e.uiCursor.y+15*(this.scale/4)),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke()}renderStatBars(e){let t=60*this.scale,n=6*this.scale,i=10*this.scale,s=this.uiHeight-35*this.scale,r=(o,l,c,h,d)=>{this.ctx.fillStyle="#222",this.ctx.fillRect(o,l,t,n),this.ctx.fillStyle=c,this.ctx.fillRect(o,l,t*(h/d),n),this.ctx.strokeStyle="#000",this.ctx.lineWidth=1*this.scale,this.ctx.strokeRect(o,l,t,n)};r(i,s,"#cc0000",e.hp,e.maxHp),r(i,s+10*this.scale,"#0066cc",e.mana,e.maxMana),r(i,s+20*this.scale,"#009933",e.stamina,e.maxStamina),this.ctx.fillStyle="#c8b0ff",this.ctx.font=`${7*this.scale}px monospace`,this.ctx.textAlign="left",this.ctx.fillText(`Souls: ${e.souls}`,i,s-6*this.scale)}renderInteractionUI(e){e&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.fillRect(this.uiWidth/2-2,this.uiHeight/2-2,4,4),this.ctx.textAlign="center",e.name&&(this.ctx.fillStyle="#fff",this.ctx.font=`bold ${10*this.scale}px monospace`,this.ctx.fillText(e.name,this.uiWidth/2,this.uiHeight/2+15*this.scale)),e.isInteractable===!0&&(this.ctx.fillStyle="#ffff00",this.ctx.font=`bold ${7*this.scale}px monospace`,this.ctx.fillText("[E] to Interact",this.uiWidth/2,this.uiHeight/2+25*this.scale)),this.ctx.textAlign="left")}wrapText(e,t){let n=e.split(/\s+/),i=[],s="";for(let r of n){let o=s?`${s} ${r}`:r;this.ctx.measureText(o).width<=t?s=o:(s&&i.push(s),s=r)}return s&&i.push(s),i.length?i:[""]}renderDialogUI(e,t){let n=24*this.scale,i=Math.min(this.uiWidth-n*2,340*this.scale),s=12*this.scale,r=11*this.scale,o=14*this.scale;this.ctx.font=`${8*this.scale}px monospace`;let l=this.wrapText(t.bodyText,i-s*2),h=t.options.length*(r+4*this.scale)+8*this.scale,d=s+o+l.length*r+h+s,u=(this.uiWidth-i)/2,f=this.uiHeight*.28;this.ctx.fillStyle="rgba(0, 0, 0, 0.82)",this.ctx.fillRect(u,f,i,d),this.ctx.strokeStyle="#6a7a9a",this.ctx.lineWidth=2*this.scale,this.ctx.strokeRect(u,f,i,d),this.ctx.textAlign="left",this.ctx.fillStyle="#aac0e8",this.ctx.font=`bold ${9*this.scale}px monospace`,this.ctx.fillText(t.npcName,u+s,f+s+8*this.scale),this.ctx.fillStyle="#e8e8e8",this.ctx.font=`${8*this.scale}px monospace`;let g=f+s+o;for(let x of l)this.ctx.fillText(x,u+s,g),g+=r;g+=6*this.scale;for(let x of t.options){let p=`[${x.index}] ${x.label}`,m=g,y=r+4*this.scale,b=u+s-4*this.scale,_=i-s*2+8*this.scale,T=e.uiCursor.x>=b&&e.uiCursor.x<=b+_&&e.uiCursor.y>=m-2*this.scale&&e.uiCursor.y<=m+y;T&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.12)",this.ctx.fillRect(b,m-2*this.scale,_,y)),this.ctx.fillStyle=T?"#ffffff":"#c8d8f0",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.fillText(p,u+s,m+r-2*this.scale),this.dialogOptionHitboxes.push({optionIndex:x.index,x:b,y:m-2*this.scale,w:_,h:y}),g+=y+2*this.scale}}renderShopUI(e,t){let n=24*this.scale,i=Math.min(this.uiWidth-n*2,380*this.scale),s=12*this.scale,r=12*this.scale,o=r+8*this.scale,l=22*this.scale,c=t.rows.length*o,h=28*this.scale,d=s+l+c+h+s,u=(this.uiWidth-i)/2,f=this.uiHeight*.22;this.ctx.fillStyle="rgba(0, 0, 0, 0.85)",this.ctx.fillRect(u,f,i,d),this.ctx.strokeStyle="#8a7a5a",this.ctx.lineWidth=2*this.scale,this.ctx.strokeRect(u,f,i,d),this.ctx.textAlign="left",this.ctx.fillStyle="#e8d8b0",this.ctx.font=`bold ${10*this.scale}px monospace`,this.ctx.fillText(`${t.npcName} \u2014 Wares`,u+s,f+s+9*this.scale),this.ctx.fillStyle="#b8a878",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.fillText(`Coins: ${t.playerCoins}`,u+s,f+s+20*this.scale);let g=f+s+l;for(let _ of t.rows){let T=_.available<=0,w=u+s-4*this.scale,A=i-s*2+8*this.scale;!T&&e.uiCursor.x>=w&&e.uiCursor.x<=w+A&&e.uiCursor.y>=g&&e.uiCursor.y<=g+o&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.1)",this.ctx.fillRect(w,g,A,o));let M=T?"#555":"#8fd88f",k=T?"#666":"#ddd";this.ctx.fillStyle=k,this.ctx.font=`${8*this.scale}px monospace`;let R=_.available>0?`(x${_.available})`:"(sold out)",F=_.rowIndex<9?`[${_.rowIndex+1}] `:"";this.ctx.fillText(`${F}${_.displayName} ${R}`,u+s,g+r-2*this.scale),this.ctx.fillStyle=M,this.ctx.textAlign="right",this.ctx.fillText(`${_.price}\xA2`,u+i-s,g+r-2*this.scale),this.ctx.textAlign="left",T||this.shopHitboxes.push({kind:"buy",rowIndex:_.rowIndex,x:w,y:g,w:A,h:o}),g+=o}let x=g+6*this.scale,p=120*this.scale,m=u+(i-p)/2,y=22*this.scale,b=e.uiCursor.x>=m&&e.uiCursor.x<=m+p&&e.uiCursor.y>=x&&e.uiCursor.y<=x+y;this.ctx.fillStyle=b?"rgba(120, 80, 80, 0.9)":"rgba(80, 50, 50, 0.85)",this.ctx.fillRect(m,x,p,y),this.ctx.strokeStyle="#a88",this.ctx.lineWidth=1*this.scale,this.ctx.strokeRect(m,x,p,y),this.ctx.fillStyle="#fff",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText("Close [Esc]",m+p/2,x+15*this.scale),this.ctx.textAlign="left",this.shopHitboxes.push({kind:"close",x:m,y:x,w:p,h:y})}renderAutoMap(e,t,n,i){let s=5*this.scale,r=1*this.scale,o=s-r*2,l=5,c=(l*2+1)*s,h=this.uiWidth-c-10*this.scale,d=this.uiHeight-c-10*this.scale;this.ctx.fillStyle="rgba(0, 0, 0, 0.8)",this.ctx.fillRect(h-2*this.scale,d-2*this.scale,c+4*this.scale,c+4*this.scale);let u=Math.floor(e.x),f=Math.floor(e.y);for(let m=-l;m<=l;m++)for(let y=-l;y<=l;y++){let b=u+y,_=f+m;if(_>=0&&_<t.length&&b>=0&&b<t[0].length){if(!n[_][b])continue;let T=t[_][b],w=h+(y+l)*s,A=d+(m+l)*s;if(T===1||T===9)this.ctx.fillStyle="#555",this.ctx.fillRect(w,A,s,s);else if(T===0){this.ctx.fillStyle="#2a2a2a",this.ctx.fillRect(w+r,A+r,o,o);let v=i.find(M=>Math.floor(M.x)===b&&Math.floor(M.y)===_);v&&v.userData?.type==="door"&&(this.ctx.fillStyle="#00ff00",v.userData.orientation==="horizontal"?this.ctx.fillRect(w,A+s/2-this.scale/2,s,this.scale):this.ctx.fillRect(w+s/2-this.scale/2,A,this.scale,s))}}}let g=i.filter(m=>m.userData?.type==="solid_prop"&&m.textureId==="prop_stairs"||m.userData?.type==="interactive_stair_up");if(g.length>0){let m=g[0],y=(m.x-e.x)*(m.x-e.x)+(m.y-e.y)*(m.y-e.y);for(let k=1;k<g.length;k++){let R=g[k],F=R.x-e.x,U=R.y-e.y,G=F*F+U*U;G<y&&(m=R,y=G)}let b=m.x-e.x,_=m.y-e.y,w=Math.atan2(_,b)-e.angle;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;let A=h+c/2,v=d-12*this.scale;this.ctx.save(),this.ctx.translate(A,v),this.ctx.rotate(w);let M=3.5*this.scale;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=3*this.scale,this.ctx.fillStyle="#ffff00",this.ctx.beginPath(),this.ctx.arc(0,0,this.scale*.65,0,Math.PI*2),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(0,-M),this.ctx.lineTo(-M*.55,M*.45),this.ctx.lineTo(M*.55,M*.45),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}this.ctx.save();let x=h+l*s+(e.x-u)*s,p=d+l*s+(e.y-f)*s;this.ctx.translate(x,p),this.ctx.rotate(e.angle),this.ctx.fillStyle="#ff0",this.ctx.beginPath(),this.ctx.moveTo(3*this.scale,0),this.ctx.lineTo(-2*this.scale,2*this.scale),this.ctx.lineTo(-2*this.scale,-2*this.scale),this.ctx.fill(),this.ctx.restore()}menuHitboxes=[];getMenuHitAtPosition(e,t){for(let n of this.menuHitboxes)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return n.label;return null}renderMenuUI(e){this.menuHitboxes.length=0,this.ctx.fillStyle="rgba(0, 0, 0, 0.65)",this.ctx.fillRect(0,0,this.uiWidth,this.uiHeight);let t=16*this.scale,n=14*this.scale,i=200*this.scale,s=["Resume","Settings","Quit"],r=20*this.scale,o=t+r+s.length*(n+6*this.scale)+t,l=(this.uiWidth-i)/2,c=(this.uiHeight-o)/2;this.ctx.fillStyle="rgba(10, 12, 18, 0.92)",this.ctx.fillRect(l,c,i,o),this.ctx.strokeStyle="#6a7a9a",this.ctx.lineWidth=2*this.scale,this.ctx.strokeRect(l,c,i,o),this.ctx.textAlign="center",this.ctx.fillStyle="#aac0e8",this.ctx.font=`bold ${10*this.scale}px monospace`,this.ctx.fillText("MENU",l+i/2,c+t+10*this.scale);let h=c+t+r;for(let d of s){let u=n+6*this.scale,f=l+t,g=i-t*2,x=e.uiCursor.x>=f&&e.uiCursor.x<=f+g&&e.uiCursor.y>=h&&e.uiCursor.y<=h+u;x&&(this.ctx.fillStyle="rgba(255, 255, 255, 0.12)",this.ctx.fillRect(f,h,g,u)),this.ctx.fillStyle=x?"#ffffff":"#c8d8f0",this.ctx.font=`${9*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText(d,l+i/2,h+n),this.menuHitboxes.push({label:d,x:f,y:h,w:g,h:u}),h+=u}}soulShopHitboxes=[];getSoulShopHitAtPosition(e,t){for(let n of this.soulShopHitboxes)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return n;return null}renderSoulShopUI(e,t){this.soulShopHitboxes.length=0,this.ctx.fillStyle="rgba(0, 0, 0, 0.65)",this.ctx.fillRect(0,0,this.uiWidth,this.uiHeight);let n=14*this.scale,i=11*this.scale,s=Math.min(this.uiWidth-40*this.scale,360*this.scale),r=18*this.scale,o=24*this.scale,l=t.offerings.filter(w=>w.category===t.category),c=i+10*this.scale,h=22*this.scale,d=n+o+r+6*this.scale+Math.max(l.length,1)*c+h+n,u=(this.uiWidth-s)/2,f=Math.max(20*this.scale,(this.uiHeight-d)/2);this.ctx.fillStyle="rgba(10, 12, 22, 0.94)",this.ctx.fillRect(u,f,s,d),this.ctx.strokeStyle="#8a6acc",this.ctx.lineWidth=2*this.scale,this.ctx.strokeRect(u,f,s,d),this.ctx.textAlign="center",this.ctx.fillStyle="#c8b0ff",this.ctx.font=`bold ${10*this.scale}px monospace`,this.ctx.fillText("SOUL BROKER",u+s/2,f+n+10*this.scale),this.ctx.fillStyle="#9988cc",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.fillText(`Souls: ${e.souls}`,u+s/2,f+n+20*this.scale);let g=[{label:"Stats",cat:"stat"},{label:"Skills",cat:"skill"},{label:"Upgrades",cat:"upgrade"}],x=(s-n*2)/g.length,p=f+n+o;for(let w=0;w<g.length;w++){let A=u+n+w*x,v=t.category===g[w].cat;this.ctx.fillStyle=v?"rgba(138, 106, 204, 0.35)":"rgba(255, 255, 255, 0.06)",this.ctx.fillRect(A,p,x-2*this.scale,r),this.ctx.fillStyle=v?"#e0d0ff":"#8888aa",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText(g[w].label,A+x/2-this.scale,p+r-5*this.scale),this.soulShopHitboxes.push({kind:"tab",category:g[w].cat,x:A,y:p,w:x-2*this.scale,h:r})}let m=p+r+6*this.scale;for(let w of l){let A=u+n,v=s-n*2,M=w.currentRank>=w.maxRank,k=e.souls<w.soulCost,R=e.uiCursor.x>=A&&e.uiCursor.x<=A+v&&e.uiCursor.y>=m&&e.uiCursor.y<=m+c;R&&!M&&(this.ctx.fillStyle="rgba(138, 106, 204, 0.18)",this.ctx.fillRect(A,m,v,c)),this.ctx.textAlign="left",this.ctx.fillStyle=M?"#555566":k?"#886666":R?"#ffffff":"#c8d8f0",this.ctx.font=`${8*this.scale}px monospace`;let F=M?`${w.name}`:w.name;this.ctx.fillText(F,A+4*this.scale,m+i),this.ctx.textAlign="right";let U=M?"MAXED":`${w.soulCost} souls`;this.ctx.fillStyle=M?"#555566":k?"#cc4444":"#c8b0ff",this.ctx.font=`${7*this.scale}px monospace`,this.ctx.fillText(U,A+v-4*this.scale,m+i),M||this.soulShopHitboxes.push({kind:"buy",offeringId:w.id,x:A,y:m,w:v,h:c}),m+=c}l.length===0&&(this.ctx.textAlign="center",this.ctx.fillStyle="#666688",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.fillText("Nothing available.",u+s/2,m+i),m+=c);let y=m+4*this.scale,b=80*this.scale,_=u+(s-b)/2,T=e.uiCursor.x>=_&&e.uiCursor.x<=_+b&&e.uiCursor.y>=y&&e.uiCursor.y<=y+h;this.ctx.fillStyle=T?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)",this.ctx.fillRect(_,y,b,h),this.ctx.fillStyle=T?"#ffffff":"#8888aa",this.ctx.font=`${8*this.scale}px monospace`,this.ctx.textAlign="center",this.ctx.fillText("Close",_+b/2,y+h-6*this.scale),this.soulShopHitboxes.push({kind:"close",x:_,y,w:b,h})}renderSkillCooldowns(e){let t=50*this.scale,n=6*this.scale,i=3*this.scale,s=this.uiWidth-(t+10*this.scale),r=this.uiHeight-35*this.scale;for(let o=0;o<e.length;o++){let l=e[o],c=s,h=r+o*(n+i+10*this.scale);this.ctx.fillStyle="#222",this.ctx.fillRect(c,h,t,n),l.fraction>0&&(this.ctx.fillStyle="#6644aa",this.ctx.fillRect(c,h,t*l.fraction,n)),this.ctx.strokeStyle="#444",this.ctx.lineWidth=1,this.ctx.strokeRect(c,h,t,n),this.ctx.textAlign="right",this.ctx.fillStyle=l.fraction>0?"#8866bb":"#88cc88",this.ctx.font=`${6*this.scale}px monospace`;let d=l.fraction>0?l.name.toUpperCase():`${l.name.toUpperCase()} RDY`;this.ctx.fillText(d,c+t,h-2*this.scale)}}};function th(a,e){if(e===Dc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===zs||e===Lr){let t=a.getIndex();if(t===null){let r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===zs)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Yd(a){let e=new Map,t=new Map,n=a.clone();return jd(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function jd(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)jd(a.children[n],e.children[n],t)}var jo=class extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new $o(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $o(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new bh(t)})}load(e,t,n,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=ai.extractUrlBase(e);r=ai.resolveURL(c,this.path)}else r=ai.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ns(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qd){try{r[We.KHR_BINARY_GLTF]=new Sh(e)}catch(d){i&&i(d);return}s=JSON.parse(r[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ch(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:r[d]=new ah;break;case We.KHR_DRACO_MESH_COMPRESSION:r[d]=new Mh(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:r[d]=new Eh;break;case We.KHR_MESH_QUANTIZATION:r[d]=new Th;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function ly(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function bt(a,e,t){let n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rh=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new he(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ut);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Si(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Tt(h),c.distance=d;break;case"spot":c=new wr(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ah=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Qe}extendParams(e,t,n){let i=[];e.color=new he(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Ut),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ut))}return Promise.all(i)}},oh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},lh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(s,s)}return Promise.all(i)}},ch=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},uh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Ut)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ut)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},dh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},fh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(s[0],s[1],s[2],Ut),Promise.all(i)}},ph=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}},mh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(s[0],s[1],s[2],Ut),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ut)),Promise.all(i)}},gh=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},xh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return bt(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},yh=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},_h=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},vh=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},$o=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},bh=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let g of d){let x=new Ne,p=new I,m=new nn,y=new I(1,1,1),b=new Vt(g.geometry,g.material,u);for(let _=0;_<u;_++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),b.setMatrixAt(_,x.compose(p,m,y));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];b.instanceColor=new rn(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);ft.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qd="glTF",Ur=12,$d={JSON:1313821514,BIN:5130562},Sh=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ur,s=new DataView(e,Ur),r=0;for(;r<i;){let o=s.getUint32(r,!0);r+=4;let l=s.getUint32(r,!0);if(r+=4,l===$d.JSON){let c=new Uint8Array(e,Ur+r,o);this.content=n.decode(c)}else if(l===$d.BIN){let c=Ur+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let h in r){let d=Ah[h]||h.toLowerCase();o[d]=r[h]}for(let h in e.attributes){let d=Ah[h]||h.toLowerCase();if(r[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Xs[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}d(f)},o,c,Ut,u)})})}},Eh=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Th=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},Ko=class extends Un{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,x=g-c,p=-2*f+3*u,m=f-u,y=1-p,b=m-u+d;for(let _=0;_!==o;_++){let T=r[x+_+o],w=r[x+_+l]*h,A=r[g+_+o],v=r[g+_]*h;s[_]=y*T+b*w+p*A+m*v}return s}},cy=new nn,wh=class extends Ko{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return cy.fromArray(s).normalize().toArray(s),s}},pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kd={9728:Ye,9729:_t,9984:$a,9985:ks,9986:Yi,9987:wn},Zd={33071:Ot,33648:Ss,10497:Sn},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ah={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hy={CUBICSPLINE:void 0,LINEAR:Oi,STEP:Fi},ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uy(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Vi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tn})),a.DefaultMaterial}function es(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dy(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);let r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;r.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=u),a.morphTargetsRelative=!0,a})}function fy(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function py(a){let e,t=a.extensions&&a.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sh(t.attributes):e=a.indices+":"+sh(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+sh(a.targets[n]);return e}function sh(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Rh(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function my(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gy=new Ne,Ch=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ly,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Gi(this.options.manager):this.textureLoader=new Ar(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return es(s,o,i),qn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){n.load(ai.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=nh[i.type],o=Xs[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new gt(c,r,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],l=nh[i.type],c=Xs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(f&&f!==d){let m=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,b=t.cache.get(y);b||(x=new c(o,m*f,i.count*f/h),b=new ki(x,f/h),t.cache.add(y,b)),p=new xi(b,l,u%f/h,g)}else o===null?x=new c(i.count*l):x=new c(o,u,i.count*l),p=new gt(x,l,g);if(i.sparse!==void 0){let m=nh.SCALAR,y=Xs[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new y(r[1],b,i.sparse.count*m),w=new c(r[2],_,i.sparse.count*l);o!==null&&(p=new gt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,v=T.length;A<v;A++){let M=T[A];if(p.setX(M,w[A*l]),l>=2&&p.setY(M,w[A*l+1]),l>=3&&p.setZ(M,w[A*l+2]),l>=4&&p.setW(M,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(s.samplers||{})[r.sampler]||{};return h.magFilter=Kd[u.magFilter]||_t,h.minFilter=Kd[u.minFilter]||wn,h.wrapS=Zd[u.wrapS]||Sn,h.wrapT=Zd[u.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ye&&h.minFilter!==_t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=i.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){let p=new Wt(x);p.needsUpdate=!0,u(p)}),t.load(ai.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),qn(d,r),d.userData.mimeType=r.mimeType||my(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(r);r=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new _i,zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ls,zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Vi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],r,o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){let d=i[We.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ut),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,ut)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Gt);let h=s.alphaMode||ih.OPAQUE;if(h===ih.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ih.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Qe&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Pe(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==Qe&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Qe){let d=s.emissiveFactor;o.emissive=new he().setRGB(d[0],d[1],d[2],Ut)}return s.emissiveTexture!==void 0&&r!==Qe&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ut)),Promise.all(c).then(function(){let d=new r(o);return s.name&&(d.name=s.name),qn(d,s),t.associations.set(d,{materials:e}),s.extensions&&es(i,d,s),d})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Jd(l,o,t)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=py(c),d=i[h];if(d)r.push(d.promise);else{let u;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Jd(new At,c,t),i[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?uy(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=r[f],m,y=c[f];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new gr(x,y):new et(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?m.geometry=th(m.geometry,Lr):p.mode===pn.TRIANGLE_FAN&&(m.geometry=th(m.geometry,zs));else if(p.mode===pn.LINES)m=new yr(x,y);else if(p.mode===pn.LINE_STRIP)m=new Bi(x,y);else if(p.mode===pn.LINE_LOOP)m=new _r(x,y);else if(p.mode===pn.POINTS)m=new Hi(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&fy(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),qn(m,s),p.extensions&&es(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&es(i,d[0],s),d[0];let u=new Ue;s.extensions&&es(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(Fc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),r=i,o=[],l=[];for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d){o.push(d);let u=new Ne;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xr(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],x=f.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],x=d[3],p=d[4],m=[];for(let b=0,_=u.length;b<_;b++){let T=u[b],w=f[b],A=g[b],v=x[b],M=p[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let k=n._createAnimationTracks(T,w,A,v,M);if(k)for(let R=0;R<k.length;R++)m.push(k[R])}let y=new Mr(s,void 0,m);return qn(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)r.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,gy)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Is:c.length>1?h=new Ue:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=r),qn(h,s),s.extensions&&es(n,h,s),s.matrix!==void 0){let d=new Ne;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let d=i.associations.get(h);i.associations.set(h,Ae({},d))}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ue;n.name&&(s.name=i.createUniqueName(n.name)),qn(s,n),n.extensions&&es(t,s,n);let r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?s.add(Yd(u)):s.add(u)}let c=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof zt||u instanceof Wt)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let r=[],o=e.name?e.name:e.uuid,l=[];wi[s.path]===wi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(wi[s.path]){case wi.weights:c=kn;break;case wi.rotation:c=Bn;break;case wi.translation:case wi.scale:c=Hn;break;default:switch(n.itemSize){case 1:c=kn;break;case 2:case 3:default:c=Hn;break}break}let h=i.interpolation!==void 0?hy[i.interpolation]:Oi,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){let g=new c(l[u]+"."+wi[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rh(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Bn?wh:Ko;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xy(a,e,t){let n=e.attributes,i=new vt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Rh(Xs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let x=Rh(Xs[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;let r=new jt;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Jd(a,e,t){let n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(let r in n){let o=Ah[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Xe.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),qn(a,e),xy(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?dy(a,e.targets,t):a})}var Zo=class{models=new Map;animations=new Map;loader=new jo;loadModel(e,t){return dn(this,null,function*(){return new Promise((n,i)=>{this.loader.load(t,s=>{this.models.set(e,s.scene),this.animations.set(e,s.animations),console.log(`Model loaded: [${e}]`),n()},void 0,s=>{console.error(`Failed to load model: ${t}`,s),i(s)})})})}getModel(e){let t=this.models.get(e);if(!t)throw new Error(`Model [${e}] not found!`);return t.clone()}getAnimations(e){return this.animations.get(e)||[]}};var Jo=class{BOB_AMOUNT=10;BOB_SPEED_BASE=7.5;bobPhase=0;update(e,t){let n=Math.hypot(e.velocityX,e.velocityYPlanar),i=Math.max(0,Math.min(1.35,n/Math.max(.01,e.moveSpeed)));e.state===1&&i>.06?(this.bobPhase+=t*(this.BOB_SPEED_BASE+i*7),e.zOffset=-Math.sin(this.bobPhase)*this.BOB_AMOUNT*Math.min(1,i),e.currentMoveSpeed=e.moveSpeed):(e.currentMoveSpeed=e.moveSpeed,e.zOffset*=.82,Math.abs(e.zOffset)<.15&&(e.zOffset=0))}};var yy=18,tf=7,nf=.45,_y=-30,vy=2,by=20,Sy=7.5,My=10,sf=1.5,Ey=1,Ty=.07,Qo=class{constructor(e,t,n,i,s,r,o,l,c){this.player=e;this.map=t;this.entities=n;this.camera=i;this.scene=s;this.tileSize=r;this.playerEyeLevel=o;this.domElement=l;this.engine=c;this.groundRaycaster.layers.set(vy),this.groundRaycaster.far=50,this.lastValidX=this.player.x,this.lastValidY=this.player.y,this.domElement.addEventListener("click",()=>{this.isLocked||this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement,this.isLocked||(this.player.isInventoryOpen=!1)}),this.domElement.addEventListener("mousedown",h=>{if(this.player.isMenuOpen&&h.button===0){this.engine.uiRenderer.getMenuHitAtPosition(this.player.uiCursor.x,this.player.uiCursor.y)==="Resume"&&(this.player.isMenuOpen=!1);return}if(this.player.isInventoryOpen){let d=this.engine.uiRenderer.getSlotAtPosition(this.player.uiCursor.x,this.player.uiCursor.y);this.engine.interactionManager.handleInventoryInteraction(!0,d)}else if(this.engine.dialogSession){if(h.button===0){let d=this.engine.uiRenderer.getDialogOptionAtPosition(this.player.uiCursor.x,this.player.uiCursor.y);d!==null&&this.engine.interactionManager.selectDialogOption(d)}}else if(this.engine.shopSession){if(h.button===0){let d=this.engine.uiRenderer.getShopHitAtPosition(this.player.uiCursor.x,this.player.uiCursor.y);d?.kind==="buy"?this.engine.interactionManager.tryBuyShopRow(d.rowIndex):d?.kind==="close"&&this.engine.interactionManager.closeShop()}}else if(this.engine.soulShopSession&&h.button===0){let d=this.engine.uiRenderer.getSoulShopHitAtPosition(this.player.uiCursor.x,this.player.uiCursor.y);d?.kind==="buy"?this.engine.interactionManager.trySoulShopPurchase(d.offeringId):d?.kind==="close"?this.engine.interactionManager.closeSoulShop():d?.kind==="tab"&&(this.engine.soulShopSession.category=d.category)}else h.button===0&&(this.isPrimaryHeld=!0,this.engine.tryPrimaryAttack?.())}),this.domElement.addEventListener("mouseup",h=>{if(h.button===0&&(this.isPrimaryHeld=!1),this.player.isInventoryOpen){let d=this.engine.uiRenderer.getSlotAtPosition(this.player.uiCursor.x,this.player.uiCursor.y);this.engine.interactionManager.handleInventoryInteraction(!1,d)}}),document.addEventListener("mousemove",h=>{if(!this.isLocked)return;if(this.player.isMenuOpen||this.player.isInventoryOpen||!!this.engine.dialogSession||!!this.engine.shopSession||!!this.engine.soulShopSession){this.player.uiCursor.x+=h.movementX*3,this.player.uiCursor.y+=h.movementY*3;let f=4,g=this.engine.config.width*f,x=this.engine.config.height*f;this.player.uiCursor.x=Math.max(0,Math.min(g,this.player.uiCursor.x)),this.player.uiCursor.y=Math.max(0,Math.min(x,this.player.uiCursor.y))}else{this.player.angle+=h.movementX*this.mouseSensitivity,this.cameraPitch-=h.movementY*this.mouseSensitivity,this.player.angle>=Math.PI*2&&(this.player.angle-=Math.PI*2),this.player.angle<0&&(this.player.angle+=Math.PI*2);let u=Math.PI/2.1;this.cameraPitch=Math.max(-u,Math.min(u,this.cameraPitch))}})}keys={};raycaster=new Os;centerScreen=new Pe(0,0);movementAnimator=new Jo;focusedEntity=null;staticBarriers=[];barriers=[];cameraPitch=0;mouseSensitivity=.002;isLocked=!1;groundRaycaster=new Os;groundRayOrigin=new I;groundRayDir=new I(0,-1,0);smoothedGroundY=0;interactionRaycastTimer=0;isPrimaryHeld=!1;autoFireTickRemain=0;airJumpsRemaining=0;lastValidX=0;lastValidY=0;setMap(e){this.map=e}setBarriers(e){this.barriers=e}setEntities(e){this.entities=e}resetVerticalState(){this.smoothedGroundY=this.player.worldY}getBarriers(){return this.barriers}handleInput(e,t){let n=e.toLowerCase();t&&!this.keys[n]&&(n==="i"&&(this.engine.dialogSession||this.engine.shopSession||(this.player.isInventoryOpen=!this.player.isInventoryOpen,this.player.isInventoryOpen&&(this.player.uiCursor.x=this.engine.config.width*4/2,this.player.uiCursor.y=this.engine.config.height*4/2))),(n==="`"||n==="f5")&&(this.player.isFlying=!this.player.isFlying,this.player.isFlying&&(this.player.flyHeight=6))),this.keys[n]=t}updateCameraTransform(){let e=this.player,t=e.isFlying?e.flyHeight||6:this.smoothedGroundY+this.playerEyeLevel+(e.isGrounded?e.zOffset/50:0);this.camera.position.set(e.x*this.tileSize,t,e.y*this.tileSize);let n=5,i=this.camera.position.x+Math.cos(this.cameraPitch)*Math.cos(e.angle)*n,s=this.camera.position.y+Math.sin(this.cameraPitch)*n,r=this.camera.position.z+Math.cos(this.cameraPitch)*Math.sin(e.angle)*n;this.camera.lookAt(i,s,r)}applyGroundFriction(e,t,n){let i=Math.hypot(e,t);if(i<1e-6)return{x:0,y:0};let r=Math.max(i,Ey)*My*n,o=Math.max(0,i-r);if(o===i)return{x:e,y:t};let l=o/i;return{x:e*l,y:t*l}}accelerate(e,t,n,i,s,r,o){let l=e*n+t*i,c=s-l;if(c<=0)return{x:e,y:t};let h=Math.min(c,r*o*s);return{x:e+n*h,y:t+i*h}}update(e){let t=this.player;if(this.autoFireTickRemain=Math.max(0,this.autoFireTickRemain-e),t.isMenuOpen){t.state=0,t.zOffset*=.8,this.updateCameraTransform();return}if(t.isInventoryOpen){t.state=0,t.zOffset*=.8,this.updateCameraTransform();return}if(this.engine.dialogSession||this.engine.shopSession||this.engine.soulShopSession){t.state=0,t.zOffset*=.8,this.focusedEntity=null,this.updateCameraTransform();return}if(this.isPrimaryHeld&&this.engine.skillManager.getSkillRank("auto_fire")>0&&this.autoFireTickRemain<=0&&(this.engine.tryPrimaryAttack?.(),this.autoFireTickRemain=.08),t.isFlying){let d=t.moveSpeed*e*5;(this.keys.w||this.keys.arrowup)&&(t.x+=Math.cos(t.angle)*d,t.y+=Math.sin(t.angle)*d),(this.keys.s||this.keys.arrowdown)&&(t.x-=Math.cos(t.angle)*d,t.y-=Math.sin(t.angle)*d),(this.keys.a||this.keys.arrowleft)&&(t.x+=Math.cos(t.angle-Math.PI/2)*d,t.y+=Math.sin(t.angle-Math.PI/2)*d),(this.keys.d||this.keys.arrowright)&&(t.x+=Math.cos(t.angle+Math.PI/2)*d,t.y+=Math.sin(t.angle+Math.PI/2)*d),this.keys.e&&(t.flyHeight+=d),this.keys.q&&(t.flyHeight-=d),this.updateCameraTransform();return}let n=this.engine.skillManager;t.isDashing&&(t.dashTimeRemain-=e,t.dashTimeRemain<=0&&(t.isDashing=!1));let i=0,s=0,r=!1;if((this.keys.w||this.keys.arrowup)&&(i+=Math.cos(t.angle),s+=Math.sin(t.angle),r=!0),(this.keys.s||this.keys.arrowdown)&&(i-=Math.cos(t.angle),s-=Math.sin(t.angle),r=!0),(this.keys.a||this.keys.arrowleft)&&(i+=Math.cos(t.angle-Math.PI/2),s+=Math.sin(t.angle-Math.PI/2),r=!0),(this.keys.d||this.keys.arrowright)&&(i+=Math.cos(t.angle+Math.PI/2),s+=Math.sin(t.angle+Math.PI/2),r=!0),this.keys.shift&&r&&!t.isDashing&&t.isGrounded&&n.getSkillRank("dash")>0&&n.tryActivateSkill("dash")&&(t.isDashing=!0,t.dashTimeRemain=n.getSkillEffect("dash","dashDuration")??.18),r){let d=Math.sqrt(i*i+s*s);i/=d,s/=d;let u=t.isDashing?n.getSkillEffect("dash","dashSpeedMult")??3:1,f=t.moveSpeed*u;if(t.isGrounded){let g=this.applyGroundFriction(t.velocityX,t.velocityYPlanar,e);t.velocityX=g.x,t.velocityYPlanar=g.y;let x=this.accelerate(t.velocityX,t.velocityYPlanar,i,s,f,by,e);t.velocityX=x.x,t.velocityYPlanar=x.y}else{let g=Math.max(0,1-sf*e);t.velocityX*=g,t.velocityYPlanar*=g;let x=this.accelerate(t.velocityX,t.velocityYPlanar,i,s,f,Sy,e);t.velocityX=x.x,t.velocityYPlanar=x.y}t.x+=t.velocityX*e,t.x=this.resolveCollision(t.x,t.y).x,t.y+=t.velocityYPlanar*e,t.y=this.resolveCollision(t.x,t.y).y,t.state=1}else{if(t.isGrounded){let d=this.applyGroundFriction(t.velocityX,t.velocityYPlanar,e);t.velocityX=d.x,t.velocityYPlanar=d.y}else{let d=Math.max(0,1-sf*e);t.velocityX*=d,t.velocityYPlanar*=d}t.x+=t.velocityX*e,t.x=this.resolveCollision(t.x,t.y).x,t.y+=t.velocityYPlanar*e,t.y=this.resolveCollision(t.x,t.y).y,t.state=0}this.movementAnimator.update(t,e);let o=t.x*this.tileSize,l=t.y*this.tileSize,c=this.sampleGroundHeight(o,l);if(this.keys[" "]&&t.isGrounded?(t.velocityY=tf,t.isGrounded=!1,this.keys[" "]=!1,this.airJumpsRemaining=this.engine.skillManager.getSkillRank("double_jump")>0?1:0):this.keys[" "]&&!t.isGrounded&&this.airJumpsRemaining>0&&(t.velocityY=tf,this.airJumpsRemaining-=1,this.keys[" "]=!1),!t.isGrounded)t.velocityY=Math.max(t.velocityY-yy*e,_y),t.worldY+=t.velocityY*e,c!==null&&t.worldY<=c&&(t.worldY=c,t.velocityY=0,t.isGrounded=!0,this.airJumpsRemaining=this.engine.skillManager.getSkillRank("double_jump")>0?1:0);else if(c!==null){let d=c-t.worldY;d>nf||(d<-nf?t.isGrounded=!1:(t.worldY=c,this.airJumpsRemaining=this.engine.skillManager.getSkillRank("double_jump")>0?1:0))}else t.isGrounded=!1;t.worldY<-20&&(t.worldY=0,t.velocityY=0,t.isGrounded=!0);let h=1-Math.exp(-20*e);if(this.smoothedGroundY+=(t.worldY-this.smoothedGroundY)*h,this.updateCameraTransform(),this.storeLastValidPosition(),this.interactionRaycastTimer-=e,this.interactionRaycastTimer<=0){this.interactionRaycastTimer=Ty,this.focusedEntity=null,this.raycaster.setFromCamera(this.centerScreen,this.camera);let d=this.raycaster.intersectObjects(this.scene.children,!0);if(d.length>0&&d[0].distance<1.5*this.tileSize){let u=d[0].object,f=null;for(;u;){if(u.userData&&u.userData.entityId){f=u.userData.entityId;break}u=u.parent}f&&(this.focusedEntity=this.entities.find(g=>g.id===f)||null)}}this.keys.e&&this.focusedEntity?.isInteractable&&this.focusedEntity.onInteract&&(this.focusedEntity.onInteract(this),this.keys.e=!1)}activateSkill(e){return e==="dash"&&this.player.isGrounded&&!this.player.isDashing&&this.engine.skillManager.getSkillRank("dash")>0&&this.engine.skillManager.tryActivateSkill("dash")?(this.player.isDashing=!0,this.player.dashTimeRemain=this.engine.skillManager.getSkillEffect("dash","dashDuration")??.18,!0):e==="big_boom"?this.engine.triggerSkillAttack?.("big_boom")??!1:!1}pushPlayerSafely(e,t){let n=this.player.x+e,i=this.player.y+t,s=this.resolveCollision(n,i);this.player.x=s.x,this.player.y=s.y,this.sanitizePlayerPosition()}storeLastValidPosition(){let e=this.resolveCollision(this.player.x,this.player.y);Math.hypot(e.x-this.player.x,e.y-this.player.y)<.001&&(this.lastValidX=this.player.x,this.lastValidY=this.player.y)}sanitizePlayerPosition(){let e=this.player.x,t=this.player.y;for(let s=0;s<4;s++){let r=this.resolveCollision(e,t);if(Math.hypot(r.x-e,r.y-t)<1e-4)break;e=r.x,t=r.y}let n=this.resolveCollision(e,t);if(Math.hypot(n.x-e,n.y-t)>.001){this.player.x=this.lastValidX,this.player.y=this.lastValidY;return}this.player.x=e,this.player.y=t}sampleGroundHeight(e,t){this.groundRayOrigin.set(e,this.player.worldY+5,t),this.groundRaycaster.set(this.groundRayOrigin,this.groundRayDir);let n=this.groundRaycaster.intersectObjects(this.scene.children,!0);return n.length>0?n[0].point.y:null}resolveCollision(e,t){let i=e,s=t;for(let r of this.barriers){let o=r.minX/this.tileSize,l=r.maxX/this.tileSize,c=r.minY/this.tileSize,h=r.maxY/this.tileSize,d=Math.max(o,Math.min(i,l)),u=Math.max(c,Math.min(s,h)),f=i-d,g=s-u,x=f*f+g*g;if(x<.15*.15&&x>0){let p=Math.sqrt(x);i+=f/p*(.15-p),s+=g/p*(.15-p)}}for(let r of this.entities)if(r.blocksMovement){if(r.userData?.type==="hub_door"||r.userData?.type==="door"){let g,x,p,m,y=r.userData?.facing;if(y==="north"||y===Math.PI)g=r.x-.5,x=r.x+.5,p=r.y-.5-.05,m=r.y-.5+.05;else if(y==="south"||y===0)g=r.x-.5,x=r.x+.5,p=r.y+.5-.05,m=r.y+.5+.05;else if(y==="east"||y===Math.PI/2)g=r.x+.5-.05,x=r.x+.5+.05,p=r.y-.5,m=r.y+.5;else if(y==="west"||y===-Math.PI/2)g=r.x-.5-.05,x=r.x-.5+.05,p=r.y-.5,m=r.y+.5;else continue;let b=Math.max(g,Math.min(i,x)),_=Math.max(p,Math.min(s,m)),T=i-b,w=s-_;if(T*T+w*w<.15*.15&&(T!==0||w!==0)){let A=Math.sqrt(T*T+w*w);i+=T/A*(.15-A),s+=w/A*(.15-A)}continue}if((r.userData?.collisionShape||"circle")==="rect"&&typeof r.userData?.halfWidth=="number"&&typeof r.userData?.halfHeight=="number"){let f=r.userData.halfWidth,g=r.userData.halfHeight,p=this.scene.getObjectByName(`mesh_${r.id}`)?.rotation?.y||0,m=Math.cos(p),y=Math.sin(p),b=i-r.x,_=s-r.y,T=b*m+_*y,w=-b*y+_*m,A=(U,G,B)=>Math.max(G,Math.min(U,B)),v=A(T,-f,f),M=A(w,-g,g),k=T-v,R=w-M,F=k*k+R*R;if(F<.15*.15){let U=0,G=0;if(F>1e-9){let D=Math.sqrt(F),j=.15-D;U=k/D*j,G=R/D*j}else{let D=f-Math.abs(T),j=g-Math.abs(w);D<j?U=(T>=0?1:-1)*(D+.15):G=(w>=0?1:-1)*(j+.15)}let B=U*m-G*y,H=U*y+G*m;i+=B,s+=H}continue}let l=r.userData?.radius||.45,c=i-r.x,h=s-r.y,d=c*c+h*h,u=.15+l;if(d<u*u&&d>0){let f=Math.sqrt(d);i+=c/f*(u-f),s+=h/f*(u-f)}}return{x:i,y:s}}};var el=class{static KEYS={STATIC_GLOW:16777215,PULSE_GLOW:3398607,DIM_PULSE:3357647,FLICKER:5592527,FIRE_ORANGE:3396403,FIRE_DYNAMIC:11686502,POISON_SMOKE:10259419,HOLY_GLITTER:16578494,ELECTRIC_SPARK:9094339,WATER_DRIP:5214138};static createVoxelMesh(e,t,n,i,s,r){let o=new Ue,l=new an(s,s,s*3),c={},h={},d=R=>{R.onBeforeCompile=F=>{F.fragmentShader=F.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
                        #ifdef FOG_EXP2
                            float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
                        #else
                            float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
                        #endif
                        float brightness = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
                        fogFactor = clamp(fogFactor - (brightness * 1.5), 0.0, 1.0);
                        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
                    #endif`)}},u={normal:new En({color:16777215,gradientMap:r}),static:new En({color:16777215,gradientMap:r}),pulse:new En({color:16777215,gradientMap:r}),dimPulse:new En({color:16777215,gradientMap:r}),flicker:new En({color:16777215,gradientMap:r})};d(u.normal),d(u.static),d(u.pulse),d(u.dimPulse),d(u.flicker);let f={n:0,s:0,p:0,dp:0,f:0},g={x:0,y:0,r:0,g:0,b:0,count:0},x={x:0,y:0,r:0,g:0,b:0,count:0};for(let R=0;R<e.length;R+=4){let F=e[R+3],U=t?t[R+3]:0,G=!!t&&U>10;if(F<=128&&!G)continue;let B=R/4%n,H=Math.floor(R/4/n),D=new I((B-n/2)*s,-(H-i/2)*s,0);if(!G){F>128&&f.n++;continue}let j=t[R]<<16|t[R+1]<<8|t[R+2];if(F<=128){j===this.KEYS.FIRE_ORANGE?(c.fire||(c.fire=[]),c.fire.push(D)):j===this.KEYS.FIRE_DYNAMIC?(c.fire_dynamic||(c.fire_dynamic=[],h.fire_dynamic=[]),c.fire_dynamic.push(D),h.fire_dynamic.push(new he(e[R]/255,e[R+1]/255,e[R+2]/255))):j===this.KEYS.POISON_SMOKE?(c.poison||(c.poison=[]),c.poison.push(D)):j===this.KEYS.HOLY_GLITTER?(c.holy||(c.holy=[]),c.holy.push(D)):j===this.KEYS.ELECTRIC_SPARK?(c.electric||(c.electric=[]),c.electric.push(D)):j===this.KEYS.WATER_DRIP&&(c.water||(c.water=[]),c.water.push(D));continue}j===this.KEYS.PULSE_GLOW?(f.p++,g.x+=D.x,g.y+=D.y,g.count++,g.r+=e[R]/255,g.g+=e[R+1]/255,g.b+=e[R+2]/255):j===this.KEYS.DIM_PULSE?(f.dp++,x.x+=D.x,x.y+=D.y,x.count++,x.r+=e[R]/255,x.g+=e[R+1]/255,x.b+=e[R+2]/255):j===this.KEYS.FLICKER?f.f++:j===this.KEYS.STATIC_GLOW?f.s++:j===this.KEYS.FIRE_ORANGE?(c.fire||(c.fire=[]),c.fire.push(D),f.n++):j===this.KEYS.FIRE_DYNAMIC?(c.fire_dynamic||(c.fire_dynamic=[],h.fire_dynamic=[]),c.fire_dynamic.push(D),h.fire_dynamic.push(new he(e[R]/255,e[R+1]/255,e[R+2]/255)),f.n++):j===this.KEYS.POISON_SMOKE?(c.poison||(c.poison=[]),c.poison.push(D),f.n++):j===this.KEYS.HOLY_GLITTER?(c.holy||(c.holy=[]),c.holy.push(D),f.n++):j===this.KEYS.ELECTRIC_SPARK?(c.electric||(c.electric=[]),c.electric.push(D),f.n++):(j===this.KEYS.WATER_DRIP&&(c.water||(c.water=[]),c.water.push(D)),f.n++)}let p=new Vt(l,u.normal,f.n),m=new Vt(l,u.static,f.s),y=new Vt(l,u.pulse,f.p),b=new Vt(l,u.dimPulse,f.dp),_=new Vt(l,u.flicker,f.f);p.castShadow=p.receiveShadow=!0,m.castShadow=m.receiveShadow=!0,y.castShadow=y.receiveShadow=!0,b.castShadow=b.receiveShadow=!0,_.castShadow=_.receiveShadow=!0;let T=new ft,w=new he,A={n:0,s:0,p:0,dp:0,f:0};for(let R=0;R<i;R++)for(let F=0;F<n;F++){let U=(R*n+F)*4;if(e[U+3]<=128)continue;T.position.set((F-n/2)*s,-(R-i/2)*s,0),T.updateMatrix(),w.setRGB(e[U]/255,e[U+1]/255,e[U+2]/255,ut);let G=t&&t[U+3]>10,B=G?t[U]<<16|t[U+1]<<8|t[U+2]:0,H="n";G&&(B===this.KEYS.PULSE_GLOW?H="p":B===this.KEYS.DIM_PULSE?H="dp":B===this.KEYS.FLICKER?H="f":B===this.KEYS.STATIC_GLOW&&(H="s"));let D=H==="n"?p:H==="s"?m:H==="p"?y:H==="dp"?b:_;D.setMatrixAt(A[H],T.matrix),D.setColorAt(A[H],w),A[H]++}f.n>0&&o.add(p),f.s>0&&o.add(m),f.p>0&&o.add(y),f.dp>0&&o.add(b),f.f>0&&o.add(_);let v=Object.entries(c).map(([R,F])=>({type:R,positions:F,colors:h[R]})),M=null;g.count>0&&(M=new Tt(new he(g.r/g.count,g.g/g.count,g.b/g.count),0,6,1),M.position.set(g.x/g.count,g.y/g.count,.4),M.layers.enable(1),o.add(M));let k=null;return x.count>0&&(k=new Tt(new he(x.r/x.count,x.g/x.count,x.b/x.count),0,4,1),k.position.set(x.x/x.count,x.y/x.count,.4),k.layers.enable(1),o.add(k)),{group:o,pulseMaterial:f.p>0?u.pulse:null,dimPulseMaterial:f.dp>0?u.dimPulse:null,flickerMaterial:f.f>0?u.flicker:null,pulseLight:M,dimPulseLight:k,particleRequests:v}}};var qs=class{static createEffect(e,t,n){let i=new Ue,s=e==="electric"?Math.min(50,t.length*2):Math.min(200,t.length*8),r=new an(.1,.1,.1),o={fire:{color:16733440,opacity:.4,blending:Vn},fire_dynamic:{color:16777215,opacity:.4,blending:Vn},poison:{color:11141375,opacity:.3,blending:Ln},holy:{color:16777130,opacity:.8,blending:Vn},electric:{color:65535,opacity:1,blending:Vn},water:{color:22015,opacity:.5,blending:Ln}}[e],l=new Qe({color:o.color,transparent:!0,opacity:o.opacity,blending:o.blending,depthWrite:!1,fog:!1}),c=new Vt(r,l,s);c.frustumCulled=!1,(e==="fire_dynamic"||e==="fire")&&(c.instanceColor=new rn(new Float32Array(s*3),3));let h=t.map((g,x)=>({origin:g,baseColor:n?n[x]:null,life:Math.random(),speed:.3+Math.random()*.5,offset:new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.05)})),d=new ft,u=new he,f=0;return i.userData.updateParticles=g=>{f+=g;for(let x=0;x<s;x++){let p=h[x%h.length];p.life+=g*p.speed,p.life>1&&(p.life=0);let m=p.life;if(e==="fire"||e==="fire_dynamic"){let y=(1-m)*.8;d.position.set(p.origin.x+p.offset.x,p.origin.y+m*.6,p.origin.z+.1),d.scale.set(y,y,y),e==="fire_dynamic"&&p.baseColor?(u.copy(p.baseColor),m>.5&&u.lerp(new he(3342336),(m-.5)*2),c.setColorAt(x,u)):e==="fire"&&(u.setHex(16733440),m>.5&&u.lerp(new he(3342336),(m-.5)*2),c.setColorAt(x,u))}else if(e==="poison"){let y=Math.sin(f+x)*.1,b=Math.sin(m*Math.PI)*1.2;d.position.set(p.origin.x+y,p.origin.y+m*.2,p.origin.z+p.offset.z),d.scale.set(b,b,b)}else if(e==="holy"){let y=(Math.sin(f*10+x)+1)*.5,b=.75+Math.sin(m*Math.PI)*.25;d.position.set(p.origin.x+p.offset.x,p.origin.y+p.offset.y,p.origin.z+p.offset.z);let _=(.8+.8*y)*(.6+.4*b);d.scale.set(_,_,_)}else if(e==="electric"){let b=Math.sin(f*30+x*.5),_=b>.85?1:0;d.position.set(p.origin.x+(b-.85)*.3+p.offset.x,p.origin.y+p.offset.y*.5,.1);let T=_*(1-(1-b)*5);d.scale.set(T,T,T)}else if(e==="water"){let y=m*m*.5;d.position.set(p.origin.x+p.offset.x,p.origin.y-y,p.origin.z),d.scale.set(.4,.6,.4)}d.updateMatrix(),c.setMatrixAt(x,d.matrix)}c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0)},i.add(c),i}};var Ys=class{constructor(e,t,n,i){this.scene=e;this.modelManager=t;this.textureManager=n;this.tileSize=i;this.toonGradient=this.createToonGradient()}toonGradient;mixers=[];spriteBurstTemplateCache=new Map;createToonGradient(){let n=document.createElement("canvas");n.width=256,n.height=1;let i=n.getContext("2d"),s=256/14;for(let o=0;o<14;o++){let l=10+90*(o/13);i.fillStyle=`hsl(0, 0%, ${l}%)`,i.fillRect(o*s,0,s,1)}let r=new zi(n);return r.minFilter=Ye,r.magFilter=Ye,r.generateMipmaps=!1,r.colorSpace=ut,r}applyRetroMaterials(e,t,n){e.traverse(i=>{if(i.isMesh){let s=i;s.castShadow=!0,s.receiveShadow=!0;let r=s.material,o=t||r&&r.map||null,l=n!==void 0?n:r?r.color.getHex():16777215,c=new En({color:l,map:o,gradientMap:this.toonGradient,transparent:r?r.transparent:!1,alphaTest:.5});c.map&&(c.map.magFilter=Ye,c.map.minFilter=Ye,c.map.colorSpace=ut),c.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <fog_fragment>",`
                        #ifdef USE_FOG
                            #ifdef FOG_EXP2
                                float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
                            #else
                                float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
                            #endif
                            float brightness = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
                            fogFactor = clamp(fogFactor - (brightness * 1.5), 0.0, 1.0);
                            gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
                        #endif
                        `)},s.material=c}})}createVoxelItem(e,t){let i=this.textureManager.getTexture(e).image,s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,i.width,i.height).data,l=null;try{let u=this.textureManager.getTexture(`${e}_emission`);u&&u.image&&(r.clearRect(0,0,s.width,s.height),r.drawImage(u.image,0,0,i.width,i.height),l=r.getImageData(0,0,i.width,i.height).data)}catch{}let c=t/i.width,h=el.createVoxelMesh(o,l,i.width,i.height,c,this.toonGradient),d=[];return h.particleRequests&&h.particleRequests.length>0&&h.particleRequests.forEach(u=>{let f=qs.createEffect(u.type,u.positions,u.colors);h.group.add(f),f.userData.updateParticles&&d.push(f.userData.updateParticles)}),d.length>0&&(h.group.userData.updateParticles=u=>{for(let f=0;f<d.length;f++)d[f](u)}),h.pulseMaterial&&(h.group.userData.pulseMaterial=h.pulseMaterial),h.pulseLight&&(h.pulseLight.position.z=.5,h.group.userData.pulseLight=h.pulseLight),h.pulseMaterial&&(h.group.userData.pulseMaterial=h.pulseMaterial),h.dimPulseMaterial&&(h.group.userData.dimPulseMaterial=h.dimPulseMaterial),h.flickerMaterial&&(h.group.userData.flickerMaterial=h.flickerMaterial),h.pulseLight&&(h.group.userData.pulseLight=h.pulseLight),h.dimPulseLight&&(h.dimPulseLight.position.z=.5,h.group.userData.dimPulseLight=h.dimPulseLight),h.group}createVoxelFire(e=null){let t=new Ue,n=e!==null&&e.length>0,i=n?Math.min(250,e.length*10):150,s=new an(.15,.15,.15),r=new Qe({color:16777215,transparent:!0,opacity:.35,depthWrite:!1,blending:Vn,fog:!1}),o=new Vt(s,r,i);o.instanceColor=new rn(new Float32Array(i*3),3);let l=.08,c=.04,h=[];for(let g=0;g<i;g++)if(n){let x=e[Math.floor(Math.random()*e.length)];h.push({x:x.x,y:x.y,z:(Math.random()-.5)*.1,speed:.4+Math.random()*.8,life:Math.random(),isSpread:!0})}else{let x=Math.random()*Math.PI*2,p=Math.random()*.45;h.push({x:Math.cos(x)*p*.6,z:Math.sin(x)*p*.6,y:0,speed:.3+Math.random()*.8,life:Math.random(),isSpread:!1})}let d=new ft,u=new he,f=0;return t.userData.updateParticles=g=>{f+=g;for(let x=0;x<i;x++){let p=h[x];p.life+=g*p.speed,p.life>1&&(p.life=0);let m=p.life,y=(1-Math.pow(m,2))*.8;if(p.isSpread)d.position.set(p.x,p.y+m*.7,p.z+.1);else{let b=Math.pow(1-m,1.8),_=p.x*b+l*m*m,T=p.z*b+c*m*m;d.position.set(_,m*.7,T)}d.scale.set(y,y*1.3,y),d.updateMatrix(),o.setMatrixAt(x,d.matrix),m<.2?u.setHex(16733440):m<.5?u.setHex(13378048):m<.8?u.setHex(8912896):u.setHex(3342336),o.setColorAt(x,u)}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)},t.add(o),t}createSpriteVoxelBurst(e,t,n=.16){let i=new Ue,s=this.getSpriteBurstTemplate(e,t,n);if(s.length===0)return i;let r=Math.max(.001,t/64),o=new an(r*1.8,r*1.8,r*1.8),l=new Qe({color:16777215,transparent:!0,opacity:.95,depthWrite:!1}),c=new Vt(o,l,s.length);c.instanceColor=new rn(new Float32Array(s.length*3),3);let h=new ft,d=new he,u=s.map(f=>Cn(Ae({},f),{vx:f.x*2.8+(Math.random()-.5)*2.8,vy:2.8+Math.random()*2.4,vz:f.z*2.8+(Math.random()-.5)*2.8,life:0}));return i.userData.updateParticles=f=>{for(let g=0;g<u.length;g++){let x=u[g];x.life+=f,x.vy-=9.8*f,x.x+=x.vx*f,x.y+=x.vy*f,x.z+=x.vz*f;let p=Math.max(0,1-x.life/1.15),m=Math.max(.08,p);h.position.set(x.x,x.y,x.z),h.scale.set(m,m,m),h.updateMatrix(),c.setMatrixAt(g,h.matrix),d.copy(x.color).multiplyScalar(.65+.35*p),c.setColorAt(g,d)}c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0)},i.add(c),i}getSpriteBurstTemplate(e,t,n){let i=`${e}|${t.toFixed(3)}|${n.toFixed(3)}`,s=this.spriteBurstTemplateCache.get(i);if(s)return s;let o=this.textureManager.getTexture(e).image,l=o?.width??0,c=o?.height??0;if(l<=0||c<=0)return[];let h=document.createElement("canvas");h.width=l,h.height=c;let d=h.getContext("2d",{willReadFrequently:!0});if(!d)return[];d.drawImage(o,0,0);let u=d.getImageData(0,0,l,c).data,f=t/l,g=[],x=Math.max(1,Math.ceil(Math.sqrt(l*c/280)));for(let p=0;p<c;p+=x)for(let m=0;m<l;m+=x){let y=(p*l+m)*4;u[y+3]<128||g.push({x:(m-l/2)*f,y:-((p-c/2)*f),z:(Math.random()-.5)*Math.max(n,f),color:new he(u[y]/255,u[y+1]/255,u[y+2]/255)})}return this.spriteBurstTemplateCache.set(i,g),g}createVoxelActor(e,t){let n=e.scale||1,i=this.createVoxelItem(e.textureId,n),s=Number(e.userData?.thickness??0),r=e.x*t.positionScale,o=e.y*t.positionScale,l=e.verticalOffset||0;i.updateMatrixWorld(!0);let c=new vt().setFromObject(i),h=Math.max(1e-6,c.max.z-c.min.z);s>.001&&(i.scale.z*=s/h,i.updateMatrixWorld(!0),c=new vt().setFromObject(i));let d=l-c.min.y,u=c.min.y,f=c.max.y,g=Math.max(1e-6,f-u),x=Math.max((c.max.x-c.min.x)/2,(c.max.z-c.min.z)/2),p=x,m=g,y=u;try{let _=this.textureManager.getTexture(e.textureId).image,T=_?.width??0,w=_?.height??0;if(T>0&&w>0){let A=n/T;p=Math.max(1e-6,T*A/2),m=Math.max(1e-6,w*A),y=-(w/2)*A+A/2}}catch{}if(i.position.set(r,d,o),i.name=`mesh_${e.id}`,t.billboard!==!1&&(i.userData.isBillboard=!0),t.setEntityId&&(i.userData.entityId=e.id),t.deriveCollisionRadiusFromMesh){let b=new vt().setFromObject(i),_=(b.max.x-b.min.x)/2,T=(b.max.z-b.min.z)/2,w=_/Math.max(1e-6,t.positionScale),A=T/Math.max(1e-6,t.positionScale);e.userData||(e.userData={}),e.userData.collisionShape="rect",e.userData.halfWidth=w,e.userData.halfHeight=A,e.userData.radius=Math.max(w,A)}return e.userData||(e.userData={}),s>.001&&(e.userData.thickness=s),e.userData.hitboxLocalMinY=u,e.userData.hitboxLocalMaxY=f,e.userData.hitboxLocalHeight=g,e.userData.hitboxLocalHalfWidth=Math.max(1e-6,x),e.userData.hitboxSpriteHalfWidth=p,e.userData.hitboxSpriteHeight=m,e.userData.hitboxSpriteMinY=y,i}};var tl=class extends Ys{buildHub(e,t){this.mixers=[],this.applyRetroMaterials(e),e.traverse(n=>{n.layers.enable(2)}),this.scene.add(e),t.forEach(n=>{n.userData?.type!=="hub_door"&&this.buildHubEntity(n)})}buildHubEntity(e){let t=e.x*this.tileSize,n=e.y*this.tileSize;if(e.userData?.type==="enemy_preview"){let i=this.createVoxelActor(e,{positionScale:this.tileSize,billboard:!0,setEntityId:!0,deriveCollisionRadiusFromMesh:!0});this.scene.add(i)}else if(e.userData?.type==="npc"){let i=this.createVoxelActor(e,{positionScale:this.tileSize,billboard:!0,setEntityId:!0,deriveCollisionRadiusFromMesh:!0});this.scene.add(i)}else if(e.userData?.type==="bonfire"){let i=new Ue;i.position.set(t,0,n);let s=this.createVoxelFire();i.add(s);let r=new Tt(16771251,1.5,6,1);r.layers.enable(1),r.position.set(0,.5,0),r.name="fireLight",i.add(r),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,i.userData.updateParticles=s.userData.updateParticles,this.scene.add(i)}else if(e.userData?.type==="solid_prop"){let i=e.textureId&&e.textureId!=="none"?e.textureId:e.name?.toLowerCase()||"unknown",s=this.modelManager.getModel(i).clone();s.position.set(t,0,n),this.applyRetroMaterials(s),s.name=`mesh_${e.id}`,this.scene.add(s)}else if(e.userData?.type==="wall_lantern"){let i=new Ue;i.position.set(t,0,n),i.rotation.y=e.userData.facing;let s=new Tt(16765573,1.2,5,1);s.layers.enable(1),s.name="fireLight",s.position.set(0,1,.2),i.add(s),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,this.scene.add(i)}else if(e.userData?.type==="standing_torch"){let i=new Ue;i.position.set(t,0,n);let s=this.createVoxelFire();s.scale.set(.4,.4,.4),s.position.set(0,.5,0),i.add(s);let r=new Tt(16758861,1.2,5,1);r.layers.enable(1),r.position.copy(s.position),r.name="fireLight",i.add(r),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,i.userData.updateParticles=s.userData.updateParticles,this.scene.add(i)}}};var rf={1:{id:"dungeon",wallModelVariants:[],floorModelVariants:[],floorColor:"#000",ceilingColor:"#000",wallModelId:"wall_flat",wallTextureId:"wall_blue",floorModelId:"floor_flat",floorTextureId:"floor_stone"},99:{id:"void",wallModelVariants:[],floorModelVariants:[],floorColor:"#000",ceilingColor:"#000",wallModelId:"wall_flat",wallColor:0,floorModelId:"floor_flat"}};var nl=class extends Ys{biomes=rf;buildRoot;getWallFace(e){let t=this.biomes[e]||this.biomes[1],n=new Ue,i=this.modelManager.getModel(t.wallModelId),s=t.wallTextureId?this.textureManager.getTexture(t.wallTextureId):void 0;if(this.applyRetroMaterials(i,s,t.wallColor),n.add(i),t.topModelId){let r=this.modelManager.getModel(t.topModelId),o=t.topTextureId?this.textureManager.getTexture(t.topTextureId):void 0;this.applyRetroMaterials(r,o,t.wallColor),r.rotation.y=Math.PI,n.add(r)}return n}getFloorFace(e){let t=this.biomes[e]||this.biomes[1],n=this.modelManager.getModel(t.floorModelId),i=t.floorTextureId?this.textureManager.getTexture(t.floorTextureId):void 0;return this.applyRetroMaterials(n,i),n}build(e,t,n,i=0,s=0,r=this.scene){this.mixers=[],this.buildRoot=r;for(let o=0;o<e.length;o++)for(let l=0;l<e[0].length;l++){let c=(l+i+.5)*this.tileSize,h=(o+s+.5)*this.tileSize,d=t[o][l]||1;if(e[o][l]===0){let u=this.getFloorFace(d);u.position.set(c,0,h),u.traverse(f=>{f.layers.enable(2)}),this.buildRoot.add(u)}}n.forEach(o=>this.buildDungeonEntity(o))}buildDungeonEntity(e){let t=e.x*this.tileSize,n=e.y*this.tileSize;if(e.userData?.type==="door"){let i=e.userData.frameType==="town"?"frame_town":"frame_flat",s=this.modelManager.getModel(i).clone(),r=this.modelManager.getModel("door").clone(),o=e.userData.facing,l=this.tileSize/2,c=t,h=n,d=0;o==="south"?(h+=l,d=0):o==="north"?(h-=l,d=Math.PI):o==="east"?(c+=l,d=Math.PI/2):o==="west"&&(c-=l,d=-Math.PI/2),s.rotation.y=d,s.position.set(c,0,h);let u=e.userData.biomeId||1,f=this.biomes[u]||this.biomes[1],g=e.userData.frameTexture||f.wallTextureId,x=g?this.textureManager.getTexture(g):void 0;this.applyRetroMaterials(s,x,f.wallColor),this.applyRetroMaterials(r);let p=new Ue;p.position.set(-.5,0,0),r.position.set(.5,0,0),p.add(r),s.add(p),p.userData.closedAngle=0,p.rotation.y=0,p.name=`mesh_${e.id}`,p.userData.entityId=e.id,p.userData.type="door",p.userData.state=e.userData.state,this.buildRoot.add(s)}else if(e.userData?.type==="chest"){let i=new Ue;i.position.set(t,0,n),e.userData.facing!==void 0&&(i.rotation.y=e.userData.facing);let s=this.modelManager.getModel("chest-closed").clone();s.name="closed";let r=this.modelManager.getModel("chest-open").clone();r.name="open",r.visible=!1,this.applyRetroMaterials(s),this.applyRetroMaterials(r),i.add(s),i.add(r),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,this.buildRoot.add(i)}else if(e.userData?.type==="item"){let i=this.tileSize*.4,s=this.createVoxelItem(e.textureId,i);s.position.set(t,i/2+.2,n),s.name=`mesh_${e.id}`,s.userData.entityId=e.id,this.buildRoot.add(s)}else if(e.userData?.type==="solid_prop"){let i=e.textureId&&e.textureId!=="none"?e.textureId:e.name?.toLowerCase()||"unknown",s=this.modelManager.getModel(i).clone();s.position.set(t,0,n),this.applyRetroMaterials(s),s.name=`mesh_${e.id}`,s.userData.entityId=e.id,this.buildRoot.add(s)}else if(e.userData?.type==="npc"){let i=this.createVoxelActor(e,{positionScale:this.tileSize,billboard:!0,setEntityId:!0,deriveCollisionRadiusFromMesh:!0});this.buildRoot.add(i)}else if(e.userData?.type==="enemy"||e.userData?.type==="enemy_preview"){let i=this.createVoxelActor(e,{positionScale:this.tileSize,billboard:!0,setEntityId:!0,deriveCollisionRadiusFromMesh:!0});this.buildRoot.add(i)}else if(e.userData?.type==="bonfire"){let i=new Ue;i.position.set(t,0,n);let s=this.createVoxelFire();i.add(s);let r=new Tt(16771251,1.5,6,1);r.layers.enable(1),r.position.set(0,.5,0),i.add(r),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,i.userData.updateParticles=s.userData.updateParticles,this.buildRoot.add(i)}else if(e.userData?.type==="wall_lantern"){let i=new Ue;i.position.set(t,0,n),i.rotation.y=e.userData.facing??0;let s=new Tt(16765573,1.2,5,1);s.layers.enable(1),s.position.set(0,1,.2),i.add(s),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,this.buildRoot.add(i)}else if(e.userData?.type==="standing_torch"){let i=new Ue;i.position.set(t,0,n);let s=this.createVoxelFire();s.scale.set(.4,.4,.4),s.position.set(0,.5,0),i.add(s);let r=new Tt(16758861,1.2,5,1);r.layers.enable(1),r.position.copy(s.position),i.add(r),i.name=`mesh_${e.id}`,i.userData.entityId=e.id,i.userData.updateParticles=s.userData.updateParticles,this.buildRoot.add(i)}else if(e.userData?.type==="edge_wall"){let i=e.userData.biomeId||1,s=this.getWallFace(i),r=e.userData.facing,o=this.tileSize/2,l=t,c=n,h=0;r==="north"?(c-=o,h=0):r==="south"?(c+=o,h=Math.PI):r==="east"?(l+=o,h=-Math.PI/2):r==="west"&&(l-=o,h=Math.PI/2),s.rotation.y=h,s.position.set(l,0,c),s.name=`mesh_${e.id}`,this.buildRoot.add(s)}else if(e.userData?.type!=="interactive_stair_up"){if(e.userData?.type==="corner"){let i=this.modelManager.getModel("wall_flat_corner").clone();i.position.set(t,0,n);let s=e.userData.biomeId||1,r=this.biomes[s]||this.biomes[1];this.applyRetroMaterials(i,void 0,r.wallColor),this.buildRoot.add(i)}}}};var af=[{category:"cell",type:"entrance",x:0,y:0},{category:"cell",type:"entrance",x:1,y:0},{category:"cell",type:"entrance",x:2,y:0},{category:"cell",type:"entrance",x:0,y:1},{category:"cell",type:"entrance",x:1,y:1},{category:"cell",type:"entrance",x:2,y:1},{category:"cell",type:"entrance",x:0,y:2},{category:"cell",type:"dungeon_connection",x:1,y:2},{category:"cell",type:"entrance",x:2,y:2},{category:"wall",type:"wall",x:0,y:-.5},{category:"wall",type:"door",x:1,y:-.5},{category:"wall",type:"wall",x:2,y:-.5},{category:"wall",type:"wall",x:-.5,y:0},{category:"wall",type:"wall",x:-.5,y:1},{category:"wall",type:"wall",x:-.5,y:2},{category:"wall",type:"wall",x:2.5,y:0},{category:"wall",type:"wall",x:2.5,y:1},{category:"wall",type:"wall",x:2.5,y:2},{category:"wall",type:"wall",x:0,y:2.5},{category:"wall",type:"open",x:1,y:2.5},{category:"wall",type:"wall",x:2,y:2.5}];var il=class{width;height;radius;cells=[];hEdges=[];vEdges=[];biomeMap=[];entities=[];entranceCoords={x:0,y:0};placedRooms=[];bspRooms=[];prngState=0;constructor(e){this.radius=e,this.width=e*2+25,this.height=e*2+25}random(){let e=this.prngState+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}generate(e,t="north"){this.entities=[],this.placedRooms=[],this.bspRooms=[],this.prngState=e.seed+e.floorLevel*1234567,this.radius=e.radius,this.width=this.radius*2+25,this.height=this.radius*2+25,this.initGrids();let n=Math.floor(this.width/2),i=Math.floor(this.height/2),s=n,r=i,o=2;switch(t.toLowerCase()){case"north":r=i+this.radius+o;break;case"south":r=i-this.radius-o;break;case"east":s=n-this.radius-o;break;case"west":s=n+this.radius+o;break}let l=2;e.layoutType==="hub_spoke"?this.generateSpine(e,n,i,s,r,t):e.layoutType==="maze"?(this.generateMaze(e,n,i,s,r,t),l=3):this.generateDense(e,n,i,s,r,t);let c=e.layoutType==="maze"?0:.08;this.ensureConnectivity(c,l),this.sealVoidEdges();for(let d=0;d<this.height;d++)for(let u=0;u<this.width;u++)this.biomeMap[d][u]=e.biomeId;return this.compileToEngineFormat(),this.generateCorners(),{map:this.cells.map(d=>d.map(u=>u===0?0:1)),biomeMap:this.biomeMap,entities:this.entities}}generateDense(e,t,n,i,s,r){this.carveCircularBase(t,n,this.radius),this.placeCorePrefabs(e,t,n,i,s,r);let o=t-this.radius,l=n-this.radius,c=this.radius*2,h=this.radius*2;this.partitionSpace(o,l,c,h,e.minRoomSize,e.maxRoomSize,15)}generateSpine(e,t,n,i,s,r){this.carveCircularBase(t,n,this.radius);let o,l,c,h;r.toLowerCase()==="north"||r.toLowerCase()==="south"?(c=3,h=(this.radius-2)*2,o=t-1,l=n-this.radius+2):(c=(this.radius-2)*2,h=3,o=t-this.radius+2,l=n-1),this.carveRectangularRoom(o,l,c,h),this.placedRooms.push({x:o,y:l,w:c,h}),this.placeCorePrefabs(e,t,n,i,s,r);let d=t-this.radius,u=n-this.radius,f=this.radius*2,g=this.radius*2;this.partitionSpace(d,u,f,g,e.minRoomSize,e.maxRoomSize,15)}generateMaze(e,t,n,i,s,r){this.carveCircularBase(t,n,this.radius),this.placeCorePrefabs(e,t,n,i,s,r);let o=t-this.radius,l=n-this.radius,c=this.radius*2,h=this.radius*2;this.partitionSpace(o,l,c,h,1,2,20)}placeCorePrefabs(e,t,n,i,s,r){e.hasEntrancePrefab&&(this.stampPrefab(af,i,s,r),this.placedRooms.push({x:i-1,y:s-2,w:3,h:3}))}initGrids(){this.cells=Array.from({length:this.height},()=>new Array(this.width).fill(1)),this.biomeMap=Array.from({length:this.height},()=>new Array(this.width).fill(1)),this.hEdges=Array.from({length:this.height+1},()=>new Array(this.width).fill(0)),this.vEdges=Array.from({length:this.height},()=>new Array(this.width+1).fill(0))}carveCircularBase(e,t,n){for(let i=0;i<this.height;i++)for(let s=0;s<this.width;s++)Math.sqrt((s-e)**2+(i-t)**2)<=n&&(this.cells[i][s]=0)}stampPrefab(e,t,n,i){let s=0,r=0;for(let l of e)if(l.category==="cell"&&(l.type==="dungeon_connection"||l.type==="room_anchor")){s=l.x,r=l.y;break}let o=(l,c)=>{let h=l-s,d=c-r;switch(i.toLowerCase()){case"north":return{rx:h,ry:d};case"east":return{rx:-d,ry:h};case"south":return{rx:-h,ry:-d};case"west":return{rx:d,ry:-h};default:return{rx:h,ry:d}}};for(let l of e){let{rx:c,ry:h}=o(l.x,l.y),d=t+c,u=n+h,f=Math.round(d*10)/10,g=Math.round(u*10)/10;if(l.category==="cell"){let x=Math.round(f),p=Math.round(g);p>=0&&p<this.height&&x>=0&&x<this.width&&(this.cells[p][x]=0,l.type==="dungeon_connection"&&(this.entranceCoords={x,y:p}))}else if(l.category==="wall"){let x=1;if(l.type==="door"?x=2:l.type==="open"&&(x=3),f%1!==0){let p=Math.ceil(f),m=Math.round(g);m>=0&&m<this.height&&p>=0&&p<=this.width&&(this.vEdges[m][p]=x)}else if(g%1!==0){let p=Math.round(f),m=Math.ceil(g);m>=0&&m<=this.height&&p>=0&&p<this.width&&(this.hEdges[m][p]=x)}}else if(l.category==="entity"){let x=Math.round(f),p=Math.round(g);p>=0&&p<this.height&&x>=0&&x<this.width&&(l.type==="chest"&&this.placeChest(x,p),l.type==="stairs"&&this.placeStairs(x,p))}}}carveRectangularRoom(e,t,n,i){for(let s=t;s<t+i;s++)for(let r=e;r<e+n;r++)s>=0&&s<this.height&&r>=0&&r<this.width&&(this.cells[s][r]=0);for(let s=e;s<e+n;s++)s>=0&&s<this.width&&(t>=0&&this.hEdges[t][s]===0&&(this.hEdges[t][s]=1),t+i<=this.height&&this.hEdges[t+i][s]===0&&(this.hEdges[t+i][s]=1));for(let s=t;s<t+i;s++)s>=0&&s<this.height&&(e>=0&&this.vEdges[s][e]===0&&(this.vEdges[s][e]=1),e+n<=this.width&&this.vEdges[s][e+n]===0&&(this.vEdges[s][e+n]=1))}findValidRoomLocation(e,t,n,i,s){for(let o=0;o<200;o++){let l=n+Math.floor(this.random()*(s*2)-s),c=i+Math.floor(this.random()*(s*2)-s),h=Math.sqrt((l-n)**2+(c-i)**2),d=Math.sqrt((l+e-n)**2+(c-i)**2),u=Math.sqrt((l-n)**2+(c+t-i)**2),f=Math.sqrt((l+e-n)**2+(c+t-i)**2);if(h<=s-1&&d<=s-1&&u<=s-1&&f<=s-1){let g=!1;for(let x of this.placedRooms)if(l<x.x+x.w&&l+e>x.x&&c<x.y+x.h&&c+t>x.y){g=!0;break}if(!g)return{x:l,y:c}}}return null}partitionSpace(e,t,n,i,s,r,o){if(o<=0){this.bspRooms.push({x:e,y:t,w:n,h:i});return}let l=n>r,c=i>r;if(!l&&!c&&this.random()>.5){this.bspRooms.push({x:e,y:t,w:n,h:i});return}let h=this.random()>.5;if(l&&!c?h=!0:c&&!l?h=!1:n>i*1.5?h=!0:i>n*1.5&&(h=!1),h){if(n<s*2){this.bspRooms.push({x:e,y:t,w:n,h:i});return}let d=e+s+Math.floor(this.random()*(n-s*2));for(let u=t;u<t+i;u++)this.cells[u][d-1]===0&&this.cells[u][d]===0&&!this.isEdgeInsidePrefab(d,u,!0)&&(this.vEdges[u][d]=1);this.partitionSpace(e,t,d-e,i,s,r,o-1),this.partitionSpace(d,t,n-(d-e),i,s,r,o-1)}else{if(i<s*2){this.bspRooms.push({x:e,y:t,w:n,h:i});return}let d=t+s+Math.floor(this.random()*(i-s*2));for(let u=e;u<e+n;u++)this.cells[d-1][u]===0&&this.cells[d][u]===0&&!this.isEdgeInsidePrefab(u,d,!1)&&(this.hEdges[d][u]=1);this.partitionSpace(e,t,n,d-t,s,r,o-1),this.partitionSpace(e,d,n,i-(d-t),s,r,o-1)}}isEdgeInsidePrefab(e,t,n){for(let i of this.placedRooms)if(n){if(e>i.x&&e<i.x+i.w&&t>=i.y&&t<i.y+i.h)return!0}else if(t>i.y&&t<i.y+i.h&&e>=i.x&&e<i.x+i.w)return!0;return!1}ensureConnectivity(e=.05,t=2){let n=Array.from({length:this.height},()=>new Array(this.width).fill(0)),i=1;for(let l=0;l<this.height;l++)for(let c=0;c<this.width;c++)if(this.cells[l][c]===0&&n[l][c]===0){let h=[{x:c,y:l}];for(n[l][c]=i;h.length>0;){let d=h.shift(),u=d.x,f=d.y;f>0&&this.cells[f-1][u]===0&&n[f-1][u]===0&&this.hEdges[f][u]!==1&&(n[f-1][u]=i,h.push({x:u,y:f-1})),f<this.height-1&&this.cells[f+1][u]===0&&n[f+1][u]===0&&this.hEdges[f+1][u]!==1&&(n[f+1][u]=i,h.push({x:u,y:f+1})),u>0&&this.cells[f][u-1]===0&&n[f][u-1]===0&&this.vEdges[f][u]!==1&&(n[f][u-1]=i,h.push({x:u-1,y:f})),u<this.width-1&&this.cells[f][u+1]===0&&n[f][u+1]===0&&this.vEdges[f][u+1]!==1&&(n[f][u+1]=i,h.push({x:u+1,y:f}))}i++}let s=[];for(let l=1;l<this.height;l++)for(let c=0;c<this.width;c++)if(this.hEdges[l][c]===1&&this.cells[l-1][c]===0&&this.cells[l][c]===0){let h=n[l-1][c],d=n[l][c];h!==0&&d!==0&&h!==d&&s.push({x:c,y:l,isHorizontal:!0,r1:h,r2:d})}for(let l=0;l<this.height;l++)for(let c=1;c<this.width;c++)if(this.vEdges[l][c]===1&&this.cells[l][c-1]===0&&this.cells[l][c]===0){let h=n[l][c-1],d=n[l][c];h!==0&&d!==0&&h!==d&&s.push({x:c,y:l,isHorizontal:!1,r1:h,r2:d})}for(let l=s.length-1;l>0;l--){let c=Math.floor(this.random()*(l+1));[s[l],s[c]]=[s[c],s[l]]}let r=new Map,o=l=>{let c=l;for(;r.has(c);)c=r.get(c);return c};for(let l of s){let c=o(l.r1),h=o(l.r2);c!==h?(l.isHorizontal?this.hEdges[l.y][l.x]=t:this.vEdges[l.y][l.x]=t,r.set(h,c)):this.random()<e&&(l.isHorizontal?this.hEdges[l.y][l.x]=t:this.vEdges[l.y][l.x]=t)}}sealVoidEdges(){for(let e=0;e<this.height;e++)for(let t=0;t<this.width;t++)this.cells[e][t]===0&&((e===0||this.cells[e-1][t]===1)&&this.hEdges[e][t]===0&&(this.hEdges[e][t]=1),(e===this.height-1||this.cells[e+1][t]===1)&&this.hEdges[e+1][t]===0&&(this.hEdges[e+1][t]=1),(t===0||this.cells[e][t-1]===1)&&this.vEdges[e][t]===0&&(this.vEdges[e][t]=1),(t===this.width-1||this.cells[e][t+1]===1)&&this.vEdges[e][t+1]===0&&(this.vEdges[e][t+1]=1))}compileToEngineFormat(){for(let e=0;e<this.height;e++)for(let t=0;t<this.width;t++){let n=t+.5,i=e+.5;if(this.hEdges[e][t]===1||this.hEdges[e][t]===2){let s=this.hEdges[e][t]===2?"door":"edge_wall";this.createEdgeEntity(n,i,s,"north")}if(this.vEdges[e][t]===1||this.vEdges[e][t]===2){let s=this.vEdges[e][t]===2?"door":"edge_wall";this.createEdgeEntity(n,i,s,"west")}}for(let e=0;e<this.width;e++)if(this.hEdges[this.height][e]===1||this.hEdges[this.height][e]===2){let t=e+.5,n=this.height-1+.5,i=this.hEdges[this.height][e]===2?"door":"edge_wall";this.createEdgeEntity(t,n,i,"south")}for(let e=0;e<this.height;e++)if(this.vEdges[e][this.width]===1||this.vEdges[e][this.width]===2){let t=this.width-1+.5,n=e+.5,i=this.vEdges[e][this.width]===2?"door":"edge_wall";this.createEdgeEntity(t,n,i,"east")}}generateCorners(){for(let e=0;e<=this.height;e++)for(let t=0;t<=this.width;t++){let n=t<this.width&&this.hEdges[e][t]!==0&&this.hEdges[e][t]!==3,i=t>0&&this.hEdges[e][t-1]!==0&&this.hEdges[e][t-1]!==3,s=e<this.height&&this.vEdges[e][t]!==0&&this.vEdges[e][t]!==3,r=e>0&&this.vEdges[e-1][t]!==0&&this.vEdges[e-1][t]!==3,o=(r?1:0)+(s?1:0)+(n?1:0)+(i?1:0),l=!1;o===1||o===3||o===4?l=!0:o===2&&(r&&s||n&&i||(l=!0)),l&&this.entities.push({id:`corner_${t}_${e}_${this.random()}`,x:t,y:e,name:"Corner",textureId:"none",blocksMovement:!0,isLightSource:!1,isInteractable:!1,userData:{type:"corner"}})}}createEdgeEntity(e,t,n,i){this.entities.push({id:`${n}_${e}_${t}_${i}_${this.random()}`,x:e,y:t,name:n==="door"?"Heavy Door":"Wall",textureId:"none",blocksMovement:!0,isLightSource:!1,isInteractable:n==="door",userData:{type:n,facing:i,state:"closed"}})}placeChest(e,t){let n=`chest_${e}_${t}_${this.random()}`;this.entities.push({id:n,x:e+.5,y:t+.5,name:"Chest",textureId:"none",blocksMovement:!0,isLightSource:!1,isInteractable:!0,userData:{type:"chest",state:"closed",facing:Math.PI,loot:[{id:"potion",name:"Basic Potion"},{id:"coin",name:"Gold Coin"}]},onInteract:i=>i.engine?.interactWithChest(this.entities.find(s=>s.id===n))})}placeStairs(e,t){this.entities.push({id:`stairs_${e}_${t}_${this.random()}`,x:e+.5,y:t+.5,name:"Stairs",textureId:"prop_stairs",blocksMovement:!0,isLightSource:!1,isInteractable:!0,userData:{type:"solid_prop"},onInteract:n=>n.engine?.goToNextFloor?.()})}};var sl={blacksmith:{id:"blacksmith",name:"Marvin",maxHp:20,inventory:[{itemId:"potion",qty:5}],shopListings:[{itemId:"potion",quantityAvailable:5,price:12},{itemId:"sword",quantityAvailable:1,price:45}],dialog:{startNodeId:"start",nodes:[{id:"start",text:"Greetings, traveler. Cold night \u2014 I can patch steel or sell you a potion.",options:[{id:"wares",label:"Show me your wares.",action:{type:"open_shop"}},{id:"lore",label:"What brings you out here?",nextNodeId:"lore"},{id:"bye",label:"Goodbye.",action:{type:"close"}}]},{id:"lore",text:"Road\u2019s quiet till it isn\u2019t. Keep that lantern full and your blade sharp.",options:[{id:"back",label:"Thanks for the advice.",nextNodeId:"start"},{id:"bye2",label:"Goodbye.",action:{type:"close"}}]}]},textureId:"enemy_blacksmith",scale:2,verticalOffset:0,hitboxRadius:.4},soulbroker:{id:"soulbroker",name:"The Soul Broker",maxHp:999,inventory:[],dialog:{startNodeId:"start",nodes:[{id:"start",text:"Souls are the truest currency, traveler. Spend them wisely and you may yet survive what lies below.",options:[{id:"trade",label:"I wish to trade souls.",action:{type:"custom",id:"open_soul_shop"}},{id:"lore",label:"What are you?",nextNodeId:"lore"},{id:"bye",label:"Goodbye.",action:{type:"close"}}]},{id:"lore",text:"I am what remains when purpose outlasts the flesh. Bring me souls and I will shape you into something... more.",options:[{id:"back",label:"Interesting. Let me think on that.",nextNodeId:"start"},{id:"bye2",label:"Goodbye.",action:{type:"close"}}]}]},textureId:"npc_soulbroker",scale:2,verticalOffset:0,hitboxRadius:.4}};var rl=class{constructor(e){this.engine=e}notifyStateMutation(){this.engine.requestAutoSave?.()}canPlaceItem(e,t){let n=wt[e];return n?t.type==="inventory"?!0:t.type==="equipment"?t.equipSlot?n.equippable===!0&&(n.allowedEquipSlots?.includes(t.equipSlot)??!1):!1:t.type==="potion"?e==="potion":!1:!1}buildSourceHit(e){return{type:e.sourceType,index:e.sourceIndex,equipSlot:e.sourceEquip,x:0,y:0,w:0,h:0}}handleInventoryInteraction(e,t){let n=this.engine.player;if(e&&t?.type==="tab"&&t.tabPage){n.inventoryPage=t.tabPage;return}if(n.inventoryPage==="skills"){if(e&&t?.type==="skill_assign"&&t.skillId&&t.index!==void 0){if(!Nt[t.skillId]?.assignableToHotbar)return;n.hotbar[t.index]=t.skillId,this.notifyStateMutation()}return}if(e){if(t){let i=this.getSlotValueFromHit(t);i&&(n.draggedItem={slot:Ae({},i),sourceType:t.type,sourceIndex:t.index,sourceEquip:t.equipSlot},this.setSlotValue(t,null))}}else if(n.draggedItem){if(t){let i=this.buildSourceHit(n.draggedItem),s=n.draggedItem.slot.itemId,r=this.getSlotValueFromHit(t);if(t.type==="potion"&&s==="potion"){let o=n.draggedItem.slot.qty,l=this.engine.player.potionSlot.itemId==="potion"?this.engine.player.potionSlot.qty:0,c=this.engine.player.potionSlot.capacity,h=l+o,d=Math.min(c,h),u=h-d;this.engine.player.potionSlot={itemId:d>0?"potion":null,qty:d,capacity:c},u>0?this.setSlotValue(i,{itemId:"potion",qty:u}):r&&i.type!=="potion"&&this.setSlotValue(i,null),n.draggedItem=null,this.notifyStateMutation();return}if(!this.canPlaceItem(s,t)){this.setSlotValue(i,n.draggedItem.slot),n.draggedItem=null;return}if(r&&!this.canPlaceItem(r.itemId,i)){this.setSlotValue(i,n.draggedItem.slot),n.draggedItem=null;return}this.setSlotValue(t,n.draggedItem.slot),r&&this.setSlotValue(i,r)}else this.setSlotValue(this.buildSourceHit(n.draggedItem),n.draggedItem.slot);n.draggedItem=null,this.notifyStateMutation()}}getSlotValueFromHit(e){let t=this.engine.player;return e.type==="inventory"&&e.index!==void 0?t.inventory[e.index]:e.type==="equipment"&&e.equipSlot?t.equipment[e.equipSlot]:e.type==="potion"&&t.potionSlot.itemId?{itemId:t.potionSlot.itemId,qty:t.potionSlot.qty}:null}setSlotValue(e,t){let n=this.engine.player;e.type==="inventory"&&e.index!==void 0?n.inventory[e.index]=t:e.type==="equipment"&&e.equipSlot?n.equipment[e.equipSlot]=t:e.type==="potion"&&(!t||t.itemId!=="potion"?n.potionSlot={itemId:null,qty:0,capacity:n.potionSlot.capacity}:n.potionSlot={itemId:"potion",qty:Math.max(0,Math.min(n.potionSlot.capacity,t.qty)),capacity:n.potionSlot.capacity})}toggleDoor(e){if(!e.userData||e.userData.type!=="door")return;let t=this.engine.scene.getObjectByName(`mesh_${e.id}`);if(!t)return;let n=e.userData.state==="closed",i=t.userData.closedAngle||0,s=n?i+Math.PI/2:i;e.userData.state=n?"open":"closed",e.blocksMovement=!n,t.rotation.y=s}interactWithChest(e){if(!e||e.userData?.state==="open")return;let t=this.engine.scene.getObjectByName(`mesh_${e.id}`);if(!t)return;let n=t.getObjectByName("closed"),i=t.getObjectByName("open");n&&(n.visible=!1),i&&(i.visible=!0);let s=1,r=!0,o=setInterval(()=>{r?(s+=.15,s>=1.4&&(r=!1)):(s-=.15,s<=1&&(s=1,clearInterval(o))),t&&t.scale.set(s,s,s)},16);e.userData.state="open",e.name="Empty Chest";let l=e.userData.loot;l&&l.forEach((c,h)=>{let d={id:`item_${Date.now()}_${h}`,x:e.x,y:e.y,name:c.name,textureId:c.id,blocksMovement:!1,isLightSource:!1,isInteractable:!0,userData:{type:"item",itemId:c.id,animState:"popping",targetY:1.2+h*.6,hoverTime:1+h*.4,currentTimer:0},onInteract:()=>this.pickupItem(d)};this.engine.entities.push(d),this.engine.worldBuilder.buildEntity(d)}),this.notifyStateMutation()}pickupItem(e){if(!e)return;let t=this.engine.entities.findIndex(l=>l.id===e.id);if(t===-1)return;let n=e.userData.itemId,i=wt[n];if(!i)return;let s=this.engine.player,r=!1;if(i.maxStack>1)for(let l=0;l<s.inventory.length;l++){let c=s.inventory[l];if(c&&c.itemId===n&&c.qty<i.maxStack){c.qty+=1,r=!0;break}}if(!r){let l=s.inventory.findIndex(c=>c===null);l!==-1&&(s.inventory[l]={itemId:n,qty:1},r=!0)}if(!r)return;let o=this.engine.scene.getObjectByName(`mesh_${e.id}`);o&&(this.engine.scene.remove(o),o.traverse(l=>{l.isMesh&&l.geometry&&l.geometry.dispose()})),this.engine.entities.splice(t,1),this.engine.playerController.setEntities(this.engine.entities),this.notifyStateMutation()}interactWithNpc(e){if(!e||this.engine.dialogSession||this.engine.shopSession)return;let t=e.userData?.npcId,n=t?sl[t]:null;n&&(this.engine.activeNpc=e,this.engine.activeNpcDef=n,this.startDialog(e,n))}startDialog(e,t){this.engine.dialogSession={entity:e,npcDef:t,nodeId:t.dialog.startNodeId},this.centerModalCursor()}centerModalCursor(){let e=this.engine.player,t=4;e.uiCursor.x=this.engine.config.width*t/2,e.uiCursor.y=this.engine.config.height*t/2}closeDialog(){this.engine.dialogSession=null,this.engine.activeNpc=null,this.engine.activeNpcDef=null}closeShop(){this.engine.shopSession=null,this.engine.activeNpc=null,this.engine.activeNpcDef=null}handleEscapeModal(){return this.engine.soulShopSession?(this.closeSoulShop(),!0):this.engine.shopSession?(this.closeShop(),!0):this.engine.dialogSession?(this.closeDialog(),!0):!1}handleDialogOrShopKey(e){let t=null,n=e.match(/^([1-9])$/);n&&(t=parseInt(n[1],10));let i=e.match(/^Numpad([1-9])$/);return i&&(t=parseInt(i[1],10)),t===null?!1:this.engine.dialogSession?(this.selectDialogOption(t),!0):this.engine.shopSession?(this.tryBuyShopRow(t-1),!0):!1}selectDialogOption(e){let t=this.engine.dialogSession;if(!t)return;let s=(t.npcDef.dialog.nodes.find(r=>r.id===t.nodeId)?.options||[])[e-1];s&&this.applyDialogOption(t,s)}applyDialogOption(e,t){let n=t.action;if(n?.type==="close"){this.closeDialog();return}if(n?.type==="open_shop"){this.openShopFromNpc(e.npcDef),this.engine.dialogSession=null,this.centerModalCursor();return}if(n?.type==="goto"){e.nodeId=n.nodeId;return}if(n?.type==="custom"){this.engine.onDialogCustomAction?.(n,e),t.nextNodeId&&(e.nodeId=t.nextNodeId);return}if(t.nextNodeId){e.nodeId=t.nextNodeId;return}}getShopStock(e){if(e.shopListings&&e.shopListings.length>0)return e.shopListings.map(n=>Ae({},n));let t=e.defaultShopPrice??10;return e.inventory.map(n=>({itemId:n.itemId,quantityAvailable:n.qty,price:t}))}openShopFromNpc(e){this.engine.shopSession={npcDef:e,stock:this.getShopStock(e)},this.engine.activeNpcDef=e}tryBuyShopRow(e){let t=this.engine.shopSession;if(!t)return;let n=t.stock[e];if(!(!n||n.quantityAvailable<=0||!wt[n.itemId])&&!(this.getCoinCount()<n.price)&&this.spendCoins(n.price)){if(!this.addItemToPlayerInventory(n.itemId,1)){this.addItemToPlayerInventory("coin",n.price);return}n.quantityAvailable-=1,this.notifyStateMutation()}}getCoinCount(){let e=0,t=this.engine.player;for(let n of t.inventory)n?.itemId==="coin"&&(e+=n.qty);return e}spendCoins(e){if(this.getCoinCount()<e)return!1;let t=e,n=this.engine.player;for(let i=0;i<n.inventory.length&&t>0;i++){let s=n.inventory[i];if(!s||s.itemId!=="coin")continue;let r=Math.min(s.qty,t);s.qty-=r,t-=r,s.qty<=0&&(n.inventory[i]=null)}return t===0}addItemToPlayerInventory(e,t){let n=wt[e];if(!n)return!1;let i=this.engine.player,s=t;if(n.maxStack>1)for(let r=0;r<i.inventory.length&&s>0;r++){let o=i.inventory[r];if(o&&o.itemId===e&&o.qty<n.maxStack){let l=n.maxStack-o.qty,c=Math.min(l,s);o.qty+=c,s-=c}}for(;s>0;){let r=i.inventory.findIndex(l=>l===null);if(r===-1)return!1;let o=Math.min(s,n.maxStack);i.inventory[r]={itemId:e,qty:o},s-=o}return!0}getDialogPanelModel(){let e=this.engine.dialogSession;if(!e)return null;let t=e.npcDef.dialog.nodes.find(i=>i.id===e.nodeId);if(!t)return null;let n=(t.options||[]).map((i,s)=>({index:s+1,label:i.label}));return{npcName:e.npcDef.name,bodyText:t.text,options:n}}getShopPanelModel(){let e=this.engine.shopSession;return e?{npcName:e.npcDef.name,playerCoins:this.getCoinCount(),rows:e.stock.map((t,n)=>({rowIndex:n,itemId:t.itemId,displayName:wt[t.itemId]?.name??t.itemId,price:t.price,available:t.quantityAvailable}))}:null}buildSoulShopOfferings(){let e=this.engine.player,t=this.engine.skillManager,n=[],i=Math.floor((e.maxHp-100)/10);n.push({id:"stat_maxhp",name:"+10 Max HP",description:"Increases maximum health by 10.",category:"stat",soulCost:15+i*10,currentRank:i,maxRank:99,statKey:"maxHp",statIncrement:10});let s=Math.floor((e.maxMana-50)/5);n.push({id:"stat_maxmana",name:"+5 Max Mana",description:"Increases maximum mana by 5.",category:"stat",soulCost:20+s*15,currentRank:s,maxRank:99,statKey:"maxMana",statIncrement:5});let r=Math.floor((e.maxStamina-100)/10);n.push({id:"stat_maxstamina",name:"+10 Max Stamina",description:"Increases maximum stamina by 10.",category:"stat",soulCost:10+r*5,currentRank:r,maxRank:99,statKey:"maxStamina",statIncrement:10});for(let o of Object.values(Nt)){let l=t.getSkillRank(o.id);if(l===0&&n.push({id:`skill_${o.id}`,name:o.name,description:o.description,category:"skill",soulCost:o.ranks[0].soulCost,currentRank:0,maxRank:1,skillId:o.id}),l>=1&&l<o.maxRank){let c=o.ranks[l];n.push({id:`upgrade_${o.id}_${l+1}`,name:`${o.name} Rank ${l+1}`,description:`Upgrade ${o.name} to rank ${l+1}.`,category:"upgrade",soulCost:c.soulCost,currentRank:l,maxRank:o.maxRank,skillId:o.id})}l>=o.maxRank&&n.push({id:`upgrade_${o.id}_max`,name:`${o.name} (MAX)`,description:`${o.name} is fully upgraded.`,category:l===0?"skill":"upgrade",soulCost:0,currentRank:l,maxRank:o.maxRank,skillId:o.id})}return n}trySoulShopPurchase(e){let t=this.engine.soulShopSession;if(!t)return!1;let n=t.offerings.find(s=>s.id===e);if(!n||n.soulCost<=0||n.currentRank>=n.maxRank)return!1;let i=this.engine.player;return i.souls<n.soulCost?!1:(i.souls-=n.soulCost,n.category==="stat"&&n.statKey&&n.statIncrement?i[n.statKey]+=n.statIncrement:(n.category==="skill"||n.category==="upgrade")&&n.skillId&&this.engine.skillManager.unlockOrUpgrade(n.skillId),t.offerings=this.buildSoulShopOfferings(),this.notifyStateMutation(),!0)}closeSoulShop(){this.engine.soulShopSession=null}};var al=class{skills=new Map;tickCooldowns(e){for(let t of this.skills.values())t.cooldownRemain>0&&(t.cooldownRemain=Math.max(0,t.cooldownRemain-e))}getSkillRank(e){return this.skills.get(e)?.rank??0}getSkillEffect(e,t){let n=this.skills.get(e);if(!n||n.rank<=0)return;let i=Nt[e];if(i)return i.ranks[n.rank-1]?.effects[t]}tryActivateSkill(e){let t=this.skills.get(e);if(!t||t.rank<=0||t.cooldownRemain>0)return!1;let n=this.getSkillEffect(e,"dashCooldown")??Nt[e]?.ranks[t.rank-1]?.effects.cooldown??1;return t.cooldownTotal=n,t.cooldownRemain=n,!0}unlockOrUpgrade(e){let t=Nt[e];if(!t)return!1;let n=this.skills.get(e);return n||(n={rank:0,cooldownRemain:0,cooldownTotal:0},this.skills.set(e,n)),n.rank>=t.maxRank?!1:(n.rank+=1,!0)}getCooldownFraction(e){let t=this.skills.get(e);return!t||t.cooldownTotal<=0?0:Math.max(0,t.cooldownRemain/t.cooldownTotal)}getUnlockedSkillIds(){let e=[];for(let[t,n]of this.skills)n.rank>0&&e.push(t);return e}getState(e){return this.skills.get(e)}exportStates(){let e={};for(let[t,n]of this.skills)e[t]=Ae({},n);return e}importStates(e){if(this.skills.clear(),!!e)for(let[t,n]of Object.entries(e))Nt[t]&&this.skills.set(t,{rank:Math.max(0,Math.floor(n.rank||0)),cooldownRemain:Math.max(0,Number(n.cooldownRemain||0)),cooldownTotal:Math.max(0,Number(n.cooldownTotal||0))})}};var ol=class{ambientLight;outdoorBaseLight;lanternLight;moonlight;moonFillDirectional;time=0;baseLanternIntensity=5;lanternEnabled=!1;skyGroup;moonMesh;isInitialized=!1;outdoorMoodEnabled=!0;sceneFog=null;hubFogNear=0;hubFogFar=0;dungeonFogNear=0;dungeonFogFar=0;outdoorBaseIntensity=.34;moonKeyIntensity=1.05;moonFillIntensity=.32;init(e,t,n,i,s,r){this.dungeonFogNear=i*1.5,this.dungeonFogFar=n*i,this.hubFogNear=i*3,this.hubFogFar=n*i*2.75,e.fog=new ur(0,this.hubFogNear,this.hubFogFar),this.sceneFog=e.fog,e.background=new he(0);let l=n*i*1.2;this.lanternLight=new Tt(16771251,this.baseLanternIntensity,l,2),this.lanternLight.layers.enable(1),this.lanternLight.position.set(-.6,-.1,-.3),this.lanternLight.intensity=0,this.lanternLight.castShadow=!0,this.lanternLight.shadow.mapSize.width=1024,this.lanternLight.shadow.mapSize.height=1024,this.lanternLight.shadow.bias=-.005,t.add(this.lanternLight),e.add(t),this.ambientLight=new Fs(263690,.1),this.ambientLight.layers.enable(1),e.add(this.ambientLight),this.outdoorBaseLight=new Fs(2834278,this.outdoorBaseIntensity),this.outdoorBaseLight.layers.enable(1),e.add(this.outdoorBaseLight),this.skyGroup=new Ue,e.add(this.skyGroup);let c=new Mn(96,96),h=new Qe({map:s,transparent:!0,fog:!1,color:11184878});this.moonMesh=new et(c,h),this.moonMesh.position.set(0,140,-150),this.moonMesh.lookAt(0,0,0),this.skyGroup.add(this.moonMesh),window.debugMoon=this.moonMesh,console.log("Moon initialized at:",this.moonMesh.position),this.moonlight=new Si(4877209,this.moonKeyIntensity),this.moonlight.position.copy(this.moonMesh.position),this.moonlight.target.position.set(0,0,0),this.moonlight.layers.enable(1),this.moonlight.castShadow=!0,this.moonlight.shadow.mapSize.width=2048,this.moonlight.shadow.mapSize.height=2048,this.moonlight.shadow.bias=-5e-4,this.moonlight.shadow.normalBias=.02,this.moonlight.shadow.camera.near=10,this.moonlight.shadow.camera.far=500,this.moonlight.shadow.camera.left=-80,this.moonlight.shadow.camera.right=80,this.moonlight.shadow.camera.top=80,this.moonlight.shadow.camera.bottom=-80,this.skyGroup.add(this.moonlight),this.skyGroup.add(this.moonlight.target),this.moonFillDirectional=new Si(4877209,this.moonFillIntensity),this.moonFillDirectional.position.copy(this.moonMesh.position).add(new I(20,10,10)),this.moonFillDirectional.target.position.set(0,0,0),this.moonFillDirectional.layers.enable(1),this.moonFillDirectional.castShadow=!1,this.skyGroup.add(this.moonFillDirectional),this.skyGroup.add(this.moonFillDirectional.target),r.magFilter=Ye,r.minFilter=Ye;let d=100,u=new At,f=new Float32Array(d*3);for(let p=0;p<d;p++){let m=Math.random()*Math.PI*2,y=Math.acos(Math.random()*.8+.2),b=800+Math.random()*200;f[p*3]=Math.sin(y)*Math.cos(m)*b,f[p*3+1]=Math.cos(y)*b,f[p*3+2]=Math.sin(y)*Math.sin(m)*b}u.setAttribute("position",new gt(f,3));let g=new _i({size:3,sizeAttenuation:!1,map:r,transparent:!0,alphaTest:.1,fog:!1,color:14540287}),x=new Hi(u,g);this.skyGroup.add(x),this.isInitialized=!0,this.setOutdoorMoodEnabled(this.outdoorMoodEnabled)}update(e,t){this.time+=e;let n=Math.sin(this.time*15)*.05,i=Math.cos(this.time*25)*.02,s=(Math.random()-.5)*.04;this.lanternEnabled?this.lanternLight.intensity=this.baseLanternIntensity+n+i+s:this.lanternLight.intensity=0,this.skyGroup&&t&&(this.skyGroup.position.copy(t.position),this.skyGroup.position.y=0)}setLanternEquipped(e){this.lanternEnabled=e}setLanternOffset(e,t,n){this.lanternLight.position.set(e,t,n)}setOutdoorMoodEnabled(e){this.outdoorMoodEnabled=e,this.isInitialized&&(this.outdoorBaseLight.intensity=e?this.outdoorBaseIntensity:0,this.moonlight.intensity=e?this.moonKeyIntensity:0,this.moonFillDirectional.intensity=e?this.moonFillIntensity:0,this.sceneFog&&(this.sceneFog.near=e?this.hubFogNear:this.dungeonFogNear,this.sceneFog.far=e?this.hubFogFar:this.dungeonFogFar))}};var ll=class{constructor(e,t,n,i,s){this.camera=e;this.scene=t;this.worldBuilder=n;this.lightingManager=i;this.textureManager=s;this.scene.add(this.cameraAnchor),this.cameraAnchor.add(this.rightHandGroup),this.cameraAnchor.add(this.leftHandGroup),this.cameraAnchor.add(this.beltLeftGroup),this.rightHandGroup.position.set(.35,-.25,-.8),this.leftHandGroup.position.set(-.45,-.25,-.8),this.beltLeftGroup.position.set(-.38,-.38,-.78),this.weaponLight=new Tt(0,0,8,1),this.weaponLight.position.set(.3,-.1,-1),this.weaponLight.castShadow=!0,this.weaponLight.shadow.mapSize.width=512,this.weaponLight.shadow.mapSize.height=512,this.weaponLight.shadow.bias=-.005,this.weaponLight.layers.enable(0),this.weaponLight.layers.enable(1),this.cameraAnchor.add(this.weaponLight)}cameraAnchor=new Ue;rightHandGroup=new Ue;leftHandGroup=new Ue;beltLeftGroup=new Ue;weaponLight;emissiveMaterial=null;currentRightItemId=null;currentLeftItemId=null;currentBeltLeftItemId=null;currentAnimType="hold";beltRevealT=0;isAttacking=!1;attackTimer=0;ATTACK_DURATION=.45;attackSerial=0;rangedSpawnConsumed=!1;rightHandSuppressed=!1;bowStripMap=null;bowFrameIndex=0;rightIdlePos=new I(.3,-.2,-.9);rightIdleRot=new Fn(-.06,.14,-.28);triggerAttack(){this.isAttacking||!this.currentRightItemId||(this.isAttacking=!0,this.attackTimer=0,this.attackSerial+=1,this.rangedSpawnConsumed=!1)}getRightHandWorldPosition(e=new I){return this.rightHandGroup.updateMatrixWorld(!0),this.rightHandGroup.getWorldPosition(e),e}getProjectileSpawnWorldPosition(e,t=new I){this.rightHandGroup.updateMatrixWorld(!0);let n=e?.x??0,i=e?.y??0,s=e?.z??0;if(n===0&&i===0&&s===0)return this.rightHandGroup.getWorldPosition(t),t;let r=new I(n,i,s);return r.applyMatrix4(this.rightHandGroup.matrixWorld),t.copy(r),t}getRightHandWorldDirection(e=new I){return this.rightHandGroup.updateMatrixWorld(!0),this.rightHandGroup.getWorldDirection(e),e}getActiveAttackSerial(){return this.isAttacking?this.attackSerial:null}setRightHandHidden(e){this.rightHandSuppressed=e,this.applyRightHandVisibility()}applyRightHandVisibility(){this.rightHandGroup.visible=!this.rightHandSuppressed&&this.rightHandGroup.children.length>0}consumeStaffOrbSpawn(){if(this.rangedSpawnConsumed||!this.isAttacking)return!1;let e=this.attackTimer/this.ATTACK_DURATION;return e<.12||e>.95?!1:(this.rangedSpawnConsumed=!0,!0)}consumeThrowSpawn(){if(this.rangedSpawnConsumed||!this.isAttacking)return!1;let e=this.attackTimer/this.ATTACK_DURATION;return e<.1||e>.9?!1:(this.rangedSpawnConsumed=!0,!0)}consumeChakramSpawn(){if(this.rangedSpawnConsumed||!this.isAttacking)return!1;let e=this.attackTimer/this.ATTACK_DURATION;return e<.1||e>.9?!1:(this.rangedSpawnConsumed=!0,!0)}consumeBowSpawn(){if(this.rangedSpawnConsumed||!this.isAttacking)return!1;let e=this.attackTimer/this.ATTACK_DURATION;return e<.25||e>.95?!1:(this.rangedSpawnConsumed=!0,!0)}canDealMeleeDamage(){if(!this.isAttacking)return!1;let e=this.attackTimer/this.ATTACK_DURATION;return e>=.22&&e<=.68}update(e,t,n){let i=e.equipment.rightHand,s=e.equipment.leftHand,r=e.equipment.beltLeft,o=r?.itemId==="item_lantern";this.lightingManager&&this.lightingManager.setLanternEquipped(o),i?.itemId!==this.currentRightItemId&&this.updateRightHandMesh(i?.itemId||null),s?.itemId!==this.currentLeftItemId&&this.updateLeftHandMesh(s?.itemId||null),r?.itemId!==this.currentBeltLeftItemId&&this.updateBeltLeftMesh(r?.itemId||null),this.cameraAnchor.position.copy(this.camera.position),this.cameraAnchor.quaternion.copy(this.camera.quaternion),this.weaponLight.intensity=0;let l=this.rightHandGroup.children[0],c=this.leftHandGroup.children[0],h=this.beltLeftGroup.children[0];if(l?.userData?.pulseMaterial){let p=1+Math.sin(n*3)*.6;if(l.userData.pulseMaterial.color.setScalar(p),l.userData.pulseLight){let m=l.userData.pulseLight;m.intensity=p*1.5,this.weaponLight.color.copy(m.color),this.weaponLight.intensity=p*1.5}}if(c?.userData?.pulseMaterial){let p=1+Math.sin(n*3)*.6;c.userData.pulseMaterial.color.setScalar(p)}if(h?.userData?.pulseMaterial){let p=1+Math.sin(n*3)*.6;h.userData.pulseMaterial.color.setScalar(p)}l?.userData?.updateParticles&&l.userData.updateParticles(t),c?.userData?.updateParticles&&c.userData.updateParticles(t),h?.userData?.updateParticles&&h.userData.updateParticles(t),this.isAttacking?this.animateAction(t):this.animateIdle(n,e.state!==0);let d=new I(0,0,-1).applyQuaternion(this.camera.quaternion),u=-.22,g=(-d.y- -u)/(- -.62- -u),x=o?Math.max(0,Math.min(1,g)):0;this.beltRevealT+=(x-this.beltRevealT)*Math.min(1,t*10),this.beltLeftGroup.visible=o&&this.beltRevealT>.01,this.lightingManager&&o&&this.lightingManager.setLanternOffset(this.beltLeftGroup.position.x+.16,this.beltLeftGroup.position.y-.04,this.beltLeftGroup.position.z-.06)}updateRightHandMesh(e){for(;this.rightHandGroup.children.length>0;)this.rightHandGroup.remove(this.rightHandGroup.children[0]);if(this.currentRightItemId=e,this.emissiveMaterial=null,this.bowStripMap=null,this.bowFrameIndex=0,delete this.rightHandGroup.userData.bowPlanes,!e){this.applyRightHandVisibility();return}let t=wt[e];if(this.currentAnimType=t?.animType||"hold",e==="bow_basic"){let s=this.createBowViewmodel(t);this.applyFirstPersonOffset(s,t?.firstPersonOffset),this.rightHandGroup.add(s),this.applyRightHandVisibility();return}let n=t?.voxelTextureId??e,i=this.worldBuilder.createVoxelItem(n,.6);i.rotation.y=Math.PI/2,this.applyFirstPersonOffset(i,t?.firstPersonOffset),i.traverse(s=>{s.layers.set(1),s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)}),this.rightHandGroup.add(i),this.applyRightHandVisibility()}createBowViewmodel(e){let t=new Ue;t.rotation.set(.05,-.12,.02);let n=this.getBowStripTexture(),i=new Qe({map:n,transparent:!0,opacity:.95,alphaTest:.1,side:Gt}),s=new et(new Mn(.72,.72),i);s.layers.set(1),s.rotation.order="YXZ";let r=e?.equipmentRotationDegrees,o=Math.PI/2-.22,l=c=>c*Math.PI/180;return s.rotation.set(r?.x!=null?l(r.x):-.05,r?.y!=null?l(r.y):o,r?.z!=null?l(r.z):Math.PI),s.position.set(0,0,0),t.add(s),this.rightHandGroup.userData.bowPlanes=[s],this.setBowFrame(0),t}getBowStripTexture(){if(this.bowStripMap)return this.bowStripMap;let e=null;try{e=this.textureManager?.getTexture("weapon_bow_test")??null}catch{e=null}if(!e)return this.bowStripMap=new Wt,this.bowStripMap;let t=e.clone();return t.needsUpdate=!0,t.wrapS=Ot,t.wrapT=Ot,t.repeat.set(1/3,1),t.offset.set(0,0),this.bowStripMap=t,t}setBowFrame(e){let t=Math.max(0,Math.min(2,e));this.bowFrameIndex=t;let n=this.rightHandGroup.userData.bowPlanes;if(!(!n||n.length===0))for(let i of n){let r=i.material.map;r&&(r.wrapS=Ot,r.wrapT=Ot,r.repeat.set(1/3,1),r.offset.set(1/3*t,0),r.needsUpdate=!0)}}updateLeftHandMesh(e){for(;this.leftHandGroup.children.length>0;)this.leftHandGroup.remove(this.leftHandGroup.children[0]);if(this.currentLeftItemId=e,!e)return;let t=wt[e],n=this.worldBuilder.createVoxelItem(e,.6);n.rotation.y=-Math.PI/2,this.applyFirstPersonOffset(n,t?.firstPersonOffset),n.traverse(i=>{i.layers.set(1),i.isMesh&&(i.castShadow=!1,i.receiveShadow=!1)}),this.applyUnlitViewmodelMaterials(n),this.leftHandGroup.add(n)}applyUnlitViewmodelMaterials(e){let t=e.userData,n=t.pulseMaterial,i=t.dimPulseMaterial,s=t.flickerMaterial;e.traverse(r=>{let o=r;if(!o.isMesh)return;let l=Array.isArray(o.material)?o.material:[o.material],c=l.map(h=>this.toUnlitViewmodelMaterial(h));o.material=c.length===1?c[0]:c;for(let h=0;h<l.length;h++){let d=l[h];n&&d===n&&(t.pulseMaterial=c[h]),i&&d===i&&(t.dimPulseMaterial=c[h]),s&&d===s&&(t.flickerMaterial=c[h])}})}toUnlitViewmodelMaterial(e){let t=e;return new Qe({color:t.color?t.color.clone():new he(16777215),map:t.map||null,transparent:!!t.transparent,opacity:typeof t.opacity=="number"?t.opacity:1,alphaTest:typeof t.alphaTest=="number"?t.alphaTest:0,fog:!1,side:typeof t.side=="number"?t.side:tn,depthWrite:t.depthWrite!==!1})}updateBeltLeftMesh(e){for(;this.beltLeftGroup.children.length>0;)this.beltLeftGroup.remove(this.beltLeftGroup.children[0]);if(this.currentBeltLeftItemId=e,!e)return;let t=wt[e];if(!t?.rendersIn3d)return;let n=this.worldBuilder.createVoxelItem(e,.6);n.rotation.y=0,n.rotation.x=Math.PI/3.1,this.applyFirstPersonOffset(n,t.firstPersonOffset),n.traverse(i=>{i.layers.set(1),i.isMesh&&(i.castShadow=!1,i.receiveShadow=!1)}),this.beltLeftGroup.add(n)}applyFirstPersonOffset(e,t){t&&(e.position.x+=t.x||0,e.position.y+=t.y||0,e.position.z+=t.z||0,e.rotation.x+=t.rotX||0,e.rotation.y+=t.rotY||0,e.rotation.z+=t.rotZ||0,typeof t.scale=="number"&&e.scale.multiplyScalar(t.scale))}animateIdle(e,t){let n=t?8:2,i=t?.015:.005;this.rightHandGroup.position.y=this.rightIdlePos.y+Math.sin(e*n)*i,this.rightHandGroup.position.x=this.rightIdlePos.x+Math.cos(e*n*.5)*(i*.5),this.rightHandGroup.position.z=this.rightIdlePos.z,this.rightHandGroup.rotation.set(this.rightIdleRot.x,this.rightIdleRot.y,this.rightIdleRot.z),this.leftHandGroup.position.y=-.2+Math.sin(e*n*.9)*(i*.75),this.leftHandGroup.position.x=-.45+Math.cos(e*n*.4)*(i*.4),this.leftHandGroup.position.z=-.9,this.leftHandGroup.rotation.set(.2,-.5,.1);let s=-.62,r=-.62,o=-.7,l=-.56,c=-.5,h=-.68,d=this.beltRevealT,u=s+(l-s)*d,f=r+(c-r)*d,g=o+(h-o)*d;this.beltLeftGroup.position.y=f+Math.sin(e*n*.6)*(i*.35)*d,this.beltLeftGroup.position.x=u+Math.cos(e*n*.4)*(i*.2)*d,this.beltLeftGroup.position.z=g,this.beltLeftGroup.rotation.set(.1,-.25,.04)}animateAction(e){this.attackTimer+=e;let t=this.attackTimer/this.ATTACK_DURATION;if(t>=1){this.isAttacking=!1;return}this.currentAnimType==="swing"&&this.logicSwing(t),this.currentAnimType==="stab"&&this.logicStab(t),this.currentAnimType==="cast"&&this.logicCast(t),this.currentAnimType==="throw"&&this.logicThrow(t),this.currentAnimType==="chakram"&&this.logicChakram(t),this.currentAnimType==="bow"&&this.logicBow(t)}logicBow(e){if(e<.35)this.setBowFrame(1),this.rightHandGroup.position.set(.28,-.19,-.84),this.rightHandGroup.rotation.set(.18,.36,-.02);else if(e<.68)this.setBowFrame(2),this.rightHandGroup.position.set(.25,-.18,-.78),this.rightHandGroup.rotation.set(.12,.32,-.04);else{this.setBowFrame(0);let t=(e-.68)/.32;this.rightHandGroup.position.lerp(new I(.3,-.2,-.9),t)}}logicThrow(e){if(e<.22){let t=e/.22;this.rightHandGroup.position.set(.32,-.18-t*.04,-.85+t*.12),this.rightHandGroup.rotation.set(.15+t*.55,.45,.12)}else if(e<.42){let t=(e-.22)/.2;this.rightHandGroup.position.set(.32-t*.12,-.22-t*.18,-.73-t*.55),this.rightHandGroup.rotation.set(.7-t*.95,.35+t*.2,.12+t*.45)}else{let t=(e-.42)/.58;this.rightHandGroup.position.lerp(new I(.3,-.2,-.9),t),this.rightHandGroup.rotation.set(-.2+t*.38,.55*(1-t*.4),.57*(1-t))}}logicChakram(e){if(e<.26){let t=e/.26;this.rightHandGroup.rotation.set(.2,.4,t*Math.PI*1.35),this.rightHandGroup.position.set(.3,-.2-t*.06,-.88+t*.06)}else if(e<.48){let t=(e-.26)/.22;this.rightHandGroup.rotation.set(.25+t*.35,.4-t*.15,Math.PI*1.35+t*Math.PI*2.1),this.rightHandGroup.position.set(.3+t*.22,-.26-t*.12,-.82-t*.28)}else{let t=(e-.48)/.52;this.rightHandGroup.rotation.z=Math.PI*3.45*(1-t*.88),this.rightHandGroup.rotation.x=.6*(1-t),this.rightHandGroup.position.lerp(new I(.3,-.2,-.9),t)}}logicCast(e){if(e<.35){let t=e/.35;this.rightHandGroup.position.x=.3-t*.06,this.rightHandGroup.position.y=-.2-t*.06,this.rightHandGroup.position.z=-.9+t*.23,this.rightHandGroup.rotation.x=.2-t*.3,this.rightHandGroup.rotation.z=t*.2}else if(e<.6){let t=(e-.35)/.25;this.rightHandGroup.position.x=.24,this.rightHandGroup.position.y=-.26,this.rightHandGroup.position.z=-.67-t*.1,this.rightHandGroup.rotation.x=-.1+t*.1,this.rightHandGroup.rotation.z=.2-t*.25}else{let t=(e-.6)/.4;this.rightHandGroup.position.lerp(new I(.3,-.2,-.9),t),this.rightHandGroup.rotation.set(.2*t,.5*t,.1*t)}}logicSwing(e){let t=this.rightIdlePos,n=this.rightIdleRot;if(e<.28){let i=e/.28,s=i*i;this.rightHandGroup.position.set(t.x+s*.16,t.y+s*.3,t.z+s*.18),this.rightHandGroup.rotation.set(n.x+s*1.35,n.y+s*.24,n.z+s*.48)}else if(e<.56){let i=(e-.28)/.28,s=1-Math.pow(1-i,3);this.rightHandGroup.position.set(t.x+.16-s*.14,t.y+.3-s*.58,t.z+.18-s*.34),this.rightHandGroup.rotation.set(n.x+1.35-s*2,n.y+.24-s*.42,n.z+.48-s*.76)}else{let i=(e-.56)/.44,s=1-Math.pow(1-i,2);this.rightHandGroup.position.set(t.x+.02*(1-s),t.y-.28*(1-s),t.z-.16*(1-s)),this.rightHandGroup.rotation.set(n.x-.65*(1-s),n.y-.18*(1-s),n.z-.28*(1-s))}}logicStab(e){if(e<.3){let t=e/.3;this.rightHandGroup.position.z=-.8+t*.2}else if(e<.6){let t=(e-.3)/.3;this.rightHandGroup.position.z=-.6-t*.6,this.rightHandGroup.position.x=.35-t*.1}else{let t=(e-.6)/.4;this.rightHandGroup.position.z=-1.2+t*.4}}logicSmash(e){if(e<.3){let t=e/.3,n=t*t;this.rightHandGroup.position.y=-.25+n*.4,this.rightHandGroup.position.z=-.8+n*.2,this.rightHandGroup.rotation.x=.4+n*1.5}else if(e<.45){let t=(e-.3)/.15,n=Math.sin(t*Math.PI/2);this.rightHandGroup.position.y=.15-n*.6,this.rightHandGroup.position.z=-.6-n*.4,this.rightHandGroup.rotation.x=1.9-n*2.5}else{let t=(e-.45)/.55,n=1-(1-t)*(1-t);this.rightHandGroup.position.y=-.45+n*.2,this.rightHandGroup.position.z=-1+n*.2,this.rightHandGroup.rotation.x=-.6+n*1}}};var of={melee_basic:{id:"melee_basic",attackId:"enemy_gas_spray",attackType:"ranged",attackRange:2.2,attackCooldown:1.05,damage:5,projectileKind:"gas_spray"},melee_heavy:{id:"melee_heavy",attackId:"enemy_fire_spray",attackType:"ranged",attackRange:3.2,attackCooldown:2.5,damage:18,projectileKind:"fire_spray"},magic_shadow_bolt:{id:"magic_shadow_bolt",attackId:"enemy_shadow_bolt",attackType:"magic",attackRange:11,attackCooldown:1.35,damage:14,projectileKind:"shadow_bolt"}},un={zombie_priest:{id:"zombie_priest",name:"Zombie Priest",maxHp:24,xpOnDeath:150,movementSpeed:1.5,movementType:"walking",hitboxRadius:.4,behaviourType:"aggressive",aggroRange:6,deaggroRange:10,attackProfileId:"melee_basic",attackId:"enemy_gas_spray",attackType:"melee",attackRange:1.2,attackCooldown:.8,damage:5,textureId:"enemy_zombie_priest",projectileOriginHex:"#403353",scale:2,thickness:.2,verticalOffset:.08,lootTable:[{itemId:"potion",chance:.1,minQty:1,maxQty:1}]},lich:{id:"lich",name:"Ancient Lich",maxHp:36,xpOnDeath:500,movementSpeed:2,movementType:"hovering",hitboxRadius:.6,behaviourType:"aggressive",aggroRange:15,deaggroRange:25,attackProfileId:"magic_shadow_bolt",attackId:"enemy_shadow_bolt",attackType:"magic",attackRange:12,attackCooldown:1.5,damage:40,textureId:"enemy_lich",scale:4,thickness:.28,verticalOffset:.2,lootTable:[{itemId:"staff",chance:.05,minQty:1,maxQty:1},{itemId:"coin",chance:1,minQty:50,maxQty:100}]}};var js=class a{static yawToFacing(e){let t=Math.PI*2,n=e%t;return n<0&&(n+=t),n>=Math.PI*1.75||n<Math.PI*.25?"south":n<Math.PI*.75?"east":n<Math.PI*1.25?"north":"west"}static parseSpawnMarkers(e,t=4,n=[]){let i=[],s=[...n,...i],r=[],o=new Set,l;return e.traverse(c=>{let h=c.name||"",d=h.startsWith("SPAWN_"),u=h.startsWith("INTERACTIVE_");if(!d&&!u)return;let f=c.parent;for(;f&&f!==e;){if(o.has(f))return;f=f.parent}o.add(c);let g=new I;c.getWorldPosition(g);let x=g.x/t,p=g.z/t;if(u){if(h.substring(12).toLowerCase().startsWith("stair_up")){let y=`stair_up_${Date.now()}_${Math.random()}`;c.userData.entityId=y,i.push({id:y,x,y:p,name:"Stairway Up",textureId:"none",blocksMovement:!0,isLightSource:!1,isInteractable:!0,userData:{type:"interactive_stair_up"}})}else console.warn(`[SceneParser] Unrecognized INTERACTIVE marker: '${h}'`);return}if(h.includes("PLAYER_ARRIVAL"))l={x,y:p},r.push(c);else if(h.includes("treasure_chest")){let m=`chest_pregen_${Date.now()}_${Math.random()}`;i.push({id:m,x,y:p,name:"Chest",textureId:"none",blocksMovement:!0,isLightSource:!1,isInteractable:!0,userData:{type:"chest",state:"closed",loot:[{id:"potion",name:"Basic Potion"},{id:"coin",name:"Gold Coin"}]}}),r.push(c)}else if(!h.includes("player_spawn_location")){if(!h.includes("dungeon_spawn_location"))if(h.includes("camp_fire"))i.push({id:`bonfire_${Date.now()}_${Math.random()}`,x,y:p,name:"Campfire",textureId:"none",blocksMovement:!0,isLightSource:!0,isInteractable:!0,userData:{type:"bonfire"}}),r.push(c);else if(h.includes("small_standing_torch"))i.push({id:`torch_${Date.now()}_${Math.random()}`,x,y:p,name:"Standing Torch",textureId:"none",blocksMovement:!0,isLightSource:!0,isInteractable:!1,userData:{type:"standing_torch",radius:.15}});else if(h.includes("wall_lantern")){let m=c.rotation.y;i.push({id:`lantern_${Date.now()}_${Math.random()}`,x,y:p,name:"Wall Lantern",textureId:"none",blocksMovement:!1,isLightSource:!0,isInteractable:!1,userData:{type:"wall_lantern",facing:m}})}else if(h.startsWith("SPAWN_npc_")){let y=h.substring(10).split("_")[0],b=sl[y];if(!b)console.warn(`[SceneParser] Unknown NPC spawn id '${y}' from marker '${h}'`);else{let _=`npc_${b.id}`,T=_;(s.some(A=>A.id===T)||i.some(A=>A.id===T))&&(T=`${_}_${Date.now()}_${Math.random()}`);let w=A=>{let v=A.engine?.entities?.find(M=>M.id===T)||null;A.engine?.interactWithNpc?.(v)};i.push({id:T,x,y:p,name:b.name,textureId:b.textureId,scale:b.scale,verticalOffset:b.verticalOffset,blocksMovement:!0,isLightSource:!1,isInteractable:!0,userData:{type:"npc",npcId:b.id,radius:b.hitboxRadius},onInteract:w})}r.push(c)}else if(h.includes("enemy_library"))Object.values(un).forEach((y,b)=>{i.push({id:`lib_preview_${y.id}`,x:x+b*1,y:p,name:y.name,textureId:y.textureId,scale:y.scale,verticalOffset:y.verticalOffset,blocksMovement:!0,isLightSource:!1,isInteractable:!1,userData:{type:"enemy_preview",enemyId:y.id,radius:y.hitboxRadius,thickness:y.thickness}})}),r.push(c);else{let m=h.substring(6).split("_")[0],y=un[m];y?(i.push({id:`enemy_${y.id}_${Date.now()}_${Math.random()}`,x,y:p,name:y.name,textureId:y.textureId,scale:y.scale,verticalOffset:y.verticalOffset,blocksMovement:!0,isLightSource:!1,isInteractable:!1,userData:{type:"enemy",enemyId:y.id,hp:y.maxHp,radius:y.hitboxRadius,thickness:y.thickness}}),r.push(c)):console.warn(`[SceneParser] Unrecognized SPAWN marker: '${h}'`)}}}),{entities:i,objectsToRemove:r,playerArrivalPos:l}}static parse(e){let t=[],n=null,i={x:0,y:0,angle:0},s=[];e.traverse(l=>{let c=l.name||"";if(c.startsWith("COLLISION_")){let h=new vt().setFromObject(l);t.push({minX:h.min.x,maxX:h.max.x,minY:h.min.z,maxY:h.max.z}),s.push(l)}else if(c.startsWith("SPAWN_")){if(c.includes("player_spawn_location")){let h=new I;l.getWorldPosition(h),i={x:h.x/4,y:h.z/4,angle:l.rotation.y},s.push(l)}else if(c.includes("dungeon_spawn_location")){let h=new I;l.getWorldPosition(h);let d=c.split("_"),u=d[d.length-1].toLowerCase();n={x:h.x/4,y:h.z/4,direction:u||"north"},s.push(l)}}});let r=a.parseSpawnMarkers(e,4,[]),o=r.entities;return e.traverse(l=>{let c=l.name||"";if(c.startsWith("DOOR_")&&(l.userData.entityId=c,!o.some(h=>h.id===c))){let h=new I;l.getWorldPosition(h),o.push({id:c,x:h.x/4,y:h.z/4,name:"Heavy Door",textureId:"none",blocksMovement:!0,isLightSource:!1,isInteractable:!0,userData:{type:"hub_door",state:"closed",meshName:c,facing:a.yawToFacing(l.rotation.y)},onInteract:d=>{let u=o.find(f=>f.id===c);u?.userData?.state==="closed"?(l.rotation.y+=Math.PI/2,u.userData.state="open",u.blocksMovement=!1):u?.userData?.state&&(l.rotation.y-=Math.PI/2,u.userData.state="closed",u.blocksMovement=!0)}})}}),s.forEach(l=>{l.parent&&l.parent.remove(l)}),r.objectsToRemove.forEach(l=>{l.parent&&l.parent.remove(l)}),{visualScene:e,barriers:t,entities:o,spawn:i,dungeonStart:n}}};var lf=[{id:"hub",path:"/assets/game/models/hub.glb"},{id:"wall_flat",path:"/assets/game/models/pixel_art_256x256_wall-flat.glb"},{id:"wall_flat_corner",path:"/assets/game/models/pixel_art_256x256_wall-corner.glb"},{id:"frame_flat",path:"/assets/game/models/pixel_art_256x256_wall-doorframe.glb"},{id:"floor_flat",path:"/assets/game/models/pixel_art_256x256_floor-flat.glb"},{id:"door",path:"/assets/game/models/pixel_art_256x256_door.glb"},{id:"chest-closed",path:"/assets/game/models/chest-closed.glb"},{id:"chest-open",path:"/assets/game/models/chest-open.glb"},{id:"prop_stairs",path:"/assets/game/models/pixel_art_128x128_stairs.glb"},{id:"lich_room",path:"/assets/game/models/lich_room.glb"},{id:"lich_room_small",path:"/assets/game/models/lich_room_small.glb"},{id:"treasure_room_8x8m",path:"/assets/game/models/treasure_room_8x8m.glb"},{id:"stairway_up_room_8x8m",path:"/assets/game/models/stairway_up_room_8x8m.glb"},{id:"stair_up_arrival_room_8x8m",path:"/assets/game/models/stair_up_arrival_room_8x8m.glb"}],cf=[{id:"wall_blue",path:"/assets/game/textures/uv_flat-wall_blue_bricks.png"},{id:"wall_green",path:"/assets/game/textures/uv_flat-wall_green_bricks.png"},{id:"floor_stone",path:"/assets/game/textures/uv_flat-floor_stone.png"},{id:"moon",path:"/assets/game/textures/moon.png"},{id:"sword",path:"/assets/game/textures/Basic Sword 32x32.png"},{id:"potion",path:"/assets/game/textures/Basic Potion 32x32.png"},{id:"coin",path:"/assets/game/textures/Basic Coin 32x32.png"},{id:"star",path:"/assets/game/textures/basic star.png"},{id:"staff",path:"/assets/game/textures/Basic Staff 48x48.png"},{id:"staff_emission",path:"/assets/game/textures/Basic Staff 48x48_emission.png"},{id:"fire_sword",path:"/assets/game/textures/Fire Sword 48x48.png"},{id:"fire_sword_emission",path:"/assets/game/textures/Fire Sword 48x48_emission.png"},{id:"weapon_basic_knife",path:"/assets/game/textures/Basic Knife 48x48.png"},{id:"throwing_knife",path:"/assets/game/textures/Basic Knife 48x48.png"},{id:"weapon_basic_chakram",path:"/assets/game/textures/Basic Chakram 48x48.png"},{id:"chakram",path:"/assets/game/textures/Basic Chakram 48x48.png"},{id:"weapon_bow_test",path:"/assets/game/textures/weapon_bow_test_144x48.png"},{id:"bow_basic",path:"/assets/game/textures/weapon_bow_test_144x48.png"},{id:"item_lantern",path:"/assets/game/textures/item_lantern_48x48.png"},{id:"item_book",path:"/assets/game/textures/item_book_48x48.png"},{id:"enemy_mushroom",path:"/assets/game/textures/enemy_mushroom_64x64.png"},{id:"enemy_golem",path:"/assets/game/textures/enemy_golem_128x128.png"},{id:"enemy_lich",path:"/assets/game/textures/enemy_lich_256x256.png"},{id:"enemy_lich_hitbox",path:"/assets/game/textures/enemy_lich_256x256_hitbox.png"},{id:"enemy_lich_emission",path:"/assets/game/textures/enemy_lich_256x256_emission.png"},{id:"enemy_blacksmith",path:"/assets/game/textures/npc_blacksmith_128x128.png"},{id:"npc_soulbroker",path:"/assets/game/textures/npc_temp_soulbroker_128x128.png"},{id:"enemy_zombie_priest",path:"/assets/game/textures/enemy_zombie_priest_128x128.png"},{id:"enemy_zombie_priest_emission",path:"/assets/game/textures/enemy_zombie_priest_128x128_emission.png"},{id:"enemy_zombie_priest_hitbox",path:"/assets/game/textures/enemy_zombie_priest_128x128_hitbox.png"},{id:"debug_particle_fire_regular",path:"/assets/game/textures/debug_fire_particle_regular_48x48.png"},{id:"debug_particle_fire_regular_emission",path:"/assets/game/textures/debug_fire_particle_regular_48x48_emission.png"},{id:"debug_particle_fire_blue",path:"/assets/game/textures/debug_fire_particle_blue_48x48.png"},{id:"debug_particle_fire_blue_emission",path:"/assets/game/textures/debug_fire_particle_blue_48x48_emission.png"},{id:"debug_particle_fire_purple",path:"/assets/game/textures/debug_fire_particle_purple_48x48.png"},{id:"debug_particle_fire_purple_emission",path:"/assets/game/textures/debug_fire_particle_purple_48x48_emission.png"},{id:"debug_particle_water_regular",path:"/assets/game/textures/debug_water_particle_regular_48x48.png"},{id:"debug_particle_water_regular_emission",path:"/assets/game/textures/debug_water_particle_regular_48x48_emission.png"},{id:"debug_particle_electric_regular",path:"/assets/game/textures/debug_electric_particle_regular_48x48.png"},{id:"debug_particle_electric_regular_emission",path:"/assets/game/textures/debug_electric_particle_regular_48x48_emission.png"},{id:"debug_particle_holy_regular",path:"/assets/game/textures/debug_holy_particle_regular_48x48.png"},{id:"debug_particle_holy_regular_emission",path:"/assets/game/textures/debug_holy_particle_regular_48x48_emission.png"},{id:"debug_particle_poison_regular",path:"/assets/game/textures/debug_poison_particle_regular_48x48.png"},{id:"debug_particle_poison_regular_emission",path:"/assets/game/textures/debug_poison_particle_regular_48x48_emission.png"},{id:"ui_inv_slot",path:"/assets/game/textures/inventory-slot.png"},{id:"ui_hotbar",path:"/assets/game/textures/hotbar.png"},{id:"ui_potion_slot",path:"/assets/game/textures/potion-slot.png"}];var cl=[{seed:1,floorLevel:1,biomeId:1,radius:12,hasEntrancePrefab:!0,treasureRooms:1,randomRooms:99,minRoomSize:2,layoutType:"dense",maxRoomSize:4,enemyDensity:.3,bossId:null,enemyPool:[{enemyId:"zombie_priest",weight:1}],pregenRooms:[{modelId:"treasure_room_8x8m",tileWidth:2,tileHeight:2,weight:1,forcedCount:1,role:"treasure"},{modelId:"stairway_up_room_8x8m",tileWidth:2,tileHeight:2,weight:1,forcedCount:1,role:"stairway"},{modelId:"lich_room",tileWidth:4,tileHeight:4,weight:1},{modelId:"lich_room_small",tileWidth:2,tileHeight:2,weight:1}],pregenRoomChance:.3},{seed:2,floorLevel:2,biomeId:1,radius:12,hasEntrancePrefab:!1,treasureRooms:1,randomRooms:99,minRoomSize:2,layoutType:"maze",maxRoomSize:4,enemyDensity:.3,bossId:null,enemyPool:[{enemyId:"zombie_priest",weight:1}],pregenRooms:[{modelId:"stair_up_arrival_room_8x8m",tileWidth:2,tileHeight:2,weight:1,forcedCount:1,role:"arrival",wallRequirements:{north:!0}},{modelId:"treasure_room_8x8m",tileWidth:2,tileHeight:2,weight:1,forcedCount:1,role:"treasure"},{modelId:"stairway_up_room_8x8m",tileWidth:2,tileHeight:2,weight:1,forcedCount:1,role:"stairway"}],pregenRoomChance:.3}];var hl=class{active=[];freeHitSets=[];list(){return this.active}add(e){this.active.push(e)}removeAt(e){if(e<0||e>=this.active.length)return;let[t]=this.active.splice(e,1);return t?.hitIds&&(t.hitIds.clear(),this.freeHitSets.push(t.hitIds)),t}clear(e){for(let t=this.active.length-1;t>=0;t--){let n=this.active[t];e?.(n),n.hitIds&&(n.hitIds.clear(),this.freeHitSets.push(n.hitIds))}this.active.length=0}claimHitSet(){return this.freeHitSets.pop()??new Set}};var Ih=!1,wy=!1,ul=class{constructor(e){this.engine=e}projectileStore=new hl;get projectiles(){return this.projectileStore.list()}chakramActive=!1;knifeInFlight=0;pendingStatuses;hasActiveChakram(){return this.chakramActive}spawnResolvedAttack(e,t){if(t.execution==="short_range_slash")return;let n=Cn(Ae({},e),{weaponDamage:t.damage,projectileSpeed:t.projectileSpeed??e.projectileSpeed,projectileMaxRange:t.projectileMaxRange??e.projectileMaxRange,projectileCollisionRadius:t.projectileCollisionRadius??e.projectileCollisionRadius});if(this.pendingStatuses=t.statuses?.map(s=>Ae({},s)),t.execution==="boomerang"){let s=e.voxelTextureId??e.id;this.spawnChakram(s,n),this.pendingStatuses=void 0;return}let i=e.rangedWeaponKind;if(i==="throwing_knife"){let s=e.voxelTextureId??e.id;this.spawnThrowingKnife(s,n)}else if(i==="bow_arrow")this.spawnBowArrow(n);else if(i==="chakram"){let s=e.voxelTextureId??e.id;this.spawnChakram(s,n)}else this.spawnStaffOrb(e.id,n);this.pendingStatuses=void 0}spawnStaffOrb(e,t){let n=t.projectileSpeed??14,{x:i,z:s,vx:r,vz:o,vy:l,y:c}=this.spawnDirWorld(t,n),h=this.resolveMaxRangeMeters(t,12),d=this.computeProjectileLeakFuseSec(h,n),u=new et(new On(.18,10,10),new Qe({color:6728447}));u.name=`proj_${Date.now()}_${Math.random().toString(36).slice(2)}`,u.position.set(i,c,s),u.layers.enable(0);let f=Math.max(.05,t.projectileCollisionRadius??.22);this.attachProjectileDebugCollider(u,f,65484),this.engine.scene.add(u),this.projectiles.push({mesh:u,x:i,z:s,y:c,vx:r,vz:o,vy:l,collisionRadiusWorld:f,damage:t.weaponDamage??8,kind:"staff_orb",hitIds:this.projectileStore.claimHitSet(),ttl:d,startX:i,startY:c,startZ:s,maxRangeMeters:h,chakramBouncesRemaining:0,returning:!1,ageSeconds:0,statuses:this.pendingStatuses?.map(g=>Ae({},g))})}spawnThrowingKnife(e,t){let n=t.projectileSpeed??8,{x:i,z:s,vx:r,vz:o,vy:l,y:c}=this.spawnDirWorld(t,n),h=this.resolveMaxRangeMeters(t,32),d=this.computeProjectileLeakFuseSec(h,n),u=this.engine.worldBuilder.createVoxelItem(e,.45);u.traverse(g=>{g.layers.set(0);let x=g;x.isMesh&&(x.castShadow=!1)}),u.position.set(i,c,s),u.name=`proj_${Date.now()}_${Math.random().toString(36).slice(2)}`;let f=Math.max(.05,t.projectileCollisionRadius??.24);this.attachProjectileDebugCollider(u,f,16738047),this.engine.scene.add(u),this.knifeInFlight+=1,this.engine.viewmodelManager.setRightHandHidden(this.knifeInFlight>0),this.projectiles.push({mesh:u,x:i,z:s,y:c,vx:r,vz:o,vy:l,collisionRadiusWorld:f,damage:t.weaponDamage??10,kind:"knife",hitIds:this.projectileStore.claimHitSet(),ttl:d,startX:i,startY:c,startZ:s,maxRangeMeters:h,chakramBouncesRemaining:0,returning:!1,ageSeconds:0,statuses:this.pendingStatuses?.map(g=>Ae({},g))})}spawnChakram(e,t){this.chakramActive=!0,this.engine.viewmodelManager.setRightHandHidden(!0);let n=t.projectileSpeed??9,i=t.chakramMaxBounces??3,{x:s,z:r,vx:o,vz:l,vy:c,y:h}=this.spawnDirWorld(t,n),d=this.resolveMaxRangeMeters(t,28),u=Math.max(40,this.computeProjectileLeakFuseSec(d,n)*2),f=this.engine.worldBuilder.createVoxelItem(e,.42);f.rotation.x=Math.PI/2,f.traverse(x=>{x.layers.set(0);let p=x;p.isMesh&&(p.castShadow=!1)}),f.position.set(s,h,r),f.name=`proj_${Date.now()}_${Math.random().toString(36).slice(2)}`;let g=Math.max(.05,t.projectileCollisionRadius??.42);this.attachProjectileDebugCollider(f,g,16755251),this.engine.scene.add(f),this.projectiles.push({mesh:f,x:s,z:r,y:h,vx:o,vz:l,vy:c,collisionRadiusWorld:g,damage:t.weaponDamage??14,kind:"chakram",hitIds:this.projectileStore.claimHitSet(),ttl:u,startX:s,startY:h,startZ:r,maxRangeMeters:d,chakramBouncesRemaining:i,chakramMaxOutboundSec:t.chakramMaxOutboundSec??3,returning:!1,ageSeconds:0,statuses:this.pendingStatuses?.map(x=>Ae({},x))})}spawnBowArrow(e){let t=e.projectileSpeed??14,{x:n,z:i,vx:s,vz:r,vy:o,y:l}=this.spawnDirWorld(e,t),c=this.resolveMaxRangeMeters(e,52),h=this.computeProjectileLeakFuseSec(c,t),d=new et(new On(.14,8,8),new Qe({color:14202228}));d.name=`proj_${Date.now()}_${Math.random().toString(36).slice(2)}`,d.position.set(n,l,i),d.layers.enable(0);let u=Math.max(.05,e.projectileCollisionRadius??.16);this.attachProjectileDebugCollider(d,u,16777011),this.engine.scene.add(d),this.projectiles.push({mesh:d,x:n,z:i,y:l,vx:s,vz:r,vy:o,collisionRadiusWorld:u,damage:e.weaponDamage??10,kind:"bow_arrow",hitIds:this.projectileStore.claimHitSet(),ttl:h,startX:n,startY:l,startZ:i,maxRangeMeters:c,chakramBouncesRemaining:0,returning:!1,ageSeconds:0,statuses:this.pendingStatuses?.map(f=>Ae({},f))})}spawnSkillBigBoom(e){let t=Math.max(1,e.speed),{x:n,z:i,vx:s,vz:r,vy:o,y:l}=this.spawnDirWorld({},t),c=Math.max(2,e.rangeMeters),h=this.computeProjectileLeakFuseSec(c,t),d=new et(new On(Math.max(.18,e.collisionRadius),12,12),new Qe({color:16746564}));d.name=`proj_big_boom_${Date.now()}_${Math.random().toString(36).slice(2)}`,d.position.set(n,l,i),d.layers.enable(0);let u=Math.max(.08,e.collisionRadius);this.attachProjectileDebugCollider(d,u,16746564),this.engine.scene.add(d),this.projectiles.push({mesh:d,x:n,z:i,y:l,vx:s,vz:r,vy:o,collisionRadiusWorld:u,damage:Math.max(1,Math.round(e.damage)),kind:"staff_orb",hitIds:this.projectileStore.claimHitSet(),ttl:h,startX:n,startY:l,startZ:i,maxRangeMeters:c,chakramBouncesRemaining:0,returning:!1,ageSeconds:0,pierceEnemies:!0,sourceTag:e.sourceTag??"skill_big_boom"})}resolveMaxRangeMeters(e,t){let n=e.projectileMaxRange,i=typeof n=="number"&&Number.isFinite(n)?n:t;return Math.max(.25,i)}computeProjectileLeakFuseSec(e,t){let n=Math.max(t,.001),i=e/n;return Math.min(Math.max(i*5+3,15),120)}spawnDirWorld(e,t){let n=this.engine.TILE_SIZE,i=new I;this.engine.camera.getWorldDirection(i);let s=this.engine.viewmodelManager.getProjectileSpawnWorldPosition(e.projectileSpawnOffset),r=.12*n;return s.addScaledVector(i,r),{x:s.x,z:s.z,y:s.y,vx:i.x*t,vz:i.z*t,vy:i.y*t}}attachProjectileDebugCollider(e,t,n){if(!wy)return;let i=t*1.25,s=new et(new On(i,10,10),new Qe({color:n,wireframe:!0,transparent:!0,opacity:.9,depthWrite:!1}));s.renderOrder=999,e.add(s)}update(e,t){let n=this.engine.TILE_SIZE;for(let i=this.projectiles.length-1;i>=0;i--){let s=this.projectiles[i];if(s.ttl-=e,s.ageSeconds+=e,s.ttl<=0){this.removeProjectileAt(i,t,"ttl_leak_fuse",{ttlRemain:s.ttl,ageSeconds:s.ageSeconds});continue}if(s.kind==="chakram"&&!s.returning&&s.chakramMaxOutboundSec!=null&&s.ageSeconds>=s.chakramMaxOutboundSec&&(s.returning=!0),s.kind==="chakram"&&s.returning){let g=this.engine.player.x*n,x=this.engine.player.y*n,p=g-s.x,m=x-s.z,y=Math.sqrt(p*p+m*m)||1,b=26*e;s.vx+=p/y*b,s.vz+=m/y*b;let _=Math.sqrt(s.vx*s.vx+s.vz*s.vz)||1,T=s.kind==="chakram"?18:30;if(_>T&&(s.vx=s.vx/_*T,s.vz=s.vz/_*T),y<.55){this.removeProjectileAt(i,t,"chakram_return_catch",{distToPlayer:y});continue}}let r=s.x+s.vx*e,o=s.z+s.vz*e,l=s.y+s.vy*e,c=Math.hypot(Math.hypot(r-s.startX,o-s.startZ),l-s.startY);if(!s.returning&&c>=s.maxRangeMeters-1e-5)if(s.kind==="chakram")s.returning=!0;else{this.removeProjectileAt(i,t,"max_range",{fromSpawn3D:c,maxRangeMeters:s.maxRangeMeters});continue}s.y=l;let h=Math.hypot(s.vx,s.vz),d=Math.hypot(Math.hypot(s.x-s.startX,s.z-s.startZ),s.y-s.startY),u=Math.max(n*.35,1);if(!s.returning&&d>=u&&h>.25&&this.engine.projectileSegmentBlocked(s.x,s.z,r,o))if(s.kind==="chakram"&&s.chakramBouncesRemaining>0)s.chakramBouncesRemaining-=1,s.hitIds.clear(),this.bounceOffWall(s,s.x,s.z,r,o),s.mesh.position.set(s.x,s.y,s.z),s.chakramBouncesRemaining<=0&&(s.returning=!0);else{this.removeProjectileAt(i,t,"static_obstacle",this.staticObstacleCullDetail(s,r,o,d));continue}else s.x=r,s.z=o,s.mesh.position.set(s.x,s.y,s.z);s.kind==="chakram"?s.mesh.rotation.z+=e*14:s.kind==="knife"&&(s.mesh.rotation.y+=e*12),this.tryHitEnemies(s,i,t)}}tryHitEnemies(e,t,n){let i=this.engine.TILE_SIZE,s=e.x/i,r=e.z/i;for(let o of this.engine.entities){if(!this.engine.isEnemyEntityForProjectiles(o)||e.hitIds.has(o.id))continue;let l=o.x-s,c=o.y-r,h=Math.sqrt(l*l+c*c),d=typeof o.userData?.radius=="number"?o.userData.radius:Math.max(o.userData?.halfWidth??.35,o.userData?.halfHeight??.35)*1.05,u=e.kind==="chakram"?.42:e.kind==="bow_arrow"?.26:e.kind==="knife"?.24:.2,f=d+u;if(h>f)continue;let g=this.engine.scene.getObjectByName(`mesh_${o.id}`);if(g){let p=Number(o.userData?.hitboxSpriteHeight??o.userData?.hitboxLocalHeight??0),m=Number(o.userData?.hitboxSpriteMinY??o.userData?.hitboxLocalMinY??0);if(p>1e-6){let y=e.y-g.position.y,b=e.collisionRadiusWorld;if(y>m+p+b||y<m-b)continue}}let x=this.engine.applyEnemyDamageFromProjectile(o,e.damage,e.x,e.y,e.z,e.collisionRadiusWorld,n,e.statuses,e.sourceTag??`projectile_${e.kind}`);if(x==="miss"){Ih&&console.log("[enemy-hit projectile miss]",{enemyId:o.id,kind:e.kind,damage:e.damage,pos:[Math.round(e.x*100)/100,Math.round(e.y*100)/100,Math.round(e.z*100)/100],r:Math.round(e.collisionRadiusWorld*1e3)/1e3});continue}if(e.hitIds.add(o.id),!e.pierceEnemies&&(e.kind==="knife"||e.kind==="staff_orb"||e.kind==="bow_arrow"))return this.removeProjectileAt(t,n,"enemy_hit",{enemyId:o.id,enemyType:o.userData?.type,hitDistTiles:h,zone:x}),!0;if(e.kind==="chakram"){e.hitIds.clear(),e.chakramBouncesRemaining>0&&(e.chakramBouncesRemaining-=1);let p=Math.sqrt(e.vx*e.vx+e.vz*e.vz)||1,m=Math.sqrt(e.vx*e.vx+e.vz*e.vz)||1,y=Math.min(m,9);e.vx=-e.vx/p*y,e.vz=-e.vz/p*y,e.chakramBouncesRemaining<=0&&(e.returning=!0)}}return!1}bounceOffWall(e,t,n,i,s){let r=this.engine.projectilePointBlocked(i,n),o=this.engine.projectilePointBlocked(t,s);r&&(e.vx*=-1),o&&(e.vz*=-1),!r&&!o&&(e.vx*=-1),e.x=t,e.z=n}staticObstacleCullDetail(e,t,n,i){let s={traveled3DBeforeStep:i,from:[e.x,e.y,e.z],to:[t,e.y,n],collision:"player_equivalent_static"};if(Ih){let r=this.engine.getProjectileBlockDebug(e.x,e.z,t,n);r&&(s.block=r)}return s}logProjectileCull(e,t,n){if(!Ih)return;let i=Math.hypot(Math.hypot(e.x-e.startX,e.z-e.startZ),e.y-e.startY),s=Math.hypot(e.vx,e.vz);console.log(`[projectile cull] ${t}`,JSON.stringify(Ae({kind:e.kind,mesh:e.mesh.name,ageSec:Math.round(e.ageSeconds*1e3)/1e3,pos:[r(e.x),r(e.y),r(e.z)],traveledFromSpawn3D:r(i),maxRangeMeters:e.maxRangeMeters,ttlRemain:r(e.ttl),horizSpeed:r(s)},n),null,0));function r(o){return Math.round(o*100)/100}}removeProjectileAt(e,t,n,i={}){let s=this.projectiles[e];this.logProjectileCull(s,n,i);let r=this.projectiles.some((o,l)=>l!==e&&o.kind==="chakram");if(this.engine.scene.remove(s.mesh),(s.kind==="staff_orb"||s.kind==="bow_arrow")&&s.mesh.traverse(o=>{let l=o;l.isMesh&&l.geometry&&(l.geometry.dispose(),(Array.isArray(l.material)?l.material:[l.material]).forEach(h=>h.dispose?.()))}),s.kind==="knife"){this.knifeInFlight=Math.max(0,this.knifeInFlight-1),this.engine.viewmodelManager.setRightHandHidden(this.knifeInFlight>0||this.chakramActive);let o=this.engine.getRightHandWeaponDef();o?.rangedWeaponKind==="throwing_knife"&&this.engine.setRangedCooldown(o.rangedCooldownSec??.5)}if(s.kind==="chakram"&&!r){this.chakramActive=!1,this.engine.viewmodelManager.setRightHandHidden(this.knifeInFlight>0);let l=this.engine.getRightHandWeaponDef();l?.rangedWeaponKind==="chakram"&&this.engine.setRangedCooldown(l.rangedCooldownSec??.75)}if(s.kind==="staff_orb"&&!s.pierceEnemies){let o=this.engine.getRightHandWeaponDef();o?.rangedWeaponKind==="staff_orb"&&o.rangedCooldownSec!=null&&this.engine.setRangedCooldown(o.rangedCooldownSec)}if(s.kind==="bow_arrow"){let o=this.engine.getRightHandWeaponDef();o?.rangedWeaponKind==="bow_arrow"&&o.rangedCooldownSec!=null&&this.engine.setRangedCooldown(o.rangedCooldownSec)}this.projectileStore.removeAt(e)}};var Ay=[{angle:0,map:{north:"north",east:"east",south:"south",west:"west"}},{angle:Math.PI/2,map:{north:"east",east:"south",south:"west",west:"north"}},{angle:Math.PI,map:{north:"south",east:"west",south:"north",west:"east"}},{angle:3*Math.PI/2,map:{north:"west",east:"north",south:"east",west:"south"}}],dl=class{static placeInDungeon(e,t,n,i,s,r,o,l,c,h=[]){let d={groups:[],entities:[],placedRoomRects:[]};if(!r.pregenRooms||r.pregenRooms.length===0)return d;let u=r.pregenRoomChance??.3,f=new Set,g=n.length,x=g>0?n[0].length:0;for(let y=0;y<e.length;y++){let b=e[y];for(let _ of t)if(b.x<_.x+_.w&&b.x+b.w>_.x&&b.y<_.y+_.h&&b.y+b.h>_.y){f.add(y);break}!f.has(y)&&!this.allTilesFloor(b,n,x,g)&&f.add(y)}let p=r.pregenRooms.filter(y=>(y.forcedCount??0)>0);for(let y of p){let b=0,_=y.forcedCount,T=this.findCandidates(e,f,y.tileWidth,y.tileHeight);this.shuffle(T,c);for(let w of T){if(b>=_)break;if(f.has(w))continue;let A=e[w],v=this.findValidRotation(A,y.wallRequirements,i,s);if(y.wallRequirements&&v===null)continue;let M=v??0,k=this.instantiateRoom(y.modelId,o,l,A.x,A.y,A.w,A.h,h,M);k&&(d.groups.push(k.group),d.entities.push(...k.entities),h.push(...k.entities),d.placedRoomRects.push(Ae({},A)),f.add(w),b++,k.playerArrivalPos&&(d.playerArrivalPos=k.playerArrivalPos),console.log(`[PregenRoomParser] FORCED '${y.modelId}' placed at tile (${A.x},${A.y}) ${A.w}x${A.h}, rotation=${(M*180/Math.PI).toFixed(0)}\xB0`))}b<_&&console.warn(`[PregenRoomParser] Could only place ${b}/${_} forced '${y.modelId}' rooms (${T.length} candidates found)`)}let m=r.pregenRooms.filter(y=>!y.forcedCount||y.forcedCount<=0);for(let y of m){let b=this.findCandidates(e,f,y.tileWidth,y.tileHeight);this.shuffle(b,c);for(let _ of b){if(f.has(_)||c()>u)continue;let w=e[_],A=this.findValidRotation(w,y.wallRequirements,i,s);if(y.wallRequirements&&A===null)continue;let v=A??0,M=this.instantiateRoom(y.modelId,o,l,w.x,w.y,w.w,w.h,h,v);M&&(d.groups.push(M.group),d.entities.push(...M.entities),h.push(...M.entities),d.placedRoomRects.push(Ae({},w)),f.add(_))}}return console.log(`[PregenRoomParser] ${d.groups.length} rooms placed, ${d.entities.length} entities`),d}static findCandidates(e,t,n,i){let s=[];for(let r=0;r<e.length;r++){if(t.has(r))continue;let o=e[r];o.w===n&&o.h===i&&s.push(r)}return s}static shuffle(e,t){for(let n=e.length-1;n>0;n--){let i=Math.floor(t()*(n+1));[e[n],e[i]]=[e[i],e[n]]}}static findValidRotation(e,t,n,i){if(!t)return 0;let s={north:this.isSolidWallH(e.x,e.x+e.w,e.y,n),south:this.isSolidWallH(e.x,e.x+e.w,e.y+e.h,n),west:this.isSolidWallV(e.y,e.y+e.h,e.x,i),east:this.isSolidWallV(e.y,e.y+e.h,e.x+e.w,i)};for(let r of Ay){let o=!0;for(let l of["north","south","east","west"])if(t[l]){let c=r.map[l];if(!s[c]){o=!1;break}}if(o)return r.angle}return null}static isSolidWallH(e,t,n,i){if(n<0||n>=i.length)return!1;for(let s=e;s<t;s++)if(s<0||s>=i[n].length||i[n][s]!==1)return!1;return!0}static isSolidWallV(e,t,n,i){for(let s=e;s<t;s++)if(s<0||s>=i.length||n<0||n>=i[s].length||i[s][n]!==1)return!1;return!0}static allTilesFloor(e,t,n,i){for(let s=e.y;s<e.y+e.h;s++)for(let r=e.x;r<e.x+e.w;r++)if(s<0||s>=i||r<0||r>=n||t[s][r]!==0)return!1;return!0}static instantiateRoom(e,t,n,i,s,r,o,l,c=0){let h;try{h=t.getModel(e)}catch{return console.warn(`[PregenRoomParser] model '${e}' not found, skipping.`),null}let d=h.clone(!0),u=[];d.traverse(p=>{let m=(p.name||"").toLowerCase();(m.startsWith("floor_")||m.startsWith("wall_"))&&u.push(p)}),u.forEach(p=>{p.parent&&p.parent.remove(p)});let f=(i+r/2)*n,g=(s+o/2)*n;d.position.set(f,0,g),c!==0&&(d.rotation.y=c),d.traverse(p=>{p.isMesh&&p.layers.enable(2)}),d.updateMatrixWorld(!0);let x=js.parseSpawnMarkers(d,n,l);return x.objectsToRemove.forEach(p=>{p.parent&&p.parent.remove(p)}),{group:d,entities:x.entities,playerArrivalPos:x.playerArrivalPos}}};var fl=class{computeSimFrozen(e){return e.isMenuOpen||e.isInventoryOpen||e.hasDialog||e.hasShop||e.hasSoulShop}};var pl=class{constructor(e,t){this.saveKey=e;this.skillManager=t}captureSnapshot(e){return{version:1,savedAt:Date.now(),player:{hp:e.player.hp,maxHp:e.player.maxHp,mana:e.player.mana,maxMana:e.player.maxMana,stamina:e.player.stamina,maxStamina:e.player.maxStamina,souls:e.player.souls,moveSpeed:e.player.moveSpeed,inventory:e.player.inventory.map(t=>t?Ae({},t):null),hotbar:e.player.hotbar.map(t=>t||null),potionSlot:{itemId:e.player.potionSlot.itemId,qty:Math.max(0,Math.floor(e.player.potionSlot.qty)),capacity:Math.max(1,Math.floor(e.player.potionSlot.capacity))},equipment:{head:e.player.equipment.head?Ae({},e.player.equipment.head):null,chest:e.player.equipment.chest?Ae({},e.player.equipment.chest):null,legs:e.player.equipment.legs?Ae({},e.player.equipment.legs):null,feet:e.player.equipment.feet?Ae({},e.player.equipment.feet):null,leftHand:e.player.equipment.leftHand?Ae({},e.player.equipment.leftHand):null,rightHand:e.player.equipment.rightHand?Ae({},e.player.equipment.rightHand):null,beltLeft:e.player.equipment.beltLeft?Ae({},e.player.equipment.beltLeft):null,beltRight:e.player.equipment.beltRight?Ae({},e.player.equipment.beltRight):null}},progression:{currentFloorIndex:e.currentFloorIndex,dungeonSeedBump:e.dungeonSeedBump},skills:this.skillManager.exportStates()}}applySnapshot(e,t){if(!t||t.version!==1)return;let n=t.player;for(e.player.hp=Math.min(n.maxHp,Math.max(0,n.hp)),e.player.maxHp=Math.max(1,n.maxHp),e.player.mana=Math.min(n.maxMana,Math.max(0,n.mana)),e.player.maxMana=Math.max(1,n.maxMana),e.player.stamina=Math.min(n.maxStamina,Math.max(0,n.stamina)),e.player.maxStamina=Math.max(1,n.maxStamina),e.player.souls=Math.max(0,Math.floor(n.souls)),e.player.moveSpeed=Math.max(.2,n.moveSpeed||e.player.moveSpeed),e.player.inventory=(n.inventory||[]).map(i=>i?Ae({},i):null),e.player.hotbar=(n.hotbar||[]).map(i=>typeof i=="string"?i:null).slice(0,4);e.player.hotbar.length<4;)e.player.hotbar.push(null);for(let i=0;i<e.player.hotbar.length;i++){let s=e.player.hotbar[i];s&&!Nt[s]?.assignableToHotbar&&(e.player.hotbar[i]=null)}e.player.potionSlot={itemId:n.potionSlot?.itemId==="potion"?"potion":null,qty:Math.max(0,Math.min(5,Math.floor(n.potionSlot?.qty??0))),capacity:Math.max(1,Math.floor(n.potionSlot?.capacity??5))},e.player.equipment={head:n.equipment?.head?Ae({},n.equipment.head):null,chest:n.equipment?.chest?Ae({},n.equipment.chest):null,legs:n.equipment?.legs?Ae({},n.equipment.legs):null,feet:n.equipment?.feet?Ae({},n.equipment.feet):null,leftHand:n.equipment?.leftHand?Ae({},n.equipment.leftHand):null,rightHand:n.equipment?.rightHand?Ae({},n.equipment.rightHand):null,beltLeft:n.equipment?.beltLeft?Ae({},n.equipment.beltLeft):null,beltRight:n.equipment?.beltRight?Ae({},n.equipment.beltRight):null},e.player.inventoryPage=e.player.inventoryPage==="skills"?"skills":"items",e.currentFloorIndex=Math.max(0,Math.floor(t.progression?.currentFloorIndex??e.currentFloorIndex)),e.dungeonSeedBump=Math.max(0,Math.floor(t.progression?.dungeonSeedBump??e.dungeonSeedBump)),this.skillManager.importStates(t.skills)}saveNow(e){try{return localStorage.setItem(this.saveKey,JSON.stringify(this.captureSnapshot(e))),!0}catch{return!1}}loadNow(e){try{let t=localStorage.getItem(this.saveKey);if(!t)return!1;let n=JSON.parse(t);return!n||n.version!==1?!1:(this.applySnapshot(e,n),!0)}catch{return!1}}};var ml=class{constructor(e,t){this.scene=e;this.builder=t}bursts=[];spawn(e,t){let n=e.userData?.enemyId,i=n?un[n]:void 0,s=i?.scale??e.scale??1,r=Number(e.userData?.thickness??i?.thickness??.16),o=this.builder.createSpriteVoxelBurst(e.textureId,s,r);o.position.copy(t.position),this.scene.add(o),this.bursts.push({group:o,ttlSec:1.2,elapsedSec:0})}update(e){for(let t=this.bursts.length-1;t>=0;t--){let n=this.bursts[t];n.elapsedSec+=e,n.group.userData.updateParticles&&n.group.userData.updateParticles(e),n.elapsedSec>=n.ttlSec&&(this.scene.remove(n.group),n.group.traverse(i=>{i?.isMesh&&i.geometry&&i.geometry.dispose?.(),(i?.material?Array.isArray(i.material)?i.material:[i.material]:[]).forEach(r=>r?.dispose?.())}),this.bursts.splice(t,1))}}clear(){for(let e of this.bursts)this.scene.remove(e.group);this.bursts.length=0}};var gl=class{active=[];list(){return this.active}add(e){this.active.push(e)}removeAt(e){if(e<0||e>=this.active.length)return;let[t]=this.active.splice(e,1);return t}clear(e){for(let t=this.active.length-1;t>=0;t--)e?.(this.active[t]);this.active.length=0}};var xl=class{constructor(e,t,n,i,s){this.scene=e;this.textureManager=t;this.tileSize=n;this.getPlayerPos=i;this.projectileSegmentBlocked=s}projectileStore=new gl;enemyProjectileOriginCache=new Map;spawn(e,t){let n=e.userData?.enemyId,i=n?un[n]:void 0,s=this.scene.getObjectByName(`mesh_${e.id}`)??null,r=this.resolveEnemyProjectileSpawnWorld(e,s,i),o=r.x,l=r.z,c=this.getPlayerPos(),h=c.x*this.tileSize,d=c.y*this.tileSize,u=c.eyeY,f=h-o,g=u-r.y,x=d-l,p=Math.max(1e-6,Math.sqrt(f*f+g*g+x*x)),m=f/p,y=g/p,b=x/p,_=t.projectileKind??"shadow_bolt",T=`enemy_proj_${Date.now()}_${Math.random().toString(36).slice(2)}`,w=r.y,A=new Ue;A.position.set(o,w,l),A.name=T,A.layers.enable(0);let v=t.projectileSpeed??14,M=.24,k=t.projectileMaxRange&&v>0?Math.max(.8,t.projectileMaxRange/v):2.2,R=.12,F=null,U=10515711;_==="fire_spray"?(v=12.5,M=.55,k=1.35,R=.18,F="fire",U=16751407):_==="gas_spray"?(v=11.8,M=.6,k=1.4,R=.22,F="poison",U=7855462):_==="fire_bolt"?(v=17.5,M=.26,k=2.6,R=.08,U=16739119):_==="arrow"?(v=19.5,M=.18,k=2.8,R=.08,U=14206607):(v=16,M=.24,k=2.8,R=.1,U=9272319),typeof t.projectileCollisionRadius=="number"&&t.projectileCollisionRadius>0&&(M=t.projectileCollisionRadius);let G=new et(new On(Math.max(.08,M*.55),8,8),new Qe({color:U,transparent:!0,opacity:.92}));if(G.layers.enable(0),A.add(G),F){let B=qs.createEffect(F,[new I(0,0,0)]);A.add(B)}this.scene.add(A),this.projectileStore.add({id:T,kind:_,mesh:A,x:o,y:w,z:l,vx:m*v,vy:y*v,vz:b*v,radiusWorld:M,damage:t.attackDamage,statuses:t.statuses?.map(B=>Ae({},B)),ttlSec:k,tickEverySec:R,tickRemainSec:0})}update(e){let t=this.getPlayerPos(),n=t.x*this.tileSize,i=t.y*this.tileSize,s=this.projectileStore.list();for(let r=s.length-1;r>=0;r--){let o=s[r];if(o.ttlSec-=e,o.ttlSec<=0){this.removeAt(r);continue}let l=o.x+o.vx*e,c=o.y+o.vy*e,h=o.z+o.vz*e;if(this.projectileSegmentBlocked(o.x,o.z,l,h)){this.removeAt(r);continue}if(o.x=l,o.y=c,o.z=h,o.mesh.position.set(o.x,o.y,o.z),o.mesh.traverse(x=>{x?.userData?.updateParticles&&x.userData.updateParticles(e)}),o.tickRemainSec-=e,o.tickRemainSec>0)continue;o.tickRemainSec=o.tickEverySec;let d=n-o.x,u=t.eyeY-o.y,f=i-o.z,g=o.radiusWorld+.24;d*d+u*u+f*f<=g*g&&(t.setHp(Math.max(0,t.hp-o.damage)),o.statuses?.length&&t.applyStatuses?.(o.statuses),this.removeAt(r))}}clear(){this.projectileStore.clear(e=>this.scene.remove(e.mesh))}removeAt(e){let t=this.projectileStore.list()[e];t&&(this.scene.remove(t.mesh),this.projectileStore.removeAt(e))}resolveEnemyProjectileSpawnWorld(e,t,n){let i=this.getPlayerPos(),s=new I(e.x*this.tileSize,i.worldY+.9,e.y*this.tileSize);if(!t)return s;let r=n?.projectileOriginHex;if(!r)return t.localToWorld(new I(0,.2,0));let o=`${n.textureId}|${r.toLowerCase()}`,l=this.enemyProjectileOriginCache.get(o);return l===void 0&&(l=this.sampleEmissionAnchorLocal(n.textureId,n.scale??e.scale??1,r),this.enemyProjectileOriginCache.set(o,l)),l?t.localToWorld(l.clone()):t.localToWorld(new I(0,.2,0))}sampleEmissionAnchorLocal(e,t,n){try{let s=this.textureManager.getTexture(`${e}_emission`).image,r=s?.width??0,o=s?.height??0;if(r<=0||o<=0)return null;let l=n.replace("#",""),c=parseInt(l,16);if(!Number.isFinite(c))return null;let h=c>>16&255,d=c>>8&255,u=c&255,f=document.createElement("canvas");f.width=r,f.height=o;let g=f.getContext("2d",{willReadFrequently:!0});if(!g)return null;g.drawImage(s,0,0);let x=g.getImageData(0,0,r,o).data,p=0,m=0,y=0,b=8;for(let A=0;A<o;A++)for(let v=0;v<r;v++){let M=(A*r+v)*4;x[M+3]<8||Math.abs(x[M]-h)>b||Math.abs(x[M+1]-d)>b||Math.abs(x[M+2]-u)>b||(p+=v,m+=A,y++)}if(y<=0)return null;let _=p/y,T=m/y,w=t/Math.max(1,r);return new I((_-r/2)*w,-((T-o/2)*w),0)}catch{return null}}};var yl=class{states=new Map;ensure(e,t,n){let i=this.states.get(e);return i||(i={aiState:"idle",attackCooldownUntilMs:0,investigateUntilMs:0,lastKnownX:t,lastKnownY:n,movePauseUntilMs:0,rangedHold:!1,noLosSinceMs:0,strafeDir:0,strafeUntilMs:0},this.states.set(e,i)),i}get(e){return this.states.get(e)}delete(e){this.states.delete(e)}clear(){this.states.clear()}};var hf={slash_short:{id:"slash_short",execution:"short_range_slash",attackType:"melee",attackRange:.9,attackCooldown:.4,damage:12,meleeSwipeHalfArcRad:.36},slash_fire:{id:"slash_fire",execution:"short_range_slash",attackType:"melee",attackRange:1.05,attackCooldown:.42,damage:18,meleeSwipeHalfArcRad:.45},staff_orb_basic:{id:"staff_orb_basic",execution:"projectile",attackType:"magic",attackRange:10,attackCooldown:.3,damage:8,projectileKind:"shadow_bolt",projectileSpeed:14,projectileMaxRange:30,projectileCollisionRadius:.2},bow_arrow_basic:{id:"bow_arrow_basic",execution:"projectile",attackType:"ranged",attackRange:14,attackCooldown:.42,damage:10,projectileKind:"arrow",projectileSpeed:18,projectileMaxRange:52,projectileCollisionRadius:.16},knife_throw_basic:{id:"knife_throw_basic",execution:"projectile",attackType:"ranged",attackRange:8,attackCooldown:.52,damage:11,projectileKind:"arrow",projectileSpeed:11,projectileMaxRange:32,projectileCollisionRadius:.24},chakram_boomerang:{id:"chakram_boomerang",execution:"boomerang",attackType:"ranged",attackRange:8,attackCooldown:.85,damage:14,projectileKind:"arrow",projectileSpeed:9,projectileMaxRange:28,projectileCollisionRadius:.42},enemy_gas_spray:{id:"enemy_gas_spray",execution:"projectile",attackType:"ranged",attackRange:2.2,attackCooldown:1.05,damage:5,projectileKind:"gas_spray",projectileSpeed:11.8,projectileMaxRange:12,projectileCollisionRadius:.6},enemy_fire_spray:{id:"enemy_fire_spray",execution:"projectile",attackType:"ranged",attackRange:3.2,attackCooldown:2.5,damage:18,projectileKind:"fire_spray",projectileSpeed:12.5,projectileMaxRange:14,projectileCollisionRadius:.55},enemy_shadow_bolt:{id:"enemy_shadow_bolt",execution:"projectile",attackType:"magic",attackRange:11,attackCooldown:1.35,damage:14,projectileKind:"shadow_bolt",projectileSpeed:16,projectileMaxRange:40,projectileCollisionRadius:.24}},uf={melee_basic:"enemy_gas_spray",melee_heavy:"enemy_fire_spray",magic_shadow_bolt:"enemy_shadow_bolt"};var _l=class{resolve(e){let t=e.explicitAttackId||e.itemDef?.attackId||e.enemyDef?.attackId||(e.enemyDef?.attackProfileId?uf[e.enemyDef.attackProfileId]:void 0);if(!t)return null;let n=hf[t];if(!n)return null;let i=Cn(Ae({},n),{statuses:[...n.statuses??[]]});return this.applyModifiers(i,e.itemDef?.attackModifiers),this.applyModifiers(i,e.enemyDef?.attackModifiers),this.applyModifiers(i,e.offhandItemDef?.attackModifiers),e.offhandItemDef?.id==="item_book"&&i.execution==="projectile"&&i.attackType==="magic"&&(i.statuses=[...i.statuses??[],{kind:"dot",durationSec:2.5,tickEverySec:.5,magnitude:1}]),i}applyModifiers(e,t){if(!(!t||t.length===0))for(let n of t)n.damageAdd&&(e.damage+=n.damageAdd),n.damageMul&&(e.damage*=n.damageMul),n.rangeAdd&&(e.attackRange+=n.rangeAdd),n.cooldownMul&&(e.attackCooldown*=n.cooldownMul),n.projectileSpeedAdd&&(e.projectileSpeed=(e.projectileSpeed??0)+n.projectileSpeedAdd),n.projectileSpeedMul&&(e.projectileSpeed=(e.projectileSpeed??0)*n.projectileSpeedMul),n.statusesAdd?.length&&(e.statuses=[...e.statuses??[],...n.statusesAdd.map(i=>Ae({},i))])}};var Ph=new he(1,.15,.12),Ry=!1,df=!0,ff=1.5,Cy=.01,Iy=!1,pf=!0,Dh={r:40,g:92,b:196},Lh={r:180,g:32,b:42},vl=class{container;scene;camera;entities=[];player;activeNpc=null;activeNpcDef=null;dialogSession=null;shopSession=null;soulShopSession=null;onDialogCustomAction;playerController;hubBuilder;dungeonBuilder;worldBuilder;TILE_SIZE=4;PLAYER_EYE_LEVEL=1.25;renderer;uiCanvas;uiCtx;textureManager;modelManager;uiRenderer;interactionManager;lightingManager;skillManager=new al;viewmodelManager;projectileManager;rangedCooldownUntilMs=0;isRunning=!1;isReady=!1;lastTime=0;WALL_HEIGHT=4;config={width:640,height:480,ceilingColor:"#1b2447",floorColor:"#0a0a0a",maxVisibility:5};viewmodelScene;map=[];mapTileOffsetX=0;mapTileOffsetY=0;biomeMap=[];exploredMap=[];currentFloorIndex=0;dungeonGroup=new Ue;hubScene=null;hubEntities=[];hubBarriers=[];hubSpawn={x:0,y:0,angle:0};hubEntityMeshes=[];dungeonStart=null;dungeonSeedBump=0;lastProcessedAttackSerial=null;hitEntitiesThisAttack=new Set;enemyHitboxCache=new Map;enemyHitboxOverlayApplied=new Set;enemyRuntimeStore=new yl;attackResolver=new _l;enemyStatusEffects=new Map;playerStatusEffects=[];DUNGEON_FLOOR_Y_OFFSET=-(12/64);SAVE_KEY="ng_portfolio_save_v1";hpBarRatioCache=new Map;tempPlayerPos=new I;pauseStateService=new fl;persistenceService;enemyDeathVfxSystem;enemyProjectileSystem;constructor(e){this.container=e,this.container.style.position="relative";let t=new Array(16).fill(null);t[0]={itemId:"sword",qty:1},t[1]={itemId:"fire_sword",qty:1},t[2]={itemId:"staff",qty:1},t[3]={itemId:"bow_basic",qty:1},t[4]={itemId:"throwing_knife",qty:1},t[5]={itemId:"chakram",qty:1},t[6]={itemId:"potion",qty:1},t[10]={itemId:"coin",qty:80},this.player={x:1.5,y:1.5,angle:0,state:0,targetX:1.5,targetY:1.5,targetAngle:0,moveSpeed:2,currentMoveSpeed:2,turnSpeed:Math.PI*1.5,zOffset:0,velocityX:0,velocityYPlanar:0,hp:80,maxHp:100,mana:45,maxMana:50,stamina:30,maxStamina:100,isFlying:!1,flyHeight:0,worldY:0,velocityY:0,isGrounded:!0,dashCooldownRemain:0,isDashing:!1,dashTimeRemain:0,souls:0,isMenuOpen:!1,isInventoryOpen:!1,uiCursor:{x:640,y:400},draggedItem:null,maxInventorySlots:16,inventory:t,hotbar:new Array(4).fill(null),potionSlot:{itemId:null,qty:0,capacity:5},inventoryPage:"items",equipment:{head:null,chest:null,legs:null,feet:null,leftHand:{itemId:"item_book",qty:1},beltLeft:{itemId:"item_lantern",qty:1},beltRight:null,rightHand:{itemId:"bow_basic",qty:1}}},this.textureManager=new qo,this.modelManager=new Zo,this.initThreeJS(),this.initUI();let n=this,i={get player(){return n.player},get entities(){return n.entities},get scene(){return n.scene},get worldBuilder(){return n.worldBuilder},get playerController(){return n.playerController},get config(){return n.config},get dialogSession(){return n.dialogSession},set dialogSession(r){n.dialogSession=r},get shopSession(){return n.shopSession},set shopSession(r){n.shopSession=r},get soulShopSession(){return n.soulShopSession},set soulShopSession(r){n.soulShopSession=r},get activeNpc(){return n.activeNpc},set activeNpc(r){n.activeNpc=r},get activeNpcDef(){return n.activeNpcDef},set activeNpcDef(r){n.activeNpcDef=r},get onDialogCustomAction(){return n.onDialogCustomAction},set onDialogCustomAction(r){n.onDialogCustomAction=r},get skillManager(){return n.skillManager},requestAutoSave:()=>n.requestAutoSave()};this.interactionManager=new rl(i),this.lightingManager=new ol,this.onDialogCustomAction=(r,o)=>{if(r.id==="open_soul_shop"){this.dialogSession=null,this.soulShopSession={offerings:this.interactionManager.buildSoulShopOfferings(),category:"stat"};let l=4;this.player.uiCursor.x=this.config.width*l/2,this.player.uiCursor.y=this.config.height*l/2}};let s={get config(){return n.config},get uiRenderer(){return n.uiRenderer},get interactionManager(){return n.interactionManager},get dialogSession(){return n.dialogSession},get shopSession(){return n.shopSession},get soulShopSession(){return n.soulShopSession},get entities(){return n.entities},toggleDoor:r=>n.toggleDoor(r),interactWithNpc:r=>{r&&n.interactWithNpc(r)},interactWithChest:r=>{r&&n.interactWithChest(r)},tryPrimaryAttack:()=>n.tryPrimaryAttack(),triggerSkillAttack:r=>n.triggerSkillAttack(r),get skillManager(){return n.skillManager}};this.playerController=new Qo(this.player,this.map,this.entities,this.camera,this.scene,this.TILE_SIZE,this.PLAYER_EYE_LEVEL,this.container,s),this.hubBuilder=new tl(this.scene,this.modelManager,this.textureManager,this.TILE_SIZE),this.dungeonBuilder=new nl(this.scene,this.modelManager,this.textureManager,this.TILE_SIZE),this.worldBuilder={buildEntity:r=>{this.dungeonBuilder.buildDungeonEntity(r)},createVoxelItem:(r,o)=>this.hubBuilder.createVoxelItem(r,o)},this.viewmodelManager=new ll(this.camera,this.scene,this.worldBuilder,this.lightingManager,this.textureManager),this.projectileManager=new ul(this),this.persistenceService=new pl(this.SAVE_KEY,this.skillManager),this.enemyDeathVfxSystem=new ml(this.scene,this.dungeonBuilder),this.enemyProjectileSystem=new xl(this.scene,this.textureManager,this.TILE_SIZE,()=>({x:this.player.x,y:this.player.y,worldY:this.player.worldY,eyeY:this.player.worldY+this.PLAYER_EYE_LEVEL,hp:this.player.hp,setHp:r=>{this.player.hp=r},applyStatuses:r=>this.applyStatusesToPlayer(r)}),(r,o,l,c)=>this.projectileSegmentBlocked(r,o,l,c)),this.loop=this.loop.bind(this)}getCollisionMap(){return this.map}projectileSegmentBlocked(e,t,n,i){for(let s of this.playerController.getBarriers())if(this.segmentIntersectsBarrierXZ(e,t,n,i,s))return!0;for(let s of this.entities)if(s.blocksMovement&&!this.isEnemyEntityForProjectiles(s)&&this.segmentIntersectsBlockingEntityXZ(e,t,n,i,s))return!0;return!1}projectilePointBlocked(e,t){for(let n of this.playerController.getBarriers())if(this.pointInBarrierXZ(e,t,n))return!0;for(let n of this.entities)if(n.blocksMovement&&!this.isEnemyEntityForProjectiles(n)&&this.pointInBlockingEntityXZ(e,t,n))return!0;return!1}getProjectileBlockDebug(e,t,n,i){let s=this.playerController.getBarriers();for(let r=0;r<s.length;r++){let o=s[r];if(this.segmentIntersectsBarrierXZ(e,t,n,i,o))return{source:"barrier",barrierIndex:r,aabb:{minX:Math.min(o.minX,o.maxX),maxX:Math.max(o.minX,o.maxX),minZ:Math.min(o.minY,o.maxY),maxZ:Math.max(o.minY,o.maxY)}}}for(let r of this.entities)if(r.blocksMovement&&!this.isEnemyEntityForProjectiles(r)&&this.segmentIntersectsBlockingEntityXZ(e,t,n,i,r))return{source:"blocking_entity",entityId:r.id,entityType:r.userData?.type,name:r.name,approxRadiusWorld:this.blockingEntityRadiusWorld(r)+this.TILE_SIZE*.08};return null}pointInBarrierXZ(e,t,n){let i=Math.min(n.minX,n.maxX),s=Math.max(n.minX,n.maxX),r=Math.min(n.minY,n.maxY),o=Math.max(n.minY,n.maxY);return e>=i&&e<=s&&t>=r&&t<=o}segmentIntersectsBarrierXZ(e,t,n,i,s){let r=Math.min(s.minX,s.maxX),o=Math.max(s.minX,s.maxX),l=Math.min(s.minY,s.maxY),c=Math.max(s.minY,s.maxY);return this.segmentIntersectsAABB2D(e,t,n,i,r,o,l,c)}segmentIntersectsAABB2D(e,t,n,i,s,r,o,l){let c=n-e,h=i-t,d=0,u=1,f=1e-9,g=(x,p)=>{if(Math.abs(x)<f)return p>=-f;let m=p/x;if(x<0){if(m>u)return!1;m>d&&(d=m)}else{if(m<d)return!1;m<u&&(u=m)}return!0};return!g(-c,e-s)||!g(c,r-e)||!g(-h,t-o)||!g(h,l-t)?!1:d<=u+1e-9}blockingEntityRadiusWorld(e){let t=e.userData,n;return typeof t?.radius=="number"?n=t.radius:t?.collisionShape==="rect"&&typeof t?.halfWidth=="number"&&typeof t?.halfHeight=="number"?n=Math.max(t.halfWidth,t.halfHeight):n=.45,n*this.TILE_SIZE}segmentIntersectsBlockingEntityXZ(e,t,n,i,s){let r=this.blockingEntityRadiusWorld(s)+this.TILE_SIZE*.08,o=s.x*this.TILE_SIZE,l=s.y*this.TILE_SIZE;return this.segmentIntersectsCircle2D(e,t,n,i,o,l,r)}pointInBlockingEntityXZ(e,t,n){let i=this.blockingEntityRadiusWorld(n)+this.TILE_SIZE*.08,s=n.x*this.TILE_SIZE,r=n.y*this.TILE_SIZE,o=e-s,l=t-r;return o*o+l*l<=i*i}segmentIntersectsCircle2D(e,t,n,i,s,r,o){let l=n-e,c=i-t,h=s-e,d=r-t,u=l*l+c*c,f=u<1e-12?0:Math.max(0,Math.min(1,(h*l+d*c)/u)),g=e+f*l,x=t+f*c,p=s-g,m=r-x;return p*p+m*m<=o*o}tryPrimaryAttack(){if(this.player.isInventoryOpen||this.dialogSession||this.shopSession||this.projectileManager.hasActiveChakram())return;let e=this.getRightHandWeaponDef(),t=this.player.equipment.leftHand?.itemId?wt[this.player.equipment.leftHand.itemId]:void 0,n=e?this.attackResolver.resolve({itemDef:e,offhandItemDef:t}):null;(n?.execution==="projectile"||n?.execution==="boomerang")&&performance.now()<this.rangedCooldownUntilMs||this.viewmodelManager.triggerAttack()}setRangedCooldown(e){this.rangedCooldownUntilMs=performance.now()+Math.max(0,e)*1e3}getRightHandWeaponDef(){let e=this.player.equipment.rightHand?.itemId;return e?wt[e]:void 0}isEnemyEntityForProjectiles(e){return this.isEnemyEntity(e)}applyEnemyDamageFromProjectile(e,t,n,i,s,r,o,l,c){let h=this.evaluateEnemyHitZone(e,n,i,s,r),d=h.zone;if(d==="miss")return d;let u=d==="crit"?Math.max(1,Math.round(t*ff)):t;return Iy&&console.log("[enemy-hit projectile]",{enemyId:e.id,enemyType:e.userData?.enemyId??e.userData?.type,zone:d,baseDamage:t,finalDamage:u,u:Math.round(h.u*1e3)/1e3,v:Math.round(h.v*1e3)/1e3,du:Math.round(h.du*1e3)/1e3,dv:Math.round(h.dv*1e3)/1e3,bodyOverlap:h.bodyOverlap,critOverlap:h.critOverlap,hasHitboxSpec:h.hasSpec,world:{x:Math.round(n*100)/100,y:Math.round(i*100)/100,z:Math.round(s*100)/100}}),this.strikeEnemy(e,u,o,n/this.TILE_SIZE,s/this.TILE_SIZE,c??"projectile_hit"),l?.length&&this.applyStatusesToEnemy(e.id,l),d}applyStatusesToEnemy(e,t){if(!t.length)return;let n=this.enemyStatusEffects.get(e)??[];for(let i of t)n.push({effect:Ae({},i),remainingSec:i.durationSec,tickRemainSec:i.tickEverySec??.5});this.enemyStatusEffects.set(e,n)}applyStatusesToPlayer(e){if(e.length)for(let t of e)this.playerStatusEffects.push({effect:Ae({},t),remainingSec:t.durationSec,tickRemainSec:t.tickEverySec??.5})}updateStatusEffects(e){if(!(e<=0)){for(let t=this.playerStatusEffects.length-1;t>=0;t--){let n=this.playerStatusEffects[t];if(n.remainingSec-=e,n.tickRemainSec-=e,n.tickRemainSec<=0&&(n.tickRemainSec=n.effect.tickEverySec??.5,n.effect.kind==="dot"||n.effect.kind==="bleed")){let i=Math.max(1,Math.round(n.effect.magnitude));pf&&console.log("[damage-source]",{source:`player_status_${n.effect.kind}`,amount:i}),this.player.hp=Math.max(0,this.player.hp-i)}n.remainingSec<=0&&this.playerStatusEffects.splice(t,1)}for(let[t,n]of this.enemyStatusEffects.entries()){let i=this.entities.find(s=>s.id===t);if(!i){this.enemyStatusEffects.delete(t);continue}for(let s=n.length-1;s>=0;s--){let r=n[s];r.remainingSec-=e,r.tickRemainSec-=e,r.tickRemainSec<=0&&(r.tickRemainSec=r.effect.tickEverySec??.5,(r.effect.kind==="dot"||r.effect.kind==="bleed")&&this.strikeEnemy(i,Math.max(1,Math.round(r.effect.magnitude)),performance.now(),this.player.x,this.player.y,`enemy_status_${r.effect.kind}`)),r.remainingSec<=0&&n.splice(s,1)}n.length===0&&this.enemyStatusEffects.delete(t)}}}initThreeJS(){this.scene=new dr,this.camera=new Et(60,this.config.width/this.config.height,.1,2e3),this.renderer=new Go({antialias:!1}),this.renderer.autoClear=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xi,this.renderer.setSize(this.config.width,this.config.height,!1),this.renderer.domElement.style.cssText="width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; position: absolute; top: 0; left: 0;",this.container.appendChild(this.renderer.domElement)}initUI(){this.uiCanvas=document.createElement("canvas"),this.uiCanvas.width=this.config.width*4,this.uiCanvas.height=this.config.height*4,this.uiCanvas.style.cssText="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0; pointer-events: none; background: transparent;",this.uiCtx=this.uiCanvas.getContext("2d"),this.container.appendChild(this.uiCanvas),this.uiRenderer=new Yo(this.uiCtx,this.config,this.textureManager)}initialize(){return dn(this,null,function*(){try{let e=lf;for(let o of e)yield this.modelManager.loadModel(o.id,o.path);let t=cf;for(let o of t)yield this.textureManager.loadTexture(o.id,o.path);let n=this.modelManager.getModel("hub").clone(),i=js.parse(n);if(this.hubBuilder.buildHub(i.visualScene,i.entities),this.hubScene=i.visualScene,this.hubEntities=i.entities,this.hubBarriers=i.barriers,this.hubSpawn=i.spawn,this.dungeonStart=i.dungeonStart,this.hubEntityMeshes=this.hubEntities.map(o=>this.scene.getObjectByName(`mesh_${o.id}`)).filter(o=>!!o),this.currentFloorIndex=0,this.dungeonSeedBump=Date.now()%1e9+Math.floor(Math.random()*1e3),this.loadNow(),this.entities=[...this.hubEntities],this.playerController.setBarriers(this.hubBarriers.map(o=>Ae({},o))),this.playerController.setEntities(this.entities),this.playerController.resetVerticalState(),this.scene.add(this.dungeonGroup),this.dungeonGroup.position.y=this.DUNGEON_FLOOR_Y_OFFSET,this.dungeonStart){let o=Math.max(0,this.currentFloorIndex);this.buildFloor(o,o===0)}else console.log("No dungeon spawn found in hub.glb. Running in Hub-only mode."),this.map=[[0]],this.mapTileOffsetX=0,this.mapTileOffsetY=0,this.exploredMap=[[!0]],this.player.x=this.hubSpawn.x,this.player.y=this.hubSpawn.y,this.player.angle=this.hubSpawn.angle,this.player.worldY=0,this.player.velocityY=0,this.player.isGrounded=!0;let s=this.textureManager.getTexture("moon"),r=this.textureManager.getTexture("star");this.lightingManager.init(this.scene,this.camera,this.config.maxVisibility,this.TILE_SIZE,s,r),this.lightingManager.setOutdoorMoodEnabled(this.currentFloorIndex===0),this.isReady=!0}catch(e){console.error("Engine initialization failed:",e)}})}clearObjectGroup(e){for(;e.children.length>0;)e.remove(e.children[0])}pickRandomWalkableTile(e){let t=[];for(let n=0;n<e.length;n++)for(let i=0;i<e[0].length;i++)e[n][i]===0&&t.push({x:i,y:n});return t.length===0?{x:0,y:0}:t[Math.floor(Math.random()*t.length)]}buildFloor(e,t){if(!this.dungeonStart)return;let n=cl[e]||cl[0],i=Cn(Ae({},n),{seed:n.seed+this.dungeonSeedBump});console.log("[Floor] buildFloor:",{floorIndex:e,seed:i.seed,respawnAtHubSpawn:t}),this.lightingManager.setOutdoorMoodEnabled(e===0),e===0?(this.hubScene&&!this.hubScene.parent&&this.scene.add(this.hubScene),this.hubEntityMeshes.forEach(u=>{u.parent||this.scene.add(u)})):(this.hubScene&&this.hubScene.parent&&this.scene.remove(this.hubScene),this.hubEntityMeshes.forEach(u=>{u.parent&&this.scene.remove(u)})),this.clearObjectGroup(this.dungeonGroup),this.clearEnemyProjectiles(),this.clearEnemyDeathBursts(),this.enemyRuntimeStore.clear(),this.hpBarRatioCache.clear();let s=new il(10),r=s.generate(i,this.dungeonStart.direction),o=this.dungeonStart.x-s.entranceCoords.x-.5,l=this.dungeonStart.y-s.entranceCoords.y-.5,c=e===0?this.hubBarriers.map(u=>Ae({},u)):[],h=e===0?[...this.hubEntities]:[];r.entities.forEach(u=>{if(u.x+=o,u.y+=l,u.userData?.type==="door"){let f=u.id;u.onInteract=g=>{let x=g.engine?.entities?.find(p=>p.id===f)??null;x&&g.engine?.toggleDoor?.(x)}}if(h.push(u),u.userData?.type==="edge_wall"){let f=u.x*this.TILE_SIZE,g=u.y*this.TILE_SIZE,x=this.TILE_SIZE/2,p=.09375,m=this.TILE_SIZE/2;u.userData.facing==="north"?g-=x:u.userData.facing==="south"?g+=x:u.userData.facing==="east"?f+=x:u.userData.facing==="west"&&(f-=x),u.userData.facing==="north"||u.userData.facing==="south"?c.push({minX:f-m,maxX:f+m,minY:g-p,maxY:g+p}):c.push({minX:f-p,maxX:f+p,minY:g-m,maxY:g+m}),u.blocksMovement=!1}else u.userData?.type==="corner"&&(u.blocksMovement=!1)});let d=null;if(i.pregenRooms&&i.pregenRooms.length>0){let u=i.seed+i.floorLevel*7654321,f=()=>{let g=u+=1831565813;return g=Math.imul(g^g>>>15,g|1),g^=g+Math.imul(g^g>>>7,g|61),((g^g>>>14)>>>0)/4294967296};d=dl.placeInDungeon(s.bspRooms,s.placedRooms,r.map,s.hEdges,s.vEdges,i,this.modelManager,this.TILE_SIZE,f,h);for(let g of d.groups)g.position.x+=o*this.TILE_SIZE,g.position.z+=l*this.TILE_SIZE,this.dungeonBuilder.applyRetroMaterials(g),this.dungeonGroup.add(g);for(let g of d.entities)if(g.x+=o,g.y+=l,g.userData||(g.userData={}),g.userData._pregenRoom=!0,g.userData.type==="interactive_stair_up")g.onInteract=()=>this.goToNextFloor();else if(g.userData.type==="chest"&&!g.onInteract){let x=g.id;g.onInteract=p=>{let m=p.engine?.entities?.find(y=>y.id===x);m&&p.engine?.interactWithChest?.(m)}}}if(i.enemyPool&&i.enemyPool.length>0&&i.enemyDensity>0){let u=i.seed+i.floorLevel*9876543,f=()=>{let _=u+=1831565813;return _=Math.imul(_^_>>>15,_|1),_^=_+Math.imul(_^_>>>7,_|61),((_^_>>>14)>>>0)/4294967296},g=new Set;for(let _ of h){let T=Math.floor(_.x-o),w=Math.floor(_.y-l);g.add(`${T},${w}`)}let x=s.entranceCoords;for(let _=-3;_<=3;_++)for(let T=-3;T<=3;T++)g.add(`${x.x+T},${x.y+_}`);if(d)for(let _ of d.placedRoomRects)for(let T=_.y;T<_.y+_.h;T++)for(let w=_.x;w<_.x+_.w;w++)g.add(`${w},${T}`);let p=i.enemyPool.reduce((_,T)=>_+T.weight,0),m=i.enemyDensity*.1,y=r.map,b=0;for(let _=0;_<y.length;_++)for(let T=0;T<y[0].length;T++){if(y[_][T]!==0||g.has(`${T},${_}`)||f()>m)continue;let w=f()*p,A=i.enemyPool[0].enemyId;for(let k of i.enemyPool)if(w-=k.weight,w<=0){A=k.enemyId;break}let v=un[A];if(!v)continue;let M={id:`enemy_${v.id}_scatter_${T}_${_}`,x:T+.5+o,y:_+.5+l,name:v.name,textureId:v.textureId,scale:v.scale,verticalOffset:v.verticalOffset,blocksMovement:!0,isLightSource:!1,isInteractable:!1,userData:{type:"enemy",enemyId:v.id,hp:v.maxHp,radius:v.hitboxRadius,thickness:v.thickness}};r.entities.push(M),h.push(M),g.add(`${T},${_}`),b++}console.log(`[EnemyScatter] Placed ${b} enemies from pool (density=${i.enemyDensity}, chance=${(m*100).toFixed(1)}%)`)}if(this.dungeonBuilder.build(r.map,r.biomeMap,r.entities,o,l,this.dungeonGroup),i.pregenRooms&&i.pregenRooms.length>0)for(let u of h)u.userData?._pregenRoom&&this.dungeonBuilder.buildDungeonEntity(u);if(this.map=r.map,this.mapTileOffsetX=o,this.mapTileOffsetY=l,this.exploredMap=this.map.map(u=>u.map(()=>!1)),this.player.worldY=0,this.player.velocityY=0,this.player.isGrounded=!0,t)this.player.x=this.hubSpawn.x,this.player.y=this.hubSpawn.y,this.player.angle=this.hubSpawn.angle;else if(d?.playerArrivalPos)this.player.x=d.playerArrivalPos.x+o,this.player.y=d.playerArrivalPos.y+l,this.player.angle=this.hubSpawn.angle;else{let u=this.pickRandomWalkableTile(this.map);this.player.x=u.x+.5+o,this.player.y=u.y+.5+l,this.player.angle=this.hubSpawn.angle}this.entities=h,this.playerController.setBarriers(c),this.playerController.setEntities(this.entities),this.playerController.resetVerticalState()}goToNextFloor(){if(!this.dungeonStart)return;let e=this.currentFloorIndex+1;console.log("[Floor] goToNextFloor:",{from:this.currentFloorIndex,to:e,seedBump:this.dungeonSeedBump}),e>=cl.length?(this.dungeonSeedBump+=1,this.currentFloorIndex=0,this.buildFloor(0,!0)):(this.currentFloorIndex=e,this.buildFloor(this.currentFloorIndex,!1)),this.requestAutoSave()}handleInput(e,t){if(t){if((e==="Escape"||e==="Esc")&&this.interactionManager.handleEscapeModal())return;if(e==="Tab"){if(this.player.isMenuOpen=!this.player.isMenuOpen,this.player.isMenuOpen){this.player.isInventoryOpen=!1;let i=4;this.player.uiCursor.x=this.config.width*i/2,this.player.uiCursor.y=this.config.height*i/2}return}if(this.player.isMenuOpen||this.interactionManager.handleDialogOrShopKey(e))return;if(e==="r"||e==="R"){this.consumePotionSlot();return}let n=this.resolveHotbarIndexFromKey(e);if(n!==null){this.activateHotbarSkill(n);return}}this.player.isMenuOpen||this.playerController.handleInput(e,t)}resolveHotbarIndexFromKey(e){return e==="1"||e==="Numpad1"?0:e==="2"||e==="Numpad2"?1:e==="3"||e==="Numpad3"?2:e==="4"||e==="Numpad4"?3:null}activateHotbarSkill(e){if(this.player.isInventoryOpen||this.dialogSession||this.shopSession||this.soulShopSession)return;let t=this.player.hotbar[e];if(!t)return;if(!Nt[t]?.assignableToHotbar){this.player.hotbar[e]=null;return}this.playerController.activateSkill(t)}triggerSkillAttack(e){return e!=="big_boom"||this.skillManager.getSkillRank(e)<=0||!this.skillManager.tryActivateSkill(e)?!1:(this.projectileManager.spawnSkillBigBoom({damage:this.skillManager.getSkillEffect(e,"damage")??18,speed:this.skillManager.getSkillEffect(e,"projectileSpeed")??10,rangeMeters:this.skillManager.getSkillEffect(e,"projectileRange")??24,collisionRadius:this.skillManager.getSkillEffect(e,"projectileRadius")??.45,sourceTag:"skill_big_boom"}),!0)}consumePotionSlot(){if(this.player.isInventoryOpen||this.dialogSession||this.shopSession||this.soulShopSession)return;let e=this.player.potionSlot;e.itemId!=="potion"||e.qty<=0||(e.qty=Math.max(0,e.qty-1),e.qty===0&&(e.itemId=null),this.player.hp=Math.min(this.player.maxHp,this.player.hp+30),this.requestAutoSave())}start(){this.isRunning||!this.isReady||(this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.loop))}stop(){this.isRunning=!1}captureSnapshot(){return this.persistenceService.captureSnapshot({player:this.player,currentFloorIndex:this.currentFloorIndex,dungeonSeedBump:this.dungeonSeedBump})}applySnapshot(e){let t={player:this.player,currentFloorIndex:this.currentFloorIndex,dungeonSeedBump:this.dungeonSeedBump};this.persistenceService.applySnapshot(t,e),this.currentFloorIndex=t.currentFloorIndex,this.dungeonSeedBump=t.dungeonSeedBump}saveNow(){return this.persistenceService.saveNow({player:this.player,currentFloorIndex:this.currentFloorIndex,dungeonSeedBump:this.dungeonSeedBump})}loadNow(){let e={player:this.player,currentFloorIndex:this.currentFloorIndex,dungeonSeedBump:this.dungeonSeedBump},t=this.persistenceService.loadNow(e);return this.currentFloorIndex=e.currentFloorIndex,this.dungeonSeedBump=e.dungeonSeedBump,t}requestAutoSave(){this.saveNow()}loop(e){if(!this.isRunning)return;let t=(e-this.lastTime)/1e3,n=e/1e3;this.lastTime=e;let i=this.pauseStateService.computeSimFrozen({isMenuOpen:this.player.isMenuOpen,isInventoryOpen:this.player.isInventoryOpen,hasDialog:!!this.dialogSession,hasShop:!!this.shopSession,hasSoulShop:!!this.soulShopSession}),s=i?0:t;this.skillManager.tickCooldowns(s),this.playerController.update(t),this.lightingManager.update(t,this.camera),i||this.processPlayerMeleeHit(e),this.updateEnemies(s,e),this.updateEnemyProjectiles(s),this.updateEnemyDeathBursts(s),this.updateStatusEffects(s),this.hubBuilder.mixers.forEach(h=>h.update(s)),this.dungeonBuilder.mixers.forEach(h=>h.update(s));let r=Math.floor(this.player.x),o=Math.floor(this.player.y);for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){let u=r+d,f=o+h;f>=0&&f<this.map.length&&u>=0&&u<this.map[0].length&&(this.exploredMap[f][u]=!0)}for(let h=this.entities.length-1;h>=0;h--){let d=this.entities[h];if(d.userData?.type==="bonfire"||d.userData?.type==="standing_torch"||d.userData?.type==="wall_lantern"){let u=this.scene.getObjectByName(`mesh_${d.id}`);if(u){let f=u.getObjectByName("fireLight");if(f){let g=Math.sin(e/200+h)*.05,x=Math.cos(e/150+h)*.02,p=(Math.random()-.5)*.04;f.intensity=1.2+g+x+p}u.userData.updateParticles&&u.userData.updateParticles(t)}}else if(d.userData?.type==="enemy_preview"||d.userData?.type==="enemy"||d.userData?.type==="npc"){let u=this.scene.getObjectByName(`mesh_${d.id}`);if(u){this.isEnemyEntity(d)&&this.updateEnemyKnockback(u,d,e);let f=e/500+h,g=u.userData.pulseMaterial;if(g){let m=1+Math.sin(f)*.6;g.color.setScalar(m);let y=u.userData.pulseLight;y&&(y.intensity=m*1.5)}let x=u.userData.dimPulseMaterial;if(x){let m=.5+Math.sin(f)*.5;x.color.setScalar(m);let y=u.userData.dimPulseLight;y&&(y.intensity=m*1.2)}let p=u.userData.flickerMaterial;if(p){let m=.8+Math.random()*.4;p.color.setScalar(m)}u.userData.updateParticles&&u.userData.updateParticles(t),u.userData.isBillboard&&(this.camera.getWorldPosition(this.tempPlayerPos),u.lookAt(this.tempPlayerPos.x,u.position.y,this.tempPlayerPos.z)),this.isEnemyEntity(d)&&(this.ensureEnemyCombatData(d),this.ensureEnemyHitboxOverlay(u,d),this.updateEnemyHealthbar(u,d),this.applyEnemyHurtFlashOverlay(u,d,e))}}else if(d.userData?.type==="item"){let u=this.scene.getObjectByName(`mesh_${d.id}`);if(!u)continue;u.rotation.y+=2*t;let f=d.userData,g=e/500+h,x=u.userData.pulseMaterial;x&&x.color.setScalar(1+Math.sin(g)*.6);let p=u.userData.dimPulseMaterial;if(p&&p.color.setScalar(.5+Math.sin(g)*.5),u.userData.updateParticles&&u.userData.updateParticles(t),f.animState==="popping"){let m=2*t;u.position.y+=m,u.position.y>=f.targetY&&(u.position.y=f.targetY,f.animState="hovering")}else if(f.animState==="hovering")f.currentTimer+=t,u.position.y=f.targetY+Math.sin(e/200+h)*.1,f.currentTimer>f.hoverTime&&(f.animState="flying");else if(f.animState==="flying"){let m=this.player.x*this.TILE_SIZE,y=this.player.y*this.TILE_SIZE,b=m-u.position.x,_=this.player.worldY+this.PLAYER_EYE_LEVEL-u.position.y,T=y-u.position.z,w=b*b+_*_+T*T;if(w<.6)this.pickupItem(d);else{let A=Math.sqrt(w),v=Math.max(8,A*4)*t;u.position.x+=b/A*v,u.position.y+=_/A*v,u.position.z+=T/A*v,d.x=u.position.x/this.TILE_SIZE,d.y=u.position.z/this.TILE_SIZE}}}}this.viewmodelManager.update(this.player,t,n),i||this.processRangedWeaponSpawns(e),this.projectileManager.update(s,e),this.renderer.clear(),this.camera.layers.set(0),this.renderer.render(this.scene,this.camera),this.renderer.clearDepth();let l=this.scene.background;this.scene.background=null,this.camera.layers.set(1),this.renderer.render(this.scene,this.camera),this.scene.background=l,this.camera.layers.set(0);let c=this.skillManager.getUnlockedSkillIds().map(h=>{let d=Nt[h];return{id:h,name:d?.name??h,fraction:this.skillManager.getCooldownFraction(h)}});this.uiRenderer.render(this.player,this.map,this.playerController.focusedEntity,this.exploredMap,this.entities,this.interactionManager.getDialogPanelModel(),this.interactionManager.getShopPanelModel(),this.soulShopSession,c),requestAnimationFrame(this.loop)}toggleDoor(e){this.interactionManager.toggleDoor(e)}interactWithChest(e){this.interactionManager.interactWithChest(e)}interactWithNpc(e){this.interactionManager.interactWithNpc(e)}pickupItem(e){this.interactionManager.pickupItem(e)}DEFAULT_MELEE_REACH=.78;DEFAULT_MELEE_SWIPE_HALF_ARC=.34;getEquippedMeleeStats(){let e=this.player.equipment.rightHand?.itemId;if(!e)return{damage:8,reach:this.DEFAULT_MELEE_REACH,halfArc:this.DEFAULT_MELEE_SWIPE_HALF_ARC};let t=wt[e],n=this.player.equipment.leftHand?.itemId?wt[this.player.equipment.leftHand.itemId]:void 0,i=this.attackResolver.resolve({itemDef:t,offhandItemDef:n});return{damage:i?.damage??t?.weaponDamage??8,reach:i?.attackRange??t?.meleeReach??this.DEFAULT_MELEE_REACH,halfArc:i?.meleeSwipeHalfArcRad??t?.meleeSwipeHalfArcRad??this.DEFAULT_MELEE_SWIPE_HALF_ARC}}isEnemyEntity(e){return e.userData?e.userData.enemyId?!0:e.userData.type==="enemy_preview"||e.userData.type==="enemy":!1}ensureEnemyCombatData(e){e.userData||(e.userData={});let t=e.userData.enemyId,n=t?un[t]:void 0;!n&&t&&(n=Object.values(un).find(s=>s.id===t));let i=n?.maxHp??20;return typeof e.userData.maxHp!="number"&&(e.userData.maxHp=i),typeof e.userData.hp!="number"&&(e.userData.hp=e.userData.maxHp),this.enemyRuntimeStore.ensure(e.id,e.x,e.y)}resolveEnemyAttack(e){let t=this.attackResolver.resolve({enemyDef:e});if(t)return t;let n=e?.attackProfileId,i=n?of[n]:void 0;return{id:`legacy_enemy_${e?.id??"unknown"}`,execution:"projectile",attackType:i?.attackType??e?.attackType??"melee",attackRange:i?.attackRange??e?.attackRange??1.2,attackCooldown:i?.attackCooldown??e?.attackCooldown??.9,damage:i?.damage??e?.damage??5,projectileKind:i?.projectileKind??e?.projectileId,projectileSpeed:void 0,projectileMaxRange:void 0,projectileCollisionRadius:void 0}}updateEnemies(e,t){if(e<=0)return;let n=this.player.x,i=this.player.y;for(let s of this.entities){if(!this.isEnemyEntity(s))continue;let r=this.ensureEnemyCombatData(s),o=s.userData?.enemyId,l=o?un[o]:void 0;if(!l||r.knockback)continue;let c=n-s.x,h=i-s.y,d=Math.sqrt(c*c+h*h),u=this.hasEnemyLineOfSight(s.x,s.y,n,i),f=d<=l.aggroRange&&u,g=r.aiState;if(f?(r.aiState="aggro",r.lastKnownX=n,r.lastKnownY=i,r.investigateUntilMs=t+2200):g==="aggro"&&(r.aiState="investigate",r.investigateUntilMs=t+2200),r.aiState==="investigate"){let D=r.investigateUntilMs,j=l.deaggroRange>0?l.deaggroRange:l.aggroRange+3;(t>D||d>j)&&(r.aiState="idle")}if(r.aiState==="idle")continue;let p=this.resolveEnemyAttack(l),m=r.aiState==="aggro"?n:r.lastKnownX,y=r.aiState==="aggro"?i:r.lastKnownY,b=m-s.x,_=y-s.y,T=Math.sqrt(b*b+_*_),w=Number(s.userData?.radius??l.hitboxRadius??.35),v=Math.max(.55,w+.2+.2),M=p.attackType==="ranged"||p.attackType==="magic",k=Math.max(.1,p.attackRange-.35),R=p.attackRange+.45;if(u?r.noLosSinceMs=0:r.noLosSinceMs<=0&&(r.noLosSinceMs=t),M?(!r.rangedHold&&d<=k&&(r.rangedHold=!0),r.rangedHold&&d>R&&(r.rangedHold=!1)):r.rangedHold=!1,d<=p.attackRange&&this.hasEnemyLineOfSight(s.x,s.y,n,i)&&t>=r.attackCooldownUntilMs){this.enemyAttack(s,p,t);continue}let U=r.aiState==="aggro"?d:T,G=r.aiState==="aggro"&&M&&!!r.rangedHold&&u&&d<=p.attackRange,B=r.movePauseUntilMs,H=t<B;if(U>.05){if(H)continue;let D=b/Math.max(1e-6,T),j=_/Math.max(1e-6,T);if(M&&!u&&d<=p.attackRange+1.2&&(r.aiState==="aggro"||r.aiState==="investigate")){if(t>=r.strafeUntilMs){let ne=s.id.length%2===0?1:-1;r.strafeDir=r.strafeDir===0?ne:r.strafeDir===1?-1:1,r.strafeUntilMs=t+650}let Ke=c/Math.max(1e-6,d);D=-(h/Math.max(1e-6,d))*r.strafeDir,j=Ke*r.strafeDir}if(r.aiState==="aggro"&&d<v){let Ke=Math.max(1e-6,d);D=-c/Ke,j=-h/Ke}if(G){r.movePauseUntilMs=t+1e3;continue}let Z=Math.max(.1,l.movementSpeed)*e,ue=s.x+D*Z,me=s.y+j*Z,ce=this.resolveEnemyCollision(ue,me,s.userData?.radius??l.hitboxRadius,s.id),Fe=Math.hypot(ce.x-s.x,ce.y-s.y)>1e-4;s.x=ce.x,s.y=ce.y;let st=this.scene.getObjectByName(`mesh_${s.id}`);st&&(st.position.x=s.x*this.TILE_SIZE,st.position.z=s.y*this.TILE_SIZE),Fe?r.movePauseUntilMs&&(r.movePauseUntilMs=0):r.aiState==="aggro"&&d<=v+.12?r.movePauseUntilMs=t+1e3:this.tryEnemyOpenNearbyDoor(s)}}}hasEnemyLineOfSight(e,t,n,i){let s=e*this.TILE_SIZE,r=t*this.TILE_SIZE,o=n*this.TILE_SIZE,l=i*this.TILE_SIZE;return!this.projectileSegmentBlocked(s,r,o,l)}enemyAttack(e,t,n){this.spawnEnemyProjectile(e,t);let i=this.ensureEnemyCombatData(e);i.attackCooldownUntilMs=n+t.attackCooldown*1e3}spawnEnemyProjectile(e,t){this.enemyProjectileSystem.spawn(e,{attackDamage:t.damage,projectileKind:t.projectileKind,projectileSpeed:t.projectileSpeed,projectileMaxRange:t.projectileMaxRange,projectileCollisionRadius:t.projectileCollisionRadius,statuses:t.statuses})}updateEnemyProjectiles(e){this.enemyProjectileSystem.update(e)}clearEnemyProjectiles(){this.enemyProjectileSystem.clear()}spawnEnemyDeathBurst(e,t){this.enemyDeathVfxSystem.spawn(e,t)}updateEnemyDeathBursts(e){this.enemyDeathVfxSystem.update(e)}clearEnemyDeathBursts(){this.enemyDeathVfxSystem.clear()}tryEnemyOpenNearbyDoor(e){for(let n of this.entities){if(n.userData?.type!=="door"||!n.blocksMovement)continue;let i=n.x-e.x,s=n.y-e.y;if(!(i*i+s*s>.85*.85)){this.toggleDoor(n);return}}}resolveEnemyCollision(e,t,n,i){let s=e,r=t,o=Math.max(.08,Number(n)||.22),l=.2;for(let f of this.playerController.getBarriers()){let g=f.minX/this.TILE_SIZE,x=f.maxX/this.TILE_SIZE,p=f.minY/this.TILE_SIZE,m=f.maxY/this.TILE_SIZE,y=Math.max(g,Math.min(s,x)),b=Math.max(p,Math.min(r,m)),_=s-y,T=r-b,w=_*_+T*T;if(w<o*o&&w>1e-9){let A=Math.sqrt(w);s+=_/A*(o-A),r+=T/A*(o-A)}}for(let f of this.entities){if(f.id===i||!f.blocksMovement||this.isEnemyEntity(f))continue;if((f.userData?.collisionShape||"circle")==="rect"&&typeof f.userData?.halfWidth=="number"&&typeof f.userData?.halfHeight=="number"){let _=f.userData.halfWidth,T=f.userData.halfHeight,w=Math.max(f.x-_,Math.min(s,f.x+_)),A=Math.max(f.y-T,Math.min(r,f.y+T)),v=s-w,M=r-A,k=v*v+M*M;if(k<o*o&&k>1e-9){let R=Math.sqrt(k);s+=v/R*(o-R),r+=M/R*(o-R)}continue}let x=Number(f.userData?.radius??.45),p=s-f.x,m=r-f.y,y=o+x,b=p*p+m*m;if(b<y*y&&b>1e-9){let _=Math.sqrt(b);s+=p/_*(y-_),r+=m/_*(y-_)}}let c=s-this.player.x,h=r-this.player.y,d=o+l,u=c*c+h*h;if(u<d*d&&u>1e-9){let f=Math.sqrt(u);s+=c/f*(d-f),r+=h/f*(d-f)}return{x:s,y:r}}classifyEnemyHitZone(e,t,n,i,s=0){return this.evaluateEnemyHitZone(e,t,n,i,s).zone}evaluateEnemyHitZone(e,t,n,i,s=0){let r=this.scene.getObjectByName(`mesh_${e.id}`);if(!r)return{zone:"miss",u:-1,v:-1,du:0,dv:0,bodyOverlap:!1,critOverlap:!1,hasSpec:!1};let o=this.getEnemyHitboxSpec(e);if(!o){let M=df?"miss":"body";return{zone:M,u:-1,v:-1,du:0,dv:0,bodyOverlap:M==="body",critOverlap:!1,hasSpec:!1}}let l=Number(e.userData?.hitboxSpriteHalfWidth??e.userData?.hitboxLocalHalfWidth??0),c=Number(e.userData?.hitboxSpriteHeight??e.userData?.hitboxLocalHeight??0),h=Number(e.userData?.hitboxSpriteMinY??e.userData?.hitboxLocalMinY??0);if(!(l>1e-6)||!(c>1e-6)){let M=df?"miss":"body";return{zone:M,u:-1,v:-1,du:0,dv:0,bodyOverlap:M==="body",critOverlap:!1,hasSpec:!0}}let d=t-r.position.x,u=i-r.position.z,f=n-r.position.y,g=r.rotation.y||0,x=Math.cos(g),p=Math.sin(g),m=d*x+u*p,y=(h+c-f)/c,b=(m+l)/(2*l),_=s>0?s/Math.max(1e-6,2*l):0,T=s>0?s/Math.max(1e-6,c):0;if(b+_<0||b-_>1||y+T<0||y-T>1)return{zone:"miss",u:b,v:y,du:_,dv:T,bodyOverlap:!1,critOverlap:!1,hasSpec:!0};let w=!!(o.crit&&this.uvProbeOverlapsRect(b,y,_,T,this.expandRectUV(o.crit,Cy))),A=this.uvProbeOverlapsRect(b,y,_,T,o.body);return{zone:w?"crit":A?"body":"miss",u:b,v:y,du:_,dv:T,bodyOverlap:A,critOverlap:w,hasSpec:!0}}expandRectUV(e,t){return{u0:Math.max(0,e.u0-t),u1:Math.min(1,e.u1+t),v0:Math.max(0,e.v0-t),v1:Math.min(1,e.v1+t)}}uvProbeOverlapsRect(e,t,n,i,s){let r=e-n,o=e+n,l=t-i,c=t+i;return!(o<s.u0||r>s.u1||c<s.v0||l>s.v1)}getEnemyHitboxSpec(e){let t=e.textureId;if(!t)return null;if(this.enemyHitboxCache.has(t))return this.enemyHitboxCache.get(t);let n;try{n=this.textureManager.getTexture(`${t}_hitbox`)}catch{return this.enemyHitboxCache.set(t,null),null}let i=n.image;if(!i?.width||!i?.height)return this.enemyHitboxCache.set(t,null),null;let s=document.createElement("canvas");s.width=i.width,s.height=i.height;let r=s.getContext("2d",{willReadFrequently:!0});if(!r)return this.enemyHitboxCache.set(t,null),null;r.drawImage(i,0,0);let o=r.getImageData(0,0,s.width,s.height).data,l=this.extractColorRectUV(o,s.width,s.height,Dh.r,Dh.g,Dh.b),c=this.extractColorRectUV(o,s.width,s.height,Lh.r,Lh.g,Lh.b);if(!l)return this.enemyHitboxCache.set(t,null),null;let h={textureId:t,body:l,crit:c??void 0};return this.enemyHitboxCache.set(t,h),h}extractColorRectUV(e,t,n,i,s,r){let o=t,l=n,c=-1,h=-1,d=10;for(let u=0;u<n;u++)for(let f=0;f<t;f++){let g=(u*t+f)*4;if(e[g+3]<16)continue;let p=e[g],m=e[g+1],y=e[g+2];Math.abs(p-i)>d||Math.abs(m-s)>d||Math.abs(y-r)>d||(f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u))}return c<o||h<l?null:{u0:o/t,u1:(c+1)/t,v0:l/n,v1:(h+1)/n}}ensureEnemyHitboxOverlay(e,t){if(!Ry||this.enemyHitboxOverlayApplied.has(t.id))return;let n=this.getEnemyHitboxSpec(t);if(!n)return;let i=Number(t.userData?.hitboxSpriteHalfWidth??t.userData?.hitboxLocalHalfWidth??0),s=Number(t.userData?.hitboxSpriteHeight??t.userData?.hitboxLocalHeight??0),r=Number(t.userData?.hitboxSpriteMinY??t.userData?.hitboxLocalMinY??0);if(!(i>1e-6)||!(s>1e-6))return;let o=(c,h,d)=>{let u=Math.max(1e-6,(c.u1-c.u0)*2*i),f=Math.max(1e-6,(c.v1-c.v0)*s),g=new Mn(u,f),x=new Qe({color:h,transparent:!0,opacity:.22,depthWrite:!1,side:Gt}),p=new et(g,x),m=(c.u0+c.u1)*.5,y=(c.v0+c.v1)*.5;return p.position.set((m-.5)*(2*i),r+(1-y)*s,d),p.renderOrder=999,p},l=new Ue;l.name=`enemy_hitbox_overlay_${t.id}`,l.add(o(n.body,2645188,.03)),n.crit&&l.add(o(n.crit,11804714,.04)),e.add(l),this.enemyHitboxOverlayApplied.add(t.id)}processRangedWeaponSpawns(e){let t=this.getRightHandWeaponDef();if(!t)return;let n=this.player.equipment.leftHand?.itemId?wt[this.player.equipment.leftHand.itemId]:void 0,i=this.attackResolver.resolve({itemDef:t,offhandItemDef:n});!i||i.execution!=="projectile"&&i.execution!=="boomerang"||!(t.rangedWeaponKind==="staff_orb"&&this.viewmodelManager.consumeStaffOrbSpawn()||t.rangedWeaponKind==="bow_arrow"&&this.viewmodelManager.consumeBowSpawn()||t.rangedWeaponKind==="throwing_knife"&&this.viewmodelManager.consumeThrowSpawn()||t.rangedWeaponKind==="chakram"&&this.viewmodelManager.consumeChakramSpawn())||this.projectileManager.spawnResolvedAttack(t,i)}strikeEnemy(e,t,n,i,s,r="unknown"){let o=this.scene.getObjectByName(`mesh_${e.id}`);if(!o)return;this.ensureEnemyCombatData(e),e.userData.hp=Math.max(0,e.userData.hp-t),pf&&console.log("[damage-source]",{source:r,enemyId:e.id,amount:t,hpAfter:e.userData.hp});let l=this.ensureEnemyCombatData(e);l.flashStartMs=n,l.flashUntil=n+140,this.snapshotEnemyHurtStaticColors(o,e);let c=e.x-i,h=e.y-s,d=Math.sqrt(c*c+h*h),u=d>1e-4?c/d:0,f=d>1e-4?h/d:0,g=.12,p=l.knockback?.baseMeshY??o.position.y;if(l.knockback={startMs:n,durationMs:220,fromX:e.x,fromY:e.y,toX:e.x+u*g,toY:e.y+f*g,baseMeshY:p,peakWorld:.26},e.userData.hp<=0){let m=e.userData?.enemyId,y=m?un[m]:null;y?.xpOnDeath&&(this.player.souls+=y.xpOnDeath),this.spawnEnemyDeathBurst(e,o),o.parent&&o.parent.remove(o),this.enemyHitboxOverlayApplied.delete(e.id),this.enemyRuntimeStore.delete(e.id),this.hpBarRatioCache.delete(e.id);let b=this.entities.findIndex(_=>_.id===e.id);b!==-1&&this.entities.splice(b,1),this.playerController.setEntities(this.entities),this.requestAutoSave()}}processPlayerMeleeHit(e){let t=this.getRightHandWeaponDef(),n=this.player.equipment.leftHand?.itemId?wt[this.player.equipment.leftHand.itemId]:void 0,i=t?this.attackResolver.resolve({itemDef:t,offhandItemDef:n}):null;if(!i||i.execution!=="short_range_slash")return;let s=this.viewmodelManager.getActiveAttackSerial();if(s===null){this.lastProcessedAttackSerial=null,this.hitEntitiesThisAttack.clear();return}if(this.lastProcessedAttackSerial!==s&&(this.lastProcessedAttackSerial=s,this.hitEntitiesThisAttack.clear()),!this.viewmodelManager.canDealMeleeDamage())return;let{damage:r,reach:o,halfArc:l}=this.getEquippedMeleeStats(),c=this.player.x,h=this.player.y;for(let d of this.entities){if(!this.isEnemyEntity(d)||this.hitEntitiesThisAttack.has(d.id))continue;this.ensureEnemyCombatData(d);let u=d.x,f=d.y,g=u-c,x=f-h;if(Math.sqrt(g*g+x*x)>o)continue;let y=Math.atan2(x,g)-this.player.angle;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;if(Math.abs(y)>l||!this.scene.getObjectByName(`mesh_${d.id}`))continue;let _=new I;this.camera.getWorldDirection(_);let T=u*this.TILE_SIZE,w=this.camera.position.y+_.y*o*this.TILE_SIZE,A=f*this.TILE_SIZE,v=this.classifyEnemyHitZone(d,T,w,A);if(v==="miss")continue;this.hitEntitiesThisAttack.add(d.id);let M=v==="crit"?Math.max(1,Math.round(r*ff)):r;this.strikeEnemy(d,M,e,c,h,"player_melee"),this.entities.some(k=>k.id===d.id)}}snapshotEnemyHurtStaticColors(e,t){let n=e.userData.pulseMaterial,i=e.userData.dimPulseMaterial,s=e.userData.flickerMaterial,r=new Map;e.traverse(l=>{let c=l;if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material:[c.material];for(let d of h){let u=d;u?.color&&(d===n||d===i||d===s||r.set(d.uuid,u.color.clone()))}});let o=this.ensureEnemyCombatData(t);r.size>0?o.hurtStaticColors=new Map(Array.from(r.entries()).map(([l,c])=>[l,{r:c.r,g:c.g,b:c.b}])):o.hurtStaticColors=void 0}applyEnemyHurtFlashOverlay(e,t,n){let i=this.ensureEnemyCombatData(t),s=i.flashUntil,r=i.flashStartMs;if(s===void 0||r===void 0)return;let o=e.userData.pulseMaterial,l=e.userData.dimPulseMaterial,c=e.userData.flickerMaterial,h=i.hurtStaticColors;if(n>=s){h?.size&&e.traverse(g=>{let x=g;if(!x.isMesh)return;let p=Array.isArray(x.material)?x.material:[x.material];for(let m of p){if(m===o||m===l||m===c)continue;let y=h.get(m.uuid);y&&m.color.setRGB(y.r,y.g,y.b)}}),i.hurtStaticColors=void 0,i.flashUntil=void 0,i.flashStartMs=void 0;return}let d=Math.max(1e-6,s-r),u=(s-n)/d;u=u*u;let f=u*.62;e.traverse(g=>{let x=g;if(!x.isMesh)return;let p=Array.isArray(x.material)?x.material:[x.material];for(let m of p){let y=m;if(y?.color)if(m===o||m===l||m===c)y.color.lerp(Ph,f);else{let b=h?.get(m.uuid);b?y.color.setRGB(b.r,b.g,b.b).lerp(Ph,f):y.color.lerp(Ph,f)}}})}updateEnemyKnockback(e,t,n){let i=this.ensureEnemyCombatData(t),s=i.knockback;if(!s)return;let r=(n-s.startMs)/s.durationMs;if(r>=1){let u=this.resolveEnemyCollision(s.toX,s.toY,Number(t.userData?.radius??.22),t.id);t.x=u.x,t.y=u.y,e.position.x=t.x*this.TILE_SIZE,e.position.z=t.y*this.TILE_SIZE,e.position.y=s.baseMeshY,i.knockback=void 0;return}let o=r*r*(3-2*r),l=s.fromX+(s.toX-s.fromX)*o,c=s.fromY+(s.toY-s.fromY)*o,h=this.resolveEnemyCollision(l,c,Number(t.userData?.radius??.22),t.id);t.x=h.x,t.y=h.y,e.position.x=t.x*this.TILE_SIZE,e.position.z=t.y*this.TILE_SIZE;let d=Math.sin(Math.PI*r)*s.peakWorld;e.position.y=s.baseMeshY+d}updateEnemyHealthbar(e,t){let n=Math.max(0,Number(t.userData?.hp??0)),i=Math.max(1,Number(t.userData?.maxHp??1)),s=Math.max(0,Math.min(1,n/i)),r=this.hpBarRatioCache.get(t.id),o=e.getObjectByName("enemy_healthbar"),l,c;if(o){let f=o.material.map;if(!f||!(f.image instanceof HTMLCanvasElement))return;l=f.image;let g=l.getContext("2d");if(!g||(c=g,r!==void 0&&Math.abs(r-s)<5e-4))return}else{l=document.createElement("canvas"),l.width=128,l.height=22;let f=l.getContext("2d");if(!f)return;c=f;let g=new zi(l);g.minFilter=Ye,g.magFilter=Ye,o=new mr(new Cs({map:g,transparent:!0,depthTest:!1})),o.name="enemy_healthbar",o.renderOrder=999,o.scale.set(1.15,.22,1);let x=new vt().setFromObject(e),p=Math.max(.8,x.max.y-x.min.y);o.position.set(0,p+.45,0),e.add(o),this.hpBarRatioCache.set(t.id,-1)}let h=l.width,d=l.height;c.clearRect(0,0,h,d),c.fillStyle="rgba(0,0,0,0.72)",c.fillRect(0,0,h,d),c.fillStyle="#111",c.fillRect(3,3,h-6,d-6),c.fillStyle=s>.45?"#35d34c":s>.2?"#f1bc30":"#db3d3d",c.fillRect(4,4,Math.round((h-8)*s),d-8),c.strokeStyle="#e7e7e7",c.lineWidth=2,c.strokeRect(1,1,h-2,d-2);let u=o.material.map;u&&(u.needsUpdate=!0),this.hpBarRatioCache.set(t.id,s)}};var Ly=["gameCanvas"],Ny=["gameContainer"],bl=class a{canvasContainer;wrapper;engine;ngAfterViewInit(){return dn(this,null,function*(){this.canvasContainer.nativeElement.innerHTML="",this.wrapper.nativeElement.focus(),this.engine=new vl(this.canvasContainer.nativeElement),yield this.engine.initialize(),this.engine.start()})}handleKeyDown(e){e.key==="Tab"&&e.preventDefault(),this.engine&&this.engine.handleInput(e.key,!0)}handleKeyUp(e){e.key==="Tab"&&e.preventDefault(),this.engine&&this.engine.handleInput(e.key,!1)}ngOnDestroy(){this.engine&&(this.engine.saveNow?.(),this.engine.stop())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=Hr({type:a,selectors:[["app-game"]],viewQuery:function(t,n){if(t&1&&(Tl(Ly,5),Tl(Ny,5)),t&2){let i;wl(i=Al())&&(n.canvasContainer=i.first),wl(i=Al())&&(n.wrapper=i.first)}},hostBindings:function(t,n){t&1&&Xh("keydown",function(s){return n.handleKeyDown(s)},!1,El)("keyup",function(s){return n.handleKeyUp(s)},!1,El)},decls:4,vars:0,consts:[["gameContainer",""],["gameCanvas",""],["tabindex","0",1,"game-container"],[1,"game-viewport"]],template:function(t,n){t&1&&(Gh(0,"div",2,0),zr(2,"div",3,1),Wh())},styles:[".game-container[_ngcontent-%COMP%]{width:100%;height:calc(100vh - var(--header-height, 64px));display:flex;justify-content:center;align-items:center;background-color:#000;outline:none}.game-viewport[_ngcontent-%COMP%]{width:100%;height:100%}"]})};var mf=class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=Hr({type:a,selectors:[["app-home-page"]],decls:1,vars:0,template:function(t,n){t&1&&zr(0,"app-game")},dependencies:[bl],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{mf as HomePageComponent};
