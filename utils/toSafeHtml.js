import sanitize from "sanitize-html";

function toSafeHtml(input) {
  const sanitized = sanitize(input, {
    allowedTags: sanitize.defaults.allowedTags.concat("img"),
  });
  return sanitized;
}

export { toSafeHtml };
