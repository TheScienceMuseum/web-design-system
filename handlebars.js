var Fs = require("fs");

exports.options = {
  partials: {
    foobar: "This is a handlebars partial!",
    fullwidth: "</div><div>",
    endfullwidth: '</div><div class="o-textstyles Prose">',
    "preview/header": Fs.readFileSync(
      "./fractal/components/_layout/header.hbs",
      "utf8"
    ),
    "preview/footer": Fs.readFileSync(
      "./fractal/components/_layout/footer.hbs",
      "utf8"
    )
  },
  /* other configuration options here */
  // helpers based on http://stackoverflow.com/a/31632215
  helpers: {
    uppercase(str) {
      return str.toUpperCase();
    },
    eq(v1, v2) {
      return v1 === v2;
    },
    ne(v1, v2) {
      return v1 !== v2;
    },
    lt(v1, v2) {
      return v1 < v2;
    },
    gt(v1, v2) {
      return v1 > v2;
    },
    lte(v1, v2) {
      return v1 <= v2;
    },
    gte(v1, v2) {
      return v1 >= v2;
    },
    and(v1, v2) {
      return v1 && v2;
    },
    or(v1, v2) {
      return v1 || v2;
    },
    concat() {
      let concatedString = "";
      for (let i = 0; i < arguments.length - 1; i++) {
        concatedString += arguments[i];
      }
      return concatedString;
    },
    join(arr, separator) {
      if (arr) {
        return arr.join(separator);
      }
      return "";
    },
    attr(arr) {
      if (arr) {
        return arr.reduce((attrString, currentAttr) => {
          return new Handlebars.SafeString(
            `${attrString} ${currentAttr.name}="${currentAttr.value}"`
          );
        }, "");
      }
      return "";
    },
    modifiers(modifiers, options) {
      if (modifiers) {
        const blockNameString =
          typeof options.hash.block !== "undefined"
            ? `${options.hash.block}--`
            : "";
        return modifiers.reduce((classString, modifier) => {
          classString += ` ${blockNameString}${modifier}`;
          return classString;
        }, "");
      }
      return "";
    },
    classes(classes) {
      if (classes) {
        return classes.reduce((classString, className) => {
          classString += ` ${className}`;
          return classString;
        }, "");
      }
      return "";
    },
    toHTML(plainText) {
      if (!plainText) {
        return;
      }

      let output = "";
      const lines = plainText.split(/\r\n.?\r\n|\n.?\r|\r.?\n|\r.?\r|\n.?\n/g);

      lines.forEach(element => {
        let line = element;
        if (line) {
          line = line.replace(/\r\n|\n\r|\r|\n/g, "<br>");
          output += `<p>${line}</p>`;
        }
      });

      return new Handlebars.SafeString(output);
    },
    log(someVar) {
      console.log(someVar);
    }
  }
};
