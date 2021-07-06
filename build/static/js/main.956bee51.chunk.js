(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    17: function (e, t) {
      e.exports = {
        IS_USER: "IS_USER",
        NEW_USER: "NEW_USER",
        INIT_CHATS: "INIT_CHATS",
        LOGOUT: "LOGOUT",
        MESSAGE_SEND: "MESSAGE_SEND",
        TYPING: "TYPING",
        P_MESSAGE_SEND: "P_MESSAGE_SEND",
        P_TYPING: "P_TYPING",
        CHECK_CHANNEL: "CHECK_CHANNEL",
        CREATE_CHANNEL: "CREATE_CHANNEL",
      };
    },
    258: function (e, t, n) {
      e.exports = n(456);
    },
    263: function (e, t, n) {},
    289: function (e, t) {},
    456: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        s = n(59),
        c = n.n(s),
        i = (n(263), n(21)),
        l = n(22),
        o = n(24),
        u = n(23),
        m = n(25),
        h = n(71),
        p = n(222),
        d = n.n(p),
        g = n(17),
        E = n.n(g),
        C = n(473),
        f = n(223),
        v = n(469),
        y = n(72),
        b = n(470),
        S = n(52),
        k = n(457),
        O = n(466),
        j = n(465),
        N = n(464),
        T = n(468),
        U = n(224),
        A = n.n(U),
        _ =
          (n(296),
          (function (e) {
            function t() {
              var e, n;
              Object(i.a)(this, t);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                ((n = Object(o.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(s))
                )).state = {
                  modal: !1,
                  channelName: "",
                  channelDescription: "",
                  error: null,
                }),
                (n.displayChannels = function (e) {
                  return e.map(function (e) {
                    return r.a.createElement(
                      v.a.Item,
                      {
                        key: e.name,
                        onClick: function () {
                          return n.props.setActiveChannel(e.name);
                        },
                        active: n.props.activeChannel.name === e.name,
                      },
                      "# ",
                      e.name,
                      e.msgCount > 0 &&
                        r.a.createElement(
                          y.a,
                          { size: "mini", color: "red" },
                          " ",
                          e.msgCount,
                          " "
                        )
                    );
                  });
                }),
                (n.displayUsers = function (e) {
                  var t = n.props,
                    a = t.user,
                    s = t.setActivePChannel,
                    c = t.pChats,
                    i = t.activeChannel;
                  return (
                    delete e[a.nickname],
                    (e = Object.assign({ "You...": a }, e)),
                    Object.keys(e).map(function (e) {
                      var t = c.filter(function (t) {
                          return t.name === e;
                        }),
                        a = null;
                      return (
                        t[0] &&
                          t[0].name !== i.name &&
                          t[0].msgCount > 0 &&
                          (a = t[0].msgCount),
                        r.a.createElement(
                          v.a.Item,
                          {
                            key: e,
                            onClick:
                              "You..." === e
                                ? null
                                : function () {
                                    return s(e);
                                  },
                            active: n.props.activeChannel.name === e,
                          },
                          "# ",
                          e[0].toUpperCase() + e.slice(1),
                          r.a.createElement(A.a, {
                            style: { marginLeft: "10px" },
                            size: 4,
                            color: "grey",
                            distance: 3,
                            visible: !!t[0] && t[0].isTyping,
                          }),
                          a &&
                            r.a.createElement(
                              y.a,
                              { size: "mini", color: "red" },
                              " ",
                              a,
                              " "
                            )
                        )
                      );
                    })
                  );
                }),
                (n.openModal = function () {
                  return n.setState({ modal: !0 });
                }),
                (n.closeModal = function () {
                  return n.setState({
                    modal: !1,
                    channelName: "",
                    channelDescription: "",
                    error: null,
                  });
                }),
                (n.handleChange = function (e) {
                  return n.setState(
                    Object(f.a)({}, e.target.name, e.target.value)
                  );
                }),
                (n.isFormValid = function (e) {
                  var t = e.channelDescription,
                    a = e.channelName;
                  return t && a
                    ? (n.setState({ error: null }), !0)
                    : (n.setState({
                        error: "Both Name and Description are require ",
                      }),
                      !1);
                }),
                (n.handleSubmit = function () {
                  n.setState({ error: null });
                  var e = n.state,
                    t = e.channelDescription,
                    a = e.channelName;
                  n.isFormValid(n.state) &&
                    n.props.socket.emit(
                      E.a.CHECK_CHANNEL,
                      { channelName: a, channelDescription: t },
                      n.checkChannel
                    );
                }),
                (n.checkChannel = function (e) {
                  e
                    ? n.setState({
                        error: 'Channel "'.concat(
                          n.state.channelName,
                          '" name alredy take'
                        ),
                      })
                    : n.closeModal();
                }),
                n
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.user,
                      n = e.users,
                      a = e.chats,
                      s = e.logout,
                      c = this.state,
                      i = c.modal,
                      l = c.error;
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        v.a,
                        {
                          style: { background: "#a20000", paddingTop: "2em" },
                          vertical: !0,
                          inverted: !0,
                          fluid: !0,
                          stackable: !0,
                          size: "large",
                        },
                        r.a.createElement(
                          b.a,
                          { inverted: !0, as: "h3" },
                          r.a.createElement(S.a, { name: "chat" }),
                          r.a.createElement(b.a.Content, null, " Simple Chat "),
                          r.a.createElement(
                            b.a.Subheader,
                            null,
                            "Login as : ",
                            t.nickname[0].toUpperCase() + t.nickname.slice(1)
                          )
                        ),
                        r.a.createElement(
                          v.a.Menu,
                          null,
                          r.a.createElement(
                            v.a.Item,
                            { style: { paddingLeft: "0" } },
                            r.a.createElement(
                              "span",
                              { style: { fontSize: "1.2em" } },
                              r.a.createElement(S.a, { name: "bullhorn" }),
                              " Channel lists"
                            ),
                            r.a.createElement(S.a, {
                              name: "add",
                              onClick: this.openModal,
                            })
                          ),
                          a[0] && this.displayChannels(a)
                        ),
                        r.a.createElement("br", null),
                        r.a.createElement(
                          v.a.Menu,
                          null,
                          r.a.createElement(
                            v.a.Item,
                            { style: { paddingLeft: "0" } },
                            r.a.createElement(
                              "span",
                              { style: { fontSize: "1.2em" } },
                              r.a.createElement(S.a, { name: "address book" }),
                              " Online Users"
                            )
                          ),
                          n && a[0] && this.displayUsers(n)
                        ),
                        r.a.createElement("br", null),
                        r.a.createElement(
                          v.a.Menu,
                          null,
                          r.a.createElement(
                            v.a.Item,
                            { style: { paddingLeft: "0" } },
                            r.a.createElement(
                              k.a,
                              {
                                icon: !0,
                                inverted: !0,
                                labelPosition: "right",
                                onClick: s,
                              },
                              r.a.createElement(S.a, {
                                name: "sign-out alternate",
                              }),
                              "LogOut"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        O.a,
                        { open: i, size: "small" },
                        r.a.createElement(b.a, {
                          icon: "bullhorn",
                          content: "Add new Channel",
                        }),
                        r.a.createElement(
                          O.a.Content,
                          null,
                          r.a.createElement(
                            j.a,
                            null,
                            r.a.createElement(
                              j.a.Field,
                              null,
                              r.a.createElement(N.a, {
                                placeholder: "Channel Name",
                                name: "channelName",
                                onChange: this.handleChange,
                              })
                            ),
                            r.a.createElement(
                              j.a.Field,
                              null,
                              r.a.createElement(N.a, {
                                name: "channelDescription",
                                placeholder: "Channel Description",
                                onChange: this.handleChange,
                              })
                            )
                          ),
                          l &&
                            r.a.createElement(
                              T.a,
                              { error: !0 },
                              r.a.createElement("h4", null, "Error"),
                              this.state.error
                            )
                        ),
                        r.a.createElement(
                          O.a.Actions,
                          null,
                          r.a.createElement(
                            k.a,
                            {
                              color: "red",
                              inverted: !0,
                              onClick: this.closeModal,
                            },
                            r.a.createElement(S.a, { name: "remove" }),
                            " Cancel"
                          ),
                          r.a.createElement(
                            k.a,
                            {
                              color: "green",
                              inverted: !0,
                              onClick: this.handleSubmit,
                            },
                            r.a.createElement(S.a, { name: "checkmark" }),
                            " Add"
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(a.Component)),
        M = n(472),
        P = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(o.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.activeChannel;
                  return r.a.createElement(
                    M.a,
                    null,
                    r.a.createElement(
                      b.a,
                      { as: "h2" },
                      r.a.createElement(S.a, { name: "bullhorn" }),
                      r.a.createElement(
                        b.a.Content,
                        null,
                        e.name[0].toUpperCase() + e.name.slice(1)
                      ),
                      r.a.createElement(
                        b.a.Subheader,
                        null,
                        "Description : ",
                        r.a.createElement(
                          "span",
                          null,
                          e.description[0].toUpperCase() +
                            e.description.slice(1)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        I = n(467),
        D = n(247),
        w = n.n(D),
        x = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(o.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.scrollDown();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  this.scrollDown();
                },
              },
              {
                key: "scrollDown",
                value: function () {
                  var e = this.refs.contaniner;
                  e.scrollTop = e.scrollHeight;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.messages,
                    n = e.user,
                    a = e.typingUser;
                  return r.a.createElement(
                    M.a,
                    { style: { height: "calc( 100vh - 56px - 147px)" } },
                    r.a.createElement(
                      "div",
                      {
                        ref: "contaniner",
                        style: {
                          height: "calc( 100vh - 56px - 147px - 35px)",
                          overflowY: "auto",
                        },
                      },
                      r.a.createElement(
                        "div",
                        {
                          style: {
                            minHeight: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            padding: ".1em",
                            paddingRight: ".5em",
                          },
                        },
                        t.length > 0 &&
                          t.map(function (e) {
                            return r.a.createElement(
                              I.a,
                              {
                                key: e.id,
                                fluid: !0,
                                style: { marginTop: "0px" },
                              },
                              r.a.createElement(
                                I.a.Content,
                                {
                                  style: { padding: "3px 10px" },
                                  textAlign:
                                    e.sender === n.nickname ? "right" : "left",
                                },
                                r.a.createElement("h3", null, e.message),
                                e.sender[0].toUpperCase() + e.sender.slice(1),
                                " Send @ ",
                                w()(e.timef).fromNow()
                              )
                            );
                          }),
                        a &&
                          a.map(function (e) {
                            return r.a.createElement(
                              "div",
                              { key: e, className: "typing-user" },
                              "".concat(
                                e[0].toUpperCase() + e.slice(1),
                                " is typing . . ."
                              )
                            );
                          })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        G = (function (e) {
          function t() {
            var e, n;
            Object(i.a)(this, t);
            for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
              r[s] = arguments[s];
            return (
              ((n = Object(o.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { msg: "" }),
              (n.handleChange = function (e) {
                return n.setState({ msg: e.target.value });
              }),
              (n.handleSubmit = function () {
                n.props.sendMsg(n.state.msg), n.setState({ msg: "" });
              }),
              (n.handleOnFocused = function () {
                return n.props.sendTyping(!0);
              }),
              (n.handleOnBlur = function () {
                return n.props.sendTyping(!1);
              }),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.state.msg;
                  return r.a.createElement(
                    M.a,
                    null,
                    r.a.createElement(
                      j.a,
                      { onSubmit: e.length > 0 ? this.handleSubmit : null },
                      r.a.createElement(j.a.Input, {
                        fluid: !0,
                        name: "msg",
                        value: e,
                        placeholder: "Write your message",
                        onChange: this.handleChange,
                        onFocus: this.handleOnFocused,
                        onBlur: this.handleOnBlur,
                        icon: r.a.createElement(S.a, {
                          name: "send",
                          link: !0,
                          circular: !0,
                          inverted: !0,
                          onClick: this.handleSubmit,
                          disabled: e.length < 1,
                        }),
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        L = (function (e) {
          function t() {
            var e, n;
            Object(i.a)(this, t);
            for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
              r[s] = arguments[s];
            return (
              ((n = Object(o.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { chats: [], activeChannel: null }),
              (n.initChats = function (e) {
                return n.updateChats(e, !0);
              }),
              (n.updateChats = function (e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  a = n.state.chats,
                  r = t ? Object(h.a)(e) : [].concat(Object(h.a)(a), [e]);
                n.setState({
                  chats: r,
                  activeChannel: t ? e[0] : n.state.activeChannel,
                });
              }),
              (n.addTyping = function (e) {
                var t = e.channel,
                  a = e.isTyping,
                  r = e.sender,
                  s = n.props.user,
                  c = n.state.chats;
                r !== s.nickname &&
                  (c.map(function (e) {
                    return (
                      e.name === t &&
                        (a && !e.typingUser.includes(r)
                          ? e.typingUser.push(r)
                          : !a &&
                            e.typingUser.includes(r) &&
                            (e.typingUser = e.typingUser.filter(function (e) {
                              return e !== r;
                            }))),
                      null
                    );
                  }),
                  n.setState({ chats: c }));
              }),
              (n.addPTyping = function (e) {
                var t = e.channel,
                  a = e.isTyping;
                console.log(t, a);
                var r = n.props.pChats;
                r.map(function (e) {
                  return e.name === t && (e.isTyping = a), null;
                }),
                  n.setState({ pChats: r });
              }),
              (n.addMessage = function (e) {
                var t = e.channel,
                  a = e.message,
                  r = n.state,
                  s = r.activeChannel,
                  c = r.chats;
                c.map(function (e) {
                  return (
                    e.name === t &&
                      (e.messages.push(a), s.name !== t && e.msgCount++),
                    null
                  );
                }),
                  n.setState({ chats: c });
              }),
              (n.addPMessage = function (e) {
                var t = e.channel,
                  a = e.message,
                  r = n.state.activeChannel,
                  s = n.props.pChats;
                s.map(function (e) {
                  return (
                    e.name === t &&
                      (e.messages.push(a), r.name !== t && e.msgCount++),
                    null
                  );
                }),
                  n.setState({ pChats: s });
              }),
              (n.sendMsg = function (e) {
                var t = n.props,
                  a = t.socket,
                  r = t.users,
                  s = n.state.activeChannel;
                if (s.type) {
                  var c = r[s.name];
                  a.emit(E.a.P_MESSAGE_SEND, { receiver: c, msg: e });
                } else a.emit(E.a.MESSAGE_SEND, { channel: s.name, msg: e });
              }),
              (n.sendTyping = function (e) {
                var t = n.props,
                  a = t.socket,
                  r = t.users,
                  s = n.state.activeChannel;
                if (s.type) {
                  var c = r[s.name];
                  a.emit(E.a.P_TYPING, { receiver: c.socketId, isTyping: e });
                }
                a.emit(E.a.TYPING, { channel: s.name, isTyping: e });
              }),
              (n.setActiveChannel = function (e) {
                var t = n.state.chats.filter(function (t) {
                  return t.name === e;
                });
                (t[0].msgCount = 0), n.setState({ activeChannel: t[0] });
              }),
              (n.setActivePChannel = function (e) {
                var t = n.props.pChats.filter(function (t) {
                  return t.name === e;
                });
                (t[0].msgCount = 0), n.setState({ activeChannel: t[0] });
              }),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.socket;
                  e.emit(E.a.INIT_CHATS, this.initChats),
                    e.on(E.a.MESSAGE_SEND, this.addMessage),
                    e.on(E.a.TYPING, this.addTyping),
                    e.on(E.a.P_MESSAGE_SEND, this.addPMessage),
                    e.on(E.a.P_TYPING, this.addPTyping),
                    e.on(E.a.CREATE_CHANNEL, this.updateChats);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.user,
                    n = e.users,
                    a = e.pChats,
                    s = e.logout,
                    c = e.socket,
                    i = this.state,
                    l = i.activeChannel,
                    o = i.chats;
                  return r.a.createElement(
                    C.a,
                    { style: { height: "100vh", margin: "0px" } },
                    r.a.createElement(
                      C.a.Column,
                      {
                        computer: 4,
                        tablet: 4,
                        mobile: 6,
                        style: { background: "#a20000", height: "100%" },
                      },
                      r.a.createElement(_, {
                        user: t,
                        users: n,
                        chats: o,
                        socket: c,
                        activeChannel: l,
                        logout: s,
                        setActivePChannel: this.setActivePChannel,
                        setActiveChannel: this.setActiveChannel,
                        pChats: a,
                      })
                    ),
                    r.a.createElement(
                      C.a.Column,
                      {
                        computer: 12,
                        tablet: 12,
                        mobile: 10,
                        style: { background: "#eee", height: "100%" },
                      },
                      l &&
                        r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(P, { activeChannel: l }),
                          r.a.createElement(x, {
                            messages: l.messages,
                            user: t,
                            typingUser: l.typingUser,
                          }),
                          r.a.createElement(G, {
                            sendMsg: this.sendMsg,
                            sendTyping: this.sendTyping,
                          })
                        )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        H = (function (e) {
          function t() {
            var e, n;
            Object(i.a)(this, t);
            for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
              r[s] = arguments[s];
            return (
              ((n = Object(o.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { nickname: "", error: "" }),
              (n.isvalid = function (e) {
                return e.nickname;
              }),
              (n.setUser = function (e) {
                var t = e.user;
                e.isUser
                  ? n.setState({ error: "This nickname already taken" })
                  : (n.setState({ error: "" }), n.props.setUser(t));
              }),
              (n.handleChange = function (e) {
                n.setState({ nickname: e.target.value });
              }),
              (n.handleSubmit = function () {
                var e = n.props.socket,
                  t = n.state.nickname;
                n.isvalid(n.state)
                  ? e.emit(E.a.IS_USER, t, n.setUser)
                  : n.setState({ error: "Please input your nickname" });
              }),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    C.a,
                    {
                      style: { height: "100vh", padding: "0px", margin: "0px" },
                      textAlign: "center",
                      verticalAlign: "middle",
                    },
                    r.a.createElement(
                      C.a.Column,
                      { computer: 6, tablet: 8, mobile: 14 },
                      r.a.createElement(
                        b.a,
                        {
                          as: "h2",
                          icon: !0,
                          textAlign: "center",
                          color: "blue",
                        },
                        r.a.createElement(S.a, { name: "discussions" }),
                        "Simple Chats."
                      ),
                      r.a.createElement(
                        j.a,
                        { size: "small", onSubmit: this.handleSubmit },
                        r.a.createElement(j.a.Input, {
                          name: "nickname",
                          type: "text",
                          placeholder: "Your nickname !",
                          onChange: this.handleChange,
                          autoFocus: !0,
                          icon: r.a.createElement(S.a, {
                            name: "add user",
                            link: !0,
                            circular: !0,
                            inverted: !0,
                            onClick: this.handleSubmit,
                          }),
                        }),
                        this.state.error &&
                          r.a.createElement(
                            T.a,
                            { negative: !0 },
                            this.state.error
                          )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        Y = "/",
        R = (function (e) {
          function t() {
            var e, n;
            Object(i.a)(this, t);
            for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
              r[s] = arguments[s];
            return (
              ((n = Object(o.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { socket: null, user: null, users: {}, pChats: [] }),
              (n.initSocket = function () {
                var e = d()(Y);
                n.setState({ socket: e }),
                  e.on("connect", function () {
                    return console.log("Connected");
                  }),
                  e.on(E.a.LOGOUT, n.setUsers(!1)),
                  e.on(E.a.NEW_USER, n.setUsers(!0));
              }),
              (n.setUser = function (e) {
                var t = n.state.socket;
                n.setState({ user: e }), t.emit(E.a.NEW_USER, e);
              }),
              (n.setUsers = function (e) {
                return function (t) {
                  var a = t.newUsers,
                    r = t.outUser,
                    s = n.state,
                    c = s.user,
                    i = s.pChats;
                  if (e) {
                    var l = Object(h.a)(i),
                      o = i.map(function (e) {
                        return e.name;
                      });
                    c &&
                      Object.keys(a).map(function (e) {
                        return (
                          e === c.nickname ||
                            o.includes(e) ||
                            l.push({
                              name: e,
                              description: "direct message",
                              messages: [],
                              isTyping: !1,
                              msgCount: 0,
                              type: "Private",
                            }),
                          null
                        );
                      }),
                      n.setState({ users: a, pChats: l });
                  } else {
                    var u = i.filter(function (e) {
                      return e.name !== r;
                    });
                    n.setState({ users: a, pChats: u });
                  }
                };
              }),
              (n.logout = function () {
                n.state.socket.emit(E.a.LOGOUT), n.setState({ user: null });
              }),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.initSocket();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.user,
                    n = e.users,
                    a = e.pChats,
                    s = e.socket;
                  return t
                    ? r.a.createElement(L, {
                        user: t,
                        users: n,
                        pChats: a,
                        socket: s,
                        logout: this.logout,
                      })
                    : r.a.createElement(H, {
                        socket: s,
                        setUser: this.setUser,
                      });
                },
              },
            ]),
            t
          );
        })(a.Component),
        F = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(o.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(R, null);
                },
              },
            ]),
            t
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(r.a.createElement(F, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[258, 1, 2]],
]);
//# sourceMappingURL=main.956bee51.chunk.js.map
