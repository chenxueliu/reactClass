import React from "react";
// 输入内容添加组件
export default props => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.changeinput} />
      <button onClick={props.additem}>添加</button>
    </div>
  );
};
