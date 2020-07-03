import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { getTools, findAndRemove, findAndEdit } from "./util";

export const genCodeSlice = createSlice({
  name: "genCode",
  initialState: {
    schema: [],
    tools: getTools(),
    activeUuid: "", // 当前选择的控件UUID
  },
  reducers: {
    setSchema: (state, action) => {
      state.schema = action.payload;
    },
    setTools: (state, action) => {
      state.tools = action.payload;
    },
    setActiveUuid: (state, action) => {
      state.activeUuid = action.payload;
    },
    removeBlockByUuid: (state, action) => {
      state.schema = findAndRemove(state.schema, action.payload);
    },
    editBlockByUuid: (state, action) => {
      const { uuid, newBlock } = action.payload;
      state.schema = findAndEdit(state.schema, uuid, newBlock);
    },
    addTool: (state, action) => {
      const schema = _.cloneDeep(state.schema);
      const { tool, targetUuid } = action.payload;
      // 拖到画布上
      if (targetUuid.startsWith("Stage__")) {
        const newSchema = [...schema, tool];
        state.schema = newSchema;
      }
      // 拖到Col中
      if (targetUuid.startsWith("Col__")) {
        const newSchema = schema.map((block) => {
          if (block.component === "Row") {
            block.childes = block.childes.map((col) => {
              col.childes = col.childes || [];
              if (col.uuid === targetUuid) {
                col.childes.push(tool);
              }
              return col;
            });
          }
          return block;
        });
        state.schema = newSchema;
      }
    },
  },
});

export const { setSchema, setTools, setActiveUuid, removeBlockByUuid, editBlockByUuid, addTool } = genCodeSlice.actions;

export const selectSchema = (state) => state.genCode.schema;
export const selectTools = (state) => state.genCode.tools;
export const selectActiveUuid = (state) => state.genCode.activeUuid;

export default genCodeSlice.reducer;
