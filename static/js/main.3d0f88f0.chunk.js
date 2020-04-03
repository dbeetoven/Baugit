(this.webpackJsonpbaugit = this.webpackJsonpbaugit || []).push([
  [1],
  {
    35: function (e, a, t) {
      e.exports = t(55);
    },
    52: function (e, a, t) {},
    53: function (e, a, t) {},
    54: function (e, a, t) {},
    55: function (e, a, t) {
      'use strict';
      t.r(a);
      var l = t(0),
        r = t.n(l),
        c = (t(37), t(31)),
        n = t.n(c),
        s = t(5),
        m = t(9),
        o = function () {
          var e = Object(m.j)();
          return r.a.createElement(
            'nav',
            {
              className: 'navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow',
            },
            r.a.createElement(
              'button',
              {
                type: 'button',
                id: 'sidebarToggleTop',
                className: 'btn btn-link d-md-none rounded-circle mr-3',
              },
              r.a.createElement('i', { className: 'fa fa-bars' }),
            ),
            r.a.createElement(
              'ul',
              { className: 'navbar-nav ml-auto' },
              r.a.createElement(
                'li',
                { className: 'nav-item dropdown no-arrow' },
                r.a.createElement(
                  s.b,
                  {
                    className: 'nav-link dropdown-toggle',
                    to: '#',
                    id: 'userDropdown',
                    role: 'button',
                    'data-toggle': 'dropdown',
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false',
                  },
                  r.a.createElement(
                    'span',
                    { className: 'mr-2 d-none d-lg-inline text-gray-600 small' },
                    e.email,
                  ),
                  r.a.createElement('img', {
                    alt: 'Avatar-profile',
                    className: 'img-profile rounded-circle',
                    src: 'https://source.unsplash.com/QAB-WJcbgJk/60x60',
                  }),
                ),
                r.a.createElement(
                  'div',
                  {
                    className: 'dropdown-menu dropdown-menu-right shadow animated--grow-in',
                    'aria-labelledby': 'userDropdown',
                  },
                  r.a.createElement(
                    s.b,
                    { className: 'dropdown-item', to: '/user-profile' },
                    r.a.createElement('i', {
                      className: 'fas fa-user fa-sm fa-fw mr-2 text-gray-400',
                    }),
                    'Perfil',
                  ),
                  r.a.createElement(
                    s.b,
                    { className: 'dropdown-item', to: '#' },
                    r.a.createElement('i', {
                      className: 'fas fa-cogs fa-sm fa-fw mr-2 text-gray-400',
                    }),
                    'Parametros',
                  ),
                  r.a.createElement(
                    s.b,
                    { className: 'dropdown-item', to: '#' },
                    r.a.createElement('i', {
                      className: 'fas fa-list fa-sm fa-fw mr-2 text-gray-400',
                    }),
                    'Actividades',
                  ),
                  r.a.createElement('div', { className: 'dropdown-divider' }),
                  r.a.createElement(
                    s.b,
                    {
                      className: 'dropdown-item',
                      to: '#',
                      'data-toggle': 'modal',
                      'data-target': '#logoutModal',
                    },
                    r.a.createElement('i', {
                      className: 'fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400',
                    }),
                    'Cerrar Sesion',
                  ),
                ),
              ),
            ),
          );
        },
        i = function (e) {
          return r.a.createElement(
            'ul',
            {
              className: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion',
              id: 'accordionSidebar',
            },
            r.a.createElement(
              s.b,
              {
                className: 'sidebar-brand d-flex align-items-center justify-content-center',
                to: '/',
              },
              r.a.createElement(
                'div',
                { className: 'sidebar-brand-icon rotate-n-15' },
                r.a.createElement('i', { className: 'fas fa-laugh-wink' }),
              ),
              r.a.createElement(
                'div',
                { className: 'sidebar-brand-text mx-3' },
                'BaugIT ',
                r.a.createElement('sup', null, '*'),
              ),
            ),
            r.a.createElement('hr', { className: 'sidebar-divider my-0' }),
            r.a.createElement(
              'li',
              { className: 'nav-item active' },
              r.a.createElement(
                'a',
                { className: 'nav-link', href: 'index.html' },
                r.a.createElement('i', { className: 'fas fa-fw fa-tachometer-alt' }),
                r.a.createElement('span', null, 'Dashboard'),
              ),
            ),
            r.a.createElement('hr', { className: 'sidebar-divider' }),
            r.a.createElement('div', { className: 'sidebar-heading' }, 'Interface'),
            r.a.createElement(
              'li',
              { className: 'nav-item' },
              r.a.createElement(
                s.b,
                {
                  className: 'nav-link collapsed',
                  to: '#',
                  'data-toggle': 'collapse',
                  'data-target': '#collapseTwo',
                  'aria-expanded': 'true',
                  'aria-controls': 'collapseTwo',
                },
                r.a.createElement('i', { className: 'fas fa-fw fa-cog' }),
                r.a.createElement('span', null, 'Components'),
              ),
              r.a.createElement(
                'div',
                {
                  id: 'collapseTwo',
                  className: 'collapse',
                  'aria-labelledby': 'headingTwo',
                  'data-parent': '#accordionSidebar',
                },
                r.a.createElement(
                  'div',
                  { className: 'bg-white py-2 collapse-inner rounded' },
                  r.a.createElement('h6', { className: 'collapse-header' }, 'Custom Components:'),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'buttons.html' },
                    'Buttons',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'cards.html' },
                    'Cards',
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'li',
              { className: 'nav-item' },
              r.a.createElement(
                s.b,
                {
                  className: 'nav-link collapsed',
                  to: '#',
                  'data-toggle': 'collapse',
                  'data-target': '#collapseUtilities',
                  'aria-expanded': 'true',
                  'aria-controls': 'collapseUtilities',
                },
                r.a.createElement('i', { className: 'fas fa-fw fa-wrench' }),
                r.a.createElement('span', null, 'Utilities'),
              ),
              r.a.createElement(
                'div',
                {
                  id: 'collapseUtilities',
                  className: 'collapse',
                  'aria-labelledby': 'headingUtilities',
                  'data-parent': '#accordionSidebar',
                },
                r.a.createElement(
                  'div',
                  { className: 'bg-white py-2 collapse-inner rounded' },
                  r.a.createElement('h6', { className: 'collapse-header' }, 'Custom Utilities:'),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'utilities-color.html' },
                    'Colors',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'utilities-border.html' },
                    'Borders',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'utilities-animation.html' },
                    'Animations',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'utilities-other.html' },
                    'Other',
                  ),
                ),
              ),
            ),
            r.a.createElement('hr', { className: 'sidebar-divider' }),
            r.a.createElement('div', { className: 'sidebar-heading' }, 'Addons'),
            r.a.createElement(
              'li',
              { className: 'nav-item' },
              r.a.createElement(
                'a',
                {
                  className: 'nav-link collapsed',
                  href: '#',
                  'data-toggle': 'collapse',
                  'data-target': '#collapsePages',
                  'aria-expanded': 'true',
                  'aria-controls': 'collapsePages',
                },
                r.a.createElement('i', { className: 'fas fa-fw fa-folder' }),
                r.a.createElement('span', null, 'Pages'),
              ),
              r.a.createElement(
                'div',
                {
                  id: 'collapsePages',
                  className: 'collapse',
                  'aria-labelledby': 'headingPages',
                  'data-parent': '#accordionSidebar',
                },
                r.a.createElement(
                  'div',
                  { className: 'bg-white py-2 collapse-inner rounded' },
                  r.a.createElement('h6', { className: 'collapse-header' }, 'Login Screens:'),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'login.html' },
                    'Login',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'register.html' },
                    'Register',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'forgot-password.html' },
                    'Forgot Password',
                  ),
                  r.a.createElement('div', { className: 'collapse-divider' }),
                  r.a.createElement('h6', { className: 'collapse-header' }, 'Other Pages:'),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: '404.html' },
                    '404 Page',
                  ),
                  r.a.createElement(
                    'a',
                    { className: 'collapse-item', href: 'blank.html' },
                    'Blank Page',
                  ),
                ),
              ),
            ),
          );
        },
        d = function (e) {
          var a = e.children;
          return r.a.createElement(
            'div',
            { id: 'wrapper' },
            r.a.createElement(i, null),
            r.a.createElement(
              'div',
              { id: 'content-wrapper', className: 'd-flex flex-column' },
              r.a.createElement(
                'div',
                { id: 'content' },
                r.a.createElement(o, null),
                r.a.createElement('div', { className: 'container-fluid' }, a),
              ),
            ),
          );
        },
        u = {
          HOME: '/',
          LOGIN: '/login',
          SIGNUP: '/register',
          PROFILE: '/user-profile',
          ENTERPRISE: '/empresa',
          CONTACT: '/contacto',
          FORGOT_PASSWORD: '/olvido-password',
          JOBS_HIRING: '/busquedas',
          CHALLENGE: '/challenge',
          INTERVIEW: '/entrevista',
        },
        p = function () {
          return r.a.createElement(
            'div',
            { className: '' },
            r.a.createElement(
              'div',
              { className: 'container' },
              r.a.createElement(
                'div',
                { className: 'row justify-content-center' },
                r.a.createElement(
                  'div',
                  { className: 'col-xl-10 col-lg-12 col-md-9' },
                  r.a.createElement(
                    'div',
                    { className: 'card o-hidden border-0 shadow-lg my-5' },
                    r.a.createElement(
                      'div',
                      { className: 'card-body p-0' },
                      r.a.createElement(
                        'div',
                        { className: 'row' },
                        r.a.createElement('div', {
                          className: 'col-lg-6 d-none d-lg-block bg-password-image',
                        }),
                        r.a.createElement(
                          'div',
                          { className: 'col-lg-6' },
                          r.a.createElement(
                            'div',
                            { className: 'p-5' },
                            r.a.createElement(
                              'div',
                              { className: 'text-center' },
                              r.a.createElement(
                                'h1',
                                { className: 'h4 text-gray-900 mb-2' },
                                'Olvido Contrase\xf1a?',
                              ),
                              r.a.createElement(
                                'p',
                                { className: 'mb-4' },
                                "We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!",
                              ),
                            ),
                            r.a.createElement(
                              'form',
                              { className: 'user' },
                              r.a.createElement(
                                'div',
                                { className: 'form-group' },
                                r.a.createElement('input', {
                                  type: 'email',
                                  className: 'form-control form-control-user',
                                  id: 'exampleInputEmail',
                                  'aria-describedby': 'emailHelp',
                                  placeholder: 'Correo',
                                }),
                              ),
                              r.a.createElement(
                                'a',
                                {
                                  href: 'login.html',
                                  className: 'btn btn-primary btn-user btn-block',
                                },
                                'Resetear Password',
                              ),
                            ),
                            r.a.createElement('hr', null),
                            r.a.createElement(
                              'div',
                              { className: 'text-center' },
                              r.a.createElement(
                                'a',
                                { className: 'small', href: 'register.html' },
                                'Creae Cuenta!',
                              ),
                            ),
                            r.a.createElement(
                              'div',
                              { className: 'text-center' },
                              r.a.createElement(
                                'a',
                                { className: 'small', href: 'login.html' },
                                'Already have an account? Login!',
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        E = t(18),
        N = t(19),
        f = t(20),
        b = t(21),
        v = (function (e) {
          Object(b.a)(t, e);
          var a = Object(f.a)(t);
          function t() {
            return Object(E.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(N.a)(t, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    'div',
                    { className: 'page' },
                    r.a.createElement(
                      'div',
                      { className: 'row' },
                      r.a.createElement('div', { className: 'col-md-2' }),
                      r.a.createElement(
                        'div',
                        { className: 'col-md-9 main' },
                        r.a.createElement(
                          'div',
                          { className: 'row' },
                          r.a.createElement('div', { className: 'col-8 main' }),
                          r.a.createElement(
                            'div',
                            { className: 'col-4' },
                            r.a.createElement('h4', null, 'Detaille'),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(l.Component),
        g = t(17),
        h = t.n(g),
        y = t(26),
        w = t(3),
        x =
          (t(47),
          function () {
            var e = Object(m.h)(),
              a = Object(l.useState)(''),
              t = Object(w.a)(a, 2),
              c = t[0],
              n = t[1],
              s = Object(l.useState)(''),
              o = Object(w.a)(s, 2),
              i = o[0],
              d = o[1],
              u = c.length > 0 && c.includes('@') && i.length >= 6,
              p = (function () {
                var a = Object(y.a)(
                  h.a.mark(function a(t) {
                    var l;
                    return h.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (a.next = 3),
                              e.auth().signInWithEmailAndPassword(c, i)
                            );
                          case 3:
                            (l = a.sent), console.log({ userLoggedIn: l });
                          case 5:
                          case 'end':
                            return a.stop();
                        }
                    }, a);
                  }),
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
              E = (function () {
                var a = Object(y.a)(
                  h.a.mark(function a(t) {
                    var l, r;
                    return h.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (l = new e.auth.GoogleAuthProvider()).addScope('profile'),
                              l.addScope('email'),
                              (a.next = 6),
                              e.auth().signInWithPopup(l)
                            );
                          case 6:
                            (r = a.sent), console.log({ userLoggedIn: r });
                          case 8:
                          case 'end':
                            return a.stop();
                        }
                    }, a);
                  }),
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })();
            return r.a.createElement(
              'div',
              null,
              r.a.createElement(
                'div',
                { className: 'row justify-content-center' },
                r.a.createElement(
                  'div',
                  { className: 'col-xl-10 col-lg-12 col-md-9' },
                  r.a.createElement(
                    'div',
                    { className: 'card o-hidden border-0 shadow-lg my-5' },
                    r.a.createElement(
                      'div',
                      { className: 'card-body p-0' },
                      r.a.createElement(
                        'div',
                        { className: 'row' },
                        r.a.createElement('div', {
                          className: 'col-lg-6 d-none d-lg-block bg-login-image',
                        }),
                        r.a.createElement(
                          'div',
                          { className: 'col-lg-6' },
                          r.a.createElement(
                            'div',
                            { className: 'p-5' },
                            r.a.createElement(
                              'div',
                              { className: 'text-center' },
                              r.a.createElement(
                                'h1',
                                { className: 'h4 text-gray-900 mb-4' },
                                'Bienvenido!',
                              ),
                            ),
                            r.a.createElement(
                              'form',
                              { className: 'user', onSubmit: p, noValidate: !0 },
                              r.a.createElement(
                                'div',
                                { className: 'form-group' },
                                r.a.createElement('input', {
                                  type: 'email',
                                  className: 'form-control form-control-user',
                                  id: 'exampleInputEmail',
                                  'aria-describedby': 'emailHelp',
                                  placeholder: 'Correo Electronico',
                                  onChange: function (e) {
                                    return n(e.target.value);
                                  },
                                }),
                              ),
                              r.a.createElement(
                                'div',
                                { className: 'form-group' },
                                r.a.createElement('input', {
                                  type: 'password',
                                  className: 'form-control form-control-user',
                                  id: 'exampleInputPassword',
                                  placeholder: 'Contrase\xf1a',
                                  onChange: function (e) {
                                    return d(e.target.value);
                                  },
                                }),
                              ),
                              r.a.createElement(
                                'div',
                                { className: 'form-group' },
                                r.a.createElement(
                                  'div',
                                  { className: 'custom-control custom-checkbox small' },
                                  r.a.createElement('input', {
                                    type: 'checkbox',
                                    className: 'custom-control-input',
                                    id: 'customCheck',
                                  }),
                                ),
                              ),
                              r.a.createElement(
                                'button',
                                {
                                  type: 'submit',
                                  disabled: !u,
                                  className: 'btn btn-primary btn-user btn-block',
                                },
                                'Iniciar Sesion',
                              ),
                              r.a.createElement('hr', null),
                              r.a.createElement(
                                'button',
                                {
                                  type: 'button',
                                  onClick: E,
                                  className: 'btn btn-google btn-user btn-block',
                                },
                                r.a.createElement('i', { className: 'fab fa-google fa-fw' }),
                                ' Iniciar con Google',
                              ),
                              r.a.createElement(
                                'button',
                                {
                                  type: 'button',
                                  className: 'btn btn-facebook btn-user btn-block',
                                },
                                r.a.createElement('i', { className: 'fab fa-facebook-f fa-fw' }),
                                ' Iniciar con Facebook',
                              ),
                            ),
                            r.a.createElement('hr', null),
                            r.a.createElement(
                              'div',
                              { className: 'text-center' },
                              r.a.createElement(
                                'a',
                                { className: 'small', href: 'forgot-password.html' },
                                '\xbfOlvidaste tu contrase\xf1a?',
                              ),
                            ),
                            r.a.createElement(
                              'div',
                              { className: 'text-center' },
                              r.a.createElement(
                                'a',
                                { className: 'small', href: 'register.html' },
                                '\xbfNo tienes un cuenta? Registrate gratis',
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }),
        k = (function (e) {
          Object(b.a)(t, e);
          var a = Object(f.a)(t);
          function t() {
            return Object(E.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(N.a)(t, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    'div',
                    { className: 'bg-gradient-primary' },
                    r.a.createElement(
                      'div',
                      { className: 'container' },
                      r.a.createElement(
                        'div',
                        { className: 'card o-hidden border-0 shadow-lg' },
                        r.a.createElement(
                          'div',
                          { className: 'card-body p-0' },
                          r.a.createElement(
                            'div',
                            { className: 'row' },
                            r.a.createElement('div', {
                              className: 'col-lg-5 d-none d-lg-block bg-register-image',
                            }),
                            r.a.createElement(
                              'div',
                              { className: 'col-lg-7' },
                              r.a.createElement(
                                'div',
                                { className: 'p-5' },
                                r.a.createElement(
                                  'div',
                                  { className: 'text-center' },
                                  r.a.createElement(
                                    'h1',
                                    { className: 'h4 text-gray-900 mb-4' },
                                    'Crear Cuenta!',
                                  ),
                                ),
                                r.a.createElement(
                                  'form',
                                  { className: 'user' },
                                  r.a.createElement(
                                    'div',
                                    { className: 'form-group row' },
                                    r.a.createElement(
                                      'div',
                                      { className: 'col-sm-6 mb-3 mb-sm-0' },
                                      r.a.createElement('input', {
                                        type: 'text',
                                        className: 'form-control form-control-user',
                                        id: 'exampleFirstName',
                                        placeholder: 'Nombre',
                                      }),
                                    ),
                                    r.a.createElement(
                                      'div',
                                      { className: 'col-sm-6' },
                                      r.a.createElement('input', {
                                        type: 'text',
                                        className: 'form-control form-control-user',
                                        id: 'exampleLastName',
                                        placeholder: 'Apellido',
                                      }),
                                    ),
                                  ),
                                  r.a.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    r.a.createElement('input', {
                                      type: 'email',
                                      className: 'form-control form-control-user',
                                      id: 'exampleInputEmail',
                                      placeholder: 'correo electronico',
                                    }),
                                  ),
                                  r.a.createElement(
                                    'div',
                                    { className: 'form-group row' },
                                    r.a.createElement(
                                      'div',
                                      { className: 'col-sm-6 mb-3 mb-sm-0' },
                                      r.a.createElement('input', {
                                        type: 'password',
                                        className: 'form-control form-control-user',
                                        id: 'exampleInputPassword',
                                        placeholder: 'Password',
                                      }),
                                    ),
                                    r.a.createElement(
                                      'div',
                                      { className: 'col-sm-6' },
                                      r.a.createElement('input', {
                                        type: 'password',
                                        className: 'form-control form-control-user',
                                        id: 'exampleRepeatPassword',
                                        placeholder: 'Confirmar Password',
                                      }),
                                    ),
                                  ),
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: 'login.html',
                                      className: 'btn btn-primary btn-user btn-block',
                                    },
                                    'Registrarse',
                                  ),
                                  r.a.createElement('hr', null),
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: '#',
                                      onClick: "console.log('The link was clicked.'); return false",
                                      className: 'btn btn-google btn-user btn-block',
                                    },
                                    r.a.createElement('i', { className: 'fab fa-google fa-fw' }),
                                    'Registrate con Google',
                                  ),
                                  r.a.createElement(
                                    'a',
                                    {
                                      href: '#',
                                      onClick: "console.log('The link was clicked.'); return false",
                                      className: 'btn btn-facebook btn-user btn-block',
                                    },
                                    r.a.createElement('i', {
                                      className: 'fab fa-facebook-f fa-fw',
                                    }),
                                    'Ingresar con Facebook',
                                  ),
                                ),
                                r.a.createElement('hr', null),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(l.Component),
        O = t(12),
        C = function (e) {
          var a = e.userData,
            t = a.lastname,
            l = a.name,
            c = a.occupation,
            n = a.biography;
          return r.a.createElement(
            'div',
            { className: 'card' },
            r.a.createElement('img', {
              className: 'card-img-top',
              src:
                'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg',
              alt: 'Bologna',
            }),
            r.a.createElement(
              'div',
              { className: 'card-body text-center' },
              r.a.createElement('img', {
                className: 'avatar rounded-circle',
                src: e.user.photoURL,
                alt: 'Bologna',
              }),
              r.a.createElement('h4', { className: 'card-title' }, l, ' ', t),
              r.a.createElement('h6', { className: 'card-subtitle mb-2 text-muted' }, c),
              r.a.createElement('p', { className: 'card-text' }, n),
              r.a.createElement(
                s.b,
                { to: '#', className: 'btn btn-circle btn-danger' },
                r.a.createElement('i', { className: 'fab fa-google fa-fw' }),
              ),
              r.a.createElement(
                s.b,
                { to: '#', className: 'btn btn-primary' },
                r.a.createElement('i', { className: 'fab fa-facebook-f fa-fw' }),
              ),
            ),
          );
        },
        S = function (e) {
          var a = e.user,
            t = Object(l.useState)(a.email.substring(0, a.email.indexOf('@'))),
            c = Object(w.a)(t, 2),
            n = c[0],
            s = c[1],
            m = Object(l.useState)(''),
            o = Object(w.a)(m, 2),
            i = o[0],
            d = o[1],
            u = Object(l.useState)(''),
            p = Object(w.a)(u, 2),
            E = p[0],
            N = p[1],
            f = Object(l.useState)(''),
            b = Object(w.a)(f, 2),
            v = b[0],
            g = b[1],
            h = Object(l.useState)(''),
            y = Object(w.a)(h, 2),
            x = y[0],
            k = y[1],
            O = Object(l.useState)(''),
            C = Object(w.a)(O, 2),
            S = C[0],
            j = C[1],
            I = Object(l.useState)(''),
            P = Object(w.a)(I, 2),
            R = P[0],
            L = P[1],
            D = Object(l.useState)(''),
            G = Object(w.a)(D, 2),
            T = G[0],
            A = G[1],
            B = Object(l.useState)(''),
            U = Object(w.a)(B, 2),
            W = U[0],
            J = U[1],
            F = Object(l.useState)(''),
            H = Object(w.a)(F, 2),
            M = H[0],
            _ = H[1];
          return r.a.createElement(
            'form',
            {
              className: 'user',
              onSubmit: function (t) {
                t.preventDefault(),
                  e.submit({
                    uid: a.uid,
                    email: a.email,
                    username: n,
                    lastname: v,
                    company: i,
                    name: E,
                    city: R,
                    country: T,
                    postalCode: W,
                    biography: M,
                    occupation: x,
                  });
              },
              noValidate: !0,
            },
            r.a.createElement(
              'div',
              { className: 'row' },
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-3 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputUsername',
                  value: n,
                  readOnly: !0,
                  onChange: function (e) {
                    return s(e.target.value);
                  },
                  maxLength: '15',
                  placeholder: 'Usuario',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-5 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'email',
                  className: 'form-control form-control-user',
                  id: 'inputCorreo',
                  value: a.email,
                  readOnly: !0,
                  placeholder: 'Correo',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-4 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputName',
                  value: i,
                  'aria-describedby': 'company',
                  onChange: function (e) {
                    return d(e.target.value);
                  },
                  placeholder: 'Empresa ',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-6 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputName',
                  value: E,
                  onChange: function (e) {
                    return N(e.target.value);
                  },
                  placeholder: 'Nombre',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-6 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputLastName',
                  value: v,
                  onChange: function (e) {
                    return g(e.target.value);
                  },
                  placeholder: 'Apellido',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-6 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputOcupation',
                  value: x,
                  onChange: function (e) {
                    return k(e.target.value);
                  },
                  placeholder: 'Ocupaci\xf3n',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-6 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'Inputaddress',
                  value: S,
                  onChange: function (e) {
                    return j(e.target.value);
                  },
                  placeholder: 'Direccion ',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-4 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputCity',
                  value: R,
                  onChange: function (e) {
                    return L(e.target.value);
                  },
                  placeholder: 'Cuidad',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-4 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'InputCountry',
                  value: T,
                  onChange: function (e) {
                    return A(e.target.value);
                  },
                  placeholder: 'Pais',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-lg-4 col-md-6 col-xs-12' },
                r.a.createElement('input', {
                  type: 'text',
                  className: 'form-control form-control-user',
                  id: 'inputPostalCode',
                  maxLength: '10',
                  value: W,
                  onChange: function (e) {
                    return J(e.target.value);
                  },
                  placeholder: 'Codigo Postal ',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-12' },
                r.a.createElement('textarea', {
                  className: 'form-control',
                  id: 'inputTextBiography',
                  placeholder: 'Biografia',
                  rows: '5',
                  value: M,
                  onChange: function (e) {
                    return _(e.target.value);
                  },
                  maxLength: '500',
                }),
              ),
              r.a.createElement(
                'div',
                { className: 'form-group col-md-6 offset-md-3' },
                r.a.createElement(
                  'button',
                  { className: 'btn btn-primary btn-user btn-block' },
                  'Editar',
                ),
              ),
            ),
          );
        },
        j = {
          USERS: 'users',
          LOGIN: '/login',
          SIGNUP: '/register',
          PROFILE: '/user-profile',
          ENTERPRISE: '/empresa',
          CONTACT: '/contacto',
          FORGOT_PASSWORD: '/olvido-password',
          JOBS_HIRING: '/busqueda-laboral',
          CHALLENGE: '/challenge',
          INTERVIEW: '/entrevista',
        },
        I =
          (t(49),
          function () {
            var e = Object(m.j)(),
              a = Object(l.useState)({}),
              t = Object(w.a)(a, 2),
              c = t[0],
              n = t[1],
              s = Object(m.h)();
            Object(l.useEffect)(function () {
              s.firestore()
                .collection(j.USERS)
                .doc(e.uid)
                .onSnapshot(function (e) {
                  n(e.data()), console.log(e.data());
                });
            }, []);
            return r.a.createElement(
              'div',
              { className: 'row' },
              r.a.createElement(
                'div',
                { className: 'col-lg-8 col-md-8 col-xs-12' },
                r.a.createElement(
                  'div',
                  { className: 'card' },
                  r.a.createElement(
                    'div',
                    { className: 'card-body' },
                    r.a.createElement(S, {
                      user: e,
                      submit: function (a) {
                        s.firestore()
                          .collection(j.USERS)
                          .doc(e.uid)
                          .set(a)
                          .then(function (e) {
                            return console.log(e);
                          });
                      },
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                'div',
                { className: 'col-lg-4 col-md-4 col-xs-12 col-sm-8' },
                r.a.createElement(C, { user: e, userData: c }),
              ),
            );
          }),
        P = function (e) {
          var a = e.content,
            t = e.type,
            l = e.buttonStyle,
            c = e.iconClass,
            n = void 0 === c ? null : c;
          return r.a.createElement(
            'button',
            { type: t, className: l },
            (function () {
              if (null !== n) return r.a.createElement('i', { className: 'icon' });
            })(),
            a,
          );
        },
        R = t(11),
        L = t.n(R),
        D = function (e) {
          var a = e.iconContent,
            t = e.buttonContent,
            c = e.handleSubmit,
            n = Object(l.useState)(''),
            s = Object(w.a)(n, 2),
            m = s[0],
            o = s[1],
            i = Object(l.useState)(''),
            d = Object(w.a)(i, 2),
            u = d[0],
            p = d[1],
            E = Object(l.useState)(''),
            N = Object(w.a)(E, 2),
            f = N[0],
            b = N[1];
          return r.a.createElement(
            'form',
            {
              onSubmit: function (e) {
                e.preventDefault(), c({ searchParam: m, category: u, city: f });
              },
              noValidate: !0,
              autoCapitalize: 'off',
              className: 'search-job',
            },
            r.a.createElement(
              'div',
              { className: 'row' },
              r.a.createElement(
                'div',
                { className: 'col-md' },
                r.a.createElement(
                  'div',
                  { className: 'form-group' },
                  r.a.createElement(
                    'div',
                    { className: 'form-field' },
                    r.a.createElement('div', { className: 'icon' }, a),
                    r.a.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      maxLength: '25',
                      value: m,
                      onChange: function (e) {
                        return o(e.target.value);
                      },
                      placeholder: 'ej. Dise\xf1ador, Programador Java ...',
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                'div',
                { className: 'col-md' },
                r.a.createElement(
                  'div',
                  { className: 'form-group' },
                  r.a.createElement(
                    'div',
                    { className: 'form-field' },
                    r.a.createElement(
                      'div',
                      { className: 'select-wrap' },
                      r.a.createElement(
                        'div',
                        { className: 'icon' },
                        r.a.createElement('span', { className: 'ion-ios-arrow-down' }),
                      ),
                      r.a.createElement(
                        'select',
                        {
                          name: 'selectCategory',
                          id: 'selectCategory',
                          className: 'form-control',
                          value: u,
                          onChange: function (e) {
                            return p(e.target.value);
                          },
                        },
                        r.a.createElement('option', { value: '' }, 'Categoria'),
                        r.a.createElement('option', { value: '' }, 'Full Time'),
                        r.a.createElement('option', { value: '' }, 'Part Time'),
                        r.a.createElement('option', { value: '' }, 'Freelance'),
                        r.a.createElement('option', { value: '' }, 'Temporario'),
                      ),
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                'div',
                { className: 'col-md' },
                r.a.createElement(
                  'div',
                  { className: 'form-group' },
                  r.a.createElement(
                    'div',
                    { className: 'form-field' },
                    r.a.createElement(
                      'div',
                      { className: 'icon' },
                      r.a.createElement('span', { className: 'icon-map-marker' }),
                    ),
                    r.a.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      value: f,
                      onChange: function (e) {
                        return b(e.target.value);
                      },
                      placeholder: 'Cuidad',
                    }),
                  ),
                ),
              ),
              r.a.createElement(
                'div',
                { className: 'col-md' },
                r.a.createElement(
                  'div',
                  { className: 'form-group' },
                  r.a.createElement(
                    'div',
                    { className: 'form-field' },
                    r.a.createElement(P, {
                      type: 'submit',
                      buttonStyle: 'form-control btn btn-primary',
                      content: t,
                      iconClass: 'fa fa-search',
                    }),
                  ),
                ),
              ),
            ),
          );
        };
      D.prototype = { iconContent: L.a.any.isRequired, buttonContent: L.a.string.isRequired };
      var G = function (e) {
          return r.a.createElement(
            'div',
            { className: 'row' },
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Juan Pedro'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Mobile Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Lady Jane'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Web Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Juan Pedro'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Mobile Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Juan Pedro'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Mobile Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Juan Pedro'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Mobile Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Juan Pedro'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Mobile Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'col-sm-4' },
              r.a.createElement(
                'div',
                { className: 'card' },
                r.a.createElement(
                  'div',
                  { className: 'card-body' },
                  r.a.createElement('img', {
                    src: 'http://placehold.it/64x64',
                    className: 'float-left rounded-circle',
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'message' },
                    r.a.createElement('h5', { className: 'card-title' }, 'Juan Pedro'),
                    r.a.createElement('p', { className: 'card-subtitle' }, 'Mobile Developer'),
                    r.a.createElement(
                      'p',
                      { className: 'card-text' },
                      'With supporting text below as a natural lead-in to additional content.',
                    ),
                    r.a.createElement(
                      'a',
                      { href: '#', className: 'btn btn-primary' },
                      'Go somewhere',
                    ),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'actions' },
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Like'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Reply'),
                    r.a.createElement('a', { href: '#', className: 'card-link' }, 'Share'),
                  ),
                ),
              ),
            ),
          );
        },
        T = function () {
          var e = function (e) {
            console.log({ seachFormValues: e });
          };
          return r.a.createElement(
            'div',
            { className: 'ftco-search' },
            r.a.createElement(
              'div',
              { className: 'row' },
              r.a.createElement(
                'div',
                { className: 'col-md-12 nav-link-wrap d-flex justify-content-center' },
                r.a.createElement(
                  'div',
                  {
                    className: 'nav nav-pills text-center',
                    id: 'v-pills-tab',
                    role: 'tablist',
                    'aria-orientation': 'vertical',
                  },
                  r.a.createElement(
                    'a',
                    {
                      className: 'nav-link active mr-md-1',
                      id: 'v-pills-1-tab',
                      'data-toggle': 'pill',
                      href: '#v-pills-1',
                      role: 'tab',
                      'aria-controls': 'v-pills-1',
                      'aria-selected': 'true',
                    },
                    'Buscar Empleo',
                  ),
                  r.a.createElement(
                    'a',
                    {
                      className: 'nav-link',
                      id: 'v-pills-2-tab',
                      'data-toggle': 'pill',
                      href: '#v-pills-2',
                      role: 'tab',
                      'aria-controls': 'v-pills-2',
                      'aria-selected': 'false',
                    },
                    'Buscar Candidato',
                  ),
                ),
              ),
              r.a.createElement(
                'div',
                { className: 'col-md-12 tab-wrap' },
                r.a.createElement(
                  'div',
                  { className: 'tab-content p-4', id: 'v-pills-tabContent' },
                  r.a.createElement(
                    'div',
                    {
                      className: 'tab-pane fade show active',
                      id: 'v-pills-1',
                      role: 'tabpanel',
                      'aria-labelledby': 'v-pills-nextgen-tab',
                    },
                    r.a.createElement(D, {
                      iconContent: r.a.createElement('i', {
                        className: 'fa fa-briefcase',
                        'aria-hidden': 'true',
                      }),
                      buttonContent: 'Buscar Empleo',
                      handleSubmit: e,
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    {
                      className: 'tab-pane fade',
                      id: 'v-pills-2',
                      role: 'tabpanel',
                      'aria-labelledby': 'v-pills-performance-tab',
                    },
                    r.a.createElement(D, {
                      iconContent: r.a.createElement('i', {
                        className: 'fa fa-user-circle',
                        'aria-hidden': 'true',
                      }),
                      buttonContent: 'Buscar Candidato',
                      handleSubmit: e,
                    }),
                  ),
                ),
              ),
            ),
            r.a.createElement(G, null),
          );
        },
        A = function () {
          return r.a.createElement(
            O.c,
            null,
            r.a.createElement(O.a, { path: u.LOGIN, component: x }),
            r.a.createElement(O.a, { path: u.SIGNUP, component: k }),
            r.a.createElement(O.a, { path: u.FORGOT_PASSWORD, component: p }),
            r.a.createElement(
              d,
              null,
              r.a.createElement(O.a, { exact: !0, path: u.HOME, component: v }),
              r.a.createElement(O.a, { path: u.PROFILE, component: I }),
              r.a.createElement(O.a, { path: u.JOBS_HIRING, component: T }),
            ),
          );
        },
        B =
          (t(52),
          t(53),
          function () {
            return r.a.createElement('div', { className: 'App' }, r.a.createElement(A, null));
          }),
        U =
          (t(54),
          {
            apiKey: 'AIzaSyDssZ7gs5HKvpAuoRbO_l2KotUMCeI9Sbo',
            authDomain: 'baudit-dev.firebaseapp.com',
            databaseURL: 'https://baudit-dev.firebaseio.com',
            projectId: 'baudit-dev',
            storageBucket: 'baudit-dev.appspot.com',
            messagingSenderId: '588249539701',
            appId: '1:588249539701:web:aaf4fb4d2f397fb0e6043c',
          });
      n.a.render(
        r.a.createElement(
          m.a,
          { firebaseConfig: U },
          r.a.createElement(
            l.Suspense,
            { fallback: r.a.createElement('p', null, 'Aguarde un instante ...') },
            r.a.createElement(s.a, null, r.a.createElement(B, null)),
          ),
        ),
        document.getElementById('root'),
      );
    },
  },
  [[35, 2, 3]],
]);
//# sourceMappingURL=main.3d0f88f0.chunk.js.map
