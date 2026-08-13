import {combineSlices} from "@reduxjs/toolkit";

import {counterSlice} from "entities/Counter/model/slice/counterSlice";
import {userSlice} from "entities/User/model/slice/userSlice";

export interface LazyLoadedSlices {}
export const rootReducer = combineSlices(counterSlice, userSlice).withLazyLoadedSlices<LazyLoadedSlices>();