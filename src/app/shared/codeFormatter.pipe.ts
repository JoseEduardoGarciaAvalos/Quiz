import { Pipe, PipeTransform } from "@angular/core";
const hljs = require("highlight.js");

@Pipe({
  name: "codeFormatter"
})
export class CodeFormatter implements PipeTransform {
  transform(value: string) {
    let regex = /\[CODE\].*?\[\/CODE\]/g;

    value.match(regex).forEach((code: string) => {
      let codeFormatter: string = hljs.highlightAuto(
        code.replace("[CODE]", "").replace("[/CODE]", "")
      ).value;
      value = value.replace(code, codeFormatter);
    });

    return value;
  }
}
