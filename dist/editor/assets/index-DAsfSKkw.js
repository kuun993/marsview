import{p as L,j as e,aS as N,aT as K,m as $,ax as V,ay as A,aU as O,aV as H,M as P,aW as B}from"./index-BUDzuEi4.js";import{S as D}from"./SearchForm-ttP1WHOS.js";const z=window.React.useImperativeHandle,v=window.React.useState,q=window.antd.Modal,g=window.antd.Form,T=window.antd.Input;function U(h){const[R,p]=v(!1),[w,x]=v("create"),[I,o]=v(!1),[n]=g.useForm(),{id:m}=L();z(h.mRef,()=>({open:d}));const d=(a,r)=>{x(a),p(!0),o(!1),r&&n.setFieldsValue(r)},l=async()=>{if(await n.validateFields()&&m)try{o(!0);const{id:r,name:f,remark:j=""}=n.getFieldsValue();w==="create"?await N({name:f,remark:j,project_id:m}):await K({name:f,remark:j,id:r,project_id:m}),o(!1),$.success("操作成功"),c(),h.update()}catch{o(!1)}},c=()=>{n.resetFields(),p(!1)};return e.jsx(q,{title:w==="create"?"新增角色":"编辑角色",width:600,open:R,okText:"确定",cancelText:"取消",confirmLoading:I,onOk:l,onCancel:c,children:e.jsxs(g,{form:n,labelAlign:"right",labelCol:{span:4},children:[e.jsx(g.Item,{name:"id",hidden:!0,children:e.jsx(T,{})}),e.jsx(g.Item,{name:"name",label:"角色名称",rules:[{required:!0,message:"请输入角色名称"}],children:e.jsx(T,{placeholder:"请输入角色名称"})}),e.jsx(g.Item,{name:"remark",label:"备注",children:e.jsx(T.TextArea,{placeholder:"请输入备注"})})]})})}const W=window.antd.Modal,F=window.antd.Form,G=window.antd.Tree,J=window.React.useEffect,Q=window.React.useImperativeHandle,b=window.React.useState;function X(h){const[R,p]=b(!1),[w,x]=b([]),[I,o]=b([]),[n,m]=b(),[d,l]=b(),c=L().id;J(()=>{a()},[]);const a=async()=>{if(!c)return;const i=await V({project_id:parseInt(c)}),u=A(i.list);x(u||[])};Q(h.mRef,()=>({open:r}));const r=i=>{var u;p(!0),m(i),l({id:(n==null?void 0:n.id)||0,project_id:parseInt(c),checked:i.checked,half_checked:i.half_checked}),o(((u=i.checked)==null?void 0:u.split(",").map(k=>parseInt(k)))||[])},f=(i,u)=>{o(i);const k=[],t=[];u.checkedNodes.map(s=>{s.type===2||s.type===1&&!s.children?k.push(s.id):t.push(s.id)}),l({id:(n==null?void 0:n.id)||0,project_id:parseInt(c),checked:k.join(","),half_checked:t.concat(u.halfCheckedKeys).join(",")})},j=async()=>{d&&(await O(d),$.success("权限设置成功"),C(),h.update())},C=()=>{p(!1),l(void 0)};return e.jsx(W,{title:"设置权限",width:600,open:R,okText:"确定",cancelText:"取消",onOk:j,onCancel:C,children:e.jsxs(F,{labelAlign:"right",labelCol:{span:4},children:[e.jsx(F.Item,{label:"角色名称",children:n==null?void 0:n.name}),e.jsx(F.Item,{label:"权限",children:e.jsx(G,{checkable:!0,defaultExpandAll:!0,fieldNames:{title:"name",key:"id",children:"children"},onCheck:f,checkedKeys:I,treeData:w})})]})})}const Y=window.React.useEffect,M=window.React.useRef,_=window.React.useState,S=window.antd.Button,Z=window.antd.Table,E=window.antd.Form,ee=window.antd.Input,te=window.antd.Space;function ae(){const[h,R]=_([]),[p,w]=_(0),[x,I]=_(1),[o,n]=_(!1),[m]=E.useForm(),{id:d}=L(),l=M(),c=M();Y(()=>{a()},[]);const a=async(t=x)=>{if(!d)return;n(!0);const{name:s}=m.getFieldsValue(),y=await H({pageNum:t,pageSize:10,project_id:parseInt(d),name:s});n(!1),w((y==null?void 0:y.total)||0),R((y==null?void 0:y.list)||[])},r=t=>{I(t),a(t)},f=()=>{var t;(t=l.current)==null||t.open("create")},j=t=>{var s;(s=l.current)==null||s.open("edit",t)},C=t=>{d&&P.confirm({title:"确认",content:e.jsx("span",{children:"确认删除该角色吗？"}),async onOk(){$.success("删除成功"),await B({id:t,project_id:parseInt(d)}),a()}})},i=t=>{var s;(s=c.current)==null||s.open(t)},u=[{title:"角色名称",dataIndex:"name",key:"name"},{title:"备注",dataIndex:"remark",key:"remark"},{title:"创建人",dataIndex:"sso_name",key:"sso_name"},{title:"更新时间",dataIndex:"updated_at",key:"updated_at"},{title:"创建时间",dataIndex:"created_at",key:"created_at"},{title:"操作",key:"action",render(t,s){return e.jsxs(te,{children:[e.jsx(S,{type:"text",onClick:()=>j(s),children:"编辑"}),e.jsx(S,{type:"text",onClick:()=>i(s),children:"设置权限"}),e.jsx(S,{type:"text",onClick:()=>C(s.id),danger:!0,children:"删除"})]})}}],k={current:x,total:p,pageSize:10,showTotal:t=>`共 ${t} 条`,onChange:r};return e.jsxs("div",{className:"role-wrap",children:[e.jsx(D,{form:m,submit:a,reset:a,children:e.jsx(E.Item,{name:"name",label:"角色名称",children:e.jsx(ee,{placeholder:"请输入角色名称"})})}),e.jsxs("div",{className:"base-table",children:[e.jsxs("div",{className:"header-wrapper",children:[e.jsx("div",{className:"title",children:"角色列表"}),e.jsx("div",{className:"action",children:e.jsx(S,{type:"primary",onClick:f,children:"新增"})})]}),e.jsx(Z,{bordered:!0,rowKey:"id",loading:o,columns:u,dataSource:h,pagination:k})]}),e.jsx(U,{mRef:l,update:a}),e.jsx(X,{mRef:c,update:a})]})}export{ae as default};