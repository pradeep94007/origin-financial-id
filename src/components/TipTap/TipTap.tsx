"use client";

import { Color } from '@tiptap/extension-color';
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from '@tiptap/extension-text-style';
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "../ui/button";
import MenuBar from "./Menubar";
import "./TipTap.css";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle, 
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color.configure({
        types: ['textStyle'],
      })
    ],
    injectCSS: true,
    content:
      "<p>Hello World! 🌎️</p><h2>This is Heading...</h2><p>This is some text and this should <strong>bold</strong> <em>italic</em> and <u>underline.</u></p><ul><li><p>This is Unordered List</p></li><li><p>This is also</p></li></ul><ol><li><p>This is Ordered List</p></li><li><p>This is alos</p></li></ol><p><s>This text is removed.</s></p><blockquote><p>This is blockquote..</p></blockquote>",
  });

  function handlePublish(){
    const html = editor?.getHTML();
    alert("Blog Published..!")
  }

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <Button className='my-5'>Publish</Button> 
    </>
  );
};

export default Tiptap;
