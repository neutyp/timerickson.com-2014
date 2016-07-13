
function() {
  function t() {
    this.defaultAttrs({
      numberOfConfetti: 350
    }),
    this.startAnimatingConfetti = function() {
      (function() {
        var t, e, n, i, r, s, o, a, c, u, l = .5;
        n = this.attr.numberOfConfetti, t = [
          [54, 169, 174],
          [192, 67, 85],
          [253, 206, 113],
          [242, 127, 109]
        ],
         i = 2 * Math.PI,
         r = document.getElementById("confetti"),
         o = r.getContext("2d"),
         window.w = 0,
         window.h = 0,
         u = function() {
          return window.w = r.width = window.innerWidth,
                 window.h = r.height = window.innerHeight
        },
        window.addEventListener("resize", u, !1),
        window.onload = function() {
          return setTimeout(u, 0)
        },
        c = function(t, e) {
          return (e - t) * Math.random() + t
        },
        drawConfetti = function(t, e, n, i) {
          return o.beginPath(),
                 o.rect(t, e, n, n),
                 o.fillStyle = i,
                 o.fill()
        },
        window.requestAnimationFrame = function() {
          return window.requestAnimationFrame ||
                 window.webkitRequestAnimationFrame ||
                 window.mozRequestAnimationFrame ||
                 window.oRequestAnimationFrame ||
                 window.msRequestAnimationFrame ||
                 function(t) {
                   return window.setTimeout(t, 1e3 / 60)
                 }
        }(),
         e = function() {
          function e() {
            this.style = t[~~c(0, 4)], this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2], this.r = ~~c(2, 6), this.r2 = 2 * this.r, this.replace()
          }
          return e.prototype.replace = function() {
            return this.opacity = 0, this.dop = .03 * c(1, 4), this.x = c(-this.r2, w - this.r2), this.y = c(-20, h - this.r2), this.xmax = w - this.r, this.ymax = h - this.r, this.vx = c(0, 2) + 8 * l - 5, this.vy = .7 * this.r + c(-1, 1)
          },
          e.prototype.draw = function() {
            var t;
            return this.x += this.vx,
                   this.y += this.vy,
                   this.opacity += this.dop,
                   this.opacity > 1 && (this.opacity = 1, this.dop *= -1),
                   (this.opacity < 0 || this.y > this.ymax) && this.replace(),
                   0 < (t = this.x) && t < this.xmax || (this.x = (this.x + this.xmax) % this.xmax),
                   drawConfetti(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
          }, e
        }(),
        s = function() {
          var t, i, r;
          for (
            r = [],
            a = t = 1,
            i = n;
            i >= 1 ? i >= t : t >= i;
            a = i >= 1 ? ++t : --t
          )
          r.push(new e);
          return r
        }(), window.step = function() {
          var t, e, n, i;
          for (
            requestAnimationFrame(step),
            o.clearRect(0, 0, w, h),
            i = [],
            e = 0,
            n = s.length;
            n > e; e++
          )
          t = s[e],
          i.push(t.draw());
          return i
        },
        step()
      }).call(this)
    },
    this.after("initialize", function() {
      this.startAnimatingConfetti()
    })
  }
  return t
}
