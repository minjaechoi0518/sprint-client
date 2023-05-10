import React, { useState } from "react";
import { deleteComment } from "../axios/api";
import * as CSS from "../components/component/style";

import { writeComment, deleteComment } from "../axios/api";

import Button from "./component/Button";
import axios from "axios";
import { useEffect } from "react";

function CommentList(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = async () => {
    if (newComment.trim() === "") {
      return;
    }
    await writeComment(props.sprintId, newComment);
    const updatedComments = [...props.commentList, newComment];
    setComments(updatedComments);
    setNewComment("");
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(props.sprintId, commentId);
    const updatedComments = props.commentList.filter(
      (item) => item._id !== commentId
    );
    setComments([...updatedComments, ...comments]);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/sprint/${props.sprintId}/comment`);
      setComments(response.data);
    }
    fetchData();
  }, [props.sprintId]);

  return (
    <>
      <CSS.CommentSection>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            type="text"
            value={newComment}
            onChange={handleNewCommentChange}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentButtonBox>
            <Button size="80" type="positive" onClick={handleNewCommentSubmit}>
              등록
            </Button>
          </CSS.CommentButtonBox>
        </CSS.CommentForm>

        {props.commentList.map((item) => {
          return (
            <CSS.CommentBox key={item.commentId}>
              <CSS.CommentTitle>{item.nickname}</CSS.CommentTitle>

              <CSS.CommentContent>{item.comment}</CSS.CommentContent>

              <Button
                size="80"
                type="negative"
                onClick={() => handleDeleteComment(item.commentId)}
              >
                삭제
              </Button>
            </CSS.CommentBox>
          );
        })}

        {comments.map((comment, index) => (
          <CSS.CommentBox key={index}>
            <CSS.CommentTitle>You</CSS.CommentTitle>
            <CSS.CommentContent>{comment}</CSS.CommentContent>
            <Button
              size="80"
              type="negative"
              onClick={() =>
                setComments(comments.filter((_, i) => i !== index))
              }
            >
              삭제
            </Button>
          </CSS.CommentBox>
        ))}
      </CSS.CommentSection>
    </>
  );
}

export default CommentList;
