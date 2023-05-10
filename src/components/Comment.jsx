import React, { useState } from "react";
import * as CSS from "../components/component/style";
import { writeComment, deleteComment } from "../axios/api";
import Button from "./component/Button";
import useInput from "./Hooks/useInput";

const Comment = (props) => {
  const [comment, onChangeCommentHandler] = useInput("");

  const handleWriteComment = () => {
    const commentData = {
      content: comment,
      username: "", // Replace with the actual user who wrote the comment
      nickname: props.sprintId,
    };
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(props.sprintId, commentId);
  };

  return (
    <>
      <CSS.CommentSection>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            value={comment}
            onChange={onChangeCommentHandler}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentButtonBox>
            <Button size="80" type="positive" onClick={handleWriteComment}>
              등록
            </Button>
          </CSS.CommentButtonBox>
        </CSS.CommentForm>

        {props.commentList.map((item) => {
          return (
            <CSS.CommentBox key={item.id}>
              <CSS.CommentTitle>
                {item.nickname} | {item.createdAt}
              </CSS.CommentTitle>

              <CSS.CommentContent>{item.comment}</CSS.CommentContent>

              <Button
                size="80"
                type="negative"
                onClick={() => handleDeleteComment(item.id)}
              >
                삭제
              </Button>
            </CSS.CommentBox>
          );
        })}
      </CSS.CommentSection>
    </>
  );
};

export default Comment;
