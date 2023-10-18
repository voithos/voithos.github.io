(()=>{Go="128",Cr=0,Ls=1,Mr=2,Rs=1,zr=2,et=3,Tt=0,v=1,pt=2,Hs=1,jt=0,Xe=1,Is=2,Ys=3,Gs=4,oc=5,De=100,hc=101,_c=102,to=103,so=104,qc=200,pl=201,gl=202,yl=203,_o=204,Oo=205,Cl=206,Sl=207,Rl=208,Hl=209,Kl=210,Ld=0,Qd=1,eu=2,is=3,iu=4,au=5,ru=6,lu=7,cn=0,du=1,pu=2,_t=0,vu=1,ku=2,Pu=3,Iu=4,r1=5,Ro=300,zs=301,Ts=302,Ho=303,Io=304,Ms=306,As=307,xs=1e3,P=1001,ys=1002,x=1003,Vo=1004,$o=1005,z=1006,Lu=1007,ms=1008,hs=1009,zu=1010,Mu=1011,Gt=1012,Eu=1013,tn=1014,ee=1015,nn=1016,xu=1017,Ou=1018,_u=1019,rt=1020,yu=1021,pe=1022,V=1023,bu=1024,ou=1025,Se=1026,gt=1027,su=1028,Wd=1029,$d=1030,Vd=1031,Pd=1032,Nd=1033,ei=33776,ti=33777,ii=33778,ai=33779,ri=35840,pi=35841,vi=35842,ji=35843,dd=36196,yi=37492,wi=37496,ad=37808,id=37809,od=37810,sd=37811,nd=37812,ed=37813,Jl=37814,Zl=37815,Ql=37816,ql=37817,$l=37818,Bl=37819,nl=37820,Xc=37821,Wc=36492,Bc=37840,Zr=37841,Qr=37842,Xr=37843,xr=37844,Or=37845,wr=37846,Id=37847,Bd=37848,gu=37849,Fu=37850,$u=37851,Qu=37852,Zu=37853,e1=2200,n1=2201,s1=2202,Et=2300,kt=2301,ws=2302,Ce=2400,Ee=2401,Ft=2402,bs=2500,No=2501,mu=0,Me=3e3,ps=3001,zo=3007,To=3002,cu=3003,So=3004,Ao=3005,ko=3006,Jd=3200,Ul=3201,Fe=0,Fl=1,cs=7680,xl=519,ft=35044,Xt=35048,wo="300 es",je=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners,n=s[e];if(n!==void 0){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners,t=n[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let t=0,s=n.length;t<s;t++)n[t].call(this,e);e.target=null}}},_=[];for(let e=0;e<256;e++)_[e]=(e<16?"0":"")+e.toString(16);ss=Math.PI/180,ts=180/Math.PI;function U(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0,o=_[e&255]+_[e>>8&255]+_[e>>16&255]+_[e>>24&255]+"-"+_[t&255]+_[t>>8&255]+"-"+_[t>>16&15|64]+_[t>>24&255]+"-"+_[n&63|128]+_[n>>8&255]+"-"+_[n>>16&255]+_[n>>24&255]+_[s&255]+_[s>>8&255]+_[s>>16&255]+_[s>>24&255];return o.toUpperCase()}function M(e,t,n){return Math.max(t,Math.min(n,e))}function Z1(e,t){return(e%t+t)%t}function yo(e,t,n){return(1-n)*e+n*t}function _l(e){return(e&e-1)===0&&e!==0}function t4(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function n4(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}t=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6],this.y=t[1]*n+t[4]*s+t[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const e=Math.atan2(-this.y,-this.x)+Math.PI;return e}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,i=this.y-e.y;return this.x=o*n-i*s+e.x,this.y=o*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}},t.prototype.isVector2=!0,j=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,o,i,a,r,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=r,l[6]=n,l[7]=i,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[3],r=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],m=n[8],f=s[0],p=s[3],g=s[6],v=s[1],b=s[4],j=s[7],y=s[2],_=s[5],w=s[8];return o[0]=i*f+a*v+r*y,o[3]=i*p+a*b+r*_,o[6]=i*g+a*j+r*w,o[1]=c*f+l*v+d*y,o[4]=c*p+l*b+d*_,o[7]=c*g+l*j+d*w,o[2]=u*f+h*v+m*y,o[5]=u*p+h*b+m*_,o[8]=u*g+h*j+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],l=e[8];return t*i*l-t*a*c-n*o*l+n*a*r+s*o*c-s*i*r}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],d=e[3],a=e[4],i=e[5],r=e[6],c=e[7],l=e[8],u=l*a-i*c,h=i*r-l*d,m=c*d-a*r,f=n*u+s*h+o*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const t=1/f;return e[0]=u*t,e[1]=(o*c-l*s)*t,e[2]=(i*s-o*a)*t,e[3]=h*t,e[4]=(l*n-o*r)*t,e[5]=(o*d-i*n)*t,e[6]=m*t,e[7]=(s*r-c*n)*t,e[8]=(a*n-s*d)*t,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,i,a){const r=Math.cos(o),c=Math.sin(o);return this.set(n*r,n*c,-n*(r*i+c*a)+i+e,-s*c,s*r,-s*(-c*i+r*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const n=Math.cos(e),s=Math.sin(e),t=this.elements,o=t[0],i=t[3],a=t[6],r=t[1],c=t[4],l=t[7];return t[0]=n*o+s*r,t[3]=n*i+s*c,t[6]=n*a+s*l,t[1]=-s*o+n*r,t[4]=-s*i+n*c,t[7]=-s*a+n*l,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return(new this.constructor).fromArray(this.elements)}},j.prototype.isMatrix3=!0,Pe=class{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wt===void 0&&(wt=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),wt.width=e.width,wt.height=e.height;const n=wt.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wt}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},jl=0,k=class _Texture extends je{constructor(e=_Texture.DEFAULT_IMAGE,n=_Texture.DEFAULT_MAPPING,s=P,o=P,i=z,a=ms,r=V,c=hs,l=1,d=Me){super(),Object.defineProperty(this,"id",{value:jl++}),this.uuid=U(),this.name="",this.image=e,this.mipmaps=[],this.mapping=n,this.wrapS=s,this.wrapT=o,this.magFilter=i,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new t(0,0),this.repeat=new t(1,1),this.center=new t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const s=this.image;if(s.uuid===void 0&&(s.uuid=U()),!t&&e.images[s.uuid]===void 0){let t;if(Array.isArray(s)){t=[];for(let e=0,n=s.length;e<n;e++)s[e].isDataTexture?t.push(po(s[e].image)):t.push(po(s[e]))}else t=po(s);e.images[s.uuid]={uuid:s.uuid,url:t}}n.image=s.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case P:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case P:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}},k.DEFAULT_IMAGE=void 0,k.DEFAULT_MAPPING=Ro,k.prototype.isTexture=!0;function po(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?Pe.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}a=class{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,i=this.w,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o+t[12]*i,this.y=t[1]*n+t[5]*s+t[9]*o+t[13]*i,this.z=t[2]*n+t[6]*s+t[10]*o+t[14]*i,this.w=t[3]*n+t[7]*s+t[11]*o+t[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let v,n,s,o;const a=.01,m=.1,t=e.elements,f=t[0],i=t[4],r=t[8],c=t[1],p=t[5],l=t[9],d=t[2],u=t[6],g=t[10];if(Math.abs(i-c)<a&&Math.abs(r-d)<a&&Math.abs(l-u)<a){if(Math.abs(i+c)<m&&Math.abs(r+d)<m&&Math.abs(l+u)<m&&Math.abs(f+p+g-3)<m)return this.set(1,0,0,0),this;v=Math.PI;const e=(f+1)/2,t=(p+1)/2,h=(g+1)/2,b=(i+c)/4,j=(r+d)/4,y=(l+u)/4;return e>t&&e>h?e<a?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(e),s=b/n,o=j/n):t>h?t<a?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(t),n=b/s,o=y/s):h<a?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(h),n=j/o,s=y/o),this.set(n,s,o,v),this}let h=Math.sqrt((u-l)*(u-l)+(r-d)*(r-d)+(c-i)*(c-i));return Math.abs(h)<.001&&(h=1),this.x=(u-l)/h,this.y=(r-d)/h,this.z=(c-i)/h,this.w=Math.acos((f+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}},a.prototype.isVector4=!0,be=class extends je{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new a(0,0,e,t),this.scissorTest=!1,this.viewport=new a(0,0,e,t),n=n||{},this.texture=new k(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:z,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},be.prototype.isWebGLRenderTarget=!0,vl=class extends be{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}},vl.prototype.isWebGLMultisampleRenderTarget=!0,O=class{constructor(e=0,t=0,n=0,s=1){this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,o,i,a){let r=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3];const u=o[i+0],h=o[i+1],m=o[i+2],f=o[i+3];if(a===0){e[t+0]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=h,e[t+2]=m,e[t+3]=f;return}if(d!==f||r!==u||c!==h||l!==m){let e=1-a;const t=r*u+c*h+l*m+d*f,s=t>=0?1:-1,o=1-t*t;if(o>Number.EPSILON){const n=Math.sqrt(o),i=Math.atan2(n,t*s);e=Math.sin(e*i)/n,a=Math.sin(a*i)/n}const n=a*s;if(r=r*e+u*n,c=c*e+h*n,l=l*e+m*n,d=d*e+f*n,e===1-a){const e=1/Math.sqrt(r*r+c*c+l*l+d*d);r*=e,c*=e,l*=e,d*=e}}e[t]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,i){const a=n[s],r=n[s+1],c=n[s+2],l=n[s+3],d=o[i],u=o[i+1],h=o[i+2],m=o[i+3];return e[t]=a*m+l*d+r*h-c*u,e[t+1]=r*m+l*u+c*d-a*h,e[t+2]=c*m+l*h+a*u-r*d,e[t+3]=l*m-a*d-r*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const d=e._x,u=e._y,h=e._z,m=e._order,c=Math.cos,l=Math.sin,n=c(d/2),s=c(u/2),o=c(h/2),i=l(d/2),a=l(u/2),r=l(h/2);switch(m){case"XYZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"YXZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"ZXY":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"ZYX":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"YZX":this._x=i*s*o+n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o-i*a*r;break;case"XZY":this._x=i*s*o-n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o+i*a*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],c=t[9],l=t[2],d=t[6],o=t[10],u=n+s+o;if(u>0){const e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(d-c)*e,this._y=(a-l)*e,this._z=(r-i)*e}else if(n>s&&n>o){const e=2*Math.sqrt(1+n-s-o);this._w=(d-c)/e,this._x=.25*e,this._y=(i+r)/e,this._z=(a+l)/e}else if(s>o){const e=2*Math.sqrt(1+s-n-o);this._w=(a-l)/e,this._x=(i+r)/e,this._y=.25*e,this._z=(c+d)/e}else{const e=2*Math.sqrt(1+o-n-s);this._w=(r-i)/e,this._x=(a+l)/e,this._y=(c+d)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(M(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,i=e._w,a=t._x,r=t._y,c=t._z,l=t._w;return this._x=n*l+i*a+s*c-o*r,this._y=s*l+i*r+o*a-n*c,this._z=o*l+i*c+n*r-s*a,this._w=i*l-n*a-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,i=this._z,a=this._w;let n=a*e._w+s*e._x+o*e._y+i*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=a,this._x=s,this._y=o,this._z=i,this;const d=1-n*n;if(d<=Number.EPSILON){const e=1-t;return this._w=e*a+t*this._w,this._x=e*s+t*this._x,this._y=e*o+t*this._y,this._z=e*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(d),u=Math.atan2(l,n),r=Math.sin((1-t)*u)/l,c=Math.sin(t*u)/l;return this._w=a*r+this._w*c,this._x=s*r+this._x*c,this._y=o*r+this._y*c,this._z=i*r+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},O.prototype.isQuaternion=!0,e=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6]*o,this.y=t[1]*n+t[4]*s+t[7]*o,this.z=t[2]*n+t[5]*s+t[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,t=e.elements,i=1/(t[3]*n+t[7]*s+t[11]*o+t[15]);return this.x=(t[0]*n+t[4]*s+t[8]*o+t[12])*i,this.y=(t[1]*n+t[5]*s+t[9]*o+t[13])*i,this.z=(t[2]*n+t[6]*s+t[10]*o+t[14])*i,this}applyQuaternion(e){const i=this.x,a=this.y,r=this.z,t=e.x,n=e.y,s=e.z,o=e.w,c=o*i+n*r-s*a,l=o*a+s*i-t*r,d=o*r+t*a-n*i,u=-t*i-n*a-s*r;return this.x=c*o+u*-t+l*-s-d*-n,this.y=l*o+u*-n+d*-t-c*-s,this.z=d*o+u*-s+c*-n-l*-t,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o,this.y=t[1]*n+t[5]*s+t[9]*o,this.z=t[2]*n+t[6]*s+t[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,i=t.x,a=t.y,r=t.z;return this.x=s*r-o*a,this.y=o*i-n*r,this.z=n*a-s*i,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(M(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},e.prototype.isVector3=!0,es=new e,ho=new O,N=class{constructor(t=new e(1/0,1/0,1/0),n=new e(-(1/0),-(1/0),-(1/0))){this.min=t,this.max=n}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,o=-(1/0),i=-(1/0),a=-(1/0);for(let r=0,u=e.length;r<u;r+=3){const c=e[r],l=e[r+1],d=e[r+2];c<t&&(t=c),l<n&&(n=l),d<s&&(s=d),c>o&&(o=c),l>i&&(i=l),d>a&&(a=d)}return this.min.set(t,n,s),this.max.set(o,i,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,o=-(1/0),i=-(1/0),a=-(1/0);for(let r=0,u=e.count;r<u;r++){const c=e.getX(r),l=e.getY(r),d=e.getZ(r);c<t&&(t=c),l<n&&(n=l),d<s&&(s=d),c>o&&(o=c),l>i&&(i=l),d>a&&(a=d)}return this.min.set(t,n,s),this.max.set(o,i,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ct.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-(1/0),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new e),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new e),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),kn.copy(t.boundingBox),kn.applyMatrix4(e.matrixWorld),this.union(kn));const n=e.children;for(let e=0,t=n.length;e<t;e++)this.expandByObject(n[e]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(t,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new e),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ct),ct.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ge),gn.subVectors(this.max,Ge),We.subVectors(e.a,Ge),$e.subVectors(e.b,Ge),Ve.subVectors(e.c,Ge),ie.subVectors($e,We),ae.subVectors(Ve,$e),ve.subVectors(We,Ve);let t=[0,-ie.z,ie.y,0,-ae.z,ae.y,0,-ve.z,ve.y,ie.z,0,-ie.x,ae.z,0,-ae.x,ve.z,0,-ve.x,-ie.y,ie.x,0,-ae.y,ae.x,0,-ve.y,ve.x,0];return!!uo(t,We,$e,Ve,gn)&&(t=[1,0,0,0,1,0,0,0,1],!!uo(t,We,$e,Ve,gn)&&(fn.crossVectors(ie,ae),t=[fn.x,fn.y,fn.z],uo(t,We,$e,Ve,gn)))}clampPoint(t,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new e),n.copy(t).clamp(this.min,this.max)}distanceToPoint(e){const t=ct.copy(e).clamp(this.min,this.max);return t.sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(ct).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(G[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),G[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),G[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),G[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),G[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),G[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),G[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),G[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(G),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},N.prototype.isBox3=!0,G=[new e,new e,new e,new e,new e,new e,new e,new e],ct=new e,kn=new N,We=new e,$e=new e,Ve=new e,ie=new e,ae=new e,ve=new e,Ge=new e,gn=new e,fn=new e,ge=new e;function uo(e,t,n,s,o){for(let i=0,l=e.length-3;i<=l;i+=3){ge.fromArray(e,i);const d=o.x*Math.abs(ge.x)+o.y*Math.abs(ge.y)+o.z*Math.abs(ge.z),a=t.dot(ge),r=n.dot(ge),c=s.dot(ge);if(Math.max(-Math.max(a,r,c),Math.min(a,r,c))>d)return!1}return!0}fl=new N,co=new e,Bn=new e,Vn=new e,Ae=class{constructor(t=new e,n=-1){this.center=t,this.radius=n}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fl.setFromPoints(e).getCenter(n);let s=0;for(let t=0,o=e.length;t<o;t++)s=Math.max(s,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new e),n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new N),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Vn.subVectors(e,this.center);const t=Vn.lengthSq();if(t>this.radius*this.radius){const e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.add(Vn.multiplyScalar(n/e)),this.radius+=n}return this}union(e){return Bn.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(co.copy(e.center).add(Bn)),this.expandByPoint(co.copy(e.center).sub(Bn)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}},J=new e,Un=new e,rn=new e,ne=new e,Yn=new e,an=new e,Xn=new e,qe=class{constructor(t=new e,n=new e(0,0,-1)){this.origin=t,this.direction=n}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(t,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new e),n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,J)),this}closestPointToPoint(t,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new e),n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(s).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=J.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(J.copy(this.direction).multiplyScalar(t).add(this.origin),J.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Un.copy(e).add(t).multiplyScalar(.5),rn.copy(t).sub(e).normalize(),ne.copy(this.origin).sub(Un);const a=e.distanceTo(t)*.5,r=-this.direction.dot(rn),l=ne.dot(this.direction),c=-ne.dot(rn),u=ne.lengthSq(),m=Math.abs(1-r*r);let i,o,d,h;if(m>0)if(i=r*c-l,o=r*l-c,h=a*m,i>=0)if(o>=-h)if(o<=h){const e=1/m;i*=e,o*=e,d=i*(i+r*o+2*l)+o*(r*i+o+2*c)+u}else o=a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o=-a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o<=-h?(i=Math.max(0,-(-r*a+l)),o=i>0?-a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u):o<=h?(i=0,o=Math.min(Math.max(-a,-c),a),d=o*(o+2*c)+u):(i=Math.max(0,-(r*a+l)),o=i>0?a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u);else o=r>0?-a:a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(i).add(this.origin),s&&s.copy(rn).multiplyScalar(o).add(Un),d}intersectSphere(e,t){J.subVectors(e.center,this.origin);const n=J.dot(this.direction),o=J.dot(J)-n*n,i=e.radius*e.radius;if(o>i)return null;const a=Math.sqrt(i-o),s=n-a,r=n+a;return s<0&&r<0?null:s<0?this.at(r,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;const n=e.normal.dot(this.direction);return n*t<0}intersectBox(e,t){let n,s,i,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,o=this.origin;return l>=0?(n=(e.min.x-o.x)*l,s=(e.max.x-o.x)*l):(n=(e.max.x-o.x)*l,s=(e.min.x-o.x)*l),d>=0?(i=(e.min.y-o.y)*d,a=(e.max.y-o.y)*d):(i=(e.max.y-o.y)*d,a=(e.min.y-o.y)*d),n>a||i>s?null:((i>n||n!==n)&&(n=i),(a<s||s!==s)&&(s=a),u>=0?(r=(e.min.z-o.z)*u,c=(e.max.z-o.z)*u):(r=(e.max.z-o.z)*u,c=(e.min.z-o.z)*u),n>c||r>s?null:((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return this.intersectBox(e,J)!==null}intersectTriangle(e,t,n,s,o){Yn.subVectors(t,e),an.subVectors(n,e),Xn.crossVectors(Yn,an);let i=this.direction.dot(Xn),a;if(i>0){if(s)return null;a=1}else if(i<0)a=-1,i=-i;else return null;ne.subVectors(this.origin,e);const r=a*this.direction.dot(an.crossVectors(ne,an));if(r<0)return null;const c=a*this.direction.dot(Yn.cross(ne));if(c<0)return null;if(r+c>i)return null;const l=-a*ne.dot(Xn);return l<0?null:this.at(l/i,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}},o=class _Matrix4{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=i,g[9]=a,g[13]=r,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=m,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new _Matrix4).fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/we.setFromMatrixColumn(e,0).length(),o=1/we.setFromMatrixColumn(e,1).length(),i=1/we.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,c=e.x,l=e.y,d=e.z,i=Math.cos(c),n=Math.sin(c),a=Math.cos(l),s=Math.sin(l),r=Math.cos(d),o=Math.sin(d);if(e.order==="XYZ"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=-a*o,t[8]=s,t[1]=c+l*s,t[5]=e-d*s,t[9]=-n*a,t[2]=d-e*s,t[6]=l+c*s,t[10]=i*a}else if(e.order==="YXZ"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e+d*n,t[4]=l*n-c,t[8]=i*s,t[1]=i*o,t[5]=i*r,t[9]=-n,t[2]=c*n-l,t[6]=d+e*n,t[10]=i*a}else if(e.order==="ZXY"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e-d*n,t[4]=-i*o,t[8]=l+c*n,t[1]=c+l*n,t[5]=i*r,t[9]=d-e*n,t[2]=-i*s,t[6]=n,t[10]=i*a}else if(e.order==="ZYX"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=l*s-c,t[8]=e*s+d,t[1]=a*o,t[5]=d*s+e,t[9]=c*s-l,t[2]=-s,t[6]=n*a,t[10]=i*a}else if(e.order==="YZX"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=d-e*o,t[8]=l*o+c,t[1]=o,t[5]=i*r,t[9]=-n*r,t[2]=-s*r,t[6]=c*o+l,t[10]=e-d*o}else if(e.order==="XZY"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=-o,t[8]=s*r,t[1]=e*o+d,t[5]=i*r,t[9]=c*o-l,t[2]=l*o-c,t[6]=n*r,t[10]=d*o+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rl,e,tl)}lookAt(e,t,n){const s=this.elements;return F.subVectors(e,t),F.lengthSq()===0&&(F.z=1),F.normalize(),ue.crossVectors(n,F),ue.lengthSq()===0&&(Math.abs(n.z)===1?F.x+=1e-4:F.z+=1e-4,F.normalize(),ue.crossVectors(n,F)),ue.normalize(),Jt.crossVectors(F,ue),s[0]=ue.x,s[4]=Jt.x,s[8]=F.x,s[1]=ue.y,s[5]=Jt.y,s[9]=F.y,s[2]=ue.z,s[6]=Jt.z,s[10]=F.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[4],r=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],m=n[2],f=n[6],p=n[10],g=n[14],v=n[3],b=n[7],j=n[11],y=n[15],_=s[0],w=s[4],O=s[8],x=s[12],C=s[1],E=s[5],k=s[9],A=s[13],S=s[2],M=s[6],F=s[10],T=s[14],z=s[3],D=s[7],N=s[11],L=s[15];return o[0]=i*_+a*C+r*S+c*z,o[4]=i*w+a*E+r*M+c*D,o[8]=i*O+a*k+r*F+c*N,o[12]=i*x+a*A+r*T+c*L,o[1]=l*_+d*C+u*S+h*z,o[5]=l*w+d*E+u*M+h*D,o[9]=l*O+d*k+u*F+h*N,o[13]=l*x+d*A+u*T+h*L,o[2]=m*_+f*C+p*S+g*z,o[6]=m*w+f*E+p*M+g*D,o[10]=m*O+f*k+p*F+g*N,o[14]=m*x+f*A+p*T+g*L,o[3]=v*_+b*C+j*S+y*z,o[7]=v*w+b*E+j*M+y*D,o[11]=v*O+b*k+j*F+y*N,o[15]=v*x+b*A+j*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],i=e[1],a=e[5],r=e[9],c=e[13],l=e[2],d=e[6],u=e[10],h=e[14],m=e[3],f=e[7],p=e[11],g=e[15];return m*(+o*r*d-s*c*d-o*a*u+n*c*u+s*a*h-n*r*h)+f*(+t*r*h-t*c*u+o*i*u-s*i*h+s*c*l-o*r*l)+p*(+t*c*d-t*a*h-o*i*d+n*i*h+o*a*l-n*c*l)+g*(-s*a*l-t*r*d+t*a*u+s*i*d-n*i*u+n*r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],d=e[4],f=e[5],r=e[6],c=e[7],l=e[8],i=e[9],u=e[10],h=e[11],m=e[12],a=e[13],p=e[14],g=e[15],b=i*p*c-a*u*c+a*r*h-f*p*h-i*r*g+f*u*g,j=m*u*c-l*p*c-m*r*h+d*p*h+l*r*g-d*u*g,y=l*a*c-m*i*c+m*f*h-d*a*h-l*f*g+d*i*g,_=m*i*r-l*a*r-m*f*u+d*a*u+l*f*p-d*i*p,w=t*b+n*j+s*y+o*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=b*v,e[1]=(a*u*o-i*p*o-a*s*h+n*p*h+i*s*g-n*u*g)*v,e[2]=(f*p*o-a*r*o+a*s*c-n*p*c-f*s*g+n*r*g)*v,e[3]=(i*r*o-f*u*o-i*s*c+n*u*c+f*s*h-n*r*h)*v,e[4]=j*v,e[5]=(l*p*o-m*u*o+m*s*h-t*p*h-l*s*g+t*u*g)*v,e[6]=(m*r*o-d*p*o-m*s*c+t*p*c+d*s*g-t*r*g)*v,e[7]=(d*u*o-l*r*o+l*s*c-t*u*c-d*s*h+t*r*h)*v,e[8]=y*v,e[9]=(m*i*o-l*a*o-m*n*h+t*a*h+l*n*g-t*i*g)*v,e[10]=(d*a*o-m*f*o+m*n*c-t*a*c-d*n*g+t*f*g)*v,e[11]=(l*f*o-d*i*o-l*n*c+t*i*c+d*n*h-t*f*h)*v,e[12]=_*v,e[13]=(l*a*s-m*i*s+m*n*u-t*a*u-l*n*p+t*i*p)*v,e[14]=(m*f*s-d*a*s-m*n*r+t*a*r+d*n*p-t*f*p)*v,e[15]=(d*i*s-l*f*s+l*n*r-t*i*r-d*n*u+t*f*u)*v,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),c=1-a,r=e.x,o=e.y,n=e.z,i=c*r,l=c*o;return this.set(i*r+a,i*o-s*n,i*n+s*o,0,i*o+s*n,l*o+a,l*n-s*r,0,i*n-s*o,l*n+s*r,c*n*n+a,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,i=t._y,r=t._z,c=t._w,w=o+o,d=i+i,a=r+r,_=o*w,y=o*d,m=o*a,f=i*d,p=i*a,g=r*a,v=c*w,b=c*d,j=c*a,h=n.x,u=n.y,l=n.z;return s[0]=(1-(f+g))*h,s[1]=(y+j)*h,s[2]=(m-b)*h,s[3]=0,s[4]=(y-j)*u,s[5]=(1-(_+g))*u,s[6]=(p+v)*u,s[7]=0,s[8]=(m+b)*l,s[9]=(p-v)*l,s[10]=(1-(_+f))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=we.set(s[0],s[1],s[2]).length();const c=we.set(s[4],s[5],s[6]).length(),l=we.set(s[8],s[9],s[10]).length(),d=this.determinant();d<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],R.copy(this);const i=1/o,a=1/c,r=1/l;return R.elements[0]*=i,R.elements[1]*=i,R.elements[2]*=i,R.elements[4]*=a,R.elements[5]*=a,R.elements[6]*=a,R.elements[8]*=r,R.elements[9]*=r,R.elements[10]*=r,t.setFromRotationMatrix(R),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,s,o,i){i===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,r=2*o/(t-e),c=2*o/(n-s),l=(t+e)/(t-e),d=(n+s)/(n-s),u=-(i+o)/(i-o),h=-2*i*o/(i-o);return a[0]=r,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,o,i){const a=this.elements,r=1/(t-e),c=1/(n-s),l=1/(i-o),d=(t+e)*r,u=(n+s)*c,h=(i+o)*l;return a[0]=2*r,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},o.prototype.isMatrix4=!0,we=new e,R=new o,rl=new e(0,0,0),tl=new e(1,1,1),ue=new e,Jt=new e,F=new e,io=new o,no=new O,Bt=class _Euler{constructor(e=0,t=0,n=0,s=_Euler.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._order=s||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const s=e.elements,o=s[0],r=s[4],c=s[8],l=s[1],i=s[5],d=s[9],u=s[2],h=s[6],a=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(M(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,a),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,i),this._z=0);break;case"YXZ":this._x=Math.asin(-M(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,a),this._z=Math.atan2(l,i)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(M(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,a),this._z=Math.atan2(-r,i)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-M(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,a),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,i));break;case"YZX":this._z=Math.asin(M(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,i),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,a));break;case"XZY":this._z=Math.asin(-M(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,i),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,a),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(t){return t?t.set(this._x,this._y,this._z):new e(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},Bt.prototype.isEuler=!0,Bt.DefaultOrder="XYZ",Bt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],ic=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},sc=0,Xs=new e,Ne=new O,Q=new o,Lt=new e,at=new e,nc=new e,Pr=new O,Ws=new e(1,0,0),$s=new e(0,1,0),Bs=new e(0,0,1),Lr={type:"added"},Ps={type:"removed"},r=class _Object3D extends je{constructor(){super(),Object.defineProperty(this,"id",{value:sc++}),this.uuid=U(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_Object3D.DefaultUp.clone();const s=new e,t=new Bt,n=new O,i=new e(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:s},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new o},normalMatrix:{value:new j}}),this.matrix=new o,this.matrixWorld=new o,this.matrixAutoUpdate=_Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ne.setFromAxisAngle(e,t),this.quaternion.multiply(Ne),this}rotateOnWorldAxis(e,t){return Ne.setFromAxisAngle(e,t),this.quaternion.premultiply(Ne),this}rotateX(e){return this.rotateOnAxis(Ws,e)}rotateY(e){return this.rotateOnAxis($s,e)}rotateZ(e){return this.rotateOnAxis(Bs,e)}translateOnAxis(e,t){return Xs.copy(e).applyQuaternion(this.quaternion),this.position.add(Xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ws,e)}translateY(e){return this.translateOnAxis($s,e)}translateZ(e){return this.translateOnAxis(Bs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Q.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lt.copy(e):Lt.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),at.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Q.lookAt(at,Lt,this.up):Q.lookAt(Lt,at,this.up),this.quaternion.setFromRotationMatrix(Q),s&&(Q.extractRotation(s.matrixWorld),Ne.setFromRotationMatrix(Q),this.quaternion.premultiply(Ne.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lr)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ps)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ps)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Q.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Q.multiply(e.parent.matrixWorld)),e.applyMatrix4(Q),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const i=this.children[n],s=i.getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new e),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new O),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(at,e,nc),e}getWorldScale(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new e),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(at,Pr,t),t}getWorldDirection(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new e),this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const t={};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.castShadow===!0&&(t.castShadow=!0),this.receiveShadow===!0&&(t.receiveShadow=!0),this.visible===!1&&(t.visible=!1),this.frustumCulled===!1&&(t.frustumCulled=!1),this.renderOrder!==0&&(t.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(t.matrixAutoUpdate=!1),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(t.instanceColor=this.instanceColor.toJSON()));function s(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isMesh||this.isLine||this.isPoints){t.geometry=s(e.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const t=n.shapes;if(Array.isArray(t))for(let n=0,o=t.length;n<o;n++){const i=t[n];s(e.shapes,i)}else s(e.shapes,t)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let t=0,o=this.material.length;t<o;t++)n.push(s(e.materials,this.material[t]));t.material=n}else t.material=s(e.materials,this.material);if(this.children.length>0){t.children=[];for(let n=0;n<this.children.length;n++)t.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){t.animations=[];for(let n=0;n<this.animations.length;n++){const o=this.animations[n];t.animations.push(s(e.animations,o))}}if(i){const t=o(e.geometries),s=o(e.materials),i=o(e.textures),a=o(e.images),r=o(e.shapes),c=o(e.skeletons),l=o(e.animations);t.length>0&&(n.geometries=t),s.length>0&&(n.materials=s),i.length>0&&(n.textures=i),a.length>0&&(n.images=a),r.length>0&&(n.shapes=r),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l)}return n.object=t,n;function o(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){const n=e.children[t];this.add(n.clone())}return this}},r.DefaultUp=new e(0,1,0),r.DefaultMatrixAutoUpdate=!0,r.prototype.isObject3D=!0,Cs=new e,Tr=new e,Sr=new j,Y=class{constructor(t=new e(1,0,0),n=0){this.normal=t,this.constant=n}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Cs.subVectors(n,t).cross(Tr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(t,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new e),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new e);const o=t.delta(Cs),i=this.normal.dot(o);if(i===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(o).multiplyScalar(s).add(t.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new e),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sr.getNormalMatrix(e),s=this.coplanarPoint(Cs).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}},Y.prototype.isPlane=!0,B=new e,X=new e,Fs=new e,Z=new e,Te=new e,Ue=new e,ki=new e,ks=new e,Es=new e,Os=new e,S=class _Triangle{constructor(t=new e,n=new e,s=new e){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),o=new e),o.subVectors(s,n),B.subVectors(t,n),o.cross(B);const i=o.lengthSq();return i>0?o.multiplyScalar(1/Math.sqrt(i)):o.set(0,0,0)}static getBarycoord(t,n,s,o,i){B.subVectors(o,n),X.subVectors(s,n),Fs.subVectors(t,n);const r=B.dot(B),a=B.dot(X),c=B.dot(Fs),l=X.dot(X),d=X.dot(Fs),u=r*l-a*a;if(i===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),i=new e),u===0)return i.set(-2,-1,-1);const h=1/u,m=(l*c-a*d)*h,f=(r*d-a*c)*h;return i.set(1-m-f,f,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Z),Z.x>=0&&Z.y>=0&&Z.x+Z.y<=1}static getUV(e,t,n,s,o,i,a,r){return this.getBarycoord(e,t,n,s,Z),r.set(0,0),r.addScaledVector(o,Z.x),r.addScaledVector(i,Z.y),r.addScaledVector(a,Z.z),r}static isFrontFacing(e,t,n,s){return B.subVectors(n,t),X.subVectors(e,t),B.cross(X).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return B.subVectors(this.c,this.b),X.subVectors(this.a,this.b),B.cross(X).length()*.5}getMidpoint(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new e),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Y),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,o){return _Triangle.getUV(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return _Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(t,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new e);const i=this.a,u=this.b,m=this.c;let h,a;Te.subVectors(u,i),Ue.subVectors(m,i),ks.subVectors(t,i);const r=Te.dot(ks),c=Ue.dot(ks);if(r<=0&&c<=0)return n.copy(i);Es.subVectors(t,u);const s=Te.dot(Es),l=Ue.dot(Es);if(s>=0&&l<=s)return n.copy(u);const f=r*l-s*c;if(f<=0&&r>=0&&s<=0)return h=r/(r-s),n.copy(i).addScaledVector(Te,h);Os.subVectors(t,m);const d=Te.dot(Os),o=Ue.dot(Os);if(o>=0&&d<=o)return n.copy(m);const p=d*c-r*o;if(p<=0&&c>=0&&o<=0)return a=c/(c-o),n.copy(i).addScaledVector(Ue,a);const g=s*o-d*l;if(g<=0&&l-s>=0&&d-o>=0)return ki.subVectors(m,u),a=(l-s)/(l-s+(d-o)),n.copy(u).addScaledVector(ki,a);const v=1/(g+p+f);return h=p*v,a=f*v,n.copy(i).addScaledVector(Te,h).addScaledVector(Ue,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rr=0;function y(){Object.defineProperty(this,"id",{value:Rr++}),this.uuid=U(),this.name="",this.type="Material",this.fog=!0,this.blending=Xe,this.side=Tt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_o,this.blendDst=Oo,this.blendEquation=De,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}y.prototype=Object.assign(Object.create(je.prototype),{constructor:y,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e===void 0)return;for(const s in e){const t=e[s];if(t===void 0){console.warn("THREE.Material: '"+s+"' parameter is undefined.");continue}if(s==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Hs;continue}const n=this[s];if(n===void 0){console.warn("THREE."+this.type+": '"+s+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[s]=t}},toJSON:function(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Xe&&(t.blending=this.blending),this.side!==Tt&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}if(n){const n=s(e.textures),o=s(e.images);n.length>0&&(t.textures=n),o.length>0&&(t.images=o)}return t},clone:function(){return(new this.constructor).copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const e=t.length;n=new Array(e);for(let s=0;s!==e;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(y.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Vs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},H={h:0,s:0,l:0},St={h:0,s:0,l:0};function Us(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Ks(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}s=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Z1(e,1),t=M(t,0,1),n=M(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Us(o,s,e+1/3),this.g=Us(o,s,e),this.b=Us(o,s,e-1/3)}return this}setStyle(e){function n(t){if(t===void 0)return;parseFloat(t)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let t;if(t=/^((?:rgb|hsl)a?)\(([^)]*)\)/.exec(e)){let e;const o=t[1],s=t[2];switch(o){case"rgb":case"rgba":if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,n(e[4]),this;if(e=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,n(e[4]),this;break;case"hsl":case"hsla":if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const t=parseFloat(e[1])/360,s=parseInt(e[2],10)/100,o=parseInt(e[3],10)/100;return n(e[4]),this.setHSL(t,s,o)}break}}else if(t=/^#([A-Fa-f\d]+)$/.exec(e)){const e=t[1],n=e.length;if(n===3)return this.r=parseInt(e.charAt(0)+e.charAt(0),16)/255,this.g=parseInt(e.charAt(1)+e.charAt(1),16)/255,this.b=parseInt(e.charAt(2)+e.charAt(2),16)/255,this;if(n===6)return this.r=parseInt(e.charAt(0)+e.charAt(1),16)/255,this.g=parseInt(e.charAt(2)+e.charAt(3),16)/255,this.b=parseInt(e.charAt(4)+e.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Vs[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const i=this.r,t=this.g,n=this.b,s=Math.max(i,t,n),a=Math.min(i,t,n);let o,r;const c=(a+s)/2;if(a===s)o=0,r=0;else{const e=s-a;switch(r=c<=.5?e/(s+a):e/(2-s-a),s){case i:o=(t-n)/e+(t<n?6:0);break;case t:o=(n-i)/e+2;break;case n:o=(i-t)/e+4;break}o/=6}return e.h=o,e.s=r,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(H),H.h+=e,H.s+=t,H.l+=n,this.setHSL(H.h,H.s,H.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(H),e.getHSL(St);const n=yo(H.h,St.h,t),s=yo(H.s,St.s,t),o=yo(H.l,St.l,t);return this.setHSL(n,s,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}},s.NAMES=Vs,s.prototype.isColor=!0,s.prototype.r=1,s.prototype.g=1,s.prototype.b=1,vs=class extends y{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new s(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}},vs.prototype.isMeshBasicMaterial=!0,l=new e,Pt=new t,f=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ft,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,a=e.length;i<a;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new s),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const n=this.array;let s=0;for(let o=0,a=e.length;o<a;o++){let i=e[o];i===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),i=new t),n[s++]=i.x,n[s++]=i.y}return this}copyVector3sArray(t){const n=this.array;let s=0;for(let i=0,a=t.length;i<a;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new e),n[s++]=o.x,n[s++]=o.y,n[s++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let o=0,i=e.length;o<i;o++){let s=e[o];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),s=new a),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXY(t,Pt.x,Pt.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)l.fromBufferAttribute(this,t),l.applyMatrix3(e),this.setXYZ(t,l.x,l.y,l.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)l.x=this.getX(t),l.y=this.getY(t),l.z=this.getZ(t),l.applyMatrix4(e),this.setXYZ(t,l.x,l.y,l.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)l.x=this.getX(t),l.y=this.getY(t),l.z=this.getZ(t),l.applyNormalMatrix(e),this.setXYZ(t,l.x,l.y,l.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)l.x=this.getX(t),l.y=this.getY(t),l.z=this.getZ(t),l.transformDirection(e),this.setXYZ(t,l.x,l.y,l.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ft&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}},f.prototype.isBufferAttribute=!0,Js=class extends f{constructor(e,t,n){super(new Uint16Array(e),t,n)}},eo=class extends f{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Oc=class extends f{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Oc.prototype.isFloat16BufferAttribute=!0,b=class extends f{constructor(e,t,n){super(new Float32Array(e),t,n)}};function zc(e){if(e.length===0)return-(1/0);let t=e[0];for(let n=1,s=e.length;n<s;++n)e[n]>t&&(t=e[n]);return t}Qc=0,$=new o,ns=new r,ye=new e,T=new N,ut=new N,g=new e,h=class _BufferGeometry extends je{constructor(){super(),Object.defineProperty(this,"id",{value:Qc++}),this.uuid=U(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zc(e)>65535?eo:Js)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const t=(new j).getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return $.makeRotationX(e),this.applyMatrix4($),this}rotateY(e){return $.makeRotationY(e),this.applyMatrix4($),this}rotateZ(e){return $.makeRotationZ(e),this.applyMatrix4($),this}translate(e,t,n){return $.makeTranslation(e,t,n),this.applyMatrix4($),this}scale(e,t,n){return $.makeScale(e,t,n),this.applyMatrix4($),this}lookAt(e){return ns.lookAt(e),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ye).negate(),this.translate(ye.x,ye.y,ye.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new b(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new N);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new e(-(1/0),-(1/0),-(1/0)),new e(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];T.setFromBufferAttribute(s),this.morphTargetsRelative?(g.addVectors(this.boundingBox.min,T.min),this.boundingBox.expandByPoint(g),g.addVectors(this.boundingBox.max,T.max),this.boundingBox.expandByPoint(g)):(this.boundingBox.expandByPoint(T.min),this.boundingBox.expandByPoint(T.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ae);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new e,1/0);return}if(t){const s=this.boundingSphere.center;if(T.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];ut.setFromBufferAttribute(s),this.morphTargetsRelative?(g.addVectors(T.min,ut.min),T.expandByPoint(g),g.addVectors(T.max,ut.max),T.expandByPoint(g)):(T.expandByPoint(ut.min),T.expandByPoint(ut.max))}T.getCenter(s);let e=0;for(let n=0,o=t.count;n<o;n++)g.fromBufferAttribute(t,n),e=Math.max(e,s.distanceToSquared(g));if(n)for(let o=0,a=n.length;o<a;o++){const i=n[o],r=this.morphTargetsRelative;for(let n=0,o=i.count;n<o;n++)g.fromBufferAttribute(i,n),r&&(ye.fromBufferAttribute(t,n),g.add(ye)),e=Math.max(e,s.distanceToSquared(g))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const x=this.index,n=this.attributes;if(x===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=x.array,v=n.position.array,k=n.normal.array,y=n.uv.array,w=v.length/3;n.tangent===void 0&&this.setAttribute("tangent",new f(new Float32Array(4*w),4));const u=n.tangent.array,r=[],l=[];for(let t=0;t<w;t++)r[t]=new e,l[t]=new e;const b=new e,h=new e,d=new e,j=new t,i=new t,o=new t,p=new e,g=new e;function E(e,t,n){b.fromArray(v,e*3),h.fromArray(v,t*3),d.fromArray(v,n*3),j.fromArray(y,e*2),i.fromArray(y,t*2),o.fromArray(y,n*2),h.sub(b),d.sub(b),i.sub(j),o.sub(j);const s=1/(i.x*o.y-o.x*i.y);if(!isFinite(s))return;p.copy(h).multiplyScalar(o.y).addScaledVector(d,-i.y).multiplyScalar(s),g.copy(d).multiplyScalar(i.x).addScaledVector(h,-o.x).multiplyScalar(s),r[e].add(p),r[t].add(p),r[n].add(p),l[e].add(g),l[t].add(g),l[n].add(g)}let a=this.groups;a.length===0&&(a=[{start:0,count:s.length}]);for(let e=0,o=a.length;e<o;++e){const t=a[e],n=t.start,i=t.count;for(let e=n,t=n+i;e<t;e+=3)E(s[e+0],s[e+1],s[e+2])}const c=new e,O=new e,m=new e,C=new e;function _(e){m.fromArray(k,e*3),C.copy(m);const t=r[e];c.copy(t),c.sub(m.multiplyScalar(m.dot(t))).normalize(),O.crossVectors(C,t);const n=O.dot(l[e]),s=n<0?-1:1;u[e*4]=c.x,u[e*4+1]=c.y,u[e*4+2]=c.z,u[e*4+3]=s}for(let e=0,o=a.length;e<o;++e){const t=a[e],n=t.start,i=t.count;for(let e=n,t=n+i;e<t;e+=3)_(s[e+0]),_(s[e+1]),_(s[e+2])}}computeVertexNormals(){const n=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new f(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let e=0,t=o.count;e<t;e++)o.setXYZ(e,0,0,0);const l=new e,i=new e,d=new e,a=new e,r=new e,c=new e,s=new e,u=new e;if(n)for(let e=0,p=n.count;e<p;e+=3){const h=n.getX(e+0),m=n.getX(e+1),f=n.getX(e+2);l.fromBufferAttribute(t,h),i.fromBufferAttribute(t,m),d.fromBufferAttribute(t,f),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),a.fromBufferAttribute(o,h),r.fromBufferAttribute(o,m),c.fromBufferAttribute(o,f),a.add(s),r.add(s),c.add(s),o.setXYZ(h,a.x,a.y,a.z),o.setXYZ(m,r.x,r.y,r.z),o.setXYZ(f,c.x,c.y,c.z)}else for(let e=0,n=t.count;e<n;e+=3)l.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),d.fromBufferAttribute(t,e+2),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),o.setXYZ(e+0,s.x,s.y,s.z),o.setXYZ(e+1,s.x,s.y,s.z),o.setXYZ(e+2,s.x,s.y,s.z);this.normalizeNormals(),o.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const c=n[s],o=c.array,i=e.attributes[s],a=i.array,r=i.itemSize*t,l=Math.min(a.length,o.length-r);for(let e=0,t=r;e<l;e++,t++)o[t]=a[e]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)g.fromBufferAttribute(e,t),g.normalize(),e.setXYZ(t,g.x,g.y,g.z)}toNonIndexed(){function t(e,t){const s=e.array,n=e.itemSize,a=e.normalized,o=new s.constructor(t.length*n);let i=0,r=0;for(let e=0,a=t.length;e<a;e++){i=t[e]*n;for(let e=0;e<n;e++)o[r++]=s[i++]}return new f(o,n,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _BufferGeometry,n=this.index.array,s=this.attributes;for(const o in s){const i=s[o],a=t(i,n);e.setAttribute(o,a)}const o=this.morphAttributes;for(const s in o){const i=[],a=o[s];for(let e=0,s=a.length;e<s;e++){const o=a[e],r=t(o,n);i.push(r)}e.morphAttributes[s]=i}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const t in s){const n=s[t];e.data.attributes[t]=n.toJSON(e.data)}const o={};let i=!1;for(const n in this.morphAttributes){const s=this.morphAttributes[n],t=[];for(let n=0,o=s.length;n<o;n++){const i=s[n];t.push(i.toJSON(e.data))}t.length>0&&(o[n]=t,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const n=this.boundingSphere;return n!==null&&(e.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),e}clone(){return(new _BufferGeometry).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const e in s){const n=s[e];this.setAttribute(e,n.clone(t))}const o=e.morphAttributes;for(const e in o){const n=[],s=o[e];for(let e=0,o=s.length;e<o;e++)n.push(s[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let e=0,n=i.length;e<n;e++){const t=i[e];this.addGroup(t.start,t.count,t.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},h.prototype.isBufferGeometry=!0,mo=new o,Be=new qe,Nn=new Ae,se=new e,te=new e,oe=new e,Kn=new e,Gn=new e,Zn=new e,Qt=new e,Yt=new e,Kt=new e,Wt=new t,$t=new t,Vt=new t,ls=new e,Ot=new e,D=class extends r{constructor(e=new h,t=new vs){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){{const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){const s=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=t}}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const s=this.geometry,o=this.material,i=this.matrixWorld;if(o===void 0)return;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nn.copy(s.boundingSphere),Nn.applyMatrix4(i),e.ray.intersectsSphere(Nn)===!1)return;if(mo.copy(i).invert(),Be.copy(e.ray).applyMatrix4(mo),s.boundingBox!==null&&Be.intersectsBox(s.boundingBox)===!1)return;let n;if(s.isBufferGeometry){{const a=s.index,r=s.attributes.position,c=s.morphAttributes.position,l=s.morphTargetsRelative,d=s.attributes.uv,u=s.attributes.uv2,h=s.groups,i=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,f=h.length;m<f;m++){const s=h[m],p=o[s.materialIndex],g=Math.max(s.start,i.start),v=Math.min(s.start+s.count,i.start+i.count);for(let o=g,i=v;o<i;o+=3){const h=a.getX(o),m=a.getX(o+1),f=a.getX(o+2);n=us(this,p,e,Be,r,c,l,d,u,h,m,f),n&&(n.faceIndex=Math.floor(o/3),n.face.materialIndex=s.materialIndex,t.push(n))}}else{const s=Math.max(0,i.start),h=Math.min(a.count,i.start+i.count);for(let i=s,m=h;i<m;i+=3){const f=a.getX(i),p=a.getX(i+1),g=a.getX(i+2);n=us(this,o,e,Be,r,c,l,d,u,f,p,g),n&&(n.faceIndex=Math.floor(i/3),t.push(n))}}else if(r!==void 0)if(Array.isArray(o))for(let a=0,m=h.length;a<m;a++){const s=h[a],f=o[s.materialIndex],p=Math.max(s.start,i.start),g=Math.min(s.start+s.count,i.start+i.count);for(let o=p,i=g;o<i;o+=3){const a=o,h=o+1,m=o+2;n=us(this,f,e,Be,r,c,l,d,u,a,h,m),n&&(n.faceIndex=Math.floor(o/3),n.face.materialIndex=s.materialIndex,t.push(n))}}else{const s=Math.max(0,i.start),a=Math.min(r.count,i.start+i.count);for(let i=s,h=a;i<h;i+=3){const m=i,f=i+1,p=i+2;n=us(this,o,e,Be,r,c,l,d,u,m,f,p),n&&(n.faceIndex=Math.floor(i/3),t.push(n))}}}}else s.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},D.prototype.isMesh=!0;function x1(e,t,n,s,o,i,a,r){let c;if(t.side===v?c=s.intersectTriangle(a,i,o,!0,r):c=s.intersectTriangle(o,i,a,t.side!==pt,r),c===null)return null;Ot.copy(r),Ot.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Ot);return l<n.near||l>n.far?null:{distance:l,point:Ot.clone(),object:e}}function us(n,s,o,i,a,r,c,l,d,u,h,m){se.fromBufferAttribute(a,u),te.fromBufferAttribute(a,h),oe.fromBufferAttribute(a,m);const p=n.morphTargetInfluences;if(s.morphTargets&&r&&p){Qt.set(0,0,0),Yt.set(0,0,0),Kt.set(0,0,0);for(let t=0,s=r.length;t<s;t++){const e=p[t],n=r[t];if(e===0)continue;Kn.fromBufferAttribute(n,u),Gn.fromBufferAttribute(n,h),Zn.fromBufferAttribute(n,m),c?(Qt.addScaledVector(Kn,e),Yt.addScaledVector(Gn,e),Kt.addScaledVector(Zn,e)):(Qt.addScaledVector(Kn.sub(se),e),Yt.addScaledVector(Gn.sub(te),e),Kt.addScaledVector(Zn.sub(oe),e))}se.add(Qt),te.add(Yt),oe.add(Kt)}n.isSkinnedMesh&&s.skinning&&(n.boneTransform(u,se),n.boneTransform(h,te),n.boneTransform(m,oe));const f=x1(n,s,o,i,se,te,oe,ls);if(f){l&&(Wt.fromBufferAttribute(l,u),$t.fromBufferAttribute(l,h),Vt.fromBufferAttribute(l,m),f.uv=S.getUV(ls,se,te,oe,Wt,$t,Vt,new t)),d&&(Wt.fromBufferAttribute(d,u),$t.fromBufferAttribute(d,h),Vt.fromBufferAttribute(d,m),f.uv2=S.getUV(ls,se,te,oe,Wt,$t,Vt,new t));const n={a:u,b:h,c:m,normal:new e,materialIndex:0};S.getNormal(se,te,oe,n.normal),f.face=n}return f}fs=class extends h{constructor(t=1,n=1,s=1,o=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:i,depthSegments:a};const f=this;o=Math.floor(o),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,m=0;r("z","y","x",-1,-1,s,n,t,a,i,0),r("z","y","x",1,-1,s,n,-t,a,i,1),r("x","z","y",1,1,t,s,n,o,a,2),r("x","z","y",1,-1,t,s,-n,o,a,3),r("x","y","z",1,-1,t,n,s,o,i,4),r("x","y","z",-1,-1,t,n,-s,o,i,5),this.setIndex(l),this.setAttribute("position",new b(u,3)),this.setAttribute("normal",new b(h,3)),this.setAttribute("uv",new b(d,2));function r(t,n,s,o,i,a,r,p,g,v,b){const O=a/g,x=r/v,C=a/2,E=r/2,k=p/2,y=g+1,A=v+1;let w=0,_=0;const j=new e;for(let e=0;e<A;e++){const a=e*x-E;for(let r=0;r<y;r++){const c=r*O-C;j[t]=c*o,j[n]=a*i,j[s]=k,u.push(j.x,j.y,j.z),j[t]=0,j[n]=0,j[s]=p>0?1:-1,h.push(j.x,j.y,j.z),d.push(r/g),d.push(1-e/v),w+=1}}for(let e=0;e<v;e++)for(let t=0;t<g;t++){const o=c+t+y*e,n=c+t+y*(e+1),i=c+(t+1)+y*(e+1),s=c+(t+1)+y*e;l.push(o,n,s),l.push(n,i,s),_+=6}f.addGroup(m,_,b),m+=_,c+=w}}};function vt(e){const t={};for(const n in e){t[n]={};for(const o in e[n]){const s=e[n][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[n][o]=s.clone():Array.isArray(s)?t[n][o]=s.slice():t[n][o]=s}}return t}function C(e){const t={};for(let n=0;n<e.length;n++){const s=vt(e[n]);for(const e in s)t[e]=s[e]}return t}Tu={clone:vt,merge:C},i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ce=class extends y{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=i1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vt(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s],n=o.value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ce.prototype.isShaderMaterial=!0,os=class extends r{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new o,this.projectionMatrix=new o,this.projectionMatrixInverse=new o}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new e),this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}},os.prototype.isCamera=!0,E=class extends os{constructor(e=50,t=1,n=.1,s=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,o,i){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let t=i*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const e=this.view;if(this.view!==null&&this.view.enabled){const i=e.fullWidth,a=e.fullHeight;o+=e.offsetX*s/i,t-=e.offsetY*n/a,s*=e.width/i,n*=e.height/a}const a=this.filmOffset;a!==0&&(o+=i*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,i,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},E.prototype.isPerspectiveCamera=!0,Oe=90,xe=1,js=class extends r{constructor(t,n,s){if(super(),this.type="CubeCamera",s.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=s;const o=new E(Oe,xe,t,n);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new e(1,0,0)),this.add(o);const i=new E(Oe,xe,t,n);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new e(-1,0,0)),this.add(i);const a=new E(Oe,xe,t,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new e(0,1,0)),this.add(a);const r=new E(Oe,xe,t,n);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new e(0,-1,0)),this.add(r);const c=new E(Oe,xe,t,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new e(0,0,1)),this.add(c);const l=new E(Oe,xe,t,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new e(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,o,i,a,r,c]=this.children,l=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,i),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,r),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=l}},Mt=class extends k{constructor(e,t,n,s,o,i,a,r,c,l){e=e!==void 0?e:[],t=t!==void 0?t:zs,a=a!==void 0?a:pe,super(e,t,n,s,o,i,a,r,c,l),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mt.prototype.isCubeTexture=!0,Ko=class extends be{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Mt(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:z,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=V,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fs(5,5,5),o=new ce({name:"CubemapFromEquirect",uniforms:vt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:v,blending:jt});o.uniforms.tEquirect.value=t;const s=new D(i,o),a=t.minFilter;t.minFilter===ms&&(t.minFilter=z);const r=new js(1,10,this);return r.update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(o)}},Ko.prototype.isWebGLCubeRenderTarget=!0,qo=class extends k{constructor(e,t,n,s,o,i,a,r,c,l,d,u){super(null,i,a,r,c,l,s,o,d,u),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:x,this.minFilter=l!==void 0?l:x,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}},qo.prototype.isDataTexture=!0,ke=new Ae,Dt=new e,Nt=class{constructor(e=new Y,t=new Y,n=new Y,s=new Y,o=new Y,i=new Y){this.planes=[e,t,n,s,o,i]}set(e,t,n,s,o,i){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const n=this.planes,t=e.elements,b=t[0],f=t[1],d=t[2],a=t[3],l=t[4],c=t[5],r=t[6],i=t[7],u=t[8],h=t[9],m=t[10],o=t[11],p=t[12],g=t[13],v=t[14],s=t[15];return n[0].setComponents(a-b,i-l,o-u,s-p).normalize(),n[1].setComponents(a+b,i+l,o+u,s+p).normalize(),n[2].setComponents(a+f,i+c,o+h,s+g).normalize(),n[3].setComponents(a-f,i-c,o-h,s-g).normalize(),n[4].setComponents(a-d,i-r,o-m,s-v).normalize(),n[5].setComponents(a+d,i+r,o+m,s+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ke.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ke)}intersectsSprite(e){return ke.center.set(0,0,0),ke.radius=.7071067811865476,ke.applyMatrix4(e.matrixWorld),this.intersectsSphere(ke)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let e=0;e<6;e++){const o=t[e].distanceToPoint(n);if(o<s)return!1}return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if(Dt.x=n.normal.x>0?e.max.x:e.min.x,Dt.y=n.normal.y>0?e.max.y:e.min.y,Dt.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Dt)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}};function Rd(){let e=null,t=!1,n=null,s=null;function o(t,i){n(t,i),s=e.requestAnimationFrame(o)}return{start:function(){if(t===!0)return;if(n===null)return;s=e.requestAnimationFrame(o),t=!0},stop:function(){e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function I1(e,t){const s=t.isWebGL2,n=new WeakMap;function o(t,n){const o=t.array,r=t.usage,a=e.createBuffer();e.bindBuffer(n,a),e.bufferData(n,o,r),t.onUploadCallback();let i=5126;return o instanceof Float32Array?i=5126:o instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):o instanceof Uint16Array?t.isFloat16BufferAttribute?s?i=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):i=5123:o instanceof Int16Array?i=5122:o instanceof Uint32Array?i=5125:o instanceof Int32Array?i=5124:o instanceof Int8Array?i=5120:o instanceof Uint8Array&&(i=5121),{buffer:a,type:i,bytesPerElement:o.BYTES_PER_ELEMENT,version:t.version}}function i(t,n,o){const a=n.array,i=n.updateRange;e.bindBuffer(o,t),i.count===-1?e.bufferSubData(o,0,a):(s?e.bufferSubData(o,i.offset*a.BYTES_PER_ELEMENT,a,i.offset,i.count):e.bufferSubData(o,i.offset*a.BYTES_PER_ELEMENT,a.subarray(i.offset,i.offset+i.count)),i.count=-1)}function a(e){return e.isInterleavedBufferAttribute&&(e=e.data),n.get(e)}function r(t){t.isInterleavedBufferAttribute&&(t=t.data);const s=n.get(t);s&&(e.deleteBuffer(s.buffer),n.delete(t))}function c(e,t){if(e.isGLBufferAttribute){const t=n.get(e);(!t||t.version<e.version)&&n.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);const s=n.get(e);s===void 0?n.set(e,o(e,t)):s.version<e.version&&(i(s.buffer,e,t),s.version=e.version)}return{get:a,remove:r,update:c}}Jo=class extends h{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const u=e/2,h=t/2,i=Math.floor(n),a=Math.floor(s),o=i+1,m=a+1,f=e/i,p=t/a,r=[],l=[],d=[],c=[];for(let e=0;e<m;e++){const t=e*p-h;for(let n=0;n<o;n++){const s=n*f-u;l.push(s,-t,0),d.push(0,0,1),c.push(n/i),c.push(1-e/a)}}for(let e=0;e<a;e++)for(let t=0;t<i;t++){const a=t+o*e,n=t+o*(e+1),c=t+1+o*(e+1),s=t+1+o*e;r.push(a,n,s),r.push(n,c,s)}this.setIndex(r),this.setAttribute("position",new b(l,3)),this.setAttribute("normal",new b(d,3)),this.setAttribute("uv",new b(c,2))}},Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd="vec3 transformed = vec3( position );",kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pi=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Il="gl_FragColor = linearToOutputTexel( gl_FragColor );",zl=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Tl=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,al=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yr=`#ifdef USE_ENVMAP
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
#endif`,qr=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Kr=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Ur=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wr=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Br=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ir=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Hr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Hi=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Ii=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Bi=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vi=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,$i=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wi=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ui=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Ki=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qi=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yi=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Gi=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xi=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qi=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zi=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ji=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ea=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,ta=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,na=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sa=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oa=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ia=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aa=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,ra=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,ca=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,la=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,da=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ua=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ha=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ma=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fa=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pa=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,va=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ba=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ja=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ya=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_a=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wa=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oa=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xa=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ca=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ea=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ka=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Aa=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Sa=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ma=`#ifdef USE_SKINNING
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
#endif`,Fa=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ta=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,za=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Da=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Na=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,La=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Ra=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pa=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ha=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ia=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ba=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Va=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$a=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wa=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ua=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ka=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qa=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ya=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ga=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Xa=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qa=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Za=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ja=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,er=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tr=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nr=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sr=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,or=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ir=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ar=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rr=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cr=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lr=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,dr=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ur=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,hr=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mr=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,fr=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,pr=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gr=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vr=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,br=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jr=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yr=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_r=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,i={alphamap_fragment:Dd,alphamap_pars_fragment:zd,alphatest_fragment:Td,aomap_fragment:Fd,aomap_pars_fragment:Md,begin_vertex:Sd,beginnormal_vertex:kd,bsdfs:Ed,bumpmap_pars_fragment:Cd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:jd,color_fragment:bd,color_pars_fragment:vd,color_pars_vertex:gd,color_vertex:fd,common:md,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:Pi,displacementmap_vertex:cd,emissivemap_fragment:rd,emissivemap_pars_fragment:td,encodings_fragment:Il,encodings_pars_fragment:zl,envmap_fragment:Tl,envmap_common_pars_fragment:cl,envmap_pars_fragment:al,envmap_pars_vertex:Gr,envmap_physical_pars_fragment:Ii,envmap_vertex:Yr,fog_vertex:qr,fog_pars_vertex:Kr,fog_fragment:Ur,fog_pars_fragment:Wr,gradientmap_pars_fragment:Br,lightmap_fragment:Ir,lightmap_pars_fragment:Hr,lights_lambert_vertex:ld,lights_pars_begin:Hi,lights_toon_fragment:Bi,lights_toon_pars_fragment:Vi,lights_phong_fragment:$i,lights_phong_pars_fragment:Wi,lights_physical_fragment:Ui,lights_physical_pars_fragment:Ki,lights_fragment_begin:qi,lights_fragment_maps:Yi,lights_fragment_end:Gi,logdepthbuf_fragment:Xi,logdepthbuf_pars_fragment:Qi,logdepthbuf_pars_vertex:Zi,logdepthbuf_vertex:Ji,map_fragment:ea,map_pars_fragment:ta,map_particle_fragment:na,map_particle_pars_fragment:sa,metalnessmap_fragment:oa,metalnessmap_pars_fragment:ia,morphnormal_vertex:aa,morphtarget_pars_vertex:ra,morphtarget_vertex:ca,normal_fragment_begin:la,normal_fragment_maps:da,normalmap_pars_fragment:ua,clearcoat_normal_fragment_begin:ha,clearcoat_normal_fragment_maps:ma,clearcoat_pars_fragment:fa,packing:pa,premultiplied_alpha_fragment:va,project_vertex:ba,dithering_fragment:ja,dithering_pars_fragment:ya,roughnessmap_fragment:_a,roughnessmap_pars_fragment:wa,shadowmap_pars_fragment:Oa,shadowmap_pars_vertex:xa,shadowmap_vertex:Ca,shadowmask_pars_fragment:Ea,skinbase_vertex:ka,skinning_pars_vertex:Aa,skinning_vertex:Sa,skinnormal_vertex:Ma,specularmap_fragment:Fa,specularmap_pars_fragment:Ta,tonemapping_fragment:za,tonemapping_pars_fragment:Da,transmissionmap_fragment:Na,transmissionmap_pars_fragment:La,uv_pars_fragment:Ra,uv_pars_vertex:Pa,uv_vertex:Ha,uv2_pars_fragment:Ia,uv2_pars_vertex:Ba,uv2_vertex:Va,worldpos_vertex:$a,background_frag:Wa,background_vert:Ua,cube_frag:Ka,cube_vert:qa,depth_frag:Ya,depth_vert:Ga,distanceRGBA_frag:Xa,distanceRGBA_vert:Qa,equirect_frag:Za,equirect_vert:Ja,linedashed_frag:er,linedashed_vert:tr,meshbasic_frag:nr,meshbasic_vert:sr,meshlambert_frag:or,meshlambert_vert:ir,meshmatcap_frag:ar,meshmatcap_vert:rr,meshtoon_frag:cr,meshtoon_vert:lr,meshphong_frag:dr,meshphong_vert:ur,meshphysical_frag:hr,meshphysical_vert:mr,normal_frag:fr,normal_vert:pr,points_frag:gr,points_vert:vr,shadow_frag:br,shadow_vert:jr,sprite_frag:yr,sprite_vert:_r},n={common:{diffuse:{value:new s(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new j},uv2Transform:{value:new j},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new s(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new s(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new j}},sprite:{diffuse:{value:new s(15658734)},opacity:{value:1},center:{value:new t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new j}}},W={basic:{uniforms:C([n.common,n.specularmap,n.envmap,n.aomap,n.lightmap,n.fog]),vertexShader:i.meshbasic_vert,fragmentShader:i.meshbasic_frag},lambert:{uniforms:C([n.common,n.specularmap,n.envmap,n.aomap,n.lightmap,n.emissivemap,n.fog,n.lights,{emissive:{value:new s(0)}}]),vertexShader:i.meshlambert_vert,fragmentShader:i.meshlambert_frag},phong:{uniforms:C([n.common,n.specularmap,n.envmap,n.aomap,n.lightmap,n.emissivemap,n.bumpmap,n.normalmap,n.displacementmap,n.fog,n.lights,{emissive:{value:new s(0)},specular:{value:new s(1118481)},shininess:{value:30}}]),vertexShader:i.meshphong_vert,fragmentShader:i.meshphong_frag},standard:{uniforms:C([n.common,n.envmap,n.aomap,n.lightmap,n.emissivemap,n.bumpmap,n.normalmap,n.displacementmap,n.roughnessmap,n.metalnessmap,n.fog,n.lights,{emissive:{value:new s(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:i.meshphysical_vert,fragmentShader:i.meshphysical_frag},toon:{uniforms:C([n.common,n.aomap,n.lightmap,n.emissivemap,n.bumpmap,n.normalmap,n.displacementmap,n.gradientmap,n.fog,n.lights,{emissive:{value:new s(0)}}]),vertexShader:i.meshtoon_vert,fragmentShader:i.meshtoon_frag},matcap:{uniforms:C([n.common,n.bumpmap,n.normalmap,n.displacementmap,n.fog,{matcap:{value:null}}]),vertexShader:i.meshmatcap_vert,fragmentShader:i.meshmatcap_frag},points:{uniforms:C([n.points,n.fog]),vertexShader:i.points_vert,fragmentShader:i.points_frag},dashed:{uniforms:C([n.common,n.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:i.linedashed_vert,fragmentShader:i.linedashed_frag},depth:{uniforms:C([n.common,n.displacementmap]),vertexShader:i.depth_vert,fragmentShader:i.depth_frag},normal:{uniforms:C([n.common,n.bumpmap,n.normalmap,n.displacementmap,{opacity:{value:1}}]),vertexShader:i.normal_vert,fragmentShader:i.normal_frag},sprite:{uniforms:C([n.sprite,n.fog]),vertexShader:i.sprite_vert,fragmentShader:i.sprite_frag},background:{uniforms:{uvTransform:{value:new j},t2D:{value:null}},vertexShader:i.background_vert,fragmentShader:i.background_frag},cube:{uniforms:C([n.envmap,{opacity:{value:1}}]),vertexShader:i.cube_vert,fragmentShader:i.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:i.equirect_vert,fragmentShader:i.equirect_frag},distanceRGBA:{uniforms:C([n.common,n.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:i.distanceRGBA_vert,fragmentShader:i.distanceRGBA_frag},shadow:{uniforms:C([n.lights,n.fog,{color:{value:new s(0)},opacity:{value:1}}]),vertexShader:i.shadow_vert,fragmentShader:i.shadow_frag}},W.physical={uniforms:C([W.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new t(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new s(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:i.meshphysical_vert,fragmentShader:i.meshphysical_frag};function m0(e,t,n,o,i){const l=new s(0);let c=0,r,a,d=null,u=0,h=null;function f(n,s,i,f){let p=s.isScene===!0?s.background:null;p&&p.isTexture&&(p=t.get(p));const g=e.xr,b=g.getSession&&g.getSession();b&&b.environmentBlendMode==="additive"&&(p=null),p===null?m(l,c):p&&p.isColor&&(m(p,1),f=!0),(e.autoClear||f)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Ms)?(a===void 0&&(a=new D(new fs(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:vt(W.cube.uniforms),vertexShader:W.cube.vertexShader,fragmentShader:W.cube.fragmentShader,side:v,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(a)),a.material.uniforms.envMap.value=p,a.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(d!==p||u!==p.version||h!==e.toneMapping)&&(a.material.needsUpdate=!0,d=p,u=p.version,h=e.toneMapping),n.unshift(a,a.geometry,a.material,0,0,null)):p&&p.isTexture&&(r===void 0&&(r=new D(new Jo(2,2),new ce({name:"BackgroundMaterial",uniforms:vt(W.background.uniforms),vertexShader:W.background.vertexShader,fragmentShader:W.background.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),Object.defineProperty(r.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(r)),r.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),r.material.uniforms.uvTransform.value.copy(p.matrix),(d!==p||u!==p.version||h!==e.toneMapping)&&(r.material.needsUpdate=!0,d=p,u=p.version,h=e.toneMapping),n.unshift(r,r.geometry,r.material,0,0,null))}function m(e,t){n.buffers.color.setClear(e.r,e.g,e.b,t,i)}return{getClearColor:function(){return l},setClearColor:function(e,t=1){l.set(e),c=t,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,m(l,c)},render:f}}function j0(e,t,n,s){const k=e.getParameter(34921),c=s.isWebGL2?null:t.get("OES_vertex_array_object"),A=s.isWebGL2||c!==null,i={},r=g(null);let o=r;function b(t,s,i,a,r){let c=!1;if(A){const e=_(a,i,s);o!==e&&(o=e,m(o.object)),c=y(a,r),c&&j(a,r)}else{const e=s.wireframe===!0;(o.geometry!==a.id||o.program!==i.id||o.wireframe!==e)&&(o.geometry=a.id,o.program=i.id,o.wireframe=e,c=!0)}t.isInstancedMesh===!0&&(c=!0),r!==null&&n.update(r,34963),c&&(O(t,s,i,a),r!==null&&e.bindBuffer(34963,n.get(r).buffer))}function w(){return s.isWebGL2?e.createVertexArray():c.createVertexArrayOES()}function m(t){return s.isWebGL2?e.bindVertexArray(t):c.bindVertexArrayOES(t)}function l(t){return s.isWebGL2?e.deleteVertexArray(t):c.deleteVertexArrayOES(t)}function _(e,t,n){const r=n.wireframe===!0;let s=i[e.id];s===void 0&&(s={},i[e.id]=s);let o=s[t.id];o===void 0&&(o={},s[t.id]=o);let a=o[r];return a===void 0&&(a=g(w()),o[r]=a),a}function g(e){const t=[],n=[],s=[];for(let e=0;e<k;e++)t[e]=0,n[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:s,object:e,attributes:{},index:null}}function y(e,t){const i=o.attributes,n=e.attributes;let s=0;for(const t in n){const e=i[t],o=n[t];if(e===void 0)return!0;if(e.attribute!==o)return!0;if(e.data!==o.data)return!0;s++}return o.attributesNum!==s||o.index!==t}function j(e,t){const n={},s=e.attributes;let i=0;for(const o in s){const e=s[o],t={};t.attribute=e,e.data&&(t.data=e.data),n[o]=t,i++}o.attributes=n,o.attributesNum=i,o.index=t}function f(){const e=o.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function d(e){a(e,0)}function a(n,i){const c=o.newAttributes,a=o.enabledAttributes,r=o.attributeDivisors;if(c[n]=1,a[n]===0&&(e.enableVertexAttribArray(n),a[n]=1),r[n]!==i){const o=s.isWebGL2?e:t.get("ANGLE_instanced_arrays");o[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,i),r[n]=i}}function p(){const n=o.newAttributes,t=o.enabledAttributes;for(let s=0,o=t.length;s<o;s++)t[s]!==n[s]&&(e.disableVertexAttribArray(s),t[s]=0)}function h(t,n,o,i,a,r){s.isWebGL2===!0&&(o===5124||o===5125)?e.vertexAttribIPointer(t,n,o,a,r):e.vertexAttribPointer(t,n,o,i,a,r)}function O(o,i,r,c){if(s.isWebGL2===!1&&(o.isInstancedMesh||c.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;f();const m=c.attributes,l=r.getAttributes(),u=i.defaultAttributeValues;for(const s in l){const t=l[s];if(t>=0){const i=m[s];if(i!==void 0){const o=i.normalized,r=i.itemSize,s=n.get(i);if(s===void 0)continue;const l=s.buffer,u=s.type,m=s.bytesPerElement;if(i.isInterleavedBufferAttribute){const n=i.data,s=n.stride,f=i.offset;n&&n.isInstancedInterleavedBuffer?(a(t,n.meshPerAttribute),c._maxInstanceCount===void 0&&(c._maxInstanceCount=n.meshPerAttribute*n.count)):d(t),e.bindBuffer(34962,l),h(t,r,u,o,s*m,f*m)}else i.isInstancedBufferAttribute?(a(t,i.meshPerAttribute),c._maxInstanceCount===void 0&&(c._maxInstanceCount=i.meshPerAttribute*i.count)):d(t),e.bindBuffer(34962,l),h(t,r,u,o,0,0)}else if(s==="instanceMatrix"){const i=n.get(o.instanceMatrix);if(i===void 0)continue;const r=i.buffer,s=i.type;a(t+0,1),a(t+1,1),a(t+2,1),a(t+3,1),e.bindBuffer(34962,r),e.vertexAttribPointer(t+0,4,s,!1,64,0),e.vertexAttribPointer(t+1,4,s,!1,64,16),e.vertexAttribPointer(t+2,4,s,!1,64,32),e.vertexAttribPointer(t+3,4,s,!1,64,48)}else if(s==="instanceColor"){const s=n.get(o.instanceColor);if(s===void 0)continue;const i=s.buffer,r=s.type;a(t,1),e.bindBuffer(34962,i),e.vertexAttribPointer(t,3,r,!1,12,0)}else if(u!==void 0){const n=u[s];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(t,n);break;case 3:e.vertexAttrib3fv(t,n);break;case 4:e.vertexAttrib4fv(t,n);break;default:e.vertexAttrib1fv(t,n)}}}}p()}function x(){u();for(const t in i){const e=i[t];for(const n in e){const t=e[n];for(const e in t)l(t[e].object),delete t[e];delete e[n]}delete i[t]}}function C(e){if(i[e.id]===void 0)return;const t=i[e.id];for(const n in t){const e=t[n];for(const t in e)l(e[t].object),delete e[t];delete t[n]}delete i[e.id]}function E(e){for(const s in i){const t=i[s];if(t[e.id]===void 0)continue;const n=t[e.id];for(const e in n)l(n[e].object),delete n[e];delete t[e.id]}}function u(){if(v(),o===r)return;o=r,m(o.object)}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:b,reset:u,resetDefaultState:v,dispose:x,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:f,enableAttribute:d,disableUnusedAttributes:p}}function _0(e,t,n,s){const i=s.isWebGL2;let o;function a(e){o=e}function r(t,s){e.drawArrays(o,t,s),n.update(s,o,1)}function c(s,a,r){if(r===0)return;let c,l;if(i)c=e,l="drawArraysInstanced";else if(c=t.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[l](o,s,a,r),n.update(a,o,r)}this.setMode=a,this.render=r,this.renderInstances=c}function w0(e,t,n){let o;function f(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const n=t.get("EXT_texture_filter_anisotropic");o=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(t){if(t==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t="mediump"}return t==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&e instanceof WebGL2ComputeRenderingContext;let s=n.precision!==void 0?n.precision:"highp";const i=c(s);i!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",i,"instead."),s=i);const j=n.logarithmicDepthBuffer===!0,b=e.getParameter(34930),r=e.getParameter(35660),h=e.getParameter(3379),m=e.getParameter(34076),u=e.getParameter(34921),p=e.getParameter(36347),g=e.getParameter(36348),v=e.getParameter(36349),d=r>0,l=a||t.has("OES_texture_float"),y=d&&l,_=a?e.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:f,getMaxPrecision:c,precision:s,logarithmicDepthBuffer:j,maxTextures:b,maxVertexTextures:r,maxTextureSize:h,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:d,floatFragmentTextures:l,floatVertexTextures:y,maxSamples:_}}function x0(e){const o=this;let i=null,n=0,r=!1,s=!1;const c=new Y,l=new j,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,s){const o=e.length!==0||t||n!==0||r;return r=t,i=a(e,s,0),n=e.length,o},this.beginShadows=function(){s=!0,a(null)},this.endShadows=function(){s=!1,d()},this.setState=function(o,c,l){const u=o.clippingPlanes,m=o.clipIntersection,f=o.clipShadows,h=e.get(o);if(!r||u===null||u.length===0||s&&!f)s?a(null):d();else{const o=s?0:n,r=o*4;let e=h.clippingState||null;t.value=e,e=a(u,c,r,l);for(let t=0;t!==r;++t)e[t]=i[t];h.clippingState=e,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=o}};function d(){t.value!==i&&(t.value=i,t.needsUpdate=n>0),o.numPlanes=n,o.numIntersection=0}function a(e,n,s,i){const r=e!==null?e.length:0;let a=null;if(r!==0){if(a=t.value,i!==!0||a===null){const t=s+r*4,o=n.matrixWorldInverse;l.getNormalMatrix(o),(a===null||a.length<t)&&(a=new Float32Array(t));for(let t=0,n=s;t!==r;++t,n+=4)c.copy(e[t]).applyMatrix4(o,l),c.normal.toArray(a,n),a[n+3]=c.constant}t.value=a,t.needsUpdate=!0}return o.numPlanes=r,o.numIntersection=0,a}}function C0(e){let t=new WeakMap;function n(e,t){return t===Ho?e.mapping=zs:t===Io&&(e.mapping=Ts),e}function o(o){if(o&&o.isTexture){const i=o.mapping;if(i===Ho||i===Io){if(t.has(o)){const e=t.get(o).texture;return n(e,o.mapping)}const i=o.image;if(i&&i.height>0){const r=e.getRenderTarget(),a=new Ko(i.height/2);return a.fromEquirectangularTexture(e,o),t.set(o,a),e.setRenderTarget(r),o.addEventListener("dispose",s),n(a.texture,o.mapping)}return null}}return o}function s(e){const n=e.target;n.removeEventListener("dispose",s);const o=t.get(n);o!==void 0&&(t.delete(n),o.dispose())}function i(){t=new WeakMap}return{get:o,dispose:i}}function v0(e){const n={};function t(t){if(n[t]!==void 0)return n[t];let s;switch(t){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(t)}return n[t]=s,s}return{has:function(e){return t(e)!==null},init:function(e){e.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(e){const n=t(e);return n===null&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),n}}}function p0(e,t,n,s){const i={},o=new WeakMap;function a(e){const r=e.target;r.index!==null&&t.remove(r.index);for(const e in r.attributes)t.remove(r.attributes[e]);r.removeEventListener("dispose",a),delete i[r.id];const c=o.get(r);c&&(t.remove(c),o.delete(r)),s.releaseStatesOfGeometry(r),r.isInstancedBufferGeometry===!0&&delete r._maxInstanceCount,n.memory.geometries--}function c(e,t){return i[t.id]===!0?t:(t.addEventListener("dispose",a),i[t.id]=!0,n.memory.geometries++,t)}function l(e){const n=e.attributes;for(const e in n)t.update(n[e],34962);const s=e.morphAttributes;for(const n in s){const e=s[n];for(let n=0,s=e.length;n<s;n++)t.update(e[n],34962)}}function r(e){const n=[],s=e.index,a=e.attributes.position;let i=0;if(s!==null){const e=s.array;i=s.version;for(let t=0,a=e.length;t<a;t+=3){const s=e[t+0],o=e[t+1],i=e[t+2];n.push(s,o,o,i,i,s)}}else{const e=a.array;i=a.version;for(let t=0,a=e.length/3-1;t<a;t+=3){const s=t+0,o=t+1,i=t+2;n.push(s,o,o,i,i,s)}}const r=new(zc(n)>65535?eo:Js)(n,1);r.version=i;const c=o.get(e);c&&t.remove(c),o.set(e,r)}function d(e){const t=o.get(e);if(t){const n=e.index;n!==null&&t.version<n.version&&r(e)}else r(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function f0(e,t,n,s){const r=s.isWebGL2;let o;function c(e){o=e}let i,a;function l(e){i=e.type,a=e.bytesPerElement}function d(t,s){e.drawElements(o,s,i,t*a),n.update(s,o,1)}function u(s,c,l){if(l===0)return;let d,u;if(r)d=e,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](o,c,i,s*a,l),n.update(c,o,l)}this.setMode=c,this.setIndex=l,this.render=d,this.renderInstances=u}function d0(){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(e,n,s){switch(t.calls++,n){case 4:t.triangles+=s*(e/3);break;case 1:t.lines+=s*(e/2);break;case 3:t.lines+=s*(e-1);break;case 2:t.lines+=s*e;break;case 0:t.points+=s*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:s}}function l0(e,t){return e[0]-t[0]}function c0(e,t){return Math.abs(t[1])-Math.abs(e[1])}function r0(e){const s={},n=new Float32Array(8),t=[];for(let e=0;e<8;e++)t[e]=[e,0];function o(o,i,a,r){const u=o.morphTargetInfluences,h=u===void 0?0:u.length;let c=s[i.id];if(c===void 0){c=[];for(let e=0;e<h;e++)c[e]=[e,0];s[i.id]=c}for(let e=0;e<h;e++){const t=c[e];t[0]=e,t[1]=u[e]}c.sort(c0);for(let e=0;e<8;e++)e<h&&c[e][1]?(t[e][0]=c[e][0],t[e][1]=c[e][1]):(t[e][0]=Number.MAX_SAFE_INTEGER,t[e][1]=0);t.sort(l0);const l=a.morphTargets&&i.morphAttributes.position,d=a.morphNormals&&i.morphAttributes.normal;let m=0;for(let e=0;e<8;e++){const a=t[e],s=a[0],o=a[1];s!==Number.MAX_SAFE_INTEGER&&o?(l&&i.getAttribute("morphTarget"+e)!==l[s]&&i.setAttribute("morphTarget"+e,l[s]),d&&i.getAttribute("morphNormal"+e)!==d[s]&&i.setAttribute("morphNormal"+e,d[s]),n[e]=o,m+=o):(l&&i.hasAttribute("morphTarget"+e)===!0&&i.deleteAttribute("morphTarget"+e),d&&i.hasAttribute("morphNormal"+e)===!0&&i.deleteAttribute("morphNormal"+e),n[e]=0)}const f=i.morphTargetsRelative?1:1-m;r.getUniforms().setValue(e,"morphTargetBaseInfluence",f),r.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:o}}function a0(e,t,n,s){let o=new WeakMap;function a(e){const r=s.render.frame,c=e.geometry,a=t.get(e,c);return o.get(a)!==r&&(t.update(a),o.set(a,r)),e.isInstancedMesh&&(e.hasEventListener("dispose",i)===!1&&e.addEventListener("dispose",i),n.update(e.instanceMatrix,34962),e.instanceColor!==null&&n.update(e.instanceColor,34962)),a}function r(){o=new WeakMap}function i(e){const t=e.target;t.removeEventListener("dispose",i),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:r}}Ns=class extends k{constructor(e=null,t=1,n=1,s=1){super(null),this.image={data:e,width:t,height:n,depth:s},this.magFilter=x,this.minFilter=x,this.wrapR=P,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}},Ns.prototype.isDataTexture2DArray=!0,Li=class extends k{constructor(e=null,t=1,n=1,s=1){super(null),this.image={data:e,width:t,height:n,depth:s},this.magFilter=x,this.minFilter=x,this.wrapR=P,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}},Li.prototype.isDataTexture3D=!0,Ni=new k,Vr=new Ns,$r=new Li,Di=new Mt,zi=[],Ti=[],Fi=new Float32Array(16),Mi=new Float32Array(9),Si=new Float32Array(4);function ht(e,t,n){const o=e[0];if(o<=0||o>0)return e;const i=t*n;let s=zi[i];if(s===void 0&&(s=new Float32Array(i),zi[i]=s),t!==0){o.toArray(s,0);for(let o=1,i=0;o!==t;++o)i+=n,e[o].toArray(s,i)}return s}function A(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function w(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function Jr(e,t){let n=Ti[t];n===void 0&&(n=new Int32Array(t),Ti[t]=n);for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function i0(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function o0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(A(n,t))return;e.uniform2fv(this.addr,t),w(n,t)}}function s0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(A(n,t))return;e.uniform3fv(this.addr,t),w(n,t)}}function n0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(A(n,t))return;e.uniform4fv(this.addr,t),w(n,t)}}function t0(e,t){const n=this.cache,s=t.elements;if(s===void 0){if(A(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),w(n,t)}else{if(A(n,s))return;Si.set(s),e.uniformMatrix2fv(this.addr,!1,Si),w(n,s)}}function e0(e,t){const n=this.cache,s=t.elements;if(s===void 0){if(A(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),w(n,t)}else{if(A(n,s))return;Mi.set(s),e.uniformMatrix3fv(this.addr,!1,Mi),w(n,s)}}function J4(e,t){const n=this.cache,s=t.elements;if(s===void 0){if(A(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),w(n,t)}else{if(A(n,s))return;Fi.set(s),e.uniformMatrix4fv(this.addr,!1,Fi),w(n,s)}}function w4(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function Q4(e,t){const n=this.cache;if(A(n,t))return;e.uniform2iv(this.addr,t),w(n,t)}function X4(e,t){const n=this.cache;if(A(n,t))return;e.uniform3iv(this.addr,t),w(n,t)}function G4(e,t){const n=this.cache;if(A(n,t))return;e.uniform4iv(this.addr,t),w(n,t)}function Y4(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function q4(e,t){const n=this.cache;if(A(n,t))return;e.uniform2uiv(this.addr,t),w(n,t)}function K4(e,t){const n=this.cache;if(A(n,t))return;e.uniform3uiv(this.addr,t),w(n,t)}function U4(e,t){const n=this.cache;if(A(n,t))return;e.uniform4uiv(this.addr,t),w(n,t)}function W4(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.safeSetTexture2D(t||Ni,s)}function $4(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture3D(t||$r,s)}function V4(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.safeSetTextureCube(t||Di,s)}function B4(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture2DArray(t||Vr,s)}function I4(e){switch(e){case 5126:return i0;case 35664:return o0;case 35665:return s0;case 35666:return n0;case 35674:return t0;case 35675:return e0;case 35676:return J4;case 5124:case 35670:return w4;case 35667:case 35671:return Q4;case 35668:case 35672:return X4;case 35669:case 35673:return G4;case 5125:return Y4;case 36294:return q4;case 36295:return K4;case 36296:return U4;case 35678:case 36198:case 36298:case 36306:case 35682:return W4;case 35679:case 36299:case 36307:return $4;case 35680:case 36300:case 36308:case 36293:return V4;case 36289:case 36303:case 36311:case 36292:return B4}}function H4(e,t){e.uniform1fv(this.addr,t)}function P4(e,t){const n=ht(t,this.size,2);e.uniform2fv(this.addr,n)}function R4(e,t){const n=ht(t,this.size,3);e.uniform3fv(this.addr,n)}function L4(e,t){const n=ht(t,this.size,4);e.uniform4fv(this.addr,n)}function N4(e,t){const n=ht(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function D4(e,t){const n=ht(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function z4(e,t){const n=ht(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function T4(e,t){e.uniform1iv(this.addr,t)}function F4(e,t){e.uniform2iv(this.addr,t)}function M4(e,t){e.uniform3iv(this.addr,t)}function S4(e,t){e.uniform4iv(this.addr,t)}function A4(e,t){e.uniform1uiv(this.addr,t)}function k4(e,t){e.uniform2uiv(this.addr,t)}function E4(e,t){e.uniform3uiv(this.addr,t)}function O4(e,t){e.uniform4uiv(this.addr,t)}function Z4(e,t,n){const s=t.length,o=Jr(n,s);e.uniform1iv(this.addr,o);for(let e=0;e!==s;++e)n.safeSetTexture2D(t[e]||Ni,o[e])}function z1(e,t,n){const s=t.length,o=Jr(n,s);e.uniform1iv(this.addr,o);for(let e=0;e!==s;++e)n.safeSetTextureCube(t[e]||Di,o[e])}function c1(e){switch(e){case 5126:return H4;case 35664:return P4;case 35665:return R4;case 35666:return L4;case 35674:return N4;case 35675:return D4;case 35676:return z4;case 5124:case 35670:return T4;case 35667:case 35671:return F4;case 35668:case 35672:return M4;case 35669:case 35673:return S4;case 5125:return A4;case 36294:return k4;case 36295:return E4;case 36296:return O4;case 35678:case 36198:case 36298:case 36306:case 35682:return Z4;case 35680:case 36300:case 36308:case 36293:return z1}}function j4(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=I4(t.type)}function Hc(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=c1(t.type)}Hc.prototype.updateCache=function(e){const t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),w(t,e)};function Ic(e){this.id=e,this.seq=[],this.map={}}Ic.prototype.setValue=function(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const i=s[o];i.setValue(e,t[i.id],n)}},In=/(\w+)(\])?(\[|\.)?/g;function Vc(e,t){e.seq.push(t),e.map[t.id]=t}function b4(e,t,n){const s=e.name,o=s.length;for(In.lastIndex=0;!0;){const r=In.exec(s),l=In.lastIndex;let i=r[1];const d=r[2]==="]",c=r[3];if(d&&(i=i|0),c===void 0||c==="["&&l+2===o){Vc(n,c===void 0?new j4(i,e,t):new Hc(i,e,t));break}const u=n.map;let a=u[i];a===void 0&&(a=new Ic(i),Vc(n,a)),n=a}}function he(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),i=e.getUniformLocation(t,o.name);b4(o,i,this)}}he.prototype.setValue=function(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)},he.prototype.setOptional=function(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)},he.upload=function(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const i=t[o],a=n[i.id];a.needsUpdate!==!1&&i.setValue(e,a.value,s)}},he.seqWithValue=function(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n};function Uc(e,t,n){const s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}Kc=0;function v4(e){const t=e.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Yc(e){switch(e){case Me:return["Linear","( value )"];case ps:return["sRGB","( value )"];case To:return["RGBE","( value )"];case So:return["RGBM","( value, 7.0 )"];case Ao:return["RGBM","( value, 16.0 )"];case ko:return["RGBD","( value, 256.0 )"];case zo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case cu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Gc(e,t,n){const o=e.getShaderParameter(t,35713),s=e.getShaderInfoLog(t).trim();if(o&&s==="")return"";const i=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+s+v4(i)}function hn(e,t){const n=Yc(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function g4(e,t){const n=Yc(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function p4(e,t){let n;switch(t){case vu:n="Linear";break;case ku:n="Reinhard";break;case Pu:n="OptimizedCineon";break;case Iu:n="ACESFilmic";break;case r1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function f4(e){const t=[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return t.filter(mn).join(`
`)}function m4(e){const t=[];for(const n in e){const s=e[n];if(s===!1)continue;t.push("#define "+n+" "+s)}return t.join(`
`)}function h4(e,t){const n={},s=e.getProgramParameter(t,35721);for(let o=0;o<s;o++){const a=e.getActiveAttrib(t,o),i=a.name;n[i]=e.getAttribLocation(t,i)}return n}function mn(e){return e!==""}function sl(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}il=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ai(e){return e.replace(il,u4)}function u4(e,t){const n=i[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Ai(n)}Ri=/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ll=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(e){return e.replace(ll,hl).replace(Ri,d4)}function d4(e,t,n,s){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hl(e,t,n,s)}function hl(e,t,n,s){let o="";for(let e=parseInt(t);e<parseInt(n);e++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return o}function ml(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l4(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Rs?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===zr?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===et&&(t="SHADOWMAP_TYPE_VSM"),t}function c4(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case zs:case Ts:t="ENVMAP_TYPE_CUBE";break;case Ms:case As:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r4(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ts:case As:t="ENVMAP_MODE_REFRACTION";break}return t}function a4(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case cn:t="ENVMAP_BLENDING_MULTIPLY";break;case du:t="ENVMAP_BLENDING_MIX";break;case pu:t="ENVMAP_BLENDING_ADD";break}return t}function i4(e,t,n,s){const o=e.getContext(),C=n.defines;let r=n.vertexShader,c=n.fragmentShader;const v=l4(n),_=c4(n),y=r4(n),x=a4(n),j=e.gammaFactor>0?e.gammaFactor:1,b=n.isWebGL2?"":f4(n),m=m4(C),a=o.createProgram();let l,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(l=[m].filter(mn).join(`
`),l.length>0&&(l+=`
`),d=[b,m].filter(mn).join(`
`),d.length>0&&(d+=`
`)):(l=[ml(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+j,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+v:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),d=[b,ml(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+j,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+v:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_t?"#define TONE_MAPPING":"",n.toneMapping!==_t?i.tonemapping_pars_fragment:"",n.toneMapping!==_t?p4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",i.encodings_pars_fragment,n.map?hn("mapTexelToLinear",n.mapEncoding):"",n.matcap?hn("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?hn("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?hn("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?hn("lightMapTexelToLinear",n.lightMapEncoding):"",g4("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(mn).join(`
`)),r=Ai(r),r=sl(r,n),r=ol(r,n),c=Ai(c),c=sl(c,n),c=ol(c,n),r=dl(r),c=dl(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,l=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,d=["#define varying in",n.glslVersion===wo?"":"out highp vec4 pc_fragColor;",n.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const O=g+l+r,w=g+d+c,u=Uc(o,35633,O),h=Uc(o,35632,w);if(o.attachShader(a,u),o.attachShader(a,h),n.index0AttributeName!==void 0?o.bindAttribLocation(a,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(a,0,"position"),o.linkProgram(a),e.debug.checkShaderErrors){const e=o.getProgramInfoLog(a).trim(),t=o.getShaderInfoLog(u).trim(),n=o.getShaderInfoLog(h).trim();let s=!0,i=!0;if(o.getProgramParameter(a,35714)===!1){s=!1;const t=Gc(o,u,"vertex"),n=Gc(o,h,"fragment");console.error("THREE.WebGLProgram: shader error: ",o.getError(),"35715",o.getProgramParameter(a,35715),"gl.getProgramInfoLog",e,t,n)}else e!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",e):(t===""||n==="")&&(i=!1);i&&(this.diagnostics={runnable:s,programLog:e,vertexShader:{log:t,prefix:l},fragmentShader:{log:n,prefix:d}})}o.deleteShader(u),o.deleteShader(h);let p;this.getUniforms=function(){return p===void 0&&(p=new he(o,a)),p};let f;return this.getAttributes=function(){return f===void 0&&(f=h4(o,a)),f},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(a),this.program=void 0},this.name=n.shaderName,this.id=Kc++,this.cacheKey=t,this.usedTimes=1,this.program=a,this.vertexShader=u,this.fragmentShader=h,this}function o4(e,t,n,s,o,i){const a=[],c=s.isWebGL2,g=s.logarithmicDepthBuffer,u=s.floatVertexTextures,m=s.maxVertexUniforms,f=s.vertexTextures;let l=s.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},h=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function p(e){const s=e.skeleton,t=s.bones;if(u)return 1024;const o=m,i=Math.floor((o-20)/4),n=Math.min(i,t.length);return n<t.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+t.length+" bones. This GPU supports "+n+"."),0):n}function r(e){let t;return e&&e.isTexture?t=e.encoding:e&&e.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),t=e.texture.encoding):t=Me,t}function b(o,a,h,m,b){const y=m.fog,E=o.isMeshStandardMaterial?m.environment:null,j=t.get(o.envMap||E),_=d[o.type],x=b.isSkinnedMesh?p(b):0;o.precision!==null&&(l=s.getMaxPrecision(o.precision),l!==o.precision&&console.warn("THREE.WebGLProgram.getParameters:",o.precision,"not supported, using",l,"instead."));let w,O;if(_){const e=W[_];w=e.vertexShader,O=e.fragmentShader}else w=o.vertexShader,O=o.fragmentShader;const C=e.getRenderTarget(),k={isWebGL2:c,shaderID:_,shaderName:o.type,vertexShader:w,fragmentShader:O,defines:o.defines,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:l,instancing:b.isInstancedMesh===!0,instancingColor:b.isInstancedMesh===!0&&b.instanceColor!==null,supportsVertexTextures:f,outputEncoding:C!==null?r(C.texture):e.outputEncoding,map:!!o.map,mapEncoding:r(o.map),matcap:!!o.matcap,matcapEncoding:r(o.matcap),envMap:!!j,envMapMode:j&&j.mapping,envMapEncoding:r(j),envMapCubeUV:!!j&&(j.mapping===Ms||j.mapping===As),lightMap:!!o.lightMap,lightMapEncoding:r(o.lightMap),aoMap:!!o.aoMap,emissiveMap:!!o.emissiveMap,emissiveMapEncoding:r(o.emissiveMap),bumpMap:!!o.bumpMap,normalMap:!!o.normalMap,objectSpaceNormalMap:o.normalMapType===Fl,tangentSpaceNormalMap:o.normalMapType===Fe,clearcoatMap:!!o.clearcoatMap,clearcoatRoughnessMap:!!o.clearcoatRoughnessMap,clearcoatNormalMap:!!o.clearcoatNormalMap,displacementMap:!!o.displacementMap,roughnessMap:!!o.roughnessMap,metalnessMap:!!o.metalnessMap,specularMap:!!o.specularMap,alphaMap:!!o.alphaMap,gradientMap:!!o.gradientMap,sheen:!!o.sheen,transmissionMap:!!o.transmissionMap,combine:o.combine,vertexTangents:o.normalMap&&o.vertexTangents,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&b.geometry&&b.geometry.attributes.color&&b.geometry.attributes.color.itemSize===4,vertexUvs:!!o.map||!!o.bumpMap||!!o.normalMap||!!o.specularMap||!!o.alphaMap||!!o.emissiveMap||!!o.roughnessMap||!!o.metalnessMap||!!o.clearcoatMap||!!o.clearcoatRoughnessMap||!!o.clearcoatNormalMap||!!o.displacementMap||!!o.transmissionMap,uvsVertexOnly:!(!!o.map||!!o.bumpMap||!!o.normalMap||!!o.specularMap||!!o.alphaMap||!!o.emissiveMap||!!o.roughnessMap||!!o.metalnessMap||!!o.clearcoatNormalMap||!!o.transmissionMap)&&!!o.displacementMap,fog:!!y,useFog:o.fog,fogExp2:y&&y.isFogExp2,flatShading:!!o.flatShading,sizeAttenuation:o.sizeAttenuation,logarithmicDepthBuffer:g,skinning:o.skinning&&x>0,maxBones:x,useVertexTexture:u,morphTargets:o.morphTargets,morphNormals:o.morphNormals,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&h.length>0,shadowMapType:e.shadowMap.type,toneMapping:o.toneMapped?e.toneMapping:_t,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:o.premultipliedAlpha,alphaTest:o.alphaTest,doubleSided:o.side===pt,flipSided:o.side===v,depthPacking:o.depthPacking!==void 0&&o.depthPacking,index0AttributeName:o.index0AttributeName,extensionDerivatives:o.extensions&&o.extensions.derivatives,extensionFragDepth:o.extensions&&o.extensions.fragDepth,extensionDrawBuffers:o.extensions&&o.extensions.drawBuffers,extensionShaderTextureLOD:o.extensions&&o.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:o.customProgramCacheKey()};return k}function j(t){const n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.fragmentShader),n.push(t.vertexShader)),t.defines!==void 0)for(const e in t.defines)n.push(e),n.push(t.defines[e]);if(t.isRawShaderMaterial===!1){for(let e=0;e<h.length;e++)n.push(t[h[e]]);n.push(e.outputEncoding),n.push(e.gammaFactor)}return n.push(t.customProgramCacheKey),n.join()}function y(e){const n=d[e.type];let t;if(n){const e=W[n];t=Tu.clone(e.uniforms)}else t=e.uniforms;return t}function _(t,n){let s;for(let e=0,o=a.length;e<o;e++){const t=a[e];if(t.cacheKey===n){s=t,++s.usedTimes;break}}return s===void 0&&(s=new i4(e,n,t,o),a.push(s)),s}function w(e){if(--e.usedTimes===0){const t=a.indexOf(e);a[t]=a[a.length-1],a.pop(),e.destroy()}}return{getParameters:b,getProgramCacheKey:j,getUniforms:y,acquireProgram:_,releaseProgram:w,programs:a}}function s4(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function s(t,n,s){e.get(t)[n]=s}function o(){e=new WeakMap}return{get:t,remove:n,update:s,dispose:o}}function y4(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function J1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ol(e){const o=[];let s=0;const t=[],n=[],i={id:-1};function r(){s=0,t.length=0,n.length=0}function a(t,n,a,r,c,l){let d=o[s];const u=e.get(a);return d===void 0?(d={id:t.id,object:t,geometry:n,material:a,program:u.program||i,groupOrder:r,renderOrder:t.renderOrder,z:c,group:l},o[s]=d):(d.id=t.id,d.object=t,d.geometry=n,d.material=a,d.program=u.program||i,d.groupOrder=r,d.renderOrder=t.renderOrder,d.z=c,d.group=l),s++,d}function c(e,s,o,i,r,c){const l=a(e,s,o,i,r,c);(o.transparent===!0?n:t).push(l)}function l(e,s,o,i,r,c){const l=a(e,s,o,i,r,c);(o.transparent===!0?n:t).unshift(l)}function d(e,s){t.length>1&&t.sort(e||y4),n.length>1&&n.sort(s||J1)}function u(){for(let t=s,n=o.length;t<n;t++){const e=o[t];if(e.id===null)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.program=null,e.group=null}}return{opaque:t,transparent:n,init:r,push:c,unshift:l,finish:u,sort:d}}function Q1(e){let t=new WeakMap;function n(n,s){let o;return t.has(n)===!1?(o=new Ol(e),t.set(n,[o])):s>=t.get(n).length?(o=new Ol(e),t.get(n).push(o)):o=t.get(n)[s],o}function s(){t=new WeakMap}return{get:n,dispose:s}}function X1(){const t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let o;switch(n.type){case"DirectionalLight":o={direction:new e,color:new s};break;case"SpotLight":o={position:new e,direction:new e,color:new s,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":o={position:new e,color:new s,distance:0,decay:0};break;case"HemisphereLight":o={direction:new e,skyColor:new s,groundColor:new s};break;case"RectAreaLight":o={color:new s,position:new e,halfWidth:new e,halfHeight:new e};break}return t[n.id]=o,o}}}function G1(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let s;switch(n.type){case"DirectionalLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new t};break;case"SpotLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new t};break;case"PointLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=s,s}}}kl=0;function Y1(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function q1(t,s){const a=new X1,l=G1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let t=0;t<9;t++)i.probe.push(new e);const r=new e,d=new o,c=new o;function u(e){let g=0,v=0,b=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let r=0,c=0,d=0,u=0,p=0,h=0,m=0,f=0;e.sort(Y1);for(let o=0,y=e.length;o<y;o++){const t=e[o],s=t.color,n=t.intensity,_=t.distance,j=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)g+=s.r*n,v+=s.g*n,b+=s.b*n;else if(t.isLightProbe)for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],n);else if(t.isDirectionalLight){const e=a.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),t.castShadow){const n=t.shadow,e=l.get(t);e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,i.directionalShadow[r]=e,i.directionalShadowMap[r]=j,i.directionalShadowMatrix[r]=t.shadow.matrix,h++}i.directional[r]=e,r++}else if(t.isSpotLight){const e=a.get(t);if(e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(s).multiplyScalar(n),e.distance=_,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,t.castShadow){const n=t.shadow,e=l.get(t);e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,i.spotShadow[d]=e,i.spotShadowMap[d]=j,i.spotShadowMatrix[d]=t.shadow.matrix,f++}i.spot[d]=e,d++}else if(t.isRectAreaLight){const e=a.get(t);e.color.copy(s).multiplyScalar(n),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[u]=e,u++}else if(t.isPointLight){const e=a.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),e.distance=t.distance,e.decay=t.decay,t.castShadow){const n=t.shadow,e=l.get(t);e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,e.shadowCameraNear=n.camera.near,e.shadowCameraFar=n.camera.far,i.pointShadow[c]=e,i.pointShadowMap[c]=j,i.pointShadowMatrix[c]=t.shadow.matrix,m++}i.point[c]=e,c++}else if(t.isHemisphereLight){const e=a.get(t);e.skyColor.copy(t.color).multiplyScalar(n),e.groundColor.copy(t.groundColor).multiplyScalar(n),i.hemi[p]=e,p++}}u>0&&(s.isWebGL2?(i.rectAreaLTC1=n.LTC_FLOAT_1,i.rectAreaLTC2=n.LTC_FLOAT_2):t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=n.LTC_FLOAT_1,i.rectAreaLTC2=n.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=n.LTC_HALF_1,i.rectAreaLTC2=n.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=b;const o=i.hash;(o.directionalLength!==r||o.pointLength!==c||o.spotLength!==d||o.rectAreaLength!==u||o.hemiLength!==p||o.numDirectionalShadows!==h||o.numPointShadows!==m||o.numSpotShadows!==f)&&(i.directional.length=r,i.spot.length=d,i.rectArea.length=u,i.point.length=c,i.hemi.length=p,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=f,i.spotShadowMap.length=f,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=m,i.spotShadowMatrix.length=f,o.directionalLength=r,o.pointLength=c,o.spotLength=d,o.rectAreaLength=u,o.hemiLength=p,o.numDirectionalShadows=h,o.numPointShadows=m,o.numSpotShadows=f,i.version=kl++)}function h(e,t){let s=0,o=0,a=0,l=0,u=0;const n=t.matrixWorldInverse;for(let h=0,m=e.length;h<m;h++){const t=e[h];if(t.isDirectionalLight){const e=i.directional[s];e.direction.setFromMatrixPosition(t.matrixWorld),r.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(r),e.direction.transformDirection(n),s++}else if(t.isSpotLight){const e=i.spot[a];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),e.direction.setFromMatrixPosition(t.matrixWorld),r.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(r),e.direction.transformDirection(n),a++}else if(t.isRectAreaLight){const e=i.rectArea[l];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),c.identity(),d.copy(t.matrixWorld),d.premultiply(n),c.extractRotation(d),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),e.halfWidth.applyMatrix4(c),e.halfHeight.applyMatrix4(c),l++}else if(t.isPointLight){const e=i.point[o];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),o++}else if(t.isHemisphereLight){const e=i.hemi[u];e.direction.setFromMatrixPosition(t.matrixWorld),e.direction.transformDirection(n),e.direction.normalize(),u++}}}return{setup:u,setupView:h,state:i}}function Ml(e,t){const s=new q1(e,t),n=[],o=[];function i(){n.length=0,o.length=0}function a(e){n.push(e)}function r(e){o.push(e)}function c(){s.setup(n)}function l(e){s.setupView(n,e)}const d={lightsArray:n,shadowsArray:o,lights:s};return{init:i,state:d,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function K1(e,t){let n=new WeakMap;function s(s,o=0){let i;return n.has(s)===!1?(i=new Ml(e,t),n.set(s,[i])):o>=n.get(s).length?(i=new Ml(e,t),n.get(s).push(i)):i=n.get(s)[o],i}function o(){n=new WeakMap}return{get:s,dispose:o}}Ei=class extends y{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Jd,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ei.prototype.isMeshDepthMaterial=!0,Ci=class extends y{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new e,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ci.prototype.isMeshDistanceMaterial=!0,Dl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Nl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Ll(e,n,s){let j=new Nt;const o=new t,i=new t,y=new a,m=[],g=[],p={},r=s.maxTextureSize,O={0:v,1:Tt,2:pt},c=new ce({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new t},radius:{value:4}},vertexShader:Nl,fragmentShader:Dl}),l=c.clone();l.defines.HORIZONTAL_PASS=1;const b=new h;b.setAttribute("position",new f(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const u=new D(b,c),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs,this.render=function(t,n,s){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(t.length===0)return;const c=e.getRenderTarget(),l=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),a=e.state;a.setBlending(jt),a.buffers.color.setClear(1,1,1,1),a.buffers.depth.setTest(!0),a.setScissorTest(!1);for(let u=0,h=t.length;u<h;u++){const l=t[u],c=l.shadow;if(c===void 0){console.warn("THREE.WebGLShadowMap:",l,"has no shadow.");continue}if(c.autoUpdate===!1&&c.needsUpdate===!1)continue;o.copy(c.mapSize);const d=c.getFrameExtents();if(o.multiply(d),i.copy(c.mapSize),(o.x>r||o.y>r)&&(o.x>r&&(i.x=Math.floor(r/d.x),o.x=i.x*d.x,c.mapSize.x=i.x),o.y>r&&(i.y=Math.floor(r/d.y),o.y=i.y*d.y,c.mapSize.y=i.y)),c.map===null&&!c.isPointLightShadow&&this.type===et){const e={minFilter:z,magFilter:z,format:V};c.map=new be(o.x,o.y,e),c.map.texture.name=l.name+".shadowMap",c.mapPass=new be(o.x,o.y,e),c.camera.updateProjectionMatrix()}if(c.map===null){const e={minFilter:x,magFilter:x,format:V};c.map=new be(o.x,o.y,e),c.map.texture.name=l.name+".shadowMap",c.camera.updateProjectionMatrix()}e.setRenderTarget(c.map),e.clear();const m=c.getViewportCount();for(let e=0;e<m;e++){const t=c.getViewport(e);y.set(i.x*t.x,i.y*t.y,i.x*t.z,i.y*t.w),a.viewport(y),c.updateMatrices(l,e),j=c.getFrustum(),w(n,s,c.camera,l,this.type)}!c.isPointLightShadow&&this.type===et&&C(c,s),c.needsUpdate=!1}d.needsUpdate=!1,e.setRenderTarget(c,l,u)};function C(t,s){const o=n.update(u);c.uniforms.shadow_pass.value=t.map.texture,c.uniforms.resolution.value=t.mapSize,c.uniforms.radius.value=t.radius,e.setRenderTarget(t.mapPass),e.clear(),e.renderBufferDirect(s,null,o,c,u,null),l.uniforms.shadow_pass.value=t.mapPass.texture,l.uniforms.resolution.value=t.mapSize,l.uniforms.radius.value=t.radius,e.setRenderTarget(t.map),e.clear(),e.renderBufferDirect(s,null,o,l,u,null)}function E(e,t,n){const o=e<<0|t<<1|n<<2;let s=m[o];return s===void 0&&(s=new Ei({depthPacking:Ul,morphTargets:e,skinning:t}),m[o]=s),s}function k(e,t,n){const o=e<<0|t<<1|n<<2;let s=g[o];return s===void 0&&(s=new Ci({morphTargets:e,skinning:t}),g[o]=s),s}function _(t,n,s,o,i,a,r){let c=null,d=E,l=t.customDepthMaterial;if(o.isPointLight===!0&&(d=k,l=t.customDistanceMaterial),l===void 0){let e=!1;s.morphTargets===!0&&(e=n.morphAttributes&&n.morphAttributes.position&&n.morphAttributes.position.length>0);let o=!1;t.isSkinnedMesh===!0&&(s.skinning===!0?o=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",t));const i=t.isInstancedMesh===!0;c=d(e,o,i)}else c=l;if(e.localClippingEnabled&&s.clipShadows===!0&&s.clippingPlanes.length!==0){const n=c.uuid,o=s.uuid;let e=p[n];e===void 0&&(e={},p[n]=e);let t=e[o];t===void 0&&(t=c.clone(),e[o]=t),c=t}return c.visible=s.visible,c.wireframe=s.wireframe,r===et?c.side=s.shadowSide!==null?s.shadowSide:s.side:c.side=s.shadowSide!==null?s.shadowSide:O[s.side],c.clipShadows=s.clipShadows,c.clippingPlanes=s.clippingPlanes,c.clipIntersection=s.clipIntersection,c.wireframeLinewidth=s.wireframeLinewidth,c.linewidth=s.linewidth,o.isPointLight===!0&&c.isMeshDistanceMaterial===!0&&(c.referencePosition.setFromMatrixPosition(o.matrixWorld),c.nearDistance=i,c.farDistance=a),c}function w(t,s,o,i,a){if(t.visible===!1)return;const c=t.layers.test(s.layers);if(c&&(t.isMesh||t.isLine||t.isPoints)&&(t.castShadow||t.receiveShadow&&a===et)&&(!t.frustumCulled||j.intersectsObject(t))){t.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,t.matrixWorld);const s=n.update(t),r=t.material;if(Array.isArray(r)){{const n=s.groups;for(let c=0,u=n.length;c<u;c++){const d=n[c],l=r[d.materialIndex];if(l&&l.visible){const n=_(t,s,l,i,o.near,o.far,a);e.renderBufferDirect(o,null,s,n,t,d)}}}}else if(r.visible){const n=_(t,s,r,i,o.near,o.far,a);e.renderBufferDirect(o,null,s,n,t,null)}}const r=t.children;for(let e=0,t=r.length;e<t;e++)w(r[e],s,o,i,a)}}function U1(e,t,n){const T=n.isWebGL2;function K(){let t=!1;const n=new a;let s=null;const o=new a(0,0,0,0);return{setMask:function(n){s!==n&&!t&&(e.colorMask(n,n,n,n),s=n)},setLocked:function(e){t=e},setClear:function(t,s,i,a,r){r===!0&&(t*=a,s*=a,i*=a),n.set(t,s,i,a),o.equals(n)===!1&&(e.clearColor(t,s,i,a),o.copy(n))},reset:function(){t=!1,s=null,o.set(-1,0,0,0)}}}function Z(){let t=!1,n=null,i=null,a=null;return{setTest:function(e){e?s(2929):o(2929)},setMask:function(s){n!==s&&!t&&(e.depthMask(s),n=s)},setFunc:function(t){if(i!==t){if(t)switch(t){case Ld:e.depthFunc(512);break;case Qd:e.depthFunc(519);break;case eu:e.depthFunc(513);break;case is:e.depthFunc(515);break;case iu:e.depthFunc(514);break;case au:e.depthFunc(518);break;case ru:e.depthFunc(516);break;case lu:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,n=null,i=null,a=null}}}function U(){let t=!1,n=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null;return{setTest:function(e){t||(e?s(2960):o(2960))},setMask:function(s){n!==s&&!t&&(e.stencilMask(s),n=s)},setFunc:function(t,n,s){(i!==t||a!==n||r!==s)&&(e.stencilFunc(t,n,s),i=t,a=n,r=s)},setOp:function(t,n,s){(c!==t||l!==n||d!==s)&&(e.stencilOp(t,n,s),c=t,l=n,d=s)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,n=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null}}}const A=new K,r=new Z,c=new U;let u={},h=null,m={},L=null,p=!1,C=null,d=null,j=null,y=null,f=null,w=null,O=null,x=!1,I=null,M=null,N=null,D=null,z=null;const ee=e.getParameter(35661);let F=!1,g=0;const b=e.getParameter(7938);b.indexOf("WebGL")!==-1?(g=parseFloat(/^WebGL (\d)/.exec(b)[1]),F=g>=1):b.indexOf("OpenGL ES")!==-1&&(g=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),F=g>=2);let i=null,k={};const S=new a(0,0,e.canvas.width,e.canvas.height),R=new a(0,0,e.canvas.width,e.canvas.height);function $(t,n,s){const i=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let t=0;t<s;t++)e.texImage2D(n+t,0,6408,1,1,0,6408,5121,i);return o}const H={};H[3553]=$(3553,3553,1),H[34067]=$(34067,34069,6),A.setClear(0,0,0,1),r.setClear(1),c.setClear(0),s(2929),r.setFunc(is),P(!1),V(Ls),s(2884),_(jt);function s(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function o(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function X(t){t!==h&&(e.bindFramebuffer(36160,t),h=t)}function G(t,n){n===null&&h!==null&&(n=h),m[t]!==n&&(e.bindFramebuffer(t,n),m[t]=n,T&&(t===36009&&(m[36160]=n),t===36160&&(m[36009]=n)))}function q(t){return L!==t&&(e.useProgram(t),L=t,!0)}const l={[De]:32774,[hc]:32778,[_c]:32779};if(T)l[to]=32775,l[so]=32776;else{const e=t.get("EXT_blend_minmax");e!==null&&(l[to]=e.MIN_EXT,l[so]=e.MAX_EXT)}const E={[qc]:0,[pl]:1,[gl]:768,[_o]:770,[Kl]:776,[Rl]:774,[Cl]:772,[yl]:769,[Oo]:771,[Hl]:775,[Sl]:773};function _(t,n,i,a,r,c,u,h){if(t===jt){p===!0&&(o(3042),p=!1);return}if(p===!1&&(s(3042),p=!0),t!==oc){if(t!==C||h!==x){if((d!==De||f!==De)&&(e.blendEquation(32774),d=De,f=De),h)switch(t){case Xe:e.blendFuncSeparate(1,771,1,771);break;case Is:e.blendFunc(1,1);break;case Ys:e.blendFuncSeparate(0,0,769,771);break;case Gs:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t);break}else switch(t){case Xe:e.blendFuncSeparate(770,771,1,771);break;case Is:e.blendFunc(770,1);break;case Ys:e.blendFunc(0,769);break;case Gs:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t);break}j=null,y=null,w=null,O=null,C=t,x=h}return}r=r||n,c=c||i,u=u||a,(n!==d||r!==f)&&(e.blendEquationSeparate(l[n],l[r]),d=n,f=r),(i!==j||a!==y||c!==w||u!==O)&&(e.blendFuncSeparate(E[i],E[a],E[c],E[u]),j=i,y=a,w=c,O=u),C=t,x=null}function Y(e,t){e.side===pt?o(2884):s(2884);let n=e.side===v;t&&(n=!n),P(n),e.blending===Xe&&e.transparent===!1?_(jt):_(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),r.setFunc(e.depthFunc),r.setTest(e.depthTest),r.setMask(e.depthWrite),A.setMask(e.colorWrite);const i=e.stencilWrite;c.setTest(i),i&&(c.setMask(e.stencilWriteMask),c.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),c.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),B(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),e.alphaToCoverage===!0?s(32926):o(32926)}function P(t){I!==t&&(t?e.frontFace(2304):e.frontFace(2305),I=t)}function V(t){t!==Cr?(s(2884),t!==M&&(t===Ls?e.cullFace(1029):t===Mr?e.cullFace(1028):e.cullFace(1032))):o(2884),M=t}function Q(t){t!==N&&(F&&e.lineWidth(t),N=t)}function B(t,n,i){t?(s(32823),(D!==n||z!==i)&&(e.polygonOffset(n,i),D=n,z=i)):o(32823)}function J(e){e?s(3089):o(3089)}function W(t){t===void 0&&(t=33984+ee-1),i!==t&&(e.activeTexture(t),i=t)}function te(t,n){i===null&&W();let s=k[i];s===void 0&&(s={type:void 0,texture:void 0},k[i]=s),(s.type!==t||s.texture!==n)&&(e.bindTexture(t,n||H[t]),s.type=t,s.texture=n)}function ne(){const t=k[i];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function se(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function oe(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function ie(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function ae(t){S.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),S.copy(t))}function re(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function ce(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),T===!0&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},i=null,k={},h=null,m={},L=null,p=!1,C=null,d=null,j=null,y=null,f=null,w=null,O=null,x=!1,I=null,M=null,N=null,D=null,z=null,S.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),A.reset(),r.reset(),c.reset()}return{buffers:{color:A,depth:r,stencil:c},enable:s,disable:o,bindFramebuffer:G,bindXRFramebuffer:X,useProgram:q,setBlending:_,setMaterial:Y,setFlipSided:P,setCullFace:V,setLineWidth:Q,setPolygonOffset:B,setScissorTest:J,activeTexture:W,bindTexture:te,unbindTexture:ne,compressedTexImage2D:se,texImage2D:oe,texImage3D:ie,scissor:ae,viewport:re,reset:ce}}function W1(e,t,n,s,o,i,a){const r=o.isWebGL2,T=o.maxTextures,te=o.maxCubemapSize,J=o.maxTextureSize,Q=o.maxSamples,j=new WeakMap;let f,S=!1;try{S=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(e,t){return S?new OffscreenCanvas(e,t):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function F(e,t,n,s){let o=1;if((e.width>s||e.height>s)&&(o=s/Math.max(e.width,e.height)),o<1||t===!0){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const r=t?n4:Math.floor,s=r(o*e.width),i=r(o*e.height);f===void 0&&(f=_(s,i));const a=n?_(s,i):f;a.width=s,a.height=i;const c=a.getContext("2d");return c.drawImage(e,0,0,s,i),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+s+"x"+i+")."),a}return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e}return e}function c(e){return _l(e.width)&&_l(e.height)}function L(e){return!r&&(e.wrapS!==P||e.wrapT!==P||e.minFilter!==x&&e.minFilter!==z)}function u(e,t){return e.generateMipmaps&&t&&e.minFilter!==x&&e.minFilter!==z}function d(t,n,o,i){e.generateMipmap(t);const a=s.get(n);a.__maxMipLevel=Math.log2(Math.max(o,i))}function l(n,s,o){if(r===!1)return s;if(n!==null){if(e[n]!==void 0)return e[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let i=s;return s===6403&&(o===5126&&(i=33326),o===5131&&(i=33325),o===5121&&(i=33321)),s===6407&&(o===5126&&(i=34837),o===5131&&(i=34843),o===5121&&(i=32849)),s===6408&&(o===5126&&(i=34836),o===5131&&(i=34842),o===5121&&(i=32856)),(i===33325||i===33326||i===34842||i===34836)&&t.get("EXT_color_buffer_float"),i}function w(e){return e===x||e===Vo||e===$o?9728:9729}function O(e){const t=e.target;t.removeEventListener("dispose",O),U(t),t.isVideoTexture&&j.delete(t),a.memory.textures--}function C(e){const t=e.target;t.removeEventListener("dispose",C),W(t),a.memory.textures--}function U(t){const n=s.get(t);if(n.__webglInit===void 0)return;e.deleteTexture(n.__webglTexture),s.remove(t)}function W(t){const o=t.texture,n=s.get(t),i=s.get(o);if(!t)return;if(i.__webglTexture!==void 0&&e.deleteTexture(i.__webglTexture),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]),n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer),n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer&&e.deleteRenderbuffer(n.__webglColorRenderbuffer),n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer);s.remove(o),s.remove(t)}let p=0;function B(){p=0}function I(){const e=p;return e>=T&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+T),p+=1,e}function g(e,t){const o=s.get(e);if(e.isVideoTexture&&Z(e),e.version>0&&o.__version!==e.version){const n=e.image;if(n===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(n.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{v(o,e,t);return}}n.activeTexture(33984+t),n.bindTexture(3553,o.__webglTexture)}function H(e,t){const o=s.get(e);if(e.version>0&&o.__version!==e.version){v(o,e,t);return}n.activeTexture(33984+t),n.bindTexture(35866,o.__webglTexture)}function R(e,t){const o=s.get(e);if(e.version>0&&o.__version!==e.version){v(o,e,t);return}n.activeTexture(33984+t),n.bindTexture(32879,o.__webglTexture)}function N(e,t){const o=s.get(e);if(e.version>0&&o.__version!==e.version){$(o,e,t);return}n.activeTexture(33984+t),n.bindTexture(34067,o.__webglTexture)}const b={[xs]:10497,[P]:33071,[ys]:33648},D={[x]:9728,[Vo]:9984,[$o]:9986,[z]:9729,[Lu]:9985,[ms]:9987};function h(n,i,a){if(a?(e.texParameteri(n,10242,b[i.wrapS]),e.texParameteri(n,10243,b[i.wrapT]),(n===32879||n===35866)&&e.texParameteri(n,32882,b[i.wrapR]),e.texParameteri(n,10240,D[i.magFilter]),e.texParameteri(n,10241,D[i.minFilter])):(e.texParameteri(n,10242,33071),e.texParameteri(n,10243,33071),(n===32879||n===35866)&&e.texParameteri(n,32882,33071),(i.wrapS!==P||i.wrapT!==P)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(n,10240,w(i.magFilter)),e.texParameteri(n,10241,w(i.minFilter)),i.minFilter!==x&&i.minFilter!==z&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const a=t.get("EXT_texture_filter_anisotropic");if(i.type===ee&&t.has("OES_texture_float_linear")===!1)return;if(r===!1&&i.type===nn&&t.has("OES_texture_half_float_linear")===!1)return;(i.anisotropy>1||s.get(i).__currentAnisotropy)&&(e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,o.getMaxAnisotropy())),s.get(i).__currentAnisotropy=i.anisotropy)}}function M(t,n){t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener("dispose",O),t.__webglTexture=e.createTexture(),a.memory.textures++)}function v(t,s,o){let b=3553;s.isDataTexture2DArray&&(b=35866),s.isDataTexture3D&&(b=32879),M(t,s),n.activeTexture(33984+o),n.bindTexture(b,t.__webglTexture),e.pixelStorei(37440,s.flipY),e.pixelStorei(37441,s.premultiplyAlpha),e.pixelStorei(3317,s.unpackAlignment),e.pixelStorei(37443,0);const y=L(s)&&c(s.image)===!1,a=F(s.image,y,!1,J),j=c(a)||r,v=i.convert(s.format);let p=i.convert(s.type),m=l(s.internalFormat,v,p);h(b,s,j);let f;const g=s.mipmaps;if(s.isDepthTexture)m=6402,r?s.type===ee?m=36012:s.type===tn?m=33190:s.type===rt?m=35056:m=33189:s.type===ee&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),s.format===Se&&m===6402&&s.type!==Gt&&s.type!==tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),s.type=Gt,p=i.convert(s.type)),s.format===gt&&m===6402&&(m=34041,s.type!==rt&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),s.type=rt,p=i.convert(s.type))),n.texImage2D(3553,0,m,a.width,a.height,0,v,p,null);else if(s.isDataTexture)if(g.length>0&&j){for(let e=0,t=g.length;e<t;e++)f=g[e],n.texImage2D(3553,e,m,f.width,f.height,0,v,p,f.data);s.generateMipmaps=!1,t.__maxMipLevel=g.length-1}else n.texImage2D(3553,0,m,a.width,a.height,0,v,p,a.data),t.__maxMipLevel=0;else if(s.isCompressedTexture){for(let e=0,t=g.length;e<t;e++)f=g[e],s.format!==V&&s.format!==pe?v!==null?n.compressedTexImage2D(3553,e,m,f.width,f.height,0,f.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,e,m,f.width,f.height,0,v,p,f.data);t.__maxMipLevel=g.length-1}else if(s.isDataTexture2DArray)n.texImage3D(35866,0,m,a.width,a.height,a.depth,0,v,p,a.data),t.__maxMipLevel=0;else if(s.isDataTexture3D)n.texImage3D(32879,0,m,a.width,a.height,a.depth,0,v,p,a.data),t.__maxMipLevel=0;else if(g.length>0&&j){for(let e=0,t=g.length;e<t;e++)f=g[e],n.texImage2D(3553,e,m,v,p,f);s.generateMipmaps=!1,t.__maxMipLevel=g.length-1}else n.texImage2D(3553,0,m,v,p,a),t.__maxMipLevel=0;u(s,j)&&d(b,s,a.width,a.height),t.__version=s.version,s.onUpdate&&s.onUpdate(s)}function $(t,s,o){if(s.image.length!==6)return;M(t,s),n.activeTexture(33984+o),n.bindTexture(34067,t.__webglTexture),e.pixelStorei(37440,s.flipY),e.pixelStorei(37441,s.premultiplyAlpha),e.pixelStorei(3317,s.unpackAlignment),e.pixelStorei(37443,0);const j=s&&(s.isCompressedTexture||s.image[0].isCompressedTexture),v=s.image[0]&&s.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!j&&!v?m[e]=F(s.image[e],!1,!0,te):m[e]=v?s.image[e].image:s.image[e];const b=m[0],y=c(b)||r,f=i.convert(s.format),p=i.convert(s.type),g=l(s.internalFormat,f,p);h(34067,s,y);let a;if(j){for(let e=0;e<6;e++){a=m[e].mipmaps;for(let o=0;o<a.length;o++){const t=a[o];s.format!==V&&s.format!==pe?f!==null?n.compressedTexImage2D(34069+e,o,g,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+e,o,g,t.width,t.height,0,f,p,t.data)}}t.__maxMipLevel=a.length-1}else{a=s.mipmaps;for(let e=0;e<6;e++)if(v){n.texImage2D(34069+e,0,g,m[e].width,m[e].height,0,f,p,m[e].data);for(let t=0;t<a.length;t++){const o=a[t],s=o.image[e].image;n.texImage2D(34069+e,t+1,g,s.width,s.height,0,f,p,s.data)}}else{n.texImage2D(34069+e,0,g,f,p,m[e]);for(let t=0;t<a.length;t++){const s=a[t];n.texImage2D(34069+e,t+1,g,f,p,s.image[e])}}t.__maxMipLevel=a.length}u(s,y)&&d(34067,s,b.width,b.height),t.__version=s.version,s.onUpdate&&s.onUpdate(s)}function k(t,o,a,r){const c=o.texture,d=i.convert(c.format),u=i.convert(c.type),h=l(c.internalFormat,d,u);r===32879||r===35866?n.texImage3D(r,0,h,o.width,o.height,o.depth,0,d,u,null):n.texImage2D(r,0,h,o.width,o.height,0,d,u,null),n.bindFramebuffer(36160,t),e.framebufferTexture2D(36160,a,r,s.get(c).__webglTexture,0),n.bindFramebuffer(36160,null)}function y(t,n,s){if(e.bindRenderbuffer(36161,t),n.depthBuffer&&!n.stencilBuffer){let o=33189;if(s){const t=n.depthTexture;t&&t.isDepthTexture&&(t.type===ee?o=36012:t.type===tn&&(o=33190));const s=m(n);e.renderbufferStorageMultisample(36161,s,o,n.width,n.height)}else e.renderbufferStorage(36161,o,n.width,n.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(n.depthBuffer&&n.stencilBuffer){if(s){const t=m(n);e.renderbufferStorageMultisample(36161,t,35056,n.width,n.height)}else e.renderbufferStorage(36161,34041,n.width,n.height);e.framebufferRenderbuffer(36160,33306,36161,t)}else{const t=n.texture,a=i.convert(t.format),r=i.convert(t.type),o=l(t.internalFormat,a,r);if(s){const t=m(n);e.renderbufferStorageMultisample(36161,t,o,n.width,n.height)}else e.renderbufferStorage(36161,o,n.width,n.height)}e.bindRenderbuffer(36161,null)}function K(t,o){const a=o&&o.isWebGLCubeRenderTarget;if(a)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,t),!o.depthTexture||!o.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(o.depthTexture).__webglTexture||o.depthTexture.image.width!==o.width||o.depthTexture.image.height!==o.height)&&(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),g(o.depthTexture,0);const i=s.get(o.depthTexture).__webglTexture;if(o.depthTexture.format===Se)e.framebufferTexture2D(36160,36096,3553,i,0);else if(o.depthTexture.format===gt)e.framebufferTexture2D(36160,33306,3553,i,0);else throw new Error("Unknown depthTexture format")}function q(t){const o=s.get(t),i=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture){if(i)throw new Error("target.depthTexture not supported in Cube render targets");K(o.__webglFramebuffer,t)}else if(i){o.__webglDepthbuffer=[];for(let s=0;s<6;s++)n.bindFramebuffer(36160,o.__webglFramebuffer[s]),o.__webglDepthbuffer[s]=e.createRenderbuffer(),y(o.__webglDepthbuffer[s],t,!1)}else n.bindFramebuffer(36160,o.__webglFramebuffer),o.__webglDepthbuffer=e.createRenderbuffer(),y(o.__webglDepthbuffer,t,!1);n.bindFramebuffer(36160,null)}function Y(t){const o=t.texture,f=s.get(t),p=s.get(o);t.addEventListener("dispose",C),p.__webglTexture=e.createTexture(),p.__version=o.version,a.memory.textures++;const v=t.isWebGLCubeRenderTarget===!0,b=t.isWebGLMultisampleRenderTarget===!0,j=o.isDataTexture3D||o.isDataTexture2DArray,g=c(t)||r;if(r&&o.format===pe&&(o.type===ee||o.type===nn)&&(o.format=V,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),v){f.__webglFramebuffer=[];for(let t=0;t<6;t++)f.__webglFramebuffer[t]=e.createFramebuffer()}else if(f.__webglFramebuffer=e.createFramebuffer(),b)if(r){f.__webglMultisampledFramebuffer=e.createFramebuffer(),f.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,f.__webglColorRenderbuffer);const s=i.convert(o.format),a=i.convert(o.type),r=l(o.internalFormat,s,a),c=m(t);e.renderbufferStorageMultisample(36161,c,r,t.width,t.height),n.bindFramebuffer(36160,f.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,f.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),t.depthBuffer&&(f.__webglDepthRenderbuffer=e.createRenderbuffer(),y(f.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(v){n.bindTexture(34067,p.__webglTexture),h(34067,o,g);for(let e=0;e<6;e++)k(f.__webglFramebuffer[e],t,36064,34069+e);u(o,g)&&d(34067,o,t.width,t.height),n.bindTexture(34067,null)}else{let e=3553;if(j)if(r){const t=o.isDataTexture3D;e=t?32879:35866}else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");n.bindTexture(e,p.__webglTexture),h(e,o,g),k(f.__webglFramebuffer,t,36064,e),u(o,g)&&d(3553,o,t.width,t.height),n.bindTexture(3553,null)}t.depthBuffer&&q(t)}function G(e){const t=e.texture,o=c(e)||r;if(u(t,o)){const o=e.isWebGLCubeRenderTarget?34067:3553,i=s.get(t).__webglTexture;n.bindTexture(o,i),d(o,t,e.width,e.height),n.bindTexture(o,null)}}function X(t){if(t.isWebGLMultisampleRenderTarget)if(r){const a=t.width,r=t.height;let o=16384;t.depthBuffer&&(o|=256),t.stencilBuffer&&(o|=1024);const i=s.get(t);n.bindFramebuffer(36008,i.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,i.__webglFramebuffer),e.blitFramebuffer(0,0,a,r,0,0,a,r,o,9728),n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,i.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function m(e){return r&&e.isWebGLMultisampleRenderTarget?Math.min(Q,e.samples):0}function Z(e){const t=a.render.frame;j.get(e)!==t&&(j.set(e,t),e.update())}let E=!1,A=!1;function ne(e,t){e&&e.isWebGLRenderTarget&&(E===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),E=!0),e=e.texture),g(e,t)}function se(e,t){e&&e.isWebGLCubeRenderTarget&&(A===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),A=!0),e=e.texture),N(e,t)}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=g,this.setTexture2DArray=H,this.setTexture3D=R,this.setTextureCube=N,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=X,this.safeSetTexture2D=ne,this.safeSetTextureCube=se}function $1(e,t,n){const s=n.isWebGL2;function o(e){let n;if(e===hs)return 5121;if(e===xu)return 32819;if(e===Ou)return 32820;if(e===_u)return 33635;if(e===zu)return 5120;if(e===Mu)return 5122;if(e===Gt)return 5123;if(e===Eu)return 5124;if(e===tn)return 5125;if(e===ee)return 5126;if(e===nn)return s?5131:(n=t.get("OES_texture_half_float"),n!==null?n.HALF_FLOAT_OES:null);if(e===yu)return 6406;if(e===pe)return 6407;if(e===V)return 6408;if(e===bu)return 6409;if(e===ou)return 6410;if(e===Se)return 6402;if(e===gt)return 34041;if(e===su)return 6403;if(e===Wd)return 36244;if(e===$d)return 33319;if(e===Vd)return 33320;if(e===Pd)return 36248;if(e===Nd)return 36249;if(e===ei||e===ti||e===ii||e===ai)if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){{if(e===ei)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===ti)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===ii)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===ai)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}}else return null;if(e===ri||e===pi||e===vi||e===ji)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){{if(e===ri)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===pi)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===vi)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===ji)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}}else return null;if(e===dd)return n=t.get("WEBGL_compressed_texture_etc1"),n!==null?n.COMPRESSED_RGB_ETC1_WEBGL:null;if((e===yi||e===wi)&&(n=t.get("WEBGL_compressed_texture_etc"),n!==null)){if(e===yi)return n.COMPRESSED_RGB8_ETC2;if(e===wi)return n.COMPRESSED_RGBA8_ETC2_EAC}if(e===ad||e===id||e===od||e===sd||e===nd||e===ed||e===Jl||e===Zl||e===Ql||e===ql||e===$l||e===Bl||e===nl||e===Xc||e===Bc||e===Zr||e===Qr||e===Xr||e===xr||e===Or||e===wr||e===Id||e===Bd||e===gu||e===Fu||e===$u||e===Qu||e===Zu)return n=t.get("WEBGL_compressed_texture_astc"),n!==null?e:null;if(e===Wc)return n=t.get("EXT_texture_compression_bptc"),n!==null?e:null;if(e===rt)return s?34042:(n=t.get("WEBGL_depth_texture"),n!==null?n.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:o}}xi=class extends E{constructor(e=[]){super(),this.cameras=e}},xi.prototype.isArrayCamera=!0,it=class extends r{constructor(){super(),this.type="Group"}},it.prototype.isGroup=!0,Vl={type:"move"},Ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,c=null;const s=this._targetRay,o=this._grip,i=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(s!==null&&(a=t.getPose(e.targetRaySpace,n),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Vl))),i&&e.hand){c=!0;for(const o of e.hand.values()){const a=t.getJointPose(o,n);if(i.joints[o.jointName]===void 0){const e=new it;e.matrixAutoUpdate=!1,e.visible=!1,i.joints[o.jointName]=e,i.add(e)}const s=i.joints[o.jointName];a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.jointRadius=a.radius),s.visible=a!==null}const r=i.joints["index-finger-tip"],l=i.joints["thumb-tip"],s=r.position.distanceTo(l.position),o=.02,a=.005;i.inputState.pinching&&s>o+a?(i.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!i.inputState.pinching&&s<=o-a&&(i.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));return s!==null&&(s.visible=a!==null),o!==null&&(o.visible=r!==null),i!==null&&(i.visible=c!==null),this}},Wl=class extends je{constructor(t,n){super();const u=this,_=t.state;let o=null,y=1,m=null,j="local-floor",f=null;const i=[],r=new Map,c=new E;c.layers.enable(1),c.viewport=new a;const l=new E;l.layers.enable(2),l.viewport=new a;const k=[c,l],s=new xi;s.layers.enable(1),s.layers.enable(2);let p=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=i[e];return t===void 0&&(t=new Ln,i[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=i[e];return t===void 0&&(t=new Ln,i[e]=t),t.getGripSpace()},this.getHand=function(e){let t=i[e];return t===void 0&&(t=new Ln,i[e]=t),t.getHandSpace()};function d(e){const t=r.get(e.inputSource);t&&t.dispatchEvent({type:e.type,data:e.inputSource})}function S(){r.forEach(function(e,t){e.disconnect(t)}),r.clear(),p=null,g=null,_.bindXRFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),h.stop(),u.isPresenting=!1,u.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e){y=e,u.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){j=e,u.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m},this.getSession=function(){return o},this.setSession=async function(e){if(o=e,o!==null){o.addEventListener("select",d),o.addEventListener("selectstart",d),o.addEventListener("selectend",d),o.addEventListener("squeeze",d),o.addEventListener("squeezestart",d),o.addEventListener("squeezeend",d),o.addEventListener("end",S),o.addEventListener("inputsourceschange",x);const e=n.getContextAttributes();e.xrCompatible!==!0&&await n.makeXRCompatible();const t={antialias:e.antialias,alpha:e.alpha,depth:e.depth,stencil:e.stencil,framebufferScaleFactor:y},s=new XRWebGLLayer(o,n,t);o.updateRenderState({baseLayer:s}),m=await o.requestReferenceSpace(j),h.setContext(o),h.start(),u.isPresenting=!0,u.dispatchEvent({type:"sessionstart"})}};function x(e){const t=o.inputSources;for(let e=0;e<i.length;e++)r.set(t[e],i[e]);for(let t=0;t<e.removed.length;t++){const n=e.removed[t],s=r.get(n);s&&(s.dispatchEvent({type:"disconnected",data:n}),r.delete(n))}for(let t=0;t<e.added.length;t++){const n=e.added[t],s=r.get(n);s&&s.dispatchEvent({type:"connected",data:n})}}const w=new e,O=new e;function C(e,t,n){w.setFromMatrixPosition(t.matrixWorld),O.setFromMatrixPosition(n.matrixWorld);const m=w.distanceTo(O),s=t.projectionMatrix.elements,u=n.projectionMatrix.elements,a=s[14]/(s[10]-1),r=s[14]/(s[10]+1),v=(s[9]+1)/s[5],g=(s[9]-1)/s[5],d=(s[8]-1)/s[0],h=(u[8]+1)/u[0],f=a*d,p=a*h,o=m/(-d+h),i=o*-d;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(i),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();const l=a+o,c=r+o,b=f-i,j=p+(m-i),y=v*r/c*l,_=g*r/c*l;e.projectionMatrix.makePerspective(b,j,y,_,l,c)}function b(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.getCamera=function(e){s.near=l.near=c.near=e.near,s.far=l.far=c.far=e.far,(p!==s.near||g!==s.far)&&(o.updateRenderState({depthNear:s.near,depthFar:s.far}),p=s.near,g=s.far);const n=e.parent,t=s.cameras;b(s,n);for(let e=0;e<t.length;e++)b(t[e],n);e.matrixWorld.copy(s.matrixWorld),e.matrix.copy(s.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale);const i=e.children;for(let e=0,t=i.length;e<t;e++)i[e].updateMatrixWorld(!0);return t.length===2?C(s,c,l):s.projectionMatrix.copy(c.projectionMatrix),s};let v=null;function A(e,t){if(f=t.getViewerPose(m),f!==null){const e=f.views,t=o.renderState.baseLayer;_.bindXRFramebuffer(t.framebuffer);let n=!1;e.length!==s.cameras.length&&(s.cameras.length=0,n=!0);for(let o=0;o<e.length;o++){const r=e[o],a=t.getViewport(r),i=k[o];i.matrix.fromArray(r.transform.matrix),i.projectionMatrix.fromArray(r.projectionMatrix),i.viewport.set(a.x,a.y,a.width,a.height),o===0&&s.matrix.copy(i.matrix),n===!0&&s.cameras.push(i)}}const n=o.inputSources;for(let e=0;e<i.length;e++){const s=i[e],o=n[e];s.update(o,t,m)}v&&v(e,t)}const h=new Rd;h.setAnimationLoop(A),this.setAnimationLoop=function(e){v=e},this.dispose=function(){}}};function V1(e){function l(e,t){e.fogColor.value.copy(t.color),t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)}function u(e,l,u,v){l.isMeshBasicMaterial?t(e,l):l.isMeshLambertMaterial?(t(e,l),c(e,l)):l.isMeshToonMaterial?(t(e,l),o(e,l)):l.isMeshPhongMaterial?(t(e,l),s(e,l)):l.isMeshStandardMaterial?(t(e,l),l.isMeshPhysicalMaterial?h(e,l):n(e,l)):l.isMeshMatcapMaterial?(t(e,l),m(e,l)):l.isMeshDepthMaterial?(t(e,l),f(e,l)):l.isMeshDistanceMaterial?(t(e,l),p(e,l)):l.isMeshNormalMaterial?(t(e,l),g(e,l)):l.isLineBasicMaterial?(d(e,l),l.isLineDashedMaterial&&i(e,l)):l.isPointsMaterial?a(e,l,u,v):l.isSpriteMaterial?r(e,l):l.isShadowMaterial?(e.color.value.copy(l.color),e.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function t(t,n){t.opacity.value=n.opacity,n.color&&t.diffuse.value.copy(n.color),n.emissive&&t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(t.map.value=n.map),n.alphaMap&&(t.alphaMap.value=n.alphaMap),n.specularMap&&(t.specularMap.value=n.specularMap);const i=e.get(n).envMap;if(i){t.envMap.value=i,t.flipEnvMap.value=i.isCubeTexture&&i._needsFlipEnvMap?-1:1,t.reflectivity.value=n.reflectivity,t.refractionRatio.value=n.refractionRatio;const s=e.get(i).__maxMipLevel;s!==void 0&&(t.maxMipLevel.value=s)}n.lightMap&&(t.lightMap.value=n.lightMap,t.lightMapIntensity.value=n.lightMapIntensity),n.aoMap&&(t.aoMap.value=n.aoMap,t.aoMapIntensity.value=n.aoMapIntensity);let s;n.map?s=n.map:n.specularMap?s=n.specularMap:n.displacementMap?s=n.displacementMap:n.normalMap?s=n.normalMap:n.bumpMap?s=n.bumpMap:n.roughnessMap?s=n.roughnessMap:n.metalnessMap?s=n.metalnessMap:n.alphaMap?s=n.alphaMap:n.emissiveMap?s=n.emissiveMap:n.clearcoatMap?s=n.clearcoatMap:n.clearcoatNormalMap?s=n.clearcoatNormalMap:n.clearcoatRoughnessMap&&(s=n.clearcoatRoughnessMap),s!==void 0&&(s.isWebGLRenderTarget&&(s=s.texture),s.matrixAutoUpdate===!0&&s.updateMatrix(),t.uvTransform.value.copy(s.matrix));let o;n.aoMap?o=n.aoMap:n.lightMap&&(o=n.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),t.uv2Transform.value.copy(o.matrix))}function d(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity}function i(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function a(e,t,n,s){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*n,e.scale.value=s*.5,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);let o;t.map?o=t.map:t.alphaMap&&(o=t.alphaMap),o!==void 0&&(o.matrixAutoUpdate===!0&&o.updateMatrix(),e.uvTransform.value.copy(o.matrix))}function r(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap);let n;t.map?n=t.map:t.alphaMap&&(n=t.alphaMap),n!==void 0&&(n.matrixAutoUpdate===!0&&n.updateMatrix(),e.uvTransform.value.copy(n.matrix))}function c(e,t){t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap)}function s(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===v&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===v&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function o(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===v&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===v&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function n(t,n){t.roughness.value=n.roughness,t.metalness.value=n.metalness,n.roughnessMap&&(t.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(t.metalnessMap.value=n.metalnessMap),n.emissiveMap&&(t.emissiveMap.value=n.emissiveMap),n.bumpMap&&(t.bumpMap.value=n.bumpMap,t.bumpScale.value=n.bumpScale,n.side===v&&(t.bumpScale.value*=-1)),n.normalMap&&(t.normalMap.value=n.normalMap,t.normalScale.value.copy(n.normalScale),n.side===v&&t.normalScale.value.negate()),n.displacementMap&&(t.displacementMap.value=n.displacementMap,t.displacementScale.value=n.displacementScale,t.displacementBias.value=n.displacementBias);const s=e.get(n).envMap;s&&(t.envMapIntensity.value=n.envMapIntensity)}function h(e,t){n(e,t),e.reflectivity.value=t.reflectivity,e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.sheen&&e.sheen.value.copy(t.sheen),t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap),t.clearcoatNormalMap&&(e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),e.clearcoatNormalMap.value=t.clearcoatNormalMap,t.side===v&&e.clearcoatNormalScale.value.negate()),e.transmission.value=t.transmission,t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap)}function m(e,t){t.matcap&&(e.matcap.value=t.matcap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===v&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===v&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function f(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function p(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),e.referencePosition.value.copy(t.referencePosition),e.nearDistance.value=t.nearDistance,e.farDistance.value=t.farDistance}function g(e,t){t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===v&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===v&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}return{refreshFogUniforms:l,refreshMaterialUniforms:u}}function B1(){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e}function c(n){n=n||{};const f=n.canvas!==void 0?n.canvas:B1(),Se=n.context!==void 0?n.context:null,Ce=n.alpha!==void 0&&n.alpha,De=n.depth===void 0||n.depth,Le=n.stencil===void 0||n.stencil,ze=n.antialias!==void 0&&n.antialias,xe=n.premultipliedAlpha===void 0||n.premultipliedAlpha,Fe=n.preserveDrawingBuffer!==void 0&&n.preserveDrawingBuffer,Ne=n.powerPreference!==void 0?n.powerPreference:"default",Re=n.failIfMajorPerformanceCaveat!==void 0&&n.failIfMajorPerformanceCaveat;let p=null,d=null;const F=[],N=[];this.domElement=f,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Me,this.physicallyCorrectLights=!1,this.toneMapping=_t,this.toneMappingExposure=1;const c=this;let J=!1,G=0,Q=0,j=null,B=-1,z=null;const M=new a,U=new a;let Z=null,k=f.width,C=f.height,v=1,de=null,le=null;const R=new a(0,0,k,C),P=new a(0,0,k,C);let K=!1;const te=new Nt;let $=!1,q=!1;const L=new o,x=new e,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return j===null?v:1}let i=Se;function Oe(e,t){for(let n=0;n<e.length;n++){const o=e[n],s=f.getContext(o,t);if(s!==null)return s}return null}try{const e={alpha:Ce,depth:De,stencil:Le,antialias:ze,premultipliedAlpha:xe,preserveDrawingBuffer:Fe,powerPreference:Ne,failIfMajorPerformanceCaveat:Re};if(f.addEventListener("webglcontextlost",ye,!1),f.addEventListener("webglcontextrestored",_e,!1),i===null){const t=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&t.shift(),i=Oe(t,e),i===null)throw Oe(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}i.getShaderPrecisionFormat===void 0&&(i.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}let u,h,r,b,l,g,T,H,se,D,S,ne,W,I,O,w,E,me,fe,pe,_,m;function be(){u=new v0(i),h=new w0(i,u,n),u.init(h),_=new $1(i,u,h),r=new U1(i,u,h),b=new d0(i),l=new s4,g=new W1(i,u,r,l,h,_,b),T=new C0(c),H=new I1(i,h),m=new j0(i,u,H,h),se=new p0(i,H,b,m),D=new a0(i,se,H,b),me=new r0(i),O=new x0(l),S=new o4(c,T,u,h,m,O),ne=new V1(l),W=new Q1(l),I=new K1(u,h),E=new m0(c,T,r,D,xe),w=new Ll(c,D,h),fe=new _0(i,u,b,h),pe=new f0(i,u,b,h),b.programs=S.programs,c.capabilities=h,c.extensions=u,c.properties=l,c.renderLists=W,c.shadowMap=w,c.state=r,c.info=b}be();const y=new Wl(c,i);this.xr=y,this.getContext=function(){return i},this.getContextAttributes=function(){return i.getContextAttributes()},this.forceContextLoss=function(){const e=u.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){const e=u.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(e){if(e===void 0)return;v=e,this.setSize(k,C,!1)},this.getSize=function(e){return e===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),e=new t),e.set(k,C)},this.setSize=function(e,t,n){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=e,C=t,f.width=Math.floor(e*v),f.height=Math.floor(t*v),n!==!1&&(f.style.width=e+"px",f.style.height=t+"px"),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),e=new t),e.set(k*v,C*v).floor()},this.setDrawingBufferSize=function(e,t,n){k=e,C=t,v=n,f.width=Math.floor(e*n),f.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),e=new a),e.copy(M)},this.getViewport=function(e){return e.copy(R)},this.setViewport=function(e,t,n,s){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,s),r.viewport(M.copy(R).multiplyScalar(v).floor())},this.getScissor=function(e){return e.copy(P)},this.setScissor=function(e,t,n,s){e.isVector4?P.set(e.x,e.y,e.z,e.w):P.set(e,t,n,s),r.scissor(U.copy(P).multiplyScalar(v).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(e){r.setScissorTest(K=e)},this.setOpaqueSort=function(e){de=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),e=new s),e.copy(E.getClearColor())},this.setClearColor=function(){E.setClearColor.apply(E,arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha.apply(E,arguments)},this.clear=function(e,t,n){let s=0;(e===void 0||e)&&(s|=16384),(t===void 0||t)&&(s|=256),(n===void 0||n)&&(s|=1024),i.clear(s)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){f.removeEventListener("webglcontextlost",ye,!1),f.removeEventListener("webglcontextrestored",_e,!1),W.dispose(),I.dispose(),l.dispose(),T.dispose(),D.dispose(),m.dispose(),y.dispose(),y.removeEventListener("sessionstart",ie),y.removeEventListener("sessionend",je),A.stop()};function ye(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const e=b.autoReset,t=w.enabled,n=w.autoUpdate,s=w.needsUpdate,o=w.type;be(),b.autoReset=e,w.enabled=t,w.autoUpdate=n,w.needsUpdate=s,w.type=o}function we(e){const t=e.target;t.removeEventListener("dispose",we),Ae(t)}function Ae(e){Te(e),l.remove(e)}function Te(e){const t=l.get(e).programs;t!==void 0&&t.forEach(function(e){S.releaseProgram(e)})}function Ee(e,t){e.render(function(e){c.renderBufferImmediate(e,t)})}this.renderBufferImmediate=function(e,t){m.initAttributes();const n=l.get(e);e.hasPositions&&!n.position&&(n.position=i.createBuffer()),e.hasNormals&&!n.normal&&(n.normal=i.createBuffer()),e.hasUvs&&!n.uv&&(n.uv=i.createBuffer()),e.hasColors&&!n.color&&(n.color=i.createBuffer());const s=t.getAttributes();e.hasPositions&&(i.bindBuffer(34962,n.position),i.bufferData(34962,e.positionArray,35048),m.enableAttribute(s.position),i.vertexAttribPointer(s.position,3,5126,!1,0,0)),e.hasNormals&&(i.bindBuffer(34962,n.normal),i.bufferData(34962,e.normalArray,35048),m.enableAttribute(s.normal),i.vertexAttribPointer(s.normal,3,5126,!1,0,0)),e.hasUvs&&(i.bindBuffer(34962,n.uv),i.bufferData(34962,e.uvArray,35048),m.enableAttribute(s.uv),i.vertexAttribPointer(s.uv,2,5126,!1,0,0)),e.hasColors&&(i.bindBuffer(34962,n.color),i.bufferData(34962,e.colorArray,35048),m.enableAttribute(s.color),i.vertexAttribPointer(s.color,3,5126,!1,0,0)),m.disableUnusedAttributes(),i.drawArrays(4,0,e.count),e.count=0},this.renderBufferDirect=function(e,t,n,s,o,i){t===null&&(t=oe);const _=o.isMesh&&o.matrixWorld.determinant()<0,v=re(e,t,s,o);r.setMaterial(s,_);let c=n.index;const h=n.attributes.position;if(c===null){if(h===void 0||h.count===0)return}else if(c.count===0)return;let l=1;s.wireframe===!0&&(c=se.getWireframeAttribute(n),l=2),(s.morphTargets||s.morphNormals)&&me.update(o,n,s,v),m.setup(o,s,v,n,c);let f,a=fe;c!==null&&(f=H.get(c),a=pe,a.setIndex(f));const b=c!==null?c.count:h.count,p=n.drawRange.start*l,j=n.drawRange.count*l,g=i!==null?i.start*l:0,y=i!==null?i.count*l:1/0,u=Math.max(p,g),w=Math.min(b,p+j,g+y)-1,d=Math.max(0,w-u+1);if(d===0)return;if(o.isMesh)s.wireframe===!0?(r.setLineWidth(s.wireframeLinewidth*ve()),a.setMode(1)):a.setMode(4);else if(o.isLine){let e=s.linewidth;e===void 0&&(e=1),r.setLineWidth(e*ve()),o.isLineSegments?a.setMode(1):o.isLineLoop?a.setMode(2):a.setMode(3)}else o.isPoints?a.setMode(0):o.isSprite&&a.setMode(4);if(o.isInstancedMesh)a.renderInstances(u,d,o.count);else if(n.isInstancedBufferGeometry){const e=Math.min(n.instanceCount,n._maxInstanceCount);a.renderInstances(u,d,e)}else a.render(u,d)},this.compile=function(e,t){d=I.get(e),d.init(),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(d.pushLight(e),e.castShadow&&d.pushShadow(e))}),d.setupLights(),e.traverse(function(t){const n=t.material;if(n)if(Array.isArray(n))for(let s=0;s<n.length;s++){const o=n[s];Y(o,e,t)}else Y(n,e,t)})};let X=null;function ke(e){X&&X(e)}function ie(){A.stop()}function je(){A.start()}const A=new Rd;A.setAnimationLoop(ke),typeof window!="undefined"&&A.setContext(window),this.setAnimationLoop=function(e){X=e,y.setAnimationLoop(e),e===null?A.stop():A.start()},y.addEventListener("sessionstart",ie),y.addEventListener("sessionend",je),this.render=function(e,t){let n,s;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),n=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),s=arguments[3]),t!==void 0&&t.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;e.autoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(t=y.getCamera(t)),e.isScene===!0&&e.onBeforeRender(c,e,t,n||j),d=I.get(e,N.length),d.init(),N.push(d),L.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),te.setFromProjectionMatrix(L),q=this.localClippingEnabled,$=O.init(this.clippingPlanes,q,t),p=W.get(e,F.length),p.init(),F.push(p),ae(e,t,0,c.sortObjects),p.finish(),c.sortObjects===!0&&p.sort(de,le),$===!0&&O.beginShadows();const a=d.state.shadowsArray;w.render(a,e,t),d.setupLights(),d.setupLightsView(t),$===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),n!==void 0&&this.setRenderTarget(n),E.render(p,e,t,s);const o=p.opaque,i=p.transparent;o.length>0&&ge(o,e,t),i.length>0&&ge(i,e,t),j!==null&&(g.updateRenderTargetMipmap(j),g.updateMultisampleRenderTarget(j)),e.isScene===!0&&e.onAfterRender(c,e,t),r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),r.setPolygonOffset(!1),m.resetDefaultState(),B=-1,z=null,N.pop(),N.length>0?d=N[N.length-1]:d=null,F.pop(),F.length>0?p=F[F.length-1]:p=null};function ae(e,t,n,s){if(e.visible===!1)return;const i=e.layers.test(t.layers);if(i)if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)d.pushLight(e),e.castShadow&&d.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||te.intersectsSprite(e)){s&&x.setFromMatrixPosition(e.matrixWorld).applyMatrix4(L);const o=D.update(e),t=e.material;t.visible&&p.push(e,o,t,n,x.z,null)}}else if(e.isImmediateRenderObject)s&&x.setFromMatrixPosition(e.matrixWorld).applyMatrix4(L),p.push(e,null,e.material,n,x.z,null);else if((e.isMesh||e.isLine||e.isPoints)&&(e.isSkinnedMesh&&e.skeleton.frame!==b.render.frame&&(e.skeleton.update(),e.skeleton.frame=b.render.frame),!e.frustumCulled||te.intersectsObject(e))){s&&x.setFromMatrixPosition(e.matrixWorld).applyMatrix4(L);const o=D.update(e),t=e.material;if(Array.isArray(t)){const s=o.groups;for(let i=0,c=s.length;i<c;i++){const r=s[i],a=t[r.materialIndex];a&&a.visible&&p.push(e,o,a,n,x.z,r)}}else t.visible&&p.push(e,o,t,n,x.z,null)}const o=e.children;for(let e=0,i=o.length;e<i;e++)ae(o[e],t,n,s)}function ge(e,t,n){const s=t.isScene===!0?t.overrideMaterial:null;for(let i=0,h=e.length;i<h;i++){const o=e[i],a=o.object,c=o.geometry,l=s===null?o.material:s,u=o.group;if(n.isArrayCamera){const e=n.cameras;for(let s=0,o=e.length;s<o;s++){const n=e[s];a.layers.test(n.layers)&&(r.viewport(M.copy(n.viewport)),d.setupLightsView(n),ue(a,t,n,c,l,u))}}else ue(a,t,n,c,l,u)}}function ue(e,t,n,s,o,i){if(e.onBeforeRender(c,t,n,s,o,i),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),e.isImmediateRenderObject){const s=re(n,t,o,e);r.setMaterial(o),m.reset(),Ee(e,s)}else c.renderBufferDirect(n,t,s,o,e,i);e.onAfterRender(c,t,n,s,o,i)}function Y(e,t,n){t.isScene!==!0&&(t=oe);const i=l.get(e),s=d.state.lights,f=d.state.shadowsArray,m=s.state.version,a=S.getParameters(e,s.state,f,t,n),h=S.getProgramCacheKey(a);let u=i.programs;i.environment=e.isMeshStandardMaterial?t.environment:null,i.fog=t.fog,i.envMap=T.get(e.envMap||i.environment),u===void 0&&(e.addEventListener("dispose",we),u=new Map,i.programs=u);let r=u.get(h);if(r!==void 0){if(i.currentProgram===r&&i.lightsStateVersion===m)return ce(e,a),r}else a.uniforms=S.getUniforms(e),e.onBuild(a,c),e.onBeforeCompile(a,c),r=S.acquireProgram(a,h),u.set(h,r),i.uniforms=a.uniforms;const o=i.uniforms;(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(o.clippingPlanes=O.uniform),ce(e,a),i.needsLights=He(e),i.lightsStateVersion=m,i.needsLights&&(o.ambientLightColor.value=s.state.ambient,o.lightProbe.value=s.state.probe,o.directionalLights.value=s.state.directional,o.directionalLightShadows.value=s.state.directionalShadow,o.spotLights.value=s.state.spot,o.spotLightShadows.value=s.state.spotShadow,o.rectAreaLights.value=s.state.rectArea,o.ltc_1.value=s.state.rectAreaLTC1,o.ltc_2.value=s.state.rectAreaLTC2,o.pointLights.value=s.state.point,o.pointLightShadows.value=s.state.pointShadow,o.hemisphereLights.value=s.state.hemi,o.directionalShadowMap.value=s.state.directionalShadowMap,o.directionalShadowMatrix.value=s.state.directionalShadowMatrix,o.spotShadowMap.value=s.state.spotShadowMap,o.spotShadowMatrix.value=s.state.spotShadowMatrix,o.pointShadowMap.value=s.state.pointShadowMap,o.pointShadowMatrix.value=s.state.pointShadowMatrix);const p=r.getUniforms(),g=he.seqWithValue(p.seq,o);return i.currentProgram=r,i.uniformsList=g,r}function ce(e,t){const n=l.get(e);n.outputEncoding=t.outputEncoding,n.instancing=t.instancing,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas}function re(e,t,n,s){t.isScene!==!0&&(t=oe),g.resetTextureUnits();const b=t.fog,S=n.isMeshStandardMaterial?t.environment:null,A=j===null?c.outputEncoding:j.texture.encoding,w=T.get(n.envMap||S),k=n.vertexColors===!0&&s.geometry&&s.geometry.attributes.color&&s.geometry.attributes.color.itemSize===4,o=l.get(n),E=d.state.lights;if($===!0&&(q===!0||e!==z)){const t=e===z&&n.id===B;O.setState(n,e,t)}let u=!1;n.version===o.__version?o.needsLights&&o.lightsStateVersion!==E.state.version?u=!0:o.outputEncoding!==A?u=!0:s.isInstancedMesh&&o.instancing===!1?u=!0:!s.isInstancedMesh&&o.instancing===!0?u=!0:o.envMap!==w?u=!0:n.fog&&o.fog!==b?u=!0:o.numClippingPlanes!==void 0&&(o.numClippingPlanes!==O.numPlanes||o.numIntersection!==O.numIntersection)?u=!0:o.vertexAlphas!==k&&(u=!0):(u=!0,o.__version=n.version);let p=o.currentProgram;u===!0&&(p=Y(n,t,s));let _=!1,f=!1,y=!1;const a=p.getUniforms(),m=o.uniforms;if(r.useProgram(p.program)&&(_=!0,f=!0,y=!0),n.id!==B&&(B=n.id,f=!0),_||z!==e){if(a.setValue(i,"projectionMatrix",e.projectionMatrix),h.logarithmicDepthBuffer&&a.setValue(i,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),z!==e&&(z=e,f=!0,y=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){const t=a.map.cameraPosition;t!==void 0&&t.setValue(i,x.setFromMatrixPosition(e.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&a.setValue(i,"isOrthographic",e.isOrthographicCamera===!0),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||n.skinning)&&a.setValue(i,"viewMatrix",e.matrixWorldInverse)}if(n.skinning){a.setOptional(i,s,"bindMatrix"),a.setOptional(i,s,"bindMatrixInverse");const e=s.skeleton;if(e){const t=e.bones;if(h.floatVertexTextures){if(e.boneTexture===null){let n=Math.sqrt(t.length*4);n=t4(n),n=Math.max(n,4);const s=new Float32Array(n*n*4);s.set(e.boneMatrices);const o=new qo(s,n,n,V,ee);e.boneMatrices=s,e.boneTexture=o,e.boneTextureSize=n}a.setValue(i,"boneTexture",e.boneTexture,g),a.setValue(i,"boneTextureSize",e.boneTextureSize)}else a.setOptional(i,e,"boneMatrices")}}return(f||o.receiveShadow!==s.receiveShadow)&&(o.receiveShadow=s.receiveShadow,a.setValue(i,"receiveShadow",s.receiveShadow)),f&&(a.setValue(i,"toneMappingExposure",c.toneMappingExposure),o.needsLights&&Pe(m,y),b&&n.fog&&ne.refreshFogUniforms(m,b),ne.refreshMaterialUniforms(m,n,v,C),he.upload(i,o.uniformsList,m,g)),n.isShaderMaterial&&n.uniformsNeedUpdate===!0&&(he.upload(i,o.uniformsList,m,g),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&a.setValue(i,"center",s.center),a.setValue(i,"modelViewMatrix",s.modelViewMatrix),a.setValue(i,"normalMatrix",s.normalMatrix),a.setValue(i,"modelMatrix",s.matrixWorld),p}function Pe(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function He(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return j},this.setRenderTarget=function(e,t=0,n=0){j=e,G=t,Q=n,e&&l.get(e).__webglFramebuffer===void 0&&g.setupRenderTarget(e);let s=null,o=!1,a=!1;if(e){const n=e.texture;(n.isDataTexture3D||n.isDataTexture2DArray)&&(a=!0);const i=l.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(s=i[t],o=!0):e.isWebGLMultisampleRenderTarget?s=l.get(e).__webglMultisampledFramebuffer:s=i,M.copy(e.viewport),U.copy(e.scissor),Z=e.scissorTest}else M.copy(R).multiplyScalar(v).floor(),U.copy(P).multiplyScalar(v).floor(),Z=K;if(r.bindFramebuffer(36160,s),r.viewport(M),r.scissor(U),r.setScissorTest(Z),o){const s=l.get(e.texture);i.framebufferTexture2D(36160,36064,34069+t,s.__webglTexture,n)}else if(a){const s=l.get(e.texture),o=t||0;i.framebufferTextureLayer(36160,36064,s.__webglTexture,n||0,o)}},this.readRenderTargetPixels=function(e,t,n,s,o,a,c){if(!e||!e.isWebGLRenderTarget){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let d=l.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&c!==void 0&&(d=d[c]),d){r.bindFramebuffer(36160,d);try{const l=e.texture,c=l.format,r=l.type;if(c!==V&&_.convert(c)!==i.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const d=r===nn&&(u.has("EXT_color_buffer_half_float")||h.isWebGL2&&u.has("EXT_color_buffer_float"));if(r!==hs&&_.convert(r)!==i.getParameter(35738)&&!(r===ee&&(h.isWebGL2||u.has("OES_texture_float")||u.has("WEBGL_color_buffer_float")))&&!d){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}i.checkFramebufferStatus(36160)===36053?t>=0&&t<=e.width-s&&n>=0&&n<=e.height-o&&i.readPixels(t,n,s,o,_.convert(c),_.convert(r),a):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const e=j!==null?l.get(j).__webglFramebuffer:null;r.bindFramebuffer(36160,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){const s=Math.pow(2,-n),o=Math.floor(t.image.width*s),a=Math.floor(t.image.height*s),c=_.convert(t.format);g.setTexture2D(t,0),i.copyTexImage2D(3553,n,c,e.x,e.y,o,a,0),r.unbindTexture()},this.copyTextureToTexture=function(e,t,n,s=0){const c=t.image.width,l=t.image.height,o=_.convert(n.format),a=_.convert(n.type);g.setTexture2D(n,0),i.pixelStorei(37440,n.flipY),i.pixelStorei(37441,n.premultiplyAlpha),i.pixelStorei(3317,n.unpackAlignment),t.isDataTexture?i.texSubImage2D(3553,s,e.x,e.y,c,l,o,a,t.image.data):t.isCompressedTexture?i.compressedTexSubImage2D(3553,s,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):i.texSubImage2D(3553,s,e.x,e.y,o,a,t.image),s===0&&n.generateMipmaps&&i.generateMipmap(3553),r.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,s,o=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:l,height:d,data:u}=n.image,h=_.convert(s.format),m=_.convert(s.type);let a;if(s.isDataTexture3D)g.setTexture3D(s,0),a=32879;else if(s.isDataTexture2DArray)g.setTexture2DArray(s,0),a=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}i.pixelStorei(37440,s.flipY),i.pixelStorei(37441,s.premultiplyAlpha),i.pixelStorei(3317,s.unpackAlignment);const f=i.getParameter(3314),p=i.getParameter(32878),v=i.getParameter(3316),b=i.getParameter(3315),j=i.getParameter(32877);i.pixelStorei(3314,l),i.pixelStorei(32878,d),i.pixelStorei(3316,e.min.x),i.pixelStorei(3315,e.min.y),i.pixelStorei(32877,e.min.z),i.texSubImage3D(a,o,t.x,t.y,t.z,e.max.x-e.min.x+1,e.max.y-e.min.y+1,e.max.z-e.min.z+1,h,m,u),i.pixelStorei(3314,f),i.pixelStorei(32878,p),i.pixelStorei(3316,v),i.pixelStorei(3315,b),i.pixelStorei(32877,j),o===0&&s.generateMipmaps&&i.generateMipmap(a),r.unbindTexture()},this.initTexture=function(e){g.setTexture2D(e,0),r.unbindTexture()},this.resetState=function(){G=0,Q=0,j=null,r.reset(),m.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Yl=class extends c{},Yl.prototype.isWebGL1Renderer=!0,Gl=class _FogExp2{constructor(e,t=25e-5){this.name="",this.color=new s(e),this.density=t}clone(){return new _FogExp2(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}},Gl.prototype.isFogExp2=!0,Xl=class _Fog{constructor(e,t=1,n=1e3){this.name="",this.color=new s(e),this.near=t,this.far=n}clone(){return new _Fog(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},Xl.prototype.isFog=!0,Fn=class extends r{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}},Fn.prototype.isScene=!0,tt=class _InterleavedBuffer{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ft,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=U(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=U()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),t=new _InterleavedBuffer(n,this.stride);return t.setUsage(this.usage),t}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=U()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tt.prototype.isInterleavedBuffer=!0,p=new e,Cn=class _InterleavedBufferAttribute{constructor(e,t,n,s){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)p.x=this.getX(t),p.y=this.getY(t),p.z=this.getZ(t),p.applyMatrix4(e),this.setXYZ(t,p.x,p.y,p.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)p.x=this.getX(t),p.y=this.getY(t),p.z=this.getZ(t),p.applyNormalMatrix(e),this.setXYZ(t,p.x,p.y,p.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)p.x=this.getX(t),p.y=this.getY(t),p.z=this.getZ(t),p.transformDirection(e),this.setXYZ(t,p.x,p.y,p.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new f(new this.array.constructor(e),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cn.prototype.isInterleavedBufferAttribute=!0,Oi=class extends y{constructor(e){super(),this.type="SpriteMaterial",this.color=new s(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}},Oi.prototype.isSpriteMaterial=!0,Qe=new e,Ke=new e,_e=new e,Ye=new t,mt=new t,_i=new o,xt=new e,Je=new e,yn=new e,bi=new t,Sn=new t,gi=new t,pd=class extends r{constructor(e){if(super(),this.type="Sprite",Ze===void 0){Ze=new h;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new tt(t,5);Ze.setIndex([0,1,2,0,2,3]),Ze.setAttribute("position",new Cn(e,3,0,!1)),Ze.setAttribute("uv",new Cn(e,2,3,!1))}this.geometry=Ze,this.material=e!==void 0?e:new Oi,this.center=new t(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ke.setFromMatrixScale(this.matrixWorld),_i.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_e.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ke.multiplyScalar(-_e.z);const a=this.material.rotation;let s,o;a!==0&&(o=Math.cos(a),s=Math.sin(a));const i=this.center;Mn(xt.set(-.5,-.5,0),_e,i,Ke,s,o),Mn(Je.set(.5,-.5,0),_e,i,Ke,s,o),Mn(yn.set(.5,.5,0),_e,i,Ke,s,o),bi.set(0,0),Sn.set(1,0),gi.set(1,1);let r=e.ray.intersectTriangle(xt,Je,yn,!1,Qe);if(r===null&&(Mn(Je.set(-.5,.5,0),_e,i,Ke,s,o),Sn.set(0,1),r=e.ray.intersectTriangle(xt,yn,Je,!1,Qe),r===null))return;const c=e.ray.origin.distanceTo(Qe);if(c<e.near||c>e.far)return;n.push({distance:c,point:Qe.clone(),uv:S.getUV(Qe,xt,Je,yn,bi,Sn,gi,new t),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}},pd.prototype.isSprite=!0;function Mn(e,t,n,s,o,i){Ye.subVectors(e,n).addScalar(.5).multiply(s),o!==void 0?(mt.x=i*Ye.x-o*Ye.y,mt.y=o*Ye.x+i*Ye.y):mt.copy(Ye),e.copy(t),e.x+=mt.x,e.y+=mt.y,e.applyMatrix4(_i)}fi=new e,mi=new a,hi=new a,yd=new e,ui=new o,di=class extends D{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new o,this.bindMatrixInverse=new o}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new a,t=this.geometry.attributes.skinWeight;for(let n=0,o=t.count;n<o;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const s=this.skeleton,n=this.geometry;mi.fromBufferAttribute(n.attributes.skinIndex,e),hi.fromBufferAttribute(n.attributes.skinWeight,e),fi.fromBufferAttribute(n.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){const n=hi.getComponent(e);if(n!==0){const o=mi.getComponent(e);ui.multiplyMatrices(s.bones[o].matrixWorld,s.boneInverses[o]),t.addScaledVector(yd.copy(fi).applyMatrix4(ui),n)}}return t.applyMatrix4(this.bindMatrixInverse)}},di.prototype.isSkinnedMesh=!0,Od=class extends r{constructor(){super(),this.type="Bone"}},Od.prototype.isBone=!0,li=new o,ci=new o,bn=[],nt=new D,Ad=class extends D{constructor(e,t,n){super(e,t),this.instanceMatrix=new f(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(nt.geometry=this.geometry,nt.material=this.material,nt.material===void 0)return;for(let o=0;o<s;o++){this.getMatrixAt(o,li),ci.multiplyMatrices(n,li),nt.matrixWorld=ci,nt.raycast(e,bn);for(let e=0,s=bn.length;e<s;e++){const n=bn[e];n.instanceId=o,n.object=this,t.push(n)}bn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new f(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ad.prototype.isInstancedMesh=!0,ot=class extends y{constructor(e){super(),this.type="LineBasicMaterial",this.color=new s(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}},ot.prototype.isLineBasicMaterial=!0,oi=new e,si=new e,ni=new o,Tn=new qe,vn=new Ae,Dn=class extends r{constructor(e=new h,t=new ot){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const n=e.attributes.position,t=[0];for(let e=1,s=n.count;e<s;e++)oi.fromBufferAttribute(n,e-1),si.fromBufferAttribute(n,e),t[e]=t[e-1],t[e]+=oi.distanceTo(si);e.setAttribute("lineDistance",new b(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,d=t.params.Line.threshold,o=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vn.copy(s.boundingSphere),vn.applyMatrix4(l),vn.radius+=d,t.ray.intersectsSphere(vn)===!1)return;ni.copy(l).invert(),Tn.copy(t.ray).applyMatrix4(ni);const u=d/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,a=new e,r=new e,c=new e,i=new e,m=this.isLineSegments?2:1;if(s.isBufferGeometry){const l=s.index,d=s.attributes,e=d.position;if(l!==null){const s=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let o=s,f=d-1;o<f;o+=m){const p=l.getX(o),g=l.getX(o+1);a.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g);const v=Tn.distanceSqToSegment(a,r,i,c);if(v>h)continue;i.applyMatrix4(this.matrixWorld);const u=t.ray.origin.distanceTo(i);if(u<t.near||u>t.far)continue;n.push({distance:u,point:c.clone().applyMatrix4(this.matrixWorld),index:o,face:null,faceIndex:null,object:this})}}else{const s=Math.max(0,o.start),l=Math.min(e.count,o.start+o.count);for(let o=s,u=l-1;o<u;o+=m){a.fromBufferAttribute(e,o),r.fromBufferAttribute(e,o+1);const f=Tn.distanceSqToSegment(a,r,i,c);if(f>h)continue;i.applyMatrix4(this.matrixWorld);const d=t.ray.origin.distanceTo(i);if(d<t.near||d>t.far)continue;n.push({distance:d,point:c.clone().applyMatrix4(this.matrixWorld),index:o,face:null,faceIndex:null,object:this})}}}else s.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){{const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){const s=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=t}}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}},Dn.prototype.isLine=!0,Zo=new e,Qo=new e,Rn=class extends Dn{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const n=e.attributes.position,t=[];for(let e=0,s=n.count;e<s;e+=2)Zo.fromBufferAttribute(n,e),Qo.fromBufferAttribute(n,e+1),t[e]=e===0?0:t[e-1],t[e+1]=t[e]+Zo.distanceTo(Qo);e.setAttribute("lineDistance",new b(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}},Rn.prototype.isLineSegments=!0,Hd=class extends Dn{constructor(e,t){super(e,t),this.type="LineLoop"}},Hd.prototype.isLineLoop=!0,Xo=class extends y{constructor(e){super(),this.type="PointsMaterial",this.color=new s(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}},Xo.prototype.isPointsMaterial=!0,Ds=new o,Pn=new qe,un=new Ae,dn=new e,Ud=class extends r{constructor(e=new h,t=new Xo){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,i=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),un.copy(n.boundingSphere),un.applyMatrix4(o),un.radius+=i,e.ray.intersectsSphere(un)===!1)return;Ds.copy(o).invert(),Pn.copy(e.ray).applyMatrix4(Ds);const a=i/((this.scale.x+this.scale.y+this.scale.z)/3),r=a*a;if(n.isBufferGeometry){const i=n.index,c=n.attributes,a=c.position;if(i!==null){const n=Math.max(0,s.start),c=Math.min(i.count,s.start+s.count);for(let s=n,d=c;s<d;s++){const l=i.getX(s);dn.fromBufferAttribute(a,l),Kd(dn,l,r,o,e,t,this)}}else{const n=Math.max(0,s.start),i=Math.min(a.count,s.start+s.count);for(let s=n,c=i;s<c;s++)dn.fromBufferAttribute(a,s),Kd(dn,s,r,o,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){{const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){const s=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=t}}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}},Ud.prototype.isPoints=!0;function Kd(t,n,s,o,i,a,r){const c=Pn.distanceSqToPoint(t);if(c<s){const s=new e;Pn.closestPointToPoint(t,s),s.applyMatrix4(o);const l=i.ray.origin.distanceTo(s);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(c),point:s,index:n,face:null,object:r})}}qd=class extends k{constructor(e,t,n,s,o,i,a,r,c){super(e,t,n,s,o,i,a,r,c),this.format=a!==void 0?a:pe,this.minFilter=i!==void 0?i:z,this.magFilter=o!==void 0?o:z,this.generateMipmaps=!1;const d=this;function l(){d.needsUpdate=!0,e.requestVideoFrameCallback(l)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(l)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image,t="requestVideoFrameCallback"in e;t===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},qd.prototype.isVideoTexture=!0,Yd=class extends k{constructor(e,t,n,s,o,i,a,r,c,l,d,u){super(null,i,a,r,c,l,s,o,d,u),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Yd.prototype.isCompressedTexture=!0,Gd=class extends k{constructor(e,t,n,s,o,i,a,r,c){super(e,t,n,s,o,i,a,r,c),this.needsUpdate=!0}},Gd.prototype.isCanvasTexture=!0,Xd=class extends k{constructor(e,t,n,s,o,i,a,r,c,l){if(l=l!==void 0?l:Se,l!==Se&&l!==gt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Se&&(n=Gt),n===void 0&&l===gt&&(n=rt),super(null,s,o,i,a,r,l,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:x,this.minFilter=r!==void 0?r:x,this.flipY=!1,this.generateMipmaps=!1}},Xd.prototype.isDepthTexture=!0,N1=new e,F1=new e,M1=new e,S1=new S,tu={triangulate:function(e,t,n){n=n||2;const h=t&&t.length,m=h?t[0]*n:e.length;let s=nu(e,0,m,n,!0);const u=[];if(!s||s.next===s.prev)return u;let o,i,l,d,a,r,c;if(h&&(s=O1(e,t,s,n)),e.length>80*n){o=l=e[0],i=d=e[1];for(let t=n;t<m;t+=n)a=e[t],r=e[t+1],a<o&&(o=a),r<i&&(i=r),a>l&&(l=a),r>d&&(d=r);c=Math.max(l-o,d-i),c=c!==0?1/c:0}return ln(s,u,n,o,i,c),u}};function nu(e,t,n,s,o){let i,a;if(o===d1(e,t,n,s)>0)for(i=t;i<n;i+=s)a=Su(i,e[i],e[i+1],a);else for(i=n-s;i>=t;i-=s)a=Su(i,e[i],e[i+1],a);return a&&qn(a,a.next)&&(qt(a),a=a.next),a}function fe(e,t){if(!e)return e;t||(t=e);let n=e,s;do if(s=!1,!n.steiner&&(qn(n,n.next)||m(n.prev,n,n.next)===0)){if(qt(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t)return t}function ln(e,t,n,s,o,i,a){if(!e)return;!a&&i&&b1(e,s,o,i);let c=e,l,r;for(;e.prev!==e.next;){if(l=e.prev,r=e.next,i?k1(e,s,o,i):A1(e)){t.push(l.i/n),t.push(e.i/n),t.push(r.i/n),qt(e),e=r.next,c=r.next;continue}if(e=r,e===c){a?a===1?(e=E1(fe(e),t,n),ln(e,t,n,s,o,i,2)):a===2&&C1(e,t,n,s,o,i):ln(fe(e),t,n,s,o,i,1);break}}}function A1(e){const n=e.prev,s=e,o=e.next;if(m(n,s,o)>=0)return!1;let t=e.next.next;for(;t!==e.prev;){if(bt(n.x,n.y,s.x,s.y,o.x,o.y,t.x,t.y)&&m(t.prev,t,t.next)>=0)return!1;t=t.next}return!0}function k1(e,t,n,s){const r=e.prev,c=e,o=e.next;if(m(r,c,o)>=0)return!1;const u=r.x<c.x?r.x<o.x?r.x:o.x:c.x<o.x?c.x:o.x,h=r.y<c.y?r.y<o.y?r.y:o.y:c.y<o.y?c.y:o.y,f=r.x>c.x?r.x>o.x?r.x:o.x:c.x>o.x?c.x:o.x,p=r.y>c.y?r.y>o.y?r.y:o.y:c.y>o.y?c.y:o.y,l=Yo(u,h,t,n,s),d=Yo(f,p,t,n,s);let i=e.prevZ,a=e.nextZ;for(;i&&i.z>=l&&a&&a.z<=d;){if(i!==e.prev&&i!==e.next&&bt(r.x,r.y,c.x,c.y,o.x,o.y,i.x,i.y)&&m(i.prev,i,i.next)>=0)return!1;if(i=i.prevZ,a!==e.prev&&a!==e.next&&bt(r.x,r.y,c.x,c.y,o.x,o.y,a.x,a.y)&&m(a.prev,a,a.next)>=0)return!1;a=a.nextZ}for(;i&&i.z>=l;){if(i!==e.prev&&i!==e.next&&bt(r.x,r.y,c.x,c.y,o.x,o.y,i.x,i.y)&&m(i.prev,i,i.next)>=0)return!1;i=i.prevZ}for(;a&&a.z<=d;){if(a!==e.prev&&a!==e.next&&bt(r.x,r.y,c.x,c.y,o.x,o.y,a.x,a.y)&&m(a.prev,a,a.next)>=0)return!1;a=a.nextZ}return!0}function E1(e,t,n){let s=e;do{const i=s.prev,o=s.next.next;!qn(i,o)&&wu(i,s,s.next,o)&&en(i,o)&&en(o,i)&&(t.push(i.i/n),t.push(s.i/n),t.push(o.i/n),qt(s),qt(s.next),s=e=o),s=s.next}while(s!==e)return fe(s)}function C1(e,t,n,s,o,i){let a=e;do{let e=a.next.next;for(;e!==a.prev;){if(a.i!==e.i&&p1(a,e)){let r=Au(a,e);a=fe(a,a.next),r=fe(r,r.next),ln(a,t,n,s,o,i),ln(r,t,n,s,o,i);return}e=e.next}a=a.next}while(a!==e)}function O1(e,t,n,s){const a=[];let o,r,c,l,i;for(o=0,r=t.length;o<r;o++)c=t[o]*s,l=o<r-1?t[o+1]*s:e.length,i=nu(e,c,l,s,!1),i===i.next&&(i.steiner=!0),a.push(g1(i));a.sort(w1);for(o=0;o<a.length;o++)_1(a[o],n),n=fe(n,n.next);return n}function w1(e,t){return e.x-t.x}function _1(e,t){if(t=y1(e,t),t){const n=Au(t,e);fe(t,t.next),fe(n,n.next)}}function y1(e,t){let n=t;const i=e.x,o=e.y;let a=-(1/0),s;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=i&&e>a){if(a=e,e===i){if(o===n.y)return n;if(o===n.next.y)return n.next}s=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t)if(!s)return null;if(i===a)return s;const u=s,d=s.x,c=s.y;let l=1/0,r;n=s;do i>=n.x&&n.x>=d&&i!==n.x&&bt(o<c?i:a,o,d,c,o<c?a:i,o,n.x,n.y)&&(r=Math.abs(o-n.y)/(i-n.x),en(n,e)&&(r<l||r===l&&(n.x>s.x||n.x===s.x&&j1(s,n)))&&(s=n,l=r)),n=n.next;while(n!==u)return s}function j1(e,t){return m(e.prev,e,t.prev)<0&&m(t.next,e,e.next)<0}function b1(e,t,n,s){let o=e;do o.z===null&&(o.z=Yo(o.x,o.y,t,n,s)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==e)o.prevZ.nextZ=null,o.prevZ=null,v1(o)}function v1(e){let r,n,t,s,o,c,i,a,l=1;do{for(n=e,e=null,o=null,c=0;n;){c++,t=n,i=0;for(r=0;r<l;r++)if(i++,t=t.nextZ,!t)break;for(a=l;i>0||a>0&&t;)i!==0&&(a===0||!t||n.z<=t.z)?(s=n,n=n.nextZ,i--):(s=t,t=t.nextZ,a--),o?o.nextZ=s:e=s,s.prevZ=o,o=s;n=t}o.nextZ=null,l*=2}while(c>1)return e}function Yo(e,t,n,s,o){return e=32767*(e-n)*o,t=32767*(t-s)*o,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function g1(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e)return n}function bt(e,t,n,s,o,i,a,r){return(o-a)*(t-r)-(e-a)*(i-r)>=0&&(e-a)*(s-r)-(n-a)*(t-r)>=0&&(n-a)*(i-r)-(o-a)*(s-r)>=0}function p1(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!f1(e,t)&&(en(e,t)&&en(t,e)&&m1(e,t)&&(m(e.prev,e,t.prev)||m(e,t.prev,t))||qn(e,t)&&m(e.prev,e,e.next)>0&&m(t.prev,t,t.next)>0)}function m(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function qn(e,t){return e.x===t.x&&e.y===t.y}function wu(e,t,n,s){const o=Jn(m(e,t,n)),i=Jn(m(e,t,s)),a=Jn(m(n,s,e)),r=Jn(m(n,s,t));return o!==i&&a!==r||!!(o===0&&Qn(e,n,t))||!!(i===0&&Qn(e,s,t))||!!(a===0&&Qn(n,e,s))||!!(r===0&&Qn(n,t,s))}function Qn(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Jn(e){return e>0?1:e<0?-1:0}function f1(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&wu(n,n.next,e,t))return!0;n=n.next}while(n!==e)return!1}function en(e,t){return m(e.prev,e,e.next)<0?m(e,t,e.next)>=0&&m(e,e.prev,t)>=0:m(e,t,e.prev)<0||m(e,e.next,t)<0}function m1(e,t){let n=e,s=!1;const i=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!==n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e)return s}function Au(e,t){const s=new Uo(e.i,e.x,e.y),n=new Uo(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,s.next=o,o.prev=s,n.next=s,s.prev=n,i.next=n,n.prev=i,n}function Su(e,t,n,s){const o=new Uo(e,t,n);return s?(o.next=s.next,o.prev=s,s.next.prev=o,s.next=o):(o.prev=o,o.next=o),o}function qt(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Uo(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d1(e,t,n,s){let o=0;for(let i=t,a=n-s;i<n;i+=s)o+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return o}me=class _ShapeUtils{static area(e){const t=e.length;let n=0;for(let o=t-1,s=0;s<t;o=s++)n+=e[o].x*e[s].y-e[s].x*e[o].y;return n*.5}static isClockWise(e){return _ShapeUtils.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];Du(e),Nu(n,e);let i=e.length;t.forEach(Du);for(let e=0;e<t.length;e++)s.push(i),i+=t[e].length,Nu(n,t[e]);const a=tu.triangulate(n,s);for(let e=0;e<a.length;e+=3)o.push(a.slice(e,e+3));return o}};function Du(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Nu(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}Rt=class extends h{constructor(n,s){super(),this.type="ExtrudeGeometry",this.parameters={shapes:n,options:s},n=Array.isArray(n)?n:[n];const i=this,o=[],a=[];for(let e=0,t=n.length;e<t;e++){const s=n[e];r(s)}this.setAttribute("position",new b(o,3)),this.setAttribute("uv",new b(a,2)),this.computeVertexNormals();function r(n){const b=[],K=s.curveSegments!==void 0?s.curveSegments:12,l=s.steps!==void 0?s.steps:1;let D=s.depth!==void 0?s.depth:100,_=s.bevelEnabled===void 0||s.bevelEnabled,M=s.bevelThickness!==void 0?s.bevelThickness:6,S=s.bevelSize!==void 0?s.bevelSize:M-2,A=s.bevelOffset!==void 0?s.bevelOffset:0,v=s.bevelSegments!==void 0?s.bevelSegments:3;const N=s.extrudePath,R=s.UVGenerator!==void 0?s.UVGenerator:Ru;s.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),D=s.amount);let C,T=!1,O,x,w,h;N&&(C=N.getSpacedPoints(l),T=!0,_=!1,O=N.computeFrenetFrames(l,!1),x=new e,w=new e,h=new e),_||(v=0,M=0,S=0,A=0);const B=n.extractPoints(K);let c=B.shape;const r=B.holes,W=!me.isClockWise(c);if(W){c=c.reverse();for(let e=0,n=r.length;e<n;e++){const t=r[e];me.isClockWise(t)&&(r[e]=t.reverse())}}const y=me.triangulateShape(c,r),d=c;for(let e=0,t=r.length;e<t;e++){const n=r[e];c=c.concat(n)}function j(e,t,n){return t||console.error("THREE.ExtrudeGeometry: vec does not exist"),t.clone().multiplyScalar(n).add(e)}const f=c.length,F=y.length;function I(e,n,s){let r,c,d;const o=e.x-n.x,i=e.y-n.y,a=s.x-e.x,l=s.y-e.y,u=o*o+i*i,h=o*l-i*a;if(Math.abs(h)>Number.EPSILON){const h=Math.sqrt(u),m=Math.sqrt(a*a+l*l),f=n.x-i/h,p=n.y+o/h,b=s.x-l/m,j=s.y+a/m,g=((b-f)*l-(j-p)*a)/(o*l-i*a);r=f+o*g-e.x,c=p+i*g-e.y;const v=r*r+c*c;if(v<=2)return new t(r,c);d=Math.sqrt(v/2)}else{let e=!1;o>Number.EPSILON?a>Number.EPSILON&&(e=!0):o<-Number.EPSILON?a<-Number.EPSILON&&(e=!0):Math.sign(i)===Math.sign(l)&&(e=!0),e?(r=-i,c=o,d=Math.sqrt(u)):(r=o,c=i,d=Math.sqrt(u/2))}return new t(r/d,c/d)}const z=[];for(let e=0,t=d.length,n=t-1,s=e+1;e<t;e++,n++,s++)n===t&&(n=0),s===t&&(s=0),z[e]=I(d[e],d[n],d[s]);const L=[];let g,k=z.concat();for(let t=0,n=r.length;t<n;t++){const e=r[t];g=[];for(let t=0,n=e.length,s=n-1,o=t+1;t<n;t++,s++,o++)s===n&&(s=0),o===n&&(o=0),g[t]=I(e[t],e[s],e[o]);L.push(g),k=k.concat(g)}for(let e=0;e<v;e++){const t=e/v,n=M*Math.cos(t*Math.PI/2),s=S*Math.sin(t*Math.PI/2)+A;for(let e=0,o=d.length;e<o;e++){const t=j(d[e],z[e],s);m(t.x,t.y,-n)}for(let e=0,o=r.length;e<o;e++){const t=r[e];g=L[e];for(let e=0,i=t.length;e<i;e++){const o=j(t[e],g[e],s);m(o.x,o.y,-n)}}}const P=S+A;for(let e=0;e<f;e++){const t=_?j(c[e],k[e],P):c[e];T?(w.copy(O.normals[0]).multiplyScalar(t.x),x.copy(O.binormals[0]).multiplyScalar(t.y),h.copy(C[0]).add(w).add(x),m(h.x,h.y,h.z)):m(t.x,t.y,0)}for(let e=1;e<=l;e++)for(let t=0;t<f;t++){const n=_?j(c[t],k[t],P):c[t];T?(w.copy(O.normals[e]).multiplyScalar(n.x),x.copy(O.binormals[e]).multiplyScalar(n.y),h.copy(C[e]).add(w).add(x),m(h.x,h.y,h.z)):m(n.x,n.y,D/l*e)}for(let e=v-1;e>=0;e--){const n=e/v,t=M*Math.cos(n*Math.PI/2),s=S*Math.sin(n*Math.PI/2)+A;for(let e=0,o=d.length;e<o;e++){const n=j(d[e],z[e],s);m(n.x,n.y,D+t)}for(let e=0,o=r.length;e<o;e++){const n=r[e];g=L[e];for(let e=0,i=n.length;e<i;e++){const o=j(n[e],g[e],s);T?m(o.x,o.y+C[l-1].y,C[l-1].x+t):m(o.x,o.y,D+t)}}}V(),$();function V(){const e=o.length/3;if(_){let t=0,e=f*t;for(let t=0;t<F;t++){const n=y[t];E(n[2]+e,n[1]+e,n[0]+e)}t=l+v*2,e=f*t;for(let t=0;t<F;t++){const n=y[t];E(n[0]+e,n[1]+e,n[2]+e)}}else{for(let e=0;e<F;e++){const t=y[e];E(t[2],t[1],t[0])}for(let e=0;e<F;e++){const t=y[e];E(t[0]+f*l,t[1]+f*l,t[2]+f*l)}}i.addGroup(e,o.length/3-e,0)}function $(){const t=o.length/3;let e=0;H(d,e),e+=d.length;for(let t=0,s=r.length;t<s;t++){const n=r[t];H(n,e),e+=n.length}i.addGroup(t,o.length/3-t,1)}function H(e,t){let n=e.length;for(;--n>=0;){const o=n;let s=n-1;s<0&&(s=e.length-1);for(let e=0,a=l+v*2;e<a;e++){const n=f*e,i=f*(e+1),r=t+o+n,c=t+s+n,d=t+s+i,u=t+o+i;U(r,c,d,u)}}}function m(e,t,n){b.push(e),b.push(t),b.push(n)}function E(e,t,n){p(e),p(t),p(n);const s=o.length/3,a=R.generateTopUV(i,o,s-3,s-2,s-1);u(a[0]),u(a[1]),u(a[2])}function U(e,t,n,s){p(e),p(t),p(s),p(t),p(n),p(s);const r=o.length/3,a=R.generateSideWallUV(i,o,r-6,r-3,r-2,r-1);u(a[0]),u(a[1]),u(a[3]),u(a[1]),u(a[2]),u(a[3])}function p(e){o.push(b[e*3+0]),o.push(b[e*3+1]),o.push(b[e*3+2])}function u(e){a.push(e.x),a.push(e.y)}}}toJSON(){const e=h.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return _4(t,n,e)}},Ru={generateTopUV:function(e,n,s,o,i){const a=n[s*3],r=n[s*3+1],c=n[o*3],l=n[o*3+1],d=n[i*3],u=n[i*3+1];return[new t(a,r),new t(c,l),new t(d,u)]},generateSideWallUV:function(e,n,s,o,i,a){const m=n[s*3],r=n[s*3+1],c=n[s*3+2],f=n[o*3],l=n[o*3+1],d=n[o*3+2],p=n[i*3],g=n[i*3+1],u=n[i*3+2],v=n[a*3],b=n[a*3+1],h=n[a*3+2];return Math.abs(r-l)<.01?[new t(m,1-c),new t(f,1-d),new t(p,1-u),new t(v,1-h)]:[new t(r,1-c),new t(l,1-d),new t(g,1-u),new t(b,1-h)]}};function _4(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,s=e.length;t<s;t++){const o=e[t];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}Hu=class extends h{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const o=[],s=[],i=[],a=[];let r=0,n=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(r,n,t),r+=n,n=0;this.setIndex(o),this.setAttribute("position",new b(s,3)),this.setAttribute("normal",new b(i,3)),this.setAttribute("uv",new b(a,2));function c(e){const l=s.length/3,d=e.extractPoints(t);let r=d.shape;const c=d.holes;me.isClockWise(r)===!1&&(r=r.reverse());for(let e=0,n=c.length;e<n;e++){const t=c[e];me.isClockWise(t)===!0&&(c[e]=t.reverse())}const u=me.triangulateShape(r,c);for(let e=0,t=c.length;e<t;e++){const n=c[e];r=r.concat(n)}for(let t=0,n=r.length;t<n;t++){const e=r[t];s.push(e.x,e.y,0),i.push(0,0,1),a.push(e.x,e.y)}for(let e=0,s=u.length;e<s;e++){const t=u[e],i=t[0]+l,a=t[1]+l,r=t[2]+l;o.push(i,a,r),n+=3}}}toJSON(){const e=h.prototype.toJSON.call(this),t=this.parameters.shapes;return e4(t,e)}};function e4(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,s=e.length;n<s;n++){const o=e[n];t.shapes.push(o.uuid)}else t.shapes.push(e.uuid);return t}Bu=class extends y{constructor(e){super(),this.type="ShadowMaterial",this.color=new s(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}},Bu.prototype.isShadowMaterial=!0,Vu=class extends ce{constructor(e){super(e),this.type="RawShaderMaterial"}},Vu.prototype.isRawShaderMaterial=!0,Wo=class extends y{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new s(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new s(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fe,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}},Wo.prototype.isMeshStandardMaterial=!0,Wu=class extends Wo{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new t(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=M(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new s).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}},Wu.prototype.isMeshPhysicalMaterial=!0,Uu=class extends y{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new s(16777215),this.specular=new s(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new s(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fe,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}},Uu.prototype.isMeshPhongMaterial=!0,Ku=class extends y{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new s(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new s(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fe,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}},Ku.prototype.isMeshToonMaterial=!0,qu=class extends y{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fe,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}},qu.prototype.isMeshNormalMaterial=!0,Yu=class extends y{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new s(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new s(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}},Yu.prototype.isMeshLambertMaterial=!0,Gu=class extends y{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new s(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fe,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}},Gu.prototype.isMeshMatcapMaterial=!0,Xu=class extends ot{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}},Xu.prototype.isLineDashedMaterial=!0,u={arraySlice:function(e,t,n){return u.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function s(t,n){return e[t]-e[n]}const n=e.length,t=new Array(n);for(let e=0;e!==n;++e)t[e]=e;return t.sort(s),t},sortedArray:function(e,t,n){const s=e.length,o=new e.constructor(s);for(let i=0,a=0;a!==s;++i){const r=n[i]*t;for(let n=0;n!==t;++n)o[a++]=e[r+n]}return o},flattenJSON:function(e,t,n,s){let a=1,o=e[0];for(;o!==void 0&&o[s]===void 0;)o=e[a++];if(o===void 0)return;let i=o[s];if(i===void 0)return;if(Array.isArray(i))do i=o[s],i!==void 0&&(t.push(o.time),n.push.apply(n,i)),o=e[a++];while(o!==void 0)else if(i.toArray!==void 0)do i=o[s],i!==void 0&&(t.push(o.time),i.toArray(n,n.length)),o=e[a++];while(o!==void 0)else do i=o[s],i!==void 0&&(t.push(o.time),n.push(i)),o=e[a++];while(o!==void 0)},subclip:function(e,t,n,s,o=30){const i=e.clone();i.name=t;const r=[];for(let t=0;t<i.tracks.length;++t){const e=i.tracks[t],c=e.getValueSize(),a=[],l=[];for(let t=0;t<e.times.length;++t){const i=e.times[t]*o;if(i<n||i>=s)continue;a.push(e.times[t]);for(let n=0;n<c;++n)l.push(e.values[t*c+n])}if(a.length===0)continue;e.times=u.convertArray(a,e.times.constructor),e.values=u.convertArray(l,e.values.constructor),r.push(e)}i.tracks=r;let a=1/0;for(let e=0;e<i.tracks.length;++e)a>i.tracks[e].times[0]&&(a=i.tracks[e].times[0]);for(let e=0;e<i.tracks.length;++e)i.tracks[e].shift(-1*a);return i.resetDuration(),i},makeClipAdditive:function(e,t=0,n=e,s=30){s<=0&&(s=30);const i=n.tracks.length,o=t/s;for(let d=0;d<i;++d){const t=n.tracks[d],c=t.ValueTypeName;if(c==="bool"||c==="string")continue;const s=e.tracks.find(function(e){return e.name===t.name&&e.ValueTypeName===c});if(s===void 0)continue;let a=0;const l=t.getValueSize();t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(a=l/3);let h=0;const m=s.getValueSize();s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=m/3);const f=t.times.length-1;let r;if(o<=t.times[0]){const e=a,n=l-a;r=u.arraySlice(t.values,e,n)}else if(o>=t.times[f]){const e=f*l+a,n=e+l-a;r=u.arraySlice(t.values,e,n)}else{const e=t.createInterpolant(),n=a,s=l-a;e.evaluate(o),r=u.arraySlice(e.resultBuffer,n,s)}if(c==="quaternion"){const e=(new O).fromArray(r).normalize().conjugate();e.toArray(r)}const p=s.times.length;for(let e=0;e<p;++e){const t=e*m+h;if(c==="quaternion")O.multiplyQuaternionsFlat(s.values,t,r,0,s.values,t);else{const e=m-h*2;for(let n=0;n<e;++n)s.values[t+n]-=r[n]}}}return e.blendMode=No,e}},re=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const o=this.parameterPositions;let t=this._cachedIndex,s=o[t],n=o[t-1];validate_interval:{seek:{let i;linear_scan:{forward_scan:if(!(e<s)){for(let i=t+2;;){if(s===void 0){if(e<n)break forward_scan;return t=o.length,this._cachedIndex=t,this.afterEnd_(t-1,e,n)}if(t===i)break;if(n=s,s=o[++t],e<s)break seek}i=o.length;break linear_scan}if(!(e>=n)){const a=o[1];e<a&&(t=2,n=a);for(let i=t-2;;){if(n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,s);if(t===i)break;if(s=n,n=o[--t-1],e>=n)break seek}i=t,t=0;break linear_scan}break validate_interval}for(;t<i;){const n=t+i>>>1;e<o[n]?i=n:t=n+1}if(s=o[t],n=o[t-1],n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,s);if(s===void 0)return t=o.length,this._cachedIndex=t,this.afterEnd_(t-1,n,e)}this._cachedIndex=t,this.intervalChanged_(t,n,s)}return this.interpolate_(t,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n;for(let e=0;e!==n;++e)t[e]=s[o+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},re.prototype.beforeStart_=re.prototype.copySampleValue_,re.prototype.afterEnd_=re.prototype.copySampleValue_,Ju=class extends re{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ce,endingEnd:Ce}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,i=e+1,a=s[o],r=s[i];if(a===void 0)switch(this.getSettings_().endingStart){case Ee:o=e,a=2*t-n;break;case Ft:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(r===void 0)switch(this.getSettings_().endingEnd){case Ee:i=e,r=2*n-t;break;case Ft:i=1,r=n+s[1]-s[0];break;default:i=e-1,r=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(r-n),this._offsetPrev=o*l,this._offsetNext=i*l}interpolate_(e,t,n,s){const h=this.resultBuffer,r=this.sampleValues,d=this.valueSize,u=e*d,m=u-d,p=this._offsetPrev,f=this._offsetNext,i=this._weightPrev,l=this._weightNext,o=(n-t)/(s-t),a=o*o,c=a*o,g=-i*c+2*i*a-i*o,v=(1+i)*c+(-1.5-2*i)*a+(-.5+i)*o+1,b=(-1-l)*c+(1.5+l)*a+.5*o,j=l*c-l*a;for(let e=0;e!==d;++e)h[e]=g*r[p+e]+v*r[m+e]+b*r[u+e]+j*r[f+e];return h}},Bo=class extends re{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,l=r-o,c=(n-t)/(s-t),d=1-c;for(let e=0;e!==o;++e)i[e]=a[l+e]*d+a[r+e]*c;return i}},t1=class extends re{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},q=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=u.convertArray(t,this.TimeBufferType),this.values=u.convertArray(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let t;if(n.toJSON!==this.toJSON)t=n.toJSON(e);else{t={name:e.name,times:u.convertArray(e.times,Array),values:u.convertArray(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(t.interpolation=n)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new t1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ju(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Et:t=this.InterpolantFactoryMethodDiscrete;break;case kt:t=this.InterpolantFactoryMethodLinear;break;case ws:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Et;case this.InterpolantFactoryMethodLinear:return kt;case this.InterpolantFactoryMethodSmooth:return ws}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const o=this.times,i=o.length;let s=0,n=i-1;for(;s!==i&&o[s]<e;)++s;for(;n!==-1&&o[n]>t;)--n;if(++n,s!==0||n!==i){s>=n&&(n=Math.max(n,1),s=n-1);const e=this.getValueSize();this.times=u.arraySlice(o,s,n),this.values=u.arraySlice(this.values,s*e,n*e)}return this}validate(){let e=!0;const s=this.getValueSize();s-Math.floor(s)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const o=this.times,t=this.values,i=o.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==i;s++){const t=o[s];if(typeof t=="number"&&isNaN(t)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,t),e=!1;break}if(n!==null&&n>t){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,t,n),e=!1;break}n=t}if(t!==void 0&&u.isTypedArray(t))for(let n=0,o=t.length;n!==o;++n){const s=t[n];if(isNaN(s)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,s),e=!1;break}}return e}optimize(){const e=u.arraySlice(this.times),s=u.arraySlice(this.values),t=this.getValueSize(),i=this.getInterpolation()===ws,o=e.length-1;let n=1;for(let a=1;a<o;++a){let r=!1;const c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(i)r=!0;else{const e=a*t,n=e-t,o=e+t;for(let i=0;i!==t;++i){const a=s[e+i];if(a!==s[n+i]||a!==s[o+i]){r=!0;break}}}if(r){if(a!==n){e[n]=e[a];const o=a*t,i=n*t;for(let e=0;e!==t;++e)s[i+e]=s[o+e]}++n}}if(o>0){e[n]=e[o];for(let i=o*t,a=n*t,e=0;e!==t;++e)s[a+e]=s[i+e];++n}return n!==e.length?(this.times=u.arraySlice(e,0,n),this.values=u.arraySlice(s,0,n*t)):(this.times=e,this.values=s),this}clone(){const t=u.arraySlice(this.times,0),n=u.arraySlice(this.values,0),s=this.constructor,e=new s(this.name,t,n);return e.createInterpolant=this.createInterpolant,e}},q.prototype.TimeBufferType=Float32Array,q.prototype.ValueBufferType=Float32Array,q.prototype.DefaultInterpolation=kt,ze=class extends q{},ze.prototype.ValueTypeName="bool",ze.prototype.ValueBufferType=Array,ze.prototype.DefaultInterpolation=Et,ze.prototype.InterpolantFactoryMethodLinear=void 0,ze.prototype.InterpolantFactoryMethodSmooth=void 0,Po=class extends q{},Po.prototype.ValueTypeName="color",It=class extends q{},It.prototype.ValueTypeName="number",a1=class extends re{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,i=this.valueSize,c=(n-t)/(s-t);let o=e*i;for(let e=o+i;o!==e;o+=4)O.slerpFlat(a,0,r,o-i,r,o,c);return a}},dt=class extends q{InterpolantFactoryMethodLinear(e){return new a1(this.times,this.values,this.getValueSize(),e)}},dt.prototype.ValueTypeName="quaternion",dt.prototype.DefaultInterpolation=kt,dt.prototype.InterpolantFactoryMethodSmooth=void 0,Ie=class extends q{},Ie.prototype.ValueTypeName="string",Ie.prototype.ValueBufferType=Array,Ie.prototype.DefaultInterpolation=Et,Ie.prototype.InterpolantFactoryMethodLinear=void 0,Ie.prototype.InterpolantFactoryMethodSmooth=void 0,zt=class extends q{},zt.prototype.ValueTypeName="vector",Lo=class{constructor(e,t=-1,n,s=bs){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=U(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,o=1/(e.fps||1);for(let e=0,s=n.length;e!==s;++e)t.push(h1(n[e]).scale(o));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,s=n.length;e!==s;++e)t.push(q.toJSON(n[e]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,i=[];for(let a=0;a<o;a++){let e=[],r=[];e.push((a+o-1)%o,a,(a+1)%o),r.push(0,1,0);const c=u.getKeyframeOrder(e);e=u.sortedArray(e,1,c),r=u.sortedArray(r,1,c),!s&&e[0]===0&&(e.push(o),r.push(r[0])),i.push(new It(".morphTargetInfluences["+t[a].name+"]",e,r).scale(1/n))}return new this(e,-1,i)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,a=e.length;t<a;t++){const o=e[t],n=o.name.match(i);if(n&&n.length>1){const t=n[1];let e=s[t];e||(s[t]=e=[]),e.push(o)}}const o=[];for(const e in s)o.push(this.CreateFromMorphTargetSequence(e,s[e],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(e,t,n,s,o){if(n.length!==0){const i=[],a=[];u.flattenJSON(n,i,a,s),i.length!==0&&o.push(new e(t,i,a))}},n=[],a=e.name||"default",r=e.fps||30,c=e.blendMode;let o=e.length||-1;const i=e.hierarchy||[];for(let a=0;a<i.length;a++){const e=i[a].keys;if(!e||e.length===0)continue;if(e[0].morphTargets){const s={};let t;for(t=0;t<e.length;t++)if(e[t].morphTargets)for(let n=0;n<e[t].morphTargets.length;n++)s[e[t].morphTargets[n]]=-1;for(const o in s){const i=[],a=[];for(let n=0;n!==e[t].morphTargets.length;++n){const s=e[t];i.push(s.time),a.push(s.morphTarget===o?1:0)}n.push(new It(".morphTargetInfluence["+o+"]",i,a))}o=s.length*(r||1)}else{const o=".bones["+t[a].name+"]";s(zt,o+".position",e,"pos",n),s(dt,o+".quaternion",e,"rot",n),s(zt,o+".scale",e,"scl",n)}}if(n.length===0)return null;const l=new this(a,o,n,c);return l}resetDuration(){const t=this.tracks;let e=0;for(let n=0,o=t.length;n!==o;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function u1(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return It;case"vector":case"vector2":case"vector3":case"vector4":return zt;case"color":return Po;case"quaternion":return dt;case"bool":case"boolean":return ze;case"string":return Ie}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function h1(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=u1(e.type);if(e.times===void 0){const t=[],n=[];u.flattenJSON(e.keys,t,n,"value"),e.times=t,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Re={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Cu=class{constructor(e,t,n){const s=this;let r=!1,i=0,a=0,c=void 0;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){a++,r===!1&&s.onStart!==void 0&&s.onStart(e,i,a),r=!0},this.itemEnd=function(e){i++,s.onProgress!==void 0&&s.onProgress(e,i,a),i===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(e){s.onError!==void 0&&s.onError(e)},this.resolveURL=function(e){return c?c(e):e},this.setURLModifier=function(e){return c=e,this},this.addHandler=function(e,t){return o.push(e,t),this},this.removeHandler=function(e){const t=o.indexOf(e);return t!==-1&&o.splice(t,2),this},this.getHandler=function(e){for(let t=0,s=o.length;t<s;t+=2){const n=o[t],i=o[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return i}return null}}},ju=new Cu,le=class{constructor(e){this.manager=e!==void 0?e:ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},I={},fu=class extends le{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Re.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;if(I[e]!==void 0){I[e].push({onLoad:t,onProgress:n,onError:s});return}const c=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(c);let i;if(a){const i=a[1],r=!!a[2];let n=a[3];n=decodeURIComponent(n),r&&(n=atob(n));try{let s;const a=(this.responseType||"").toLowerCase();switch(a){case"arraybuffer":case"blob":const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);a==="blob"?s=new Blob([e.buffer],{type:i}):s=e.buffer;break;case"document":const t=new DOMParser;s=t.parseFromString(n,i);break;case"json":s=JSON.parse(n);break;default:s=n;break}setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0)}catch(t){setTimeout(function(){s&&s(t),o.manager.itemError(e),o.manager.itemEnd(e)},0)}}else{I[e]=[],I[e].push({onLoad:t,onProgress:n,onError:s}),i=new XMLHttpRequest,i.open("GET",e,!0),i.addEventListener("load",function(t){const s=this.response,n=I[e];if(delete I[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Re.add(e,s);for(let e=0,o=n.length;e<o;e++){const t=n[e];t.onLoad&&t.onLoad(s)}o.manager.itemEnd(e)}else{for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}o.manager.itemError(e),o.manager.itemEnd(e)}},!1),i.addEventListener("progress",function(t){const n=I[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onProgress&&s.onProgress(t)}},!1),i.addEventListener("error",function(t){const n=I[e];delete I[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}o.manager.itemError(e),o.manager.itemEnd(e)},!1),i.addEventListener("abort",function(t){const n=I[e];delete I[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}o.manager.itemError(e),o.manager.itemEnd(e)},!1),this.responseType!==void 0&&(i.responseType=this.responseType),this.withCredentials!==void 0&&(i.withCredentials=this.withCredentials),i.overrideMimeType&&i.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const e in this.requestHeader)i.setRequestHeader(e,this.requestHeader[e]);i.send(null)}return o.manager.itemStart(e),i}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Do=class extends le{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Re.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function r(){o.removeEventListener("load",r,!1),o.removeEventListener("error",c,!1),Re.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){o.removeEventListener("load",r,!1),o.removeEventListener("error",c,!1),s&&s(t),i.manager.itemError(e),i.manager.itemEnd(e)}return o.addEventListener("load",r,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},hu=class extends le{constructor(e){super(e)}load(e,t,n,s){const o=new Mt,i=new Do(this.manager);i.setCrossOrigin(this.crossOrigin),i.setPath(this.path);let a=0;function r(n){i.load(e[n],function(e){o.images[n]=e,a++,a===6&&(o.needsUpdate=!0,t&&t(o))},void 0,s)}for(let t=0;t<e.length;++t)r(t);return o}},uu=class extends le{constructor(e){super(e)}load(e,t,n,s){const o=new k,i=new Do(this.manager);return i.setCrossOrigin(this.crossOrigin),i.setPath(this.path),i.load(e,function(n){o.image=n;const s=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data:image\/jpeg/)===0;o.format=s?pe:V,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}},L=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let i=1;i<=e;i++)n=this.getPoint(i/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let n=0;const a=s.length;let o;t?o=t:o=e*s[a-1];let r=0,i=a-1,c;for(;r<=i;)if(n=Math.floor(r+(i-r)/2),c=s[n]-o,c<0)r=n+1;else if(c>0)i=n-1;else{i=n;break}if(n=i,s[n]===o)return n/(a-1);const l=s[n],d=s[n+1],u=d-l,h=(o-l)/u,m=(n+h)/(a-1);return m}getTangent(n,s){const a=1e-4;let o=n-a,i=n+a;o<0&&(o=0),i>1&&(i=1);const r=this.getPoint(o),l=this.getPoint(i),c=s||(r.isVector2?new t:new e);return c.copy(l).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(t,n){const l=new e,s=[],i=[],a=[],r=new e,d=new o;for(let n=0;n<=t;n++){const o=n/t;s[n]=this.getTangentAt(o,new e),s[n].normalize()}i[0]=new e,a[0]=new e;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=c&&(c=u,l.set(1,0,0)),h<=c&&(c=h,l.set(0,1,0)),m<=c&&l.set(0,0,1),r.crossVectors(s[0],l).normalize(),i[0].crossVectors(s[0],r),a[0].crossVectors(s[0],i[0]);for(let e=1;e<=t;e++){if(i[e]=i[e-1].clone(),a[e]=a[e-1].clone(),r.crossVectors(s[e-1],s[e]),r.length()>Number.EPSILON){r.normalize();const t=Math.acos(M(s[e-1].dot(s[e]),-1,1));i[e].applyMatrix4(d.makeRotationAxis(r,t))}a[e].crossVectors(s[e],i[e])}if(n===!0){let e=Math.acos(M(i[0].dot(i[t]),-1,1));e/=t,s[0].dot(r.crossVectors(i[0],i[t]))>0&&(e=-e);for(let n=1;n<=t;n++)i[n].applyMatrix4(d.makeRotationAxis(s[n],e*n)),a[n].crossVectors(s[n],i[n])}return{tangents:s,normals:i,binormals:a}}clone(){return(new this.constructor).copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jn=class extends L{constructor(e=0,t=0,n=1,s=1,o=0,i=Math.PI*2,a=!1,r=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=i,this.aClockwise=a,this.aRotation=r}getPoint(e,n){const l=n||new t,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(r?s=0:s=o),this.aClockwise===!0&&!r&&(s===o?s=-o:s=s-o);const c=this.aStartAngle+e*s;let i=this.aX+this.xRadius*Math.cos(c),a=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=i-this.aX,s=a-this.aY;i=n*e-s*t+this.aX,a=n*t+s*e+this.aY}return l.set(i,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jn.prototype.isEllipseCurve=!0,Fo=class extends jn{constructor(e,t,n,s,o,i){super(e,t,n,n,s,o,i),this.type="ArcCurve"}},Fo.prototype.isArcCurve=!0;function Mo(){let e=0,t=0,n=0,s=0;function o(o,i,a,r){e=o,t=a,n=-3*o+3*i-2*a-r,s=2*o-2*i+a+r}return{initCatmullRom:function(e,t,n,s,i){o(t,n,i*(n-e),i*(s-t))},initNonuniformCatmullRom:function(e,t,n,s,i,a,r){let c=(t-e)/i-(n-e)/(i+a)+(n-t)/a,l=(n-t)/a-(s-t)/(a+r)+(s-n)/r;c*=a,l*=a,o(t,n,c,l)},calc:function(o){const i=o*o,a=i*o;return e+t*o+n*i+s*a}}}pn=new e,$n=new Mo,Wn=new Mo,rs=new Mo,Eo=class extends L{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(t,n=new e){const u=n,i=this.points,s=i.length,h=(s-(this.closed?0:1))*t;let o=Math.floor(h),d=h-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:d===0&&o===s-1&&(o=s-2,d=1);let a,r;this.closed||o>0?a=i[(o-1)%s]:(pn.subVectors(i[0],i[1]).add(i[0]),a=pn);const c=i[o%s],l=i[(o+1)%s];if(this.closed||o+2<s?r=i[(o+2)%s]:(pn.subVectors(i[s-1],i[s-2]).add(i[s-1]),r=pn),this.curveType==="centripetal"||this.curveType==="chordal"){const s=this.curveType==="chordal"?.5:.25;let t=Math.pow(a.distanceToSquared(c),s),e=Math.pow(c.distanceToSquared(l),s),n=Math.pow(l.distanceToSquared(r),s);e<1e-4&&(e=1),t<1e-4&&(t=e),n<1e-4&&(n=e),$n.initNonuniformCatmullRom(a.x,c.x,l.x,r.x,t,e,n),Wn.initNonuniformCatmullRom(a.y,c.y,l.y,r.y,t,e,n),rs.initNonuniformCatmullRom(a.z,c.z,l.z,r.z,t,e,n)}else this.curveType==="catmullrom"&&($n.initCatmullRom(a.x,c.x,l.x,r.x,this.tension),Wn.initCatmullRom(a.y,c.y,l.y,r.y,this.tension),rs.initCatmullRom(a.z,c.z,l.z,r.z,this.tension));return u.set($n.calc(d),Wn.calc(d),rs.calc(d)),u}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const o=t.points[n];this.points.push((new e).fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}},Eo.prototype.isCatmullRomCurve3=!0;function Zd(e,t,n,s,o){const i=(s-t)*.5,a=(o-n)*.5,r=e*e,c=e*r;return(2*n-2*s+i+a)*c+(-3*n+3*s-2*i-a)*r+i*e+n}function T1(e,t){const n=1-e;return n*n*t}function l1(e,t){return 2*(1-e)*e*t}function D1(e,t){return e*e*t}function Ut(e,t,n,s){return T1(e,t)+l1(e,n)+D1(e,s)}function L1(e,t){const n=1-e;return n*n*n*t}function R1(e,t){const n=1-e;return 3*n*n*e*t}function P1(e,t){return 3*(1-e)*e*e*t}function H1(e,t){return e*e*e*t}function Ct(e,t,n,s,o){return L1(e,t)+R1(e,n)+P1(e,s)+H1(e,o)}gs=class extends L{constructor(e=new t,n=new t,s=new t,o=new t){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=s,this.v3=o}getPoint(e,n=new t){const s=n,o=this.v0,i=this.v1,a=this.v2,r=this.v3;return s.set(Ct(e,o.x,i.x,a.x,r.x),Ct(e,o.y,i.y,a.y,r.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gs.prototype.isCubicBezierCurve=!0,Co=class extends L{constructor(t=new e,n=new e,s=new e,o=new e){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=o}getPoint(t,n=new e){const r=n,s=this.v0,o=this.v1,i=this.v2,a=this.v3;return r.set(Ct(t,s.x,o.x,i.x,a.x),Ct(t,s.y,o.y,i.y,a.y),Ct(t,s.z,o.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co.prototype.isCubicBezierCurve3=!0,Ht=class extends L{constructor(e=new t,n=new t){super(),this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new t){const s=n;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,n){const s=n||new t;return s.copy(this.v2).sub(this.v1).normalize(),s}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ht.prototype.isLineCurve=!0,Pl=class extends L{constructor(t=new e,n=new e){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=n}getPoint(t,n=new e){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_n=class extends L{constructor(e=new t,n=new t,s=new t){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=s}getPoint(e,n=new t){const s=n,o=this.v0,i=this.v1,a=this.v2;return s.set(Ut(e,o.x,i.x,a.x),Ut(e,o.y,i.y,a.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_n.prototype.isQuadraticBezierCurve=!0,xo=class extends L{constructor(t=new e,n=new e,s=new e){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new e){const a=n,s=this.v0,o=this.v1,i=this.v2;return a.set(Ut(t,s.x,o.x,i.x),Ut(t,s.y,o.y,i.y),Ut(t,s.z,o.z,i.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo.prototype.isQuadraticBezierCurve3=!0,wn=class extends L{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,n=new t){const i=n,s=this.points,a=(s.length-1)*e,o=Math.floor(a),r=a-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Zd(r,c.x,l.x,d.x,u.x),Zd(r,c.y,l.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,s=e.points.length;n<s;n++){const o=e.points[n];this.points.push((new t).fromArray(o))}return this}},wn.prototype.isSplineCurve=!0,Al=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Eo,CubicBezierCurve:gs,CubicBezierCurve3:Co,EllipseCurve:jn,LineCurve:Ht,LineCurve3:Pl,QuadraticBezierCurve:_n,QuadraticBezierCurve3:xo,SplineCurve:wn}),El=class extends L{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ht(t,e))}getPoint(e){const s=e*this.getLength(),n=this.getCurveLengths();let t=0;for(;t<n.length;){if(n[t]>=s){const i=n[t]-s,e=this.curves[t],o=e.getLength(),a=o===0?0:1-i/o;return e.getPointAt(a)}t++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let o=0,i=this.curves;o<i.length;o++){const s=i[o],r=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,a=s.getPoints(r);for(let e=0;e<a.length;e++){const s=a[e];if(n&&n.equals(s))continue;t.push(s),n=s}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const n=e.curves[t];this.curves.push((new Al[n.type]).fromJSON(n))}return this}},sn=class extends El{constructor(e){super(),this.type="Path",this.currentPoint=new t,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,n){const s=new Ht(this.currentPoint.clone(),new t(e,n));return this.curves.push(s),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,s,o){const i=new _n(this.currentPoint.clone(),new t(e,n),new t(s,o));return this.curves.push(i),this.currentPoint.set(s,o),this}bezierCurveTo(e,n,s,o,i,a){const r=new gs(this.currentPoint.clone(),new t(e,n),new t(s,o),new t(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wn(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,i){const a=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(e+a,t+r,n,s,o,i),this}absarc(e,t,n,s,o,i){return this.absellipse(e,t,n,n,s,o,i),this}ellipse(e,t,n,s,o,i,a,r){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,s,o,i,a,r),this}absellipse(e,t,n,s,o,i,a,r){const c=new jn(e,t,n,s,o,i,a,r);if(this.curves.length>0){const e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Le=class extends sn{constructor(e){super(e),this.uuid=U(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push((new sn).fromJSON(s))}return this}},K=class extends r{constructor(e,t=1){super(),this.type="Light",this.color=new s(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},K.prototype.isLight=!0,wl=class extends K{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(r.DefaultUp),this.updateMatrix(),this.groundColor=new s(t)}copy(e){return K.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}},wl.prototype.isHemisphereLight=!0,jo=new o,bo=new e,vo=new e,Hn=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new t(512,512),this.map=null,this.mapPass=null,this.matrix=new o,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nt,this._frameExtents=new t(1,1),this._viewportCount=1,this._viewports=[new a(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bo.setFromMatrixPosition(e.matrixWorld),t.position.copy(bo),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},go=class extends Hn{constructor(){super(new E(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},go.prototype.isSpotLightShadow=!0,bl=class extends K{constructor(e,t,n=0,s=Math.PI/3,o=0,i=1){super(e,t),this.type="SpotLight",this.position.copy(r.DefaultUp),this.updateMatrix(),this.target=new r,this.distance=n,this.angle=s,this.penumbra=o,this.decay=i,this.shadow=new go}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bl.prototype.isSpotLight=!0,fo=new o,st=new e,zn=new e,lo=class extends Hn{constructor(){super(new E(90,1,.5,500)),this._frameExtents=new t(4,2),this._viewportCount=6,this._viewports=[new a(2,1,1,1),new a(0,1,1,1),new a(3,1,1,1),new a(1,1,1,1),new a(3,0,1,1),new a(1,0,1,1)],this._cubeDirections=[new e(1,0,0),new e(-1,0,0),new e(0,0,1),new e(0,0,-1),new e(0,1,0),new e(0,-1,0)],this._cubeUps=[new e(0,1,0),new e(0,1,0),new e(0,1,0),new e(0,1,0),new e(0,0,1),new e(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,o=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),st.setFromMatrixPosition(e.matrixWorld),n.position.copy(st),zn.copy(n.position),zn.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zn),n.updateMatrixWorld(),o.makeTranslation(-st.x,-st.y,-st.z),fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo)}},lo.prototype.isPointLightShadow=!0,ul=class extends K{constructor(e,t,n=0,s=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ul.prototype.isPointLight=!0,ro=class extends os{constructor(e=-1,t=1,n=1,s=-1,o=.1,i=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let e=o-n,a=o+n,t=i+s,r=i-s;if(this.view!==null&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=n*this.view.offsetX,a=e+n*this.view.width,t-=s*this.view.offsetY,r=t-s*this.view.height}this.projectionMatrix.makeOrthographic(e,a,t,r,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ro.prototype.isOrthographicCamera=!0,ao=class extends Hn{constructor(){super(new ro(-5,5,5,-5,.5,500))}},ao.prototype.isDirectionalLightShadow=!0,el=class extends K{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(r.DefaultUp),this.updateMatrix(),this.target=new r,this.shadow=new ao}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},el.prototype.isDirectionalLight=!0,Jc=class extends K{constructor(e,t){super(e,t),this.type="AmbientLight"}},Jc.prototype.isAmbientLight=!0,Zc=class extends K{constructor(e,t,n=10,s=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=s}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Zc.prototype.isRectAreaLight=!0,oo=class{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new e)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const s=e.x,o=e.y,i=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.282095),t.addScaledVector(n[1],.488603*o),t.addScaledVector(n[2],.488603*i),t.addScaledVector(n[3],.488603*s),t.addScaledVector(n[4],1.092548*(s*o)),t.addScaledVector(n[5],1.092548*(o*i)),t.addScaledVector(n[6],.315392*(3*i*i-1)),t.addScaledVector(n[7],1.092548*(s*i)),t.addScaledVector(n[8],.546274*(s*s-o*o)),t}getIrradianceAt(e,t){const s=e.x,o=e.y,i=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.886227),t.addScaledVector(n[1],2*.511664*o),t.addScaledVector(n[2],2*.511664*i),t.addScaledVector(n[3],2*.511664*s),t.addScaledVector(n[4],2*.429043*s*o),t.addScaledVector(n[5],2*.429043*o*i),t.addScaledVector(n[6],.743125*i*i-.247708),t.addScaledVector(n[7],2*.429043*s*i),t.addScaledVector(n[8],.429043*(s*s-o*o)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return(new this.constructor).copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,o=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*o,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*o,t[6]=.315392*(3*o*o-1),t[7]=1.092548*n*o,t[8]=.546274*(n*n-s*s)}},oo.prototype.isSphericalHarmonics3=!0,An=class extends K{constructor(e=new oo,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},An.prototype.isLightProbe=!0,$c=class{static decodeText(e){if(typeof TextDecoder!="undefined")return(new TextDecoder).decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},Pc=class extends h{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return(new this.constructor).copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Pc.prototype.isInstancedBufferGeometry=!0,Rc=class extends f{constructor(e,t,n,s){typeof n=="number"&&(s=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=s||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rc.prototype.isInstancedBufferAttribute=!0,Lc=class extends le{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,i=Re.get(e);if(i!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(i),o.manager.itemEnd(e)},0),i;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(n){Re.add(e,n),t&&t(n),o.manager.itemEnd(e)}).catch(function(t){s&&s(t),o.manager.itemError(e),o.manager.itemEnd(e)}),o.manager.itemStart(e)}},Lc.prototype.isImageBitmapLoader=!0,Nc=class{constructor(){this.type="ShapePath",this.color=new s,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new sn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,o,i){return this.currentPath.bezierCurveTo(e,t,n,s,o,i),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function f(e){const t=[];for(let n=0,o=e.length;n<o;n++){const i=e[n],s=new Le;s.curves=i.curves,t.push(s)}return t}function g(e,t){const s=t.length;let n=!1;for(let c=s-1,r=0;r<s;c=r++){let o=t[c],i=t[r],l=i.x-o.x,a=i.y-o.y;if(Math.abs(a)>Number.EPSILON){if(a<0&&(o=t[r],l=-l,i=t[c],a=-a),e.y<o.y||e.y>i.y)continue;if(e.y===o.y){if(e.x===o.x)return!0}else{const t=a*(e.x-o.x)-l*(e.y-o.y);if(t===0)return!0;if(t<0)continue;n=!n}}else{if(e.y!==o.y)continue;if(i.x<=e.x&&e.x<=o.x||o.x<=e.x&&e.x<=i.x)return!0}}return n}const p=me.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return f(o);let c,a,i;const d=[];if(o.length===1)return a=o[0],i=new Le,i.curves=a.curves,d.push(i),d;let l=!p(o[0].getPoints());l=e?!l:l;const u=[],n=[];let r=[],s=0,h;n[s]=void 0,r[s]=[];for(let t=0,i=o.length;t<i;t++)a=o[t],h=a.getPoints(),c=p(h),c=e?!c:c,c?(!l&&n[s]&&s++,n[s]={s:new Le,p:h},n[s].s.curves=a.curves,l&&s++,r[s]=[]):r[s].push({h:a,p:h[0]});if(!n[0])return f(o);if(n.length>1){let e=!1;const t=[];for(let e=0,t=n.length;e<t;e++)u[e]=[];for(let s=0,i=n.length;s<i;s++){const o=r[s];for(let i=0;i<o.length;i++){const a=o[i];let r=!0;for(let o=0;o<n.length;o++)g(a.p,n[o].p)&&(s!==o&&t.push({froms:s,tos:o,hole:i}),r?(r=!1,u[o].push(a)):e=!0);r&&u[s].push(a)}}t.length>0&&(e||(r=u))}let m;for(let e=0,t=n.length;e<t;e++){i=n[e].s,d.push(i),m=r[e];for(let e=0,t=m.length;e<t;e++)i.holes.push(m[e].h)}return d}},Dc=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=x4(e,t,this.data);for(let e=0,t=s.length;e<t;e++)Array.prototype.push.apply(n,s[e].toShapes());return n}};function x4(e,t,n){const o=Array.from(e),i=t/n.resolution,c=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*i,a=[];let s=0,r=0;for(let e=0;e<o.length;e++){const t=o[e];if(t===`
`)s=0,r-=c;else{const e=C4(t,i,s,r,n);s+=e.offsetX,a.push(e.path)}}return a}function C4(e,t,n,s,o){const i=o.glyphs[e]||o.glyphs["?"];if(!i){console.error('THREE.Font: character "'+e+'" does not exists in font family '+o.familyName+".");return}const a=new Nc;let r,c,l,d,u,h,m,f;if(i.o){const e=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let o=0,i=e.length;o<i;){const p=e[o++];switch(p){case"m":r=e[o++]*t+n,c=e[o++]*t+s,a.moveTo(r,c);break;case"l":r=e[o++]*t+n,c=e[o++]*t+s,a.lineTo(r,c);break;case"q":l=e[o++]*t+n,d=e[o++]*t+s,u=e[o++]*t+n,h=e[o++]*t+s,a.quadraticCurveTo(u,h,l,d);break;case"b":l=e[o++]*t+n,d=e[o++]*t+s,u=e[o++]*t+n,h=e[o++]*t+s,m=e[o++]*t+n,f=e[o++]*t+s,a.bezierCurveTo(u,h,m,f,l,d);break}}}return{offsetX:i.ha*t,path:a}}Dc.prototype.isFont=!0,Tc={getContext:function(){return En===void 0&&(En=new(window.AudioContext||window.webkitAudioContext)),En},setContext:function(e){En=e}},Fc=class extends le{constructor(e){super(e)}load(e,t,n,s){const i=this,o=new fu(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){try{const e=n.slice(0),s=Tc.getContext();s.decodeAudioData(e,function(e){t(e)})}catch(t){s?s(t):console.error(t),i.manager.itemError(e)}},n,s)}},Mc=class extends An{constructor(t,n,o=1){super(void 0,o);const i=(new s).set(t),a=(new s).set(n),r=new e(i.r,i.g,i.b),c=new e(a.r,a.g,a.b),l=Math.sqrt(Math.PI),d=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(c).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(c).multiplyScalar(d)}},Mc.prototype.isHemisphereLightProbe=!0,Sc=class extends An{constructor(e,t=1){super(void 0,t);const n=(new s).set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}},Sc.prototype.isAmbientLightProbe=!0,Ac=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function kc(){return(typeof performance=="undefined"?Date:performance).now()}Ec=class extends r{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune===void 0)return;return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Cc=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},xc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,o,i;switch(t){case"quaternion":s=this._slerp,o=this._slerpAdditive,i=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,o=this._select,i=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,o=this._lerpAdditive,i=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=o,this._setIdentity=i,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const o=this.buffer,s=this.valueSize,i=e*s+s;let n=this.cumulativeWeight;if(n===0){for(let e=0;e!==s;++e)o[i+e]=o[e];n=t}else{n+=t;const e=t/n;this._mixBufferRegion(o,i,0,e,s)}this.cumulativeWeight=n}accumulateAdditive(e){const n=this.buffer,t=this.valueSize,s=t*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(n,s,0,e,t),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,o=this.cumulativeWeight,i=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const e=t*this._origIndex;this._mixBufferRegion(n,s,e,1-o,t)}i>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let e=t,o=t+t;e!==o;++e)if(n[e]!==n[e+t]){a.setValue(n,s);break}}saveOriginalState(){const s=this.binding,e=this.buffer,t=this.valueSize,n=t*this._origIndex;s.getValue(e,n);for(let s=t,o=n;s!==o;++s)e[s]=e[n+s%t];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,o){if(s>=.5)for(let s=0;s!==o;++s)e[t+s]=e[n+s]}_slerp(e,t,n,s){O.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,o){const i=this._workIndex*o;O.multiplyQuaternionsFlat(e,i,e,t,e,n),O.slerpFlat(e,t,e,t,e,i,s)}_lerp(e,t,n,s,o){const i=1-s;for(let a=0;a!==o;++a){const r=t+a;e[r]=e[r]*i+e[n+a]*s}}_lerpAdditive(e,t,n,s,o){for(let i=0;i!==o;++i){const a=t+i;e[a]=e[a]+e[n+i]*s}}},On="\\[\\]\\.:\\/",wc=new RegExp("["+On+"]","g"),xn="[^"+On+"]",yc="[^"+On.replace("\\.","")+"]",jc=/((?:WC+[/:])*)/.source.replace("WC",xn),bc=/(WCOD+)?/.source.replace("WCOD",yc),vc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xn),gc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xn),pc=new RegExp("^"+jc+bc+vc+gc+"$"),fc=["material","materials","bones"],mc=class{constructor(e,t,n){const s=n||d.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const s=this._targetGroup.nCachedObjects_,n=this._bindings[s];n!==void 0&&n.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},d=class _PropertyBinding{constructor(e,t,n){this.path=t,this.parsedPath=n||_PropertyBinding.parseTrackName(t),this.node=_PropertyBinding.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _PropertyBinding.Composite(e,t,n):new _PropertyBinding(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wc,"")}static parseTrackName(e){const n=pc.exec(e);if(!n)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const t={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=t.nodeName&&t.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const e=t.nodeName.substring(s+1);fc.indexOf(e)!==-1&&(t.nodeName=t.nodeName.substring(0,s),t.objectName=e)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(e){for(let o=0;o<e.length;o++){const s=e[o];if(s.name===t||s.uuid===t)return s;const i=n(s.children);if(i)return i}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,a=n.propertyName;let s=n.propertyIndex;if(e||(e=_PropertyBinding.findNode(this.rootNode,n.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let t=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let n=0;n<e.length;n++)if(e[n].name===t){t=n;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(t!==void 0){if(e[t]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[t]}}const t=e[a];if(t===void 0){const t=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+t+"."+a+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}o=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=s}else t.fromArray!==void 0&&t.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(o=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},d.Composite=mc,d.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},d.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},d.prototype.GetterByBindingType=[d.prototype._getValue_direct,d.prototype._getValue_array,d.prototype._getValue_arrayElement,d.prototype._getValue_toArray],d.prototype.SetterByBindingTypeAndVersioning=[[d.prototype._setValue_direct,d.prototype._setValue_direct_setNeedsUpdate,d.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[d.prototype._setValue_array,d.prototype._setValue_array_setNeedsUpdate,d.prototype._setValue_array_setMatrixWorldNeedsUpdate],[d.prototype._setValue_arrayElement,d.prototype._setValue_arrayElement_setNeedsUpdate,d.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[d.prototype._setValue_fromArray,d.prototype._setValue_fromArray_setNeedsUpdate,d.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],uc=class{constructor(){this.uuid=U(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,o=this._paths,i=this._parsedPaths,n=this._bindings,a=n.length;let r=void 0,c=e.length,s=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const u=arguments[h],m=u.uuid;let l=t[m];if(l===void 0){l=c++,t[m]=l,e.push(u);for(let e=0,t=a;e!==t;++e)n[e].push(new d(u,o[e],i[e]))}else if(l<s){r=e[l];const c=--s,h=e[c];t[h.uuid]=l,e[l]=h,t[m]=c,e[c]=u;for(let e=0,r=a;e!==r;++e){const t=n[e],h=t[c];let s=t[l];t[l]=h,s===void 0&&(s=new d(u,o[e],i[e])),t[c]=s}}else e[l]!==r&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=s}remove(){const e=this._objects,t=this._indicesByUUID,s=this._bindings,o=s.length;let n=this.nCachedObjects_;for(let a=0,l=arguments.length;a!==l;++a){const r=arguments[a],c=r.uuid,i=t[c];if(i!==void 0&&i>=n){const a=n++,l=e[a];t[l.uuid]=i,e[i]=l,t[c]=a,e[a]=r;for(let t=0,n=o;t!==n;++t){const e=s[t],r=e[a],c=e[i];e[i]=r,e[a]=c}}}this.nCachedObjects_=n}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,o=n.length;let s=this.nCachedObjects_,i=e.length;for(let r=0,l=arguments.length;r!==l;++r){const d=arguments[r],c=d.uuid,a=t[c];if(a!==void 0)if(delete t[c],a<s){const r=--s,c=e[r],l=--i,d=e[l];t[c.uuid]=a,e[a]=c,t[d.uuid]=r,e[r]=d,e.pop();for(let t=0,s=o;t!==s;++t){const e=n[t],i=e[r],c=e[l];e[a]=i,e[r]=c,e.pop()}}else{const s=--i,r=e[s];s>0&&(t[r.uuid]=a),e[a]=r,e.pop();for(let e=0,i=o;e!==i;++e){const t=n[e];t[a]=t[s],t.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const a=this._bindingsIndicesByPath;let n=a[e];const s=this._bindings;if(n!==void 0)return s[n];const r=this._paths,c=this._parsedPaths,o=this._objects,l=o.length,u=this.nCachedObjects_,i=new Array(l);n=s.length,a[e]=n,r.push(e),c.push(t),s.push(i);for(let n=u,s=o.length;n!==s;++n){const a=o[n];i[n]=new d(a,e,t)}return i}unsubscribe_(e){const n=this._bindingsIndicesByPath,t=n[e];if(t!==void 0){const i=this._paths,a=this._parsedPaths,s=this._bindings,o=s.length-1,r=s[o],c=e[o];n[c]=t,s[t]=r,s.pop(),a[t]=a[o],a.pop(),i[t]=i[o],i.pop()}}},uc.prototype.isAnimationObjectGroup=!0,dc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const i=t.tracks,o=i.length,a=new Array(o),r={endingStart:Ce,endingEnd:Ce};for(let e=0;e!==o;++e){const t=i[e].createInterpolant(null);a[e]=t,t.settings=r}this._interpolantSettings=r,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=n1,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const n=this._clip.duration,s=e._clip.duration,o=s/n,i=n/s;e.warp(1,o,t),this.warp(i,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const o=this._mixer,i=o.time,a=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=o._lendControlInterpolant(),this._timeScaleInterpolant=s);const r=s.parameterPositions,c=s.sampleValues;return r[0]=i,r[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const i=this._startTime;if(i!==null){const s=(e-i)*n;if(s<0||n===0)return;this._startTime=null,t=n*s}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case No:for(let n=0,s=e.length;n!==s;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case bs:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const s=this._clip.duration,i=this.loop;let t=this.time+e,n=this._loopCount;const o=i===s1;if(e===0)return n===-1?t:o&&(n&1)===1?s-t:t;if(i===e1){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(t>=s)t=s;else if(t<0)t=0;else{this.time=t;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=t,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),t>=s||t<0){const i=Math.floor(t/s);t-=s*i,n+=Math.abs(i);const a=this.repetitions-n;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,t=e>0?s:0,this.time=t,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){const t=e<0;this._setEndings(t,!t,o)}else this._setEndings(!1,!1,o);this._loopCount=n,this.time=t,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=t;if(o&&(n&1)===1)return s-t}return t}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ee,s.endingEnd=Ee):(e?s.endingStart=this.zeroSlopeAtStart?Ee:Ce:s.endingStart=Ft,t?s.endingEnd=this.zeroSlopeAtEnd?Ee:Ce:s.endingEnd=Ft)}_scheduleFading(e,t,n){const o=this._mixer,i=o.time;let s=this._weightInterpolant;s===null&&(s=o._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,r=s.sampleValues;return a[0]=i,r[0]=t,a[1]=i+e,r[1]=n,this}},lc=class extends je{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,a=e._clip.tracks,c=a.length,o=e._propertyBindings,l=e._interpolants,n=i.uuid,r=this._bindingsByRootAndName;let s=r[n];s===void 0&&(s={},r[n]=s);for(let r=0;r!==c;++r){const h=a[r],u=h.name;let e=s[u];if(e!==void 0)o[r]=e;else{if(e=o[r],e!==void 0){e._cacheIndex===null&&(++e.referenceCount,this._addInactiveBinding(e,n,u));continue}const s=t&&t._propertyBindings[r].binding.parsedPath;e=new xc(d.create(i,u,s),h.ValueTypeName,h.getValueSize()),++e.referenceCount,this._addInactiveBinding(e,n,u),o[r]=e}l[r].resultBuffer=e.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const s=(e._localRoot||this._root).uuid,t=e._clip.uuid,n=this._actionsByClip[t];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,t,s)}const t=e._propertyBindings;for(let e=0,s=t.length;e!==s;++e){const n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let e=0,s=t.length;e!==s;++e){const n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const o=this._actions,i=this._actionsByClip;let s=i[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=s;else{const t=s.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=o.length,o.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const n=this._actions,s=n[n.length-1],o=e._cacheIndex;s._cacheIndex=o,n[o]=s,n.pop(),e._cacheIndex=null;const i=e._clip.uuid,a=this._actionsByClip,r=a[i],t=r.knownActions,c=t[t.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,t[l]=c,t.pop(),e._byClipCacheIndex=null;const d=r.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],t.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let e=0,s=t.length;e!==s;++e){const n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,s=e._cacheIndex,n=this._nActiveActions++,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_takeBackAction(e){const t=this._actions,s=e._cacheIndex,n=--this._nActiveActions,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_addInactiveBinding(e,t,n){const o=this._bindingsByRootAndName,i=this._bindings;let s=o[t];s===void 0&&(s={},o[t]=s),s[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,c=n.path,o=this._bindingsByRootAndName,i=o[s],a=t[t.length-1],r=e._cacheIndex;a._cacheIndex=r,t[r]=a,t.pop(),delete i[c],Object.keys(i).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,s=e._cacheIndex,n=this._nActiveBindings++,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_takeBackBinding(e){const t=this._bindings,s=e._cacheIndex,n=--this._nActiveBindings,o=t[n];e._cacheIndex=n,t[n]=e,o._cacheIndex=s,t[s]=o}_lendControlInterpolant(){const n=this._controlInterpolants,t=this._nActiveControlInterpolants++;let e=n[t];return e===void 0&&(e=new Bo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),e.__cacheIndex=t,n[t]=e),e}_takeBackControlInterpolant(e){const t=this._controlInterpolants,s=e.__cacheIndex,n=--this._nActiveControlInterpolants,o=t[n];e.__cacheIndex=n,t[n]=e,o.__cacheIndex=s,t[s]=o}clipAction(e,t,n){const r=t||this._root,c=r.uuid;let s=typeof e=="string"?Lo.findByName(r,e):e;const l=s!==null?s.uuid:e,o=this._actionsByClip[l];let i=null;if(n===void 0&&(s!==null?n=s.blendMode:n=bs),o!==void 0){const e=o.actionByRoot[c];if(e!==void 0&&e.blendMode===n)return e;i=o.knownActions[0],s===null&&(s=i._clip)}if(s===null)return null;const a=new dc(this,s,t,n);return this._bindAction(a,i),this._addInactiveAction(a,l,c),a}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Lo.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0?o.actionByRoot[i]||null:null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const n=this._actions,s=this._nActiveActions,o=this.time+=e,i=Math.sign(e),t=this._accuIndex^=1;for(let a=0;a!==s;++a){const r=n[a];r._update(o,e,i,t)}const a=this._bindings,r=this._nActiveBindings;for(let e=0;e!==r;++e)a[e].apply(t);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,o=s[n];if(o!==void 0){const e=o.knownActions;for(let s=0,a=e.length;s!==a;++s){const n=e[s];this._deactivateAction(n);const o=n._cacheIndex,i=t[t.length-1];n._cacheIndex=null,n._byClipCacheIndex=null,i._cacheIndex=o,t[o]=i,t.pop(),this._removeInactiveBindingsForAction(n)}delete s[n]}}uncacheRoot(e){const n=e.uuid,s=this._actionsByClip;for(const t in s){const o=s[t].actionByRoot,e=o[n];e!==void 0&&(this._deactivateAction(e),this._removeInactiveAction(e))}const o=this._bindingsByRootAndName,t=o[n];if(t!==void 0)for(const n in t){const e=t[n];e.restoreOriginalState(),this._removeInactiveBinding(e)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},lc.prototype._controlInterpolantsResultBuffer=new Float32Array(1),cc=class _Uniform{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new _Uniform(this.value.clone===void 0?this.value:this.value.clone())}},rc=class extends tt{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},rc.prototype.isInstancedInterleavedBuffer=!0,ac=class{constructor(e,t,n,s,o){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ac.prototype.isGLBufferAttribute=!0,Zs=new t,lt=class{constructor(e=new t(1/0,1/0),n=new t(-(1/0),-(1/0))){this.min=e,this.max=n}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-(1/0),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new t),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new t),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new t),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new t),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){const t=Zs.copy(e).clamp(this.min,this.max);return t.sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},lt.prototype.isBox2=!0,Qs=new e,on=new e,tc=class{constructor(t=new e,n=new e){this.start=t,this.end=n}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(t){return t===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new e),t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),t=new e),t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new e),this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(e,t){Qs.subVectors(e,this.start),on.subVectors(this.end,this.start);const s=on.dot(on),o=on.dot(Qs);let n=o/s;return t&&(n=M(n,0,1)),n}closestPointToPoint(t,n,s){const o=this.closestPointToPointParameter(t,n);return s===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),s=new e),this.delta(s).multiplyScalar(o).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return(new this.constructor).copy(this)}},ec=class extends r{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}},ec.prototype.isImmediateRenderObject=!0,de=new e,Zt=new o,ds=new o,Nr=class extends Rn{constructor(e){const t=Dr(e),n=new h,o=[],i=[],a=new s(0,0,1),r=new s(0,1,0);for(let e=0;e<t.length;e++){const n=t[e];n.parent&&n.parent.isBone&&(o.push(0,0,0),o.push(0,0,0),i.push(a.r,a.g,a.b),i.push(r.r,r.g,r.b))}n.setAttribute("position",new b(o,3)),n.setAttribute("color",new b(i,3));const c=new ot({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");ds.copy(this.root.matrixWorld).invert();for(let n=0,o=0;n<t.length;n++){const e=t[n];e.parent&&e.parent.isBone&&(Zt.multiplyMatrices(ds,e.matrixWorld),de.setFromMatrixPosition(Zt),s.setXYZ(o,de.x,de.y,de.z),Zt.multiplyMatrices(ds,e.parent.matrixWorld),de.setFromMatrixPosition(Zt),s.setXYZ(o+1,de.x,de.y,de.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Dr(e){const t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Dr(e.children[n]));return t}var e,t,n,s,o,i,a,r,l,d,u,h,f,p,g,v,b,j,_,O,x,E,k,S,F,T,z,D,N,L,R,P,H,I,B,V,$,W,K,q,Y,G,X,Q,Z,J,u0=class extends Rn{constructor(e=10,t=10,n=4473924,o=8947848){n=new s(n),o=new s(o);const l=t/2,d=e/t,i=e/2,r=[],a=[];for(let u=0,e=0,s=-i;u<=t;u++,s+=d){r.push(-i,0,s,i,0,s),r.push(s,0,-i,s,0,i);const c=u===l?n:o;c.toArray(a,e),e+=3,c.toArray(a,e),e+=3,c.toArray(a,e),e+=3,c.toArray(a,e),e+=3}const c=new h;c.setAttribute("position",new b(r,3)),c.setAttribute("color",new b(a,3));const u=new ot({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}},h0=new Float32Array(1),z0=new Int32Array(h0.buffer),_s=4,At=8,T0=Math.pow(2,At),Fr=[.125,.215,.35,.446,.526,.582],b0=At-_s+1+Fr.length,F0={[Me]:0,[ps]:1,[To]:2,[So]:3,[Ao]:4,[ko]:5,[zo]:6},y0=new vs({side:v,depthWrite:!1,depthTest:!1}),M0=new D(new fs,y0),{_lodPlanes:S0,_sizeLods:A0,_sigmas:E0}=O0(),Cr,Ls,Mr,Rs,zr,et,Tt,pt,Hs,jt,Xe,Is,Ys,Gs,oc,De,hc,_c,to,so,qc,pl,gl,yl,_o,Oo,Cl,Sl,Rl,Hl,Kl,Ld,Qd,eu,is,iu,au,ru,lu,cn,du,pu,_t,vu,ku,Pu,Iu,r1,Ro,zs,Ts,Ho,Io,Ms,As,xs,ys,Vo,$o,Lu,ms,hs,zu,Mu,Gt,Eu,tn,ee,nn,xu,Ou,_u,rt,yu,pe,bu,ou,Se,gt,su,Wd,$d,Vd,Pd,Nd,ei,ti,ii,ai,ri,pi,vi,ji,dd,yi,wi,ad,id,od,sd,nd,ed,Jl,Zl,Ql,ql,$l,Bl,nl,Xc,Wc,Bc,Zr,Qr,Xr,xr,Or,wr,Id,Bd,gu,Fu,$u,Qu,Zu,e1,n1,s1,Et,kt,ws,Ce,Ee,Ft,bs,No,mu,Me,ps,zo,To,cu,So,Ao,ko,Jd,Ul,Fe,Fl,cs,xl,ft,Xt,wo,je,ss,ts,wt,Pe,jl,be,vl,es,ho,ct,kn,We,$e,Ve,ie,ae,ve,Ge,gn,fn,ge,fl,co,Bn,Vn,Ae,Un,rn,ne,Yn,an,Xn,qe,we,rl,tl,ue,Jt,io,no,Bt,ic,sc,Xs,Ne,Lt,at,nc,Pr,Ws,$s,Bs,Lr,Ps,Cs,Tr,Sr,Fs,Te,Ue,ki,ks,Es,Os,Rr,Vs,St,vs,Pt,Js,eo,Oc,Qc,ns,ye,ut,mo,Be,Nn,se,te,oe,Kn,Gn,Zn,Qt,Yt,Kt,Wt,$t,Vt,ls,Ot,fs,Tu,i1,o1,ce,os,Oe,xe,js,Mt,Ko,qo,ke,Dt,Nt,Jo,Dd,zd,Td,Fd,Md,Sd,kd,Ed,Cd,xd,wd,_d,jd,bd,vd,gd,fd,md,hd,ud,Pi,cd,rd,td,Il,zl,Tl,cl,al,Gr,Yr,qr,Kr,Ur,Wr,Br,Ir,Hr,ld,Hi,Ii,Bi,Vi,$i,Wi,Ui,Ki,qi,Yi,Gi,Xi,Qi,Zi,Ji,ea,ta,na,sa,oa,ia,aa,ra,ca,la,da,ua,ha,ma,fa,pa,va,ba,ja,ya,_a,wa,Oa,xa,Ca,Ea,ka,Aa,Sa,Ma,Fa,Ta,za,Da,Na,La,Ra,Pa,Ha,Ia,Ba,Va,$a,Wa,Ua,Ka,qa,Ya,Ga,Xa,Qa,Za,Ja,er,tr,nr,sr,or,ir,ar,rr,cr,lr,dr,ur,hr,mr,fr,pr,gr,vr,br,jr,yr,_r,Ns,Li,Ni,Vr,$r,Di,zi,Ti,Fi,Mi,Si,In,Kc,il,Ri,ll,kl,Ei,Ci,Dl,Nl,xi,it,Vl,Ln,Wl,Yl,Gl,Xl,Fn,tt,Cn,Oi,Ze,Qe,Ke,_e,Ye,mt,_i,xt,Je,yn,bi,Sn,gi,pd,fi,mi,hi,yd,ui,di,Od,li,ci,bn,nt,Ad,ot,oi,si,ni,Tn,vn,Dn,Zo,Qo,Rn,Hd,Xo,Ds,Pn,un,dn,Ud,qd,Yd,Gd,Xd,N1,F1,M1,S1,tu,me,Rt,Ru,Hu,Bu,Vu,Wo,Wu,Uu,Ku,qu,Yu,Gu,Xu,re,Ju,Bo,t1,ze,Po,It,a1,dt,Ie,zt,Lo,Re,Cu,ju,le,fu,Do,hu,uu,jn,Fo,pn,$n,Wn,rs,Eo,gs,Co,Ht,Pl,_n,xo,wn,Al,El,sn,Le,wl,jo,bo,vo,Hn,go,bl,fo,st,zn,lo,ul,ro,ao,el,Jc,Zc,oo,An,$c,Pc,Rc,Lc,Nc,Dc,En,Tc,Fc,Mc,Sc,Ac,Ec,Cc,xc,On,wc,xn,yc,jc,bc,vc,gc,pc,fc,mc,uc,dc,lc,cc,rc,ac,Zs,lt,Qs,on,tc,ec,de,Zt,ds,Nr,Go,Ar,kr,Ss,He=(1+Math.sqrt(5))/2,yt=1/He,k0=[new e(1,1,1),new e(-1,1,1),new e(1,1,-1),new e(-1,1,-1),new e(0,He,yt),new e(0,He,-yt),new e(yt,0,He),new e(-yt,0,He),new e(He,yt,0),new e(-He,yt,0)];function O0(){const t=[],n=[],s=[];let e=At;for(let r=0;r<b0;r++){const u=Math.pow(2,e);n.push(u);let g=1/u;r>At-_s?g=Fr[r-At+_s-1]:r==0&&(g=0),s.push(g);const v=1/(u-1),i=-v/2,a=1+v/2,_=[i,i,a,i,a,a,i,i,a,a,i,a],l=6,o=6,m=3,d=2,p=1,b=new Float32Array(m*o*l),j=new Float32Array(d*o*l),y=new Float32Array(p*o*l);for(let e=0;e<l;e++){const t=e%3*2/3-1,n=e>2?0:-1,s=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];b.set(s,m*o*e),j.set(_,d*o*e);const i=[e,e,e,e,e,e];y.set(i,p*o*e)}const c=new h;c.setAttribute("position",new f(b,m)),c.setAttribute("uv",new f(j,d)),c.setAttribute("faceIndex",new f(y,p)),t.push(c),e>_s&&e--}return{_lodPlanes:t,_sizeLods:n,_sigmas:s}}L.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(L.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},sn.prototype.fromPoints=function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)},u0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Nr.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},le.prototype.extractUrlBase=function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),$c.extractUrlBase(e)},le.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},lt.prototype.center=function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},lt.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},lt.prototype.isIntersectionBox=function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},lt.prototype.size=function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)},N.prototype.center=function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},N.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},N.prototype.isIntersectionBox=function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},N.prototype.isIntersectionSphere=function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},N.prototype.size=function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)},Ae.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Nt.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)},tc.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)},j.prototype.flattenToArrayOffset=function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},j.prototype.multiplyVector3=function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},j.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},j.prototype.applyToBufferAttribute=function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},j.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},j.prototype.getInverse=function(e){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()},o.prototype.extractPosition=function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},o.prototype.flattenToArrayOffset=function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},o.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),(new e).setFromMatrixColumn(this,3)},o.prototype.setRotationFromQuaternion=function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},o.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},o.prototype.multiplyVector3=function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},o.prototype.multiplyVector4=function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},o.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},o.prototype.rotateAxis=function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},o.prototype.crossVector=function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},o.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},o.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},o.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},o.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},o.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},o.prototype.applyToBufferAttribute=function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},o.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},o.prototype.makeFrustum=function(e,t,n,s,o,i){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,s,n,o,i)},o.prototype.getInverse=function(e){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()},Y.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)},O.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},O.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},qe.prototype.isIntersectionBox=function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},qe.prototype.isIntersectionPlane=function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},qe.prototype.isIntersectionSphere=function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},S.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},S.prototype.barycoordFromPoint=function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},S.prototype.midpoint=function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},S.prototypenormal=function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},S.prototype.plane=function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)},S.barycoordFromPoint=function(e,t,n,s,o){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),S.getBarycoord(e,t,n,s,o)},S.normal=function(e,t,n,s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),S.getNormal(e,t,n,s)},Le.prototype.extractAllPoints=function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},Le.prototype.extrude=function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Rt(this,e)},Le.prototype.makeGeometry=function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Hu(this,e)},t.prototype.fromAttribute=function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},t.prototype.distanceToManhattan=function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},t.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},e.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},e.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},e.prototype.getPositionFromMatrix=function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},e.prototype.getScaleFromMatrix=function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},e.prototype.getColumnFromMatrix=function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},e.prototype.applyProjection=function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},e.prototype.fromAttribute=function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},e.prototype.distanceToManhattan=function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},e.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},a.prototype.fromAttribute=function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},a.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},r.prototype.getChildByName=function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},r.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},r.prototype.translate=function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},r.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},r.prototype.applyMatrix=function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)},Object.defineProperties(r.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),D.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(D.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),mu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),di.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},E.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)},Object.defineProperties(K.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}}),Object.defineProperties(f.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xt},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xt)}}}),f.prototype.setDynamic=function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Xt:ft),this},f.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},f.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},h.prototype.addIndex=function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},h.prototype.addAttribute=function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new f(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},h.prototype.addDrawCall=function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},h.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},h.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},h.prototype.removeAttribute=function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},h.prototype.applyMatrix=function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)},Object.defineProperties(h.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),tt.prototype.setDynamic=function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Xt:ft),this},tt.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Rt.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Rt.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Rt.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Fn.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},cc.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(y.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new s}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Hs}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}}),Object.defineProperties(ce.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}}),c.prototype.clearTarget=function(e,t,n,s){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,s)},c.prototype.animate=function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},c.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},c.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},c.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},c.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},c.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},c.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},c.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},c.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},c.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},c.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},c.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},c.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},c.prototype.enableScissorTest=function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},c.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},c.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},c.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},c.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},c.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},c.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},c.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},c.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},c.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},c.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(c.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?ps:Me}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Ll.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(be.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}}),Ec.prototype.load=function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this,n=new Fc;return n.load(e,function(e){t.setBuffer(e)}),this},Cc.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},js.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)},js.prototype.clear=function(e,t,n,s){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(e,t,n,s)},Pe.crossOrigin=void 0,Pe.loadTexture=function(e,t,n,s){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const o=new uu;o.setCrossOrigin(this.crossOrigin);const i=o.load(e,n,void 0,s);return t&&(i.mapping=t),i},Pe.loadTextureCube=function(e,t,n,s){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const o=new hu;o.setCrossOrigin(this.crossOrigin);const i=o.load(e,n,void 0,s);return t&&(i.mapping=t),i},Pe.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Pe.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go),Ar=class{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const s={1:"WebGL",2:"WebGL 2"},o={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const t=document.createElement("div");return t.id="webglmessage",t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.fontWeight="normal",t.style.textAlign="center",t.style.background="#fff",t.style.color="#000",t.style.padding="1.5em",t.style.width="400px",t.style.margin="5em auto 0",o[e]?n=n.replace("$0","graphics card"):n=n.replace("$0","browser"),n=n.replace("$1",s[e]),t.innerHTML=n,t}},kr=class{constructor(){this.scene=new Fn,this.camera=new E(90,window.innerWidth/window.innerHeight,.1,1e3);try{this.renderer=new c({antialias:!1,failIfMajorPerformanceCaveat:!0})}catch(e){console.log(e),this.rendererFailure=!0;return}this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.className="backdrop",this.renderer.domElement.style.opacity="0",document.body.appendChild(this.renderer.domElement),this.uniforms={iTime:{type:"f",value:.1},iResolution:{type:"v2",value:new t},iMouse:{type:"v2",value:new t}},this.uniforms.iResolution.value.x=window.innerWidth,this.uniforms.iResolution.value.y=window.innerHeight,this.uniforms.iMouse.value.x=window.innerWidth/2,this.uniforms.iMouse.value.y=window.innerHeight/2;const e=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
    `,n=`
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

#define AA 1
#define SPEED 8.
#define WAVE
#define FUJI

const vec3 SUN_COLOR = vec3(.8, .2, .5);
const vec3 HAZE_COLOR = vec3(.4, .5, .8);

// A noise-added time variant.
float noisyTime;

float amp(vec2 p) { return smoothstep(1., 10., abs(p.x)); }

float pow512(float a) {
  a *= a;  //^2
  a *= a;  //^4
  a *= a;  //^8
  a *= a;  //^16
  a *= a;  //^32
  a *= a;  //^64
  a *= a;  //^128
  a *= a;  //^256
  return a * a;
}

float pow1d5(float a) { return a * sqrt(a); }

float hash21(vec2 co) {
  return fract(sin(dot(co.xy, vec2(1.9898, 7.233))) * 45758.5433);
}

float hash(vec2 uv) {
  float a = amp(uv);
#ifdef WAVE
  float w = a > 0.
                ? (1. - .8 * pow512(.51 + .49 * sin((.02 * (uv.y + .5 * uv.x) -
                                                     noisyTime * 0.7) *
                                                    2.)))
                : 0.;
#else
  float w = 1.;
#endif
  return (a > 0. ? a * pow1d5(hash21(uv)) * w : 0.);
}

float edgeMin(float dx, vec2 da, vec2 db) {
  return min(min((1. - dx) * db.y, da.x), da.y);
}

// 2D triangular noise, red channel denotes height, green is distance to nearest
// edge.
vec2 trinoise(vec2 uv) {
  const float sq = sqrt(3. / 2.);
  uv.x *= sq;
  uv.y -= .5 * uv.x;
  vec2 d = fract(uv);
  uv -= d;

  bool c = dot(d, vec2(1)) > 1.;

  vec2 dd = 1. - d;
  vec2 da = c ? dd : d, db = c ? d : dd;

  float nn = hash(uv + float(c));
  float n2 = hash(uv + vec2(1, 0));
  float n3 = hash(uv + vec2(0, 1));

  float nmid = mix(n2, n3, d.y);
  float ns = mix(nn, c ? n2 : n3, da.y);
  float dx = da.x / db.y;
  return vec2(mix(ns, nmid, dx), edgeMin(dx, da, db));
}

vec2 map(vec3 p) {
  // Use the XZ plane to sample a triangle mesh plane.
  vec2 n = trinoise(p.xz);
  return vec2(p.y - 2. * n.x, n.y);
}

vec3 gradient(vec3 p) {
  const vec2 e = vec2(.005, 0);
  float a = map(p).x;
  return vec3(map(p + e.xyy).x - a, map(p + e.yxy).x - a,
              map(p + e.yyx).x - a) /
         e.x;
}

vec2 intersectTerrain(vec3 ro, vec3 rd) {
  float d = 0., h = 0.;
  // Raymarch. Iteration count empirically determined.
  for (int i = 0; i < 500; ++i) {
    vec3 p = ro + d * rd;
    vec2 s = map(p);
    h = s.x;
    d += h * .5;
    // Stop when we're no longer making much progress.
    if (abs(h) < .003 * d) return vec2(d, s.y);
    // Stop if we've gone too far and still haven't hit anything.
    if (d > 150.0 || p.y > 2.0) break;
  }

  return vec2(-1);
}

void addsun(vec3 rd, vec3 ld, float haze, inout vec3 col) {
  const float RADIUS = .3;
  float sun = smoothstep(RADIUS + 0.02, RADIUS, distance(rd, ld));
  float bloom = smoothstep(0.7, 0.0, distance(rd, ld));

  if (sun > 0.0) {
    float uvy = (rd.y - ld.y) + RADIUS;
    float cut = 3.0 * sin((uvy + noisyTime * 0.2) * 120.0) +
                clamp(uvy * 20.0 - 4.0, -6.0, 6.0);
    sun = clamp(sun * cut, 0.0, 1.0);

    col = mix(col, mix(SUN_COLOR, HAZE_COLOR, pow(haze, 3.0) * 0.3), sun);
  }

  col += SUN_COLOR * bloom * 0.3;
}

float starnoise(vec3 rd) {
  float c = 0.;
  vec3 p = normalize(rd) * 200.;
  for (float i = 0.; i < 4.; i++) {
    vec3 q = fract(p) - .5;
    vec3 id = floor(p);
    float c2 = smoothstep(.5, 0., length(q));
    c2 *= step(hash21(id.xz / id.y), .06 - i * i * 0.005);
    c += c2;
    p = p * .6 +
        .5 * p * mat3(3. / 5., 0, 4. / 5., 0, 1, 0, -4. / 5., 0, 3. / 5.);
  }
  c *= c;
  float g = dot(sin(rd * 10.512), cos(rd.yzx * 10.512));
  c *= smoothstep(-3.14, -.9, g) * .6 + .5 * smoothstep(-.3, 1., g);
  return c * c;
}

float dot2(in vec2 v) { return dot(v, v); }

float sdTrapezoid(in vec2 p, in float r1, float r2, float he) {
  vec2 k1 = vec2(r2, he);
  vec2 k2 = vec2(r2 - r1, 2.0 * he);
  p.x = abs(p.x);
  vec2 ca = vec2(p.x - min(p.x, (p.y < 0.0) ? r1 : r2), abs(p.y) - he);
  vec2 cb = p - k1 + k2 * clamp(dot(k1 - p, k2) / dot2(k2), 0.0, 1.0);
  float s = (cb.x < 0.0 && ca.y < 0.0) ? -1.0 : 1.0;
  return s * sqrt(min(dot2(ca), dot2(cb)));
}

vec3 gsky(vec3 rd, vec3 ld, bool mask) {
  float haze = exp2(-6. * (abs(rd.y) - .1 * dot(rd, ld)));

  float stars = mask ? (starnoise(rd)) * (1. - min(haze, 1.)) : 0.;
  vec3 back =
      vec3(.4, .1, .4) *
      (1. - .5 * exp2(-.1 * abs(length(rd.xz) / rd.y)) * max(sign(rd.y), 0.));

  vec3 col = clamp(mix(back, HAZE_COLOR, haze) + stars, 0., 1.);

  if (mask) addsun(rd, ld, haze, col);

#ifdef FUJI
  float fujiVal = sdTrapezoid(rd.xy * 2.9, 1.95 - rd.y * 3., 0.08, 0.5);
  if (mask && fujiVal <= 0.0) {
    // Calculate snow location.
    float waveVal =
        rd.y * 1. + sin(rd.x * 100.0 + 2. + iTime * 3.) * 0.01 - 0.1;
    float waveEdgeThickness = smoothstep(0.0, 0.005, waveVal);

    col = vec3(0.15);
    // Top snow.
    col =
        mix(col, vec3(1.0, 1.0, 1.0), fujiVal <= 0.0 ? waveEdgeThickness : 0.0);
    // Outline.
    col =
        mix(col, vec3(.0, 0.5, 0.8), 1.0 - smoothstep(0.0, 0.02, abs(fujiVal)));
    // Haze.
    col = mix(col, HAZE_COLOR, pow(haze * .75, 4.0));
  }
  if (mask) {
    if (fujiVal > 0.0) {
      col += vec3(.0, .5, 1.) * pow(1.0 - clamp(fujiVal, 0.0, 1.0), 3.0) * .4;
    }
  }
#endif

  return col;
}

// Ref: https://www.shadertoy.com/view/DtXXRM
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  // Mouse input.
  vec2 mouseCoords = iMouse.xy / iResolution.xy;
  vec2 ndcMouse = -1.0 + 2.0 * vec2(mouseCoords.x, 1.0 - mouseCoords.y);
  vec2 mouseOffset = vec2(0.0);
  mouseOffset = ndcMouse * vec2(1., 0.5);

  vec3 result;

  for (float x = 0.0; x < 1.0; x += 1.0 / float(AA)) {
    for (float y = 0.0; y < 1.0; y += 1.0 / float(AA)) {
      // Calculate pixel-level sample offset for AA.
      vec2 sampleOffset = vec2(x, y) - vec2(0.5 / float(AA));
      vec2 sampleCoord = fragCoord + sampleOffset;
      vec2 coord = sampleCoord / iResolution.xy;
      vec2 ndc = -1.0 + 2.0 * coord + mouseOffset;
      // Fix aspect ratio.
      ndc.x *= iResolution.x / iResolution.y;

      // Introduce some noise to time.
      float dt = fract(hash21(sampleCoord) + iTime);
      // TODO: Why is this clamped?
      noisyTime = mod(iTime + dt * 0.003, 4000.0);

      // Calculate ray origin and direction.
      vec3 ro = vec3(0.0 + mouseOffset.x * 0.5, 1.0 + mouseOffset.y * 0.2, (-20000. + noisyTime * SPEED));
      vec3 rd = normalize(vec3(ndc, 4.0 / 3.0));

      vec2 i = intersectTerrain(ro, rd);
      float d = i.x;

      // Create light direction.
      vec3 ld = normalize(vec3(0, .125 + .05 * sin(.1 * noisyTime * 2.), 1));

      vec3 fog = d > 0. ? exp2(-d * vec3(.08, .1, .34)) : vec3(0.);
      vec3 sky = gsky(rd, ld, d < 0.0);

      vec3 p = ro + rd * d;
      vec3 n = normalize(gradient(p));

      float diffuse = dot(n, ld) + .1 * n.y;
      vec3 col = vec3(.1, .1, .18) * diffuse;

      // Calculate reflection.
      vec3 rfd = reflect(rd, n);
      vec3 rfcol = gsky(rfd, ld, true);

      col = mix(col, rfcol, .05 + .95 * pow(max(1. + dot(rd, n), 0.), 5.));

      col = mix(col, vec3(.01, .63, .6), smoothstep(.03, .0, i.y));
      col = mix(sky, col, fog);
      // Skip tone mapping and gamma for the old-school look.

      result += col;
    }
  }
  result /= float(AA * AA);
  fragColor = vec4(result, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
    `,s=new ce({uniforms:this.uniforms,vertexShader:e,fragmentShader:n,side:pt}),o=new Jo(100,100),i=new D(o,s);this.scene.add(i),this.camera.position.z=5,this.clock=new Ac,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.uniforms.iResolution.value.x=window.innerWidth,this.uniforms.iResolution.value.y=window.innerHeight,this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.targetMousePos=new t(window.innerWidth/2,window.innerHeight/2),window.addEventListener("mousemove",e=>{this.targetMousePos.x=e.clientX,this.targetMousePos.y=e.clientY})}enable(){if(this.rendererFailure)return;if(this.isRunning)return;this.isRunning=!0,this.isFading=!1,this.currentOpacity=1,this.renderer.domElement.style.opacity=this.currentOpacity.toString(),this.animate()}fadeIn(){if(this.rendererFailure)return;if(this.isRunning)return;this.isRunning=!0,this.isFading=!0,this.currentOpacity=0,this.targetOpacity=1,this.fadeOffset=.02,this.animate()}disable(){this.isRunning=!1,this.isFading=!1,this.currentOpacity=0,this.renderer.domElement.style.opacity=this.currentOpacity.toString()}fadeOut(){this.isFading=!0,this.currentOpacity=1,this.targetOpacity=0,this.fadeOffset=-.03}animate(){if(this.rendererFailure)return;if(!this.isRunning)return;requestAnimationFrame(()=>this.animate()),this.isFading&&(this.currentOpacity=Math.max(Math.min(this.currentOpacity+this.fadeOffset,1),0),this.currentOpacity===this.targetOpacity&&(this.isFading=!1,this.currentOpacity===0&&(this.isRunning=!1)),this.renderer.domElement.style.opacity=this.currentOpacity.toString()),this.uniforms.iTime.value+=this.clock.getDelta(),this.uniforms.iMouse.value.lerp(this.targetMousePos,.02),this.renderer.render(this.scene,this.camera)}};function Er(){const e=window.location.pathname;return e===""||e==="/"}function g0(e){const t=jQuery;let n;const s={debug:!0,scroll:!1,prefetch:!0,cacheLength:2,onStart:{duration:300,render:e=>{t("html, body").animate({scrollTop:0}),e.addClass("is-exiting"),n.restartCSSAnimations()}},onReady:{duration:0,render:(e,t)=>{e.removeClass("is-exiting"),e.html(t)}},onAfter:()=>{e&&(Er()?e.fadeIn():e.fadeOut()),typeof ga!="undefined"&&(ga("set","page",window.location.pathname),ga("send","pageview"))}};n=t("#main").smoothState(s).data("smoothState")}Ss=null,Ar.isWebGLAvailable()?(Ss=new kr,Er()&&Ss.enable()):console.warn("Browser does not support WebGL; defaulting to static background"),typeof jQuery!="undefined"&&g0(Ss)})()