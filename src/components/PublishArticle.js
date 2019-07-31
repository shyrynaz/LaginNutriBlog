import React, { Component } from "react";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail";
export default class PublishArticle extends Component {
  onSave = content => {
		const { blocks } = content;
		const text =  blocks.map(({type, text}) => {
			if(type === 'unstyled'){
				return text;
			}
			return null;
		})
    console.log("saving", text.join('\r\n'));
    sessionStorage.setItem("draftail:content", JSON.stringify(content));
  };
	render() {
		const initial = JSON.parse(sessionStorage.getItem("draftail:content"));
		return (
				<DraftailEditor
					rawContentState={initial || null}
					onSave = {this.onSave}
					blockTypes={[{ type: BLOCK_TYPE.HEADER_THREE }, { type: BLOCK_TYPE.UNORDERED_LIST_ITEM }]}
					inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
				/>
		);
	}
}
