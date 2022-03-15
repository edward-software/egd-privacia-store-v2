'use strict';

import '../scss/public.scss';

global.$ = global.jQuery = require('jquery');

const moment = require('moment');
global.moment = moment;

import 'bootstrap';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/widgets/autocomplete';
import 'jquery-ui/ui/i18n/datepicker-fr';
import './tunnel/tunnel.js';

const Swal = require('sweetalert2');
global.Swal = Swal;
