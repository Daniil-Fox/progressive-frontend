import {Comment} from "entities/Comment";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticleDetailsCommentSchema extends EntityState<Comment, string>{
    isLoading?: boolean;
    error?: string;
}