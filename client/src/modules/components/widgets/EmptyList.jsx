import { Button } from "react-bootstrap"

export const EmptyList = ({ text = 'No records found', button }) => {
    return (
        <div className='d-flex flex-column flex-center p-16 min-h-400px'>

            <span className="fa-4x mb-5">
                <i className="la la-list fs-7x text-gray-400"></i>
                <i className="la la-times fs-2 ms-n5 bg-white p-1 rounded-circle border" style={{ color: 'Tomato', border: 'px solid tomato' }}></i>
            </span>
            <span>{text}</span>
            {button && <Button
                type={button.type ? button.type : 'default'}
                variant={button.variant ? button.variant : 'default'}
                className={button?.className}
                onClick={button.OnClick} />}
        </div>
    )
}