import { Pipe, PipeTransform } from "@angular/core";
const sanitizeHtml = require("sanitize-html");

@Pipe({
  name: "sanitizeHTML"
})
export class SanitizeHTML implements PipeTransform {
  transform(value: string) {
    return sanitizeHtml(value, {
      allowedTags: ["img", "br"],
      allowedAttributes: {
        img: ["src"]
      }
    });
  }
}
