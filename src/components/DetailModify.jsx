import React from 'react'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { detailModify } from '../axios/api'
import * as CSS from '../components/component/style'
import Button from './component/Button'


const DetailModify = (props) => {
  const [state,setState] = useState({
    titleInput:props.data.title,
    contentInput:props.data.content
  })
  // API연동은 되었지만 값이 안내려와서 수정이 안됨.
  const mutation =useMutation(detailModify,{
    onSuccess: ()=>{
      // queryClient.invalidateQueries("getBoards")
      alert('작성 저장 성공')
    }
  })
  const modifyList = {
    id:1,
    title:state.titleInput,
    content:state.contentInput
  }
  const onChangeHandler = (e)=>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })}
  const onClickModifyHandler = () => {
    mutation.mutate(modifyList)
    props.setModify(false)
  }

  const onClickCancelHandler = () => {
    props.setModify(false)
  }



  return (
    <>
    <section>
      <CSS.Form onSubmit={(e)=>e.preventDefault()}>
      <CSS.EditorInput name='titleInput'
      value={state.titleInput} onChange={onChangeHandler}/>
      <CSS.EditorTextarea name='contentInput'
      value={state.contentInput} onChange={onChangeHandler}/>
      </CSS.Form>
      <CSS.DetailModifyButtonBox>
        <Button size='80' type={'positive'}
        onClick={onClickModifyHandler}>저장</Button>
        <Button size='80' type={'negative'}
        onClick={onClickCancelHandler}>취소</Button>
      </CSS.DetailModifyButtonBox>
    </section>
      </>
  )
}

export default DetailModify