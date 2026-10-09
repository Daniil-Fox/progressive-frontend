import {combineSlices} from "@reduxjs/toolkit";

import {userSlice} from "entities/User/model/slice/userSlice";
import {rtkApi} from "shared/api/rtkApi";

export interface LazyLoadedSlices {}
export const rootReducer = combineSlices(userSlice, rtkApi).withLazyLoadedSlices<LazyLoadedSlices>();