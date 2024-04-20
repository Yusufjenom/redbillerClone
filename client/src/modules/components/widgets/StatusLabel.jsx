export const StatusLabel = ({ status }) => {
    const _status = (status ? status.toLowerCase() : '').trim();
    let status_color = ''

    switch (_status) {
        case 'pending': status_color = 'secondary'; break;
        case 'retried':
        case 'reversed':
            status_color = 'warning'; break;
        case 'failed':
        case 'cancelled':
        case 'declined':
            status_color = 'danger'; break;
        case 'approved':
        case 'successful':
            status_color = 'success'; break
        default: status_color = 'primary'; break
    }[];


    return (
        <div className={'d-inline-flex align-items-center mb-2 ps-3 pe-4 badge badge-light-' + status_color}>
            <span className={'bullet bullet-dot p-1 me-3 bg-' + status_color}></span>
            <span className='fw-bold'>{_status.toUpperCase()}</span>
        </div>
    )
}
