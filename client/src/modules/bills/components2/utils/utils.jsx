import { format, getTime, formatDistanceToNow } from 'date-fns';
import axios from "axios";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { toast } from 'react-toastify';
import DOMPurify from "dompurify";

const api_base = 'http://localhost:5500/'
// const api_base = 'http://localhost/redbiller.com/blog/_api/';


export const Utils = function () {
    const ToastCloseButton = ({ closeToast, theme_color }) => (
        <button type='button' className={'p-1 border-0 mb-auto link link-' + theme_color} onClick={closeToast}>
            <i className='icon ki-outline ki-cross'></i>
        </button>
    );

    return {
        clean_html: str => {
            return DOMPurify.sanitize(str);
        },
        clean_object: obj => {
            return Object.entries(obj)
                .filter(([_, v]) => (v !== null && v !== ''))
                .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});;
        },
        toast: opts => {
            let msg = opts.text ? opts.text : 'An error occured',
                type = opts.type && ['error', 'danger', 'info', 'success', 'warning', 'primary'].includes(opts.type) ? opts.type : 'error',
                theme_color = type === 'error' ? 'danger' : type,
                theme_class = `notification-toast text-left min-h-50px shadow`,
                icon = '';
            switch (type) {
                case 'success':
                    icon = 'check-circle';
                    break
                case 'info':
                    icon = 'info';
                    break
                case 'warning':
                    icon = 'caution';
                    break
                case 'primary':
                    icon = 'bell';
                    break
                default:
                    icon = 'alert';
                    break
            }
            toast(<div className='d-flex align-items-center'>
                <em style={{ fontSize: '2.75em' }} className={`text-${theme_color} icon ni ni-${(opts.icon ? icon : icon)}`}></em>
                <div className='ml-2'>
                    {(opts.title ? <span className='font-size-lg font-weight-bold d-block m-0' style={{
                        color: '#212B36'
                    }}>{opts.title}</span> : '')}
                    <span className='font-size-sm text-body'>{msg}</span>
                </div>
            </div>, {
                // closeButton: <ToastCloseButton theme_color={theme_color} />,
                type: type,
                icon: false,
                position: opts.position ? opts.position : "bottom-right",
                autoClose: opts.delay ? opts.delay : true,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                // theme: (type === 'dark' || type === 'light') ? type : "colored",
                className: theme_class,
                bodyClassName: 'p-1'
            })
        },
        confirm: (opts) => {
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                icon: false,
                html:
                    <div style={{ textAlign: 'center', margin: 0, padding: 0 }}>
                        <div className='bg-lighter border-bottom align-center justify-center mb-2'>
                            <div className='w-70px h-70px border border-danger rounded-circle align-center justify-center p-3 m-3'>
                                <em className='icon ni ni-trash text-danger font-size-h1'></em>
                            </div>
                        </div>
                        <div style={{
                            padding: '0.75rem 1rem 1rem'
                        }}>
                            <h5 className='font-size-h6 text-dark font-weight-bold'>{opts.title ? opts.title : 'Confirm Action'}</h5>
                            <p className='text-body font-size-base'>{opts.text ? opts.text : 'Are you sure?'}</p>
                        </div>
                        <div className='d-flex justify-around p-3' >
                            <button className='btn btn-white btn-sm bg-transparent' onClick={e => {
                                e.preventDefault();
                                Swal.clickCancel()
                            }}>
                                Cancel
                            </button>
                            <button className="btn btn-outline-danger btn-sm ml-5" onClick={e => {
                                e.preventDefault();
                                Swal.clickConfirm();
                            }}>
                                Confirm
                            </button>
                        </div>
                    </div>,
                showConfirmButton: false,
                showCancelButton: false,
                allowOutsideClick: false,
                allowEscapeKey: true,
                allowEnterKey: false,
                customClass: {
                    popup: 'confirm-action'
                }
            }).then((e) => {
                if (e.isConfirmed && typeof opts.onConfirm === 'function') {
                    opts.onConfirm()
                } else if (typeof opts.onCancel === 'function') {
                    opts.onCancel()
                }
            })
        },
        fDate: function (date, newFormat) {
            const fm = newFormat || 'dd MMM yyyy';
            return date ? format(new Date(date), fm) : '';
        },
        fDateTime: function (date, newFormat) {
            const fm = newFormat || 'dd MMM yyyy p';
            return date ? format(new Date(date), fm) : '';
        },
        fTimestamp: function (date) {
            return date ? getTime(new Date(date)) : '';
        },
        fToNow: function (date) {
            return date
                ? formatDistanceToNow(new Date(date), {
                    addSuffix: true,
                })
                : '';
        },
        fNumber: function (num) {
            return new Intl.NumberFormat('en-GB', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(num);
        },
        fMoney: function (amt, cur = '') {
            const significant_nos = 3;
            let str_amt = amt.toString().toLowerCase(),
                decimal_digit_length = 15,
                amount = amt;
            if (!/e/ig.test(str_amt)) {
                var amt_parts = str_amt.split('.'),
                    new_str_amt = Number(amt_parts[0]),
                    decimal_part = amt_parts[1] ? amt_parts[1] : '';
                if (decimal_part.length > 0) {
                    let decimals = new Intl.NumberFormat('en-GB', {
                        maximumSignificantDigits: significant_nos,
                    }).format(`0.${decimal_part}`)
                    if (decimals.length < 15 && decimals.length > significant_nos) decimal_digit_length = decimals.length - 2;
                    new_str_amt += Number(decimals);
                }
                amount = new Intl.NumberFormat('en-GB', {
                    minimumFractionDigits: 2,
                    //maximumSignificantDigits:3,
                    maximumFractionDigits: decimal_digit_length
                }).format(new_str_amt);
            } else {
                amount = new Intl.NumberFormat('en-GB', {
                    minimumFractionDigits: 2,
                    minimumSignificantDigits: significant_nos,
                    maximumSignificantDigits: significant_nos,
                    maximumFractionDigits: decimal_digit_length
                }).format(amt);
            }
            return `${typeof cur == 'string' && cur.length > 0 ? cur : ''} ${amount}`.trim();
        },
        rand_str: function (length = 5) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }
}()
export const API = function () {
    const access_token = localStorage.getItem(''/*process.env.REACT_APP_TOKEN_KEY*/);
    if (access_token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
    axios.defaults.baseURL = api_base;
    const _request = (url, params = {}, headers = {}) => {
        let config = {
            headers: headers,
            timeout: 10000
        }
        let _req;
        if (params.type === 'POST') {
            config.headers = {
                'Content-Type': 'application/json',
                ...config.headers
            }
            _req = axios.post(url, params.data, config)
        } else {
            config.params = params?.params ? params.params : {}
            _req = axios.get(url, config)
        }
        return _req.then(resp => resp.data).catch(error => {
            // console.log('error', error);
            return error.response
        });
    }
    const controller = new AbortController();

    return {
        get: (url, params = {}) => {
            // if (!params.abort && (url === last_request?.url)) {
            //     controller.abort();
            // }
            // last_request = {
            //     url: url,
            //     params: JSON.stringify(params)
            // }
            console.log(url);
            return _request(url, {
                signal: controller.signal,
                params: params
            });
        },
        post: (url, params = {}) => {
            return axios.post(url, params, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => resp.data).catch(error => console.log('error', error));
        },
        request: _request
    }
}()

// ----------------------------------------------------------------------