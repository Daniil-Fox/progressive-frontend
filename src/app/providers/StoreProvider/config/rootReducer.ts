import {combineSlices} from "@reduxjs/toolkit";

import {counterSlice} from "entities/Counter/model/slice/counterSlice";
import {userSlice} from "entities/User/model/slice/userSlice";
import {rtkApi} from "shared/api/rtkApi";

export interface LazyLoadedSlices {}
export const rootReducer = combineSlices(counterSlice, userSlice, rtkApi).withLazyLoadedSlices<LazyLoadedSlices>();