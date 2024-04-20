import { useState,useEffect } from "react"
import { Button } from "react-bootstrap"

export const copy_to_clipboard = (txt) => {
    navigator.clipboard.writeText(txt)
}


export const CopyButton = ({ text, className }) => {
    const [copied, setCopied] = useState();
    let classes = [...new Set([
        ...'btn-icon btn-sm btn-trigger'.split(' '),
        ...className.split(' ')])].join(' ')
    useEffect(() => {
        setCopied(false)
    }, [])
    return (<Button type='button' variant='' className={classes} onClick={e => {
        e.preventDefault()
        copy_to_clipboard(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 800);
    }}>
        <i className={'fs-3 ' + (copied ? ' ki-solid ki-copy-success text-success' : 'ki-copy ki-outline')}></i>
    </Button>)
}