import React, { useState } from "react";
import * as CSS from "../components/component/style";
import { deleteComment, writeComment } from "../axios/api";
import axios from "axios";
import { useEffect } from "react";
import Button from "./component/Button";
import { useMutation } from "react-query";
import useInput from "./Hooks/useInput";

function CommentList(props) {
console.log(`props:`,props)
  const [content, handleContentChange] = useInput('')
  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const mutation = useMutation(writeComment,{
    onSuccess: (data) =>{
      alert('댓글 저장 성공')
    },
    onError:(error)=>{
      alert('댓글 저장 실패')
    }
})
  const newPost = {
    sprintId:props.data.sprintId,
    username:'왜쓰는지 모르겠는데요..?',
    nickname:'이것도 왜 쓰는지 모르겠습니다..!!',
    content,
  }

  const handleNewCommentSubmit = async () => {
    // if (newComment.trim() === "") {
    //   return;
    // }
    // await writeComment(props.sprintId, newComment);
    // const updatedComments = [...props.commentList, newComment];
    // setComments(updatedComments);
    // setNewComment("");
    mutation.mutate(newPost)
  };

  const handleDeleteComment = async (commentId) => {
    // await deleteComment(props.sprintId, commentId);
    // const updatedComments = props.commentList.filter(
    //   (item) => item._id !== commentId
    // );
    // setComments([...updatedComments, ...comments]);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`/api/sprint/${props.sprintId}/comment`);
  //     setComments(response.data);
  //   }
  //   fetchData();
  // }, [props.sprintId]);

  return (
    <>
      <CSS.CommentSection>
        <CSS.commentListBox>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            type="text"
            value={content}
            onChange={handleContentChange}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentButtonBox>
            <Button size="80" type="positive" onClick={handleNewCommentSubmit}>
              등록
            </Button>
          </CSS.CommentButtonBox>
        </CSS.CommentForm>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
            <CSS.CommentBox >
              <CSS.CommentTitle>제목</CSS.CommentTitle>

              <CSS.CommentContent>내용</CSS.CommentContent>
              <CSS.CommentButtonBox>

              <Button
                size="80"
                type="negative"
              >
              삭제
              </Button>
          </CSS.CommentButtonBox>

            </CSS.CommentBox>
            </CSS.CommentForm>
            </CSS.commentListBox>

      </CSS.CommentSection>
    </>
  );
}

export default CommentList;
