import { useEffect, useRef } from 'react';
import * as THREE from 'three';
export default function ThreeReward({kind='gift'}) {
 const host=useRef(null);
 useEffect(()=>{
  const el=host.current; if(!el) return;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(35,1,.1,100); camera.position.set(0,0,6);
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.setSize(el.clientWidth,el.clientHeight); renderer.outputColorSpace=THREE.SRGBColorSpace; el.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xffffff,1.7)); const light=new THREE.DirectionalLight(0xffffff,2.5); light.position.set(3,4,5); scene.add(light);
  const group=new THREE.Group(); scene.add(group);
  const mat=(color,metalness=.35,roughness=.28)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
  const gold=mat('#f3bd58',.65,.22), blue=mat('#5b8cff',.5,.25), pale=mat('#dce7ff',.25,.3), dark=mat('#26334c');
  const cube=(w,h,d,m,x=0,y=0,z=0)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);group.add(o);return o};
  const sphere=(r,m,x,y,z)=>{const o=new THREE.Mesh(new THREE.SphereGeometry(r,32,24),m);o.position.set(x,y,z);group.add(o);return o};
  if(kind==='gift'){cube(1.55,1.05,1.05,gold);cube(.24,1.1,1.1,pale);cube(1.6,.2,1.1,blue,0,.55,0);sphere(.28,blue,-.25,.83,0);sphere(.28,blue,.25,.83,0);}
  else if(kind==='swap'){for(let i=0;i<2;i++){const tor=new THREE.Mesh(new THREE.TorusGeometry(.72,.16,16,80,Math.PI*1.55),i?gold:blue);tor.rotation.z=i?Math.PI:0;tor.position.y=i?-.25:.25;group.add(tor);} }
  else if(kind==='coins'){for(let i=0;i<4;i++){const c=new THREE.Mesh(new THREE.CylinderGeometry(.62,.62,.2,48),i%2?gold:blue);c.position.set(0,-.55+i*.34,0);group.add(c);}sphere(.22,pale,0,.05,.25);}
  else if(kind==='shield'){const shape=new THREE.Shape();shape.moveTo(0,1);shape.quadraticCurveTo(.65,.85,.65,.55);shape.lineTo(.52,-.35);shape.quadraticCurveTo(0,-1.05,0,-1.05);shape.quadraticCurveTo(-.52,-.35,-.65,.55);shape.quadraticCurveTo(-.65,.85,0,1);const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.18,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.08,bevelThickness:.08}),blue);group.add(mesh);const bar=cube(.14,.95,.15,gold,0,0,.3);bar.rotation.z=-.55;}
  else {const body=cube(1.35,1.65,.35,dark);body.position.y=-.05;cube(1.12,.12,.08,gold,0,.45,.23);cube(.55,.08,.08,blue,0,.15,.23);sphere(.12,gold,0,-.45,.25);}
  let frame=0, raf; const animate=()=>{raf=requestAnimationFrame(animate);frame+=.008;group.rotation.y=Math.sin(frame)*.22;group.position.y=Math.sin(frame*1.4)*.08;renderer.render(scene,camera);}; animate();
  const resize=()=>{const w=el.clientWidth,h=el.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}; const ro=new ResizeObserver(resize);ro.observe(el);
  return ()=>{cancelAnimationFrame(raf);ro.disconnect();renderer.dispose();el.removeChild(renderer.domElement);scene.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){if(Array.isArray(o.material))o.material.forEach(m=>m.dispose());else o.material.dispose();}});};
 },[kind]);
 return <div className="three-reward" ref={host} aria-label={`${kind} 3D illustration`} />;
}