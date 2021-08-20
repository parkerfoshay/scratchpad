export class Editor {
  constructor(parent) {
    this.update = [];
    this.parent = parent;
    this.editor = CodeMirror(parent, {
      lineNumbers: true,
      tabSize: 2,
    });
  }

  setText(text) {
      this.editor.doc.setValue(text);
  }

  onUpdate() {
    const text = this.editor.doc.getValue();
    console.log(text);
  }


}
