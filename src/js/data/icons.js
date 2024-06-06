const icons = ((ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);

  return keys.reduce((o, k, i) => {
    k = k.replace("./", "").replace(".svg", "");
    o[k] = values[i].replace("static/media/src", "");
    return o;
  }, {});
})(require.context("../../assets/icons", true, /.*/));
export default icons;
