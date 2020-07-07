import React from "react";
import { DragOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import _ from "lodash";
import * as Tools from "../../tools";
import { selectActiveUuid, setActiveUuid, removeBlockByUuid, editBlockByUuid } from "../../helper/redux";

const Editable = ({ block = {}, children }) => {
  block = _.cloneDeep(block);
  const dispatch = useDispatch();
  const activeUuid = useSelector(selectActiveUuid);
  const [visible, setVisible] = React.useState(false);
  const cls = classnames({
    editable: true,
    active: block.uuid === activeUuid,
    canDrop: ["Row", "Card"].includes(block.component),
  });
  const onOk = (values) => {
    const newBlock = { ...block, ...values };
    setVisible(false);
    dispatch(editBlockByUuid({ uuid: block.uuid, newBlock }));
  };
  // 每个组件必须有一个 Edit*** 的配套组件
  const EditCmpt = (props) => {
    const Cmpt = Tools[`${props.component}Edit`];
    return Cmpt ? <Cmpt {...props} /> : null;
  };
  return (
    <div
      className={cls}
      onClick={(evt) => {
        evt.stopPropagation();
        dispatch(setActiveUuid(block.uuid));
      }}
    >
      {children}
      <div className="editable__handle">
        <DragOutlined />
      </div>
      <div className="editable__actions">
        <EditOutlined onClick={() => setVisible(true)} />
        <DeleteOutlined
          className="text-danger"
          style={{ marginLeft: 10 }}
          onClick={() => dispatch(removeBlockByUuid(block.uuid))}
        />
      </div>
      <EditCmpt
        component={block.component}
        option={block}
        visible={visible}
        onOk={onOk}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default Editable;
