import React from 'react'
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { useOutletContext } from "react-router-dom";

const EventDetails = () => {
  const data = useOutletContext()
  return (
    <>
    <FroalaEditorView model={data.decs}/>
    </>
  )
}

export default EventDetails