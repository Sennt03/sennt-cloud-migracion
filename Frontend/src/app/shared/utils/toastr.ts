type NotificationFunction = (message: string, title: string) => void;
type OptionsNames = 'closeButton' | 'debug' | 'newestOnTop' | 'progressBar' | 'positionClass' | 'preventDuplicates' | 'onclick' | 'showDuration' | 'hideDuration' | 'timeOut' | 'extendedTimeOut' | 'showEasing' | 'hideEasing' | 'showMethod' | 'hideMethod'
type positionsClass = 'toast-top-right' | 'toast-bottom-right' | 'toast-bottom-left' | 'toast-top-left' | 'toast-top-full-width' | 'toast-bottom-full-width' | 'toast-top-center' | 'toast-bottom-center'

interface Options {
    closeButton: boolean,
    debug: boolean,
    newestOnTop: boolean,
    progressBar: boolean,
    positionClass: positionsClass,
    preventDuplicates: boolean,
    onclick: boolean | null,
    showDuration: number,
    hideDuration: number,
    timeOut: number,
    extendedTimeOut: number,
    showEasing: string,
    hideEasing: string,
    showMethod: string,
    hideMethod: string
}

// La constante toastr viene de la libreria importada, por esa razon en este codigo se realiza con constante y no una clase
declare const toastr: {
    error: NotificationFunction,
    success: NotificationFunction,
    warning: NotificationFunction,
    info: NotificationFunction,
    options: Options,
    setOption: (option: OptionsNames, value: string | number) => void,
    setDefaultsOptions: () => void
};

const optionsDefault: Options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 5000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
toastr.options = Object.assign({}, optionsDefault)

function setOption(option, value){
    toastr.options = Object.assign({}, optionsDefault)
    toastr.options[option] = value
}

function setDefaultsOptions(){
    toastr.options = Object.assign({}, optionsDefault)
}

toastr.setOption = setOption
toastr.setDefaultsOptions = setDefaultsOptions

export default toastr