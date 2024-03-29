!(function (t) {
  var i = function (i, n) {
    (this.options = n),
      (this.card = t(i)),
      (this.button = t(i).children(".mc-btn-action")),
      (this.icon = t(i).children(".mc-btn-action").children("i")),
      (this.card_activator = n.card_activator),
      (this.timing = this.getTransitionTiming());
    var s = this;
    "click" == s.card_activator
      ? (this.icon.hasClass(this.options.icon_open) ||
          this.icon
            .attr("class", this.icon.attr("class"))
            .addClass(this.options.icon_open),
        this.button.on("click", function () {
          s.toggle();
        }))
      : this.button.hide(),
      "hover" == s.card_activator &&
        (this.card.on("mouseenter", function () {
          s.open();
        }),
        this.card.on("mouseleave", function () {
          s.close();
        }));
  };
  (i.defaults = {
    icon_close: "fa-arrow-left",
    icon_open: "fa-bars",
    icon_spin: "fa-spin-fast",
    card_activator: "click",
  }),
    (i.prototype.toggle = function () {
      return (
        this.icon.addClass(this.options.icon_spin),
        this.isOpen() ? this.close() : this.open()
      );
    }),
    (i.prototype.getTransitionTiming = function () {
      var i = 0;
      return (
        this.card.find("*").each(function () {
          n(t(this).css("transition-duration")) +
            n(t(this).css("transition-delay")) >
            i &&
            (i =
              n(t(this).css("transition-duration")) +
              n(t(this).css("transition-delay")));
        }),
        i
      );
    }),
    (i.prototype.close = function () {
      var t = this;
      this.card.trigger("hide.material-card"),
        this.card.removeClass("mc-active"),
        window.setTimeout(function () {
          t.icon
            .removeClass(t.options.icon_spin)
            .removeClass(t.options.icon_close)
            .addClass(t.options.icon_open),
            t.card.trigger("hidden.material-card");
        }, this.timing);
    }),
    (i.prototype.open = function () {
      var t = this;
      this.card.trigger("show.material-card"),
        this.card.addClass("mc-active"),
        window.setTimeout(function () {
          t.icon
            .removeClass(t.options.icon_spin)
            .removeClass(t.options.icon_open)
            .addClass(t.options.icon_close),
            t.card.trigger("shown.material-card");
        }, this.timing);
    }),
    (i.prototype.isOpen = function () {
      return this.card.hasClass("mc-active");
    });
  var n = function (t) {
      var i,
        n,
        s,
        o = t.match(/^([\d\.]+)(\w+)$/);
      if (o.length <= 1) return t;
      switch (((i = o[1]), (n = o[2]))) {
        case "ms":
          s = 1;
          break;
        case "s":
          s = 1e3;
      }
      return i * s;
    },
    s = function (n) {
      return this.each(function () {
        var s = t(this),
          o = s.data("material-card"),
          a = t.extend({}, i.defaults, "object" == typeof n && n);
        o || s.data("material-card", (o = new i(this, a))),
          "string" == typeof n && o[n]();
      });
    };
  t.fn.materialCard = s;
})(jQuery);
