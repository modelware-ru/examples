import React, {Component} from 'react';

import Editor from 'react-editor-md';
import TestMd from './asset/editor.md/test.md';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.editor = null;

        this.save = this.save.bind(this);
    }

    save() {
        let md = this.editor.getMarkdown();
        console.log(md);
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.save}>SAVE</button>*/}

                <Editor config={
                    {
                        markdown: TestMd,// testEditor.getMarkdown().replace(/`/g, '\\`')
                        path   : "asset/editor.md/lib/",
                        onload: (editor, func) => {

                            this.editor = editor;

                            editor.hideToolbar();
                            editor.lang = 'en';
                            editor.recreate();
                        }
                    }
                }/>

{/*                <Editor.EditorShow config={*/}
{/*                    {*/}
{/*                        markdown: // testEditor.getMarkdown().replace(/`/g, '\\`')*/}
{/*                            `## Test*/}
{/*\`\`\`*/}
{/*console.log('what can i do for you')*/}
{/*\`\`\`*/}

{/*# 123123`,*/}
{/*                    }*/}
{/*                }/>*/}
            </div>
        );
    }

}