import React from "react";
// 渲染内容list组件
export default props => {
  return (
    <ul>
      {props.list &&
        props.list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button
                onClick={() => {
                  props.removeitem(index);
                }}
              >
                删除
              </button>
            </li>
          );
        })}
    </ul>
  );
};
