const output = $("#output");
const genbut = $("#genbut");
const minv = $("#minv")
const maxv = $("#maxv")

function rand(min = 20, max = 100, type = 'i') {
  if (type == "i") {
    r = Math.round(Math.random() * (max - min)) + min
    return r
  }
  else {
    r = Math.random() * (max - min) + min
    return r
  }
}
function gen() {
  l = Number.parseInt(minv.val())
  h = Number.parseInt(maxv.val())
  type = $(".form input[type='radio']:checked").val();
  d = rand(l, h, type)
  console.log(d)
  output.val(d)
}
genbut.on("click", gen)
genbut.click()
